/*
 * api-commons.ts
 * Created on Thu Jan 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiCommons extends ApiRequest {
	constructor(api: string) {
		super('commons');
		this.addSubUrl(api);
	}
}

