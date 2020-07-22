/*
 * api-users-mini-profile.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user/user-struct';

export class ApiUsersMiniProfile extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('mini_profile');
	}
}
