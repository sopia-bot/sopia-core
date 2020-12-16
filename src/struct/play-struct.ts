/*
 * play-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Tier } from './tier-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct, Arr2Proxy } from './struct';
import { MailMessageStat } from '../enum/play';

@Serializable()
export class LiveCall extends Struct {

	constructor(

		@JsonProperty({
			name: 'guests',
			type: User,
			onDeserialize: (v: any[]) => Arr2Proxy(v, User),
		})
		public guests: User[],

		@JsonProperty('status')
		public status: number

	) {
		super();
	}

};

@Serializable()
export class Play extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('author')
		public author: User,

		@JsonProperty('title')
		public title: string,

		@JsonProperty('img_url')
		public imgUrl: string,

		@JsonProperty('voice_url')
		public voiceUrl: string,

		@JsonProperty('tags')
		public tags: any[],

		@JsonProperty('type')
		public type: number,

		@JsonProperty('duration')
		public duration: number,

		@JsonProperty('like_count')
		public likeCount: number,

		@JsonProperty('play_count')
		public playCount: number,

		@JsonProperty('member_count')
		public memberCount: number,

		@JsonProperty('total_member_count')
		public totalMemberCount: number,

		@JsonProperty('total_spoon_count')
		public totalSpoonCount: number,

		@JsonProperty('spoon_count')
		public spoonCount: number,

		@JsonProperty('reporters')
		public reporters: number[],

		@JsonProperty('is_donated')
		public isDonated: boolean,

		@JsonProperty('is_adult')
		public isAdult: boolean,

		@JsonProperty({
			name: 'top_fans',
			type: User,
			onDeserialize: (value: any[]) => Arr2Proxy(value, User, (d: any) => d.user),
		})
		public topFans: User[],

		@JsonProperty('is_vip')
		public isVip: boolean,

		@JsonProperty('created')
		public created: (Date|null),

		@JsonProperty('url_hls')
		public urlHls: string,

		@JsonProperty('url')
		public url: string,

		@JsonProperty('welcome_message')
		public welcomeMessage: string,

		@JsonProperty('engine_name')
		public engineName: string,

		@JsonProperty('tier')
		public tier: (Tier|null),

		@JsonProperty('text_comment_count')
		public textCommentCount: number,

		@JsonProperty('is_live_call')
		public isLiveCall: boolean,

		@JsonProperty('text')
		public text: string,

		@JsonProperty('banner_img_url')
		public bannerImgUrl: string,

		@JsonProperty('voice_comment_count')
		public voiceCommentCount: number,

		@JsonProperty('is_event')
		public isEvent: boolean,

		@JsonProperty('is_private')
		public isPrivate: boolean,

		@JsonProperty('expired')
		public expired: any, // unknown type.

		@JsonProperty('is_composited')
		public isComposited: boolean,

		@JsonProperty('live_call')
		public liveCall: (LiveCall|null),

		@JsonProperty('os_type')
		public osType: any, // unknown type.

		@JsonProperty('manager_ids')
		public managerIds: number[],

		@JsonProperty('is_verified')
		public isVerified: boolean,

		@JsonProperty('room_token')
		public roomToken: any, // unknown type.

		@JsonProperty('is_editors')
		public isEditors: boolean,

		@JsonProperty('protocol')
		public protocol: string,

		@JsonProperty('msg_interval')
		public msgInterval: number,

		@JsonProperty('donation')
		public donation: number,

		@JsonProperty('is_join_now')
		public isJoinNow: boolean,

		@JsonProperty('is_save')
		public isSave: boolean,

		@JsonProperty('closed')
		public closed: (Date|null|string),

		@JsonProperty('close_status')
		public closeStatus: number,

		@JsonProperty('stream_name')
		public streamName: string,

		@JsonProperty('is_beginner')
		public isBeginner: boolean,

		@JsonProperty('is_call')
		public isCall: boolean,

		@JsonProperty('is_freeze')
		public isFreeze: boolean,

		@JsonProperty('is_mute')
		public isMute: boolean,

		@JsonProperty('is_like')
		public isLike: boolean,

		@JsonProperty('status')
		public status: number,

		@JsonProperty('categories')
		public categories: string[]

	) {
		super();
	}

}

export type PlayType = Play;


@Serializable()
export class VoteItem extends Struct {

	constructor(

		@JsonProperty('item_order')
		public itemOrder: number,

		@JsonProperty('name')
		public name: string,

		@JsonProperty('count')
		public count: number

	) {
		super();
	}

}

@Serializable()
export class Vote extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty({
			name: 'items',
			type: VoteItem,
			onDeserialize: (v: any[]) => Arr2Proxy(v, VoteItem),
		})
		public items: VoteItem[],

		@JsonProperty('title')
		public title: string,

		@JsonProperty('my_choice')
		public myChoice: (number|null),

		@JsonProperty('poll_count')
		public pollCount: number

	) {
		super();
	}

}

@Serializable()
export class VoteResponse extends Struct {

	constructor(

		@JsonProperty('choice')
		public choice: number,

		@JsonProperty('poll_id')
		public pollId: number,

		@JsonProperty('total_count')
		public totalCount: number

	) {
		super();
	}

}

@Serializable()
export class PlayContent extends Struct {

	constructor(

		@JsonProperty('play_id')
		public playId: number,

		@JsonProperty('play_type')
		public playType: string

	) {
		super();
	}

}

@Serializable()
export class PlayStatus extends Struct {

	constructor(

		@JsonProperty('in_progress')
		public inProgress: boolean,

		@JsonProperty('play_content')
		public playContent: PlayContent

	) {
		super();
	}

}

@Serializable()
export class Mailbox extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('title')
		public title: string,

		@JsonProperty('total_count')
		public total_count: number,

		@JsonProperty('is_publish')
		public isPublish: boolean

	) {
		super();
	}
}

@Serializable()
export class MailboxMessage extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('created')
		public created: Date,

		@JsonProperty('is_anonymous')
		public isAnonymous: boolean,

		@JsonProperty('mailbox_id')
		public mailboxId: number,

		@JsonProperty('message')
		public message: string,

		@JsonProperty('nickname')
		public nickname: string,

		@JsonProperty('profile_url')
		public profile_url: string,

		@JsonProperty('status')
		public status: MailMessageStat

	) {
		super();
	}
}
