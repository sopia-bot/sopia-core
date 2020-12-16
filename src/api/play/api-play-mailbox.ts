/*
 * api-play-mailbox.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlay } from '../api-play';
import { Play } from '../../struct/play-struct';

export class ApiPlayMailbox extends ApiPlay {
	constructor(api?: string) {
		super('mailbox');

		if ( api ) {
			this.addSubUrl(api);
		}
	}
}
