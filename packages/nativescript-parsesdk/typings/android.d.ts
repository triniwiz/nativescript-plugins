/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module parse {
		export abstract class AbstractQueryController extends com.parse.ParseQueryController {
			public static class: java.lang.Class<com.parse.AbstractQueryController>;
			public getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
		}
	}
}

declare module com {
	export module parse {
		export class AuthenticationCallback {
			public static class: java.lang.Class<com.parse.AuthenticationCallback>;
			/**
			 * Constructs a new instance of the com.parse.AuthenticationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onRestore(param0: java.util.Map<string,string>): boolean;
			});
			public constructor();
			public onRestore(param0: java.util.Map<string,string>): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class BuildConfig {
			public static class: java.lang.Class<com.parse.BuildConfig>;
			public static DEBUG: boolean;
			public static LIBRARY_PACKAGE_NAME: string;
			public static APPLICATION_ID: string;
			public static BUILD_TYPE: string;
			public static FLAVOR: string;
			public static VERSION_CODE: number;
			public static VERSION_NAME: string;
			public constructor();
		}
	}
}

declare module com {
	export module parse {
		export class CacheQueryController extends com.parse.AbstractQueryController {
			public static class: java.lang.Class<com.parse.CacheQueryController>;
			public getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public constructor(param0: com.parse.NetworkQueryController);
			public findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
		}
		export module CacheQueryController {
			export class CommandDelegate<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.CacheQueryController.CommandDelegate<any>>;
				/**
				 * Constructs a new instance of the com.parse.CacheQueryController$CommandDelegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					runOnNetworkAsync(): com.parse.boltsinternal.Task<T>;
					runFromCacheAsync(): com.parse.boltsinternal.Task<T>;
				});
				public constructor();
				public runFromCacheAsync(): com.parse.boltsinternal.Task<T>;
				public runOnNetworkAsync(): com.parse.boltsinternal.Task<T>;
			}
		}
	}
}

declare module com {
	export module parse {
		export class CachedCurrentInstallationController extends com.parse.ParseCurrentInstallationController {
			public static class: java.lang.Class<com.parse.CachedCurrentInstallationController>;
			public constructor(param0: com.parse.ParseObjectStore<com.parse.ParseInstallation>, param1: com.parse.InstallationId);
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public clearFromDisk(): void;
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public setAsync(param0: com.parse.ParseInstallation): com.parse.boltsinternal.Task<java.lang.Void>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public getAsync(): com.parse.boltsinternal.Task<com.parse.ParseInstallation>;
			public clearFromMemory(): void;
			public isCurrent(param0: com.parse.ParseInstallation): boolean;
			public isCurrent(param0: any): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class CachedCurrentUserController extends com.parse.ParseCurrentUserController {
			public static class: java.lang.Class<com.parse.CachedCurrentUserController>;
			public isCurrent(param0: com.parse.ParseUser): boolean;
			public getAsync(param0: boolean): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public clearFromMemory(): void;
			public isCurrent(param0: any): boolean;
			public setAsync(param0: com.parse.ParseUser): com.parse.boltsinternal.Task<java.lang.Void>;
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public clearFromDisk(): void;
			public logOutAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public getCurrentSessionTokenAsync(): com.parse.boltsinternal.Task<string>;
			public setIfNeededAsync(param0: com.parse.ParseUser): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor(param0: com.parse.ParseObjectStore<com.parse.ParseUser>);
			public getAsync(): com.parse.boltsinternal.Task<com.parse.ParseUser>;
		}
	}
}

declare module com {
	export module parse {
		export class ConfigCallback extends com.parse.ParseCallback2<com.parse.ParseConfig,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.ConfigCallback>;
			/**
			 * Constructs a new instance of the com.parse.ConfigCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseConfig, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: com.parse.ParseConfig, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class ConnectivityNotifier {
			public static class: java.lang.Class<com.parse.ConnectivityNotifier>;
			public removeListener(param0: com.parse.ConnectivityNotifier.ConnectivityListener): void;
			public static getNotifier(param0: globalAndroid.content.Context): com.parse.ConnectivityNotifier;
			public addListener(param0: com.parse.ConnectivityNotifier.ConnectivityListener): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public static isConnected(param0: globalAndroid.content.Context): boolean;
		}
		export module ConnectivityNotifier {
			export class ConnectivityListener {
				public static class: java.lang.Class<com.parse.ConnectivityNotifier.ConnectivityListener>;
				/**
				 * Constructs a new instance of the com.parse.ConnectivityNotifier$ConnectivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					networkConnectivityStatusChanged(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				});
				public constructor();
				public networkConnectivityStatusChanged(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export class CountCallback {
			public static class: java.lang.Class<com.parse.CountCallback>;
			/**
			 * Constructs a new instance of the com.parse.CountCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: number, param1: com.parse.ParseException): void;
			});
			public constructor();
			public done(param0: number, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class DeleteCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.DeleteCallback>;
			/**
			 * Constructs a new instance of the com.parse.DeleteCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class EventuallyPin extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.EventuallyPin>;
			public static PIN_NAME: string;
			public static TYPE_SAVE: number;
			public static TYPE_DELETE: number;
			public static TYPE_COMMAND: number;
			public getType(): number;
			public static pinEventuallyCommand(param0: com.parse.ParseObject, param1: com.parse.ParseRESTCommand): com.parse.boltsinternal.Task<com.parse.EventuallyPin>;
			public static findAllPinned(): com.parse.boltsinternal.Task<java.util.List<com.parse.EventuallyPin>>;
			public getSessionToken(): string;
			public constructor();
			public getUUID(): string;
			public getOperationSetUUID(): string;
			public constructor(param0: string);
			public static findAllPinned(param0: java.util.Collection<string>): com.parse.boltsinternal.Task<java.util.List<com.parse.EventuallyPin>>;
			public getObject(): com.parse.ParseObject;
			public getCommand(): com.parse.ParseRESTCommand;
		}
	}
}

declare module com {
	export module parse {
		export class FileObjectStore<T>  extends com.parse.ParseObjectStore<any> {
			public static class: java.lang.Class<com.parse.FileObjectStore<any>>;
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public constructor(param0: string, param1: java.io.File, param2: com.parse.ParseObjectCurrentCoder);
			public deleteAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor(param0: java.lang.Class<any>, param1: java.io.File, param2: com.parse.ParseObjectCurrentCoder);
		}
	}
}

declare module com {
	export module parse {
		export class FindCallback<T>  extends com.parse.ParseCallback2<java.util.List<any>,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.FindCallback<any>>;
			/**
			 * Constructs a new instance of the com.parse.FindCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: java.util.List<any>, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: java.util.List<any>, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class FunctionCallback<T>  extends com.parse.ParseCallback2<any,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.FunctionCallback<any>>;
			/**
			 * Constructs a new instance of the com.parse.FunctionCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: any, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: com.parse.ParseException): void;
			public done(param0: any, param1: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class GetCallback<T>  extends com.parse.ParseCallback2<any,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.GetCallback<any>>;
			/**
			 * Constructs a new instance of the com.parse.GetCallback<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: any, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: com.parse.ParseException): void;
			public done(param0: any, param1: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class GetDataCallback extends com.parse.ParseCallback2<native.Array<number>,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.GetDataCallback>;
			/**
			 * Constructs a new instance of the com.parse.GetDataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: native.Array<number>, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: native.Array<number>, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class GetDataStreamCallback extends com.parse.ParseCallback2<java.io.InputStream,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.GetDataStreamCallback>;
			/**
			 * Constructs a new instance of the com.parse.GetDataStreamCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: java.io.InputStream, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: java.io.InputStream, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class GetFileCallback extends com.parse.ParseCallback2<java.io.File,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.GetFileCallback>;
			/**
			 * Constructs a new instance of the com.parse.GetFileCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: java.io.File, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: java.io.File, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class InstallationId {
			public static class: java.lang.Class<com.parse.InstallationId>;
			public constructor(param0: java.io.File);
			public get(): string;
			public set(param0: string): void;
		}
	}
}

declare module com {
	export module parse {
		export class KnownParseObjectDecoder extends com.parse.ParseDecoder {
			public static class: java.lang.Class<com.parse.KnownParseObjectDecoder>;
			public constructor(param0: java.util.Map<string,com.parse.ParseObject>);
			public constructor();
			public decodePointer(param0: string, param1: string): com.parse.ParseObject;
		}
	}
}

declare module com {
	export module parse {
		export class Lists {
			public static class: java.lang.Class<com.parse.Lists>;
		}
		export module Lists {
			export class Partition<T>  extends java.util.AbstractList<java.util.List<any>> {
				public static class: java.lang.Class<com.parse.Lists.Partition<any>>;
				public constructor(param0: java.util.List<any>, param1: number);
				public get(param0: number): java.util.List<any>;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module parse {
		export class LocalIdManager {
			public static class: java.lang.Class<com.parse.LocalIdManager>;
		}
		export module LocalIdManager {
			export class MapEntry {
				public static class: java.lang.Class<com.parse.LocalIdManager.MapEntry>;
			}
		}
	}
}

declare module com {
	export module parse {
		export class LocationCallback extends com.parse.ParseCallback2<com.parse.ParseGeoPoint,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.LocationCallback>;
			/**
			 * Constructs a new instance of the com.parse.LocationCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseGeoPoint, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: com.parse.ParseGeoPoint, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class LocationNotifier {
			public static class: java.lang.Class<com.parse.LocationNotifier>;
		}
	}
}

declare module com {
	export module parse {
		export class LockSet {
			public static class: java.lang.Class<com.parse.LockSet>;
			public unlock(): void;
			public constructor(param0: java.util.Collection<java.util.concurrent.locks.Lock>);
			public lock(): void;
		}
	}
}

declare module com {
	export module parse {
		export class LogInCallback extends com.parse.ParseCallback2<com.parse.ParseUser,com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.LogInCallback>;
			/**
			 * Constructs a new instance of the com.parse.LogInCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseUser, param1: com.parse.ParseException): void;
				done(param0: any, param1: any): void;
			});
			public constructor();
			public done(param0: any, param1: any): void;
			public done(param0: com.parse.ParseUser, param1: com.parse.ParseException): void;
		}
	}
}

declare module com {
	export module parse {
		export class LogOutCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.LogOutCallback>;
			/**
			 * Constructs a new instance of the com.parse.LogOutCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class ManifestInfo {
			public static class: java.lang.Class<com.parse.ManifestInfo>;
			public static getVersionCode(): number;
			public static getVersionName(): string;
			public static getDisplayName(param0: globalAndroid.content.Context): string;
			public static getApplicationMetadata(param0: globalAndroid.content.Context): globalAndroid.os.Bundle;
			public constructor();
			public static getIconId(): number;
		}
	}
}

declare module com {
	export module parse {
		export class NetworkObjectController extends com.parse.ParseObjectController {
			public static class: java.lang.Class<com.parse.NetworkObjectController>;
			public saveAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: java.util.List<com.parse.ParseOperationSet>, param2: string, param3: java.util.List<com.parse.ParseDecoder>): java.util.List<com.parse.boltsinternal.Task<com.parse.ParseObject.State>>;
			public constructor(param0: com.parse.ParseHttpClient);
			public deleteAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: string): java.util.List<com.parse.boltsinternal.Task<java.lang.Void>>;
			public deleteAsync(param0: com.parse.ParseObject.State, param1: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public fetchAsync(param0: com.parse.ParseObject.State, param1: string, param2: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
			public saveAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string, param3: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
		}
	}
}

declare module com {
	export module parse {
		export class NetworkQueryController extends com.parse.AbstractQueryController {
			public static class: java.lang.Class<com.parse.NetworkQueryController>;
			public getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public constructor(param0: com.parse.ParseHttpClient);
			public findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
		}
	}
}

declare module com {
	export module parse {
		export class NetworkSessionController extends com.parse.ParseSessionController {
			public static class: java.lang.Class<com.parse.NetworkSessionController>;
			public revokeAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor(param0: com.parse.ParseHttpClient);
			public upgradeToRevocable(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
			public getSessionAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
		}
	}
}

declare module com {
	export module parse {
		export class NetworkUserController extends com.parse.ParseUserController {
			public static class: java.lang.Class<com.parse.NetworkUserController>;
			public constructor(param0: com.parse.ParseHttpClient, param1: boolean);
			public logInAsync(param0: com.parse.ParseUser.State, param1: com.parse.ParseOperationSet): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public constructor(param0: com.parse.ParseHttpClient);
			public requestPasswordResetAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public logInAsync(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public signUpAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public logInAsync(param0: string, param1: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public getUserAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
		}
	}
}

declare module com {
	export module parse {
		export class NoObjectsEncoder extends com.parse.ParseEncoder {
			public static class: java.lang.Class<com.parse.NoObjectsEncoder>;
			public static get(): com.parse.NoObjectsEncoder;
			public encodeRelatedObject(param0: com.parse.ParseObject): org.json.JSONObject;
		}
	}
}

declare module com {
	export module parse {
		export class Numbers {
			public static class: java.lang.Class<com.parse.Numbers>;
		}
	}
}

declare module com {
	export module parse {
		export class OfflineObjectStore<T>  extends com.parse.ParseObjectStore<any> {
			public static class: java.lang.Class<com.parse.OfflineObjectStore<any>>;
			public constructor(param0: string, param1: string, param2: com.parse.ParseObjectStore<any>);
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public constructor(param0: java.lang.Class<any>, param1: string, param2: com.parse.ParseObjectStore<any>);
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public deleteAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
		}
	}
}

declare module com {
	export module parse {
		export class OfflineQueryController extends com.parse.AbstractQueryController {
			public static class: java.lang.Class<com.parse.OfflineQueryController>;
			public getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public constructor(param0: com.parse.OfflineStore, param1: com.parse.ParseQueryController);
			public findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
		}
	}
}

declare module com {
	export module parse {
		export class OfflineQueryLogic {
			public static class: java.lang.Class<com.parse.OfflineQueryLogic>;
		}
		export module OfflineQueryLogic {
			export abstract class ConstraintMatcher<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.OfflineQueryLogic.ConstraintMatcher<any>>;
				public constructor(param0: com.parse.OfflineQueryLogic, param1: com.parse.ParseUser);
			}
			export class Decider {
				public static class: java.lang.Class<com.parse.OfflineQueryLogic.Decider>;
				/**
				 * Constructs a new instance of the com.parse.OfflineQueryLogic$Decider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decide(param0: any, param1: any): boolean;
				});
				public constructor();
				public decide(param0: any, param1: any): boolean;
			}
			export abstract class SubQueryMatcher<T>  extends com.parse.OfflineQueryLogic.ConstraintMatcher<any> {
				public static class: java.lang.Class<com.parse.OfflineQueryLogic.SubQueryMatcher<any>>;
				public matches(param0: any, param1: java.util.List<any>): boolean;
				public constructor(param0: com.parse.ParseUser, param1: com.parse.ParseQuery.State<any>);
				public matchesAsync(param0: any, param1: com.parse.ParseSQLiteDatabase): com.parse.boltsinternal.Task<java.lang.Boolean>;
				public constructor(param0: com.parse.OfflineQueryLogic, param1: com.parse.ParseUser);
			}
		}
	}
}

declare module com {
	export module parse {
		export class OfflineSQLiteOpenHelper extends com.parse.ParseSQLiteOpenHelper {
			public static class: java.lang.Class<com.parse.OfflineSQLiteOpenHelper>;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
			public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public clearDatabase(param0: globalAndroid.content.Context): void;
			public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
			public constructor(param0: globalAndroid.content.Context);
		}
	}
}

declare module com {
	export module parse {
		export class OfflineStore {
			public static class: java.lang.Class<com.parse.OfflineStore>;
		}
		export module OfflineStore {
			export class OfflineDecoder extends com.parse.ParseDecoder {
				public static class: java.lang.Class<com.parse.OfflineStore.OfflineDecoder>;
				public decode(param0: any): any;
			}
			export class OfflineEncoder extends com.parse.ParseEncoder {
				public static class: java.lang.Class<com.parse.OfflineStore.OfflineEncoder>;
				public constructor(param0: com.parse.OfflineStore, param1: com.parse.ParseSQLiteDatabase);
				public encodeRelatedObject(param0: com.parse.ParseObject): org.json.JSONObject;
				public whenFinished(): com.parse.boltsinternal.Task<java.lang.Void>;
				public constructor();
			}
			export class SQLiteDatabaseCallable<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.OfflineStore.SQLiteDatabaseCallable<any>>;
				/**
				 * Constructs a new instance of the com.parse.OfflineStore$SQLiteDatabaseCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: com.parse.ParseSQLiteDatabase): T;
				});
				public constructor();
				public call(param0: com.parse.ParseSQLiteDatabase): T;
			}
		}
	}
}

declare module com {
	export module parse {
		export class PLog {
			public static class: java.lang.Class<com.parse.PLog>;
			public static LOG_LEVEL_NONE: number;
			public static getLogLevel(): number;
			public static v(param0: string, param1: string): void;
			public static w(param0: string, param1: string): void;
			public static d(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static i(param0: string, param1: string): void;
			public constructor();
			public static i(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static w(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static e(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static e(param0: string, param1: string): void;
			public static setLogLevel(param0: number): void;
			public static v(param0: string, param1: string, param2: java.lang.Throwable): void;
			public static d(param0: string, param1: string): void;
		}
	}
}

declare module com {
	export module parse {
		export class Parse {
			public static class: java.lang.Class<com.parse.Parse>;
			public static LOG_LEVEL_VERBOSE: number;
			public static LOG_LEVEL_DEBUG: number;
			public static LOG_LEVEL_INFO: number;
			public static LOG_LEVEL_WARNING: number;
			public static LOG_LEVEL_ERROR: number;
			public static LOG_LEVEL_NONE: number;
			public static enableLocalDatastore(param0: globalAndroid.content.Context): void;
			public static initialize(param0: com.parse.Parse.Configuration): void;
			public static getLogLevel(): number;
			public static checkInit(): void;
			public static setServer(param0: string): void;
			public static getApplicationContext(): globalAndroid.content.Context;
			public static destroy(): void;
			public static isLocalDatastoreEnabled(): boolean;
			public static getParseCacheDir(param0: string): java.io.File;
			public static getServer(): string;
			public static setLogLevel(param0: number): void;
		}
		export module Parse {
			export class Configuration {
				public static class: java.lang.Class<com.parse.Parse.Configuration>;
			}
			export module Configuration {
				export class Builder {
					public static class: java.lang.Class<com.parse.Parse.Configuration.Builder>;
					public constructor(param0: globalAndroid.content.Context);
					public clientBuilder(param0: okhttp3.OkHttpClient.Builder): com.parse.Parse.Configuration.Builder;
					public server(param0: string): com.parse.Parse.Configuration.Builder;
					public enableLocalDataStore(): com.parse.Parse.Configuration.Builder;
					public applicationId(param0: string): com.parse.Parse.Configuration.Builder;
					public clientKey(param0: string): com.parse.Parse.Configuration.Builder;
					public maxRetries(param0: number): com.parse.Parse.Configuration.Builder;
					public build(): com.parse.Parse.Configuration;
				}
			}
			export class ParseCallbacks {
				public static class: java.lang.Class<com.parse.Parse.ParseCallbacks>;
				/**
				 * Constructs a new instance of the com.parse.Parse$ParseCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onParseInitialized(): void;
				});
				public constructor();
				public onParseInitialized(): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseACL {
			public static class: java.lang.Class<com.parse.ParseACL>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParseACL>;
			public setRoleReadAccess(param0: string, param1: boolean): void;
			public setReadAccess(param0: com.parse.ParseUser, param1: boolean): void;
			public setPublicWriteAccess(param0: boolean): void;
			public getRoleReadAccess(param0: com.parse.ParseRole): boolean;
			public getRoleWriteAccess(param0: string): boolean;
			public getReadAccess(param0: string): boolean;
			public constructor(param0: com.parse.ParseUser);
			public setWriteAccess(param0: com.parse.ParseUser, param1: boolean): void;
			public setPublicReadAccess(param0: boolean): void;
			public getRoleWriteAccess(param0: com.parse.ParseRole): boolean;
			public getWriteAccess(param0: com.parse.ParseUser): boolean;
			public getPublicReadAccess(): boolean;
			public getPublicWriteAccess(): boolean;
			public constructor(param0: com.parse.ParseACL);
			public getWriteAccess(param0: string): boolean;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor();
			public setRoleWriteAccess(param0: string, param1: boolean): void;
			public setWriteAccess(param0: string, param1: boolean): void;
			public setReadAccess(param0: string, param1: boolean): void;
			public static setDefaultACL(param0: com.parse.ParseACL, param1: boolean): void;
			public getReadAccess(param0: com.parse.ParseUser): boolean;
			public describeContents(): number;
			public setRoleReadAccess(param0: com.parse.ParseRole, param1: boolean): void;
			public getRoleReadAccess(param0: string): boolean;
			public setRoleWriteAccess(param0: com.parse.ParseRole, param1: boolean): void;
		}
		export module ParseACL {
			export class Permissions {
				public static class: java.lang.Class<com.parse.ParseACL.Permissions>;
			}
			export class UserResolutionListener extends com.parse.GetCallback<com.parse.ParseObject> {
				public static class: java.lang.Class<com.parse.ParseACL.UserResolutionListener>;
				public done(param0: com.parse.ParseObject, param1: com.parse.ParseException): void;
				public constructor(param0: com.parse.ParseACL);
				public done(param0: any, param1: any): void;
				public done(param0: any, param1: com.parse.ParseException): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseAddOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseAddOperation>;
			public objects: java.util.ArrayList<any>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
			public constructor(param0: java.util.Collection<any>);
		}
	}
}

declare module com {
	export module parse {
		export class ParseAddUniqueOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseAddUniqueOperation>;
			public objects: java.util.LinkedHashSet<any>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
			public constructor(param0: java.util.Collection<any>);
		}
	}
}

declare module com {
	export module parse {
		export class ParseAnalytics {
			public static class: java.lang.Class<com.parse.ParseAnalytics>;
			public static trackAppOpenedInBackground(param0: globalAndroid.content.Intent): com.parse.boltsinternal.Task<java.lang.Void>;
			public static trackEventInBackground(param0: string, param1: com.parse.SaveCallback): void;
			public static trackEventInBackground(param0: string, param1: java.util.Map<string,string>, param2: com.parse.SaveCallback): void;
			public static trackAppOpenedInBackground(param0: globalAndroid.content.Intent, param1: com.parse.SaveCallback): void;
			public static trackEventInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public static trackEventInBackground(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor();
		}
	}
}

declare module com {
	export module parse {
		export class ParseAnalyticsController {
			public static class: java.lang.Class<com.parse.ParseAnalyticsController>;
			public constructor(param0: com.parse.ParseEventuallyQueue);
			public trackEventInBackground(param0: string, param1: java.util.Map<string,string>, param2: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public trackAppOpenedInBackground(param0: string, param1: string): com.parse.boltsinternal.Task<java.lang.Void>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseAnonymousUtils {
			public static class: java.lang.Class<com.parse.ParseAnonymousUtils>;
			public static logIn(param0: com.parse.LogInCallback): void;
			public static logInInBackground(): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public static isLinked(param0: com.parse.ParseUser): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class ParseAuthenticationManager {
			public static class: java.lang.Class<com.parse.ParseAuthenticationManager>;
			public register(param0: string, param1: com.parse.AuthenticationCallback): void;
			public constructor(param0: com.parse.ParseCurrentUserController);
			public restoreAuthenticationAsync(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public deauthenticateAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseByteArrayHttpBody extends com.parse.http.ParseHttpBody {
			public static class: java.lang.Class<com.parse.ParseByteArrayHttpBody>;
			public constructor(param0: string, param1: string);
			public writeTo(param0: java.io.OutputStream): void;
			public constructor(param0: native.Array<number>, param1: string);
			public constructor(param0: string, param1: number);
			public getContent(): java.io.InputStream;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCallback1<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseCallback1<any>>;
			/**
			 * Constructs a new instance of the com.parse.ParseCallback1<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: T): void;
			});
			public constructor();
			public done(param0: T): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCallback2<T1, T2>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseCallback2<any,any>>;
			/**
			 * Constructs a new instance of the com.parse.ParseCallback2<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: T1, param1: T2): void;
			});
			public constructor();
			public done(param0: T1, param1: T2): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseClassName {
			public static class: java.lang.Class<com.parse.ParseClassName>;
			/**
			 * Constructs a new instance of the com.parse.ParseClassName interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				value(): string;
			});
			public constructor();
			public value(): string;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCloud {
			public static class: java.lang.Class<com.parse.ParseCloud>;
			public static callFunctionInBackground(param0: string, param1: java.util.Map): com.parse.boltsinternal.Task<any>;
			public static callFunction(param0: string, param1: java.util.Map): any;
			public static callFunctionInBackground(param0: string, param1: java.util.Map, param2: com.parse.FunctionCallback<any>): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCloudCodeController {
			public static class: java.lang.Class<com.parse.ParseCloudCodeController>;
			public constructor(param0: com.parse.ParseHttpClient);
			public callFunctionInBackground(param0: string, param1: java.util.Map, param2: string): com.parse.boltsinternal.Task<any>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCommandCache extends com.parse.ParseEventuallyQueue {
			public static class: java.lang.Class<com.parse.ParseCommandCache>;
			public resume(): void;
			public constructor(param0: globalAndroid.content.Context, param1: com.parse.ParseHttpClient);
			public clear(): void;
			public setTimeoutRetryWaitSeconds(param0: number): void;
			public setMaxCacheSizeBytes(param0: number): void;
			public pendingCount(): number;
			public static getPendingCount(): number;
			public enqueueEventuallyAsync(param0: com.parse.ParseRESTCommand, param1: com.parse.ParseObject): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public setConnected(param0: boolean): void;
			public onDestroy(): void;
			public pause(): void;
			public setTimeoutMaxRetries(param0: number): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseConfig {
			public static class: java.lang.Class<com.parse.ParseConfig>;
			public get(param0: string, param1: any): any;
			public static get(): com.parse.ParseConfig;
			public getBoolean(param0: string): boolean;
			public getJSONArray(param0: string, param1: org.json.JSONArray): org.json.JSONArray;
			public getDate(param0: string): java.util.Date;
			public getLong(param0: string, param1: number): number;
			public getJSONObject(param0: string): org.json.JSONObject;
			public getParseGeoPoint(param0: string, param1: com.parse.ParseGeoPoint): com.parse.ParseGeoPoint;
			public getDate(param0: string, param1: java.util.Date): java.util.Date;
			public static getCurrentConfig(): com.parse.ParseConfig;
			public getJSONArray(param0: string): org.json.JSONArray;
			public getList(param0: string): java.util.List;
			public getNumber(param0: string, param1: java.lang.Number): java.lang.Number;
			public getLong(param0: string): number;
			public get(param0: string): any;
			public getInt(param0: string): number;
			public getInt(param0: string, param1: number): number;
			public getNumber(param0: string): java.lang.Number;
			public getList(param0: string, param1: java.util.List): java.util.List;
			public getJSONObject(param0: string, param1: org.json.JSONObject): org.json.JSONObject;
			public static getInBackground(): com.parse.boltsinternal.Task<com.parse.ParseConfig>;
			public getString(param0: string): string;
			public static getInBackground(param0: com.parse.ConfigCallback): void;
			public getDouble(param0: string, param1: number): number;
			public getParseGeoPoint(param0: string): com.parse.ParseGeoPoint;
			public toString(): string;
			public getDouble(param0: string): number;
			public getParseFile(param0: string): com.parse.ParseFile;
			public getBoolean(param0: string, param1: boolean): boolean;
			public getMap(param0: string): java.util.Map;
			public getMap(param0: string, param1: java.util.Map): java.util.Map;
			public getParseFile(param0: string, param1: com.parse.ParseFile): com.parse.ParseFile;
			public getString(param0: string, param1: string): string;
		}
	}
}

declare module com {
	export module parse {
		export class ParseConfigController {
			public static class: java.lang.Class<com.parse.ParseConfigController>;
			public constructor(param0: com.parse.ParseHttpClient, param1: com.parse.ParseCurrentConfigController);
			public getAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseConfig>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCorePlugins {
			public static class: java.lang.Class<com.parse.ParseCorePlugins>;
			public registerPushController(param0: com.parse.ParsePushController): void;
			public static getInstance(): com.parse.ParseCorePlugins;
			public getAnalyticsController(): com.parse.ParseAnalyticsController;
			public registerFileController(param0: com.parse.ParseFileController): void;
			public registerObjectController(param0: com.parse.ParseObjectController): void;
			public getPushController(): com.parse.ParsePushController;
			public getPushChannelsController(): com.parse.ParsePushChannelsController;
			public registerCurrentInstallationController(param0: com.parse.ParseCurrentInstallationController): void;
			public registerLocalIdManager(param0: com.parse.LocalIdManager): void;
			public getUserController(): com.parse.ParseUserController;
			public registerCloudCodeController(param0: com.parse.ParseCloudCodeController): void;
			public registerAuthenticationManager(param0: com.parse.ParseAuthenticationManager): void;
			public getConfigController(): com.parse.ParseConfigController;
			public getSessionController(): com.parse.ParseSessionController;
			public getCloudCodeController(): com.parse.ParseCloudCodeController;
			public registerAnalyticsController(param0: com.parse.ParseAnalyticsController): void;
			public getAuthenticationManager(): com.parse.ParseAuthenticationManager;
			public registerCurrentUserController(param0: com.parse.ParseCurrentUserController): void;
			public getLocalIdManager(): com.parse.LocalIdManager;
			public getObjectController(): com.parse.ParseObjectController;
			public registerPushChannelsController(param0: com.parse.ParsePushChannelsController): void;
			public registerUserController(param0: com.parse.ParseUserController): void;
			public registerQueryController(param0: com.parse.ParseQueryController): void;
			public getSubclassingController(): com.parse.ParseObjectSubclassingController;
			public registerSessionController(param0: com.parse.ParseSessionController): void;
			public registerSubclassingController(param0: com.parse.ParseObjectSubclassingController): void;
			public getCurrentInstallationController(): com.parse.ParseCurrentInstallationController;
			public getDefaultACLController(): com.parse.ParseDefaultACLController;
			public registerDefaultACLController(param0: com.parse.ParseDefaultACLController): void;
			public getFileController(): com.parse.ParseFileController;
			public getQueryController(): com.parse.ParseQueryController;
			public registerConfigController(param0: com.parse.ParseConfigController): void;
			public getCurrentUserController(): com.parse.ParseCurrentUserController;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCountingByteArrayHttpBody extends com.parse.ParseByteArrayHttpBody {
			public static class: java.lang.Class<com.parse.ParseCountingByteArrayHttpBody>;
			public constructor(param0: string, param1: string);
			public writeTo(param0: java.io.OutputStream): void;
			public constructor(param0: native.Array<number>, param1: string);
			public constructor(param0: string, param1: number);
			public constructor(param0: native.Array<number>, param1: string, param2: com.parse.ProgressCallback);
		}
	}
}

declare module com {
	export module parse {
		export class ParseCountingFileHttpBody extends com.parse.ParseFileHttpBody {
			public static class: java.lang.Class<com.parse.ParseCountingFileHttpBody>;
			public constructor(param0: java.io.File, param1: string);
			public constructor(param0: java.io.File, param1: com.parse.ProgressCallback);
			public writeTo(param0: java.io.OutputStream): void;
			public constructor(param0: java.io.File, param1: string, param2: com.parse.ProgressCallback);
			public constructor(param0: string, param1: number);
			public constructor(param0: java.io.File);
		}
	}
}

declare module com {
	export module parse {
		export class ParseCurrentConfigController {
			public static class: java.lang.Class<com.parse.ParseCurrentConfigController>;
			public setCurrentConfigAsync(param0: com.parse.ParseConfig): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor(param0: java.io.File);
			public getCurrentConfigAsync(): com.parse.boltsinternal.Task<com.parse.ParseConfig>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCurrentInstallationController extends com.parse.ParseObjectCurrentController<com.parse.ParseInstallation> {
			public static class: java.lang.Class<com.parse.ParseCurrentInstallationController>;
			/**
			 * Constructs a new instance of the com.parse.ParseCurrentInstallationController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
				getAsync(): com.parse.boltsinternal.Task<any>;
				existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
				isCurrent(param0: any): boolean;
				clearFromMemory(): void;
				clearFromDisk(): void;
			});
			public constructor();
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public clearFromDisk(): void;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public clearFromMemory(): void;
			public isCurrent(param0: any): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class ParseCurrentUserController extends com.parse.ParseObjectCurrentController<com.parse.ParseUser> {
			public static class: java.lang.Class<com.parse.ParseCurrentUserController>;
			/**
			 * Constructs a new instance of the com.parse.ParseCurrentUserController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAsync(param0: boolean): com.parse.boltsinternal.Task<com.parse.ParseUser>;
				setIfNeededAsync(param0: com.parse.ParseUser): com.parse.boltsinternal.Task<java.lang.Void>;
				getCurrentSessionTokenAsync(): com.parse.boltsinternal.Task<string>;
				logOutAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
				setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
				getAsync(): com.parse.boltsinternal.Task<any>;
				existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
				isCurrent(param0: any): boolean;
				clearFromMemory(): void;
				clearFromDisk(): void;
			});
			public constructor();
			public getAsync(param0: boolean): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public getAsync(): com.parse.boltsinternal.Task<any>;
			public setAsync(param0: any): com.parse.boltsinternal.Task<java.lang.Void>;
			public clearFromDisk(): void;
			public logOutAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public getCurrentSessionTokenAsync(): com.parse.boltsinternal.Task<string>;
			public setIfNeededAsync(param0: com.parse.ParseUser): com.parse.boltsinternal.Task<java.lang.Void>;
			public clearFromMemory(): void;
			public isCurrent(param0: any): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class ParseDateFormat {
			public static class: java.lang.Class<com.parse.ParseDateFormat>;
			public static getInstance(): com.parse.ParseDateFormat;
		}
	}
}

declare module com {
	export module parse {
		export class ParseDecoder {
			public static class: java.lang.Class<com.parse.ParseDecoder>;
			public decode(param0: any): any;
			public constructor();
			public static get(): com.parse.ParseDecoder;
			public decodePointer(param0: string, param1: string): com.parse.ParseObject;
		}
	}
}

declare module com {
	export module parse {
		export class ParseDefaultACLController {
			public static class: java.lang.Class<com.parse.ParseDefaultACLController>;
			public set(param0: com.parse.ParseACL, param1: boolean): void;
			public get(): com.parse.ParseACL;
		}
	}
}

declare module com {
	export module parse {
		export class ParseDeleteOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseDeleteOperation>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
			public static getInstance(): com.parse.ParseDeleteOperation;
		}
	}
}

declare module com {
	export module parse {
		export class ParseDigestUtils {
			public static class: java.lang.Class<com.parse.ParseDigestUtils>;
			public static md5(param0: string): string;
		}
	}
}

declare module com {
	export module parse {
		export abstract class ParseEncoder {
			public static class: java.lang.Class<com.parse.ParseEncoder>;
			public encodeDate(param0: java.util.Date): org.json.JSONObject;
			public encode(param0: any): any;
			public encodeRelatedObject(param0: com.parse.ParseObject): org.json.JSONObject;
			public constructor();
		}
	}
}

declare module com {
	export module parse {
		export abstract class ParseEventuallyQueue {
			public static class: java.lang.Class<com.parse.ParseEventuallyQueue>;
			public clear(): void;
			public setMaxCacheSizeBytes(param0: number): void;
			public onDestroy(): void;
			public pause(): void;
			public resume(): void;
			public setTimeoutRetryWaitSeconds(param0: number): void;
			public pendingCount(): number;
			public getTestHelper(): com.parse.ParseEventuallyQueue.TestHelper;
			public enqueueEventuallyAsync(param0: com.parse.ParseRESTCommand, param1: com.parse.ParseObject): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public isConnected(): boolean;
			public setConnected(param0: boolean): void;
			public commandFromJSON(param0: org.json.JSONObject): com.parse.ParseRESTCommand;
			public notifyTestHelper(param0: number): void;
			public notifyTestHelper(param0: number, param1: java.lang.Throwable): void;
		}
		export module ParseEventuallyQueue {
			export class TestHelper {
				public static class: java.lang.Class<com.parse.ParseEventuallyQueue.TestHelper>;
				public static COMMAND_SUCCESSFUL: number;
				public static COMMAND_FAILED: number;
				public static COMMAND_ENQUEUED: number;
				public static COMMAND_NOT_ENQUEUED: number;
				public static OBJECT_UPDATED: number;
				public static OBJECT_REMOVED: number;
				public static NETWORK_DOWN: number;
				public static COMMAND_OLD_FORMAT_DISCARDED: number;
				public waitFor(param0: number): boolean;
				public notify(param0: number, param1: java.lang.Throwable): void;
				public waitFor(param0: number, param1: number): boolean;
				public unexpectedEvents(): number;
				public getUnexpectedEvents(): java.util.List<string>;
				public clear(): void;
				public static getEventString(param0: number): string;
				public notify(param0: number): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseException {
			public static class: java.lang.Class<com.parse.ParseException>;
			public static OTHER_CAUSE: number;
			public static CONNECTION_FAILED: number;
			public static OBJECT_NOT_FOUND: number;
			public static INVALID_QUERY: number;
			public static INVALID_CLASS_NAME: number;
			public static MISSING_OBJECT_ID: number;
			public static INVALID_KEY_NAME: number;
			public static INVALID_POINTER: number;
			public static INVALID_JSON: number;
			public static COMMAND_UNAVAILABLE: number;
			public static NOT_INITIALIZED: number;
			public static INCORRECT_TYPE: number;
			public static INVALID_CHANNEL_NAME: number;
			public static PUSH_MISCONFIGURED: number;
			public static OBJECT_TOO_LARGE: number;
			public static OPERATION_FORBIDDEN: number;
			public static CACHE_MISS: number;
			public static INVALID_NESTED_KEY: number;
			public static INVALID_FILE_NAME: number;
			public static INVALID_ACL: number;
			public static TIMEOUT: number;
			public static INVALID_EMAIL_ADDRESS: number;
			public static MISSING_REQUIRED_FIELD_ERROR: number;
			public static DUPLICATE_VALUE: number;
			public static INVALID_ROLE_NAME: number;
			public static EXCEEDED_QUOTA: number;
			public static SCRIPT_ERROR: number;
			public static VALIDATION_ERROR: number;
			public static FILE_DELETE_ERROR: number;
			public static REQUEST_LIMIT_EXCEEDED: number;
			public static INVALID_EVENT_NAME: number;
			public static USERNAME_MISSING: number;
			public static PASSWORD_MISSING: number;
			public static USERNAME_TAKEN: number;
			public static EMAIL_TAKEN: number;
			public static EMAIL_MISSING: number;
			public static EMAIL_NOT_FOUND: number;
			public static SESSION_MISSING: number;
			public static MUST_CREATE_USER_THROUGH_SIGNUP: number;
			public static ACCOUNT_ALREADY_LINKED: number;
			public static INVALID_SESSION_TOKEN: number;
			public static LINKED_ID_MISSING: number;
			public static INVALID_LINKED_SESSION: number;
			public static UNSUPPORTED_SERVICE: number;
			public constructor(param0: java.lang.Throwable);
			public constructor(param0: number, param1: string);
			public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			public getCode(): number;
		}
	}
}

declare module com {
	export module parse {
		export class ParseExecutors {
			public static class: java.lang.Class<com.parse.ParseExecutors>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseFieldOperation>;
			/**
			 * Constructs a new instance of the com.parse.ParseFieldOperation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				encode(param0: com.parse.ParseEncoder): any;
				encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
				mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
				apply(param0: any, param1: string): any;
			});
			public constructor();
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
		}
	}
}

declare module com {
	export module parse {
		export class ParseFieldOperations {
			public static class: java.lang.Class<com.parse.ParseFieldOperations>;
		}
		export module ParseFieldOperations {
			export class ParseFieldOperationFactory {
				public static class: java.lang.Class<com.parse.ParseFieldOperations.ParseFieldOperationFactory>;
				/**
				 * Constructs a new instance of the com.parse.ParseFieldOperations$ParseFieldOperationFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decode(param0: org.json.JSONObject, param1: com.parse.ParseDecoder): com.parse.ParseFieldOperation;
					decode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelDecoder): com.parse.ParseFieldOperation;
				});
				public constructor();
				public decode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelDecoder): com.parse.ParseFieldOperation;
				public decode(param0: org.json.JSONObject, param1: com.parse.ParseDecoder): com.parse.ParseFieldOperation;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseFile {
			public static class: java.lang.Class<com.parse.ParseFile>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParseFile>;
			public getFileInBackground(): com.parse.boltsinternal.Task<java.io.File>;
			public save(): void;
			public saveInBackground(param0: com.parse.SaveCallback, param1: com.parse.ProgressCallback): void;
			public cancel(): void;
			public getDataInBackground(param0: com.parse.ProgressCallback): com.parse.boltsinternal.Task<native.Array<number>>;
			public constructor(param0: java.io.File, param1: string);
			public saveInBackground(param0: com.parse.SaveCallback): void;
			public getDataStreamInBackground(): com.parse.boltsinternal.Task<java.io.InputStream>;
			public getData(): native.Array<number>;
			public constructor(param0: java.io.File);
			public getDataInBackground(param0: com.parse.GetDataCallback, param1: com.parse.ProgressCallback): void;
			public saveInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public getDataInBackground(): com.parse.boltsinternal.Task<native.Array<number>>;
			public getFile(): java.io.File;
			public getDataStreamInBackground(param0: com.parse.GetDataStreamCallback, param1: com.parse.ProgressCallback): void;
			public getUrl(): string;
			public isDirty(): boolean;
			public constructor(param0: native.Array<number>, param1: string);
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: string, param1: native.Array<number>, param2: string);
			public constructor(param0: native.Array<number>);
			public constructor(param0: globalAndroid.os.Parcel);
			public getFileInBackground(param0: com.parse.GetFileCallback): void;
			public getFileInBackground(param0: com.parse.GetFileCallback, param1: com.parse.ProgressCallback): void;
			public getDataInBackground(param0: com.parse.GetDataCallback): void;
			public constructor(param0: string, param1: native.Array<number>);
			public getName(): string;
			public getDataStreamInBackground(param0: com.parse.ProgressCallback): com.parse.boltsinternal.Task<java.io.InputStream>;
			public describeContents(): number;
			public getDataStreamInBackground(param0: com.parse.GetDataStreamCallback): void;
			public getFileInBackground(param0: com.parse.ProgressCallback): com.parse.boltsinternal.Task<java.io.File>;
			public saveInBackground(param0: com.parse.ProgressCallback): com.parse.boltsinternal.Task<java.lang.Void>;
			public isDataAvailable(): boolean;
			public getDataStream(): java.io.InputStream;
		}
		export module ParseFile {
			export class State {
				public static class: java.lang.Class<com.parse.ParseFile.State>;
				public name(): string;
				public mimeType(): string;
				public url(): string;
			}
			export module State {
				export class Builder {
					public static class: java.lang.Class<com.parse.ParseFile.State.Builder>;
					public constructor();
					public name(param0: string): com.parse.ParseFile.State.Builder;
					public constructor(param0: com.parse.ParseFile.State);
					public mimeType(param0: string): com.parse.ParseFile.State.Builder;
					public url(param0: string): com.parse.ParseFile.State.Builder;
					public build(): com.parse.ParseFile.State;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseFileController {
			public static class: java.lang.Class<com.parse.ParseFileController>;
			public getCacheFile(param0: com.parse.ParseFile.State): java.io.File;
			public fetchAsync(param0: com.parse.ParseFile.State, param1: string, param2: com.parse.ProgressCallback, param3: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<java.io.File>;
			public saveAsync(param0: com.parse.ParseFile.State, param1: java.io.File, param2: string, param3: com.parse.ProgressCallback, param4: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<com.parse.ParseFile.State>;
			public saveAsync(param0: com.parse.ParseFile.State, param1: native.Array<number>, param2: string, param3: com.parse.ProgressCallback, param4: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<com.parse.ParseFile.State>;
			public constructor(param0: com.parse.ParseHttpClient, param1: java.io.File);
			public clearCache(): void;
			public isDataAvailable(param0: com.parse.ParseFile.State): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class ParseFileHttpBody extends com.parse.http.ParseHttpBody {
			public static class: java.lang.Class<com.parse.ParseFileHttpBody>;
			public constructor(param0: java.io.File, param1: string);
			public writeTo(param0: java.io.OutputStream): void;
			public constructor(param0: string, param1: number);
			public constructor(param0: java.io.File);
			public getContent(): java.io.InputStream;
		}
	}
}

declare module com {
	export module parse {
		export class ParseFileRequest extends com.parse.ParseRequest<java.lang.Void> {
			public static class: java.lang.Class<com.parse.ParseFileRequest>;
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<java.lang.Void>;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<any>;
			public constructor(param0: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string, param2: java.io.File);
		}
	}
}

declare module com {
	export module parse {
		export class ParseFileUtils {
			public static class: java.lang.Class<com.parse.ParseFileUtils>;
			public static ONE_KB: number;
			public static ONE_MB: number;
			public static writeStringToFile(param0: java.io.File, param1: string, param2: string): void;
			public static cleanDirectory(param0: java.io.File): void;
			public static readFileToByteArray(param0: java.io.File): native.Array<number>;
			public static moveFile(param0: java.io.File, param1: java.io.File): void;
			public static openOutputStream(param0: java.io.File): java.io.FileOutputStream;
			public static writeJSONObjectToFile(param0: java.io.File, param1: org.json.JSONObject): void;
			public static openInputStream(param0: java.io.File): java.io.FileInputStream;
			public constructor();
			public static writeByteArrayToFile(param0: java.io.File, param1: native.Array<number>): void;
			public static readFileToString(param0: java.io.File, param1: java.nio.charset.Charset): string;
			public static readFileToString(param0: java.io.File, param1: string): string;
			public static copyFile(param0: java.io.File, param1: java.io.File, param2: boolean): void;
			public static copyFile(param0: java.io.File, param1: java.io.File): void;
			public static writeStringToFile(param0: java.io.File, param1: string, param2: java.nio.charset.Charset): void;
			public static isSymlink(param0: java.io.File): boolean;
			public static deleteQuietly(param0: java.io.File): boolean;
			public static forceDelete(param0: java.io.File): void;
			public static readFileToJSONObject(param0: java.io.File): org.json.JSONObject;
			public static deleteDirectory(param0: java.io.File): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseGeoPoint {
			public static class: java.lang.Class<com.parse.ParseGeoPoint>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParseGeoPoint>;
			public getLongitude(): number;
			public equals(param0: any): boolean;
			public setLongitude(param0: number): void;
			public constructor(param0: com.parse.ParseGeoPoint);
			public distanceInMilesTo(param0: com.parse.ParseGeoPoint): number;
			public getLatitude(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor();
			public constructor(param0: globalAndroid.os.Parcel);
			public static getCurrentLocationInBackground(param0: number, param1: globalAndroid.location.Criteria, param2: com.parse.LocationCallback): void;
			public static getCurrentLocationInBackground(param0: number, param1: globalAndroid.location.Criteria): com.parse.boltsinternal.Task<com.parse.ParseGeoPoint>;
			public static getCurrentLocationInBackground(param0: number): com.parse.boltsinternal.Task<com.parse.ParseGeoPoint>;
			public toString(): string;
			public distanceInRadiansTo(param0: com.parse.ParseGeoPoint): number;
			public describeContents(): number;
			public setLatitude(param0: number): void;
			public distanceInKilometersTo(param0: com.parse.ParseGeoPoint): number;
			public static getCurrentLocationInBackground(param0: number, param1: com.parse.LocationCallback): void;
			public constructor(param0: number, param1: number);
		}
	}
}

declare module com {
	export module parse {
		export class ParseHttpClient {
			public static class: java.lang.Class<com.parse.ParseHttpClient>;
			public execute(param0: com.parse.http.ParseHttpRequest): com.parse.http.ParseHttpResponse;
		}
		export module ParseHttpClient {
			export class ParseOkHttpRequestBody {
				public static class: java.lang.Class<com.parse.ParseHttpClient.ParseOkHttpRequestBody>;
				public contentLength(): number;
				public writeTo(param0: okio.BufferedSink): void;
				public contentType(): okhttp3.MediaType;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseIOUtils {
			public static class: java.lang.Class<com.parse.ParseIOUtils>;
			public static toByteArray(param0: java.io.InputStream): native.Array<number>;
			public static copy(param0: java.io.InputStream, param1: java.io.OutputStream): number;
			public static closeQuietly(param0: java.io.Closeable): void;
			public static copyLarge(param0: java.io.InputStream, param1: java.io.OutputStream): number;
			public static skipFully(param0: java.io.InputStream, param1: number): void;
			public static closeQuietly(param0: java.io.OutputStream): void;
			public static copyLarge(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number, param4: native.Array<number>): number;
			public static copyLarge(param0: java.io.InputStream, param1: java.io.OutputStream, param2: number, param3: number): number;
			public static copyLarge(param0: java.io.InputStream, param1: java.io.OutputStream, param2: native.Array<number>): number;
			public static skip(param0: java.io.InputStream, param1: number): number;
			public static closeQuietly(param0: java.io.InputStream): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseImpreciseDateFormat {
			public static class: java.lang.Class<com.parse.ParseImpreciseDateFormat>;
			public static getInstance(): com.parse.ParseImpreciseDateFormat;
		}
	}
}

declare module com {
	export module parse {
		export class ParseIncrementOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseIncrementOperation>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public constructor(param0: java.lang.Number);
			public encode(param0: com.parse.ParseEncoder): any;
		}
	}
}

declare module com {
	export module parse {
		export class ParseInstallation extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.ParseInstallation>;
			public getPushType(): string;
			public setDeviceToken(param0: string): void;
			public static getCurrentInstallation(): com.parse.ParseInstallation;
			public static getQuery(): com.parse.ParseQuery<com.parse.ParseInstallation>;
			public getInstallationId(): string;
			public setObjectId(param0: string): void;
			public constructor();
			public setPushType(param0: string): void;
			public getDeviceToken(): string;
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module parse {
		export class ParseJSONUtils {
			public static class: java.lang.Class<com.parse.ParseJSONUtils>;
			public static create(param0: org.json.JSONObject, param1: java.util.Collection<string>): org.json.JSONObject;
			public static keys(param0: org.json.JSONObject): java.lang.Iterable<string>;
			public static getInt(param0: org.json.JSONObject, param1: java.util.List<string>): number;
		}
	}
}

declare module com {
	export module parse {
		export class ParseKeyValueCache {
			public static class: java.lang.Class<com.parse.ParseKeyValueCache>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseMulticastDelegate<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseMulticastDelegate<any>>;
			public clear(): void;
			public constructor();
			public subscribe(param0: com.parse.ParseCallback2<T,com.parse.ParseException>): void;
			public invoke(param0: T, param1: com.parse.ParseException): void;
			public unsubscribe(param0: com.parse.ParseCallback2<T,com.parse.ParseException>): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseNotificationManager {
			public static class: java.lang.Class<com.parse.ParseNotificationManager>;
			public static getInstance(): com.parse.ParseNotificationManager;
			public showNotification(param0: globalAndroid.content.Context, param1: globalAndroid.app.Notification): void;
		}
		export module ParseNotificationManager {
			export class Singleton {
				public static class: java.lang.Class<com.parse.ParseNotificationManager.Singleton>;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseObject {
			public static class: java.lang.Class<com.parse.ParseObject>;
			public static DEFAULT_PIN: string;
			public static KEY_OBJECT_ID: string;
			public static KEY_CREATED_AT: string;
			public static KEY_UPDATED_AT: string;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParseObject>;
			public getObjectId(): string;
			public addAll(param0: string, param1: java.util.Collection<any>): void;
			public fetchInBackground(param0: com.parse.GetCallback<any>): void;
			public setACL(param0: com.parse.ParseACL): void;
			public remove(param0: string): void;
			public getParsePolygon(param0: string): com.parse.ParsePolygon;
			public pinInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public saveEventually(): com.parse.boltsinternal.Task<java.lang.Void>;
			public getList(param0: string): java.util.List;
			public static deleteAllInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public delete(): void;
			public get(param0: string): any;
			public static deleteAll(param0: java.util.List): void;
			public static deleteAllInBackground(param0: java.util.List, param1: com.parse.DeleteCallback): void;
			public getNumber(param0: string): java.lang.Number;
			public revert(): void;
			public constructor();
			public static createWithoutData(param0: string, param1: string): com.parse.ParseObject;
			public getACL(): com.parse.ParseACL;
			public pinInBackground(param0: com.parse.SaveCallback): void;
			public unpinInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public getDouble(param0: string): number;
			public addUnique(param0: string, param1: any): void;
			public describeContents(): number;
			public getMap(param0: string): java.util.Map;
			public fetchFromLocalDatastoreInBackground(param0: com.parse.GetCallback<any>): void;
			public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
			public static pinAll(param0: java.util.List): void;
			public pinInBackground(param0: string, param1: com.parse.SaveCallback): void;
			public deleteEventually(param0: com.parse.DeleteCallback): void;
			public put(param0: string, param1: any): void;
			public pinInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public fetchIfNeededInBackground(): com.parse.boltsinternal.Task<any>;
			public static fetchAllIfNeeded(param0: java.util.List): java.util.List;
			public static saveAllInBackground(param0: java.util.List, param1: com.parse.SaveCallback): void;
			public static unpinAllInBackground(param0: string, param1: com.parse.DeleteCallback): void;
			public isDataAvailable(param0: string): boolean;
			public getJSONArray(param0: string): org.json.JSONArray;
			public static pinAllInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public deleteInBackground(param0: com.parse.DeleteCallback): void;
			public static fetchAllIfNeededInBackground(param0: java.util.List, param1: com.parse.FindCallback<any>): void;
			public deleteInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public static unpinAllInBackground(param0: string, param1: java.util.List): com.parse.boltsinternal.Task<any>;
			public revert(param0: string): void;
			public fetchInBackground(): com.parse.boltsinternal.Task<any>;
			public getString(param0: string): string;
			public setObjectId(param0: string): void;
			public static fetchAll(param0: java.util.List): java.util.List;
			public static unpinAll(): void;
			public getParseGeoPoint(param0: string): com.parse.ParseGeoPoint;
			public static unpinAllInBackground(param0: java.util.List, param1: com.parse.DeleteCallback): void;
			public static fromJSON(param0: org.json.JSONObject, param1: string, param2: com.parse.ParseDecoder): com.parse.ParseObject;
			public static unpinAllInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public isDataAvailable(): boolean;
			public static unpinAll(param0: string, param1: java.util.List): void;
			public keySet(): java.util.Set<string>;
			public deleteEventually(): com.parse.boltsinternal.Task<java.lang.Void>;
			public save(): void;
			public pin(): void;
			public static create(param0: java.lang.Class): com.parse.ParseObject;
			public getBoolean(param0: string): boolean;
			public getCreatedAt(): java.util.Date;
			public getDate(param0: string): java.util.Date;
			public static unpinAllInBackground(param0: string, param1: java.util.List, param2: com.parse.DeleteCallback): void;
			public static createWithoutData(param0: java.lang.Class, param1: string): com.parse.ParseObject;
			public static pinAll(param0: string, param1: java.util.List): void;
			public getJSONObject(param0: string): org.json.JSONObject;
			public saveInBackground(param0: com.parse.SaveCallback): void;
			public constructor(param0: string);
			public containsKey(param0: string): boolean;
			public getLong(param0: string): number;
			public getInt(param0: string): number;
			public isDirty(): boolean;
			public getBytes(param0: string): native.Array<number>;
			public static fromJSON(param0: org.json.JSONObject, param1: string, param2: com.parse.ParseDecoder, param3: java.util.Set): com.parse.ParseObject;
			public static unpinAllInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public static fetchAllIfNeededInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public unpin(): void;
			public getClassName(): string;
			public getParseObject(param0: string): com.parse.ParseObject;
			public static create(param0: string): com.parse.ParseObject;
			public static pinAllInBackground(param0: string, param1: java.util.List, param2: com.parse.SaveCallback): void;
			public increment(param0: string): void;
			public unpinInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public static registerSubclass(param0: java.lang.Class<any>): void;
			public saveEventually(param0: com.parse.SaveCallback): void;
			public static pinAllInBackground(param0: java.util.List, param1: com.parse.SaveCallback): void;
			public increment(param0: string, param1: java.lang.Number): void;
			public pin(param0: string): void;
			public unpin(param0: string): void;
			public static unpinAll(param0: java.util.List): void;
			public static saveAllInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public static fetchAllInBackground(param0: java.util.List): com.parse.boltsinternal.Task<any>;
			public unpinInBackground(param0: string, param1: com.parse.DeleteCallback): void;
			public static unpinAllInBackground(param0: com.parse.DeleteCallback): void;
			public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
			public static pinAllInBackground(param0: string, param1: java.util.List): com.parse.boltsinternal.Task<any>;
			public saveInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public fetchFromLocalDatastore(): void;
			public fetch(): com.parse.ParseObject;
			public static fetchAllInBackground(param0: java.util.List, param1: com.parse.FindCallback<any>): void;
			public unpinInBackground(param0: com.parse.DeleteCallback): void;
			public static unpinAll(param0: string): void;
			public fetchIfNeeded(): com.parse.ParseObject;
			public removeAll(param0: string, param1: java.util.Collection<any>): void;
			public getParseUser(param0: string): com.parse.ParseUser;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public static unpinAllInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public getUpdatedAt(): java.util.Date;
			public isDirty(param0: string): boolean;
			public add(param0: string, param1: any): void;
			public static saveAll(param0: java.util.List): void;
			public addAllUnique(param0: string, param1: java.util.Collection<any>): void;
			public fetchIfNeededInBackground(param0: com.parse.GetCallback<any>): void;
			public getParseFile(param0: string): com.parse.ParseFile;
			public getRelation(param0: string): com.parse.ParseRelation<any>;
			public hasSameId(param0: com.parse.ParseObject): boolean;
			public has(param0: string): boolean;
		}
		export module ParseObject {
			export class State {
				public static class: java.lang.Class<com.parse.ParseObject.State>;
				public isComplete(): boolean;
				public get(param0: string): any;
				public keySet(): java.util.Set<string>;
				public static newBuilder(param0: string): com.parse.ParseObject.State.Init<any>;
				public availableKeys(): java.util.Set<string>;
				public createdAt(): number;
				public newBuilder(): com.parse.ParseObject.State.Init<any>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
				public objectId(): string;
				public toString(): string;
				public className(): string;
				public updatedAt(): number;
			}
			export module State {
				export class Builder extends com.parse.ParseObject.State.Init<com.parse.ParseObject.State.Builder> {
					public static class: java.lang.Class<com.parse.ParseObject.State.Builder>;
					public constructor(param0: string);
					public constructor(param0: com.parse.ParseObject.State);
					public build(): com.parse.ParseObject.State;
				}
				export abstract class Init<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.parse.ParseObject.State.Init<any>>;
					public updatedAt(param0: number): T;
					public objectId(param0: string): T;
					public constructor(param0: string);
					public put(param0: string, param1: any): T;
					public createdAt(param0: java.util.Date): T;
					public updatedAt(param0: java.util.Date): T;
					public remove(param0: string): T;
					public clear(): T;
					public availableKeys(param0: java.util.Collection<string>): T;
					public apply(param0: com.parse.ParseObject.State): T;
					public createdAt(param0: number): T;
					public isComplete(param0: boolean): T;
					public apply(param0: com.parse.ParseOperationSet): T;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectCoder {
			public static class: java.lang.Class<com.parse.ParseObjectCoder>;
			public decode(param0: com.parse.ParseObject.State.Init<any>, param1: org.json.JSONObject, param2: com.parse.ParseDecoder): com.parse.ParseObject.State.Init<any>;
			public encode(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: com.parse.ParseEncoder): org.json.JSONObject;
			public static get(): com.parse.ParseObjectCoder;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectController {
			public static class: java.lang.Class<com.parse.ParseObjectController>;
			/**
			 * Constructs a new instance of the com.parse.ParseObjectController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				fetchAsync(param0: com.parse.ParseObject.State, param1: string, param2: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
				saveAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string, param3: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
				saveAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: java.util.List<com.parse.ParseOperationSet>, param2: string, param3: java.util.List<com.parse.ParseDecoder>): java.util.List<com.parse.boltsinternal.Task<com.parse.ParseObject.State>>;
				deleteAsync(param0: com.parse.ParseObject.State, param1: string): com.parse.boltsinternal.Task<java.lang.Void>;
				deleteAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: string): java.util.List<com.parse.boltsinternal.Task<java.lang.Void>>;
			});
			public constructor();
			public saveAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: java.util.List<com.parse.ParseOperationSet>, param2: string, param3: java.util.List<com.parse.ParseDecoder>): java.util.List<com.parse.boltsinternal.Task<com.parse.ParseObject.State>>;
			public deleteAllAsync(param0: java.util.List<com.parse.ParseObject.State>, param1: string): java.util.List<com.parse.boltsinternal.Task<java.lang.Void>>;
			public deleteAsync(param0: com.parse.ParseObject.State, param1: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public fetchAsync(param0: com.parse.ParseObject.State, param1: string, param2: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
			public saveAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string, param3: com.parse.ParseDecoder): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectCurrentCoder extends com.parse.ParseObjectCoder {
			public static class: java.lang.Class<com.parse.ParseObjectCurrentCoder>;
			public static get(): com.parse.ParseObjectCurrentCoder;
			public decode(param0: com.parse.ParseObject.State.Init<any>, param1: org.json.JSONObject, param2: com.parse.ParseDecoder): com.parse.ParseObject.State.Init<any>;
			public encode(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: com.parse.ParseEncoder): org.json.JSONObject;
			public static get(): com.parse.ParseObjectCoder;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectCurrentController<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseObjectCurrentController<any>>;
			/**
			 * Constructs a new instance of the com.parse.ParseObjectCurrentController<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				setAsync(param0: T): com.parse.boltsinternal.Task<java.lang.Void>;
				getAsync(): com.parse.boltsinternal.Task<T>;
				existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
				isCurrent(param0: T): boolean;
				clearFromMemory(): void;
				clearFromDisk(): void;
			});
			public constructor();
			public getAsync(): com.parse.boltsinternal.Task<T>;
			public isCurrent(param0: T): boolean;
			public clearFromDisk(): void;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public setAsync(param0: T): com.parse.boltsinternal.Task<java.lang.Void>;
			public clearFromMemory(): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectParcelDecoder extends com.parse.ParseParcelDecoder {
			public static class: java.lang.Class<com.parse.ParseObjectParcelDecoder>;
			public decodePointer(param0: globalAndroid.os.Parcel): com.parse.ParseObject;
			public constructor();
			public addKnownObject(param0: com.parse.ParseObject): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectParcelEncoder extends com.parse.ParseParcelEncoder {
			public static class: java.lang.Class<com.parse.ParseObjectParcelEncoder>;
			public constructor();
			public encodeParseObject(param0: com.parse.ParseObject, param1: globalAndroid.os.Parcel): void;
			public constructor(param0: com.parse.ParseObject);
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectStore<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseObjectStore<any>>;
			/**
			 * Constructs a new instance of the com.parse.ParseObjectStore<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getAsync(): com.parse.boltsinternal.Task<T>;
				setAsync(param0: T): com.parse.boltsinternal.Task<java.lang.Void>;
				existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
				deleteAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			});
			public constructor();
			public getAsync(): com.parse.boltsinternal.Task<T>;
			public existsAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public deleteAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public setAsync(param0: T): com.parse.boltsinternal.Task<java.lang.Void>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseObjectSubclassingController {
			public static class: java.lang.Class<com.parse.ParseObjectSubclassingController>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseOperationSet extends java.util.HashMap<string,com.parse.ParseFieldOperation> {
			public static class: java.lang.Class<com.parse.ParseOperationSet>;
			public constructor(param0: com.parse.ParseOperationSet);
			public setIsSaveEventually(param0: boolean): void;
			public toRest(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public isSaveEventually(): boolean;
			public static fromRest(param0: org.json.JSONObject, param1: com.parse.ParseDecoder): com.parse.ParseOperationSet;
			public mergeFrom(param0: com.parse.ParseOperationSet): void;
			public constructor();
			public getUUID(): string;
		}
	}
}

declare module com {
	export module parse {
		export class ParseParcelDecoder {
			public static class: java.lang.Class<com.parse.ParseParcelDecoder>;
			public decode(param0: globalAndroid.os.Parcel): any;
			public decodePointer(param0: globalAndroid.os.Parcel): com.parse.ParseObject;
			public decodeParseObject(param0: globalAndroid.os.Parcel): com.parse.ParseObject;
			public static get(): com.parse.ParseParcelDecoder;
		}
	}
}

declare module com {
	export module parse {
		export class ParseParcelEncoder {
			public static class: java.lang.Class<com.parse.ParseParcelEncoder>;
			public encodePointer(param0: string, param1: string, param2: globalAndroid.os.Parcel): void;
			public encode(param0: any, param1: globalAndroid.os.Parcel): void;
			public encodeParseObject(param0: com.parse.ParseObject, param1: globalAndroid.os.Parcel): void;
			public static get(): com.parse.ParseParcelEncoder;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePin extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.ParsePin>;
			public getName(): string;
			public getObjects(): java.util.List<com.parse.ParseObject>;
			public setObjects(param0: java.util.List<com.parse.ParseObject>): void;
			public constructor();
			public constructor(param0: string);
			public setName(param0: string): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePinningEventuallyQueue extends com.parse.ParseEventuallyQueue {
			public static class: java.lang.Class<com.parse.ParsePinningEventuallyQueue>;
			public pendingCountAsync(param0: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<java.lang.Integer>;
			public resume(): void;
			public constructor(param0: globalAndroid.content.Context, param1: com.parse.ParseHttpClient);
			public clear(): void;
			public pendingCount(): number;
			public enqueueEventuallyAsync(param0: com.parse.ParseRESTCommand, param1: com.parse.ParseObject): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public pendingCountAsync(): com.parse.boltsinternal.Task<java.lang.Integer>;
			public setConnected(param0: boolean): void;
			public onDestroy(): void;
			public pause(): void;
		}
		export module ParsePinningEventuallyQueue {
			export class PauseException {
				public static class: java.lang.Class<com.parse.ParsePinningEventuallyQueue.PauseException>;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParsePlugins {
			public static class: java.lang.Class<com.parse.ParsePlugins>;
			public static get(): com.parse.ParsePlugins;
			public server(): string;
			public applicationId(): string;
			public clientKey(): string;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePolygon {
			public static class: java.lang.Class<com.parse.ParsePolygon>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParsePolygon>;
			public equals(param0: any): boolean;
			public toString(): string;
			public describeContents(): number;
			public constructor(param0: java.util.List<com.parse.ParseGeoPoint>);
			public constructor(param0: com.parse.ParsePolygon);
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public constructor(param0: globalAndroid.os.Parcel);
			public getCoordinates(): java.util.List<com.parse.ParseGeoPoint>;
			public setCoordinates(param0: java.util.List<com.parse.ParseGeoPoint>): void;
			public containsPoint(param0: com.parse.ParseGeoPoint): boolean;
			public coordinatesToJSONArray(): org.json.JSONArray;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePush {
			public static class: java.lang.Class<com.parse.ParsePush>;
			public clearExpiration(): void;
			public send(): void;
			public constructor(param0: com.parse.ParsePush);
			public setExpirationTimeInterval(param0: number): void;
			public static subscribeInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public static sendMessageInBackground(param0: string, param1: com.parse.ParseQuery<com.parse.ParseInstallation>, param2: com.parse.SendCallback): void;
			public setChannels(param0: java.util.Collection<string>): void;
			public static sendMessageInBackground(param0: string, param1: com.parse.ParseQuery<com.parse.ParseInstallation>): com.parse.boltsinternal.Task<java.lang.Void>;
			public setData(param0: org.json.JSONObject): void;
			public constructor();
			public sendInBackground(param0: com.parse.SendCallback): void;
			public setExpirationTime(param0: number): void;
			public static unsubscribeInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public static sendDataInBackground(param0: org.json.JSONObject, param1: com.parse.ParseQuery<com.parse.ParseInstallation>): com.parse.boltsinternal.Task<java.lang.Void>;
			public setMessage(param0: string): void;
			public static unsubscribeInBackground(param0: string, param1: com.parse.SaveCallback): void;
			public static subscribeInBackground(param0: string, param1: com.parse.SaveCallback): void;
			public sendInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public setChannel(param0: string): void;
			public setQuery(param0: com.parse.ParseQuery<com.parse.ParseInstallation>): void;
			public static sendDataInBackground(param0: org.json.JSONObject, param1: com.parse.ParseQuery<com.parse.ParseInstallation>, param2: com.parse.SendCallback): void;
			public setPushTime(param0: number): void;
		}
		export module ParsePush {
			export class State {
				public static class: java.lang.Class<com.parse.ParsePush.State>;
				public pushTime(): java.lang.Long;
				public channelSet(): java.util.Set<string>;
				public expirationTime(): java.lang.Long;
				public data(): org.json.JSONObject;
				public queryState(): com.parse.ParseQuery.State<com.parse.ParseInstallation>;
				public expirationTimeInterval(): java.lang.Long;
			}
			export module State {
				export class Builder {
					public static class: java.lang.Class<com.parse.ParsePush.State.Builder>;
					public build(): com.parse.ParsePush.State;
					public channelSet(param0: java.util.Collection<string>): com.parse.ParsePush.State.Builder;
					public data(param0: org.json.JSONObject): com.parse.ParsePush.State.Builder;
					public constructor();
					public expirationTime(param0: java.lang.Long): com.parse.ParsePush.State.Builder;
					public expirationTimeInterval(param0: java.lang.Long): com.parse.ParsePush.State.Builder;
					public query(param0: com.parse.ParseQuery<com.parse.ParseInstallation>): com.parse.ParsePush.State.Builder;
					public constructor(param0: com.parse.ParsePush.State);
					public pushTime(param0: java.lang.Long): com.parse.ParsePush.State.Builder;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParsePushBroadcastReceiver {
			public static class: java.lang.Class<com.parse.ParsePushBroadcastReceiver>;
			public static KEY_PUSH_CHANNEL: string;
			public static KEY_PUSH_DATA: string;
			public static ACTION_PUSH_RECEIVE: string;
			public static ACTION_PUSH_OPEN: string;
			public static ACTION_PUSH_DELETE: string;
			public static PROPERTY_PUSH_ICON: string;
			public static SMALL_NOTIFICATION_MAX_CHARACTER_LIMIT: number;
			public getSmallIconId(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): number;
			public createNotificationChannel(param0: globalAndroid.content.Context, param1: globalAndroid.app.NotificationChannel): void;
			public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public getActivity(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): java.lang.Class<any>;
			public getContentIntent(param0: globalAndroid.os.Bundle, param1: string): globalAndroid.content.Intent;
			public constructor();
			public getNotificationChannel(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): globalAndroid.app.NotificationChannel;
			public getLargeIcon(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): globalAndroid.graphics.Bitmap;
			public onPushReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public getPushData(param0: globalAndroid.content.Intent): org.json.JSONObject;
			public onPushDismiss(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
			public getDeleteIntent(param0: globalAndroid.os.Bundle, param1: string): globalAndroid.content.Intent;
			public getNotification(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): androidx.core.app.NotificationCompat.Builder;
			public onPushOpen(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePushChannelsController {
			public static class: java.lang.Class<com.parse.ParsePushChannelsController>;
			public subscribeInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public unsubscribeInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
		}
	}
}

declare module com {
	export module parse {
		export class ParsePushController {
			public static class: java.lang.Class<com.parse.ParsePushController>;
			public sendInBackground(param0: com.parse.ParsePush.State, param1: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public constructor(param0: com.parse.ParseHttpClient);
		}
	}
}

declare module com {
	export module parse {
		export class ParseQuery<T>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseQuery<any>>;
			public static MAX_LIMIT: number;
			public whereDoesNotExist(param0: string): com.parse.ParseQuery<T>;
			public setTrace(param0: boolean): com.parse.ParseQuery<T>;
			public setCachePolicy(param0: com.parse.ParseQuery.CachePolicy): com.parse.ParseQuery<T>;
			public count(): number;
			public whereMatchesQuery(param0: string, param1: com.parse.ParseQuery<any>): com.parse.ParseQuery<T>;
			public getFirst(): T;
			public setSkip(param0: number): com.parse.ParseQuery<T>;
			public static getQuery(param0: string): com.parse.ParseQuery<any>;
			public getFirstInBackground(param0: com.parse.GetCallback<T>): void;
			public cancel(): void;
			public get(param0: string): T;
			public whereNotContainedIn(param0: string, param1: java.util.Collection<any>): com.parse.ParseQuery<T>;
			public whereExists(param0: string): com.parse.ParseQuery<T>;
			public isRunning(): boolean;
			public whereWithinMiles(param0: string, param1: com.parse.ParseGeoPoint, param2: number): com.parse.ParseQuery<T>;
			public fromPin(param0: string): com.parse.ParseQuery<T>;
			public getInBackground(param0: string, param1: com.parse.GetCallback<T>): void;
			public whereDoesNotMatchQuery(param0: string, param1: com.parse.ParseQuery<any>): com.parse.ParseQuery<T>;
			public findInBackground(): com.parse.boltsinternal.Task<java.util.List<T>>;
			public whereWithinPolygon(param0: string, param1: com.parse.ParsePolygon): com.parse.ParseQuery<T>;
			public findInBackground(param0: com.parse.FindCallback<T>): void;
			public fromNetwork(): com.parse.ParseQuery<T>;
			public whereMatchesKeyInQuery(param0: string, param1: string, param2: com.parse.ParseQuery<any>): com.parse.ParseQuery<T>;
			public constructor(param0: string);
			public getInBackground(param0: string): com.parse.boltsinternal.Task<T>;
			public constructor(param0: com.parse.ParseQuery<T>);
			public whereLessThanOrEqualTo(param0: string, param1: any): com.parse.ParseQuery<T>;
			public whereStartsWith(param0: string, param1: string): com.parse.ParseQuery<T>;
			public whereFullText(param0: string, param1: string): com.parse.ParseQuery<T>;
			public static getQuery(param0: java.lang.Class): com.parse.ParseQuery<any>;
			public setLimit(param0: number): com.parse.ParseQuery<T>;
			public getMaxCacheAge(): number;
			public whereGreaterThanOrEqualTo(param0: string, param1: any): com.parse.ParseQuery<T>;
			public countInBackground(param0: com.parse.CountCallback): void;
			public whereDoesNotMatchKeyInQuery(param0: string, param1: string, param2: com.parse.ParseQuery<any>): com.parse.ParseQuery<T>;
			public whereNear(param0: string, param1: com.parse.ParseGeoPoint): com.parse.ParseQuery<T>;
			public whereNotEqualTo(param0: string, param1: any): com.parse.ParseQuery<T>;
			public getClassName(): string;
			public getBuilder(): com.parse.ParseQuery.State.Builder<T>;
			public whereLessThan(param0: string, param1: any): com.parse.ParseQuery<T>;
			public clear(param0: string): com.parse.ParseQuery<T>;
			public whereWithinGeoBox(param0: string, param1: com.parse.ParseGeoPoint, param2: com.parse.ParseGeoPoint): com.parse.ParseQuery<T>;
			public getSkip(): number;
			public setMaxCacheAge(param0: number): com.parse.ParseQuery<T>;
			public whereMatches(param0: string, param1: string, param2: string): com.parse.ParseQuery<T>;
			public selectKeys(param0: java.util.Collection<string>): com.parse.ParseQuery<T>;
			public fromPin(): com.parse.ParseQuery<T>;
			public orderByAscending(param0: string): com.parse.ParseQuery<T>;
			public getLimit(): number;
			public fromLocalDatastore(): com.parse.ParseQuery<T>;
			public getFirstInBackground(): com.parse.boltsinternal.Task<T>;
			public whereWithinKilometers(param0: string, param1: com.parse.ParseGeoPoint, param2: number): com.parse.ParseQuery<T>;
			public orderByDescending(param0: string): com.parse.ParseQuery<T>;
			public whereContainsAllStartsWith(param0: string, param1: java.util.Collection<string>): com.parse.ParseQuery<T>;
			public hasCachedResult(): boolean;
			public ignoreACLs(): com.parse.ParseQuery<T>;
			public whereContainedIn(param0: string, param1: java.util.Collection<any>): com.parse.ParseQuery<T>;
			public whereGreaterThan(param0: string, param1: any): com.parse.ParseQuery<T>;
			public whereEqualTo(param0: string, param1: any): com.parse.ParseQuery<T>;
			public whereEndsWith(param0: string, param1: string): com.parse.ParseQuery<T>;
			public countInBackground(): com.parse.boltsinternal.Task<java.lang.Integer>;
			public whereMatches(param0: string, param1: string): com.parse.ParseQuery<T>;
			public addDescendingOrder(param0: string): com.parse.ParseQuery<T>;
			public static or(param0: java.util.List): com.parse.ParseQuery<any>;
			public getCachePolicy(): com.parse.ParseQuery.CachePolicy;
			public include(param0: string): com.parse.ParseQuery<T>;
			public static clearAllCachedResults(): void;
			public clearCachedResult(): void;
			public whereWithinRadians(param0: string, param1: com.parse.ParseGeoPoint, param2: number): com.parse.ParseQuery<T>;
			public whereWithinPolygon(param0: string, param1: java.util.List<com.parse.ParseGeoPoint>): com.parse.ParseQuery<T>;
			public constructor(param0: java.lang.Class<T>);
			public wherePolygonContains(param0: string, param1: com.parse.ParseGeoPoint): com.parse.ParseQuery<T>;
			public whereContains(param0: string, param1: string): com.parse.ParseQuery<T>;
			public whereContainsAll(param0: string, param1: java.util.Collection<any>): com.parse.ParseQuery<T>;
			public constructor(param0: com.parse.ParseQuery.State.Builder<T>);
			public find(): java.util.List<T>;
			public addAscendingOrder(param0: string): com.parse.ParseQuery<T>;
		}
		export module ParseQuery {
			export class CachePolicy {
				public static class: java.lang.Class<com.parse.ParseQuery.CachePolicy>;
				public static IGNORE_CACHE: com.parse.ParseQuery.CachePolicy;
				public static CACHE_ONLY: com.parse.ParseQuery.CachePolicy;
				public static NETWORK_ONLY: com.parse.ParseQuery.CachePolicy;
				public static CACHE_ELSE_NETWORK: com.parse.ParseQuery.CachePolicy;
				public static NETWORK_ELSE_CACHE: com.parse.ParseQuery.CachePolicy;
				public static CACHE_THEN_NETWORK: com.parse.ParseQuery.CachePolicy;
				public static values(): native.Array<com.parse.ParseQuery.CachePolicy>;
				public static valueOf(param0: string): com.parse.ParseQuery.CachePolicy;
			}
			export class CacheThenNetworkCallable<T, TResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.ParseQuery.CacheThenNetworkCallable<any,any>>;
				/**
				 * Constructs a new instance of the com.parse.ParseQuery$CacheThenNetworkCallable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: com.parse.ParseQuery.State<T>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<java.lang.Void>): TResult;
				});
				public constructor();
				public call(param0: com.parse.ParseQuery.State<T>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<java.lang.Void>): TResult;
			}
			export class KeyConstraints extends java.util.HashMap<string,any> {
				public static class: java.lang.Class<com.parse.ParseQuery.KeyConstraints>;
			}
			export class QueryConstraints extends java.util.HashMap<string,any> {
				public static class: java.lang.Class<com.parse.ParseQuery.QueryConstraints>;
				public constructor(param0: java.util.Map<any,any>);
				public constructor();
			}
			export class RelationConstraint {
				public static class: java.lang.Class<com.parse.ParseQuery.RelationConstraint>;
				public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
				public constructor(param0: string, param1: com.parse.ParseObject);
				public getRelation(): com.parse.ParseRelation<com.parse.ParseObject>;
				public getObject(): com.parse.ParseObject;
				public getKey(): string;
			}
			export class State<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.ParseQuery.State<any>>;
				public isFromLocalDatastore(): boolean;
				public includes(): java.util.Set<string>;
				public isTracingEnabled(): boolean;
				public maxCacheAge(): number;
				public pinName(): string;
				public selectedKeys(): java.util.Set<string>;
				public toString(): string;
				public className(): string;
				public order(): java.util.List<string>;
				public limit(): number;
				public skip(): number;
				public cachePolicy(): com.parse.ParseQuery.CachePolicy;
				public extraOptions(): java.util.Map<string,any>;
				public constraints(): com.parse.ParseQuery.QueryConstraints;
				public ignoreACLs(): boolean;
			}
			export module State {
				export class Builder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.parse.ParseQuery.State.Builder<any>>;
					public getCachePolicy(): com.parse.ParseQuery.CachePolicy;
					public setCachePolicy(param0: com.parse.ParseQuery.CachePolicy): com.parse.ParseQuery.State.Builder<T>;
					public constructor(param0: java.lang.Class<T>);
					public constructor(param0: string);
					public whereGeoWithin(param0: string, param1: java.util.List<com.parse.ParseGeoPoint>): com.parse.ParseQuery.State.Builder<T>;
					public setTracingEnabled(param0: boolean): com.parse.ParseQuery.State.Builder<T>;
					public whereText(param0: string, param1: string): com.parse.ParseQuery.State.Builder<T>;
					public constructor(param0: com.parse.ParseQuery.State.Builder<T>);
					public setSkip(param0: number): com.parse.ParseQuery.State.Builder<T>;
					public isFromLocalDatstore(): boolean;
					public whereDoesNotMatchKeyInQuery(param0: string, param1: string, param2: com.parse.ParseQuery.State.Builder<any>): com.parse.ParseQuery.State.Builder<T>;
					public whereMatchesKeyInQuery(param0: string, param1: string, param2: com.parse.ParseQuery.State.Builder<any>): com.parse.ParseQuery.State.Builder<T>;
					public fromPin(): com.parse.ParseQuery.State.Builder<T>;
					public orderByDescending(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public isFromNetwork(): boolean;
					public addDescendingOrder(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public setMaxCacheAge(param0: number): com.parse.ParseQuery.State.Builder<T>;
					public fromPin(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public getClassName(): string;
					public whereGeoIntersects(param0: string, param1: com.parse.ParseGeoPoint): com.parse.ParseQuery.State.Builder<T>;
					public include(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public addCondition(param0: string, param1: string, param2: any): com.parse.ParseQuery.State.Builder<T>;
					public addAscendingOrder(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public fromLocalDatastore(): com.parse.ParseQuery.State.Builder<T>;
					public build(): com.parse.ParseQuery.State<T>;
					public whereWithin(param0: string, param1: com.parse.ParseGeoPoint, param2: com.parse.ParseGeoPoint): com.parse.ParseQuery.State.Builder<T>;
					public ignoreACLs(): com.parse.ParseQuery.State.Builder<T>;
					public whereMatchesQuery(param0: string, param1: com.parse.ParseQuery.State.Builder<any>): com.parse.ParseQuery.State.Builder<T>;
					public fromNetwork(): com.parse.ParseQuery.State.Builder<T>;
					public setLimit(param0: number): com.parse.ParseQuery.State.Builder<T>;
					public whereEqualTo(param0: string, param1: any): com.parse.ParseQuery.State.Builder<T>;
					public whereNear(param0: string, param1: com.parse.ParseGeoPoint): com.parse.ParseQuery.State.Builder<T>;
					public getLimit(): number;
					public getMaxCacheAge(): number;
					public maxDistance(param0: string, param1: number): com.parse.ParseQuery.State.Builder<T>;
					public addCondition(param0: string, param1: string, param2: java.util.Collection<any>): com.parse.ParseQuery.State.Builder<T>;
					public constructor(param0: com.parse.ParseQuery.State<any>);
					public selectKeys(param0: java.util.Collection<string>): com.parse.ParseQuery.State.Builder<T>;
					public orderByAscending(param0: string): com.parse.ParseQuery.State.Builder<T>;
					public static or(param0: java.util.List): com.parse.ParseQuery.State.Builder<any>;
					public whereDoesNotMatchQuery(param0: string, param1: com.parse.ParseQuery.State.Builder<any>): com.parse.ParseQuery.State.Builder<T>;
					public getSkip(): number;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseQueryController {
			public static class: java.lang.Class<com.parse.ParseQueryController>;
			/**
			 * Constructs a new instance of the com.parse.ParseQueryController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
				countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
				getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			});
			public constructor();
			public getFirstAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public findAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
			public countAsync(param0: com.parse.ParseQuery.State<any>, param1: com.parse.ParseUser, param2: com.parse.boltsinternal.Task<any>): com.parse.boltsinternal.Task<any>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTAnalyticsCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTAnalyticsCommand>;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public static trackAppOpenedCommand(param0: string, param1: string): com.parse.ParseRESTAnalyticsCommand;
			public static trackEventCommand(param0: string, param1: java.util.Map<string,string>, param2: string): com.parse.ParseRESTAnalyticsCommand;
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTCloudCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTCloudCommand>;
			public static callFunctionCommand(param0: string, param1: java.util.Map<string,any>, param2: string): com.parse.ParseRESTCloudCommand;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTCommand extends com.parse.ParseRequest<org.json.JSONObject> {
			public static class: java.lang.Class<com.parse.ParseRESTCommand>;
			public masterKey: string;
			public newBody(param0: com.parse.ProgressCallback): com.parse.http.ParseHttpBody;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public releaseLocalIds(): void;
			public setLocalId(param0: string): void;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.ProgressCallback, param2: com.parse.ProgressCallback, param3: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public getOperationSetUUID(): string;
			public executeAsync(param0: com.parse.ParseHttpClient): com.parse.boltsinternal.Task<any>;
			public getLocalId(): string;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public static fromJSONObject(param0: org.json.JSONObject): com.parse.ParseRESTCommand;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.ProgressCallback, param2: com.parse.ProgressCallback): com.parse.boltsinternal.Task<any>;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<any>;
			public getSessionToken(): string;
			public newRequest(param0: com.parse.http.ParseHttpRequest.Method, param1: string, param2: com.parse.ProgressCallback): com.parse.http.ParseHttpRequest;
			public constructor(param0: string);
			public static getLocalPointersIn(param0: any, param1: java.util.ArrayList<org.json.JSONObject>): void;
			public resolveLocalIds(): void;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.ProgressCallback, param2: com.parse.ProgressCallback, param3: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<any>;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<any>;
			public toJSONObject(): org.json.JSONObject;
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public addAdditionalHeaders(param0: com.parse.http.ParseHttpRequest.Builder): void;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public retainLocalIds(): void;
			public getCacheKey(): string;
		}
		export module ParseRESTCommand {
			export class Builder extends com.parse.ParseRESTCommand.Init<com.parse.ParseRESTCommand.Builder> {
				public static class: java.lang.Class<com.parse.ParseRESTCommand.Builder>;
				public build(): com.parse.ParseRESTCommand;
				public constructor();
			}
			export abstract class Init<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.ParseRESTCommand.Init<any>>;
				public httpPath(param0: string): T;
				public operationSetUUID(param0: string): T;
				public method(param0: com.parse.http.ParseHttpRequest.Method): T;
				public jsonParameters(param0: org.json.JSONObject): T;
				public sessionToken(param0: string): T;
				public masterKey(param0: string): T;
				public installationId(param0: string): T;
				public localId(param0: string): T;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTConfigCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTConfigCommand>;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public static updateConfigCommand(param0: java.util.Map<string,any>, param1: string): com.parse.ParseRESTConfigCommand;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public static fetchConfigCommand(param0: string): com.parse.ParseRESTConfigCommand;
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTFileCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTFileCommand>;
			public newBody(param0: com.parse.ProgressCallback): com.parse.http.ParseHttpBody;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public constructor(param0: com.parse.ParseRESTFileCommand.Builder);
			public constructor(param0: string);
		}
		export module ParseRESTFileCommand {
			export class Builder extends com.parse.ParseRESTCommand.Init<com.parse.ParseRESTFileCommand.Builder> {
				public static class: java.lang.Class<com.parse.ParseRESTFileCommand.Builder>;
				public file(param0: java.io.File): com.parse.ParseRESTFileCommand.Builder;
				public data(param0: native.Array<number>): com.parse.ParseRESTFileCommand.Builder;
				public fileName(param0: string): com.parse.ParseRESTFileCommand.Builder;
				public contentType(param0: string): com.parse.ParseRESTFileCommand.Builder;
				public constructor();
				public build(): com.parse.ParseRESTFileCommand;
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTObjectBatchCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTObjectBatchCommand>;
			public static COMMAND_OBJECT_BATCH_MAX_SIZE: number;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public static executeBatch(param0: com.parse.ParseHttpClient, param1: java.util.List<com.parse.ParseRESTObjectCommand>, param2: string): java.util.List<com.parse.boltsinternal.Task<org.json.JSONObject>>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTObjectCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTObjectCommand>;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public static getObjectCommand(param0: string, param1: string, param2: string): com.parse.ParseRESTObjectCommand;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public static deleteObjectCommand(param0: com.parse.ParseObject.State, param1: string): com.parse.ParseRESTObjectCommand;
			public static saveObjectCommand(param0: com.parse.ParseObject.State, param1: org.json.JSONObject, param2: string): com.parse.ParseRESTObjectCommand;
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTPushCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTPushCommand>;
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: java.util.Map<string,any>, param3: string);
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public constructor(param0: string, param1: com.parse.http.ParseHttpRequest.Method, param2: org.json.JSONObject, param3: string);
			public static sendPushCommand(param0: com.parse.ParseQuery.State<com.parse.ParseInstallation>, param1: java.util.Set<string>, param2: java.lang.Long, param3: java.lang.Long, param4: java.lang.Long, param5: org.json.JSONObject, param6: string): com.parse.ParseRESTPushCommand;
			public constructor(param0: string);
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTQueryCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTQueryCommand>;
			public static findCommand(param0: com.parse.ParseQuery.State<any>, param1: string): com.parse.ParseRESTQueryCommand;
			public static countCommand(param0: com.parse.ParseQuery.State<any>, param1: string): com.parse.ParseRESTQueryCommand;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTSessionCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTSessionCommand>;
			public static revoke(param0: string): com.parse.ParseRESTSessionCommand;
			public static upgradeToRevocableSessionCommand(param0: string): com.parse.ParseRESTSessionCommand;
			public static getCurrentSessionCommand(param0: string): com.parse.ParseRESTSessionCommand;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRESTUserCommand extends com.parse.ParseRESTCommand {
			public static class: java.lang.Class<com.parse.ParseRESTUserCommand>;
			public static resetPasswordResetCommand(param0: string): com.parse.ParseRESTUserCommand;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<org.json.JSONObject>;
			public addAdditionalHeaders(param0: com.parse.http.ParseHttpRequest.Builder): void;
			public static serviceLogInUserCommand(param0: org.json.JSONObject, param1: string, param2: boolean): com.parse.ParseRESTUserCommand;
			public static signUpUserCommand(param0: org.json.JSONObject, param1: string, param2: boolean): com.parse.ParseRESTUserCommand;
			public static logInUserCommand(param0: string, param1: string, param2: boolean): com.parse.ParseRESTUserCommand;
			public getStatusCode(): number;
			public static getCurrentUserCommand(param0: string): com.parse.ParseRESTUserCommand;
			public static serviceLogInUserCommand(param0: string, param1: java.util.Map<string,string>, param2: boolean): com.parse.ParseRESTUserCommand;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRelation<T>  extends globalAndroid.os.Parcelable {
			public static class: java.lang.Class<com.parse.ParseRelation<any>>;
			public static CREATOR: globalAndroid.os.Parcelable.Creator<com.parse.ParseRelation<any>>;
			public remove(param0: any): void;
			public getQuery(): com.parse.ParseQuery<any>;
			public describeContents(): number;
			public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
			public add(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRelationOperation<T>  extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseRelationOperation<any>>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
		}
	}
}

declare module com {
	export module parse {
		export class ParseRemoveOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseRemoveOperation>;
			public objects: java.util.HashSet<any>;
			public encode(param0: com.parse.ParseEncoder): org.json.JSONObject;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
			public constructor(param0: java.util.Collection<any>);
		}
	}
}

declare module com {
	export module parse {
		export abstract class ParseRequest<Response>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.ParseRequest<any>>;
			public static DEFAULT_MAX_RETRIES: number;
			public static NETWORK_EXECUTOR: java.util.concurrent.ExecutorService;
			public newBody(param0: com.parse.ProgressCallback): com.parse.http.ParseHttpBody;
			public newTemporaryException(param0: string, param1: java.lang.Throwable): com.parse.ParseException;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.ProgressCallback, param2: com.parse.ProgressCallback, param3: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<Response>;
			public newTemporaryException(param0: number, param1: string): com.parse.ParseException;
			public onResponseAsync(param0: com.parse.http.ParseHttpResponse, param1: com.parse.ProgressCallback): com.parse.boltsinternal.Task<Response>;
			public static setDefaultInitialRetryDelay(param0: number): void;
			public constructor(param0: com.parse.http.ParseHttpRequest.Method, param1: string);
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.boltsinternal.Task<java.lang.Void>): com.parse.boltsinternal.Task<Response>;
			public executeAsync(param0: com.parse.ParseHttpClient): com.parse.boltsinternal.Task<Response>;
			public newPermanentException(param0: number, param1: string): com.parse.ParseException;
			public static getDefaultInitialRetryDelay(): number;
			public newRequest(param0: com.parse.http.ParseHttpRequest.Method, param1: string, param2: com.parse.ProgressCallback): com.parse.http.ParseHttpRequest;
			public executeAsync(param0: com.parse.ParseHttpClient, param1: com.parse.ProgressCallback, param2: com.parse.ProgressCallback): com.parse.boltsinternal.Task<Response>;
			public constructor(param0: string);
		}
		export module ParseRequest {
			export class ParseRequestException extends com.parse.ParseException {
				public static class: java.lang.Class<com.parse.ParseRequest.ParseRequestException>;
				public constructor(param0: number, param1: string);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseRole extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.ParseRole>;
			public getName(): string;
			public put(param0: string, param1: any): void;
			public static getQuery(): com.parse.ParseQuery<com.parse.ParseRole>;
			public constructor();
			public getUsers(): com.parse.ParseRelation<com.parse.ParseUser>;
			public getRoles(): com.parse.ParseRelation<com.parse.ParseRole>;
			public constructor(param0: string, param1: com.parse.ParseACL);
			public constructor(param0: string);
			public setName(param0: string): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseSQLiteCursor {
			public static class: java.lang.Class<com.parse.ParseSQLiteCursor>;
			public isClosed(): boolean;
			public unregisterDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
			public setNotificationUri(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri): void;
			public registerDataSetObserver(param0: globalAndroid.database.DataSetObserver): void;
			/** @deprecated */
			public requery(): boolean;
			public getFloat(param0: number): number;
			public respond(param0: globalAndroid.os.Bundle): globalAndroid.os.Bundle;
			public getPosition(): number;
			public registerContentObserver(param0: globalAndroid.database.ContentObserver): void;
			public copyStringToBuffer(param0: number, param1: globalAndroid.database.CharArrayBuffer): void;
			public isBeforeFirst(): boolean;
			public isAfterLast(): boolean;
			public getColumnNames(): native.Array<string>;
			public moveToFirst(): boolean;
			public getColumnIndexOrThrow(param0: string): number;
			public static create(param0: globalAndroid.database.Cursor, param1: java.util.concurrent.Executor): globalAndroid.database.Cursor;
			/** @deprecated */
			public deactivate(): void;
			public isLast(): boolean;
			public getCount(): number;
			public getBlob(param0: number): native.Array<number>;
			public moveToNext(): boolean;
			public getShort(param0: number): number;
			public close(): void;
			public getType(param0: number): number;
			public moveToLast(): boolean;
			public isNull(param0: number): boolean;
			public getColumnCount(): number;
			public getColumnName(param0: number): string;
			public getDouble(param0: number): number;
			public isFirst(): boolean;
			public getString(param0: number): string;
			public move(param0: number): boolean;
			public moveToPosition(param0: number): boolean;
			public setExtras(param0: globalAndroid.os.Bundle): void;
			public getLong(param0: number): number;
			public getExtras(): globalAndroid.os.Bundle;
			public getColumnIndex(param0: string): number;
			public unregisterContentObserver(param0: globalAndroid.database.ContentObserver): void;
			public getNotificationUri(): globalAndroid.net.Uri;
			public moveToPrevious(): boolean;
			public getInt(param0: number): number;
			public getWantsAllOnMoveCalls(): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class ParseSQLiteDatabase {
			public static class: java.lang.Class<com.parse.ParseSQLiteDatabase>;
			public setTransactionSuccessfulAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public inTransaction(): boolean;
			public insertWithOnConflict(param0: string, param1: globalAndroid.content.ContentValues, param2: number): com.parse.boltsinternal.Task<java.lang.Void>;
			public insertOrThrowAsync(param0: string, param1: globalAndroid.content.ContentValues): com.parse.boltsinternal.Task<java.lang.Void>;
			public isReadOnlyAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public updateAsync(param0: string, param1: globalAndroid.content.ContentValues, param2: string, param3: native.Array<string>): com.parse.boltsinternal.Task<java.lang.Integer>;
			public queryAsync(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<string>): com.parse.boltsinternal.Task<globalAndroid.database.Cursor>;
			public isOpenAsync(): com.parse.boltsinternal.Task<java.lang.Boolean>;
			public endTransactionAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public closeAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public deleteAsync(param0: string, param1: string, param2: native.Array<string>): com.parse.boltsinternal.Task<java.lang.Void>;
			public beginTransactionAsync(): com.parse.boltsinternal.Task<java.lang.Void>;
			public rawQueryAsync(param0: string, param1: native.Array<string>): com.parse.boltsinternal.Task<globalAndroid.database.Cursor>;
		}
	}
}

declare module com {
	export module parse {
		export abstract class ParseSQLiteOpenHelper {
			public static class: java.lang.Class<com.parse.ParseSQLiteOpenHelper>;
			public constructor(param0: globalAndroid.content.Context, param1: string, param2: globalAndroid.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
			public onOpen(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
			public onUpgrade(param0: globalAndroid.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
			public getWritableDatabaseAsync(): com.parse.boltsinternal.Task<com.parse.ParseSQLiteDatabase>;
			public getReadableDatabaseAsync(): com.parse.boltsinternal.Task<com.parse.ParseSQLiteDatabase>;
			public onCreate(param0: globalAndroid.database.sqlite.SQLiteDatabase): void;
		}
	}
}

declare module com {
	export module parse {
		export class ParseSession extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.ParseSession>;
			public getSessionToken(): string;
			public constructor();
			public static getCurrentSessionInBackground(): com.parse.boltsinternal.Task<com.parse.ParseSession>;
			public static getCurrentSessionInBackground(param0: com.parse.GetCallback<com.parse.ParseSession>): void;
			public constructor(param0: string);
			public static getQuery(): com.parse.ParseQuery<com.parse.ParseSession>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseSessionController {
			public static class: java.lang.Class<com.parse.ParseSessionController>;
			/**
			 * Constructs a new instance of the com.parse.ParseSessionController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				getSessionAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
				revokeAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
				upgradeToRevocable(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
			});
			public constructor();
			public revokeAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public upgradeToRevocable(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
			public getSessionAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseObject.State>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseSetOperation extends com.parse.ParseFieldOperation {
			public static class: java.lang.Class<com.parse.ParseSetOperation>;
			public encode(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			public getValue(): any;
			public apply(param0: any, param1: string): any;
			public mergeWithPrevious(param0: com.parse.ParseFieldOperation): com.parse.ParseFieldOperation;
			public encode(param0: com.parse.ParseEncoder): any;
			public constructor(param0: any);
		}
	}
}

declare module com {
	export module parse {
		export class ParseTaskUtils {
			public static class: java.lang.Class<com.parse.ParseTaskUtils>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseTextUtils {
			public static class: java.lang.Class<com.parse.ParseTextUtils>;
			public static equals(param0: string, param1: string): boolean;
			public static isEmpty(param0: string): boolean;
		}
	}
}

declare module com {
	export module parse {
		export abstract class ParseTraverser {
			public static class: java.lang.Class<com.parse.ParseTraverser>;
			public setTraverseParseObjects(param0: boolean): com.parse.ParseTraverser;
			public traverse(param0: any): void;
			public constructor();
			public visit(param0: any): boolean;
			public setYieldRoot(param0: boolean): com.parse.ParseTraverser;
		}
	}
}

declare module com {
	export module parse {
		export class ParseUser extends com.parse.ParseObject {
			public static class: java.lang.Class<com.parse.ParseUser>;
			public static getCurrentSessionToken(): string;
			public static requestPasswordResetInBackground(param0: string, param1: com.parse.RequestPasswordResetCallback): void;
			public put(param0: string, param1: any): void;
			public signUp(): void;
			public getUsername(): string;
			public static logInInBackground(param0: string, param1: string): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public isLinked(param0: string): boolean;
			public unlinkFromInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public remove(param0: string): void;
			public onSaveInstanceState(param0: globalAndroid.os.Bundle): void;
			public static requestPasswordReset(param0: string): void;
			public static enableRevocableSessionInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public static becomeInBackground(param0: string, param1: com.parse.LogInCallback): void;
			public getSessionToken(): string;
			public signUpInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public isNew(): boolean;
			public fetch(): com.parse.ParseObject;
			public constructor(param0: string);
			public static becomeInBackground(param0: string): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public isAuthenticated(): boolean;
			public setEmail(param0: string): void;
			public static getCurrentUser(): com.parse.ParseUser;
			public signUpInBackground(param0: com.parse.SignUpCallback): void;
			public fetch(): com.parse.ParseUser;
			public static getCurrentSessionTokenAsync(): com.parse.boltsinternal.Task<string>;
			public static logInInBackground(param0: string, param1: string, param2: com.parse.LogInCallback): void;
			public fetchIfNeeded(): com.parse.ParseObject;
			public static become(param0: string): com.parse.ParseUser;
			public constructor();
			public static logOutInBackground(param0: com.parse.LogOutCallback): void;
			public static logOut(): void;
			public static logIn(param0: string, param1: string): com.parse.ParseUser;
			public fetchIfNeeded(): com.parse.ParseUser;
			public linkWithInBackground(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<java.lang.Void>;
			public static enableAutomaticUser(): void;
			public static logOutInBackground(): com.parse.boltsinternal.Task<java.lang.Void>;
			public static logInWithInBackground(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<com.parse.ParseUser>;
			public setUsername(param0: string): void;
			public setPassword(param0: string): void;
			public onRestoreInstanceState(param0: globalAndroid.os.Bundle): void;
			public static getQuery(): com.parse.ParseQuery<com.parse.ParseUser>;
			public static requestPasswordResetInBackground(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public static registerAuthenticationCallback(param0: string, param1: com.parse.AuthenticationCallback): void;
			public getEmail(): string;
		}
		export module ParseUser {
			export class State extends com.parse.ParseObject.State {
				public static class: java.lang.Class<com.parse.ParseUser.State>;
				public sessionToken(): string;
				public isNew(): boolean;
				public authData(): java.util.Map<string,java.util.Map<string,string>>;
				public newBuilder(): com.parse.ParseUser.State.Builder;
				public static newBuilder(param0: string): com.parse.ParseObject.State.Init<any>;
				public newBuilder(): com.parse.ParseObject.State.Init<any>;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: com.parse.ParseParcelEncoder): void;
			}
			export module State {
				export class Builder extends com.parse.ParseObject.State.Init<com.parse.ParseUser.State.Builder> {
					public static class: java.lang.Class<com.parse.ParseUser.State.Builder>;
					public apply(param0: com.parse.ParseObject.State): com.parse.ParseUser.State.Builder;
					public constructor(param0: string);
					public constructor();
					public build(): com.parse.ParseUser.State;
					public putAuthData(param0: string, param1: java.util.Map<string,string>): com.parse.ParseUser.State.Builder;
					public apply(param0: com.parse.ParseOperationSet): any;
					public apply(param0: com.parse.ParseObject.State): any;
					public authData(param0: java.util.Map<string,java.util.Map<string,string>>): com.parse.ParseUser.State.Builder;
					public isNew(param0: boolean): com.parse.ParseUser.State.Builder;
					public sessionToken(param0: string): com.parse.ParseUser.State.Builder;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export class ParseUserController {
			public static class: java.lang.Class<com.parse.ParseUserController>;
			/**
			 * Constructs a new instance of the com.parse.ParseUserController interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				signUpAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
				logInAsync(param0: string, param1: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
				logInAsync(param0: com.parse.ParseUser.State, param1: com.parse.ParseOperationSet): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
				logInAsync(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
				getUserAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
				requestPasswordResetAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			});
			public constructor();
			public logInAsync(param0: com.parse.ParseUser.State, param1: com.parse.ParseOperationSet): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public requestPasswordResetAsync(param0: string): com.parse.boltsinternal.Task<java.lang.Void>;
			public logInAsync(param0: string, param1: java.util.Map<string,string>): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public signUpAsync(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public logInAsync(param0: string, param1: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
			public getUserAsync(param0: string): com.parse.boltsinternal.Task<com.parse.ParseUser.State>;
		}
	}
}

declare module com {
	export module parse {
		export class ParseUserCurrentCoder extends com.parse.ParseObjectCurrentCoder {
			public static class: java.lang.Class<com.parse.ParseUserCurrentCoder>;
			public static get(): com.parse.ParseUserCurrentCoder;
			public static get(): com.parse.ParseObjectCurrentCoder;
			public decode(param0: com.parse.ParseObject.State.Init<any>, param1: org.json.JSONObject, param2: com.parse.ParseDecoder): com.parse.ParseObject.State.Init<any>;
			public encode(param0: com.parse.ParseObject.State, param1: com.parse.ParseOperationSet, param2: com.parse.ParseEncoder): org.json.JSONObject;
			public static get(): com.parse.ParseObjectCoder;
		}
	}
}

declare module com {
	export module parse {
		export class PointerEncoder extends com.parse.PointerOrLocalIdEncoder {
			public static class: java.lang.Class<com.parse.PointerEncoder>;
			public static get(): com.parse.PointerOrLocalIdEncoder;
			public static get(): com.parse.PointerEncoder;
			public encodeRelatedObject(param0: com.parse.ParseObject): org.json.JSONObject;
			public constructor();
		}
	}
}

declare module com {
	export module parse {
		export class PointerOrLocalIdEncoder extends com.parse.ParseEncoder {
			public static class: java.lang.Class<com.parse.PointerOrLocalIdEncoder>;
			public static get(): com.parse.PointerOrLocalIdEncoder;
			public encodeRelatedObject(param0: com.parse.ParseObject): org.json.JSONObject;
			public constructor();
		}
	}
}

declare module com {
	export module parse {
		export class ProgressCallback {
			public static class: java.lang.Class<com.parse.ProgressCallback>;
			/**
			 * Constructs a new instance of the com.parse.ProgressCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: java.lang.Integer): void;
			});
			public constructor();
			public done(param0: java.lang.Integer): void;
		}
	}
}

declare module com {
	export module parse {
		export class PushHistory {
			public static class: java.lang.Class<com.parse.PushHistory>;
			public getLastReceivedTimestamp(): string;
			public tryInsertPush(param0: string, param1: string): boolean;
			public toJSON(): org.json.JSONObject;
			public setLastReceivedTimestamp(param0: string): void;
			public constructor(param0: number, param1: org.json.JSONObject);
		}
		export module PushHistory {
			export class Entry extends java.lang.Comparable<com.parse.PushHistory.Entry> {
				public static class: java.lang.Class<com.parse.PushHistory.Entry>;
				public pushId: string;
				public timestamp: string;
				public compareTo(param0: com.parse.PushHistory.Entry): number;
				public constructor(param0: string, param1: string);
			}
		}
	}
}

declare module com {
	export module parse {
		export class PushRouter {
			public static class: java.lang.Class<com.parse.PushRouter>;
			public getLastReceivedTimestamp(): string;
			public static getInstance(): com.parse.PushRouter;
			public handlePush(param0: string, param1: string, param2: string, param3: org.json.JSONObject): boolean;
		}
	}
}

declare module com {
	export module parse {
		export class RequestPasswordResetCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.RequestPasswordResetCallback>;
			/**
			 * Constructs a new instance of the com.parse.RequestPasswordResetCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class SaveCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.SaveCallback>;
			/**
			 * Constructs a new instance of the com.parse.SaveCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class SendCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.SendCallback>;
			/**
			 * Constructs a new instance of the com.parse.SendCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class SignUpCallback extends com.parse.ParseCallback1<com.parse.ParseException> {
			public static class: java.lang.Class<com.parse.SignUpCallback>;
			/**
			 * Constructs a new instance of the com.parse.SignUpCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				done(param0: com.parse.ParseException): void;
				done(param0: any): void;
			});
			public constructor();
			public done(param0: com.parse.ParseException): void;
			public done(param0: any): void;
		}
	}
}

declare module com {
	export module parse {
		export class TaskQueue {
			public static class: java.lang.Class<com.parse.TaskQueue>;
		}
	}
}

declare module com {
	export module parse {
		export class TaskStackBuilderHelper {
			public static class: java.lang.Class<com.parse.TaskStackBuilderHelper>;
			public static startActivities(param0: globalAndroid.content.Context, param1: java.lang.Class<any>, param2: globalAndroid.content.Intent): void;
		}
	}
}

declare module com {
	export module parse {
		export class WeakValueHashMap<K, V>  extends java.lang.Object {
			public static class: java.lang.Class<com.parse.WeakValueHashMap<any,any>>;
			public remove(param0: K): void;
			public clear(): void;
			public get(param0: K): V;
			public constructor();
			public put(param0: K, param1: V): void;
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class AggregateException {
				public static class: java.lang.Class<com.parse.boltsinternal.AggregateException>;
				/** @deprecated */
				public getErrors(): java.util.List<java.lang.Exception>;
				public printStackTrace(param0: java.io.PrintWriter): void;
				public constructor(param0: string, param1: java.util.List<any>);
				public constructor(param0: java.util.List<any>);
				public getInnerThrowables(): java.util.List<java.lang.Throwable>;
				/** @deprecated */
				public getCauses(): native.Array<java.lang.Throwable>;
				public constructor(param0: string, param1: native.Array<java.lang.Throwable>);
				public printStackTrace(param0: java.io.PrintStream): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class AndroidExecutors {
				public static class: java.lang.Class<com.parse.boltsinternal.AndroidExecutors>;
				public static newCachedThreadPool(): java.util.concurrent.ExecutorService;
				public static allowCoreThreadTimeout(param0: java.util.concurrent.ThreadPoolExecutor, param1: boolean): void;
				public static newCachedThreadPool(param0: java.util.concurrent.ThreadFactory): java.util.concurrent.ExecutorService;
				public static uiThread(): java.util.concurrent.Executor;
			}
			export module AndroidExecutors {
				export class UIThreadExecutor {
					public static class: java.lang.Class<com.parse.boltsinternal.AndroidExecutors.UIThreadExecutor>;
					public execute(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class BoltsExecutors {
				public static class: java.lang.Class<com.parse.boltsinternal.BoltsExecutors>;
				public static background(): java.util.concurrent.ExecutorService;
			}
			export module BoltsExecutors {
				export class ImmediateExecutor {
					public static class: java.lang.Class<com.parse.boltsinternal.BoltsExecutors.ImmediateExecutor>;
					public execute(param0: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class CancellationToken {
				public static class: java.lang.Class<com.parse.boltsinternal.CancellationToken>;
				public register(param0: java.lang.Runnable): com.parse.boltsinternal.CancellationTokenRegistration;
				public throwIfCancellationRequested(): void;
				public toString(): string;
				public isCancellationRequested(): boolean;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class CancellationTokenRegistration {
				public static class: java.lang.Class<com.parse.boltsinternal.CancellationTokenRegistration>;
				public close(): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class CancellationTokenSource {
				public static class: java.lang.Class<com.parse.boltsinternal.CancellationTokenSource>;
				public close(): void;
				public cancelAfter(param0: number): void;
				public getToken(): com.parse.boltsinternal.CancellationToken;
				public cancel(): void;
				public toString(): string;
				public constructor();
				public isCancellationRequested(): boolean;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class Capture<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.boltsinternal.Capture<any>>;
				public constructor(param0: T);
				public set(param0: T): void;
				public get(): T;
				public constructor();
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class Continuation<TTaskResult, TContinuationResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.boltsinternal.Continuation<any,any>>;
				/**
				 * Constructs a new instance of the com.parse.boltsinternal.Continuation<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					then(param0: com.parse.boltsinternal.Task<TTaskResult>): TContinuationResult;
				});
				public constructor();
				public then(param0: com.parse.boltsinternal.Task<TTaskResult>): TContinuationResult;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class ExecutorException {
				public static class: java.lang.Class<com.parse.boltsinternal.ExecutorException>;
				public constructor(param0: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class Task<TResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.boltsinternal.Task<any>>;
				public static BACKGROUND_EXECUTOR: java.util.concurrent.ExecutorService;
				public static UI_THREAD_EXECUTOR: java.util.concurrent.Executor;
				public onSuccess(param0: com.parse.boltsinternal.Continuation<any,any>, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public static forResult(param0: any): com.parse.boltsinternal.Task<any>;
				public getResult(): TResult;
				public static forError(param0: java.lang.Exception): com.parse.boltsinternal.Task<any>;
				public continueWith(param0: com.parse.boltsinternal.Continuation<any,any>): com.parse.boltsinternal.Task<any>;
				public onSuccess(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor): com.parse.boltsinternal.Task<any>;
				/** @deprecated */
				public static create(): com.parse.boltsinternal.Task.TaskCompletionSource;
				public makeVoid(): com.parse.boltsinternal.Task<java.lang.Void>;
				public static call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor): com.parse.boltsinternal.Task<any>;
				public static delay(param0: number, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<java.lang.Void>;
				public static whenAllResult(param0: java.util.Collection): com.parse.boltsinternal.Task<any>;
				public continueWith(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public static setUnobservedExceptionHandler(param0: com.parse.boltsinternal.Task.UnobservedExceptionHandler): void;
				public isCompleted(): boolean;
				public onSuccessTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor): com.parse.boltsinternal.Task<any>;
				public static call(param0: java.util.concurrent.Callable, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public continueWithTask(param0: com.parse.boltsinternal.Continuation<any,any>): com.parse.boltsinternal.Task<any>;
				public getError(): java.lang.Exception;
				public static cancelled(): com.parse.boltsinternal.Task<any>;
				public onSuccess(param0: com.parse.boltsinternal.Continuation<any,any>): com.parse.boltsinternal.Task<any>;
				public isFaulted(): boolean;
				public static callInBackground(param0: java.util.concurrent.Callable): com.parse.boltsinternal.Task<any>;
				public continueWithTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor): com.parse.boltsinternal.Task<any>;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.parse.boltsinternal.Continuation<java.lang.Void,com.parse.boltsinternal.Task<java.lang.Void>>, param2: java.util.concurrent.Executor): com.parse.boltsinternal.Task<java.lang.Void>;
				public cast(): com.parse.boltsinternal.Task<any>;
				public continueWith(param0: com.parse.boltsinternal.Continuation<any,any>, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public static delay(param0: number): com.parse.boltsinternal.Task<java.lang.Void>;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.parse.boltsinternal.Continuation<java.lang.Void,com.parse.boltsinternal.Task<java.lang.Void>>, param2: java.util.concurrent.Executor, param3: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<java.lang.Void>;
				public onSuccessTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public continueWith(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor): com.parse.boltsinternal.Task<any>;
				public onSuccess(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public onSuccessTask(param0: com.parse.boltsinternal.Continuation<any,any>): com.parse.boltsinternal.Task<any>;
				public static whenAll(param0: java.util.Collection<any>): com.parse.boltsinternal.Task<java.lang.Void>;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.parse.boltsinternal.Continuation<java.lang.Void,com.parse.boltsinternal.Task<java.lang.Void>>, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<java.lang.Void>;
				public continueWithTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: java.util.concurrent.Executor, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public continueWhile(param0: java.util.concurrent.Callable<java.lang.Boolean>, param1: com.parse.boltsinternal.Continuation<java.lang.Void,com.parse.boltsinternal.Task<java.lang.Void>>): com.parse.boltsinternal.Task<java.lang.Void>;
				public waitForCompletion(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public static whenAnyResult(param0: java.util.Collection): com.parse.boltsinternal.Task<any>;
				public continueWithTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public static getUnobservedExceptionHandler(): com.parse.boltsinternal.Task.UnobservedExceptionHandler;
				public static whenAny(param0: java.util.Collection<any>): com.parse.boltsinternal.Task<com.parse.boltsinternal.Task<any>>;
				public static call(param0: java.util.concurrent.Callable): com.parse.boltsinternal.Task<any>;
				public waitForCompletion(): void;
				public onSuccessTask(param0: com.parse.boltsinternal.Continuation<any,any>, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public static callInBackground(param0: java.util.concurrent.Callable, param1: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
				public isCancelled(): boolean;
				public static call(param0: java.util.concurrent.Callable, param1: java.util.concurrent.Executor, param2: com.parse.boltsinternal.CancellationToken): com.parse.boltsinternal.Task<any>;
			}
			export module Task {
				export class TaskCompletionSource extends com.parse.boltsinternal.TaskCompletionSource<any> {
					public static class: java.lang.Class<com.parse.boltsinternal.Task.TaskCompletionSource>;
				}
				export class UnobservedExceptionHandler {
					public static class: java.lang.Class<com.parse.boltsinternal.Task.UnobservedExceptionHandler>;
					/**
					 * Constructs a new instance of the com.parse.boltsinternal.Task$UnobservedExceptionHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						unobservedException(param0: com.parse.boltsinternal.Task<any>, param1: com.parse.boltsinternal.UnobservedTaskException): void;
					});
					public constructor();
					public unobservedException(param0: com.parse.boltsinternal.Task<any>, param1: com.parse.boltsinternal.UnobservedTaskException): void;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class TaskCompletionSource<TResult>  extends java.lang.Object {
				public static class: java.lang.Class<com.parse.boltsinternal.TaskCompletionSource<any>>;
				public trySetResult(param0: TResult): boolean;
				public setResult(param0: TResult): void;
				public trySetError(param0: java.lang.Exception): boolean;
				public setError(param0: java.lang.Exception): void;
				public trySetCancelled(): boolean;
				public getTask(): com.parse.boltsinternal.Task<TResult>;
				public setCancelled(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class UnobservedErrorNotifier {
				public static class: java.lang.Class<com.parse.boltsinternal.UnobservedErrorNotifier>;
				public setObserved(): void;
				public constructor(param0: com.parse.boltsinternal.Task<any>);
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module parse {
		export module boltsinternal {
			export class UnobservedTaskException {
				public static class: java.lang.Class<com.parse.boltsinternal.UnobservedTaskException>;
				public constructor(param0: java.lang.Throwable);
			}
		}
	}
}

declare module com {
	export module parse {
		export module http {
			export abstract class ParseHttpBody {
				public static class: java.lang.Class<com.parse.http.ParseHttpBody>;
				public writeTo(param0: java.io.OutputStream): void;
				public getContentType(): string;
				public constructor(param0: string, param1: number);
				public getContentLength(): number;
				public getContent(): java.io.InputStream;
			}
		}
	}
}

declare module com {
	export module parse {
		export module http {
			export class ParseHttpRequest {
				public static class: java.lang.Class<com.parse.http.ParseHttpRequest>;
				public getAllHeaders(): java.util.Map<string,string>;
				public getMethod(): com.parse.http.ParseHttpRequest.Method;
				public getBody(): com.parse.http.ParseHttpBody;
				public getUrl(): string;
				public getHeader(param0: string): string;
			}
			export module ParseHttpRequest {
				export class Builder {
					public static class: java.lang.Class<com.parse.http.ParseHttpRequest.Builder>;
					public addHeader(param0: string, param1: string): com.parse.http.ParseHttpRequest.Builder;
					public build(): com.parse.http.ParseHttpRequest;
					public setBody(param0: com.parse.http.ParseHttpBody): com.parse.http.ParseHttpRequest.Builder;
					public constructor();
					public setMethod(param0: com.parse.http.ParseHttpRequest.Method): com.parse.http.ParseHttpRequest.Builder;
					public constructor(param0: com.parse.http.ParseHttpRequest);
					public setHeaders(param0: java.util.Map<string,string>): com.parse.http.ParseHttpRequest.Builder;
					public setUrl(param0: string): com.parse.http.ParseHttpRequest.Builder;
					public addHeaders(param0: java.util.Map<string,string>): com.parse.http.ParseHttpRequest.Builder;
				}
				export class Method {
					public static class: java.lang.Class<com.parse.http.ParseHttpRequest.Method>;
					public static GET: com.parse.http.ParseHttpRequest.Method;
					public static POST: com.parse.http.ParseHttpRequest.Method;
					public static PUT: com.parse.http.ParseHttpRequest.Method;
					public static DELETE: com.parse.http.ParseHttpRequest.Method;
					public toString(): string;
					public static fromString(param0: string): com.parse.http.ParseHttpRequest.Method;
					public static valueOf(param0: string): com.parse.http.ParseHttpRequest.Method;
					public static values(): native.Array<com.parse.http.ParseHttpRequest.Method>;
				}
			}
		}
	}
}

declare module com {
	export module parse {
		export module http {
			export class ParseHttpResponse {
				public static class: java.lang.Class<com.parse.http.ParseHttpResponse>;
				public getStatusCode(): number;
				public getContentType(): string;
				public getAllHeaders(): java.util.Map<string,string>;
				public getReasonPhrase(): string;
				public getContent(): java.io.InputStream;
				public getTotalSize(): number;
				public getHeader(param0: string): string;
			}
			export module ParseHttpResponse {
				export class Builder {
					public static class: java.lang.Class<com.parse.http.ParseHttpResponse.Builder>;
					public addHeader(param0: string, param1: string): com.parse.http.ParseHttpResponse.Builder;
					public setContent(param0: java.io.InputStream): com.parse.http.ParseHttpResponse.Builder;
					public setTotalSize(param0: number): com.parse.http.ParseHttpResponse.Builder;
					public setContentType(param0: string): com.parse.http.ParseHttpResponse.Builder;
					public constructor(param0: com.parse.http.ParseHttpResponse);
					public constructor();
					public setReasonPhrase(param0: string): com.parse.http.ParseHttpResponse.Builder;
					public build(): com.parse.http.ParseHttpResponse;
					public setHeaders(param0: java.util.Map<string,string>): com.parse.http.ParseHttpResponse.Builder;
					public setStatusCode(param0: number): com.parse.http.ParseHttpResponse.Builder;
					public addHeaders(param0: java.util.Map<string,string>): com.parse.http.ParseHttpResponse.Builder;
				}
			}
		}
	}
}

//Generics information:
//com.parse.CacheQueryController.CommandDelegate:1
//com.parse.FileObjectStore:1
//com.parse.FindCallback:1
//com.parse.FunctionCallback:1
//com.parse.GetCallback:1
//com.parse.Lists.Partition:1
//com.parse.OfflineObjectStore:1
//com.parse.OfflineQueryLogic.ConstraintMatcher:1
//com.parse.OfflineQueryLogic.SubQueryMatcher:1
//com.parse.OfflineStore.SQLiteDatabaseCallable:1
//com.parse.ParseCallback1:1
//com.parse.ParseCallback2:2
//com.parse.ParseMulticastDelegate:1
//com.parse.ParseObject.State.Init:1
//com.parse.ParseObjectCurrentController:1
//com.parse.ParseObjectStore:1
//com.parse.ParseQuery:1
//com.parse.ParseQuery.CacheThenNetworkCallable:2
//com.parse.ParseQuery.State:1
//com.parse.ParseQuery.State.Builder:1
//com.parse.ParseRESTCommand.Init:1
//com.parse.ParseRelation:1
//com.parse.ParseRelationOperation:1
//com.parse.ParseRequest:1
//com.parse.WeakValueHashMap:2
//com.parse.boltsinternal.Capture:1
//com.parse.boltsinternal.Continuation:2
//com.parse.boltsinternal.Task:1
//com.parse.boltsinternal.TaskCompletionSource:1

