/*
 * notification-struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { NotiType } from '../enum/notification';
import { User, UserFanmessages } from './user-struct';
import { Struct } from './struct';

@Serializable()
export class NotiData extends Struct {

	constructor(

		@JsonProperty('bj')
		public bj: User,

		@JsonProperty('user')
		public user: User,

		@JsonProperty('fancomment')
		public fancomment: UserFanmessages

	) {
		super();
	}

}

@Serializable()
export class NotiUnconfirmed extends Struct {

	constructor(

		@JsonProperty('count')
		public count: boolean

	) {
		super();
	}

}

@Serializable()
export class Notification extends Struct {

	constructor(

		@JsonProperty('id')
		public id: string,

		@JsonProperty('type')
		public type: NotiType,

		@JsonProperty('user_id')
		public userId: number,

		@JsonProperty('from_user')
		public fromUser: User,

		@JsonProperty('data')
		public data: NotiData,

		@JsonProperty('status')
		public status: number,

		@JsonProperty('created')
		public created: (Date|null)

	) {
		super();
	}

}
