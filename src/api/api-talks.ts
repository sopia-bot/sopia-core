/*
 * api-talks.ts
 * Created on Sat Aug 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiTalks extends ApiRequest {
	constructor(api: string) {
		super('talks');
		this.addSubUrl(api);
	}
}
