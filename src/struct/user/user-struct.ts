/*
 * user-manager.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from '../../sopia';
import { FanboardInfo } from '../fanboard/fanboard-info-struct';
import { Play } from '../play-struct';

export class User extends SOPIA {
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


	constructor() {
		super();
	}

	readRawData(data: any) {
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
	}

	static deserialize(data: any) {
		const user = new User();
		user.readRawData(data);
		return user;
	}
}
