/*
 * sticker-struct.ts
 * Created on Fri Aug 21 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct, Arr2Proxy } from './struct';

@Serializable()
export class Sticker extends Struct {

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
		public startDate: (Date|null),

		@JsonProperty('end_date')
		public endDate: (Date|null),

		@JsonProperty('updated')
		public updated: (Date|null),

		@JsonProperty('cateogry')
		public category: string

	) {
		super();
	}

}

@Serializable()
export class StickerCategory extends Struct {

	constructor(

		@JsonProperty('id')
		public id: number,

		@JsonProperty('name')
		public name: string,

		@JsonProperty('title')
		public title: string,

		@JsonProperty('is_used')
		public isUsed: boolean,

		@JsonProperty({
			name: 'stickers',
			type: Sticker,
			onDeserialize: (v: any[]) => Arr2Proxy(v, Sticker),
		})
		public stickers: Sticker[]

	) {
		super();
	}

}

@Serializable()
export class StaticStickers extends Struct {

	constructor(

		@JsonProperty('version')
		public version: number,

		@JsonProperty('updated')
		public updated: (Date|null),

		@JsonProperty({
			name: 'categories',
			type: StickerCategory,
			onDeserialize: (v: any[]) => Arr2Proxy(v, StickerCategory),
		})
		public categories: StickerCategory[]

	) {
		super();
	}

}
