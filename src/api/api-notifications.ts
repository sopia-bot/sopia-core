/*
 * api-notifications.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiNotifications extends ApiRequest {
	constructor(api?: string) {
		super('notifications');

		if ( api ) {
			this.addSubUrl(api);
		}
	}
}
