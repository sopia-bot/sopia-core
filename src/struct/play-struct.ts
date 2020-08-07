/*
 * play-struct.ts
 * Created on Fri Jun 26 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { User } from './user/user-struct';
import { Struct } from './struct';

export class Tier implements Struct<Tier> {
	public name!: string;
	public title!: string;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		if ( this.name ) {
			obj['name'] = this.name;
		}

		if ( this.title ) {
			obj['title'] = this.title;
		}

		return obj;
	}

	readRawData(data: any): void {
		
		if ( data['name'] ) {
			this.name = data['name'];
		}

		if ( data['title'] ) {
			this.title = data['title'];
		}

	}

	static deserialize(data: any): Tier {
		const tier = new Tier();
		tier.readRawData(data);
		return tier;
	}
}

export class Play implements Struct<Play> {
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
	public memberCount?: number;
	public spoonCount?: number;
	public reporters?: number[];
	public isDonated?: boolean;
	public created?: Date;
	public urlHls?: string;
	public engineName?: string;
	public tier: (Tier|null) = null;
	public isLiveCall?: boolean;


	constructor() {
	}

	toJSON(): any {
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

		if ( typeof this.isLiveCall === 'boolean' ) {
			obj['is_live_call'] = this.isLiveCall;
		}

		obj['tier'] = this.tier;

		return obj;
	}

	readRawData(data: any): void {
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

		if ( typeof data['is_live_call'] === 'boolean' ) {
			this.isLiveCall = data['is_live_call'];
		}

		if ( data['engine_name'] ) {
			this.engineName = data['engine_name'];
		}

		if ( data['tier'] ) {
			this.tier = Tier.deserialize(data['tier']);
		}

		if ( typeof data['like_count'] === 'number' ) {
			this.likeCount = data['like_count'];
		}

		if ( typeof data['member_count'] === 'number' ) {
			this.memberCount = data['member_count'];
		}

		if ( typeof data['play_count'] === 'number' ) {
			this.playCount = data['play_count'];
		}

		if ( typeof data['spoon_count'] === 'number' ) {
			this.spoonCount = data['spoon_count'];
		}

		if ( data['reporters'] ) {
			this.reporters = data['reporters'];
		}

		if ( typeof data['is_donated'] === 'boolean' ) {
			this.isDonated = data['is_donated'];
		}

		if ( data['created'] ) {
			this.created = new Date(data['created']);
		}

		if ( data['url_hls'] ) {
			this.urlHls = data['url_hls'];
		}
	}

	static deserialize(data: any): Play {
		const play = new Play();
		play.readRawData(data);
		return play;
	}
}
