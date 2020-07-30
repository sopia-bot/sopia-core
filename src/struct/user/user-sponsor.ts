/*
 * user-sponsor.ts
 * Created on Thu Jul 30 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Struct } from '../struct';

export class UserSponsor implements Struct<UserSponsor> {
	private toUser!: User;
	private amount: number = 0;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		if ( this.toUser ) {
			obj['to_user'] = this.toUser.toJSON();
		}

		if ( this.amount ) {
			obj['amount'] = this.amount;
		}

		return obj;
	}

	readRawData(data: any): void {

		if ( data['to_user'] ) {
			this.toUser = User.deserialize(data['to_user']);
		}

		if ( data['amount'] ) {
			this.amount = data['amount'];
		}

	}

	static deserialize(data: any): UserSponsor {
		const sponsor = new UserSponsor();
		sponsor.readRawData(data);
		return sponsor;
	}
}
