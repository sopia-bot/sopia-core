/*
 * websocket-struct.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Play } from './play-struct';
import { User } from './user-struct';
import { SpoonSocketEvent } from './socket-event-struct';

export type EventArgument = MessageEvent|Event|SpoonSocketEvent;
export type EventCallbackFunc = (data?: EventArgument) => void;

export interface WebSocketResult {
	code: number;
	detail: string;
}

export interface WebSocketRankOrder {
	now: string;
	prev: string;
	incrby: number;
	effect: string;
}

export interface WebSocketEventData {
	message?: string;
	live?: Play;
	author?: User;
}

export interface WebSocketEvent {
	[key: string]: EventCallbackFunc[];
}
