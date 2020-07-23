/*
 * search-manager.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { ContentType } from '../enum/search';
import { User } from '../struct/user/user-struct';
import { Play } from '../struct/play-struct';

import { ApiManager } from './api-manager';
import { ApiSearchUser } from '../api/search/api-search-user';
import { ApiSearchContent } from '../api/search/api-search-content';

export class SearchManager {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async searchUser(keyword: string) {
		const apiSearchUser = new ApiManager(new ApiSearchUser(keyword), User.deserialize);
		const res = await apiSearchUser.send();
		return res;
	}

	async searchContent(keyword: string, content_type: ContentType = ContentType.LIVE) {
		const apiSearchContent = new ApiManager(new ApiSearchContent(keyword, content_type), Play.deserialize);
		const res = await apiSearchContent.send();
		return res;
	}
}
