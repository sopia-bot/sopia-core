/*
 * login-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { LogonUser } from '../../struct/';
import { StickerClient } from './sticker-client';
import { ApiLogin } from '../../api';
import {
	LoginType,
	Country,
	CountryNumber,
} from '../../enum/';
import axios from 'axios';

export class LoginClient extends StickerClient {

	public logonUser!: LogonUser;

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async initToken(sns_id: (number|string), password: string, sns_type: LoginType) {
		const code = CountryNumber[this.country.toUpperCase()];
		const reqUrl = `${this.urls.auth}tokens/`;

		const res = await axios.post(reqUrl, {
			'device_unique_id': this.deviceUUID,
			'auth_data': {
				'act_type': sns_type,
				'password': password,
				'msisdn': Number(code + sns_id),
			},
		});

		if ( res.data && res.data.data ) {
			this.Token = res.data.data.jwt;
			this.refToken = res.data.data.refresh_token;
		}

		return this.Token;
	}

	async login(sns_id: (number|string), password: string, sns_type: LoginType): Promise<LogonUser> {
		await this.initToken(sns_id, password, sns_type);

		const req = await this.ApiReq<ApiLogin.Request, ApiLogin.Response>(ApiLogin, {
			'data': {
				sns_type,
				sns_id,
				password,
				country: this.country,
			},
		});
		this.logonUser = req.res.results[0];
		return this.logonUser;
	}

	/*
	async loginToken(user: (User|number), token: string, refreshToken: string): Promise<User> {
		this.token = token;
		this.refToken = refreshToken;

		const u = await this.userManager.userInfo(user);
		this.user = u;
		this.user.token = this.token as string;

		return this.user;
	}
	*/

	/*
	async signout(): Promise<ApiManager<void>> {
		const apiSignout = new ApiManager<void>(new ApiSignout(), undefined, this.Token);
		const res = await apiSignout.send();

		return res;
	}
	*/

	snsLoginURL(sns_type: string): string {
		// should parsing localStorage.getItem('SPOONCAST_requestBySnsLogin')
		return `https://www.spooncast.net/${this.country}/oauth/authorize?sns_type=${sns_type}&is_jwt=true&is_agree=0&ts=${new Date().getTime()}`;
	}

}
