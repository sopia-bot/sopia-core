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
import { User, UserSponsor } from '../struct/user-struct';
import { Sticker } from '../struct/sticker-struct';

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
		const apiLivesInfo = new ApiManager<Play>(new ApiLivesInfo(live), Play);
		const res = await apiLivesInfo.send();

		if ( res.data.length < 1 ) {
			throw Error('No have live info');
		}

		return res.data[0];
	}

	async liveAccept(live: (Play|number)): Promise<Play> {
		const apiLivesAccept = new ApiManager<Play>(new ApiLivesAccept(live), Play, this.Token);
		const res = await apiLivesAccept.send();

		if ( res.response.status_code !== 200 ) {
			throw Error(res.response.detail);
		}

		return res.data[0];
	}

	async liveAccess(live: (Play|number)): Promise<Play> {
		const apiLivesAccess = new ApiManager<Play>(new ApiLivesAccess(live), Play, this.Token);
		const res = await apiLivesAccess.send();

		return res.data[0];
	}

	async liveBlock(live: (Play|number), user: User): Promise<Play> {
		const apiLivesBlock = new ApiManager<Play>(new ApiLivesBlock(live, user), Play, this.Token);
		const res = await apiLivesBlock.send();

		return res.data[0];
	}

	async liveCall(live: (Play|number)): Promise<Play> {
		const apiLivesCall = new ApiManager<Play>(new ApiLivesCall(live), Play);
		const res = await apiLivesCall.send();

		return res.data[0];
	}

	async liveLike(live: (Play|number)): Promise<Play> {
		const apiLivesLike = new ApiManager<Play>(new ApiLivesLike(live), Play, this.Token);
		const res = await apiLivesLike.send();

		return res.data[0];
	}

	async liveManager(live: (Play|number), users: User[]): Promise<Play> {
		const apiLivesManager = new ApiManager<Play>(new ApiLivesManager(live, users), Play, this.Token);
		const res = await apiLivesManager.send();

		return res.data[0];
	}

	async livePresent(live: (Play|number), sticker: Sticker): Promise<Budget> {
		const apiLivesPresent = new ApiManager<Budget>(new ApiLivesPresent(live, sticker), Budget, this.Token);
		const res = await apiLivesPresent.send();

		return res.data[0];
	}

	async liveReport(live: (Play|number), type: ReportType): Promise<ApiManager<void>> {
		const apiLivesReport = new ApiManager<void>(new ApiLivesReport(live, type), undefined, this.Token);
		const res = await apiLivesReport.send();

		return res;
	}

	async liveSponsor(live: (Play|number)): Promise<ApiManager<UserSponsor>> /* for next, previous request */ {
		const apiLivesSponsor = new ApiManager<UserSponsor>(new ApiLivesSponsor(live), UserSponsor, this.Token);
		const res = await apiLivesSponsor.send();

		return res;
	}

	async livePlay(live: (Play|number)): Promise<Play> {
		const apiLivesPlay = new ApiManager<Play>(new ApiLivesPlay(live), Play);
		const res = await apiLivesPlay.send();
		return res. data;
	}

	async liveCheck(live: (Play|number)): Promise<any> /* No have class for data deserialize */ {
		const apiLivesCheck = new ApiManager<void>(new ApiLivesCheck(live), undefined, this.Token);
		const res = await apiLivesCheck.send();

		return res.data;
	}

	async liveMembers(live: (Play|number)): Promise<ApiManager<User>> /* for next, previous request */ {
		const apiLivesMembers = new ApiManager<User>(new ApiLivesMembers(live), User);
		const res = await apiLivesMembers.send();

		return res.data;
	}

	async liveShared(live: (Play|number)): Promise<Play> {
		const apiLivesShared = new ApiManager<Play>(new ApiLivesShared(live), Play);
		const res = await apiLivesShared.send();

		return res.data[0];
	}

	async liveDiscovered(page_size: number = 6, is_adult: boolean = false): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiLivesDiscovered = new ApiManager<Play>(new ApiLivesDiscovered(page_size, is_adult), Play);
		const res = await apiLivesDiscovered.send();

		return res;
	}

	async liveSubscribed(page_size: number = 6, is_adult: boolean = false): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiLivesSubscribed = new ApiManager<Play>(new ApiLivesSubscribed(page_size, is_adult), Play);
		const res = await apiLivesSubscribed.send();

		return res;
	}

	async livePopular(page_size: number = 6, is_adult: boolean = false, category?: Category): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiLivesPopular = new ApiManager<Play>(new ApiLivesPopular(page_size, is_adult, category), Play);
		const res = await apiLivesPopular.send();

		return res;
	}

	async liveNewDJ(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const apiLivesNewDJ = new ApiManager<Play>(new ApiLivesNewDJ(), Play);
		const res = await apiLivesNewDJ.send();

		return res;
	}

	async liveCategories(): Promise<any[]> /* No have class for data deserialize */ {
		const apiLivesCategories = new ApiManager<void>(new ApiLivesCategories());
		const res = await apiLivesCategories.send();

		return res.data;
	}

	async liveBanner(): Promise<Play[]> /* fixed 5 live items */ {
		const apiLivesBanner = new ApiManager<Play>(new ApiLivesBanner(), Play);
		const res = await apiLivesBanner.send();

		return res.data;
	}

	async liveJoin(live: (Play|number)): Promise<SocketManager> {
		const socket = this.liveSocket(live);
		await this.liveAccess(live);
		await socket.join();

		this.client.liveSocketMap.set(
			(live instanceof Play) ? live.id : live,
			socket
		);

		return socket;
	}

	private liveSocket(live: (Play|number)): SocketManager {
		const socket = new SocketManager(live, this.client);
		return socket;
	}
}
