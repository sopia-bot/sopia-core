/*
 * api-live-call.ts
 * Created on Mon Jul 20 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Play } from '../../struct/play-struct';

export class ApiLiveCall extends ApiLives {
	constructor(
		private Live: Play,
	) {
		super(Live.id.toString());
		this.addSubUrl('call');
	}
}
