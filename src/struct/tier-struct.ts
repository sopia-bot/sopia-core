/*
 * tier-struct.ts
 * Created on Fri Aug 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Play } from './play-struct';

@Serializable()
export class Tier {

	constructor(

		@JsonProperty('name')
		public name: string,

		@JsonProperty('title')
		public title: string,

	) {}

}

