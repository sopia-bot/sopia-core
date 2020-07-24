/*
 * client.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from './sopia';

import { Country, CountryNumber  } from './enum/country';
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

	constructor(public deviceUUID: string, country?: Country) {
		super(country);

		this.userManager = new UserManager(this);
		this.liveManager = new LiveManager(this);
		this.rankManager = new RankManager(this);
		this.searchManager = new SearchManager(this);
		this.notiManager = new NotiManager(this);
	}

	async initApiInfo() {
		const res = await axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`);
		this.api = res.data;

		if ( !this.api.auth ) {
			this.api.auth = `https://${this.country}-auth.spooncast.net/`;
		}

		return this.api;
	}

	async initToken(sns_id: (number|string), password: string, sns_type: LoginType) {
		const code = CountryNumber[this.country.toUpperCase()];
		const reqUrl = `${this.api.auth}tokens/`;

		const res = await axios.post(reqUrl, {
			'device_unique_id': this.deviceUUID,
			'auth_data': {
				'act_type': sns_type,
				'password': password,
				'msisdn': Number(code + sns_id),
			},
		});

		if ( res.data && res.data.data ) {
			this.token = res.data.data.jwt;
		}

		return this.token;
	}

	async login(sns_id: (number|string), password: string, sns_type: LoginType): Promise<User> {
		await this.initApiInfo();
		await this.initToken(sns_id, password, sns_type);

		const api = new ApiLogin(sns_type, sns_id, password, this.country || Country.KOREA);
		const res = await api.send();
		const user = User.deserialize(res.results[0]);

		this.user = user;
		this.token = user.token;
		return user;
	}
}
