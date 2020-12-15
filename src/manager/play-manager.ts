/*
 * play-manager.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Play, Vote, VoteItem, VoteResponse, PlayStatus } from '../struct/play-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiPlayStatus } from '../api/play/api-play-status';
import { ApiPlayVoteInfo } from '../api/play/api-play-vote-info';
import { ApiPlayVoteCreate } from '../api/play/api-play-vote-create';
import { ApiPlayVoteDo } from '../api/play/api-play-vote-do';
import { ApiPlayVoteClose } from '../api/play/api-play-vote-close';

export class PlayManager extends Manager {

	constructor(client: Client) {
		super(client);
	}

	async playStatus(live: (Play|number)): Promise<PlayStatus> {
		const res = await this.ApiReq<PlayStatus>(PlayStatus, ApiPlayStatus, live);

		return res.data[0];
	}

	async playVoteInfo(vote: (Vote|number)): Promise<Vote> {
		const res = await this.ApiReq<Vote>(Vote, ApiPlayVoteInfo, vote);

		return res.data[0];
	}

	async playVoteCreate(live: (Play|number), title: string, items: VoteItem[]): Promise<Vote> {
		const res = await this.ApiReq<Vote>(Vote, ApiPlayVoteCreate, live, title, items);

		return res.data[0];
	}

	async playVoteDo(vote: (Vote|number), choice: number): Promise<VoteResponse> {
		const res = await this.ApiReq<VoteResponse>(VoteResponse, ApiPlayVoteDo, vote, choice);

		return res.data[0];
	}

	async playVoteClose(vote: (Vote|number)): Promise<Vote> {
		const res = await this.ApiReq<Vote>(Vote, ApiPlayVoteClose, vote);

		return res.data[0];
	}

}
