/*
 * cast-manager.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { ApiManager } from './api-manager';
import { ApiCastsMain } from '../api/casts/api-casts-main';

export class CastManager {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async castMain(page_size: number = 6): Promise<ApiManager> /* No have class for data deserialize */ {
		const apiCastsMain = new ApiManager(new ApiCastsMain(page_size));
		const res = await apiCastsMain.send();

		return res.data;
	}
}
