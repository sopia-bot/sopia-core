/*
 * lives.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiClient } from '../';
import { ApiRequest } from '../../api/';
import { Live, User } from '../../struct/';
import * as API from '../../api/lives/';

export class LiveApiWrapper {

	private _client: ApiClient;

	constructor(client: ApiClient) {
		this._client = client;
	}

	private get client(): ApiClient {
		return this._client;
	}

	public async banner(): Promise<Live[]> {
		const req = await this.client.ApiReq<API.ApiLivesBanner.Request, API.ApiLivesBanner.Response>(API.ApiLivesBanner);
		return req.res.results;
	}

	public async popular(): Promise<ApiRequest<Live, API.ApiLivesPopular.Request>> {
		const req = await this.client.ApiReq<Live, API.ApiLivesPopular.Request>(API.ApiLivesPopular);
		return req;
	}

	public async subcribed(): Promise<ApiRequest<Live, API.ApiLivesSubcribed.Request>> {
		const req = await this.client.ApiReq<Live, API.ApiLivesSubcribed.Request>(API.ApiLivesSubcribed);
		return req;
	}

}
