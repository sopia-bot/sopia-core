/*
 * api-play-mailbox-create.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailbox } from './api-play-mailbox';
import { Play } from '../../struct/play-struct';

export class ApiPlayMailboxCreate extends ApiPlayMailbox {

	constructor(live: (Play|number), title: string) {
		super();

		if ( live instanceof Play ) {
			live = live.id;
		}

		this.method = 'POST';
		this.data = {
			live_id: live,
			title,
		};
	}

}
