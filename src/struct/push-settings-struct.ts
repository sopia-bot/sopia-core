/*
 * push-settings-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from './struct';

export class PushSettings implements Struct<PushSettings> {
	public bj: boolean = false;
	public likeOrPresent: boolean = false;
	public commentOrMentionCast: boolean = false;
	public commentOrMentionTalk: boolean = false;
	public commentOrMentionBoard: boolean = false;
	public eventOrMarketing: boolean = false;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		obj['bj'] = this.bj;
		obj['like_or_present'] = this.likeOrPresent;
		obj['comment_or_mention_cast'] = this.commentOrMentionCast;
		obj['comment_or_mention_talk'] = this.commentOrMentionTalk;
		obj['comment_or_mention_board'] = this.commentOrMentionBoard;
		obj['event_or_marketing'] = this.eventOrMarketing;

		return obj;
	}

	readRawData(data: any): void {
		
		if ( data['bj'] ) {
			this.bj = data['bj'];
		}

		if ( data['like_or_present'] ) {
			this.likeOrPresent = data['like_or_present'];
		}

		if ( data['comment_or_mention_cast'] ) {
			this.commentOrMentionCast = data['comment_or_mention_cast'];
		}

		if ( data['comment_or_mention_talk'] ) {
			this.commentOrMentionTalk = data['comment_or_mention_talk'];
		}

		if ( data['comment_or_mention_board'] ) {
			this.commentOrMentionBoard = data['comment_or_mention_board'];
		}

		if ( data['event_or_marketing'] ) {
			this.eventOrMarketing = data['event_or_marketing'];
		}

	}

	static deserialize(data: any): PushSettings {
		const pushSettings = new PushSettings();
		pushSettings.readRawData(data);
		return pushSettings;
	}
}
