/*
 * budget-struct.ts
 * Created on Sun Jul 26 2020
 *
 * Copyright (c) Tree Some. Licensed under the MIT License.
 */

import { Struct } from './struct';

export class Budget implements Struct<Budget> {
	public presentSpoon: number = 0;
	public purchaseSpoon: number = 0;
	public totalExchangeSpoon: number = 0;
	public exchangePricePerSpoon: number = 0;
	public monthlyPayAmount: number = 0;

	constructor() {}

	toJSON(): any {
		const obj: any;

		obj['present_spoon'] = this.presentSpoon;
		obj['purchase_spoon'] = this.purchaseSpoon;
		obj['total_exchange_spoon'] = this.totalExchangeSpoon;
		obj['exchange_price_per_spoon'] = this.exchangePricePerSpoon;
		obj['monthly_pay_amount'] = this.monthlyPayAmount;

		return obj;
	}

	readRawData(data: any): void {
		
		if ( data['present_spoon'] ) {
			this.presentSpoon = data['present_spoon'];
		}

		if ( data['purchase_spoon'] ) {
			this.purchaseSpoon = data['purchase_spoon'];
		}

		if ( data['total_exchange_spoon'] ) {
			this.totalExchangeSpoon = data['total_exchange_spoon'];
		}

		if ( data['exchange_price_per_spoon'] ) {
			this.exchangePricePerSpoon = data['exchange_price_per_spoon'];
		}

		if ( data['monthly_pay_amount'] ) {
			this.monthlyPayAmount = data['monthly_pay_amount'];
		}

	}

	static deserialize(data: any): Budget {
		const budget = new Budget();
		budget.readRawData(data);
		return budget;
	}
}
