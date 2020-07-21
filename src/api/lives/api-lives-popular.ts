/*
 * api-live-popular.ts
 * Created on Sat Jul 11 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';
import { Category } from '../../enum/category';

export class ApiLivesPopular extends ApiLives {
	constructor(page_size: number = 12, is_adult: boolean = false, category?: Category) {
		super('popular');
		this.params = {
			page_size,
			is_adult,
			category,
		};
	}
}
