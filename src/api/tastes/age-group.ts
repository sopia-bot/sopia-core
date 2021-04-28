/*
 * age-group.ts
 * Created on Wed Apr 28 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiTastesAgeGroup {

	export const url = '/tastes/age-group/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}

export namespace ApiTastesAgeGroupChoice {

	export const url = '/tastes/ape-group/choice/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}

export namespace ApiTastesSetAgeGroupChoice {

	export const url = '/tastes/ape-group/choice/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {
			'taste_data_ids': number[];
		};

	}

}
