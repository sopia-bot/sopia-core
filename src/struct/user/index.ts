/*
 * index.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */
import { FanboardInfo } from '../fanboard/';
import {
	Country,
	PushSettings,
	ServiceAgreement
} from '../../spoon/';
import { UserMiniProfile } from './profile';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

console.log(UserMiniProfile);

export interface UserNameExist {

	'is_exist': boolean;

}

export * from './profile';
export * from './live';
