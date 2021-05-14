/*
 * password.ts
 * Created on Wed Apr 28 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiSetPassword {

	export const url = '/accounts/password/';
	export const method = 'PUT';

	export interface Request extends RequestConfig {

		'data': {

			'new_password': string;

		};

	}

	// unknown response
	export interface Response {

	}

}
