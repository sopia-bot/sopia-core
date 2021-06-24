/*
 * current-live.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class CurrentLive {

	@JsonProperty() public id!: number;

}
