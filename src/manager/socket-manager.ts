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
	constructor(
		private live: Play,
		private client: Client
	) {
		super();
	}

	health() {
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

	async join () {
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
			this.once('live_state', (d: any) => {
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
		}
	}
}
