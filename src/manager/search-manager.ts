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
import { ApiSearchUser } from '../api/search/api-search-user';
import { ApiSearchTag } from '../api/search/api-search-tag';

export class SearchManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async searchContent(keyword: string, content_type: ContentType = ContentType.USER): Promise<ApiManager<Play>> {
		const res = await this.ApiReq<Play>(Play, ApiSearchContent, keyword, content_type);
		return res;
	}

	async searchUser(keyword: string): Promise<ApiManager<User>> {
		const res = await this.ApiReq<User>(User, ApiSearchUser, keyword);
		return res;
	}

	async searchTag(keyword: string): Promise<ApiManager<void>> /* do not have return struct */ {
		const res = await this.ApiReq<void>(undefined, ApiSearchTag, keyword);
		return res;
	}

	async search(keyword: string, content_type: ContentType = ContentType.USER): Promise<ApiManager<any>> {
		let res;
		switch( content_type ) {
			case ContentType.USER:
				res = await this.searchUser(keyword);
				break;
			case ContentType.LIVE:
			case ContentType.CAST:
			case ContentType.TALK:
				res = await this.searchContent(keyword, content_type);
				break;
			case ContentType.TAG:
				res = await this.searchTag(keyword);
				break;
			default:
				throw Error('Unknown content type ' + content_type);
		}

		return res;
	}
}
