/*
 * api-play-mailbox-close.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailbox } from './api-play-mailbox';
import { Mailbox } from '../../struct/play-struct';

export class ApiPlayMailboxClose extends ApiPlayMailbox {

	constructor(mailbox: (Mailbox|number)) {
		if ( mailbox instanceof Mailbox ) {
			mailbox = mailbox.id;
		}
		super(mailbox.toString());
		this.method = 'PUT';
	}

}
