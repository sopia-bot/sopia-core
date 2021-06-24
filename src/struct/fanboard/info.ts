/*
 * info.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../user/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class FanboardInfo {

	@JsonProperty() public totalCommentAuthorCount!: number;

	@JsonProperty() public isNewComment!: boolean;

	@JsonProperty() public latest_comment_authors!: User[];

}
