/*
 * api-lives-token.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesToken extends ApiLivesInfo {
	constructor(live: (Play|number), device_unique_id: string) {
		super(live);
		this.method = 'post';
		this.addSubUrl('token');
		this.data = {
			device_unique_id,
		};
	}
}
