/*
 * sticker-struct.ts
 * Created on Tue Jul 28 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from '../struct';

export class Sticker implements Struct<Sticker> {
	public name!: string;
	public title!: string;
	public description!: string;
	public isCashout!: number;
	public display!: number;
	public type!: number;
	public price!: number;
	public color!: string;
	public colorWeb!: string;
	public tag!: string;
	public imageThumbnail!: string;
	public imageThumbnailWeb!: string;
	public imageUrls!: string[];
	public imageUrlWeb!: string;
	public lottieUrl!: string;
	public lottieComboUrl!: string;
	public order!: number;
	public isUsed!: boolean;
	public startDate!: Date;
	public endDate!: Date;
	public updated!: Date;
	public category!: string;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		if ( this.name ) {
			obj['name'] = this.name;
		}

		if ( this.title ) {
			obj['title'] = this.title;
		}

		if ( this.description ) {
			obj['description'] = this.description;
		}

		if ( typeof this.isCashout !== 'undefined' ) {
			obj['is_cashout'] = this.isCashout;
		}

		if ( typeof this.display !== 'undefined' ) {
			obj['display'] = this.display;
		}

		if ( typeof this.type !== 'undefined' ) {
			obj['type'] = this.type;
		}

		if ( typeof this.price !== 'undefined' ) {
			obj['price'] = this.price;
		}

		if ( this.color ) {
			obj['color'] = this.color;
		}
		
		if ( this.colorWeb ) {
			obj['color_web'] = this.colorWeb;
		}

		if ( this.tag ) {
			obj['tag'] = this.tag;
		}

		if ( this.imageThumbnail ) {
			obj['image_thumbnail'] = this.imageThumbnail;
		}

		if ( this.imageThumbnailWeb ) {
			obj['image_thumbnail_web'] = this.imageThumbnailWeb;
		}

		if ( this.imageUrls ) {
			obj['image_urls'] = this.imageUrls;
		}

		if ( this.imageUrlWeb ) {
			obj['image_url_web'] = this.imageUrlWeb;
		}

		if ( this.lottieUrl ) {
			obj['lottie_url'] = this.lottieUrl;
		}

		if ( this.lottieComboUrl ) {
			obj['lottie_combo_url'] = this.lottieComboUrl;
		}

		if ( typeof this.order !== 'undefined' ) {
			obj['order'] = this.order;
		}

		if ( typeof this.isUsed !== 'undefined' ) {
			obj['is_used'] = this.isUsed;
		}

		if ( this.startDate ) {
			obj['start_date'] = this.startDate.toJSON();
		}

		if ( this.endDate ) {
			obj['end_date'] = this.endDate.toJSON();
		}

		if ( this.updated ) {
			obj['updated'] = this.updated.toJSON();
		}

		if ( this.category ) {
			obj['category'] = this.category;
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

		if ( data['description'] ) {
			this.description = data['description'];
		}

		if ( typeof data['is_cashout'] !== 'undefined' ) {
			this.isCashout = data['is_cashout'];
		}

		if ( typeof data['display'] !== 'undefined' ) {
			this.display = data['display'];
		}

		if ( typeof data['type'] !== 'undefined' ) {
			this.type = data['type'];
		}

		if ( typeof data['price'] !== 'undefined' ) {
			this.price = data['price'];
		}

		if ( data['color'] ) {
			this.color = data['color'];
		}

		if ( data['color_web'] ) {
			this.colorWeb = data['color_web'];
		}

		if ( data['tag'] ) {
			this.tag = data['tag'];
		}

		if ( data['image_thumbnail'] ) {
			this.imageThumbnail = data['image_thumbnail'];
		}

		if ( data['image_thumbnail_web'] ) {
			this.imageThumbnailWeb = data['image_thumbnail_web'];
		}

		if ( data['image_urls'] ) {
			this.imageUrls = data['image_urls'];
		}

		if ( data['image_url_web'] ) {
			this.imageUrlWeb = data['image_url_web'];
		}

		if ( data['lottie_url'] ) {
			this.lottieUrl = data['lottie_url'];
		}

		if ( data['lottie_combo_url'] ) {
			this.lottieComboUrl = data['lottie_combo_url'];
		}

		if ( typeof data['order'] !== 'undefined' ) {
			this.order = data['order'];
		}

		if ( typeof data['is_used'] !== 'undefined' ) {
			this.isUsed = data['is_used'];
		}

		if ( data['start_date'] ) {
			this.startDate = new Date(data['start_date']);
		}

		if ( data['end_date'] ) {
			this.endDate = new Date(data['end_date']);
		}

		if ( data['updated'] ) {
			this.updated = new Date(data['updated']);
		}

		if ( data['category'] ) {
			this.category = data['category'];
		}

	}

	static deserialize(data: any): Sticker {
		const sticker = new Sticker();
		sticker.readRawData(data);
		return sticker;
	}
}
