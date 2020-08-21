/*
 * cast-manager.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play } from '../struct/play-struct';
import { UserSponsor } from '../struct/user-struct';

import { ApiManager } from './api-manager';
import { ApiCasts } from '../api/api-casts';
import { ApiCastsInfo } from '../api/casts/api-casts-info';
import { ApiCastsSponsor } from '../api/casts/api-casts-sponsor';
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

	async castInfo(cast: (Play|number)): Promise<Play> {
		const apiCastsInfo = new ApiManager<Play>(new ApiCastsInfo(cast), Play);
		const res = await apiCastsInfo.send();

		return res.data[0];
	}

	async castSponsor(cast: (Play|number)): Promise<ApiManager<UserSponsor>> /* for next, previous request */ {
		const apiCastsSponsor = new ApiManager<UserSponsor>(new ApiCastsSponsor(cast), UserSponsor);
		const res = await apiCastsSponsor.send();

		return res;
	}

	async castMain(page_size: number = 6): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiCastsMain = new ApiManager<Play>(new ApiCastsMain(page_size), Play);
		const res = await apiCastsMain.send();

		return res;
	}

	async castList(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiCasts = new ApiManager<Play>(new ApiCasts(''), Play);
		const res = await apiCasts.send();

		return res;
	}

	async castToday(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiCastsToday = new ApiManager<Play>(new ApiCastsToday(), Play);
		const res = await apiCastsToday.send();

		return res;
	}

	async castPopular(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiCastsPopular = new ApiManager<Play>(new ApiCastsPopular(), Play);
		const res = await apiCastsPopular.send();

		return res;
	}
}
