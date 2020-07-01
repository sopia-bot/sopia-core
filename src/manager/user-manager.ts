/*
 * user-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Client } from '../client';
import { ApiUserCast } from '../api/user/api-user-cast';
import { Play } from '../struct/play-struct';
import { CastType } from '../enum/cast-type';
import { ApiManager } from './api-manager';
import { ApiRequest } from '../api/api-request';

export class UserManager {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async userCast(UserId: number, type: CastType = CastType.UPLOAD_CAST) {
		const apiUserCast: ApiManager = new ApiManager(new ApiUserCast(UserId, type), Play.deserialize);
		const res = await apiUserCast.send();
		/*
		const result = res.response;
		const casts: Play[] = [];

		if ( result.status_code === 200 ) {
			for ( const r of result.results ) {
				const play = Play.deserialize(r);
				casts.push(play);
			}
		}

		res.data = casts;
		*/
		return res;
	}

	/*
	async userFanmessages(UserId) {
	}
	*/
}
