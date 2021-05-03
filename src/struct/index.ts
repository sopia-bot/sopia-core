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

export interface UrlInfo {

	url: string;

	key: string;

	content_type: string;

}

export interface ProfileUrlInfo {

	voice: UrlInfo;

	image: UrlInfo;

}

export * from './live/';
export * from './user/';
export * from './fanboard/';
export * from './play/';
