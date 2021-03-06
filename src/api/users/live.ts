/*
 * live.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

export namespace ApiUsersLive {

	export const url = '/users/0000/live/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	// TODO: Unknown response data type
	@Serializable()
	export class Response {

	}

}
