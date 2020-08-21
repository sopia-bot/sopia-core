/*
 * sticker-struct.ts
 * Created on Fri Aug 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class StickerCategory {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('name')
		public name: string,

		@JsonProperty('title')
		public title: string,

		@JsonProperty('is_used')
		public isUsed: boolean,

		@JsonProperty('stickers')
		public stickers: Sticker[]

	) {}

}

@Serializable()
export class StaticStickers {

	constructor(

		@JsonProperty('version')
		public version: number,

		@JsonProperty('updated')
		public updated: Date,

		@JsonProperty('categories')
		public categories: StickerCategory[]

	) {}

}

@Serializable()
export class Sticker {

	constructor(

		@JsonProperty('name')
		public name: string,

		@JsonProperty('title')
		public title: string,

		@JsonProperty('description')
		public description: string,

		@JsonProperty('is_cashout')
		public isCashout: number,

		@JsonProperty('display')
		public display: number,

		@JsonProperty('type')
		public type: number,

		@JsonProperty('price')
		public price: number,

		@JsonProperty('color')
		public color: string,

		@JsonProperty('color_web')
		public colorWeb: string,

		@JsonProperty('tag')
		public tag: string,

		@JsonProperty('image_thumbnail')
		public imageThumbnail: string,

		@JsonProperty('image_thumbnail_web')
		public imageThumbnailWeb: string,

		@JsonProperty('image_urls')
		public imageUrls: string[],

		@JsonProperty('image_url_web')
		public imageUrlWeb: string,

		@JsonProperty('lottie_url')
		public lottieUrl: string,

		@JsonProperty('lottie_combo_url')
		public lottieComboUrl: string,

		@JsonProperty('order')
		public order: number,

		@JsonProperty('is_used')
		public isUsed: boolean,

		@JsonProperty('start_date')
		public startDate: Date,

		@JsonProperty('end_date')
		public endDate: Date,

		@JsonProperty('updated')
		public updated: Date,

		@JsonProperty('cateogry')
		public category: string

	) {}

}
