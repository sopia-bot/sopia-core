/*
 * token.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { AxiosRequestConfig } from 'axios';
import { LoginType } from '../../spoon/';

export namespace ApiTokens {

	export const url = '/tokens/';
	export const method = 'POST';

	export interface Request extends AxiosRequestConfig {

		'data': {

			'device_unique_id': string;

			'auth_data': {

				'act_type': LoginType;

				'password': string;

				'msisdn': (number|string);

			};

		};

	}

	export interface Response {

		'jwt': string;

		'refresh_token': string;

	}

}
