/*
 * api-casts-info.ts
 * Created on Thu Jul 30 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiCasts } from '../api-casts';
import { Play } from '../../struct/play-struct';

export class ApiCastsInfo extends ApiCasts {
	constructor(cast: (Play|number)) {
		if ( cast instanceof Play ) {
			super(cast.id.toString());
		} else {
			super(cast.toString());
		}
	}
}
