/*
 * sopia.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { Country } from './enum/country';
import { LoginType } from './enum/login-type';
import { User } from './struct/user-struct';

export interface SpoonAPI {
	api: string;
	commonsApi: string;
	studioApi: string;
	cdn: string;
	socket: string;
	stickerApiUrl: string;
	auth?: string;
	signatureStickerApiUrl: string;
	singApi: string;
	singSocket: string;
	textDonationUrl: string;
}

export class SOPIA {
	public country: Country = Country.KOREA;
	public token?: string;
	public api!: SpoonAPI;

	constructor(country?: Country) {
		if ( country ) {
			this.country = country;
		}
	}

	get Token() {
		return this.token;
	}

	get appVersion() {
		return '5.9.0';
	}

	get userAgent() {
		return 'Web';
	}
}
