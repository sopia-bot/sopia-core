/*
 * socket.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User, Live, Poll, Mailbox, MailboxMessage } from '../../struct/';

export interface LiveSocket {

	'event': string;

	'type': string;

	'appversion': string;

	'useragent': string;

	'live_id': number;

	'rooms': number;

	'trigger': string;

}

export interface LiveStateSocket extends LiveSocket {

	'user_id': number;

	'state': string;

	'close_status': number;

	'is_mute': boolean;

	'is_freeze': boolean;

	'is_call': boolean;

	'is_chat': string;

}

export interface LiveLazyUpdateSocket extends LiveSocket {

	'data': {

		'live': Live;

	};

}

export interface LiveRankSocket extends LiveSocket {

	'order': {

		'now': string;

		'prev': string;

		'incrby': number;

		'effect': string;

	};

}

export interface LiveJoinSocket extends LiveSocket {

	'data': {

		'author': User;

		'live': Live;

	};

}

export interface LiveUpdateSocket extends LiveSocket {

	'data': {

		'author': User;

		'live': Live;

	};

}

export interface LiveMessageSocket extends LiveSocket {

	'data': {

		'live': Live;

		'user': User;

	};

	'items': any[]; //unknown type

	'use_item': any[]; //unknown type

	'update_component': {

		'message': {

			'value': string;

		};

	};

}

export interface LiveLikeSocket extends LiveSocket {

	'data': {

		'live': Live;

		'author': User;

	};

}

export interface LivePresentSocket extends LiveSocket {

	'data': {

		'amount': number;

		'author': User;

		'combo': number;

		'donation_audio': string;

		'donation_msg': string;

		'item_template_id': number;

		'live': Live;

		'sticker': string;

		'sticker_type': number;

	};

}

export interface LivePlaySocket extends LiveSocket {

	'emit_type': string;

	'play_type': string;

	'poll': Poll;

	'mailbox': Mailbox|MailboxMessage;

}
