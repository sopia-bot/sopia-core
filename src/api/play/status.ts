/*
 * status.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesRequestConfig } from '../';

export namespace ApiPlayStatus {

	export const url = '/play/status/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'params': {

			'live_id': number;

		};

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}
