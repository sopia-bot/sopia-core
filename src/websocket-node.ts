/*
 * websocket-node.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SpoonSocketEvent } from './struct/socket-event-struct';
import { WebSocketEvent } from './struct/websocket-struct';

const WebSocket = require('ws');
export class WsClientNode extends WebSocket {
	constructor(url: string) {
		super(url);
	}
}
