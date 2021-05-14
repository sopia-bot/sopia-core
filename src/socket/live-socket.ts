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
			appversion: this.Client.AppVersion,
			event: LiveEvent.LIVE_HEALTH,
			live_id: this.Live.id.toString(),
			type: LiveType.LIVE_RPT,
			useragent: this.Client.UserAgent,
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
			appversion: this.Client.AppVersion,
			useragent: this.Client.UserAgent,
			token: this.Client.Token,
			message,
		});
	}

	async join (jwt: string): Promise<boolean> {
		this.RoomToken = jwt;
		return new Promise(async (resolve, reject) => {
			await this.connect(this.Client.urls.socket + this._live.id);

			if ( this.Client.logonUser ) {
				this.send({
					live_id: this.Live.id.toString(),
					appversion: this.Client.AppVersion,
					user_id: this.Client.logonUser.id,
					event: LiveEvent.LIVE_STATE,
					type: LiveType.LIVE_REQ,
					useragent: this.Client.UserAgent,
				});
				this.once(LiveEvent.LIVE_STATE, (d: any) => {
					this.send({
						live_id: this.Live.id.toString(),
						appversion: this.Client.AppVersion,
						retry: 0,
						token: this.RoomToken,
						event: LiveEvent.LIVE_JOIN,
						type: LiveType.LIVE_REQ,
						useragent: this.Client.UserAgent,
					});
					this.once(LiveEvent.LIVE_JOIN, (dd: any) => {
						if ( dd.result ) {
							if ( dd.result.detail === 'success' ) {
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
			} else {
				this.send({
					live_id: this.Live.id.toString(),
					appversion: this.Client.AppVersion,
					retry: 0,
					event: LiveEvent.LIVE_JOIN,
					type: LiveType.LIVE_REQ,
					useragent: this.Client.UserAgent,
				});
				this.once(LiveEvent.LIVE_JOIN, (d: any) => {
					if ( d.result ) {
						if ( d.result.detail === 'success' ) {
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
			}
		});
	}

}