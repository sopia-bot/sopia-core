/*
 * api-lives-shared.ts
 * Created on Sat Jul 25 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';

export class ApiLivesShared extends ApiLivesInfo {
	constructor(live: (Play|number)) {
		super(live);
		this.addSubUrl('shared');
	}
}
