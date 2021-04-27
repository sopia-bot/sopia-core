/*
 * client.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { LoginType, Country, CountryNumber } from '../';
import { StaticStickers } from '../../static/';
import { SPOON } from '../';
import { LogonUser } from '../../user/';
import { ApiRequest, ApiResult, ApiLogin } from '../../api';

import axios, { Method } from 'axios';

export class ApiClient extends SPOON {

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async ApiReq<T extends any, R>(api: any, id?: (number|R), config?: R): Promise<ApiRequest<T, R>> {
		if ( typeof id === 'number' ) {
			// empty
		} else {
			config = id as R;
			id = 0;
		}

		const req = new ApiRequest<T, R>(this, config || {} as R);
		req.url = api.url;
		req.method = api.method;
		req.id = id as number;

		const res = await req.send();

		if ( res.status_code !== 200 ) {
			console.log('Error', res);
		}

		return req;
	}

}

export class StickerClient extends ApiClient {
	public stickers!: StaticStickers;
	public signature: Map<number, StaticStickers> = new Map();

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async initSticker(): Promise<StaticStickers|void> {
		const res = await axios.get(this.urls.stickerApiUrl);
		this.stickers = res.data as StaticStickers;
		return this.stickers;
	}

	async initSignatureSticker(user: (number)): Promise<StaticStickers|void> {
		try {
			const res = await axios.get(this.urls.signatureStickerApiUrl.replace('0000', user.toString()));
			if ( res.data ) {
				this.signature.set(user, res.data);
			}
		} catch(err) {
			return;
		}
		return this.signature.get(user);
	}

	findSticker(key: string, user?: (number), force: boolean = false) {
		const signature = this.signature.get(user as number);
		if ( signature ) {
			for ( const category of signature.categories ) {
				if ( !force && !category.is_used ) {
					continue;
				}
				for ( const sticker of category.stickers ) {
					if ( sticker.name === key ) {
						return sticker;
					}
				}
			}
		}
		if ( this.stickers ) {
			for ( const category of this.stickers.categories ) {
				if ( !force && !category.is_used ) {
					continue;
				}
				for ( const sticker of category.stickers ) {
					if ( sticker.name === key ) {
						return sticker;
					}
				}
			}
		}
	}

}

export class LoginClient extends StickerClient {

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

		const req = await this.ApiReq<LogonUser, ApiLogin.Request>(ApiLogin, {
			'data': {
				sns_type,
				sns_id,
				password,
				country: this.country,
			},
		});
		const user = req.res.results[0];
		return user;
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

export class SpoonClient extends LoginClient {

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async init() {
		if ( !this._isInit ) {
			await this.initUrlsInfo();
			await this.initSticker();
			this._isInit = true;
		}
	}

}
