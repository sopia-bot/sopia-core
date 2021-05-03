/*
 * content.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiSearchContent {

	export const url = '/search/content/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'keyword': string;

			'content_type': 'live'|'cast'|'talk';

		};

	}

}
