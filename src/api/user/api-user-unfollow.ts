/*
 * api-user-unfollow.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';

export class ApiUserUnfollow extends ApiUserInfo {
	constructor(UserId: number) {
		super(UserId);
		this.addSubUrl('unfollow');
		this.method = 'post';
	}
}
