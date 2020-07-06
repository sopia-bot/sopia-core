/*
 * websocket-browser.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SpoonSocketEvent } from './struct/socket-event-struct';
import { WebSocketEvent } from './struct/websocket-struct';
import { EventManager } from './manager/event-manager';

export class WsClientBrowser extends EventManager {
	private ws!: WebSocket;

	constructor(url: string, option?: any) {
		super();
		this.ws = new WebSocket(url, option);
		this.ws.onmessage = (data: MessageEvent) => this.emit('message', data);
		this.ws.onopen = () => this.emit('open');
		this.ws.onclose = () => this.emit('close');
		this.ws.onerror = (data: Event) => this.emit('error', data);
	}

	send (data: any) {
		this.ws.send(data);
	}

	close () {
		this.ws.close();
	}
}
