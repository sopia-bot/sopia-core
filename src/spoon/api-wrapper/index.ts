/*
 * index.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { ApiClient } from '../';
import { LiveApiWrapper } from './lives';
import { SearchApiWrapper } from './search';

export class ApiWrapperClient {

	public live: LiveApiWrapper;
	public search: SearchApiWrapper;

	constructor(private _client: ApiClient) {
		this.live = new LiveApiWrapper(this._client);
		this.search = new SearchApiWrapper(this._client);
	}

}
