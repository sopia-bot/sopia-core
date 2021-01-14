/*
 * api-lives-close.ts
 * Created on Thu Jan 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesClose extends ApiLivesInfo {

	constructor(live: (Play|number), is_save: boolean = false) {
		super(live);
		this.addSubUrl('close');
		this.method = 'POST';
		this.data = {
			is_save,
		};
	}

}
