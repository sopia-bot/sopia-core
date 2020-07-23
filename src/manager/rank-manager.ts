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

	async fanRank(date_type?: DateType) {
		const apiRanksFan = new ApiManager(new ApiRanksFan(date_type), Rank.deserialize);
		const res = await apiRanksFan.send();
		return res;
	}

	async liveBJRank(date_type?: DateType) {
		const apiRanksLiveBJ = new ApiManager(new ApiRanksLiveBJ(date_type), Rank.deserialize);
		const res = await apiRanksLiveBJ.send();
		return res;
	}

	async castBJRank(date_type?: DateType) {
		const apiRanksCastBJ = new ApiManager(new ApiRanksCastBJ(date_type), Rank.deserialize);
		const res = await apiRanksCastBJ.send();
		return res;
	}

	async castRank(date_type?: DateType) {
		const apiRanksCast = new ApiManager(new ApiRanksCast(date_type), Rank.deserialize);
		const res = await apiRanksCast.send();
		return res;
	}
}
