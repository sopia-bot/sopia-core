/*
 * websocket-struct.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Play } from '../struct/play-struct';
import { User } from '../struct/user/user-struct';
import { SpoonSocketEvent } from './socket-event-struct';

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
	[key: string]: { (data?: (MessageEvent|Event|SpoonSocketEvent)): void }[];
}
