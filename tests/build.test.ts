import {
	SpoonClient,
	LoginType,
	ApiLivesBanner,
	ApiUsersInfo,
	ApiUsersFollow,
	ApiUsersUnFollow,
	ApiUsersFollowings,
	ApiUsersFollowers,
	ApiUsersLive,
	ApiUsersMiniProfile,
	ApiUsersBlock,
	ApiUsersUnBlock,
	ApiUsersUsername,
	User,
	UserMiniProfile,
	UserNameExist,
	Live,
	UserLive,
	StaticStickers,
	ApiUrls
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

	let sopia = new SpoonClient('deviceUUID');

	it('Client Init', async () => {
		await sopia.init();
	});


	describe('📌  Login user', () => {
		it('User is not void', async () => {
			await sopia.login(phone, pw, LoginType.PHONE);
			return !!sopia.logonUser;
		});

		it('User id must be number over zero', () => {
			if ( typeof sopia.logonUser.id === 'number' && sopia.logonUser.id > 0 ) {
				return true;
			}
		});

		it('Client has got user token?', () => {
			if ( sopia.Token ) {
				return true;
			}
		});
	});

	describe('📌 User Api Test', () => {

		it('Get User Info', async () => {
			const user = await sopia.ApiReq<User, ApiUsersInfo.Request>(ApiUsersInfo, sopia.logonUser.id);
			assert.equal(user.id, sopia.logonUser.id);
		});

		describe('🔯  User Follow & UnFollow', async () => {
			const targetId = 6111198;

			it('Follow Test Account', async () => {
				const req = await sopia.ApiReq<User, ApiUsersFollow.Request>(ApiUsersFollow, targetId);
				const user = req.res.results[0];
				assert.equal(user.id, targetId);
			});

			it('Check Success Follow', async () => {
				const req = await sopia.ApiReq<User, ApiUsersFollowers.Request>(ApiUsersFollowers, targetId);
				const followers = req.res.results;
				const user = followers.find((u: User) => u.id === sopia.logonUser.id) as User;
				assert.equal(user.id, sopia.logonUser.id);
			});

			it('Check Followings', async () => {
				const req = await sopia.ApiReq<User, ApiUsersFollowings.Request>(ApiUsersFollowings, sopia.logonUser.id);
				const followings = req.res.results;
				const user = followings.find((u: User) => u.id === targetId) as User;
				assert.equal(user.id, targetId);
			});
			
			it('UnFollow Test Account', async () => {
				const req = await sopia.ApiReq<User, ApiUsersUnFollow.Request>(ApiUsersUnFollow, targetId);
				const user = req.res.results[0];
				assert.equal(user.id, targetId);
			});

			it('Check Success UnFollow', async () => {
				const req = await sopia.ApiReq<User, ApiUsersFollowers.Request>(ApiUsersFollowers, targetId);
				const followers = req.res.results;
				const user = followers.find((u: User) => u.id === sopia.logonUser.id) as User;
				assert.equal(user, null);
			});

			it('Check Followings', async () => {
				const req = await sopia.ApiReq<User, ApiUsersFollowings.Request>(ApiUsersFollowings, sopia.logonUser.id);
				const followings = req.res.results;
				const user = followings.find((u: User) => u.id === targetId) as User;
				assert.equal(user, null);
			});
		});

		describe('🔯  User Block & Unblock', async () => {
			const targetId = 6111198;

			it('Block Test Account', async () => {
				const req = await sopia.ApiReq<void, ApiUsersBlock.Request>(ApiUsersBlock, targetId);
				assert.equal(req.res.status_code, 200);
			});

			it('UnBlock Test Accout', async () => {
				const req = await sopia.ApiReq<void, ApiUsersUnBlock.Request>(ApiUsersUnBlock, targetId);
				assert.equal(req.res.status_code, 200);
			});
		});

		describe('🔯  Tag Exist Check', async () => {

			it('Exist Tag Check', async () => {
				const req = await sopia.ApiReq<UserNameExist, ApiUsersUsername.Request>(ApiUsersUsername, {
					'params': {
						'username': 'test',
					},
				});
				assert.equal(req.res.results[0].is_exist, true);
			});

			it('Not Exist Tag Check', async () => {
				const req = await sopia.ApiReq<UserNameExist, ApiUsersUsername.Request>(ApiUsersUsername, {
					'params': {
						'username': 'T.' + makeid(6),
					},
				});
				assert.equal(req.res.results[0].is_exist, false);
			});

		});

	});

});
