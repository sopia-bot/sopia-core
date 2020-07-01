/*
 * user-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Client } from '../client';
import { CastType } from '../enum/cast-type';

import { Play } from '../struct/play-struct';
import { User } from '../struct/user/user-struct';
import { UserFanmessages } from '../struct/user/user-fanmessages';
import { UserVoice } from '../struct/user/user-voice-struct';

import { ApiManager } from './api-manager';
import { ApiRequest } from '../api/api-request';
import { ApiUserCast } from '../api/user/api-user-cast';
import { ApiUserFanmessages } from '../api/user/api-user-fanmessages';
import { ApiUserFollow } from '../api/user/api-user-follow';
import { ApiUserFollowers } from '../api/user/api-user-followers';
import { ApiUserFollowings } from '../api/user/api-user-followings';
import { ApiUserUnfollow } from '../api/user/api-user-unfollow';
import { ApiUserInfo } from '../api/user/api-user-info';
import { ApiUserVoice } from '../api/user/api-user-voice';

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
		const apiUserCast = new ApiManager(new ApiUserCast(UserId, type), Play.deserialize);
		const res = await apiUserCast.send();
		return res;
	}

	async userFanmessages(UserId: number, contents?: string) {
		const apiUserFanmessages = new ApiManager(new ApiUserFanmessages(UserId, contents), UserFanmessages.deserialize);
		const res = await apiUserFanmessages.send();
		return res;
	}

	async userFollow(UserId: number) {
		const apiUserFollow = new ApiManager(new ApiUserFollow(UserId), User.deserialize, this.Token);
		const res = await apiUserFollow.send();
		return res;
	}

	async userFollowers(UserId: number) {
		const apiUserFollowers = new ApiManager(new ApiUserFollowers(UserId), User.deserialize);
		const res = await apiUserFollowers.send();
		return res;
	}

	async userFollowings(UserId: number) {
		const apiUserFollowings = new ApiManager(new ApiUserFollowings(UserId), User.deserialize);
		const res = await apiUserFollowings.send();
		return res;
	}

	async userUnfollow(UserId: number) {
		const apiUserUnfollow = new ApiManager(new ApiUserUnfollow(UserId), User.deserialize, this.Token);
		const res = await apiUserUnfollow.send();
		return res;
	}

	async userInfo(UserId: number) {
		const apiUserInfo = new ApiManager(new ApiUserInfo(UserId), User.deserialize);
		const res = await apiUserInfo.send();
		return res;
	}

	async userVoice(UserId: number) {
		const apiUserVoice = new ApiManager(new ApiUserVoice(UserId), UserVoice.deserialize);
		const res = await apiUserVoice.send();
		return res;
	}
}
