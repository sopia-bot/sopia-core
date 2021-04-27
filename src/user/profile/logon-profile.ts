/*
 * logon-profile.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { Grants, Budget } from '../../spoon/';
import { User } from '../';

export interface LogonUser extends User {

	'date_of_birth': string;

	'grants': Grants;

	'is_changed_username': boolean;

	'budget': Budget;

	'phone_number': string;

	'is_choice': boolean;
}
