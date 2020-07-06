/*
 * api-live-subscribed.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';

export class ApiLiveSubscribed extends ApiLives {
	constructor(
		private page_size: number = 6,
		private is_adult: boolean = false,
	) {
		super('subscribed');
		this.params = {
			page_size,
			is_adult,
		};
	}
}
