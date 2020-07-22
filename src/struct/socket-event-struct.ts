/*
 * socket-event-struct.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Play } from './play-struct';
import { User } from './user/user-struct';
import { WebSocketEvent, WebSocketEventData, WebSocketRankOrder, WebSocketResult } from '../struct/websocket-struct';
import { Struct } from './struct';


export class SpoonSocketEvent implements Struct<SpoonSocketEvent> {
	public event!: string;
	public type!: string;
	public data?: WebSocketEventData;
	public rooms?: number;
	public liveId?: number;
	public userAgent?: string;
	public appVersion?: string;
	public reconnect?: boolean;
	public order?: WebSocketRankOrder;
	public result?: WebSocketResult;
	public token?: string;
	public userId?: number;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};
		if ( this.event ) {
			obj['event'] = this.event;
		}

		if ( this.type ) {
			obj['type'] = this.type;
		}

		if ( this.rooms ) {
			obj['rooms'] = this.rooms;
		}

		if ( this.liveId ) {
			obj['live_id'] = this.liveId;
		}

		if ( this.userAgent ) {
			obj['useragent'] = this.userAgent;
		}

		if ( this.appVersion ) {
			obj['appversion'] = this.appVersion;
		}

		if ( typeof this.reconnect !== 'object' ) {
			obj['reconnect'] = this.reconnect;
		}

		if ( this.order ) {
			obj['order'] = this.order;
		}

		if ( this.result ) {
			obj['result'] = this.result;
		}

		if ( this.token ) {
			obj['token'] = this.token;
		}

		if ( this.userId ) {
			obj['user_id'] = this.userId;
		}

		return obj;
	}

	readRawData(data: any): void {
		if ( data['event'] ) {
			this.event = data['event'];
		}

		if ( data['type'] ) {
			this.type = data['type'];
		}

		if ( data['rooms'] ) {
			this.rooms = Number(data['rooms']);
		}

		if ( data['live_id'] ) {
			this.liveId = Number(data['live_id']);
		}

		if ( data['useragent'] ) {
			this.userAgent = data['useragent'];
		}

		if ( data['appversion'] ) {
			this.appVersion = data['appversion'];
		}

		if ( typeof data['reconnect'] !== 'undefined' ) {
			this.reconnect = data['reconnect'];
		}

		if ( data['order'] ) {
			this.order = data['order'];
		}

		if ( data['result'] ) {
			this.result = data['result'];
		}

		if ( data['user_id'] ) {
			this.userId = data['user_id'];
		}

		if ( data['token'] ) {
			this.token = data['token'];
		}

		if ( data['data'] ) {
			this.data = {};
			if ( data['data']['live'] ) {
				this.data['live'] = Play.deserialize(data['data']['live']);
			}

			if ( data['data']['author'] ) {
				this.data['author'] = User.deserialize(data['data']['author']);
			}

			if ( data['data']['message'] ) {
				this.data['message'] = data['data']['message'];
			}
		}
	}

	static deserialize(data: any): SpoonSocketEvent {
		const spoonSocketEvent = new SpoonSocketEvent();
		spoonSocketEvent.readRawData(data);
		return spoonSocketEvent;
	}
}

