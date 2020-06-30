/*
 * sopia.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Country } from './enum/country';
import { LoginType } from './enum/login-type';
import { ApiLogin } from './api/api-login';
import { User } from './struct/user/user-struct';

export class SOPIA {
	protected country: Country = Country.KOREA;
	protected token?: string;

	constructor(country?: Country) {
		if ( country ) {
			this.country = country;
		}
	}
}

export namespace SOPIA {
	export enum S {
		H = 0,
	}
}
