/*
 * api-user-voice.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';

export class ApiUserVoice extends ApiUserInfo {
	constructor(UserId: number) {
		super(UserId);
		this.addSubUrl('voice');
	}
}
