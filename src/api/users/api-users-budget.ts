/*
 * api-users-budget.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';

export class ApiUsersBudget extends ApiUsers {
	constructor() {
		super('budget');
	}
}
