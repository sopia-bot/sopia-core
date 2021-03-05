/*
 * api-users-komca.ts
 * Created on Fri Mar 05 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiUsers } from '../api-users';
import { UserKomcaSong } from '../../struct/user-struct';

export class ApiUsersKomca extends ApiUsers {
	constructor(songs: UserKomcaSong[]) {
		super('copyright');
		this.addSubUrl('komca');
		this.method = 'POST';
		this.data = songs;
	}
}
