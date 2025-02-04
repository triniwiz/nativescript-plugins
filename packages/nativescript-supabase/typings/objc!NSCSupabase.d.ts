
declare class NSCSupabaseAuth extends NSObject {

	static alloc(): NSCSupabaseAuth; // inherited from NSObject

	static new(): NSCSupabaseAuth; // inherited from NSObject

	admin: NSCSupabaseAuthAdmin;

	readonly currentSession: NSCSupabaseAuthSession;

	readonly currentUser: NSCSupabaseAuthUser;

	addOnAuthStateChange(listener: (p1: NSCSupabaseAuthChangeEvent, p2: NSCSupabaseAuthSession) => void): NSCSupabaseListener;

	exchangeCodeForSession(authCode: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	getOAuthSignInURLError(provider: NSCSupabaseProvider, scopes: string, redirectTo: string, queryParams: NSArray<NSCSupabaseQueryParamEntry> | NSCSupabaseQueryParamEntry[]): NSURL;

	getSession(callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	linkIdentity(provider: NSCSupabaseProvider, scopes: string, redirectTo: string, queryParams: NSArray<NSCSupabaseQueryParamEntry> | NSCSupabaseQueryParamEntry[], callback: (p1: NSError) => void): void;

	linkIdentityLaunchURL(provider: NSCSupabaseProvider, scopes: string, redirectTo: string, queryParams: NSArray<NSCSupabaseQueryParamEntry> | NSCSupabaseQueryParamEntry[], launchURL: (p1: NSURL) => void, callback: (p1: NSError) => void): void;

	reauthenticate(callback: (p1: NSError) => void): void;

	refreshSession(refreshToken: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	resendWithEmail(email: string, type: NSCSupabaseResendEmailType, emailRedirectTo: string, captchaToken: string, callback: (p1: NSError) => void): void;

	resendWithPhone(phone: string, type: NSCSupabaseResendMobileType, captchaToken: string, callback: (p1: string, p2: NSError) => void): void;

	resetPasswordForEmail(email: string, redirectTo: string, captchaToken: string, callback: (p1: NSError) => void): void;

	setSession(accessToken: string, refreshToken: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signIn(email: string, password: string, captchaToken: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInAnonymously(data: NSDictionary<string, NSObject>, captchaToken: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInPhone(phone: string, password: string, captchaToken: string, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInWithIdToken(credentials: NSCSupabaseOpenIDConnectCredentials, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInWithOAuth(provider: NSCSupabaseProvider, redirectTo: string, scopes: string, queryParams: NSArray<NSCSupabaseQueryParamEntry> | NSCSupabaseQueryParamEntry[], configure: (p1: ASWebAuthenticationSession) => void, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInWithOAuthLaunchFlow(provider: NSCSupabaseProvider, redirectTo: string, scopes: string, queryParams: NSArray<NSCSupabaseQueryParamEntry> | NSCSupabaseQueryParamEntry[], launchFlow: (p1: NSURL) => NSCSupabaseLaunchFlowResult, callback: (p1: NSCSupabaseAuthSession, p2: NSError) => void): void;

	signInWithOTP(email: string, redirectTo: string, data: NSDictionary<string, NSObject>, captchaToken: string, callback: (p1: NSError) => void): void;

	signInWithOTPShouldCreateUser(email: string, redirectTo: string, shouldCreateUser: boolean, data: NSDictionary<string, NSObject>, captchaToken: string, callback: (p1: NSError) => void): void;

	signInWithOTPWithPhone(phone: string, data: NSDictionary<string, NSObject>, captchaToken: string, callback: (p1: NSError) => void): void;

	signInWithOTPWithPhoneShouldCreateUser(phone: string, channel: NSCSupabaseMessagingChannel, shouldCreateUser: boolean, data: NSDictionary<string, NSObject>, captchaToken: string, callback: (p1: NSError) => void): void;

	signInWithSSOWithDomain(domain: string, redirectTo: string, captchaToken: string, callback: (p1: NSURL, p2: NSError) => void): void;

	signInWithSSOWithProviderId(providerId: string, redirectTo: string, captchaToken: string, callback: (p1: NSURL, p2: NSError) => void): void;

	signOut(callback: (p1: NSError) => void): void;

	signOutWithScope(scope: NSCSupabaseSignOutScope, callback: (p1: NSError) => void): void;

	signUp(email: string, password: string, captchaToken: string, data: NSDictionary<string, NSObject>, redirectTo: string, callback: (p1: NSCSupabaseAuthUser, p2: NSCSupabaseAuthSession, p3: NSError) => void): void;

	signUpWithPhone(phone: string, password: string, captchaToken: string, data: NSDictionary<string, NSObject>, callback: (p1: NSCSupabaseAuthUser, p2: NSCSupabaseAuthSession, p3: NSError) => void): void;

	startAutoRefresh(): void;

	stopAutoRefresh(): void;

	unlinkIdentity(identity: NSCSupabaseUserIdentity, callback: (p1: NSError) => void): void;

	update(user: NSCSupabaseUserAttributes, callback: (p1: NSCSupabaseAuthUser, p2: NSError) => void): void;

	user(jwt: string, callback: (p1: NSCSupabaseAuthUser, p2: NSError) => void): void;

	userIdentities(callback: (p1: NSArray<NSCSupabaseUserIdentity>, p2: NSError) => void): void;

	verifyOTPWithEmail(email: string, token: string, type: NSCSupabaseEmailOTPType, redirectTo: string, captchaToken: string, callback: (p1: NSCSupabaseAuthUser, p2: NSCSupabaseAuthSession, p3: NSError) => void): void;

	verifyOTPWithPhone(phone: string, token: string, type: NSCSupabaseMobileOTPType, captchaToken: string, callback: (p1: NSCSupabaseAuthUser, p2: NSCSupabaseAuthSession, p3: NSError) => void): void;

	verifyOTPWithTokenHash(tokenHash: string, type: NSCSupabaseEmailOTPType, callback: (p1: NSCSupabaseAuthUser, p2: NSCSupabaseAuthSession, p3: NSError) => void): void;
}

declare class NSCSupabaseAuthAdmin extends NSObject {

	static alloc(): NSCSupabaseAuthAdmin; // inherited from NSObject

	static new(): NSCSupabaseAuthAdmin; // inherited from NSObject

	deleteUser(id: string, callback: (p1: NSError) => void): void;
}

declare const enum NSCSupabaseAuthChangeEvent {

	InitialSession = 0,

	PasswordRecovery = 1,

	SignedIn = 2,

	SignedOut = 3,

	TokenRefreshed = 4,

	UserUpdated = 5,

	UserDeleted = 6,

	MfaChallengeVerified = 7
}

declare class NSCSupabaseAuthMetaSecurity extends NSObject {

	static alloc(): NSCSupabaseAuthMetaSecurity; // inherited from NSObject

	static new(): NSCSupabaseAuthMetaSecurity; // inherited from NSObject

	captchaToken: string;

	constructor(o: { captchaToken: string; });

	initWithCaptchaToken(captchaToken: string): this;
}

declare class NSCSupabaseAuthSession extends NSObject {

	static alloc(): NSCSupabaseAuthSession; // inherited from NSObject

	static new(): NSCSupabaseAuthSession; // inherited from NSObject

	readonly accessToken: string;

	readonly expiresAt: number;

	readonly expiresIn: number;

	readonly isExpired: boolean;

	readonly providerRefreshToken: string;

	readonly providerToken: string;

	readonly refreshToken: string;

	readonly tokenType: string;

	user: NSCSupabaseAuthUser;
}

declare class NSCSupabaseAuthUser extends NSObject {

	static alloc(): NSCSupabaseAuthUser; // inherited from NSObject

	static new(): NSCSupabaseAuthUser; // inherited from NSObject

	readonly actionLink: string;

	readonly appMetadata: NSDictionary<string, NSObject>;

	readonly aud: string;

	readonly confirmationSentAt: Date;

	readonly confirmedAt: Date;

	readonly createdAt: Date;

	readonly email: string;

	readonly emailChangeSentAt: Date;

	readonly emailConfirmedAt: Date;

	readonly factors: NSArray<NSCSupabaseFactor>;

	readonly id: NSUUID;

	readonly identities: NSArray<NSCSupabaseUserIdentity>;

	readonly invitedAt: Date;

	readonly isAnonymous: boolean;

	readonly lastSignInAt: Date;

	readonly newEmail: string;

	readonly phone: string;

	readonly phoneConfirmedAt: Date;

	readonly recoverySentAt: Date;

	readonly role: string;

	readonly updatedAt: Date;

	readonly userMetadata: NSDictionary<string, NSObject>;
}

declare class NSCSupabaseChannel extends NSObject {

	static alloc(): NSCSupabaseChannel; // inherited from NSObject

	static new(): NSCSupabaseChannel; // inherited from NSObject

	readonly status: NSCSupabaseRealtimeChannelStatus;

	broadcast(event: string, message: NSDictionary<string, NSObject>, callback: (p1: NSError) => void): void;

	onBroadcast(event: string, callback: (p1: NSDictionary<string, NSObject>) => void): void;

	onPostgresChange(event: string, scheme: string, table: string, filter: string, callback: (p1: NSDictionary<string, NSObject>) => void): void;

	onPresenceChange(event: string, callback: (p1: NSDictionary<string, NSObject>) => void): void;

	subscribe(callback: () => void): void;

	unsubscribe(callback: () => void): void;

	untrack(callback: () => void): void;
}

declare class NSCSupabaseClient extends NSObject {

	static alloc(): NSCSupabaseClient; // inherited from NSObject

	static createClientError(supabaseURL: string, supabaseKey: string): NSCSupabaseClient;

	static new(): NSCSupabaseClient; // inherited from NSObject

	auth: NSCSupabaseAuth;

	functions: NSCSupabaseFunctions;

	storage: NSCSupabseStorage;

	channel(name: string): NSCSupabaseChannel;

	from(table: string): NSCSupabasePostgresQueryBuilder;

	handleURL(url: NSURL): void;

	removeAllChannels(callback: () => void): void;

	removeChannel(channel: NSCSupabaseChannel, callback: () => void): void;

	rpcCountError(fn: string, count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	rpcError(fn: string): NSCSupabasePostgresFilterBuilder;

	rpcParamsCountError(fn: string, params: NSCSupabaseJSONValue, count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	schema(schema: string): NSCSupabasePostgres;
}

declare const enum NSCSupabaseEmailOTPType {

	Signup = 0,

	Invite = 1,

	Magiclink = 2,

	Recovery = 3,

	EmailChange = 4,

	Email = 5
}

declare class NSCSupabaseFactor extends NSObject {

	static alloc(): NSCSupabaseFactor; // inherited from NSObject

	static new(): NSCSupabaseFactor; // inherited from NSObject

	createdAt: Date;

	factorType: string;

	friendlyName: string;

	id: string;

	status: NSCSupabaseFactorStatus;

	updatedAt: Date;
}

declare const enum NSCSupabaseFactorStatus {

	Verified = 0,

	Unverified = 1
}

declare class NSCSupabaseFunctionInvokeOptions extends NSObject {

	static alloc(): NSCSupabaseFunctionInvokeOptions; // inherited from NSObject

	static new(): NSCSupabaseFunctionInvokeOptions; // inherited from NSObject

	headers: NSDictionary<string, string>;

	method: string;

	constructor(o: { fileBody: NSData; });

	constructor(o: { json: NSDictionary<string, NSObject>; });

	initWithFileBody(fileBody: NSData): this;

	initWithJson(json: NSDictionary<string, NSObject>): this;
}

declare class NSCSupabaseFunctions extends NSObject {

	static alloc(): NSCSupabaseFunctions; // inherited from NSObject

	static new(): NSCSupabaseFunctions; // inherited from NSObject

	invoke(functionName: string, options: NSCSupabaseFunctionInvokeOptions, callback: (p1: NSCSupabaseFunctionsResult, p2: NSCSupabaseFunctionsErrorResult) => void): void;
}

declare class NSCSupabaseFunctionsErrorResult extends NSObject {

	static alloc(): NSCSupabaseFunctionsErrorResult; // inherited from NSObject

	static new(): NSCSupabaseFunctionsErrorResult; // inherited from NSObject

	readonly httpError: NSData;

	readonly httpErrorCode: number;

	readonly isHttpError: boolean;

	readonly message: string;

	json(callback: (p1: NSDictionary<string, NSObject>, p2: NSError) => void): void;
}

declare class NSCSupabaseFunctionsResult extends NSObject {

	static alloc(): NSCSupabaseFunctionsResult; // inherited from NSObject

	static new(): NSCSupabaseFunctionsResult; // inherited from NSObject

	readonly data: NSData;

	readonly response: NSHTTPURLResponse;

	json(callback: (p1: NSDictionary<string, NSObject>, p2: NSError) => void): void;

	text(callback: (p1: string) => void): void;
}

declare class NSCSupabaseJSONValue extends NSObject {

	static alloc(): NSCSupabaseJSONValue; // inherited from NSObject

	static new(): NSCSupabaseJSONValue; // inherited from NSObject

	readonly json: any;

	readonly queryValue: string;

	readonly value: any;

	constructor(o: { array: NSArray<NSCSupabaseJSONValue> | NSCSupabaseJSONValue[]; });

	constructor(o: { boolean: boolean; });

	constructor(o: { data: NSData; });

	constructor(o: { date: Date; });

	constructor(o: { double: number; });

	constructor(o: { integer: number; });

	constructor(o: { object: NSDictionary<string, NSCSupabaseJSONValue>; });

	constructor(o: { string: string; });

	initWithArray(array: NSArray<NSCSupabaseJSONValue> | NSCSupabaseJSONValue[]): this;

	initWithBoolean(boolean: boolean): this;

	initWithData(data: NSData): this;

	initWithDate(date: Date): this;

	initWithDouble(double_: number): this;

	initWithInteger(integer: number): this;

	initWithObject(object: NSDictionary<string, NSCSupabaseJSONValue>): this;

	initWithString(string: string): this;
}

declare class NSCSupabaseLaunchFlowResult extends NSObject {

	static alloc(): NSCSupabaseLaunchFlowResult; // inherited from NSObject

	static new(): NSCSupabaseLaunchFlowResult; // inherited from NSObject
}

declare const enum NSCSupabaseLaunchFlowResultType {

	Success = 0,

	Error = 1
}

declare class NSCSupabaseListener extends NSObject {

	static alloc(): NSCSupabaseListener; // inherited from NSObject

	static new(): NSCSupabaseListener; // inherited from NSObject

	remove(): void;
}

declare const enum NSCSupabaseMessagingChannel {

	Sms = 0,

	Whatsapp = 1
}

declare const enum NSCSupabaseMobileOTPType {

	Sms = 0,

	PhoneChange = 1
}

declare class NSCSupabaseOpenIDConnectCredentials extends NSObject {

	static alloc(): NSCSupabaseOpenIDConnectCredentials; // inherited from NSObject

	static new(): NSCSupabaseOpenIDConnectCredentials; // inherited from NSObject

	accessToken: string;

	gotrueMetaSecurity: NSCSupabaseAuthMetaSecurity;

	idToken: string;

	nonce: string;

	provider: NSCSupabaseOpenIDConnectCredentialsProvider;

	constructor();

	constructor(o: { provider: NSCSupabaseOpenIDConnectCredentialsProvider; idToken: string; accessToken: string; nonce: string; gotrueMetaSecurity: NSCSupabaseAuthMetaSecurity; });

	init(provider: NSCSupabaseOpenIDConnectCredentialsProvider, idToken: string): this;

	initWithProviderIdTokenAccessTokenNonceGotrueMetaSecurity(provider: NSCSupabaseOpenIDConnectCredentialsProvider, idToken: string, accessToken: string, nonce: string, gotrueMetaSecurity: NSCSupabaseAuthMetaSecurity): this;
}

declare const enum NSCSupabaseOpenIDConnectCredentialsProvider {

	Google = 0,

	Apple = 1,

	Azure = 2,

	Facebook = 3
}

declare class NSCSupabasePostgres extends NSObject {

	static alloc(): NSCSupabasePostgres; // inherited from NSObject

	static new(): NSCSupabasePostgres; // inherited from NSObject

	from(table: string): NSCSupabasePostgresQueryBuilder;

	schema(schema: string): NSCSupabasePostgres;
}

declare const enum NSCSupabasePostgresCountOption {

	None = 0,

	Exact = 1,

	Planned = 2,

	Estimated = 3
}

declare class NSCSupabasePostgresFetchOptions extends NSObject {

	static alloc(): NSCSupabasePostgresFetchOptions; // inherited from NSObject

	static new(): NSCSupabasePostgresFetchOptions; // inherited from NSObject

	readonly head: boolean;
}

declare class NSCSupabasePostgresFilterBuilder extends NSObject {

	static alloc(): NSCSupabasePostgresFilterBuilder; // inherited from NSObject

	static new(): NSCSupabasePostgresFilterBuilder; // inherited from NSObject

	containedBy(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	contains(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	csv(): NSCSupabasePostgresTransformBuilder;

	eq(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	execute(options: NSCSupabasePostgresFetchOptions, callback: (p1: NSDictionary<string, NSObject>, p2: NSError) => void): void;

	gt(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	gte(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	ilike(column: string, pattern: string): NSCSupabasePostgresFilterBuilder;

	in(column: string, pattern: NSArray<NSCSupabaseJSONValue> | NSCSupabaseJSONValue[]): NSCSupabasePostgresFilterBuilder;

	is(column: string): NSCSupabasePostgresFilterBuilder;

	isValue(column: string, value: boolean): NSCSupabasePostgresFilterBuilder;

	like(column: string, pattern: string): NSCSupabasePostgresFilterBuilder;

	limit(count: number): NSCSupabasePostgresTransformBuilder;

	lt(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	lte(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	match(query: NSDictionary<string, NSCSupabaseJSONValue>): NSCSupabasePostgresFilterBuilder;

	maybeSingle(): NSCSupabasePostgresTransformBuilder;

	neq(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	not(column: string, operatorFilter: NSCSupabasePostgresFilterBuilderOperator, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	or(filters: string, referencedTable: string): NSCSupabasePostgresTransformBuilder;

	order(column: string, ascending: boolean, nullsFirst: boolean, referencedTable: string): NSCSupabasePostgresTransformBuilder;

	overlaps(column: string, value: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	range(from: number, to: number, referencedTable: string): NSCSupabasePostgresTransformBuilder;

	rangeAdjacent(column: string, range: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	rangeGt(column: string, range: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	rangeGte(column: string, range: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	rangeLt(column: string, range: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	rangeLte(column: string, range: NSCSupabaseJSONValue): NSCSupabasePostgresFilterBuilder;

	select(columns: string): NSCSupabasePostgresTransformBuilder;

	single(): NSCSupabasePostgresTransformBuilder;

	textSearch(column: string, value: NSCSupabaseJSONValue, config: string): NSCSupabasePostgresFilterBuilder;

	textSearchType(column: string, value: NSCSupabaseJSONValue, config: string, type: NSCSupabasePostgresTextSearchType): NSCSupabasePostgresFilterBuilder;
}

declare const enum NSCSupabasePostgresFilterBuilderOperator {

	Eq = 0,

	Neq = 1,

	Gt = 2,

	Gte = 3,

	Lt = 4,

	Lte = 5,

	Like = 6,

	Ilike = 7,

	Is = 8,

	In = 9,

	Cs = 10,

	Cd = 11,

	Sl = 12,

	Sr = 13,

	Nxl = 14,

	Nxr = 15,

	Adj = 16,

	Ov = 17,

	Fts = 18,

	Plfts = 19,

	Phfts = 20,

	Wfts = 21
}

declare class NSCSupabasePostgresQueryBuilder extends NSObject {

	static alloc(): NSCSupabasePostgresQueryBuilder; // inherited from NSObject

	static new(): NSCSupabasePostgresQueryBuilder; // inherited from NSObject

	delete(count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	insertError(values: NSCSupabaseJSONValue, count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	select(columns: string, count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	selectHead(columns: string, count: NSCSupabasePostgresCountOption, head: boolean): NSCSupabasePostgresFilterBuilder;

	updateError(value: NSDictionary<string, NSCSupabaseJSONValue>, count: NSCSupabasePostgresCountOption): NSCSupabasePostgresFilterBuilder;

	upsertError(value: NSCSupabaseJSONValue, onConflict: string, count: NSCSupabasePostgresCountOption, ignoreDuplicates: boolean): NSCSupabasePostgresFilterBuilder;
}

declare const enum NSCSupabasePostgresTextSearchType {

	Plain = 0,

	Phrase = 1,

	Websearch = 2
}

declare class NSCSupabasePostgresTransformBuilder extends NSObject {

	static alloc(): NSCSupabasePostgresTransformBuilder; // inherited from NSObject

	static new(): NSCSupabasePostgresTransformBuilder; // inherited from NSObject

	csv(): NSCSupabasePostgresTransformBuilder;

	execute(options: NSCSupabasePostgresFetchOptions, callback: (p1: NSObject, p2: NSError) => void): void;

	limit(count: number): NSCSupabasePostgresTransformBuilder;

	maybeSingle(): NSCSupabasePostgresTransformBuilder;

	order(column: string, ascending: boolean, nullsFirst: boolean, referencedTable: string): NSCSupabasePostgresTransformBuilder;

	range(from: number, to: number, referencedTable: string): NSCSupabasePostgresTransformBuilder;

	select(columns: string): NSCSupabasePostgresTransformBuilder;

	single(): NSCSupabasePostgresTransformBuilder;
}

declare const enum NSCSupabaseProvider {

	Apple = 0,

	Azure = 1,

	Bitbucket = 2,

	Discord = 3,

	Email = 4,

	Facebook = 5,

	Figma = 6,

	Github = 7,

	Gitlab = 8,

	Google = 9,

	Kakao = 10,

	Keycloak = 11,

	Linkedin = 12,

	LinkedinOIDC = 13,

	Notion = 14,

	Slack = 15,

	SlackOIDC = 16,

	Spotify = 17,

	Twitch = 18,

	Twitter = 19,

	Workos = 20,

	Zoom = 21,

	Fly = 22
}

declare class NSCSupabaseQueryParamEntry extends NSObject {

	static alloc(): NSCSupabaseQueryParamEntry; // inherited from NSObject

	static new(): NSCSupabaseQueryParamEntry; // inherited from NSObject

	name: string;

	value: string;

	constructor(o: { name: string; value: string; });

	initWithNameValue(name: string, value: string): this;
}

declare const enum NSCSupabaseRealtimeChannelStatus {

	Unsubscribed = 0,

	Subscribing = 1,

	Subscribed = 2,

	Unsubscribing = 3
}

declare const enum NSCSupabaseResendEmailType {

	Signup = 0,

	EmailChange = 1
}

declare const enum NSCSupabaseResendMobileType {

	Sms = 0,

	PhoneChange = 1
}

declare const enum NSCSupabaseSignOutScope {

	Global = 0,

	Local = 1,

	Others = 2
}

declare class NSCSupabaseUserAttributes extends NSObject {

	static alloc(): NSCSupabaseUserAttributes; // inherited from NSObject

	static new(): NSCSupabaseUserAttributes; // inherited from NSObject

	data: NSDictionary<string, NSObject>;

	email: string;

	emailChangeToken: string;

	nonce: string;

	password: string;

	phone: string;
}

declare class NSCSupabaseUserIdentity extends NSObject {

	static alloc(): NSCSupabaseUserIdentity; // inherited from NSObject

	static new(): NSCSupabaseUserIdentity; // inherited from NSObject

	readonly createdAt: Date;

	readonly id: string;

	readonly identityData: NSDictionary<string, NSObject>;

	readonly identityId: NSUUID;

	readonly lastSignInAt: Date;

	readonly provider: string;

	readonly updatedAt: Date;

	readonly userId: NSUUID;
}

declare var NSCSupabaseVersionNumber: number;

declare var NSCSupabaseVersionString: interop.Reference<number>;

declare class NSCSupabseStorage extends NSObject {

	static alloc(): NSCSupabseStorage; // inherited from NSObject

	static new(): NSCSupabseStorage; // inherited from NSObject

	createBucket(id: string, options: NSCSupabseStorageBucketOptions, callback: (p1: NSError) => void): void;

	deleteBucket(id: string, callback: (p1: NSError) => void): void;

	emptyBucket(id: string, callback: (p1: NSError) => void): void;

	from(id: string): NSCSupabseStorageFileApi;

	getBucket(id: string, callback: (p1: NSCSupabseStorageBucket, p2: NSError) => void): void;

	listBuckets(id: string, callback: (p1: NSArray<NSCSupabseStorageBucket>, p2: NSError) => void): void;

	updateBucket(id: string, options: NSCSupabseStorageBucketOptions, callback: (p1: NSError) => void): void;
}

declare class NSCSupabseStorageBucket extends NSObject {

	static alloc(): NSCSupabseStorageBucket; // inherited from NSObject

	static new(): NSCSupabseStorageBucket; // inherited from NSObject

	readonly allowedMimeTypes: NSArray<string>;

	readonly createdAt: Date;

	readonly id: string;

	readonly isPublic: boolean;

	readonly name: string;

	readonly owner: string;

	readonly updatedAt: Date;
}

declare class NSCSupabseStorageBucketOptions extends NSObject {

	static alloc(): NSCSupabseStorageBucketOptions; // inherited from NSObject

	static new(): NSCSupabseStorageBucketOptions; // inherited from NSObject

	allowedMimeTypes: NSArray<string>;

	fileSizeLimit: string;

	public_: boolean;

	constructor();

	init(public_: boolean, fileSizeLimit: string, allowedMimeTypes: NSArray<string> | string[]): this;
}

declare class NSCSupabseStorageFileApi extends NSObject {

	static alloc(): NSCSupabseStorageFileApi; // inherited from NSObject

	static new(): NSCSupabseStorageFileApi; // inherited from NSObject

	copy(fromPath: string, toPath: string, callback: (p1: string, p2: NSError) => void): void;

	createSignedUploadUrl(path: string, callback: (p1: NSCSupabseStorageSignedUploadURL, p2: NSError) => void): void;

	createSignedUrl(path: string, expiresIn: number, download: string, options: NSCSupabseStorageTransformOptions, callback: (p1: string, p2: NSError) => void): void;

	createSignedUrls(paths: NSArray<string> | string[], expiresIn: number, download: string, callback: (p1: NSArray<string>, p2: NSError) => void): void;

	download(path: string, options: NSCSupabseStorageTransformOptions, callback: (p1: NSData, p2: NSError) => void): void;

	getPublicUrlError(path: string, download: string, options: NSCSupabseStorageTransformOptions): string;

	list(path: string, options: NSCSupabseStorageSearchOptions, callback: (p1: NSArray<NSCSupabseStorageFileObject>, p2: NSError) => void): void;

	move(fromPath: string, toPath: string, callback: (p1: NSError) => void): void;

	remove(paths: NSArray<string> | string[], callback: (p1: NSArray<NSCSupabseStorageFileObject>, p2: NSError) => void): void;

	updateData(path: string, data: NSData, options: NSCSupabseStorageFileOptions, callback: (p1: NSCSupabseStorageFileUploadResponse, p2: NSError) => void): void;

	updateFile(path: string, file: NSURL, options: NSCSupabseStorageFileOptions, callback: (p1: NSCSupabseStorageFileUploadResponse, p2: NSError) => void): void;

	uploadData(path: string, data: NSData, options: NSCSupabseStorageFileOptions, callback: (p1: NSCSupabseStorageFileUploadResponse, p2: NSError) => void): void;

	uploadFile(path: string, file: NSURL, options: NSCSupabseStorageFileOptions, callback: (p1: NSCSupabseStorageFileUploadResponse, p2: NSError) => void): void;

	uploadToSignedUrlData(path: string, token: string, data: NSData, options: NSCSupabseStorageFileOptions, callback: (p1: NSCSupabseStorageSignedURLUploadResponse, p2: NSError) => void): void;
}

declare class NSCSupabseStorageFileObject extends NSObject {

	static alloc(): NSCSupabseStorageFileObject; // inherited from NSObject

	static new(): NSCSupabseStorageFileObject; // inherited from NSObject

	readonly bucketId: string;

	readonly buckets: NSCSupabseStorageBucket;

	readonly createdAt: Date;

	readonly id: string;

	readonly lastAccessedAt: Date;

	readonly metadata: NSDictionary<string, NSObject>;

	readonly name: string;

	readonly owner: string;

	readonly updatedAt: Date;
}

declare class NSCSupabseStorageFileOptions extends NSObject {

	static alloc(): NSCSupabseStorageFileOptions; // inherited from NSObject

	static new(): NSCSupabseStorageFileOptions; // inherited from NSObject

	cacheControl: string;

	contentType: string;

	duplex: string;

	headers: NSDictionary<string, string>;

	metadata: NSDictionary<string, NSObject>;

	upsert: boolean;
}

declare class NSCSupabseStorageFileUploadResponse extends NSObject {

	static alloc(): NSCSupabseStorageFileUploadResponse; // inherited from NSObject

	static new(): NSCSupabseStorageFileUploadResponse; // inherited from NSObject

	readonly fullPath: string;

	readonly id: string;

	readonly path: string;
}

declare class NSCSupabseStorageSearchOptions extends NSObject {

	static alloc(): NSCSupabseStorageSearchOptions; // inherited from NSObject

	static new(): NSCSupabseStorageSearchOptions; // inherited from NSObject

	limit: number;

	offset: number;

	search: string;

	sortBy: NSCSupabseStorageSortBy;
}

declare class NSCSupabseStorageSignedURLUploadResponse extends NSObject {

	static alloc(): NSCSupabseStorageSignedURLUploadResponse; // inherited from NSObject

	static new(): NSCSupabseStorageSignedURLUploadResponse; // inherited from NSObject

	readonly fullPath: string;

	readonly path: string;
}

declare class NSCSupabseStorageSignedUploadURL extends NSObject {

	static alloc(): NSCSupabseStorageSignedUploadURL; // inherited from NSObject

	static new(): NSCSupabseStorageSignedUploadURL; // inherited from NSObject

	path: string;

	signedURL: string;

	token: string;
}

declare class NSCSupabseStorageSortBy extends NSObject {

	static alloc(): NSCSupabseStorageSortBy; // inherited from NSObject

	static new(): NSCSupabseStorageSortBy; // inherited from NSObject

	column: string;

	order: string;
}

declare class NSCSupabseStorageTransformOptions extends NSObject {

	static alloc(): NSCSupabseStorageTransformOptions; // inherited from NSObject

	static new(): NSCSupabseStorageTransformOptions; // inherited from NSObject

	format: string;

	height: number;

	quality: number;

	resize: string;

	width: number;
}
