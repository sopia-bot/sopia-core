/*
 * api-ranks.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiRanks extends ApiRequest {
	constructor(api: string) {
		super('ranks');
		this.addSubUrl(api);
	}
}
