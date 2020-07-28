/*
 * category-struct.ts
 * Created on Tue Jul 28 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from '../struct';
import { Sticker } from './sticker-struct';

export class StickerCategory implements Struct<StickerCategory> {
	public id!: number;
	public name!: string;
	public title!: string;
	public isUsed!: boolean;
	public stickers: Sticker[] = [];

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		if ( typeof this.id !== 'undefined' ) {
			obj['id'] = this.id;
		}

		if ( this.name ) {
			obj['name'] = this.name;
		}

		if ( this.title ) {
			obj['title'] = this.title;
		}

		if ( this.isUsed ) {
			obj['is_used'] = this.isUsed;
		}

		if ( this.stickers ) {
			obj['stickers'] = [];
			this.stickers.forEach((sticker: Sticker) => {
				obj['stickers'].push(sticker.toJSON());
			});
		}

		return obj;
	}

	readRawData(data: any): void {
		
		if ( typeof data['id'] !== 'undefined' ) {
			this.id = data['id'];
		}

		if ( data['name'] ) {
			this.name = data['name'];
		}

		if ( data['title'] ) {
			this.title = data['title'];
		}

		if ( data['is_used'] ) {
			this.isUsed = data['is_used'];
		}

		if ( data['stickers'] ) {
			data['stickers'].forEach((sticker: any) => {
				this.stickers.push(Sticker.deserialize(sticker));
			});
		}

	}

	static deserialize(data: any): StickerCategory {
		const category = new StickerCategory();
		category.readRawData(data);
		return category;
	}
}
