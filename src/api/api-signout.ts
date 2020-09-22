/*
 * api-signout.ts
 * Created on Tue Sep 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiSignout extends ApiRequest {
	constructor() {
		super('signout');
		this.method = 'DELETE';
	}
}
