/*
 * spoon-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { LoginClient } from './login-client';

export class SpoonClient extends LoginClient {

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async init() {
		if ( !this._isInit ) {
			await this.initUrlsInfo();
			await this.initSticker();
			this._isInit = true;
		}
	}

}

