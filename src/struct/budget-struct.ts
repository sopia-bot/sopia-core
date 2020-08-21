/*
 * budget-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Serializable, JsonProperty } from 'typescript-json-serializer';

@Serializable()
export class Budget {

	constructor(

		@JsonProperty('present_spoon')
		public presentSpoon: number,

		@JsonProperty('purchase_spoon')
		public purchaseSpoon: number,

		@JsonProperty('total_exchange_spoon')
		public totalExchangeSpoon: number,

		@JsonProperty('exchange_price_per_spoon')
		public exchangePricePerSpoon: number,

		@JsonProperty('monthly_pay_amount')
		public monthlyPayAmount: number

	) {}

}
