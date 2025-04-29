export interface Location {
	latitude?: number;
	longitude?: number;
	city?: string;
	region?: string;
	country?: string;
	zip?: string;
	address1?: string;
	address2?: string;
	timezone?: string;
}

export interface Profile {
	email: string;
	externalId: string;
	phoneNumber: string;
	anonymousId?: string;
	firstName?: string;
	lastName?: string;
	organization?: string;
	title?: string;
	image?: string;
	location?: Location;
	properties?: { [key: string]: string };
}

export class Klaviyo {
	static initialize(key: string);

	static handleIntent(value);

	static handleNotification(message, deepLink?: (string) => void): boolean;

	static registerForInAppForms();

	static setPushToken(token: string);

	static getPushToken(): string;

	static setEmail(email: string);

	static getEmail(): string;

	static setExternalId(externalId: string);

	static getExternalId(): string;

	static setPhoneNumber(phoneNumber: string);

	static getPhoneNumber(): string;

	static setProfile(value: Profile);

	static resetProfile();

	static setProfileAttribute(key: ProfileAttributeKey, value: string, customKey?: string);

	static createEvent(event: { name: 'Opened App' | 'Viewed Product' | 'Added to Cart' | 'Started Checkout' | (string & {}); properties?: { [key: string]: any }; value?: number });
}
