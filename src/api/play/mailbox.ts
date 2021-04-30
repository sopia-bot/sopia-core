/*
 * mailbox.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesRequestConfig } from '../';
import { ReportType } from '../../spoon/';

export namespace ApiPlayMailboxCreate {

	export const url = '/play/mailbox/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'live_id': number;

			'title': string;

		};

	}

}

export namespace ApiPlayGetMailbox {

	export const url = '/play/mailbox/0000/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

// Open the mail message to members
export namespace ApiPlayMailboxCurrent {

	export const url = '/play/mailbox/0000/current/';
	export const method = 'PUT';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'is_publish': boolean;

			'message_id': number;

		};

	}

}

export namespace ApiPlayMailboxClose {

	export const url = '/play/mailbox/0000/';
	export const method = 'PUT';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiPlayMailboxReportMessage {

	export const url = '/play/mailbox/0000/report/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'message_id': number;

			'report_type': ReportType;

		};

	}

}

export namespace ApiPlayMailboxRemoveMessage {

	export const url = '/play/mailbox/0000/remove/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'message_id': number;

		};

	}

}

export namespace ApiPlayMailboxGetMessages {

	export const url = '/play/mailbox/0000/messages/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiPlayMailboxWriteMessage {

	export const url = '/play/mailbox/0000/messages/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'is_anonymous': boolean;

			'message': string;

		};

	}

}
