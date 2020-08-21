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
		public isLiveCall: boolean

	) {}

}
