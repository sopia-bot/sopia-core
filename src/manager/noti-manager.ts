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

	async getNotifications(): Promise<Notification> {
		const notifications = new ApiManager<Notification>(new ApiNotifications(), Notification);
		const res = await notifications.send();
		return res.data;
	}

	async notiUnconfirmed(): Promise<NotiUnconfirmed> {
		const unconfirmed = new ApiManager<NotiUnconfirmed>(new ApiNotiUnconfirmed(), NotiUnconfirmed);
		const res = await unconfirmed.send();
		return res.data;
	}

	async notiAllConfirm(): Promise<Notification> {
		const confirm = new ApiManager<Notification>(new ApiNotiAllConfirm(), Notification);
		const res = await confirm.send();
		return res.data;
	}
}
