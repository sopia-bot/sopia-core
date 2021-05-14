/*
 * user.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { User } from '../../struct/';

export namespace ApiSearchUser {

	export const url = '/search/user/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'keyword': string;

		};

	}

	// TODO: Unknown response data type
	export interface Response extends User {

	}


}
