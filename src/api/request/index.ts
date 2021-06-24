/*
 * index.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { ApiResult } from '../';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { deserialize } from 'typescript-json-serializer';

export class ApiRequest<Request extends AxiosRequestConfig, Response extends any> {
	private _url: string = '';
	private _result!: ApiResult<Response>;
	private _id: number = 0;
	private _debug: boolean = false;

	constructor(private _client: any, private _api: any, private _options: Request) {
		if ( !this._options.headers ) {
			this._options.headers = {};
		}

		this.headers.authorization = 'Bearer ' + this._client.Token;
		this.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36';
		this.headers['origin'] = 'https://www.spooncast.net';
		this.headers['referer'] = 'https://www.spooncast.net/';
	}

	get api(): any {
		return this._api;
	}

	get method(): Method {
		return this._options.method as Method;
	}

	set method(val: Method) {
		this._options.method = val;
	}

	get params(): Record<string, string> {
		return this._options.params;
	}

	get headers(): Record<string, string> {
		return this._options.headers;
	}

	get data() {
		return this._options.data;
	}

	get config(): Request {
		return this._options;
	}

	set config(val: Request) {
		this._options = val;
	}

	get id(): number {
		return this._id;
	}

	set id(val: number) {
		this._id = val;
	}

	set url(val: string) {
		this._url = val;
	}

	get debug(): boolean {
		return this._debug;
	}

	set debug(val: boolean) {
		this._debug = val;
	}

	get res(): ApiResult<Response> {
		return this._result;
	}

	private get _reqUrl() {
		return `${this._client.urls.api}${this._url.replace(/^\//, '').replace('0000', this.id.toString())}`;
	}

	private async _req<Request>(config: Request) {
		return await axios(config);
	}

	public async send(url: string = this._reqUrl): Promise<ApiResult<Response>> {
		this._options.url = url;

		try {
			const res = await this._req<Request>(this._options);

			if ( res.data ) {
				if ( this.debug ) {
					console.error(this._options);
					console.error(res.data);
				}

				if ( Array.isArray(res.data.results) ) {
					res.data.results.forEach((result: any, idx: number) => {
						res.data.results[idx] = deserialize<Response>(result, this.api.Response);
					});
				}

				this._result = res.data as ApiResult<Response>;
			}
		} catch(err) {
			if ( this.debug ) {
				console.error(err.response);
			}
			this._result = err.response.data as ApiResult<any>;
		}

		return this._result;
	}

	public async next(): Promise<ApiResult<Response>> {
		return await this.send(this._result.next);
	}

	public async previous(): Promise<ApiResult<Response>> {
		return await this.send(this._result.previous);
	}

}
