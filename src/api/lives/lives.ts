/*
 * banner.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { Category } from '../../';

export namespace ApiLivesBanner {

	export const url = '/lives/banner/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

}

export namespace ApiLivesPopular {

	export const url = '/lives/popular/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'page_size': number;

			'is_adult': boolean;

			'category': Category;

		};

	}

}
