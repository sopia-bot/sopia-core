/*
 * follow.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiUsersFollow {

	export const url = '/users/0000/follow/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

	}

}
