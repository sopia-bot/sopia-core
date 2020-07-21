/*
 * live-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Client } from '../client';

import { SocketManager } from './socket-manager';
import { Play } from '../struct/play-struct';

import { ApiManager } from './api-manager';
import { ApiLivesInfo } from '../api/lives/api-lives-info';
import { ApiLivesDiscovered } from '../api/lives/api-lives-discovered';

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

	async liveDiscovered(page_size: number = 6, is_adult: boolean = false) {
		const apiLivesDiscovered = new ApiManager(new ApiLivesDiscovered(page_size, is_adult), Play.deserialize);
		const res = await apiLivesDiscovered.send();
		return res;
	}

	liveSocket(live: Play) {
		const socket = new SocketManager(live, this.client);
		return socket;
	}
}
