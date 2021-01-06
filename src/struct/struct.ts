/*
 * struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { serialize, deserialize } from 'typescript-json-serializer';

const snakeToCamel = (str: string) => typeof str === 'string' ? str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
) : '';

export const Arr2Proxy = (data: any[], struct: any, filter?: (d: any) => any): any[] => {
	const arr: any[] = [];
	data.forEach((d: any) => {
		if ( typeof filter === 'function' ) {
			d = filter(d);
		}
		arr.push(deserialize(d, struct));
	});
	return arr;
};

export class Struct {
	static deserialize(data: any) {
		return deserialize<any>(data, this);
	}

	public serialize(): any {
		return serialize(this, true);
	}

	constructor() {
		return new Proxy(this, this);
	}

	public get(struct: any, name: string, proxy: any) {
		const anyThis = this as any;
		if ( anyThis[name] ) {
			return anyThis[name];
		}

		const t = snakeToCamel(name);
		return anyThis[t];
	}
}
