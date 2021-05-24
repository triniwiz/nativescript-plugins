export function expiresAt(expiresIn: number) {
  const timeNow = Math.round(Date.now() / 1000)
  return timeNow + expiresIn
}

export function uuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const isBrowser = () => true

export function getParameterByName(name: string, url?: string) {
  if (!url) url = window.location.href
  name = name.replace(/[\[\]]/g, '\\$&')
  var regex = new RegExp('[?&#]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url)
  if (!results) return null
  if (!results[2]) return ''
  return decodeURIComponent(results[2].replace(/\+/g, ' '))
}

import {ApplicationSettings} from '@nativescript/core';

export class LocalStorage {

  item(index: string) {
    console.log('here')
    return this[index];
  }

  get length() {
    return ApplicationSettings.getAllKeys.length;
  }

  constructor(localStorage: Storage) {
  }

  clear(): void {
    ApplicationSettings.clear();
  }

  key(index: number): string | null {
    return ApplicationSettings.getAllKeys[index]
  }

  setItem(key: string, value: any): void {
    ApplicationSettings.setString(key, value)
  }

  getItem(key: string): string | null {
    return ApplicationSettings.getString(key)
  }

  removeItem(key: string): void {
    ApplicationSettings.remove(key)
  }
}
