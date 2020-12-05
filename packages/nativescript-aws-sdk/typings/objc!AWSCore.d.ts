
declare class AWSAbstractCognitoCredentialsProviderHelper extends NSObject implements AWSCognitoCredentialsProviderHelperProtocol {

	static alloc(): AWSAbstractCognitoCredentialsProviderHelper; // inherited from NSObject

	static new(): AWSAbstractCognitoCredentialsProviderHelper; // inherited from NSObject

	readonly customRoleArn: string; // inherited from AWSIdentityProviderManager

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	identityId: string; // inherited from AWSCognitoCredentialsProviderHelperProtocol

	readonly identityPoolId: string; // inherited from AWSCognitoCredentialsProviderHelperProtocol

	readonly identityProviderManager: AWSIdentityProviderManager; // inherited from AWSCognitoCredentialsProviderHelperProtocol

	readonly identityProviderName: string; // inherited from AWSIdentityProvider

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clear(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	getIdentityId(): AWSTask<string>;

	isAuthenticated(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logins(): AWSTask<NSDictionary<string, string>>;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	token(): AWSTask<string>;
}

declare class AWSAnonymousCredentialsProvider extends NSObject implements AWSCredentialsProvider {

	static alloc(): AWSAnonymousCredentialsProvider; // inherited from NSObject

	static new(): AWSAnonymousCredentialsProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	credentials(): AWSTask<AWSCredentials>;

	invalidateCachedTemporaryCredentials(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AWSBasicSessionCredentialsProvider extends NSObject implements AWSCredentialsProvider {

	static alloc(): AWSBasicSessionCredentialsProvider; // inherited from NSObject

	static new(): AWSBasicSessionCredentialsProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { accessKey: string; secretKey: string; sessionToken: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	credentials(): AWSTask<AWSCredentials>;

	initWithAccessKeySecretKeySessionToken(accessKey: string, secretKey: string, sessionToken: string): this;

	invalidateCachedTemporaryCredentials(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var AWSBoltsFrameworkVersionString: string;

declare class AWSCancellationToken extends NSObject {

	static alloc(): AWSCancellationToken; // inherited from NSObject

	static new(): AWSCancellationToken; // inherited from NSObject

	readonly cancellationRequested: boolean;

	registerCancellationObserverWithBlock(block: () => void): AWSCancellationTokenRegistration;
}

declare class AWSCancellationTokenRegistration extends NSObject {

	static alloc(): AWSCancellationTokenRegistration; // inherited from NSObject

	static new(): AWSCancellationTokenRegistration; // inherited from NSObject

	dispose(): void;
}

declare class AWSCancellationTokenSource extends NSObject {

	static alloc(): AWSCancellationTokenSource; // inherited from NSObject

	static cancellationTokenSource(): AWSCancellationTokenSource;

	static new(): AWSCancellationTokenSource; // inherited from NSObject

	readonly cancellationRequested: boolean;

	readonly token: AWSCancellationToken;

	cancel(): void;

	cancelAfterDelay(millis: number): void;

	dispose(): void;
}

declare class AWSClientContext extends NSObject {

	static alloc(): AWSClientContext; // inherited from NSObject

	static new(): AWSClientContext; // inherited from NSObject

	appBuild: string;

	appName: string;

	appPackageName: string;

	appVersion: string;

	customAttributes: NSDictionary<any, any>;

	deviceLocale: string;

	deviceManufacturer: string;

	deviceModel: string;

	deviceModelVersion: string;

	devicePlatform: string;

	devicePlatformVersion: string;

	readonly installationId: string;

	readonly serviceDetails: NSDictionary<any, any>;

	JSONString(): string;

	base64EncodedJSONString(): string;

	dictionaryRepresentation(): NSDictionary<any, any>;

	setDetailsForService(details: any, service: string): void;
}

declare var AWSClientContextHeader: string;

declare var AWSClientContextHeaderEncoding: string;

declare var AWSClientContextVersion: string;

declare class AWSCognitoCredentialsProvider extends NSObject implements AWSCredentialsProvider {

	static alloc(): AWSCognitoCredentialsProvider; // inherited from NSObject

	static new(): AWSCognitoCredentialsProvider; // inherited from NSObject

	readonly identityId: string;

	readonly identityPoolId: string;

	readonly identityProvider: AWSCognitoCredentialsProviderHelperProtocol;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; });

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; identityPoolConfiguration: AWSServiceConfiguration; });

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; identityProviderManager: AWSIdentityProviderManager; });

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; unauthRoleArn: string; authRoleArn: string; identityProviderManager: AWSIdentityProviderManager; });

	constructor(o: { regionType: AWSRegionType; identityProvider: AWSCognitoCredentialsProviderHelperProtocol; });

	constructor(o: { regionType: AWSRegionType; unauthRoleArn: string; authRoleArn: string; identityProvider: AWSCognitoCredentialsProviderHelperProtocol; });

	class(): typeof NSObject;

	clearCredentials(): void;

	clearKeychain(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	credentials(): AWSTask<AWSCredentials>;

	getIdentityId(): AWSTask<string>;

	initWithRegionTypeIdentityPoolId(regionType: AWSRegionType, identityPoolId: string): this;

	initWithRegionTypeIdentityPoolIdIdentityPoolConfiguration(regionType: AWSRegionType, identityPoolId: string, configuration: AWSServiceConfiguration): this;

	initWithRegionTypeIdentityPoolIdIdentityProviderManager(regionType: AWSRegionType, identityPoolId: string, identityProviderManager: AWSIdentityProviderManager): this;

	initWithRegionTypeIdentityPoolIdUnauthRoleArnAuthRoleArnIdentityProviderManager(regionType: AWSRegionType, identityPoolId: string, unauthRoleArn: string, authRoleArn: string, identityProviderManager: AWSIdentityProviderManager): this;

	initWithRegionTypeIdentityProvider(regionType: AWSRegionType, identityProvider: AWSCognitoCredentialsProviderHelperProtocol): this;

	initWithRegionTypeUnauthRoleArnAuthRoleArnIdentityProvider(regionType: AWSRegionType, unauthRoleArn: string, authRoleArn: string, identityProvider: AWSCognitoCredentialsProviderHelperProtocol): this;

	invalidateCachedTemporaryCredentials(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setIdentityProviderManagerOnce(identityProviderManager: AWSIdentityProviderManager): void;
}

declare var AWSCognitoCredentialsProviderErrorDomain: string;

declare const enum AWSCognitoCredentialsProviderErrorType {

	ErrorUnknown = 0,

	IdentityIdIsNil = 1,

	InvalidConfiguration = 2,

	InvalidCognitoIdentityToken = 3,

	CredentialsRefreshTimeout = 4
}

declare class AWSCognitoCredentialsProviderHelper extends AWSAbstractCognitoCredentialsProviderHelper {

	static alloc(): AWSCognitoCredentialsProviderHelper; // inherited from NSObject

	static new(): AWSCognitoCredentialsProviderHelper; // inherited from NSObject

	useEnhancedFlow: boolean;

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; useEnhancedFlow: boolean; identityProviderManager: AWSIdentityProviderManager; });

	constructor(o: { regionType: AWSRegionType; identityPoolId: string; useEnhancedFlow: boolean; identityProviderManager: AWSIdentityProviderManager; identityPoolConfiguration: AWSServiceConfiguration; });

	initWithRegionTypeIdentityPoolIdUseEnhancedFlowIdentityProviderManager(regionType: AWSRegionType, identityPoolId: string, useEnhancedFlow: boolean, identityProviderManager: AWSIdentityProviderManager): this;

	initWithRegionTypeIdentityPoolIdUseEnhancedFlowIdentityProviderManagerIdentityPoolConfiguration(regionType: AWSRegionType, identityPoolId: string, useEnhancedFlow: boolean, identityProviderManager: AWSIdentityProviderManager, configuration: AWSServiceConfiguration): this;
}

declare var AWSCognitoCredentialsProviderHelperErrorDomain: string;

declare const enum AWSCognitoCredentialsProviderHelperErrorType {

	IdentityIsNil = 0,

	TokenRefreshTimeout = 1
}

interface AWSCognitoCredentialsProviderHelperProtocol extends AWSIdentityProvider, AWSIdentityProviderManager {

	identityId: string;

	identityPoolId: string;

	identityProviderManager: AWSIdentityProviderManager;

	clear(): void;

	getIdentityId(): AWSTask<string>;

	isAuthenticated(): boolean;
}
declare var AWSCognitoCredentialsProviderHelperProtocol: {

	prototype: AWSCognitoCredentialsProviderHelperProtocol;
};

declare class AWSCognitoIdentity extends AWSService {

	static CognitoIdentityForKey(key: string): AWSCognitoIdentity;

	static alloc(): AWSCognitoIdentity; // inherited from NSObject

	static defaultCognitoIdentity(): AWSCognitoIdentity;

	static new(): AWSCognitoIdentity; // inherited from NSObject

	static registerCognitoIdentityWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeCognitoIdentityForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	createIdentityPool(request: AWSCognitoIdentityCreateIdentityPoolInput): AWSTask<AWSCognitoIdentityIdentityPool>;

	createIdentityPoolCompletionHandler(request: AWSCognitoIdentityCreateIdentityPoolInput, completionHandler: (p1: AWSCognitoIdentityIdentityPool, p2: NSError) => void): void;

	deleteIdentities(request: AWSCognitoIdentityDeleteIdentitiesInput): AWSTask<AWSCognitoIdentityDeleteIdentitiesResponse>;

	deleteIdentitiesCompletionHandler(request: AWSCognitoIdentityDeleteIdentitiesInput, completionHandler: (p1: AWSCognitoIdentityDeleteIdentitiesResponse, p2: NSError) => void): void;

	deleteIdentityPool(request: AWSCognitoIdentityDeleteIdentityPoolInput): AWSTask<any>;

	deleteIdentityPoolCompletionHandler(request: AWSCognitoIdentityDeleteIdentityPoolInput, completionHandler: (p1: NSError) => void): void;

	describeIdentity(request: AWSCognitoIdentityDescribeIdentityInput): AWSTask<AWSCognitoIdentityIdentityDescription>;

	describeIdentityCompletionHandler(request: AWSCognitoIdentityDescribeIdentityInput, completionHandler: (p1: AWSCognitoIdentityIdentityDescription, p2: NSError) => void): void;

	describeIdentityPool(request: AWSCognitoIdentityDescribeIdentityPoolInput): AWSTask<AWSCognitoIdentityIdentityPool>;

	describeIdentityPoolCompletionHandler(request: AWSCognitoIdentityDescribeIdentityPoolInput, completionHandler: (p1: AWSCognitoIdentityIdentityPool, p2: NSError) => void): void;

	getCredentialsForIdentity(request: AWSCognitoIdentityGetCredentialsForIdentityInput): AWSTask<AWSCognitoIdentityGetCredentialsForIdentityResponse>;

	getCredentialsForIdentityCompletionHandler(request: AWSCognitoIdentityGetCredentialsForIdentityInput, completionHandler: (p1: AWSCognitoIdentityGetCredentialsForIdentityResponse, p2: NSError) => void): void;

	getId(request: AWSCognitoIdentityGetIdInput): AWSTask<AWSCognitoIdentityGetIdResponse>;

	getIdCompletionHandler(request: AWSCognitoIdentityGetIdInput, completionHandler: (p1: AWSCognitoIdentityGetIdResponse, p2: NSError) => void): void;

	getIdentityPoolRoles(request: AWSCognitoIdentityGetIdentityPoolRolesInput): AWSTask<AWSCognitoIdentityGetIdentityPoolRolesResponse>;

	getIdentityPoolRolesCompletionHandler(request: AWSCognitoIdentityGetIdentityPoolRolesInput, completionHandler: (p1: AWSCognitoIdentityGetIdentityPoolRolesResponse, p2: NSError) => void): void;

	getOpenIdToken(request: AWSCognitoIdentityGetOpenIdTokenInput): AWSTask<AWSCognitoIdentityGetOpenIdTokenResponse>;

	getOpenIdTokenCompletionHandler(request: AWSCognitoIdentityGetOpenIdTokenInput, completionHandler: (p1: AWSCognitoIdentityGetOpenIdTokenResponse, p2: NSError) => void): void;

	getOpenIdTokenForDeveloperIdentity(request: AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput): AWSTask<AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse>;

	getOpenIdTokenForDeveloperIdentityCompletionHandler(request: AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput, completionHandler: (p1: AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse, p2: NSError) => void): void;

	listIdentities(request: AWSCognitoIdentityListIdentitiesInput): AWSTask<AWSCognitoIdentityListIdentitiesResponse>;

	listIdentitiesCompletionHandler(request: AWSCognitoIdentityListIdentitiesInput, completionHandler: (p1: AWSCognitoIdentityListIdentitiesResponse, p2: NSError) => void): void;

	listIdentityPools(request: AWSCognitoIdentityListIdentityPoolsInput): AWSTask<AWSCognitoIdentityListIdentityPoolsResponse>;

	listIdentityPoolsCompletionHandler(request: AWSCognitoIdentityListIdentityPoolsInput, completionHandler: (p1: AWSCognitoIdentityListIdentityPoolsResponse, p2: NSError) => void): void;

	listTagsForResource(request: AWSCognitoIdentityListTagsForResourceInput): AWSTask<AWSCognitoIdentityListTagsForResourceResponse>;

	listTagsForResourceCompletionHandler(request: AWSCognitoIdentityListTagsForResourceInput, completionHandler: (p1: AWSCognitoIdentityListTagsForResourceResponse, p2: NSError) => void): void;

	lookupDeveloperIdentity(request: AWSCognitoIdentityLookupDeveloperIdentityInput): AWSTask<AWSCognitoIdentityLookupDeveloperIdentityResponse>;

	lookupDeveloperIdentityCompletionHandler(request: AWSCognitoIdentityLookupDeveloperIdentityInput, completionHandler: (p1: AWSCognitoIdentityLookupDeveloperIdentityResponse, p2: NSError) => void): void;

	mergeDeveloperIdentities(request: AWSCognitoIdentityMergeDeveloperIdentitiesInput): AWSTask<AWSCognitoIdentityMergeDeveloperIdentitiesResponse>;

	mergeDeveloperIdentitiesCompletionHandler(request: AWSCognitoIdentityMergeDeveloperIdentitiesInput, completionHandler: (p1: AWSCognitoIdentityMergeDeveloperIdentitiesResponse, p2: NSError) => void): void;

	setIdentityPoolRoles(request: AWSCognitoIdentitySetIdentityPoolRolesInput): AWSTask<any>;

	setIdentityPoolRolesCompletionHandler(request: AWSCognitoIdentitySetIdentityPoolRolesInput, completionHandler: (p1: NSError) => void): void;

	tagResource(request: AWSCognitoIdentityTagResourceInput): AWSTask<AWSCognitoIdentityTagResourceResponse>;

	tagResourceCompletionHandler(request: AWSCognitoIdentityTagResourceInput, completionHandler: (p1: AWSCognitoIdentityTagResourceResponse, p2: NSError) => void): void;

	unlinkDeveloperIdentity(request: AWSCognitoIdentityUnlinkDeveloperIdentityInput): AWSTask<any>;

	unlinkDeveloperIdentityCompletionHandler(request: AWSCognitoIdentityUnlinkDeveloperIdentityInput, completionHandler: (p1: NSError) => void): void;

	unlinkIdentity(request: AWSCognitoIdentityUnlinkIdentityInput): AWSTask<any>;

	unlinkIdentityCompletionHandler(request: AWSCognitoIdentityUnlinkIdentityInput, completionHandler: (p1: NSError) => void): void;

	untagResource(request: AWSCognitoIdentityUntagResourceInput): AWSTask<AWSCognitoIdentityUntagResourceResponse>;

	untagResourceCompletionHandler(request: AWSCognitoIdentityUntagResourceInput, completionHandler: (p1: AWSCognitoIdentityUntagResourceResponse, p2: NSError) => void): void;

	updateIdentityPool(request: AWSCognitoIdentityIdentityPool): AWSTask<AWSCognitoIdentityIdentityPool>;

	updateIdentityPoolCompletionHandler(request: AWSCognitoIdentityIdentityPool, completionHandler: (p1: AWSCognitoIdentityIdentityPool, p2: NSError) => void): void;
}

declare const enum AWSCognitoIdentityAmbiguousRoleResolutionType {

	Unknown = 0,

	AuthenticatedRole = 1,

	Deny = 2
}

declare class AWSCognitoIdentityCognitoIdentityProvider extends AWSModel {

	static alloc(): AWSCognitoIdentityCognitoIdentityProvider; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCognitoIdentityProvider; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCognitoIdentityProvider; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityCognitoIdentityProvider; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityCognitoIdentityProvider; // inherited from NSObject

	clientId: string;

	providerName: string;

	serverSideTokenCheck: number;
}

declare class AWSCognitoIdentityCreateIdentityPoolInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityCreateIdentityPoolInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCreateIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCreateIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityCreateIdentityPoolInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityCreateIdentityPoolInput; // inherited from NSObject

	allowClassicFlow: number;

	allowUnauthenticatedIdentities: number;

	cognitoIdentityProviders: NSArray<AWSCognitoIdentityCognitoIdentityProvider>;

	developerProviderName: string;

	identityPoolName: string;

	identityPoolTags: NSDictionary<string, string>;

	openIdConnectProviderARNs: NSArray<string>;

	samlProviderARNs: NSArray<string>;

	supportedLoginProviders: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityCredentials extends AWSModel {

	static alloc(): AWSCognitoIdentityCredentials; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCredentials; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityCredentials; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityCredentials; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityCredentials; // inherited from NSObject

	accessKeyId: string;

	expiration: Date;

	secretKey: string;

	sessionToken: string;
}

declare class AWSCognitoIdentityDeleteIdentitiesInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityDeleteIdentitiesInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityDeleteIdentitiesInput; // inherited from NSObject

	identityIdsToDelete: NSArray<string>;
}

declare class AWSCognitoIdentityDeleteIdentitiesResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityDeleteIdentitiesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentitiesResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityDeleteIdentitiesResponse; // inherited from NSObject

	unprocessedIdentityIds: NSArray<AWSCognitoIdentityUnprocessedIdentityId>;
}

declare class AWSCognitoIdentityDeleteIdentityPoolInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityDeleteIdentityPoolInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityDeleteIdentityPoolInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityDeleteIdentityPoolInput; // inherited from NSObject

	identityPoolId: string;
}

declare class AWSCognitoIdentityDescribeIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityDescribeIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityDescribeIdentityInput; // inherited from NSObject

	identityId: string;
}

declare class AWSCognitoIdentityDescribeIdentityPoolInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityDescribeIdentityPoolInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityPoolInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityDescribeIdentityPoolInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityDescribeIdentityPoolInput; // inherited from NSObject

	identityPoolId: string;
}

declare const enum AWSCognitoIdentityErrorCode {

	Unknown = 0,

	AccessDenied = 1,

	InternalServerError = 2
}

declare var AWSCognitoIdentityErrorDomain: string;

declare const enum AWSCognitoIdentityErrorType {

	Unknown = 0,

	ConcurrentModification = 1,

	DeveloperUserAlreadyRegistered = 2,

	ExternalService = 3,

	InternalError = 4,

	InvalidIdentityPoolConfiguration = 5,

	InvalidParameter = 6,

	LimitExceeded = 7,

	NotAuthorized = 8,

	ResourceConflict = 9,

	ResourceNotFound = 10,

	TooManyRequests = 11
}

declare class AWSCognitoIdentityGetCredentialsForIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityGetCredentialsForIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetCredentialsForIdentityInput; // inherited from NSObject

	customRoleArn: string;

	identityId: string;

	logins: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityGetCredentialsForIdentityResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityGetCredentialsForIdentityResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetCredentialsForIdentityResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetCredentialsForIdentityResponse; // inherited from NSObject

	credentials: AWSCognitoIdentityCredentials;

	identityId: string;
}

declare class AWSCognitoIdentityGetIdInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityGetIdInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetIdInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetIdInput; // inherited from NSObject

	accountId: string;

	identityPoolId: string;

	logins: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityGetIdResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityGetIdResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetIdResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetIdResponse; // inherited from NSObject

	identityId: string;
}

declare class AWSCognitoIdentityGetIdentityPoolRolesInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityGetIdentityPoolRolesInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetIdentityPoolRolesInput; // inherited from NSObject

	identityPoolId: string;
}

declare class AWSCognitoIdentityGetIdentityPoolRolesResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityGetIdentityPoolRolesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetIdentityPoolRolesResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetIdentityPoolRolesResponse; // inherited from NSObject

	identityPoolId: string;

	roleMappings: NSDictionary<string, AWSCognitoIdentityRoleMapping>;

	roles: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityInput; // inherited from NSObject

	identityId: string;

	identityPoolId: string;

	logins: NSDictionary<string, string>;

	tokenDuration: number;
}

declare class AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetOpenIdTokenForDeveloperIdentityResponse; // inherited from NSObject

	identityId: string;

	token: string;
}

declare class AWSCognitoIdentityGetOpenIdTokenInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityGetOpenIdTokenInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetOpenIdTokenInput; // inherited from NSObject

	identityId: string;

	logins: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityGetOpenIdTokenResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityGetOpenIdTokenResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityGetOpenIdTokenResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityGetOpenIdTokenResponse; // inherited from NSObject

	identityId: string;

	token: string;
}

declare var AWSCognitoIdentityIdChangedNotification: string;

declare class AWSCognitoIdentityIdentityDescription extends AWSModel {

	static alloc(): AWSCognitoIdentityIdentityDescription; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityDescription; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityDescription; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityIdentityDescription; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityIdentityDescription; // inherited from NSObject

	creationDate: Date;

	identityId: string;

	lastModifiedDate: Date;

	logins: NSArray<string>;
}

declare class AWSCognitoIdentityIdentityPool extends AWSRequest {

	static alloc(): AWSCognitoIdentityIdentityPool; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityPool; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityPool; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityIdentityPool; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityIdentityPool; // inherited from NSObject

	allowClassicFlow: number;

	allowUnauthenticatedIdentities: number;

	cognitoIdentityProviders: NSArray<AWSCognitoIdentityCognitoIdentityProvider>;

	developerProviderName: string;

	identityPoolId: string;

	identityPoolName: string;

	identityPoolTags: NSDictionary<string, string>;

	openIdConnectProviderARNs: NSArray<string>;

	samlProviderARNs: NSArray<string>;

	supportedLoginProviders: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityIdentityPoolShortDescription extends AWSModel {

	static alloc(): AWSCognitoIdentityIdentityPoolShortDescription; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityPoolShortDescription; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityIdentityPoolShortDescription; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityIdentityPoolShortDescription; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityIdentityPoolShortDescription; // inherited from NSObject

	identityPoolId: string;

	identityPoolName: string;
}

declare class AWSCognitoIdentityListIdentitiesInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityListIdentitiesInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListIdentitiesInput; // inherited from NSObject

	hideDisabled: number;

	identityPoolId: string;

	maxResults: number;

	nextToken: string;
}

declare class AWSCognitoIdentityListIdentitiesResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityListIdentitiesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListIdentitiesResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListIdentitiesResponse; // inherited from NSObject

	identities: NSArray<AWSCognitoIdentityIdentityDescription>;

	identityPoolId: string;

	nextToken: string;
}

declare class AWSCognitoIdentityListIdentityPoolsInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityListIdentityPoolsInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListIdentityPoolsInput; // inherited from NSObject

	maxResults: number;

	nextToken: string;
}

declare class AWSCognitoIdentityListIdentityPoolsResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityListIdentityPoolsResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListIdentityPoolsResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListIdentityPoolsResponse; // inherited from NSObject

	identityPools: NSArray<AWSCognitoIdentityIdentityPoolShortDescription>;

	nextToken: string;
}

declare class AWSCognitoIdentityListTagsForResourceInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityListTagsForResourceInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListTagsForResourceInput; // inherited from NSObject

	resourceArn: string;
}

declare class AWSCognitoIdentityListTagsForResourceResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityListTagsForResourceResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityListTagsForResourceResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityListTagsForResourceResponse; // inherited from NSObject

	tags: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityLookupDeveloperIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityLookupDeveloperIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityLookupDeveloperIdentityInput; // inherited from NSObject

	developerUserIdentifier: string;

	identityId: string;

	identityPoolId: string;

	maxResults: number;

	nextToken: string;
}

declare class AWSCognitoIdentityLookupDeveloperIdentityResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityLookupDeveloperIdentityResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityLookupDeveloperIdentityResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityLookupDeveloperIdentityResponse; // inherited from NSObject

	developerUserIdentifierList: NSArray<string>;

	identityId: string;

	nextToken: string;
}

declare class AWSCognitoIdentityMappingRule extends AWSModel {

	static alloc(): AWSCognitoIdentityMappingRule; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMappingRule; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMappingRule; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityMappingRule; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityMappingRule; // inherited from NSObject

	claim: string;

	matchType: AWSCognitoIdentityMappingRuleMatchType;

	roleARN: string;

	value: string;
}

declare const enum AWSCognitoIdentityMappingRuleMatchType {

	Unknown = 0,

	Equals = 1,

	Contains = 2,

	StartsWith = 3,

	NotEqual = 4
}

declare class AWSCognitoIdentityMergeDeveloperIdentitiesInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityMergeDeveloperIdentitiesInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityMergeDeveloperIdentitiesInput; // inherited from NSObject

	destinationUserIdentifier: string;

	developerProviderName: string;

	identityPoolId: string;

	sourceUserIdentifier: string;
}

declare class AWSCognitoIdentityMergeDeveloperIdentitiesResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityMergeDeveloperIdentitiesResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityMergeDeveloperIdentitiesResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityMergeDeveloperIdentitiesResponse; // inherited from NSObject

	identityId: string;
}

declare class AWSCognitoIdentityResources extends NSObject {

	static alloc(): AWSCognitoIdentityResources; // inherited from NSObject

	static new(): AWSCognitoIdentityResources; // inherited from NSObject

	static sharedInstance(): AWSCognitoIdentityResources;

	JSONObject(): NSDictionary<any, any>;
}

declare class AWSCognitoIdentityRoleMapping extends AWSModel {

	static alloc(): AWSCognitoIdentityRoleMapping; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityRoleMapping; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityRoleMapping; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityRoleMapping; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityRoleMapping; // inherited from NSObject

	ambiguousRoleResolution: AWSCognitoIdentityAmbiguousRoleResolutionType;

	rulesConfiguration: AWSCognitoIdentityRulesConfigurationType;

	types: AWSCognitoIdentityRoleMappingType;
}

declare const enum AWSCognitoIdentityRoleMappingType {

	Unknown = 0,

	Token = 1,

	Rules = 2
}

declare class AWSCognitoIdentityRulesConfigurationType extends AWSModel {

	static alloc(): AWSCognitoIdentityRulesConfigurationType; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityRulesConfigurationType; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityRulesConfigurationType; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityRulesConfigurationType; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityRulesConfigurationType; // inherited from NSObject

	rules: NSArray<AWSCognitoIdentityMappingRule>;
}

declare class AWSCognitoIdentitySetIdentityPoolRolesInput extends AWSRequest {

	static alloc(): AWSCognitoIdentitySetIdentityPoolRolesInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentitySetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentitySetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentitySetIdentityPoolRolesInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentitySetIdentityPoolRolesInput; // inherited from NSObject

	identityPoolId: string;

	roleMappings: NSDictionary<string, AWSCognitoIdentityRoleMapping>;

	roles: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityTagResourceInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityTagResourceInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityTagResourceInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityTagResourceInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityTagResourceInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityTagResourceInput; // inherited from NSObject

	resourceArn: string;

	tags: NSDictionary<string, string>;
}

declare class AWSCognitoIdentityTagResourceResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityTagResourceResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityTagResourceResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityTagResourceResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityTagResourceResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityTagResourceResponse; // inherited from NSObject
}

declare class AWSCognitoIdentityUnlinkDeveloperIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityUnlinkDeveloperIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnlinkDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnlinkDeveloperIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityUnlinkDeveloperIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityUnlinkDeveloperIdentityInput; // inherited from NSObject

	developerProviderName: string;

	developerUserIdentifier: string;

	identityId: string;

	identityPoolId: string;
}

declare class AWSCognitoIdentityUnlinkIdentityInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityUnlinkIdentityInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnlinkIdentityInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnlinkIdentityInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityUnlinkIdentityInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityUnlinkIdentityInput; // inherited from NSObject

	identityId: string;

	logins: NSDictionary<string, string>;

	loginsToRemove: NSArray<string>;
}

declare class AWSCognitoIdentityUnprocessedIdentityId extends AWSModel {

	static alloc(): AWSCognitoIdentityUnprocessedIdentityId; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnprocessedIdentityId; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUnprocessedIdentityId; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityUnprocessedIdentityId; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityUnprocessedIdentityId; // inherited from NSObject

	errorCode: AWSCognitoIdentityErrorCode;

	identityId: string;
}

declare class AWSCognitoIdentityUntagResourceInput extends AWSRequest {

	static alloc(): AWSCognitoIdentityUntagResourceInput; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceInput; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceInput; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceInput; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityUntagResourceInput; // inherited from NSObject

	resourceArn: string;

	tagKeys: NSArray<string>;
}

declare class AWSCognitoIdentityUntagResourceResponse extends AWSModel {

	static alloc(): AWSCognitoIdentityUntagResourceResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSCognitoIdentityUntagResourceResponse; // inherited from AWSMTLModel

	static new(): AWSCognitoIdentityUntagResourceResponse; // inherited from NSObject
}

declare var AWSCognitoNotificationNewId: string;

declare var AWSCognitoNotificationPreviousId: string;

declare var AWSCoreVersionNumber: number;

declare var AWSCoreVersionNumberVar: number;

declare var AWSCoreVersionString: interop.Reference<number>;

declare var AWSCoreVersionStringVar: interop.Reference<number>;

declare class AWSCredentials extends NSObject {

	static alloc(): AWSCredentials; // inherited from NSObject

	static new(): AWSCredentials; // inherited from NSObject

	readonly accessKey: string;

	readonly expiration: Date;

	readonly secretKey: string;

	readonly sessionKey: string;

	constructor(o: { accessKey: string; secretKey: string; sessionKey: string; expiration: Date; });

	initWithAccessKeySecretKeySessionKeyExpiration(accessKey: string, secretKey: string, sessionKey: string, expiration: Date): this;
}

interface AWSCredentialsProvider extends NSObjectProtocol {

	credentials(): AWSTask<AWSCredentials>;

	invalidateCachedTemporaryCredentials(): void;
}
declare var AWSCredentialsProvider: {

	prototype: AWSCredentialsProvider;
};

declare class AWSDDASLLogCapture extends NSObject {

	static alloc(): AWSDDASLLogCapture; // inherited from NSObject

	static new(): AWSDDASLLogCapture; // inherited from NSObject

	static start(): void;

	static stop(): void;

	static captureLevel: AWSDDLogLevel;
}

declare class AWSDDASLLogger extends AWSDDAbstractLogger implements AWSDDLogger {

	static alloc(): AWSDDASLLogger; // inherited from NSObject

	static new(): AWSDDASLLogger; // inherited from NSObject

	static readonly sharedInstance: AWSDDASLLogger;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFormatter: AWSDDLogFormatter; // inherited from AWSDDLogger

	readonly loggerName: string; // inherited from AWSDDLogger

	readonly loggerQueue: NSObject; // inherited from AWSDDLogger

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddLogger(): void;

	didAddLoggerInQueue(queue: NSObject): void;

	flush(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logMessage(logMessage: AWSDDLogMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveLogger(): void;
}

declare class AWSDDAbstractDatabaseLogger extends AWSDDAbstractLogger {

	static alloc(): AWSDDAbstractDatabaseLogger; // inherited from NSObject

	static new(): AWSDDAbstractDatabaseLogger; // inherited from NSObject

	deleteInterval: number;

	deleteOnEverySave: boolean;

	maxAge: number;

	saveInterval: number;

	saveThreshold: number;

	deleteOldLogEntries(): void;

	savePendingLogEntries(): void;
}

declare class AWSDDAbstractLogger extends NSObject implements AWSDDLogger {

	static alloc(): AWSDDAbstractLogger; // inherited from NSObject

	static new(): AWSDDAbstractLogger; // inherited from NSObject

	loggerQueue: NSObject;

	readonly onGlobalLoggingQueue: boolean;

	readonly onInternalLoggerQueue: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFormatter: AWSDDLogFormatter; // inherited from AWSDDLogger

	readonly loggerName: string; // inherited from AWSDDLogger

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddLogger(): void;

	didAddLoggerInQueue(queue: NSObject): void;

	flush(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logMessage(logMessage: AWSDDLogMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveLogger(): void;
}

declare class AWSDDContextBlacklistFilterLogFormatter extends NSObject implements AWSDDLogFormatter {

	static alloc(): AWSDDContextBlacklistFilterLogFormatter; // inherited from NSObject

	static new(): AWSDDContextBlacklistFilterLogFormatter; // inherited from NSObject

	readonly blacklist: NSArray<number>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addToBlacklist(loggingContext: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddToLogger(logger: AWSDDLogger): void;

	didAddToLoggerInQueue(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isOnBlacklist(loggingContext: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeFromBlacklist(loggingContext: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromLogger(logger: AWSDDLogger): void;
}

declare class AWSDDContextWhitelistFilterLogFormatter extends NSObject implements AWSDDLogFormatter {

	static alloc(): AWSDDContextWhitelistFilterLogFormatter; // inherited from NSObject

	static new(): AWSDDContextWhitelistFilterLogFormatter; // inherited from NSObject

	readonly whitelist: NSArray<number>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addToWhitelist(loggingContext: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddToLogger(logger: AWSDDLogger): void;

	didAddToLoggerInQueue(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isOnWhitelist(loggingContext: number): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeFromWhitelist(loggingContext: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromLogger(logger: AWSDDLogger): void;
}

declare class AWSDDDispatchQueueLogFormatter extends NSObject implements AWSDDLogFormatter {

	static alloc(): AWSDDDispatchQueueLogFormatter; // inherited from NSObject

	static new(): AWSDDDispatchQueueLogFormatter; // inherited from NSObject

	maxQueueLength: number;

	minQueueLength: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { mode: AWSDDDispatchQueueLogFormatterMode; });

	class(): typeof NSObject;

	configureDateFormatter(dateFormatter: NSDateFormatter): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddToLogger(logger: AWSDDLogger): void;

	didAddToLoggerInQueue(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	initWithMode(mode: AWSDDDispatchQueueLogFormatterMode): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	queueThreadLabelForLogMessage(logMessage: AWSDDLogMessage): string;

	replacementStringForQueueLabel(longLabel: string): string;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setReplacementStringForQueueLabel(shortLabel: string, longLabel: string): void;

	stringFromDate(date: Date): string;

	willRemoveFromLogger(logger: AWSDDLogger): void;
}

declare const enum AWSDDDispatchQueueLogFormatterMode {

	Shareble = 0,

	NonShareble = 1
}

declare function AWSDDExtractFileNameWithoutExtension(filePath: string | interop.Pointer | interop.Reference<any>, copy: boolean): string;

declare class AWSDDFileLogger extends AWSDDAbstractLogger implements AWSDDLogger {

	static alloc(): AWSDDFileLogger; // inherited from NSObject

	static new(): AWSDDFileLogger; // inherited from NSObject

	automaticallyAppendNewlineForCustomFormatters: boolean;

	readonly currentLogFileInfo: AWSDDLogFileInfo;

	doNotReuseLogFiles: boolean;

	readonly logFileManager: AWSDDLogFileManager;

	maximumFileSize: number;

	rollingFrequency: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFormatter: AWSDDLogFormatter; // inherited from AWSDDLogger

	readonly loggerName: string; // inherited from AWSDDLogger

	readonly loggerQueue: NSObject; // inherited from AWSDDLogger

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { logFileManager: AWSDDLogFileManager; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddLogger(): void;

	didAddLoggerInQueue(queue: NSObject): void;

	didLogMessage(): void;

	flush(): void;

	initWithLogFileManager(logFileManager: AWSDDLogFileManager): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logMessage(logMessage: AWSDDLogMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rollLogFile(): void;

	rollLogFileWithCompletionBlock(completionBlock: () => void): void;

	self(): this;

	shouldArchiveRecentLogFileInfo(recentLogFileInfo: AWSDDLogFileInfo): boolean;

	willLogMessage(): void;

	willRemoveLogger(): void;
}

declare class AWSDDLog extends NSObject {

	static addLogger(logger: AWSDDLogger): void;

	static addLoggerWithLevel(logger: AWSDDLogger, level: AWSDDLogLevel): void;

	static alloc(): AWSDDLog; // inherited from NSObject

	static flushLog(): void;

	static levelForClass(aClass: typeof NSObject): AWSDDLogLevel;

	static levelForClassWithName(aClassName: string): AWSDDLogLevel;

	static logMessage(asynchronous: boolean, logMessage: AWSDDLogMessage): void;

	static new(): AWSDDLog; // inherited from NSObject

	static removeAllLoggers(): void;

	static removeLogger(logger: AWSDDLogger): void;

	static setLevelForClass(level: AWSDDLogLevel, aClass: typeof NSObject): void;

	static setLevelForClassWithName(level: AWSDDLogLevel, aClassName: string): void;

	readonly allLoggers: NSArray<AWSDDLogger>;

	readonly allLoggersWithLevel: NSArray<AWSDDLoggerInformation>;

	logLevel: AWSDDLogLevel;

	static readonly allLoggers: NSArray<AWSDDLogger>;

	static readonly allLoggersWithLevel: NSArray<AWSDDLoggerInformation>;

	static readonly loggingQueue: NSObject;

	static readonly registeredClassNames: NSArray<string>;

	static readonly registeredClasses: NSArray<typeof NSObject>;

	static readonly sharedInstance: AWSDDLog;

	addLogger(logger: AWSDDLogger): void;

	addLoggerWithLevel(logger: AWSDDLogger, level: AWSDDLogLevel): void;

	flushLog(): void;

	logMessage(asynchronous: boolean, logMessage: AWSDDLogMessage): void;

	removeAllLoggers(): void;

	removeLogger(logger: AWSDDLogger): void;
}

declare class AWSDDLogFileFormatterDefault extends NSObject implements AWSDDLogFormatter {

	static alloc(): AWSDDLogFileFormatterDefault; // inherited from NSObject

	static new(): AWSDDLogFileFormatterDefault; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { dateFormatter: NSDateFormatter; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddToLogger(logger: AWSDDLogger): void;

	didAddToLoggerInQueue(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	initWithDateFormatter(dateFormatter: NSDateFormatter): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromLogger(logger: AWSDDLogger): void;
}

declare class AWSDDLogFileInfo extends NSObject {

	static alloc(): AWSDDLogFileInfo; // inherited from NSObject

	static logFileWithPath(filePath: string): AWSDDLogFileInfo;

	static new(): AWSDDLogFileInfo; // inherited from NSObject

	readonly age: number;

	readonly creationDate: Date;

	readonly fileAttributes: NSDictionary<string, any>;

	readonly fileName: string;

	readonly filePath: string;

	readonly fileSize: number;

	isArchived: boolean;

	readonly modificationDate: Date;

	constructor(o: { filePath: string; });

	addExtensionAttributeWithName(attrName: string): void;

	hasExtensionAttributeWithName(attrName: string): boolean;

	initWithFilePath(filePath: string): this;

	removeExtensionAttributeWithName(attrName: string): void;

	renameFile(newFileName: string): void;

	reset(): void;

	reverseCompareByCreationDate(another: AWSDDLogFileInfo): NSComparisonResult;

	reverseCompareByModificationDate(another: AWSDDLogFileInfo): NSComparisonResult;
}

interface AWSDDLogFileManager extends NSObjectProtocol {

	logFilesDiskQuota: number;

	logsDirectory: string;

	maximumNumberOfLogFiles: number;

	sortedLogFileInfos: NSArray<AWSDDLogFileInfo>;

	sortedLogFileNames: NSArray<string>;

	sortedLogFilePaths: NSArray<string>;

	unsortedLogFileInfos: NSArray<AWSDDLogFileInfo>;

	unsortedLogFileNames: NSArray<string>;

	unsortedLogFilePaths: NSArray<string>;

	createNewLogFile(): string;

	didArchiveLogFile?(logFilePath: string): void;

	didRollAndArchiveLogFile?(logFilePath: string): void;
}
declare var AWSDDLogFileManager: {

	prototype: AWSDDLogFileManager;
};

declare class AWSDDLogFileManagerDefault extends NSObject implements AWSDDLogFileManager {

	static alloc(): AWSDDLogFileManagerDefault; // inherited from NSObject

	static new(): AWSDDLogFileManagerDefault; // inherited from NSObject

	readonly newLogFileName: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFilesDiskQuota: number; // inherited from AWSDDLogFileManager

	readonly logsDirectory: string; // inherited from AWSDDLogFileManager

	maximumNumberOfLogFiles: number; // inherited from AWSDDLogFileManager

	readonly sortedLogFileInfos: NSArray<AWSDDLogFileInfo>; // inherited from AWSDDLogFileManager

	readonly sortedLogFileNames: NSArray<string>; // inherited from AWSDDLogFileManager

	readonly sortedLogFilePaths: NSArray<string>; // inherited from AWSDDLogFileManager

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly unsortedLogFileInfos: NSArray<AWSDDLogFileInfo>; // inherited from AWSDDLogFileManager

	readonly unsortedLogFileNames: NSArray<string>; // inherited from AWSDDLogFileManager

	readonly unsortedLogFilePaths: NSArray<string>; // inherited from AWSDDLogFileManager

	readonly  // inherited from NSObjectProtocol

	constructor(o: { logsDirectory: string; });

	constructor(o: { logsDirectory: string; defaultFileProtectionLevel: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createNewLogFile(): string;

	didArchiveLogFile(logFilePath: string): void;

	didRollAndArchiveLogFile(logFilePath: string): void;

	initWithLogsDirectory(logsDirectory: string): this;

	initWithLogsDirectoryDefaultFileProtectionLevel(logsDirectory: string, fileProtectionLevel: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLogFile(fileName: string): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum AWSDDLogFlag {

	Error = 1,

	Warning = 2,

	Info = 4,

	Debug = 8,

	Verbose = 16
}

interface AWSDDLogFormatter extends NSObjectProtocol {

	didAddToLogger?(logger: AWSDDLogger): void;

	didAddToLoggerInQueue?(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	willRemoveFromLogger?(logger: AWSDDLogger): void;
}
declare var AWSDDLogFormatter: {

	prototype: AWSDDLogFormatter;
};

declare const enum AWSDDLogLevel {

	Off = 0,

	Error = 1,

	Warning = 3,

	Info = 7,

	Debug = 15,

	Verbose = 31,

	All = -1
}

declare class AWSDDLogMessage extends NSObject implements NSCopying {

	static alloc(): AWSDDLogMessage; // inherited from NSObject

	static new(): AWSDDLogMessage; // inherited from NSObject

	readonly context: number;

	readonly file: string;

	readonly fileName: string;

	readonly flag: AWSDDLogFlag;

	readonly function: string;

	readonly level: AWSDDLogLevel;

	readonly line: number;

	readonly message: string;

	readonly options: AWSDDLogMessageOptions;

	readonly queueLabel: string;

	readonly tag: any;

	readonly threadID: string;

	readonly threadName: string;

	readonly timestamp: Date;

	constructor(o: { message: string; level: AWSDDLogLevel; flag: AWSDDLogFlag; context: number; file: string; function: string; line: number; tag: any; options: AWSDDLogMessageOptions; timestamp: Date; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithMessageLevelFlagContextFileFunctionLineTagOptionsTimestamp(message: string, level: AWSDDLogLevel, flag: AWSDDLogFlag, context: number, file: string, _function: string, line: number, tag: any, options: AWSDDLogMessageOptions, timestamp: Date): this;
}

declare const enum AWSDDLogMessageOptions {

	CopyFile = 1,

	CopyFunction = 2,

	DontCopyMessage = 4
}

interface AWSDDLogger extends NSObjectProtocol {

	logFormatter: AWSDDLogFormatter;

	loggerName?: string;

	loggerQueue?: NSObject;

	didAddLogger?(): void;

	didAddLoggerInQueue?(queue: NSObject): void;

	flush?(): void;

	logMessage(logMessage: AWSDDLogMessage): void;

	willRemoveLogger?(): void;
}
declare var AWSDDLogger: {

	prototype: AWSDDLogger;
};

declare class AWSDDLoggerInformation extends NSObject {

	static alloc(): AWSDDLoggerInformation; // inherited from NSObject

	static informationWithLoggerAndLevel(logger: AWSDDLogger, level: AWSDDLogLevel): AWSDDLoggerInformation;

	static new(): AWSDDLoggerInformation; // inherited from NSObject

	readonly level: AWSDDLogLevel;

	readonly logger: AWSDDLogger;
}

declare class AWSDDMultiFormatter extends NSObject implements AWSDDLogFormatter {

	static alloc(): AWSDDMultiFormatter; // inherited from NSObject

	static new(): AWSDDMultiFormatter; // inherited from NSObject

	readonly formatters: NSArray<AWSDDLogFormatter>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addFormatter(formatter: AWSDDLogFormatter): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddToLogger(logger: AWSDDLogger): void;

	didAddToLoggerInQueue(logger: AWSDDLogger, queue: NSObject): void;

	formatLogMessage(logMessage: AWSDDLogMessage): string;

	isEqual(object: any): boolean;

	isFormattingWithFormatter(formatter: AWSDDLogFormatter): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeAllFormatters(): void;

	removeFormatter(formatter: AWSDDLogFormatter): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveFromLogger(logger: AWSDDLogger): void;
}

declare class AWSDDOSLogger extends AWSDDAbstractLogger implements AWSDDLogger {

	static alloc(): AWSDDOSLogger; // inherited from NSObject

	static new(): AWSDDOSLogger; // inherited from NSObject

	static readonly sharedInstance: AWSDDOSLogger;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFormatter: AWSDDLogFormatter; // inherited from AWSDDLogger

	readonly loggerName: string; // inherited from AWSDDLogger

	readonly loggerQueue: NSObject; // inherited from AWSDDLogger

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddLogger(): void;

	didAddLoggerInQueue(queue: NSObject): void;

	flush(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logMessage(logMessage: AWSDDLogMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	willRemoveLogger(): void;
}

interface AWSDDRegisteredDynamicLogging {
}
declare var AWSDDRegisteredDynamicLogging: {

	prototype: AWSDDRegisteredDynamicLogging;
};

declare class AWSDDTTYLogger extends AWSDDAbstractLogger implements AWSDDLogger {

	static alloc(): AWSDDTTYLogger; // inherited from NSObject

	static new(): AWSDDTTYLogger; // inherited from NSObject

	automaticallyAppendNewlineForCustomFormatters: boolean;

	colorsEnabled: boolean;

	static readonly sharedInstance: AWSDDTTYLogger;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	logFormatter: AWSDDLogFormatter; // inherited from AWSDDLogger

	readonly loggerName: string; // inherited from AWSDDLogger

	readonly loggerQueue: NSObject; // inherited from AWSDDLogger

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearAllColors(): void;

	clearColorsForAllFlags(): void;

	clearColorsForAllTags(): void;

	clearColorsForFlag(mask: AWSDDLogFlag): void;

	clearColorsForFlagContext(mask: AWSDDLogFlag, context: number): void;

	clearColorsForTag(tag: any): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didAddLogger(): void;

	didAddLoggerInQueue(queue: NSObject): void;

	flush(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	logMessage(logMessage: AWSDDLogMessage): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setForegroundColorBackgroundColorForFlag(txtColor: UIColor, bgColor: UIColor, mask: AWSDDLogFlag): void;

	setForegroundColorBackgroundColorForFlagContext(txtColor: UIColor, bgColor: UIColor, mask: AWSDDLogFlag, ctxt: number): void;

	setForegroundColorBackgroundColorForTag(txtColor: UIColor, bgColor: UIColor, tag: any): void;

	willRemoveLogger(): void;
}

declare var AWSDateISO8601DateFormat1: string;

declare var AWSDateISO8601DateFormat2: string;

declare var AWSDateISO8601DateFormat3: string;

declare var AWSDateRFC822DateFormat1: string;

declare var AWSDateShortDateFormat1: string;

declare var AWSDateShortDateFormat2: string;

declare class AWSEC2ParamBuilder extends NSObject {

	static alloc(): AWSEC2ParamBuilder; // inherited from NSObject

	static buildFormattedParamsActionNameServiceDefinitionRuleError(params: NSDictionary<any, any>, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSDictionary<any, any>;

	static new(): AWSEC2ParamBuilder; // inherited from NSObject
}

declare var AWSEC2ParamBuilderErrorDomain: string;

declare const enum AWSEC2ParamBuilderErrorType {

	UnknownError = 0,

	DefinitionFileIsEmpty = 1,

	UndefinedActionRule = 2,

	InternalError = 3,

	InvalidParameter = 4
}

declare class AWSEndpoint extends NSObject {

	static alloc(): AWSEndpoint; // inherited from NSObject

	static new(): AWSEndpoint; // inherited from NSObject

	static regionNameFromType(regionType: AWSRegionType): string;

	readonly URL: NSURL;

	readonly hostName: string;

	readonly portNumber: number;

	readonly regionName: string;

	readonly regionType: AWSRegionType;

	readonly serviceName: string;

	readonly serviceType: AWSServiceType;

	readonly useUnsafeURL: boolean;

	constructor(o: { localEndpointWithRegion: AWSRegionType; service: AWSServiceType; useUnsafeURL: boolean; });

	constructor(o: { region: AWSRegionType; serviceName: string; URL: NSURL; });

	constructor(o: { region: AWSRegionType; service: AWSServiceType; URL: NSURL; });

	constructor(o: { region: AWSRegionType; service: AWSServiceType; useUnsafeURL: boolean; });

	constructor(o: { URL: NSURL; });

	constructor(o: { URLString: string; });

	initLocalEndpointWithRegionServiceUseUnsafeURL(regionType: AWSRegionType, serviceType: AWSServiceType, useUnsafeURL: boolean): this;

	initWithRegionServiceNameURL(regionType: AWSRegionType, serviceName: string, URL: NSURL): this;

	initWithRegionServiceURL(regionType: AWSRegionType, serviceType: AWSServiceType, URL: NSURL): this;

	initWithRegionServiceUseUnsafeURL(regionType: AWSRegionType, serviceType: AWSServiceType, useUnsafeURL: boolean): this;

	initWithURL(URL: NSURL): this;

	initWithURLString(URLString: string): this;
}

declare class AWSExecutor extends NSObject {

	static alloc(): AWSExecutor; // inherited from NSObject

	static defaultExecutor(): AWSExecutor;

	static executorWithBlock(block: (p1: () => void) => void): AWSExecutor;

	static executorWithDispatchQueue(queue: NSObject): AWSExecutor;

	static executorWithOperationQueue(queue: NSOperationQueue): AWSExecutor;

	static immediateExecutor(): AWSExecutor;

	static mainThreadExecutor(): AWSExecutor;

	static new(): AWSExecutor; // inherited from NSObject

	execute(block: () => void): void;
}

declare class AWSFMDatabase extends NSObject {

	static AWSFMDBUserVersion(): string;

	static AWSFMDBVersion(): number;

	static alloc(): AWSFMDatabase; // inherited from NSObject

	static databaseWithPath(inPath: string): AWSFMDatabase;

	static isSQLiteThreadSafe(): boolean;

	static new(): AWSFMDatabase; // inherited from NSObject

	static sqliteLibVersion(): string;

	static storeableDateFormat(format: string): NSDateFormatter;

	cachedStatements: NSMutableDictionary<any, any>;

	checkedOut: boolean;

	crashOnErrors: boolean;

	logsErrors: boolean;

	traceExecution: boolean;

	constructor(o: { path: string; });

	applicationID(): number;

	beginDeferredTransaction(): boolean;

	beginTransaction(): boolean;

	changes(): number;

	clearCachedStatements(): void;

	close(): boolean;

	closeOpenResultSets(): void;

	columnExistsColumnName(tableName: string, columnName: string): boolean;

	columnExistsInTableWithName(columnName: string, tableName: string): boolean;

	commit(): boolean;

	databasePath(): string;

	dateFromString(s: string): Date;

	executeQueryWithArgumentsInArray(sql: string, _arguments: NSArray<any> | any[]): AWSFMResultSet;

	executeQueryWithParameterDictionary(sql: string, _arguments: NSDictionary<any, any>): AWSFMResultSet;

	executeStatements(sql: string): boolean;

	executeStatementsWithResultBlock(sql: string, block: (p1: NSDictionary<any, any>) => number): boolean;

	executeUpdateWithArgumentsInArray(sql: string, _arguments: NSArray<any> | any[]): boolean;

	executeUpdateWithParameterDictionary(sql: string, _arguments: NSDictionary<any, any>): boolean;

	getSchema(): AWSFMResultSet;

	getTableSchema(tableName: string): AWSFMResultSet;

	goodConnection(): boolean;

	hadError(): boolean;

	hasDateFormatter(): boolean;

	hasOpenResultSets(): boolean;

	inSavePoint(block: (p1: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(): boolean;

	initWithPath(inPath: string): this;

	lastError(): NSError;

	lastErrorCode(): number;

	lastErrorMessage(): string;

	lastInsertRowId(): number;

	makeFunctionNamedMaximumArgumentsWithBlock(name: string, count: number, block: (p1: interop.Pointer | interop.Reference<any>, p2: number, p3: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>) => void): void;

	maxBusyRetryTimeInterval(): number;

	open(): boolean;

	openWithFlags(flags: number): boolean;

	openWithFlagsVfs(flags: number, vfsName: string): boolean;

	rekey(key: string): boolean;

	rekeyWithData(keyData: NSData): boolean;

	releaseSavePointWithNameError(name: string): boolean;

	rollback(): boolean;

	rollbackToSavePointWithNameError(name: string): boolean;

	setApplicationID(appID: number): void;

	setDateFormat(format: NSDateFormatter): void;

	setKey(key: string): boolean;

	setKeyWithData(keyData: NSData): boolean;

	setMaxBusyRetryTimeInterval(timeoutInSeconds: number): void;

	setShouldCacheStatements(value: boolean): void;

	setUserVersion(version: number): void;

	shouldCacheStatements(): boolean;

	sqliteHandle(): interop.Pointer | interop.Reference<any>;

	startSavePointWithNameError(name: string): boolean;

	stringFromDate(date: Date): string;

	tableExists(tableName: string): boolean;

	userVersion(): number;

	validateSQLError(sql: string): boolean;
}

declare class AWSFMDatabasePool extends NSObject {

	static alloc(): AWSFMDatabasePool; // inherited from NSObject

	static databasePoolWithPath(aPath: string): AWSFMDatabasePool;

	static databasePoolWithPathFlags(aPath: string, openFlags: number): AWSFMDatabasePool;

	static new(): AWSFMDatabasePool; // inherited from NSObject

	static serialDatabasePoolWithPath(aPath: string): AWSFMDatabasePool;

	delegate: any;

	maximumNumberOfDatabasesToCreate: number;

	readonly openFlags: number;

	path: string;

	constructor(o: { path: string; });

	constructor(o: { path: string; flags: number; });

	countOfCheckedInDatabases(): number;

	countOfCheckedOutDatabases(): number;

	countOfOpenDatabases(): number;

	inDatabase(block: (p1: AWSFMDatabase) => void): void;

	inDeferredTransaction(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	inSavePoint(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	initWithPath(aPath: string): this;

	initWithPathFlags(aPath: string, openFlags: number): this;

	releaseAllDatabases(): void;
}

declare class AWSFMDatabaseQueue extends NSObject {

	static alloc(): AWSFMDatabaseQueue; // inherited from NSObject

	static databaseClass(): typeof NSObject;

	static databaseQueueWithPath(aPath: string): AWSFMDatabaseQueue;

	static databaseQueueWithPathFlags(aPath: string, openFlags: number): AWSFMDatabaseQueue;

	static new(): AWSFMDatabaseQueue; // inherited from NSObject

	static serialDatabaseQueueWithPath(aPath: string): AWSFMDatabaseQueue;

	readonly openFlags: number;

	path: string;

	constructor(o: { path: string; });

	constructor(o: { path: string; flags: number; });

	constructor(o: { path: string; flags: number; vfs: string; });

	close(): void;

	inDatabase(block: (p1: AWSFMDatabase) => void): void;

	inDeferredTransaction(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	inSavePoint(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(block: (p1: AWSFMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	initWithPath(aPath: string): this;

	initWithPathFlags(aPath: string, openFlags: number): this;

	initWithPathFlagsVfs(aPath: string, openFlags: number, vfsName: string): this;
}

declare class AWSFMResultSet extends NSObject {

	static alloc(): AWSFMResultSet; // inherited from NSObject

	static new(): AWSFMResultSet; // inherited from NSObject

	static resultSetWithStatementUsingParentDatabase(statement: AWSFMStatement, aDB: AWSFMDatabase): AWSFMResultSet;

	readonly columnNameToIndexMap: NSMutableDictionary<any, any>;

	query: string;

	statement: AWSFMStatement;
	[index: number]: any;

	UTF8StringForColumnIndex(columnIdx: number): string;

	UTF8StringForColumnName(columnName: string): string;

	boolForColumn(columnName: string): boolean;

	boolForColumnIndex(columnIdx: number): boolean;

	close(): void;

	columnCount(): number;

	columnIndexForName(columnName: string): number;

	columnIndexIsNull(columnIdx: number): boolean;

	columnIsNull(columnName: string): boolean;

	columnNameForIndex(columnIdx: number): string;

	dataForColumn(columnName: string): NSData;

	dataForColumnIndex(columnIdx: number): NSData;

	dataNoCopyForColumn(columnName: string): NSData;

	dataNoCopyForColumnIndex(columnIdx: number): NSData;

	dateForColumn(columnName: string): Date;

	dateForColumnIndex(columnIdx: number): Date;

	doubleForColumn(columnName: string): number;

	doubleForColumnIndex(columnIdx: number): number;

	hasAnotherRow(): boolean;

	intForColumn(columnName: string): number;

	intForColumnIndex(columnIdx: number): number;

	kvcMagic(object: any): void;

	longForColumn(columnName: string): number;

	longForColumnIndex(columnIdx: number): number;

	longLongIntForColumn(columnName: string): number;

	longLongIntForColumnIndex(columnIdx: number): number;

	next(): boolean;

	nextWithError(): boolean;

	objectAtIndexedSubscript(columnIdx: number): any;

	objectForColumnIndex(columnIdx: number): any;

	objectForColumnName(columnName: string): any;

	objectForKeyedSubscript(columnName: string): any;

	resultDict(): NSDictionary<any, any>;

	resultDictionary(): NSDictionary<any, any>;

	setParentDB(newDb: AWSFMDatabase): void;

	stringForColumn(columnName: string): string;

	stringForColumnIndex(columnIdx: number): string;

	unsignedLongLongIntForColumn(columnName: string): number;

	unsignedLongLongIntForColumnIndex(columnIdx: number): number;
}

declare class AWSFMStatement extends NSObject {

	static alloc(): AWSFMStatement; // inherited from NSObject

	static new(): AWSFMStatement; // inherited from NSObject

	inUse: boolean;

	query: string;

	statement: interop.Pointer | interop.Reference<any>;

	useCount: number;

	close(): void;

	reset(): void;
}

declare const enum AWSHTTPMethod {

	Unknown = 0,

	GET = 1,

	HEAD = 2,

	POST = 3,

	PUT = 4,

	PATCH = 5,

	DELETE = 6
}

interface AWSHTTPURLResponseSerializer extends NSObjectProtocol {

	responseObjectForResponseOriginalRequestCurrentRequestDataError(response: NSHTTPURLResponse, originalRequest: NSURLRequest, currentRequest: NSURLRequest, data: any): any;

	validateResponseFromRequestDataError(response: NSHTTPURLResponse, request: NSURLRequest, data: any): boolean;
}
declare var AWSHTTPURLResponseSerializer: {

	prototype: AWSHTTPURLResponseSerializer;
};

interface AWSIdentityProvider extends NSObjectProtocol {

	identityProviderName: string;

	token(): AWSTask<string>;
}
declare var AWSIdentityProvider: {

	prototype: AWSIdentityProvider;
};

declare var AWSIdentityProviderAmazonCognitoIdentity: string;

declare var AWSIdentityProviderApple: string;

declare var AWSIdentityProviderDigits: string;

declare var AWSIdentityProviderFacebook: string;

declare var AWSIdentityProviderGoogle: string;

declare var AWSIdentityProviderLoginWithAmazon: string;

interface AWSIdentityProviderManager extends NSObjectProtocol {

	customRoleArn?: string;

	logins(): AWSTask<NSDictionary<string, string>>;
}
declare var AWSIdentityProviderManager: {

	prototype: AWSIdentityProviderManager;
};

declare var AWSIdentityProviderTwitter: string;

declare class AWSInfo extends NSObject {

	static alloc(): AWSInfo; // inherited from NSObject

	static configureDefaultAWSInfo(config: NSDictionary<string, any>): void;

	static configureIdentityPoolService(config: AWSServiceConfiguration): void;

	static defaultAWSInfo(): AWSInfo;

	static new(): AWSInfo; // inherited from NSObject

	readonly rootInfoDictionary: NSDictionary<string, any>;

	defaultServiceInfo(serviceName: string): AWSServiceInfo;

	serviceInfoForKey(serviceName: string, key: string): AWSServiceInfo;
}

declare var AWSInfoDefault: string;

declare class AWSJSONBuilder extends NSObject {

	static alloc(): AWSJSONBuilder; // inherited from NSObject

	static jsonDataForDictionaryActionNameServiceDefinitionRuleError(params: NSDictionary<any, any>, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSData;

	static new(): AWSJSONBuilder; // inherited from NSObject
}

declare var AWSJSONBuilderErrorDomain: string;

declare const enum AWSJSONBuilderErrorType {

	UnknownError = 0,

	DefinitionFileIsEmpty = 1,

	UndefinedActionRule = 2,

	InternalError = 3,

	InvalidParameter = 4
}

declare class AWSJSONDictionary extends NSDictionary<NSObject, NSObject> {

	static alloc(): AWSJSONDictionary; // inherited from NSObject

	static dictionary(): AWSJSONDictionary; // inherited from NSDictionary

	static dictionaryWithDictionary(dict: NSDictionary<KeyType, ObjectType>): AWSJSONDictionary; // inherited from NSDictionary

	static dictionaryWithObjectForKey(object: ObjectType, key: KeyType): AWSJSONDictionary; // inherited from NSDictionary

	static dictionaryWithObjectsAndKeys(firstObject: any): AWSJSONDictionary; // inherited from NSDictionary

	static dictionaryWithObjectsForKeys(objects: NSArray<ObjectType> | ObjectType[], keys: NSArray<KeyType> | KeyType[]): AWSJSONDictionary; // inherited from NSDictionary

	static dictionaryWithObjectsForKeysCount(objects: interop.Reference<ObjectType>, keys: interop.Reference<KeyType>, cnt: number): AWSJSONDictionary; // inherited from NSDictionary

	static new(): AWSJSONDictionary; // inherited from NSObject

	constructor(o: { dictionary: NSDictionary<any, any>; JSONDefinitionRule: NSDictionary<any, any>; });

	count(): number;

	initWithDictionaryJSONDefinitionRule(otherDictionary: NSDictionary<any, any>, rule: NSDictionary<any, any>): this;

	objectForKey(aKey: any): any;
}

declare class AWSJSONParser extends NSObject {

	static alloc(): AWSJSONParser; // inherited from NSObject

	static dictionaryForJsonDataResponseActionNameServiceDefinitionRuleError(data: NSData, response: NSHTTPURLResponse, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSDictionary<any, any>;

	static new(): AWSJSONParser; // inherited from NSObject
}

declare var AWSJSONParserErrorDomain: string;

declare const enum AWSJSONParserErrorType {

	UnknownError = 0,

	DefinitionFileIsEmpty = 1,

	UndefinedActionRule = 2,

	InternalError = 3,

	InvalidParameter = 4
}

declare class AWSJSONRequestSerializer extends NSObject implements AWSURLRequestSerializer {

	static alloc(): AWSJSONRequestSerializer; // inherited from NSObject

	static new(): AWSJSONRequestSerializer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionName(JSONDefinition: NSDictionary<any, any>, actionName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serializeRequestHeadersParameters(request: NSMutableURLRequest, headers: NSDictionary<any, any>, parameters: NSDictionary<any, any>): AWSTask<any>;

	validateRequest(request: NSURLRequest): AWSTask<any>;
}

declare class AWSJSONResponseSerializer extends NSObject implements AWSHTTPURLResponseSerializer {

	static alloc(): AWSJSONResponseSerializer; // inherited from NSObject

	static new(): AWSJSONResponseSerializer; // inherited from NSObject

	readonly actionName: string;

	readonly outputClass: typeof NSObject;

	readonly serviceDefinitionJSON: NSDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; outputClass: typeof NSObject; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionNameOutputClass(JSONDefinition: NSDictionary<any, any>, actionName: string, outputClass: typeof NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	responseObjectForResponseOriginalRequestCurrentRequestDataError(response: NSHTTPURLResponse, originalRequest: NSURLRequest, currentRequest: NSURLRequest, data: any): any;

	retainCount(): number;

	self(): this;

	validateResponseFromRequestDataError(response: NSHTTPURLResponse, request: NSURLRequest, data: any): boolean;
}

declare class AWSKSReachability extends NSObject {

	static alloc(): AWSKSReachability; // inherited from NSObject

	static new(): AWSKSReachability; // inherited from NSObject

	static reachabilityToHost(hostname: string): AWSKSReachability;

	static reachabilityToInternet(): AWSKSReachability;

	static reachabilityToLocalNetwork(): AWSKSReachability;

	readonly WWANOnly: boolean;

	readonly flags: SCNetworkReachabilityFlags;

	readonly hostname: string;

	readonly initialized: boolean;

	notificationName: string;

	onInitializationComplete: (p1: AWSKSReachability) => void;

	onReachabilityChanged: (p1: AWSKSReachability) => void;

	readonly reachable: boolean;
}

declare class AWSKSReachableOperation extends NSObject {

	static alloc(): AWSKSReachableOperation; // inherited from NSObject

	static new(): AWSKSReachableOperation; // inherited from NSObject

	static operationWithHostAllowWWANOnReachabilityAchieved(hostname: string, allowWWAN: boolean, onReachabilityAchieved: () => void): AWSKSReachableOperation;

	static operationWithReachabilityAllowWWANOnReachabilityAchieved(reachability: AWSKSReachability, allowWWAN: boolean, onReachabilityAchieved: () => void): AWSKSReachableOperation;

	readonly reachability: AWSKSReachability;

	constructor(o: { host: string; allowWWAN: boolean; onReachabilityAchieved: () => void; });

	constructor(o: { reachability: AWSKSReachability; allowWWAN: boolean; onReachabilityAchieved: () => void; });

	initWithHostAllowWWANOnReachabilityAchieved(hostname: string, allowWWAN: boolean, onReachabilityAchieved: () => void): this;

	initWithReachabilityAllowWWANOnReachabilityAchieved(reachability: AWSKSReachability, allowWWAN: boolean, onReachabilityAchieved: () => void): this;
}

declare const enum AWSLogLevel {

	Unknown = -1,

	None = 0,

	Error = 1,

	Warn = 2,

	Info = 3,

	Debug = 4,

	Verbose = 5
}

declare class AWSLogger extends NSObject {

	static alloc(): AWSLogger; // inherited from NSObject

	static defaultLogger(): AWSLogger;

	static new(): AWSLogger; // inherited from NSObject

	logLevel: AWSLogLevel;
}

declare var AWSMTLBooleanValueTransformerName: string;

declare function AWSMTLEqualObjects(obj1: any, obj2: any): boolean;

declare class AWSMTLJSONAdapter extends NSObject {

	static JSONArrayFromModels(models: NSArray<any> | any[]): NSArray<any>;

	static JSONDictionaryFromModel(model: AWSMTLModel): NSDictionary<any, any>;

	static alloc(): AWSMTLJSONAdapter; // inherited from NSObject

	static modelOfClassFromJSONDictionary(modelClass: typeof NSObject, JSONDictionary: NSDictionary<any, any>): any;

	static modelOfClassFromJSONDictionaryError(modelClass: typeof NSObject, JSONDictionary: NSDictionary<any, any>): any;

	static modelsOfClassFromJSONArrayError(modelClass: typeof NSObject, JSONArray: NSArray<any> | any[]): NSArray<any>;

	static new(): AWSMTLJSONAdapter; // inherited from NSObject

	readonly model: AWSMTLModel;

	constructor(o: { JSONDictionary: NSDictionary<any, any>; modelClass: typeof NSObject; });

	constructor(o: { JSONDictionary: NSDictionary<any, any>; modelClass: typeof NSObject; });

	constructor(o: { model: AWSMTLModel; });

	JSONDictionary(): NSDictionary<any, any>;

	JSONKeyPathForPropertyKey(key: string): string;

	initWithJSONDictionaryModelClass(JSONDictionary: NSDictionary<any, any>, modelClass: typeof NSObject): this;

	initWithJSONDictionaryModelClassError(JSONDictionary: NSDictionary<any, any>, modelClass: typeof NSObject): this;

	initWithModel(model: AWSMTLModel): this;
}

declare var AWSMTLJSONAdapterErrorDomain: string;

declare var AWSMTLJSONAdapterErrorInvalidJSONDictionary: number;

declare var AWSMTLJSONAdapterErrorInvalidJSONMapping: number;

declare var AWSMTLJSONAdapterErrorNoClassFound: number;

interface AWSMTLJSONSerializing {
}
declare var AWSMTLJSONSerializing: {

	prototype: AWSMTLJSONSerializing;

	JSONKeyPathsByPropertyKey(): NSDictionary<any, any>;

	JSONTransformerForKey?(key: string): NSValueTransformer;

	classForParsingJSONDictionary?(JSONDictionary: NSDictionary<any, any>): typeof NSObject;
};

declare class AWSMTLManagedObjectAdapter extends NSObject {

	static alloc(): AWSMTLManagedObjectAdapter; // inherited from NSObject

	static managedObjectFromModelInsertingIntoContextError(model: AWSMTLModel, context: NSManagedObjectContext): any;

	static modelOfClassFromManagedObjectError(modelClass: typeof NSObject, managedObject: NSManagedObject): any;

	static new(): AWSMTLManagedObjectAdapter; // inherited from NSObject
}

declare var AWSMTLManagedObjectAdapterErrorDomain: string;

declare var AWSMTLManagedObjectAdapterErrorInitializationFailed: number;

declare var AWSMTLManagedObjectAdapterErrorInvalidManagedObjectKey: number;

declare var AWSMTLManagedObjectAdapterErrorInvalidManagedObjectMapping: number;

declare var AWSMTLManagedObjectAdapterErrorNoClassFound: number;

declare var AWSMTLManagedObjectAdapterErrorUniqueFetchRequestFailed: number;

declare var AWSMTLManagedObjectAdapterErrorUnsupportedManagedObjectPropertyType: number;

declare var AWSMTLManagedObjectAdapterErrorUnsupportedRelationshipClass: number;

interface AWSMTLManagedObjectSerializing {

	mergeValueForKeyFromManagedObject?(key: string, managedObject: NSManagedObject): void;

	mergeValuesForKeysFromManagedObject?(managedObject: NSManagedObject): void;
}
declare var AWSMTLManagedObjectSerializing: {

	prototype: AWSMTLManagedObjectSerializing;

	classForDeserializingManagedObject?(managedObject: NSManagedObject): typeof NSObject;

	entityAttributeTransformerForKey?(key: string): NSValueTransformer;

	managedObjectEntityName(): string;

	managedObjectKeysByPropertyKey(): NSDictionary<any, any>;

	propertyKeysForManagedObjectUniquing?(): NSSet<any>;

	relationshipModelClassesByPropertyKey?(): NSDictionary<any, any>;
};

declare class AWSMTLModel extends NSObject implements NSCoding, NSCopying {

	static alloc(): AWSMTLModel; // inherited from NSObject

	static allowedSecureCodingClassesByPropertyKey(): NSDictionary<any, any>;

	static dictionaryValueFromArchivedExternalRepresentationVersion(externalRepresentation: NSDictionary<any, any>, fromVersion: number): NSDictionary<any, any>;

	static encodingBehaviorsByPropertyKey(): NSDictionary<any, any>;

	static externalRepresentationKeyPathsByPropertyKey(): NSDictionary<any, any>;

	static migrateExternalRepresentationFromVersion(externalRepresentation: NSDictionary<any, any>, fromVersion: number): NSDictionary<any, any>;

	static modelVersion(): number;

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSMTLModel;

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSMTLModel;

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSMTLModel;

	static new(): AWSMTLModel; // inherited from NSObject

	static propertyKeys(): NSSet<any>;

	static transformerForKey(key: string): NSValueTransformer;

	readonly dictionaryValue: NSDictionary<any, any>;

	readonly externalRepresentation: NSDictionary<any, any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { dictionary: NSDictionary<any, any>; });

	constructor(o: { externalRepresentation: NSDictionary<any, any>; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	decodeValueForKeyWithCoderModelVersion(key: string, coder: NSCoder, modelVersion: number): any;

	description(): string;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;

	initWithDictionary(dictionaryValue: NSDictionary<any, any>): this;

	initWithDictionaryError(dictionaryValue: NSDictionary<any, any>): this;

	initWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): this;

	mergeValueForKeyFromModel(key: string, model: AWSMTLModel): void;

	mergeValuesForKeysFromModel(model: AWSMTLModel): void;

	validate(): boolean;
}

declare const enum AWSMTLModelEncodingBehavior {

	Excluded = 0,

	Unconditional = 1,

	Conditional = 2
}

declare function AWSMTLSelectorWithCapitalizedKeyPattern(prefix: string | interop.Pointer | interop.Reference<any>, key: string, suffix: string | interop.Pointer | interop.Reference<any>): string;

declare function AWSMTLSelectorWithKeyPattern(key: string, suffix: string | interop.Pointer | interop.Reference<any>): string;

declare var AWSMTLURLValueTransformerName: string;

declare class AWSMTLValueTransformer extends NSValueTransformer {

	static alloc(): AWSMTLValueTransformer; // inherited from NSObject

	static new(): AWSMTLValueTransformer; // inherited from NSObject

	static reversibleTransformerWithBlock(transformationBlock: (p1: any) => any): AWSMTLValueTransformer;

	static reversibleTransformerWithForwardBlockReverseBlock(forwardBlock: (p1: any) => any, reverseBlock: (p1: any) => any): AWSMTLValueTransformer;

	static transformerWithBlock(transformationBlock: (p1: any) => any): AWSMTLValueTransformer;
}

declare var AWSMantleVersionNumber: number;

declare var AWSMantleVersionString: interop.Reference<number>;

declare class AWSModel extends AWSMTLModel implements AWSMTLJSONSerializing {

	static JSONKeyPathsByPropertyKey(): NSDictionary<any, any>;

	static JSONTransformerForKey(key: string): NSValueTransformer;

	static alloc(): AWSModel; // inherited from NSObject

	static classForParsingJSONDictionary(JSONDictionary: NSDictionary<any, any>): typeof NSObject;

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSModel; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSModel; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSModel; // inherited from AWSMTLModel

	static new(): AWSModel; // inherited from NSObject
}

declare class AWSModelUtility extends NSObject {

	static JSONArrayDictionaryFromMapMTLDictionaryArrayElementType(mapMTLDictionary: NSDictionary<any, any>, arrayElementType: string): NSDictionary<any, any>;

	static JSONArrayFromMapMTLArray(mapMTLArray: NSArray<any> | any[]): NSArray<any>;

	static JSONDictionaryFromMapMTLDictionary(mapMTLDictionary: NSDictionary<any, any>): NSDictionary<any, any>;

	static alloc(): AWSModelUtility; // inherited from NSObject

	static mapMTLArrayFromJSONArrayWithModelClass(JSONArray: NSArray<any> | any[], modelClass: typeof NSObject): NSArray<any>;

	static mapMTLDictionaryFromJSONArrayDictionaryArrayElementTypeWithModelClass(JSONArrayDictionary: NSDictionary<any, any>, arrayElementType: string, modelClass: typeof NSObject): NSDictionary<any, any>;

	static mapMTLDictionaryFromJSONDictionaryWithModelClass(JSONDictionary: NSDictionary<any, any>, modelClass: typeof NSObject): NSDictionary<any, any>;

	static new(): AWSModelUtility; // inherited from NSObject
}

declare class AWSNSCodingUtilities extends NSObject {

	static alloc(): AWSNSCodingUtilities; // inherited from NSObject

	static new(): AWSNSCodingUtilities; // inherited from NSObject

	static versionSafeArchivedDataWithRootObjectRequiringSecureCodingError(obj: any, requireSecureCoding: boolean): NSData;

	static versionSafeMutableDictionaryFromDataError(data: NSData): NSMutableDictionary<any, any>;

	static versionSafeUnarchivedObjectOfClassFromDataError(cls: typeof NSObject, data: NSData): any;

	static versionSafeUnarchivedObjectOfClassesFromDataError(classes: NSSet<typeof NSObject>, data: NSData): any;
}

declare class AWSNetworking extends NSObject {

	static alloc(): AWSNetworking; // inherited from NSObject

	static new(): AWSNetworking; // inherited from NSObject

	constructor(o: { configuration: AWSNetworkingConfiguration; });

	initWithConfiguration(configuration: AWSNetworkingConfiguration): this;

	sendRequest(request: AWSNetworkingRequest): AWSTask<any>;
}

declare class AWSNetworkingConfiguration extends NSObject implements NSCopying {

	static alloc(): AWSNetworkingConfiguration; // inherited from NSObject

	static new(): AWSNetworkingConfiguration; // inherited from NSObject

	HTTPMethod: AWSHTTPMethod;

	readonly URL: NSURL;

	URLString: string;

	allowsCellularAccess: boolean;

	baseURL: NSURL;

	headers: NSDictionary<any, any>;

	maxRetryCount: number;

	requestInterceptors: NSArray<AWSNetworkingRequestInterceptorProtocol>;

	requestSerializer: AWSURLRequestSerializer;

	responseInterceptors: NSArray<AWSNetworkingHTTPResponseInterceptor>;

	responseSerializer: AWSHTTPURLResponseSerializer;

	retryHandler: AWSURLRequestRetryHandlerProtocol;

	sharedContainerIdentifier: string;

	timeoutIntervalForRequest: number;

	timeoutIntervalForResource: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare var AWSNetworkingErrorDomain: string;

declare const enum AWSNetworkingErrorType {

	Unknown = 0,

	Cancelled = 1,

	SessionInvalid = 2
}

interface AWSNetworkingHTTPResponseInterceptor extends NSObjectProtocol {

	interceptResponseDataOriginalRequestCurrentRequest(response: NSHTTPURLResponse, data: any, originalRequest: NSURLRequest, currentRequest: NSURLRequest): AWSTask<any>;
}
declare var AWSNetworkingHTTPResponseInterceptor: {

	prototype: AWSNetworkingHTTPResponseInterceptor;
};

declare class AWSNetworkingHelpers extends NSObject {

	static alloc(): AWSNetworkingHelpers; // inherited from NSObject

	static new(): AWSNetworkingHelpers; // inherited from NSObject

	static queryItemsFromDictionary(requestParameters: NSDictionary<string, any>): NSArray<NSURLQueryItem>;
}

declare class AWSNetworkingRequest extends AWSNetworkingConfiguration {

	static alloc(): AWSNetworkingRequest; // inherited from NSObject

	static new(): AWSNetworkingRequest; // inherited from NSObject

	readonly cancelled: boolean;

	downloadProgress: (p1: number, p2: number, p3: number) => void;

	downloadingFileURL: NSURL;

	parameters: NSDictionary<any, any>;

	shouldWriteDirectly: boolean;

	readonly task: NSURLSessionTask;

	uploadProgress: (p1: number, p2: number, p3: number) => void;

	uploadingFileURL: NSURL;

	assignProperties(configuration: AWSNetworkingConfiguration): void;

	cancel(): void;

	pause(): void;
}

declare class AWSNetworkingRequestInterceptor extends NSObject implements AWSNetworkingRequestInterceptorProtocol {

	static alloc(): AWSNetworkingRequestInterceptor; // inherited from NSObject

	static new(): AWSNetworkingRequestInterceptor; // inherited from NSObject

	readonly userAgent: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { userAgent: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithUserAgent(userAgent: string): this;

	interceptRequest(request: NSMutableURLRequest): AWSTask<any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface AWSNetworkingRequestInterceptorProtocol extends NSObjectProtocol {

	interceptRequest(request: NSMutableURLRequest): AWSTask<any>;
}
declare var AWSNetworkingRequestInterceptorProtocol: {

	prototype: AWSNetworkingRequestInterceptorProtocol;
};

declare const enum AWSNetworkingRetryType {

	Unknown = 0,

	ShouldNotRetry = 1,

	ShouldRetry = 2,

	ShouldRefreshCredentialsAndRetry = 3,

	ShouldCorrectClockSkewAndRetry = 4,

	ResetStreamAndRetry = 5
}

declare class AWSQueryParamBuilder extends NSObject {

	static alloc(): AWSQueryParamBuilder; // inherited from NSObject

	static buildFormattedParamsActionNameServiceDefinitionRuleError(params: NSDictionary<any, any>, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSDictionary<any, any>;

	static new(): AWSQueryParamBuilder; // inherited from NSObject
}

declare var AWSQueryParamBuilderErrorDomain: string;

declare const enum AWSQueryParamBuilderErrorType {

	UnknownError = 0,

	DefinitionFileIsEmpty = 1,

	UndefinedActionRule = 2,

	InternalError = 3,

	InvalidParameter = 4
}

declare class AWSQueryStringRequestSerializer extends NSObject implements AWSURLRequestSerializer {

	static alloc(): AWSQueryStringRequestSerializer; // inherited from NSObject

	static new(): AWSQueryStringRequestSerializer; // inherited from NSObject

	additionalParameters: NSDictionary<any, any>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionName(JSONDefinition: NSDictionary<any, any>, actionName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serializeRequestHeadersParameters(request: NSMutableURLRequest, headers: NSDictionary<any, any>, parameters: NSDictionary<any, any>): AWSTask<any>;

	validateRequest(request: NSURLRequest): AWSTask<any>;
}

declare const enum AWSRegionType {

	Unknown = 0,

	USEast1 = 1,

	USEast2 = 2,

	USWest1 = 3,

	USWest2 = 4,

	EUWest1 = 5,

	EUWest2 = 6,

	EUCentral1 = 7,

	APSoutheast1 = 8,

	APNortheast1 = 9,

	APNortheast2 = 10,

	APSoutheast2 = 11,

	APSouth1 = 12,

	SAEast1 = 13,

	CNNorth1 = 14,

	CACentral1 = 15,

	USGovWest1 = 16,

	CNNorthWest1 = 17,

	EUWest3 = 18,

	USGovEast1 = 19,

	EUNorth1 = 20,

	APEast1 = 21,

	MESouth1 = 22,

	AFSouth1 = 23,

	EUSouth1 = 24
}

declare class AWSRequest extends AWSModel {

	static alloc(): AWSRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSRequest; // inherited from AWSMTLModel

	static new(): AWSRequest; // inherited from NSObject

	readonly cancelled: boolean;

	downloadProgress: (p1: number, p2: number, p3: number) => void;

	downloadingFileURL: NSURL;

	uploadProgress: (p1: number, p2: number, p3: number) => void;

	cancel(): AWSTask<any>;

	pause(): AWSTask<any>;
}

declare var AWSResponseObjectErrorUserInfoKey: string;

declare class AWSS3ChunkedEncodingInputStream extends NSInputStream implements NSStreamDelegate {

	static alloc(): AWSS3ChunkedEncodingInputStream; // inherited from NSObject

	static computeContentLengthForChunkedData(dataLength: number): number;

	static inputStreamWithData(data: NSData): AWSS3ChunkedEncodingInputStream; // inherited from NSInputStream

	static inputStreamWithFileAtPath(path: string): AWSS3ChunkedEncodingInputStream; // inherited from NSInputStream

	static inputStreamWithURL(url: NSURL): AWSS3ChunkedEncodingInputStream; // inherited from NSInputStream

	static new(): AWSS3ChunkedEncodingInputStream; // inherited from NSObject

	totalLengthOfChunkSignatureSent: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { inputStream: NSInputStream; date: Date; scope: string; kSigning: NSData; headerSignature: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithInputStreamDateScopeKSigningHeaderSignature(stream: NSInputStream, date: Date, scope: string, kSigning: NSData, headerSignature: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	streamHandleEvent(aStream: NSStream, eventCode: NSStreamEvent): void;
}

declare class AWSSTS extends AWSService {

	static STSForKey(key: string): AWSSTS;

	static alloc(): AWSSTS; // inherited from NSObject

	static defaultSTS(): AWSSTS;

	static new(): AWSSTS; // inherited from NSObject

	static registerSTSWithConfigurationForKey(configuration: AWSServiceConfiguration, key: string): void;

	static removeSTSForKey(key: string): void;

	readonly configuration: AWSServiceConfiguration;

	assumeRole(request: AWSSTSAssumeRoleRequest): AWSTask<AWSSTSAssumeRoleResponse>;

	assumeRoleCompletionHandler(request: AWSSTSAssumeRoleRequest, completionHandler: (p1: AWSSTSAssumeRoleResponse, p2: NSError) => void): void;

	assumeRoleWithSAML(request: AWSSTSAssumeRoleWithSAMLRequest): AWSTask<AWSSTSAssumeRoleWithSAMLResponse>;

	assumeRoleWithSAMLCompletionHandler(request: AWSSTSAssumeRoleWithSAMLRequest, completionHandler: (p1: AWSSTSAssumeRoleWithSAMLResponse, p2: NSError) => void): void;

	assumeRoleWithWebIdentity(request: AWSSTSAssumeRoleWithWebIdentityRequest): AWSTask<AWSSTSAssumeRoleWithWebIdentityResponse>;

	assumeRoleWithWebIdentityCompletionHandler(request: AWSSTSAssumeRoleWithWebIdentityRequest, completionHandler: (p1: AWSSTSAssumeRoleWithWebIdentityResponse, p2: NSError) => void): void;

	decodeAuthorizationMessage(request: AWSSTSDecodeAuthorizationMessageRequest): AWSTask<AWSSTSDecodeAuthorizationMessageResponse>;

	decodeAuthorizationMessageCompletionHandler(request: AWSSTSDecodeAuthorizationMessageRequest, completionHandler: (p1: AWSSTSDecodeAuthorizationMessageResponse, p2: NSError) => void): void;

	getAccessKeyInfo(request: AWSSTSGetAccessKeyInfoRequest): AWSTask<AWSSTSGetAccessKeyInfoResponse>;

	getAccessKeyInfoCompletionHandler(request: AWSSTSGetAccessKeyInfoRequest, completionHandler: (p1: AWSSTSGetAccessKeyInfoResponse, p2: NSError) => void): void;

	getCallerIdentity(request: AWSSTSGetCallerIdentityRequest): AWSTask<AWSSTSGetCallerIdentityResponse>;

	getCallerIdentityCompletionHandler(request: AWSSTSGetCallerIdentityRequest, completionHandler: (p1: AWSSTSGetCallerIdentityResponse, p2: NSError) => void): void;

	getFederationToken(request: AWSSTSGetFederationTokenRequest): AWSTask<AWSSTSGetFederationTokenResponse>;

	getFederationTokenCompletionHandler(request: AWSSTSGetFederationTokenRequest, completionHandler: (p1: AWSSTSGetFederationTokenResponse, p2: NSError) => void): void;

	getSessionToken(request: AWSSTSGetSessionTokenRequest): AWSTask<AWSSTSGetSessionTokenResponse>;

	getSessionTokenCompletionHandler(request: AWSSTSGetSessionTokenRequest, completionHandler: (p1: AWSSTSGetSessionTokenResponse, p2: NSError) => void): void;
}

declare class AWSSTSAssumeRoleRequest extends AWSRequest {

	static alloc(): AWSSTSAssumeRoleRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleRequest; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleRequest; // inherited from NSObject

	durationSeconds: number;

	externalId: string;

	policy: string;

	policyArns: NSArray<AWSSTSPolicyDescriptorType>;

	roleArn: string;

	roleSessionName: string;

	serialNumber: string;

	tags: NSArray<AWSSTSTag>;

	tokenCode: string;

	transitiveTagKeys: NSArray<string>;
}

declare class AWSSTSAssumeRoleResponse extends AWSModel {

	static alloc(): AWSSTSAssumeRoleResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleResponse; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleResponse; // inherited from NSObject

	assumedRoleUser: AWSSTSAssumedRoleUser;

	credentials: AWSSTSCredentials;

	packedPolicySize: number;
}

declare class AWSSTSAssumeRoleWithSAMLRequest extends AWSRequest {

	static alloc(): AWSSTSAssumeRoleWithSAMLRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLRequest; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleWithSAMLRequest; // inherited from NSObject

	SAMLAssertion: string;

	durationSeconds: number;

	policy: string;

	policyArns: NSArray<AWSSTSPolicyDescriptorType>;

	principalArn: string;

	roleArn: string;
}

declare class AWSSTSAssumeRoleWithSAMLResponse extends AWSModel {

	static alloc(): AWSSTSAssumeRoleWithSAMLResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleWithSAMLResponse; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleWithSAMLResponse; // inherited from NSObject

	assumedRoleUser: AWSSTSAssumedRoleUser;

	audience: string;

	credentials: AWSSTSCredentials;

	issuer: string;

	nameQualifier: string;

	packedPolicySize: number;

	subject: string;

	subjectType: string;
}

declare class AWSSTSAssumeRoleWithWebIdentityRequest extends AWSRequest {

	static alloc(): AWSSTSAssumeRoleWithWebIdentityRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityRequest; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleWithWebIdentityRequest; // inherited from NSObject

	durationSeconds: number;

	policy: string;

	policyArns: NSArray<AWSSTSPolicyDescriptorType>;

	providerId: string;

	roleArn: string;

	roleSessionName: string;

	webIdentityToken: string;
}

declare class AWSSTSAssumeRoleWithWebIdentityResponse extends AWSModel {

	static alloc(): AWSSTSAssumeRoleWithWebIdentityResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumeRoleWithWebIdentityResponse; // inherited from AWSMTLModel

	static new(): AWSSTSAssumeRoleWithWebIdentityResponse; // inherited from NSObject

	assumedRoleUser: AWSSTSAssumedRoleUser;

	audience: string;

	credentials: AWSSTSCredentials;

	packedPolicySize: number;

	provider: string;

	subjectFromWebIdentityToken: string;
}

declare class AWSSTSAssumedRoleUser extends AWSModel {

	static alloc(): AWSSTSAssumedRoleUser; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumedRoleUser; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSAssumedRoleUser; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSAssumedRoleUser; // inherited from AWSMTLModel

	static new(): AWSSTSAssumedRoleUser; // inherited from NSObject

	arn: string;

	assumedRoleId: string;
}

declare class AWSSTSCredentials extends AWSModel {

	static alloc(): AWSSTSCredentials; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSCredentials; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSCredentials; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSCredentials; // inherited from AWSMTLModel

	static new(): AWSSTSCredentials; // inherited from NSObject

	accessKeyId: string;

	expiration: Date;

	secretAccessKey: string;

	sessionToken: string;
}

declare class AWSSTSDecodeAuthorizationMessageRequest extends AWSRequest {

	static alloc(): AWSSTSDecodeAuthorizationMessageRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageRequest; // inherited from AWSMTLModel

	static new(): AWSSTSDecodeAuthorizationMessageRequest; // inherited from NSObject

	encodedMessage: string;
}

declare class AWSSTSDecodeAuthorizationMessageResponse extends AWSModel {

	static alloc(): AWSSTSDecodeAuthorizationMessageResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSDecodeAuthorizationMessageResponse; // inherited from AWSMTLModel

	static new(): AWSSTSDecodeAuthorizationMessageResponse; // inherited from NSObject

	decodedMessage: string;
}

declare var AWSSTSErrorDomain: string;

declare const enum AWSSTSErrorType {

	Unknown = 0,

	ExpiredToken = 1,

	IDPCommunicationError = 2,

	IDPRejectedClaim = 3,

	InvalidAuthorizationMessage = 4,

	InvalidIdentityToken = 5,

	MalformedPolicyDocument = 6,

	PackedPolicyTooLarge = 7,

	RegionDisabled = 8
}

declare class AWSSTSFederatedUser extends AWSModel {

	static alloc(): AWSSTSFederatedUser; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSFederatedUser; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSFederatedUser; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSFederatedUser; // inherited from AWSMTLModel

	static new(): AWSSTSFederatedUser; // inherited from NSObject

	arn: string;

	federatedUserId: string;
}

declare class AWSSTSGetAccessKeyInfoRequest extends AWSRequest {

	static alloc(): AWSSTSGetAccessKeyInfoRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoRequest; // inherited from AWSMTLModel

	static new(): AWSSTSGetAccessKeyInfoRequest; // inherited from NSObject

	accessKeyId: string;
}

declare class AWSSTSGetAccessKeyInfoResponse extends AWSModel {

	static alloc(): AWSSTSGetAccessKeyInfoResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetAccessKeyInfoResponse; // inherited from AWSMTLModel

	static new(): AWSSTSGetAccessKeyInfoResponse; // inherited from NSObject

	account: string;
}

declare class AWSSTSGetCallerIdentityRequest extends AWSRequest {

	static alloc(): AWSSTSGetCallerIdentityRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetCallerIdentityRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetCallerIdentityRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetCallerIdentityRequest; // inherited from AWSMTLModel

	static new(): AWSSTSGetCallerIdentityRequest; // inherited from NSObject
}

declare class AWSSTSGetCallerIdentityResponse extends AWSModel {

	static alloc(): AWSSTSGetCallerIdentityResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetCallerIdentityResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetCallerIdentityResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetCallerIdentityResponse; // inherited from AWSMTLModel

	static new(): AWSSTSGetCallerIdentityResponse; // inherited from NSObject

	account: string;

	arn: string;

	userId: string;
}

declare class AWSSTSGetFederationTokenRequest extends AWSRequest {

	static alloc(): AWSSTSGetFederationTokenRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetFederationTokenRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetFederationTokenRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetFederationTokenRequest; // inherited from AWSMTLModel

	static new(): AWSSTSGetFederationTokenRequest; // inherited from NSObject

	durationSeconds: number;

	name: string;

	policy: string;

	policyArns: NSArray<AWSSTSPolicyDescriptorType>;

	tags: NSArray<AWSSTSTag>;
}

declare class AWSSTSGetFederationTokenResponse extends AWSModel {

	static alloc(): AWSSTSGetFederationTokenResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetFederationTokenResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetFederationTokenResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetFederationTokenResponse; // inherited from AWSMTLModel

	static new(): AWSSTSGetFederationTokenResponse; // inherited from NSObject

	credentials: AWSSTSCredentials;

	federatedUser: AWSSTSFederatedUser;

	packedPolicySize: number;
}

declare class AWSSTSGetSessionTokenRequest extends AWSRequest {

	static alloc(): AWSSTSGetSessionTokenRequest; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetSessionTokenRequest; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetSessionTokenRequest; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetSessionTokenRequest; // inherited from AWSMTLModel

	static new(): AWSSTSGetSessionTokenRequest; // inherited from NSObject

	durationSeconds: number;

	serialNumber: string;

	tokenCode: string;
}

declare class AWSSTSGetSessionTokenResponse extends AWSModel {

	static alloc(): AWSSTSGetSessionTokenResponse; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSGetSessionTokenResponse; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSGetSessionTokenResponse; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSGetSessionTokenResponse; // inherited from AWSMTLModel

	static new(): AWSSTSGetSessionTokenResponse; // inherited from NSObject

	credentials: AWSSTSCredentials;
}

declare class AWSSTSPolicyDescriptorType extends AWSModel {

	static alloc(): AWSSTSPolicyDescriptorType; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSPolicyDescriptorType; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSPolicyDescriptorType; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSPolicyDescriptorType; // inherited from AWSMTLModel

	static new(): AWSSTSPolicyDescriptorType; // inherited from NSObject

	arn: string;
}

declare class AWSSTSResources extends NSObject {

	static alloc(): AWSSTSResources; // inherited from NSObject

	static new(): AWSSTSResources; // inherited from NSObject

	static sharedInstance(): AWSSTSResources;

	JSONObject(): NSDictionary<any, any>;
}

declare class AWSSTSTag extends AWSModel {

	static alloc(): AWSSTSTag; // inherited from NSObject

	static modelWithDictionary(dictionaryValue: NSDictionary<any, any>): AWSSTSTag; // inherited from AWSMTLModel

	static modelWithDictionaryError(dictionaryValue: NSDictionary<any, any>): AWSSTSTag; // inherited from AWSMTLModel

	static modelWithExternalRepresentation(externalRepresentation: NSDictionary<any, any>): AWSSTSTag; // inherited from AWSMTLModel

	static new(): AWSSTSTag; // inherited from NSObject

	key: string;

	value: string;
}

declare class AWSService extends NSObject {

	static alloc(): AWSService; // inherited from NSObject

	static errorCodeDictionary(): NSDictionary<string, number>;

	static new(): AWSService; // inherited from NSObject
}

declare class AWSServiceConfiguration extends AWSNetworkingConfiguration {

	static addGlobalUserAgentProductToken(productToken: string): void;

	static alloc(): AWSServiceConfiguration; // inherited from NSObject

	static baseUserAgent(): string;

	static new(): AWSServiceConfiguration; // inherited from NSObject

	readonly credentialsProvider: AWSCredentialsProvider;

	readonly endpoint: AWSEndpoint;

	readonly localTestingEnabled: boolean;

	readonly regionType: AWSRegionType;

	readonly userAgent: string;

	constructor(o: { region: AWSRegionType; credentialsProvider: AWSCredentialsProvider; });

	constructor(o: { region: AWSRegionType; endpoint: AWSEndpoint; credentialsProvider: AWSCredentialsProvider; });

	constructor(o: { region: AWSRegionType; serviceType: AWSServiceType; credentialsProvider: AWSCredentialsProvider; localTestingEnabled: boolean; });

	addUserAgentProductToken(productToken: string): void;

	initWithRegionCredentialsProvider(regionType: AWSRegionType, credentialsProvider: AWSCredentialsProvider): this;

	initWithRegionEndpointCredentialsProvider(regionType: AWSRegionType, endpoint: AWSEndpoint, credentialsProvider: AWSCredentialsProvider): this;

	initWithRegionServiceTypeCredentialsProviderLocalTestingEnabled(regionType: AWSRegionType, serviceType: AWSServiceType, credentialsProvider: AWSCredentialsProvider, localTestingEnabled: boolean): this;
}

declare var AWSServiceErrorDomain: string;

declare const enum AWSServiceErrorType {

	Unknown = 0,

	RequestTimeTooSkewed = 1,

	InvalidSignatureException = 2,

	SignatureDoesNotMatch = 3,

	RequestExpired = 4,

	AuthFailure = 5,

	AccessDeniedException = 6,

	UnrecognizedClientException = 7,

	IncompleteSignature = 8,

	InvalidClientTokenId = 9,

	MissingAuthenticationToken = 10,

	AccessDenied = 11,

	ExpiredToken = 12,

	InvalidAccessKeyId = 13,

	InvalidToken = 14,

	TokenRefreshRequired = 15,

	AccessFailure = 16,

	AuthMissingFailure = 17,

	Throttling = 18,

	ThrottlingException = 19
}

declare class AWSServiceInfo extends NSObject {

	static alloc(): AWSServiceInfo; // inherited from NSObject

	static new(): AWSServiceInfo; // inherited from NSObject

	readonly cognitoCredentialsProvider: AWSCognitoCredentialsProvider;

	readonly infoDictionary: NSDictionary<string, any>;

	readonly region: AWSRegionType;
}

declare class AWSServiceManager extends NSObject {

	static alloc(): AWSServiceManager; // inherited from NSObject

	static defaultServiceManager(): AWSServiceManager;

	static new(): AWSServiceManager; // inherited from NSObject

	defaultServiceConfiguration: AWSServiceConfiguration;
}

declare const enum AWSServiceType {

	Unknown = 0,

	APIGateway = 1,

	AutoScaling = 2,

	CloudWatch = 3,

	CognitoIdentity = 4,

	CognitoIdentityProvider = 5,

	CognitoSync = 6,

	Comprehend = 7,

	Connect = 8,

	ConnectParticipant = 9,

	DynamoDB = 10,

	EC2 = 11,

	ElasticLoadBalancing = 12,

	IoT = 13,

	IoTData = 14,

	Firehose = 15,

	Kinesis = 16,

	KinesisVideo = 17,

	KinesisVideoArchivedMedia = 18,

	KinesisVideoSignaling = 19,

	KMS = 20,

	Lambda = 21,

	LexRuntime = 22,

	Logs = 23,

	MachineLearning = 24,

	MobileAnalytics = 25,

	MobileTargeting = 26,

	Polly = 27,

	Rekognition = 28,

	S3 = 29,

	SageMakerRuntime = 30,

	SES = 31,

	SimpleDB = 32,

	SNS = 33,

	SQS = 34,

	STS = 35,

	Textract = 36,

	Transcribe = 37,

	TranscribeStreaming = 38,

	Translate = 39
}

declare class AWSSignatureSignerUtility extends NSObject {

	static HMACSignWithKeyUsingAlgorithm(data: NSData, key: string, algorithm: number): string;

	static alloc(): AWSSignatureSignerUtility; // inherited from NSObject

	static hash(dataToHash: NSData): NSData;

	static hashString(stringToHash: string): string;

	static hexEncode(string: string): string;

	static new(): AWSSignatureSignerUtility; // inherited from NSObject

	static sha256HMacWithDataWithKey(data: NSData, key: NSData): NSData;
}

declare class AWSSignatureV2Signer extends NSObject implements AWSNetworkingRequestInterceptorProtocol {

	static alloc(): AWSSignatureV2Signer; // inherited from NSObject

	static new(): AWSSignatureV2Signer; // inherited from NSObject

	static signerWithCredentialsProviderEndpoint(credentialsProvider: AWSCredentialsProvider, endpoint: AWSEndpoint): AWSSignatureV2Signer;

	readonly credentialsProvider: AWSCredentialsProvider;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { credentialsProvider: AWSCredentialsProvider; endpoint: AWSEndpoint; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCredentialsProviderEndpoint(credentialsProvider: AWSCredentialsProvider, endpoint: AWSEndpoint): this;

	interceptRequest(request: NSMutableURLRequest): AWSTask<any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var AWSSignatureV4Algorithm: string;

declare class AWSSignatureV4Signer extends NSObject implements AWSNetworkingRequestInterceptorProtocol {

	static alloc(): AWSSignatureV4Signer; // inherited from NSObject

	static generateQueryStringForSignatureV4WithCredentialProviderHttpMethodExpireDurationEndpointKeyPathRequestHeadersRequestParametersSignBody(credentialsProvider: AWSCredentialsProvider, httpMethod: AWSHTTPMethod, expireDuration: number, endpoint: AWSEndpoint, keyPath: string, requestHeaders: NSDictionary<string, string>, requestParameters: NSDictionary<string, any>, signBody: boolean): AWSTask<NSURL>;

	static getCanonicalizedRequestPathQueryHeadersContentSha256(method: string, path: string, query: string, headers: NSDictionary<any, any>, contentSha256: string): string;

	static getSignedHeadersString(headers: NSDictionary<any, any>): string;

	static getV4DerivedKeyDateRegionService(secret: string, dateStamp: string, regionName: string, serviceName: string): NSData;

	static new(): AWSSignatureV4Signer; // inherited from NSObject

	static sigV4SignedURLWithRequestCredentialProviderRegionNameServiceNameDateExpireDurationSignBodySignSessionToken(request: NSURLRequest, credentialsProvider: AWSCredentialsProvider, regionName: string, serviceName: string, date: Date, expireDuration: number, signBody: boolean, signSessionToken: boolean): AWSTask<NSURL>;

	readonly credentialsProvider: AWSCredentialsProvider;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { credentialsProvider: AWSCredentialsProvider; endpoint: AWSEndpoint; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithCredentialsProviderEndpoint(credentialsProvider: AWSCredentialsProvider, endpoint: AWSEndpoint): this;

	interceptRequest(request: NSMutableURLRequest): AWSTask<any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var AWSSignatureV4Terminator: string;

declare class AWSStaticCredentialsProvider extends NSObject implements AWSCredentialsProvider {

	static alloc(): AWSStaticCredentialsProvider; // inherited from NSObject

	static new(): AWSStaticCredentialsProvider; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { accessKey: string; secretKey: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	credentials(): AWSTask<AWSCredentials>;

	initWithAccessKeySecretKey(accessKey: string, secretKey: string): this;

	invalidateCachedTemporaryCredentials(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AWSSynchronizedMutableDictionary extends NSObject {

	static alloc(): AWSSynchronizedMutableDictionary; // inherited from NSObject

	static new(): AWSSynchronizedMutableDictionary; // inherited from NSObject

	allKeys(): NSArray<any>;

	objectForKey(aKey: any): any;

	removeObject(object: any): void;

	removeObjectForKey(aKey: any): void;

	setObjectForKey(anObject: any, aKey: any): void;
}

declare class AWSTMCache extends NSObject {

	static alloc(): AWSTMCache; // inherited from NSObject

	static new(): AWSTMCache; // inherited from NSObject

	static sharedCache(): AWSTMCache;

	readonly diskByteCount: number;

	readonly diskCache: AWSTMDiskCache;

	readonly memoryCache: AWSTMMemoryCache;

	readonly name: string;

	readonly queue: NSObject;

	constructor(o: { name: string; });

	constructor(o: { name: string; rootPath: string; });

	initWithName(name: string): this;

	initWithNameRootPath(name: string, rootPath: string): this;

	objectForKey(key: string): any;

	objectForKeyBlock(key: string, block: (p1: AWSTMCache, p2: string, p3: any) => void): void;

	removeAllObjects(block: (p1: AWSTMCache) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyBlock(key: string, block: (p1: AWSTMCache, p2: string, p3: any) => void): void;

	setObjectForKey(object: NSCoding, key: string): void;

	setObjectForKeyBlock(object: NSCoding, key: string, block: (p1: AWSTMCache, p2: string, p3: any) => void): void;

	trimToDate(date: Date): void;

	trimToDateBlock(date: Date, block: (p1: AWSTMCache) => void): void;
}

interface AWSTMCacheBackgroundTaskManager extends NSObjectProtocol {

	beginBackgroundTask(): number;

	endBackgroundTask(identifier: number): void;
}
declare var AWSTMCacheBackgroundTaskManager: {

	prototype: AWSTMCacheBackgroundTaskManager;
};

declare class AWSTMDiskCache extends NSObject {

	static alloc(): AWSTMDiskCache; // inherited from NSObject

	static emptyTrash(): void;

	static new(): AWSTMDiskCache; // inherited from NSObject

	static setBackgroundTaskManager(backgroundTaskManager: AWSTMCacheBackgroundTaskManager): void;

	static sharedCache(): AWSTMDiskCache;

	static sharedQueue(): NSObject;

	ageLimit: number;

	readonly byteCount: number;

	byteLimit: number;

	readonly cacheURL: NSURL;

	didAddObjectBlock: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void;

	didRemoveAllObjectsBlock: (p1: AWSTMDiskCache) => void;

	didRemoveObjectBlock: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void;

	readonly name: string;

	willAddObjectBlock: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void;

	willRemoveAllObjectsBlock: (p1: AWSTMDiskCache) => void;

	willRemoveObjectBlock: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void;

	constructor(o: { name: string; });

	constructor(o: { name: string; rootPath: string; });

	enumerateObjectsWithBlock(block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void): void;

	enumerateObjectsWithBlockCompletionBlock(block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void, completionBlock: (p1: AWSTMDiskCache) => void): void;

	fileURLForKey(key: string): NSURL;

	fileURLForKeyBlock(key: string, block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void): void;

	initWithName(name: string): this;

	initWithNameRootPath(name: string, rootPath: string): this;

	objectForKey(key: string): NSCoding;

	objectForKeyBlock(key: string, block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void): void;

	removeAllObjects(block: (p1: AWSTMDiskCache) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyBlock(key: string, block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void): void;

	setObjectForKey(object: NSCoding, key: string): void;

	setObjectForKeyBlock(object: NSCoding, key: string, block: (p1: AWSTMDiskCache, p2: string, p3: NSCoding, p4: NSURL) => void): void;

	trimToDate(date: Date): void;

	trimToDateBlock(date: Date, block: (p1: AWSTMDiskCache) => void): void;

	trimToSize(byteCount: number): void;

	trimToSizeBlock(byteCount: number, block: (p1: AWSTMDiskCache) => void): void;

	trimToSizeByDate(byteCount: number): void;

	trimToSizeByDateBlock(byteCount: number, block: (p1: AWSTMDiskCache) => void): void;
}

declare class AWSTMMemoryCache extends NSObject {

	static alloc(): AWSTMMemoryCache; // inherited from NSObject

	static new(): AWSTMMemoryCache; // inherited from NSObject

	static sharedCache(): AWSTMMemoryCache;

	ageLimit: number;

	costLimit: number;

	didAddObjectBlock: (p1: AWSTMMemoryCache, p2: string, p3: any) => void;

	didEnterBackgroundBlock: (p1: AWSTMMemoryCache) => void;

	didReceiveMemoryWarningBlock: (p1: AWSTMMemoryCache) => void;

	didRemoveAllObjectsBlock: (p1: AWSTMMemoryCache) => void;

	didRemoveObjectBlock: (p1: AWSTMMemoryCache, p2: string, p3: any) => void;

	readonly queue: NSObject;

	removeAllObjectsOnEnteringBackground: boolean;

	removeAllObjectsOnMemoryWarning: boolean;

	readonly totalCost: number;

	willAddObjectBlock: (p1: AWSTMMemoryCache, p2: string, p3: any) => void;

	willRemoveAllObjectsBlock: (p1: AWSTMMemoryCache) => void;

	willRemoveObjectBlock: (p1: AWSTMMemoryCache, p2: string, p3: any) => void;

	enumerateObjectsWithBlock(block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void): void;

	enumerateObjectsWithBlockCompletionBlock(block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void, completionBlock: (p1: AWSTMMemoryCache) => void): void;

	handleApplicationBackgrounding(): void;

	handleMemoryWarning(): void;

	objectForKey(key: string): any;

	objectForKeyBlock(key: string, block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void): void;

	removeAllObjects(block: (p1: AWSTMMemoryCache) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyBlock(key: string, block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void): void;

	setObjectForKey(object: any, key: string): void;

	setObjectForKeyBlock(object: any, key: string, block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void): void;

	setObjectForKeyWithCost(object: any, key: string, cost: number): void;

	setObjectForKeyWithCostBlock(object: any, key: string, cost: number, block: (p1: AWSTMMemoryCache, p2: string, p3: any) => void): void;

	trimToCost(cost: number): void;

	trimToCostBlock(cost: number, block: (p1: AWSTMMemoryCache) => void): void;

	trimToCostByDate(cost: number): void;

	trimToCostByDateBlock(cost: number, block: (p1: AWSTMMemoryCache) => void): void;

	trimToDate(date: Date): void;

	trimToDateBlock(date: Date, block: (p1: AWSTMMemoryCache) => void): void;
}

declare class AWSTask<ResultType> extends NSObject {

	static alloc<ResultType>(): AWSTask<ResultType>; // inherited from NSObject

	static cancelledTask<ResultType>(): AWSTask<ResultType>;

	static new<ResultType>(): AWSTask<ResultType>; // inherited from NSObject

	static taskForCompletionOfAllTasks<ResultType>(tasks: NSArray<AWSTask<any>> | AWSTask<any>[]): AWSTask<ResultType>;

	static taskForCompletionOfAllTasksWithResults<ResultType>(tasks: NSArray<AWSTask<any>> | AWSTask<any>[]): AWSTask<ResultType>;

	static taskForCompletionOfAnyTask<ResultType>(tasks: NSArray<AWSTask<any>> | AWSTask<any>[]): AWSTask<ResultType>;

	static taskFromExecutorWithBlock<ResultType>(executor: AWSExecutor, block: () => any): AWSTask<ResultType>;

	static taskWithError<ResultType>(error: NSError): AWSTask<ResultType>;

	static taskWithResult<ResultType>(result: ResultType): AWSTask<ResultType>;

	readonly cancelled: boolean;

	readonly completed: boolean;

	readonly error: NSError;

	readonly faulted: boolean;

	readonly result: ResultType;

	continueWithBlock(block: (p1: AWSTask<ResultType>) => any): AWSTask<any>;

	continueWithBlockCancellationToken(block: (p1: AWSTask<ResultType>) => any, cancellationToken: AWSCancellationToken): AWSTask<any>;

	continueWithExecutorBlockCancellationToken(executor: AWSExecutor, block: (p1: AWSTask<ResultType>) => any, cancellationToken: AWSCancellationToken): AWSTask<any>;

	continueWithExecutorSuccessBlockCancellationToken(executor: AWSExecutor, block: (p1: AWSTask<ResultType>) => any, cancellationToken: AWSCancellationToken): AWSTask<any>;

	continueWithExecutorWithBlock(executor: AWSExecutor, block: (p1: AWSTask<ResultType>) => any): AWSTask<any>;

	continueWithExecutorWithSuccessBlock(executor: AWSExecutor, block: (p1: AWSTask<ResultType>) => any): AWSTask<any>;

	continueWithSuccessBlock(block: (p1: AWSTask<ResultType>) => any): AWSTask<any>;

	continueWithSuccessBlockCancellationToken(block: (p1: AWSTask<ResultType>) => any, cancellationToken: AWSCancellationToken): AWSTask<any>;

	waitUntilFinished(): void;
}

declare class AWSTaskCompletionSource<ResultType> extends NSObject {

	static alloc<ResultType>(): AWSTaskCompletionSource<ResultType>; // inherited from NSObject

	static new<ResultType>(): AWSTaskCompletionSource<ResultType>; // inherited from NSObject

	static taskCompletionSource<ResultType>(): AWSTaskCompletionSource<ResultType>;

	readonly task: AWSTask<ResultType>;

	cancel(): void;

	setError(error: NSError): void;

	setResult(result: ResultType): void;

	trySetCancelled(): boolean;

	trySetError(error: NSError): boolean;

	trySetResult(result: ResultType): boolean;
}

declare var AWSTaskErrorDomain: string;

declare var AWSTaskMultipleErrorsUserInfoKey: string;

declare class AWSUICKeyChainStore extends NSObject {

	static allItemsWithItemClass(itemClass: AWSUICKeyChainStoreItemClass): NSArray<any>;

	static allKeysWithItemClass(itemClass: AWSUICKeyChainStoreItemClass): NSArray<string>;

	static alloc(): AWSUICKeyChainStore; // inherited from NSObject

	static dataForKey(key: string): NSData;

	static dataForKeyError(key: string): NSData;

	static dataForKeyService(key: string, service: string): NSData;

	static dataForKeyServiceAccessGroup(key: string, service: string, accessGroup: string): NSData;

	static dataForKeyServiceAccessGroupError(key: string, service: string, accessGroup: string): NSData;

	static dataForKeyServiceError(key: string, service: string): NSData;

	static defaultService(): string;

	static generatePassword(): string;

	static keyChainStore(): AWSUICKeyChainStore;

	static keyChainStoreWithServerProtocolType(server: NSURL, protocolType: AWSUICKeyChainStoreProtocolType): AWSUICKeyChainStore;

	static keyChainStoreWithServerProtocolTypeAuthenticationType(server: NSURL, protocolType: AWSUICKeyChainStoreProtocolType, authenticationType: AWSUICKeyChainStoreAuthenticationType): AWSUICKeyChainStore;

	static keyChainStoreWithService(service: string): AWSUICKeyChainStore;

	static keyChainStoreWithServiceAccessGroup(service: string, accessGroup: string): AWSUICKeyChainStore;

	static new(): AWSUICKeyChainStore; // inherited from NSObject

	static removeAllItems(): boolean;

	static removeAllItemsForService(service: string): boolean;

	static removeAllItemsForServiceAccessGroup(service: string, accessGroup: string): boolean;

	static removeAllItemsForServiceAccessGroupError(service: string, accessGroup: string): boolean;

	static removeAllItemsForServiceError(service: string): boolean;

	static removeAllItemsWithError(): boolean;

	static removeItemForKey(key: string): boolean;

	static removeItemForKeyError(key: string): boolean;

	static removeItemForKeyService(key: string, service: string): boolean;

	static removeItemForKeyServiceAccessGroup(key: string, service: string, accessGroup: string): boolean;

	static removeItemForKeyServiceAccessGroupError(key: string, service: string, accessGroup: string): boolean;

	static removeItemForKeyServiceError(key: string, service: string): boolean;

	static requestSharedWebCredentialForDomainAccountCompletion(domain: string, account: string, completion: (p1: NSArray<NSDictionary<string, string>>, p2: NSError) => void): void;

	static requestSharedWebCredentialWithCompletion(completion: (p1: NSArray<NSDictionary<string, string>>, p2: NSError) => void): void;

	static setDataForKey(data: NSData, key: string): boolean;

	static setDataForKeyError(data: NSData, key: string): boolean;

	static setDataForKeyGenericAttribute(data: NSData, key: string, genericAttribute: any): boolean;

	static setDataForKeyGenericAttributeError(data: NSData, key: string, genericAttribute: any): boolean;

	static setDataForKeyService(data: NSData, key: string, service: string): boolean;

	static setDataForKeyServiceAccessGroup(data: NSData, key: string, service: string, accessGroup: string): boolean;

	static setDataForKeyServiceAccessGroupError(data: NSData, key: string, service: string, accessGroup: string): boolean;

	static setDataForKeyServiceAccessGroupGenericAttribute(data: NSData, key: string, service: string, accessGroup: string, genericAttribute: any): boolean;

	static setDataForKeyServiceAccessGroupGenericAttributeError(data: NSData, key: string, service: string, accessGroup: string, genericAttribute: any): boolean;

	static setDataForKeyServiceError(data: NSData, key: string, service: string): boolean;

	static setDataForKeyServiceGenericAttribute(data: NSData, key: string, service: string, genericAttribute: any): boolean;

	static setDataForKeyServiceGenericAttributeError(data: NSData, key: string, service: string, genericAttribute: any): boolean;

	static setDefaultService(defaultService: string): void;

	static setStringForKey(value: string, key: string): boolean;

	static setStringForKeyError(value: string, key: string): boolean;

	static setStringForKeyGenericAttribute(value: string, key: string, genericAttribute: any): boolean;

	static setStringForKeyGenericAttributeError(value: string, key: string, genericAttribute: any): boolean;

	static setStringForKeyService(value: string, key: string, service: string): boolean;

	static setStringForKeyServiceAccessGroup(value: string, key: string, service: string, accessGroup: string): boolean;

	static setStringForKeyServiceAccessGroupError(value: string, key: string, service: string, accessGroup: string): boolean;

	static setStringForKeyServiceAccessGroupGenericAttribute(value: string, key: string, service: string, accessGroup: string, genericAttribute: any): boolean;

	static setStringForKeyServiceAccessGroupGenericAttributeError(value: string, key: string, service: string, accessGroup: string, genericAttribute: any): boolean;

	static setStringForKeyServiceError(value: string, key: string, service: string): boolean;

	static setStringForKeyServiceGenericAttribute(value: string, key: string, service: string, genericAttribute: any): boolean;

	static setStringForKeyServiceGenericAttributeError(value: string, key: string, service: string, genericAttribute: any): boolean;

	static stringForKey(key: string): string;

	static stringForKeyError(key: string): string;

	static stringForKeyService(key: string, service: string): string;

	static stringForKeyServiceAccessGroup(key: string, service: string, accessGroup: string): string;

	static stringForKeyServiceAccessGroupError(key: string, service: string, accessGroup: string): string;

	static stringForKeyServiceError(key: string, service: string): string;

	readonly accessGroup: string;

	accessibility: AWSUICKeyChainStoreAccessibility;

	readonly allItems: NSArray<any>;

	readonly allKeys: NSArray<string>;

	readonly authenticationPolicy: AWSUICKeyChainStoreAuthenticationPolicy;

	authenticationPrompt: string;

	readonly authenticationType: AWSUICKeyChainStoreAuthenticationType;

	readonly itemClass: AWSUICKeyChainStoreItemClass;

	readonly protocolType: AWSUICKeyChainStoreProtocolType;

	readonly server: NSURL;

	readonly service: string;

	synchronizable: boolean;

	constructor(o: { server: NSURL; protocolType: AWSUICKeyChainStoreProtocolType; });

	constructor(o: { server: NSURL; protocolType: AWSUICKeyChainStoreProtocolType; authenticationType: AWSUICKeyChainStoreAuthenticationType; });

	constructor(o: { service: string; });

	constructor(o: { service: string; accessGroup: string; });

	contains(key: string): boolean;

	dataForKey(key: string): NSData;

	dataForKeyError(key: string): NSData;

	initWithServerProtocolType(server: NSURL, protocolType: AWSUICKeyChainStoreProtocolType): this;

	initWithServerProtocolTypeAuthenticationType(server: NSURL, protocolType: AWSUICKeyChainStoreProtocolType, authenticationType: AWSUICKeyChainStoreAuthenticationType): this;

	initWithService(service: string): this;

	initWithServiceAccessGroup(service: string, accessGroup: string): this;

	objectForKeyedSubscript(key: string): string;

	removeAllItems(): boolean;

	removeAllItemsWithError(): boolean;

	removeItemForKey(key: string): boolean;

	removeItemForKeyError(key: string): boolean;

	removeSharedPasswordForAccountCompletion(account: string, completion: (p1: NSError) => void): void;

	setAccessibilityAuthenticationPolicy(accessibility: AWSUICKeyChainStoreAccessibility, authenticationPolicy: AWSUICKeyChainStoreAuthenticationPolicy): void;

	setDataForKey(data: NSData, key: string): boolean;

	setDataForKeyError(data: NSData, key: string): boolean;

	setDataForKeyGenericAttribute(data: NSData, key: string, genericAttribute: any): boolean;

	setDataForKeyGenericAttributeError(data: NSData, key: string, genericAttribute: any): boolean;

	setDataForKeyLabelComment(data: NSData, key: string, label: string, comment: string): boolean;

	setDataForKeyLabelCommentError(data: NSData, key: string, label: string, comment: string): boolean;

	setObjectForKeyedSubscript(obj: string, key: string): void;

	setSharedPasswordForAccountCompletion(password: string, account: string, completion: (p1: NSError) => void): void;

	setStringForKey(string: string, key: string): boolean;

	setStringForKeyError(string: string, key: string): boolean;

	setStringForKeyGenericAttribute(string: string, key: string, genericAttribute: any): boolean;

	setStringForKeyGenericAttributeError(string: string, key: string, genericAttribute: any): boolean;

	setStringForKeyLabelComment(string: string, key: string, label: string, comment: string): boolean;

	setStringForKeyLabelCommentError(string: string, key: string, label: string, comment: string): boolean;

	sharedPasswordForAccountCompletion(account: string, completion: (p1: string, p2: NSError) => void): void;

	sharedPasswordWithCompletion(completion: (p1: string, p2: string, p3: NSError) => void): void;

	stringForKey(key: string): string;

	stringForKeyError(key: string): string;
}

declare const enum AWSUICKeyChainStoreAccessibility {

	WhenUnlocked = 1,

	AfterFirstUnlock = 2,

	Always = 3,

	WhenPasscodeSetThisDeviceOnly = 4,

	WhenUnlockedThisDeviceOnly = 5,

	AfterFirstUnlockThisDeviceOnly = 6,

	AlwaysThisDeviceOnly = 7
}

declare const enum AWSUICKeyChainStoreAuthenticationPolicy {

	UserPresence = 1
}

declare const enum AWSUICKeyChainStoreAuthenticationType {

	NTLM = 1,

	MSN = 2,

	DPA = 3,

	RPA = 4,

	HTTPBasic = 5,

	HTTPDigest = 6,

	HTMLForm = 7,

	Default = 8
}

declare const enum AWSUICKeyChainStoreErrorCode {

	InvalidArguments = 1
}

declare var AWSUICKeyChainStoreErrorDomain: string;

declare const enum AWSUICKeyChainStoreItemClass {

	GenericPassword = 1,

	InternetPassword = 2
}

declare const enum AWSUICKeyChainStoreProtocolType {

	FTP = 1,

	FTPAccount = 2,

	HTTP = 3,

	IRC = 4,

	NNTP = 5,

	POP3 = 6,

	SMTP = 7,

	SOCKS = 8,

	IMAP = 9,

	LDAP = 10,

	AppleTalk = 11,

	AFP = 12,

	Telnet = 13,

	SSH = 14,

	FTPS = 15,

	HTTPS = 16,

	HTTPProxy = 17,

	HTTPSProxy = 18,

	FTPProxy = 19,

	SMB = 20,

	RTSP = 21,

	RTSPProxy = 22,

	DAAP = 23,

	EPPC = 24,

	NNTPS = 25,

	LDAPS = 26,

	TelnetS = 27,

	IRCS = 28,

	POP3S = 29
}

declare class AWSURLRequestRetryHandler extends NSObject implements AWSURLRequestRetryHandlerProtocol {

	static alloc(): AWSURLRequestRetryHandler; // inherited from NSObject

	static new(): AWSURLRequestRetryHandler; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	maxRetryCount: number; // inherited from AWSURLRequestRetryHandlerProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { maximumRetryCount: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithMaximumRetryCount(maxRetryCount: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	resetParameters(parameters: NSDictionary<any, any>): NSDictionary<any, any>;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	shouldRetryOriginalRequestResponseDataError(currentRetryCount: number, originalRequest: AWSNetworkingRequest, response: NSHTTPURLResponse, data: NSData, error: NSError): AWSNetworkingRetryType;

	timeIntervalForRetryResponseDataError(currentRetryCount: number, response: NSHTTPURLResponse, data: NSData, error: NSError): number;
}

interface AWSURLRequestRetryHandlerProtocol extends NSObjectProtocol {

	maxRetryCount: number;

	resetParameters?(parameters: NSDictionary<any, any>): NSDictionary<any, any>;

	shouldRetryOriginalRequestResponseDataError(currentRetryCount: number, originalRequest: AWSNetworkingRequest, response: NSHTTPURLResponse, data: NSData, error: NSError): AWSNetworkingRetryType;

	timeIntervalForRetryResponseDataError(currentRetryCount: number, response: NSHTTPURLResponse, data: NSData, error: NSError): number;
}
declare var AWSURLRequestRetryHandlerProtocol: {

	prototype: AWSURLRequestRetryHandlerProtocol;
};

interface AWSURLRequestSerializer extends NSObjectProtocol {

	serializeRequestHeadersParameters(request: NSMutableURLRequest, headers: NSDictionary<any, any>, parameters: NSDictionary<any, any>): AWSTask<any>;

	validateRequest(request: NSURLRequest): AWSTask<any>;
}
declare var AWSURLRequestSerializer: {

	prototype: AWSURLRequestSerializer;
};

declare class AWSURLSessionManager extends NSObject implements NSURLSessionDataDelegate, NSURLSessionDelegate {

	static alloc(): AWSURLSessionManager; // inherited from NSObject

	static new(): AWSURLSessionManager; // inherited from NSObject

	configuration: AWSNetworkingConfiguration;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { configuration: AWSNetworkingConfiguration; });

	URLSessionDataTaskDidBecomeDownloadTask(session: NSURLSession, dataTask: NSURLSessionDataTask, downloadTask: NSURLSessionDownloadTask): void;

	URLSessionDataTaskDidBecomeStreamTask(session: NSURLSession, dataTask: NSURLSessionDataTask, streamTask: NSURLSessionStreamTask): void;

	URLSessionDataTaskDidReceiveData(session: NSURLSession, dataTask: NSURLSessionDataTask, data: NSData): void;

	URLSessionDataTaskDidReceiveResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, response: NSURLResponse, completionHandler: (p1: NSURLSessionResponseDisposition) => void): void;

	URLSessionDataTaskWillCacheResponseCompletionHandler(session: NSURLSession, dataTask: NSURLSessionDataTask, proposedResponse: NSCachedURLResponse, completionHandler: (p1: NSCachedURLResponse) => void): void;

	URLSessionDidBecomeInvalidWithError(session: NSURLSession, error: NSError): void;

	URLSessionDidFinishEventsForBackgroundURLSession(session: NSURLSession): void;

	URLSessionDidReceiveChallengeCompletionHandler(session: NSURLSession, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidCompleteWithError(session: NSURLSession, task: NSURLSessionTask, error: NSError): void;

	URLSessionTaskDidFinishCollectingMetrics(session: NSURLSession, task: NSURLSessionTask, metrics: NSURLSessionTaskMetrics): void;

	URLSessionTaskDidReceiveChallengeCompletionHandler(session: NSURLSession, task: NSURLSessionTask, challenge: NSURLAuthenticationChallenge, completionHandler: (p1: NSURLSessionAuthChallengeDisposition, p2: NSURLCredential) => void): void;

	URLSessionTaskDidSendBodyDataTotalBytesSentTotalBytesExpectedToSend(session: NSURLSession, task: NSURLSessionTask, bytesSent: number, totalBytesSent: number, totalBytesExpectedToSend: number): void;

	URLSessionTaskIsWaitingForConnectivity(session: NSURLSession, task: NSURLSessionTask): void;

	URLSessionTaskNeedNewBodyStream(session: NSURLSession, task: NSURLSessionTask, completionHandler: (p1: NSInputStream) => void): void;

	URLSessionTaskWillBeginDelayedRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, request: NSURLRequest, completionHandler: (p1: NSURLSessionDelayedRequestDisposition, p2: NSURLRequest) => void): void;

	URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler(session: NSURLSession, task: NSURLSessionTask, response: NSHTTPURLResponse, request: NSURLRequest, completionHandler: (p1: NSURLRequest) => void): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataTaskWithRequest(request: AWSNetworkingRequest): AWSTask<any>;

	initWithConfiguration(configuration: AWSNetworkingConfiguration): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var AWSValidationErrorDomain: string;

declare const enum AWSValidationErrorType {

	UnknownError = 0,

	UnexpectedParameter = 1,

	UnhandledType = 2,

	MissingRequiredParameter = 3,

	OutOfRangeParameter = 4,

	InvalidStringParameter = 5,

	UnexpectedStringParameter = 6,

	InvalidParameterType = 7,

	InvalidBase64Data = 8,

	HeaderTargetInvalid = 9,

	HeaderAPIActionIsUndefined = 10,

	HeaderDefinitionFileIsNotFound = 11,

	HeaderDefinitionFileIsEmpty = 12,

	HeaderAPIActionIsInvalid = 13,

	URIIsInvalid = 14
}

declare class AWSWebIdentityCredentialsProvider extends NSObject implements AWSCredentialsProvider {

	static alloc(): AWSWebIdentityCredentialsProvider; // inherited from NSObject

	static new(): AWSWebIdentityCredentialsProvider; // inherited from NSObject

	providerId: string;

	roleArn: string;

	roleSessionName: string;

	webIdentityToken: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { regionType: AWSRegionType; providerId: string; roleArn: string; roleSessionName: string; webIdentityToken: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	credentials(): AWSTask<AWSCredentials>;

	initWithRegionTypeProviderIdRoleArnRoleSessionNameWebIdentityToken(regionType: AWSRegionType, providerId: string, roleArn: string, roleSessionName: string, webIdentityToken: string): this;

	invalidateCachedTemporaryCredentials(): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class AWSXMLBuilder extends NSObject {

	static alloc(): AWSXMLBuilder; // inherited from NSObject

	static new(): AWSXMLBuilder; // inherited from NSObject

	static xmlDataForDictionaryActionNameServiceDefinitionRuleError(params: NSDictionary<any, any>, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSData;

	static xmlStringForDictionaryActionNameServiceDefinitionRuleError(params: NSDictionary<any, any>, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): string;
}

declare var AWSXMLBuilderErrorDomain: string;

declare const enum AWSXMLBuilderErrorType {

	UnknownError = 900,

	DefinitionFileIsEmpty = 901,

	UndefinedXMLNamespace = 902,

	UndefinedActionRule = 903,

	MissingRequiredXMLElements = 904,

	InvalidXMLValue = 905,

	UnCatchedRuleTypeInDifinitionFile = 906
}

declare const enum AWSXMLDictionaryAttributesMode {

	Prefixed = 0,

	Dictionary = 1,

	Unprefixed = 2,

	Discard = 3
}

declare const enum AWSXMLDictionaryNodeNameMode {

	RootOnly = 0,

	Always = 1,

	Never = 2
}

declare class AWSXMLDictionaryParser extends NSObject implements NSCopying {

	static alloc(): AWSXMLDictionaryParser; // inherited from NSObject

	static new(): AWSXMLDictionaryParser; // inherited from NSObject

	static sharedInstance(): AWSXMLDictionaryParser;

	alwaysUseArrays: boolean;

	attributesMode: AWSXMLDictionaryAttributesMode;

	collapseTextNodes: boolean;

	nodeNameMode: AWSXMLDictionaryNodeNameMode;

	preserveComments: boolean;

	stripEmptyNodes: boolean;

	trimWhiteSpace: boolean;

	wrapRootNode: boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dictionaryWithData(data: NSData): NSDictionary<any, any>;

	dictionaryWithFile(path: string): NSDictionary<any, any>;

	dictionaryWithParser(parser: NSXMLParser): NSDictionary<any, any>;

	dictionaryWithString(string: string): NSDictionary<any, any>;
}

declare class AWSXMLParser extends NSObject {

	static alloc(): AWSXMLParser; // inherited from NSObject

	static new(): AWSXMLParser; // inherited from NSObject

	static sharedInstance(): AWSXMLParser;

	dictionaryForXMLDataActionNameServiceDefinitionRuleError(data: NSData, actionName: string, serviceDefinitionRule: NSDictionary<any, any>): NSMutableDictionary<any, any>;
}

declare var AWSXMLParserErrorDomain: string;

declare const enum AWSXMLParserErrorType {

	UnknownError = 0,

	NoTypeDefinitionInRule = 1,

	UnHandledType = 2,

	UnExpectedType = 3,

	DefinitionFileIsEmpty = 4,

	UnexpectedXMLElement = 5,

	XMLNameNotFoundInDefinition = 6,

	MissingRequiredXMLElements = 7,

	InvalidXMLValue = 8
}

declare class AWSXMLRequestSerializer extends NSObject implements AWSURLRequestSerializer {

	static alloc(): AWSXMLRequestSerializer; // inherited from NSObject

	static constructURIandHeadersAndBodyRulesParametersUriSchemaError(request: NSMutableURLRequest, rules: AWSJSONDictionary, params: NSDictionary<any, any>, uriSchema: string): boolean;

	static new(): AWSXMLRequestSerializer; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionName(JSONDefinition: NSDictionary<any, any>, actionName: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	serializeRequestHeadersParameters(request: NSMutableURLRequest, headers: NSDictionary<any, any>, parameters: NSDictionary<any, any>): AWSTask<any>;

	validateRequest(request: NSURLRequest): AWSTask<any>;
}

declare class AWSXMLResponseSerializer extends NSObject implements AWSHTTPURLResponseSerializer {

	static alloc(): AWSXMLResponseSerializer; // inherited from NSObject

	static new(): AWSXMLResponseSerializer; // inherited from NSObject

	static parseResponseRulesBodyDictionaryError(response: NSHTTPURLResponse, rules: AWSJSONDictionary, bodyDictionary: NSMutableDictionary<any, any>): NSMutableDictionary<any, any>;

	outputClass: typeof NSObject;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { JSONDefinition: NSDictionary<any, any>; actionName: string; outputClass: typeof NSObject; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithJSONDefinitionActionNameOutputClass(JSONDefinition: NSDictionary<any, any>, actionName: string, outputClass: typeof NSObject): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	responseObjectForResponseOriginalRequestCurrentRequestDataError(response: NSHTTPURLResponse, originalRequest: NSURLRequest, currentRequest: NSURLRequest, data: any): any;

	retainCount(): number;

	self(): this;

	validateResponseFromRequestDataError(response: NSHTTPURLResponse, request: NSURLRequest, data: any): boolean;
}

declare var AWSiOSSDKVersion: string;

declare function awsgzip_loadGZIP(): void;

declare function awsmtl_loadMTLNSCoding(): void;

declare function awsmtl_loadMTLPredefinedTransformerAdditions(): void;

declare var kAWSDDASLAWSDDLogValue: string;

declare var kAWSDDASLKeyAWSDDLog: string;

declare var kAWSDDDefaultLogFilesDiskQuota: number;

declare var kAWSDDDefaultLogMaxFileSize: number;

declare var kAWSDDDefaultLogMaxNumLogFiles: number;

declare var kAWSDDDefaultLogRollingFrequency: number;

declare var kAWSMultipleErrorsError: number;
