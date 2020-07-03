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
}

export enum LiveType {
	LIVE_REQ = 'live_req',
	LIVE_RPT = 'live_rpt',
}
