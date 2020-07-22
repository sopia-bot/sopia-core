/*
 * api-ranks-castbj.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiRanks } from '../api-ranks';
import { DateType } from '../../enum/rank-type';

export class ApiRanksCastBJ extends ApiRanks {
	constructor(date_type: DateType = DateType.DAILY) {
		super('castbj');
		this.params = {
			date_type,
		};
	}
}
