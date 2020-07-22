/*
 * rank-struct.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { User } from './user/user-struct';

export class Rank {
	public statDate: string = '';
	public score: number = 0;
	public updown: string = '-';
	public author!: User;

	constructor() {
	}

	toJSON() {
		const obj: any = {};

		obj['stat_date'] = this.statDate;
		obj['score'] = this.score;
		obj['updown'] = this.updown;
		obj['author'] = this.author;

		return obj;
	}

	readRawData(data: any) {
		if ( data['stat_date'] ) {
			this.statDate = data['stat_date'];
		}

		if ( data['score'] ) {
			this.score = data['score'];
		}

		if ( data['updown'] ) {
			this.updown = data['updown'];
		}

		if ( data['author'] ) {
			this.author = User.deserialize(data['author']);
		}
	}

	static deserialize(data: any) {
		const rank = new Rank();
		rank.readRawData(data);
		return rank;
	}
}
