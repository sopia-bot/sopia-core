/*
 * lives.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { RequestConfig } from '../';
import { Category } from '../../';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

import * as A from '../';
console.log(__filename, A);

class Live {}

export namespace ApiLivesBanner {

	export const url = '/lives/banner/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	@Serializable()
	export class Response extends Live {

		constructor() {

			super();

		}

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

	@Serializable()
	export class Response extends Live {

		constructor() {

			super();

		}

	}

}

export namespace ApiLivesSubcribed {

	export const url = '/lives/subcribed/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'page_size': number;

			'is_adult': boolean;

		};

	}

	@Serializable()
	export class Response extends Live {

		constructor() {

			super();

		}

	}

}
