/*
 * api-users-report.ts
 * Created on Wed Jul 29 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { ApiUsersInfo } from './api-users-info';
import { User } from '../../struct/user-struct';
import { ReportType } from '../../enum/report';

export class ApiUsersReport extends ApiUsersInfo {
	constructor(user: (User|number), report_type: ReportType) {
		super(user);
		this.addSubUrl('report');
		this.method = 'post';
		this.data = {
			report_type,
		};
	}
}
