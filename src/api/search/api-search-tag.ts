/*
 * api-search-tag.ts
 * Created on Wed Oct 07 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiSearch } from '../api-search';
import { ContentType } from '../../enum/search';

export class ApiSearchTag extends ApiSearch {
	constructor(keyword: string) {
		super('tag');
		this.params = {
			keyword,
		};
	}
}
