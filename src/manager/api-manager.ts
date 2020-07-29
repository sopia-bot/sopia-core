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
		private deserialize?: Function,
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

	async send(): Promise<ApiManager> {
		const res = await this.request.send();
		if ( res !== null ) {
			this.response = res;

			if ( this.response.results ) {
				if ( typeof this.deserialize === 'function' ) {
					const d = [];
					for ( const result of this.response.results ) {
						d.push(this.deserialize(result));
					}
					this.data = d;
				} else {
					this.data = this.response.results;
				}
			}
		}
		return this;
	}

	async next(): Promise<ApiManager> {
		const res = await this.request.next();
		if ( res !== null ) {
			this.response = res;

			if ( this.response.results ) {
				if ( typeof this.deserialize === 'function' ) {
					const d = [];
					for ( const result of this.response.results ) {
						d.push(this.deserialize(result));
					}
					this.data = d;
				} else {
					this.data = this.response.results;
				}
			}
		}
		return this;
	}

	async prev(): Promise<ApiManager> {
		const res = await this.request.prev();
		if ( res !== null ) {
			this.response = res;

			if ( this.response.results ) {
				if ( typeof this.deserialize === 'function' ) {
					const d = [];
					for ( const result of this.response.results ) {
						d.push(this.deserialize(result));
					}
					this.data = d;
				} else {
					this.data = this.response.results;
				}
			}
		}
		return this;
	}
}
