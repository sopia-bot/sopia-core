/*
 * api-users.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { User } from '../struct/user/user-struct';

export class ApiUsers extends ApiRequest {
	constructor(api: string) {
		super('users');
		this.addSubUrl(api);
	}
}
