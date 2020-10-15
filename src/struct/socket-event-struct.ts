/*
 * socket-event-struct.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Play } from './play-struct';
import { User } from './user-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class WebSocketResult {

	constructor(

		@JsonProperty('code')
		public code: number,

		@JsonProperty('detail')
		public detail: string

	) {
	}

}

@Serializable()
export class WebSocketRankOrder {

	constructor(

		@JsonProperty('now')
		public now: string,

		@JsonProperty('prev')
		public prev: string,

		@JsonProperty('incrby')
		public incrby: number,

		@JsonProperty('effect')
		public effect: string

	) {
	}

}

@Serializable()
export class WebSocketEventData {

	constructor(

		@JsonProperty('message')
		public message: string,

		@JsonProperty('live')
		public live: Play,

		@JsonProperty('author')
		public author: User

	) {
	}

}

@Serializable()
export class LiveCommandDetail {

	constructor(

		@JsonProperty('command')
		public command: string,

		@JsonProperty('state')
		public state: string,

		@JsonProperty('user')
		public user: User

	) {
	}

}

@Serializable()
export class SpoonSocketEvent {

	constructor(

		@JsonProperty('event')
		public event: string,

		@JsonProperty('type')
		public type: string,

		@JsonProperty('data')
		public data: WebSocketEventData,

		@JsonProperty('detail')
		public detail: LiveCommandDetail,

		@JsonProperty('rooms')
		public rooms: number,

		@JsonProperty('live_id')
		public liveId: number,

		@JsonProperty('useragent')
		public userAgent: string,

		@JsonProperty('appversion')
		public appVersion: string,

		@JsonProperty('reconnect')
		public reconnect: boolean,

		@JsonProperty('order')
		public order: WebSocketRankOrder,

		@JsonProperty('result')
		public result: WebSocketResult,

		@JsonProperty('token')
		public token: string,

		@JsonProperty('user_id')
		public userId: number

	) {}

}

export type EventArgument = MessageEvent|Event|SpoonSocketEvent;
export type EventCallbackFunc = (data?: EventArgument) => void;

export interface WebSocketEvent {
	[key: string]: EventCallbackFunc[];
}
