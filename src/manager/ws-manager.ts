/*
 * ws-manager.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { SpoonSocketEvent, WebSocketEvent, WebSocketEventData, WebSocketRankOrder, WebSocketResult } from '../struct/socket-event-struct';
import { EventManager } from './event-manager';
import { deserialize } from 'typescript-json-serializer';
import { LiveEvent } from '../enum/socket-live';
import { WSType } from '../client';

export class WsManager extends EventManager {
	protected ws!: any;

	private receiver( msg: MessageEvent ): void {
		const data = deserialize<SpoonSocketEvent>(JSON.parse(msg.data), SpoonSocketEvent);
		this.emit(data.event, data);
		this.emit(LiveEvent.LIVE_EVENT_ALL, data);
	}

	constructor(private engine: WSType) {
		super();
	}

	async connect ( url: string, option?: any ): Promise<boolean> {
		return new Promise((resolve, reject) => {
			try {
				if ( (this.engine === WSType.SYSTEM && typeof window !== 'undefined') || (this.engine === WSType.WEB) ) {
					const { WsClientBrowser } = require('../websocket-browser');
					this.ws = new WsClientBrowser(url, option);
				} else {
					const { WsClientNode } = require('../websocket-node');
					this.ws = new WsClientNode(url);
				}
				this.ws.onmessage = (msg: MessageEvent) => {
					this.receiver(msg);
				};
				this.ws.onerror = console.error;
				this.ws.onclose = () => {
					console.log('Socket close');
				};
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
