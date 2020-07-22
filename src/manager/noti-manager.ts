/*
 * noti-manager.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Notification, NotiUnconfirmed } from '../struct/notification-struct';

import { ApiManager } from './api-manager';
import { ApiNotifications } from '../api/api-notifications';
import { ApiNotiUnconfirmed } from '../api/noti/api-noti-unconfirmed';
import { ApiNotiAllConfirm } from '../api/noti/api-noti-all-confirm';

export class NotiManager  {
	constructor(
		private client: Client
	) {}

	get Client() {
		return this.client;
	}

	get Token() {
		return this.client.token;
	}

	async getNotifications() {
		const notifications = new ApiManager(new ApiNotifications(), Notification.deserialize);
		const res = await notifications.send();
		return res;
	}

	async notiUnconfirmed() {
		const unconfirmed = new ApiManager(new ApiNotiUnconfirmed(), NotiUnconfirmed.deserialize);
		const res = await unconfirmed.send();
		return res;
	}

	async notiAllConfirm() {
		const confirm = new ApiManager(new ApiNotiAllConfirm(), Notification.deserialize);
		const res = await confirm.send();
		return res;
	}
}
