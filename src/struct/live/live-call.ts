/*
 * live-call.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User } from '../';

export interface LiveCall {

	'guests': User[];

	'status': number;

}
