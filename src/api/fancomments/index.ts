/*
 * index.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { FanMessages } from '../../';

export namespace ApiModifyFancomments {

	export const url = '/fancomments/0000/messages/';
	export const method = 'PUT';

	export interface Request extends RequestConfig {

		'data': {

			'contents': string;

			'is_parent': boolean;

		};

	}

	// none response
	export interface Response {

	}

}

export namespace ApiRemoveFancomments {

	export const url = '/fancomments/0000/';
	export const method = 'DELETE';

	export interface Request extends RequestConfig {

	}

	// none response
	export interface Response {

	}

}

export namespace ApiBlindFancomments {

	export const url = '/fancomments/0000/blind/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

	}

	// TODO: Unknown response data type
	export interface Response {

	}

}

export namespace ApiGetFancommentsMessages {

	export const url = '/fancomments/0000/messages/';
	export const method = 'GET';

	export interface Request extends RequestConfig {

	}

	export interface Response extends FanMessages {

	}

}

export namespace ApiFancommentsWriteMessages {

	export const url = '/fancomments/0000/messages/';
	export const method = 'POST';

	export interface Request extends RequestConfig {

		'data': {

			'contents': string;

		};

	}

	export interface Response extends FanMessages {

	}

}

export namespace ApiFancommentsModifyMessages {

	export const url = '/fancomments/0000/messages/';
	export const method = 'PUT';

	export interface Request extends RequestConfig {

		'data': {

			'contents': string;

			'fanmsg_id': number;

			'is_parent': boolean;

		};

	}

	// none response
	export interface Response {

	}

}

export namespace ApiFancommentsRemoveMessages {

	export const url = '/fancomments/0000/messages/';
	export const method = 'DELETE';

	export interface Request extends RequestConfig {

		'params': {

			'fanmsg_id': number;

			'is_parent': boolean;

		};

	}

	// none response
	export interface Response {

	}

}
