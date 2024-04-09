
declare class CBLArray extends NSObject implements CBLArrayProtocol, NSCopying, NSMutableCopying {

	static alloc(): CBLArray; // inherited from NSObject

	static new(): CBLArray; // inherited from NSObject

	readonly count: number; // inherited from CBLArrayProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[index: number]: CBLFragment;
	[Symbol.iterator](): Iterator<any>;

	arrayAtIndex(index: number): CBLArray;

	blobAtIndex(index: number): CBLBlob;

	booleanAtIndex(index: number): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dateAtIndex(index: number): Date;

	dictionaryAtIndex(index: number): CBLDictionary;

	doubleAtIndex(index: number): number;

	floatAtIndex(index: number): number;

	integerAtIndex(index: number): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongAtIndex(index: number): number;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	numberAtIndex(index: number): number;

	objectAtIndexedSubscript(index: number): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stringAtIndex(index: number): string;

	toArray(): NSArray<any>;

	toJSON(): string;

	toMutable(): CBLMutableArray;

	valueAtIndex(index: number): any;
}

interface CBLArrayFragment extends NSObjectProtocol {

	objectAtIndexedSubscript(index: number): CBLFragment;
}
declare var CBLArrayFragment: {

	prototype: CBLArrayFragment;
};

interface CBLArrayProtocol extends CBLArrayFragment, NSFastEnumeration, NSObjectProtocol {

	count: number;

	arrayAtIndex(index: number): CBLArray;

	blobAtIndex(index: number): CBLBlob;

	booleanAtIndex(index: number): boolean;

	dateAtIndex(index: number): Date;

	dictionaryAtIndex(index: number): CBLDictionary;

	doubleAtIndex(index: number): number;

	floatAtIndex(index: number): number;

	integerAtIndex(index: number): number;

	longLongAtIndex(index: number): number;

	numberAtIndex(index: number): number;

	stringAtIndex(index: number): string;

	toArray(): NSArray<any>;

	toJSON(): string;

	valueAtIndex(index: number): any;
}
declare var CBLArrayProtocol: {

	prototype: CBLArrayProtocol;
};

declare class CBLAuthenticator extends NSObject {

	static alloc(): CBLAuthenticator; // inherited from NSObject

	static new(): CBLAuthenticator; // inherited from NSObject
}

declare class CBLBasicAuthenticator extends CBLAuthenticator {

	static alloc(): CBLBasicAuthenticator; // inherited from NSObject

	static new(): CBLBasicAuthenticator; // inherited from NSObject

	readonly password: string;

	readonly username: string;

	constructor(o: { username: string; password: string; });

	initWithUsernamePassword(username: string, password: string): this;
}

declare class CBLBlob extends NSObject {

	static alloc(): CBLBlob; // inherited from NSObject

	static isBlob(properties: NSDictionary<string, any>): boolean;

	static new(): CBLBlob; // inherited from NSObject

	readonly content: NSData;

	readonly contentStream: NSInputStream;

	readonly contentType: string;

	readonly digest: string;

	readonly length: number;

	readonly properties: NSDictionary<string, any>;

	constructor(o: { contentType: string; contentStream: NSInputStream; });

	constructor(o: { contentType: string; data: NSData; });

	constructor(o: { contentType: string; fileURL: NSURL; });

	initWithContentTypeContentStream(contentType: string, stream: NSInputStream): this;

	initWithContentTypeData(contentType: string, data: NSData): this;

	initWithContentTypeFileURLError(contentType: string, fileURL: NSURL): this;

	toJSON(): string;
}

declare class CBLCollection extends NSObject implements CBLCollectionChangeObservable, CBLIndexable, NSCopying {

	static alloc(): CBLCollection; // inherited from NSObject

	static new(): CBLCollection; // inherited from NSObject

	readonly count: number;

	readonly name: string;

	readonly scope: CBLScope;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addChangeListener(listener: (p1: CBLCollectionChange) => void): CBLListenerToken;

	addChangeListenerWithQueueListener(queue: NSObject, listener: (p1: CBLCollectionChange) => void): CBLListenerToken;

	addDocumentChangeListenerWithIDListener(id: string, listener: (p1: CBLDocumentChange) => void): CBLListenerToken;

	addDocumentChangeListenerWithIDQueueListener(documentID: string, queue: NSObject, listener: (p1: CBLDocumentChange) => void): CBLListenerToken;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	createIndexNameError(index: CBLIndex, name: string): boolean;

	createIndexWithNameConfigError(name: string, config: CBLIndexConfiguration): boolean;

	deleteDocumentConcurrencyControlError(document: CBLDocument, concurrencyControl: CBLConcurrencyControl): boolean;

	deleteDocumentError(document: CBLDocument): boolean;

	deleteIndexWithNameError(name: string): boolean;

	documentWithIDError(documentID: string): CBLDocument;

	getDocumentExpirationWithIDError(documentID: string): Date;

	indexes(): NSArray<string>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKeyedSubscript(documentID: string): CBLDocumentFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	purgeDocumentError(document: CBLDocument): boolean;

	purgeDocumentWithIDError(documentID: string): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveDocumentConcurrencyControlError(document: CBLMutableDocument, concurrencyControl: CBLConcurrencyControl): boolean;

	saveDocumentConflictHandlerError(document: CBLMutableDocument, conflictHandler: (p1: CBLMutableDocument, p2: CBLDocument) => boolean): boolean;

	saveDocumentError(document: CBLMutableDocument): boolean;

	self(): this;

	setDocumentExpirationWithIDExpirationError(documentID: string, date: Date): boolean;
}

declare class CBLCollectionChange extends NSObject {

	static alloc(): CBLCollectionChange; // inherited from NSObject

	static new(): CBLCollectionChange; // inherited from NSObject

	readonly collection: CBLCollection;

	readonly documentIDs: NSArray<string>;
}

interface CBLCollectionChangeObservable extends NSObjectProtocol {

	addChangeListener(listener: (p1: CBLCollectionChange) => void): CBLListenerToken;

	addChangeListenerWithQueueListener(queue: NSObject, listener: (p1: CBLCollectionChange) => void): CBLListenerToken;
}
declare var CBLCollectionChangeObservable: {

	prototype: CBLCollectionChangeObservable;
};

declare class CBLCollectionConfiguration extends NSObject {

	static alloc(): CBLCollectionConfiguration; // inherited from NSObject

	static new(): CBLCollectionConfiguration; // inherited from NSObject

	channels: NSArray<string>;

	conflictResolver: CBLConflictResolverProtocol;

	documentIDs: NSArray<string>;

	pullFilter: (p1: CBLDocument, p2: CBLDocumentFlags) => boolean;

	pushFilter: (p1: CBLDocument, p2: CBLDocumentFlags) => boolean;
}

declare const enum CBLConcurrencyControl {

	kCBLConcurrencyControlLastWriteWins = 0,

	kCBLConcurrencyControlFailOnConflict = 1
}

declare class CBLConflict extends NSObject {

	static alloc(): CBLConflict; // inherited from NSObject

	static new(): CBLConflict; // inherited from NSObject

	readonly documentID: string;

	readonly localDocument: CBLDocument;

	readonly remoteDocument: CBLDocument;
}

declare class CBLConflictResolver extends NSObject {

	static alloc(): CBLConflictResolver; // inherited from NSObject

	static default(): CBLConflictResolverProtocol;

	static new(): CBLConflictResolver; // inherited from NSObject
}

interface CBLConflictResolverProtocol extends NSObjectProtocol {

	resolve(conflict: CBLConflict): CBLDocument;
}
declare var CBLConflictResolverProtocol: {

	prototype: CBLConflictResolverProtocol;
};

declare class CBLConsoleLogger extends NSObject implements CBLLogger {

	static alloc(): CBLConsoleLogger; // inherited from NSObject

	static new(): CBLConsoleLogger; // inherited from NSObject

	domains: CBLLogDomain;

	level: CBLLogLevel;

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

	logWithLevelDomainMessage(level: CBLLogLevel, domain: CBLLogDomain, message: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CBLDatabase extends NSObject implements CBLQueryFactory {

	static alloc(): CBLDatabase; // inherited from NSObject

	static copyFromPathToDatabaseWithConfigError(path: string, name: string, config: CBLDatabaseConfiguration): boolean;

	static databaseExistsInDirectory(name: string, directory: string): boolean;

	static deleteDatabaseInDirectoryError(name: string, directory: string): boolean;

	static log(): CBLLog;

	static new(): CBLDatabase; // inherited from NSObject

	readonly config: CBLDatabaseConfiguration;

	readonly count: number;

	readonly indexes: NSArray<string>;

	readonly name: string;

	readonly path: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { name: string; config: CBLDatabaseConfiguration; });

	constructor(o: { name: string; });

	addChangeListener(listener: (p1: CBLDatabaseChange) => void): CBLListenerToken;

	addChangeListenerWithQueueListener(queue: NSObject, listener: (p1: CBLDatabaseChange) => void): CBLListenerToken;

	addDocumentChangeListenerWithIDListener(id: string, listener: (p1: CBLDocumentChange) => void): CBLListenerToken;

	addDocumentChangeListenerWithIDQueueListener(id: string, queue: NSObject, listener: (p1: CBLDocumentChange) => void): CBLListenerToken;

	class(): typeof NSObject;

	close(): boolean;

	collectionWithNameScopeError(name: string, scope: string): CBLCollection;

	collectionsError(scope: string): NSArray<CBLCollection>;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	createCollectionWithNameScopeError(name: string, scope: string): CBLCollection;

	createIndexWithConfigNameError(config: CBLIndexConfiguration, name: string): boolean;

	createIndexWithNameError(index: CBLIndex, name: string): boolean;

	createQueryError(query: string): CBLQuery;

	defaultCollection(): CBLCollection;

	defaultScope(): CBLScope;

	delete(): boolean;

	deleteCollectionWithNameScopeError(name: string, scope: string): boolean;

	deleteDocumentConcurrencyControlError(document: CBLDocument, concurrencyControl: CBLConcurrencyControl): boolean;

	deleteDocumentError(document: CBLDocument): boolean;

	deleteIndexForNameError(name: string): boolean;

	documentWithID(id: string): CBLDocument;

	getBlob(properties: NSDictionary<any, any>): CBLBlob;

	getDocumentExpirationWithID(documentID: string): Date;

	inBatchUsingBlock(error: interop.Pointer | interop.Reference<NSError>, block: () => void): boolean;

	initWithNameConfigError(name: string, config: CBLDatabaseConfiguration): this;

	initWithNameError(name: string): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectForKeyedSubscript(documentID: string): CBLDocumentFragment;

	performMaintenanceError(type: CBLMaintenanceType): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	purgeDocumentError(document: CBLDocument): boolean;

	purgeDocumentWithIDError(documentID: string): boolean;

	removeChangeListenerWithToken(token: CBLListenerToken): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	saveBlobError(blob: CBLBlob): boolean;

	saveDocumentConcurrencyControlError(document: CBLMutableDocument, concurrencyControl: CBLConcurrencyControl): boolean;

	saveDocumentConflictHandlerError(document: CBLMutableDocument, conflictHandler: (p1: CBLMutableDocument, p2: CBLDocument) => boolean): boolean;

	saveDocumentError(document: CBLMutableDocument): boolean;

	scopeWithNameError(name: string): CBLScope;

	scopes(): NSArray<CBLScope>;

	self(): this;

	setDocumentExpirationWithIDExpirationError(documentID: string, date: Date): boolean;
}

declare class CBLDatabaseChange extends NSObject {

	static alloc(): CBLDatabaseChange; // inherited from NSObject

	static new(): CBLDatabaseChange; // inherited from NSObject

	readonly database: CBLDatabase;

	readonly documentIDs: NSArray<string>;
}

declare class CBLDatabaseConfiguration extends NSObject {

	static alloc(): CBLDatabaseConfiguration; // inherited from NSObject

	static new(): CBLDatabaseConfiguration; // inherited from NSObject

	directory: string;

	constructor(o: { config: CBLDatabaseConfiguration; });

	initWithConfig(config: CBLDatabaseConfiguration): this;
}

declare class CBLDictionary extends NSObject implements CBLDictionaryProtocol, NSCopying, NSMutableCopying {

	static alloc(): CBLDictionary; // inherited from NSObject

	static new(): CBLDictionary; // inherited from NSObject

	readonly count: number; // inherited from CBLDictionaryProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keys: NSArray<string>; // inherited from CBLDictionaryProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	arrayForKey(key: string): CBLArray;

	blobForKey(key: string): CBLBlob;

	booleanForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsValueForKey(key: string): boolean;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	dateForKey(key: string): Date;

	dictionaryForKey(key: string): CBLDictionary;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	integerForKey(key: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongForKey(key: string): number;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	numberForKey(key: string): number;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stringForKey(key: string): string;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	toMutable(): CBLMutableDictionary;

	valueForKey(key: string): any;
}

interface CBLDictionaryFragment extends NSObjectProtocol {

	objectForKeyedSubscript(key: string): CBLFragment;
}
declare var CBLDictionaryFragment: {

	prototype: CBLDictionaryFragment;
};

interface CBLDictionaryProtocol extends CBLDictionaryFragment, NSFastEnumeration, NSObjectProtocol {

	count: number;

	keys: NSArray<string>;

	arrayForKey(key: string): CBLArray;

	blobForKey(key: string): CBLBlob;

	booleanForKey(key: string): boolean;

	containsValueForKey(key: string): boolean;

	dateForKey(key: string): Date;

	dictionaryForKey(key: string): CBLDictionary;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	integerForKey(key: string): number;

	longLongForKey(key: string): number;

	numberForKey(key: string): number;

	stringForKey(key: string): string;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	valueForKey(key: string): any;
}
declare var CBLDictionaryProtocol: {

	prototype: CBLDictionaryProtocol;
};

declare class CBLDocument extends NSObject implements CBLDictionaryProtocol, NSMutableCopying {

	static alloc(): CBLDocument; // inherited from NSObject

	static new(): CBLDocument; // inherited from NSObject

	readonly collection: CBLCollection;

	readonly id: string;

	readonly revisionID: string;

	readonly sequence: number;

	readonly count: number; // inherited from CBLDictionaryProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keys: NSArray<string>; // inherited from CBLDictionaryProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	arrayForKey(key: string): CBLArray;

	blobForKey(key: string): CBLBlob;

	booleanForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsValueForKey(key: string): boolean;

	dateForKey(key: string): Date;

	dictionaryForKey(key: string): CBLDictionary;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	integerForKey(key: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongForKey(key: string): number;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	numberForKey(key: string): number;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stringForKey(key: string): string;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	toMutable(): CBLMutableDocument;

	valueForKey(key: string): any;
}

declare class CBLDocumentChange extends NSObject {

	static alloc(): CBLDocumentChange; // inherited from NSObject

	static new(): CBLDocumentChange; // inherited from NSObject

	readonly collection: CBLCollection;

	readonly database: CBLDatabase;

	readonly documentID: string;
}

declare const enum CBLDocumentFlags {

	kCBLDocumentFlagsDeleted = 1,

	kCBLDocumentFlagsAccessRemoved = 2
}

declare class CBLDocumentFragment extends NSObject implements CBLDictionaryFragment {

	static alloc(): CBLDocumentFragment; // inherited from NSObject

	static new(): CBLDocumentFragment; // inherited from NSObject

	readonly document: CBLDocument;

	readonly exists: boolean;

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

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CBLDocumentReplication extends NSObject {

	static alloc(): CBLDocumentReplication; // inherited from NSObject

	static new(): CBLDocumentReplication; // inherited from NSObject

	readonly documents: NSArray<CBLReplicatedDocument>;

	readonly isPush: boolean;

	readonly replicator: CBLReplicator;
}

interface CBLEndpoint extends NSObjectProtocol {
}
declare var CBLEndpoint: {

	prototype: CBLEndpoint;
};

declare const CBLErrorAssertionFailed: number;

declare const CBLErrorBadDocID: number;

declare const CBLErrorBadRevisionID: number;

declare const CBLErrorBusy: number;

declare const CBLErrorCantOpenFile: number;

declare const CBLErrorCantUpgradeDatabase: number;

declare const CBLErrorConflict: number;

declare const CBLErrorCorruptData: number;

declare const CBLErrorCorruptRevisionData: number;

declare const CBLErrorCrypto: number;

declare const CBLErrorDNSFailure: number;

declare const CBLErrorDatabaseTooNew: number;

declare const CBLErrorDatabaseTooOld: number;

declare var CBLErrorDomain: string;

declare const CBLErrorHTTPAuthRequired: number;

declare const CBLErrorHTTPBase: number;

declare const CBLErrorHTTPConflict: number;

declare const CBLErrorHTTPEntityTooLarge: number;

declare const CBLErrorHTTPForbidden: number;

declare const CBLErrorHTTPImATeapot: number;

declare const CBLErrorHTTPInternalServerError: number;

declare const CBLErrorHTTPNotFound: number;

declare const CBLErrorHTTPNotImplemented: number;

declare const CBLErrorHTTPProxyAuthRequired: number;

declare const CBLErrorHTTPServiceUnavailable: number;

declare const CBLErrorIOError: number;

declare const CBLErrorInvalidJSON: number;

declare const CBLErrorInvalidParameter: number;

declare const CBLErrorInvalidQuery: number;

declare const CBLErrorInvalidQueryParam: number;

declare const CBLErrorInvalidRedirect: number;

declare const CBLErrorInvalidURL: number;

declare const CBLErrorMemoryError: number;

declare const CBLErrorMissingIndex: number;

declare const CBLErrorNetworkBase: number;

declare const CBLErrorNotFound: number;

declare const CBLErrorNotInTransaction: number;

declare const CBLErrorNotOpen: number;

declare const CBLErrorNotWriteable: number;

declare const CBLErrorRemoteError: number;

declare const CBLErrorTLSCertExpired: number;

declare const CBLErrorTLSCertUnknownRoot: number;

declare const CBLErrorTLSCertUntrusted: number;

declare const CBLErrorTLSClientCertRejected: number;

declare const CBLErrorTLSClientCertRequired: number;

declare const CBLErrorTLSHandshakeFailed: number;

declare const CBLErrorTimeout: number;

declare const CBLErrorTooManyRedirects: number;

declare const CBLErrorTransactionNotClosed: number;

declare const CBLErrorUnexpectedError: number;

declare const CBLErrorUnimplemented: number;

declare const CBLErrorUnknownHost: number;

declare const CBLErrorUnknownInterface: number;

declare const CBLErrorUnreadableDatabase: number;

declare const CBLErrorUnsupported: number;

declare const CBLErrorUnsupportedEncryption: number;

declare const CBLErrorWebSocketAbnormalClose: number;

declare const CBLErrorWebSocketBadMessageFormat: number;

declare const CBLErrorWebSocketBase: number;

declare const CBLErrorWebSocketCantFulfill: number;

declare const CBLErrorWebSocketDataError: number;

declare const CBLErrorWebSocketGoingAway: number;

declare const CBLErrorWebSocketMessageTooBig: number;

declare const CBLErrorWebSocketMissingExtension: number;

declare const CBLErrorWebSocketPolicyError: number;

declare const CBLErrorWebSocketProtocolError: number;

declare const CBLErrorWrongFormat: number;

declare class CBLFileLogger extends NSObject implements CBLLogger {

	static alloc(): CBLFileLogger; // inherited from NSObject

	static new(): CBLFileLogger; // inherited from NSObject

	config: CBLLogFileConfiguration;

	level: CBLLogLevel;

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

	logWithLevelDomainMessage(level: CBLLogLevel, domain: CBLLogDomain, message: string): void;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class CBLFragment extends NSObject implements CBLArrayFragment, CBLDictionaryFragment, CBLFragmentProtocol {

	static alloc(): CBLFragment; // inherited from NSObject

	static new(): CBLFragment; // inherited from NSObject

	readonly array: CBLArray; // inherited from CBLFragmentProtocol

	readonly blob: CBLBlob; // inherited from CBLFragmentProtocol

	readonly booleanValue: boolean; // inherited from CBLFragmentProtocol

	readonly date: Date; // inherited from CBLFragmentProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly dictionary: CBLDictionary; // inherited from CBLFragmentProtocol

	readonly doubleValue: number; // inherited from CBLFragmentProtocol

	readonly exists: boolean; // inherited from CBLFragmentProtocol

	readonly floatValue: number; // inherited from CBLFragmentProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly integerValue: number; // inherited from CBLFragmentProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly longLongValue: number; // inherited from CBLFragmentProtocol

	readonly number: number; // inherited from CBLFragmentProtocol

	readonly string: string; // inherited from CBLFragmentProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly value: NSObject; // inherited from CBLFragmentProtocol

	readonly  // inherited from NSObjectProtocol
	[index: number]: CBLFragment;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectAtIndexedSubscript(index: number): CBLFragment;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface CBLFragmentProtocol extends NSObjectProtocol {

	array: CBLArray;

	blob: CBLBlob;

	booleanValue: boolean;

	date: Date;

	dictionary: CBLDictionary;

	doubleValue: number;

	exists: boolean;

	floatValue: number;

	integerValue: number;

	longLongValue: number;

	number: number;

	string: string;

	value: NSObject;
}
declare var CBLFragmentProtocol: {

	prototype: CBLFragmentProtocol;
};

declare class CBLFullTextIndex extends CBLIndex {

	static alloc(): CBLFullTextIndex; // inherited from NSObject

	static new(): CBLFullTextIndex; // inherited from NSObject

	ignoreAccents: boolean;

	language: string;
}

declare class CBLFullTextIndexConfiguration extends CBLIndexConfiguration {

	static alloc(): CBLFullTextIndexConfiguration; // inherited from NSObject

	static new(): CBLFullTextIndexConfiguration; // inherited from NSObject

	readonly ignoreAccents: boolean;

	readonly language: string;

	constructor(o: { expression: NSArray<string> | string[]; ignoreAccents: boolean; language: string; });

	initWithExpressionIgnoreAccentsLanguage(expressions: NSArray<string> | string[], ignoreAccents: boolean, language: string): this;
}

declare class CBLFullTextIndexItem extends NSObject {

	static alloc(): CBLFullTextIndexItem; // inherited from NSObject

	static new(): CBLFullTextIndexItem; // inherited from NSObject

	static property(property: string): CBLFullTextIndexItem;
}

declare class CBLIndex extends NSObject {

	static alloc(): CBLIndex; // inherited from NSObject

	static new(): CBLIndex; // inherited from NSObject
}

declare class CBLIndexBuilder extends NSObject {

	static alloc(): CBLIndexBuilder; // inherited from NSObject

	static fullTextIndexWithItems(items: NSArray<CBLFullTextIndexItem> | CBLFullTextIndexItem[]): CBLFullTextIndex;

	static new(): CBLIndexBuilder; // inherited from NSObject

	static valueIndexWithItems(items: NSArray<CBLValueIndexItem> | CBLValueIndexItem[]): CBLValueIndex;
}

declare class CBLIndexConfiguration extends NSObject {

	static alloc(): CBLIndexConfiguration; // inherited from NSObject

	static new(): CBLIndexConfiguration; // inherited from NSObject

	readonly expressions: NSArray<string>;
}

interface CBLIndexable extends NSObjectProtocol {

	createIndexNameError(index: CBLIndex, name: string): boolean;

	createIndexWithNameConfigError(name: string, config: CBLIndexConfiguration): boolean;

	deleteIndexWithNameError(name: string): boolean;

	indexes(): NSArray<string>;
}
declare var CBLIndexable: {

	prototype: CBLIndexable;
};

interface CBLListenerToken extends NSObjectProtocol {

	remove(): void;
}
declare var CBLListenerToken: {

	prototype: CBLListenerToken;
};

declare class CBLLog extends NSObject {

	static alloc(): CBLLog; // inherited from NSObject

	static new(): CBLLog; // inherited from NSObject

	readonly console: CBLConsoleLogger;

	custom: CBLLogger;

	readonly file: CBLFileLogger;
}

declare const enum CBLLogDomain {

	kCBLLogDomainAll = 31,

	kCBLLogDomainDatabase = 1,

	kCBLLogDomainQuery = 2,

	kCBLLogDomainReplicator = 4,

	kCBLLogDomainNetwork = 8
}

declare class CBLLogFileConfiguration extends NSObject {

	static alloc(): CBLLogFileConfiguration; // inherited from NSObject

	static new(): CBLLogFileConfiguration; // inherited from NSObject

	readonly directory: string;

	maxRotateCount: number;

	maxSize: number;

	usePlainText: boolean;

	constructor(o: { directory: string; });

	initWithDirectory(directory: string): this;
}

declare const enum CBLLogLevel {

	kCBLLogLevelDebug = 0,

	kCBLLogLevelVerbose = 1,

	kCBLLogLevelInfo = 2,

	kCBLLogLevelWarning = 3,

	kCBLLogLevelError = 4,

	kCBLLogLevelNone = 5
}

interface CBLLogger extends NSObjectProtocol {

	level: CBLLogLevel;

	logWithLevelDomainMessage(level: CBLLogLevel, domain: CBLLogDomain, message: string): void;
}
declare var CBLLogger: {

	prototype: CBLLogger;
};

declare const enum CBLMaintenanceType {

	kCBLMaintenanceTypeCompact = 0,

	kCBLMaintenanceTypeReindex = 1,

	kCBLMaintenanceTypeIntegrityCheck = 2,

	kCBLMaintenanceTypeOptimize = 3,

	kCBLMaintenanceTypeFullOptimize = 4
}

declare class CBLMutableArray extends CBLArray implements CBLMutableArrayProtocol {

	static alloc(): CBLMutableArray; // inherited from NSObject

	static array(): CBLMutableArray;

	static new(): CBLMutableArray; // inherited from NSObject

	readonly count: number; // inherited from CBLArrayProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[index: number]: CBLFragment;
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { data: NSArray<any> | any[]; });

	constructor(o: { JSON: string; });

	addArray(value: CBLArray): void;

	addBlob(value: CBLBlob): void;

	addBoolean(value: boolean): void;

	addDate(value: Date): void;

	addDictionary(value: CBLDictionary): void;

	addDouble(value: number): void;

	addFloat(value: number): void;

	addInteger(value: number): void;

	addLongLong(value: number): void;

	addNumber(value: number): void;

	addString(value: string): void;

	addValue(value: any): void;

	arrayAtIndex(index: number): CBLMutableArray;

	blobAtIndex(index: number): CBLBlob;

	booleanAtIndex(index: number): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dateAtIndex(index: number): Date;

	dictionaryAtIndex(index: number): CBLMutableDictionary;

	doubleAtIndex(index: number): number;

	floatAtIndex(index: number): number;

	initWithData(data: NSArray<any> | any[]): this;

	initWithJSONError(json: string): this;

	insertArrayAtIndex(value: CBLArray, index: number): void;

	insertBlobAtIndex(value: CBLBlob, index: number): void;

	insertBooleanAtIndex(value: boolean, index: number): void;

	insertDateAtIndex(value: Date, index: number): void;

	insertDictionaryAtIndex(value: CBLDictionary, index: number): void;

	insertDoubleAtIndex(value: number, index: number): void;

	insertFloatAtIndex(value: number, index: number): void;

	insertIntegerAtIndex(value: number, index: number): void;

	insertLongLongAtIndex(value: number, index: number): void;

	insertNumberAtIndex(value: number, index: number): void;

	insertStringAtIndex(value: string, index: number): void;

	insertValueAtIndex(value: any, index: number): void;

	integerAtIndex(index: number): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongAtIndex(index: number): number;

	numberAtIndex(index: number): number;

	objectAtIndexedSubscript(index: number): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeValueAtIndex(index: number): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayAtIndex(value: CBLArray, index: number): void;

	setBlobAtIndex(value: CBLBlob, index: number): void;

	setBooleanAtIndex(value: boolean, index: number): void;

	setData(data: NSArray<any> | any[]): void;

	setDateAtIndex(value: Date, index: number): void;

	setDictionaryAtIndex(value: CBLDictionary, index: number): void;

	setDoubleAtIndex(value: number, index: number): void;

	setFloatAtIndex(value: number, index: number): void;

	setIntegerAtIndex(value: number, index: number): void;

	setJSONError(json: string): boolean;

	setLongLongAtIndex(value: number, index: number): void;

	setNumberAtIndex(value: number, index: number): void;

	setStringAtIndex(value: string, index: number): void;

	setValueAtIndex(value: any, index: number): void;

	stringAtIndex(index: number): string;

	toArray(): NSArray<any>;

	toJSON(): string;

	valueAtIndex(index: number): any;
}

interface CBLMutableArrayFragment extends CBLArrayFragment {

	objectAtIndexedSubscript(index: number): CBLMutableFragment;
}
declare var CBLMutableArrayFragment: {

	prototype: CBLMutableArrayFragment;
};

interface CBLMutableArrayProtocol extends CBLArrayProtocol, CBLMutableArrayFragment {

	addArray(value: CBLArray): void;

	addBlob(value: CBLBlob): void;

	addBoolean(value: boolean): void;

	addDate(value: Date): void;

	addDictionary(value: CBLDictionary): void;

	addDouble(value: number): void;

	addFloat(value: number): void;

	addInteger(value: number): void;

	addLongLong(value: number): void;

	addNumber(value: number): void;

	addString(value: string): void;

	addValue(value: any): void;

	arrayAtIndex(index: number): CBLMutableArray;

	dictionaryAtIndex(index: number): CBLMutableDictionary;

	insertArrayAtIndex(value: CBLArray, index: number): void;

	insertBlobAtIndex(value: CBLBlob, index: number): void;

	insertBooleanAtIndex(value: boolean, index: number): void;

	insertDateAtIndex(value: Date, index: number): void;

	insertDictionaryAtIndex(value: CBLDictionary, index: number): void;

	insertDoubleAtIndex(value: number, index: number): void;

	insertFloatAtIndex(value: number, index: number): void;

	insertIntegerAtIndex(value: number, index: number): void;

	insertLongLongAtIndex(value: number, index: number): void;

	insertNumberAtIndex(value: number, index: number): void;

	insertStringAtIndex(value: string, index: number): void;

	insertValueAtIndex(value: any, index: number): void;

	removeValueAtIndex(index: number): void;

	setArrayAtIndex(value: CBLArray, index: number): void;

	setBlobAtIndex(value: CBLBlob, index: number): void;

	setBooleanAtIndex(value: boolean, index: number): void;

	setData(data: NSArray<any> | any[]): void;

	setDateAtIndex(value: Date, index: number): void;

	setDictionaryAtIndex(value: CBLDictionary, index: number): void;

	setDoubleAtIndex(value: number, index: number): void;

	setFloatAtIndex(value: number, index: number): void;

	setIntegerAtIndex(value: number, index: number): void;

	setLongLongAtIndex(value: number, index: number): void;

	setNumberAtIndex(value: number, index: number): void;

	setStringAtIndex(value: string, index: number): void;

	setValueAtIndex(value: any, index: number): void;
}
declare var CBLMutableArrayProtocol: {

	prototype: CBLMutableArrayProtocol;
};

declare class CBLMutableDictionary extends CBLDictionary implements CBLMutableDictionaryProtocol {

	static alloc(): CBLMutableDictionary; // inherited from NSObject

	static dictionary(): CBLMutableDictionary;

	static new(): CBLMutableDictionary; // inherited from NSObject

	readonly count: number; // inherited from CBLDictionaryProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keys: NSArray<string>; // inherited from CBLDictionaryProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { data: NSDictionary<string, any>; });

	constructor(o: { JSON: string; });

	arrayForKey(key: string): CBLMutableArray;

	blobForKey(key: string): CBLBlob;

	booleanForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsValueForKey(key: string): boolean;

	dateForKey(key: string): Date;

	dictionaryForKey(key: string): CBLMutableDictionary;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	initWithData(data: NSDictionary<string, any>): this;

	initWithJSONError(json: string): this;

	integerForKey(key: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongForKey(key: string): number;

	numberForKey(key: string): number;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeValueForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(value: CBLArray, key: string): void;

	setBlobForKey(value: CBLBlob, key: string): void;

	setBooleanForKey(value: boolean, key: string): void;

	setData(data: NSDictionary<string, any>): void;

	setDateForKey(value: Date, key: string): void;

	setDictionaryForKey(value: CBLDictionary, key: string): void;

	setDoubleForKey(value: number, key: string): void;

	setFloatForKey(value: number, key: string): void;

	setIntegerForKey(value: number, key: string): void;

	setJSONError(json: string): boolean;

	setLongLongForKey(value: number, key: string): void;

	setNumberForKey(value: number, key: string): void;

	setStringForKey(value: string, key: string): void;

	setValueForKey(value: any, key: string): void;

	stringForKey(key: string): string;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	valueForKey(key: string): any;
}

interface CBLMutableDictionaryFragment extends CBLDictionaryFragment {

	objectForKeyedSubscript(key: string): CBLMutableFragment;
}
declare var CBLMutableDictionaryFragment: {

	prototype: CBLMutableDictionaryFragment;
};

interface CBLMutableDictionaryProtocol extends CBLDictionaryProtocol, CBLMutableDictionaryFragment {

	arrayForKey(key: string): CBLMutableArray;

	dictionaryForKey(key: string): CBLMutableDictionary;

	removeValueForKey(key: string): void;

	setArrayForKey(value: CBLArray, key: string): void;

	setBlobForKey(value: CBLBlob, key: string): void;

	setBooleanForKey(value: boolean, key: string): void;

	setData(data: NSDictionary<string, any>): void;

	setDateForKey(value: Date, key: string): void;

	setDictionaryForKey(value: CBLDictionary, key: string): void;

	setDoubleForKey(value: number, key: string): void;

	setFloatForKey(value: number, key: string): void;

	setIntegerForKey(value: number, key: string): void;

	setJSONError(json: string): boolean;

	setLongLongForKey(value: number, key: string): void;

	setNumberForKey(value: number, key: string): void;

	setStringForKey(value: string, key: string): void;

	setValueForKey(value: any, key: string): void;
}
declare var CBLMutableDictionaryProtocol: {

	prototype: CBLMutableDictionaryProtocol;
};

declare class CBLMutableDocument extends CBLDocument implements CBLMutableDictionaryProtocol {

	static alloc(): CBLMutableDocument; // inherited from NSObject

	static document(): CBLMutableDocument;

	static documentWithID(documentID: string): CBLMutableDocument;

	static new(): CBLMutableDocument; // inherited from NSObject

	readonly count: number; // inherited from CBLDictionaryProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keys: NSArray<string>; // inherited from CBLDictionaryProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[Symbol.iterator](): Iterator<any>;

	constructor(o: { data: NSDictionary<string, any>; });

	constructor(o: { ID: string; });

	constructor(o: { ID: string; data: NSDictionary<string, any>; });

	constructor(o: { ID: string; json: string; });

	constructor(o: { JSON: string; });

	arrayForKey(key: string): CBLMutableArray;

	blobForKey(key: string): CBLBlob;

	booleanForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsValueForKey(key: string): boolean;

	dateForKey(key: string): Date;

	dictionaryForKey(key: string): CBLMutableDictionary;

	doubleForKey(key: string): number;

	floatForKey(key: string): number;

	initWithData(data: NSDictionary<string, any>): this;

	initWithID(documentID: string): this;

	initWithIDData(documentID: string, data: NSDictionary<string, any>): this;

	initWithIDJsonError(documentID: string, json: string): this;

	initWithJSONError(json: string): this;

	integerForKey(key: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongForKey(key: string): number;

	numberForKey(key: string): number;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removeValueForKey(key: string): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setArrayForKey(value: CBLArray, key: string): void;

	setBlobForKey(value: CBLBlob, key: string): void;

	setBooleanForKey(value: boolean, key: string): void;

	setData(data: NSDictionary<string, any>): void;

	setDateForKey(value: Date, key: string): void;

	setDictionaryForKey(value: CBLDictionary, key: string): void;

	setDoubleForKey(value: number, key: string): void;

	setFloatForKey(value: number, key: string): void;

	setIntegerForKey(value: number, key: string): void;

	setJSONError(json: string): boolean;

	setLongLongForKey(value: number, key: string): void;

	setNumberForKey(value: number, key: string): void;

	setStringForKey(value: string, key: string): void;

	setValueForKey(value: any, key: string): void;

	stringForKey(key: string): string;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	valueForKey(key: string): any;
}

declare class CBLMutableFragment extends CBLFragment implements CBLMutableArrayFragment, CBLMutableDictionaryFragment, CBLMutableFragmentProtocol {

	static alloc(): CBLMutableFragment; // inherited from NSObject

	static new(): CBLMutableFragment; // inherited from NSObject

	array: CBLMutableArray; // inherited from CBLMutableFragmentProtocol

	blob: CBLBlob; // inherited from CBLMutableFragmentProtocol

	booleanValue: boolean; // inherited from CBLMutableFragmentProtocol

	date: Date; // inherited from CBLMutableFragmentProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	dictionary: CBLMutableDictionary; // inherited from CBLMutableFragmentProtocol

	doubleValue: number; // inherited from CBLMutableFragmentProtocol

	readonly exists: boolean; // inherited from CBLFragmentProtocol

	floatValue: number; // inherited from CBLMutableFragmentProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	integerValue: number; // inherited from CBLMutableFragmentProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	longLongValue: number; // inherited from CBLMutableFragmentProtocol

	number: number; // inherited from CBLMutableFragmentProtocol

	string: string; // inherited from CBLMutableFragmentProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	value: NSObject; // inherited from CBLMutableFragmentProtocol

	readonly  // inherited from NSObjectProtocol
	[index: number]: CBLMutableFragment;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	objectAtIndexedSubscript(index: number): CBLMutableFragment;

	objectForKeyedSubscript(key: string): CBLMutableFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface CBLMutableFragmentProtocol extends CBLFragmentProtocol {

	array: any; /*CBLMutableArray */

	blob: any; /*CBLBlob */

	booleanValue: any; /*boolean */

	date: any; /*Date */

	dictionary: any; /*CBLMutableDictionary */

	doubleValue: any; /*number */

	floatValue: any; /*number */

	integerValue: any; /*number */

	longLongValue: any; /*number */

	number: any; /*number */

	string: any; /*string */

	value: any; /*NSObject */
}
declare var CBLMutableFragmentProtocol: {

	prototype: CBLMutableFragmentProtocol;
};

declare class CBLQuery extends NSObject {

	static alloc(): CBLQuery; // inherited from NSObject

	static new(): CBLQuery; // inherited from NSObject

	parameters: CBLQueryParameters;

	addChangeListener(listener: (p1: CBLQueryChange) => void): CBLListenerToken;

	addChangeListenerWithQueueListener(queue: NSObject, listener: (p1: CBLQueryChange) => void): CBLListenerToken;

	execute(): CBLQueryResultSet;

	explain(): string;

	removeChangeListenerWithToken(token: CBLListenerToken): void;
}

declare class CBLQueryArrayExpression extends NSObject {

	static alloc(): CBLQueryArrayExpression; // inherited from NSObject

	static anyAndEveryInSatisfies(variable: CBLQueryVariableExpression, inExpression: CBLQueryExpression, satisfies: CBLQueryExpression): CBLQueryExpression;

	static anyInSatisfies(variable: CBLQueryVariableExpression, inExpression: CBLQueryExpression, satisfies: CBLQueryExpression): CBLQueryExpression;

	static everyInSatisfies(variable: CBLQueryVariableExpression, inExpression: CBLQueryExpression, satisfies: CBLQueryExpression): CBLQueryExpression;

	static new(): CBLQueryArrayExpression; // inherited from NSObject

	static variableWithName(name: string): CBLQueryVariableExpression;
}

declare class CBLQueryArrayFunction extends NSObject {

	static alloc(): CBLQueryArrayFunction; // inherited from NSObject

	static containsValue(expression: CBLQueryExpression, value: CBLQueryExpression): CBLQueryExpression;

	static length(expression: CBLQueryExpression): CBLQueryExpression;

	static new(): CBLQueryArrayFunction; // inherited from NSObject
}

declare class CBLQueryBuilder extends NSObject {

	static alloc(): CBLQueryBuilder; // inherited from NSObject

	static new(): CBLQueryBuilder; // inherited from NSObject

	static selectDistinctFrom(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource): CBLQuery;

	static selectDistinctFromJoin(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[]): CBLQuery;

	static selectDistinctFromJoinWhere(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression): CBLQuery;

	static selectDistinctFromJoinWhereGroupBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[]): CBLQuery;

	static selectDistinctFromJoinWhereGroupByHaving(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression): CBLQuery;

	static selectDistinctFromJoinWhereGroupByHavingOrderByLimit(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[], limit: CBLQueryLimit): CBLQuery;

	static selectDistinctFromJoinWhereOrderBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[]): CBLQuery;

	static selectDistinctFromWhere(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression): CBLQuery;

	static selectDistinctFromWhereGroupBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[]): CBLQuery;

	static selectDistinctFromWhereGroupByHaving(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression): CBLQuery;

	static selectDistinctFromWhereGroupByHavingOrderByLimit(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[], limit: CBLQueryLimit): CBLQuery;

	static selectDistinctFromWhereOrderBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[]): CBLQuery;

	static selectFrom(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource): CBLQuery;

	static selectFromJoin(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[]): CBLQuery;

	static selectFromJoinWhere(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression): CBLQuery;

	static selectFromJoinWhereGroupBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[]): CBLQuery;

	static selectFromJoinWhereGroupByHaving(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression): CBLQuery;

	static selectFromJoinWhereGroupByHavingOrderByLimit(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[], limit: CBLQueryLimit): CBLQuery;

	static selectFromJoinWhereOrderBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, join: NSArray<CBLQueryJoin> | CBLQueryJoin[], where: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[]): CBLQuery;

	static selectFromWhere(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression): CBLQuery;

	static selectFromWhereGroupBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[]): CBLQuery;

	static selectFromWhereGroupByHaving(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression): CBLQuery;

	static selectFromWhereGroupByHavingOrderByLimit(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, groupBy: NSArray<CBLQueryExpression> | CBLQueryExpression[], having: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[], limit: CBLQueryLimit): CBLQuery;

	static selectFromWhereOrderBy(select: NSArray<CBLQuerySelectResult> | CBLQuerySelectResult[], from: CBLQueryDataSource, where: CBLQueryExpression, orderings: NSArray<CBLQueryOrdering> | CBLQueryOrdering[]): CBLQuery;
}

declare class CBLQueryChange extends NSObject {

	static alloc(): CBLQueryChange; // inherited from NSObject

	static new(): CBLQueryChange; // inherited from NSObject

	readonly error: NSError;

	readonly query: CBLQuery;

	readonly results: CBLQueryResultSet;
}

declare class CBLQueryCollation extends NSObject {

	static alloc(): CBLQueryCollation; // inherited from NSObject

	static asciiWithIgnoreCase(ignoreCase: boolean): CBLQueryCollation;

	static new(): CBLQueryCollation; // inherited from NSObject

	static unicodeWithLocaleIgnoreCaseIgnoreAccents(locale: string, ignoreCase: boolean, ignoreAccents: boolean): CBLQueryCollation;
}

declare class CBLQueryDataSource extends NSObject {

	static alloc(): CBLQueryDataSource; // inherited from NSObject

	static collection(collection: CBLCollection): CBLQueryDataSource;

	static collectionAs(collection: CBLCollection, alias: string): CBLQueryDataSource;

	static database(database: CBLDatabase): CBLQueryDataSource;

	static databaseAs(database: CBLDatabase, alias: string): CBLQueryDataSource;

	static new(): CBLQueryDataSource; // inherited from NSObject
}

declare class CBLQueryExpression extends NSObject {

	static all(): CBLQueryExpression;

	static allFrom(alias: string): CBLQueryExpression;

	static alloc(): CBLQueryExpression; // inherited from NSObject

	static array(value: NSArray<any> | any[]): CBLQueryExpression;

	static boolean(value: boolean): CBLQueryExpression;

	static date(value: Date): CBLQueryExpression;

	static dictionary(value: NSDictionary<any, any>): CBLQueryExpression;

	static double(value: number): CBLQueryExpression;

	static float(value: number): CBLQueryExpression;

	static fullTextIndex(indexName: string): CBLQueryFullTextIndexExpressionProtocol;

	static integer(value: number): CBLQueryExpression;

	static longLong(value: number): CBLQueryExpression;

	static negated(expression: CBLQueryExpression): CBLQueryExpression;

	static new(): CBLQueryExpression; // inherited from NSObject

	static number(value: number): CBLQueryExpression;

	static parameterNamed(name: string): CBLQueryExpression;

	static property(property: string): CBLQueryExpression;

	static propertyFrom(property: string, alias: string): CBLQueryExpression;

	static string(value: string): CBLQueryExpression;

	static value(value: any): CBLQueryExpression;

	add(expression: CBLQueryExpression): CBLQueryExpression;

	andExpression(expression: CBLQueryExpression): CBLQueryExpression;

	between(expression1: CBLQueryExpression): CBLQueryExpression;

	collate(collation: CBLQueryCollation): CBLQueryExpression;

	divide(expression: CBLQueryExpression): CBLQueryExpression;

	equalTo(expression: CBLQueryExpression): CBLQueryExpression;

	greaterThan(expression: CBLQueryExpression): CBLQueryExpression;

	greaterThanOrEqualTo(expression: CBLQueryExpression): CBLQueryExpression;

	in(expressions: NSArray<CBLQueryExpression> | CBLQueryExpression[]): CBLQueryExpression;

	is(expression: CBLQueryExpression): CBLQueryExpression;

	isNot(expression: CBLQueryExpression): CBLQueryExpression;

	isNotValued(): CBLQueryExpression;

	isNullOrMissing(): CBLQueryExpression;

	isValued(): CBLQueryExpression;

	lessThan(expression: CBLQueryExpression): CBLQueryExpression;

	lessThanOrEqualTo(expression: CBLQueryExpression): CBLQueryExpression;

	like(expression: CBLQueryExpression): CBLQueryExpression;

	modulo(expression: CBLQueryExpression): CBLQueryExpression;

	multiply(expression: CBLQueryExpression): CBLQueryExpression;

	notEqualTo(expression: CBLQueryExpression): CBLQueryExpression;

	notNullOrMissing(): CBLQueryExpression;

	orExpression(expression: CBLQueryExpression): CBLQueryExpression;

	regex(expression: CBLQueryExpression): CBLQueryExpression;

	subtract(expression: CBLQueryExpression): CBLQueryExpression;
}

interface CBLQueryFactory extends NSObjectProtocol {

	createQueryError(query: string): CBLQuery;
}
declare var CBLQueryFactory: {

	prototype: CBLQueryFactory;
};

declare class CBLQueryFullTextExpression extends NSObject {

	static alloc(): CBLQueryFullTextExpression; // inherited from NSObject

	static indexWithName(name: string): CBLQueryFullTextExpression;

	static new(): CBLQueryFullTextExpression; // inherited from NSObject

	match(query: string): CBLQueryExpression;
}

declare class CBLQueryFullTextFunction extends NSObject {

	static alloc(): CBLQueryFullTextFunction; // inherited from NSObject

	static matchWithIndexNameQuery(indexName: string, query: string): CBLQueryExpression;

	static matchWithIndexQuery(index: CBLQueryIndexExpressionProtocol, query: string): CBLQueryExpression;

	static new(): CBLQueryFullTextFunction; // inherited from NSObject

	static rank(indexName: string): CBLQueryExpression;

	static rankWithIndex(index: CBLQueryIndexExpressionProtocol): CBLQueryExpression;
}

interface CBLQueryFullTextIndexExpressionProtocol extends CBLQueryIndexExpressionProtocol {

	from(alias: string): CBLQueryIndexExpressionProtocol;
}
declare var CBLQueryFullTextIndexExpressionProtocol: {

	prototype: CBLQueryFullTextIndexExpressionProtocol;
};

declare class CBLQueryFunction extends NSObject {

	static abs(expression: CBLQueryExpression): CBLQueryExpression;

	static acos(expression: CBLQueryExpression): CBLQueryExpression;

	static alloc(): CBLQueryFunction; // inherited from NSObject

	static asin(expression: CBLQueryExpression): CBLQueryExpression;

	static atan(expression: CBLQueryExpression): CBLQueryExpression;

	static atan2X(y: CBLQueryExpression, x: CBLQueryExpression): CBLQueryExpression;

	static avg(expression: CBLQueryExpression): CBLQueryExpression;

	static ceil(expression: CBLQueryExpression): CBLQueryExpression;

	static containsSubstring(expression: CBLQueryExpression, substring: CBLQueryExpression): CBLQueryExpression;

	static cos(expression: CBLQueryExpression): CBLQueryExpression;

	static count(expression: CBLQueryExpression): CBLQueryExpression;

	static degrees(expression: CBLQueryExpression): CBLQueryExpression;

	static e(): CBLQueryExpression;

	static exp(expression: CBLQueryExpression): CBLQueryExpression;

	static floor(expression: CBLQueryExpression): CBLQueryExpression;

	static length(expression: CBLQueryExpression): CBLQueryExpression;

	static ln(expression: CBLQueryExpression): CBLQueryExpression;

	static log(expression: CBLQueryExpression): CBLQueryExpression;

	static lower(expression: CBLQueryExpression): CBLQueryExpression;

	static ltrim(expression: CBLQueryExpression): CBLQueryExpression;

	static max(expression: CBLQueryExpression): CBLQueryExpression;

	static millisToString(expression: CBLQueryExpression): CBLQueryExpression;

	static millisToUTC(expression: CBLQueryExpression): CBLQueryExpression;

	static min(expression: CBLQueryExpression): CBLQueryExpression;

	static new(): CBLQueryFunction; // inherited from NSObject

	static pi(): CBLQueryExpression;

	static powerExponent(base: CBLQueryExpression, exponent: CBLQueryExpression): CBLQueryExpression;

	static radians(expression: CBLQueryExpression): CBLQueryExpression;

	static round(expression: CBLQueryExpression): CBLQueryExpression;

	static roundDigits(expression: CBLQueryExpression, digits: CBLQueryExpression): CBLQueryExpression;

	static rtrim(expression: CBLQueryExpression): CBLQueryExpression;

	static sign(expression: CBLQueryExpression): CBLQueryExpression;

	static sin(expression: CBLQueryExpression): CBLQueryExpression;

	static sqrt(expression: CBLQueryExpression): CBLQueryExpression;

	static stringToMillis(expression: CBLQueryExpression): CBLQueryExpression;

	static stringToUTC(expression: CBLQueryExpression): CBLQueryExpression;

	static sum(expression: CBLQueryExpression): CBLQueryExpression;

	static tan(expression: CBLQueryExpression): CBLQueryExpression;

	static trim(expression: CBLQueryExpression): CBLQueryExpression;

	static trunc(expression: CBLQueryExpression): CBLQueryExpression;

	static truncDigits(expression: CBLQueryExpression, digits: CBLQueryExpression): CBLQueryExpression;

	static upper(expression: CBLQueryExpression): CBLQueryExpression;
}

interface CBLQueryIndexExpressionProtocol extends NSObjectProtocol {
}
declare var CBLQueryIndexExpressionProtocol: {

	prototype: CBLQueryIndexExpressionProtocol;
};

declare class CBLQueryJoin extends NSObject {

	static alloc(): CBLQueryJoin; // inherited from NSObject

	static crossJoin(dataSource: CBLQueryDataSource): CBLQueryJoin;

	static innerJoinOn(dataSource: CBLQueryDataSource, expression: CBLQueryExpression): CBLQueryJoin;

	static joinOn(dataSource: CBLQueryDataSource, expression: CBLQueryExpression): CBLQueryJoin;

	static leftJoinOn(dataSource: CBLQueryDataSource, expression: CBLQueryExpression): CBLQueryJoin;

	static leftOuterJoinOn(dataSource: CBLQueryDataSource, expression: CBLQueryExpression): CBLQueryJoin;

	static new(): CBLQueryJoin; // inherited from NSObject
}

declare class CBLQueryLimit extends NSObject {

	static alloc(): CBLQueryLimit; // inherited from NSObject

	static limit(expression: CBLQueryExpression): CBLQueryLimit;

	static limitOffset(expression: CBLQueryExpression, expression1: CBLQueryExpression): CBLQueryLimit;

	static new(): CBLQueryLimit; // inherited from NSObject
}

declare class CBLQueryMeta extends NSObject {

	static alloc(): CBLQueryMeta; // inherited from NSObject

	static expiration(): CBLQueryExpression;

	static expirationFrom(alias: string): CBLQueryExpression;

	static id(): CBLQueryExpression;

	static idFrom(alias: string): CBLQueryExpression;

	static isDeleted(): CBLQueryExpression;

	static isDeletedFrom(alias: string): CBLQueryExpression;

	static new(): CBLQueryMeta; // inherited from NSObject

	static revisionID(): CBLQueryExpression;

	static revisionIDFrom(alias: string): CBLQueryExpression;

	static sequence(): CBLQueryExpression;

	static sequenceFrom(alias: string): CBLQueryExpression;
}

declare class CBLQueryOrdering extends NSObject {

	static alloc(): CBLQueryOrdering; // inherited from NSObject

	static expression(expression: CBLQueryExpression): CBLQuerySortOrder;

	static new(): CBLQueryOrdering; // inherited from NSObject

	static property(name: string): CBLQuerySortOrder;
}

declare class CBLQueryParameters extends NSObject {

	static alloc(): CBLQueryParameters; // inherited from NSObject

	static new(): CBLQueryParameters; // inherited from NSObject

	constructor(o: { parameters: CBLQueryParameters; });

	initWithParameters(parameters: CBLQueryParameters): this;

	setArrayForName(value: CBLArray, name: string): void;

	setBlobForName(value: CBLBlob, name: string): void;

	setBooleanForName(value: boolean, name: string): void;

	setDateForName(value: Date, name: string): void;

	setDictionaryForName(value: CBLDictionary, name: string): void;

	setDoubleForName(value: number, name: string): void;

	setFloatForName(value: number, name: string): void;

	setIntegerForName(value: number, name: string): void;

	setLongLongForName(value: number, name: string): void;

	setNumberForName(value: number, name: string): void;

	setStringForName(value: string, name: string): void;

	setValueForName(value: any, name: string): void;

	valueForName(name: string): any;
}

declare class CBLQueryResult extends NSObject implements CBLArrayProtocol, CBLDictionaryProtocol {

	static alloc(): CBLQueryResult; // inherited from NSObject

	static new(): CBLQueryResult; // inherited from NSObject

	readonly count: number; // inherited from CBLArrayProtocol

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly keys: NSArray<string>; // inherited from CBLDictionaryProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol
	[index: number]: CBLFragment;
	[Symbol.iterator](): Iterator<any>;

	arrayAtIndex(index: number): CBLArray;

	arrayForKey(key: string): CBLArray;

	blobAtIndex(index: number): CBLBlob;

	blobForKey(key: string): CBLBlob;

	booleanAtIndex(index: number): boolean;

	booleanForKey(key: string): boolean;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	containsValueForKey(key: string): boolean;

	dateAtIndex(index: number): Date;

	dateForKey(key: string): Date;

	dictionaryAtIndex(index: number): CBLDictionary;

	dictionaryForKey(key: string): CBLDictionary;

	doubleAtIndex(index: number): number;

	doubleForKey(key: string): number;

	floatAtIndex(index: number): number;

	floatForKey(key: string): number;

	integerAtIndex(index: number): number;

	integerForKey(key: string): number;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	longLongAtIndex(index: number): number;

	longLongForKey(key: string): number;

	numberAtIndex(index: number): number;

	numberForKey(key: string): number;

	objectAtIndexedSubscript(index: number): CBLFragment;

	objectForKeyedSubscript(key: string): CBLFragment;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	stringAtIndex(index: number): string;

	stringForKey(key: string): string;

	toArray(): NSArray<any>;

	toDictionary(): NSDictionary<string, any>;

	toJSON(): string;

	valueAtIndex(index: number): any;

	valueForKey(key: string): any;
}

declare class CBLQueryResultSet extends NSEnumerator<CBLQueryResult> {

	static alloc(): CBLQueryResultSet; // inherited from NSObject

	static new(): CBLQueryResultSet; // inherited from NSObject

	allResults(): NSArray<CBLQueryResult>;
}

declare class CBLQuerySelectResult extends NSObject {

	static all(): CBLQuerySelectResult;

	static allFrom(alias: string): CBLQuerySelectResult;

	static alloc(): CBLQuerySelectResult; // inherited from NSObject

	static expression(expression: CBLQueryExpression): CBLQuerySelectResult;

	static expressionAs(expression: CBLQueryExpression, alias: string): CBLQuerySelectResult;

	static new(): CBLQuerySelectResult; // inherited from NSObject

	static property(property: string): CBLQuerySelectResult;

	static propertyAs(property: string, alias: string): CBLQuerySelectResult;
}

declare class CBLQuerySortOrder extends CBLQueryOrdering {

	static alloc(): CBLQuerySortOrder; // inherited from NSObject

	static new(): CBLQuerySortOrder; // inherited from NSObject

	ascending(): CBLQueryOrdering;

	descending(): CBLQueryOrdering;
}

declare class CBLQueryVariableExpression extends CBLQueryExpression {

	static alloc(): CBLQueryVariableExpression; // inherited from NSObject

	static new(): CBLQueryVariableExpression; // inherited from NSObject
}

declare class CBLReplicatedDocument extends NSObject {

	static alloc(): CBLReplicatedDocument; // inherited from NSObject

	static new(): CBLReplicatedDocument; // inherited from NSObject

	readonly collection: string;

	readonly error: NSError;

	readonly flags: CBLDocumentFlags;

	readonly id: string;

	readonly scope: string;
}

declare class CBLReplicator extends NSObject {

	static alloc(): CBLReplicator; // inherited from NSObject

	static new(): CBLReplicator; // inherited from NSObject

	readonly config: CBLReplicatorConfiguration;

	readonly serverCertificate: any;

	readonly status: CBLReplicatorStatus;

	constructor(o: { config: CBLReplicatorConfiguration; });

	addChangeListener(listener: (p1: CBLReplicatorChange) => void): CBLListenerToken;

	addChangeListenerWithQueueListener(queue: NSObject, listener: (p1: CBLReplicatorChange) => void): CBLListenerToken;

	addDocumentReplicationListener(listener: (p1: CBLDocumentReplication) => void): CBLListenerToken;

	addDocumentReplicationListenerWithQueueListener(queue: NSObject, listener: (p1: CBLDocumentReplication) => void): CBLListenerToken;

	initWithConfig(config: CBLReplicatorConfiguration): this;

	isDocumentPendingCollectionError(documentID: string, collection: CBLCollection): boolean;

	isDocumentPendingError(documentID: string): boolean;

	pendingDocumentIDs(): NSSet<string>;

	pendingDocumentIDsForCollectionError(collection: CBLCollection): NSSet<string>;

	removeChangeListenerWithToken(token: CBLListenerToken): void;

	start(): void;

	startWithReset(reset: boolean): void;

	stop(): void;
}

declare const enum CBLReplicatorActivityLevel {

	kCBLReplicatorStopped = 0,

	kCBLReplicatorOffline = 1,

	kCBLReplicatorConnecting = 2,

	kCBLReplicatorIdle = 3,

	kCBLReplicatorBusy = 4
}

declare class CBLReplicatorChange extends NSObject {

	static alloc(): CBLReplicatorChange; // inherited from NSObject

	static new(): CBLReplicatorChange; // inherited from NSObject

	readonly replicator: CBLReplicator;

	readonly status: CBLReplicatorStatus;
}

declare class CBLReplicatorConfiguration extends NSObject {

	static alloc(): CBLReplicatorConfiguration; // inherited from NSObject

	static new(): CBLReplicatorConfiguration; // inherited from NSObject

	acceptParentDomainCookies: boolean;

	allowReplicatingInBackground: boolean;

	authenticator: CBLAuthenticator;

	channels: NSArray<string>;

	readonly collections: NSArray<CBLCollection>;

	conflictResolver: CBLConflictResolverProtocol;

	continuous: boolean;

	readonly database: CBLDatabase;

	documentIDs: NSArray<string>;

	enableAutoPurge: boolean;

	headers: NSDictionary<string, string>;

	heartbeat: number;

	maxAttemptWaitTime: number;

	maxAttempts: number;

	networkInterface: string;

	pinnedServerCertificate: any;

	pullFilter: (p1: CBLDocument, p2: CBLDocumentFlags) => boolean;

	pushFilter: (p1: CBLDocument, p2: CBLDocumentFlags) => boolean;

	replicatorType: CBLReplicatorType;

	readonly target: CBLEndpoint;

	constructor(o: { config: CBLReplicatorConfiguration; });

	constructor(o: { database: CBLDatabase; target: CBLEndpoint; });

	constructor(o: { target: CBLEndpoint; });

	addCollectionConfig(collection: CBLCollection, config: CBLCollectionConfiguration): void;

	addCollectionsConfig(collections: NSArray<any> | any[], config: CBLCollectionConfiguration): void;

	collectionConfig(collection: CBLCollection): CBLCollectionConfiguration;

	initWithConfig(config: CBLReplicatorConfiguration): this;

	initWithDatabaseTarget(database: CBLDatabase, target: CBLEndpoint): this;

	initWithTarget(target: CBLEndpoint): this;

	removeCollection(collection: CBLCollection): void;
}

interface CBLReplicatorProgress {
	completed: number;
	total: number;
}
declare var CBLReplicatorProgress: interop.StructType<CBLReplicatorProgress>;

declare class CBLReplicatorStatus extends NSObject {

	static alloc(): CBLReplicatorStatus; // inherited from NSObject

	static new(): CBLReplicatorStatus; // inherited from NSObject

	readonly activity: CBLReplicatorActivityLevel;

	readonly error: NSError;

	readonly progress: CBLReplicatorProgress;
}

declare const enum CBLReplicatorType {

	kCBLReplicatorTypePushAndPull = 0,

	kCBLReplicatorTypePush = 1,

	kCBLReplicatorTypePull = 2
}

declare class CBLScope extends NSObject {

	static alloc(): CBLScope; // inherited from NSObject

	static new(): CBLScope; // inherited from NSObject

	readonly name: string;

	collectionWithNameError(name: string): CBLCollection;

	collections(): NSArray<CBLCollection>;
}

declare class CBLSessionAuthenticator extends CBLAuthenticator {

	static alloc(): CBLSessionAuthenticator; // inherited from NSObject

	static new(): CBLSessionAuthenticator; // inherited from NSObject

	readonly cookieName: string;

	readonly sessionID: string;

	constructor(o: { sessionID: string; });

	constructor(o: { sessionID: string; cookieName: string; });

	initWithSessionID(sessionID: string): this;

	initWithSessionIDCookieName(sessionID: string, cookieName: string): this;
}

declare class CBLURLEndpoint extends NSObject implements CBLEndpoint {

	static alloc(): CBLURLEndpoint; // inherited from NSObject

	static new(): CBLURLEndpoint; // inherited from NSObject

	readonly url: NSURL;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { URL: NSURL; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithURL(url: NSURL): this;

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

declare class CBLValueIndex extends CBLIndex {

	static alloc(): CBLValueIndex; // inherited from NSObject

	static new(): CBLValueIndex; // inherited from NSObject
}

declare class CBLValueIndexConfiguration extends CBLIndexConfiguration {

	static alloc(): CBLValueIndexConfiguration; // inherited from NSObject

	static new(): CBLValueIndexConfiguration; // inherited from NSObject

	constructor(o: { expression: NSArray<string> | string[]; });

	initWithExpression(expressions: NSArray<string> | string[]): this;
}

declare class CBLValueIndexItem extends NSObject {

	static alloc(): CBLValueIndexItem; // inherited from NSObject

	static expression(expression: CBLQueryExpression): CBLValueIndexItem;

	static new(): CBLValueIndexItem; // inherited from NSObject

	static property(property: string): CBLValueIndexItem;
}

declare var CouchbaseLiteVersionNumber: number;

declare var CouchbaseLiteVersionString: interop.Reference<number>;

declare var kCBLBlobContentTypeProperty: string;

declare var kCBLBlobDigestProperty: string;

declare var kCBLBlobLengthProperty: string;

declare var kCBLBlobType: string;

declare var kCBLDefaultCollectionName: string;

declare var kCBLDefaultFullTextIndexIgnoreAccents: boolean;

declare var kCBLDefaultListenerDisableTls: boolean;

declare var kCBLDefaultListenerEnableDeltaSync: boolean;

declare var kCBLDefaultListenerPort: number;

declare var kCBLDefaultListenerReadOnly: boolean;

declare var kCBLDefaultLogFileMaxRotateCount: number;

declare var kCBLDefaultLogFileMaxSize: number;

declare var kCBLDefaultLogFileUsePlainText: boolean;

declare var kCBLDefaultReplicatorAcceptParentCookies: boolean;

declare var kCBLDefaultReplicatorAllowReplicatingInBackground: boolean;

declare var kCBLDefaultReplicatorContinuous: boolean;

declare var kCBLDefaultReplicatorEnableAutoPurge: boolean;

declare var kCBLDefaultReplicatorHeartbeat: number;

declare var kCBLDefaultReplicatorMaxAttemptWaitTime: number;

declare var kCBLDefaultReplicatorMaxAttemptsContinuous: number;

declare var kCBLDefaultReplicatorMaxAttemptsSingleShot: number;

declare var kCBLDefaultReplicatorSelfSignedCertificateOnly: boolean;

declare var kCBLDefaultReplicatorType: CBLReplicatorType;

declare var kCBLDefaultScopeName: string;

declare var kCBLTypeProperty: string;
