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
import { User, UserFanmessages, UserVoice, UserTopfan } from '../struct/user-struct';

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
		const apiUserCast = new ApiManager<Play>(new ApiUsersCast(user, type), Play);
		const res = await apiUserCast.send();

		return res.data;
	}

	async userFanmessages(user: (User|number), contents?: string): Promise<UserFanmessages[]> {
		const apiUserFanmessages = new ApiManager<UserFanmessages>(new ApiUsersFanmessages(user, contents), UserFanmessages);
		const res = await apiUserFanmessages.send();

		return res.data;
	}

	async userFollow(user: (User|number)): Promise<User> {
		const apiUserFollow = new ApiManager<User>(new ApiUsersFollow(user), User, this.Token);
		const res = await apiUserFollow.send();

		console.log(res);

		return res.data[0];
	}

	async userFollowers(user: (User|number)): Promise<User[]> {
		const apiUserFollowers = new ApiManager<User>(new ApiUsersFollowers(user), User);
		const res = await apiUserFollowers.send();

		return res.data;
	}

	async userFollowings(user: (User|number)): Promise<User[]> {
		const apiUserFollowings = new ApiManager<User>(new ApiUsersFollowings(user), User);
		const res = await apiUserFollowings.send();

		return res.data;
	}

	async userUnfollow(user: (User|number)): Promise<User> {
		const apiUserUnfollow = new ApiManager<User>(new ApiUsersUnfollow(user), User, this.Token);
		const res = await apiUserUnfollow.send();

		return res.data[0];
	}

	async userInfo(user: (User|number)): Promise<User> {
		const apiUserInfo = new ApiManager<User>(new ApiUsersInfo(user), User, this.Token);
		const res = await apiUserInfo.send();

		return res.data[0];
	}

	async userVoice(user: (User|number)): Promise<UserVoice> {
		const apiUserVoice = new ApiManager<UserVoice>(new ApiUsersVoice(user), UserVoice);
		const res = await apiUserVoice.send();

		return res.data[0];
	}

	async userMiniProfile(user: (User|number)): Promise<User> {
		const apiUserMiniProfile = new ApiManager<User>(new ApiUsersMiniProfile(user), User);
		const res = await apiUserMiniProfile.send();

		return res.data[0];
	}

	async userTopfan(user: (User|number)): Promise<ApiManager<UserTopfan>> /* for next, prev */ {
		const apiUserTopfan = new ApiManager<UserTopfan>(new ApiUsersTopfan(user), UserTopfan);
		const res = await apiUserTopfan.send();

		return res;
	}

	async userReport(user: (User|number), type: ReportType): Promise<ApiManager<void>> {
		const apiUserReport = new ApiManager<void>(new ApiUsersReport(user, type), undefined, this.Token);
		const res = await apiUserReport.send();

		return res;
	}

	async userBudget(): Promise<Budget> {
		const apiUserBudget = new ApiManager<Budget>(new ApiUsersBudget(), Budget, this.Token);
		const res = await apiUserBudget.send();

		return res.data[0];
	}

	async userToday(): Promise<User[]> {
		const apiUserToday = new ApiManager<User>(new ApiUsersToday(), User);
		const res = await apiUserToday.send();

		return res.data;
	}
}
