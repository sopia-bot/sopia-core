/*
 * live-socket.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import {
	WebSocketManager,
	WSType,
	LiveType,
	LiveEvent
} from '.';
import { Live } from '../struct/';
import { SpoonClient } from '../spoon/';

export class LiveSocket extends WebSocketManager {

	private _live!: Live;
	private _liveToken!: string;
	private _healthInterval!: any;
	private _intervalMsec: number = 300000; // 5min
	private _client: SpoonClient;

	constructor(live: Live, client: SpoonClient, wstype: WSType = WSType.SYSTEM) {
		super(wstype);
		this._live = live;
		this._client = client;
	}

	private health(): void {
		this.send({
			appversion: this.Client.appVersion,
			event: LiveEvent.LIVE_HEALTH,
			live_id: this.Live.id.toString(),
			type: LiveType.LIVE_RPT,
			useragent: this.Client.userAgent,
			user_id: this.Client.logonUser.id,
		});
	}

	get Live(): Live {
		return this._live;
	}

	get RoomToken(): string {
		return this._liveToken;
	}

	set RoomToken(val: string) {
		this._liveToken = val;
	}

	get Client(): SpoonClient {
		return this._client;
	}

	public message(message: string): void {
		this.send({
			type: LiveType.LIVE_RPT,
			event: LiveEvent.LIVE_MESSAGE,
			appversion: this.Client.appVersion,
			useragent: this.Client.userAgent,
			token: this.Client.token,
			message,
		});
	}

	public join (jwt: string): Promise<boolean> {
		this.RoomToken = jwt;
		return new Promise(async (resolve, reject) => {
			await this.connect(this.Client.urls.socket + this._live.id);

			this.send({
				live_id: this.Live.id.toString(),
				appversion: this.Client.appVersion,
				user_id: this.Client.logonUser.id,
				event: LiveEvent.LIVE_STATE,
				type: LiveType.LIVE_REQ,
				useragent: this.Client.userAgent,
			});
			this.once(LiveEvent.LIVE_STATE, (state: any) => {
				this.send({
					live_id: this.Live.id.toString(),
					appversion: this.Client.appVersion,
					retry: 0,
					token: this.RoomToken,
					event: LiveEvent.LIVE_JOIN,
					type: LiveType.LIVE_REQ,
					useragent: this.Client.userAgent,
				});
				this.once(LiveEvent.LIVE_JOIN, (join: any) => {
					if ( join.result ) {
						if ( join.result.detail === 'success' ) {
							this._healthInterval = setInterval(this.health, this._intervalMsec) as any;
							this.on(LiveEvent.LIVE_EVENT_ALL, (evt: any) => {
								const data = evt.data;
								if ( data ) {
									const live = data.live;
									if ( live && evt.event !== LiveEvent.LIVE_MESSAGE ) {
										this._live = live;
									}
								}
							});
							resolve(true);
						}
					}
					reject(false);
				});
			});
		});
	}

}
