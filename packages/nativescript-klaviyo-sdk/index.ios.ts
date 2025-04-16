import { Utils } from '@nativescript/core';
import { ProfileAttributeKey } from './common';
import { Profile } from '.';

const native_ = Symbol('[[native]]');
export class Klaviyo {
	private static [native_]: NSCKlaviyo;
	private static get native() {
		if (!this[native_]) {
			throw new Error('Klaviyo not initialized. Call Klaviyo.initialize(key: string) first.');
		}
		return this[native_];
	}
	static initialize(key: string) {
		this[native_] = NSCKlaviyo.alloc().initWithKey(key);
	}

	static registerForInAppForms() {
		this.native.registerForInAppForms(() => {});
	}

	static setPushToken(token: string) {
		this.native.setPushToken(token);
	}

	static getPushToken() {
		return this.native.getPushToken();
	}

	static setEmail(email: string) {
		this.native.setEmail(email);
	}
	static getEmail() {
		return this.native.getEmail();
	}

	static setExternalId(externalId: string) {
		this.native.setExternalId(externalId);
	}

	static getExternalId() {
		return this.native.getExternalId();
	}

	static setPhoneNumber(phoneNumber: string) {
		this.native.setPhoneNumber(phoneNumber);
	}

	static getPhoneNumber() {
		return this.native.getPhoneNumber();
	}

	static setProfile(value: Profile) {
		const profile = NSMutableDictionary.alloc().initWithCapacity(3);
		profile.setObjectForKey(value.email, 'email');
		profile.setObjectForKey(value.externalId, 'externalId');
		profile.setObjectForKey(value.phoneNumber, 'phoneNumber');

		if (value.firstName) {
			profile.setObjectForKey(value.firstName, 'firstName');
		}

		if (value.lastName) {
			profile.setObjectForKey(value.lastName, 'lastName');
		}

		if (value.organization) {
			profile.setObjectForKey(value.organization, 'organization');
		}

		if (value.title) {
			profile.setObjectForKey(value.title, 'title');
		}

		if (value.image) {
			profile.setObjectForKey(value.image, 'image');
		}

		if (value.location) {
			const location = Utils.dataSerialize(value.location, true);
			profile.setObjectForKey(location, 'location');
		}

		if (value.anonymousId) {
			//	profile.setAnonymousId(value.anonymousId);
		}
		this.native.setProfile(profile);
	}

	static resetProfile() {
		this.native.resetProfile();
	}

	static setProfileAttribute(key: ProfileAttributeKey, value: string, customKey?: string) {
		let nativeKey: NSCKlaviyoProfileKey = null;
		switch (key) {
			case ProfileAttributeKey.ADDRESS1:
				nativeKey = NSCKlaviyoProfileKey.Address1;
				break;
			case ProfileAttributeKey.ADDRESS2:
				nativeKey = NSCKlaviyoProfileKey.Address2;
				break;
			case ProfileAttributeKey.ANONYMOUS_ID:
				// nativeKey = com.klaviyo.analytics.model.ProfileKey.ANONYMOUS_ID.INSTANCE;
				break;
			case ProfileAttributeKey.CITY:
				nativeKey = NSCKlaviyoProfileKey.City;
				break;
			case ProfileAttributeKey.COUNTRY:
				nativeKey = NSCKlaviyoProfileKey.Country;
				break;
			case ProfileAttributeKey.CUSTOM:
				nativeKey = NSCKlaviyoProfileKey.Custom;
				break;
			case ProfileAttributeKey.EMAIL:
				// todo validate
				this.setEmail(value);
				break;
			case ProfileAttributeKey.EXTERNAL_ID:
				// todo validate
				this.setExternalId(value);
				break;
			case ProfileAttributeKey.FIRST_NAME:
				nativeKey = NSCKlaviyoProfileKey.FirstName;
				break;
			case ProfileAttributeKey.IMAGE:
				nativeKey = NSCKlaviyoProfileKey.Image;
				break;
			case ProfileAttributeKey.LAST_NAME:
				nativeKey = NSCKlaviyoProfileKey.LastName;
				break;
			case ProfileAttributeKey.LATITUDE:
				nativeKey = NSCKlaviyoProfileKey.Latitude;
				break;
			case ProfileAttributeKey.LONGITUDE:
				nativeKey = NSCKlaviyoProfileKey.Longitude;
				break;
			case ProfileAttributeKey.ORGANIZATION:
				nativeKey = NSCKlaviyoProfileKey.Organization;
				break;
			case ProfileAttributeKey.PHONE_NUMBER:
				// todo validate
				this.setPhoneNumber(value);
				break;
			case ProfileAttributeKey.PUSH_STATE:
				// todo
				break;
			case ProfileAttributeKey.PUSH_TOKEN:
				// todo validate
				this.setPushToken(value);
				break;
			case ProfileAttributeKey.REGION:
				nativeKey = NSCKlaviyoProfileKey.Region;
				break;
			case ProfileAttributeKey.TIMEZONE:
				// todo
				break;
			case ProfileAttributeKey.TITLE:
				nativeKey = NSCKlaviyoProfileKey.Title;
				break;
			case ProfileAttributeKey.ZIP:
				nativeKey = NSCKlaviyoProfileKey.Zip;
				break;
		}

		if (!nativeKey) {
			return;
		}

		const data = Utils.dataSerialize(value, true);

		this.native.setProfileAttribute(nativeKey, data, customKey ?? null);
	}

	static createEvent(event: { name: 'Opened App' | 'Viewed Product' | 'Added to Cart' | 'Started Checkout' | (string & {}); properties?: { [key: string]: any }; value?: number }) {
		this.native.createEvent(event.name, (event.properties as never) ?? null, event.value ?? Number.NaN);
	}
}
