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

	async info() {
		return await this._api.live.info(this);
	}

	async listeners() {
		return await this._api.live.listeners(this);
	}

	async listenersFans() {
		return await this._api.live.listenersFans(this);
	}

	async sponsor() {
		return await this._api.live.sponsor(this);
	}

	async like(uuid: string) {
		return await this._api.live.like(this, {
			'data': {
				'device_unique_id':uuid,
			},
		});
	}

	async access() {
		return await this._api.live.access(this);
	}

}
