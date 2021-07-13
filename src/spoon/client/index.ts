/*
 * index.ts
 * Created on Fri Jun 25 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { Country, CountryNumber, SnsType } from '../../enum/';
import { LogonUser, Live, UserSearchProfile } from '../../struct/';
import { ApiClient, ApiLogin, ApiUrls } from '../../api/';
import { StickerClient } from '../../sticker/';
import { LiveSocket } from '../../socket/';

import axios from 'axios';

export type UserAgent = 'Web'|'Android'|'iOS';

export class SpoonClient {

	public country: Country = Country.KOREA;
	public urls!: ApiUrls;
	public token: string = '';
	public appVersion: string = '6.7.3';
	public userAgent: UserAgent = 'Web';
	public refToken: string = '';
	public logonUser!: LogonUser;

	public api: ApiClient;
	public sticker: StickerClient;

	public liveMap: Map<number, LiveSocket> = new Map();

	constructor(public deviceUUID: string) {
		this.api = new ApiClient(this);
		this.sticker = new StickerClient(this);
	}

	async init() {
		await this.initUrlsInfo();
		await this.sticker.initSticker();
	}

	async initUrlsInfo() {
		const res = await axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`);
		this.urls = res.data;

		if ( !this.urls.auth ) {
			this.urls.auth = `https://${this.country}-auth.spooncast.net/`;
		}

		return this.urls;
	}

	async initToken(sns_id: (number|string), password: string, sns_type: SnsType) {
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
			this.token = res.data.data.jwt;
			this.refToken = res.data.data.refresh_token;
		}

		return this.token;
	}

	async refreshToken(userId?: (number|string), token?: string, refToken?: string) {
		const reqUrl = `${this.api.auth}tokens/`;

		try {
			const res = await axios.put(reqUrl, {
				'device_unique_id': this.deviceUUID,
				'refresh_token': refToken || this.refToken,
				'user_id': userId || this.logonUser.id,
			}, { headers: { authorization: 'Bearer ' + (token || this.token) } });
			if ( res.data && res.data.data ) {
				this.token = res.data.data.jwt;
				this.refToken = refToken || this.refToken;
			}
		} catch(err) {
			console.log(err.toJSON());
		}

		return this.token;
	}

	async login(sns_id: (number|string), password: string, sns_type: SnsType): Promise<LogonUser> {
		await this.initToken(sns_id, password, sns_type);

		const req = await this.api.auth.login({
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

	async loginToken(user: (UserSearchProfile|number), token: string, refreshToken: string): Promise<LogonUser> {
		this.token = token;
		this.refToken = refreshToken;

		const req = await this.api.users.info(user);
		this.logonUser = req.res.results[0] as LogonUser;
		this.logonUser.token = this.token as string;

		return this.logonUser;
	}

	snsLoginURL(sns_type: SnsType): string {
		// should parsing localStorage.getItem('SPOONCAST_requestBySnsLogin')
		return `https://www.spooncast.net/${this.country}/oauth/authorize?sns_type=${sns_type}&is_jwt=true&is_agree=0&ts=${new Date().getTime()}`;
	}

}
