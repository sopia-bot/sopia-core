/*
 * ws-manager.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { SpoonSocketEvent } from '../struct/socket-event-struct';
import { WebSocketEvent, WebSocketEventData, WebSocketRankOrder, WebSocketResult } from '../struct/websocket-struct';
import { EventManager } from './event-manager';

export class WsManager extends EventManager {
	protected ws!: any;

	private receiver( msg: MessageEvent ) {
		const data = SpoonSocketEvent.deserialize(JSON.parse(msg.data));
		this.emit(data.event, data);
	}

	constructor(
	) {
		super();
	}

	async connect ( url: string, option?: any ) {
		return new Promise((resolve, reject) => {
			try {
				if ( typeof window !== 'undefined' ) {
					const { WsClientBrowser } = require('../websocket-browser');
					this.ws = new WsClientBrowser(url, option);
				} else {
					const { WsClientNode } = require('../websocket-node');
					this.ws = new WsClientNode(url);
				}
				this.ws.onmessage = (msg: MessageEvent) => {
					this.receiver(msg);
				}
				this.ws.onerror = console.error;
				this.ws.onclose = () => {
					console.log('Socket close');
				};
				this.ws.once('open', () => {
					resolve(true);
				});
			} catch(err) {
				reject(err);
			}
		});
	}

	send ( data: any ) {
		const sendData: any = data;
		console.log(data);
		this.ws.send(JSON.stringify(sendData));
	}
}
