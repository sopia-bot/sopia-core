/*
 * api-play-mailbox-messages-write.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailboxMessages } from './api-play-mailbox-messages';
import { Mailbox } from '../../struct/play-struct';

export class ApiPlayMailboxMessagesWrite extends ApiPlayMailboxMessages {

	constructor(mailbox: (Mailbox|number), message: string, is_anonymous: boolean = false) {
		super(mailbox);

		this.method = 'POST';
		this.data = {
			is_anonymous,
			message,
		};
	}

}
