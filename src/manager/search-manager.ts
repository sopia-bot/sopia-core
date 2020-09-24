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
import { ApiSearchUser } from '../api/search/api-search-user';
import { ApiSearchContent } from '../api/search/api-search-content';

export class SearchManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async searchUser(keyword: string): Promise<ApiManager<User>> {
		const res = await this.ApiReq<User>(User, ApiSearchUser, keyword);

		return res;
	}

	async searchContent(keyword: string, content_type: ContentType = ContentType.LIVE): Promise<ApiManager<Play>> {
		const res = await this.ApiReq<User>(Play, ApiSearchContent, keyword, content_type);

		return res;
	}
}
