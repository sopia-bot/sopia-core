/*
 * api-casts-main.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiCasts } from '../api-casts';

export class ApiCastsMain extends ApiCasts {
	constructor(page_size: number = 20) {
		super('main');
		this.params = {
			page_size,
		};
	}
}
