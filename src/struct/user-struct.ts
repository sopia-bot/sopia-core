/*
 * user-struct.ts
 * Created on Fri Aug 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Tier } from './tier-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { PushSettings } from './push-settings-struct';
import { Budget } from './budget-struct';
import { Grants } from './grants-struct';
import { ServiceAgreement } from './service-agreement-struct';
import { PlayType } from './play-struct'; // for circular dependency
import { FanboardInfo } from './fanboard-info-struct';
import { Country } from '../enum/country';
import { Struct } from './struct';

@Serializable()
export class User extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('tag')
		public tag: string,

		@JsonProperty('nickname')
		public nickname: string,

		@JsonProperty('top_impressions')
		public topImpressions: number[],

		@JsonProperty('description')
		public description: string,

		@JsonProperty('profile_url')
		public profileUrl: string,

		@JsonProperty('tier')
		public tier: Tier,

		@JsonProperty('follow_status')
		public followStatus: number,

		@JsonProperty('follower_count')
		public followerCount: number,

		@JsonProperty('following_count')
		public followingCount: number,

		@JsonProperty('gender')
		public gender: number,

		@JsonProperty('is_active')
		public isActive: boolean,

		@JsonProperty('is_staff')
		public isStaff: boolean,

		@JsonProperty('is_vip')
		public isVip: boolean,

		@JsonProperty({ name: 'top_fans', type: User })
		public topFans: User[],

		@JsonProperty('date_joined')
		public dateJoined: Date,

		@JsonProperty('is_choice')
		public isChoice: boolean,

		@JsonProperty('is_exist')
		public isExist: boolean,

		@JsonProperty('fanboard_info')
		public fanboardInfo: FanboardInfo,

		@JsonProperty('current_live')
		public currentLive: PlayType,

		@JsonProperty('country')
		public country: Country,

		@JsonProperty('is_verified')
		public isVerified: boolean,

		@JsonProperty('token')
		public token: string,

		@JsonProperty('date_of_birth')
		public dateOfBirth: string,

		@JsonProperty('budget')
		public budget: Budget,

		@JsonProperty('grants')
		public grants: Grants,

		@JsonProperty('push_settings')
		public pushSettings: PushSettings,

		@JsonProperty('service_agreement')
		public serviceAgreement: ServiceAgreement,

		@JsonProperty('is_password_notice')
		public isPasswordNotice: boolean,

		@JsonProperty('is_changed_username')
		public isChangedUsername: boolean,

		@JsonProperty('is_public_cast_storage')
		public isPublicCastStorage: boolean,

		@JsonProperty('is_public_like')
		public isPublicLike: boolean,

		@JsonProperty('phone_number')
		public phoneNumber: string,

		@JsonProperty('regular_score')
		public regularScore: number,

		@JsonProperty('is_fixedmng')
		public isFixedManager: boolean,

		@JsonProperty('guest_status')
		public guestStatus: number

	) {
		super();
	}

}

export type UserType = User;



@Serializable()
export class UserVoice extends Struct {

	constructor(

		@JsonProperty('url')
		public url: (string|null),

		@JsonProperty('like_count')
		public likeCount: number,

		@JsonProperty('is_like')
		public isLike: boolean

	) {
		super();
	}

}



@Serializable()
export class UserSponsor extends Struct {

	constructor(

		@JsonProperty('to_user')
		public toUser: User,

		@JsonProperty('amount')
		public amount: number

	) {
		super();
	}
}



@Serializable()
export class UserTopfan extends Struct {

	constructor(

		@JsonProperty('total_spoon')
		public totalSpoon: number,

		@JsonProperty('user')
		public user: User

	) {
		super();
	}
}



@Serializable()
export class UserFanmessages extends Struct {

	constructor(

		@JsonProperty('message_id')
		public messageId: number,

		@JsonProperty('author')
		public author: User,

		@JsonProperty('to_user')
		public toUser: null,

		@JsonProperty('contents')
		public contents: string,

		@JsonProperty('message_count')
		public messageCount: number,

		@JsonProperty('is_blind')
		public isBlind: boolean,

		@JsonProperty('created')
		public created: Date

	) {
		super();
	}

}
