/*
 * websocket.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { EventEmitter } from '../utils/';
import { WSType, LiveEvent } from './enum/';
import * as EventStruct from './struct/';
import { deserialize } from 'typescript-json-serializer';

export class WebSocketManager extends EventEmitter {

	protected ws!: any;

	constructor(private engine: WSType) {
		super();
	}

	private eventMapper(socket: EventStruct.LiveSocketStruct): any {
		switch ( socket.event ) {
			case LiveEvent.LIVE_STATE:
				return deserialize<EventStruct.LiveStateSocket>(socket, EventStruct.LiveStateSocket);
			case LiveEvent.LIVE_JOIN:
				return deserialize<EventStruct.LiveJoinSocket>(socket, EventStruct.LiveJoinSocket);
			case LiveEvent.LIVE_RANK:
				return deserialize<EventStruct.LiveRankSocket>(socket, EventStruct.LiveRankSocket);
			case LiveEvent.LIVE_RANKLIST:
				return deserialize<EventStruct.LiveRankListSocket>(socket, EventStruct.LiveRankListSocket);
			case LiveEvent.LIVE_MESSAGE:
				return deserialize<EventStruct.LiveMessageSocket>(socket, EventStruct.LiveMessageSocket);
			case LiveEvent.LIVE_LAZY_UPDATE:
				return deserialize<EventStruct.LiveLazyUpdateSocket>(socket, EventStruct.LiveLazyUpdateSocket);
			case LiveEvent.LIVE_LIKE:
				return deserialize<EventStruct.LiveLikeSocket>(socket, EventStruct.LiveLikeSocket);
			case LiveEvent.LIVE_PRESENT:
				return deserialize<EventStruct.LivePresentSocket>(socket, EventStruct.LivePresentSocket);
			case LiveEvent.LIVE_UPDATE:
				return deserialize<EventStruct.LiveUpdateSocket>(socket, EventStruct.LiveUpdateSocket);
			case LiveEvent.LIVE_PLAY:
				return deserialize<EventStruct.LivePlaySocket>(socket, EventStruct.LivePlaySocket);
		}
		return socket as any;
	}

	private receiver( msg: MessageEvent ): void {
		const data: any = JSON.parse(msg.data);
		const m = this.eventMapper(data);
		this.emit(m.event, m);
		this.emit(LiveEvent.LIVE_EVENT_ALL, m);
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
				this.ws.onmessage = this.receiver.bind(this);
				this.ws.onerror = console.error;
				this.ws.onclose = () => { /* empty */ };
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
