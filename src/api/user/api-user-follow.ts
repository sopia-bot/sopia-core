/*
 * api-user-follow.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';

export class ApiUserFollow extends ApiUserInfo {
	constructor(UserId: number) {
		super(UserId);
		this.addSubUrl('follow');
		this.method = 'post';
	}
}
