/*
 * api-request.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import axios, { AxiosRequestConfig } from 'axios';
import { ApiResult } from '../struct/api-struct';

export class ApiRequest {
	private spoonUrl = 'spooncast.net';
	private country = ApiRequest.Country_Code.KOREA;
	private subUrl: string[] = [];
	private Option: AxiosRequestConfig = { method: 'get' };
	private prevUrl: (string | null) = null;
	private nextUrl: (string | null) = null;

	constructor(
		private Url: string,
		Option?: AxiosRequestConfig
	) {
		if ( Option) {
			this.Option = Option;
		}
	}

	get method() {
		return this.Option.method;
	}

	set method(method: any) {
		this.Option.method = method;
	}

	get params() {
		return this.Option.params;
	}

	set params(params: any) {
		this.Option.params = params;
	}

	get data() {
		return this.Option.data;
	}

	set data(data: any) {
		this.Option.data = data;
	}

	get headers() {
		return this.Option.headers;
	}

	set headers(headers: any) {
		this.Option.headers = headers;
	}

	get url() {
		return this.Url;
	}

	get reqUrl() {
		return `https://${this.country}-api.${this.spoonUrl}/${this.Url}/${this.subUrl.length ? this.subUrl.join('/') + '/' : ''}`
	}


	addSubUrl(url: string) {
		this.subUrl.push(url);
	}

	async send(url?: string): Promise<ApiResult> {
		this.Option.url = url || this.reqUrl;
		const res = await axios(this.Option);
		const data: ApiResult = res.data;

		if ( data['previous'] ) {
			this.prevUrl = data['previous'];
		}

		if ( data['next'] ) {
			this.nextUrl = data['next'];
		}

		if ( typeof data['status_code'] === 'string' ) {
			data['status_code'] = Number(data['status_code']);
		}

		return data;
	}

	async prev(): Promise<ApiResult|null> {
		if ( this.prevUrl && this.prevUrl.length > 0 ) {
			return await this.send(this.prevUrl);
		}
		return null;
	}

	async next(): Promise<ApiResult|null> {
		if ( this.nextUrl && this.nextUrl.length > 0 ) {
			return await this.send(this.nextUrl);
		}
		return null;
	}
}

export namespace ApiRequest {
	export enum Country_Code {
		KOREA     = 'kr',
		INDONESIA = 'id',
		JAPAN     = 'jp',
		VIETNAM   = 'vn',
		ARAB      = 'ar',
		USA       = 'us'
	};
}
