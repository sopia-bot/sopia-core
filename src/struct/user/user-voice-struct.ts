/*
 * user-voice-struct.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from '../../sopia';


export class UserVoice extends SOPIA {
	private url: (string | null) = null;
	private likeCount: number = 0;
	private isLike: boolean = false;

	constructor() {
		super();
	}

	readRawData(data: any) {
		if ( data['url'] ) {
			this.url = data['url'];
		}

		if ( data['like_count'] ) {
			this.likeCount = data['like_count'];
		}

		if ( data['is_like'] ) {
			this.isLike = data['is_like'];
		}
	}

	static deserialize(data: any) {
		const voice = new UserVoice();
		voice.readRawData(data);
		return voice;
	}
}

