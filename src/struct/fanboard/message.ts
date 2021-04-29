/*
 * message.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../user/';

export interface FanMessages {

	readonly author: User;

	readonly contents: string;

	readonly created: string;

	readonly extra: any; // unknown type

	readonly id: number;

	readonly is_blind: boolean;

	readonly message_count: number;

	readonly path: string;

	readonly referer: string;

	readonly to_user: any; // unknown type maybe User type

}
