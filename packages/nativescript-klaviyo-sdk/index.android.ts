import { AndroidActivityNewIntentEventData, Application, Utils } from '@nativescript/core';
import { EventName, ProfileAttributeKey } from './common';
import { Profile } from '.';
declare const io: any, com: any;
export class Klaviyo {
	static initialize(key: string) {
		com.klaviyo.analytics.Klaviyo.INSTANCE.initialize(key, Utils.android.getApplicationContext());
	}

	static handleIntent(value) {
		if (value?.intent) {
			com.klaviyo.analytics.Klaviyo.INSTANCE.handlePush(value.intent);
		} else {
			com.klaviyo.analytics.Klaviyo.INSTANCE.handlePush(value);
		}
	}

	static handleNotification(message, deepLink?: (string) => void): boolean {
		try {
			if (message instanceof com.google.firebase.messaging.RemoteMessage) {
				const data = message.getData();
				console.log('Klaviyo handleNotification', data);
				// if(data?.get?.("_k") &&)
			}
		} catch (error) {}
		return false;
	}
	// 		public getData(): java.util.Map<string,string>;

	static registerForInAppForms() {
		io.github.triniwiz.plugins.klaviyo.Klaviyo.registerForInAppForms();
	}

	static setPushToken(token: string) {
		com.klaviyo.analytics.Klaviyo.INSTANCE.setPushToken(token);
	}

	static getPushToken() {
		return com.klaviyo.analytics.Klaviyo.INSTANCE.getPushToken();
	}

	static setEmail(email: string) {
		com.klaviyo.analytics.Klaviyo.INSTANCE.setEmail(email);
	}
	static getEmail() {
		return com.klaviyo.analytics.Klaviyo.INSTANCE.getEmail();
	}

	static setExternalId(externalId: string) {
		com.klaviyo.analytics.Klaviyo.INSTANCE.setExternalId(externalId);
	}

	static getExternalId() {
		return com.klaviyo.analytics.Klaviyo.INSTANCE.getExternalId();
	}

	static setPhoneNumber(phoneNumber: string) {
		com.klaviyo.analytics.Klaviyo.INSTANCE.setPhoneNumber(phoneNumber);
	}

	static getPhoneNumber() {
		return com.klaviyo.analytics.Klaviyo.INSTANCE.getPhoneNumber();
	}

	static setProfile(value: Profile) {
		const properties = new java.util.HashMap<string, any>();
		if (value.properties) {
			const keys = Object.keys(value.properties);
			for (let i = 0; i < keys.length; i++) {
				const key = keys[i] as ProfileAttributeKey;
				const propValue = value.properties[key];
				switch (key) {
					case ProfileAttributeKey.ADDRESS1:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ADDRESS1.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.ADDRESS2:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ADDRESS2.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.ANONYMOUS_ID:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ANONYMOUS_ID.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.CITY:
						properties.put(com.klaviyo.analytics.model.ProfileKey.CITY.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.COUNTRY:
						properties.put(com.klaviyo.analytics.model.ProfileKey.COUNTRY.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.CUSTOM:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ADDRESS1.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.EMAIL:
						properties.put(com.klaviyo.analytics.model.ProfileKey.EMAIL.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.EXTERNAL_ID:
						properties.put(com.klaviyo.analytics.model.ProfileKey.EXTERNAL_ID.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.FIRST_NAME:
						properties.put(com.klaviyo.analytics.model.ProfileKey.FIRST_NAME.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.IMAGE:
						properties.put(com.klaviyo.analytics.model.ProfileKey.IMAGE.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.LAST_NAME:
						properties.put(com.klaviyo.analytics.model.ProfileKey.LAST_NAME.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.LATITUDE:
						properties.put(com.klaviyo.analytics.model.ProfileKey.LATITUDE.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.LONGITUDE:
						properties.put(com.klaviyo.analytics.model.ProfileKey.LONGITUDE.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.ORGANIZATION:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ORGANIZATION.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.PHONE_NUMBER:
						properties.put(com.klaviyo.analytics.model.ProfileKey.PHONE_NUMBER.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.PUSH_STATE:
					case ProfileAttributeKey.PUSH_TOKEN:
						// ignore
						break;
					case ProfileAttributeKey.REGION:
						properties.put(com.klaviyo.analytics.model.ProfileKey.REGION.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.TIMEZONE:
						properties.put(com.klaviyo.analytics.model.ProfileKey.TIMEZONE.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.TITLE:
						properties.put(com.klaviyo.analytics.model.ProfileKey.TITLE.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
					case ProfileAttributeKey.ZIP:
						properties.put(com.klaviyo.analytics.model.ProfileKey.ZIP.INSTANCE, Utils.dataSerialize(propValue, true));
						break;
				}
				properties.put(keys[i], Utils.dataSerialize(value.properties[keys[i]], true));
			}
		}
		const profile = new com.klaviyo.analytics.model.Profile(value.externalId, value.email, value.phoneNumber, properties);
		if (value.anonymousId) {
			profile.setAnonymousId(value.anonymousId);
		}
		com.klaviyo.analytics.Klaviyo.INSTANCE.setProfile(profile);
	}

	static resetProfile() {
		com.klaviyo.analytics.Klaviyo.INSTANCE.resetProfile();
	}

	static setProfileAttribute(key: ProfileAttributeKey, value: string, customKey?: string) {
		let nativeKey: com.klaviyo.analytics.model.ProfileKey = null;
		switch (key) {
			case ProfileAttributeKey.ADDRESS1:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.ADDRESS1.INSTANCE;
				break;
			case ProfileAttributeKey.ADDRESS2:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.ADDRESS2.INSTANCE;
				break;
			case ProfileAttributeKey.ANONYMOUS_ID:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.ANONYMOUS_ID.INSTANCE;
				break;
			case ProfileAttributeKey.CITY:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.CITY.INSTANCE;
				break;
			case ProfileAttributeKey.COUNTRY:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.COUNTRY.INSTANCE;
				break;
			case ProfileAttributeKey.CUSTOM:
				nativeKey = new com.klaviyo.analytics.model.ProfileKey.CUSTOM(customKey);
				break;
			case ProfileAttributeKey.EMAIL:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.EMAIL.INSTANCE;
				break;
			case ProfileAttributeKey.EXTERNAL_ID:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.EXTERNAL_ID.INSTANCE;
				break;
			case ProfileAttributeKey.FIRST_NAME:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.FIRST_NAME.INSTANCE;
				break;
			case ProfileAttributeKey.IMAGE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.IMAGE.INSTANCE;
				break;
			case ProfileAttributeKey.LAST_NAME:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.LAST_NAME.INSTANCE;
				break;
			case ProfileAttributeKey.LATITUDE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.LATITUDE.INSTANCE;
				break;
			case ProfileAttributeKey.LONGITUDE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.LONGITUDE.INSTANCE;
				break;
			case ProfileAttributeKey.ORGANIZATION:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.ORGANIZATION.INSTANCE;
				break;
			case ProfileAttributeKey.PHONE_NUMBER:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.PHONE_NUMBER.INSTANCE;
				break;
			case ProfileAttributeKey.PUSH_STATE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.PUSH_STATE.INSTANCE;
				break;
			case ProfileAttributeKey.PUSH_TOKEN:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.PUSH_TOKEN.INSTANCE;
				break;
			case ProfileAttributeKey.REGION:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.REGION.INSTANCE;
				break;
			case ProfileAttributeKey.TIMEZONE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.TIMEZONE.INSTANCE;
				break;
			case ProfileAttributeKey.TITLE:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.TITLE.INSTANCE;
				break;
			case ProfileAttributeKey.ZIP:
				nativeKey = com.klaviyo.analytics.model.ProfileKey.ZIP.INSTANCE;
				break;
		}

		if (!nativeKey) {
			return;
		}

		com.klaviyo.analytics.Klaviyo.INSTANCE.setProfileAttribute(nativeKey, Utils.dataSerialize(value, true));
	}

	static createEvent(event: { name: EventName | (string & {}) }, properties?: { [key: string]: any }, value?: number) {
		let name: com.klaviyo.analytics.model.EventMetric;
		switch (event.name) {
			case 'Added to Cart':
				name = com.klaviyo.analytics.model.EventMetric.ADDED_TO_CART.INSTANCE;
				break;
			case 'Opened App':
				name = com.klaviyo.analytics.model.EventMetric.OPENED_APP.INSTANCE;
				break;
			case 'Started Checkout':
				name = com.klaviyo.analytics.model.EventMetric.STARTED_CHECKOUT.INSTANCE;
				break;
			case 'Viewed Product':
				name = com.klaviyo.analytics.model.EventMetric.VIEWED_PRODUCT.INSTANCE;
				break;
			default:
				name = new com.klaviyo.analytics.model.EventMetric.CUSTOM(event.name);
				break;
		}

		let nativeEvent: com.klaviyo.analytics.model.Event;
		if (properties && typeof properties === 'object') {
			const props = Utils.dataSerialize(properties, true);
			nativeEvent = new com.klaviyo.analytics.model.Event(name, props);
		} else {
			nativeEvent = new com.klaviyo.analytics.model.Event(name);
		}

		if (typeof value === 'number') {
			nativeEvent.setValue(double(value));
		}
		com.klaviyo.analytics.Klaviyo.INSTANCE.createEvent(nativeEvent);
	}
}
