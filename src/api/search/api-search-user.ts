/*
 * api-search-user.ts
 * Created on Wed Oct 07 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiSearch } from '../api-search';
import { ContentType } from '../../enum/search';

export class ApiSearchUser extends ApiSearch {
	constructor(keyword: string) {
		super('user');
		this.params = {
			keyword,
		};
	}
}
