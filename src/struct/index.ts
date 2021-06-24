/*
 * index.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { UserMiniProfile } from './user/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Contents {

	@JsonProperty() public id!: number;

	@JsonProperty() public title!: string;

	@JsonProperty() public author!: UserMiniProfile;

	@JsonProperty() public img_url!: string;

	@JsonProperty() public tags!: string[];

	@JsonProperty() public like_count!: number;

	@JsonProperty() public created!: string;

	@JsonProperty() public type!: number; //unknown value

}

@Serializable()
export class UrlInfo {

	@JsonProperty() public url!: string;

	@JsonProperty() public key!: string;

	@JsonProperty() public content_type!: string;

}

@Serializable()
export class ProfileUrlInfo {

	@JsonProperty() public voice!: UrlInfo;

	@JsonProperty() public image!: UrlInfo;

}

export * from './live/';
export * from './user/';
export * from './fanboard/';
export * from './play/';
export * from './cast/';
