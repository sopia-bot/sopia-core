/*
 * sopia.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Country } from './enum/country';
import { LoginType } from './enum/login-type';
import { User } from './struct/user/user-struct';

import axios from 'axios';

export interface SpoonAPI {
	api: string;
	commonsApi: string;
	studioApi: string;
	cdn: string;
	socket: string;
	sticerApiUrl: string;
};

export class SOPIA {
	public country: Country = Country.KOREA;
	public token?: string;
	public api!: SpoonAPI;

	constructor(country?: Country) {
		if ( country ) {
			this.country = country;
		}

		axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`)
			.then(res => {
				this.api = res.data;
			});
	}

	get Token() {
		return this.token;
	}

	get appVersion() {
		return '5.1.2';
	}

	get userAgent() {
		return 'Web';
	}
}

export namespace SOPIA {
	export enum S {
		H = 0,
	}
}
