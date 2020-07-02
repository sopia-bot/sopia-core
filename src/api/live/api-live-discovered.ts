/*
 * api-live-discovered.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { LoginType } from '../../enum/login-type';
import { Country } from '../../enum/country';

export class ApiLiveDiscovered extends ApiLives {
	constructor(
		private page_size: number = 6,
		private is_adult: boolean = false,
	) {
		super('discovered');
		this.params = {
			page_size,
			is_adult,
		};
	}
}
