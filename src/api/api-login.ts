/*
 * api-login.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { LoginType } from '../enum/login-type';
import { Country } from '../enum/country';

export class ApiLogin extends ApiRequest {
	constructor(
		sns_type: LoginType,
		sns_id: (number|string),
		password: string,
		country: Country
	) {
		super('signin');

		this.method = 'post';
		this.data = {
			sns_type,
			sns_id,
			password,
			country,
		};
	}
}
