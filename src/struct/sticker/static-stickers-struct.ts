/*
 * static-stickers-struct.ts
 * Created on Tue Jul 28 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from '../struct';
import { StickerCategory } from './sticker-category-struct';

export class StaticStickers implements Struct<StaticStickers> {
	public version!: number;
	public updated!: Date;
	public categories: StickerCategory[] = [];

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		if ( typeof this.version !== 'undefined' ) {
			obj['version'] = this.version;
		}

		if ( this.updated ) {
			obj['updated'] = this.updated.toJSON();
		}

		if ( this.categories ) {
			obj['categories'] = [];
			this.categories.forEach((category: StickerCategory) => {
				obj['categories'].push(category.toJSON());
			});
		}

		return obj;
	}

	readRawData(data: any): void {

		if ( typeof data['version'] !== 'undefined' ) {
			this.version = data['version'];
		}

		if ( data['updated'] ) {
			this.updated = new Date(data['updated']);
		}

		if ( data['categories'] ) {
			data['categories'].forEach((category: any) => {
				this.categories.push(StickerCategory.deserialize(category));
			});
		}

	}

	static deserialize(data: any): StaticStickers {
		const statickStickers = new StaticStickers();
		statickStickers.readRawData(data);
		return statickStickers;
	}
}
