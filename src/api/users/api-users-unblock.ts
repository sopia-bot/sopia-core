/*
 * api-users-unblock.ts
 * Created on Mon Dec 07 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';
import { User } from '../../struct/user-struct';

export class ApiUsersUnblock extends ApiUsers {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('unblock');
		this.method = 'post';
	}
}
