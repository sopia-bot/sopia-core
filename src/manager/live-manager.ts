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
import { Manager } from '../struct/manager-struct';

import { Category } from '../enum/category';
import { ReportType } from '../enum/report';
import { LiveChatState, LiveType } from '../enum/socket-live';

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
import { ApiLivesCallRequest } from '../api/lives/api-lives-call-request';
import { ApiLivesFreeze } from '../api/lives/api-lives-freeze';


export class LiveManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async liveInfo(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesInfo, live);

		if ( res.data.length < 1 ) {
			throw Error('No have live info');
		}

		return res.data[0];
	}

	async liveAccept(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesAccept, live);

		if ( res.response.status_code !== 200 ) {
			throw Error(res.response.detail);
		}

		return res.data[0];
	}

	async liveAccess(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesAccess, live);

		return res.data[0];
	}

	async liveBlock(live: (Play|number), user: (User|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesBlock, live, user);

		return res.data[0];
	}

	async liveCall(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesCall, live);

		return res.data[0];
	}

	async liveCallRequest(live: (Play|number)): Promise<User> {
		const res = await this.ApiReq<User>(User, ApiLivesCallRequest, live);

		return res.data[0];
	}

	async liveLike(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesLike, live);

		return res.data[0];
	}

	async liveManager(live: (Play|number), users: User[]): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesManager, live, users);

		return res.data[0];
	}

	async livePresent(live: (Play|number), sticker: Sticker): Promise<Budget> {
		const res = await this.ApiReq<Budget>(Budget, ApiLivesPresent, live, sticker);

		return res.data[0];
	}

	async liveReport(live: (Play|number), type: ReportType): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiLivesReport, live, type);

		return res;
	}

	async liveFreeze(live: (Play|number), freeze: boolean): Promise<ApiManager<Play>> {
		const res = await this.ApiReq<Play>(Play, ApiLivesFreeze, live, freeze);

		return res.data[0];
	}

	async liveSponsor(live: (Play|number)): Promise<ApiManager<UserSponsor>> /* for next, previous request */ {
		const res = await this.ApiReq<UserSponsor>(UserSponsor, ApiLivesSponsor, live);

		return res;
	}

	async livePlay(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesPlay, live);

		return res.data[0];
	}

	async liveCheck(live: (Play|number)): Promise<any> /* No have class for data deserialize */ {
		const res = await this.ApiReq<void>(undefined, ApiLivesCheck, live);

		return res.data;
	}

	async liveMembers(live: (Play|number)): Promise<ApiManager<User>> /* for next, previous request */ {
		const res = await this.ApiReq<User>(User, ApiLivesMembers, live);

		return res.data;
	}

	async liveShared(live: (Play|number)): Promise<Play> {
		const res = await this.ApiReq<Play>(Play, ApiLivesShared, live);

		return res.data[0];
	}

	async liveDiscovered(page_size: number = 6, is_adult: boolean = false): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiLivesDiscovered, page_size, is_adult);

		return res;
	}

	async liveSubscribed(page_size: number = 6, is_adult: boolean = false): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiLivesSubscribed, page_size, is_adult);

		return res;
	}

	async livePopular(page_size: number = 6, is_adult: boolean = false, category?: Category): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiLivesPopular, page_size, is_adult, category);

		return res;
	}

	async liveNewDJ(): Promise<ApiManager<Play>> /* for next, previous request */ {
		const res = await this.ApiReq<Play>(Play, ApiLivesNewDJ);

		return res;
	}

	async liveCategories(): Promise<any[]> /* No have class for data deserialize */ {
		const res = await this.ApiReq<void>(undefined, ApiLivesCategories);

		return res.data;
	}

	async liveBanner(): Promise<Play[]> /* fixed 5 live items */ {
		const res = await this.ApiReq<Play>(Play, ApiLivesBanner);

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

	liveUserChatBan(live: (Play|number), target: (User|number), state: LiveChatState): void {
		if ( live instanceof Play ) {
			live = live.id;
		}

		if ( target instanceof User ) {
			target = target.id;
		}

		const socket = this.client.liveSocketMap.get(live);
		if ( socket ) {
			socket.send({
				type: LiveType.LIVE_REQ,
				detail: {
					command: 'chat',
					state,
					target: target.toString(),
				},
				live_id: live.toString(),
				useragent: this.client.userAgent,
				appversion: this.client.appVersion,
				event: 'live_command',
				user_id: this.client.user.id.toString(),
			});
		} else {
			throw Error('Can not find live socket from id ' + live);
		}
	}

	private liveSocket(live: (Play|number)): SocketManager {
		const socket = new SocketManager(live, this.client);
		return socket;
	}
}
