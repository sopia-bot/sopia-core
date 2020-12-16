/*
 * api-play-mailbox-current.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailboxInfo } from './api-play-mailbox-info';
import { Mailbox, MailboxMessage } from '../../struct/play-struct';

export class ApiPlayMailboxCurrent extends ApiPlayMailboxInfo {

	constructor(mailbox: (Mailbox|number), message_id: (MailboxMessage|number), is_publish: boolean = true) {
		super(mailbox);
		this.addSubUrl('current');

		if ( message_id instanceof MailboxMessage ) {
			message_id = message_id.id;
		}

		this.method = 'PUT';
		this.data = {
			is_publish,
			message_id,
		};
	}

}
