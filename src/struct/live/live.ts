/*
 * live.ts
 * Created on Thu Apr 29 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { User, ContentsInfo, LiveCall } from '../';
import { Tier } from '../../enum/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class LiveInfo extends ContentsInfo {

	@JsonProperty() public categories!: string[];

	@JsonProperty() public engine_name!: string;

	@JsonProperty() public is_adult!: boolean;

	@JsonProperty() public is_editors!: boolean;

	@JsonProperty() public is_live_call!: boolean;

	@JsonProperty() public is_verified!: boolean;

	@JsonProperty() public is_vip!: boolean;

	@JsonProperty() public live_call!: LiveCall;

	@JsonProperty() public member_count!: number;

	@JsonProperty() public os_type!: any; //unknown type

	@JsonProperty() public room_token!: string;

	@JsonProperty() public tier!: Tier;

	@JsonProperty() public total_member_count!: number;

	@JsonProperty() public url_hls!: string;

	constructor() {

		super();

	}
}

@Serializable()
export class Live extends LiveInfo {

	@JsonProperty() public welcome_message!: string;

	@JsonProperty() public top_fans!: { user: User }[];

	@JsonProperty() public url!: string;

	@JsonProperty() public stream_name!: string;

	@JsonProperty() public manager_ids!: number[];

	@JsonProperty() public is_like!: boolean;

	@JsonProperty() public is_freeze!: boolean;

	@JsonProperty() public is_mute!: boolean;

	@JsonProperty() public is_beginner!: boolean;

	@JsonProperty() public is_call!: boolean;

	@JsonProperty() public closed!: string;

	@JsonProperty() public close_status!: number;

	@JsonProperty() public is_save!: boolean;

	@JsonProperty() public is_join_now!: boolean;

	@JsonProperty() public protocol!: string;

	@JsonProperty() public msg_interval!: number;

	@JsonProperty() public donation!: number;

	@JsonProperty() public close_air_time!: string;

	constructor() {

		super();

	}
}
