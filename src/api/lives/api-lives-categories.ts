/*
 * api-lives-categories.ts
 * Created on Mon Jul 20 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiLives } from '../api-lives';

export class ApiLivesCategories extends ApiLives {
	constructor(is_new?: number) {
		super('categories');
		this.params = {
			is_new,
		};
	}
}
