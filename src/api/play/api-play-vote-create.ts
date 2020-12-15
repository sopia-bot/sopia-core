/*
 * api-play-vote-create.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayVote } from './api-play-vote';
import { Play, VoteItem } from '../../struct/play-struct';

export class ApiPlayVoteCreate extends ApiPlayVote {
	constructor(live: (Play|number), title: string, items: VoteItem[]) {
		super();

		if ( live instanceof Play ) {
			live = live.id;
		}

		this.method = 'POST';
		this.data = {
			live_id: live,
			title,
			items: items,
		};
	}
}
