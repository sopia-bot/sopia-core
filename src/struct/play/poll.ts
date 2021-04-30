/*
 * poll.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

export interface PollItem {

	'item_order': number;

	'name': string;

	'count': number;

}

export interface Poll {

	'id': number;

	'items': PollItem[];

	'title': string;

	'my_choice': number;

	'poll_count': number;

	'total_count': number;

}

export interface VoteResponse {

	'choice': number;

	'poll_id': number;

	'total_count': number;

}
