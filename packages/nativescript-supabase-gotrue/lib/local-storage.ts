// custom: use ApplicationSettings as local storage in NativeScript
import { SupportedStorage } from './types';
import { ApplicationSettings } from '@nativescript/core';

export const localStorageAdapter: SupportedStorage = {
	getItem: (key) => {
		return ApplicationSettings.getString(key);
	},
	setItem: (key, value) => {
		ApplicationSettings.setString(key, value);
	},
	removeItem: (key) => {
		ApplicationSettings.remove(key);
	},
};

/**
 * Returns a localStorage-like object that stores the key-value pairs in
 * memory.
 */
export function memoryLocalStorageAdapter(store: { [key: string]: string } = {}): SupportedStorage {
	return {
		getItem: (key) => {
			return store[key] || null;
		},

		setItem: (key, value) => {
			store[key] = value;
		},

		removeItem: (key) => {
			delete store[key];
		},
	};
}
