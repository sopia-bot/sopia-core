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
	PushSettings,
	ServiceAgreement,
	Tier
} from '../../spoon/';
import { CurrentLive, FanboardInfo } from '../';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class UserSearchProfile {

	@JsonProperty() current_live!: CurrentLive;

	@JsonProperty() current_live_id!: number;

	@JsonProperty() id!: number;

	@JsonProperty() is_active!: boolean;

	@JsonProperty() is_live!: boolean;

	@JsonProperty() is_verified!: boolean;

	@JsonProperty() is_vip!: boolean;

	@JsonProperty() nickname!: string;

	@JsonProperty() profile_url!: string;

	@JsonProperty() status!: number; // live on 1 is not 0

	@JsonProperty() tag!: string;

	@JsonProperty() tier!: Tier;

}

@Serializable()
export class UserMiniProfile extends UserSearchProfile {

	@JsonProperty() country!: Country;

	@JsonProperty() date_joined!: string;

	@JsonProperty() description!: string;

	@JsonProperty() follow_status!: number;

	@JsonProperty() follower_count!: number;

	@JsonProperty() following_count!: number;

	@JsonProperty() gender!: number;

	@JsonProperty() is_staff!: boolean;

	@JsonProperty() top_impressions!: number[];

	constructor() {

		super();

	}
}

@Serializable()
export class User extends UserMiniProfile {

	@JsonProperty() email!: string;

	@JsonProperty() is_public_cast_storage!: boolean;

	@JsonProperty() is_public_like!: boolean;

	@JsonProperty() sns_type!: string;

	@JsonProperty() top_fans!: User[];

	@JsonProperty() is_exist!: boolean;

	@JsonProperty() token!: string;

	@JsonProperty() is_dj!: boolean;

	@JsonProperty() regular_score!: number;

	@JsonProperty() is_fixedmng!: boolean;

	// deprecated
	@JsonProperty() fanboard_info!: FanboardInfo;

	// deprecated
	@JsonProperty() push_settings!: PushSettings;

	// deprecated
	@JsonProperty() service_agreement!: ServiceAgreement;

	// deprecated
	@JsonProperty() is_password_notice!: boolean;

	// deprecated
	@JsonProperty() guest_status!: number;

	constructor() {

		super();

	}
}

@Serializable()
export class LogonUser extends User {

	@JsonProperty() date_of_birth!: string;

	@JsonProperty() grants!: Grants;

	@JsonProperty() is_changed_username!: boolean;

	@JsonProperty() budget!: Budget;

	@JsonProperty() phone_number!: string;

	@JsonProperty() is_choice!: boolean;

	constructor() {

		super();

	}

}

@Serializable()
export class UserNameExist {

	@JsonProperty() is_exist!: boolean;

}
