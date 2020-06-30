/*
 * api-user-fanmessages.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';

export class ApiUserFanmessage extends ApiRequest {
	constructor(UserId: number, contents?: string) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('fanmessages');

		if ( typeof contents === 'string' ) {
			this.data = { contents };
			this.method = 'post';
		}
	}
}
