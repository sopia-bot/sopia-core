/*
 * profile.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import {
	Grants,
	Budget,
	Country,
	Tier
} from '../../spoon/';
import { User, CurrentLive } from '../';

export interface UserSearchProfile {

	'current_live': CurrentLive;

	'current_live_id': number;

	'id': number;

	'is_active': boolean;

	'is_live': boolean;

	'is_verified': boolean;

	'is_vip': boolean;

	'nickname': string;

	'profile_url': string;

	'status': number; // live on 1 is not 0

	'tag': string;

	'tier': Tier;

}

export interface LogonUser extends User {

	'date_of_birth': string;

	'grants': Grants;

	'is_changed_username': boolean;

	'budget': Budget;

	'phone_number': string;

	'is_choice': boolean;
}


export interface UserMiniProfile extends UserSearchProfile {

	'country': Country;

	'date_joined': string;

	'description': string;

	'follow_status': number;

	'follower_count': number;

	'following_count': number;

	'gender': number;

	'is_staff': boolean;

	'top_impressions': number[];

}

