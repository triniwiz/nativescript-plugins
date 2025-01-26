import { dataDeserialize, serialize } from '../utils';
import type { DataType, SupabaseClient } from '../index';
declare const kotlin: any;
type Client = SupabaseClient & { native: io.github.triniwiz.supabase.SupabaseClient };
import { OauthProviderType } from '.';

export class UserIdentity {
	native: io.github.jan.supabase.auth.user.Identity;

	static fromNative(identity: io.github.jan.supabase.auth.user.Identity): UserIdentity {
		if (!identity) return null;
		const ret = new UserIdentity();
		ret.native = identity;
		return ret;
	}

	get createdAt(): Date {
		return new Date(this.native.getCreatedAt());
	}

	get id(): string {
		return this.native.getId();
	}

	private _identityData: Record<string, any>;
	get identityData(): Record<string, any> {
		if (!this._identityData) {
			this._identityData = dataDeserialize(this.native.getIdentityData());
		}
		return this._identityData;
	}

	get identityId(): string {
		return this.native.getIdentityId();
	}

	get lastSignInAt(): Date {
		return new Date(this.native.getLastSignInAt());
	}

	get provider(): string {
		return this.native.getProvider();
	}

	get updatedAt(): Date {
		return new Date(this.native.getUpdatedAt());
	}

	get userId(): string {
		return this.native.getUserId();
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
	native: io.github.jan.supabase.auth.user.UserMfaFactor;
	static fromNative(factor: io.github.jan.supabase.auth.user.UserMfaFactor): Factor {
		if (!factor) return null;
		const ret = new Factor();
		ret.native = factor;
		return ret;
	}

	get createdAt(): Date {
		return new Date(this.native.getCreatedAt().toEpochMilliseconds());
	}

	get factorType(): string {
		return this.native.getFactorType();
	}

	get friendlyName(): string {
		return this.native.getFriendlyName();
	}

	get id(): string {
		return this.native.getId();
	}

	get status(): 'verified' | 'unverified' {
		// switch (this.native.status) {
		// 	case NSCSupabaseFactorStatus.Verified:
		// 		return 'verified';
		// 	case NSCSupabaseFactorStatus.Unverified:
		// 		return 'unverified';
		// }
		// todo
		return 'verified';
	}

	get updatedAt(): Date {
		return new Date(this.native.getUpdatedAt().toEpochMilliseconds());
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
	native: io.github.jan.supabase.auth.user.UserInfo;
	static fromNative(user: io.github.jan.supabase.auth.user.UserInfo): User {
		if (!user) return null;
		const ret = new User();
		ret.native = user;
		return ret;
	}

	get actionLink(): string {
		return this.native.getActionLink();
	}

	private _appMetadata: any;
	get appMetadata(): Record<string, any> {
		if (!this._appMetadata) {
			this._appMetadata = dataDeserialize(this.native.getAppMetadata());
		}
		return this._appMetadata;
	}

	get aud(): string {
		return this.native.getAud();
	}

	get confirmationSentAt(): Date {
		return new Date(this.native.getConfirmationSentAt().toEpochMilliseconds());
	}

	get confirmedAt(): Date {
		return new Date(this.native.getConfirmedAt().toEpochMilliseconds());
	}

	get createdAt(): Date {
		return new Date(this.native.getCreatedAt().toEpochMilliseconds());
	}

	get email(): string {
		return this.native.getEmail();
	}

	get emailChangeSentAt(): Date {
		const date = this.native.getEmailChangeSentAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get emailConfirmedAt(): Date {
		return new Date(this.native.getEmailConfirmedAt().toEpochMilliseconds());
	}

	private _factors: Factor[];
	get factors(): Factor[] {
		if (!this._factors) {
			this._factors = [];
			const factors = this.native.getFactors();
			const count = factors.size();
			for (let i = 0; i < count; i++) {
				this._factors.push(Factor.fromNative(factors.get(i)));
			}
		}
		return this._factors;
	}

	get id(): string {
		return this.native.getId();
	}

	get identities() {
		// TODO cache
		const ret = [];
		const identities = this.native.getIdentities();
		const count = identities.size();
		for (let i = 0; i < count; i++) {
			ret.push(UserIdentity.fromNative(identities.get(i)));
		}

		return ret;
	}

	get invitedAt(): Date {
		const date = this.native.getInvitedAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get isAnonymous(): boolean {
		// todo
		return false;
		//return this.native.isAnonymous;
	}

	get lastSignInAt(): Date {
		return new Date(this.native.getLastSignInAt().toEpochMilliseconds());
	}

	get newEmail(): string {
		return this.native.getNewEmail();
	}

	get phone(): string {
		return this.native.getPhone();
	}

	get phoneConfirmedAt(): Date {
		const date = this.native.getPhoneConfirmedAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get recoverySentAt(): Date {
		const date = this.native.getRecoverySentAt();
		if (!date) return null;
		return new Date(date.toEpochMilliseconds());
	}

	get role(): string {
		return this.native.getRole();
	}

	get updatedAt(): Date {
		return new Date(this.native.getUpdatedAt().toEpochMilliseconds());
	}

	private _userMetadata: Record<string, any>;
	get userMetadata(): Record<string, any> {
		if (!this._userMetadata) {
			this._userMetadata = dataDeserialize(this.native.getUserMetadata());
		}
		return this._userMetadata;
	}
}

export class Session {
	native_: io.github.jan.supabase.auth.user.UserSession;
	static fromNative(session: io.github.jan.supabase.auth.user.UserSession): Session {
		if (!session) return null;
		const ret = new Session();
		ret.native_ = session;
		return ret;
	}

	get native() {
		return this.native_;
	}

	get accessToken(): string {
		return this.native.getAccessToken();
	}

	get expiresAt(): number {
		return this.native.getExpiresAt().toEpochMilliseconds();
	}

	get expiresIn(): number {
		return this.native.getExpiresIn();
	}

	get isExpired(): boolean {
		return new Date().getTime() >= this.expiresAt;
	}
	
	get providerRefreshToken(): string {
		return this.native.getProviderRefreshToken();
	}

	get providerToken(): string {
		return this.native.getProviderToken();
	}

	get refreshToken(): string {
		return this.native.getRefreshToken();
	}

	get tokenType(): string {
		return this.native.getTokenType();
	}

	private _user: User;
	get user(): User {
		if (!this._user) {
			this._user = User.fromNative(this.native.getUser());
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
	native_: io.github.triniwiz.supabase.SupabaseAuth.AuthMetaSecurity;
	constructor(captchaToken: string) {
		if ((captchaToken as any) instanceof io.github.triniwiz.supabase.SupabaseAuth.AuthMetaSecurity) {
			this.native_ = captchaToken as never;
		} else {
			this.native_ = new io.github.triniwiz.supabase.SupabaseAuth.AuthMetaSecurity(captchaToken);
		}
	}
	static fromNative(meta: io.github.triniwiz.supabase.SupabaseAuth.AuthMetaSecurity): AuthMetaSecurity {
		if (!meta) return null;
		return new AuthMetaSecurity(meta as never);
	}

	get native() {
		return this.native_;
	}

	get captchaToken(): string {
		return this.native.getCaptchaToken();
	}
}

export class OpenIDConnectCredentials {
	native_: io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentials;
	constructor(provider: 'google' | 'apple' | 'azure' | 'facebook', idToken: string) {
		let nativeProvider: io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider;
		switch (provider) {
			case 'google':
				nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.google;
				break;
			case 'apple':
				nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.apple;
				break;
			case 'azure':
				nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.azure;
				break;
			case 'facebook':
				nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.facebook;
				break;
		}

		if (!nativeProvider) {
			throw new Error('Invalid provider');
		}

		this.native_ = new io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentials(nativeProvider, idToken);
	}

	get native() {
		return this.native_;
	}

	get accessToken(): string | null {
		return this.native.getAccessToken();
	}
	set accessToken(token: string | null) {
		this.native.setAccessToken(token ?? null);
	}

	get gotrueMetaSecurity(): AuthMetaSecurity | null {
		return AuthMetaSecurity.fromNative(this.native.getGotrueMetaSecurity());
	}

	set gotrueMetaSecurity(meta: AuthMetaSecurity | null) {
		this.native.setGotrueMetaSecurity(meta?.native ?? null);
	}

	get idToken(): string {
		return this.native.getIdToken();
	}

	set idToken(token: string) {
		this.native.setIdToken(token);
	}

	get nonce(): string | null {
		return this.native.getNonce();
	}

	set nonce(nonce: string | null) {
		this.native.setNonce(nonce ?? null);
	}

	get provider(): 'google' | 'apple' | 'azure' | 'facebook' {
		switch (this.native.getProvider()) {
			case io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.google:
				return 'google';
			case io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.apple:
				return 'apple';
			case io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.azure:
				return 'azure';
			case io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.facebook:
				return 'facebook';
		}
	}

	set provider(provider: 'google' | 'apple' | 'azure' | 'facebook') {
		switch (provider) {
			case 'google':
				this.native.setProvider(io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.google);
				break;
			case 'apple':
				this.native.setProvider(io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.apple);
				break;
			case 'azure':
				this.native.setProvider(io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.azure);
				break;
			case 'facebook':
				this.native.setProvider(io.github.triniwiz.supabase.SupabaseAuth.OpenIDConnectCredentialsProvider.facebook);
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
		return this.client.native.getAuth();
	}

	get currentSession(): Session {
		const currentSession = this.native.getCurrentSession();
		if (!currentSession) return null;
		return Session.fromNative(currentSession);
	}

	get currentUser(): User {
		const user = this.native.getCurrentUser();
		if (!user) return null;
		return User.fromNative(user);
	}

	onAuthStateChange(callback: (eventName: 'INITIAL_SESSION' | 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED' | 'USER_UPDATED' | 'PASSWORD_RECOVERY', session: Session) => void) {
		const ref = new WeakRef(this);
		const listener = this.native.addOnAuthStateChange(
			new kotlin.jvm.functions.Function1({
				invoke(event) {
					let eventName;
					switch (event) {
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.initialSession:
							eventName = 'INITIAL_SESSION';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.passwordRecovery:
							eventName = 'PASSWORD_RECOVERY';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.signedIn:
							eventName = 'SIGNED_IN';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.signedOut:
							eventName = 'SIGNED_OUT';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.tokenRefreshed:
							eventName = 'TOKEN_REFRESHED';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.userUpdated:
							eventName = 'USER_UPDATED';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.userDeleted:
							eventName = 'USER_DELETED';
							break;
						case io.github.triniwiz.supabase.SupabaseAuth.AuthChangeEvent.mfaChallengeVerified:
							eventName = 'MFA_CHALLENGE_VERIFIED';
							break;
					}
					const owner = ref.get();
					let session: Session = null;
					if (owner) {
						session = Session.fromNative(owner.native.getCurrentSession());
					}
					callback(eventName, session);
				},
			})
		);
		return {
			remove: () => {
				listener.remove();
			},
		};
	}

	getSession() {
		return new Promise<Session>((resolve, reject) => {
			this.native.getSession(
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
		});
	}

	setSession(currentSession: { accessToken: string; refreshToken: string }) {
		return new Promise<Session>((resolve, reject) => {
			this.native.setSession(
				currentSession.accessToken,
				currentSession.refreshToken,
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
		});
	}

	signInWithPassword(credentials: {
		email?: string;
		phone?: string;
		password: string;
		options?: {
			captchaToken?: string;
		};
	}): Promise<{ user: User; session: Session }> {
		return new Promise((resolve, reject) => {
			if (credentials.phone) {
				this.native.signInWithPhone(
					credentials.phone,
					credentials.password,
					credentials.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function3({
						invoke(user, session, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve({
									user: User.fromNative(user),
									session: Session.fromNative(session),
								});
							}
						},
					})
				);
			} else {
				this.native.signIn(
					credentials.email,
					credentials.password,
					credentials.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function3({
						invoke(user, session, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve({
									user: User.fromNative(user),
									session: Session.fromNative(session),
								});
							}
						},
					})
				);
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
			this.native.signInAnonymously(
				credentials?.data ? JSON.stringify(credentials?.data) : null,
				credentials?.options?.captchaToken ?? null,
				new kotlin.jvm.functions.Function3({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
		});
	}
	signInWithIdToken(credentials: OpenIDConnectCredentials) {
		return new Promise<Session>((resolve, reject) => {
			this.native.signInWithIdToken(
				credentials.native,
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
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
				this.native.signUp(
					value.email,
					value.password,
					value.captchaToken ?? null,
					value.options?.data ? JSON.stringify(value.options.data) : null,
					value.options?.emailRedirectTo ?? null,
					new kotlin.jvm.functions.Function3({
						invoke(user, session, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve({ session: session ? Session.fromNative(session) : null, user: User.fromNative(user) });
							}
						},
					})
				);
			} else if (value.phone) {
				this.native.signUpPhone(
					value.phone,
					value.password,
					value.captchaToken ?? null,
					value.options?.data ? JSON.stringify(value.options.data) : null,
					null,
					new kotlin.jvm.functions.Function3({
						invoke(user, session, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve({ session: session ? Session.fromNative(session) : null, user: User.fromNative(user) });
							}
						},
					})
				);
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
				this.native.signInWithOTP(
					credentials.email,
					credentials.options?.emailRedirectTo ?? null,
					!!credentials?.options?.shouldCreateUser ? java.lang.Boolean.TRUE : java.lang.Boolean.FALSE,
					credentials.options?.data ? JSON.stringify(credentials.options.data) : null,
					credentials.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
			} else if (credentials.phone) {
				this.native.signInWithOTPPhone(
					credentials.phone,
					!!credentials?.options?.shouldCreateUser ? java.lang.Boolean.TRUE : java.lang.Boolean.FALSE,
					credentials.options?.data ? JSON.stringify(credentials.options.data) : null,
					credentials.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
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
			let nativeProvider: io.github.triniwiz.supabase.SupabaseAuth.Provider;
			switch (credentials.provider) {
				case 'apple':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.apple;
					break;
				case 'azure':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.azure;
					break;
				case 'bitbucket':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.bitbucket;
					break;
				case 'discord':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.discord;
					break;
				case 'facebook':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.facebook;
					break;
				case 'figma':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.figma;
					break;
				case 'github':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.github;
					break;
				case 'gitlab':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.gitlab;
					break;
				case 'google':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.google;
					break;
				case 'kakao':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.kakao;
					break;
				case 'keycloak':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.keycloak;
					break;
				case 'linkedin':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.linkedin;
					break;
				case 'linkedin_oidc':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.linkedinOIDC;
					break;
				case 'notion':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.notion;
					break;
				case 'slack':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.slack;
					break;
				case 'spotify':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.spotify;
					break;
				case 'twitch':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.twitch;
					break;
				case 'twitter':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.twitter;
					break;
				case 'workos':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.workos;
					break;
				case 'zoom':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.zoom;
					break;
				case 'fly':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.fly;
					break;
			}
			if (!nativeProvider) {
				reject(new Error('Invalid provider'));
				return;
			}
			let queryParams: java.util.HashMap<string, string> = null;
			if (credentials.options?.queryParams) {
				const params = Object.keys(credentials.options.queryParams);
				if (params.length > 0) {
					queryParams = new java.util.HashMap(params.length);
					for (const key in credentials.options.queryParams) {
						queryParams.put(key, credentials.options.queryParams[key]);
					}
				}
			}
			this.native.signInWithOAuth(
				nativeProvider,
				credentials.options?.redirectTo ?? null,
				credentials.options?.scopes ?? null,
				queryParams,
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
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
				this.native.signInWithSSOWithProviderId(
					params.providerId,
					params.options?.redirectTo ?? null,
					params.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function2({
						invoke(url, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve(url);
							}
						},
					})
				);
			} else if (params.domain) {
				this.native.signInWithSSO(
					params.domain,
					params.options?.redirectTo ?? null,
					params.options?.captchaToken ?? null,

					new kotlin.jvm.functions.Function2({
						invoke(url, error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve(url);
							}
						},
					})
				);
			}
		});
	}

	signOut(options?: { scope?: 'global' | 'local' | 'others' }): Promise<void> {
		return new Promise((resolve, reject) => {
			let nativeScope: io.github.triniwiz.supabase.SupabaseAuth.SignOutScope;
			switch (options?.scope) {
				case 'global':
					nativeScope = io.github.triniwiz.supabase.SupabaseAuth.SignOutScope.global;
					break;
				case 'local':
					nativeScope = io.github.triniwiz.supabase.SupabaseAuth.SignOutScope.local;
					break;
				case 'others':
					nativeScope = io.github.triniwiz.supabase.SupabaseAuth.SignOutScope.others;
					break;
				default:
					break;
			}
			if (nativeScope) {
				this.native.signOut(
					nativeScope as never,
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
			} else {
				this.native.signOut(
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
			}
		});
	}

	resetPasswordForEmail(
		email: string,
		options?: {
			captchaToken?: string;
			redirectTo?: string;
		}
	) {
		return new Promise<void>((resolve, reject) => {
			this.native.resetPasswordForEmail(
				email,
				options?.redirectTo ?? null,
				options?.captchaToken ?? null,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve();
						}
					},
				})
			);
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
			  }
	) {
		return new Promise((resolve, reject) => {
			if (params) {
				if ('phone' in params) {
					if (params.token && params.type) {
						this.native.verifyOTP(
							params.phone,
							params.token,
							params.type === 'sms' ? io.github.triniwiz.supabase.SupabaseAuth.MobileOTPType.sms : io.github.triniwiz.supabase.SupabaseAuth.MobileOTPType.phoneChange,
							params.options?.captchaToken ?? null,
							new kotlin.jvm.functions.Function3({
								invoke(user, session, error) {
									if (error) {
										reject(new Error(error.getMessage()));
									} else {
										resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
									}
								},
							})
						);
						return;
					}
					reject(new Error('token and type required'));
				} else if ('email' in params) {
					if (params.token && params.type) {
						let nativeType: io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType;
						switch (params.type) {
							case 'email':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.email;
								break;
							case 'signup':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.signup;
								break;
							case 'invite':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.invite;
								break;
							case 'magiclink':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.magiclink;
								break;
							case 'recovery':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.recovery;
								break;
							case 'email_change':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.emailChange;
								break;
						}
						if (!nativeType) {
							reject(new Error('Invalid type'));
							return;
						}
						this.native.verifyOTPEmail(
							params.email,
							params.token,
							nativeType,
							params.options?.captchaToken ?? null,
							new kotlin.jvm.functions.Function3({
								invoke(user, session, error) {
									if (error) {
										reject(new Error(error.getMessage()));
									} else {
										resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
									}
								},
							})
						);
						return;
					}
					reject(new Error('token and type required'));
				} else if ('token_hash' in params) {
					if (params.token_hash && params.type) {
						let nativeType: io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType;
						switch (params.type) {
							case 'email':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.email;
								break;
							case 'signup':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.signup;
								break;
							case 'invite':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.invite;
								break;
							case 'magiclink':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.magiclink;
								break;
							case 'recovery':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.recovery;
								break;
							case 'email_change':
								nativeType = io.github.triniwiz.supabase.SupabaseAuth.EmailOTPType.emailChange;
								break;
						}
						if (!nativeType) {
							reject(new Error('Invalid type'));
							return;
						}
						this.native.verifyOTP(
							params.token_hash,
							nativeType,
							params.options?.captchaToken ?? null,
							new kotlin.jvm.functions.Function3({
								invoke(user, session, error) {
									if (error) {
										reject(new Error(error.getMessage()));
									} else {
										resolve({ user: User.fromNative(user), session: session ? Session.fromNative(session) : null });
									}
								},
							})
						);
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
			this.native.refreshSession(
				refreshToken,
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
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
			const attr = new io.github.triniwiz.supabase.SupabaseAuth.UserAttributes();
			if (attributes.data) {
				attr.setData(JSON.stringify(attributes.data));
			}
			if (attributes.email) {
				attr.setEmail(attributes.email);
			}
			if (attributes.nonce) {
				attr.setNonce(attributes.nonce);
			}
			if (attributes.password) {
				attr.setPassword(attributes.password);
			}
			if (attributes.phone) {
				attr.setPhone(attributes.phone);
			}
			this.native.update(
				attr,
				new kotlin.jvm.functions.Function2({
					invoke(user, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(User.fromNative(user));
						}
					},
				})
			);
		});
	}

	getUserIdentities() {
		return new Promise<UserIdentity[]>((resolve, reject) => {
			const ret = [];
			const identities = this.native.userIdentities();
			const count = identities.size();
			for (let i = 0; i < count; i++) {
				ret.push(UserIdentity.fromNative(identities.get(i)));
			}
			resolve(ret);
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
			let nativeProvider: io.github.triniwiz.supabase.SupabaseAuth.Provider;
			switch (credentials.provider) {
				case 'apple':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.apple;
					break;
				case 'azure':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.azure;
					break;
				case 'bitbucket':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.bitbucket;
					break;
				case 'discord':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.discord;
					break;
				case 'facebook':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.facebook;
					break;
				case 'figma':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.figma;
					break;
				case 'github':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.github;
					break;
				case 'gitlab':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.gitlab;
					break;
				case 'google':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.google;
					break;
				case 'kakao':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.kakao;
					break;
				case 'keycloak':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.keycloak;
					break;
				case 'linkedin':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.linkedin;
					break;
				case 'linkedin_oidc':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.linkedinOIDC;
					break;
				case 'notion':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.notion;
					break;
				case 'slack':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.slack;
					break;
				case 'spotify':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.spotify;
					break;
				case 'twitch':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.twitch;
					break;
				case 'twitter':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.twitter;
					break;
				case 'workos':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.workos;
					break;
				case 'zoom':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.zoom;
					break;
				case 'fly':
					nativeProvider = io.github.triniwiz.supabase.SupabaseAuth.Provider.fly;
					break;
			}
			if (!nativeProvider) {
				reject(new Error('Invalid provider'));
				return;
			}
			let queryParams: java.util.HashMap<string, string> = null;
			if (credentials.options?.queryParams) {
				const params = Object.keys(credentials.options.queryParams);
				if (params.length > 0) {
					queryParams = new java.util.HashMap(params.length);
					for (const key in credentials.options.queryParams) {
						queryParams.put(key, credentials.options.queryParams[key]);
					}
				}
			}
			this.native.linkIdentity(
				nativeProvider,
				credentials.options?.scopes ?? null,
				credentials.options?.redirectTo ?? null,
				queryParams,
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve();
						}
					},
				})
			);
		});
	}

	unlinkIdentity(identity: UserIdentity) {
		return new Promise<void>((resolve, reject) => {
			// this.native.unlinkIdentity(identity.native, (error) => {
			// 	if (error) {
			// 		reject(new Error(error.localizedDescription));
			// 	} else {
			// 		resolve();
			// 	}
			// });
		});
	}

	reauthenticate() {
		return new Promise<void>((resolve, reject) => {
			this.native.reauthenticate(
				new kotlin.jvm.functions.Function1({
					invoke(error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve();
						}
					},
				})
			);
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
				this.native.resend(
					credentials.email,
					credentials.type === 'signup' ? io.github.triniwiz.supabase.SupabaseAuth.ResendEmailType.signup : io.github.triniwiz.supabase.SupabaseAuth.ResendEmailType.emailChange,
					credentials?.options?.emailRedirectTo ?? null,
					credentials?.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
			} else if ((credentials.phone && credentials.type === 'sms') || credentials.type === 'phone_change') {
				this.native.resend(
					credentials.phone,
					credentials.type === 'sms' ? io.github.triniwiz.supabase.SupabaseAuth.ResendMobileType.sms : io.github.triniwiz.supabase.SupabaseAuth.ResendMobileType.phoneChange,
					credentials?.options?.captchaToken ?? null,
					new kotlin.jvm.functions.Function1({
						invoke(error) {
							if (error) {
								reject(new Error(error.getMessage()));
							} else {
								resolve();
							}
						},
					})
				);
			} else {
			}
		});
	}

	exchangeCodeForSession(authCode: string) {
		return new Promise<Session>((resolve, reject) => {
			this.native.exchangeCodeForSession(
				authCode,
				new kotlin.jvm.functions.Function2({
					invoke(session, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(Session.fromNative(session));
						}
					},
				})
			);
		});
	}

	getUser(jwt?: string) {
		return new Promise<User>((resolve, reject) => {
			this.native.user(
				jwt ?? null,
				new kotlin.jvm.functions.Function2({
					invoke(user, error) {
						if (error) {
							reject(new Error(error.getMessage()));
						} else {
							resolve(User.fromNative(user));
						}
					},
				})
			);
		});
	}
}
