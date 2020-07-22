/*
 * struct.ts
 * Created on Wed Jul 22 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

export abstract class Struct<C> {
	toJSON(): any;
	readRawData(data: any): void;
	public static deserialize(data: any): C;
}
