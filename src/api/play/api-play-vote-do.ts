/*
 * api-play-vote-do.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayVote } from './api-play-vote';
import { Play, Vote } from '../../struct/play-struct';

export class ApiPlayVoteDo extends ApiPlayVote {
	constructor(vote: (Vote|number), choice: number) {
		if ( vote instanceof Vote ) {
			vote = vote.id;
		}
		super(vote.toString());

		this.addSubUrl('vote');
		this.method = 'POST';
		this.data = {
			choice,
		};
	}
}
