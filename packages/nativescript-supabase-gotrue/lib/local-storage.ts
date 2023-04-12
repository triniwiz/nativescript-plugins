import { SupportedStorage } from './types';
import { ApplicationSettings } from '@nativescript/core';

const localStorageAdapter: SupportedStorage = {
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

export default localStorageAdapter;
