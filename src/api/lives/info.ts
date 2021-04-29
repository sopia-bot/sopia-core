/*
 * info.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { RequestConfig, ApiLivesRequestConfig } from '../';

export namespace ApiLivesListeners {

	export const url = '/lives/0000/listeners/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiLivesListenersFans {

	export const url = '/lives/0000/listeners/fans';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiLivesSponsor {

	export const url = '/lives/0000/sponsor/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiLivesLike {

	export const url = '/lives/0000/like/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

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

}

export namespace ApiLivesAccess {

	export const url = '/lives/0000/access/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}
