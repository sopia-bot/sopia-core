/*
 * api-user-unfollow.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';

export class ApiUserUnfollow extends ApiRequest {
	constructor(UserId: number) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('unfollow');
		this.method = 'post';
	}
}
