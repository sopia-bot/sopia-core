/*
 * api-ranks-cast.ts
 * Created on Thu Jul 23 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRanks } from '../api-ranks';
import { DateType } from '../../enum/rank-type';

export class ApiRanksCast extends ApiRanks {
	constructor(date_type: DateType = DateType.DAILY) {
		super('cast');
		this.params = {
			date_type,
		};
	}
}
