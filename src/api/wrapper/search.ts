/*
 * search.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiClient } from '../';
import {
	ApiRequest,
	ApiSearchContent,
	ApiSearchUser,
} from '../../api/';
import { Live, User, Cast } from '../../struct/';
import * as API from '../../api/search/';

export type ApiSearchReq<T, R> = Promise<ApiRequest<T, R>>;
export type ApiContentReq<R> = ApiSearchReq<ApiSearchContent.Request, R>;
export type ContentResponse = ApiSearchContent.LiveResponse | ApiSearchContent.CastResponse;

export class SearchApiWrapper {

	private _client: ApiClient;

	constructor(client: ApiClient) {
		this._client = client;
	}

	private get client(): ApiClient {
		return this._client;
	}

	private async content(content_type: 'live'|'cast'|'talk', keyword: string): ApiContentReq<ContentResponse> {
		const req = await this.client.ApiReq<ApiSearchContent.Request, ContentResponse>(ApiSearchContent, {
			'params': {
				keyword,
				content_type,
			},
		});
		return req;
	}

	public async user(keyword: string): ApiSearchReq<ApiSearchUser.Request, ApiSearchUser.Response> {
		const req = await this.client.ApiReq<ApiSearchUser.Request, ApiSearchUser.Response>(ApiSearchUser, {
			'params': {
				keyword,
			},
		});
		return req;
	}

	public async live(keyword: string): ApiContentReq<ApiSearchContent.LiveResponse> {
		return await this.content('live', keyword) as ApiRequest<ApiSearchContent.Request, ApiSearchContent.LiveResponse>;
	}

	public async cast(keyword: string): ApiContentReq<ApiSearchContent.CastResponse> {
		return await this.content('cast', keyword) as ApiRequest<ApiSearchContent.Request, ApiSearchContent.CastResponse>;
	}

}
