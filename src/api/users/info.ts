/*
 * info.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiUsersInfo {

	export const url = '/users/0000/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

}

export namespace ApiUsersMiniProfile {

	export const url = '/users/0000/mini_profile';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

}
