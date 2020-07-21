/*
 * api-lives-like.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesLike extends ApiLivesInfo {
	constructor(live: (Play|number)) {
		super(live);
		this.addSubUrl('like');
		this.method = 'post';
	}
}
