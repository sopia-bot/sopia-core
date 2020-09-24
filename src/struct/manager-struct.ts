/*
 * manager-struct.ts
 * Created on Thu Sep 24 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Client } from '../client';
import { ApiManager } from '../manager/api-manager';

export class Manager {
	constructor(
		protected client: Client
	) {
	}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	protected async ApiReq<Type extends object|void>(RetType: any, Api: any, ...v: any): Promise<ApiManager<any>> {
		const api = new ApiManager<Type>(new Api(...v), RetType, this.Token);
		return await api.send();
	}
}

