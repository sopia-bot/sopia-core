/*
 * talk-manager.ts
 * Created on Sat Aug 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play } from '../struct/play-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiTalks } from '../api/api-talks';
import { ApiTalksPopular } from '../api/talks/api-talks-popular';
import { ApiTalksTop } from '../api/talks/api-talks-top';
import { ApiTalksInfo } from '../api/talks/api-talks-info';

export class TalkManager extends Manager {

	constructor(client: Client) {
		super(client);
	}

	async talkList(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiTalks, '');

		return res;
	}

	async talkPopular(page_size: number = 6): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiTalksPopular, page_size);

		return res;
	}

	async talkTop(): Promise<Play[]> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiTalksTop);

		return res.data;
	}

	async talkInfo(talk: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiTalksInfo, talk);

		if ( res.data.length < 1 ) {
			throw Error('No have live info');
		}

		return res.data[0];
	}

}
