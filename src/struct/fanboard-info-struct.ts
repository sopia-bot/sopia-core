/*
 * fanboard-info-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { User } from './user/user-struct';

export class FanboardInfo {
	public totalCommentAuthorCount: number = 0;
	public isNewComment: boolean = false;
	public latestCommentAuthors: User[] = [];

	constructor() {
	}

	toJSON() {
		const obj: any = {};

		obj['total_comment_author_count'] = this.totalCommentAuthorCount;
		obj['is_new_comment'] = this.isNewComment;
		obj['latest_comment_authors'] = this.latestCommentAuthors;

		return obj;
	}

	readRawData(data: any) {
		if ( data['total_comment_author_count'] ) {
			this.totalCommentAuthorCount = data['total_comment_author_count'];
		}

		if ( data['is_new_comment'] ) {
			this.isNewComment = data['is_new_comment'];
		}

		if ( data['latest_comment_authors'] ) {
			for ( const author of data['latest_comment_authors'] ) {
				const user = User.deserialize(author);
				this.latestCommentAuthors.push(user);
			}
		}
	}

	static deserialize(data: any) {
		const info = new FanboardInfo();
		info.readRawData(data);
		return info;
	}
}
