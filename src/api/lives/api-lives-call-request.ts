/*
 * api-lives-call-request.ts
 * Created on Tue Sep 15 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesCallRequest extends ApiLivesInfo {
	constructor(live: (Play|number)) {
		super(live);
		this.method = 'put';
		this.addSubUrl('call');
		this.addSubUrl('request');
	}
}
