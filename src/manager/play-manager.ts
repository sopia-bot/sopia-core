/*
 * play-manager.ts
 * Created on Tue Dec 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { Client } from '../client';

import { ReportType } from '../enum/report';

import { Play, Vote, VoteItem, VoteResponse, PlayStatus, Mailbox, MailboxMessage } from '../struct/play-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiPlayStatus } from '../api/play/api-play-status';
import { ApiPlayVoteInfo } from '../api/play/api-play-vote-info';
import { ApiPlayVoteCreate } from '../api/play/api-play-vote-create';
import { ApiPlayVoteDo } from '../api/play/api-play-vote-do';
import { ApiPlayVoteClose } from '../api/play/api-play-vote-close';
import { ApiPlayMailboxInfo } from '../api/play/api-play-mailbox-info';
import { ApiPlayMailboxCreate } from '../api/play/api-play-mailbox-create';
import { ApiPlayMailboxMessages } from '../api/play/api-play-mailbox-messages';
import { ApiPlayMailboxMessagesWrite } from '../api/play/api-play-mailbox-messages-write';
import { ApiPlayMailboxCurrent } from '../api/play/api-play-mailbox-current';
import { ApiPlayMailboxRemove } from '../api/play/api-play-mailbox-remove';
import { ApiPlayMailboxReport } from '../api/play/api-play-mailbox-report';
import { ApiPlayMailboxClose } from '../api/play/api-play-mailbox-close';

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

	async playMailboxInfo(mailbox: (Mailbox|number)): Promise<Mailbox> {
		const res = await this.ApiReq<Mailbox>(Mailbox, ApiPlayMailboxInfo, mailbox);

		return res.data[0];
	}

	async playMailboxCreate(live: (Play|number), title: string): Promise<Mailbox> {
		const res = await this.ApiReq<Mailbox>(Mailbox, ApiPlayMailboxCreate, live, title);

		return res.data[0];
	}

	async playMailboxMessages(mailbox: (Mailbox|number)): Promise<ApiManager<MailboxMessage>> {
		const res = await this.ApiReq<MailboxMessage>(MailboxMessage, ApiPlayMailboxMessages, mailbox);

		return res;
	}

	async playMailboxMessagesWrite(mailbox: (Mailbox|number), message: string, is_anonymous: boolean = false): Promise<MailboxMessage> {
		const res = await this.ApiReq<MailboxMessage>(MailboxMessage, ApiPlayMailboxMessagesWrite, mailbox, message, is_anonymous);

		return res.data[0];
	}

	async playMailboxCurrent(mailbox: (Mailbox|number), message_id: (MailboxMessage|number), is_publish: boolean = true): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiPlayMailboxCurrent, mailbox, message_id, is_publish);

		return res;
	}

	async playMailboxRemove(mailbox: (Mailbox|number), message_id: (MailboxMessage|number)): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiPlayMailboxRemove, mailbox, message_id);

		return res;
	}

	async playMailboxReport(mailbox: (Mailbox|number), message_id: (MailboxMessage|number), report_type: ReportType, report_descr: string = ''): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiPlayMailboxReport, mailbox, message_id, report_type, report_descr);

		return res;
	}

	async playMailboxClose(mailbox: (Mailbox|number)): Promise<ApiManager<void>> {
		const res = await this.ApiReq<void>(undefined, ApiPlayMailboxClose, mailbox);

		return res;
	}

}
