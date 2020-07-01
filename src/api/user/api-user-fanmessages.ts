/*
 * api-user-fanmessages.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';

export class ApiUserFanmessages extends ApiUserInfo {
	constructor(UserId: number, contents?: string) {
		super(UserId);
		this.addSubUrl('fanmessages');

		if ( typeof contents === 'string' ) {
			this.data = { contents };
			this.method = 'post';
		}
	}
}
