/*
 * live-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Client } from '../client';

import { SocketManager } from './socket-manager';
import { Play } from '../struct/play-struct';
import { Budget } from '../struct/budget-struct';
import { User } from '../struct/user/user-struct';
import { Sticker } from '../struct/sticker/sticker-struct';

import { Category } from '../enum/category';
import { ReportType } from '../enum/report';

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
import { ApiLivesPresent } from '../api/lives/api-lives-present';
import { ApiLivesReport } from '../api/lives/api-lives-report';


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

	async liveInfo(live: (Play|number)): Promise<Play> {
		const apiLivesInfo = new ApiManager(new ApiLivesInfo(live), Play.deserialize);
		const res = await apiLivesInfo.send();

		if ( res.data.length < 1 ) {
			throw Error('No have live info');
		}

		return res.data[0];
	}

	async liveAccept(live: (Play|number)): Promise<Play> {
		const apiLivesAccept = new ApiManager(new ApiLivesAccept(live), Play.deserialize, this.Token);
		const res = await apiLivesAccept.send();

		if ( res.response.status_code !== 200 ) {
			throw Error(res.response.detail);
		}

		return res.data[0];
	}

	async liveAccess(live: (Play|number)): Promise<Play> {
		const apiLivesAccess = new ApiManager(new ApiLivesAccess(live), Play.deserialize, this.Token);
		const res = await apiLivesAccess.send();

		return res.data[0];
	}

	async liveBlock(live: (Play|number), user: User): Promise<Play> {
		const apiLivesBlock = new ApiManager(new ApiLivesBlock(live, user), Play.deserialize, this.Token);
		const res = await apiLivesBlock.send();

		return res.data[0];
	}

	async liveCall(live: (Play|number)): Promise<Play> {
		const apiLivesCall = new ApiManager(new ApiLivesCall(live), Play.deserialize);
		const res = await apiLivesCall.send();

		return res.data[0];
	}

	async liveLike(live: (Play|number)): Promise<Play> {
		const apiLivesLike = new ApiManager(new ApiLivesLike(live), Play.deserialize, this.Token);
		const res = await apiLivesLike.send();

		return res.data[0];
	}

	async liveManager(live: (Play|number), users: User[]): Promise<Play> /* Unknown Result Instance */ {
		const apiLivesManager = new ApiManager(new ApiLivesManager(live, users), Play.deserialize, this.Token);
		const res = await apiLivesManager.send();

		return res.data[0];
	}

	async livePresent(live: (Play|number), sticker: Sticker): Promise<Budget> {
		const apiLivesPresent = new ApiManager(new ApiLivesPresent(live, sticker), Budget.deserialize, this.Token);
		const res = await apiLivesPresent.send();

		return res.data[0];
	}

	async liveReport(live: (Play|number), type: ReportType): Promise<ApiManager> {
		const apiLivesReport = new ApiManager(new ApiLivesReport(live, type), undefined, this.Token);
		const res = await apiLivesReport.send();

		return res;
	}

	async liveSponsor(live: (Play|number)): Promise<Play> {
		const apiLivesSponsor = new ApiManager(new ApiLivesSponsor(live), Play.deserialize);
		const res = await apiLivesSponsor.send();

		return res.data[0];
	}

	async livePlay(live: (Play|number)): Promise<Play> {
		const apiLivesPlay = new ApiManager(new ApiLivesPlay(live), Play.deserialize);
		const res = await apiLivesPlay.send();
		return res. data;
	}

	async liveCheck(live: (Play|number)): Promise<any> /* No have class for data deserialize */ {
		const apiLivesCheck = new ApiManager(new ApiLivesCheck(live));
		const res = await apiLivesCheck.send();

		return res.data;
	}

	async liveMembers(live: (Play|number)): Promise<User[]> {
		const apiLivesMembers = new ApiManager(new ApiLivesMembers(live), User.deserialize);
		const res = await apiLivesMembers.send();

		return res.data;
	}

	async liveShared(live: (Play|number)): Promise<Play> {
		const apiLivesShared = new ApiManager(new ApiLivesShared(live), Play.deserialize);
		const res = await apiLivesShared.send();

		return res.data[0];
	}

	async liveDiscovered(page_size: number = 6, is_adult: boolean = false): Promise<Play[]> {
		const apiLivesDiscovered = new ApiManager(new ApiLivesDiscovered(page_size, is_adult), Play.deserialize);
		const res = await apiLivesDiscovered.send();

		return res.data;
	}

	async liveSubscribed(page_size: number = 6, is_adult: boolean = false): Promise<Play[]> {
		const apiLivesSubscribed = new ApiManager(new ApiLivesSubscribed(page_size, is_adult), Play.deserialize);
		const res = await apiLivesSubscribed.send();

		return res.data;
	}

	async livePopular(page_size: number = 6, is_adult: boolean = false, category?: Category): Promise<Play[]> {
		const apiLivesPopular = new ApiManager(new ApiLivesPopular(page_size, is_adult, category), Play.deserialize);
		const res = await apiLivesPopular.send();

		return res.data;
	}

	async liveNewDJ(): Promise<Play[]> {
		const apiLivesNewDJ = new ApiManager(new ApiLivesNewDJ(), Play.deserialize);
		const res = await apiLivesNewDJ.send();

		return res.data;
	}

	async liveCategories(): Promise<any[]> /* No have class for data deserialize */ {
		const apiLivesCategories = new ApiManager(new ApiLivesCategories());
		const res = await apiLivesCategories.send();

		return res.data;
	}

	async liveBanner(): Promise<Play[]> {
		const apiLivesBanner = new ApiManager(new ApiLivesBanner(), Play.deserialize);
		const res = await apiLivesBanner.send();

		return res.data;
	}

	async liveJoin(live: (Play|number)): Promise<SocketManager> {
		const socket = this.liveSocket(live);
		await this.liveAccess(live);
		await socket.join();

		return socket;
	}

	liveSocket(live: (Play|number)): SocketManager {
		const socket = new SocketManager(live, this.client);
		return socket;
	}
}
