/*
 * info.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { User, UserMiniProfile } from '../../struct/';

export namespace ApiUsersInfo {

	export const url = '/users/0000/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	export interface Response extends User {

	}

}

export namespace ApiSetUsersInfo {

	export const url = '/users/0000/';
	export const method = 'PUT';

	export interface Request extends RequestConfig {

		'data': {

			'date_of_birth'?: string;

			'gender'?: number;

			'profile_key'?: string;

		};

	}

	export interface Response extends User {

	}

}

export namespace ApiUsersMiniProfile {

	export const url = '/users/0000/mini_profile';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	export interface Response extends UserMiniProfile {

	}

}

export namespace ApiUsersUsername {

	export const url = '/users/username/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'username': string;

		};

	}

	export interface Response extends User {

	}

}

export namespace ApiUsersSetUsername {

	export const url = '/users/username/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {

			'username': string;

		};

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}

export namespace ApiUsersVoice {

	export const url = '/users/0000/voice/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}

export namespace ApiUsersCasts {

	export const url = '/users/0000/casts/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params'?: {

			'type': number;

		}

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}

export namespace ApiUsersFanmessages {

	export const url = '/users/0000/fanmessages/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}

export namespace ApiUsersWriteFanmessages {

	export const url = '/users/0000/fanmessages/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {

			'contents': string;

		};

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}
