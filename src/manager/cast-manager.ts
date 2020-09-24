/*
 * cast-manager.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play } from '../struct/play-struct';
import { UserSponsor } from '../struct/user-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiCasts } from '../api/api-casts';
import { ApiCastsInfo } from '../api/casts/api-casts-info';
import { ApiCastsSponsor } from '../api/casts/api-casts-sponsor';
import { ApiCastsMain } from '../api/casts/api-casts-main';
import { ApiCastsToday } from '../api/casts/api-casts-today';
import { ApiCastsPopular } from '../api/casts/api-casts-popular';

export class CastManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async castInfo(cast: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiCastsInfo, cast);

		return res.data[0];
	}

	async castSponsor(cast: (Play|number)): Promise<ApiManager<UserSponsor>> /* for next, previous request */ {
		const res = await this.ApiReq<UserSponsor>(UserSponsor, ApiCastsSponsor, cast);

		return res;
	}

	async castMain(page_size: number = 6): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiCastsMain, page_size);

		return res;
	}

	async castList(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiCasts, '');

		return res;
	}

	async castToday(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiCastsToday);

		return res;
	}

	async castPopular(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiCastsPopular);

		return res;
	}
}
