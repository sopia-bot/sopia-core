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

	private async content(content_type: 'live'|'cast'|'talk', keyword: string): Promise<ApiRequest<API.ApiSearchContent.Request, API.ApiSearchContent.Response>> {
		const req = await this.client.ApiReq<API.ApiSearchContent.Request, API.ApiSearchContent.Response>(API.ApiSearchContent, {
			'params': {
				keyword,
				content_type,
			},
		});
		return req;
	}

	public async user(keyword: string): Promise<ApiRequest<API.ApiSearchUser.Request, API.ApiSearchUser.Response>> {
		const req = await this.client.ApiReq<API.ApiSearchUser.Request, API.ApiSearchUser.Response>(API.ApiSearchUser, {
			'params': {
				keyword,
			},
		});
		return req;
	}

	public async live(keyword: string): Promise<ApiRequest<API.ApiSearchContent.Request, API.ApiSearchContent.Response>> {
		return await this.content('live', keyword);
	}

	public async cast(keyword: string): Promise<ApiRequest<API.ApiSearchContent.Request, API.ApiSearchContent.Response>> {
		return await this.content('cast', keyword);
	}

}
