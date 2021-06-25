/*
 * sticker-client.ts
 * Created on Fri May 14 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { StaticStickers } from '../static/';
import { ApiClient } from './api-client';

import axios from 'axios';

export class StickerClient extends ApiClient {
	public stickers!: StaticStickers;
	public signature: Map<number, StaticStickers> = new Map();

	constructor(deviceUUID: string) {
		super(deviceUUID);
	}

	async initSticker(): Promise<StaticStickers|void> {
		const res = await axios.get(this.urls.stickerApiUrl);
		this.stickers = res.data as StaticStickers;
		return this.stickers;
	}

	async initSignatureSticker(user: (number)): Promise<StaticStickers|void> {
		try {
			const res = await axios.get(this.urls.signatureStickerApiUrl.replace('0000', user.toString()));
			if ( res.data ) {
				this.signature.set(user, res.data);
			}
		} catch(err) {
			return;
		}
		return this.signature.get(user);
	}

	findSticker(key: string, user?: (number), force: boolean = false) {
		const signature = this.signature.get(user as number);
		if ( signature ) {
			for ( const category of signature.categories ) {
				if ( !force && !category.is_used ) {
					continue;
				}
				for ( const sticker of category.stickers ) {
					if ( sticker.name === key ) {
						return sticker;
					}
				}
			}
		}
		if ( this.stickers ) {
			for ( const category of this.stickers.categories ) {
				if ( !force && !category.is_used ) {
					continue;
				}
				for ( const sticker of category.stickers ) {
					if ( sticker.name === key ) {
						return sticker;
					}
				}
			}
		}
	}

}
