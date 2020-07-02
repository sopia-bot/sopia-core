/*
 * ws-manager.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { SpoonSocketEvent } from '../struct/socket-event-struct';
import { WebSocketEvent, WebSocketEventData, WebSocketRankOrder, WebSocketResult } from '../struct/websocket-struct';

export class WsManager {
	private ws!: any;
	private _events: WebSocketEvent = {};
	private _onceEvents: WebSocketEvent = {};

	private receiver( msg: MessageEvent ) {
		const data = SpoonSocketEvent.deserialize(JSON.parse(msg.data));
		this.emit(data.event, data);
	}

	constructor(
		private client: Client
	) {
	}

	connect ( url: string, option?: any ) {
		if ( typeof window !== 'undefined' ) {
			const { WsClientBrowser } = require('../websocket-browser');
			this.ws = new WsClientBrowser(url, option);
		} else {
			const { WsClientNode } = require('../websocket-node');
			this.ws = new WsClientNode(url, option);
		}
		this.ws.on('message', this.receiver);
	}

	on ( key: string, callback: (data: any) => void ) {
		if ( this._events[key] ) {
			this._events[key].push(callback);
		} else {
			this._events[key] = [
				callback,
			];
		}
	}

	once ( key: string, callback: (data: any) => void ) {
		if ( this._onceEvents[key] ) {
			this._onceEvents[key].push(callback);
		} else {
			this._onceEvents[key] = [
				callback,
			];
		}
	}

	emit ( key: string, data: SpoonSocketEvent ) {
		if ( this._events[key] ) {
			for ( const evt of this._events[key] ) {
				evt(data);
			}

			for ( const evt of this._onceEvents[key] ) {
				evt(data);
			}
			this._onceEvents[key] = [];
		}
	}

	send ( data: SpoonSocketEvent ) {
		const sendData: any = data.toJSON();
		this.ws.send(JSON.stringify(sendData));
	}
}
