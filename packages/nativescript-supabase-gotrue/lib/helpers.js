export function expiresAt(expiresIn) {
    const timeNow = Math.round(Date.now() / 1000);
    return timeNow + expiresIn;
}
export function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
export const isBrowser = () => true;
export function getParameterByName(name, url) {
    var _a, _b;
    if (!url)
        url = (_b = (_a = window === null || window === void 0 ? void 0 : window.location) === null || _a === void 0 ? void 0 : _a.href) !== null && _b !== void 0 ? _b : '';
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'), results = regex.exec(url);
    if (!results)
        return null;
    if (!results[2])
        return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
import { ApplicationSettings } from '@nativescript/core';
export class LocalStorage {
    item(index) {
        return this[index];
    }
    get length() {
        return ApplicationSettings.getAllKeys().length;
    }
    constructor(localStorage) {
    }
    clear() {
        ApplicationSettings.clear();
    }
    key(index) {
        return ApplicationSettings.getAllKeys()[index];
    }
    setItem(key, value) {
        ApplicationSettings.setString(key, value);
    }
    getItem(key) {
        return ApplicationSettings.getString(key);
    }
    removeItem(key) {
        ApplicationSettings.remove(key);
    }
}
//# sourceMappingURL=helpers.js.map