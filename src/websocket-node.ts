/*
 * websocket-node.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SpoonSocketEvent } from './struct/socket-event-struct';
import { WebSocketEvent } from './struct/websocket-struct';
import * as WebSocket from 'ws';

export class WsClientNode extends WebSocket {
	constructor(url: string) {
		super(url, {
			headers: {
				'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36',
			},
		});
	}

	close() {
		this.terminate();
	}
}
