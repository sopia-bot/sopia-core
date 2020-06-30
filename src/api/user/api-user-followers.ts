/*
 * api-user-followers.ts
 * Created on Sat Jun 27 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';

export class ApiUserFollowers extends ApiRequest {
	constructor(UserId: number) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('followers');
	}
}
