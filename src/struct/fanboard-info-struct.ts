/*
 * fanboard-info-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { User } from './user-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct } from './struct';

@Serializable()
export class FanboardInfo extends Struct {

	constructor(

		@JsonProperty('total_comment_author_count')
		public totalCommentAuthorCount: number,

		@JsonProperty('is_new_comment')
		public isNewComment: boolean,

		@JsonProperty({ name: 'latest_comment_authors', type: User })
		public latestCommentAuthors: User[]

	) {
		super();
	}

}
