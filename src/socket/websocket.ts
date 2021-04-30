/*
 * websocket.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { EventEmitter } from '../utils/';
import { WSType, LiveEvent } from './enum/';

export class WebSocketManager extends EventEmitter {

	protected ws!: any;

	constructor(private engine: WSType) {
		super();
	}

	private receiver( msg: MessageEvent ): void {
		const data: any = JSON.parse(msg.data);
		this.emit(data.event, data);
		this.emit(LiveEvent.LIVE_EVENT_ALL, data);
	}

	async connect ( url: string, option?: any ): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				if ( (this.engine === WSType.SYSTEM && typeof window !== 'undefined') || (this.engine === WSType.WEB) ) {
					const { WsClientBrowser } = require('./websocket-browser');
					this.ws = new WsClientBrowser(url, option);
				} else {
					const { WsClientNode } = require('./websocket-node');
					this.ws = new WsClientNode(url);
				}
				this.ws.onmessage = this.receiver;
				this.ws.onerror = console.error;
				this.ws.onclose = () => {};
				this.ws.onopen = () => {
					resolve(true);
				};
			} catch(err) {
				reject(err);
			}
		});
	}

	send ( data: any ): void {
		const sendData: any = data;
		if ( sendData.token ) {
			if ( !sendData.token.match(/^Bearer/) ) {
				sendData.token = 'Bearer ' + sendData.token;
			}
		}
		this.ws.send(JSON.stringify(sendData));
	}

}
