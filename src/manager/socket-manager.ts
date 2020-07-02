/*
 * socket-manager.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { WsManager } from './ws-manager';
import { Client } from '../client';

export class SocketManager {
	constructor(
		private client: Client
	) {
	}
}
