/*
 * user-fanmessages.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from '../../sopia';
import { User } from './user-struct';


export class UserFanmessages extends SOPIA {
	private messageId: number = 0;
	private author!: User;
	private toUser!: null;
	private contents!: string;
	private messageCount!: number;
	private isBlind!: boolean;
	private created!: Date;

	constructor() {
		super();
	}

	readRawData(data: any) {
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

	static deserialize(data: any) {
		const fanmessages = new UserFanmessages();
		fanmessages.readRawData(data);
		return fanmessages;
	}
}
