/*
 * api-user.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';
import { User } from '../user/user-manager';
import { ObjectMapper, Serializer } from 'json-proxy-mapper';

export class ApiUser extends ApiRequest {
	constructor(
		private UserId: number
	) {
		super('users');
		this.addSubUrl(UserId.toString());
	}

	//async getInfo(): Promise<User> {
	async getInfo() {
		const res = await this.send();
		return User.deserialize(res[0]);
	}

	//static async getUserInfo(userId: number): Promise<User> {
	static async getUserInfo(userId: number) {
		const user = new ApiUser(userId);
		return user.getInfo();
	}
}
