/*
 * live.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class UserLive {

	@JsonProperty() is_live!: boolean;

	@JsonProperty() current_live_id!: number;

}
