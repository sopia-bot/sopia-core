/*
 * api-lives-access.ts
 * Created on Fri Jul 24 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesAccess extends ApiLivesInfo {
	constructor(live: (Play|number), jwt: string) {
		super(live);
		this.addSubUrl('access');
		this.headers = {
			'x-live-authorization': 'Bearer ' + jwt,
		};
	}
}
