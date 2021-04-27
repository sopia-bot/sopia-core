/*
 * index.ts
 * Created on Mon Apr 26 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { Method } from 'axios';

export interface ApiResult<T extends object> {
	detail: string;
	next: string;
	previous: string;
	results: T[];
	status_code: (string | number);
	data: T;
}

export interface ApiUrls {
	api: string;
	commonsApi: string;
	studioApi: string;
	cdn: string;
	socket: string;
	singApi: string;
	singSocket: string;
	stickerApiUrl: string;
	signatureStickerApiUrl: string;
	textDonationUrl: string;
	itemStoreApiUrl: string;
	billingApiUrl: string;
	auth?: string;
}

export * from './request/';
export * from './auth/';
export * from './lives/';
