/*
 * get-url.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';

export namespace ApiGetProfileImgUrl {

	export const url = '/commons/profile/url/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

}
