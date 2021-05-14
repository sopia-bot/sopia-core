/*
 * live-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { LiveSocket } from '../../socket/';
import {
	ApiLivesToken,
	ApiLivesAccess
} from '../../api/';
import { ApiClient } from './api-client';

export class LiveClient {

	constructor(private client: ApiClient, liveId: number) {
	}

	private get req() {
		return this.client.ApiReq;
	}

	/*
	static async join(liveId: number): Promise<LiveClient> {
	}
	*/

}
