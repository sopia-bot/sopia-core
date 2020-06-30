/*
 * api-user-followings.ts
 * Created on Sat Jun 27 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';

export class ApiUserFollowings extends ApiRequest {
	constructor(UserId: number) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('followings');
	}
}
