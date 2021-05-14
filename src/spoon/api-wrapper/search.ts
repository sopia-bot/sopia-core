/*
 * search.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiClient } from '../';
import { ApiRequest } from '../../api/';
import { Live, User, Cast } from '../../struct/';
import * as API from '../../api/search/';

export class SearchApiWrapper {

	private _client: ApiClient;

	constructor(client: ApiClient) {
		this._client = client;
	}

	private get client(): ApiClient {
		return this._client;
	}

	private async content<T>(content_type: 'live'|'cast'|'talk', keyword: string): Promise<ApiRequest<T, API.ApiSearchContent.Request>> {
		const req = await this.client.ApiReq<T, API.ApiSearchContent.Request>(API.ApiSearchContent, {
			'params': {
				keyword,
				content_type,
			},
		});
		return req;
	}

	public async user(keyword: string): Promise<ApiRequest<User, API.ApiSearchUser.Request>> {
		const req = await this.client.ApiReq<User, API.ApiSearchUser.Request>(API.ApiSearchUser, {
			'params': {
				keyword,
			},
		});
		return req;
	}

	public async live(keyword: string): Promise<ApiRequest<Live, API.ApiSearchContent.Request>> {
		return await this.content<Live>('live', keyword);
	}

	public async cast(keyword: string): Promise<ApiRequest<Cast, API.ApiSearchContent.Request>> {
		return await this.content<Cast>('cast', keyword);
	}

}
