/*
 * live-category.ts
 * Created on Wed Apr 28 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiTastesLiveCategory {

	export const url = '/tastes/live-category/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}

export namespace ApiTastesLiveCategoryChoice {

	export const url = '/tastes/live-category/choice/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {
			'lang': string;
		};

	}

}
