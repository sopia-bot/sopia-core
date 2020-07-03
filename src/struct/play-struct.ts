/*
 * play-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { User } from './user/user-struct';

export class Play {
	public id: number = 0;
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
	public urlHls?: string;


	constructor() {
	}

	toJSON() {
		const obj: any = {};
		if ( this.id ) {
			obj['id'] = this.id;
		}

		if ( this.author ) {
			obj['author'] = this.author.toJSON();
		}

		if ( this.title ) {
			obj['title'] = this.title;
		}

		if ( this.voiceUrl ) {
			obj['voice_url'] = this.voiceUrl;
		}
		
		if ( this.tags ) {
			obj['tags'] = this.tags;
		}

		if ( this.type ) {
			obj['type'] = this.type;
		}

		if( this.duration ) {
			obj['duration'] = this.duration;
		}

		if ( this.likeCount ) {
			obj['like_count'] = this.likeCount;
		}

		if ( this.playCount ) {
			obj['play_count'] = this.playCount;
		}

		if ( this.spoonCount ) {
			obj['spoon_count'] = this.spoonCount;
		}

		if ( this.reporters ) {
			obj['reporters'] = this.reporters;
		}

		if ( typeof this.isDonated !== 'undefined' ) {
			obj['is_donated'] = this.isDonated;
		}

		if ( this.created ) {
			obj['created'] = this.created.toJSON();
		}

		if ( this.urlHls ) {
			obj['url_hls'] = this.urlHls;
		}

		return obj;
	}

	readRawData(data: any) {
		if ( data['id'] ) {
			this.id = data['id'];
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

		if ( data['url_hls'] ) { 
			this.urlHls = data['url_hls'];
		}
	}

	static deserialize(data: any) {
		const play = new Play();
		play.readRawData(data);
		return play;
	}
}
