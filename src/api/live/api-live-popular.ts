/*
 * api-live-popular.ts
 * Created on Sat Jul 11 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';

export class ApiLivePopular extends ApiLives {
	constructor(
		private page_size: number = 12,
		private is_adult: boolean = false,
		private category?: string
	) {
		super('popular');
		this.params = {
			page_size,
			is_adult,
			category,
		};
	}
}
