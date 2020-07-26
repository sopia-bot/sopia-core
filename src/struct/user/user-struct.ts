/*
 * user-manager.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { FanboardInfo } from '../fanboard-info-struct';
import { Play } from '../play-struct';
import { Budget } from '../budget-struct';
import { Grants } from '../grants-struct';
import { PushSettings } from '../push-settings-struct';
import { ServiceAgreement } from '../service-agreement-struct';
import { Struct } from '../struct';

export class User implements Struct<User> {
	public id!: number;
	public tag!: string;
	public nickname!: string;
	public description!: string;
	public profileUrl!: string;
	public tier: any = null;
	public followerCount!: number;
	public followingCount!: number;
	public gender!: number;
	public isActive!: boolean;
	public isStaff!: boolean;
	public isVip!: boolean;
	public topFans?: User[];
	public dateJoined?: Date;
	public isChoice?: boolean;
	public isExist?: boolean;
	public fanboardInfo?: FanboardInfo;
	public currentLive?: Play = new Play();
	public token?: string;
	public dateOfBirth?: string;
	public budget?: Budget;
	public grants?: Grants;
	public pushSettings?: PushSettings;
	public serviceAgreement?: ServiceAgreement;
	public isPasswordNotice?: boolean;


	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		if ( this.id ) {
			obj['id'] = this.id;
		}

		if ( this.tag ) {
			obj['tag'] = this.tag;
		}

		if ( this.nickname ) {
			obj['nickname'] = this.nickname;
		}

		if ( this.description ) {
			obj['description'] = this.description;
		}

		if ( this.profileUrl ) {
			obj['profile_url'] = this.profileUrl;
		}

		if ( this.topFans ) {
			obj['top_fans'] = this.topFans;
		}

		if ( this.followerCount ) {
			obj['follower_count'] = this.followerCount;
		}

		if ( this.followingCount ) {
			obj['following_count'] = this.followingCount;
		}

		if ( this.gender ) {
			obj['gender'] = this.gender;
		}

		if ( typeof this.isActive !== 'undefined' ) {
			obj['is_active'] = this.isActive;
		}

		if ( typeof this.isStaff !== 'undefined' ) {
			obj['is_staff'] = this.isStaff;
		}

		if ( typeof this.isVip !== 'undefined' ) {
			obj['is_vip'] = this.isVip;
		}

		if ( this.dateJoined ) {
			obj['date_joined'] = this.dateJoined.toJSON();
		}

		if ( typeof this.isChoice !== 'undefined' ) {
			obj['is_choice'] = this.isChoice;
		}

		if ( typeof this.isExist !== 'undefined' ) {
			obj['is_exist'] = this.isExist;
		}

		if ( this.tier ) {
			obj['tier'] = this.tier;
		}

		if ( this.fanboardInfo ) {
			obj['fanboard_info'] = this.fanboardInfo;
		}

		if ( this.currentLive ) {
			obj['current_live'] = this.currentLive.toJSON();
		}

		if ( this.token ) {
			obj['token'] = this.token;
		}

		if ( this.dateOfBirth ) {
			obj['date_of_birth'] = this.dateOfBirth;
		}

		if ( this.budget ) {
			obj['budget'] = this.budget.toJSON();
		}

		if ( this.grants ) {
			obj['grants'] = this.grants.toJSON();
		}

		if ( this.pushSettings ) {
			obj['push_settings'] = this.pushSettings.toJSON();
		}

		if ( this.serviceAgreement ) {
			obj['service_agreement'] = this.serviceAgreement.toJSON();
		}

		if ( typeof this.isPasswordNotice !== 'undefined' ) {
			obj['is_password_notice'] = this.isPasswordNotice;
		}

		return obj;
	}

	readRawData(data: any): void {
		if ( data['id'] ) {
			this.id = data['id'];
		}

		if ( data['tag'] ) {
			this.tag = data['tag'];
		}

		if ( data['nickname'] ) {
			this.nickname = data['nickname'];
		}

		if ( data['description'] ) {
			this.description = data['description'];
		}

		if ( data['profile_url'] ) {
			this.profileUrl = data['profile_url'];
		}

		if ( data['top_fans'] ) {
			this.topFans = [];
			for ( const fan of data['top_fans'] ) {
				const user = new User();
				user.readRawData(fan['user']);
				this.topFans.push(user);
			}
		}

		if ( data['follower_count'] ) {
			this.followerCount = data['follower_count'];
		}

		if ( data['following_count'] ) {
			this.followingCount = data['following_count'];
		}

		if ( data['gender'] ) {
			this.gender = data['gender'];
		}

		if ( data['is_active'] ) {
			this.isActive = data['is_active'];
		}

		if ( data['is_staff'] ) {
			this.isStaff = data['is_staff'];
		}

		if ( data['is_vip'] ) {
			this.isVip = data['is_vip'];
		}

		if ( data['date_joined'] ) {
			this.dateJoined = new Date(data['date_joined']);
		}

		if ( data['is_choice'] ) {
			this.isChoice = data['is_choice'];
		}

		if ( data['is_exist'] ) {
			this.isExist = data['is_exist'];
		}

		if ( data['tier'] ) {
			this.tier = data['tier'];
		}

		if ( data['fanboard_info'] ) {
			this.fanboardInfo = FanboardInfo.deserialize(data['fanboard_info']);

		}

		if ( data['current_live'] ) {
			this.currentLive = Play.deserialize(data['current_live']);
		}

		if ( data['token'] ) {
			this.token = data['token'];
		}

		if ( data['date_of_birth'] ) {
			this.dateOfBirth = data['date_of_birth'];
		}

		if ( data['budget'] ) {
			this.budget = Budget.deserialize(data['budget']);
		}

		if ( data['grants'] ) {
			this.grants = Grants.deserialize(data['grants']);
		}

		if ( data['push_settings'] ) {
			this.pushSettings = data['push_settings'];
		}

		if ( data['service_agreement'] ) {
			this.serviceAgreement = data['service_agreement'];
		}

		if ( typeof data['is_password_notice'] !== 'undefined' ) {
			this.isPasswordNotice = data['is_password_notice'];
		}
	}

	static deserialize(data: any): User {
		const user = new User();
		user.readRawData(data);
		return user;
	}
}
