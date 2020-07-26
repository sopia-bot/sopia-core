/*
 * service-agreement-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from './struct';

export class ServiceAgreement implements Struct<ServiceAgreement> {
	public serviceTerms: boolean = false;
	public personalInfoCol: boolean = false;
	public personalInfoExp: boolean = false;
	public deviceAccess: boolean = false;
	public marketing: boolean = false;
	public voiceInfoExp: any; // unknown type
	public birthGenderNicknameCol: boolean = false; 
	public overFourteenCol: boolean = false;
	public legalRepresentativeInfoCol: boolean = false;

	constructor() {}

	toJSON(): any {
		const obj: any = {};

		obj['service_terms'] = this.serviceTerms;
		obj['personal_info_col'] = this.personalInfoCol;
		obj['personal_info_exp'] = this.personalInfoExp;
		obj['device_access'] = this.deviceAccess;
		obj['marketing'] = this.marketing;
		obj['voice_info_exp'] = this.voiceInfoExp;
		obj['birth_gender_nickname_col'] = this.birthGenderNicknameCol;
		obj['over_fourteen_col'] = this.overFourteenCol;
		obj['legal_representative_info_col'] = this.legalRepresentativeInfoCol;

		return obj;
	}

	readRawData(data: any): void {
		
		if ( data['service_terms'] ) {
			this.serviceTerms = data['service_terms'];
		}

		if ( data['personal_info_col'] ) {
			this.personalInfoCol = data['personal_info_col'];
		}

		if ( data['personal_info_exp'] ) {
			this.personalInfoExp = data['personal_info_exp'];
		}

		if ( data['device_access'] ) {
			this.deviceAccess = data['device_access'];
		}

		if ( data['voice_info_exp'] ) {
			this.voiceInfoExp = data['voice_info_exp'];
		}

		if ( data['birth_gender_nickname_col'] ) {
			this.birthGenderNicknameCol = data['birth_gender_nickname_col'];
		}

		if ( data['over_fourteen_col'] ) {
			this.overFourteenCol = data['over_fourteen_col'];
		}

		if ( data['legal_representative_info_col'] ) {
			this.legalRepresentativeInfoCol = data['legal_representative_info_col'];
		}

	}

	static deserialize(data: any): ServiceAgreement {
		const serviceAgreement = new ServiceAgreement();
		serviceAgreement.readRawData(data);
		return serviceAgreement;
	}
}
