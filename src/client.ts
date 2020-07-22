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
import { LiveManager } from './manager/live-manager';
import { RankManager } from './manager/rank-manager';
import { SearchManager } from './manager/search-manager';
import { NotiManager } from './manager/noti-manager';

import axios from 'axios';

export class Client extends SOPIA {
	public userManager: UserManager;
	public liveManager: LiveManager;
	public rankManager: RankManager;
	public searchManager: SearchManager;
	public notiManager: NotiManager;
	public user!: User;

	constructor(country?: Country) {
		super(country);

		this.userManager = new UserManager(this);
		this.liveManager = new LiveManager(this);
		this.rankManager = new RankManager(this);
		this.searchManager = new SearchManager(this);
		this.notiManager = new NotiManager(this);
	}

	async getApiInfo() {
		const res = await axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`);
		this.api = res.data;
		return this.api;
	}

	async login(sns_id: (number|string), password: string, sns_type: LoginType): Promise<User> {
		const api = new ApiLogin(sns_type, sns_id, password, this.country || Country.KOREA);
		const res = await api.send();
		const user = User.deserialize(res.results[0]);

		this.user = user;
		this.token = user.token;
		return user;
	}
}
