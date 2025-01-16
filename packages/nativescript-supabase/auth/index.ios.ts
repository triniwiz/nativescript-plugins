import { dataDeserialize, dataSerialize } from '@nativescript/core/utils';
import type { SupabaseClient } from '../index';
type Client = SupabaseClient & { native: NSCSupabaseClient };
import { OauthProviderType } from '.';

export class UserIdentity {
	native: NSCSupabaseUserIdentity;

	static fromNative(identity: NSCSupabaseUserIdentity): UserIdentity {
		if (!identity) return null;
		const ret = new UserIdentity();
		ret.native = identity;
		return ret;
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get id(): string {
		return this.native.id;
	}

	private _identityData: Record<string, any>;
	get identityData(): Record<string, any> {
		if (!this._identityData) {
			this._identityData = dataDeserialize(this.native.identityData);
		}
		return this._identityData;
	}

	get identityId(): string {
		return this.native.identityId.UUIDString;
	}

	get lastSignInAt(): Date {
		return this.native.lastSignInAt;
	}

	get provider(): string {
		return this.native.provider;
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}

	get userId(): string {
		return this.native.userId.UUIDString;
	}

	toJSON(): any {
		return {
			createdAt: this.createdAt,
			id: this.id,
			identityData: this.identityData,
			identityId: this.identityId,
			lastSignInAt: this.lastSignInAt,
			provider: this.provider,
			updatedAt: this.updatedAt,
			userId: this.userId,
		};
	}
}

export class Factor {
	native: NSCSupabaseFactor;
	static fromNative(factor: NSCSupabaseFactor): Factor {
		if (!factor) return null;
		const ret = new Factor();
		ret.native = factor;
		return ret;
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get factorType(): string {
		return this.native.factorType;
	}

	get friendlyName(): string {
		return this.native.friendlyName;
	}

	get id(): string {
		return this.native.id;
	}

	get status(): 'verified' | 'unverified' {
		switch (this.native.status) {
			case NSCSupabaseFactorStatus.Verified:
				return 'verified';
			case NSCSupabaseFactorStatus.Unverified:
				return 'unverified';
		}
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}

	toJSON(): any {
		return {
			createdAt: this.createdAt,
			factorType: this.factorType,
			friendlyName: this.friendlyName,
			id: this.id,
			status: this.status,
			updatedAt: this.updatedAt,
		};
	}
}

export class User {
	native: NSCSupabaseAuthUser;
	static fromNative(user: NSCSupabaseAuthUser): User {
		if (!user) return null;
		const ret = new User();
		ret.native = user;
		return ret;
	}

	get actionLink(): string {
		return this.native.actionLink;
	}

	private _appMetadata: any;
	get appMetadata(): Record<string, any> {
		if (!this._appMetadata) {
			this._appMetadata = dataDeserialize(this.native.appMetadata);
		}
		return this._appMetadata;
	}

	get aud(): string {
		return this.native.aud;
	}

	get confirmationSentAt(): Date {
		return this.native.confirmationSentAt;
	}

	get confirmedAt(): Date {
		return this.native.confirmedAt;
	}

	get createdAt(): Date {
		return this.native.createdAt;
	}

	get email(): string {
		return this.native.email;
	}

	get emailChangeSentAt(): Date {
		return this.native.emailChangeSentAt;
	}

	get emailConfirmedAt(): Date {
		return this.native.emailConfirmedAt;
	}

	private _factors: Factor[];
	get factors(): Factor[] {
		if (!this._factors) {
			this._factors = [];
			const factors = this.native.factors;
			const count = factors.count;
			for (let i = 0; i < count; i++) {
				this._factors.push(Factor.fromNative(factors.objectAtIndex(i)));
			}
		}
		return this._factors;
	}

	get id(): string {
		return this.native.id.UUIDString;
	}

	get identities() {
		// TODO cache
		const ret = [];
		const identities = this.native.identities;
		const count = identities.count;
		for (let i = 0; i < count; i++) {
			ret.push(UserIdentity.fromNative(identities.objectAtIndex(i)));
		}

		return ret;
	}

	get invitedAt(): Date {
		return this.native.invitedAt;
	}

	get isAnonymous(): boolean {
		return this.native.isAnonymous;
	}

	get lastSignInAt(): Date {
		return this.native.lastSignInAt;
	}

	get newEmail(): string {
		return this.native.newEmail;
	}

	get phone(): string {
		return this.native.phone;
	}

	get phoneConfirmedAt(): Date {
		return this.native.phoneConfirmedAt;
	}

	get recoverySentAt(): Date {
		return this.native.recoverySentAt;
	}

	get role(): string {
		return this.native.role;
	}

	get updatedAt(): Date {
		return this.native.updatedAt;
	}

	private _userMetadata: Record<string, any>;
	get userMetadata(): Record<string, any> {
		if (!this._userMetadata) {
			this._userMetadata = dataDeserialize(this.native.userMetadata);
		}
		return this._userMetadata;
	}
}

export class Session {
	native: NSCSupabaseAuthSession;
	static fromNative(session: NSCSupabaseAuthSession): Session {
		if (!session) return null;
		const ret = new Session();
		ret.native = session;
		return ret;
	}

	get accessToken(): string {
		return this.native.accessToken;
	}

	get expiresAt(): number {
		return this.native.expiresAt;
	}

	get expiresIn(): number {
		return this.native.expiresAt;
	}

	get isExpired(): boolean {
		return this.native.isExpired;
	}

	get providerRefreshToken(): string {
		return this.native.providerRefreshToken;
	}

	get providerToken(): string {
		return this.native.providerToken;
	}

	get refreshToken(): string {
		return this.native.refreshToken;
	}

	get tokenType(): string {
		return this.native.tokenType;
	}

	private _user: User;
	get user(): User {
		if (!this._user) {
			this._user = User.fromNative(this.native.user);
		}
		return this._user;
	}

	toJSON(): any {
		return {
			accessToken: this.accessToken,
			expiresAt: this.expiresAt,
			expiresIn: this.expiresIn,
			isExpired: this.isExpired,
			providerRefreshToken: this.providerRefreshToken,
			providerToken: this.providerToken,
			refreshToken: this.refreshToken,
			tokenType: this.tokenType,
			user: this.user,
		};
	}
}

export class AuthMetaSecurity {
	native_: NSCSupabaseAuthMetaSecurity;
	constructor(captchaToken: string) {
		if ((captchaToken as any) instanceof NSCSupabaseAuthMetaSecurity) {
			this.native_ = captchaToken as never;
		} else {
			this.native_ = NSCSupabaseAuthMetaSecurity.alloc().initWithCaptchaToken(captchaToken);
		}
	}
	static fromNative(meta: NSCSupabaseAuthMetaSecurity): AuthMetaSecurity {
		if (!meta) return null;
		return new AuthMetaSecurity(meta as never);
	}

	get native() {
		return this.native_;
	}

	get captchaToken(): string {
		return this.native_.captchaToken;
	}
}

export class OpenIDConnectCredentials {
	native_: NSCSupabaseOpenIDConnectCredentials;
	constructor(provider: 'google' | 'apple' | 'azure' | 'facebook', idToken: string) {
		let nativeProvider: NSCSupabaseOpenIDConnectCredentialsProvider;
		switch (provider) {
			case 'google':
				nativeProvider = NSCSupabaseOpenIDConnectCredentialsProvider.Google;
				break;
			case 'apple':
				nativeProvider = NSCSupabaseOpenIDConnectCredentialsProvider.Apple;
				break;
			case 'azure':
				nativeProvider = NSCSupabaseOpenIDConnectCredentialsProvider.Azure;
				break;
			case 'facebook':
				nativeProvider = NSCSupabaseOpenIDConnectCredentialsProvider.Facebook;
				break;
		}

		if (!nativeProvider) {
			throw new Error('Invalid provider');
		}

		this.native_ = NSCSupabaseOpenIDConnectCredentials.alloc().init(nativeProvider, idToken);
	}

	get native() {
		return this.native_;
	}

	get accessToken(): string | null {
		return this.native.accessToken;
	}
	set accessToken(token: string | null) {
		this.native.accessToken = token ?? null;
	}

	get gotrueMetaSecurity(): AuthMetaSecurity | null {
		return AuthMetaSecurity.fromNative(this.native.gotrueMetaSecurity);
	}

	set gotrueMetaSecurity(meta: AuthMetaSecurity | null) {
		this.native.gotrueMetaSecurity = meta?.native ?? null;
	}

	get idToken(): string {
		return this.native.idToken;
	}

	set idToken(token: string) {
		this.native.idToken = token;
	}

	get nonce(): string | null {
		return this.native.nonce;
	}

	set nonce(nonce: string | null) {
		this.native.nonce = nonce ?? null;
	}

	get provider(): 'google' | 'apple' | 'azure' | 'facebook' {
		switch (this.native.provider) {
			case NSCSupabaseOpenIDConnectCredentialsProvider.Google:
				return 'google';
			case NSCSupabaseOpenIDConnectCredentialsProvider.Apple:
				return 'apple';
			case NSCSupabaseOpenIDConnectCredentialsProvider.Azure:
				return 'azure';
			case NSCSupabaseOpenIDConnectCredentialsProvider.Facebook:
				return 'facebook';
		}
	}

	set provider(provider: 'google' | 'apple' | 'azure' | 'facebook') {
		switch (provider) {
			case 'google':
				this.native.provider = NSCSupabaseOpenIDConnectCredentialsProvider.Google;
				break;
			case 'apple':
				this.native.provider = NSCSupabaseOpenIDConnectCredentialsProvider.Apple;
				break;
			case 'azure':
				this.native.provider = NSCSupabaseOpenIDConnectCredentialsProvider.Azure;
				break;
			case 'facebook':
				this.native.provider = NSCSupabaseOpenIDConnectCredentialsProvider.Facebook;
				break;
		}
	}
}

export class Admin {
	native_: NSCSupabaseAuthAdmin;

	static fromNative(admin: NSCSupabaseAuthAdmin): Admin {
		if (!admin) return null;
		const ret = new Admin();
		ret.native_ = admin;
		return ret;
	}

	get native() {
		return this.native_;
	}
}

export class Auth {
	client: Client;
	constructor(client: Client) {
		this.client = client;
	}

	get native() {
		return this.client.native.auth;
	}

	get currentSession(): Session {
		if (!this.native.currentSession) return null;
		return Session.fromNative(this.native.currentSession);
	}

	get currentUser(): User {
		if (!this.native.currentUser) return null;
		return User.fromNative(this.native.currentUser);
	}

	onAuthStateChange(callback: (eventName: 'INITIAL_SESSION' | 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED' | 'USER_UPDATED' | 'PASSWORD_RECOVERY', session: Session) => void) {
		const listener = this.native.addOnAuthStateChange((event, session) => {
			let eventName;
			switch (event) {
				case NSCSupabaseAuthChangeEvent.InitialSession:
					eventName = 'INITIAL_SESSION';
					break;
				case NSCSupabaseAuthChangeEvent.PasswordRecovery:
					eventName = 'PASSWORD_RECOVERY';
					break;
				case NSCSupabaseAuthChangeEvent.SignedIn:
					eventName = 'SIGNED_IN';
					break;
				case NSCSupabaseAuthChangeEvent.SignedOut:
					eventName = 'SIGNED_OUT';
					break;
				case NSCSupabaseAuthChangeEvent.TokenRefreshed:
					eventName = 'TOKEN_REFRESHED';
					break;
				case NSCSupabaseAuthChangeEvent.UserUpdated:
					eventName = 'USER_UPDATED';
					break;
				case NSCSupabaseAuthChangeEvent.UserDeleted:
					eventName = 'USER_DELETED';
					break;
				case NSCSupabaseAuthChangeEvent.MfaChallengeVerified:
					eventName = 'MFA_CHALLENGE_VERIFIED';
					break;
			}
			callback(eventName, Session.fromNative(session));
		});
		return {
			remove: () => {
				listener.remove();
			},
		};
	}

	getSession() {
		return new Promise<Session>((resolve, reject) => {
			this.native.getSession((session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}

	setSession(currentSession: { accessToken: string; refreshToken: string }) {
		return new Promise<Session>((resolve, reject) => {
			this.native.setSession(currentSession.accessToken, currentSession.refreshToken, (session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}

	signInWithPassword(credentials: {
		email?: string;
		phone?: string;
		password: string;
		options?: {
			captchaToken?: string;
		};
	}): Promise<Session> {
		return new Promise((resolve, reject) => {
			if (credentials.phone) {
				this.native.signInPhone(credentials.phone, credentials.password, credentials.options?.captchaToken ?? null, (session, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(Session.fromNative(session));
					}
				});
			} else {
				this.native.signIn(credentials.email, credentials.password, credentials.options?.captchaToken ?? null, (session, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(Session.fromNative(session));
					}
				});
			}
		});
	}

	signInAnonymously(credentials?: {
		data?: Record<string, any>;
		options?: {
			captchaToken?: string;
		};
	}) {
		return new Promise<Session>((resolve, reject) => {
			let dataSerialized = null;
			if (credentials?.data) {
				dataSerialized = dataSerialize(credentials?.data);
			}
			this.native.signInAnonymously(dataSerialized as never, credentials?.options?.captchaToken ?? null, (session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}
	signInWithIdToken(credentials: OpenIDConnectCredentials) {
		return new Promise<Session>((resolve, reject) => {
			this.native.signInWithIdToken(credentials.native, (session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}

	signUp(value: {
		email?: string;
		phone?: string;
		password: string;
		captchaToken?: string;
		options?: {
			data?: Record<string, any>;
			emailRedirectTo?: string;
		};
	}) {
		return new Promise<{ session?: Session; user: User }>((resolve, reject) => {
			if (value.email) {
				this.native.signUp(value.email, value.password, value.captchaToken ?? null, value.options?.data ? dataSerialize(value.options.data) : null, value.options?.emailRedirectTo ?? null, (user, session, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve({ session: session ? Session.fromNative(session) : null, user: User.fromNative(user) });
					}
				});
			} else if (value.phone) {
				this.native.signUpWithPhone(value.phone, value.password, value.captchaToken ?? null, value.options?.data ? dataSerialize(value.options.data) : null, (user, session, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve({ session: session ? Session.fromNative(session) : null, user: User.fromNative(user) });
					}
				});
			} else {
				reject(new Error('Email or Phone required'));
			}
		});
	}

	signInWithOtp(credentials: {
		email?: string;
		phone?: string;
		options?: {
			captchaToken?: string;
			data?: Record<string, any>;
			emailRedirectTo?: string;
			shouldCreateUser?: boolean;
			channel?: 'sms' | 'whatsapp';
		};
	}) {
		return new Promise<void>((resolve, reject) => {
			if (!credentials.email && !credentials.phone) {
				reject(new Error('Email or Phone required'));
				return;
			}
			if (credentials.email) {
				this.native.signInWithOTP(credentials.email, credentials.options?.emailRedirectTo ?? null, credentials.options?.data ? dataSerialize(credentials.options.data) : null, credentials.options?.captchaToken ?? null, (error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			} else if (credentials.phone) {
				this.native.signInWithOTPWithPhoneShouldCreateUser(credentials.phone, credentials.options?.channel === 'whatsapp' ? NSCSupabaseMessagingChannel.Whatsapp : NSCSupabaseMessagingChannel.Sms, credentials.options?.shouldCreateUser ?? true, credentials.options?.data ? dataSerialize(credentials.options.data) : null, credentials.options?.captchaToken ?? null, (error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			}
		});
	}

	signInWithOAuth(credentials: {
		provider: OauthProviderType;
		options?: {
			queryParams?: Record<string, string>;
			redirectTo?: string;
			scopes?: string;
		};
	}) {
		return new Promise<Session>((resolve, reject) => {
			let nativeProvider: NSCSupabaseProvider;
			switch (credentials.provider) {
				case 'apple':
					nativeProvider = NSCSupabaseProvider.Apple;
					break;
				case 'azure':
					nativeProvider = NSCSupabaseProvider.Azure;
					break;
				case 'bitbucket':
					nativeProvider = NSCSupabaseProvider.Bitbucket;
					break;
				case 'discord':
					nativeProvider = NSCSupabaseProvider.Discord;
					break;
				case 'facebook':
					nativeProvider = NSCSupabaseProvider.Facebook;
					break;
				case 'figma':
					nativeProvider = NSCSupabaseProvider.Figma;
					break;
				case 'github':
					nativeProvider = NSCSupabaseProvider.Github;
					break;
				case 'gitlab':
					nativeProvider = NSCSupabaseProvider.Gitlab;
					break;
				case 'google':
					nativeProvider = NSCSupabaseProvider.Google;
					break;
				case 'kakao':
					nativeProvider = NSCSupabaseProvider.Kakao;
					break;
				case 'keycloak':
					nativeProvider = NSCSupabaseProvider.Keycloak;
					break;
				case 'linkedin':
					nativeProvider = NSCSupabaseProvider.Linkedin;
					break;
				case 'linkedin_oidc':
					nativeProvider = NSCSupabaseProvider.LinkedinOIDC;
					break;
				case 'notion':
					nativeProvider = NSCSupabaseProvider.Notion;
					break;
				case 'slack':
					nativeProvider = NSCSupabaseProvider.Slack;
					break;
				case 'spotify':
					nativeProvider = NSCSupabaseProvider.Spotify;
					break;
				case 'twitch':
					nativeProvider = NSCSupabaseProvider.Twitch;
					break;
				case 'twitter':
					nativeProvider = NSCSupabaseProvider.Twitter;
					break;
				case 'workos':
					nativeProvider = NSCSupabaseProvider.Workos;
					break;
				case 'zoom':
					nativeProvider = NSCSupabaseProvider.Zoom;
					break;
				case 'fly':
					nativeProvider = NSCSupabaseProvider.Fly;
					break;
			}
			if (!nativeProvider) {
				reject(new Error('Invalid provider'));
				return;
			}
			let queryParams: NSMutableArray<NSCSupabaseQueryParamEntry> = null;
			if (credentials.options?.queryParams) {
				const params = Object.keys(credentials.options.queryParams);
				if (params.length > 0) {
					queryParams = NSMutableArray.alloc().initWithCapacity(params.length);
					for (const key in credentials.options.queryParams) {
						queryParams.addObject(NSCSupabaseQueryParamEntry.alloc().initWithNameValue(key, credentials.options.queryParams[key]));
					}
				}
			}
			this.native.signInWithOAuth(
				nativeProvider,
				credentials.options?.redirectTo ?? null,
				credentials.options?.scopes ?? null,
				queryParams,
				// todo allow ios to configure ASWebAuthenticationSession
				null,
				(session, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(Session.fromNative(session));
					}
				},
			);
		});
	}

	signInWithSSO(params: {
		providerId?: string;
		domain?: string;
		options?: {
			captchaToken?: string;
			redirectTo?: string;
		};
	}) {
		return new Promise<string>((resolve, reject) => {
			if (!params.providerId && !params.domain) {
				reject(new Error('providerId or domain required'));
				return;
			}

			if (params.providerId) {
				this.native.signInWithSSOWithProviderId(params.providerId, params.options?.redirectTo ?? null, params.options?.captchaToken ?? null, (url, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(url.absoluteString);
					}
				});
			} else if (params.domain) {
				this.native.signInWithSSOWithDomain(params.domain, params.options?.redirectTo ?? null, params.options?.captchaToken ?? null, (url, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve(url.absoluteString);
					}
				});
			}
		});
	}

	signOut(options?: { scope?: 'global' | 'local' | 'others' }): Promise<void> {
		return new Promise((resolve, reject) => {
			let nativeScope: NSCSupabaseSignOutScope;
			switch (options?.scope) {
				case 'global':
					nativeScope = NSCSupabaseSignOutScope.Global;
					break;
				case 'local':
					nativeScope = NSCSupabaseSignOutScope.Local;
					break;
				case 'others':
					nativeScope = NSCSupabaseSignOutScope.Others;
					break;
				default:
					break;
			}
			if (nativeScope) {
				this.native.signOutWithScope(nativeScope as never, (error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			} else {
				this.native.signOut((error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			}
		});
	}

	resetPasswordForEmail(
		email: string,
		options?: {
			captchaToken?: string;
			redirectTo?: string;
		},
	) {
		return new Promise<void>((resolve, reject) => {
			this.native.resetPasswordForEmail(email, options?.redirectTo ?? null, options?.captchaToken ?? null, (error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve();
				}
			});
		});
	}

	verifyOtp(
		params:
			| {
					phone: string;
					token: string;
					type: 'sms' | 'phone_change';
					options?: {
						captchaToken?: string;
						redirectTo?: string;
					};
			  }
			| {
					email: string;
					token: string;
					type: 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email';
					options?: {
						captchaToken?: string;
						redirectTo?: string;
					};
			  }
			| {
					token_hash: string;
					type: 'signup' | 'invite' | 'magiclink' | 'recovery' | 'email_change' | 'email';
					options?: {
						captchaToken?: string;
						redirectTo?: string;
					};
			  },
	) {
		return new Promise((resolve, reject) => {
			if (params) {
				if ('phone' in params) {
					if (params.token && params.type) {
						this.native.verifyOTPWithPhone(params.phone, params.token, params.type === 'sms' ? NSCSupabaseMobileOTPType.Sms : NSCSupabaseMobileOTPType.PhoneChange, params.options?.captchaToken ?? null, (user, session, error) => {
							if (error) {
								reject(new Error(error.localizedDescription));
							} else {
								resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
							}
						});
						return;
					}

					reject(new Error('token and type required'));
				} else if ('email' in params) {
					if (params.token && params.type) {
						let nativeType: NSCSupabaseEmailOTPType;
						switch (params.type) {
							case 'email':
								nativeType = NSCSupabaseEmailOTPType.Email;
								break;
							case 'signup':
								nativeType = NSCSupabaseEmailOTPType.Signup;
								break;
							case 'invite':
								nativeType = NSCSupabaseEmailOTPType.Invite;
								break;
							case 'magiclink':
								nativeType = NSCSupabaseEmailOTPType.Magiclink;
								break;
							case 'recovery':
								nativeType = NSCSupabaseEmailOTPType.Recovery;
								break;
							case 'email_change':
								nativeType = NSCSupabaseEmailOTPType.EmailChange;
								break;
						}

						if (!nativeType) {
							reject(new Error('Invalid type'));
							return;
						}

						this.native.verifyOTPWithEmail(params.email, params.token, nativeType, params.options?.redirectTo ?? null, params.options?.captchaToken ?? null, (user, session, error) => {
							if (error) {
								reject(new Error(error.localizedDescription));
							} else {
								resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
							}
						});
						return;
					}

					reject(new Error('token and type required'));
				} else if ('token_hash' in params) {
					if (params.token_hash && params.type) {
						let nativeType: NSCSupabaseEmailOTPType;
						switch (params.type) {
							case 'email':
								nativeType = NSCSupabaseEmailOTPType.Email;
								break;
							case 'signup':
								nativeType = NSCSupabaseEmailOTPType.Signup;
								break;
							case 'invite':
								nativeType = NSCSupabaseEmailOTPType.Invite;
								break;
							case 'magiclink':
								nativeType = NSCSupabaseEmailOTPType.Magiclink;
								break;
							case 'recovery':
								nativeType = NSCSupabaseEmailOTPType.Recovery;
								break;
							case 'email_change':
								nativeType = NSCSupabaseEmailOTPType.EmailChange;
								break;
						}

						if (!nativeType) {
							reject(new Error('Invalid type'));
							return;
						}

						this.native.verifyOTPWithTokenHash(params.token_hash, nativeType, (user, session, error) => {
							if (error) {
								reject(new Error(error.localizedDescription));
							} else {
								resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
							}
						});
						return;
					}

					reject(new Error('token_hash and type required'));
				}

				reject(new Error('Invalid params'));
			}
		});
	}

	refreshSession(refreshToken: string) {
		return new Promise<Session>((resolve, reject) => {
			this.native.refreshSession(refreshToken, (session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}

	update(attributes: {
		data?: Record<string, any>;

		email?: string;

		nonce?: string;

		password?: string;

		phone?: string;
	}) {
		return new Promise<User>((resolve, reject) => {
			const attr = NSCSupabaseUserAttributes.new();
			if (attributes.data) {
				attr.data = dataSerialize(attributes.data);
			}
			if (attributes.email) {
				attr.email = attributes.email;
			}
			if (attributes.nonce) {
				attr.nonce = attributes.nonce;
			}
			if (attributes.password) {
				attr.password = attributes.password;
			}
			if (attributes.phone) {
				attr.phone = attributes.phone;
			}

			this.native.update(attr, (user, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					console.log(user.userMetadata, user.appMetadata);
					resolve(User.fromNative(user));
				}
			});
		});
	}

	getUserIdentities() {
		return new Promise<UserIdentity[]>((resolve, reject) => {
			this.native.userIdentities((identities, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					const ret = [];
					const count = identities.count;
					for (let i = 0; i < count; i++) {
						ret.push(UserIdentity.fromNative(identities.objectAtIndex(i)));
					}
					resolve(ret);
				}
			});
		});
	}

	linkIdentity(credentials: {
		provider: OauthProviderType;
		options?: {
			queryParams?: Record<string, string>;
			scopes?: string;
			redirectTo?: string;
		};
	}) {
		return new Promise<void>((resolve, reject) => {
			let nativeProvider: NSCSupabaseProvider;
			switch (credentials.provider) {
				case 'apple':
					nativeProvider = NSCSupabaseProvider.Apple;
					break;
				case 'azure':
					nativeProvider = NSCSupabaseProvider.Azure;
					break;
				case 'bitbucket':
					nativeProvider = NSCSupabaseProvider.Bitbucket;
					break;
				case 'discord':
					nativeProvider = NSCSupabaseProvider.Discord;
					break;
				case 'facebook':
					nativeProvider = NSCSupabaseProvider.Facebook;
					break;
				case 'figma':
					nativeProvider = NSCSupabaseProvider.Figma;
					break;
				case 'github':
					nativeProvider = NSCSupabaseProvider.Github;
					break;
				case 'gitlab':
					nativeProvider = NSCSupabaseProvider.Gitlab;
					break;
				case 'google':
					nativeProvider = NSCSupabaseProvider.Google;
					break;
				case 'kakao':
					nativeProvider = NSCSupabaseProvider.Kakao;
					break;
				case 'keycloak':
					nativeProvider = NSCSupabaseProvider.Keycloak;
					break;
				case 'linkedin':
					nativeProvider = NSCSupabaseProvider.Linkedin;
					break;
				case 'linkedin_oidc':
					nativeProvider = NSCSupabaseProvider.LinkedinOIDC;
					break;
				case 'notion':
					nativeProvider = NSCSupabaseProvider.Notion;
					break;
				case 'slack':
					nativeProvider = NSCSupabaseProvider.Slack;
					break;
				case 'spotify':
					nativeProvider = NSCSupabaseProvider.Spotify;
					break;
				case 'twitch':
					nativeProvider = NSCSupabaseProvider.Twitch;
					break;
				case 'twitter':
					nativeProvider = NSCSupabaseProvider.Twitter;
					break;
				case 'workos':
					nativeProvider = NSCSupabaseProvider.Workos;
					break;
				case 'zoom':
					nativeProvider = NSCSupabaseProvider.Zoom;
					break;
				case 'fly':
					nativeProvider = NSCSupabaseProvider.Fly;
					break;
			}
			if (!nativeProvider) {
				reject(new Error('Invalid provider'));
				return;
			}

			let queryParams: NSMutableArray<NSCSupabaseQueryParamEntry> = null;
			if (credentials.options?.queryParams) {
				const params = Object.keys(credentials.options.queryParams);
				if (params.length > 0) {
					queryParams = NSMutableArray.alloc().initWithCapacity(params.length);
					for (const key in credentials.options.queryParams) {
						queryParams.addObject(NSCSupabaseQueryParamEntry.alloc().initWithNameValue(key, credentials.options.queryParams[key]));
					}
				}
			}

			this.native.linkIdentity(nativeProvider, credentials.options?.scopes ?? null, credentials.options?.redirectTo ?? null, queryParams, (error) => {
				console.log('linkIdentity', error);
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve();
				}
			});
		});
	}

	unlinkIdentity(identity: UserIdentity) {
		return new Promise<void>((resolve, reject) => {
			this.native.unlinkIdentity(identity.native, (error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve();
				}
			});
		});
	}

	reauthenticate() {
		return new Promise<void>((resolve, reject) => {
			this.native.reauthenticate((error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve();
				}
			});
		});
	}

	resend(credentials: {
		email?: string;
		type: 'signup' | 'email_change' | 'sms' | 'phone_change';
		phone?: string;
		options?: {
			emailRedirectTo?: string;
			captchaToken?: string;
		};
	}) {
		return new Promise<void>((resolve, reject) => {
			if ((credentials.email && credentials.type === 'signup') || credentials.type === 'email_change') {
				this.native.resendWithEmail(credentials.email, credentials.type === 'signup' ? NSCSupabaseResendEmailType.Signup : NSCSupabaseResendEmailType.EmailChange, credentials?.options?.emailRedirectTo ?? null, credentials?.options?.captchaToken ?? null, (error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			} else if ((credentials.phone && credentials.type === 'sms') || credentials.type === 'phone_change') {
				this.native.resendWithPhone(credentials.phone, credentials.type === 'sms' ? NSCSupabaseResendMobileType.Sms : NSCSupabaseResendMobileType.PhoneChange, credentials?.options?.captchaToken ?? null, (id, error) => {
					if (error) {
						reject(new Error(error.localizedDescription));
					} else {
						resolve();
					}
				});
			} else {
			}
		});
	}

	exchangeCodeForSession(authCode: string) {
		return new Promise<Session>((resolve, reject) => {
			this.native.exchangeCodeForSession(authCode, (session, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(Session.fromNative(session));
				}
			});
		});
	}

	user(jwt?: string) {
		return new Promise<User>((resolve, reject) => {
			this.native.user(jwt ?? null, (user, error) => {
				if (error) {
					reject(new Error(error.localizedDescription));
				} else {
					resolve(User.fromNative(user));
				}
			});
		});
	}
}
