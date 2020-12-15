/*
 * api-play-vote-close.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayVote } from './api-play-vote';
import { Play, Vote } from '../../struct/play-struct';

export class ApiPlayVoteClose extends ApiPlayVote {
	constructor(vote: (Vote|number)) {
		if ( vote instanceof Vote ) {
			vote = vote.id;
		}
		super(vote.toString());

		this.method = 'PUT';
	}
}
