/*
 * api-user-cast.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiUserInfo } from './api-user-info';
import { CastType } from '../../enum/cast-type';

export class ApiUserCast extends ApiUserInfo {
	constructor(UserId: number, type: CastType = CastType.UPLOAD_CAST) {
		super(UserId);
		this.addSubUrl('casts');
		this.params = { type };
	}
}
