/*
 * mailbox.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { MailMessageStat } from '../../spoon/';

export interface Mailbox {

	'id': number;

	'title': string;

	'total_count': number;

	'is_publish': boolean;

}

export interface MailboxMessage {

	'id': number;

	'created': string;

	'is_anonymous': boolean;

	'mailbox_id': number;

	'message': string;

	'nickname': string;

	'profile_url': string;

	'status': MailMessageStat;

}
