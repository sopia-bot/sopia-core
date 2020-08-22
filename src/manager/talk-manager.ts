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
		const apiCasts = new ApiManager<Play>(new ApiTalks(''), Play);
		const res = await apiCasts.send();

		return res;
	}

}
