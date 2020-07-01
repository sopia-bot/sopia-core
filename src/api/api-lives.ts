/*
 * api-lives.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiLives extends ApiRequest {
	constructor(api: string) {
		super('lives');
		this.addSubUrl(api);
	}
}
