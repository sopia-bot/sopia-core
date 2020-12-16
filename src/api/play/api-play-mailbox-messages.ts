/*
 * api-play-mailbox-messages.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailboxInfo } from './api-play-mailbox-info';
import { Mailbox } from '../../struct/play-struct';

export class ApiPlayMailboxMessages extends ApiPlayMailboxInfo {

	constructor(mailbox: (Mailbox|number)) {
		super(mailbox);
		this.addSubUrl('messages');
	}

}
