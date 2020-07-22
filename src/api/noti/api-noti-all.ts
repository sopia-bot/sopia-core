/*
 * api-noti-all.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiNotifications } from '../api-notifications';

export class ApiNotiAll extends ApiNotifications {
	constructor(api?: string) {
		super('all');

		if ( api ) {
			this.addSubUrl(api);
		}
	}
}
