/*
 * content.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { Live, Cast } from '../../struct/';

export namespace ApiSearchContent {

	export const url = '/search/content/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'keyword': string;

			'content_type': 'live'|'cast'|'talk';

		};

	}

	// TODO: Unknown response data type
	export interface Response extends Live,Cast {

	}


}
