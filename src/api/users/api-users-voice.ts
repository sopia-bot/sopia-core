/*
 * api-users-voice.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user-struct';

export class ApiUsersVoice extends ApiUsersInfo {
	constructor(user: (User|number)) {
		super(user);
		this.addSubUrl('voice');
	}
}
