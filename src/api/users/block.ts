/*
 * block.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiUsersBlock {

	export const url = '/users/0000/block/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

	}

	// none response
	export interface Response {

	}

}

export namespace ApiUsersUnBlock {

	export const url = '/users/0000/unblock/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

	}

	// none response
	export interface Response {

	}

}
