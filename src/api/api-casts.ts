/*
 * api-casts.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiCasts extends ApiRequest {
	constructor(api: string) {
		super('casts');
		this.addSubUrl(api);
	}
}
