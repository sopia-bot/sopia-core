/*
 * search-profile.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { CurrentLive } from '../../live/';
import { Tier } from '../../spoon/';

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
