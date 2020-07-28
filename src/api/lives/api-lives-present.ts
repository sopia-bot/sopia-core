/*
 * api-lives-present.ts
 * Created on Tue Jul 28 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';
import { Sticker } from '../../struct/sticker/sticker-struct';

export class ApiLivesPresent extends ApiLivesInfo {
	constructor(live: (Play|number), sticker: (Sticker)) {
		super(live);
		this.addSubUrl('present');
		this.method = 'post';
		this.data = {
			amount: sticker.price,
			sticker: sticker.name,
		}
	}
}
