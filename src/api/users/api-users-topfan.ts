/*
 * api-users-topfan.ts
 * Created on Mon Jul 27 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user/user-struct';

export class ApiUsersTopfan extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('top_fan');
	}
}
