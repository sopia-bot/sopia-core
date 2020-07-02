/*
 * websocket-browser.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SpoonSocketEvent } from './struct/socket-event-struct';
import { WebSocketEvent } from './struct/websocket-struct';

export class WsClientBrowser extends WebSocket {
	private _events: WebSocketEvent = {};

	constructor(url: string, option?: any) {
		super(url, option);
		this.onmessage = (data: MessageEvent) => this.emit('message', data);
		this.onopen = () => this.emit('open');
		this.onclose = () => this.emit('close');
		this.onerror = (data: Event) => this.emit('error', data);
	}

	on (key: string, callback: (data?: (MessageEvent|Event|SpoonSocketEvent)) => void) {
		if ( this._events[key] ) {
			this._events[key].push(callback);
		} else {
			this._events[key] = [
				callback,
			];
		}
	}

	emit (key: string, data?: (MessageEvent|Event|SpoonSocketEvent)) {
		if ( this._events[key] ) {
			for ( const evt of this._events[key] ) {
				evt(data);
			}
		}
	}
}
