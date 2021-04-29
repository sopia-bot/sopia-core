/*
 * index.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { Contents, LiveCall } from '../';
import { Tier } from '../../spoon/';

export interface Live extends Contents {

	'categories': string[];

	'engine_name': string;

	'is_adult': boolean;

	'is_editors': boolean;

	'is_live_call': boolean;

	'is_verified': boolean;

	'is_vip': boolean;

	'live_call': LiveCall;

	'member_count': number;

	'os_type': any; //unknown type

	'room_token': string;

	'tier': Tier;

	'total_member_count': number;

	'url_hls': string;

}

export * from './current-live';
export * from './live-call';
