/*
 * socket-manager.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { WsManager } from './ws-manager';
import { Client } from '../client';
import { LiveEvent, LiveType } from '../enum/socket-live';
import { Play } from '../struct/play-struct';

export class SocketManager extends WsManager {
	private live!: Play;
	private client!: Client;
	private healthInterval!: any;

	constructor(live: (Play|number), client: Client) {
		super();
		if ( typeof live === 'number' ) {
			live = Play.deserialize({ id: live });
		}

		this.live = live;
		this.client = client;
	}

	health(): void {
		const msg: any = {
			appversion: this.client.appVersion,
			event: LiveEvent.LIVE_HEALTH,
			live_id: this.live.id,
			type: LiveType.LIVE_RPT,
			useragent: this.client.userAgent,
		}

		if ( this.client.user ) {
			msg['user_id'] = this.client.user.id;
		}

		this.send(msg);
	}

	public message(message: string): void {
		this.send({
			type: LiveType.LIVE_RPT,
			event: LiveEvent.LIVE_MESSAGE,
			appversion: this.client.appVersion,
			useragent: this.client.userAgent,
			token: this.client.token,
			message,
		});
	}

	async join (): Promise<boolean> {
		return new Promise(async (resolve, reject) => {
			await this.connect(this.client.api.socket + this.live.id);

			if ( this.client.user ) {
				this.send({
					live_id: this.live.id.toString(),
					appversion: this.client.appVersion,
					user_id: this.client.user.id,
					event: LiveEvent.LIVE_STATE,
					type: LiveType.LIVE_REQ,
					useragent: this.client.userAgent,
				});
				this.once(LiveEvent.LIVE_STATE, (d: any) => {
					this.send({
						live_id: this.live.id.toString(),
						appversion: this.client.appVersion,
						retry: 0,
						reconnect: false,
						token: this.client.token,
						event: LiveEvent.LIVE_JOIN,
						type: LiveType.LIVE_REQ,
						useragent: this.client.userAgent,
					});
					this.once(LiveEvent.LIVE_JOIN, (d: any) => {
						if ( d.result ) {
							if ( d.result.detail === 'success' ) {
								this.healthInterval = <any>setInterval(() => {
									this.health();
								}, 10 * 1000 /* 10sec */);
								resolve(true);
							}
						}
						reject(false);
					});
				});
			} else {
				this.send({
					live_id: this.live.id.toString(),
					appversion: this.client.appVersion,
					retry: 0,
					reconnect: false,
					event: LiveEvent.LIVE_JOIN,
					type: LiveType.LIVE_REQ,
					useragent: this.client.userAgent,
				});
				this.once(LiveEvent.LIVE_JOIN, (d: any) => {
					if ( d.result ) {
						if ( d.result.detail === 'success' ) {
							this.healthInterval = <any>setInterval(() => {
								this.health();
							}, 10 * 1000 /* 10sec */);
							resolve(true);
						}
					}
					reject(false);
				});
			}
		});
	}
}
