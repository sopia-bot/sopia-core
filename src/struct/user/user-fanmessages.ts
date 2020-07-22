/*
 * user-fanmessages.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Struct } from '../struct';

export class UserFanmessages implements Struct<UserFanmessages> {
	private messageId: number = 0;
	private author!: User;
	private toUser!: null;
	private contents!: string;
	private messageCount!: number;
	private isBlind!: boolean;
	private created!: Date;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		obj['id'] = this.messageId;

		if ( this.author ) {
			obj['author'] = this.author.toJSON();
		}

		if ( typeof this.toUser !== 'undefined' ) {
			obj['to_user'] = this.toUser;
		}

		if ( this.contents ){
			obj['contents'] = this.contents;
		}

		if ( this.messageCount ) {
			obj['message_count'] = this.messageCount;
		}

		if ( typeof this.isBlind !== 'undefined' ) {
			obj['is_blind'] = this.isBlind;
		}

		if ( this.created ) {
			obj['created'] = this.created.toJSON();
		}

		return obj;
	}

	readRawData(data: any): void {
		if ( data['id'] ) {
			this.messageId = data['id'];
		}

		if ( data['author'] ) {
			this.author = User.deserialize(data['author']);
		}

		if ( data['to_user'] ) {
			this.toUser = data['to_user'];
		}

		if ( data['contents'] ) {
			this.contents = data['contents'];
		}

		if ( data['message_count'] ) {
			this.messageCount = data['message_count'];
		}

		if ( data['is_blind'] ) {
			this.isBlind = data['is_blind'];
		}

		if ( data['created'] ) {
			this.created = new Date(data['created']);
		}
	}

	static deserialize(data: any): UserFanmessages {
		const fanmessages = new UserFanmessages();
		fanmessages.readRawData(data);
		return fanmessages;
	}
}
