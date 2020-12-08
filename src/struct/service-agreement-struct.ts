/*
 * service-agreement-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';
import { Struct } from './struct';

@Serializable()
export class ServiceAgreement extends Struct {

	constructor(

		@JsonProperty('service_terms')
		public serviceTerms: boolean,

		@JsonProperty('personal_info_col')
		public personalInfoCol: boolean,

		@JsonProperty('personal_info_exp')
		public personalInfoExp: boolean,

		@JsonProperty('device_access')
		public deviceAccess: boolean,

		@JsonProperty('marketing')
		public marketing: boolean,

		@JsonProperty('voice_info_exp')
		public voiceInfoExp: boolean,

		@JsonProperty('birth_gender_nickname_col')
		public birthGenderNicknameCol: boolean,

		@JsonProperty('over_fourteen_col')
		public overFourteenCol: boolean,

		@JsonProperty('legal_representative_info_col')
		public legalRepresentativeInfoCol: boolean

	) {
		super();
	}

}
