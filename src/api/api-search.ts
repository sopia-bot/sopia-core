/*
 * api-search.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiSearch extends ApiRequest {
	constructor(api: string) {
		super('search');
		this.addSubUrl(api);
	}
}
