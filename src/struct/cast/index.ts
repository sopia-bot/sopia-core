/*
 * index.ts
 * Created on Mon May 03 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { Contents } from '../';

export interface Cast extends Contents {

	'category': string;

	'voice_url': string;

	'play_count': number;

	'spoon_count': number;

	'reporters': any[]; // unknown type

	'duration': number;

	'text_comment_count': number;

	'is_like': boolean;

}

export interface CastInfo {

	'state_date': string;

	'cast': Cast;

	'score': number;

	'updown': string;

	'cast_count': number;

	'start_date': number;

	'end_date': number;

}
