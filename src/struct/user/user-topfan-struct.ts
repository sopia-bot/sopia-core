/*
 * user-topfan-struct.ts
 * Created on Mon Jul 27 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Struct } from '../struct';

export class UserTopfan implements Struct<UserTopfan> {
	public totalSpoon?: number;
	public user!: User;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		if ( this.totalSpoon ) {
			obj['total_spoon'] = this.totalSpoon;
		}

		if ( this.user ) {
			obj['user'] = this.user.toJSON();
		}

		return obj;
	}

	readRawData(data: any): void {
		if ( data['total_spoon'] ) {
			this.totalSpoon = data['total_spoon'];
		}

		if ( data['user'] ) {
			this.user = User.deserialize(data['user']);
		}
	}

	static deserialize(data: any): UserTopfan {
		const topfan = new UserTopfan();
		topfan.readRawData(data);
		return topfan;
	}
}
