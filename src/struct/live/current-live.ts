/*
 * current-live.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { SpoonSession } from '../session';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class CurrentLive extends SpoonSession {

	@JsonProperty() public id!: number;

}
