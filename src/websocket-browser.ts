/*
 * websocket-browser.ts
 * Created on Thu Jul 02 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

export class WsClientBrowser extends WebSocket {
	constructor(url: string, option?: any) {
		super(url, option);
	}
}
