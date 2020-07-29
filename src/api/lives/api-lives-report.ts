/*
 * api-lives-report.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiLivesInfo } from './api-lives-info';
import { Play } from '../../struct/play-struct';
import { ReportType } from '../../enum/report';

export class ApiLivesReport extends ApiLivesInfo {
	constructor(live: (Play|number), report_type: ReportType) {
		super(live);
		this.addSubUrl('report');
		this.data = {
			report_type,
		};
		this.method = 'post';
	}
}
