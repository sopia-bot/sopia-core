/*
 * current-live.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { SpoonSession } from '../session';
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { LiveSocket } from '../../socket/';
import { ApiLivesRequestConfig } from '../../api/';

@Serializable()
export class CurrentLive extends SpoonSession {

	@JsonProperty() public id!: number;

	private _req(obj: any = {}): ApiLivesRequestConfig {
		const socket: LiveSocket = this._client.liveMap.get(this.id) as LiveSocket;
		if ( !obj.headers ) {
			obj.headers = {};
		}

		if ( !obj.headers['x-live-authorization'] ){
			obj.headers['x-live-authorization'] = socket?.RoomToken || '';
		}
		return obj as ApiLivesRequestConfig;
	}

	async info() {
		return await this._api.lives.info(this, this._req());
	}

	async listeners() {
		return await this._api.lives.listeners(this, this._req());
	}

	async listenersFans() {
		return await this._api.lives.listenersFans(this, this._req());
	}

	async sponsor() {
		return await this._api.lives.sponsor(this, this._req());
	}

	async like() {
		return await this._api.lives.like(this, this._req());
	}

	async access() {
		return await this._api.lives.access(this, this._req());
	}

	async join(): Promise<LiveSocket> {
		const socket = new LiveSocket(this, this._client);
		const req = await this._api.lives.token(this, {
			'data': {
				'device_unique_id': this._client.deviceUUID,
			},
		});
		const token = req.res.results[0].jwt;
		await this._api.lives.info(this, {
			'headers': {
				'x-live-authorization': token,
			}
		});
		if ( ! await socket.join(token) ) {
			throw Error('Can not join live to ' + this.id);
		}
		return socket;
	}

}
