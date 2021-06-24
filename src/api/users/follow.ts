/*
 * follow.ts
 * Created on Tue Apr 27 2021
 *
 * Copyright (c) raravel. Licensed under the MIT License.
 */

import { ApiResult, RequestConfig } from '../';
import { User } from '../../struct/';
import { Serializable, JsonProperty } from 'typescript-json-serializer';

export namespace ApiUsersFollow {

	export const url = '/users/0000/follow/';
	export const method = 'POST';

	@Serializable()
	export class Request extends RequestConfig {

	}

	@Serializable()
	export class Response extends User {

	}

}

export namespace ApiUsersUnFollow {

	export const url = '/users/0000/unfollow/';
	export const method = 'POST';

	@Serializable()
	export class Request extends RequestConfig {

	}

	@Serializable()
	export class Response extends User {

	}

}

export namespace ApiUsersFollowings {

	export const url = '/users/0000/followings/';
	export const method = 'GET';

	@Serializable()
	export class Request extends RequestConfig {

	}

	@Serializable()
	export class Response extends User {

	}

}

export namespace ApiUsersFollowers {

	export const url = '/users/0000/followers/';
	export const method = 'GET';

	@Serializable()
	export class Request extends RequestConfig {

	}

	@Serializable()
	export class Response extends User {

	}

}
