/*
 * talk-manager.ts
 * Created on Sat Aug 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play } from '../struct/play-struct';

import { ApiManager } from './api-manager';
import { ApiTalks } from '../api/api-talks';
import { ApiTalksPopular } from '../api/talks/api-talks-popular';
import { ApiTalksTop } from '../api/talks/api-talks-top';

export class TalkManager {

	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async talkList(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiTalksList = new ApiManager<Play>(new ApiTalks(''), Play, this.Token);
		const res = await apiTalksList.send();

		return res;
	}

	async talkPopular(page_size: number = 6): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiTalksPopular = new ApiManager<Play>(new ApiTalksPopular(page_size), Play, this.Token);
		const res = await apiTalksPopular.send();

		return res;
	}

	async talkTop(): Promise<Play[]> /* for next, previous request */ {
		const apiTalksTop = new ApiManager<Play>(new ApiTalksTop(), Play, this.Token);
		const res = await apiTalksTop.send();

		return res.data;
	}

}
