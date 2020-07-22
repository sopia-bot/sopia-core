/*
 * notification-struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from './struct';
import { NotiType } from '../enum/notification';
import { User } from './user/user-struct';
import { UserFanmessages } from './user/user-fanmessages';

export class NotiData implements Struct<NotiData> {
	public bj?: User;
	public user?: User;
	public fancomment?: UserFanmessages;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		if ( this.bj ) {
			obj['bj'] = this.bj.toJSON();
		}

		if ( this.user ) {
			obj['user'] = this.user.toJSON();
		}

		if ( this.fancomment ) {
			obj['fancomment'] = this.fancomment.toJSON();
		}

		return obj;
	}

	readRawData(data: any): void {
		if ( data['bj'] ) {
			this.bj = User.deserialize(data['bj']);
		}

		if ( data['user'] ) {
			this.user = User.deserialize(data['user']);
		}

		if ( data['fancomment'] ) {
			this.fancomment = UserFanmessages.deserialize(data['fancomment']);
		}
	}

	static deserialize(data: any): NotiData {
		const notiData = new NotiData();
		notiData.readRawData(data);
		return notiData;
	}
}

export class NotiUnconfirmed implements Struct<NotiUnconfirmed> {
	public count!: boolean;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		obj['count'] = this.count;

		return obj;
	}

	readRawData(data: any): void {

		this.count = data['count'];

	}

	static deserialize(data: any): NotiUnconfirmed {
		const notiUnconfirmed = new NotiUnconfirmed();
		notiUnconfirmed.readRawData(data);
		return notiUnconfirmed;
	}
}

export class Notification implements Struct<Notification> {
	public id!: string;
	public type!: NotiType;
	public userId!: number;
	public fromUser!: User;
	public data!: NotiData;
	public status!: number;
	public created!: Date;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		obj['_id'] = this.id;
		obj['type'] = this.type;
		obj['user_id'] = this.userId;
		obj['from_user'] = this.fromUser.toJSON();
		obj['data'] = this.data.toJSON();
		obj['status'] = this.status;
		obj['created'] = this.created.toJSON();

		return obj;
	}

	readRawData(data: any): void {

		this.id = data['_id'];
		this.type = data['type'];
		this.userId = data['user_id'];
		this.fromUser = User.deserialize(data['from_user']);
		this.data = NotiData.deserialize(data['data']);
		this.status = data['status'];
		this.created = new Date(data['created']);

	}

	static deserialize(data: any): Notification {
		const notification = new Notification();
		notification.readRawData(data);
		return notification;
	}
}
