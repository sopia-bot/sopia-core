/*
 * api-user-info.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';

export class ApiUserInfo extends ApiUsers {
	constructor(
		private UserId: number
	) {
		super(UserId.toString());
	}
}
