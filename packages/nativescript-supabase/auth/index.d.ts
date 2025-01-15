import type { SupabaseClient } from '../index';

export type OauthProviderType = 'apple' | 'azure' | 'bitbucket' | 'discord' | 'facebook' | 'figma' | 'github' | 'gitlab' | 'google' | 'kakao' | 'keycloak' | 'linkedin' | 'linkedin_oidc' | 'notion' | 'slack' | 'spotify' | 'twitch' | 'twitter' | 'workos' | 'zoom' | 'fly';

export class UserIdentity {
	readonly createdAt: Date;

	readonly id: string;

	readonly identityData: Record<string, any>;

	readonly identityId: string;

	readonly lastSignInAt: Date;

	readonly provider: string;

	readonly updatedAt: Date;

	readonly userId: string;
}

export class Factor {
	readonly createdAt: Date;

	readonly factorType: string;

	readonly friendlyName: string;

	readonly id: string;

	readonly status: NSCSupabaseFactorStatus;

	readonly updatedAt: Date;

	readonly status: 'verified' | 'unverified';
}

export class User {
	readonly actionLink: string;

	readonly appMetadata: Record<string, any>;

	readonly aud: string;

	readonly confirmationSentAt: Date;

	readonly confirmedAt: Date;

	readonly createdAt: Date;

	readonly email: string;

	readonly emailChangeSentAt: Date;

	readonly emailConfirmedAt: Date;

	readonly factors: Factor[];

	readonly id: NSUUID;

	readonly identities: UserIdentity[];

	readonly invitedAt: Date;

	readonly isAnonymous: boolean;

	readonly lastSignInAt: Date;

	readonly newEmail: string;

	readonly phone: string;

	readonly phoneConfirmedAt: Date;

	readonly recoverySentAt: Date;

	readonly role: string;

	readonly updatedAt: Date;

	readonly userMetadata: Record<string, any>;
}

export class Session {
	readonly accessToken: string;

	readonly expiresAt: number;

	readonly expiresIn: number;

	readonly isExpired: boolean;

	readonly providerRefreshToken: string;

	readonly providerToken: string;

	readonly refreshToken: string;

	readonly tokenType: string;

	readonly user: User;
}

export class AuthMetaSecurity {
	constructor(captchaToken: string);
	captchaToken: string;
}

export class OpenIDConnectCredentials {
	constructor(provider: 'google' | 'apple' | 'azure' | 'facebook', idToken: string);

	accessToken: string | null;
	gotrueMetaSecurity: AuthMetaSecurity | null;

	idToken: string;

	nonce: string | null;

	provider: 'google' | 'apple' | 'azure' | 'facebook';
}

export class Admin {}

export class Auth {
	readonly client: Client;

	readonly currentSession: Session | null;

	readonly currentUser: User | null;

	onAuthStateChange(callback: (eventName: 'INITIAL_SESSION' | 'SIGNED_IN' | 'SIGNED_OUT' | 'TOKEN_REFRESHED' | 'USER_UPDATED' | 'PASSWORD_RECOVERY', session: Session) => void);

	getSession(): Promise<Session>;

	setSession(currentSession: { accessToken: string; refreshToken: string }): Promise<Session>;

	signIn(email: string, password: string, captchaToken?: string): Promise<Session>;

	signInAnonymously(data?: Record<string, any>, captchaToken?: string): Promise<Session>;
	signInWithIdToken(credentials: OpenIDConnectCredentials): Promise<Session>;

	signUp(value: {
		email?: string;
		phone?: string;
		password: string;
		captchaToken?: string;
		options?: {
			data?: Record<string, any>;
			emailRedirectTo?: string;
		};
	}): Promise<{ session?: Session; user: User }>;

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
	}): Promise<void>;

	signInWithOAuth(credentials: {
		provider: OauthProviderType;
		options?: {
			queryParams?: Record<string, string>;
			redirectTo?: string;
			scopes?: string;
		};
	}): Promise<Session>;

	signInWithSSO(params: {
		providerId?: string;
		domain?: string;
		options?: {
			captchaToken?: string;
			redirectTo?: string;
		};
	}): Promise<string>;

	signOut(scope?: 'global' | 'local' | 'others'): Promise<void>;

	resetPasswordForEmail(
		email: string,
		options?: {
			captchaToken?: string;
			redirectTo?: string;
		}
	): Promise<void>;

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
	): Promise<{ user: User; session: Session | null }>;

	refreshSession(refreshToken: string): Promise<Session>;

	update(attributes: {
		data?: Record<string, any>;

		email?: string;

		nonce?: string;

		password?: string;

		phone?: string;
	}): Promise<User>;

	getUserIdentities(): Promise<UserIdentity[]>;

	linkIdentity(credentials: {
		provider: OauthProviderType;
		options?: {
			queryParams?: Record<string, string>;
			scopes?: string;
			redirectTo?: string;
		};
	}): Promise<void>;

	unlinkIdentity(identity: UserIdentity): Promise<void>;

	reauthenticate(): Promise<void>;

	resend(credentials: {
		email?: string;
		type: 'signup' | 'email_change' | 'sms' | 'phone_change';
		phone?: string;
		options?: {
			emailRedirectTo?: string;
			captchaToken?: string;
		};
	}): Promise<void>;

	exchangeCodeForSession(authCode: string): romise<Session>;

	user(jwt?: string): Promise<User>;
}
