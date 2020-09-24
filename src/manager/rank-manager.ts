/*
 * rank-manager.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { DateType } from '../enum/rank-type';
import { Rank } from '../struct/rank-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiRanksFan } from '../api/ranks/api-ranks-fan';
import { ApiRanksLiveBJ } from '../api/ranks/api-ranks-livebj';
import { ApiRanksCastBJ } from '../api/ranks/api-ranks-castbj';
import { ApiRanksCast } from '../api/ranks/api-ranks-cast';

export class RankManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async fanRank(date_type?: DateType): Promise<Rank[]> {
		const res = await this.ApiReq<Rank>(Rank, ApiRanksFan, date_type);

		return res.data;
	}

	async liveBJRank(date_type?: DateType): Promise<Rank[]> {
		const res = await this.ApiReq<Rank>(Rank, ApiRanksLiveBJ, date_type);

		return res.data;
	}

	async castBJRank(date_type?: DateType): Promise<Rank[]> {
		const res = await this.ApiReq<Rank>(Rank, ApiRanksCastBJ, date_type);

		return res.data;
	}

	async castRank(date_type?: DateType): Promise<Rank[]> {
		const res = await this.ApiReq<Rank>(Rank, ApiRanksCast, date_type);

		return res.data;
	}
}
