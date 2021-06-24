/*
 * live-call.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

import * as A from '../';
console.log(__filename, A);

@Serializable()
export class LiveCall {

	@JsonProperty() public guests!: User[];

	@JsonProperty() public status!: number;

}
