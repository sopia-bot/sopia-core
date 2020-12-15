/*
 * api-play-vote.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlay } from '../api-play';
import { Play } from '../../struct/play-struct';

export class ApiPlayVote extends ApiPlay {
	constructor(api?: string) {
		super('poll');

		if ( api ) {
			this.addSubUrl(api);
		}
	}
}
