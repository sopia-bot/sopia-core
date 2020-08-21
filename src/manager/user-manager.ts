/*
 * user-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Client } from '../client';
import { CastType } from '../enum/cast-type';
import { ReportType } from '../enum/report';

import { Play } from '../struct/play-struct';
import { Budget } from '../struct/budget-struct';
import { User } from '../struct/user/user-struct';
import { UserFanmessages } from '../struct/user/user-fanmessages';
import { UserVoice } from '../struct/user/user-voice-struct';
import { UserTopfan } from '../struct/user/user-topfan-struct';

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
import { ApiUsersBudget } from '../api/users/api-users-budget';
import { ApiUsersToday } from '../api/users/api-users-today';
import { ApiUsersTopfan } from '../api/users/api-users-topfan';
import { ApiUsersReport } from '../api/users/api-users-report';

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

	async userCast(user: (User|number), type: CastType = CastType.UPLOAD_CAST): Promise<Play[]> {
		const apiUserCast = new ApiManager(new ApiUsersCast(user, type), Play.deserialize);
		const res = await apiUserCast.send();

		return res.data;
	}

	async userFanmessages(user: (User|number), contents?: string): Promise<UserFanmessages[]> {
		const apiUserFanmessages = new ApiManager(new ApiUsersFanmessages(user, contents), UserFanmessages.deserialize);
		const res = await apiUserFanmessages.send();

		return res.data;
	}

	async userFollow(user: (User|number)): Promise<User> {
		const apiUserFollow = new ApiManager(new ApiUsersFollow(user), User.deserialize, this.Token);
		const res = await apiUserFollow.send();

		return res.data[0];
	}

	async userFollowers(user: (User|number)): Promise<User[]> {
		const apiUserFollowers = new ApiManager(new ApiUsersFollowers(user), User.deserialize);
		const res = await apiUserFollowers.send();

		return res.data;
	}

	async userFollowings(user: (User|number)): Promise<User[]> {
		const apiUserFollowings = new ApiManager(new ApiUsersFollowings(user), User.deserialize);
		const res = await apiUserFollowings.send();

		return res.data;
	}

	async userUnfollow(user: (User|number)): Promise<User> {
		const apiUserUnfollow = new ApiManager(new ApiUsersUnfollow(user), User.deserialize, this.Token);
		const res = await apiUserUnfollow.send();

		return res.data[0];
	}

	async userInfo(user: (User|number)): Promise<User> {
		const apiUserInfo = new ApiManager(new ApiUsersInfo(user), User.deserialize, this.Token);
		const res = await apiUserInfo.send();

		return res.data[0];
	}

	async userVoice(user: (User|number)): Promise<UserVoice> {
		const apiUserVoice = new ApiManager(new ApiUsersVoice(user), UserVoice.deserialize);
		const res = await apiUserVoice.send();

		return res.data[0];
	}

	async userMiniProfile(user: (User|number)): Promise<User> {
		const apiUserMiniProfile = new ApiManager(new ApiUsersMiniProfile(user), User.deserialize);
		const res = await apiUserMiniProfile.send();

		return res.data[0];
	}

	async userTopfan(user: (User|number)): Promise<UserTopfan[]> {
		const apiUserTopfan = new ApiManager(new ApiUsersTopfan(user), UserTopfan.deserialize, this.Token);
		const res = await apiUserTopfan.send();

		return res.data;
	}

	async userReport(user: (User|number), type: ReportType): Promise<ApiManager> {
		const apiUserReport = new ApiManager(new ApiUsersReport(user, type), undefined, this.Token);
		const res = await apiUserReport.send();

		return res;
	}

	async userBudget(): Promise<Budget> {
		const apiUserBudget = new ApiManager(new ApiUsersBudget(), Budget.deserialize, this.Token);
		const res = await apiUserBudget.send();

		return res.data[0];
	}

	async userToday(): Promise<User[]> {
		const apiUserToday = new ApiManager(new ApiUsersToday(), User.deserialize);
		const res = await apiUserToday.send();

		return res.data;
	}
}
