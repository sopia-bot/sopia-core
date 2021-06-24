/*
 * user.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { User } from '../../struct/';
import * as T from '../../spoon/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

console.log(T);

export namespace ApiSearchUser {

	export const url = '/search/user/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

		'params': {

			'keyword': string;

		};

	}

	// TODO: Unknown response data type
	@Serializable()
	export class Response extends User {

		constructor() {

			super();

		}

	}


}
