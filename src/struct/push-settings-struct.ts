/*
 * push-settings-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class PushSettings {

	constructor(

		@JsonProperty('bj')
		public bj: boolean,

		@JsonProperty('like_or_present')
		public likeOrPresent: boolean,

		@JsonProperty('comment_or_mention_cast')
		public commentOrMentionCast: boolean,

		@JsonProperty('comment_or_mention_talk')
		public commentOrMentionTalk: boolean,

		@JsonProperty('comment_or_mention_board')
		public commentOrMentionBoard: boolean,

		@JsonProperty('event_or_marketing')
		public eventOrMarketing: boolean,

	) {}

}
