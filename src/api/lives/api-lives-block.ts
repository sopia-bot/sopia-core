/*
 * api-lives-block.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';
import { User } from '../../struct/user/user-struct';

export class ApiLivesBlock extends ApiLivesInfo {
	constructor(live: (Play|number), userInfo: User) {
		super(live);
		this.addSubUrl('block');
		this.data = {
			block_user_id: userInfo.id,
		};
		this.method = 'post';
	}
}
