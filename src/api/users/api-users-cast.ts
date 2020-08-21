/*
 * api-users-cast.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { CastType } from '../../enum/cast-type';
import { User } from '../../struct/user-struct';

export class ApiUsersCast extends ApiUsersInfo {
	constructor(user: (User|number), type: CastType = CastType.UPLOAD_CAST) {
		super(user);
		this.addSubUrl('casts');
		this.params = { type };
	}
}
