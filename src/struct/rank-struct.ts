/*
 * rank-struct.ts
 * Created on Tue Jul 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { User } from './user-struct';
import { Play } from './play-struct';
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct } from './struct';

@Serializable()
export class Rank extends Struct {

	constructor(

		@JsonProperty('stat_date')
		public statDate: string,

		@JsonProperty('score')
		public score: number,

		@JsonProperty('updown')
		public updown: string,

		@JsonProperty('author')
		public author: User,

		@JsonProperty('cast')
		public cast: Play

	) {
		super();
	}

}
