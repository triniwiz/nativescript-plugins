import type { JWTResponse, UserResponse } from '@descope/core-js-sdk';
import { DescopeNative } from '../internal/modules/descopeModule';
import type { DescopeSession, DescopeSessionManager } from '../types';
import { tokenExpirationWithinThreshold } from '../internal/core/token';
import { clearCurrentSession, setCurrentTokens, setCurrentUser } from '../helpers';

// The amount of time (ms) to trigger the refresh before session expires
const REFRESH_THRESHOLD = 60 * 1000; // 1 minute

class SessionManager implements DescopeSessionManager {
	private sdk: any;
	private logger?: Console;
	private projectId: string;
	session?: DescopeSession;
	isSessionLoading: boolean;

	constructor(sdk: any, logger: Console | undefined, projectId: string, initialSession?: DescopeSession) {
		if (!sdk) throw new Error('SessionManager requires an SDK instance.');
		this.sdk = sdk;
		this.logger = logger;
		this.projectId = projectId;
		this.session = initialSession;
		this.isSessionLoading = !initialSession;
	}

	async manageSession(jwtResponse?: JWTResponse): Promise<void> {
		if (!jwtResponse) throw new Error(`Cannot manage an undefined JWTResponse`);
		if (!jwtResponse.refreshJwt) throw new Error('Cannot manage a session without a refresh JWT');
		if (!jwtResponse.user) throw new Error(`Cannot manage JWTResponse without user`);

		this.logger?.log('Managing new session');
		const updatedSession: DescopeSession = {
			sessionJwt: jwtResponse.sessionJwt,
			refreshJwt: jwtResponse.refreshJwt,
			user: jwtResponse.user,
		};

		await DescopeNative.saveItem(this.projectId, JSON.stringify(updatedSession));
		setCurrentTokens(updatedSession.sessionJwt, updatedSession.refreshJwt);
		setCurrentUser(updatedSession.user);
		this.session = updatedSession;
		this.isSessionLoading = false;
	}

	async updateTokens(sessionJwt: string, refreshJwt: string): Promise<void> {
		if (this.session) {
			this.logger?.log('Updating current session with new tokens');
			const updatedSession = {
				...this.session,
				sessionJwt,
				refreshJwt: refreshJwt || this.session.refreshJwt,
			};

			await DescopeNative.saveItem(this.projectId, JSON.stringify(updatedSession));
			setCurrentTokens(updatedSession.sessionJwt, updatedSession.refreshJwt);
			this.session = updatedSession;
		} else {
			this.logger?.warn(`Update tokens called but there's no current session. Ensure this function is called during the component lifecycle.`);
		}
	}

	async clearSession(): Promise<void> {
		this.logger?.log('Clearing current session');
		await DescopeNative.removeItem(this.projectId);
		clearCurrentSession();
		this.session = undefined;
		this.isSessionLoading = true;
	}

	async updateUser(userResponse: UserResponse): Promise<void> {
		if (this.session) {
			this.logger?.log('Updating current session user');
			const updatedSession = { ...this.session, user: userResponse };
			await DescopeNative.saveItem(this.projectId, JSON.stringify(updatedSession));
			setCurrentUser(updatedSession.user);
			this.session = updatedSession;
		}
	}

	async refreshSessionIfAboutToExpire(): Promise<DescopeSession | undefined> {
		if (!this.session || this.session.refreshJwt === '') {
			this.logger?.warn("Can't refresh session without a valid refresh token");
			return this.session;
		}

		if (!tokenExpirationWithinThreshold(this.session.sessionJwt, REFRESH_THRESHOLD)) {
			this.logger?.log('Session is valid');
			return this.session;
		}

		this.logger?.log('Session JWT about to expire, refreshing...');
		const resp = await this.sdk.refresh(this.session.refreshJwt);
		if (resp.data) {
			const { sessionJwt, refreshJwt } = resp.data;
			const updatedSession = {
				sessionJwt,
				refreshJwt: refreshJwt || this.session.refreshJwt,
				user: this.session.user,
			};

			await DescopeNative.saveItem(this.projectId, JSON.stringify(updatedSession));
			setCurrentTokens(updatedSession.sessionJwt, updatedSession.refreshJwt);
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

export default SessionManager;
