/*
 * client.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from './sopia';
import { Country } from './enum/country';
import { LoginType } from './enum/login-type';
import { User } from './struct/user/user-struct';
import { ApiLogin } from './api/api-login';
import { UserManager } from './manager/user-manager';

export class Client extends SOPIA {
	public userManager: UserManager;

	constructor(country?: Country) {
		super(country);

		this.userManager = new UserManager(this);
	}

	async login(sns_id: (number|string), password: string, sns_type: LoginType): Promise<User> {
		const api = new ApiLogin(sns_type, sns_id, password, this.country || Country.KOREA);
		const res = await api.send();
		const user = User.deserialize(res.results[0]);

		this.token = user.token;
		return user;
	}
}
