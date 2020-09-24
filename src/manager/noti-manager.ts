/*
 * noti-manager.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Client } from '../client';

import { Notification, NotiUnconfirmed } from '../struct/notification-struct';
import { Manager } from '../struct/manager-struct';

import { ApiManager } from './api-manager';
import { ApiNotifications } from '../api/api-notifications';
import { ApiNotiUnconfirmed } from '../api/noti/api-noti-unconfirmed';
import { ApiNotiAllConfirm } from '../api/noti/api-noti-all-confirm';

export class NotiManager extends Manager {
	constructor(client: Client) {
		super(client);
	}

	async getNotifications(): Promise<Notification> {
		const res = await this.ApiReq<Notification>(Notification, ApiNotifications);

		return res.data;
	}

	async notiUnconfirmed(): Promise<NotiUnconfirmed> {
		const res = await this.ApiReq<NotiUnconfirmed>(NotiUnconfirmed, ApiNotiUnconfirmed);

		return res.data;
	}

	async notiAllConfirm(): Promise<Notification> {
		const res = await this.ApiReq<Notification>(Notification, ApiNotiAllConfirm);

		return res.data;
	}
}
