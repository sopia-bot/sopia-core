/*
 * login.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { AxiosRequestConfig } from 'axios';
import { LoginType, Country } from '../../spoon/';
import { ApiResult } from '../';

export namespace ApiLogin {

	export const URL = '/signin/';
	export const METHOD = 'POST';

	export interface Request extends AxiosRequestConfig {

		'data': {

			'sns_type': LoginType;

			'sns_id': (number|string);

			'password': string;

			'country': Country;

		};

	}

}
