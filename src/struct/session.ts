/*
 * session.ts
 * Created on Wed Jun 30 2021
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { SpoonClient } from '../spoon/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class SpoonSession {

	@JsonProperty() private _client!: SpoonClient;

}
