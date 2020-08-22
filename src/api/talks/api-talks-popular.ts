/*
 * api-talks-popular.ts
 * Created on Sat Aug 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiTalks } from '../api-talks';

export class ApiTalksPopular extends ApiTalks {
	constructor(page_size: number = 6) {
		super('popular');
		this.params = {
			page_size,
		};
	}
}
