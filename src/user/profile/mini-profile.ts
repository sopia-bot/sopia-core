/*
 * mini-profile.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { UserSearchProfile } from '.';
import { Country } from '../../spoon/';


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
