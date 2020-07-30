/*
 * api-casts-sponsor.ts
 * Created on Thu Jul 30 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiCastsInfo } from './api-casts-info';
import { Play } from '../../struct/play-struct';

export class ApiCastsSponsor extends ApiCastsInfo {
	constructor(cast: (Play|number)) {
		super(cast);
		this.addSubUrl('sponsor');
	}
}
