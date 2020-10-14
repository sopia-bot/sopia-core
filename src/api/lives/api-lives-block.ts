/*
 * api-lives-block.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';
import { User } from '../../struct/user-struct';

export class ApiLivesBlock extends ApiLivesInfo {
	constructor(live: (Play|number), userInfo: (User|number)) {
		super(live);
		this.addSubUrl('block');
		let id = userInfo;
		if ( id instanceof User ) {
			id = id.id;
		}

		this.data = {
			block_user_id: id,
		};
		this.method = 'post';
	}
}
