/*
 * api-play-status.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlay } from '../api-play';
import { Play } from '../../struct/play-struct';

export class ApiPlayStatus extends ApiPlay {
	constructor(live: (Play|number)) {
		super('status');

		if ( live instanceof Play ) {
			live = live.id;
		}

		this.params = {
			live_id: live,
		};
	}
}
