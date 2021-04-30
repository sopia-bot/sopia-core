/*
 * poll.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesRequestConfig } from '../';
import { PollItem } from '../../struct/';

export namespace ApiPlayGetPoll {

	export const url = '/play/poll/0000/';
	export const method = 'GET';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiPlayPollCreate {

	export const url = '/play/poll/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'live_id': number;

			'title': string;

			'items': PollItem[];

		};

	}

}

export namespace ApiPlayPollClose {

	export const url = '/play/poll/0000/';
	export const method = 'PUT';

	export interface Request extends ApiLivesRequestConfig {

	}

}

export namespace ApiPlayPollVote {

	export const url = '/play/poll/0000/vote/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'choice': number;

		};

	}

}
