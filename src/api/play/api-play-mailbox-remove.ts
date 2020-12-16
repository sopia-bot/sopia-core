/*
 * api-play-mailbox-remove.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailboxInfo } from './api-play-mailbox-info';
import { Mailbox, MailboxMessage } from '../../struct/play-struct';

export class ApiPlayMailboxRemove extends ApiPlayMailboxInfo {

	constructor(mailbox: (Mailbox|number), message_id: (MailboxMessage|number)) {
		super(mailbox);

		if ( message_id instanceof MailboxMessage ) {
			message_id = message_id.id;
		}

		this.addSubUrl('remove');
		this.method = 'POST';
		this.data = {
			message_id,
		};
	}

}
