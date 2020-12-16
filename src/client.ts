/*
 * client.ts
 * Created on Tue Jun 30 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

import { SOPIA } from './sopia';

import { Country, CountryNumber  } from './enum/country';
import { LoginType } from './enum/login-type';

import { deserialize } from 'typescript-json-serializer';

import { User } from './struct/user-struct';
import { StaticStickers } from './struct/sticker-struct';

import { ApiLogin } from './api/api-login';
import { ApiSignout } from './api/api-signout';

import { ApiManager } from './manager/api-manager';
import { UserManager } from './manager/user-manager';
import { LiveManager } from './manager/live-manager';
import { CastManager } from './manager/cast-manager';
import { RankManager } from './manager/rank-manager';
import { SearchManager } from './manager/search-manager';
import { NotiManager } from './manager/noti-manager';
import { SocketManager } from './manager/socket-manager';
import { TalkManager } from './manager/talk-manager';
import { PlayManager } from './manager/play-manager';

import axios from 'axios';

export enum WSType {
	SYSTEM = 'system',
	WEB = 'web',
	NODE = 'node',
};

export class Client extends SOPIA {
	public userManager: UserManager;
	public liveManager: LiveManager;
	public castManager: CastManager;
	public rankManager: RankManager;
	public searchManager: SearchManager;
	public notiManager: NotiManager;
	public talkManager: TalkManager;
	public playManager: PlayManager;

	public stickers!: StaticStickers;
	public user!: User;
	public liveSocketMap: Map<number, SocketManager>;
	public signature: Map<number, StaticStickers>;
	public wstype: WSType = WSType.SYSTEM;

	constructor(public deviceUUID: string, country?: Country) {
		super(country);

		this.userManager = new UserManager(this);
		this.liveManager = new LiveManager(this);
		this.castManager = new CastManager(this);
		this.rankManager = new RankManager(this);
		this.searchManager = new SearchManager(this);
		this.notiManager = new NotiManager(this);
		this.talkManager = new TalkManager(this);
		this.playManager = new PlayManager(this);

		this.liveSocketMap = new Map();
		this.signature = new Map();

		this.initSticker();
		this.initApiInfo();
	}

	async initApiInfo() {
		const res = await axios.get(`https://www.spooncast.net/config/api/${this.country}.json?ts=${Date.now()}`);
		this.api = res.data;

		if ( !this.api.auth ) {
			this.api.auth = `https://${this.country}-auth.spooncast.net/`;
		}

		return this.api;
	}

	async initToken(sns_id: (number|string), password: string, sns_type: LoginType) {
		const code = CountryNumber[this.country.toUpperCase()];
		const reqUrl = `${this.api.auth}tokens/`;

		const res = await axios.post(reqUrl, {
			'device_unique_id': this.deviceUUID,
			'auth_data': {
				'act_type': sns_type,
				'password': password,
				'msisdn': Number(code + sns_id),
			},
		});

		if ( res.data && res.data.data ) {
			this.token = res.data.data.jwt;
		}

		return this.token;
	}

	async initSticker() {
		const res = await axios.get(`https://static.spooncast.net/${this.country}/stickers/index.json`);
		if ( res.data ) {
			this.stickers = deserialize<StaticStickers>(res.data, StaticStickers);
		}
		return this.stickers;
	}

	async initSignatureSticker(user: (User|number)) {
		if ( user instanceof User ) {
			user = user.id;
		}
		try {
			const res = await axios.get(`https://static.spooncast.net/${this.country}/stickers/signature/${user}/index.json`);
			if ( res.data ) {
				this.signature.set(user, deserialize<StaticStickers>(res.data, StaticStickers));
			}
		} catch(err) {
			return;
		}
		return this.signature.get(user);
	}

	findSticker(key: string, user?: (User|number), force: boolean = false) {
		if ( user instanceof User ) {
			user = user.id;
		}
		const signature = this.signature.get(user as number);
		if ( signature ) {
			for ( const category of signature.categories ) {
				if ( !force && !category.isUsed ) {
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
				if ( !force && !category.isUsed ) {
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

	async login(sns_id: (number|string), password: string, sns_type: LoginType): Promise<User> {
		await this.initSticker();
		await this.initApiInfo();
		await this.initToken(sns_id, password, sns_type);

		const api = new ApiLogin(sns_type, sns_id, password, this.country || Country.KOREA);
		api.token = this.token as string;
		const res = await api.send();
		const user = deserialize<User>(res.results[0], User);

		this.user = user;
		this.user.token = this.token!;
		return user;
	}

	async loginToken(user: (User|number), token: string): Promise<User> {
		this.token = token;

		const u = await this.userManager.userInfo(user);
		this.user = u;
		this.user.token = this.token;

		return this.user;
	}

	async signout(): Promise<ApiManager<void>> {
		const apiSignout = new ApiManager<void>(new ApiSignout(), undefined, this.Token);
		const res = await apiSignout.send();

		return res;
	}

	snsLoginURL(sns_type: string): string {
		// should parsing localStorage.getItem('SPOONCAST_requestBySnsLogin')
		return `https://www.spooncast.net/${this.country}/oauth/authorize?sns_type=${sns_type}&is_jwt=true&is_agree=0&ts=${new Date().getTime()}`;
	}
}
