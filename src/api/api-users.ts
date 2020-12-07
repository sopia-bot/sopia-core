/*
 * api-users.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { User } from '../struct/user-struct';

type ApiUsersType = (string|User|number);

export class ApiUsers extends ApiRequest {
	constructor(api: ApiUsersType) {
		super('users');

		if ( api instanceof User ) {
			api = api.id;
		}
		this.addSubUrl(api as string);
	}
}
