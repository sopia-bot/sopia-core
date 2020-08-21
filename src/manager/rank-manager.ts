/*
 * rank-manager.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { DateType } from '../enum/rank-type';
import { Rank } from '../struct/rank-struct';

import { ApiManager } from './api-manager';
import { ApiRanksFan } from '../api/ranks/api-ranks-fan';
import { ApiRanksLiveBJ } from '../api/ranks/api-ranks-livebj';
import { ApiRanksCastBJ } from '../api/ranks/api-ranks-castbj';
import { ApiRanksCast } from '../api/ranks/api-ranks-cast';

export class RankManager {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async fanRank(date_type?: DateType): Promise<Rank[]> {
		const apiRanksFan = new ApiManager<Rank>(new ApiRanksFan(date_type), Rank);
		const res = await apiRanksFan.send();

		return res.data;
	}

	async liveBJRank(date_type?: DateType): Promise<Rank[]> {
		const apiRanksLiveBJ = new ApiManager<Rank>(new ApiRanksLiveBJ(date_type), Rank);
		const res = await apiRanksLiveBJ.send();

		return res.data;
	}

	async castBJRank(date_type?: DateType): Promise<Rank[]> {
		const apiRanksCastBJ = new ApiManager<Rank>(new ApiRanksCastBJ(date_type), Rank);
		const res = await apiRanksCastBJ.send();

		return res.data;
	}

	async castRank(date_type?: DateType): Promise<Rank[]> {
		const apiRanksCast = new ApiManager<Rank>(new ApiRanksCast(date_type), Rank);
		const res = await apiRanksCast.send();

		return res.data;
	}
}
