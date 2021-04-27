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
} from '../spoon/';
import { UserMiniProfile } from '.';

export interface User extends UserMiniProfile {

	'email': string;

	'is_public_cast_storage': boolean;

	'is_public_like': boolean;

	'sns_type': string;

	'top_fans': User[];

	'is_exist': boolean;

	'token': string;

	// deprecated
	'fanboard_info': FanboardInfo;

	// deprecated
	'push_settings': PushSettings;

	// deprecated
	'service_agreement': ServiceAgreement;

	// deprecated
	'is_password_notice': boolean;

	// deprecated
	'regular_score': number;

	// deprecated
	'is_fixedmng': boolean;

	// deprecated
	'guest_status': number;

}

export * from './profile/';
