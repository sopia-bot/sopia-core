/*
 * api-fancomments.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { ApiRequest } from './api-request';

export class ApiFancomments extends ApiRequest {
	constructor(commentId: number, contents?: string) {
		super('fancomments');
		this.addSubUrl(commentId.toString());
		this.addSubUrl('messages');

		if ( typeof contents === 'string' ) {
			this.data = { contents };
			this.method = 'post';
		} else if ( typeof contents === 'object' && contents === null ) {
			this.method = 'delete';
		}
	}
}
