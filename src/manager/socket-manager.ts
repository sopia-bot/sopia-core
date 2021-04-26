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
import { deserialize } from 'typescript-json-serializer';
import { SpoonSocketEvent } from '../struct/socket-event-struct';

export class SocketManager extends WsManager {
	private live!: Play;
	private client!: Client;
	private healthInterval!: any;
	private liveToken!: string;

	constructor(live: (Play|number), client: Client) {
		super(client.wstype);
		if ( typeof live === 'number' ) {
			live = deserialize<Play>({ id: live }, Play);
		}
		this.live = live;
		this.client = client;
	}

	get Live() {
		return this.live;
	}

	private health(): void {
		const msg: any = {
			appversion: this.client.appVersion,
			event: LiveEvent.LIVE_HEALTH,
			live_id: this.live.id.toString(),
			type: LiveType.LIVE_RPT,
			useragent: this.client.userAgent,
			user_id: this.client.user.id,
		};

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

	async join (jwt: string): Promise<boolean> {
		this.liveToken = jwt;
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
						token: this.liveToken,
						event: LiveEvent.LIVE_JOIN,
						type: LiveType.LIVE_REQ,
						useragent: this.client.userAgent,
					});
					this.once(LiveEvent.LIVE_JOIN, (dd: any) => {
						if ( dd.result ) {
							if ( dd.result.detail === 'success' ) {
								this.healthInterval = setInterval(() => {
									this.health();
								}, 300 * 1000 /* 5min */) as any;
								this.on(LiveEvent.LIVE_EVENT_ALL, (evt: SpoonSocketEvent) => {
									const data = evt.data;
									if ( data ) {
										const live = data.live;
										if ( live && evt.event !== LiveEvent.LIVE_MESSAGE ) {
											this.live = live;
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
					live_id: this.live.id.toString(),
					appversion: this.client.appVersion,
					retry: 0,
					event: LiveEvent.LIVE_JOIN,
					type: LiveType.LIVE_REQ,
					useragent: this.client.userAgent,
				});
				this.once(LiveEvent.LIVE_JOIN, (d: any) => {
					if ( d.result ) {
						if ( d.result.detail === 'success' ) {
							this.healthInterval = setInterval(() => {
								this.health();
							}, 300 * 1000 /* 5min */) as any;
							this.on(LiveEvent.LIVE_EVENT_ALL, (evt: SpoonSocketEvent) => {
								const data = evt.data;
								if ( data ) {
									const live = data.live;
									if ( live && evt.event !== LiveEvent.LIVE_MESSAGE ) {
										this.live = live;
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

	public destroy(): void {
		this.send({
			live_id: this.live.id.toString(),
			appversion: this.client.appVersion,
			event: LiveEvent.LIVE_HEALTH,
			type: LiveType.LIVE_RPT,
			useragent: this.client.userAgent,
		});
		clearInterval(this.healthInterval);
		this.ws.close();
		this.destoryAllListener();
		this.client.liveSocketMap.delete(this.live.id);
	}
}
