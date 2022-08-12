/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractConsoleLogger extends com.couchbase.lite.Logger {
				public static class: java.lang.Class<com.couchbase.lite.AbstractConsoleLogger>;
				public setLevel(param0: com.couchbase.lite.LogLevel): void;
				public getDomains(): java.util.EnumSet<com.couchbase.lite.LogDomain>;
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public setDomains(param0: java.util.EnumSet<com.couchbase.lite.LogDomain>): void;
				public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getLevel(): com.couchbase.lite.LogLevel;
				public setDomains(param0: androidNative.Array<com.couchbase.lite.LogDomain>): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabase extends com.couchbase.lite.BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
				public static log: com.couchbase.lite.Log;
				public config: com.couchbase.lite.internal.ImmutableDatabaseConfiguration;
				public getBlob(param0: java.util.Map<string,any>): com.couchbase.lite.Blob;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConflictHandler): boolean;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public finalize(): void;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public inBatch(param0: com.couchbase.lite.UnitOfWork<any>): void;
				public static exists(param0: string, param1: java.io.File): boolean;
				public constructor(param0: string);
				public performMaintenance(param0: com.couchbase.lite.MaintenanceType): boolean;
				public constructor();
				public constructor(param0: string, param1: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
				public delete(): void;
				public static copy(param0: java.io.File, param1: string, param2: string, param3: number, param4: androidNative.Array<number>): void;
				public save(param0: com.couchbase.lite.MutableDocument): void;
				public delete(param0: com.couchbase.lite.Document): void;
				public createQuery(param0: string): com.couchbase.lite.Query;
				public purge(param0: string): void;
				public close(): void;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getName(): string;
				public getCount(): number;
				public getDocument(param0: string): com.couchbase.lite.Document;
				public getPath(): string;
				public saveBlob(param0: com.couchbase.lite.Blob): void;
				public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public toString(): string;
				public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public getConfig(): com.couchbase.lite.DatabaseConfiguration;
				public purge(param0: com.couchbase.lite.Document): void;
				public getDocumentExpiration(param0: string): java.util.Date;
				public getIndexes(): java.util.List<string>;
				public setDocumentExpiration(param0: string, param1: java.util.Date): void;
				public createIndex(param0: string, param1: com.couchbase.lite.IndexConfiguration): void;
				public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public static delete(param0: string, param1: java.io.File): void;
				public deleteIndex(param0: string): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractDatabase {
				export class ActiveProcess<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase.ActiveProcess<any>>;
					public equals(param0: any): boolean;
					public isActive(): boolean;
					public toString(): string;
					public stop(): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabaseConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabaseConfiguration>;
				public setDirectory(param0: string): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration);
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration);
				public constructor(param0: string);
				public constructor();
				public getDirectory(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractFunction {
				public static class: java.lang.Class<com.couchbase.lite.AbstractFunction>;
				public static abs(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ln(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static e(): com.couchbase.lite.Expression;
				public static rtrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sum(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static upper(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static stringToMillis(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sign(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static tan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static degrees(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static avg(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static round(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static min(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static max(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan2(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static cos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static pi(): com.couchbase.lite.Expression;
				public static ltrim(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static acos(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static power(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static asin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sqrt(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floor(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static radians(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ceil(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static lower(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static millisToString(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static millisToUTC(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static exp(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static round(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static count(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static stringToUTC(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static log(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sin(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public toString(): string;
			}
			export module AbstractIndex {
				export class IndexType {
					public static class: java.lang.Class<com.couchbase.lite.AbstractIndex.IndexType>;
					public static VALUE: com.couchbase.lite.AbstractIndex.IndexType;
					public static FULL_TEXT: com.couchbase.lite.AbstractIndex.IndexType;
					public static PREDICTIVE: com.couchbase.lite.AbstractIndex.IndexType;
					public getValue(): number;
					public static valueOf(param0: string): com.couchbase.lite.AbstractIndex.IndexType;
					public static values(): androidNative.Array<com.couchbase.lite.AbstractIndex.IndexType>;
				}
				export class QueryLanguage {
					public static class: java.lang.Class<com.couchbase.lite.AbstractIndex.QueryLanguage>;
					public static JSON: com.couchbase.lite.AbstractIndex.QueryLanguage;
					public static N1QL: com.couchbase.lite.AbstractIndex.QueryLanguage;
					public getValue(): number;
					public static valueOf(param0: string): com.couchbase.lite.AbstractIndex.QueryLanguage;
					public static values(): androidNative.Array<com.couchbase.lite.AbstractIndex.QueryLanguage>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndexBuilder>;
				public static fullTextIndex(param0: androidNative.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
				public static valueIndex(param0: androidNative.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractQuery extends com.couchbase.lite.Query {
				public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
				public static DOMAIN: com.couchbase.lite.LogDomain;
				public execute(): com.couchbase.lite.ResultSet;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractReplicator extends com.couchbase.lite.internal.core.BaseReplicator {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
				public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				public getPendingDocumentIds(): java.util.Set<string>;
				public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public start(param0: boolean): void;
				public getMessageC4Replicator(param0: number): com.couchbase.lite.internal.core.C4Replicator;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public getServerCertificates(): java.util.List<java.security.cert.Certificate>;
				public toString(): string;
				public constructor();
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public addDocumentReplicationListener(param0: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
				public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
				public stop(): void;
				public getLocalC4Replicator(param0: com.couchbase.lite.Database): com.couchbase.lite.internal.core.C4Replicator;
				public start(): void;
				public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public getStatus(): com.couchbase.lite.ReplicatorStatus;
				public isDocumentPending(param0: string): boolean;
				public getRemoteC4Replicator(param0: java.net.URI): com.couchbase.lite.internal.core.C4Replicator;
				public addDocumentReplicationListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractReplicator {
				export class ReplicatorCookieStore extends com.couchbase.lite.internal.replicator.CBLCookieStore {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorCookieStore>;
					public setCookie(param0: java.net.URI, param1: string): void;
					public static parseCookies(param0: okhttp3.HttpUrl, param1: string): java.util.List<okhttp3.Cookie>;
					public getCookies(param0: java.net.URI): string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration>;
				public static DISABLE_HEARTBEAT: number;
				public setContinuous(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setReplicatorType(param0: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public setPushFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				public static verifyHeartbeat(param0: number): number;
				public getConflictResolver(): com.couchbase.lite.ConflictResolver;
				public setHeaders(param0: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
				public setMaxAttemptWaitTime(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public getReplicatorType(): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
				public setHeartbeat(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				public setAuthenticator(param0: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
				public setType(param0: com.couchbase.lite.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractReplicatorConfiguration);
				public getMaxAttempts(): number;
				public getChannels(): java.util.List<string>;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
				public getDocumentIDs(): java.util.List<string>;
				public getPinnedServerCertificate(): androidNative.Array<number>;
				public getAuthenticator(): com.couchbase.lite.Authenticator;
				public setChannels(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public setMaxAttempts(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				public isAutoPurgeEnabled(): boolean;
				public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public getTarget(): com.couchbase.lite.Endpoint;
				public static copyCert(param0: androidNative.Array<number>): androidNative.Array<number>;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.ReplicatorType, param2: boolean, param3: com.couchbase.lite.Authenticator, param4: java.util.Map<string,string>, param5: androidNative.Array<number>, param6: java.util.List<string>, param7: java.util.List<string>, param8: com.couchbase.lite.ReplicationFilter, param9: com.couchbase.lite.ReplicationFilter, param10: com.couchbase.lite.ConflictResolver, param11: number, param12: number, param13: number, param14: boolean, param15: com.couchbase.lite.Endpoint);
				public getPushFilter(): com.couchbase.lite.ReplicationFilter;
				public getPullFilter(): com.couchbase.lite.ReplicationFilter;
				public setAutoPurgeEnabled(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public toString(): string;
				public constructor(param0: com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration);
				public setPinnedServerCertificate(param0: androidNative.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
				public getDatabase(): com.couchbase.lite.Database;
				public isContinuous(): boolean;
				public getHeaders(): java.util.Map<string,string>;
				public setPullFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				public getType(): com.couchbase.lite.ReplicatorType;
				public setConflictResolver(param0: com.couchbase.lite.ConflictResolver): com.couchbase.lite.ReplicatorConfiguration;
				public getMaxAttemptWaitTime(): number;
				public getHeartbeat(): number;
			}
			export module AbstractReplicatorConfiguration {
				export class ReplicatorType {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
					public static PUSH_AND_PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PUSH: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static valueOf(param0: string): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static values(): androidNative.Array<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Array extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Array>;
				public lock: any;
				public internalArray: com.couchbase.lite.internal.fleece.MArray;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public iterator(): java.util.Iterator<any>;
				public toMutable(): com.couchbase.lite.MutableArray;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public getValue(param0: number): any;
				public count(): number;
				public getInt(param0: number): number;
				public toJSON(): string;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public getArray(param0: number): com.couchbase.lite.Array;
			}
			export module Array {
				export class ArrayIterator extends java.util.Iterator<any> {
					public static class: java.lang.Class<com.couchbase.lite.Array.ArrayIterator>;
					public next(): any;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpression {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpression>;
				public static anyAndEvery(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static variable(param0: string): com.couchbase.lite.VariableExpression;
				public static every(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static any(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
			}
			export module ArrayExpression {
				export class QuantifiesType {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpression.QuantifiesType>;
					public static ANY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static ANY_AND_EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static valueOf(param0: string): com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static values(): androidNative.Array<com.couchbase.lite.ArrayExpression.QuantifiesType>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpressionIn {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionIn>;
				public in(param0: com.couchbase.lite.Expression): com.couchbase.lite.ArrayExpressionSatisfies;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpressionSatisfies {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies>;
				public satisfies(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export module ArrayExpressionSatisfies {
				export class QuantifiedExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies.QuantifiedExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayFunction {
				public static class: java.lang.Class<com.couchbase.lite.ArrayFunction>;
				public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.ArrayInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(): number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getNumber(param0: number): java.lang.Number;
					getString(param0: number): string;
					getDate(param0: number): java.util.Date;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getValue(param0: number): any;
					toList(): java.util.List<any>;
					toJSON(): string;
				});
				public constructor();
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public getLong(param0: number): number;
				public getValue(param0: number): any;
				public count(): number;
				public getInt(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public toJSON(): string;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.Authenticator>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.BaseDatabase>;
				public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
				public mustBeOpen(): void;
				public getOpenC4DbLocked(): com.couchbase.lite.internal.core.C4Database;
				public isOpen(): boolean;
				public setC4DatabaseLocked(param0: com.couchbase.lite.internal.core.C4Database): void;
				public getDbLock(): any;
				public constructor();
				public getDbPath(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class BasicAuthenticator extends com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
				public finalize(): void;
				public getUsername(): string;
				public getPasswordChars(): androidNative.Array<string>;
				/** @deprecated */
				public getPassword(): string;
				public constructor();
				public constructor(param0: string, param1: androidNative.Array<string>);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Blob extends com.couchbase.lite.internal.fleece.FLEncodable {
				public static class: java.lang.Class<com.couchbase.lite.Blob>;
				public static ENCODER_ARG_DB: string;
				public static ENCODER_ARG_QUERY_PARAM: string;
				public getContentType(): string;
				public digest(): string;
				public constructor(param0: string, param1: java.net.URL);
				public length(): number;
				public finalize(): void;
				public toString(): string;
				public getContentStream(): java.io.InputStream;
				public getContent(): androidNative.Array<number>;
				public getProperties(): java.util.Map<string,any>;
				public hashCode(): number;
				public constructor(param0: string, param1: androidNative.Array<number>);
				public equals(param0: any): boolean;
				public static isBlob(param0: java.util.Map<string,any>): boolean;
				public toJSON(): string;
				public constructor(param0: string, param1: java.io.InputStream);
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
			}
			export module Blob {
				export class BlobInputStream {
					public static class: java.lang.Class<com.couchbase.lite.Blob.BlobInputStream>;
					public available(): number;
					public read(): number;
					public reset(): void;
					public markSupported(): boolean;
					public skip(param0: number): number;
					public close(): void;
					public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
					public read(param0: androidNative.Array<number>): number;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class BuildConfig {
				public static class: java.lang.Class<com.couchbase.lite.BuildConfig>;
				public static DEBUG: boolean;
				public static LIBRARY_PACKAGE_NAME: string;
				public static BUILD_TYPE: string;
				public static BUILD_COMMIT: string;
				public static BUILD_TIME: string;
				public static CBL_DEBUG: boolean;
				public static ENTERPRISE: boolean;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class BuilderQuery extends com.couchbase.lite.AbstractQuery {
				public static class: java.lang.Class<com.couchbase.lite.BuilderQuery>;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLConverter {
				public static class: java.lang.Class<com.couchbase.lite.CBLConverter>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CBLError {
				public static class: java.lang.Class<com.couchbase.lite.CBLError>;
			}
			export module CBLError {
				export class Code {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Code>;
					public static ASSERTION_FAILED: number;
					public static UNIMPLEMENTED: number;
					public static UNSUPPORTED_ENCRYPTION: number;
					public static BAD_REVISION_ID: number;
					public static CORRUPT_REVISION_DATA: number;
					public static NOT_OPEN: number;
					public static NOT_FOUND: number;
					public static CONFLICT: number;
					public static INVALID_PARAMETER: number;
					public static UNEXPECTED_ERROR: number;
					public static CANT_OPEN_FILE: number;
					public static IO_ERROR: number;
					public static MEMORY_ERROR: number;
					public static NOT_WRITABLE: number;
					public static CORRUPT_DATA: number;
					public static BUSY: number;
					public static NOT_IN_TRANSACTION: number;
					public static TRANSACTION_NOT_CLOSED: number;
					public static UNSUPPORTED: number;
					public static NOT_A_DATABASE_FILE: number;
					public static WRONG_FORMAT: number;
					public static CRYPTO: number;
					public static INVALID_QUERY: number;
					public static MISSING_INDEX: number;
					public static INVALID_QUERY_PARAM: number;
					public static REMOTE_ERROR: number;
					public static DATABASE_TOO_OLD: number;
					public static DATABASE_TOO_NEW: number;
					public static BAD_DOC_ID: number;
					public static CANT_UPGRADE_DATABASE: number;
					public static NETWORK_OFFSET: number;
					public static DNS_FAILURE: number;
					public static UNKNOWN_HOST: number;
					public static TIMEOUT: number;
					public static INVALID_URL: number;
					public static TOO_MANY_REDIRECTS: number;
					public static TLS_HANDSHAKE_FAILED: number;
					public static TLS_CERT_EXPIRED: number;
					public static TLS_CERT_UNTRUSTED: number;
					public static TLS_CLIENT_CERT_REQUIRED: number;
					public static TLS_CLIENT_CERT_REJECTED: number;
					public static TLS_CERT_UNKNOWN_ROOT: number;
					public static INVALID_REDIRECT: number;
					public static HTTP_BASE: number;
					public static HTTP_AUTH_REQUIRED: number;
					public static HTTP_FORBIDDEN: number;
					public static HTTP_NOT_FOUND: number;
					public static HTTP_CONFLICT: number;
					public static HTTP_PROXY_AUTH_REQUIRED: number;
					public static HTTP_ENTITY_TOO_LARGE: number;
					public static HTTP_IM_A_TEAPOT: number;
					public static HTTP_INTERNAL_SERVER_ERROR: number;
					public static HTTP_NOT_IMPLEMENTED: number;
					public static HTTP_SERVICE_UNAVAILABLE: number;
					public static WEB_SOCKET_NORMAL_CLOSE: number;
					public static WEB_SOCKET_GOING_AWAY: number;
					public static WEB_SOCKET_PROTOCOL_ERROR: number;
					public static WEB_SOCKET_DATA_ERROR: number;
					public static WEB_SOCKET_ABNORMAL_CLOSE: number;
					public static WEB_SOCKET_BAD_MESSAGE_FORMAT: number;
					public static WEB_SOCKET_POLICY_ERROR: number;
					public static WEB_SOCKET_MESSAGE_TOO_BIG: number;
					public static WEB_SOCKET_MISSING_EXTENSION: number;
					public static WEB_SOCKET_CANT_FULFILL: number;
					public static WEB_SOCKET_TLS_FAILURE: number;
					public static WEB_SOCKET_USER: number;
					public static WEB_SOCKET_CLOSE_USER_TRANSIENT: number;
					public static WEB_SOCKET_CLOSE_USER_PERMANENT: number;
				}
				export class Domain {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Domain>;
					public static CBLITE: string;
					public static POSIX: string;
					public static SQLITE: string;
					public static FLEECE: string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeListener<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ChangeListener<any>>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ChangeListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: T): void;
				});
				public constructor();
				public changed(param0: T): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeListenerToken<T>  extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ChangeListenerToken<any>>;
				public getKey(): any;
				public setKey(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ChangeNotifier<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ChangeNotifier<any>>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Collation {
				public static class: java.lang.Class<com.couchbase.lite.Collation>;
				public setIgnoreAccents(param0: boolean): com.couchbase.lite.Collation;
				public static ascii(): com.couchbase.lite.Collation.ASCII;
				public setLocale(param0: string): com.couchbase.lite.Collation;
				public constructor(param0: boolean, param1: string);
				public static unicode(): com.couchbase.lite.Collation.Unicode;
				public setIgnoreCase(param0: boolean): com.couchbase.lite.Collation;
				public toString(): string;
			}
			export module Collation {
				export class ASCII extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.ASCII>;
					public setIgnoreCase(param0: boolean): com.couchbase.lite.Collation.ASCII;
					public setIgnoreCase(param0: boolean): com.couchbase.lite.Collation;
				}
				export class Unicode extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.Unicode>;
					public setLocale(param0: string): com.couchbase.lite.Collation;
					public setIgnoreAccents(param0: boolean): com.couchbase.lite.Collation.Unicode;
					public setIgnoreCase(param0: boolean): com.couchbase.lite.Collation;
					public setIgnoreAccents(param0: boolean): com.couchbase.lite.Collation;
					public setIgnoreCase(param0: boolean): com.couchbase.lite.Collation.Unicode;
					public setLocale(param0: string): com.couchbase.lite.Collation.Unicode;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConcurrencyControl {
				public static class: java.lang.Class<com.couchbase.lite.ConcurrencyControl>;
				public static LAST_WRITE_WINS: com.couchbase.lite.ConcurrencyControl;
				public static FAIL_ON_CONFLICT: com.couchbase.lite.ConcurrencyControl;
				public static values(): androidNative.Array<com.couchbase.lite.ConcurrencyControl>;
				public static valueOf(param0: string): com.couchbase.lite.ConcurrencyControl;
				public getValue(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Conflict {
				public static class: java.lang.Class<com.couchbase.lite.Conflict>;
				public getLocalDocument(): com.couchbase.lite.Document;
				public getDocumentId(): string;
				public getRemoteDocument(): com.couchbase.lite.Document;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConflictHandler {
				public static class: java.lang.Class<com.couchbase.lite.ConflictHandler>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ConflictHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					handle(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.Document): boolean;
				});
				public constructor();
				public handle(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.Document): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConflictResolver {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolver>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ConflictResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
					<clinit>(): void;
				});
				public constructor();
				public static DEFAULT: com.couchbase.lite.ConflictResolver;
				public resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConsoleLogger extends com.couchbase.lite.AbstractConsoleLogger {
				public static class: java.lang.Class<com.couchbase.lite.ConsoleLogger>;
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getLevel(): com.couchbase.lite.LogLevel;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLite {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLite>;
				public static init(param0: globalAndroid.content.Context, param1: boolean, param2: java.io.File, param3: java.io.File): void;
				public static init(param0: globalAndroid.content.Context, param1: boolean): void;
				public static init(param0: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLiteException {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLiteException>;
				/** @deprecated */
				public constructor(param0: string, param1: number, param2: java.lang.Exception);
				public constructor(param0: string, param1: string, param2: number);
				public getInfo(): java.util.Map<string,any>;
				public getCode(): number;
				public static convertC4Error(param0: com.couchbase.lite.internal.core.C4Error): com.couchbase.lite.CouchbaseLiteException;
				public toString(): string;
				public static convertException(param0: com.couchbase.lite.LiteCoreException, param1: string): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string);
				/** @deprecated */
				public constructor(param0: com.couchbase.lite.internal.CBLInternalException);
				public constructor();
				/** @deprecated */
				public constructor(param0: string, param1: number, param2: java.util.Map<string,any>);
				public static toCouchbaseLiteException(param0: number, param1: number, param2: number): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string, param1: java.lang.Exception);
				public getDomain(): string;
				/** @deprecated */
				public constructor(param0: string, param1: number);
				public static convertException(param0: com.couchbase.lite.LiteCoreException): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string, param1: com.couchbase.lite.internal.CBLInternalException);
				public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number);
				public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number, param4: java.util.Map<string,any>);
				public static toCouchbaseLiteException(param0: number, param1: number, param2: string, param3: java.lang.Exception): com.couchbase.lite.CouchbaseLiteException;
				/** @deprecated */
				public constructor(param0: java.lang.Exception);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DataSource {
				public static class: java.lang.Class<com.couchbase.lite.DataSource>;
				public alias: string;
				public static database(param0: com.couchbase.lite.Database): com.couchbase.lite.DataSource.As;
			}
			export module DataSource {
				export class As extends com.couchbase.lite.DataSource {
					public static class: java.lang.Class<com.couchbase.lite.DataSource.As>;
					public as(param0: string): com.couchbase.lite.DataSource;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Database extends com.couchbase.lite.AbstractDatabase {
				public static class: java.lang.Class<com.couchbase.lite.Database>;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public static copy(param0: java.io.File, param1: string, param2: string, param3: number, param4: androidNative.Array<number>): void;
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration): void;
				public constructor(param0: string);
				public constructor(param0: string, param1: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseChange {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChange>;
				public getDocumentIDs(): java.util.List<string>;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DatabaseChange> {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DatabaseChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.DatabaseChange): void;
					changed(param0: any): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.DatabaseChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DatabaseConfiguration extends com.couchbase.lite.AbstractDatabaseConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseConfiguration>;
				public constructor(param0: com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration);
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration);
				public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DefaultConflictResolver extends com.couchbase.lite.ConflictResolver {
				public static class: java.lang.Class<com.couchbase.lite.DefaultConflictResolver>;
				public resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Dictionary extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Dictionary>;
				public lock: any;
				public internalDict: com.couchbase.lite.internal.fleece.MDict;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public toMutable(): com.couchbase.lite.MutableDictionary;
				public contains(param0: string): boolean;
				public hashCode(): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public isEmpty(): boolean;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public getLong(param0: string): number;
				public toString(): string;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public toJSON(): string;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.DictionaryInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(): number;
					contains(param0: string): boolean;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getNumber(param0: string): java.lang.Number;
					getString(param0: string): string;
					getDate(param0: string): java.util.Date;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getValue(param0: string): any;
					getKeys(): java.util.List<string>;
					toMap(): java.util.Map<string,any>;
					toJSON(): string;
				});
				public constructor();
				public getLong(param0: string): number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public getString(param0: string): string;
				public count(): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public toJSON(): string;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocContext extends com.couchbase.lite.internal.DbContext {
				public static class: java.lang.Class<com.couchbase.lite.DocContext>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Document extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Document>;
				public getId(): string;
				public getSequence(): number;
				public setContent(param0: com.couchbase.lite.Dictionary): void;
				public getKeys(): java.util.List<string>;
				public toMutable(): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getRevisionID(): string;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public hashCode(): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public equals(param0: any): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getLong(param0: string): number;
				public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
				public toString(): string;
				public getContent(): com.couchbase.lite.Dictionary;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public toJSON(): string;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChange {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChange>;
				public getDocumentID(): string;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DocumentChange> {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DocumentChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.DocumentChange): void;
					changed(param0: any): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.DocumentChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentChangeNotifier extends com.couchbase.lite.ChangeNotifier<com.couchbase.lite.DocumentChange> {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeNotifier>;
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentFlag {
				public static class: java.lang.Class<com.couchbase.lite.DocumentFlag>;
				public static DELETED: com.couchbase.lite.DocumentFlag;
				public static ACCESS_REMOVED: com.couchbase.lite.DocumentFlag;
				public rawValue(): number;
				public static values(): androidNative.Array<com.couchbase.lite.DocumentFlag>;
				public static valueOf(param0: string): com.couchbase.lite.DocumentFlag;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentReplication {
				public static class: java.lang.Class<com.couchbase.lite.DocumentReplication>;
				public isPush(): boolean;
				public toString(): string;
				public getReplicator(): com.couchbase.lite.Replicator;
				public getDocuments(): java.util.List<com.couchbase.lite.ReplicatedDocument>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentReplicationListener {
				public static class: java.lang.Class<com.couchbase.lite.DocumentReplicationListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DocumentReplicationListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					replication(param0: com.couchbase.lite.DocumentReplication): void;
				});
				public constructor();
				public replication(param0: com.couchbase.lite.DocumentReplication): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentReplicationListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.DocumentReplicationListenerToken>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Endpoint {
				public static class: java.lang.Class<com.couchbase.lite.Endpoint>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Endpoint interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Expression {
				public static class: java.lang.Class<com.couchbase.lite.Expression>;
				public static parameter(param0: string): com.couchbase.lite.Expression;
				public static negated(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public modulo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public is(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public between(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static string(param0: string): com.couchbase.lite.Expression;
				public isNot(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public collate(param0: com.couchbase.lite.Collation): com.couchbase.lite.Expression;
				public add(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public constructor();
				public static booleanValue(param0: boolean): com.couchbase.lite.Expression;
				public static property(param0: string): com.couchbase.lite.PropertyExpression;
				public static number(param0: java.lang.Number): com.couchbase.lite.Expression;
				public static map(param0: java.util.Map<string,any>): com.couchbase.lite.Expression;
				public static doubleValue(param0: number): com.couchbase.lite.Expression;
				public static all(): com.couchbase.lite.PropertyExpression;
				public greaterThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public isValued(): com.couchbase.lite.Expression;
				public static date(param0: java.util.Date): com.couchbase.lite.Expression;
				public divide(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public notEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public greaterThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public in(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
				public like(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public subtract(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static not(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floatValue(param0: number): com.couchbase.lite.Expression;
				public and(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public or(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public lessThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public isNotValued(): com.couchbase.lite.Expression;
				public toString(): string;
				public static list(param0: java.util.List<any>): com.couchbase.lite.Expression;
				public lessThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static value(param0: any): com.couchbase.lite.Expression;
				public static longValue(param0: number): com.couchbase.lite.Expression;
				public regex(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public equalTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static intValue(param0: number): com.couchbase.lite.Expression;
				/** @deprecated */
				public isNullOrMissing(): com.couchbase.lite.Expression;
				/** @deprecated */
				public notNullOrMissing(): com.couchbase.lite.Expression;
				public multiply(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export module Expression {
				export class AggregateExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.AggregateExpression>;
					public getExpressions(): java.util.List<com.couchbase.lite.Expression>;
				}
				export class BinaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression>;
				}
				export module BinaryExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression.OpType>;
						public static Add: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Between: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Divide: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static EqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static GreaterThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static GreaterThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static In: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Is: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static IsNot: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static LessThan: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static LessThanOrEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Like: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Modulus: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Multiply: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static NotEqualTo: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static Subtract: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static RegexLike: com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static valueOf(param0: string): com.couchbase.lite.Expression.BinaryExpression.OpType;
						public static values(): androidNative.Array<com.couchbase.lite.Expression.BinaryExpression.OpType>;
					}
				}
				export class CollationExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CollationExpression>;
				}
				export class CompoundExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression>;
				}
				export module CompoundExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression.OpType>;
						public static And: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static Or: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static Not: com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static valueOf(param0: string): com.couchbase.lite.Expression.CompoundExpression.OpType;
						public static values(): androidNative.Array<com.couchbase.lite.Expression.CompoundExpression.OpType>;
					}
				}
				export class FunctionExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.FunctionExpression>;
				}
				export class ParameterExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ParameterExpression>;
				}
				export class UnaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression>;
				}
				export module UnaryExpression {
					export class OpType {
						public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression.OpType>;
						public static Missing: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static NotMissing: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static NotNull: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static Null: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static Valued: com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static values(): androidNative.Array<com.couchbase.lite.Expression.UnaryExpression.OpType>;
						public static valueOf(param0: string): com.couchbase.lite.Expression.UnaryExpression.OpType;
					}
				}
				export class ValueExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ValueExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FileLogger extends com.couchbase.lite.Logger {
				public static class: java.lang.Class<com.couchbase.lite.FileLogger>;
				public setConfig(param0: com.couchbase.lite.LogFileConfiguration): void;
				public setLevel(param0: com.couchbase.lite.LogLevel): void;
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getConfig(): com.couchbase.lite.LogFileConfiguration;
				public getLevel(): com.couchbase.lite.LogLevel;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Fleece {
				public static class: java.lang.Class<com.couchbase.lite.Fleece>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class From extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.From>;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FromRouter {
				public static class: java.lang.Class<com.couchbase.lite.FromRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.FromRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				});
				public constructor();
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextExpression {
				public static class: java.lang.Class<com.couchbase.lite.FullTextExpression>;
				/** @deprecated */
				public match(param0: string): com.couchbase.lite.Expression;
				/** @deprecated */
				public static index(param0: string): com.couchbase.lite.FullTextExpression;
			}
			export module FullTextExpression {
				export class FullTextMatchExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.FullTextExpression.FullTextMatchExpression>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextFunction {
				public static class: java.lang.Class<com.couchbase.lite.FullTextFunction>;
				public static match(param0: string, param1: string): com.couchbase.lite.Expression;
				public static rank(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndex>;
				public setLanguage(param0: string): com.couchbase.lite.FullTextIndex;
				public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexConfiguration>;
				public setLanguage(param0: string): com.couchbase.lite.FullTextIndexConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndexConfiguration;
				public constructor(param0: androidNative.Array<string>);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexItem>;
				public static property(param0: string): com.couchbase.lite.FullTextIndexItem;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Function extends com.couchbase.lite.AbstractFunction {
				public static class: java.lang.Class<com.couchbase.lite.Function>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class GroupBy extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.HavingRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupBy>;
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class GroupByRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupByRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.GroupByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				});
				public constructor();
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Having extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Having>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class HavingRouter {
				public static class: java.lang.Class<com.couchbase.lite.HavingRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.HavingRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				});
				public constructor();
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Index extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.Index>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class IndexBuilder extends com.couchbase.lite.AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.IndexBuilder>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class IndexConfiguration extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.IndexConfiguration>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Join {
				public static class: java.lang.Class<com.couchbase.lite.Join>;
				public static crossJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join;
				public static join(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftOuterJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static innerJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
			}
			export module Join {
				export class On extends com.couchbase.lite.Join {
					public static class: java.lang.Class<com.couchbase.lite.Join.On>;
					public on(param0: com.couchbase.lite.Expression): com.couchbase.lite.Join;
				}
				export class Type {
					public static class: java.lang.Class<com.couchbase.lite.Join.Type>;
					public static INNER: com.couchbase.lite.Join.Type;
					public static LEFT_OUTER: com.couchbase.lite.Join.Type;
					public static CROSS: com.couchbase.lite.Join.Type;
					public static valueOf(param0: string): com.couchbase.lite.Join.Type;
					public static values(): androidNative.Array<com.couchbase.lite.Join.Type>;
					public getTag(): string;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class JoinRouter {
				public static class: java.lang.Class<com.couchbase.lite.JoinRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.JoinRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				});
				public constructor();
				public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Joins extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.WhereRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Joins>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Limit extends com.couchbase.lite.BuilderQuery {
				public static class: java.lang.Class<com.couchbase.lite.Limit>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.LimitRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.LimitRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
					limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				});
				public constructor();
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ListenerToken>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ListenerToken interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LiteCoreException {
				public static class: java.lang.Class<com.couchbase.lite.LiteCoreException>;
				public domain: number;
				public code: number;
				public constructor(param0: number, param1: number, param2: string);
				public getCode(): number;
				public static throwException(param0: number, param1: number, param2: string): void;
				public toString(): string;
				public getDomain(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LiveQuery extends com.couchbase.lite.DatabaseChangeListener {
				public static class: java.lang.Class<com.couchbase.lite.LiveQuery>;
				public changed(param0: com.couchbase.lite.DatabaseChange): void;
				public toString(): string;
				public changed(param0: any): void;
			}
			export module LiveQuery {
				export class State {
					public static class: java.lang.Class<com.couchbase.lite.LiveQuery.State>;
					public static STOPPED: com.couchbase.lite.LiveQuery.State;
					public static STARTED: com.couchbase.lite.LiveQuery.State;
					public static SCHEDULED: com.couchbase.lite.LiveQuery.State;
					public static values(): androidNative.Array<com.couchbase.lite.LiveQuery.State>;
					public static valueOf(param0: string): com.couchbase.lite.LiveQuery.State;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Log {
				public static class: java.lang.Class<com.couchbase.lite.Log>;
				public getCustom(): com.couchbase.lite.Logger;
				public getFile(): com.couchbase.lite.FileLogger;
				public getConsole(): com.couchbase.lite.ConsoleLogger;
				public setCustom(param0: com.couchbase.lite.Logger): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LogDomain {
				public static class: java.lang.Class<com.couchbase.lite.LogDomain>;
				public static DATABASE: com.couchbase.lite.LogDomain;
				public static QUERY: com.couchbase.lite.LogDomain;
				public static REPLICATOR: com.couchbase.lite.LogDomain;
				public static NETWORK: com.couchbase.lite.LogDomain;
				public static LISTENER: com.couchbase.lite.LogDomain;
				public static ALL_DOMAINS: java.util.EnumSet<com.couchbase.lite.LogDomain>;
				public static values(): androidNative.Array<com.couchbase.lite.LogDomain>;
				public static valueOf(param0: string): com.couchbase.lite.LogDomain;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LogFileConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.LogFileConfiguration>;
				public usesPlaintext(): boolean;
				public constructor(param0: string, param1: com.couchbase.lite.LogFileConfiguration);
				public setMaxRotateCount(param0: number): com.couchbase.lite.LogFileConfiguration;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMaxSize(): number;
				public getMaxRotateCount(): number;
				public setMaxSize(param0: number): com.couchbase.lite.LogFileConfiguration;
				public constructor(param0: string);
				public constructor(param0: com.couchbase.lite.LogFileConfiguration);
				public setUsePlaintext(param0: boolean): com.couchbase.lite.LogFileConfiguration;
				public getDirectory(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class LogLevel {
				public static class: java.lang.Class<com.couchbase.lite.LogLevel>;
				public static DEBUG: com.couchbase.lite.LogLevel;
				public static VERBOSE: com.couchbase.lite.LogLevel;
				public static INFO: com.couchbase.lite.LogLevel;
				public static WARNING: com.couchbase.lite.LogLevel;
				public static ERROR: com.couchbase.lite.LogLevel;
				public static NONE: com.couchbase.lite.LogLevel;
				public static values(): androidNative.Array<com.couchbase.lite.LogLevel>;
				public static valueOf(param0: string): com.couchbase.lite.LogLevel;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Logger {
				public static class: java.lang.Class<com.couchbase.lite.Logger>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getLevel(): com.couchbase.lite.LogLevel;
					log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				});
				public constructor();
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getLevel(): com.couchbase.lite.LogLevel;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MValueDelegate extends com.couchbase.lite.internal.fleece.MValue.Delegate {
				public static class: java.lang.Class<com.couchbase.lite.MValueDelegate>;
				public encodeNative(param0: com.couchbase.lite.internal.fleece.FLEncoder, param1: any): void;
				public collectionFromNative(param0: any): com.couchbase.lite.internal.fleece.MCollection;
				public toNative(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MaintenanceType {
				public static class: java.lang.Class<com.couchbase.lite.MaintenanceType>;
				public static REINDEX: com.couchbase.lite.MaintenanceType;
				public static COMPACT: com.couchbase.lite.MaintenanceType;
				public static INTEGRITY_CHECK: com.couchbase.lite.MaintenanceType;
				public static OPTIMIZE: com.couchbase.lite.MaintenanceType;
				public static FULL_OPTIMIZE: com.couchbase.lite.MaintenanceType;
				public static values(): androidNative.Array<com.couchbase.lite.MaintenanceType>;
				public static valueOf(param0: string): com.couchbase.lite.MaintenanceType;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Meta {
				public static class: java.lang.Class<com.couchbase.lite.Meta>;
				public static id: com.couchbase.lite.MetaExpression;
				public static revisionID: com.couchbase.lite.MetaExpression;
				public static sequence: com.couchbase.lite.MetaExpression;
				public static deleted: com.couchbase.lite.MetaExpression;
				public static expiration: com.couchbase.lite.MetaExpression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MetaExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.MetaExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableArray extends com.couchbase.lite.Array implements com.couchbase.lite.MutableArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableArray>;
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setJSON(param0: string): com.couchbase.lite.MutableArray;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public setJSON(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public remove(param0: number): com.couchbase.lite.MutableArray;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArray;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public addFloat(param0: number): com.couchbase.lite.MutableArray;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public toJSON(): string;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
				public getString(param0: number): string;
				public getNumber(param0: number): java.lang.Number;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArray;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public constructor(param0: string);
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
				public addInt(param0: number): com.couchbase.lite.MutableArray;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
				public toList(): java.util.List<any>;
				public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getValue(param0: number): any;
				public count(): number;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArray;
				public getDouble(param0: number): number;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionary;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor();
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArray;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArray;
				public getInt(param0: number): number;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArray;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addString(param0: string): com.couchbase.lite.MutableArray;
				public addDouble(param0: number): com.couchbase.lite.MutableArray;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.Array;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArray;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArray;
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArray;
				public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getLong(param0: number): number;
				public addLong(param0: number): com.couchbase.lite.MutableArray;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public addValue(param0: any): com.couchbase.lite.MutableArray;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public constructor(param0: java.util.List<any>);
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArray;
				public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableArrayInterface extends com.couchbase.lite.ArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableArrayInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.MutableArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
					remove(param0: number): com.couchbase.lite.MutableArrayInterface;
					setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
					setJSON(param0: string): com.couchbase.lite.MutableArrayInterface;
					addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
					addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
					addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
					addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
					addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
					addString(param0: string): com.couchbase.lite.MutableArrayInterface;
					addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
					insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					count(): number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getNumber(param0: number): java.lang.Number;
					getString(param0: number): string;
					getDate(param0: number): java.util.Date;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getValue(param0: number): any;
					toList(): java.util.List<any>;
					toJSON(): string;
				});
				public constructor();
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public getDouble(param0: number): number;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setJSON(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getInt(param0: number): number;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getDate(param0: number): java.util.Date;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getBoolean(param0: number): boolean;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public toJSON(): string;
				public getFloat(param0: number): number;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
				public toList(): java.util.List<any>;
				public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
				public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getLong(param0: number): number;
				public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getValue(param0: number): any;
				public count(): number;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public remove(param0: number): com.couchbase.lite.MutableArrayInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDictionary extends com.couchbase.lite.Dictionary implements com.couchbase.lite.MutableDictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableDictionary>;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionary;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionary;
				public constructor();
				public getArray(param0: string): com.couchbase.lite.MutableArray;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionary;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionary;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor(param0: java.util.Map<string,any>);
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
				public toJSON(): string;
				public isChanged(): boolean;
				public getArray(param0: string): com.couchbase.lite.Array;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionary;
				public getKeys(): java.util.List<string>;
				public constructor(param0: string);
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionary;
				public getValue(param0: string): any;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public remove(param0: string): com.couchbase.lite.MutableDictionary;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionary;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionary;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionary;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionary;
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionary;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDictionaryInterface extends com.couchbase.lite.DictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableDictionaryInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.MutableDictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
					setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
					setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
					setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
					setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
					setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
					setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
					setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
					setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
					setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					count(): number;
					contains(param0: string): boolean;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getNumber(param0: string): java.lang.Number;
					getString(param0: string): string;
					getDate(param0: string): java.util.Date;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getValue(param0: string): any;
					getKeys(): java.util.List<string>;
					toMap(): java.util.Map<string,any>;
					toJSON(): string;
				});
				public constructor();
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getBoolean(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getFloat(param0: string): number;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public count(): number;
				public toJSON(): string;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableDocument extends com.couchbase.lite.Document implements com.couchbase.lite.MutableDictionaryInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableDocument>;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDocument;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDocument;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDocument;
				public constructor();
				public getArray(param0: string): com.couchbase.lite.MutableArray;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDocument;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDocument;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor(param0: java.util.Map<string,any>);
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
				public toJSON(): string;
				public getArray(param0: string): com.couchbase.lite.Array;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDocument;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDocument;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getKeys(): java.util.List<string>;
				public constructor(param0: string);
				public toMutable(): com.couchbase.lite.MutableDocument;
				public remove(param0: string): com.couchbase.lite.MutableDocument;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: java.util.Map<string,any>);
				public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setJSON(param0: string): com.couchbase.lite.MutableDocument;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public constructor(param0: com.couchbase.lite.Document);
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDocument;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class N1qlQuery extends com.couchbase.lite.AbstractQuery {
				public static class: java.lang.Class<com.couchbase.lite.N1qlQuery>;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class OrderBy extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.OrderBy>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class OrderByRouter {
				public static class: java.lang.Class<com.couchbase.lite.OrderByRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.OrderByRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				});
				public constructor();
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class Ordering {
				public static class: java.lang.Class<com.couchbase.lite.Ordering>;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.Ordering.SortOrder;
				public constructor();
				public static property(param0: string): com.couchbase.lite.Ordering.SortOrder;
			}
			export module Ordering {
				export class SortOrder extends com.couchbase.lite.Ordering {
					public static class: java.lang.Class<com.couchbase.lite.Ordering.SortOrder>;
					public descending(): com.couchbase.lite.Ordering;
					public ascending(): com.couchbase.lite.Ordering;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Parameters {
				public static class: java.lang.Class<com.couchbase.lite.Parameters>;
				public setDouble(param0: string, param1: number): com.couchbase.lite.Parameters;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.Parameters;
				public setLong(param0: string, param1: number): com.couchbase.lite.Parameters;
				public constructor(param0: com.couchbase.lite.Parameters);
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.Parameters;
				public constructor();
				public getValue(param0: string): any;
				public setInt(param0: string, param1: number): com.couchbase.lite.Parameters;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.Parameters;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.Parameters;
				public setString(param0: string, param1: string): com.couchbase.lite.Parameters;
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.Parameters;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.Parameters;
				public setValue(param0: string, param1: any): com.couchbase.lite.Parameters;
				public setFloat(param0: string, param1: number): com.couchbase.lite.Parameters;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class PropertyExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.PropertyExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Query {
				public static class: java.lang.Class<com.couchbase.lite.Query>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Query interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getParameters(): com.couchbase.lite.Parameters;
					setParameters(param0: com.couchbase.lite.Parameters): void;
					execute(): com.couchbase.lite.ResultSet;
					explain(): string;
					addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
					addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
					removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				});
				public constructor();
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryBuilder {
				public static class: java.lang.Class<com.couchbase.lite.QueryBuilder>;
				public static select(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static selectDistinct(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static createQuery(param0: string, param1: com.couchbase.lite.Database): com.couchbase.lite.Query;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryChange {
				public static class: java.lang.Class<com.couchbase.lite.QueryChange>;
				public getResults(): com.couchbase.lite.ResultSet;
				public getError(): java.lang.Throwable;
				public getQuery(): com.couchbase.lite.Query;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class QueryChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.QueryChange> {
				public static class: java.lang.Class<com.couchbase.lite.QueryChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.QueryChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.QueryChange): void;
					changed(param0: any): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.QueryChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatedDocument {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatedDocument>;
				public getFlags(): java.util.EnumSet<com.couchbase.lite.DocumentFlag>;
				public getError(): com.couchbase.lite.CouchbaseLiteException;
				public toString(): string;
				public getID(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicationFilter {
				public static class: java.lang.Class<com.couchbase.lite.ReplicationFilter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicationFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					filtered(param0: com.couchbase.lite.Document, param1: java.util.EnumSet<com.couchbase.lite.DocumentFlag>): boolean;
				});
				public constructor();
				public filtered(param0: com.couchbase.lite.Document, param1: java.util.EnumSet<com.couchbase.lite.DocumentFlag>): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Replicator extends com.couchbase.lite.AbstractReplicator {
				public static class: java.lang.Class<com.couchbase.lite.Replicator>;
				public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorActivityLevel {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorActivityLevel>;
				public static STOPPED: com.couchbase.lite.ReplicatorActivityLevel;
				public static OFFLINE: com.couchbase.lite.ReplicatorActivityLevel;
				public static CONNECTING: com.couchbase.lite.ReplicatorActivityLevel;
				public static IDLE: com.couchbase.lite.ReplicatorActivityLevel;
				public static BUSY: com.couchbase.lite.ReplicatorActivityLevel;
				public static values(): androidNative.Array<com.couchbase.lite.ReplicatorActivityLevel>;
				public static valueOf(param0: string): com.couchbase.lite.ReplicatorActivityLevel;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChange {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
				public getStatus(): com.couchbase.lite.ReplicatorStatus;
				public toString(): string;
				public getReplicator(): com.couchbase.lite.Replicator;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChangeListener {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicatorChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.ReplicatorChange): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.ReplicatorChange): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChangeListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListenerToken>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorConfiguration extends com.couchbase.lite.AbstractReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration>;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.ReplicatorType, param2: boolean, param3: com.couchbase.lite.Authenticator, param4: java.util.Map<string,string>, param5: androidNative.Array<number>, param6: java.util.List<string>, param7: java.util.List<string>, param8: com.couchbase.lite.ReplicationFilter, param9: com.couchbase.lite.ReplicationFilter, param10: com.couchbase.lite.ConflictResolver, param11: number, param12: number, param13: number, param14: boolean, param15: com.couchbase.lite.Endpoint);
				public constructor(param0: com.couchbase.lite.AbstractReplicatorConfiguration);
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public getReplicatorConfiguration(): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(param0: com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorListener extends com.couchbase.lite.internal.core.C4ReplicatorListener {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorListener>;
				public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
				public documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: androidNative.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorProgress {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorProgress>;
				public getCompleted(): number;
				public getTotal(): number;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorStatus {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorStatus>;
				public getActivityLevel(): com.couchbase.lite.ReplicatorActivityLevel;
				public getProgress(): com.couchbase.lite.ReplicatorProgress;
				public getError(): com.couchbase.lite.CouchbaseLiteException;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorType {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorType>;
				public static PUSH_AND_PULL: com.couchbase.lite.ReplicatorType;
				public static PUSH: com.couchbase.lite.ReplicatorType;
				public static PULL: com.couchbase.lite.ReplicatorType;
				public static valueOf(param0: string): com.couchbase.lite.ReplicatorType;
				public static values(): androidNative.Array<com.couchbase.lite.ReplicatorType>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Result extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Result>;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public toList(): java.util.List<any>;
				public getLong(param0: number): number;
				public getBoolean(param0: string): boolean;
				public getDictionary(param0: string): com.couchbase.lite.Dictionary;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public getInt(param0: number): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getLong(param0: string): number;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public getValue(param0: number): any;
				public count(): number;
				public toJSON(): string;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public toMap(): java.util.Map<string,any>;
				public getFloat(param0: number): number;
				public getInt(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.Array;
				public getArray(param0: number): com.couchbase.lite.Array;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ResultSet extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ResultSet>;
				public allResults(): java.util.List<com.couchbase.lite.Result>;
				public close(): void;
				public next(): com.couchbase.lite.Result;
				public iterator(): java.util.Iterator<com.couchbase.lite.Result>;
				public finalize(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Select extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.FromRouter {
				public static class: java.lang.Class<com.couchbase.lite.Select>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class SelectResult {
				public static class: java.lang.Class<com.couchbase.lite.SelectResult>;
				public static property(param0: string): com.couchbase.lite.SelectResult.As;
				public static all(): com.couchbase.lite.SelectResult.From;
				public constructor(param0: com.couchbase.lite.Expression);
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
				public setExpression(param0: com.couchbase.lite.Expression): void;
			}
			export module SelectResult {
				export class As extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.As>;
					public as(param0: string): com.couchbase.lite.SelectResult.As;
				}
				export class From extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.From>;
					public from(param0: string): com.couchbase.lite.SelectResult;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class SessionAuthenticator extends com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.SessionAuthenticator>;
				public getCookieName(): string;
				public getSessionID(): string;
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class URLEndpoint extends com.couchbase.lite.Endpoint {
				public static class: java.lang.Class<com.couchbase.lite.URLEndpoint>;
				public getURL(): java.net.URI;
				public toString(): string;
				public constructor(param0: java.net.URI);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class UnitOfWork<E>  extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.UnitOfWork<any>>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.UnitOfWork<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					run(): void;
				});
				public constructor();
				public run(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndex>;
				public indexItems: java.util.List<com.couchbase.lite.ValueIndexItem>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexConfiguration>;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public constructor(param0: androidNative.Array<string>);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexItem>;
				public static property(param0: string): com.couchbase.lite.ValueIndexItem;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.ValueIndexItem;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class VariableExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.VariableExpression>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Where extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Where>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class WhereRouter {
				public static class: java.lang.Class<com.couchbase.lite.WhereRouter>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.WhereRouter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				});
				public constructor();
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export abstract class AbstractSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.AbstractSocketFactory>;
					public endpoint: com.couchbase.lite.Endpoint;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration, param1: com.couchbase.lite.internal.replicator.CBLCookieStore, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public toString(): string;
					public setListener(param0: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.internal.core.C4Socket>): void;
					public createSocket(param0: number, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.core.C4Socket;
					public createPlatformSocket(param0: number): com.couchbase.lite.internal.core.C4Socket;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class AndroidExecutionService extends com.couchbase.lite.internal.exec.AbstractExecutionService {
					public static class: java.lang.Class<com.couchbase.lite.internal.AndroidExecutionService>;
					public getConcurrentExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
					public getSerialExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
					public constructor();
					public constructor(param0: java.util.concurrent.ThreadPoolExecutor);
					public cancelDelayedTask(param0: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
					public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
					public getDefaultExecutor(): java.util.concurrent.Executor;
				}
				export module AndroidExecutionService {
					export class CancellableTask extends com.couchbase.lite.internal.exec.ExecutionService.Cancellable {
						public static class: java.lang.Class<com.couchbase.lite.internal.AndroidExecutionService.CancellableTask>;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class BaseImmutableDatabaseConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration>;
					public getDirectory(): string;
					public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class BaseImmutableReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration>;
					public getHeaders(): java.util.Map<string,string>;
					public isPull(): boolean;
					public getConflictResolver(): com.couchbase.lite.ConflictResolver;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
					public getHeartbeat(): number;
					public getPushFilter(): com.couchbase.lite.ReplicationFilter;
					public getDatabase(): com.couchbase.lite.Database;
					public getPullFilter(): com.couchbase.lite.ReplicationFilter;
					public getMaxRetryAttemptWaitTime(): number;
					public getTarget(): com.couchbase.lite.Endpoint;
					public isPush(): boolean;
					public isContinuous(): boolean;
					public getChannels(): java.util.List<string>;
					public getType(): com.couchbase.lite.ReplicatorType;
					public getMaxRetryAttempts(): number;
					public isAutoPurgeEnabled(): boolean;
					public getAuthenticator(): com.couchbase.lite.Authenticator;
					public getPinnedServerCertificate(): androidNative.Array<number>;
					public getDocumentIDs(): java.util.List<string>;
					public addConnectionOptions(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class CBLInternalException {
					public static class: java.lang.Class<com.couchbase.lite.internal.CBLInternalException>;
					public static FAILED_SELECTING_CONFLICTING_REVISION: number;
					public constructor(param0: number, param1: string, param2: java.lang.Throwable);
					public constructor(param0: number, param1: string);
					public constructor(param0: number);
					public getCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class CouchbaseLiteInternal {
					public static class: java.lang.Class<com.couchbase.lite.internal.CouchbaseLiteInternal>;
					public static SCRATCH_DIR_NAME: string;
					public static getNetworkConnectivityManager(): com.couchbase.lite.internal.replicator.NetworkConnectivityManager;
					public static getScratchDirPath(): string;
					public static getExecutionService(): com.couchbase.lite.internal.exec.ExecutionService;
					public static getScratchDir(): java.io.File;
					public static getRootDirPath(): string;
					public static reset(param0: boolean): void;
					public static requireInit(param0: string): void;
					public static getContext(): globalAndroid.content.Context;
					public static getRootDir(): java.io.File;
					public static debugging(): boolean;
					public static init(param0: com.couchbase.lite.internal.fleece.MValue.Delegate, param1: boolean, param2: java.io.File, param3: java.io.File, param4: globalAndroid.content.Context): void;
					public static loadErrorMessages(param0: globalAndroid.content.Context): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class DbContext extends com.couchbase.lite.internal.fleece.MContext {
					public static class: java.lang.Class<com.couchbase.lite.internal.DbContext>;
					public constructor();
					public constructor(param0: com.couchbase.lite.BaseDatabase);
					public getDatabase(): com.couchbase.lite.BaseDatabase;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class ImmutableDatabaseConfiguration extends com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.ImmutableDatabaseConfiguration>;
					public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class ImmutableReplicatorConfiguration extends com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.ImmutableReplicatorConfiguration>;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class SocketFactory extends com.couchbase.lite.internal.AbstractSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.SocketFactory>;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration, param1: com.couchbase.lite.internal.replicator.CBLCookieStore, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public createPlatformSocket(param0: number): com.couchbase.lite.internal.core.C4Socket;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export class AndroidConnectivityManager extends com.couchbase.lite.internal.replicator.NetworkConnectivityManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.AndroidConnectivityManager>;
						public unregisterObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public connectivityChanged(param0: boolean): void;
						public static newInstance(): com.couchbase.lite.internal.connectivity.AndroidConnectivityManager;
						public isConnected(): boolean;
						public registerObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public constructor(param0: number, param1: com.couchbase.lite.internal.utils.Fn.Runner);
						public isRunning(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export abstract class CallbackConnectivityWatcher extends com.couchbase.lite.internal.connectivity.ConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.CallbackConnectivityWatcher>;
						public connectivityCallback: globalAndroid.net.ConnectivityManager.NetworkCallback;
						public stop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export class ConnectivityListener21to23 extends com.couchbase.lite.internal.connectivity.CallbackConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.ConnectivityListener21to23>;
						public start(): void;
						public isConnected(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export class ConnectivityListener24to28 extends com.couchbase.lite.internal.connectivity.CallbackConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.ConnectivityListener24to28>;
						public start(): void;
						public isConnected(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export class ConnectivityListenerPost28 extends com.couchbase.lite.internal.connectivity.CallbackConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.ConnectivityListenerPost28>;
						public start(): void;
						public isConnected(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module connectivity {
					export abstract class ConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.ConnectivityWatcher>;
						public name: string;
						public onConnectivityChange(param0: boolean): void;
						public getSysMgr(): globalAndroid.net.ConnectivityManager;
						public start(): void;
						public logStart(): void;
						public isConnected(): boolean;
						public stop(): void;
						public getCblMgr(): com.couchbase.lite.internal.connectivity.AndroidConnectivityManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class BaseReplicator {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.BaseReplicator>;
						public constructor();
						public getC4Replicator(): com.couchbase.lite.internal.core.C4Replicator;
						public close(): void;
						public setC4Replicator(param0: com.couchbase.lite.internal.core.C4Replicator): void;
						public getReplicatorLock(): any;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4 {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4>;
						public static setenv(param0: string, param1: string, param2: number): void;
						public static getenv(param0: string): string;
						public static getBuildInfo(): string;
						public static getVersion(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Base {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Base>;
						public static getMessage(param0: number, param1: number, param2: number): string;
						public static setTempDir(param0: string): void;
						public static debug(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4BlobKey extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobKey>;
						public constructor();
						public close(): void;
						public constructor(param0: number);
						public toString(): string;
						public constructor(param0: string);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4BlobReadStream extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobReadStream>;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public getLength(): number;
						public read(param0: number): androidNative.Array<number>;
						public seek(param0: number): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export abstract class C4BlobStore extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore>;
						public openReadStream(param0: com.couchbase.lite.internal.core.C4BlobKey): com.couchbase.lite.internal.core.C4BlobReadStream;
						public openWriteStream(): com.couchbase.lite.internal.core.C4BlobWriteStream;
						public static open(param0: string, param1: number): com.couchbase.lite.internal.core.C4BlobStore;
						public getSize(param0: com.couchbase.lite.internal.core.C4BlobKey): number;
						public create(param0: androidNative.Array<number>): com.couchbase.lite.internal.core.C4BlobKey;
						public delete(): void;
						public close(): void;
						public static getUnmanagedBlobStore(param0: number): com.couchbase.lite.internal.core.C4BlobStore;
						public getContents(param0: com.couchbase.lite.internal.core.C4BlobKey): com.couchbase.lite.internal.fleece.FLSliceResult;
						public delete(param0: com.couchbase.lite.internal.core.C4BlobKey): void;
						public getFilePath(param0: com.couchbase.lite.internal.core.C4BlobKey): string;
					}
					export module C4BlobStore {
						export class ManagedC4BlobStore extends com.couchbase.lite.internal.core.C4BlobStore {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore.ManagedC4BlobStore>;
							public close(): void;
							public finalize(): void;
						}
						export class UnmanagedC4BlobStore extends com.couchbase.lite.internal.core.C4BlobStore {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore.UnmanagedC4BlobStore>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4BlobWriteStream extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobWriteStream>;
						public close(): void;
						public write(param0: androidNative.Array<number>, param1: number): void;
						public install(): void;
						public write(param0: androidNative.Array<number>): void;
						public computeBlobKey(): com.couchbase.lite.internal.core.C4BlobKey;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Constants {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants>;
					}
					export module C4Constants {
						export class DatabaseFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.DatabaseFlags>;
							public static CREATE: number;
							public static READ_ONLY: number;
							public static AUTO_COMPACT: number;
							public static SHARED_KEYS: number;
							public static NO_UPGRADE: number;
							public static NON_OBSERVABLE: number;
						}
						export class DocumentFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.DocumentFlags>;
							public static DELETED: number;
							public static CONFLICTED: number;
							public static HAS_ATTACHMENTS: number;
							public static EXISTS: number;
						}
						export class EncryptionAlgorithm {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EncryptionAlgorithm>;
							public static NONE: number;
							public static AES256: number;
						}
						export class EncryptionKeySize {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EncryptionKeySize>;
							public static AES256: number;
						}
						export class EnumeratorFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EnumeratorFlags>;
							public static DESCENDING: number;
							public static UNSORTED: number;
							public static INCLUDE_DELETED: number;
							public static INCLUDE_NON_CONFLICTED: number;
							public static INCLUDE_BODIES: number;
							public static INCLUDE_REV_HISTORY: number;
							public static DEFAULT: number;
						}
						export class ErrorDomain {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.ErrorDomain>;
							public static LITE_CORE: number;
							public static POSIX: number;
							public static SQLITE: number;
							public static FLEECE: number;
							public static NETWORK: number;
							public static WEB_SOCKET: number;
							public static MBED_TLS: number;
							public static UNUSED: number;
							public static MAX_ERROR_DOMAINS: number;
						}
						export class HttpError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.HttpError>;
							public static STATUS_MIN: number;
							public static SWITCH_PROTOCOL: number;
							public static MULTIPLE_CHOICE: number;
							public static AUTH_REQUIRED: number;
							public static FORBIDDEN: number;
							public static NOT_FOUND: number;
							public static CONFLICT: number;
							public static PROXY_AUTH_REQUIRED: number;
							public static ENTITY_TOO_LARGE: number;
							public static IM_A_TEAPOT: number;
							public static INTERNAL_SERVER_ERROR: number;
							public static NOT_IMPLEMENTED: number;
							public static SERVICE_UNAVAILABLE: number;
							public static STATUS_MAX: number;
						}
						export class IndexType {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.IndexType>;
							public static VALUE: number;
							public static FULL_TEXT: number;
							public static ARRAY: number;
							public static PREDICTIVE: number;
						}
						export class LiteCoreError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LiteCoreError>;
							public static SUCCESS: number;
							public static ASSERTION_FAILED: number;
							public static UNIMPLEMENTED: number;
							public static UNSUPPORTED_ENCRYPTION: number;
							public static BAD_REVISION_ID: number;
							public static CORRUPT_REVISION_DATA: number;
							public static NOT_OPEN: number;
							public static NOT_FOUND: number;
							public static CONFLICT: number;
							public static INVALID_PARAMETER: number;
							public static UNEXPECTED_ERROR: number;
							public static CANT_OPEN_FILE: number;
							public static IO_ERROR: number;
							public static MEMORY_ERROR: number;
							public static NOT_WRITABLE: number;
							public static CORRUPT_DATA: number;
							public static BUSY: number;
							public static NOT_IN_TRANSACTION: number;
							public static TRANSACTION_NOT_CLOSED: number;
							public static UNSUPPORTED: number;
							public static NOT_A_DATABASE_FILE: number;
							public static WRONG_FORMAT: number;
							public static CRYPTO: number;
							public static INVALID_QUERY: number;
							public static MISSING_INDEX: number;
							public static INVALID_QUERY_PARAM: number;
							public static REMOTE_ERROR: number;
							public static DATABASE_TOO_OLD: number;
							public static DATABASE_TOO_NEW: number;
							public static BAD_DOC_ID: number;
							public static CANT_UPGRADE_DATABASE: number;
							public static DELTA_BASE_UNKNOWN: number;
							public static CORRUPT_DELTA: number;
							public static UNUSED: number;
							public static MAX_ERROR_CODES: number;
						}
						export class LogDomain {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LogDomain>;
							public static DATABASE: string;
							public static SQL: string;
							public static ZIP: string;
							public static QUERY: string;
							public static WEB_SOCKET: string;
							public static BLIP: string;
							public static TLS: string;
							public static SYNC: string;
							public static SYNC_BUSY: string;
							public static LISTENER: string;
						}
						export class LogLevel {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LogLevel>;
							public static DEBUG: number;
							public static VERBOSE: number;
							public static INFO: number;
							public static WARNING: number;
							public static ERROR: number;
							public static NONE: number;
						}
						export class NetworkError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.NetworkError>;
							public static DNS_FAILURE: number;
							public static UNKNOWN_HOST: number;
							public static TIMEOUT: number;
							public static INVALID_URL: number;
							public static TOO_MANY_REDIRECTS: number;
							public static TLS_HANDSHAKE_FAILED: number;
							public static TLS_CERT_EXPIRED: number;
							public static TLS_CERT_UNTRUSTED: number;
							public static TLS_CLIENT_CERT_REQUIRED: number;
							public static TLS_CLIENT_CERT_REJECTED: number;
							public static TLS_CERT_UNKNOWN_ROOT: number;
							public static INVALID_REDIRECT: number;
							public static UNKNOWN: number;
							public static TLS_CERT_REVOKED: number;
							public static TLS_CERT_NAME_MISMATCH: number;
							public static NETWORK_RESET: number;
							public static CONNECTION_ABORTED: number;
							public static CONNECTION_RESET: number;
							public static CONNECTION_REFUSED: number;
							public static NETWORK_DOWN: number;
							public static NETWORK_UNREACHABLE: number;
							public static NOT_CONNECTED: number;
							public static HOST_DOWN: number;
							public static HOST_UNREACHABLE: number;
							public static ADDRESS_NOT_AVAILABLE: number;
							public static BROKEN_PIPE: number;
							public static UNUSED: number;
						}
						export class RevisionFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.RevisionFlags>;
							public static DELETED: number;
							public static LEAF: number;
							public static NEW: number;
							public static HAS_ATTACHMENTS: number;
							public static KEEP_BODY: number;
							public static IS_CONFLICT: number;
							public static CLOSED: number;
							public static PURGED: number;
						}
						export class WebSocketError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.WebSocketError>;
							public static NORMAL: number;
							public static GOING_AWAY: number;
							public static PROTOCOL_ERROR: number;
							public static DATA_ERROR: number;
							public static NO_CODE: number;
							public static ABNORMAL_CLOSE: number;
							public static BAD_MESSAGE_FORMAT: number;
							public static POLICY_ERROR: number;
							public static MESSAGE_TO_BIG: number;
							public static MISSING_EXTENSION: number;
							public static CANT_FULFILL: number;
							public static TLS_FAILURE: number;
							public static USER: number;
							public static USER_TRANSIENT: number;
							public static USER_PERMANENT: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export abstract class C4Database extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database>;
						public static DB_EXTENSION: string;
						public getSharedFleeceEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public closeDb(): void;
						public get(param0: string, param1: boolean): com.couchbase.lite.internal.core.C4Document;
						public close(): void;
						public getDocumentCount(): number;
						public createN1qlQuery(param0: string): com.couchbase.lite.internal.core.C4Query;
						public getPublicUUID(): androidNative.Array<number>;
						public static getUnmanagedDatabase(param0: number): com.couchbase.lite.internal.core.C4Database;
						public purgeDoc(param0: string): void;
						public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
						public endTransaction(param0: boolean): void;
						public getDbName(): string;
						public setCookie(param0: java.net.URI, param1: string): void;
						public getDbDirectory(): string;
						public beginTransaction(): void;
						public performMaintenance(param0: com.couchbase.lite.MaintenanceType): boolean;
						public createDocumentObserver(param0: string, param1: any, param2: com.couchbase.lite.internal.core.C4DocumentObserverListener): com.couchbase.lite.internal.core.C4DocumentObserver;
						public createDatabaseObserver(param0: any, param1: com.couchbase.lite.internal.core.C4DatabaseObserverListener): com.couchbase.lite.internal.core.C4DatabaseObserver;
						public createJsonQuery(param0: string): com.couchbase.lite.internal.core.C4Query;
						public getDbFileName(): string;
						public create(param0: string, param1: com.couchbase.lite.internal.fleece.FLSliceResult, param2: number): com.couchbase.lite.internal.core.C4Document;
						public deleteIndex(param0: string): void;
						public deleteDb(): void;
						public constructor();
						public getIndexesInfo(): com.couchbase.lite.internal.fleece.FLValue;
						public static getDatabase(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): com.couchbase.lite.internal.core.C4Database;
						public createIndex(param0: string, param1: string, param2: com.couchbase.lite.AbstractIndex.QueryLanguage, param3: com.couchbase.lite.AbstractIndex.IndexType, param4: string, param5: boolean): void;
						public getExpiration(param0: string): number;
						public createTargetReplicator(param0: com.couchbase.lite.internal.core.C4Socket, param1: number, param2: number, param3: androidNative.Array<number>, param4: com.couchbase.lite.internal.core.C4ReplicatorListener, param5: any): com.couchbase.lite.internal.core.C4Replicator;
						public static copyDb(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
						public createLocalReplicator(param0: com.couchbase.lite.internal.core.C4Database, param1: number, param2: number, param3: androidNative.Array<number>, param4: com.couchbase.lite.internal.core.C4ReplicatorListener, param5: com.couchbase.lite.internal.core.C4ReplicationFilter, param6: com.couchbase.lite.internal.core.C4ReplicationFilter, param7: com.couchbase.lite.AbstractReplicator): com.couchbase.lite.internal.core.C4Replicator;
						public setExpiration(param0: string, param1: number): void;
						public createRemoteReplicator(param0: string, param1: string, param2: number, param3: string, param4: string, param5: number, param6: number, param7: androidNative.Array<number>, param8: com.couchbase.lite.internal.core.C4ReplicatorListener, param9: com.couchbase.lite.internal.core.C4ReplicationFilter, param10: com.couchbase.lite.internal.core.C4ReplicationFilter, param11: com.couchbase.lite.AbstractReplicator, param12: com.couchbase.lite.internal.SocketFactory, param13: number): com.couchbase.lite.internal.core.C4Replicator;
						public getCookies(param0: java.net.URI): string;
						public constructor(param0: number);
						public getDbPath(): string;
						public get(param0: string): com.couchbase.lite.internal.core.C4Document;
						public static deleteNamedDb(param0: string, param1: string): void;
						public put(param0: androidNative.Array<number>, param1: string, param2: number, param3: boolean, param4: boolean, param5: androidNative.Array<string>, param6: boolean, param7: number, param8: number): com.couchbase.lite.internal.core.C4Document;
						public rekey(param0: number, param1: androidNative.Array<number>): void;
						public static getDatabaseFile(param0: java.io.File, param1: string): java.io.File;
					}
					export module C4Database {
						export class ManagedC4Database extends com.couchbase.lite.internal.core.C4Database {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.ManagedC4Database>;
							public close(): void;
							public finalize(): void;
						}
						export class UnmanagedC4Database extends com.couchbase.lite.internal.core.C4Database {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.UnmanagedC4Database>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DatabaseChange {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DatabaseChange>;
						public getSequence(): number;
						public isExternal(): boolean;
						public static createC4DatabaseChange(param0: string, param1: string, param2: number, param3: boolean): com.couchbase.lite.internal.core.C4DatabaseChange;
						public getRevID(): string;
						public getDocID(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DatabaseObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DatabaseObserver>;
						public close(): void;
						public getChanges(param0: number): androidNative.Array<com.couchbase.lite.internal.core.C4DatabaseChange>;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DatabaseObserverListener {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DatabaseObserverListener>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4DatabaseObserverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							callback(param0: com.couchbase.lite.internal.core.C4DatabaseObserver, param1: any): void;
						});
						public constructor();
						public callback(param0: com.couchbase.lite.internal.core.C4DatabaseObserver, param1: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DocEnumerator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocEnumerator>;
						public close(): void;
						public getDocument(): com.couchbase.lite.internal.core.C4Document;
						public next(): boolean;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Document extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Document>;
						public getSequence(): number;
						public selectNextLeafRevision(param0: boolean, param1: boolean): void;
						public getSelectedSequence(): number;
						public static dictContainsBlobs(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: com.couchbase.lite.internal.fleece.FLSharedKeys): boolean;
						public selectNextRevision(): boolean;
						public isSelectedRevFlags(param0: number): boolean;
						public close(): void;
						public update(param0: androidNative.Array<number>, param1: number): com.couchbase.lite.internal.core.C4Document;
						public resolveConflict(param0: string, param1: string, param2: androidNative.Array<number>, param3: number): void;
						public getSelectedRevID(): string;
						public getSelectedFlags(): number;
						public getSelectedBody2(): com.couchbase.lite.internal.fleece.FLDict;
						public deleted(): boolean;
						public getDocID(): string;
						public update(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: number): com.couchbase.lite.internal.core.C4Document;
						public finalize(): void;
						public exists(): boolean;
						public getFlags(): number;
						public save(param0: number): void;
						public getRevID(): string;
						public bodyAsJSON(param0: boolean): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DocumentEnded {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentEnded>;
						public getSequence(): number;
						public getErrorDomain(): number;
						public constructor(param0: string, param1: string, param2: number, param3: number, param4: number, param5: number, param6: number, param7: boolean);
						public getErrorCode(): number;
						public errorIsTransient(): boolean;
						public isConflicted(): boolean;
						public getFlags(): number;
						public getErrorInternalInfo(): number;
						public getC4Error(): com.couchbase.lite.internal.core.C4Error;
						public getRevID(): string;
						public getDocID(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DocumentObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserver>;
						public close(): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4DocumentObserverListener {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserverListener>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4DocumentObserverListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							callback(param0: com.couchbase.lite.internal.core.C4DocumentObserver, param1: string, param2: number, param3: any): void;
						});
						public constructor();
						public callback(param0: com.couchbase.lite.internal.core.C4DocumentObserver, param1: string, param2: number, param3: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Error {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Error>;
						public constructor();
						public getDomain(): number;
						public getCode(): number;
						public getInternalInfo(): number;
						public constructor(param0: number, param1: number, param2: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4FullTextMatch extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4FullTextMatch>;
						public term(): number;
						public start(): number;
						public length(): number;
						public property(): number;
						public close(): void;
						public dataSource(): number;
						public toList(): java.util.List<java.lang.Long>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Key {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Key>;
						public static getPbkdf2Key(param0: string): androidNative.Array<number>;
						public static getCoreKey(param0: string): androidNative.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log>;
						public static forceCallbackLevel(param0: com.couchbase.lite.LogLevel): void;
						public static getCallbackLevel(): com.couchbase.lite.LogLevel;
						public static setLevels(param0: number, param1: androidNative.Array<string>): void;
						public static logCallback(param0: string, param1: number, param2: string): void;
						public static getBinaryFileLevel(): number;
						public static log(param0: string, param1: number, param2: string): void;
						public static setCallbackLevel(param0: com.couchbase.lite.LogLevel): void;
						public static registerListener(param0: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.internal.core.C4Log.RawLog>): void;
						public static getLevel(param0: string): number;
						public static writeToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
						public static setBinaryFileLevel(param0: number): void;
					}
					export module C4Log {
						export class RawLog {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log.RawLog>;
							public domain: string;
							public level: number;
							public message: string;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export abstract class C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4NativePeer>;
						public releasePeer(): void;
						public getPeer(): number;
						public constructor();
						public getPeerLock(): any;
						public constructor(param0: number);
						public releasePeer(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public withPeer(param0: any, param1: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): any;
						public getPeerUnchecked(): number;
						public toString(): string;
						public setPeer(param0: number): void;
						public withPeerOrNull(param0: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Prediction {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Prediction>;
						public static unregister(param0: string): void;
						public static register(param0: string, param1: com.couchbase.lite.internal.core.C4PredictiveModel): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4PredictiveModel {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4PredictiveModel>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4PredictiveModel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							predict(param0: number, param1: number): number;
						});
						public constructor();
						public predict(param0: number, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Query extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query>;
						public getColumnNameForIndex(param0: number): string;
						public close(): void;
						public static deleteIndex(param0: com.couchbase.lite.internal.core.C4Database, param1: string): void;
						public static getIndexInfo(param0: com.couchbase.lite.internal.core.C4Database): com.couchbase.lite.internal.fleece.FLValue;
						public getFullTextMatched(param0: com.couchbase.lite.internal.core.C4FullTextMatch): androidNative.Array<number>;
						public static createIndex(param0: com.couchbase.lite.internal.core.C4Database, param1: string, param2: string, param3: com.couchbase.lite.AbstractIndex.QueryLanguage, param4: com.couchbase.lite.AbstractIndex.IndexType, param5: string, param6: boolean): void;
						public run(param0: com.couchbase.lite.internal.core.C4QueryOptions, param1: com.couchbase.lite.internal.fleece.FLSliceResult): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public explain(): string;
						public getColumnCount(): number;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4QueryEnumerator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryEnumerator>;
						public getMissingColumns(): number;
						public seek(param0: number): boolean;
						public getColumns(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public close(): void;
						public refresh(): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public copy(): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public getRowCount(): number;
						public next(): boolean;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4QueryOptions {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryOptions>;
						public constructor();
						public isRankFullText(): boolean;
						public setRankFullText(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4RawDocument extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4RawDocument>;
						public close(): void;
						public meta(): string;
						public body(): androidNative.Array<number>;
						public key(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4ReplicationFilter {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicationFilter>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4ReplicationFilter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							validationFunction(param0: string, param1: string, param2: number, param3: number, param4: boolean, param5: com.couchbase.lite.AbstractReplicator): boolean;
						});
						public constructor();
						public validationFunction(param0: string, param1: string, param2: number, param3: number, param4: boolean, param5: com.couchbase.lite.AbstractReplicator): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4Replicator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator>;
						public static WEBSOCKET_SCHEME: string;
						public static WEBSOCKET_SECURE_CONNECTION_SCHEME: string;
						public static MESSAGE_SCHEME: string;
						public static C4_REPLICATOR_SCHEME_2: string;
						public static C4_REPLICATOR_TLS_SCHEME_2: string;
						public static REPLICATOR_OPTION_DOC_IDS: string;
						public static REPLICATOR_OPTION_CHANNELS: string;
						public static REPLICATOR_OPTION_FILTER: string;
						public static REPLICATOR_OPTION_FILTER_PARAMS: string;
						public static REPLICATOR_OPTION_SKIP_DELETED: string;
						public static REPLICATOR_OPTION_NO_INCOMING_CONFLICTS: string;
						public static REPLICATOR_OPTION_OUTGOING_CONFLICTS: string;
						public static REPLICATOR_CHECKPOINT_INTERVAL: string;
						public static REPLICATOR_OPTION_REMOTE_DB_UNIQUE_ID: string;
						public static REPLICATOR_OPTION_PROGRESS_LEVEL: string;
						public static REPLICATOR_OPTION_DISABLE_DELTAS: string;
						public static REPLICATOR_OPTION_MAX_RETRIES: string;
						public static REPLICATOR_OPTION_MAX_RETRY_INTERVAL: string;
						public static REPLICATOR_OPTION_ENABLE_AUTO_PURGE: string;
						public static REPLICATOR_OPTION_ROOT_CERTS: string;
						public static REPLICATOR_OPTION_PINNED_SERVER_CERT: string;
						public static REPLICATOR_OPTION_SELF_SIGNED_SERVER_CERT: string;
						public static REPLICATOR_OPTION_EXTRA_HEADERS: string;
						public static REPLICATOR_OPTION_COOKIES: string;
						public static REPLICATOR_OPTION_AUTHENTICATION: string;
						public static REPLICATOR_OPTION_PROXY_SERVER: string;
						public static REPLICATOR_HEARTBEAT_INTERVAL: string;
						public static SOCKET_OPTION_WS_PROTOCOLS: string;
						public static REPLICATOR_AUTH_TYPE: string;
						public static REPLICATOR_AUTH_USER_NAME: string;
						public static REPLICATOR_AUTH_PASSWORD: string;
						public static REPLICATOR_AUTH_CLIENT_CERT: string;
						public static REPLICATOR_AUTH_CLIENT_CERT_KEY: string;
						public static REPLICATOR_AUTH_TOKEN: string;
						public static AUTH_TYPE_BASIC: string;
						public static AUTH_TYPE_SESSION: string;
						public static AUTH_TYPE_OPEN_ID_CONNECT: string;
						public static AUTH_TYPE_FACEBOOK: string;
						public static AUTH_TYPE_CLIENT_CERT: string;
						public static PROGRESS_OVERALL: number;
						public static PROGRESS_PER_DOC: number;
						public static PROGRESS_PER_ATTACHMENT: number;
						public getPendingDocIDs(): java.util.Set<string>;
						public close(): void;
						public setHostReachable(param0: boolean): void;
						public start(param0: boolean): void;
						public getStatus(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public setOptions(param0: androidNative.Array<number>): void;
						public isDocumentPending(param0: string): boolean;
						public setProgressLevel(param0: number): void;
						public stop(): void;
						public toString(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4ReplicatorListener {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicatorListener>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4ReplicatorListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
							documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: androidNative.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
						});
						public constructor();
						public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
						public documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: androidNative.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4ReplicatorMode {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicatorMode>;
						public static C4_DISABLED: com.couchbase.lite.internal.core.C4ReplicatorMode;
						public static C4_PASSIVE: com.couchbase.lite.internal.core.C4ReplicatorMode;
						public static C4_ONE_SHOT: com.couchbase.lite.internal.core.C4ReplicatorMode;
						public static C4_CONTINUOUS: com.couchbase.lite.internal.core.C4ReplicatorMode;
						public static values(): androidNative.Array<com.couchbase.lite.internal.core.C4ReplicatorMode>;
						public static valueOf(param0: string): com.couchbase.lite.internal.core.C4ReplicatorMode;
						public getVal(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4ReplicatorStatus {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicatorStatus>;
						public getProgressUnitsTotal(): number;
						public getProgressDocumentCount(): number;
						public getErrorDomain(): number;
						public getErrorCode(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public copy(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public getActivityLevel(): number;
						public getErrorInternalInfo(): number;
						public getC4Error(): com.couchbase.lite.internal.core.C4Error;
						public constructor(param0: number, param1: number, param2: number);
						public getProgressUnitsCompleted(): number;
						public toString(): string;
					}
					export module C4ReplicatorStatus {
						export class ActivityLevel {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicatorStatus.ActivityLevel>;
							public static STOPPED: number;
							public static OFFLINE: number;
							public static CONNECTING: number;
							public static IDLE: number;
							public static BUSY: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export abstract class C4Socket extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket>;
						public static WEB_SOCKET_CLIENT_FRAMING: number;
						public static NO_FRAMING: number;
						public static WEB_SOCKET_SERVER_FRAMING: number;
						public constructor();
						public send(param0: androidNative.Array<number>): void;
						public gotHTTPResponse(param0: number, param1: androidNative.Array<number>): void;
						public opened(): void;
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public closeRequested(param0: number, param1: string): void;
						public requestClose(param0: number, param1: string): void;
						public completedWrite(param0: number): void;
						public received(param0: androidNative.Array<number>): void;
						public closed(param0: number, param1: number, param2: string): void;
						public constructor(param0: number);
						public openSocket(): void;
						public closeSocket(): void;
						public completedReceive(param0: number): void;
						public isC4SocketClosing(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class CBLVersion {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.CBLVersion>;
						public static getSysInfo(): string;
						public static getVersionInfo(): string;
						public static getLibInfo(): string;
						public static getUserAgent(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class NativeContext<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.NativeContext<any>>;
						public getObjFromContext(param0: number): T;
						public constructor();
						public reserveKey(): number;
						public bind(param0: number, param1: T): void;
						public unbind(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class SharedKeys {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.SharedKeys>;
						public constructor(param0: com.couchbase.lite.internal.core.C4Database);
						public getFLSharedKeys(): com.couchbase.lite.internal.fleece.FLSharedKeys;
						public constructor(param0: com.couchbase.lite.internal.fleece.FLSharedKeys);
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export abstract class AbstractExecutionService extends com.couchbase.lite.internal.exec.ExecutionService {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.AbstractExecutionService>;
						public constructor(param0: java.util.concurrent.ThreadPoolExecutor);
						public dumpState(): void;
						public getConcurrentExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public static throttled(): boolean;
						public getSerialExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public getDefaultExecutor(): java.util.concurrent.Executor;
						public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
						public static dumpThreads(): void;
						public cancelDelayedTask(param0: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class CBLExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.CBLExecutor>;
						public dumpState(): void;
						public execute(param0: java.lang.Runnable): void;
						public constructor(param0: string, param1: number, param2: number, param3: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class ClientTask<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.ClientTask<any>>;
						public constructor(param0: java.util.concurrent.Callable<T>);
						public execute(param0: number, param1: java.util.concurrent.TimeUnit): void;
						public execute(): void;
						public getFailure(): java.lang.Exception;
						public static dumpState(): void;
						public getResult(): T;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class ConcurrentExecutor extends com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.ConcurrentExecutor>;
						public execute(param0: java.lang.Runnable): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public dumpState(param0: com.couchbase.lite.internal.exec.InstrumentedTask): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class ExecutionService {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.ExecutionService>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.exec.ExecutionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getDefaultExecutor(): java.util.concurrent.Executor;
							getSerialExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
							getConcurrentExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
							postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
							cancelDelayedTask(param0: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
						});
						public constructor();
						public getConcurrentExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public getSerialExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public getDefaultExecutor(): java.util.concurrent.Executor;
						public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
						public cancelDelayedTask(param0: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
					}
					export module ExecutionService {
						export class Cancellable {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.ExecutionService.Cancellable>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.exec.ExecutionService$Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								cancel(): void;
							});
							public constructor();
							public cancel(): void;
						}
						export class CloseableExecutor {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.exec.ExecutionService$CloseableExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							});
							public constructor();
							public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						}
						export module CloseableExecutor {
							export class ExecutorClosedException {
								public static class: java.lang.Class<com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor.ExecutorClosedException>;
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class InstrumentedTask {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.InstrumentedTask>;
						public run(): void;
						public constructor(param0: java.lang.Runnable, param1: java.lang.Runnable);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module exec {
					export class SerialExecutor extends com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.SerialExecutor>;
						public execute(param0: java.lang.Runnable): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public dumpState(param0: com.couchbase.lite.internal.exec.InstrumentedTask): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class Encodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.Encodable>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.fleece.Encodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
						});
						public constructor();
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLArray {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArray>;
						public count(): number;
						public get(param0: number): com.couchbase.lite.internal.fleece.FLValue;
						public constructor(param0: number);
						public asTypedArray(): java.util.List<any>;
						public asArray(): java.util.List<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export abstract class FLArrayIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator>;
						public constructor();
						public begin(param0: com.couchbase.lite.internal.fleece.FLArray): void;
						public constructor(param0: number);
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public static getUnmanagedArrayIterator(param0: number): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public static getManagedArrayIterator(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public next(): boolean;
						public getValueAt(param0: number): com.couchbase.lite.internal.fleece.FLValue;
					}
					export module FLArrayIterator {
						export class ManagedFLArrayIterator extends com.couchbase.lite.internal.fleece.FLArrayIterator {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator.ManagedFLArrayIterator>;
							public close(): void;
							public finalize(): void;
						}
						export class UnmanagedFLArrayIterator extends com.couchbase.lite.internal.fleece.FLArrayIterator {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator.UnmanagedFLArrayIterator>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLConstants {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLConstants>;
					}
					export module FLConstants {
						export class Error {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLConstants.Error>;
							public static NO_ERROR: number;
							public static MEMORY_ERROR: number;
							public static OUT_OF_RANGE: number;
							public static INVALID_DATA: number;
							public static ENCODE_ERROR: number;
							public static JSON_ERROR: number;
							public static UNKNOWN_VALUE: number;
							public static INTERNAL_ERROR: number;
							public static NOT_FOUND: number;
						}
						export class ValueType {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLConstants.ValueType>;
							public static UNDEFINED: number;
							public static NULL: number;
							public static BOOLEAN: number;
							public static NUMBER: number;
							public static STRING: number;
							public static DATA: number;
							public static ARRAY: number;
							public static DICT: number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLDict {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDict>;
						public asDict(): java.util.Map<string,any>;
						public count(): number;
						public toFLValue(): com.couchbase.lite.internal.fleece.FLValue;
						public constructor(param0: number);
						public get(param0: string): com.couchbase.lite.internal.fleece.FLValue;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLDictIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDictIterator>;
						public constructor();
						public begin(param0: com.couchbase.lite.internal.fleece.FLDict): void;
						public close(): void;
						public constructor(param0: number);
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public getCount(): number;
						public next(): boolean;
						public getKeyString(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLEncodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncodable>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLEncodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
						});
						public constructor();
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export abstract class FLEncoder extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder>;
						public arguments: java.util.Map<string,any>;
						public writeKey(param0: string): boolean;
						public finish2Unmanaged(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public beginArray(param0: number): boolean;
						public close(): void;
						public writeString(param0: string): boolean;
						public finish(): androidNative.Array<number>;
						public getArg(param0: string): any;
						public endArray(): boolean;
						public toString(): string;
						public static getUnmanagedEncoder(param0: number): com.couchbase.lite.internal.fleece.FLEncoder;
						public static getManagedEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public endDict(): boolean;
						public setArg(param0: string, param1: any): com.couchbase.lite.internal.fleece.FLEncoder;
						public writeData(param0: androidNative.Array<number>): boolean;
						public beginDict(param0: number): boolean;
						public write(param0: java.util.List<any>): boolean;
						public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public writeValue(param0: any): boolean;
						public writeNull(): boolean;
						public write(param0: java.util.Map<string,any>): boolean;
						public reset(): void;
					}
					export module FLEncoder {
						export class ManagedFLEncoder extends com.couchbase.lite.internal.fleece.FLEncoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.ManagedFLEncoder>;
							public close(): void;
							public finalize(): void;
						}
						export class UnmanagedFLEncoder extends com.couchbase.lite.internal.fleece.FLEncoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.UnmanagedFLEncoder>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLSharedKeys {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSharedKeys>;
						public constructor(param0: number);
						public getHandle(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export abstract class FLSliceResult extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult>;
						public static getUnmanagedSliceResult(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public static getUnmanagedSliceResult(param0: number): com.couchbase.lite.internal.fleece.FLSliceResult;
						public getSize(): number;
						public static getManagedSliceResult(param0: number): com.couchbase.lite.internal.fleece.FLSliceResult;
						public close(): void;
						public static getManagedSliceResult(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public getBuf(): androidNative.Array<number>;
						public toString(): string;
						public getHandle(): number;
					}
					export module FLSliceResult {
						export class ManagedFLSliceResult extends com.couchbase.lite.internal.fleece.FLSliceResult {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult.ManagedFLSliceResult>;
							public close(): void;
							public finalize(): void;
						}
						export class UnmanagedFLSliceResult extends com.couchbase.lite.internal.fleece.FLSliceResult {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult.UnmanagedFLSliceResult>;
							public close(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class FLValue {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLValue>;
						public asBool(): boolean;
						public isInteger(): boolean;
						public static getJSONForJSON5(param0: string): string;
						public asObject(): any;
						public static fromData(param0: com.couchbase.lite.internal.fleece.FLSliceResult): com.couchbase.lite.internal.fleece.FLValue;
						public asInt(): number;
						public asDict(): java.util.Map<string,any>;
						public asData(): androidNative.Array<number>;
						public static toObject(param0: com.couchbase.lite.internal.fleece.FLValue): any;
						public getType(): number;
						public isUnsigned(): boolean;
						public toStr(): string;
						public isNumber(): boolean;
						public asFLDict(): com.couchbase.lite.internal.fleece.FLDict;
						public static fromData(param0: androidNative.Array<number>): com.couchbase.lite.internal.fleece.FLValue;
						public constructor(param0: number);
						public asDouble(): number;
						public asTypedArray(): java.util.List<any>;
						public asString(): string;
						public asArray(): java.util.List<any>;
						public toJSON5(): string;
						public asUnsigned(): number;
						public asFloat(): number;
						public isDouble(): boolean;
						public toJSON(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class JSONEncoder extends com.couchbase.lite.internal.fleece.FLEncoder.ManagedFLEncoder {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.JSONEncoder>;
						public finishJSON(): string;
						public constructor();
						public finish2Unmanaged(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public finish(): androidNative.Array<number>;
						public constructor(param0: number);
						public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class MArray extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MArray>;
						public initAsCopyOf(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean): void;
						public getBaseArray(): com.couchbase.lite.internal.fleece.FLArray;
						public clear(): boolean;
						public constructor();
						public count(): number;
						public set(param0: number, param1: any): boolean;
						public remove(param0: number, param1: number): boolean;
						public insert(param0: number, param1: any): boolean;
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean): void;
						public append(param0: any): boolean;
						public get(param0: number): com.couchbase.lite.internal.fleece.MValue;
						public initAsCopyOf(param0: com.couchbase.lite.internal.fleece.MArray, param1: boolean): void;
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection): void;
						public remove(param0: number): boolean;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export abstract class MCollection extends com.couchbase.lite.internal.fleece.Encodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MCollection>;
						public initAsCopyOf(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean): void;
						public mutate(): void;
						public constructor();
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean): void;
						public setSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MValue): void;
						public getContext(): com.couchbase.lite.internal.fleece.MContext;
						public isMutated(): boolean;
						public hasMutableChildren(): boolean;
						public isMutable(): boolean;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class MContext {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MContext>;
						public static NULL: com.couchbase.lite.internal.fleece.MContext;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class MDict extends com.couchbase.lite.internal.fleece.MCollection implements java.lang.Iterable<string>  {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MDict>;
						public clear(): boolean;
						public constructor();
						public count(): number;
						public remove(param0: string): boolean;
						public getKeys(): java.util.List<string>;
						public constructor(param0: com.couchbase.lite.internal.fleece.MDict, param1: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection);
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean): void;
						public set(param0: string, param1: com.couchbase.lite.internal.fleece.MValue): boolean;
						public contains(param0: string): boolean;
						public iterator(): java.util.Iterator<string>;
						public get(param0: string): com.couchbase.lite.internal.fleece.MValue;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class MRoot extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MRoot>;
						public encode(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public constructor();
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: com.couchbase.lite.internal.fleece.FLValue, param2: boolean);
						public asNative(): any;
						public isMutated(): boolean;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module fleece {
					export class MValue extends com.couchbase.lite.internal.fleece.Encodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MValue>;
						public mutate(): void;
						public asNative(param0: com.couchbase.lite.internal.fleece.MCollection): any;
						public static registerDelegate(param0: com.couchbase.lite.internal.fleece.MValue.Delegate): void;
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public isEmpty(): boolean;
						public constructor(param0: any);
						public isMutated(): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.FLValue);
						public static getRegisteredDelegate(): com.couchbase.lite.internal.fleece.MValue.Delegate;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
						public finalize(): void;
					}
					export module MValue {
						export class Delegate {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MValue.Delegate>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.MValue$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								toNative(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
								collectionFromNative(param0: any): com.couchbase.lite.internal.fleece.MCollection;
								encodeNative(param0: com.couchbase.lite.internal.fleece.FLEncoder, param1: any): void;
							});
							public constructor();
							public encodeNative(param0: com.couchbase.lite.internal.fleece.FLEncoder, param1: any): void;
							public collectionFromNative(param0: any): com.couchbase.lite.internal.fleece.MCollection;
							public toNative(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export abstract class AbstractCBLTrustManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLTrustManager>;
						public useCBLTrustManagement(): boolean;
						public getDefaultTrustManager(): javax.net.ssl.X509TrustManager;
						public asList(param0: androidNative.Array<java.security.cert.X509Certificate>): java.util.List<java.security.cert.X509Certificate>;
						public getAcceptedIssuers(): androidNative.Array<java.security.cert.X509Certificate>;
						public notifyListener(param0: java.util.List<java.security.cert.X509Certificate>): void;
						public cBLServerTrustCheck(param0: java.util.List<java.security.cert.X509Certificate>, param1: string): void;
						public constructor(param0: androidNative.Array<number>, param1: boolean, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public checkClientTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export abstract class AbstractCBLWebSocket extends com.couchbase.lite.internal.core.C4Socket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket>;
						public static DEFAULT_HEARTBEAT_SEC: number;
						public constructor();
						public handleClose(param0: java.lang.Throwable): boolean;
						public close(): void;
						public send(param0: androidNative.Array<number>): void;
						public getOptions(): java.util.Map<string,any>;
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public handleCloseCause(param0: java.lang.Throwable): number;
						public toString(): string;
						public requestClose(param0: number, param1: string): void;
						public constructor(param0: number);
						public constructor(param0: number, param1: java.net.URI, param2: androidNative.Array<number>, param3: com.couchbase.lite.internal.replicator.CBLCookieStore, param4: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public openSocket(): void;
						public closeSocket(): void;
						public static addKeyManager(param0: javax.net.ssl.KeyManager): number;
						public completedReceive(param0: number): void;
						public getOkHttpSocketFactory(): okhttp3.OkHttpClient;
					}
					export module AbstractCBLWebSocket {
						export class OkHttpRemote {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.OkHttpRemote>;
							public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
							public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
							public onMessage(param0: okhttp3.WebSocket, param1: string): void;
							public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
							public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
							public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
						}
						export class State {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State>;
							public static INIT: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static CONNECTING: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static OPEN: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static CLOSE_REQUESTED: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static CLOSING: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static CLOSED: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static FAILED: com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static valueOf(param0: string): com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State;
							public static values(): androidNative.Array<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.State>;
						}
						export class WebSocketCookieJar {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.WebSocketCookieJar>;
							public loadForRequest(param0: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
							public saveFromResponse(param0: okhttp3.HttpUrl, param1: java.util.List<okhttp3.Cookie>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class AndroidConnectivityObserver extends com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AndroidConnectivityObserver>;
						public constructor(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager, param1: com.couchbase.lite.internal.utils.Fn.Provider<com.couchbase.lite.internal.core.C4Replicator>);
						public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class CBLCookieStore {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLCookieStore>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.replicator.CBLCookieStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							parseCookies(param0: okhttp3.HttpUrl, param1: string): java.util.List<okhttp3.Cookie>;
							setCookie(param0: java.net.URI, param1: string): void;
							getCookies(param0: java.net.URI): string;
						});
						public constructor();
						public setCookie(param0: java.net.URI, param1: string): void;
						public getCookies(param0: java.net.URI): string;
						public static parseCookies(param0: okhttp3.HttpUrl, param1: string): java.util.List<okhttp3.Cookie>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class CBLTrustManager extends com.couchbase.lite.internal.replicator.AbstractCBLTrustManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLTrustManager>;
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string, param2: string): java.util.List<java.security.cert.X509Certificate>;
						public constructor(param0: androidNative.Array<number>, param1: boolean, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class CBLWebSocket extends com.couchbase.lite.internal.replicator.AbstractCBLWebSocket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLWebSocket>;
						public constructor();
						public handleClose(param0: java.lang.Throwable): boolean;
						public constructor(param0: number);
						public constructor(param0: number, param1: java.net.URI, param2: androidNative.Array<number>, param3: com.couchbase.lite.internal.replicator.CBLCookieStore, param4: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public handleCloseCause(param0: java.lang.Throwable): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class NetworkConnectivityManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.NetworkConnectivityManager>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.replicator.NetworkConnectivityManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isConnected(): boolean;
							registerObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
							unregisterObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						});
						public constructor();
						public unregisterObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public isConnected(): boolean;
						public registerObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
					}
					export module NetworkConnectivityManager {
						export class Observer {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.replicator.NetworkConnectivityManager$Observer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onConnectivityChanged(param0: boolean): void;
							});
							public constructor();
							public onConnectivityChanged(param0: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module support {
					export class Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.support.Log>;
						public static LOG_HEADER: string;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static formatStandardMessage(param0: string, param1: androidNative.Array<any>): string;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static getC4LevelForLogLevel(param0: com.couchbase.lite.LogLevel): number;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static getC4DomainForLoggingDomain(param0: com.couchbase.lite.LogDomain): string;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static getLogLevelForC4Level(param0: number): com.couchbase.lite.LogLevel;
						public static getLoggingDomainForC4Domain(param0: string): com.couchbase.lite.LogDomain;
						public static initLogging(): void;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static initLogging(param0: java.util.Map<string,string>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static warn(): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static lookupStandardMessage(param0: string): string;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class ClassUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.ClassUtils>;
						public static castOrNull(param0: java.lang.Class<any>, param1: any): any;
						public static objId(param0: any): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class FileUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.FileUtils>;
						public static eraseFileOrDir(param0: java.io.File): boolean;
						public static setPermissionRecursive(param0: java.io.File, param1: boolean, param2: boolean): boolean;
						public static verifyDir(param0: java.io.File): java.io.File;
						public static copyFile(param0: java.io.InputStream, param1: java.io.OutputStream): void;
						public static deleteContents(param0: java.io.File): boolean;
						public static eraseFileOrDir(param0: string): boolean;
						public static deleteContents(param0: string): boolean;
						public static verifyDir(param0: string): java.io.File;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class Fn {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
					export module Fn {
						export class Consumer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.Consumer<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$Consumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T): void;
							});
							public constructor();
							public accept(param0: T): void;
						}
						export class ConsumerThrows<T, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$ConsumerThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T): void;
							});
							public constructor();
							public accept(param0: T): void;
						}
						export class Function<T, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.Function<any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$Function interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): R;
							});
							public constructor();
							public apply(param0: T): R;
						}
						export class FunctionThrows<T, R, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$FunctionThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): R;
							});
							public constructor();
							public apply(param0: T): R;
						}
						export class Predicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.Predicate<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								test(param0: T): boolean;
							});
							public constructor();
							public test(param0: T): boolean;
						}
						export class Provider<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.Provider<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(): T;
							});
							public constructor();
							public get(): T;
						}
						export class ProviderThrows<T, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.ProviderThrows<any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$ProviderThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(): T;
							});
							public constructor();
							public get(): T;
						}
						export class Runner {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.Runner>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$Runner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								run(param0: java.lang.Runnable): void;
							});
							public constructor();
							public run(param0: java.lang.Runnable): void;
						}
						export class TaskThrows<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.TaskThrows<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$TaskThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								run(): void;
							});
							public constructor();
							public run(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class Internal {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Internal>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.utils.Internal interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							value(): string;
						});
						public constructor();
						public value(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class JSONUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.JSONUtils>;
						public static fromJSON(param0: org.json.JSONObject): java.util.Map<string,any>;
						public static fromJSON(param0: org.json.JSONArray): java.util.List<any>;
						public static toDate(param0: string): java.util.Date;
						public static toJSON(param0: any): any;
						public static toJSON(param0: java.util.Map<any,any>): org.json.JSONObject;
						public static toJSON(param0: java.util.List<any>): org.json.JSONArray;
						public static toJSONString(param0: java.util.Date): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class MathUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.MathUtils>;
						public static RANDOM: java.lang.ThreadLocal<java.util.Random>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class PlatformUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtils>;
						public static getAsset(param0: string): java.io.InputStream;
						public static getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
						public static getDecoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder;
					}
					export module PlatformUtils {
						export class Base64Decoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.PlatformUtils$Base64Decoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decodeString(param0: string): androidNative.Array<number>;
							});
							public constructor();
							public decodeString(param0: string): androidNative.Array<number>;
						}
						export class Base64Encoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.PlatformUtils$Base64Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								encodeToString(param0: androidNative.Array<number>): string;
							});
							public constructor();
							public encodeToString(param0: androidNative.Array<number>): string;
						}
						export class Delegate {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtils.Delegate>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.PlatformUtils$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getAsset(param0: string): java.io.InputStream;
								getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
								getDecoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder;
							});
							public constructor();
							public getAsset(param0: string): java.io.InputStream;
							public getDecoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder;
							public getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class PlatformUtilsDelegate extends com.couchbase.lite.internal.utils.PlatformUtils.Delegate {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtilsDelegate>;
						public constructor();
						public getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
						public getDecoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder;
						public getAsset(param0: string): java.io.InputStream;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class Preconditions {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Preconditions>;
						public static assertNotEmpty(param0: string, param1: string): string;
						public static assertThat(param0: any, param1: string, param2: com.couchbase.lite.internal.utils.Fn.Predicate<any>): any;
						public static assertNotNegative(param0: number, param1: string): number;
						public static assertNegative(param0: number, param1: string): number;
						public static assertZero(param0: number, param1: string): number;
						public static assertNotZero(param0: number, param1: string): number;
						public static assertPositive(param0: number, param1: string): number;
						public static assertNotNull(param0: any, param1: string): any;
						public static assertNotEmpty(param0: java.util.Collection<any>, param1: string): java.util.Collection<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class StateMachine<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.StateMachine<any>>;
						public assertState(param0: androidNative.Array<T>): boolean;
						public toString(): string;
						public setState(param0: T): boolean;
					}
					export module StateMachine {
						export class Builder<S>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.StateMachine.Builder<any>>;
							public addTransition(param0: S, param1: S, param2: androidNative.Array<S>): com.couchbase.lite.internal.utils.StateMachine.Builder<S>;
							public build(): com.couchbase.lite.internal.utils.StateMachine<S>;
							public constructor(param0: java.lang.Class<S>, param1: S, param2: S);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class StringUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.StringUtils>;
						public static ALPHA: string;
						public static NUMERIC: string;
						public static ALPHANUMERIC: string;
						public static getUniqueName(param0: string, param1: number): string;
						public static getArrayString(param0: androidNative.Array<string>, param1: number): string;
						public static join(param0: string, param1: java.lang.Iterable<any>): string;
						public static randomString(param0: number): string;
						public static isEmpty(param0: string): boolean;
						public static toString(param0: java.util.Map<any,any>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class Volatile {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Volatile>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.utils.Volatile interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
					}
				}
			}
		}
	}
}

//Generics information:
//com.couchbase.lite.AbstractDatabase.ActiveProcess:1
//com.couchbase.lite.ChangeListener:1
//com.couchbase.lite.ChangeListenerToken:1
//com.couchbase.lite.ChangeNotifier:1
//com.couchbase.lite.UnitOfWork:1
//com.couchbase.lite.internal.core.NativeContext:1
//com.couchbase.lite.internal.exec.ClientTask:1
//com.couchbase.lite.internal.utils.Fn.Consumer:1
//com.couchbase.lite.internal.utils.Fn.ConsumerThrows:2
//com.couchbase.lite.internal.utils.Fn.Function:2
//com.couchbase.lite.internal.utils.Fn.FunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.Predicate:1
//com.couchbase.lite.internal.utils.Fn.Provider:1
//com.couchbase.lite.internal.utils.Fn.ProviderThrows:2
//com.couchbase.lite.internal.utils.Fn.TaskThrows:1
//com.couchbase.lite.internal.utils.StateMachine:1
//com.couchbase.lite.internal.utils.StateMachine.Builder:1

