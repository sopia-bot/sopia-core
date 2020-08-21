/*
 * fanboard-info-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { User } from './user-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class FanboardInfo {

	constructor(

		@JsonProperty('total_comment_author_count')
		public totalCommentAuthorCount: number,

		@JsonProperty('is_new_comment')
		public isNewComment: boolean,

		@JsonProperty('latest_comment_authors')
		public latestCommentAuthors: User[]

	) {}

}
