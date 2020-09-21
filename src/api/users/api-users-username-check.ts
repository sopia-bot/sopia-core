/*
 * api-users-username.ts
 * Created on Mon Sep 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';
import { User } from '../../struct/user-struct';

export class ApiUsersUsernameCheck extends ApiUsers {
	constructor(username: string) {
		super('username');
		this.params = {
			username,
		};
	}
}
