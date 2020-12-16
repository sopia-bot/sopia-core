/*
 * api-play-mailbox-report.ts
 * Created on Wed Dec 16 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiPlayMailboxInfo } from './api-play-mailbox-info';
import { Mailbox, MailboxMessage } from '../../struct/play-struct';
import { ReportType } from '../../enum/report';

export class ApiPlayMailboxReport extends ApiPlayMailboxInfo {

	constructor(mailbox: (Mailbox|number), message_id: (MailboxMessage|number), report_type: ReportType, report_descr: string = '') {
		super(mailbox);

		if ( message_id instanceof MailboxMessage ) {
			message_id = message_id.id;
		}

		this.addSubUrl('report');
		this.method = 'POST';
		this.data = {
			message_id,
			report_type,
			report_descr,
		};
	}

}
