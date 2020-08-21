/*
 * api-lives-manager.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';
import { User } from '../../struct/user-struct';

export class ApiLivesManager extends ApiLivesInfo {
	constructor(live: (Play|number), managers: User[]) {
		super(live);
		this.addSubUrl('manager');
		this.data = {
			manager_ids: managers.map(m => m.id),
		};
		this.method = 'post';
	}
}
