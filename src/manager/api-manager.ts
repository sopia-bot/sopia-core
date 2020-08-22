/*
 * api-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api/api-request';
import { ApiResult } from '../struct/api-struct';
import { deserialize } from 'typescript-json-serializer';

export class ApiManager<T extends (object|void)> {
	public response!: ApiResult;
	public data!: any;

	constructor(
		private request: ApiRequest,
		private Data?: new (...args: any[]) => T,
		private token?: string
	) {
			console.log('Token', this.token);
		if ( this.token ) {
			this.request.token = this.token;
		}
	}

	private deserializeResult(res: ApiResult) {
		this.response = res;

		if ( this.response.results ) {
			if ( this.Data ) {
				const d = [];
				for ( const result of this.response.results ) {
					console.log(result, this.Data);
					d.push(deserialize<T>(result, this.Data));
				}
				this.data = d;
			} else {
				this.data = this.response.results;
			}
		}
	}

	async send(): Promise<ApiManager<T>> {
		const res = await this.request.send();
		res !== null && this.deserializeResult(res);
		return this;
	}

	async next(): Promise<ApiManager<T>> {
		const res = await this.request.next();
		res !== null && this.deserializeResult(res);
		return this;
	}

	async prev(): Promise<ApiManager<T>> {
		const res = await this.request.prev();
		res !== null && this.deserializeResult(res);
		return this;
	}
}
