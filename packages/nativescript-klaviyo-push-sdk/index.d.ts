export * from './common';

import { AuthorizationStatus } from './common';


export interface AndroidPermissions {}

export interface IOSPermissions {
	alert?: undefined | false | true;
	announcement?: undefined | false | true;
	badge?: undefined | false | true;
	carPlay?: undefined | false | true;
	criticalAlert?: undefined | false | true;
	provisional?: undefined | false | true;
	sound?: undefined | false | true;
}
export interface Permissions {
	ios?: IOSPermissions;
	android?: AndroidPermissions;
}

export class KlaviyoPush {
	onToken?: (token: string) => void;
	onMessage?: (message: any, nativeMessage: any) => void;
	onNonKlaviyoMessageListener?: (message: any) => void;
	onKlaviyoCustomDataMessage?: (data: Record<any, any>, message: any) => void;

	showNotificationsWhenInForeground: boolean;
	static getInstance(): KlaviyoPush;

	readonly isDeviceRegisteredForRemoteMessages: boolean;

	getCurrentToken(): Promise<string>;

	hasPermission(): Promise<AuthorizationStatus>;

	registerDeviceForRemoteMessages(): Promise<void>;

	requestPermission(permissions?: Permissions): Promise<AuthorizationStatus>;

	unregisterDeviceForRemoteMessages(): Promise<void>;
}
