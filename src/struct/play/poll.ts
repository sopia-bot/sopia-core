/*
 * poll.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class PollItem {

	@JsonProperty() public item_order!: number;

	@JsonProperty() public name!: string;

	@JsonProperty() public count!: number;

}

@Serializable()
export class Poll {

	@JsonProperty() public id!: number;

	@JsonProperty() public items!: PollItem[];

	@JsonProperty() public title!: string;

	@JsonProperty() public my_choice!: number;

	@JsonProperty() public poll_count!: number;

	@JsonProperty() public total_count!: number;

}

@Serializable()
export class VoteResponse {

	@JsonProperty() public choice!: number;

	@JsonProperty() public poll_id!: number;

	@JsonProperty() public total_count!: number;

}
