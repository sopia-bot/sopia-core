/*
 * login.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { LoginType, Country } from '../../spoon/';
import { LogonUser } from '../../struct/';
import { ApiResult, RequestConfig } from '../';

export namespace ApiLogin {

	export const url = '/signin/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {

			'sns_type': LoginType;

			'sns_id': (number|string);

			'password': string;

			'country': Country;

		};

	}

	export interface Response extends LogonUser {

	}

}
