/*
 * api-play.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiPlay extends ApiRequest {
	constructor(api: string) {
		super('play');
		this.addSubUrl(api);
	}
}
