/*
 * mailbox.ts
 * Created on Fri Apr 30 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { MailMessageStat } from '../../spoon/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Mailbox {

	@JsonProperty() public id!: number;

	@JsonProperty() public title!: string;

	@JsonProperty() public total_count!: number;

	@JsonProperty() public is_publish!: boolean;

}

@Serializable()
export class MailboxMessage {

	@JsonProperty() public id!: number;

	@JsonProperty() public created!: string;

	@JsonProperty() public is_anonymous!: boolean;

	@JsonProperty() public mailbox_id!: number;

	@JsonProperty() public message!: string;

	@JsonProperty() public nickname!: string;

	@JsonProperty() public profile_url!: string;

	@JsonProperty() public status!: MailMessageStat;

}
