/*
 * api-request.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from '../sopia';
import axios, { AxiosRequestConfig } from 'axios';
import { ApiResult } from '../struct/api-struct';
import { Country } from '../enum/country';

export class ApiRequest extends SOPIA {
	private spoonUrl = 'spooncast.net';
	private subUrl: string[] = [];
	private Option: AxiosRequestConfig = { method: 'get' };
	private prevUrl: (string | null) = null;
	private nextUrl: (string | null) = null;
	protected apiResult!: ApiResult;

	constructor(
		private Url: string,
		Option?: AxiosRequestConfig
	) {
		super();
		if ( Option ) {
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

	get reqUrl() {
		if ( this.Option.url ) {
			return this.Option?.url;
		}

		if ( this.api ) {
			return `${this.api.api}${this.Url}/${this.subUrl.length ? this.subUrl.join('/') + '/' : ''}`;
		}

		return `https://${this.country}-api.${this.spoonUrl}/${this.Url}/${this.subUrl.length ? this.subUrl.join('/') + '/' : ''}`
	}

	set reqUrl(url: string) {
		this.Option.url = url;
	}

	get token() {
		return this.Option?.headers?.authorization;
	}

	set token(t: string) {
		if ( typeof this.Option.headers !== 'object' ) {
			this.Option.headers = {}
		}
		this.Option.headers.authorization = `Token ${t}`;
	}

	addSubUrl(url: string) {
		this.subUrl.push(url);
	}

	async send(url?: string): Promise<ApiResult> {
		if ( url ) {
			this.Option.url = url;
		}

		if ( !this.Option.url ) {
			this.Option.url = this.reqUrl;
		}

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
			this.Option.params = {};
			return await this.send(this.prevUrl);
		}
		return null;
	}

	async next(): Promise<ApiResult|null> {
		if ( this.nextUrl && this.nextUrl.length > 0 ) {
			this.Option.params = {};
			return await this.send(this.nextUrl);
		}
		return null;
	}
}
