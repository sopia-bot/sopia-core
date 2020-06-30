/*
 * api-user-voice.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';

export class ApiUserVoice extends ApiRequest {
	constructor(UserId: number) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('voice');
	}
}
