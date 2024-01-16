declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractConsoleLogger extends com.couchbase.lite.Logger {
				public static class: java.lang.Class<com.couchbase.lite.AbstractConsoleLogger>;
				public constructor(param0: com.couchbase.lite.internal.core.C4Log);
				public setLevel(param0: com.couchbase.lite.LogLevel): void;
				public getDomains(): java.util.EnumSet<com.couchbase.lite.LogDomain>;
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public setDomains(param0: java.util.EnumSet<com.couchbase.lite.LogDomain>): void;
				public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getLevel(): com.couchbase.lite.LogLevel;
				public setDomains(param0: androidNative.Array<com.couchbase.lite.LogDomain>): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractDatabase extends com.couchbase.lite.BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
				public static log: com.couchbase.lite.Log;
				public config: com.couchbase.lite.internal.ImmutableDatabaseConfiguration;
				public deleteCollection(param0: string, param1: string): void;
				/** @deprecated */
				public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				/** @deprecated */
				public setDocumentExpiration(param0: string, param1: java.util.Date): void;
				public inBatch(param0: com.couchbase.lite.UnitOfWork<any>): void;
				/** @deprecated */
				public createIndex(param0: string, param1: com.couchbase.lite.IndexConfiguration): void;
				public deleteCollection(param0: string): void;
				public constructor();
				public constructor(param0: string, param1: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public hashCode(): number;
				public equals(param0: any): boolean;
				/** @deprecated */
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public createQuery(param0: string): com.couchbase.lite.Query;
				public close(): void;
				/** @deprecated */
				public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				/** @deprecated */
				public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				/** @deprecated */
				public getDocumentExpiration(param0: string): java.util.Date;
				/** @deprecated */
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public getName(): string;
				public getPath(): string;
				public toString(): string;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getDatabase(): com.couchbase.lite.Database;
				public getConfig(): com.couchbase.lite.DatabaseConfiguration;
				/** @deprecated */
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConflictHandler): boolean;
				/** @deprecated */
				public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
				/** @deprecated */
				public getCount(): number;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public getBlob(param0: java.util.Map<string,any>): com.couchbase.lite.Blob;
				/** @deprecated */
				public getIndexes(): java.util.List<string>;
				public getDefaultScope(): com.couchbase.lite.Scope;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public getCollections(): java.util.Set<com.couchbase.lite.Collection>;
				public finalize(): void;
				public static exists(param0: string, param1: java.io.File): boolean;
				public constructor(param0: string);
				public performMaintenance(param0: com.couchbase.lite.MaintenanceType): boolean;
				public getScope(param0: string): com.couchbase.lite.Scope;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public getCollection(param0: string, param1: string): com.couchbase.lite.Collection;
				public delete(): void;
				public createCollection(param0: string, param1: string): com.couchbase.lite.Collection;
				public getDefaultCollection(): com.couchbase.lite.Collection;
				public static copy(param0: java.io.File, param1: string, param2: string, param3: number, param4: androidNative.Array<number>): void;
				public createCollection(param0: string): com.couchbase.lite.Collection;
				public getCollections(param0: string): java.util.Set<com.couchbase.lite.Collection>;
				/** @deprecated */
				public getDocument(param0: string): com.couchbase.lite.Document;
				/** @deprecated */
				public save(param0: com.couchbase.lite.MutableDocument): void;
				/** @deprecated */
				public delete(param0: com.couchbase.lite.Document): void;
				/** @deprecated */
				public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				/** @deprecated */
				public purge(param0: com.couchbase.lite.Document): void;
				public saveBlob(param0: com.couchbase.lite.Blob): void;
				/** @deprecated */
				public deleteIndex(param0: string): void;
				public getScopes(): java.util.Set<com.couchbase.lite.Scope>;
				public static delete(param0: string, param1: java.io.File): void;
				public getCollection(param0: string): com.couchbase.lite.Collection;
				/** @deprecated */
				public purge(param0: string): void;
			}
			export namespace AbstractDatabase {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public toString(): string;
			}
			export namespace AbstractIndex {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndexBuilder>;
				public static fullTextIndex(param0: androidNative.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
				public static valueIndex(param0: androidNative.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractQuery extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
				public static DOMAIN: com.couchbase.lite.LogDomain;
				public execute(): com.couchbase.lite.ResultSet;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
			export namespace AbstractQuery {
				export class LiveQueries {
					public static class: java.lang.Class<com.couchbase.lite.AbstractQuery.LiveQueries>;
					public start(param0: com.couchbase.lite.internal.listener.ChangeListenerToken<com.couchbase.lite.QueryChange>): void;
					public getTokens(): java.util.Set<com.couchbase.lite.ListenerToken>;
					public liveCount(): number;
					public put(param0: com.couchbase.lite.ListenerToken, param1: com.couchbase.lite.internal.core.C4QueryObserver, param2: java.lang.Runnable): void;
					public remove(param0: com.couchbase.lite.ListenerToken, param1: java.lang.Runnable): void;
					public isLive(): boolean;
					public isLive(param0: com.couchbase.lite.ListenerToken): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractReplicator extends com.couchbase.lite.internal.replicator.BaseReplicator implements com.couchbase.lite.internal.Listenable<com.couchbase.lite.ReplicatorChange,com.couchbase.lite.ReplicatorChangeListener>  {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				/** @deprecated */
				public isDocumentPending(param0: string): boolean;
				public constructor();
				public getMessageC4Replicator(param0: com.couchbase.lite.internal.sockets.MessageFraming): com.couchbase.lite.internal.core.C4Replicator;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addDocumentReplicationListener(param0: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
				public getLocalC4Replicator(param0: com.couchbase.lite.Database): com.couchbase.lite.internal.core.C4Replicator;
				public start(): void;
				public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public isDocumentPending(param0: string, param1: com.couchbase.lite.Collection): boolean;
				public getRemoteC4Replicator(param0: java.net.URI): com.couchbase.lite.internal.core.C4Replicator;
				public addDocumentReplicationListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
				public close(): void;
				public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
				public start(param0: boolean): void;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public getServerCertificates(): java.util.List<java.security.cert.Certificate>;
				public toString(): string;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
				public stop(): void;
				/** @deprecated */
				public getPendingDocumentIds(): java.util.Set<string>;
				public getPendingDocumentIds(param0: com.couchbase.lite.Collection): java.util.Set<string>;
				public getStatus(): com.couchbase.lite.ReplicatorStatus;
			}
			export namespace AbstractReplicator {
				export class ReplicatorCookieStore extends com.couchbase.lite.internal.replicator.CBLCookieStore {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorCookieStore>;
					public getCookies(param0: java.net.URI): string;
					public setCookies(param0: java.net.URI, param1: java.util.List<string>, param2: boolean): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class AbstractReplicatorConfiguration extends com.couchbase.lite.internal.BaseReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration>;
				public static DISABLE_HEARTBEAT: number;
				public setContinuous(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setPushFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setReplicatorType(param0: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public static verifyHeartbeat(param0: number): number;
				public setHeaders(param0: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
				public setMaxAttemptWaitTime(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setChannels(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public getPushFilter(): com.couchbase.lite.ReplicationFilter;
				public getCollections(): java.util.Set<com.couchbase.lite.Collection>;
				public getPinnedServerX509Certificate(): java.security.cert.X509Certificate;
				/** @deprecated */
				public setConflictResolver(param0: com.couchbase.lite.ConflictResolver): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public getReplicatorType(): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
				public setHeartbeat(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				public setAuthenticator(param0: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
				public setType(param0: com.couchbase.lite.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public getPullFilter(): com.couchbase.lite.ReplicationFilter;
				/** @deprecated */
				public getDatabase(): com.couchbase.lite.Database;
				/** @deprecated */
				public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public getPinnedServerCertificate(): androidNative.Array<number>;
				public constructor(param0: com.couchbase.lite.AbstractReplicatorConfiguration);
				public getMaxAttempts(): number;
				public constructor(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
				public setAcceptParentDomainCookies(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setPullFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(param0: com.couchbase.lite.Database, param1: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, param2: com.couchbase.lite.Endpoint);
				public removeCollection(param0: com.couchbase.lite.Collection): com.couchbase.lite.ReplicatorConfiguration;
				public getAuthenticator(): com.couchbase.lite.Authenticator;
				/** @deprecated */
				public getDocumentIDs(): java.util.List<string>;
				public setMaxAttempts(param0: number): com.couchbase.lite.ReplicatorConfiguration;
				public static configureDefaultCollection(param0: com.couchbase.lite.Database): java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
				public isAutoPurgeEnabled(): boolean;
				public getCollectionConfiguration(param0: com.couchbase.lite.Collection): com.couchbase.lite.CollectionConfiguration;
				/** @deprecated */
				public setPinnedServerCertificate(param0: androidNative.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
				public getTarget(): com.couchbase.lite.Endpoint;
				public addCollections(param0: java.util.Collection<com.couchbase.lite.Collection>, param1: com.couchbase.lite.CollectionConfiguration): com.couchbase.lite.ReplicatorConfiguration;
				public setAutoPurgeEnabled(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public toString(): string;
				/** @deprecated */
				public getChannels(): java.util.List<string>;
				public isContinuous(): boolean;
				/** @deprecated */
				public getConflictResolver(): com.couchbase.lite.ConflictResolver;
				public getHeaders(): java.util.Map<string,string>;
				public isAcceptParentDomainCookies(): boolean;
				public getType(): com.couchbase.lite.ReplicatorType;
				public setPinnedServerX509Certificate(param0: java.security.cert.X509Certificate): com.couchbase.lite.ReplicatorConfiguration;
				public getMaxAttemptWaitTime(): number;
				public addCollection(param0: com.couchbase.lite.Collection, param1: com.couchbase.lite.CollectionConfiguration): com.couchbase.lite.ReplicatorConfiguration;
				public getHeartbeat(): number;
			}
			export namespace AbstractReplicatorConfiguration {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Array extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.Array>;
				public lock: any;
				public internalArray: com.couchbase.lite.internal.fleece.MArray;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public toMutable(): com.couchbase.lite.MutableArray;
				public constructor();
				public constructor(param0: com.couchbase.lite.internal.fleece.MArray);
				public toList(): java.util.List<any>;
				public hashCode(): number;
				public getLong(param0: number): number;
				public equals(param0: any): boolean;
				public getInt(param0: number): number;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public iterator(): java.util.Iterator<any>;
				public toString(): string;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public getDictionary(param0: number): com.couchbase.lite.Dictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getValue(param0: number): any;
				public count(): number;
				public toJSON(): string;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public getArray(param0: number): com.couchbase.lite.Array;
			}
			export namespace Array {
				export class ArrayIterator extends java.util.Iterator<any> {
					public static class: java.lang.Class<com.couchbase.lite.Array.ArrayIterator>;
					public next(): any;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ArrayExpression {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpression>;
				public static anyAndEvery(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static variable(param0: string): com.couchbase.lite.VariableExpression;
				public static every(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static any(param0: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
			}
			export namespace ArrayExpression {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ArrayExpressionIn {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionIn>;
				public in(param0: com.couchbase.lite.Expression): com.couchbase.lite.ArrayExpressionSatisfies;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ArrayExpressionSatisfies {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies>;
				public satisfies(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export namespace ArrayExpressionSatisfies {
				export class QuantifiedExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies.QuantifiedExpression>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ArrayFunction {
				public static class: java.lang.Class<com.couchbase.lite.ArrayFunction>;
				public static contains(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.Authenticator>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Authenticator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.BaseDatabase>;
				public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
				public assertOpenChecked(): void;
				public getOpenC4DbLocked(): com.couchbase.lite.internal.core.C4Database;
				public getC4DbOrThrowLocked(): com.couchbase.lite.internal.core.C4Database;
				public isOpen(): boolean;
				public isOpenLocked(): boolean;
				public setC4DatabaseLocked(param0: com.couchbase.lite.internal.core.C4Database): void;
				public getDbLock(): any;
				public assertOpenUnchecked(): void;
				public constructor();
				public getDbPath(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class BasicAuthenticator extends com.couchbase.lite.internal.BaseAuthenticator {
				public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
				public authenticate(param0: java.util.Map<string,any>): void;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
			export namespace Blob {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class BuilderQuery extends com.couchbase.lite.AbstractQuery {
				public static class: java.lang.Class<com.couchbase.lite.BuilderQuery>;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CBLConverter {
				public static class: java.lang.Class<com.couchbase.lite.CBLConverter>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CBLError {
				public static class: java.lang.Class<com.couchbase.lite.CBLError>;
			}
			export namespace CBLError {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
			export namespace Collation {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Collection extends com.couchbase.lite.internal.BaseCollection {
				public static class: java.lang.Class<com.couchbase.lite.Collection>;
				public static DEFAULT_NAME: string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.CollectionChangeListener): com.couchbase.lite.ListenerToken;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConflictHandler): boolean;
				public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public addChangeListener(param0: com.couchbase.lite.CollectionChangeListener): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public createFilterDocument(param0: string, param1: string, param2: com.couchbase.lite.internal.fleece.FLDict): com.couchbase.lite.Document;
				public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public save(param0: com.couchbase.lite.MutableDocument): void;
				public delete(param0: com.couchbase.lite.Document): void;
				public purge(param0: string): void;
				public close(): void;
				public getName(): string;
				public getCount(): number;
				public getDocument(param0: string): com.couchbase.lite.Document;
				public getScope(): com.couchbase.lite.Scope;
				public toString(): string;
				public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public purge(param0: com.couchbase.lite.Document): void;
				public getDocumentExpiration(param0: string): java.util.Date;
				public getIndexes(): java.util.Set<string>;
				public setDocumentExpiration(param0: string, param1: java.util.Date): void;
				public createIndex(param0: string, param1: com.couchbase.lite.IndexConfiguration): void;
				public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public deleteIndex(param0: string): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CollectionChange extends com.couchbase.lite.DatabaseChange {
				public static class: java.lang.Class<com.couchbase.lite.CollectionChange>;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CollectionChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.CollectionChange> {
				public static class: java.lang.Class<com.couchbase.lite.CollectionChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.CollectionChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: any): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CollectionChangeNotifier extends com.couchbase.lite.internal.listener.ChangeNotifier<com.couchbase.lite.CollectionChange> implements java.lang.AutoCloseable  {
				public static class: java.lang.Class<com.couchbase.lite.CollectionChangeNotifier>;
				public close(): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CollectionConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.CollectionConfiguration>;
				public setChannels(param0: java.util.List<string>): com.couchbase.lite.CollectionConfiguration;
				public getConflictResolver(): com.couchbase.lite.ConflictResolver;
				public getPushFilter(): com.couchbase.lite.ReplicationFilter;
				public setPullFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.CollectionConfiguration;
				public getPullFilter(): com.couchbase.lite.ReplicationFilter;
				public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.CollectionConfiguration;
				public toString(): string;
				public setPushFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.CollectionConfiguration;
				public constructor();
				public setConflictResolver(param0: com.couchbase.lite.ConflictResolver): com.couchbase.lite.CollectionConfiguration;
				public getChannels(): java.util.List<string>;
				public constructor(param0: java.util.List<string>, param1: java.util.List<string>, param2: com.couchbase.lite.ReplicationFilter, param3: com.couchbase.lite.ReplicationFilter, param4: com.couchbase.lite.ConflictResolver);
				public getDocumentIDs(): java.util.List<string>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Conflict {
				public static class: java.lang.Class<com.couchbase.lite.Conflict>;
				public getLocalDocument(): com.couchbase.lite.Document;
				public getDocumentId(): string;
				public getRemoteDocument(): com.couchbase.lite.Document;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ConsoleLogger extends com.couchbase.lite.AbstractConsoleLogger {
				public static class: java.lang.Class<com.couchbase.lite.ConsoleLogger>;
				public log(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public doLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
				public getLevel(): com.couchbase.lite.LogLevel;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CouchbaseLite {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLite>;
				public static init(param0: globalAndroid.content.Context, param1: boolean, param2: java.io.File, param3: java.io.File): void;
				public static init(param0: globalAndroid.content.Context, param1: boolean): void;
				public static init(param0: globalAndroid.content.Context): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class CouchbaseLiteException {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLiteException>;
				/** @deprecated */
				public constructor(param0: string, param1: number, param2: java.lang.Exception);
				public constructor(param0: string, param1: string, param2: number);
				public getInfo(): java.util.Map<string,any>;
				public getCode(): number;
				public toString(): string;
				public static convertException(param0: com.couchbase.lite.LiteCoreException, param1: string): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string);
				public constructor();
				/** @deprecated */
				public constructor(param0: string, param1: number, param2: java.util.Map<string,any>);
				public static toCouchbaseLiteException(param0: number, param1: number, param2: number): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string, param1: java.lang.Exception);
				public getDomain(): string;
				/** @deprecated */
				public constructor(param0: string, param1: number);
				public static convertException(param0: com.couchbase.lite.LiteCoreException): com.couchbase.lite.CouchbaseLiteException;
				public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number);
				public constructor(param0: string, param1: java.lang.Exception, param2: string, param3: number, param4: java.util.Map<string,any>);
				public static toCouchbaseLiteException(param0: number, param1: number, param2: string, param3: java.lang.Exception): com.couchbase.lite.CouchbaseLiteException;
				/** @deprecated */
				public constructor(param0: java.lang.Exception);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DataSource {
				public static class: java.lang.Class<com.couchbase.lite.DataSource>;
				public alias: string;
				/** @deprecated */
				public static database(param0: com.couchbase.lite.Database): com.couchbase.lite.DataSource.As;
				public static collection(param0: com.couchbase.lite.Collection): com.couchbase.lite.DataSource.As;
			}
			export namespace DataSource {
				export class As extends com.couchbase.lite.DataSource {
					public static class: java.lang.Class<com.couchbase.lite.DataSource.As>;
					public as(param0: string): com.couchbase.lite.DataSource;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Database extends com.couchbase.lite.AbstractDatabase {
				public static class: java.lang.Class<com.couchbase.lite.Database>;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				/** @deprecated */
				public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				/** @deprecated */
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public static copy(param0: java.io.File, param1: string, param2: string, param3: number, param4: androidNative.Array<number>): void;
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration): void;
				public constructor(param0: string);
				public constructor(param0: string, param1: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public constructor();
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DatabaseChange {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChange>;
				public getDocumentIDs(): java.util.List<string>;
				public getCollection(): com.couchbase.lite.Collection;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DatabaseChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.DatabaseChange> {
				public static class: java.lang.Class<com.couchbase.lite.DatabaseChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DatabaseChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: any): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DefaultConflictResolver extends com.couchbase.lite.ConflictResolver {
				public static class: java.lang.Class<com.couchbase.lite.DefaultConflictResolver>;
				public resolve(param0: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Defaults {
				public static class: java.lang.Class<com.couchbase.lite.Defaults>;
			}
			export namespace Defaults {
				export class FullTextIndex {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.FullTextIndex>;
					public static IGNORE_ACCENTS: boolean;
				}
				export class Listener {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.Listener>;
					public static PORT: number;
					public static DISABLE_TLS: boolean;
					public static READ_ONLY: boolean;
					public static ENABLE_DELTA_SYNC: boolean;
				}
				export class LogFile {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.LogFile>;
					public static USE_PLAIN_TEXT: boolean;
					public static MAX_SIZE: number;
					public static MAX_ROTATE_COUNT: number;
				}
				export class Replicator {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.Replicator>;
					public static TYPE: com.couchbase.lite.ReplicatorType;
					public static CONTINUOUS: boolean;
					public static HEARTBEAT: number;
					public static MAX_ATTEMPTS_SINGLE_SHOT: number;
					public static MAX_ATTEMPTS_CONTINUOUS: number;
					public static MAX_ATTEMPT_WAIT_TIME: number;
					public static ENABLE_AUTO_PURGE: boolean;
					public static SELF_SIGNED_CERTIFICATE_ONLY: boolean;
					public static ACCEPT_PARENT_COOKIES: boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public constructor(param0: com.couchbase.lite.internal.fleece.MDict);
			}
			export namespace Dictionary {
				export class DictionaryIterator extends java.util.Iterator<string> {
					public static class: java.lang.Class<com.couchbase.lite.Dictionary.DictionaryIterator>;
					public next(): string;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DocContext extends com.couchbase.lite.internal.DbContext {
				public static class: java.lang.Class<com.couchbase.lite.DocContext>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public getCollection(): com.couchbase.lite.Collection;
				public toString(): string;
				public getContent(): com.couchbase.lite.Dictionary;
				public constructor(param0: com.couchbase.lite.Collection, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DocumentChange {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChange>;
				/** @deprecated */
				public getDatabase(): com.couchbase.lite.Database;
				public getCollection(): com.couchbase.lite.Collection;
				public getDocumentID(): string;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DocumentChangeNotifier extends com.couchbase.lite.internal.listener.ChangeNotifier<com.couchbase.lite.DocumentChange> implements java.lang.AutoCloseable  {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeNotifier>;
				public close(): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class DocumentReplicationListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.DocumentReplicationListenerToken>;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public static fullTextIndex(param0: string): com.couchbase.lite.FullTextIndexExpression;
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
				public toString(): string;
				public isNotValued(): com.couchbase.lite.Expression;
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
			export namespace Expression {
				export class AggregateExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.AggregateExpression>;
					public getExpressions(): java.util.List<com.couchbase.lite.Expression>;
				}
				export class BinaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.BinaryExpression>;
				}
				export class CollationExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CollationExpression>;
				}
				export class CompoundExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.CompoundExpression>;
				}
				export class FTIExpression extends com.couchbase.lite.FullTextIndexExpression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.FTIExpression>;
					public toString(): string;
					public from(param0: string): com.couchbase.lite.IndexExpression;
				}
				export class FunctionExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.FunctionExpression>;
				}
				export class IdxExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.IdxExpression>;
				}
				export class ParameterExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ParameterExpression>;
				}
				export class UnaryExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.UnaryExpression>;
				}
				export class ValueExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.Expression.ValueExpression>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Fleece {
				public static class: java.lang.Class<com.couchbase.lite.Fleece>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class From extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.From>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextExpression {
				public static class: java.lang.Class<com.couchbase.lite.FullTextExpression>;
				/** @deprecated */
				public match(param0: string): com.couchbase.lite.Expression;
				/** @deprecated */
				public static index(param0: string): com.couchbase.lite.FullTextExpression;
			}
			export namespace FullTextExpression {
				export class FullTextMatchExpression extends com.couchbase.lite.Expression {
					public static class: java.lang.Class<com.couchbase.lite.FullTextExpression.FullTextMatchExpression>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextFunction {
				public static class: java.lang.Class<com.couchbase.lite.FullTextFunction>;
				public static match(param0: com.couchbase.lite.IndexExpression, param1: string): com.couchbase.lite.Expression;
				public static rank(param0: com.couchbase.lite.IndexExpression): com.couchbase.lite.Expression;
				/** @deprecated */
				public static rank(param0: string): com.couchbase.lite.Expression;
				/** @deprecated */
				public static match(param0: string, param1: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndex>;
				public setLanguage(param0: string): com.couchbase.lite.FullTextIndex;
				public getLanguage(): string;
				public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndex;
				public isIgnoringAccents(): boolean;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexConfiguration>;
				public setLanguage(param0: string): com.couchbase.lite.FullTextIndexConfiguration;
				public getLanguage(): string;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public isIgnoringAccents(): boolean;
				public ignoreAccents(param0: boolean): com.couchbase.lite.FullTextIndexConfiguration;
				public constructor(param0: androidNative.Array<string>);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextIndexExpression extends com.couchbase.lite.IndexExpression {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexExpression>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.FullTextIndexExpression interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					from(param0: string): com.couchbase.lite.IndexExpression;
				});
				public constructor();
				public from(param0: string): com.couchbase.lite.IndexExpression;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class FullTextIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexItem>;
				public static property(param0: string): com.couchbase.lite.FullTextIndexItem;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Function extends com.couchbase.lite.AbstractFunction {
				public static class: java.lang.Class<com.couchbase.lite.Function>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class GroupBy extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.HavingRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupBy>;
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Having extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Having>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class Index extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.Index>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class IndexBuilder extends com.couchbase.lite.AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.IndexBuilder>;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class IndexConfiguration extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.IndexConfiguration>;
				public getExpressions(): java.util.List<string>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class IndexExpression {
				public static class: java.lang.Class<com.couchbase.lite.IndexExpression>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.IndexExpression interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
				});
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Join {
				public static class: java.lang.Class<com.couchbase.lite.Join>;
				public static crossJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join;
				public static join(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftOuterJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static innerJoin(param0: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
			}
			export namespace Join {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Joins extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.WhereRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Joins>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Limit extends com.couchbase.lite.BuilderQuery {
				public static class: java.lang.Class<com.couchbase.lite.Limit>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ListenerToken>;
				public close(): void;
				public remove(): void;
				public toString(): string;
				public send(param0: java.lang.Runnable): void;
				public constructor(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class LogFileConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.LogFileConfiguration>;
				public usesPlaintext(): boolean;
				public constructor(param0: string, param1: com.couchbase.lite.LogFileConfiguration);
				public setMaxRotateCount(param0: number): com.couchbase.lite.LogFileConfiguration;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getMaxSize(): number;
				public setMaxSize(param0: number): com.couchbase.lite.LogFileConfiguration;
				public getMaxRotateCount(): number;
				public constructor(param0: string);
				public constructor(param0: com.couchbase.lite.LogFileConfiguration);
				public setUsePlaintext(param0: boolean): com.couchbase.lite.LogFileConfiguration;
				public getDirectory(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class MValueConverter {
				public static class: java.lang.Class<com.couchbase.lite.MValueConverter>;
				public toNative(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: java.util.concurrent.atomic.AtomicBoolean): any;
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class MetaExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.MetaExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public constructor(param0: com.couchbase.lite.internal.fleece.MArray);
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public getArray(param0: string): com.couchbase.lite.Array;
				public constructor(param0: com.couchbase.lite.internal.fleece.MDict);
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public constructor(param0: com.couchbase.lite.Collection, param1: string, param2: com.couchbase.lite.internal.core.C4Document, param3: boolean);
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
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDocument;
				public setJSON(param0: string): com.couchbase.lite.MutableDocument;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDocument;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class N1qlQuery extends com.couchbase.lite.AbstractQuery {
				public static class: java.lang.Class<com.couchbase.lite.N1qlQuery>;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class OrderBy extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.OrderBy>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export abstract class Ordering {
				public static class: java.lang.Class<com.couchbase.lite.Ordering>;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.Ordering.SortOrder;
				public constructor();
				public static property(param0: string): com.couchbase.lite.Ordering.SortOrder;
			}
			export namespace Ordering {
				export class SortOrder extends com.couchbase.lite.Ordering {
					public static class: java.lang.Class<com.couchbase.lite.Ordering.SortOrder>;
					public descending(): com.couchbase.lite.Ordering;
					public ascending(): com.couchbase.lite.Ordering;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class PropertyExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.PropertyExpression>;
				public from(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class QueryBuilder {
				public static class: java.lang.Class<com.couchbase.lite.QueryBuilder>;
				public static select(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static selectDistinct(param0: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static createQuery(param0: string, param1: com.couchbase.lite.Database): com.couchbase.lite.Query;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class QueryChange {
				public static class: java.lang.Class<com.couchbase.lite.QueryChange>;
				public getResults(): com.couchbase.lite.ResultSet;
				public getError(): java.lang.Throwable;
				public getQuery(): com.couchbase.lite.Query;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatedDocument {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatedDocument>;
				public getCollectionName(): string;
				public getFlags(): java.util.EnumSet<com.couchbase.lite.DocumentFlag>;
				public setError(param0: com.couchbase.lite.CouchbaseLiteException): void;
				public getError(): com.couchbase.lite.CouchbaseLiteException;
				public toString(): string;
				public getCollectionScope(): string;
				public getID(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Replicator extends com.couchbase.lite.AbstractReplicator {
				public static class: java.lang.Class<com.couchbase.lite.Replicator>;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
				public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public constructor();
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatorChange extends com.couchbase.lite.internal.replicator.ReplicationStatusChange {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
				public toString(): string;
				public getReplicator(): com.couchbase.lite.Replicator;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatorChangeListener extends com.couchbase.lite.ChangeListener<com.couchbase.lite.ReplicatorChange> {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListener>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ReplicatorChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					changed(param0: com.couchbase.lite.ReplicatorChange): void;
					changed(param0: any): void;
					changed(param0: any): void;
				});
				public constructor();
				public changed(param0: com.couchbase.lite.ReplicatorChange): void;
				public changed(param0: any): void;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatorChangeListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListenerToken>;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatorConfiguration extends com.couchbase.lite.AbstractReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration>;
				public constructor(param0: com.couchbase.lite.AbstractReplicatorConfiguration);
				public constructor(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
				public constructor(param0: com.couchbase.lite.Endpoint);
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public getReplicatorConfiguration(): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(param0: com.couchbase.lite.Database, param1: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, param2: com.couchbase.lite.Endpoint);
				/** @deprecated */
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ReplicatorProgress {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorProgress>;
				public getCompleted(): number;
				public getTotal(): number;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ResultSet extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.ResultSet>;
				public allResults(): java.util.List<com.couchbase.lite.Result>;
				public close(): void;
				public next(): com.couchbase.lite.Result;
				public iterator(): java.util.Iterator<com.couchbase.lite.Result>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Scope {
				public static class: java.lang.Class<com.couchbase.lite.Scope>;
				public static DEFAULT_NAME: string;
				public hashCode(): number;
				public getCollections(): java.util.Set<com.couchbase.lite.Collection>;
				public getCollection(param0: string): com.couchbase.lite.Collection;
				public equals(param0: any): boolean;
				public getName(): string;
				public toString(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Select extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.FromRouter {
				public static class: java.lang.Class<com.couchbase.lite.Select>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class SelectResult {
				public static class: java.lang.Class<com.couchbase.lite.SelectResult>;
				public static property(param0: string): com.couchbase.lite.SelectResult.As;
				public static all(): com.couchbase.lite.SelectResult.From;
				public constructor(param0: com.couchbase.lite.Expression);
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
				public setExpression(param0: com.couchbase.lite.Expression): void;
			}
			export namespace SelectResult {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class SessionAuthenticator extends com.couchbase.lite.internal.BaseAuthenticator {
				public static class: java.lang.Class<com.couchbase.lite.SessionAuthenticator>;
				public getCookieName(): string;
				public authenticate(param0: java.util.Map<string,any>): void;
				public getSessionID(): string;
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class URLEndpoint extends com.couchbase.lite.Endpoint {
				public static class: java.lang.Class<com.couchbase.lite.URLEndpoint>;
				public getURL(): java.net.URI;
				public toString(): string;
				public constructor(param0: java.net.URI);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ValueIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndex>;
				public indexItems: java.util.List<com.couchbase.lite.ValueIndexItem>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ValueIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexConfiguration>;
				public constructor(param0: com.couchbase.lite.AbstractIndex.IndexType, param1: com.couchbase.lite.AbstractIndex.QueryLanguage);
				public constructor(param0: androidNative.Array<string>);
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class ValueIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexItem>;
				public static property(param0: string): com.couchbase.lite.ValueIndexItem;
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.ValueIndexItem;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class VariableExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.VariableExpression>;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export class Where extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Where>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				/** @deprecated */
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export abstract class AbstractSocketFactory extends com.couchbase.lite.internal.BaseSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.AbstractSocketFactory>;
					public endpoint: com.couchbase.lite.Endpoint;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration, param1: com.couchbase.lite.internal.replicator.CBLCookieStore, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public toString(): string;
					public static bindSocketFactory(param0: com.couchbase.lite.internal.BaseSocketFactory): number;
					public setTestListener(param0: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.internal.sockets.SocketFromCore>): void;
					public static unbindSocketFactory(param0: number): void;
					public createPlatformSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static getBoundSocketFactory(param0: number): com.couchbase.lite.internal.BaseSocketFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
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
				export namespace AndroidExecutionService {
					export class CancellableTask extends com.couchbase.lite.internal.exec.ExecutionService.Cancellable {
						public static class: java.lang.Class<com.couchbase.lite.internal.AndroidExecutionService.CancellableTask>;
						public cancel(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export abstract class BaseAuthenticator extends com.couchbase.lite.Authenticator {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseAuthenticator>;
					public constructor();
					public authenticate(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export abstract class BaseCollection {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseCollection>;
					public db: com.couchbase.lite.Database;
					public createFilterDocument(param0: string, param1: string, param2: com.couchbase.lite.internal.fleece.FLDict): com.couchbase.lite.Document;
					public constructor(param0: com.couchbase.lite.Database);
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class BaseImmutableDatabaseConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration>;
					public getDirectory(): string;
					public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class BaseImmutableReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration>;
					public getHeaders(): java.util.Map<string,string>;
					public isPull(): boolean;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
					public getHeartbeat(): number;
					public getDatabase(): com.couchbase.lite.Database;
					public getCollectionConfigs(): java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
					public getConnectionOptions(): java.util.Map<string,any>;
					public getMaxRetryAttemptWaitTime(): number;
					public isAcceptParentCookies(): boolean;
					public getTarget(): com.couchbase.lite.Endpoint;
					public isPush(): boolean;
					public isContinuous(): boolean;
					public getPinnedServerCertificate(): java.security.cert.X509Certificate;
					public getType(): com.couchbase.lite.ReplicatorType;
					public getMaxRetryAttempts(): number;
					public isAutoPurgeEnabled(): boolean;
					public getAuthenticator(): com.couchbase.lite.Authenticator;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class BaseReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseReplicatorConfiguration>;
					public collectionConfigurations: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
					public constructor(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
					public removeCollectionInternal(param0: com.couchbase.lite.Collection): void;
					public addCollectionInternal(param0: com.couchbase.lite.Collection, param1: com.couchbase.lite.CollectionConfiguration): void;
					public getCollectionConfigurations(): java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class BaseSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseSocketFactory>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.internal.BaseSocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						bindSocketFactory(param0: com.couchbase.lite.internal.BaseSocketFactory): number;
						getBoundSocketFactory(param0: number): com.couchbase.lite.internal.BaseSocketFactory;
						unbindSocketFactory(param0: number): void;
						createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
						<clinit>(): void;
					});
					public constructor();
					public static BOUND_SOCKET_FACTORIES: com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding<com.couchbase.lite.internal.BaseSocketFactory>;
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static bindSocketFactory(param0: com.couchbase.lite.internal.BaseSocketFactory): number;
					public static unbindSocketFactory(param0: number): void;
					public static getBoundSocketFactory(param0: number): com.couchbase.lite.internal.BaseSocketFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class CouchbaseLiteInternal {
					public static class: java.lang.Class<com.couchbase.lite.internal.CouchbaseLiteInternal>;
					public static SCRATCH_DIR_NAME: string;
					public static getDefaultDbDir(): java.io.File;
					public static getNetworkConnectivityManager(): com.couchbase.lite.internal.replicator.NetworkConnectivityManager;
					public static init(param0: boolean, param1: java.io.File, param2: java.io.File, param3: globalAndroid.content.Context): void;
					public static getExecutionService(): com.couchbase.lite.internal.exec.ExecutionService;
					public static getDefaultDbDirPath(): string;
					public static reset(param0: boolean): void;
					public static requireInit(param0: string): void;
					public static getContext(): globalAndroid.content.Context;
					public static debugging(): boolean;
					public static loadErrorMessages(param0: globalAndroid.content.Context): java.util.Map<string,string>;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class ImmutableDatabaseConfiguration extends com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.ImmutableDatabaseConfiguration>;
					public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class ImmutableReplicatorConfiguration extends com.couchbase.lite.internal.BaseImmutableReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.ImmutableReplicatorConfiguration>;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class Listenable<T, L>  extends java.lang.Object {
					public static class: java.lang.Class<com.couchbase.lite.internal.Listenable<any,any>>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.internal.Listenable<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addChangeListener(param0: L): com.couchbase.lite.ListenerToken;
						addChangeListener(param0: java.util.concurrent.Executor, param1: L): com.couchbase.lite.ListenerToken;
					});
					public constructor();
					public addChangeListener(param0: L): com.couchbase.lite.ListenerToken;
					public addChangeListener(param0: java.util.concurrent.Executor, param1: L): com.couchbase.lite.ListenerToken;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class ReplicationCollection {
					public static class: java.lang.Class<com.couchbase.lite.internal.ReplicationCollection>;
					public token: number;
					public scope: string;
					public name: string;
					public c4PushFilter: com.couchbase.lite.internal.ReplicationCollection.C4Filter;
					public c4PullFilter: com.couchbase.lite.internal.ReplicationCollection.C4Filter;
					public resolver: com.couchbase.lite.ConflictResolver;
					public static create(param0: com.couchbase.lite.Collection, param1: com.couchbase.lite.CollectionConfiguration): com.couchbase.lite.internal.ReplicationCollection;
					public toString(): string;
					public static createAll(param0: java.util.Set<com.couchbase.lite.Collection>): androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>;
					public static getBinding(param0: number): com.couchbase.lite.internal.ReplicationCollection;
					public getConflictResolver(): com.couchbase.lite.ConflictResolver;
					public finalize(): void;
					public close(): void;
					public static createAll(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>): androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>;
					public static create(param0: com.couchbase.lite.Collection, param1: java.util.Map<string,any>, param2: com.couchbase.lite.ReplicationFilter, param3: com.couchbase.lite.ReplicationFilter, param4: com.couchbase.lite.ConflictResolver): com.couchbase.lite.internal.ReplicationCollection;
				}
				export namespace ReplicationCollection {
					export class C4Filter {
						public static class: java.lang.Class<com.couchbase.lite.internal.ReplicationCollection.C4Filter>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.ReplicationCollection$C4Filter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: string, param1: string, param2: number, param3: number): boolean;
						});
						public constructor();
						public test(param0: string, param1: string, param2: number, param3: number): boolean;
					}
					export class CollectionFilter extends com.couchbase.lite.internal.ReplicationCollection.C4Filter {
						public static class: java.lang.Class<com.couchbase.lite.internal.ReplicationCollection.CollectionFilter>;
						public test(param0: string, param1: string, param2: number, param3: number): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export class SocketFactory extends com.couchbase.lite.internal.AbstractSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.SocketFactory>;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration, param1: com.couchbase.lite.internal.replicator.CBLCookieStore, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static bindSocketFactory(param0: com.couchbase.lite.internal.BaseSocketFactory): number;
					public static unbindSocketFactory(param0: number): void;
					public createPlatformSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static getBoundSocketFactory(param0: number): com.couchbase.lite.internal.BaseSocketFactory;
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
					export class AndroidConnectivityManager extends com.couchbase.lite.internal.replicator.NetworkConnectivityManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.AndroidConnectivityManager>;
						public unregisterObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public connectivityChanged(param0: boolean): void;
						public static newInstance(): com.couchbase.lite.internal.connectivity.AndroidConnectivityManager;
						public isConnected(): boolean;
						public registerObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public clear(): void;
						public constructor(param0: number, param1: com.couchbase.lite.internal.utils.Fn.Runner);
						public isRunning(): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace connectivity {
					export abstract class ConnectivityWatcher {
						public static class: java.lang.Class<com.couchbase.lite.internal.connectivity.ConnectivityWatcher>;
						public name: string;
						public onConnectivityChange(param0: boolean): void;
						public getSysMgr(): globalAndroid.net.ConnectivityManager;
						public startFailed(param0: java.lang.RuntimeException): void;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4 {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4>;
						public static getMessage(param0: number, param1: number, param2: number): string;
						public static setTempDir(param0: string): void;
						public static getBuildInfo(): string;
						public static setEnv(param0: string, param1: string, param2: number): void;
						public static debug(param0: boolean): void;
						public static getVersion(): string;
					}
					export namespace C4 {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nSetenv(param0: string, param1: string, param2: number): void;
								nGetBuildInfo(): string;
								nGetVersion(): string;
								nDebug(param0: boolean): void;
								nSetTempDir(param0: string): void;
								nGetMessage(param0: number, param1: number, param2: number): string;
							});
							public constructor();
							public nGetBuildInfo(): string;
							public nGetMessage(param0: number, param1: number, param2: number): string;
							public nGetVersion(): string;
							public nDebug(param0: boolean): void;
							public nSetTempDir(param0: string): void;
							public nSetenv(param0: string, param1: string, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4BlobKey extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobKey>;
						public close(): void;
						public constructor(param0: number);
						public constructor(param0: java.lang.Long);
						public toString(): string;
						public constructor(param0: string);
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4BlobReadStream extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobReadStream>;
						public close(): void;
						public read(param0: androidNative.Array<number>, param1: number, param2: number): number;
						public getLength(): number;
						public seek(param0: number): void;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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
					export namespace C4BlobStore {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Collection extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Collection>;
						public setDocumentExpiration(param0: string, param1: number): void;
						public close(): void;
						public getDocumentCount(): number;
						public purgeDocument(param0: string): void;
						public getDocumentWithRevs(param0: string): com.couchbase.lite.internal.core.C4Document;
						public createCollectionObserver(param0: java.lang.Runnable): com.couchbase.lite.internal.core.C4CollectionObserver;
						public getIndexesInfo(): com.couchbase.lite.internal.fleece.FLValue;
						public getScope(): string;
						public createIndex(param0: string, param1: string, param2: com.couchbase.lite.AbstractIndex.QueryLanguage, param3: com.couchbase.lite.AbstractIndex.IndexType, param4: string, param5: boolean): void;
						public getName(): string;
						public toString(): string;
						public getDocumentExpiration(param0: string): number;
						public isValid(): boolean;
						public finalize(): void;
						public getDb(): com.couchbase.lite.internal.core.C4Database;
						public static getDefault(param0: com.couchbase.lite.internal.core.C4Database): com.couchbase.lite.internal.core.C4Collection;
						public getDocument(param0: string): com.couchbase.lite.internal.core.C4Document;
						public createDocument(param0: string, param1: com.couchbase.lite.internal.fleece.FLSliceResult, param2: number): com.couchbase.lite.internal.core.C4Document;
						public static create(param0: com.couchbase.lite.internal.core.C4Database, param1: string, param2: string): com.couchbase.lite.internal.core.C4Collection;
						public static get(param0: com.couchbase.lite.internal.core.C4Database, param1: string, param2: string): com.couchbase.lite.internal.core.C4Collection;
						public createDocumentObserver(param0: string, param1: java.lang.Runnable): com.couchbase.lite.internal.core.C4DocumentObserver;
						public deleteIndex(param0: string): void;
					}
					export namespace C4Collection {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Collection.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Collection$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreateCollection(param0: number, param1: string, param2: string): number;
								nGetCollection(param0: number, param1: string, param2: string): number;
								nGetDefaultCollection(param0: number): number;
								nCollectionIsValid(param0: number): boolean;
								nGetDocumentCount(param0: number): number;
								nFree(param0: number): void;
								nGetDocExpiration(param0: number, param1: string): number;
								nSetDocExpiration(param0: number, param1: string, param2: number): void;
								nPurgeDoc(param0: number, param1: string): void;
								nGetIndexesInfo(param0: number): number;
								nCreateIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: string, param6: boolean): void;
								nDeleteIndex(param0: number, param1: string): void;
							});
							public constructor();
							public nCreateCollection(param0: number, param1: string, param2: string): number;
							public nPurgeDoc(param0: number, param1: string): void;
							public nCollectionIsValid(param0: number): boolean;
							public nSetDocExpiration(param0: number, param1: string, param2: number): void;
							public nGetDocExpiration(param0: number, param1: string): number;
							public nGetDefaultCollection(param0: number): number;
							public nFree(param0: number): void;
							public nGetCollection(param0: number, param1: string, param2: string): number;
							public nCreateIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: string, param6: boolean): void;
							public nGetDocumentCount(param0: number): number;
							public nGetIndexesInfo(param0: number): number;
							public nDeleteIndex(param0: number, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4CollectionDocObserver extends com.couchbase.lite.internal.core.C4DocumentObserver {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionDocObserver>;
						public static newObserver(param0: number, param1: string, param2: java.lang.Runnable): com.couchbase.lite.internal.core.C4CollectionDocObserver;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4CollectionObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionObserver>;
						public getChanges(param0: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
						public close(): void;
						public finalize(): void;
					}
					export namespace C4CollectionObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4CollectionObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number): number;
								nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
								nFree(param0: number): void;
							});
							public constructor();
							public nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
							public nCreate(param0: number): number;
							public nFree(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4CollectionSpec {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionSpec>;
						public getCollectionName(): string;
						public getScopeName(): string;
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Constants {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants>;
						public static hasFlags(param0: number, param1: number): boolean;
					}
					export namespace C4Constants {
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
							public static BLIP: string;
							public static BLIP_MESSAGES: string;
							public static CHANGES: string;
							public static DATABASE: string;
							public static LISTENER: string;
							public static QUERY: string;
							public static SQL: string;
							public static SYNC: string;
							public static SYNC_BUSY: string;
							public static TLS: string;
							public static WEB_SOCKET: string;
							public static ZIP: string;
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
							public static UNKNOWN_INTERFACE: number;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export abstract class C4Database extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database>;
						public static DB_EXTENSION: string;
						public getSharedFleeceEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public closeDb(): void;
						public getCollection(param0: string, param1: string): com.couchbase.lite.internal.core.C4Collection;
						public getScopeNames(): java.util.Set<string>;
						public createRemoteReplicator(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, param1: string, param2: string, param3: number, param4: string, param5: string, param6: com.couchbase.lite.internal.sockets.MessageFraming, param7: com.couchbase.lite.ReplicatorType, param8: boolean, param9: java.util.Map<string,any>, param10: com.couchbase.lite.internal.core.C4Replicator.StatusListener, param11: com.couchbase.lite.internal.core.C4Replicator.DocEndsListener, param12: com.couchbase.lite.AbstractReplicator, param13: com.couchbase.lite.internal.SocketFactory): com.couchbase.lite.internal.core.C4Replicator;
						public close(): void;
						public createN1qlQuery(param0: string): com.couchbase.lite.internal.core.C4Query;
						public getPublicUUID(): androidNative.Array<number>;
						public static getUnmanagedDatabase(param0: number): com.couchbase.lite.internal.core.C4Database;
						public setCookie(param0: java.net.URI, param1: string, param2: boolean): void;
						public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
						public endTransaction(param0: boolean): void;
						public createLocalReplicator(param0: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, param1: com.couchbase.lite.internal.core.C4Database, param2: com.couchbase.lite.ReplicatorType, param3: boolean, param4: java.util.Map<string,any>, param5: com.couchbase.lite.internal.core.C4Replicator.StatusListener, param6: com.couchbase.lite.internal.core.C4Replicator.DocEndsListener, param7: com.couchbase.lite.AbstractReplicator): com.couchbase.lite.internal.core.C4Replicator;
						public getDbName(): string;
						public getCollectionNames(param0: string): java.util.Set<string>;
						public getDefaultCollection(): com.couchbase.lite.internal.core.C4Collection;
						public getDbDirectory(): string;
						public beginTransaction(): void;
						public performMaintenance(param0: com.couchbase.lite.MaintenanceType): boolean;
						public deleteCollection(param0: string, param1: string): void;
						public createJsonQuery(param0: string): com.couchbase.lite.internal.core.C4Query;
						public getDbFileName(): string;
						public hasScope(param0: string): boolean;
						public deleteDb(): void;
						public addCollection(param0: string, param1: string): com.couchbase.lite.internal.core.C4Collection;
						public getFLSharedKeys(): com.couchbase.lite.internal.fleece.FLSharedKeys;
						public createMessageEndpointReplicator(param0: java.util.Set<com.couchbase.lite.Collection>, param1: com.couchbase.lite.internal.core.C4Socket, param2: java.util.Map<string,any>, param3: com.couchbase.lite.internal.core.C4Replicator.StatusListener): com.couchbase.lite.internal.core.C4Replicator;
						public static getDatabase(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): com.couchbase.lite.internal.core.C4Database;
						public constructor(param0: java.lang.Long);
						public static copyDb(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
						public toString(): string;
						public getCookies(param0: java.net.URI): string;
						public constructor(param0: number);
						public getDbPath(): string;
						public static deleteNamedDb(param0: string, param1: string): void;
						public constructor(param0: com.couchbase.lite.internal.core.C4Database.NativeImpl, param1: string, param2: number);
						public rekey(param0: number, param1: androidNative.Array<number>): void;
						public static getDatabaseFile(param0: java.io.File, param1: string): java.io.File;
					}
					export namespace C4Database {
						export class ManagedC4Database extends com.couchbase.lite.internal.core.C4Database {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.ManagedC4Database>;
							public close(): void;
							public finalize(): void;
						}
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Database$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nOpen(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): number;
								nClose(param0: number): void;
								nFree(param0: number): void;
								nGetPath(param0: number): string;
								nCopy(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
								nDelete(param0: number): void;
								nDeleteNamed(param0: string, param1: string): void;
								nGetPublicUUID(param0: number): androidNative.Array<number>;
								nGetPrivateUUID(param0: number): androidNative.Array<number>;
								nBeginTransaction(param0: number): void;
								nEndTransaction(param0: number, param1: boolean): void;
								nMaintenance(param0: number, param1: number): boolean;
								nRekey(param0: number, param1: number, param2: androidNative.Array<number>): void;
								nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
								nGetCookies(param0: number, param1: string): string;
								nGetSharedFleeceEncoder(param0: number): number;
								nEncodeJSON(param0: number, param1: androidNative.Array<number>): com.couchbase.lite.internal.fleece.FLSliceResult;
								nGetFLSharedKeys(param0: number): number;
								nGetScopeNames(param0: number): java.util.Set<string>;
								nHasScope(param0: number, param1: string): boolean;
								nGetCollectionNames(param0: number, param1: string): java.util.Set<string>;
								nDeleteCollection(param0: number, param1: string, param2: string): void;
							});
							public constructor();
							public nEndTransaction(param0: number, param1: boolean): void;
							public nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
							public nGetPublicUUID(param0: number): androidNative.Array<number>;
							public nEncodeJSON(param0: number, param1: androidNative.Array<number>): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nFree(param0: number): void;
							public nClose(param0: number): void;
							public nCopy(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
							public nDeleteCollection(param0: number, param1: string, param2: string): void;
							public nDelete(param0: number): void;
							public nGetScopeNames(param0: number): java.util.Set<string>;
							public nHasScope(param0: number, param1: string): boolean;
							public nBeginTransaction(param0: number): void;
							public nDeleteNamed(param0: string, param1: string): void;
							public nGetSharedFleeceEncoder(param0: number): number;
							public nGetFLSharedKeys(param0: number): number;
							public nGetCollectionNames(param0: number, param1: string): java.util.Set<string>;
							public nRekey(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nGetPath(param0: number): string;
							public nMaintenance(param0: number, param1: number): boolean;
							public nGetCookies(param0: number, param1: string): string;
							public nGetPrivateUUID(param0: number): androidNative.Array<number>;
							public nOpen(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): number;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Document extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Document>;
						public getSequence(): number;
						public selectNextLeafRevision(param0: boolean, param1: boolean): void;
						public getSelectedSequence(): number;
						public static dictContainsBlobs(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: com.couchbase.lite.internal.fleece.FLSharedKeys): boolean;
						public close(): void;
						public resolveConflict(param0: string, param1: string, param2: androidNative.Array<number>, param3: number): void;
						public isRevDeleted(): boolean;
						public getSelectedRevID(): string;
						public getSelectedFlags(): number;
						public getGeneration(param0: string): number;
						public hasDocAttachments(): boolean;
						public getSelectedBody2(): com.couchbase.lite.internal.fleece.FLDict;
						public toString(): string;
						public update(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: number): com.couchbase.lite.internal.core.C4Document;
						public docExists(): boolean;
						public finalize(): void;
						public isDocConflicted(): boolean;
						public save(param0: number): void;
						public getRevID(): string;
						public isDocDeleted(): boolean;
						public hasRevAttachments(): boolean;
						public bodyAsJSON(param0: boolean): string;
						public isRevConflicted(): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4DocumentChange {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentChange>;
						public static createC4DocumentChange(param0: string, param1: string, param2: number, param3: boolean): com.couchbase.lite.internal.core.C4DocumentChange;
						public getSequence(): number;
						public isExternal(): boolean;
						public getRevID(): string;
						public getDocID(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4DocumentEnded {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentEnded>;
						public token: number;
						public scope: string;
						public collection: string;
						public docId: string;
						public revId: string;
						public flags: number;
						public sequence: number;
						public errorIsTransient: boolean;
						public errorDomain: number;
						public errorCode: number;
						public errorInternalInfo: number;
						public getErrorDomain(): number;
						public getErrorCode(): number;
						public getErrorInfo(): number;
						public toString(): string;
						public constructor(param0: number, param1: string, param2: string, param3: string, param4: string, param5: number, param6: number, param7: number, param8: number, param9: number, param10: boolean);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4DocumentObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserver>;
						public static NATIVE_IMPL: com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl;
						public static BOUND_OBSERVERS: com.couchbase.lite.internal.core.peers.NativeRefPeerBinding<com.couchbase.lite.internal.core.C4DocumentObserver>;
						public close(): void;
						public constructor(param0: number);
						public constructor(param0: com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl, param1: number, param2: java.lang.Runnable);
						public constructor(param0: java.lang.Long);
						public finalize(): void;
					}
					export namespace C4DocumentObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4DocumentObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number, param1: string): number;
								nFree(param0: number): void;
							});
							public constructor();
							public nCreate(param0: number, param1: string): number;
							public nFree(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4FullTextMatch extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4FullTextMatch>;
						public load(): com.couchbase.lite.internal.core.C4FullTextMatch;
						public close(): void;
						public hashCode(): number;
						public equals(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Key {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Key>;
						public static getPbkdf2Key(param0: string): androidNative.Array<number>;
						public static getCoreKey(param0: string): androidNative.Array<number>;
					}
					export namespace C4Key {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Key.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Key$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nPbkdf2(param0: string): androidNative.Array<number>;
								nDeriveKeyFromPassword(param0: string): androidNative.Array<number>;
							});
							public constructor();
							public nDeriveKeyFromPassword(param0: string): androidNative.Array<number>;
							public nPbkdf2(param0: string): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log>;
						public static LOGGER: java.util.concurrent.atomic.AtomicReference<com.couchbase.lite.internal.core.C4Log>;
						public setFileFileLevel(param0: com.couchbase.lite.LogLevel): void;
						public setC4LogLevel(param0: java.util.EnumSet<com.couchbase.lite.LogDomain>, param1: com.couchbase.lite.LogLevel): void;
						public constructor(param0: com.couchbase.lite.internal.core.C4Log.NativeImpl);
						public setCallbackLevel(param0: com.couchbase.lite.LogLevel): void;
						public getCallbackLevel(): com.couchbase.lite.LogLevel;
						public static logCallback(param0: string, param1: number, param2: string): void;
						public initFileLogger(param0: string, param1: com.couchbase.lite.LogLevel, param2: number, param3: number, param4: boolean, param5: string): void;
						public static create(): com.couchbase.lite.internal.core.C4Log;
						public getFileLogLevel(): number;
						public logInternal(param0: string, param1: number, param2: string): void;
						public setLevels(param0: number, param1: androidNative.Array<string>): void;
						public forceCallbackLevel(param0: com.couchbase.lite.LogLevel): void;
						public logToCore(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel, param2: string): void;
						public getLogLevel(param0: string): number;
						public static get(): com.couchbase.lite.internal.core.C4Log;
					}
					export namespace C4Log {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Log$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nLog(param0: string, param1: number, param2: string): void;
								nGetLevel(param0: string): number;
								nSetLevel(param0: string, param1: number): void;
								nSetCallbackLevel(param0: number): void;
								nGetBinaryFileLevel(): number;
								nSetBinaryFileLevel(param0: number): void;
								nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							});
							public constructor();
							public nSetLevel(param0: string, param1: number): void;
							public nSetCallbackLevel(param0: number): void;
							public nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							public nSetBinaryFileLevel(param0: number): void;
							public nGetLevel(param0: string): number;
							public nLog(param0: string, param1: number, param2: string): void;
							public nGetBinaryFileLevel(): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export abstract class C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4NativePeer>;
						public getPeer(): number;
						public getPeerLock(): any;
						public constructor(param0: number);
						public withPeer(param0: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public withPeerOrThrow(param0: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): any;
						public releasePeer(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public constructor(param0: java.lang.Long);
						public withPeerOrDefault(param0: any, param1: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public toString(): string;
						public withPeerOrNull(param0: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Query extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query>;
						public getColumnNameForIndex(param0: number): string;
						public close(): void;
						public static create(param0: com.couchbase.lite.internal.core.C4Collection, param1: com.couchbase.lite.AbstractIndex.QueryLanguage, param2: string): com.couchbase.lite.internal.core.C4Query;
						public setParameters(param0: com.couchbase.lite.internal.fleece.FLSliceResult): void;
						public run(param0: com.couchbase.lite.internal.core.C4QueryOptions, param1: com.couchbase.lite.internal.fleece.FLSliceResult): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public static create(param0: com.couchbase.lite.internal.core.C4Database, param1: com.couchbase.lite.AbstractIndex.QueryLanguage, param2: string): com.couchbase.lite.internal.core.C4Query;
						public explain(): string;
						public getColumnCount(): number;
						public finalize(): void;
					}
					export namespace C4Query {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Query$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreateQuery(param0: number, param1: number, param2: string): number;
								nSetParameters(param0: number, param1: number, param2: number): void;
								nExplain(param0: number): string;
								nRun(param0: number, param1: boolean, param2: number, param3: number): number;
								nColumnCount(param0: number): number;
								nColumnName(param0: number, param1: number): string;
								nFree(param0: number): void;
							});
							public constructor();
							public nRun(param0: number, param1: boolean, param2: number, param3: number): number;
							public nFree(param0: number): void;
							public nCreateQuery(param0: number, param1: number, param2: string): number;
							public nSetParameters(param0: number, param1: number, param2: number): void;
							public nExplain(param0: number): string;
							public nColumnName(param0: number, param1: number): string;
							public nColumnCount(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4QueryEnumerator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryEnumerator>;
						public getMissingColumns(): number;
						public getColumns(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public close(): void;
						public next(): boolean;
						public finalize(): void;
					}
					export namespace C4QueryEnumerator {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryEnumerator.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4QueryEnumerator$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nNext(param0: number): boolean;
								nFree(param0: number): void;
								nGetColumns(param0: number): number;
								nGetMissingColumns(param0: number): number;
								nGetFullTextMatchCount(param0: number): number;
								nGetFullTextMatch(param0: number, param1: number): number;
							});
							public constructor();
							public nGetFullTextMatchCount(param0: number): number;
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nGetMissingColumns(param0: number): number;
							public nGetColumns(param0: number): number;
							public nGetFullTextMatch(param0: number, param1: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4QueryObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryObserver>;
						public close(): void;
						public static create(param0: com.couchbase.lite.internal.core.C4Query, param1: com.couchbase.lite.internal.core.C4QueryObserver.QueryChangeCallback): com.couchbase.lite.internal.core.C4QueryObserver;
						public setEnabled(param0: boolean): void;
						public static create(param0: com.couchbase.lite.internal.core.C4QueryObserver.NativeImpl, param1: com.couchbase.lite.internal.utils.Fn.Function<java.lang.Long,com.couchbase.lite.internal.core.C4QueryEnumerator>, param2: com.couchbase.lite.internal.core.C4Query, param3: com.couchbase.lite.internal.core.C4QueryObserver.QueryChangeCallback): com.couchbase.lite.internal.core.C4QueryObserver;
						public toString(): string;
						public finalize(): void;
					}
					export namespace C4QueryObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4QueryObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number, param1: number): number;
								nSetEnabled(param0: number, param1: boolean): void;
								nFree(param0: number): void;
								nGetEnumerator(param0: number, param1: boolean): number;
							});
							public constructor();
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
							public nGetEnumerator(param0: number, param1: boolean): number;
							public nSetEnabled(param0: number, param1: boolean): void;
						}
						export class QueryChangeCallback {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryObserver.QueryChangeCallback>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4QueryObserver$QueryChangeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onQueryChanged(param0: com.couchbase.lite.internal.core.C4QueryEnumerator, param1: com.couchbase.lite.LiteCoreException): void;
							});
							public constructor();
							public onQueryChanged(param0: com.couchbase.lite.internal.core.C4QueryEnumerator, param1: com.couchbase.lite.LiteCoreException): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export abstract class C4Replicator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator>;
						public static LOG_DOMAIN: com.couchbase.lite.LogDomain;
						public static WEBSOCKET_SCHEME: string;
						public static WEBSOCKET_SECURE_CONNECTION_SCHEME: string;
						public static MESSAGE_SCHEME: string;
						public static C4_REPLICATOR_SCHEME_2: string;
						public static C4_REPLICATOR_TLS_SCHEME_2: string;
						public static PROGRESS_OVERALL: number;
						public static PROGRESS_PER_DOC: number;
						public static PROGRESS_PER_ATTACHMENT: number;
						public static REPLICATOR_OPTION_DOC_IDS: string;
						public static REPLICATOR_OPTION_CHANNELS: string;
						public static REPLICATOR_OPTION_FILTER: string;
						public static REPLICATOR_OPTION_FILTER_PARAMS: string;
						public static REPLICATOR_OPTION_SKIP_DELETED: string;
						public static REPLICATOR_OPTION_NO_INCOMING_CONFLICTS: string;
						public static REPLICATOR_OPTION_OUTGOING_CONFLICTS: string;
						public static REPLICATOR_CHECKPOINT_INTERVAL: string;
						public static REPLICATOR_OPTION_REMOTE_DB_UNIQUE_ID: string;
						public static REPLICATOR_OPTION_DISABLE_DELTAS: string;
						public static REPLICATOR_OPTION_DISABLE_PROPERTY_DECRYPTION: string;
						public static REPLICATOR_OPTION_MAX_RETRIES: string;
						public static REPLICATOR_OPTION_MAX_RETRY_INTERVAL: string;
						public static REPLICATOR_OPTION_ENABLE_AUTO_PURGE: string;
						public static REPLICATOR_OPTION_ROOT_CERTS: string;
						public static REPLICATOR_OPTION_PINNED_SERVER_CERT: string;
						public static REPLICATOR_OPTION_SELF_SIGNED_SERVER_CERT: string;
						public static REPLICATOR_OPTION_EXTRA_HEADERS: string;
						public static REPLICATOR_OPTION_COOKIES: string;
						public static REPLICATOR_OPTION_ACCEPT_PARENT_COOKIES: string;
						public static REPLICATOR_OPTION_AUTHENTICATION: string;
						public static REPLICATOR_OPTION_PROXY_SERVER: string;
						public static REPLICATOR_HEARTBEAT_INTERVAL: string;
						public static SOCKET_OPTION_WS_PROTOCOLS: string;
						public static SOCKET_OPTIONS_NETWORK_INTERFACE: string;
						public static REPLICATOR_COMPRESSION_LEVEL: string;
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
						public statusListener: com.couchbase.lite.internal.core.C4Replicator.StatusListener;
						public releaseResources(): void;
						public close(): void;
						public setHostReachable(param0: boolean): void;
						public start(param0: boolean): void;
						public getStatus(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public setOptions(param0: androidNative.Array<number>): void;
						public setProgressLevel(param0: number): void;
						public stop(): void;
						public isDocumentPending(param0: string, param1: string, param2: string): boolean;
						public getPendingDocIDs(param0: string, param1: string): java.util.Set<string>;
						public documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
						public finalize(): void;
					}
					export namespace C4Replicator {
						export class C4CommonReplicator extends com.couchbase.lite.internal.core.C4Replicator {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.C4CommonReplicator>;
							public documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
							public releaseResources(): void;
							public toString(): string;
						}
						export class C4MessageEndpointReplicator extends com.couchbase.lite.internal.core.C4Replicator {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.C4MessageEndpointReplicator>;
							public documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
							public releaseResources(): void;
							public toString(): string;
						}
						export class DocEndsListener {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.DocEndsListener>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Replicator$DocEndsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
							});
							public constructor();
							public documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
						}
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Replicator$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: string, param3: string, param4: number, param5: string, param6: string, param7: number, param8: boolean, param9: boolean, param10: boolean, param11: androidNative.Array<number>, param12: number, param13: number): number;
								nCreateLocal(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean, param6: androidNative.Array<number>, param7: number): number;
								nCreateWithSocket(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): number;
								nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
								nStart(param0: number, param1: boolean): void;
								nStop(param0: number): void;
								nSetOptions(param0: number, param1: androidNative.Array<number>): void;
								nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
								nIsDocumentPending(param0: number, param1: string, param2: string, param3: string): boolean;
								nSetProgressLevel(param0: number, param1: number): void;
								nSetHostReachable(param0: number, param1: boolean): void;
								nFree(param0: number): void;
							});
							public constructor();
							public nCreateWithSocket(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): number;
							public nSetProgressLevel(param0: number, param1: number): void;
							public nFree(param0: number): void;
							public nSetOptions(param0: number, param1: androidNative.Array<number>): void;
							public nStop(param0: number): void;
							public nCreateLocal(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean, param6: androidNative.Array<number>, param7: number): number;
							public nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
							public nSetHostReachable(param0: number, param1: boolean): void;
							public nStart(param0: number, param1: boolean): void;
							public nCreate(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: string, param3: string, param4: number, param5: string, param6: string, param7: number, param8: boolean, param9: boolean, param10: boolean, param11: androidNative.Array<number>, param12: number, param13: number): number;
							public nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nIsDocumentPending(param0: number, param1: string, param2: string, param3: string): boolean;
						}
						export class StatusListener {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.StatusListener>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Replicator$StatusListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus): void;
							});
							public constructor();
							public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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
						public constructor(param0: number, param1: number, param2: number);
						public getProgressUnitsCompleted(): number;
						public toString(): string;
					}
					export namespace C4ReplicatorStatus {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export class C4Socket extends com.couchbase.lite.internal.core.C4NativePeer implements com.couchbase.lite.internal.sockets.SocketToCore {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket>;
						public ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
						public close(): void;
						public closeCore(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public static createPassiveSocket(param0: number, param1: com.couchbase.lite.internal.sockets.MessageFraming): com.couchbase.lite.internal.core.C4Socket;
						public writeToCore(param0: androidNative.Array<number>): void;
						public requestCoreClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public toString(): string;
						public getLock(): any;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromCore): void;
						public ackWriteToCore(param0: number): void;
						public finalize(): void;
					}
					export namespace C4Socket {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Socket$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nRetain(param0: number): void;
								nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
								nOpened(param0: number): void;
								nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
								nCompletedWrite(param0: number, param1: number): void;
								nReceived(param0: number, param1: androidNative.Array<number>): void;
								nCloseRequested(param0: number, param1: number, param2: string): void;
								nClosed(param0: number, param1: number, param2: number, param3: string): void;
							});
							public constructor();
							public nCompletedWrite(param0: number, param1: number): void;
							public nReceived(param0: number, param1: androidNative.Array<number>): void;
							public nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nClosed(param0: number, param1: number, param2: number, param3: string): void;
							public nRetain(param0: number): void;
							public nOpened(param0: number): void;
							public nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
							public nCloseRequested(param0: number, param1: number, param2: string): void;
						}
						export class SocketTask {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket.SocketTask>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Socket$SocketTask interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: com.couchbase.lite.internal.core.C4Socket, param1: com.couchbase.lite.internal.sockets.SocketFromCore): void;
							});
							public constructor();
							public accept(param0: com.couchbase.lite.internal.core.C4Socket, param1: com.couchbase.lite.internal.sockets.SocketFromCore): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4 extends com.couchbase.lite.internal.core.C4.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4>;
							public constructor();
							public nGetBuildInfo(): string;
							public nGetMessage(param0: number, param1: number, param2: number): string;
							public nGetVersion(): string;
							public static getVersion(): string;
							public static setenv(param0: string, param1: string, param2: number): void;
							public static getBuildInfo(): string;
							public nDebug(param0: boolean): void;
							public nSetTempDir(param0: string): void;
							public nSetenv(param0: string, param1: string, param2: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Collection extends com.couchbase.lite.internal.core.C4Collection.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Collection>;
							public constructor();
							public nCollectionIsValid(param0: number): boolean;
							public nGetDefaultCollection(param0: number): number;
							public nFree(param0: number): void;
							public nCreateIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: string, param6: boolean): void;
							public nCreateCollection(param0: number, param1: string, param2: string): number;
							public nPurgeDoc(param0: number, param1: string): void;
							public nSetDocExpiration(param0: number, param1: string, param2: number): void;
							public nGetDocExpiration(param0: number, param1: string): number;
							public nGetCollection(param0: number, param1: string, param2: string): number;
							public nGetDocumentCount(param0: number): number;
							public nGetIndexesInfo(param0: number): number;
							public nDeleteIndex(param0: number, param1: string): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4CollectionObserver extends com.couchbase.lite.internal.core.C4CollectionObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4CollectionObserver>;
							public constructor();
							public nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
							public nCreate(param0: number): number;
							public nFree(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Database extends com.couchbase.lite.internal.core.C4Database.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Database>;
							public constructor();
							public nEndTransaction(param0: number, param1: boolean): void;
							public nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
							public nGetPublicUUID(param0: number): androidNative.Array<number>;
							public nEncodeJSON(param0: number, param1: androidNative.Array<number>): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nFree(param0: number): void;
							public nClose(param0: number): void;
							public nCopy(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
							public nDeleteCollection(param0: number, param1: string, param2: string): void;
							public nDelete(param0: number): void;
							public nGetScopeNames(param0: number): java.util.Set<string>;
							public nHasScope(param0: number, param1: string): boolean;
							public nBeginTransaction(param0: number): void;
							public nDeleteNamed(param0: string, param1: string): void;
							public nGetSharedFleeceEncoder(param0: number): number;
							public nGetFLSharedKeys(param0: number): number;
							public nGetCollectionNames(param0: number, param1: string): java.util.Set<string>;
							public nRekey(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nGetPath(param0: number): string;
							public nMaintenance(param0: number, param1: number): boolean;
							public nGetCookies(param0: number, param1: string): string;
							public nGetPrivateUUID(param0: number): androidNative.Array<number>;
							public nOpen(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4DocumentObserver extends com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4DocumentObserver>;
							public constructor();
							public nCreate(param0: number, param1: string): number;
							public nFree(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Key extends com.couchbase.lite.internal.core.C4Key.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Key>;
							public constructor();
							public nDeriveKeyFromPassword(param0: string): androidNative.Array<number>;
							public nPbkdf2(param0: string): androidNative.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Log extends com.couchbase.lite.internal.core.C4Log.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Log>;
							public constructor();
							public nSetLevel(param0: string, param1: number): void;
							public nSetCallbackLevel(param0: number): void;
							public nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							public nSetBinaryFileLevel(param0: number): void;
							public nGetLevel(param0: string): number;
							public nLog(param0: string, param1: number, param2: string): void;
							public nGetBinaryFileLevel(): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Query extends com.couchbase.lite.internal.core.C4Query.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Query>;
							public constructor();
							public nRun(param0: number, param1: boolean, param2: number, param3: number): number;
							public nFree(param0: number): void;
							public nCreateQuery(param0: number, param1: number, param2: string): number;
							public nSetParameters(param0: number, param1: number, param2: number): void;
							public nExplain(param0: number): string;
							public nColumnName(param0: number, param1: number): string;
							public nColumnCount(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4QueryEnumerator extends com.couchbase.lite.internal.core.C4QueryEnumerator.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4QueryEnumerator>;
							public constructor();
							public nGetFullTextMatchCount(param0: number): number;
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nGetMissingColumns(param0: number): number;
							public nGetColumns(param0: number): number;
							public nGetFullTextMatch(param0: number, param1: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4QueryObserver extends com.couchbase.lite.internal.core.C4QueryObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4QueryObserver>;
							public constructor();
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
							public nGetEnumerator(param0: number, param1: boolean): number;
							public nSetEnabled(param0: number, param1: boolean): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Replicator extends com.couchbase.lite.internal.core.C4Replicator.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Replicator>;
							public constructor();
							public nSetProgressLevel(param0: number, param1: number): void;
							public nFree(param0: number): void;
							public nSetOptions(param0: number, param1: androidNative.Array<number>): void;
							public nSetHostReachable(param0: number, param1: boolean): void;
							public nStart(param0: number, param1: boolean): void;
							public nCreate(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: string, param3: string, param4: number, param5: string, param6: string, param7: number, param8: boolean, param9: boolean, param10: boolean, param11: androidNative.Array<number>, param12: number, param13: number): number;
							public nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nCreateWithSocket(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: androidNative.Array<number>, param4: number): number;
							public nStop(param0: number): void;
							public nCreateLocal(param0: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param1: number, param2: number, param3: boolean, param4: boolean, param5: boolean, param6: androidNative.Array<number>, param7: number): number;
							public nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
							public nIsDocumentPending(param0: number, param1: string, param2: string, param3: string): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace impl {
						export class NativeC4Socket extends com.couchbase.lite.internal.core.C4Socket.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Socket>;
							public constructor();
							public nCompletedWrite(param0: number, param1: number): void;
							public nReceived(param0: number, param1: androidNative.Array<number>): void;
							public nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nClosed(param0: number, param1: number, param2: number, param3: string): void;
							public nRetain(param0: number): void;
							public nOpened(param0: number): void;
							public nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
							public nCloseRequested(param0: number, param1: number, param2: string): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace peers {
						export class NativeRefPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.WeakPeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.NativeRefPeerBinding<any>>;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace peers {
						export abstract class PeerBinding<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.PeerBinding<any>>;
							public get(param0: number): T;
							public size(): number;
							public set(param0: number, param1: T): void;
							public unbind(param0: number): void;
							public remove(param0: number): void;
							public clear(): void;
							public keySet(): java.util.Set<java.lang.Long>;
							public getBinding(param0: number): T;
							public bind(param0: number, param1: T): void;
							public exists(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace peers {
						export class TaggedWeakPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.WeakPeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding<any>>;
							public constructor();
							public getBinding(param0: number): any;
							public bind(param0: number, param1: any): void;
							public reserveKey(): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace core {
					export namespace peers {
						export abstract class WeakPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.PeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.WeakPeerBinding<any>>;
							public size(): number;
							public remove(param0: number): void;
							public get(param0: number): any;
							public clear(): void;
							public keySet(): java.util.Set<java.lang.Long>;
							public set(param0: number, param1: any): void;
							public exists(param0: number): boolean;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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
					export namespace ExecutionService {
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
						export namespace CloseableExecutor {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace exec {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class FLArray {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArray>;
						public count(): number;
						public get(param0: number): com.couchbase.lite.internal.fleece.FLValue;
						public asTypedArray(): java.util.List<any>;
						public static create(param0: number): com.couchbase.lite.internal.fleece.FLArray;
						public asArray(): java.util.List<any>;
					}
					export namespace FLArray {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArray.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLArray$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCount(param0: number): number;
								nGet(param0: number, param1: number): number;
							});
							public constructor();
							public nGet(param0: number, param1: number): number;
							public nCount(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export abstract class FLArrayIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator>;
						public static getManagedArrayIterator(param0: com.couchbase.lite.internal.fleece.FLArray): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public constructor(param0: number);
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public static getUnmanagedArrayIterator(param0: number): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public constructor(param0: java.lang.Long);
						public next(): boolean;
						public getValueAt(param0: number): com.couchbase.lite.internal.fleece.FLValue;
					}
					export namespace FLArrayIterator {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class FLConstants {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLConstants>;
					}
					export namespace FLConstants {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class FLDict {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDict>;
						public asDict(): java.util.Map<string,any>;
						public count(): number;
						public toFLValue(): com.couchbase.lite.internal.fleece.FLValue;
						public get(param0: string): com.couchbase.lite.internal.fleece.FLValue;
						public static create(param0: number): com.couchbase.lite.internal.fleece.FLDict;
					}
					export namespace FLDict {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDict.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLDict$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCount(param0: number): number;
								nGet(param0: number, param1: androidNative.Array<number>): number;
							});
							public constructor();
							public nCount(param0: number): number;
							public nGet(param0: number, param1: androidNative.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class FLDictIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDictIterator>;
						public constructor(param0: com.couchbase.lite.internal.fleece.FLDict);
						public close(): void;
						public constructor(param0: number);
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public constructor(param0: java.lang.Long);
						public getCount(): number;
						public next(): boolean;
						public getKey(): string;
						public finalize(): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export abstract class FLEncoder extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder>;
						public arguments: java.util.Map<string,any>;
						public writeKey(param0: string): boolean;
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
						public static encodeMap(param0: java.util.Map<string,any>): androidNative.Array<number>;
						public writeValue(param0: any): boolean;
						public writeNull(): boolean;
						public write(param0: java.util.Map<string,any>): boolean;
						public reset(): void;
					}
					export namespace FLEncoder {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class FLSliceResult {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult>;
						public getBase(): number;
						public getSize(): number;
						public getContent(): androidNative.Array<number>;
						public constructor(param0: number, param1: number);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class JSONEncoder extends com.couchbase.lite.internal.fleece.FLEncoder.ManagedFLEncoder {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.JSONEncoder>;
						public finishJSON(): string;
						public constructor();
						public finish2Unmanaged(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public finish(): androidNative.Array<number>;
						public constructor(param0: number);
						public constructor(param0: java.lang.Long);
						public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class MArray extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MArray>;
						public constructor();
						public count(): number;
						public set(param0: number, param1: any): boolean;
						public remove(param0: number, param1: number): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MArray, param1: boolean);
						public insert(param0: number, param1: any): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection);
						public constructor(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean);
						public append(param0: any): boolean;
						public get(param0: number): com.couchbase.lite.internal.fleece.MValue;
						public clear(): void;
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export abstract class MCollection extends com.couchbase.lite.internal.fleece.Encodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MCollection>;
						public constructor(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean);
						public mutate(): void;
						public constructor();
						public getMutationCount(): number;
						public getContext(): com.couchbase.lite.internal.fleece.MContext;
						public isMutated(): boolean;
						public hasMutableChildren(): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean);
						public isMutable(): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class MDict extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MDict>;
						public constructor();
						public count(): number;
						public remove(param0: string): void;
						public getKeys(): java.util.List<string>;
						public constructor(param0: com.couchbase.lite.internal.fleece.MDict, param1: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection);
						public constructor(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean);
						public contains(param0: string): boolean;
						public set(param0: string, param1: com.couchbase.lite.internal.fleece.MValue): void;
						public clear(): void;
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
						public get(param0: string): com.couchbase.lite.internal.fleece.MValue;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class MRoot extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MRoot>;
						public constructor(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean);
						public constructor();
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: com.couchbase.lite.internal.fleece.FLValue, param2: boolean);
						public asNative(): any;
						public isMutated(): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export class MValue extends com.couchbase.lite.MValueConverter implements com.couchbase.lite.internal.fleece.Encodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MValue>;
						public mutate(): void;
						public asNative(param0: com.couchbase.lite.internal.fleece.MCollection): any;
						public constructor();
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public isEmpty(): boolean;
						public constructor(param0: any);
						public isMutated(): boolean;
						public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export namespace impl {
						export class NativeFLArray extends com.couchbase.lite.internal.fleece.FLArray.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLArray>;
							public constructor();
							public nGet(param0: number, param1: number): number;
							public nCount(param0: number): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace fleece {
					export namespace impl {
						export class NativeFLDict extends com.couchbase.lite.internal.fleece.FLDict.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLDict>;
							public constructor();
							public nCount(param0: number): number;
							public nGet(param0: number, param1: androidNative.Array<number>): number;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace listener {
					export class ChangeListenerToken<T>  extends com.couchbase.lite.ListenerToken {
						public static class: java.lang.Class<com.couchbase.lite.internal.listener.ChangeListenerToken<any>>;
						public static DUMMY: com.couchbase.lite.internal.listener.ChangeListenerToken<java.lang.Void>;
						public postChange(param0: any): void;
						public constructor(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
						public getKey(): string;
						public setKey(param0: string): void;
						public constructor(param0: com.couchbase.lite.ChangeListener<any>, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace listener {
					export abstract class ChangeNotifier<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.listener.ChangeNotifier<any>>;
						public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ChangeListener<T>, param2: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>): com.couchbase.lite.internal.listener.ChangeListenerToken<T>;
						public constructor();
						public removeChangeListener(param0: com.couchbase.lite.ListenerToken): boolean;
						public postChange(param0: T): void;
						public getListenerCount(): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export abstract class AbstractCBLTrustManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLTrustManager>;
						public useCBLTrustManagement(): boolean;
						public getDefaultTrustManager(): javax.net.ssl.X509TrustManager;
						public asList(param0: androidNative.Array<java.security.cert.X509Certificate>): java.util.List<java.security.cert.X509Certificate>;
						public constructor(param0: java.security.cert.X509Certificate, param1: boolean, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public getAcceptedIssuers(): androidNative.Array<java.security.cert.X509Certificate>;
						public notifyListener(param0: java.util.List<java.security.cert.X509Certificate>): void;
						public cBLServerTrustCheck(param0: java.util.List<java.security.cert.X509Certificate>, param1: string): void;
						public checkClientTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export abstract class AbstractCBLWebSocket implements com.couchbase.lite.internal.sockets.SocketFromCore, com.couchbase.lite.internal.sockets.SocketFromRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket>;
						public static DEFAULT_HEARTBEAT_SEC: number;
						public static MAX_AUTH_RETRIES: number;
						public static HEADER_COOKIES: string;
						public static HEADER_USER_AGENT: string;
						public static HEADER_AUTH: string;
						public static ERROR_INTERCEPTOR: string;
						public coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public close(): void;
						public remoteWrites(param0: androidNative.Array<number>): void;
						public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
						public coreRequestsOpen(): void;
						public getOptions(): java.util.Map<string,any>;
						public remoteFailed(param0: java.lang.Throwable): void;
						public coreClosed(): void;
						public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public handleCloseCause(param0: java.lang.Throwable): number;
						public coreAcksWrite(param0: number): void;
						public toString(): string;
						public handleClose(param0: java.lang.Throwable): com.couchbase.lite.internal.sockets.CloseStatus;
						public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreWrites(param0: androidNative.Array<number>): void;
						public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
						public static addKeyManager(param0: javax.net.ssl.KeyManager): number;
						public constructor(param0: com.couchbase.lite.internal.sockets.SocketToRemote, param1: com.couchbase.lite.internal.sockets.SocketToCore, param2: java.net.URI, param3: androidNative.Array<number>, param4: com.couchbase.lite.internal.replicator.CBLCookieStore, param5: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public getLock(): any;
					}
					export namespace AbstractCBLWebSocket {
						export class ConstrainedAddressSocketFactory {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.ConstrainedAddressSocketFactory>;
							public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
							public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public getDefaultCipherSuites(): androidNative.Array<string>;
							public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
							public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public createSocket(param0: string, param1: number): java.net.Socket;
							public getSupportedCipherSuites(): androidNative.Array<string>;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export abstract class BaseReplicator {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.BaseReplicator>;
						public dispatcher: java.util.concurrent.Executor;
						public constructor();
						public getC4Replicator(): com.couchbase.lite.internal.core.C4Replicator;
						public close(): void;
						public setC4Replicator(param0: com.couchbase.lite.internal.core.C4Replicator): void;
						public getReplicatorLock(): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export class CBLCookieStore {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLCookieStore>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.replicator.CBLCookieStore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							setCookies(param0: java.net.URI, param1: java.util.List<string>, param2: boolean): void;
							getCookies(param0: java.net.URI): string;
						});
						public constructor();
						public getCookies(param0: java.net.URI): string;
						public setCookies(param0: java.net.URI, param1: java.util.List<string>, param2: boolean): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export class CBLTrustManager extends com.couchbase.lite.internal.replicator.AbstractCBLTrustManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLTrustManager>;
						public constructor(param0: java.security.cert.X509Certificate, param1: boolean, param2: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string, param2: string): java.util.List<java.security.cert.X509Certificate>;
						public checkServerTrusted(param0: androidNative.Array<java.security.cert.X509Certificate>, param1: string): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export class CBLWebSocket extends com.couchbase.lite.internal.replicator.AbstractCBLWebSocket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLWebSocket>;
						public coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public remoteWrites(param0: androidNative.Array<number>): void;
						public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
						public coreRequestsOpen(): void;
						public remoteFailed(param0: java.lang.Throwable): void;
						public coreClosed(): void;
						public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public handleCloseCause(param0: java.lang.Throwable): number;
						public coreAcksWrite(param0: number): void;
						public handleClose(param0: java.lang.Throwable): com.couchbase.lite.internal.sockets.CloseStatus;
						public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreWrites(param0: androidNative.Array<number>): void;
						public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
						public constructor(param0: com.couchbase.lite.internal.sockets.SocketToRemote, param1: com.couchbase.lite.internal.sockets.SocketToCore, param2: java.net.URI, param3: androidNative.Array<number>, param4: com.couchbase.lite.internal.replicator.CBLCookieStore, param5: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public getLock(): any;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export class ConflictResolutionException {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.ConflictResolutionException>;
						public static FAILED_SELECTING_CONFLICTING_REVISION: number;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
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
					export namespace NetworkConnectivityManager {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace replicator {
					export class ReplicationStatusChange {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.ReplicationStatusChange>;
						public status: com.couchbase.lite.ReplicatorStatus;
						public getStatus(): com.couchbase.lite.ReplicatorStatus;
						public constructor(param0: com.couchbase.lite.ReplicatorStatus);
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class CBLSocketException {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.CBLSocketException>;
						public constructor(param0: number, param1: number, param2: string);
						public getDomain(): number;
						public getCode(): number;
						public constructor(param0: number, param1: number, param2: string, param3: java.lang.Throwable);
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class CloseStatus {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.CloseStatus>;
						public domain: number;
						public code: number;
						public message: string;
						public constructor(param0: number, param1: string);
						public constructor(param0: number, param1: number, param2: string);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class MessageFraming {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.MessageFraming>;
						public static CLIENT_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static NO_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static SERVER_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static C4_WEB_SOCKET_CLIENT_FRAMING: number;
						public static C4_NO_FRAMING: number;
						public static C4_WEB_SOCKET_SERVER_FRAMING: number;
						public static valueOf(param0: string): com.couchbase.lite.internal.sockets.MessageFraming;
						public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.MessageFraming>;
						public static getC4Framing(param0: com.couchbase.lite.internal.sockets.MessageFraming): number;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class OkHttpSocket implements com.couchbase.lite.internal.sockets.SocketToRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.OkHttpSocket>;
						public constructor();
						public close(): void;
						public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
						public openRemote(param0: java.net.URI, param1: java.util.Map<string,any>): boolean;
						public cancelRemote(): void;
						public toString(): string;
						public onMessage(param0: okhttp3.WebSocket, param1: string): void;
						public closeRemote(param0: com.couchbase.lite.internal.sockets.CloseStatus): boolean;
						public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
						public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
						public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
						public static parseCookies(param0: okhttp3.HttpUrl, param1: string): java.util.List<okhttp3.Cookie>;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromRemote): void;
						public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
						public writeToRemote(param0: androidNative.Array<number>): boolean;
					}
					export namespace OkHttpSocket {
						export class SocketFactory {
							public static class: java.lang.Class<com.couchbase.lite.internal.sockets.OkHttpSocket.SocketFactory>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.sockets.OkHttpSocket$SocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(param0: okhttp3.OkHttpClient, param1: okhttp3.Request, param2: okhttp3.WebSocketListener): okhttp3.WebSocket;
							});
							public constructor();
							public create(param0: okhttp3.OkHttpClient, param1: okhttp3.Request, param2: okhttp3.WebSocketListener): okhttp3.WebSocket;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class SocketFromCore {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketFromCore>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.sockets.SocketFromCore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							coreRequestsOpen(): void;
							coreWrites(param0: androidNative.Array<number>): void;
							coreAcksWrite(param0: number): void;
							coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							coreClosed(): void;
						});
						public constructor();
						public coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreWrites(param0: androidNative.Array<number>): void;
						public coreRequestsOpen(): void;
						public coreClosed(): void;
						public coreAcksWrite(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class SocketFromRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketFromRemote>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.sockets.SocketFromRemote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLock(): any;
							setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
							remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
							remoteWrites(param0: androidNative.Array<number>): void;
							remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							remoteFailed(param0: java.lang.Throwable): void;
						});
						public constructor();
						public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public remoteWrites(param0: androidNative.Array<number>): void;
						public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
						public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
						public remoteFailed(param0: java.lang.Throwable): void;
						public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public getLock(): any;
					}
					export namespace SocketFromRemote {
						export class Constants extends com.couchbase.lite.internal.sockets.SocketFromRemote {
							public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketFromRemote.Constants>;
							public static NULL: com.couchbase.lite.internal.sockets.SocketFromRemote.Constants;
							public static valueOf(param0: string): com.couchbase.lite.internal.sockets.SocketFromRemote.Constants;
							public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.SocketFromRemote.Constants>;
							public remoteWrites(param0: androidNative.Array<number>): void;
							public getLock(): any;
							public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
							public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
							public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							public remoteFailed(param0: java.lang.Throwable): void;
							public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class SocketState {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketState>;
						public static UNOPENED: com.couchbase.lite.internal.sockets.SocketState;
						public static OPENING: com.couchbase.lite.internal.sockets.SocketState;
						public static OPEN: com.couchbase.lite.internal.sockets.SocketState;
						public static CLOSING: com.couchbase.lite.internal.sockets.SocketState;
						public static CLOSED: com.couchbase.lite.internal.sockets.SocketState;
						public static valueOf(param0: string): com.couchbase.lite.internal.sockets.SocketState;
						public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.SocketState>;
						public static getSocketStateMachine(): com.couchbase.lite.internal.utils.StateMachine<com.couchbase.lite.internal.sockets.SocketState>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class SocketToCore {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketToCore>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.sockets.SocketToCore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLock(): any;
							init(param0: com.couchbase.lite.internal.sockets.SocketFromCore): void;
							ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
							ackWriteToCore(param0: number): void;
							writeToCore(param0: androidNative.Array<number>): void;
							requestCoreClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							closeCore(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						});
						public constructor();
						public ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
						public closeCore(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public writeToCore(param0: androidNative.Array<number>): void;
						public requestCoreClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public getLock(): any;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromCore): void;
						public ackWriteToCore(param0: number): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace sockets {
					export class SocketToRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketToRemote>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.sockets.SocketToRemote interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							init(param0: com.couchbase.lite.internal.sockets.SocketFromRemote): void;
							openRemote(param0: java.net.URI, param1: java.util.Map<string,any>): boolean;
							writeToRemote(param0: androidNative.Array<number>): boolean;
							closeRemote(param0: com.couchbase.lite.internal.sockets.CloseStatus): boolean;
							cancelRemote(): void;
						});
						public constructor();
						public openRemote(param0: java.net.URI, param1: java.util.Map<string,any>): boolean;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromRemote): void;
						public cancelRemote(): void;
						public writeToRemote(param0: androidNative.Array<number>): boolean;
						public closeRemote(param0: com.couchbase.lite.internal.sockets.CloseStatus): boolean;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace support {
					export class Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.support.Log>;
						public static LOG_HEADER: string;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static formatStandardMessage(param0: string, param1: androidNative.Array<any>): string;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: androidNative.Array<any>): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static initLogging(): void;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static initLogging(param0: java.util.Map<string,string>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static warn(): void;
						public static testLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string, param3: androidNative.Array<any>): void;
						public static lookupStandardMessage(param0: string): string;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: androidNative.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class ClassUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.ClassUtils>;
						public static castOrNull(param0: java.lang.Class<any>, param1: any): any;
						public static hash(param0: androidNative.Array<any>): number;
						public static isEqual(param0: any, param1: any): boolean;
						public static objId(param0: any): string;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class FileUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.FileUtils>;
						public static getCurrentDirectory(): java.io.File;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class Fn {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							forAll(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Consumer<any>): void;
							firstOrNull(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Predicate<any>): any;
							foldR(param0: java.util.Collection<any>, param1: any, param2: com.couchbase.lite.internal.utils.Fn.BiFunction<any,any,any>): any;
							filterToList(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): java.util.List<any>;
							filterToSet(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Predicate<any>): java.util.Set<any>;
							mapToList(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): java.util.List<any>;
							mapToSet(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): java.util.Set<any>;
						});
						public constructor();
						public static mapToList(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): java.util.List<any>;
						public static filterToList(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): java.util.List<any>;
						public static firstOrNull(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Predicate<any>): any;
						public static mapToSet(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.FunctionThrows<any,any,any>): java.util.Set<any>;
						public static foldR(param0: java.util.Collection<any>, param1: any, param2: com.couchbase.lite.internal.utils.Fn.BiFunction<any,any,any>): any;
						public static filterToSet(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Predicate<any>): java.util.Set<any>;
						public static forAll(param0: java.util.Collection<any>, param1: com.couchbase.lite.internal.utils.Fn.Consumer<any>): void;
					}
					export namespace Fn {
						export class BiFunction<T1, T2, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.BiFunction<any,any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$BiFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T1, param1: T2): R;
							});
							public constructor();
							public apply(param0: T1, param1: T2): R;
						}
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
						export class NullableConsumer<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NullableConsumer<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NullableConsumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								accept(param0: T): void;
							});
							public constructor();
							public accept(param0: T): void;
						}
						export class NullableFunctionThrows<T, R, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NullableFunctionThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): R;
							});
							public constructor();
							public apply(param0: T): R;
						}
						export class NullablePredicate<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NullablePredicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								test(param0: T): boolean;
							});
							public constructor();
							public test(param0: T): boolean;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class MathUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.MathUtils>;
						public static RANDOM: java.lang.ThreadLocal<java.util.Random>;
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class PlatformUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.PlatformUtils>;
						public static getAsset(param0: string): java.io.InputStream;
						public static getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
						public static getDecoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Decoder;
					}
					export namespace PlatformUtils {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class Preconditions {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.Preconditions>;
						public static assertNotEmpty(param0: string, param1: string): string;
						public static assertNotNegative(param0: number, param1: string): number;
						public static assertNegative(param0: number, param1: string): number;
						public static assertThat(param0: any, param1: string, param2: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): any;
						public static assertThat(param0: boolean, param1: string): void;
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
					export class StateMachine<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.StateMachine<any>>;
						public assertState(param0: androidNative.Array<T>): boolean;
						public getCurrentState(): T;
						public toString(): string;
						public setState(param0: T): boolean;
					}
					export namespace StateMachine {
						export class Builder<S>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.StateMachine.Builder<any>>;
							public addTransition(param0: S, param1: S, param2: androidNative.Array<S>): com.couchbase.lite.internal.utils.StateMachine.Builder<S>;
							public constructor(param0: java.lang.Class<S>, param1: com.couchbase.lite.LogDomain, param2: S, param3: S);
							public build(): com.couchbase.lite.internal.utils.StateMachine<S>;
						}
					}
				}
			}
		}
	}
}

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
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

declare namespace com {
	export namespace couchbase {
		export namespace lite {
			export namespace internal {
				export namespace utils {
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
//com.couchbase.lite.UnitOfWork:1
//com.couchbase.lite.internal.Listenable:2
//com.couchbase.lite.internal.core.peers.NativeRefPeerBinding:1
//com.couchbase.lite.internal.core.peers.PeerBinding:1
//com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding:1
//com.couchbase.lite.internal.core.peers.WeakPeerBinding:1
//com.couchbase.lite.internal.exec.ClientTask:1
//com.couchbase.lite.internal.listener.ChangeListenerToken:1
//com.couchbase.lite.internal.listener.ChangeNotifier:1
//com.couchbase.lite.internal.utils.Fn.BiFunction:3
//com.couchbase.lite.internal.utils.Fn.Consumer:1
//com.couchbase.lite.internal.utils.Fn.ConsumerThrows:2
//com.couchbase.lite.internal.utils.Fn.Function:2
//com.couchbase.lite.internal.utils.Fn.FunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.NullableConsumer:1
//com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.NullablePredicate:1
//com.couchbase.lite.internal.utils.Fn.Predicate:1
//com.couchbase.lite.internal.utils.Fn.Provider:1
//com.couchbase.lite.internal.utils.Fn.ProviderThrows:2
//com.couchbase.lite.internal.utils.Fn.TaskThrows:1
//com.couchbase.lite.internal.utils.StateMachine:1
//com.couchbase.lite.internal.utils.StateMachine.Builder:1

