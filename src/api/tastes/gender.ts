/*
 * gender.ts
 * Created on Wed Apr 28 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiTastesGender {

	export const url = '/tastes/gender/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}

export namespace ApiTastesGenderChoice {

	export const url = '/tastes/gender/choice/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}

export namespace ApiTastesSetGenderChoice {

	export const url = '/tastes/gender/choice/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {
			'taste_data_ids': number[];
		};

	}

}
