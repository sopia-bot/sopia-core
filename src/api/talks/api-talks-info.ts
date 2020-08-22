/*
 * api-talks-info.ts
 * Created on Sat Aug 22 2020
 *
 * Copyright (c) TreeSome. Licensed under the MIT License.
 */

import { ApiTalks } from '../api-talks';
import { Play } from '../../struct/play-struct';

export class ApiTalksInfo extends ApiTalks {
	constructor(talk: (Play|number)) {
		if ( talk instanceof Play ) {
			super(talk.id.toString());
		} else {
			super(talk.toString());
		}
	}
}
