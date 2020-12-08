/*
 * struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */
import { serialize, deserialize } from 'typescript-json-serializer';

export class Struct {
	static deserialize(data: any) {
		return deserialize(data, this);
	}

	public serialize(): any {
		return serialize(this, true);
	}
}
