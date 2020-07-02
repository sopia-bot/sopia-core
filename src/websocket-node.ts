/*
 * websocket-node.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SpoonSocketEvent } from './struct/socket-event-struct';
import { WebSocketEvent } from './struct/websocket-struct';

const WS = require('ws');
export class WsClientNode extends WS {
	constructor(url: string, option?: any) {
		super(url, option);
	}
}
