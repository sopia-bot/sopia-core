/*
 * info.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../user/';

export interface FanboardInfo {

	readonly 'totalCommentAuthorCount': number;

	readonly 'isNewComment': boolean;

	readonly 'latest_comment_authors': User[];

}
