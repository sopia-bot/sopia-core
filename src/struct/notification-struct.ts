/*
 * notification-struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { NotiType } from '../enum/notification';
import { User, UserFanmessages } from './user-struct';

@Serializable()
export class NotiData {

	constructor(

		@JsonProperty('bj')
		public bj: User,

		@JsonProperty('user')
		public user: User,

		@JsonProperty('fancomment')
		public fancomment: UserFanmessages

	) {}

}

@Serializable()
export class NotiUnconfirmed {

	constructor(

		@JsonProperty('count')
		public count: boolean

	) {}

}

@Serializable()
export class Notification {

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
		public created: Date

	) {}

}
