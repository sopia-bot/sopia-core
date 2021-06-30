/*
 * api-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { SpoonClient } from '../../spoon/';
import { ProfileUrlInfo } from '../../struct/';
import { ApiGetProfileImgUrl, ApiResult } from '../';
import { HttpRequest } from './request';
import { LivesApiWrapper } from '../wrapper/';


import axios from 'axios';

export class ApiClient {

	private API_DEBUG: boolean = false;

	public lives: LivesApiWrapper;

	constructor(private _client: SpoonClient) {
		this.lives = new LivesApiWrapper(this._client);
		this.request = this.request.bind(this);
	}

	private createRequestUrl(api: any, id: number) {
		return `${this._client.urls.api}${api.url.replace(/^\//, '').replace('0000', id.toString())}`;
	}

	async request<Req, Res extends any>(api: any, id?: (number|Req), config?: Req): Promise<HttpRequest<Req, Res>> {
		if ( typeof id === 'number' ) {
			// empty
		} else {
			config = id as Req;
			id = 0;
		}

		const req = new HttpRequest<Req, Res>(api, config || {} as Req);

		req.url = this.createRequestUrl(api, id);
		req.method = api.method;
		req.headers['Authorization'] = 'Bearer ' + this._client.token;
		req.debug = !!api.debug || this.API_DEBUG;

		const res = await req.send();

		return req;
	}

	async profileImgUpload(data: Buffer): Promise<string> {
		const req = await this.request<ApiGetProfileImgUrl.Request, ApiGetProfileImgUrl.Response>(ApiGetProfileImgUrl);
		const [{ image }] = req.res.results;

		const res = await HttpRequest.Run({
			url: image.url,
			method: 'PUT',
			headers: {
				'Content-Type': image.content_type,
			},
			data,
		});

		return image.key;
	}

}
