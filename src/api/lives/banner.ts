/*
 * banner.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { LoginType, Country } from '../../spoon/';
import { ApiResult, RequestConfig } from '../';

export namespace ApiLivesBanner {

	export const url = '/lives/banner';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

}
