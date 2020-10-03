/*
 * api-search-content.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiSearch } from '../api-search';
import { ContentType } from '../../enum/search';

export class ApiSearchContent extends ApiSearch {
	constructor(keyword: string, content_type: ContentType = ContentType.USER) {
		super(content_type);
		this.params = {
			q: keyword,
		};
	}
}
