export type PresenceOnJoinCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;

export type PresenceOnLeaveCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;

export interface PresenceOpts {
	events?: { state: string; diff: string } | undefined;
}
