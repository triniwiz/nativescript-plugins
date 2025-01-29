import type { JWTResponse, UserResponse } from '@descope/core-js-sdk';
import { DescopeNative } from '../internal/modules/descopeModule';
import type { DescopeSession, DescopeSessionManager } from '../types';
import { tokenExpirationWithinThreshold } from '../internal/core/token';
import { DescopeContext } from './context';
// The amount of time (ms) to trigger the refresh before session expires
const REFRESH_THRESHOLD = 60 * 1000; // 1 minute

export class SessionManager implements DescopeSessionManager {
	private context: DescopeContext;
	session?: DescopeSession;
	isSessionLoading: boolean;

	constructor(context: DescopeContext, initialSession?: DescopeSession) {
		if (!context) throw new Error('SessionManager requires an DescopeContext instance.');
		this.context = context;
		this.session = initialSession;
		this.isSessionLoading = !initialSession;
	}

	async loadSession() {
		this.context.logger?.log?.('Searching for persisted session');
		try {
			const loaded = await DescopeNative.loadItem(this.context.projectId);

			if (loaded?.length) {
				this.context.logger?.log?.('Persisted session found');
				const parsed = JSON.parse(loaded) as DescopeSession;
				this.session = parsed;
				return Promise.resolve(this.session);
			} else {
				this.context.logger?.log?.('No persisted session found');
				this.session = undefined;
				return Promise.reject('No persisted session found');
			}
		} catch (e) {
			this.context.logger?.error?.('Failed to search for persisted session', e);
			this.session = undefined;
			return Promise.reject('Failed to search for persisted session');
		} finally {
			this.isSessionLoading = false;
		}
	}

	async manageSession(jwtResponse?: JWTResponse): Promise<void> {
		if (!jwtResponse) throw new Error(`Cannot manage an undefined JWTResponse`);
		if (!jwtResponse.refreshJwt) throw new Error('Cannot manage a session without a refresh JWT');
		if (!jwtResponse.user) throw new Error(`Cannot manage JWTResponse without user`);

		this.context.logger?.log?.('Managing new session');
		const updatedSession: DescopeSession = {
			sessionJwt: jwtResponse.sessionJwt,
			refreshJwt: jwtResponse.refreshJwt,
			user: jwtResponse.user,
		};

		await DescopeNative.saveItem(this.context.projectId, JSON.stringify(updatedSession));
		this.session = updatedSession;
		this.isSessionLoading = false;
	}

	async updateTokens(sessionJwt: string, refreshJwt: string): Promise<void> {
		if (this.session) {
			this.context.logger?.log?.('Updating current session with new tokens');
			const updatedSession = {
				...this.session,
				sessionJwt,
				refreshJwt: refreshJwt || this.session.refreshJwt,
			};

			await DescopeNative.saveItem(this.context.projectId, JSON.stringify(updatedSession));
			this.session = updatedSession;
		} else {
			this.context.logger?.warn?.(`Update tokens called but there's no current session. Ensure this function is called during the component lifecycle.`);
		}
	}

	async clearSession(): Promise<void> {
		this.context.logger?.log?.('Clearing current session');
		await DescopeNative.removeItem(this.context.projectId);
		this.session = undefined;
		this.isSessionLoading = true;
	}

	async updateUser(userResponse: UserResponse): Promise<void> {
		if (this.session) {
			this.context.logger?.log?.('Updating current session user');
			const updatedSession = { ...this.session, user: userResponse };
			await DescopeNative.saveItem(this.context.projectId, JSON.stringify(updatedSession));
			this.session = updatedSession;
		}
	}

	async refreshSessionIfAboutToExpire(): Promise<DescopeSession | undefined> {
		if (!this.session || this.session.refreshJwt === '') {
			this.context.logger?.warn?.("Can't refresh session without a valid refresh token");
			return this.session;
		}

		if (!tokenExpirationWithinThreshold(this.session.sessionJwt, REFRESH_THRESHOLD)) {
			this.context.logger?.log?.('Session is valid');
			return this.session;
		}

		this.context.logger?.log?.('Session JWT about to expire, refreshing...');
		const resp = await this.context.sdk.refresh(this.session.refreshJwt);
		if (resp.data) {
			const { sessionJwt, refreshJwt } = resp.data;
			const updatedSession = {
				sessionJwt,
				refreshJwt: refreshJwt || this.session.refreshJwt,
				user: this.session.user,
			};

			await DescopeNative.saveItem(this.context.projectId, JSON.stringify(updatedSession));
			this.session = updatedSession;
			return updatedSession;
		}

		return this.session;
	}

	getSession(): DescopeSession | undefined {
		return this.session;
	}

	isLoading(): boolean {
		return this.isSessionLoading;
	}
}
