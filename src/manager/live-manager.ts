/*
 * live-manager.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Client } from '../client';

import { Play } from '../struct/play-struct';

import { ApiManager } from './api-manager';
import { ApiLiveInfo } from '../api/live/api-live-info';
import { ApiLiveDiscovered } from '../api/live/api-live-discovered';

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

	async liveInfo(LiveId: number) {
		const apiLiveInfo = new ApiManager(new ApiLiveInfo(LiveId), Play.deserialize);
		const res = await apiLiveInfo.send();
		return res;
	}

	async liveDiscovered(LiveId: number) {
		const apiLiveDiscovered = new ApiManager(new ApiLiveDiscovered(LiveId), Play.deserialize);
		const res = await apiLiveDiscovered.send();
		return res;
	}
}
