/*
 * api-users-update.ts
 * Created on Mon Sep 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';
import { User } from '../../struct/user-struct';
import { serialize } from 'typescript-json-serializer';

export class ApiUsersUpdate extends ApiUsers {
	constructor(user: (User|any)) {
		super(user.id.toString());
		this.method = 'PUT';
		if ( user instanceof User ) {
			this.data = serialize(user);
		} else {
			this.data = user;
		}
	}
}
