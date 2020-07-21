/*
 * api-lives-info.ts
 * Created on Wed Jul 01 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Play } from '../../struct/play-struct';

export class ApiLivesInfo extends ApiLives {
	constructor(live: (Play|number)) {
		if ( live instanceof Play ) {
			super(live.id.toString());
		} else {
			super(live.toString());
		}
	}
}
