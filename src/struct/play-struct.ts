/*
 * play-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from '../sopia';
import { User } from './user/user-struct';

export class Play extends SOPIA {
	public liveId: number = 0;
	public author?: User;
	public title?: string = '';
	public imgUrl?: string = '';
	public voiceUrl?: string = '';
	public tags?: any[];
	public type?: number = 0;
	public duration?: number;
	public likeCount?: number;
	public playCount?: number;
	public spoonCount?: number;
	public reporters?: number[];
	public isDonated?: boolean;
	public created?: Date;


	constructor() {
		super();
	}

	readRawData(data: any) {
		if ( data['id'] ) {
			this.liveId = data['id'];
		}

		if ( data['author'] ) {
			this.author = User.deserialize(data['author']);
		}

		if ( data['title'] ) {
			this.title = data['title'];
		}

		if ( data['img_url'] ) {
			this.imgUrl = data['img_url'];
		}

		if ( data['voice_url'] ) {
			this.voiceUrl = data['voice_url'];
		}

		if ( data['tags'] ) {
			this.tags = data['tags'];
		}

		if ( data['type'] ) {
			this.type = data['type'];
		}

		if ( data['duration'] ) {
			this.duration = data['duration'];
		}

		if ( data['like_count'] ) {
			this.likeCount = data['like_count'];
		}

		if ( data['play_count'] ) {
			this.playCount = data['play_count'];
		}

		if ( data['spoon_count'] ) {
			this.spoonCount = data['spoon_count'];
		}

		if ( data['reporters'] ) {
			this.reporters = data['reporters'];
		}

		if ( data['is_donated'] ) {
			this.isDonated = data['is_donated'];
		}

		if ( data['created'] ) {
			this.created = new Date(data['created']);
		}
	}

	static deserialize(data: any) {
		const play = new Play();
		play.readRawData(data);
		return play;
	}
}
