/*
 * rank-struct.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { User } from './user/user-struct';
import { Struct } from './struct';
import { Play } from './play-struct';

export class Rank implements Struct<Rank> {
	public statDate: string = '';
	public score: number = 0;
	public updown: string = '-';
	public author!: User;
	public cast!: Play;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		obj['stat_date'] = this.statDate;
		obj['score'] = this.score;
		obj['updown'] = this.updown;

		if ( this.author ) {
			obj['author'] = this.author;
		}

		if ( this.cast ) {
			obj['cast'] = this.cast;
		}

		return obj;
	}

	readRawData(data: any): void {
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

		if ( data['cast'] ) {
			this.cast = Play.deserialize(data['cast']);
		}
	}

	static deserialize(data: any): Rank {
		const rank = new Rank();
		rank.readRawData(data);
		return rank;
	}
}
