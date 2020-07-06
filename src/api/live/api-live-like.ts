/*
 * api-live-like.ts
 * Created on Mon Jul 06 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Play } from '../../struct/play-struct';

export class ApiLiveLike extends ApiLives {
	constructor(
		private Live: Play,
	) {
		super(Live.id.toString());
		this.addSubUrl('like');
		this.method = 'post';
	}
}
