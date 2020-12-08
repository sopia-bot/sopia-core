/*
 * grants-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct } from './struct';

@Serializable()
export class Grants extends Struct {

	constructor(

		@JsonProperty('login')
		public login: number,

		@JsonProperty('cast')
		public cast: number,

		@JsonProperty('talk')
		public talk: number,

		@JsonProperty('adult')
		public adult: number,

		@JsonProperty('auth')
		public auth: number,

		@JsonProperty('phone')
		public phone: number,

		@JsonProperty('payment')
		public payment: number

	) {
		super();
	}

}
