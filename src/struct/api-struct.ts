/*
 * api-struct.ts
 * Created on Sat Jun 27 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

export interface ApiResult {
	detail?: string;
	next?: string;
	previous?: string;
	results: any[];
	status_code?: (string | number);
}
