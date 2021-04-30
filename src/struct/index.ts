/*
 * index.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { UserMiniProfile } from './user/';

export interface Contents {

	'id': number;

	'title': string;

	'author': UserMiniProfile;

	'img_url': string;

	'tags': string[];

	'like_count': number;

	'created': string;

	'type': number; //unknown value

}

export * from './live/';
export * from './user/';
export * from './fanboard/';
export * from './play/';
