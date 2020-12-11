/*
 * struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { serialize, deserialize } from 'typescript-json-serializer';

const snakeToCamel = (str: string) => str.replace(
    /([-_][a-z])/g,
    (group) => group.toUpperCase()
                    .replace('-', '')
                    .replace('_', '')
);

export class Struct {
	static deserialize(data: any) {
		return deserialize(data, this);
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
