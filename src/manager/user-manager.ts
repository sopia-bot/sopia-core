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
import { Manager } from '../struct/manager-struct';

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
import { ApiUsersUsername } from '../api/users/api-users-username';
import { ApiUsersUsernameCheck } from '../api/users/api-users-username-check';
import { ApiUsersUpdate } from '../api/users/api-users-update';
import { ApiUsersBlock } from '../api/users/api-users-block';
import { ApiUsersUnblock } from '../api/users/api-users-unblock';
import { ApiUsersLive } from '../api/users/api-users-live';

export class UserManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async userName(name: string): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiUsersUsername, name);

		return res;
	}

	async userNameCheck(name: string): Promise<boolean> {
		const res = await this.ApiReq<void>(undefined, ApiUsersUsernameCheck, name);

		return res.data[0].is_exist;
	}

	async userCast(user: (User|number), type: CastType = CastType.UPLOAD_CAST): Promise<Play[]> {
		const res = await this.ApiReq<Play>(Play, ApiUsersCast, user, type);

		return res.data;
	}

	async userFanmessages(user: (User|number), contents?: string): Promise<UserFanmessages[]> {
		const res = await this.ApiReq<UserFanmessages>(UserFanmessages, ApiUsersFanmessages, user, contents);

		return res.data;
	}

	async userFollow(user: (User|number)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiUsersFollow, user);

		return res.data[0];
	}

	async userFollowers(user: (User|number)): Promise<ApiManager<User>> {
		const res = await this.ApiReq<User>(User, ApiUsersFollowers, user);

		return res;
	}

	async userFollowings(user: (User|number)): Promise<ApiManager<User>> {
		const res = await this.ApiReq<User>(User, ApiUsersFollowings, user);

		return res;
	}

	async userUnfollow(user: (User|number)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiUsersUnfollow, user);

		return res.data[0];
	}

	async userInfo(user: (User|number)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiUsersInfo, user);

		return res.data[0];
	}

	async userVoice(user: (User|number)): Promise<UserVoice> {
		const res = await this.ApiReq<UserVoice>(UserVoice, ApiUsersVoice, user);

		return res.data[0];
	}

	async userMiniProfile(user: (User|number)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiUsersMiniProfile, user);

		return res.data[0];
	}

	async userTopfan(user: (User|number)): Promise<ApiManager<UserTopfan>> /* for next, prev */ {
		const res = await this.ApiReq<UserTopfan>(UserTopfan, ApiUsersTopfan, user);

		return res;
	}

	async userReport(user: (User|number), type: ReportType): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiUsersReport, user, type);

		return res;
	}

	async userBudget(): Promise<Budget> {
		const res = await this.ApiReq<Budget>(Budget, ApiUsersBudget);

		return res.data[0];
	}

	async userToday(): Promise<User[]> {
		const res = await this.ApiReq<User>(User, ApiUsersToday);

		return res.data;
	}

	async userUpdate(user: (User|any)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiUsersUpdate, user);

		return res.data[0];
	}

	async userBlock(user: (User|number)): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiUsersBlock, user);

		return res;
	}

	async userUnblock(user: (User|number)): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiUsersUnblock, user);

		return res;
	}

	async userLive(user: (User|number)): Promise<any> /* don't have support class this data structor */  {
		const res = await this.ApiReq<void>(undefined, ApiUsersLive, user);

		return res.data[0];
	}
}
