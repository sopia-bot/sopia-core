/*
 * api-search-user.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiSearch } from '../api-search';

export class ApiSearchUser extends ApiSearch {
	constructor(keyword: string) {
		super('user');
		this.params = {
			keyword,
		};
	}
}
