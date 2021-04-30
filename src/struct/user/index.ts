/*
 * index.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { FanboardInfo } from '../fanboard/';
import {
	Country,
	PushSettings,
	ServiceAgreement
} from '../../spoon/';
import { UserMiniProfile } from '.';

export interface UserNameExist {

	'is_exist': boolean;

}

export interface User extends UserMiniProfile {

	'email': string;

	'is_public_cast_storage': boolean;

	'is_public_like': boolean;

	'sns_type': string;

	'top_fans': User[];

	'is_exist': boolean;

	'token': string;

	'is_dj': boolean;

	'regular_score': number;

	'is_fixedmng': boolean;

	// deprecated
	'fanboard_info': FanboardInfo;

	// deprecated
	'push_settings': PushSettings;

	// deprecated
	'service_agreement': ServiceAgreement;

	// deprecated
	'is_password_notice': boolean;

	// deprecated
	'guest_status': number;

}

export * from './profile';
export * from './live';
