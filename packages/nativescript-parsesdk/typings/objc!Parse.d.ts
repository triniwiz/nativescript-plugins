
declare class PFACL extends NSObject implements NSCoding, NSCopying {

	static ACL(): PFACL;

	static ACLWithUser(user: PFUser): PFACL;

	static alloc(): PFACL; // inherited from NSObject

	static new(): PFACL; // inherited from NSObject

	static setDefaultACLWithAccessForCurrentUser(acl: PFACL, currentUserAccess: boolean): void;

	publicReadAccess: boolean;

	publicWriteAccess: boolean;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	getReadAccessForRole(role: PFRole): boolean;

	getReadAccessForRoleWithName(name: string): boolean;

	getReadAccessForUser(user: PFUser): boolean;

	getReadAccessForUserId(userId: string): boolean;

	getWriteAccessForRole(role: PFRole): boolean;

	getWriteAccessForRoleWithName(name: string): boolean;

	getWriteAccessForUser(user: PFUser): boolean;

	getWriteAccessForUserId(userId: string): boolean;

	initWithCoder(coder: NSCoder): this;

	setReadAccessForRole(allowed: boolean, role: PFRole): void;

	setReadAccessForRoleWithName(allowed: boolean, name: string): void;

	setReadAccessForUser(allowed: boolean, user: PFUser): void;

	setReadAccessForUserId(allowed: boolean, userId: string): void;

	setWriteAccessForRole(allowed: boolean, role: PFRole): void;

	setWriteAccessForRoleWithName(allowed: boolean, name: string): void;

	setWriteAccessForUser(allowed: boolean, user: PFUser): void;

	setWriteAccessForUserId(allowed: boolean, userId: string): void;
}

declare class PFAnalytics extends NSObject {

	static alloc(): PFAnalytics; // inherited from NSObject

	static new(): PFAnalytics; // inherited from NSObject

	static trackAppOpenedWithLaunchOptions(launchOptions: NSDictionary<any, any>): BFTask<number>;

	static trackAppOpenedWithLaunchOptionsInBackgroundBlock(launchOptions: NSDictionary<any, any>, block: (p1: boolean, p2: NSError) => void): void;

	static trackAppOpenedWithRemoteNotificationPayload(userInfo: NSDictionary<any, any>): BFTask<number>;

	static trackAppOpenedWithRemoteNotificationPayloadInBackgroundBlock(userInfo: NSDictionary<any, any>, block: (p1: boolean, p2: NSError) => void): void;

	static trackEvent(name: string): BFTask<number>;

	static trackEventDimensions(name: string, dimensions: NSDictionary<string, string>): BFTask<number>;

	static trackEventInBackgroundBlock(name: string, block: (p1: boolean, p2: NSError) => void): void;

	static trackEventInBackgroundDimensionsBlock(name: string, dimensions: NSDictionary<string, string>, block: (p1: boolean, p2: NSError) => void): void;
}

declare class PFAnonymousUtils extends NSObject {

	static alloc(): PFAnonymousUtils; // inherited from NSObject

	static isLinkedWithUser(user: PFUser): boolean;

	static logInInBackground(): BFTask<PFUser>;

	static logInWithBlock(block: (p1: PFUser, p2: NSError) => void): void;

	static logInWithTargetSelector(target: any, selector: string): void;

	static new(): PFAnonymousUtils; // inherited from NSObject
}

declare const enum PFCachePolicy {

	kPFCachePolicyIgnoreCache = 0,

	kPFCachePolicyCacheOnly = 1,

	kPFCachePolicyNetworkOnly = 2,

	kPFCachePolicyCacheElseNetwork = 3,

	kPFCachePolicyNetworkElseCache = 4,

	kPFCachePolicyCacheThenNetwork = 5
}

declare class PFCloud extends NSObject {

	static alloc(): PFCloud; // inherited from NSObject

	static callFunctionInBackgroundWithParameters(_function: string, parameters: NSDictionary<any, any>): BFTask<any>;

	static callFunctionInBackgroundWithParametersBlock(_function: string, parameters: NSDictionary<any, any>, block: (p1: any, p2: NSError) => void): void;

	static callFunctionInBackgroundWithParametersTargetSelector(_function: string, parameters: NSDictionary<any, any>, target: any, selector: string): void;

	static callFunctionWithParameters(_function: string, parameters: NSDictionary<any, any>): any;

	static callFunctionWithParametersError(_function: string, parameters: NSDictionary<any, any>): any;

	static new(): PFCloud; // inherited from NSObject
}

declare class PFConfig extends NSObject {

	static alloc(): PFConfig; // inherited from NSObject

	static currentConfig(): PFConfig;

	static getConfig(): PFConfig;

	static getConfigInBackground(): BFTask<PFConfig>;

	static getConfigInBackgroundWithBlock(block: (p1: PFConfig, p2: NSError) => void): void;

	static getCurrentConfigInBackground(): BFTask<PFConfig>;

	static new(): PFConfig; // inherited from NSObject

	objectForKey(key: string): any;

	objectForKeyedSubscript(keyedSubscript: string): any;
}

declare class PFDecoder extends NSObject {

	static alloc(): PFDecoder; // inherited from NSObject

	static new(): PFDecoder; // inherited from NSObject

	static objectDecoder(): PFDecoder;

	decodeObject(object: any): any;
}

declare class PFEncoder extends NSObject {

	static alloc(): PFEncoder; // inherited from NSObject

	static new(): PFEncoder; // inherited from NSObject

	static objectEncoder(): PFEncoder;

	encodeObjectError(object: any): any;

	encodeParseObjectError(object: PFObject): any;
}

declare const enum PFErrorCode {

	kPFErrorInternalServer = 1,

	kPFErrorConnectionFailed = 100,

	kPFErrorObjectNotFound = 101,

	kPFErrorInvalidQuery = 102,

	kPFErrorInvalidClassName = 103,

	kPFErrorMissingObjectId = 104,

	kPFErrorInvalidKeyName = 105,

	kPFErrorInvalidPointer = 106,

	kPFErrorInvalidJSON = 107,

	kPFErrorCommandUnavailable = 108,

	kPFErrorIncorrectType = 111,

	kPFErrorInvalidChannelName = 112,

	kPFErrorInvalidDeviceToken = 114,

	kPFErrorPushMisconfigured = 115,

	kPFErrorObjectTooLarge = 116,

	kPFErrorOperationForbidden = 119,

	kPFErrorCacheMiss = 120,

	kPFErrorInvalidNestedKey = 121,

	kPFErrorInvalidFileName = 122,

	kPFErrorInvalidACL = 123,

	kPFErrorTimeout = 124,

	kPFErrorInvalidEmailAddress = 125,

	kPFErrorDuplicateValue = 137,

	kPFErrorInvalidRoleName = 139,

	kPFErrorExceededQuota = 140,

	kPFScriptError = 141,

	kPFValidationError = 142,

	kPFErrorReceiptMissing = 143,

	kPFErrorInvalidPurchaseReceipt = 144,

	kPFErrorPaymentDisabled = 145,

	kPFErrorInvalidProductIdentifier = 146,

	kPFErrorProductNotFoundInAppStore = 147,

	kPFErrorInvalidServerResponse = 148,

	kPFErrorProductDownloadFileSystemFailure = 149,

	kPFErrorInvalidImageData = 150,

	kPFErrorUnsavedFile = 151,

	kPFErrorFileDeleteFailure = 153,

	kPFErrorRequestLimitExceeded = 155,

	kPFErrorInvalidEventName = 160,

	kPFErrorUsernameMissing = 200,

	kPFErrorUserPasswordMissing = 201,

	kPFErrorUsernameTaken = 202,

	kPFErrorUserEmailTaken = 203,

	kPFErrorUserEmailMissing = 204,

	kPFErrorUserWithEmailNotFound = 205,

	kPFErrorUserCannotBeAlteredWithoutSession = 206,

	kPFErrorUserCanOnlyBeCreatedThroughSignUp = 207,

	kPFErrorFacebookAccountAlreadyLinked = 208,

	kPFErrorAccountAlreadyLinked = 208,

	kPFErrorInvalidSessionToken = 209,

	kPFErrorUserIdMismatch = 209,

	kPFErrorFacebookIdMissing = 250,

	kPFErrorLinkedIdMissing = 250,

	kPFErrorFacebookInvalidSession = 251,

	kPFErrorInvalidLinkedSession = 251
}

declare class PFFileObject extends NSObject {

	static alloc(): PFFileObject; // inherited from NSObject

	static clearAllCachedDataInBackground(): BFTask<any>;

	static fileObjectWithData(data: NSData): PFFileObject;

	static fileObjectWithDataContentType(data: NSData, contentType: string): PFFileObject;

	static fileObjectWithNameContentsAtPath(name: string, path: string): PFFileObject;

	static fileObjectWithNameContentsAtPathError(name: string, path: string): PFFileObject;

	static fileObjectWithNameData(name: string, data: NSData): PFFileObject;

	static fileObjectWithNameDataContentType(name: string, data: NSData, contentType: string): PFFileObject;

	static fileObjectWithNameDataContentTypeError(name: string, data: NSData, contentType: string): PFFileObject;

	static new(): PFFileObject; // inherited from NSObject

	readonly dataAvailable: boolean;

	readonly dirty: boolean;

	readonly name: string;

	readonly url: string;

	cancel(): void;

	clearCachedDataInBackground(): BFTask<any>;

	getData(): NSData;

	getDataDownloadStreamInBackground(): BFTask<NSInputStream>;

	getDataDownloadStreamInBackgroundWithProgressBlock(progressBlock: (p1: number) => void): BFTask<NSInputStream>;

	getDataInBackground(): BFTask<NSData>;

	getDataInBackgroundWithBlock(block: (p1: NSData, p2: NSError) => void): void;

	getDataInBackgroundWithBlockProgressBlock(resultBlock: (p1: NSData, p2: NSError) => void, progressBlock: (p1: number) => void): void;

	getDataInBackgroundWithProgressBlock(progressBlock: (p1: number) => void): BFTask<NSData>;

	getDataInBackgroundWithTargetSelector(target: any, selector: string): void;

	getDataStream(): NSInputStream;

	getDataStreamInBackground(): BFTask<NSInputStream>;

	getDataStreamInBackgroundWithBlock(block: (p1: NSInputStream, p2: NSError) => void): void;

	getDataStreamInBackgroundWithBlockProgressBlock(resultBlock: (p1: NSInputStream, p2: NSError) => void, progressBlock: (p1: number) => void): void;

	getDataStreamInBackgroundWithProgressBlock(progressBlock: (p1: number) => void): BFTask<NSInputStream>;

	getFilePathInBackground(): BFTask<string>;

	getFilePathInBackgroundWithBlock(block: (p1: string, p2: NSError) => void): void;

	getFilePathInBackgroundWithBlockProgressBlock(block: (p1: string, p2: NSError) => void, progressBlock: (p1: number) => void): void;

	getFilePathInBackgroundWithProgressBlock(progressBlock: (p1: number) => void): BFTask<string>;

	save(): boolean;

	saveInBackground(): BFTask<number>;

	saveInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	saveInBackgroundWithBlockProgressBlock(block: (p1: boolean, p2: NSError) => void, progressBlock: (p1: number) => void): void;

	saveInBackgroundWithProgressBlock(progressBlock: (p1: number) => void): BFTask<number>;

	saveInBackgroundWithTargetSelector(target: any, selector: string): void;
}

interface PFFileUploadController extends NSObjectProtocol {

	uploadSourceFilePathFileNameMimeTypeSessionTokenCancellationTokenProgressBlock(sourceFilePath: string, fileName: string, mimeType: string, sessionToken: string, cancellationToken: BFCancellationToken, progressBlock: (p1: number) => void): BFTask<PFFileUploadResult>;
}
declare var PFFileUploadController: {

	prototype: PFFileUploadController;
};

declare class PFFileUploadResult extends NSObject {

	static alloc(): PFFileUploadResult; // inherited from NSObject

	static new(): PFFileUploadResult; // inherited from NSObject

	name: string;

	url: string;
}

declare class PFGeoPoint extends NSObject implements NSCoding, NSCopying {

	static alloc(): PFGeoPoint; // inherited from NSObject

	static geoPoint(): PFGeoPoint;

	static geoPointForCurrentLocationInBackground(resultBlock: (p1: PFGeoPoint, p2: NSError) => void): void;

	static geoPointWithLatitudeLongitude(latitude: number, longitude: number): PFGeoPoint;

	static geoPointWithLocation(location: CLLocation): PFGeoPoint;

	static new(): PFGeoPoint; // inherited from NSObject

	latitude: number;

	longitude: number;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	distanceInKilometersTo(point: PFGeoPoint): number;

	distanceInMilesTo(point: PFGeoPoint): number;

	distanceInRadiansTo(point: PFGeoPoint): number;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class PFInstallation extends PFObject implements PFSubclassing {

	static alloc(): PFInstallation; // inherited from NSObject

	static currentInstallation(): PFInstallation;

	static getCurrentInstallationInBackground(): BFTask<PFInstallation>;

	static new(): PFInstallation; // inherited from NSObject

	static object(): PFInstallation; // inherited from PFObject

	static objectWithClassName(className: string): PFInstallation; // inherited from PFObject

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFInstallation; // inherited from PFObject

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFInstallation; // inherited from PFObject

	static objectWithoutDataWithObjectId(objectId: string): PFInstallation; // inherited from PFObject

	static parseClassName(): string;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerSubclass(): void;

	badge: number;

	channels: NSArray<string>;

	deviceToken: string;

	readonly deviceType: string;

	readonly installationId: string;

	readonly timeZone: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setDeviceTokenFromData(deviceTokenData: NSData): void;
}

declare var PFInvalidSessionTokenNotification: string;

declare class PFKnownParseObjectDecoder extends PFDecoder {

	static alloc(): PFKnownParseObjectDecoder; // inherited from NSObject

	static decoderWithFetchedObjects(fetchedObjects: NSDictionary<any, any>): PFKnownParseObjectDecoder;

	static new(): PFKnownParseObjectDecoder; // inherited from NSObject
}

declare const enum PFLogLevel {

	None = 0,

	Error = 1,

	Warning = 2,

	Info = 3,

	Debug = 4
}

declare class PFNetworkActivityIndicatorManager extends NSObject {

	static alloc(): PFNetworkActivityIndicatorManager; // inherited from NSObject

	static new(): PFNetworkActivityIndicatorManager; // inherited from NSObject

	static sharedManager(): PFNetworkActivityIndicatorManager;

	enabled: boolean;

	readonly networkActivityCount: number;

	readonly networkActivityIndicatorVisible: boolean;

	decrementActivityCount(): void;

	incrementActivityCount(): void;
}

declare var PFNetworkDidReceiveURLResponseNotification: string;

declare var PFNetworkNotificationURLRequestUserInfoKey: string;

declare var PFNetworkNotificationURLResponseBodyUserInfoKey: string;

declare var PFNetworkNotificationURLResponseUserInfoKey: string;

declare var PFNetworkWillSendURLRequestNotification: string;

declare class PFNoObjectEncoder extends PFEncoder {

	static alloc(): PFNoObjectEncoder; // inherited from NSObject

	static new(): PFNoObjectEncoder; // inherited from NSObject

	static objectEncoder(): PFNoObjectEncoder; // inherited from PFEncoder
}

declare class PFObject extends NSObject {

	static alloc(): PFObject; // inherited from NSObject

	static deleteAll(objects: NSArray<PFObject> | PFObject[]): boolean;

	static deleteAllError(objects: NSArray<PFObject> | PFObject[]): boolean;

	static deleteAllInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<number>;

	static deleteAllInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: boolean, p2: NSError) => void): void;

	static deleteAllInBackgroundTargetSelector(objects: NSArray<PFObject> | PFObject[], target: any, selector: string): void;

	static fetchAll(objects: NSArray<PFObject> | PFObject[]): NSArray<PFObject>;

	static fetchAllError(objects: NSArray<PFObject> | PFObject[]): NSArray<PFObject>;

	static fetchAllIfNeeded(objects: NSArray<PFObject> | PFObject[]): NSArray<PFObject>;

	static fetchAllIfNeededError(objects: NSArray<PFObject> | PFObject[]): NSArray<PFObject>;

	static fetchAllIfNeededInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<NSArray<PFObject>>;

	static fetchAllIfNeededInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: NSArray<any>, p2: NSError) => void): void;

	static fetchAllIfNeededInBackgroundTargetSelector(objects: NSArray<PFObject> | PFObject[], target: any, selector: string): void;

	static fetchAllInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<NSArray<PFObject>>;

	static fetchAllInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: NSArray<any>, p2: NSError) => void): void;

	static fetchAllInBackgroundTargetSelector(objects: NSArray<PFObject> | PFObject[], target: any, selector: string): void;

	static new(): PFObject; // inherited from NSObject

	static object(): PFObject;

	static objectWithClassName(className: string): PFObject;

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFObject;

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFObject;

	static objectWithoutDataWithObjectId(objectId: string): PFObject;

	static pinAll(objects: NSArray<PFObject> | PFObject[]): boolean;

	static pinAllError(objects: NSArray<PFObject> | PFObject[]): boolean;

	static pinAllInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<number>;

	static pinAllInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: boolean, p2: NSError) => void): void;

	static pinAllInBackgroundWithName(objects: NSArray<PFObject> | PFObject[], name: string): BFTask<number>;

	static pinAllInBackgroundWithNameBlock(objects: NSArray<PFObject> | PFObject[], name: string, block: (p1: boolean, p2: NSError) => void): void;

	static pinAllWithName(objects: NSArray<PFObject> | PFObject[], name: string): boolean;

	static pinAllWithNameError(objects: NSArray<PFObject> | PFObject[], name: string): boolean;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerSubclass(): void;

	static saveAll(objects: NSArray<PFObject> | PFObject[]): boolean;

	static saveAllError(objects: NSArray<PFObject> | PFObject[]): boolean;

	static saveAllInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<number>;

	static saveAllInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: boolean, p2: NSError) => void): void;

	static saveAllInBackgroundTargetSelector(objects: NSArray<PFObject> | PFObject[], target: any, selector: string): void;

	static unpinAll(objects: NSArray<PFObject> | PFObject[]): boolean;

	static unpinAllError(objects: NSArray<PFObject> | PFObject[]): boolean;

	static unpinAllInBackground(objects: NSArray<PFObject> | PFObject[]): BFTask<number>;

	static unpinAllInBackgroundBlock(objects: NSArray<PFObject> | PFObject[], block: (p1: boolean, p2: NSError) => void): void;

	static unpinAllInBackgroundWithName(objects: NSArray<PFObject> | PFObject[], name: string): BFTask<number>;

	static unpinAllInBackgroundWithNameBlock(objects: NSArray<PFObject> | PFObject[], name: string, block: (p1: boolean, p2: NSError) => void): void;

	static unpinAllObjects(): boolean;

	static unpinAllObjectsInBackground(): BFTask<number>;

	static unpinAllObjectsInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	static unpinAllObjectsInBackgroundWithName(name: string): BFTask<number>;

	static unpinAllObjectsInBackgroundWithNameBlock(name: string, block: (p1: boolean, p2: NSError) => void): void;

	static unpinAllObjectsWithName(name: string): boolean;

	static unpinAllObjectsWithNameError(name: string): boolean;

	static unpinAllWithName(objects: NSArray<PFObject> | PFObject[], name: string): boolean;

	static unpinAllWithNameError(objects: NSArray<PFObject> | PFObject[], name: string): boolean;

	ACL: PFACL;

	readonly allKeys: NSArray<string>;

	readonly createdAt: Date;

	readonly dataAvailable: boolean;

	readonly dirty: boolean;

	objectId: string;

	readonly parseClassName: string;

	readonly updatedAt: Date;

	constructor(o: { className: string; });

	addObjectForKey(object: any, key: string): void;

	addObjectsFromArrayForKey(objects: NSArray<any> | any[], key: string): void;

	addUniqueObjectForKey(object: any, key: string): void;

	addUniqueObjectsFromArrayForKey(objects: NSArray<any> | any[], key: string): void;

	delete(): boolean;

	deleteEventually(): BFTask<number>;

	deleteInBackground(): BFTask<number>;

	deleteInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	deleteInBackgroundWithTargetSelector(target: any, selector: string): void;

	fetch(): this;

	fetchFromLocalDatastore(): this;

	fetchFromLocalDatastoreInBackground(): BFTask<PFObject>;

	fetchFromLocalDatastoreInBackgroundWithBlock(block: (p1: PFObject, p2: NSError) => void): void;

	fetchIfNeeded(): this;

	fetchIfNeededInBackground(): BFTask<PFObject>;

	fetchIfNeededInBackgroundWithBlock(block: (p1: PFObject, p2: NSError) => void): void;

	fetchIfNeededInBackgroundWithTargetSelector(target: any, selector: string): void;

	fetchInBackground(): BFTask<PFObject>;

	fetchInBackgroundWithBlock(block: (p1: PFObject, p2: NSError) => void): void;

	fetchInBackgroundWithTargetSelector(target: any, selector: string): void;

	incrementKey(key: string): void;

	incrementKeyByAmount(key: string, amount: number): void;

	initWithClassName(newClassName: string): this;

	isDirtyForKey(key: string): boolean;

	objectForKey(key: string): any;

	objectForKeyedSubscript(key: string): any;

	pin(): boolean;

	pinInBackground(): BFTask<number>;

	pinInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	pinInBackgroundWithName(name: string): BFTask<number>;

	pinInBackgroundWithNameBlock(name: string, block: (p1: boolean, p2: NSError) => void): void;

	pinWithName(name: string): boolean;

	pinWithNameError(name: string): boolean;

	refresh(): this;

	refreshInBackgroundWithBlock(block: (p1: PFObject, p2: NSError) => void): void;

	refreshInBackgroundWithTargetSelector(target: any, selector: string): void;

	relationForKey(key: string): PFRelation<any>;

	relationforKey(key: string): PFRelation<any>;

	removeObjectForKey(key: string): void;

	removeObjectsInArrayForKey(objects: NSArray<any> | any[], key: string): void;

	revert(): void;

	revertObjectForKey(key: string): void;

	save(): boolean;

	saveEventually(callback: (p1: boolean, p2: NSError) => void): void;

	saveInBackground(): BFTask<number>;

	saveInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	saveInBackgroundWithTargetSelector(target: any, selector: string): void;

	setObjectForKey(object: any, key: string): void;

	setObjectForKeyedSubscript(object: any, key: string): void;

	unpin(): boolean;

	unpinInBackground(): BFTask<number>;

	unpinInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	unpinInBackgroundWithName(name: string): BFTask<number>;

	unpinInBackgroundWithNameBlock(name: string, block: (p1: boolean, p2: NSError) => void): void;

	unpinWithName(name: string): boolean;

	unpinWithNameError(name: string): boolean;
}

declare var PFObjectDefaultPin: string;

declare class PFOfflineDecoder extends PFDecoder {

	static alloc(): PFOfflineDecoder; // inherited from NSObject

	static decoderWithOfflineObjects(offlineObjects: NSDictionary<any, any>): PFOfflineDecoder;

	static new(): PFOfflineDecoder; // inherited from NSObject
}

declare class PFOfflineObjectEncoder extends PFEncoder {

	static alloc(): PFOfflineObjectEncoder; // inherited from NSObject

	static new(): PFOfflineObjectEncoder; // inherited from NSObject

	static objectEncoder(): PFOfflineObjectEncoder; // inherited from PFEncoder

	encodeFinished(): BFTask<any>;
}

declare var PFParseErrorDomain: string;

declare var PFParseInitializeDidCompleteNotification: string;

declare class PFPointerObjectEncoder extends PFPointerOrLocalIdObjectEncoder {

	static alloc(): PFPointerObjectEncoder; // inherited from NSObject

	static new(): PFPointerObjectEncoder; // inherited from NSObject

	static objectEncoder(): PFPointerObjectEncoder; // inherited from PFEncoder
}

declare class PFPointerOrLocalIdObjectEncoder extends PFEncoder {

	static alloc(): PFPointerOrLocalIdObjectEncoder; // inherited from NSObject

	static new(): PFPointerOrLocalIdObjectEncoder; // inherited from NSObject

	static objectEncoder(): PFPointerOrLocalIdObjectEncoder; // inherited from PFEncoder
}

declare class PFPolygon extends NSObject implements NSCoding, NSCopying {

	static alloc(): PFPolygon; // inherited from NSObject

	static new(): PFPolygon; // inherited from NSObject

	static polygonWithCoordinates(coordinates: NSArray<any> | any[]): PFPolygon;

	coordinates: NSArray<any>;

	constructor(o: { coder: NSCoder; }); // inherited from NSCoding

	containsPoint(point: PFGeoPoint): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	encodeWithCoder(coder: NSCoder): void;

	initWithCoder(coder: NSCoder): this;
}

declare class PFProduct extends PFObject implements PFSubclassing {

	static alloc(): PFProduct; // inherited from NSObject

	static new(): PFProduct; // inherited from NSObject

	static object(): PFProduct; // inherited from PFObject

	static objectWithClassName(className: string): PFProduct; // inherited from PFObject

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFProduct; // inherited from PFObject

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFProduct; // inherited from PFObject

	static objectWithoutDataWithObjectId(objectId: string): PFProduct; // inherited from PFObject

	static parseClassName(): string;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerSubclass(): void;

	readonly downloadName: string;

	icon: PFFileObject;

	order: number;

	productIdentifier: string;

	subtitle: string;

	title: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

declare class PFPurchase extends NSObject {

	static addObserverForProductBlock(productIdentifier: string, block: (p1: SKPaymentTransaction) => void): void;

	static alloc(): PFPurchase; // inherited from NSObject

	static assetContentPathForProduct(product: PFProduct): string;

	static buyProductBlock(productIdentifier: string, block: (p1: NSError) => void): void;

	static downloadAssetForTransactionCompletion(transaction: SKPaymentTransaction, completion: (p1: string, p2: NSError) => void): void;

	static downloadAssetForTransactionCompletionProgress(transaction: SKPaymentTransaction, completion: (p1: string, p2: NSError) => void, progress: (p1: number) => void): void;

	static new(): PFPurchase; // inherited from NSObject

	static restore(): void;
}

declare class PFPush extends NSObject implements NSCopying {

	static alloc(): PFPush; // inherited from NSObject

	static getSubscribedChannels(): NSSet<string>;

	static getSubscribedChannelsInBackground(): BFTask<NSSet<string>>;

	static getSubscribedChannelsInBackgroundWithBlock(block: (p1: NSSet<any>, p2: NSError) => void): void;

	static getSubscribedChannelsInBackgroundWithTargetSelector(target: any, selector: string): void;

	static handlePush(userInfo: NSDictionary<any, any>): void;

	static new(): PFPush; // inherited from NSObject

	static push(): PFPush;

	static sendPushDataToChannelInBackgroundWithData(channel: string, data: NSDictionary<any, any>): BFTask<number>;

	static sendPushDataToChannelInBackgroundWithDataBlock(channel: string, data: NSDictionary<any, any>, block: (p1: boolean, p2: NSError) => void): void;

	static sendPushDataToChannelInBackgroundWithDataTargetSelector(channel: string, data: NSDictionary<any, any>, target: any, selector: string): void;

	static sendPushDataToChannelWithDataError(channel: string, data: NSDictionary<any, any>): boolean;

	static sendPushDataToQueryInBackgroundWithData(query: PFQuery<PFInstallation>, data: NSDictionary<any, any>): BFTask<number>;

	static sendPushDataToQueryInBackgroundWithDataBlock(query: PFQuery<PFInstallation>, data: NSDictionary<any, any>, block: (p1: boolean, p2: NSError) => void): void;

	static sendPushDataToQueryWithDataError(query: PFQuery<PFInstallation>, data: NSDictionary<any, any>): boolean;

	static sendPushMessageToChannelInBackgroundWithMessage(channel: string, message: string): BFTask<number>;

	static sendPushMessageToChannelInBackgroundWithMessageBlock(channel: string, message: string, block: (p1: boolean, p2: NSError) => void): void;

	static sendPushMessageToChannelInBackgroundWithMessageTargetSelector(channel: string, message: string, target: any, selector: string): void;

	static sendPushMessageToChannelWithMessageError(channel: string, message: string): boolean;

	static sendPushMessageToQueryInBackgroundWithMessage(query: PFQuery<PFInstallation>, message: string): BFTask<number>;

	static sendPushMessageToQueryInBackgroundWithMessageBlock(query: PFQuery<PFInstallation>, message: string, block: (p1: boolean, p2: NSError) => void): void;

	static sendPushMessageToQueryWithMessageError(query: PFQuery<PFInstallation>, message: string): boolean;

	static storeDeviceToken(deviceToken: any): void;

	static subscribeToChannelError(channel: string): boolean;

	static subscribeToChannelInBackground(channel: string): BFTask<number>;

	static subscribeToChannelInBackgroundBlock(channel: string, block: (p1: boolean, p2: NSError) => void): void;

	static subscribeToChannelInBackgroundTargetSelector(channel: string, target: any, selector: string): void;

	static unsubscribeFromChannelError(channel: string): boolean;

	static unsubscribeFromChannelInBackground(channel: string): BFTask<number>;

	static unsubscribeFromChannelInBackgroundBlock(channel: string, block: (p1: boolean, p2: NSError) => void): void;

	static unsubscribeFromChannelInBackgroundTargetSelector(channel: string, target: any, selector: string): void;

	pushDate: Date;

	clearExpiration(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	expireAfterTimeInterval(timeInterval: number): void;

	expireAtDate(date: Date): void;

	sendPush(): boolean;

	sendPushInBackground(): BFTask<number>;

	sendPushInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	sendPushInBackgroundWithTargetSelector(target: any, selector: string): void;

	setChannel(channel: string): void;

	setChannels(channels: NSArray<string> | string[]): void;

	setData(data: NSDictionary<any, any>): void;

	setMessage(message: string): void;

	setPushToAndroid(pushToAndroid: boolean): void;

	setPushToIOS(pushToIOS: boolean): void;

	setQuery(query: PFQuery<PFInstallation>): void;
}

declare class PFQuery<PFGenericObject> extends NSObject implements NSCopying {

	static alloc<PFGenericObject>(): PFQuery<PFGenericObject>; // inherited from NSObject

	static clearAllCachedResults(): void;

	static getObjectOfClassObjectId(objectClass: string, objectId: string): PFGenericObject;

	static getObjectOfClassObjectIdError(objectClass: string, objectId: string): PFGenericObject;

	static getUserObjectWithId(objectId: string): PFUser;

	static getUserObjectWithIdError(objectId: string): PFUser;

	static new<PFGenericObject>(): PFQuery<PFGenericObject>; // inherited from NSObject

	static orQueryWithSubqueries<PFGenericObject>(queries: NSArray<PFQuery<any>> | PFQuery<any>[]): PFQuery<PFGenericObject>;

	static queryForUser<PFGenericObject>(): PFQuery<PFGenericObject>;

	static queryWithClassName<PFGenericObject>(className: string): PFQuery<PFGenericObject>;

	static queryWithClassNamePredicate<PFGenericObject>(className: string, predicate: NSPredicate): PFQuery<PFGenericObject>;

	cachePolicy: PFCachePolicy;

	readonly hasCachedResult: boolean;

	limit: number;

	maxCacheAge: number;

	parseClassName: string;

	skip: number;

	trace: boolean;

	constructor(o: { className: string; });

	addAscendingOrder(key: string): this;

	addDescendingOrder(key: string): this;

	cancel(): void;

	clearCachedResult(): void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	countObjects(): number;

	countObjectsInBackground(): BFTask<number>;

	countObjectsInBackgroundWithBlock(block: (p1: number, p2: NSError) => void): void;

	countObjectsInBackgroundWithTargetSelector(target: any, selector: string): void;

	findObjects(): NSArray<PFGenericObject>;

	findObjectsInBackground(): BFTask<NSArray<PFGenericObject>>;

	findObjectsInBackgroundWithBlock(block: (p1: NSArray<PFGenericObject>, p2: NSError) => void): void;

	findObjectsInBackgroundWithTargetSelector(target: any, selector: string): void;

	fromLocalDatastore(): this;

	fromPin(): this;

	fromPinWithName(name: string): this;

	getFirstObject(): PFGenericObject;

	getFirstObjectInBackground(): BFTask<PFGenericObject>;

	getFirstObjectInBackgroundWithBlock(block: (p1: PFGenericObject, p2: NSError) => void): void;

	getFirstObjectInBackgroundWithTargetSelector(target: any, selector: string): void;

	getObjectInBackgroundWithId(objectId: string): BFTask<PFGenericObject>;

	getObjectInBackgroundWithIdBlock(objectId: string, block: (p1: PFGenericObject, p2: NSError) => void): void;

	getObjectInBackgroundWithIdTargetSelector(objectId: string, target: any, selector: string): void;

	getObjectWithId(objectId: string): PFGenericObject;

	getObjectWithIdError(objectId: string): PFGenericObject;

	ignoreACLs(): this;

	includeKey(key: string): this;

	includeKeys(keys: NSArray<string> | string[]): this;

	initWithClassName(className: string): this;

	orderByAscending(key: string): this;

	orderByDescending(key: string): this;

	orderBySortDescriptor(sortDescriptor: NSSortDescriptor): this;

	orderBySortDescriptors(sortDescriptors: NSArray<NSSortDescriptor> | NSSortDescriptor[]): this;

	selectKeys(keys: NSArray<string> | string[]): this;

	whereKeyContainedIn(key: string, array: NSArray<any> | any[]): this;

	whereKeyContainsAllObjectsInArray(key: string, array: NSArray<any> | any[]): this;

	whereKeyContainsString(key: string, substring: string): this;

	whereKeyDoesNotExist(key: string): this;

	whereKeyDoesNotMatchKeyInQuery(key: string, otherKey: string, query: PFQuery<any>): this;

	whereKeyDoesNotMatchQuery(key: string, query: PFQuery<any>): this;

	whereKeyEqualTo(key: string, object: any): this;

	whereKeyExists(key: string): this;

	whereKeyGreaterThan(key: string, object: any): this;

	whereKeyGreaterThanOrEqualTo(key: string, object: any): this;

	whereKeyHasPrefix(key: string, prefix: string): this;

	whereKeyHasSuffix(key: string, suffix: string): this;

	whereKeyLessThan(key: string, object: any): this;

	whereKeyLessThanOrEqualTo(key: string, object: any): this;

	whereKeyMatchesKeyInQuery(key: string, otherKey: string, query: PFQuery<any>): this;

	whereKeyMatchesQuery(key: string, query: PFQuery<any>): this;

	whereKeyMatchesRegex(key: string, regex: string): this;

	whereKeyMatchesRegexModifiers(key: string, regex: string, modifiers: string): this;

	whereKeyMatchesText(key: string, text: string): this;

	whereKeyNearGeoPoint(key: string, geopoint: PFGeoPoint): this;

	whereKeyNearGeoPointWithinKilometers(key: string, geopoint: PFGeoPoint, maxDistance: number): this;

	whereKeyNearGeoPointWithinMiles(key: string, geopoint: PFGeoPoint, maxDistance: number): this;

	whereKeyNearGeoPointWithinRadians(key: string, geopoint: PFGeoPoint, maxDistance: number): this;

	whereKeyNotContainedIn(key: string, array: NSArray<any> | any[]): this;

	whereKeyNotEqualTo(key: string, object: any): this;

	whereKeyPolygonContains(key: string, point: PFGeoPoint): this;

	whereKeyWithinGeoBoxFromSouthwestToNortheast(key: string, southwest: PFGeoPoint, northeast: PFGeoPoint): this;

	whereKeyWithinPolygon(key: string, points: NSArray<PFGeoPoint> | PFGeoPoint[]): this;
}

declare class PFRelation<ObjectType> extends NSObject {

	static alloc<ObjectType>(): PFRelation<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): PFRelation<ObjectType>; // inherited from NSObject

	targetClass: string;

	addObject(object: ObjectType): void;

	query(): PFQuery<ObjectType>;

	removeObject(object: ObjectType): void;
}

declare class PFRole extends PFObject implements PFSubclassing {

	static alloc(): PFRole; // inherited from NSObject

	static new(): PFRole; // inherited from NSObject

	static object(): PFRole; // inherited from PFObject

	static objectWithClassName(className: string): PFRole; // inherited from PFObject

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFRole; // inherited from PFObject

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFRole; // inherited from PFObject

	static objectWithoutDataWithObjectId(objectId: string): PFRole; // inherited from PFObject

	static parseClassName(): string;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerSubclass(): void;

	static roleWithName(name: string): PFRole;

	static roleWithNameAcl(name: string, acl: PFACL): PFRole;

	name: string;

	readonly roles: PFRelation<PFRole>;

	readonly users: PFRelation<PFUser>;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; });

	constructor(o: { name: string; acl: PFACL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithName(name: string): this;

	initWithNameAcl(name: string, acl: PFACL): this;

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

declare class PFSession extends PFObject implements PFSubclassing {

	static alloc(): PFSession; // inherited from NSObject

	static getCurrentSessionInBackground(): BFTask<PFSession>;

	static getCurrentSessionInBackgroundWithBlock(block: (p1: PFSession, p2: NSError) => void): void;

	static new(): PFSession; // inherited from NSObject

	static object(): PFSession; // inherited from PFObject

	static objectWithClassName(className: string): PFSession; // inherited from PFObject

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFSession; // inherited from PFObject

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFSession; // inherited from PFObject

	static objectWithoutDataWithObjectId(objectId: string): PFSession; // inherited from PFObject

	static parseClassName(): string;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerSubclass(): void;

	readonly sessionToken: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

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

interface PFSubclassing extends NSObjectProtocol {
}
declare var PFSubclassing: {

	prototype: PFSubclassing;

	objectWithoutDataWithObjectId?(objectId: string): PFSubclassing;

	parseClassName(): string;

	query?(): PFQuery<any>;

	queryWithPredicate?(predicate: NSPredicate): PFQuery<any>;

	registerSubclass?(): void;
};

interface PFSubclassingSkipAutomaticRegistration extends PFSubclassing {
}
declare var PFSubclassingSkipAutomaticRegistration: {

	prototype: PFSubclassingSkipAutomaticRegistration;

	objectWithoutDataWithObjectId?(objectId: string): PFSubclassingSkipAutomaticRegistration;

	parseClassName(): string;

	query?(): PFQuery<any>;

	queryWithPredicate?(predicate: NSPredicate): PFQuery<any>;

	registerSubclass?(): void;
};

declare class PFUser extends PFObject implements PFSubclassing {

	static alloc(): PFUser; // inherited from NSObject

	static become(sessionToken: string): PFUser;

	static becomeError(sessionToken: string): PFUser;

	static becomeInBackground(sessionToken: string): BFTask<PFUser>;

	static becomeInBackgroundBlock(sessionToken: string, block: (p1: PFUser, p2: NSError) => void): void;

	static becomeInBackgroundTargetSelector(sessionToken: string, target: any, selector: string): void;

	static currentUser(): PFUser;

	static enableAutomaticUser(): void;

	static enableRevocableSessionInBackground(): BFTask<any>;

	static enableRevocableSessionInBackgroundWithBlock(block: (p1: NSError) => void): void;

	static getCurrentUserInBackground(): BFTask<PFUser>;

	static logInWithAuthTypeInBackgroundAuthData(authType: string, authData: NSDictionary<string, string>): BFTask<PFUser>;

	static logInWithUsernameInBackgroundPassword(username: string, password: string): BFTask<PFUser>;

	static logInWithUsernameInBackgroundPasswordBlock(username: string, password: string, block: (p1: PFUser, p2: NSError) => void): void;

	static logInWithUsernameInBackgroundPasswordTargetSelector(username: string, password: string, target: any, selector: string): void;

	static logInWithUsernamePassword(username: string, password: string): PFUser;

	static logInWithUsernamePasswordError(username: string, password: string): PFUser;

	static logOut(): void;

	static logOutInBackground(): BFTask<any>;

	static logOutInBackgroundWithBlock(block: (p1: NSError) => void): void;

	static new(): PFUser; // inherited from NSObject

	static object(): PFUser; // inherited from PFObject

	static objectWithClassName(className: string): PFUser; // inherited from PFObject

	static objectWithClassNameDictionary(className: string, dictionary: NSDictionary<string, any>): PFUser; // inherited from PFObject

	static objectWithoutDataWithClassNameObjectId(className: string, objectId: string): PFUser; // inherited from PFObject

	static objectWithoutDataWithObjectId(objectId: string): PFUser; // inherited from PFObject

	static parseClassName(): string;

	static query(): PFQuery<any>;

	static queryWithPredicate(predicate: NSPredicate): PFQuery<any>;

	static registerAuthenticationDelegateForAuthType(delegate: PFUserAuthenticationDelegate, authType: string): void;

	static registerSubclass(): void;

	static requestPasswordResetForEmail(email: string): boolean;

	static requestPasswordResetForEmailError(email: string): boolean;

	static requestPasswordResetForEmailInBackground(email: string): BFTask<number>;

	static requestPasswordResetForEmailInBackgroundBlock(email: string, block: (p1: boolean, p2: NSError) => void): void;

	static requestPasswordResetForEmailInBackgroundTargetSelector(email: string, target: any, selector: string): void;

	static user(): PFUser;

	readonly authenticated: boolean;

	email: string;

	readonly isNew: boolean;

	password: string;

	readonly sessionToken: string;

	username: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isLinkedWithAuthType(authType: string): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	linkWithAuthTypeInBackgroundAuthData(authType: string, authData: NSDictionary<string, string>): BFTask<number>;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	signUp(): boolean;

	signUpInBackground(): BFTask<number>;

	signUpInBackgroundWithBlock(block: (p1: boolean, p2: NSError) => void): void;

	signUpInBackgroundWithTargetSelector(target: any, selector: string): void;

	unlinkWithAuthTypeInBackground(authType: string): BFTask<number>;
}

interface PFUserAuthenticationDelegate extends NSObjectProtocol {

	restoreAuthenticationWithAuthData(authData: NSDictionary<string, string>): boolean;
}
declare var PFUserAuthenticationDelegate: {

	prototype: PFUserAuthenticationDelegate;
};

declare class Parse extends NSObject {

	static alloc(): Parse; // inherited from NSObject

	static applicationGroupIdentifierForDataSharing(): string;

	static containingApplicationBundleIdentifierForDataSharing(): string;

	static enableDataSharingWithApplicationGroupIdentifier(groupIdentifier: string): void;

	static enableDataSharingWithApplicationGroupIdentifierContainingApplication(groupIdentifier: string, bundleIdentifier: string): void;

	static enableLocalDatastore(): void;

	static errorMessagesEnabled(enabled: boolean): void;

	static getApplicationId(): string;

	static getClientKey(): string;

	static initializeWithConfiguration(configuration: ParseClientConfiguration): void;

	static new(): Parse; // inherited from NSObject

	static offlineMessagesEnabled(enabled: boolean): void;

	static setApplicationIdClientKey(applicationId: string, clientKey: string): void;

	static setServer(server: string): void;

	static readonly applicationId: string;

	static readonly clientKey: string;

	static readonly currentConfiguration: ParseClientConfiguration;

	static readonly isLocalDatastoreEnabled: boolean;

	static logLevel: PFLogLevel;

	static readonly server: string;
}

declare class ParseClientConfiguration extends NSObject implements NSCopying {

	static alloc(): ParseClientConfiguration; // inherited from NSObject

	static configurationWithBlock(configurationBlock: (p1: ParseMutableClientConfiguration) => void): ParseClientConfiguration;

	static new(): ParseClientConfiguration; // inherited from NSObject

	readonly URLSessionConfiguration: NSURLSessionConfiguration;

	readonly applicationGroupIdentifier: string;

	readonly applicationId: string;

	readonly clientKey: string;

	readonly containingApplicationBundleIdentifier: string;

	readonly fileUploadController: PFFileUploadController;

	readonly localDatastoreEnabled: boolean;

	readonly networkRetryAttempts: number;

	readonly server: string;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

interface ParseMutableClientConfiguration extends NSObjectProtocol {

	URLSessionConfiguration: NSURLSessionConfiguration;

	applicationGroupIdentifier: string;

	applicationId: string;

	clientKey: string;

	containingApplicationBundleIdentifier: string;

	fileUploadController: PFFileUploadController;

	localDatastoreEnabled: boolean;

	networkRetryAttempts: number;

	server: string;
}
declare var ParseMutableClientConfiguration: {

	prototype: ParseMutableClientConfiguration;
};

declare var ParseVersionNumber: number;

declare var ParseVersionString: interop.Reference<number>;

declare var kPFDeviceType: string;
