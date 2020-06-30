/*
 * sopia.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Country } from './enum/country';

export namespace SOPIA {
	interface SOPIA {
		new(data?: any): any;
	}
}
export class SOPIA {
	protected country: Country = Country.KOREA;

	constructor(data?: any) {}
}
