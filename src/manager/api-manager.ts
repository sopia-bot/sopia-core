/*
 * api-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from '../api/api-request';
import { ApiResult } from '../struct/api-struct';

export class ApiManager {
	public response!: ApiResult;
	public data!: any;

	constructor(
		private request: ApiRequest,
		private deserialize: Function,
		token?: string,
	) {
		if ( token ) {
			this.request.token = token;
		}
	}

	set token(t: string) {
		this.request.token = t;
	}

	get token() {
		return this.request.token;
	}

	async send() {
		const res = await this.request.send();
		if ( res !== null ) {
			this.response = res;

			const d = [];
			for ( const result of this.response.results ) {
				d.push(this.deserialize(result));
			}
			this.data = d;
		}
		return this;
	}

	async next() {
		const res = await this.request.next();
		if ( res !== null ) {
			this.response = res;

			const d = [];
			for ( const result of this.response.results ) {
				d.push(this.deserialize(result));
			}
			this.data = d;
		}
		return this;
	}

	async prev() {
		const res = await this.request.prev();
		if ( res !== null ) {
			this.response = res;

			const d = [];
			for ( const result of this.response.results ) {
				d.push(this.deserialize(result));
			}
			this.data = d;
		}
		return this;
	}
}
