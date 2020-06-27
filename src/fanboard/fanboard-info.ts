/*
 * fanboard-info.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { SOPIA } from '../sopia';
import { User } from '../struct/user-struct';

export class FanboardInfo extends SOPIA {
	public totalCommentAuthorCount: number = 0;
	public isNewComment: boolean = false;
	public latestCommentAuthors: User[] = [];

	constructor() {
		super();
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
