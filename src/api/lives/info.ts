/*
 * info.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { RequestConfig, ApiLivesRequestConfig } from '../';
import { Live, User } from '../../struct/';

export namespace ApiLivesInfo {

	export const url = '/lives/0000/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	export interface Response extends Live {

	}

}

export namespace ApiLivesListeners {

	export const url = '/lives/0000/listeners/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	export interface Response extends User {

	}

}

export namespace ApiLivesListenersFans {

	export const url = '/lives/0000/listeners/fans';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	export interface Response extends User {
		
	}

}

export namespace ApiLivesSponsor {

	export const url = '/lives/0000/sponsor/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	/* TODO: */
	/* 아마도 count: number, author: User 형식으로 있을 것 같음 */
	export interface Response extends User {

	}

}

export namespace ApiLivesLike {

	export const url = '/lives/0000/like/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	export interface Response extends User {

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

	export interface Response {

		'jwt': string;
		
		'items': any[]; // unknown type

	}

}

export namespace ApiLivesAccess {

	export const url = '/lives/0000/access/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

	export interface Response extends Live {

	}

}
