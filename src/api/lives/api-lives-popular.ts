/*
 * api-live-popular.ts
 * Created on Sat Jul 11 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';

export class ApiLivePopular extends ApiLives {
	constructor(page_size: number = 12, is_adult: boolean = false, category?: string) {
		super('popular');
		this.params = {
			page_size,
			is_adult,
			category,
		};
	}
}
