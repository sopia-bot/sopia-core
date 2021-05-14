/*
 * api-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import {
	SPOON,
	ApiWrapperClient
} from '../';
import {
	ApiRequest,
	ApiGetProfileImgUrl
} from '../../api';

import { ProfileUrlInfo } from '../../struct/';

import axios from 'axios';

export class ApiClient extends SPOON {

	public api: ApiWrapperClient;

	constructor(deviceUUID: string) {
		super(deviceUUID);
		this.api = new ApiWrapperClient(this);
	}

	async ApiReq<Req, Res extends any>(api: any, id?: (number|Req), config?: Req): Promise<ApiRequest<Req, Res>> {
		if ( typeof id === 'number' ) {
			// empty
		} else {
			config = id as Req;
			id = 0;
		}

		const req = new ApiRequest<Req, Res>(this, config || {} as Req);
		req.url = api.url;
		req.method = api.method;
		req.debug = !!api.debug;
		req.id = id as number;

		const res = await req.send();

		return req;
	}

	async profileImgUpload(data: Buffer): Promise<string> {
		const req = await this.ApiReq<ApiGetProfileImgUrl.Request, ApiGetProfileImgUrl.Response>(ApiGetProfileImgUrl);
		const [{ image }] = req.res.results;

		const res = await axios({
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
