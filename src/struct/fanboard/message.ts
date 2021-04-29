/*
 * message.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../user/';

export interface FanboardMessages {

	readonly messageId: number;

	readonly author: User;

	readonly toUser: null;

	readonly contents: string;

	readonly messageCount: number;

	readonly isBlind: boolean;

	readonly created: string;

}
