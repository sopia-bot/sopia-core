/*
 * api-users-info.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';
import { User } from '../../struct/user-struct';

export class ApiUsersInfo extends ApiUsers {
	constructor(user: (User|number)) {
		if ( user instanceof User ) {
			super(user.id.toString());
		} else {
			super(user.toString());
		}
	}
}
