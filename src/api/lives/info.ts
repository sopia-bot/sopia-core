/*
 * info.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { RequestConfig, ApiLivesRequestConfig } from '../';
import * as A from '../../struct/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

export namespace ApiLivesInfo {

	export const url = '/lives/0000/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	@Serializable()
	export class Response {

	}

}

export namespace ApiLivesListeners {

	export const url = '/lives/0000/listeners/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	@Serializable()
	export class Response {

		constructor() {

		}

	}

}

export namespace ApiLivesListenersFans {

	export const url = '/lives/0000/listeners/fans';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	@Serializable()
	export class Response {

		constructor() {

		}

	}

}

export namespace ApiLivesSponsor {

	export const url = '/lives/0000/sponsor/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	/* TODO: */
	/* 아마도 count: number, author: User 형식으로 있을 것 같음 */
	@Serializable()
	export class Response {

		constructor() {

		}

	}

}

export namespace ApiLivesLike {

	export const url = '/lives/0000/like/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	@Serializable()
	export class Response {

		constructor() {

		}

	}

}

export namespace ApiLivesToken {

	export const url = '/lives/0000/token/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {

			'device_unique_id': string;

		};

	}

	@Serializable()
	export class Response {

		'jwt': string;

		'items': any[]; // unknown type

	}

}

export namespace ApiLivesAccess {

	export const url = '/lives/0000/access/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	@Serializable()
	export class Response {

	}

}
