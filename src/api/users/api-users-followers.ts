/*
 * api-users-followers.ts
 * Created on Sat Jun 27 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user/user-struct';

export class ApiUsersFollowers extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('followers');
	}
}
