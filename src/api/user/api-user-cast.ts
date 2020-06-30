/*
 * api-user-cast.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api-request';
import { CastType } from '../../enum/cast-type';

export class ApiUserCast extends ApiRequest {
	constructor(UserId: number, type: CastType = CastType.UPLOAD_CAST) {
		super('users');
		this.addSubUrl(UserId.toString());
		this.addSubUrl('casts');
		this.params = { type, };
	}
}
