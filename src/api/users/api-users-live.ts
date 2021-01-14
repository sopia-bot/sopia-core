/*
 * api-users-live.ts
 * Created on Thu Jan 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user-struct';

export class ApiUsersLive extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('live');
	}
}
