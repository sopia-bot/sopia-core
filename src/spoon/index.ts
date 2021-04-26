/*
 * index.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiUrls } from '../api/';
import { Country } from './enum/';

import axios from 'axios';

export class SPOON {

	public country: Country = Country.KOREA;
	public refToken?: string;
	public urls!: ApiUrls;
	private _token!: string;
	private _av: string = '6.5.8';
	private _ua: string = 'Web';
	protected _isInit: boolean = false;

	constructor(public deviceUUID: string) {
	}

	get Token(): string {
		return this._token;
	}

	set Token(val: string) {
		this._token = val;
	}

	get appVersion(): string {
		return this._av;
	}

	set appVersion(val: string) {
		this._av = val;
	}

	get userAgent() {
		return this._ua;
	}

	set userAgent(val: string) {
		this._ua = val;
	}

	async initUrlsInfo() {
		const res = await axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`);
		this.urls = res.data;

		if ( !this.urls.auth ) {
			this.urls.auth = `https://${this.country}-auth.spooncast.net/`;
		}

		return this.urls;
	}

}

export * from './enum/';
export * from './client/';
