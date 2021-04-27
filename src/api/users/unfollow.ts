/*
 * unfollow.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiUsersUnFollow {

	export const url = '/users/0000/unfollow/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

	}

}
