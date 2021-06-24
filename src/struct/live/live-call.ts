/*
 * live-call.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class LiveCall {

	@JsonProperty() public guests!: User[];

	@JsonProperty() public status!: number;

}
