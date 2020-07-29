/*
 * cast-manager.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play } from '../struct/play-struct';

import { ApiManager } from './api-manager';
import { ApiCasts } from '../api/api-casts';
import { ApiCastsMain } from '../api/casts/api-casts-main';
import { ApiCastsToday } from '../api/casts/api-casts-today';
import { ApiCastsPopular } from '../api/casts/api-casts-popular';

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

	async castMain(page_size: number = 6): Promise<ApiManager> /* for next, previous request */ {
		const apiCastsMain = new ApiManager(new ApiCastsMain(page_size));
		const res = await apiCastsMain.send();

		return res;
	}

	async castList(): Promise<ApiManager> /* for next, previous request */ {
		const apiCasts = new ApiManager(new ApiCasts(''), Play.deserialize);
		const res = await apiCasts.send();

		return res;
	}

	async castToday(): Promise<ApiManager> /* for next, previous request */ {
		const apiCastsToday = new ApiManager(new ApiCastsToday(), Play.deserialize);
		const res = await apiCastsToday.send();

		return res;
	}

	async castPopular(): Promise<ApiManager> /* for next, previous request */ {
		const apiCastsPopular = new ApiManager(new ApiCastsPopular(), Play.deserialize);
		const res = await apiCastsPopular.send();

		return res;
	}
}
