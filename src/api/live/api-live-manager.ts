/*
 * api-live-manager.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Play } from '../../struct/play-struct';
import { User } from '../../struct/user/user-struct';

export class ApiLiveManager extends ApiLives {
	constructor(
		private Live: Play,
		private Managers: User[],
	) {
		super(Live.id.toString());
		this.data = {
			manager_ids: Managers.map(m => m.id),
		};
		this.method = 'post';
	}
}
