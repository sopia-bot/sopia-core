/*
 * update.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesRequestConfig } from '../';

export namespace ApiLivesSetManager {

	export const url = '/lives/0000/manager/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'manager_ids': number[];

		};

	}

}

export namespace ApiLivesBlock {

	export const url = '/lives/0000/block/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'block_user_id': number;

		};

	}

}

export namespace ApiLivesPresent {

	export const url = '/lives/0000/present/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'amount': number;

			'combo': number;

			'sticker': string;

		};

	}

}

export namespace ApiLivesClose {

	export const url = '/lives/0000/close/';
	export const method = 'POST';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'is_save': boolean;

		};

	}

}

export namespace ApiLivesUpdate {

	export const url = '/lives/0000/';
	export const method = 'PUT';

	export interface Request extends ApiLivesRequestConfig {

		'data': {

			'categories': string[];

			'device_unique_id': string;

			'donation': number;

			'engine': {

				'name': string;

				'host': string;

			};

			'invite_member_ids': number[];

			'is_adult': boolean;

			'is_save': boolean;

			'tags': string[];

			'title': string;

			'type': number;

			'welcome_message': string;

			'is_freeze': boolean;

			'is_mute': boolean;

		};

	}

}
