/*
 * get-url.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { ProfileUrlInfo } from '../../struct/';

export namespace ApiGetProfileImgUrl {

	export const url = '/commons/profile/url/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	export interface Response extends ProfileUrlInfo {

	}

}
