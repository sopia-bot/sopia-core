/*
 * info.ts
 * Created on Thu Jun 24 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { UserMiniProfile } from '.';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class ContentsInfo {

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
