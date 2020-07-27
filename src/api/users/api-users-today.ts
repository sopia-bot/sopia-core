/*
 * api-users-today.ts
 * Created on Mon Jul 27 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';

export class ApiUsersToday extends ApiUsers {
	constructor() {
		super('today');
	}
}
