/*
 * socket-live.ts
 * Created on Fri Jul 03 2020
 *
 * Copyright (c) Tree-Some. Licensed under the MIT License.
 */

export enum LiveEvent {

	LIVE_STATE = 'live_state',
	LIVE_HEALTH = 'live_health',
	LIVE_JOIN = 'live_join',
	LIVE_SHADOWJOIN = 'live_shadowjoin',
	LIVE_MESSAGE = 'live_message',
	LIVE_LIKE = 'live_like',
	LIVE_BLOCK = 'live_block',
	LIVE_UPDATE = 'live_update',
	LIVE_LEAVE = 'live_leave',
	LIVE_PRESENT = 'live_present',
	LIVE_CALL = 'live_call',
	LIVE_CALL_REQUEST = 'live_call_request',

}

export enum LiveType {
	LIVE_REQ = 'live_req',
	LIVE_RPT = 'live_rpt',
}
