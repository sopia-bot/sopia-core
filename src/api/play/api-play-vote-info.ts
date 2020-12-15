/*
 * api-play-vote-info.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayVote } from './api-play-vote';
import { Play, Vote } from '../../struct/play-struct';

export class ApiPlayVoteInfo extends ApiPlayVote {
	constructor(vote: (Vote|number)) {
		if ( vote instanceof Vote ) {
			vote = vote.id;
		}
		super(vote.toString());
	}
}
