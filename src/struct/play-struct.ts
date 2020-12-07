/*
 * play-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Tier } from './tier-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class LiveCall {

	constructor(

		@JsonProperty({ name: 'guests', type: User })
		public guests: User[],

		@JsonProperty('status')
		public status: number

	) {}

};

@Serializable()
export class Play {

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

		@JsonProperty('spoon_count')
		public spoonCount: number,

		@JsonProperty('reporters')
		public reporters: number[],

		@JsonProperty('is_donated')
		public isDonated: boolean,

		@JsonProperty('is_adult')
		public isAdult: boolean,

		@JsonProperty('is_vip')
		public isVip: boolean,

		@JsonProperty('created')
		public created: Date,

		@JsonProperty('url_hls')
		public urlHls: string,

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
		public liveCall: LiveCall,

		@JsonProperty('os_type')
		public osType: any, // unknown type.

		@JsonProperty('is_verified')
		public isVerified: boolean,

		@JsonProperty('room_token')
		public roomToken: any, // unknown type.

		@JsonProperty('is_editors')
		public isEditors: boolean,

		@JsonProperty('categories')
		public categories: string[]

	) {}

}

export type PlayType = Play;
