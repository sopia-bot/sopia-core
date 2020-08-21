/*
 * api-users-fanmessages.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user-struct';

export class ApiUsersFanmessages extends ApiUsersInfo {
	constructor(user: (User|number), contents?: string) {
		super(user);
		this.addSubUrl('fanmessages');

		if ( typeof contents === 'string' ) {
			this.data = { contents };
			this.method = 'post';
		}
	}
}
