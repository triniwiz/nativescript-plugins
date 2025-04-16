declare class NSCKlaviyo extends NSObject {

	static alloc(): NSCKlaviyo; // inherited from NSObject

	static new(): NSCKlaviyo; // inherited from NSObject

	constructor(o: { key: string; });

	createEvent(name: string, properties: NSDictionary<string, any>, value: number): void;

	getEmail(): string;

	getExternalId(): string;

	getPhoneNumber(): string;

	getPushToken(): string;

	initWithKey(key: string): this;

	registerForInAppForms(callback: () => void): void;

	resetProfile(): void;

	setEmail(email: string): void;

	setExternalId(externalId: string): void;

	setPhoneNumber(phoneNumber: string): void;

	setProfile(value: NSDictionary<string, NSObject>): void;

	setProfileAttribute(key: NSCKlaviyoProfileKey, value: string, customKey: string): void;

	setPushToken(token: string): void;

	setPushTokenWithToken(token: NSData): void;
}

declare const enum NSCKlaviyoProfileKey {

	FirstName = 0,

	LastName = 1,

	Address1 = 2,

	Address2 = 3,

	Title = 4,

	Organization = 5,

	City = 6,

	Region = 7,

	Country = 8,

	Zip = 9,

	Image = 10,

	Latitude = 11,

	Longitude = 12,

	Custom = 13
}