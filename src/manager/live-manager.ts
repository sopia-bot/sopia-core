/*
 * live-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Client } from '../client';

import { SocketManager } from './socket-manager';
import { Play } from '../struct/play-struct';
import { User } from '../struct/user/user-struct';

import { Category } from '../enum/category';

import { ApiManager } from './api-manager';
import { ApiLivesInfo } from '../api/lives/api-lives-info';
import { ApiLivesDiscovered } from '../api/lives/api-lives-discovered';
import { ApiLivesAccept } from '../api/lives/api-lives-accept';
import { ApiLivesAccess } from '../api/lives/api-lives-access';
import { ApiLivesBanner } from '../api/lives/api-lives-banner';
import { ApiLivesBlock } from '../api/lives/api-lives-block';
import { ApiLivesCall } from '../api/lives/api-lives-call';
import { ApiLivesCategories } from '../api/lives/api-lives-categories';
import { ApiLivesLike } from '../api/lives/api-lives-like';
import { ApiLivesManager } from '../api/lives/api-lives-manager';
import { ApiLivesNewDJ } from '../api/lives/api-lives-new-dj';
import { ApiLivesPopular } from '../api/lives/api-lives-popular';
import { ApiLivesSponsor } from '../api/lives/api-lives-sponsor';
import { ApiLivesSubscribed } from '../api/lives/api-lives-subscribed';
import { ApiLivesPlay } from '../api/lives/api-lives-play';
import { ApiLivesCheck } from '../api/lives/api-lives-check';
import { ApiLivesMembers } from '../api/lives/api-lives-members';
import { ApiLivesShared } from '../api/lives/api-lives-shared';


export class LiveManager {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async liveInfo(live: (Play|number)) {
		const apiLivesInfo = new ApiManager(new ApiLivesInfo(live), Play.deserialize);
		const res = await apiLivesInfo.send();
		return res;
	}

	async liveAccept(live: (Play|number)) {
		const apiLivesAccept = new ApiManager(new ApiLivesAccept(live), Play.deserialize, this.Token);
		const res = await apiLivesAccept.send();
		return res;
	}

	async liveAccess(live: (Play|number)) {
		const apiLivesAccess = new ApiManager(new ApiLivesAccess(live), Play.deserialize, this.Token);
		const res = await apiLivesAccess.send();
		return res;
	}

	async liveBlock(live: (Play|number), user: User) {
		const apiLivesBlock = new ApiManager(new ApiLivesBlock(live, user), Play.deserialize);
		const res = await apiLivesBlock.send();
		return res;
	}

	async liveCall(live: (Play|number)) {
		const apiLivesCall = new ApiManager(new ApiLivesCall(live), Play.deserialize);
		const res = await apiLivesCall.send();
		return res;
	}

	async liveLike(live: (Play|number)) {
		const apiLivesLike = new ApiManager(new ApiLivesLike(live), Play.deserialize);
		const res = await apiLivesLike.send();
		return res;
	}

	async liveManager(live: (Play|number), users: User[]) {
		const apiLivesManager = new ApiManager(new ApiLivesManager(live, users), Play.deserialize);
		const res = await apiLivesManager.send();
		return res;
	}

	async liveSponsor(live: (Play|number)) {
		const apiLivesSponsor = new ApiManager(new ApiLivesSponsor(live), Play.deserialize);
		const res = await apiLivesSponsor.send();
		return res;
	}

	async livePlay(live: (Play|number)) {
		const apiLivesPlay = new ApiManager(new ApiLivesPlay(live), Play.deserialize);
		const res = await apiLivesPlay.send();
		return res;
	}

	async liveCheck(live: (Play|number)) {
		const apiLivesCheck = new ApiManager(new ApiLivesCheck(live), Play.deserialize);
		const res = await apiLivesCheck.send();
		return res;
	}

	async liveMembers(live: (Play|number)) {
		const apiLivesMembers = new ApiManager(new ApiLivesMembers(live), Play.deserialize);
		const res = await apiLivesMembers.send();
		return res;
	}

	async liveShared(live: (Play|number)) {
		const apiLivesShared = new ApiManager(new ApiLivesShared(live), Play.deserialize);
		const res = await apiLivesShared.send();
		return res;
	}

	async liveDiscovered(page_size: number = 6, is_adult: boolean = false) {
		const apiLivesDiscovered = new ApiManager(new ApiLivesDiscovered(page_size, is_adult), Play.deserialize);
		const res = await apiLivesDiscovered.send();
		return res;
	}

	async liveSubscribed(page_size: number = 6, is_adult: boolean = false) {
		const apiLivesSubscribed = new ApiManager(new ApiLivesSubscribed(page_size, is_adult), Play.deserialize);
		const res = await apiLivesSubscribed.send();
		return res;
	}

	async livePopular(page_size: number = 6, is_adult: boolean = false, category?: Category) {
		const apiLivesPopular = new ApiManager(new ApiLivesPopular(page_size, is_adult, category), Play.deserialize);
		const res = await apiLivesPopular.send();
		return res;
	}

	async liveNewDJ() {
		const apiLivesNewDJ = new ApiManager(new ApiLivesNewDJ(), Play.deserialize);
		const res = await apiLivesNewDJ.send();
		return res;
	}

	async liveCategories() {
		const apiLivesCategories = new ApiManager(new ApiLivesCategories(), Play.deserialize);
		const res = await apiLivesCategories.send();
		return res;
	}

	async liveBanner() {
		const apiLivesBanner = new ApiManager(new ApiLivesDiscovered(), Play.deserialize);
		const res = await apiLivesBanner.send();
		return res;
	}

	liveSocket(live: Play) {
		const socket = new SocketManager(live, this.client);
		return socket;
	}
}
