/*
 * api-live-info.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';

export class ApiLiveInfo extends ApiLives {
	constructor(LiveId: number) {
		super(LiveId.toString());
	}
}
