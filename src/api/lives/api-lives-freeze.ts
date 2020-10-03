/*
 * api-lives-freeze.ts
 * Created on Tue Sep 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesFreeze extends ApiLivesInfo {
	constructor(live: (Play|number), freeze: boolean) {
		super(live);
		this.data = {
			is_freeze: freeze,
		};
		this.method = 'PUT';
	}
}
