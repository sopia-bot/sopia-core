import {
	SpoonClient,
	SnsType,
} from '../src/';
import assert from 'assert';
import { expect } from 'chai';

const id = process.env['phone'] as string;
const pw = process.env['pw'] as string;
const phone = parseInt(id, 10);

function makeid(length: number) {
	var result           = [];
	var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.';
	var charactersLength = characters.length;
	for ( var i = 0; i < length; i++ ) {
		result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
	}
	return result.join('');
}

describe('📌  Env Check', () => {
	it('id check', () => phone && typeof phone === 'number');
	it('pw check', () => pw && typeof pw === 'string');
});

describe('📌  Web Api Test', () => {
	const targetId = 6111198;
	let sopia = new SpoonClient('deviceUUID');

	it('Client Init', async () => {
		await sopia.init();
	});


	describe('📌  Login user', () => {
		it('User is not void', async () => {
			await sopia.login(phone, pw, SnsType.PHONE);
			return !!sopia.logonUser;
		});

		it('User id must be number over zero', () => {
			if ( typeof sopia.logonUser.id === 'number' && sopia.logonUser.id > 0 ) {
				return true;
			}
		});

		it('Client has got user token?', () => {
			if ( sopia.token ) {
				return true;
			}
		});
	});

});
