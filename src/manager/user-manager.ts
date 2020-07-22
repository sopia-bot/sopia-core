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
import { ApiUsersCast } from '../api/users/api-users-cast';
import { ApiUsersFanmessages } from '../api/users/api-users-fanmessages';
import { ApiUsersFollow } from '../api/users/api-users-follow';
import { ApiUsersFollowers } from '../api/users/api-users-followers';
import { ApiUsersFollowings } from '../api/users/api-users-followings';
import { ApiUsersUnfollow } from '../api/users/api-users-unfollow';
import { ApiUsersInfo } from '../api/users/api-users-info';
import { ApiUsersVoice } from '../api/users/api-users-voice';
import { ApiUsersMiniProfile } from '../api/users/api-users-mini-profile';

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

	async userCast(user: (User|number), type: CastType = CastType.UPLOAD_CAST) {
		const apiUserCast = new ApiManager(new ApiUsersCast(user, type), Play.deserialize);
		const res = await apiUserCast.send();
		return res;
	}

	async userFanmessages(user: (User|number), contents?: string) {
		const apiUserFanmessages = new ApiManager(new ApiUsersFanmessages(user, contents), UserFanmessages.deserialize);
		const res = await apiUserFanmessages.send();
		return res;
	}

	async userFollow(user: (User|number)) {
		const apiUserFollow = new ApiManager(new ApiUsersFollow(user), User.deserialize, this.Token);
		const res = await apiUserFollow.send();
		return res;
	}

	async userFollowers(user: (User|number)) {
		const apiUserFollowers = new ApiManager(new ApiUsersFollowers(user), User.deserialize);
		const res = await apiUserFollowers.send();
		return res;
	}

	async userFollowings(user: (User|number)) {
		const apiUserFollowings = new ApiManager(new ApiUsersFollowings(user), User.deserialize);
		const res = await apiUserFollowings.send();
		return res;
	}

	async userUnfollow(user: (User|number)) {
		const apiUserUnfollow = new ApiManager(new ApiUsersUnfollow(user), User.deserialize, this.Token);
		const res = await apiUserUnfollow.send();
		return res;
	}

	async userInfo(user: (User|number)) {
		const apiUserInfo = new ApiManager(new ApiUsersInfo(user), User.deserialize);
		const res = await apiUserInfo.send();
		return res;
	}

	async userVoice(user: (User|number)) {
		const apiUserVoice = new ApiManager(new ApiUsersVoice(user), UserVoice.deserialize);
		const res = await apiUserVoice.send();
		return res;
	}

	async userMiniProfile(user: (User|number)) {
		const apiUserMiniProfile = new ApiManager(new ApiUsersMiniProfile(user), User.deserialize);
		const res = await apiUserMiniProfile.send();
		return res;
	}
}
