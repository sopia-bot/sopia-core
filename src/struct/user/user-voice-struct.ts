/*
 * user-voice-struct.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */
import { Struct } from '../struct';

export class UserVoice implements Struct<UserVoice> {
	private url: (string | null) = null;
	private likeCount: number = 0;
	private isLike: boolean = false;

	constructor() {
	}

	toJSON(): any {
		const obj: any = {};

		obj['url'] = this.url;
		obj['like_count'] = this.likeCount;
		obj['is_like'] = this.isLike;

		return obj;
	}

	readRawData(data: any): void {
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

	static deserialize(data: any): UserVoice {
		const voice = new UserVoice();
		voice.readRawData(data);
		return voice;
	}
}

