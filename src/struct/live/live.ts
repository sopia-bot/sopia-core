/*
 * live.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User, Contents, LiveCall } from '../../';
import { Tier } from '../../spoon/';

export interface LiveInfo extends Contents {

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

export interface Live extends LiveInfo {

	'welcome_message': string;

	'top_fans': { user: User }[];

	'url': string;

	'stream_name': string;

	'manager_ids': number[];

	'is_like': boolean;

	'is_freeze': boolean;

	'is_mute': boolean;

	'is_beginner': boolean;

	'is_call': boolean;

	'closed': string;

	'close_status': number;

	'is_save': boolean;

	'is_join_now': boolean;

	'protocol': string;

	'msg_interval': number;

	'donation': number;

	'close_air_time': string;

}
