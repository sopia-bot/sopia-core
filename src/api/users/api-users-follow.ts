/*
 * api-users-follow.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user/user-struct';

export class ApiUsersFollow extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('follow');
		this.method = 'post';
	}
}
