/*
 * grants-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from './struct';

export class Grants implements Struct<Grants> {
	public login: number = 0;
	public cast: number = 0;
	public talk: number = 0;
	public adult: number = 0;
	public auth: number = 0;
	public phone: number = 0;
	public payment: number = 0;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		obj['login'] = this.login;
		obj['cast'] = this.cast;
		obj['talk'] = this.talk;
		obj['adult'] = this.adult;
		obj['auth'] = this.auth;
		obj['phone'] = this.phone;
		obj['payment'] = this.payment;

		return obj;
	}

	readRawData(data: any): void {
		
		this.login = data['login'];
		this.cast = data['cast'];
		this.talk = data['talk'];
		this.adult = data['adult'];
		this.auth = data['auth'];
		this.phone = data['phone'];
		this.payment = data['payment'];

	}

	static deserialize(data: any): Grants {
		const grants = new Grants();
		grants.readRawData(data);
		return grants;
	}
}
