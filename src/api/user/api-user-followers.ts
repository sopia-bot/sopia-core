/*
 * api-user-followers.ts
 * Created on Sat Jun 27 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';

export class ApiUserFollowers extends ApiUserInfo {
	constructor(UserId: number) {
		super(UserId);
		this.addSubUrl('followers');
	}
}
