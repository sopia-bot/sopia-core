/*
 * search-manager.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { ContentType } from '../enum/search';
import { User } from '../struct/user-struct';
import { Play } from '../struct/play-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiSearchContent } from '../api/search/api-search-content';

export class SearchManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async search(keyword: string, content_type: ContentType = ContentType.USER): Promise<ApiManager<User|Play>> {
		let res;
		if ( content_type === ContentType.USER ) {
			res = await this.ApiReq<User>(User, ApiSearchContent, keyword, content_type);
		} else {
			res = await this.ApiReq<Play>(Play, ApiSearchContent, keyword, content_type);
		}

		return res;
	}
}
