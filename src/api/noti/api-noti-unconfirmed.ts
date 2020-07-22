/*
 * api-noti-unconfirmed.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiNotifications } from '../api-notifications';

export class ApiNotiUnconfirmed extends ApiNotifications {
	constructor() {
		super('unconfirmed');
	}
}
