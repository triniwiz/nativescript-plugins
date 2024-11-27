import type { UserResponse } from '@descope/core-js-sdk';

let currentSessionToken = '';
let currentRefreshToken = '';
let currentUser: UserResponse | undefined = undefined;

// internal setters

export const setCurrentTokens = (sessionToken: string, refreshToken: string) => {
	currentSessionToken = sessionToken;
	currentRefreshToken = refreshToken;
};

export const setCurrentUser = (user: UserResponse) => {
	currentUser = user;
};

export const clearCurrentSession = () => {
	currentSessionToken = '';
	currentRefreshToken = '';
	currentUser = undefined;
};

// public getters

export const getCurrentSessionToken = () => currentSessionToken;

export const getCurrentRefreshToken = () => currentRefreshToken;

export const getCurrentUser = () => currentUser;
