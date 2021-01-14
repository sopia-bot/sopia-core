/*
 * api-commons-cast.ts
 * Created on Thu Jan 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiCommons } from '../api-commons';

export class ApiCommonsCast extends ApiCommons {

	constructor(subApi?: string) {
		super('cast');

		if ( subApi ) {
			this.addSubUrl(subApi as string);
		}
	}

}
