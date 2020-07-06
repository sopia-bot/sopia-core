/*
 * api-live-block.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Play } from '../../struct/play-struct';
import { User } from '../../struct/user/user-struct';

export class ApiLiveBlock extends ApiLives {
	constructor(
		private Live: Play,
		private UserInfo: User,
	) {
		super(Live.id.toString());
		this.data = {
			block_user_id: UserInfo.id,
		};
		this.method = 'post';
	}
}
