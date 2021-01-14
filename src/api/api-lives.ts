/*
 * api-lives.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { CreateLiveData } from '../struct/play-struct';

export class ApiLives extends ApiRequest {
	constructor(api: string, data?: CreateLiveData) {
		super('lives');

		if ( data ) {
			this.method = 'POST';
			this.data = data;
			return;
		}

		this.addSubUrl(api);
	}
}
