declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabase extends com.couchbase.lite.BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
				public config: com.couchbase.lite.internal.ImmutableDatabaseConfiguration;
				public constructor(name: string);
				public constructor(name: string, config: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public getCollections(e: string): java.util.Set<com.couchbase.lite.Collection>;
				public createQuery(query: string): com.couchbase.lite.Query;
				public getDefaultScope(): com.couchbase.lite.Scope;
				public createCollection(collectionName: string, scopeName: string): com.couchbase.lite.Collection;
				public getCollections(): java.util.Set<com.couchbase.lite.Collection>;
				public finalize(): void;
				public getCollection(collectionName: string, scopeName: string): com.couchbase.lite.Collection;
				public getBlob(props: java.util.Map<string,any>): com.couchbase.lite.Blob;
				public constructor();
				public createCollection(name: string): com.couchbase.lite.Collection;
				public getScope(name: string): com.couchbase.lite.Scope;
				public delete(): void;
				public hashCode(): number;
				public getDefaultCollection(): com.couchbase.lite.Collection;
				public equals(o: any): boolean;
				public close(): void;
				public getCollection(name: string): com.couchbase.lite.Collection;
				public deleteCollection(name: string): void;
				public getName(): string;
				public performMaintenance(this_: com.couchbase.lite.MaintenanceType): boolean;
				public getPath(): string;
				public constructor(name: string, config: com.couchbase.lite.DatabaseConfiguration);
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
				public static delete(e: string, e: java.io.File): void;
				public getConfig(): com.couchbase.lite.DatabaseConfiguration;
				public static copy(e: java.io.File, err: string, e: string, path: number, name: androidNative.Array<number>): void;
				public getScopes(): java.util.Set<com.couchbase.lite.Scope>;
				public deleteCollection(this_: string, collectionName: string): void;
				public static exists(name: string, directory: java.io.File): boolean;
				public inBatch(db: com.couchbase.lite.UnitOfWork<any>): void;
				public saveBlob(blob: com.couchbase.lite.Blob): void;
			}
			export module AbstractDatabase {
				export class ActiveProcess<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase.ActiveProcess<any>>;
					public isActive(): boolean;
					public toString(): string;
					public stop(): void;
					public hashCode(): number;
					public equals(o: any): boolean;
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
				public constructor(config: com.couchbase.lite.AbstractDatabaseConfiguration);
				public isFullSync(): boolean;
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public setDirectory(directory: string): com.couchbase.lite.DatabaseConfiguration;
				public setFullSync(isFullSync: boolean): com.couchbase.lite.DatabaseConfiguration;
				public constructor(config: com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration);
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
				public static sign(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ltrim(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static acos(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static radians(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static millisToString(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static lower(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static stringToUTC(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static contains(operand: com.couchbase.lite.Expression, substring: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static e(): com.couchbase.lite.Expression;
				public static round(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static asin(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sin(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static abs(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sum(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static exp(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static sqrt(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static avg(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static min(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static max(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static round(operand: com.couchbase.lite.Expression, digits: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan2(y: com.couchbase.lite.Expression, x: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static millisToUTC(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static cos(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static pi(): com.couchbase.lite.Expression;
				public static degrees(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floor(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static tan(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static count(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ceil(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trim(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static log(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(operand: com.couchbase.lite.Expression, digits: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static upper(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static atan(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static stringToMillis(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static length(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static rtrim(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static trunc(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static power(base: com.couchbase.lite.Expression, exp: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static ln(operand: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndexBuilder>;
				public static fullTextIndex(items: androidNative.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
				public static valueIndex(items: androidNative.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractJFleeceCollection<T>  extends com.couchbase.lite.internal.BaseJFleeceCollection {
				public static class: java.lang.Class<com.couchbase.lite.AbstractJFleeceCollection<any>>;
				public lock: any;
				public contents: any;
				public encodeTo(enc: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public count(): number;
				public isEmpty(): boolean;
				public toMutable(): com.couchbase.lite.AbstractJFleeceCollection<any>;
				public toJSON(): string;
				public willMutate(newValue: any, oldValue: com.couchbase.lite.internal.fleece.MValue, container: com.couchbase.lite.internal.fleece.MCollection): boolean;
				public constructor(collection: any);
				public toJFleece(value: any): any;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractQuery extends java.lang.Object {
				public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
				public static DOMAIN: com.couchbase.lite.LogDomain;
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public prepQueryLocked(param0: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public setParameters(e: com.couchbase.lite.Parameters): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractQuery {
				export class LiveQueries {
					public static class: java.lang.Class<com.couchbase.lite.AbstractQuery.LiveQueries>;
					public getTokens(): java.util.Set<com.couchbase.lite.ListenerToken>;
					public liveCount(): number;
					public start(this_: com.couchbase.lite.internal.listener.ChangeListenerToken<com.couchbase.lite.QueryChange>): void;
					public isLive(token: com.couchbase.lite.ListenerToken): boolean;
					public remove(this_: com.couchbase.lite.ListenerToken): void;
					public isLive(): boolean;
					public put(token: com.couchbase.lite.ListenerToken, observer: com.couchbase.lite.internal.core.C4QueryObserver): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractReplicator extends com.couchbase.lite.internal.replicator.BaseReplicator implements com.couchbase.lite.internal.listener.Listenable<com.couchbase.lite.ReplicatorChange,com.couchbase.lite.ReplicatorChangeListener>  {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public createReplicatorForTarget(param0: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				public addDocumentReplicationListener(listener: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
				public close(): void;
				public isDocumentPending(docId: string, collection: com.couchbase.lite.Collection): boolean;
				public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(config: com.couchbase.lite.ReplicatorConfiguration);
				public getRemoteC4Replicator(remoteUri: java.net.URI): com.couchbase.lite.internal.core.C4Replicator;
				public getMessageC4Replicator(framing: com.couchbase.lite.internal.sockets.MessageFraming): com.couchbase.lite.internal.core.C4Replicator;
				public getServerCertificates(): java.util.List<java.security.cert.Certificate>;
				public isClosed(): boolean;
				public start(e: boolean): void;
				public getLocalC4Replicator(targetDb: com.couchbase.lite.Database): com.couchbase.lite.internal.core.C4Replicator;
				public toString(): string;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public constructor();
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public handleOffline(param0: com.couchbase.lite.ReplicatorActivityLevel, param1: boolean): void;
				public stop(): void;
				public start(): void;
				public getStatus(): com.couchbase.lite.ReplicatorStatus;
				public getPendingDocumentIds(collection: com.couchbase.lite.Collection): java.util.Set<string>;
				public addChangeListener(listener: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public addDocumentReplicationListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractReplicator {
				export class ConflictResolutionTask extends com.couchbase.lite.ConflictResolutionTaskInterface {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ConflictResolutionTask>;
					public run(): void;
					public isCancelled(): boolean;
					public onResolved(err: com.couchbase.lite.CouchbaseLiteException): void;
					public cancel(): void;
					public onResolved(param0: com.couchbase.lite.CouchbaseLiteException): void;
				}
				export class ReplicatorCookieStore extends com.couchbase.lite.internal.replicator.CBLCookieStore {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorCookieStore>;
					public getCookies(uri: java.net.URI): string;
					public getCookies(param0: java.net.URI): string;
					public setCookies(param0: java.net.URI, param1: java.util.List<string>, param2: boolean): void;
					public setCookies(uri: java.net.URI, cookies: java.util.List<string>, acceptParentDomain: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractReplicatorConfiguration extends com.couchbase.lite.internal.BaseReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration>;
				public static DISABLE_HEARTBEAT: number = 2147483;
				public setType(type: com.couchbase.lite.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public getPinnedServerX509Certificate(): java.security.cert.X509Certificate;
				public getCollections(): java.util.Set<com.couchbase.lite.CollectionConfiguration>;
				/** @deprecated */
				public getReplicatorType(): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
				public setAutoPurgeEnabled(enabled: boolean): com.couchbase.lite.ReplicatorConfiguration;
				/** @deprecated */
				public setReplicatorType(type: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public getProxyAuthenticator(): com.couchbase.lite.ProxyAuthenticator;
				/** @deprecated */
				public getPinnedServerCertificate(): androidNative.Array<number>;
				public setAcceptParentDomainCookies(acceptParentCookies: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public setProxyAuthenticator(authenticator: com.couchbase.lite.ProxyAuthenticator): com.couchbase.lite.ReplicatorConfiguration;
				public getMaxAttempts(): number;
				public constructor(db: com.couchbase.lite.Database, collections: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, target: com.couchbase.lite.Endpoint);
				public setMaxAttemptWaitTime(maxAttemptWaitTime: number): com.couchbase.lite.ReplicatorConfiguration;
				public getAuthenticator(): com.couchbase.lite.Authenticator;
				public isAutoPurgeEnabled(): boolean;
				public setContinuous(continuous: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public getTarget(): com.couchbase.lite.Endpoint;
				public setPinnedServerX509Certificate(pinnedCert: java.security.cert.X509Certificate): com.couchbase.lite.ReplicatorConfiguration;
				public setHeartbeat(heartbeat: number): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(config: com.couchbase.lite.AbstractReplicatorConfiguration);
				public toString(): string;
				public static createCollectionConfigMap(collection: java.util.Collection<com.couchbase.lite.CollectionConfiguration>): java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
				public setAuthenticator(authenticator: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
				public setHeaders(headers: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
				public isContinuous(): boolean;
				public getHeaders(): java.util.Map<string,string>;
				public isAcceptParentDomainCookies(): boolean;
				public getType(): com.couchbase.lite.ReplicatorType;
				/** @deprecated */
				public setPinnedServerCertificate(this_: androidNative.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
				public setMaxAttempts(maxAttempts: number): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(configs: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
				public getMaxAttemptWaitTime(): number;
				public getHeartbeat(): number;
			}
			export module AbstractReplicatorConfiguration {
				export class ReplicatorType {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
					public static PUSH_AND_PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PUSH: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static values(): androidNative.Array<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
					public static valueOf(name: string): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Array extends com.couchbase.lite.AbstractJFleeceCollection<com.couchbase.lite.internal.fleece.MArray> {
				public static class: java.lang.Class<com.couchbase.lite.Array>;
				public getValue(param0: java.lang.Class<any>, param1: number): any;
				public getLong(index: number): number;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public toMutable(): com.couchbase.lite.MutableArray;
				public constructor(collection: any);
				public constructor();
				public getValue(index: number): any;
				public getDate(index: number): java.util.Date;
				public getInt(index: number): number;
				public getBlob(index: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public hashCode(): number;
				public getNumber(index: number): java.lang.Number;
				public getDictionary(index: number): com.couchbase.lite.Dictionary;
				public getLong(param0: number): number;
				public getInt(param0: number): number;
				public isEmpty(): boolean;
				public getFloat(index: number): number;
				public getDouble(index: number): number;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public constructor(array: com.couchbase.lite.internal.fleece.MArray);
				public iterator(): java.util.Iterator<any>;
				public toString(): string;
				public getDate(param0: number): java.util.Date;
				public getString(index: number): string;
				public getArray(index: number): com.couchbase.lite.Array;
				public getBoolean(param0: number): boolean;
				public equals(o2: any): boolean;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getValue(klass: java.lang.Class<any>, index: number): any;
				public getBoolean(index: number): boolean;
				public getValue(param0: number): any;
				public count(): number;
				public toMutable(): com.couchbase.lite.AbstractJFleeceCollection<any>;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public toJSON(): string;
				public getFloat(param0: number): number;
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
				public static anyAndEvery(variable: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static any(variable: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
				public static variable(name: string): com.couchbase.lite.VariableExpression;
				public static every(variable: com.couchbase.lite.VariableExpression): com.couchbase.lite.ArrayExpressionIn;
			}
			export module ArrayExpression {
				export class QuantifiesType {
					public static class: java.lang.Class<com.couchbase.lite.ArrayExpression.QuantifiesType>;
					public static ANY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static ANY_AND_EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static EVERY: com.couchbase.lite.ArrayExpression.QuantifiesType;
					public static valueOf(name: string): com.couchbase.lite.ArrayExpression.QuantifiesType;
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
				public in(expression: com.couchbase.lite.Expression): com.couchbase.lite.ArrayExpressionSatisfies;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayExpressionSatisfies {
				public static class: java.lang.Class<com.couchbase.lite.ArrayExpressionSatisfies>;
				public satisfies(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
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
				public static length(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static contains(expression: com.couchbase.lite.Expression, value: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ArrayIndexConfiguration>;
				public constructor(path: string, expressions: java.util.List<string>);
				public constructor(path: string);
				public constructor(path: string, expression: string, expressions: androidNative.Array<string>);
				public getPath(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ArrayInterface extends com.couchbase.lite.JFleeceCollectionInterface {
				public static class: java.lang.Class<com.couchbase.lite.ArrayInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ArrayInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getBoolean(param0: number): boolean;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getNumber(param0: number): java.lang.Number;
					getString(param0: number): string;
					getDate(param0: number): java.util.Date;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getValue(param0: number): any;
					getValue(param0: java.lang.Class<any>, param1: number): any;
					toList(): java.util.List<any>;
					count(): number;
					isEmpty(): boolean;
				});
				public constructor();
				public getValue(param0: java.lang.Class<any>, param1: number): any;
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
				public getInt(param0: number): number;
				public count(): number;
				public isEmpty(): boolean;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
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

declare module com {
	export module couchbase {
		export module lite {
			export abstract class BaseDatabase {
				public static class: java.lang.Class<com.couchbase.lite.BaseDatabase>;
				public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
				public assertOpenChecked(): void;
				public getOpenC4DbLocked(): com.couchbase.lite.internal.core.C4Database;
				public getC4DbOrThrowLocked(): com.couchbase.lite.internal.core.C4Database;
				public isOpen(): boolean;
				public setC4DatabaseLocked(c4Database: com.couchbase.lite.internal.core.C4Database): void;
				public isOpenLocked(): boolean;
				public getDbLock(): any;
				public assertOpenUnchecked(): void;
				public constructor();
				public getDbPath(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class BaseMValue {
				public static class: java.lang.Class<com.couchbase.lite.BaseMValue>;
				public static META_PROP_TYPE: string = "@type";
				public static TYPE_BLOB: string = "blob";
				public static PROP_DIGEST: string = "digest";
				public static PROP_LENGTH: string = "length";
				public static PROP_STUB: string = "stub";
				public static PROP_REVPOS: string = "revpos";
				public getDictionary(mVal: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection): com.couchbase.lite.Dictionary;
				public getArray(mVal: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection): com.couchbase.lite.Array;
				public getBlob(context: com.couchbase.lite.internal.DbContext, flDict: com.couchbase.lite.internal.fleece.FLDict): com.couchbase.lite.Blob;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class BasicAuthenticator extends com.couchbase.lite.internal.BaseAuthenticator implements com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
				public authenticate(options: java.util.Map<string,any>): void;
				public finalize(): void;
				public getUsername(): string;
				public getPasswordChars(): androidNative.Array<string>;
				/** @deprecated */
				public getPassword(): string;
				public constructor(username: string, password: androidNative.Array<string>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Blob implements com.couchbase.lite.internal.fleece.FleeceEncodable, com.couchbase.lite.internal.fleece.JSONEncodable {
				public static class: java.lang.Class<com.couchbase.lite.Blob>;
				public static ENCODER_ARG_DB: string = "BLOB.db";
				public static ENCODER_ARG_QUERY_PARAM: string = "BLOB.queryParam";
				public getContentType(): string;
				public digest(): string;
				public constructor(contentType: string, fileURL: java.net.URL);
				public length(): number;
				public finalize(): void;
				public constructor(contentType: string, stream: java.io.InputStream);
				public toString(): string;
				public constructor(contentType: string, content: androidNative.Array<number>);
				public getContentStream(): java.io.InputStream;
				public encodeTo(encoder: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public static isBlob(props: java.util.Map<string,any>): boolean;
				public getContent(): androidNative.Array<number>;
				public getProperties(): java.util.Map<string,any>;
				public hashCode(): number;
				public equals(o: any): boolean;
				public toJSON(): string;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
			}
			export module Blob {
				export class BlobInputStream {
					public static class: java.lang.Class<com.couchbase.lite.Blob.BlobInputStream>;
					public available(): number;
					public read(): number;
					public reset(): void;
					public markSupported(): boolean;
					public close(): void;
					public read(buf: androidNative.Array<number>): number;
					public read(e: androidNative.Array<number>, this_: number, buf: number): number;
					public mark(readLimit: number): void;
					public skip(this_: number): number;
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
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = "com.couchbase.lite";
				public static BUILD_TYPE: string = "release";
				public static BUILD_COMMIT: string = "unofficial@428950ddf288";
				public static BUILD_TIME: string = "2025-10-21T16:19:52.932441185Z";
				public static CBL_DEBUG: boolean = 0;
				public static ENTERPRISE: boolean = 0;
				public static VERSION_NAME: string = "4.0.0-81";
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
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public prepQueryLocked(this_: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
				public explain(): string;
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
					public static ASSERTION_FAILED: number = 1;
					public static UNIMPLEMENTED: number = 2;
					public static UNSUPPORTED_ENCRYPTION: number = 3;
					public static BAD_REVISION_ID: number = 4;
					public static CORRUPT_REVISION_DATA: number = 5;
					public static NOT_OPEN: number = 6;
					public static NOT_FOUND: number = 7;
					public static CONFLICT: number = 8;
					public static INVALID_PARAMETER: number = 9;
					public static UNEXPECTED_ERROR: number = 10;
					public static CANT_OPEN_FILE: number = 11;
					public static IO_ERROR: number = 12;
					public static MEMORY_ERROR: number = 13;
					public static NOT_WRITABLE: number = 14;
					public static CORRUPT_DATA: number = 15;
					public static BUSY: number = 16;
					public static NOT_IN_TRANSACTION: number = 17;
					public static TRANSACTION_NOT_CLOSED: number = 18;
					public static UNSUPPORTED: number = 19;
					public static NOT_A_DATABASE_FILE: number = 20;
					public static WRONG_FORMAT: number = 21;
					public static CRYPTO: number = 22;
					public static INVALID_QUERY: number = 23;
					public static MISSING_INDEX: number = 24;
					public static INVALID_QUERY_PARAM: number = 25;
					public static REMOTE_ERROR: number = 26;
					public static DATABASE_TOO_OLD: number = 27;
					public static DATABASE_TOO_NEW: number = 28;
					public static BAD_DOC_ID: number = 29;
					public static CANT_UPGRADE_DATABASE: number = 30;
					public static NETWORK_OFFSET: number = 5000;
					public static DNS_FAILURE: number = 5001;
					public static UNKNOWN_HOST: number = 5002;
					public static TIMEOUT: number = 5003;
					public static INVALID_URL: number = 5004;
					public static TOO_MANY_REDIRECTS: number = 5005;
					public static TLS_HANDSHAKE_FAILED: number = 5006;
					public static TLS_CERT_EXPIRED: number = 5007;
					public static TLS_CERT_UNTRUSTED: number = 5008;
					public static TLS_CLIENT_CERT_REQUIRED: number = 5009;
					public static TLS_CLIENT_CERT_REJECTED: number = 5010;
					public static TLS_CERT_UNKNOWN_ROOT: number = 5011;
					public static INVALID_REDIRECT: number = 5012;
					public static HTTP_BASE: number = 10000;
					public static HTTP_AUTH_REQUIRED: number = 10401;
					public static HTTP_FORBIDDEN: number = 10403;
					public static HTTP_NOT_FOUND: number = 10404;
					public static HTTP_CONFLICT: number = 10409;
					public static HTTP_PROXY_AUTH_REQUIRED: number = 10407;
					public static HTTP_ENTITY_TOO_LARGE: number = 10413;
					public static HTTP_IM_A_TEAPOT: number = 10418;
					public static HTTP_INTERNAL_SERVER_ERROR: number = 10500;
					public static HTTP_NOT_IMPLEMENTED: number = 10501;
					public static HTTP_SERVICE_UNAVAILABLE: number = 10503;
					public static WEB_SOCKET_NORMAL_CLOSE: number = 11000;
					public static WEB_SOCKET_GOING_AWAY: number = 11001;
					public static WEB_SOCKET_PROTOCOL_ERROR: number = 11002;
					public static WEB_SOCKET_DATA_ERROR: number = 11003;
					public static WEB_SOCKET_ABNORMAL_CLOSE: number = 11006;
					public static WEB_SOCKET_BAD_MESSAGE_FORMAT: number = 11007;
					public static WEB_SOCKET_POLICY_ERROR: number = 11008;
					public static WEB_SOCKET_MESSAGE_TOO_BIG: number = 11009;
					public static WEB_SOCKET_MISSING_EXTENSION: number = 11010;
					public static WEB_SOCKET_CANT_FULFILL: number = 11011;
					public static WEB_SOCKET_TLS_FAILURE: number = 11015;
					public static WEB_SOCKET_USER: number = 14000;
					public static WEB_SOCKET_CLOSE_USER_TRANSIENT: number = 14001;
					public static WEB_SOCKET_CLOSE_USER_PERMANENT: number = 14002;
				}
				export class Domain {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Domain>;
					public static CBLITE: string = "CouchbaseLite";
					public static POSIX: string = "POSIXErrorDomain";
					public static SQLITE: string = "CouchbaseLite.SQLite";
					public static FLEECE: string = "CouchbaseLite.Fleece";
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
			export class Collation {
				public static class: java.lang.Class<com.couchbase.lite.Collation>;
				public setIgnoreAccents(ignoreAccents: boolean): com.couchbase.lite.Collation;
				public constructor(isUnicode: boolean, locale: string);
				public static ascii(): com.couchbase.lite.Collation.ASCII;
				public setIgnoreCase(ignoreCase: boolean): com.couchbase.lite.Collation;
				public static unicode(): com.couchbase.lite.Collation.Unicode;
				public setLocale(locale: string): com.couchbase.lite.Collation;
				public toString(): string;
			}
			export module Collation {
				export class ASCII extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.ASCII>;
					public setIgnoreCase(ignoreCase: boolean): com.couchbase.lite.Collation;
					public setIgnoreCase(ignCase: boolean): com.couchbase.lite.Collation.ASCII;
				}
				export class Unicode extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.Unicode>;
					public setIgnoreCase(ignCase: boolean): com.couchbase.lite.Collation.Unicode;
					public setLocale(locale: string): com.couchbase.lite.Collation.Unicode;
					public setIgnoreCase(ignoreCase: boolean): com.couchbase.lite.Collation;
					public setLocale(locale: string): com.couchbase.lite.Collation;
					public setIgnoreAccents(ignoreAccents: boolean): com.couchbase.lite.Collation;
					public setIgnoreAccents(ignAccents: boolean): com.couchbase.lite.Collation.Unicode;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Collection extends com.couchbase.lite.internal.BaseCollection {
				public static class: java.lang.Class<com.couchbase.lite.Collection>;
				public static DEFAULT_NAME: string = "_default";
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public save(document: com.couchbase.lite.MutableDocument, conflictHandler: com.couchbase.lite.ConflictHandler): boolean;
				public addDocumentChangeListener(id: string, executor: java.util.concurrent.Executor, listener: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public purge(id: string): void;
				public save(document: com.couchbase.lite.MutableDocument): void;
				public createFilterDocument(docId: string, revId: string, body: com.couchbase.lite.internal.fleece.FLDict): com.couchbase.lite.Document;
				public setDocumentExpiration(id: string, expiration: java.util.Date): void;
				public getDocumentExpiration(id: string): java.util.Date;
				public getIndex(name: string): com.couchbase.lite.QueryIndex;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(listener: com.couchbase.lite.CollectionChangeListener): com.couchbase.lite.ListenerToken;
				public delete(document: com.couchbase.lite.Document): void;
				public createIndex(name: string, config: com.couchbase.lite.IndexConfiguration): void;
				public hashCode(): number;
				public deleteIndex(this_: string): void;
				public equals(o: any): boolean;
				public save(this_: com.couchbase.lite.MutableDocument, document: com.couchbase.lite.ConcurrencyControl): boolean;
				public close(): void;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.CollectionChangeListener): com.couchbase.lite.ListenerToken;
				public purge(document: com.couchbase.lite.Document): void;
				public getFullName(): string;
				public getName(): string;
				public getCount(): number;
				public getScope(): com.couchbase.lite.Scope;
				public toString(): string;
				public getDatabase(): com.couchbase.lite.Database;
				public getDocument(id: string): com.couchbase.lite.Document;
				public getIndexes(): java.util.Set<string>;
				public delete(this_: com.couchbase.lite.Document, document: com.couchbase.lite.ConcurrencyControl): boolean;
				public addDocumentChangeListener(id: string, listener: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public createIndex(name: string, index: com.couchbase.lite.Index): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CollectionChange extends com.couchbase.lite.DatabaseChange {
				public static class: java.lang.Class<com.couchbase.lite.CollectionChange>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
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

declare module com {
	export module couchbase {
		export module lite {
			export class CollectionChangeNotifier extends com.couchbase.lite.internal.listener.ChangeNotifier<com.couchbase.lite.CollectionChange> implements java.lang.AutoCloseable  {
				public static class: java.lang.Class<com.couchbase.lite.CollectionChangeNotifier>;
				public close(): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CollectionConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.CollectionConfiguration>;
				public setDocumentIDs(documentIDs: java.util.List<string>): com.couchbase.lite.CollectionConfiguration;
				public getConflictResolver(): com.couchbase.lite.ConflictResolver;
				public getPushFilter(): com.couchbase.lite.ReplicationFilter;
				public constructor(collection: com.couchbase.lite.Collection);
				public getCollection(): com.couchbase.lite.Collection;
				public getPullFilter(): com.couchbase.lite.ReplicationFilter;
				public toString(): string;
				public static fromCollections(collection: java.util.Collection<com.couchbase.lite.Collection>): java.util.Set<com.couchbase.lite.CollectionConfiguration>;
				public setChannels(channels: java.util.List<string>): com.couchbase.lite.CollectionConfiguration;
				public setPullFilter(pullFilter: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.CollectionConfiguration;
				public getChannels(): java.util.List<string>;
				public getDocumentIDs(): java.util.List<string>;
				public setPushFilter(pushFilter: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.CollectionConfiguration;
				public setConflictResolver(conflictResolver: com.couchbase.lite.ConflictResolver): com.couchbase.lite.CollectionConfiguration;
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
				public static valueOf(name: string): com.couchbase.lite.ConcurrencyControl;
				public static values(): androidNative.Array<com.couchbase.lite.ConcurrencyControl>;
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
			export class ConflictResolutionCompletion {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolutionCompletion>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ConflictResolutionCompletion interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					completed(param0: com.couchbase.lite.ConflictResolutionTask, param1: com.couchbase.lite.ReplicatedDocument): void;
				});
				public constructor();
				public completed(param0: com.couchbase.lite.ConflictResolutionTask, param1: com.couchbase.lite.ReplicatedDocument): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConflictResolutionTask extends com.couchbase.lite.ConflictResolutionTaskInterface {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolutionTask>;
				public run(): void;
				public onResolved(param0: com.couchbase.lite.CouchbaseLiteException): void;
				public cancel(): void;
				public onResolved(err: com.couchbase.lite.CouchbaseLiteException): void;
				public isCancelled(): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConflictResolutionTaskInterface {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolutionTaskInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.ConflictResolutionTaskInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onResolved(param0: com.couchbase.lite.CouchbaseLiteException): void;
				});
				public constructor();
				public onResolved(param0: com.couchbase.lite.CouchbaseLiteException): void;
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
					"<clinit>"(): void;
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
			export class ConflictResolverService {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolverService>;
				public shutdown(this_: boolean, wait: java.lang.Runnable): boolean;
				public addConflict(this_: com.couchbase.lite.ReplicatedDocument, doc: com.couchbase.lite.Database, database: com.couchbase.lite.ConflictResolver, resolver: com.couchbase.lite.ConflictResolutionCompletion): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ConflictResolverState {
				public static class: java.lang.Class<com.couchbase.lite.ConflictResolverState>;
				public static RUNNING: com.couchbase.lite.ConflictResolverState;
				public static STOPPING: com.couchbase.lite.ConflictResolverState;
				public static STOPPED: com.couchbase.lite.ConflictResolverState;
				public static valueOf(name: string): com.couchbase.lite.ConflictResolverState;
				public static values(): androidNative.Array<com.couchbase.lite.ConflictResolverState>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLite {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLite>;
				public static init(ctxt: globalAndroid.content.Context, debug: boolean, rootDir: java.io.File, scratchDir: java.io.File): void;
				public static init(ctxt: globalAndroid.content.Context): void;
				public static init(ctxt: globalAndroid.content.Context, debug: boolean): void;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class CouchbaseLiteError {
				public static class: java.lang.Class<com.couchbase.lite.CouchbaseLiteError>;
				public constructor(msg: string, e: java.lang.Throwable);
				public constructor(msg: string);
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
				public constructor(domain: string, code: number, cause: java.lang.Exception);
				/** @deprecated */
				public constructor(cause: java.lang.Exception);
				/** @deprecated */
				public constructor(domain: string, code: number);
				public getInfo(): java.util.Map<string,any>;
				public static toCouchbaseLiteException(domainCode: number, statusCode: number, msg: string, e: java.lang.Exception): com.couchbase.lite.CouchbaseLiteException;
				public constructor(message: string, cause: java.lang.Exception, domain: string, code: number, info: java.util.Map<string,any>);
				public getCode(): number;
				public constructor(message: string);
				public constructor(message: string, domain: string, code: number);
				public constructor(message: string, cause: java.lang.Exception);
				public toString(): string;
				public constructor(message: string, cause: java.lang.Exception, domain: string, code: number);
				public hashCode(): number;
				/** @deprecated */
				public constructor(domain: string, code: number, info: java.util.Map<string,any>);
				public static convertException(e: com.couchbase.lite.LiteCoreException): com.couchbase.lite.CouchbaseLiteException;
				public getDomain(): string;
				public equals(o: any): boolean;
				public getMessage(): string;
				public static convertException(e: com.couchbase.lite.LiteCoreException, msg: string): com.couchbase.lite.CouchbaseLiteException;
				public static toCouchbaseLiteException(domain: number, status: number, info: number): com.couchbase.lite.CouchbaseLiteException;
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
				public static collection(collection: com.couchbase.lite.Collection): com.couchbase.lite.DataSource.As;
			}
			export module DataSource {
				export class As extends com.couchbase.lite.DataSource {
					public static class: java.lang.Class<com.couchbase.lite.DataSource.As>;
					public as(alias: string): com.couchbase.lite.DataSource;
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
				public constructor(name: string, config: com.couchbase.lite.internal.ImmutableDatabaseConfiguration);
				public constructor(name: string);
				public static copy(e: java.io.File, err: string, e: string, path: number, name: androidNative.Array<number>): void;
				public constructor(name: string, config: com.couchbase.lite.DatabaseConfiguration);
				public static copy(path: java.io.File, name: string, config: com.couchbase.lite.DatabaseConfiguration): void;
				public constructor();
				public getDatabase(): com.couchbase.lite.Database;
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
				public getCollection(): com.couchbase.lite.Collection;
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
					changed(param0: any): void;
				});
				public constructor();
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
				public constructor(config: com.couchbase.lite.AbstractDatabaseConfiguration);
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public constructor(config: com.couchbase.lite.internal.BaseImmutableDatabaseConfiguration);
				public constructor();
				public constructor(config: com.couchbase.lite.DatabaseConfiguration);
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
				public resolve(conflict: com.couchbase.lite.Conflict): com.couchbase.lite.Document;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Defaults {
				public static class: java.lang.Class<com.couchbase.lite.Defaults>;
			}
			export module Defaults {
				export class Database {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.Database>;
					public static FULL_SYNC: boolean = 0;
					public static MMAP_ENABLED: boolean = 1;
				}
				export class FileLogSink {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.FileLogSink>;
					public static USE_PLAINTEXT: boolean = 0;
					public static MAX_SIZE: number = 524288;
					public static MAX_KEPT_FILES: number = 2;
				}
				export class FullTextIndex {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.FullTextIndex>;
					public static IGNORE_ACCENTS: boolean = 0;
				}
				export class LogFile {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.LogFile>;
					public static USE_PLAINTEXT: boolean = 0;
					public static MAX_SIZE: number = 524288;
					public static MAX_ROTATE_COUNT: number = 1;
				}
				export class Replicator {
					public static class: java.lang.Class<com.couchbase.lite.Defaults.Replicator>;
					public static TYPE: com.couchbase.lite.ReplicatorType;
					public static CONTINUOUS: boolean = 0;
					public static HEARTBEAT: number = 300;
					public static MAX_ATTEMPTS_SINGLE_SHOT: number = 10;
					public static MAX_ATTEMPTS_CONTINUOUS: number = 2147483647;
					public static MAX_ATTEMPTS_WAIT_TIME: number = 300;
					public static ENABLE_AUTO_PURGE: boolean = 1;
					public static SELF_SIGNED_CERTIFICATE_ONLY: boolean = 0;
					public static ACCEPT_PARENT_COOKIES: boolean = 0;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Dictionary extends com.couchbase.lite.AbstractJFleeceCollection<com.couchbase.lite.internal.fleece.MDict> {
				public static class: java.lang.Class<com.couchbase.lite.Dictionary>;
				public getDictionary(key: string): com.couchbase.lite.Dictionary;
				public getBlob(key: string): com.couchbase.lite.Blob;
				public getDate(key: string): java.util.Date;
				public getDouble(key: string): number;
				public getKeys(): java.util.List<string>;
				public constructor(collection: any);
				public constructor();
				public getValue(param0: string): any;
				public getNumber(key: string): java.lang.Number;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public toMutable(): com.couchbase.lite.MutableDictionary;
				public contains(param0: string): boolean;
				public getValue(klass: java.lang.Class<any>, key: string): any;
				public hashCode(): number;
				public getBoolean(key: string): boolean;
				public getLong(key: string): number;
				public getBoolean(param0: string): boolean;
				public getFloat(key: string): number;
				public getString(key: string): string;
				public getFloat(param0: string): number;
				public getString(param0: string): string;
				public equals(key: any): boolean;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public isEmpty(): boolean;
				public getValue(key: string): any;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public getLong(param0: string): number;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public getInt(key: string): number;
				public constructor(dict: com.couchbase.lite.internal.fleece.MDict);
				public toString(): string;
				public contains(key: string): boolean;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public toMutable(): com.couchbase.lite.AbstractJFleeceCollection<any>;
				public getArray(key: string): com.couchbase.lite.Array;
				public toJSON(): string;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
			}
			export module Dictionary {
				export class DictionaryIterator extends java.util.Iterator<string> {
					public static class: java.lang.Class<com.couchbase.lite.Dictionary.DictionaryIterator>;
					public next(): string;
					public hasNext(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DictionaryInterface extends com.couchbase.lite.JFleeceCollectionInterface {
				public static class: java.lang.Class<com.couchbase.lite.DictionaryInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.DictionaryInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					contains(param0: string): boolean;
					getKeys(): java.util.List<string>;
					getBoolean(param0: string): boolean;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getNumber(param0: string): java.lang.Number;
					getString(param0: string): string;
					getDate(param0: string): java.util.Date;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getValue(param0: string): any;
					getValue(param0: java.lang.Class<any>, param1: string): any;
					toMap(): java.util.Map<string,any>;
					count(): number;
					isEmpty(): boolean;
				});
				public constructor();
				public getLong(param0: string): number;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
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
				public isEmpty(): boolean;
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
				public getDictionary(key: string): com.couchbase.lite.Dictionary;
				public getSequence(): number;
				public getBlob(key: string): com.couchbase.lite.Blob;
				public getDate(key: string): java.util.Date;
				public getDouble(key: string): number;
				public setContent(content: com.couchbase.lite.Dictionary): void;
				public getKeys(): java.util.List<string>;
				public toMutable(): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public getNumber(key: string): java.lang.Number;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getRevisionID(): string;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public getValue(klass: java.lang.Class<any>, key: string): any;
				public hashCode(): number;
				public getBoolean(key: string): boolean;
				public getLong(key: string): number;
				public getBoolean(param0: string): boolean;
				public getFloat(key: string): number;
				public getString(key: string): string;
				public getFloat(param0: string): number;
				public getString(param0: string): string;
				public equals(o: any): boolean;
				public isEmpty(): boolean;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getTimestamp(): number;
				public getValue(key: string): any;
				public getRevisionHistory(): string;
				public getLong(param0: string): number;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public getCollection(): com.couchbase.lite.Collection;
				public getInt(key: string): number;
				public toString(): string;
				public getContent(): com.couchbase.lite.Dictionary;
				public constructor(collection: com.couchbase.lite.Collection, id: string, c4doc: com.couchbase.lite.internal.core.C4Document, mutable: boolean);
				public contains(key: string): boolean;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
				public getArray(key: string): com.couchbase.lite.Array;
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
			export class DocumentChange {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChange>;
				public getCollection(): com.couchbase.lite.Collection;
				public getDocumentID(): string;
				public toString(): string;
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
			export class DocumentChangeNotifier extends com.couchbase.lite.internal.listener.ChangeNotifier<com.couchbase.lite.DocumentChange> implements java.lang.AutoCloseable  {
				public static class: java.lang.Class<com.couchbase.lite.DocumentChangeNotifier>;
				public close(): void;
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
				public static valueOf(name: string): com.couchbase.lite.DocumentFlag;
				public rawValue(): number;
				public static values(): androidNative.Array<com.couchbase.lite.DocumentFlag>;
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
				public toString(): string;
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
				public or(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public isNot(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public lessThanOrEqualTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static value(value: any): com.couchbase.lite.Expression;
				public static list(value: java.util.List<any>): com.couchbase.lite.Expression;
				public static floatValue(value: number): com.couchbase.lite.Expression;
				public static longValue(value: number): com.couchbase.lite.Expression;
				public collate(collation: com.couchbase.lite.Collation): com.couchbase.lite.Expression;
				public static property(property: string): com.couchbase.lite.PropertyExpression;
				public multiply(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public subtract(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static booleanValue(value: boolean): com.couchbase.lite.Expression;
				public static number(value: java.lang.Number): com.couchbase.lite.Expression;
				public static date(value: java.util.Date): com.couchbase.lite.Expression;
				public static intValue(value: number): com.couchbase.lite.Expression;
				public static map(value: java.util.Map<string,any>): com.couchbase.lite.Expression;
				public static string(value: string): com.couchbase.lite.Expression;
				public regex(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public constructor();
				public equalTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static doubleValue(value: number): com.couchbase.lite.Expression;
				public greaterThan(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public and(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public modulo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static all(): com.couchbase.lite.PropertyExpression;
				public isValued(): com.couchbase.lite.Expression;
				public static negated(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public in(expressions: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
				public between(expression1: com.couchbase.lite.Expression, expression2: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public is(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static not(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public like(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public toString(): string;
				public isNotValued(): com.couchbase.lite.Expression;
				public in(expressions: java.util.List<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
				public static parameter(name: string): com.couchbase.lite.Expression;
				public divide(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public add(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static fullTextIndex(indexName: string): com.couchbase.lite.FullTextIndexExpression;
				public greaterThanOrEqualTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public lessThan(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public notEqualTo(expression: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
			}
			export module Expression {
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
					public from(alias: string): com.couchbase.lite.IndexExpression;
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

declare module com {
	export module couchbase {
		export module lite {
			export class From extends com.couchbase.lite.BuilderQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.From>;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(orderings: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public join(param0: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public where(expression: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public groupBy(expressions: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public join(joins: androidNative.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
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
			export class FullTextFunction {
				public static class: java.lang.Class<com.couchbase.lite.FullTextFunction>;
				/** @deprecated */
				public static rank(indexName: string): com.couchbase.lite.Expression;
				public static rank(index: com.couchbase.lite.IndexExpression): com.couchbase.lite.Expression;
				public static match(index: com.couchbase.lite.IndexExpression, query: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndex>;
				public setLanguage(language: string): com.couchbase.lite.FullTextIndex;
				public getLanguage(): string;
				public isIgnoringAccents(): boolean;
				public ignoreAccents(ignoreAccents: boolean): com.couchbase.lite.FullTextIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexConfiguration>;
				public setLanguage(language: string): com.couchbase.lite.FullTextIndexConfiguration;
				public ignoreAccents(ignoreAccents: boolean): com.couchbase.lite.FullTextIndexConfiguration;
				public getLanguage(): string;
				public constructor(expressions: androidNative.Array<string>);
				public getWhere(): string;
				public constructor(expressions: java.util.List<string>);
				public isIgnoringAccents(): boolean;
				public setWhere(where: string): com.couchbase.lite.FullTextIndexConfiguration;
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
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

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.FullTextIndexItem>;
				public static property(property: string): com.couchbase.lite.FullTextIndexItem;
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
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public having(expression: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(orderings: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(orderings: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
			export abstract class IndexConfiguration extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.IndexConfiguration>;
				public getExpressions(): java.util.List<string>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
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

declare module com {
	export module couchbase {
		export module lite {
			export class JFleeceCollectionInterface {
				public static class: java.lang.Class<com.couchbase.lite.JFleeceCollectionInterface>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.JFleeceCollectionInterface interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					count(): number;
					isEmpty(): boolean;
				});
				public constructor();
				public count(): number;
				public isEmpty(): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Join {
				public static class: java.lang.Class<com.couchbase.lite.Join>;
				public static join(datasource: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftJoin(datasource: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static innerJoin(datasource: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static leftOuterJoin(datasource: com.couchbase.lite.DataSource): com.couchbase.lite.Join.On;
				public static crossJoin(datasource: com.couchbase.lite.DataSource): com.couchbase.lite.Join;
			}
			export module Join {
				export class On extends com.couchbase.lite.Join {
					public static class: java.lang.Class<com.couchbase.lite.Join.On>;
					public on(expression: com.couchbase.lite.Expression): com.couchbase.lite.Join;
				}
				export class Type {
					public static class: java.lang.Class<com.couchbase.lite.Join.Type>;
					public static INNER: com.couchbase.lite.Join.Type;
					public static LEFT_OUTER: com.couchbase.lite.Join.Type;
					public static CROSS: com.couchbase.lite.Join.Type;
					public static valueOf(name: string): com.couchbase.lite.Join.Type;
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
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(orderings: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public where(expression: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
			export abstract class ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ListenerToken>;
				public constructor(executor: java.util.concurrent.Executor, onRemove: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
				public close(): void;
				public remove(): void;
				public send(notification: java.lang.Runnable): void;
				public toString(): string;
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
				public constructor(domain: number, code: number, message: string);
				public static throwException(domain: number, code: number, msg: string): void;
				public getCode(): number;
				public getMessage(): string;
				public getDomain(): number;
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
				public static PEER_DISCOVERY: com.couchbase.lite.LogDomain;
				public static MULTIPEER: com.couchbase.lite.LogDomain;
				public static ALL: java.util.Set<com.couchbase.lite.LogDomain>;
				public static ALL_DOMAINS: java.util.EnumSet<com.couchbase.lite.LogDomain>;
				public static values(): androidNative.Array<com.couchbase.lite.LogDomain>;
				public static valueOf(name: string): com.couchbase.lite.LogDomain;
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
				public toString(): string;
				public static valueOf(name: string): com.couchbase.lite.LogLevel;
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
				public static valueOf(name: string): com.couchbase.lite.MaintenanceType;
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
				public from(fromAlias: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class MutableArray extends com.couchbase.lite.Array implements com.couchbase.lite.MutableArrayInterface {
				public static class: java.lang.Class<com.couchbase.lite.MutableArray>;
				public setJSON(this_: string): com.couchbase.lite.MutableArray;
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public addDate(value: java.util.Date): com.couchbase.lite.MutableArray;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(index: number, value: boolean): com.couchbase.lite.MutableArray;
				public setJSON(param0: string): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(value: boolean): com.couchbase.lite.MutableArray;
				public insertFloat(index: number, value: number): com.couchbase.lite.MutableArray;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(index: number): com.couchbase.lite.Dictionary;
				public addNumber(value: java.lang.Number): com.couchbase.lite.MutableArray;
				public isEmpty(): boolean;
				public insertValue(index: number, value: any): com.couchbase.lite.MutableArray;
				public addFloat(value: number): com.couchbase.lite.MutableArray;
				public constructor(array: com.couchbase.lite.internal.fleece.MArray);
				public insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(index: number, value: java.util.Date): com.couchbase.lite.MutableArray;
				public insertArray(index: number, value: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public getValue(klass: java.lang.Class<any>, index: number): any;
				public insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addInt(value: number): com.couchbase.lite.MutableArray;
				public toJSON(): string;
				public getString(param0: number): string;
				public setInt(index: number, value: number): com.couchbase.lite.MutableArray;
				public getNumber(param0: number): java.lang.Number;
				public constructor(collection: any);
				public addValue(value: any): com.couchbase.lite.MutableArray;
				public setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
				public toList(): java.util.List<any>;
				public addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(index: number): com.couchbase.lite.MutableArray;
				public addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(index: number, value: number): com.couchbase.lite.MutableArray;
				public setBlob(index: number, value: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
				public addString(value: string): com.couchbase.lite.MutableArray;
				public addLong(value: number): com.couchbase.lite.MutableArray;
				public getArray(index: number): com.couchbase.lite.Array;
				public getDictionary(index: number): com.couchbase.lite.MutableDictionary;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public setArray(index: number, value: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public addDictionary(value: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public insertDictionary(index: number, value: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public getValue(param0: number): any;
				public addArray(value: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public count(): number;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public constructor(json: string);
				public setNumber(index: number, value: java.lang.Number): com.couchbase.lite.MutableArray;
				public setLong(index: number, value: number): com.couchbase.lite.MutableArray;
				public getDouble(param0: number): number;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public constructor();
				public setString(index: number, value: string): com.couchbase.lite.MutableArray;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertBoolean(index: number, value: boolean): com.couchbase.lite.MutableArray;
				public setDictionary(index: number, value: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getInt(param0: number): number;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertString(index: number, value: string): com.couchbase.lite.MutableArray;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public insertInt(index: number, value: number): com.couchbase.lite.MutableArray;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public getDate(param0: number): java.util.Date;
				public setValue(index: number, value: any): com.couchbase.lite.MutableArray;
				public getBoolean(param0: number): boolean;
				public setFloat(index: number, value: number): com.couchbase.lite.MutableArray;
				public addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public getValue(param0: java.lang.Class<any>, param1: number): any;
				public insertDouble(index: number, value: number): com.couchbase.lite.MutableArray;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public setDate(index: number, value: java.util.Date): com.couchbase.lite.MutableArray;
				public setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public addString(param0: string): com.couchbase.lite.MutableArrayInterface;
				public addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
				public getLong(param0: number): number;
				public constructor(data: java.util.List<any>);
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public setData(this_: java.util.List<any>): com.couchbase.lite.MutableArray;
				public insertBlob(index: number, value: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
				public setDouble(index: number, value: number): com.couchbase.lite.MutableArray;
				public insertNumber(index: number, value: java.lang.Number): com.couchbase.lite.MutableArray;
				public addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public remove(index: number): com.couchbase.lite.MutableArray;
				public setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public addBlob(value: com.couchbase.lite.Blob): com.couchbase.lite.MutableArray;
				public addDouble(value: number): com.couchbase.lite.MutableArray;
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
					getBoolean(param0: number): boolean;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getNumber(param0: number): java.lang.Number;
					getString(param0: number): string;
					getDate(param0: number): java.util.Date;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getValue(param0: number): any;
					getValue(param0: java.lang.Class<any>, param1: number): any;
					toList(): java.util.List<any>;
					count(): number;
					isEmpty(): boolean;
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
				public isEmpty(): boolean;
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
				public getFloat(param0: number): number;
				public insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public getValue(param0: java.lang.Class<any>, param1: number): any;
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
				public setArray(key: string, value: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionary;
				public setBoolean(key: string, value: boolean): com.couchbase.lite.MutableDictionary;
				public constructor();
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public getValue(klass: java.lang.Class<any>, key: string): any;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getBoolean(param0: string): boolean;
				public getFloat(param0: string): number;
				public setJSON(this_: string): com.couchbase.lite.MutableDictionary;
				public isEmpty(): boolean;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public remove(key: string): com.couchbase.lite.MutableDictionary;
				public setDictionary(key: string, value: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionary;
				public setString(key: string, value: string): com.couchbase.lite.MutableDictionary;
				public getLong(param0: string): number;
				public setNumber(key: string, value: java.lang.Number): com.couchbase.lite.MutableDictionary;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setInt(key: string, value: number): com.couchbase.lite.MutableDictionary;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(key: string): com.couchbase.lite.Array;
				public toJSON(): string;
				public setDate(key: string, value: java.util.Date): com.couchbase.lite.MutableDictionary;
				public setDouble(key: string, value: number): com.couchbase.lite.MutableDictionary;
				public setBlob(key: string, value: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionary;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(key: string): com.couchbase.lite.Dictionary;
				public getDictionary(key: string): com.couchbase.lite.MutableDictionary;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getKeys(): java.util.List<string>;
				public constructor(collection: any);
				public getValue(param0: string): any;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setLong(key: string, value: number): com.couchbase.lite.MutableDictionary;
				public getArray(key: string): com.couchbase.lite.MutableArray;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public constructor(dict: com.couchbase.lite.internal.fleece.MDict);
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(key: string, value: any): com.couchbase.lite.MutableDictionary;
				public getDouble(param0: string): number;
				public setData(this_: java.util.Map<string,any>): com.couchbase.lite.MutableDictionary;
				public getDate(param0: string): java.util.Date;
				public constructor(data: java.util.Map<string,any>);
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public constructor(json: string);
				public setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
				public getInt(param0: string): number;
				public setFloat(key: string, value: number): com.couchbase.lite.MutableDictionary;
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
					contains(param0: string): boolean;
					getKeys(): java.util.List<string>;
					getBoolean(param0: string): boolean;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getNumber(param0: string): java.lang.Number;
					getString(param0: string): string;
					getDate(param0: string): java.util.Date;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getValue(param0: string): any;
					getValue(param0: java.lang.Class<any>, param1: string): any;
					toMap(): java.util.Map<string,any>;
					count(): number;
					isEmpty(): boolean;
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
				public isEmpty(): boolean;
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getDate(param0: string): java.util.Date;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public count(): number;
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
				public setArray(key: string, value: com.couchbase.lite.Array): com.couchbase.lite.MutableDocument;
				public setFloat(key: string, value: number): com.couchbase.lite.MutableDocument;
				public setLong(key: string, value: number): com.couchbase.lite.MutableDocument;
				public constructor();
				public constructor(id: string, data: java.util.Map<string,any>);
				public setValue(key: string, value: any): com.couchbase.lite.MutableDocument;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public remove(key: string): com.couchbase.lite.MutableDocument;
				public getValue(klass: java.lang.Class<any>, key: string): any;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getBoolean(param0: string): boolean;
				public setNumber(key: string, value: java.lang.Number): com.couchbase.lite.MutableDocument;
				public getFloat(param0: string): number;
				public isEmpty(): boolean;
				public constructor(id: string);
				public setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setInt(key: string, value: number): com.couchbase.lite.MutableDocument;
				public setJSON(json: string): com.couchbase.lite.MutableDocument;
				public getLong(param0: string): number;
				public setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
				public setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
				public setString(key: string, value: string): com.couchbase.lite.MutableDocument;
				public setBlob(key: string, value: com.couchbase.lite.Blob): com.couchbase.lite.MutableDocument;
				public setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(key: string): com.couchbase.lite.Array;
				public toJSON(): string;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(key: string): com.couchbase.lite.Dictionary;
				public getDictionary(key: string): com.couchbase.lite.MutableDictionary;
				public setJSON(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setDouble(key: string, value: number): com.couchbase.lite.MutableDocument;
				public getKeys(): java.util.List<string>;
				public toMutable(): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public setDate(key: string, value: java.util.Date): com.couchbase.lite.MutableDocument;
				public contains(param0: string): boolean;
				public getArray(key: string): com.couchbase.lite.MutableArray;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public setData(data: java.util.Map<string,any>): com.couchbase.lite.MutableDocument;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public constructor(id: string, json: string);
				public setBoolean(key: string, value: boolean): com.couchbase.lite.MutableDocument;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public setDictionary(key: string, value: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDocument;
				public setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
				public constructor(collection: com.couchbase.lite.Collection, id: string, c4doc: com.couchbase.lite.internal.core.C4Document, mutable: boolean);
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public constructor(data: java.util.Map<string,any>);
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
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public toString(): string;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public prepQueryLocked(this_: com.couchbase.lite.AbstractDatabase): com.couchbase.lite.internal.core.C4Query;
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
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				public static expression(expression: com.couchbase.lite.Expression): com.couchbase.lite.Ordering.SortOrder;
				public static property(property: string): com.couchbase.lite.Ordering.SortOrder;
				public constructor();
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
			export class Parameters extends com.couchbase.lite.internal.BaseJFleeceCollection {
				public static class: java.lang.Class<com.couchbase.lite.Parameters>;
				public setNumber(name: string, value: java.lang.Number): com.couchbase.lite.Parameters;
				public setArray(name: string, value: com.couchbase.lite.Array): com.couchbase.lite.Parameters;
				public setValue(name: string, value: any): com.couchbase.lite.Parameters;
				public setInt(name: string, value: number): com.couchbase.lite.Parameters;
				public constructor(parameters: com.couchbase.lite.Parameters);
				public getValue(name: string): any;
				public constructor();
				public setDate(name: string, value: java.util.Date): com.couchbase.lite.Parameters;
				public setDouble(name: string, value: number): com.couchbase.lite.Parameters;
				public setBlob(name: string, value: com.couchbase.lite.Blob): com.couchbase.lite.Parameters;
				public getValue(klass: java.lang.Class<any>, name: string): any;
				public setBoolean(name: string, value: boolean): com.couchbase.lite.Parameters;
				public setDictionary(name: string, value: com.couchbase.lite.Dictionary): com.couchbase.lite.Parameters;
				public setFloat(name: string, value: number): com.couchbase.lite.Parameters;
				public setString(name: string, value: string): com.couchbase.lite.Parameters;
				public setLong(name: string, value: number): com.couchbase.lite.Parameters;
			}
			export module Parameters {
				export class ImmutableParameters extends com.couchbase.lite.Parameters {
					public static class: java.lang.Class<com.couchbase.lite.Parameters.ImmutableParameters>;
					public setValue(name: string, value: any): com.couchbase.lite.Parameters;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class PropertyExpression extends com.couchbase.lite.Expression {
				public static class: java.lang.Class<com.couchbase.lite.PropertyExpression>;
				public from(fromAlias: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ProxyAuthenticator extends com.couchbase.lite.internal.BaseAuthenticator {
				public static class: java.lang.Class<com.couchbase.lite.ProxyAuthenticator>;
				public getPassword(): androidNative.Array<string>;
				public authenticate(options: java.util.Map<string,any>): void;
				public hashCode(): number;
				public finalize(): void;
				public getUsername(): string;
				public equals(o: any): boolean;
				public constructor(username: string, password: androidNative.Array<string>);
				public constructor();
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
				});
				public constructor();
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				public static createQuery(query: string, database: com.couchbase.lite.Database): com.couchbase.lite.Query;
				public static selectDistinct(results: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static select(results: androidNative.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
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
				public toString(): string;
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
			export class QueryIndex {
				public static class: java.lang.Class<com.couchbase.lite.QueryIndex>;
				public getCollection(): com.couchbase.lite.Collection;
				public getName(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatedDocument {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatedDocument>;
				/** @deprecated */
				public getCollectionName(): string;
				public getFlags(): java.util.EnumSet<com.couchbase.lite.DocumentFlag>;
				public getScope(): string;
				public getCollection(): string;
				public setError(error: com.couchbase.lite.CouchbaseLiteException): void;
				public getError(): com.couchbase.lite.CouchbaseLiteException;
				public toString(): string;
				/** @deprecated */
				public getCollectionScope(): string;
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
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public constructor(config: com.couchbase.lite.ReplicatorConfiguration);
				public createReplicatorForTarget(target: com.couchbase.lite.Endpoint): com.couchbase.lite.internal.core.C4Replicator;
				public handleOffline(prevState: com.couchbase.lite.ReplicatorActivityLevel, nowOnline: boolean): void;
				public addChangeListener(listener: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
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
				public static valueOf(name: string): com.couchbase.lite.ReplicatorActivityLevel;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChange extends com.couchbase.lite.internal.replicator.ReplicationStatusChange {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
				public toString(): string;
				public getReplicator(): com.couchbase.lite.Replicator;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
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

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChangeListenerToken extends com.couchbase.lite.ListenerToken {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChangeListenerToken>;
				public toString(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorConfiguration extends com.couchbase.lite.AbstractReplicatorConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorConfiguration>;
				public constructor(collections: java.util.Collection<com.couchbase.lite.CollectionConfiguration>, target: com.couchbase.lite.Endpoint);
				public constructor(config: com.couchbase.lite.ReplicatorConfiguration);
				public constructor(db: com.couchbase.lite.Database, collections: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, target: com.couchbase.lite.Endpoint);
				public getReplicatorConfiguration(): com.couchbase.lite.ReplicatorConfiguration;
				public constructor(config: com.couchbase.lite.AbstractReplicatorConfiguration);
				public constructor(configs: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
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
				public static values(): androidNative.Array<com.couchbase.lite.ReplicatorType>;
				public static valueOf(name: string): com.couchbase.lite.ReplicatorType;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Result extends com.couchbase.lite.internal.BaseJFleeceCollection {
				public static class: java.lang.Class<com.couchbase.lite.Result>;
				public getDouble(param0: number): number;
				public getNumber(param0: string): java.lang.Number;
				public getDate(index: number): java.util.Date;
				public getInt(index: number): number;
				public getValue(klass: java.lang.Class<any>, key: string): any;
				public getNumber(index: number): java.lang.Number;
				public getDictionary(index: number): com.couchbase.lite.Dictionary;
				public getBoolean(key: string): boolean;
				public getBoolean(param0: string): boolean;
				public getFloat(key: string): number;
				public getString(key: string): string;
				public getFloat(param0: string): number;
				public getInt(param0: number): number;
				public isEmpty(): boolean;
				public getFloat(index: number): number;
				public getDouble(index: number): number;
				public getValue(key: string): any;
				public getLong(param0: string): number;
				public getInt(key: string): number;
				public getDate(param0: number): java.util.Date;
				public getString(index: number): string;
				public getBoolean(param0: number): boolean;
				public getValue(klass: java.lang.Class<any>, index: number): any;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public getBoolean(index: number): boolean;
				public iterator(): java.util.Iterator<string>;
				public getArray(key: string): com.couchbase.lite.Array;
				public toJSON(): string;
				public getArray(param0: number): com.couchbase.lite.ArrayInterface;
				public getFloat(param0: number): number;
				public getValue(param0: java.lang.Class<any>, param1: number): any;
				public getLong(index: number): number;
				public getDictionary(key: string): com.couchbase.lite.Dictionary;
				public getString(param0: number): string;
				public getBlob(key: string): com.couchbase.lite.Blob;
				public getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: number): java.lang.Number;
				public getDate(key: string): java.util.Date;
				public getDouble(key: string): number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getValue(index: number): any;
				public getNumber(key: string): java.lang.Number;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public contains(param0: string): boolean;
				public getBlob(index: number): com.couchbase.lite.Blob;
				public toList(): java.util.List<any>;
				public getLong(key: string): number;
				public getLong(param0: number): number;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public getValue(param0: java.lang.Class<any>, param1: string): any;
				public getArray(index: number): com.couchbase.lite.Array;
				public contains(key: string): boolean;
				public getBlob(param0: number): com.couchbase.lite.Blob;
				public getDouble(param0: string): number;
				public getDate(param0: string): java.util.Date;
				public getValue(param0: number): any;
				public count(): number;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ResultContext extends com.couchbase.lite.internal.DbContext {
				public static class: java.lang.Class<com.couchbase.lite.ResultContext>;
				public constructor(db: com.couchbase.lite.AbstractDatabase, rs: com.couchbase.lite.ResultSet);
				public getDatabase(): com.couchbase.lite.AbstractDatabase;
				public constructor(db: com.couchbase.lite.BaseDatabase);
				public getDatabase(): com.couchbase.lite.BaseDatabase;
				public isClosed(): boolean;
				public getResultSet(): com.couchbase.lite.ResultSet;
				public constructor();
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
				public isClosed(): boolean;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Scope {
				public static class: java.lang.Class<com.couchbase.lite.Scope>;
				public static DEFAULT_NAME: string = "_default";
				public hashCode(): number;
				public getCollections(): java.util.Set<com.couchbase.lite.Collection>;
				public getName(): string;
				public equals(o: any): boolean;
				public toString(): string;
				public getCollection(collectionName: string): com.couchbase.lite.Collection;
				public getDatabase(): com.couchbase.lite.Database;
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
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public from(dataSource: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public from(param0: com.couchbase.lite.DataSource): com.couchbase.lite.From;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				public static property(property: string): com.couchbase.lite.SelectResult.As;
				public setExpression(expression: com.couchbase.lite.Expression): void;
				public static all(): com.couchbase.lite.SelectResult.From;
				public static expression(expression: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
				public constructor(expression: com.couchbase.lite.Expression);
			}
			export module SelectResult {
				export class As extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.As>;
					public as(alias: string): com.couchbase.lite.SelectResult.As;
				}
				export class From extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.From>;
					public from(alias: string): com.couchbase.lite.SelectResult;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class SessionAuthenticator extends com.couchbase.lite.internal.BaseAuthenticator implements com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.SessionAuthenticator>;
				public constructor(sessionID: string);
				public getCookieName(): string;
				public constructor(sessionID: string, cookieName: string);
				public authenticate(options: java.util.Map<string,any>): void;
				public getSessionID(): string;
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
				public constructor(url: java.net.URI);
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
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndexConfiguration extends com.couchbase.lite.IndexConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexConfiguration>;
				public setWhere(where: string): com.couchbase.lite.ValueIndexConfiguration;
				public constructor(expressions: androidNative.Array<string>);
				public getWhere(): string;
				public constructor(expressions: java.util.List<string>);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ValueIndexItem {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndexItem>;
				public static property(property: string): com.couchbase.lite.ValueIndexItem;
				public static expression(expression: com.couchbase.lite.Expression): com.couchbase.lite.ValueIndexItem;
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
				public addChangeListener(param0: java.util.concurrent.Executor, param1: any): com.couchbase.lite.ListenerToken;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(orderings: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public limit(limit: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: any): com.couchbase.lite.ListenerToken;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public groupBy(param0: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public limit(limit: com.couchbase.lite.Expression, offset: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public groupBy(expressions: androidNative.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				public orderBy(param0: androidNative.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(executor: java.util.concurrent.Executor, listener: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
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
				export abstract class AbstractSocketFactory extends com.couchbase.lite.internal.BaseSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.AbstractSocketFactory>;
					public endpoint: com.couchbase.lite.Endpoint;
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public toString(): string;
					public static bindSocketFactory(socketFactory: com.couchbase.lite.internal.BaseSocketFactory): number;
					public constructor(config: com.couchbase.lite.ReplicatorConfiguration, cookieStore: com.couchbase.lite.internal.replicator.CBLCookieStore, serverCertsListener: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public setTestListener(testListener: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.internal.sockets.SocketFromCore>): void;
					public createSocket(toCore: com.couchbase.lite.internal.sockets.SocketToCore, scheme: string, host: string, port: number, path: string, opts: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public createPlatformSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static getBoundSocketFactory(token: number): com.couchbase.lite.internal.BaseSocketFactory;
					public static unbindSocketFactory(token: number): void;
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
					public constructor(baseExecutor: java.util.concurrent.ThreadPoolExecutor);
					public cancelDelayedTask(param0: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
					public constructor(executor: java.util.concurrent.ThreadPoolExecutor);
					public postDelayedOnExecutor(delayMs: number, executor: java.util.concurrent.Executor, task: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
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
				export abstract class BaseAuthenticator {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseAuthenticator>;
					public constructor();
					public authenticate(param0: java.util.Map<string,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export abstract class BaseCollection {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseCollection>;
					public db: com.couchbase.lite.Database;
					public createFilterDocument(param0: string, param1: string, param2: com.couchbase.lite.internal.fleece.FLDict): com.couchbase.lite.Document;
					public constructor(db: com.couchbase.lite.Database);
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
					public isFullSync(): boolean;
					public getDirectory(): string;
					public constructor(config: com.couchbase.lite.DatabaseConfiguration);
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
					public getHeartbeat(): number;
					public getProxyAuthenticator(): com.couchbase.lite.ProxyAuthenticator;
					public constructor(config: com.couchbase.lite.ReplicatorConfiguration);
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export abstract class BaseJFleeceCollection {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseJFleeceCollection>;
					public asBoolean(value: any): boolean;
					public asValue(klass: java.lang.Class<any>, value: any): any;
					public toDouble(val: com.couchbase.lite.internal.fleece.MValue, container: com.couchbase.lite.internal.fleece.MCollection): number;
					public toJFleece(value: any): any;
					public asBlob(value: any): com.couchbase.lite.Blob;
					public toLong(val: com.couchbase.lite.internal.fleece.FLValue): number;
					public asString(value: any): string;
					public toFloat(val: com.couchbase.lite.internal.fleece.MValue, container: com.couchbase.lite.internal.fleece.MCollection): number;
					public toDouble(val: com.couchbase.lite.internal.fleece.FLValue): number;
					public asDictionary(value: any): com.couchbase.lite.Dictionary;
					public toLong(val: com.couchbase.lite.internal.fleece.MValue, container: com.couchbase.lite.internal.fleece.MCollection): number;
					public constructor();
					public toInteger(val: com.couchbase.lite.internal.fleece.FLValue): number;
					public toBoolean(val: com.couchbase.lite.internal.fleece.FLValue): boolean;
					public asArray(value: any): com.couchbase.lite.Array;
					public asNumber(value: any): java.lang.Number;
					public toJFleeceCollection(value: com.couchbase.lite.AbstractJFleeceCollection<any>): any;
					public toInteger(val: com.couchbase.lite.internal.fleece.MValue, container: com.couchbase.lite.internal.fleece.MCollection): number;
					public toFloat(val: com.couchbase.lite.internal.fleece.FLValue): number;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class BaseReplicatorConfiguration {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseReplicatorConfiguration>;
					public collectionConfigurations: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
					public constructor(configs: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>);
					public getCollectionConfigurations(): java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class BaseSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.BaseSocketFactory>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.internal.BaseSocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						bindSocketFactory(socketFactory: com.couchbase.lite.internal.BaseSocketFactory): number;
						getBoundSocketFactory(token: number): com.couchbase.lite.internal.BaseSocketFactory;
						unbindSocketFactory(token: number): void;
						createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
						"<clinit>"(): void;
					});
					public constructor();
					public static BOUND_SOCKET_FACTORIES: com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding<com.couchbase.lite.internal.BaseSocketFactory>;
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static bindSocketFactory(socketFactory: com.couchbase.lite.internal.BaseSocketFactory): number;
					public static getBoundSocketFactory(token: number): com.couchbase.lite.internal.BaseSocketFactory;
					public static unbindSocketFactory(token: number): void;
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
					public static PLATFORM: string = "CBL-ANDROID";
					public static SCRATCH_DIR_NAME: string = "CouchbaseLiteTemp";
					public static requireInit(message: string): void;
					public static init(ctxt: globalAndroid.content.Context, debug: boolean, defaultDbDir: java.io.File, scratchDir: java.io.File): void;
					public static getDefaultDbDir(): java.io.File;
					public static reset(): void;
					public static getNetworkConnectivityManager(): com.couchbase.lite.internal.replicator.NetworkConnectivityManager;
					public static getExecutionService(): com.couchbase.lite.internal.exec.ExecutionService;
					public static loadErrorMessages(): java.util.Map<string,string>;
					public static getDefaultDbDirPath(): string;
					public static getContext(): globalAndroid.content.Context;
					public static debugging(): boolean;
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
					public constructor(db: com.couchbase.lite.BaseDatabase);
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
					public constructor(config: com.couchbase.lite.DatabaseConfiguration);
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
					public constructor(config: com.couchbase.lite.ReplicatorConfiguration);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class QueryLanguage {
					public static class: java.lang.Class<com.couchbase.lite.internal.QueryLanguage>;
					public static JSON: com.couchbase.lite.internal.QueryLanguage;
					public static N1QL: com.couchbase.lite.internal.QueryLanguage;
					public static values(): androidNative.Array<com.couchbase.lite.internal.QueryLanguage>;
					public static valueOf(name: string): com.couchbase.lite.internal.QueryLanguage;
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
				export class ReplicationCollection {
					public static class: java.lang.Class<com.couchbase.lite.internal.ReplicationCollection>;
					public token: number;
					public scope: string;
					public name: string;
					public c4PushFilter: com.couchbase.lite.internal.ReplicationCollection.C4Filter;
					public c4PullFilter: com.couchbase.lite.internal.ReplicationCollection.C4Filter;
					public resolver: com.couchbase.lite.ConflictResolver;
					public static create(coll: com.couchbase.lite.Collection, config: com.couchbase.lite.CollectionConfiguration): com.couchbase.lite.internal.ReplicationCollection;
					public toString(): string;
					public getConflictResolver(): com.couchbase.lite.ConflictResolver;
					public static createAll(coll: java.util.Set<com.couchbase.lite.Collection>): androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>;
					public finalize(): void;
					public close(): void;
					public static create(coll: com.couchbase.lite.Collection, options: java.util.Map<string,any>, pushFilter: com.couchbase.lite.ReplicationFilter, pullFilter: com.couchbase.lite.ReplicationFilter, resolver: com.couchbase.lite.ConflictResolver): com.couchbase.lite.internal.ReplicationCollection;
					public static createAll(entry: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>): androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>;
					public static getBinding(token: number): com.couchbase.lite.internal.ReplicationCollection;
				}
				export module ReplicationCollection {
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
						public test(docId: string, revId: string, body: number, flags: number): boolean;
						public test(param0: string, param1: string, param2: number, param3: number): boolean;
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
				export class SocketFactory extends com.couchbase.lite.internal.AbstractSocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.SocketFactory>;
					public createSocket(param0: com.couchbase.lite.internal.sockets.SocketToCore, param1: string, param2: string, param3: number, param4: string, param5: androidNative.Array<number>): com.couchbase.lite.internal.sockets.SocketFromCore;
					public static bindSocketFactory(socketFactory: com.couchbase.lite.internal.BaseSocketFactory): number;
					public createPlatformSocket(toCore: com.couchbase.lite.internal.sockets.SocketToCore): com.couchbase.lite.internal.sockets.SocketFromCore;
					public constructor(config: com.couchbase.lite.ReplicatorConfiguration, cookieStore: com.couchbase.lite.internal.replicator.CBLCookieStore, serverCertsListener: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
					public static getBoundSocketFactory(token: number): com.couchbase.lite.internal.BaseSocketFactory;
					public static unbindSocketFactory(token: number): void;
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
						public connectivityChanged(observer: boolean): void;
						public unregisterObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public unregisterObserver(this_: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public static newInstance(): com.couchbase.lite.internal.connectivity.AndroidConnectivityManager;
						public registerObserver(this_: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
						public constructor(androidVersion: number, runner: com.couchbase.lite.internal.utils.Fn.Runner);
						public isConnected(): boolean;
						public clear(): void;
						public registerObserver(param0: com.couchbase.lite.internal.replicator.NetworkConnectivityManager.Observer): void;
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
						public startFailed(err: java.lang.RuntimeException): void;
						public getSysMgr(): globalAndroid.net.ConnectivityManager;
						public start(): void;
						public logStart(): void;
						public isConnected(): boolean;
						public stop(): void;
						public getCblMgr(): com.couchbase.lite.internal.connectivity.AndroidConnectivityManager;
						public onConnectivityChange(networkState: boolean): void;
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
						public static setTempDir(tempDir: string): void;
						public static setEnv(name: string, value: string, overwrite: number): void;
						public static debug(debugging: boolean): void;
						public static enableExtension(name: string, path: string): void;
						public static getMessage(domain: number, code: number, internalInfo: number): string;
						public static getBuildInfo(): string;
						public static getVersion(): string;
					}
					export module C4 {
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
								nEnableExtension(param0: string, param1: string): void;
								nGetMessage(param0: number, param1: number, param2: number): string;
							});
							public constructor();
							public nGetBuildInfo(): string;
							public nGetMessage(param0: number, param1: number, param2: number): string;
							public nGetVersion(): string;
							public nDebug(param0: boolean): void;
							public nSetTempDir(param0: string): void;
							public nSetenv(param0: string, param1: string, param2: number): void;
							public nEnableExtension(param0: string, param1: string): void;
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
					export class C4BlobKey extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobKey>;
						public static create(str: string): com.couchbase.lite.internal.core.C4BlobKey;
						public static create(peer: number): com.couchbase.lite.internal.core.C4BlobKey;
						public toString(): string;
					}
					export module C4BlobKey {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobKey.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4BlobKey$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nFromString(param0: string): number;
								nToString(param0: number): string;
								nFree(param0: number): void;
							});
							public constructor();
							public nToString(param0: number): string;
							public nFree(param0: number): void;
							public nFromString(param0: string): number;
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
					export class C4BlobReadStream extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobReadStream>;
						public read(b: androidNative.Array<number>, offset: number, maxBytesToRead: number): number;
						public seek(position: number): void;
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
					export abstract class C4BlobStore extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore>;
						public create(contents: androidNative.Array<number>): com.couchbase.lite.internal.core.C4BlobKey;
						public openWriteStream(): com.couchbase.lite.internal.core.C4BlobWriteStream;
						public openReadStream(blobKey: com.couchbase.lite.internal.core.C4BlobKey): com.couchbase.lite.internal.core.C4BlobReadStream;
						public static create(dbPeer: number): com.couchbase.lite.internal.core.C4BlobStore;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, refCounted: boolean, quiet: boolean);
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner);
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, quiet: boolean);
						public getSize(blobKey: com.couchbase.lite.internal.core.C4BlobKey): number;
						public getContents(blobKey: com.couchbase.lite.internal.core.C4BlobKey): androidNative.Array<number>;
						public getFilePath(blobKey: com.couchbase.lite.internal.core.C4BlobKey): string;
						public constructor(impl: com.couchbase.lite.internal.core.C4BlobStore.NativeImpl, peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner);
					}
					export module C4BlobStore {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4BlobStore$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nGetBlobStore(param0: number): number;
								nGetSize(param0: number, param1: number): number;
								nGetContents(param0: number, param1: number): androidNative.Array<number>;
								nGetFilePath(param0: number, param1: number): string;
								nCreate(param0: number, param1: androidNative.Array<number>): number;
								nDelete(param0: number, param1: number): void;
								nOpenReadStream(param0: number, param1: number): number;
								nOpenWriteStream(param0: number): number;
								nRead(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
								nSeek(param0: number, param1: number): void;
								nCloseReadStream(param0: number): void;
								nWrite(param0: number, param1: androidNative.Array<number>, param2: number): void;
								nComputeBlobKey(param0: number): number;
								nInstall(param0: number): void;
								nCloseWriteStream(param0: number): void;
							});
							public constructor();
							public nGetFilePath(param0: number, param1: number): string;
							public nDelete(param0: number, param1: number): void;
							public nSeek(param0: number, param1: number): void;
							public nOpenWriteStream(param0: number): number;
							public nInstall(param0: number): void;
							public nRead(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
							public nCloseWriteStream(param0: number): void;
							public nWrite(param0: number, param1: androidNative.Array<number>, param2: number): void;
							public nGetBlobStore(param0: number): number;
							public nOpenReadStream(param0: number, param1: number): number;
							public nCreate(param0: number, param1: androidNative.Array<number>): number;
							public nGetSize(param0: number, param1: number): number;
							public nGetContents(param0: number, param1: number): androidNative.Array<number>;
							public nComputeBlobKey(param0: number): number;
							public nCloseReadStream(param0: number): void;
						}
						export class UnmanagedC4BlobStore extends com.couchbase.lite.internal.core.C4BlobStore {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore.UnmanagedC4BlobStore>;
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
					export class C4BlobWriteStream extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobWriteStream>;
						public write(bytes: androidNative.Array<number>): void;
						public install(): void;
						public write(bytes: androidNative.Array<number>, len: number): void;
						public computeBlobKey(): com.couchbase.lite.internal.core.C4BlobKey;
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
					export class C4Collection extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Collection>;
						public docContainsBlobs(body: com.couchbase.lite.internal.fleece.FLSliceResult, keys: com.couchbase.lite.internal.fleece.FLSharedKeys): boolean;
						public getDocumentWithRevs(docId: string): com.couchbase.lite.internal.core.C4Document;
						public getDocumentCount(): number;
						public createDocumentObserver(docID: string, listener: java.lang.Runnable): com.couchbase.lite.internal.core.C4DocumentObserver;
						public purgeDocument(docID: string): void;
						public getName(): string;
						public createFullTextIndex(name: string, queryLanguage: number, indexSpec: string, language: string, ignoreDiacritics: boolean, where: string): void;
						public getDocumentExpiration(docID: string): number;
						public setDocumentExpiration(docID: string, timeStamp: number): void;
						public static create(c4db: com.couchbase.lite.internal.core.C4Database, scope: string, collection: string): com.couchbase.lite.internal.core.C4Collection;
						public createCollectionObserver(listener: java.lang.Runnable): com.couchbase.lite.internal.core.C4CollectionObserver;
						public getDbLock(): any;
						public createArrayIndex(name: string, path: string, indexSpec: string): void;
						public createPredictiveIndex(name: string, indexSpec: string): void;
						public static getDefault(c4db: com.couchbase.lite.internal.core.C4Database): com.couchbase.lite.internal.core.C4Collection;
						public getScope(): string;
						public getIndexesInfo(): com.couchbase.lite.internal.fleece.FLValue;
						public getIndex(name: string): com.couchbase.lite.internal.core.C4Index;
						public deleteIndex(name: string): void;
						public static get(c4db: com.couchbase.lite.internal.core.C4Database, scope: string, collection: string): com.couchbase.lite.internal.core.C4Collection;
						public createValueIndex(name: string, queryLanguage: number, indexSpec: string, where: string): void;
						public toString(): string;
						public isValid(): boolean;
						public getDb(): com.couchbase.lite.internal.core.C4Database;
						public createVectorIndex(name: string, queryExpressions: string, dimensions: number, metric: number, centroids: number, encoding: number, subquantizers: number, bits: number, minTrainingSize: number, maxTrainingSize: number, numProbes: number, isLazy: boolean): void;
						public getDocument(docId: string): com.couchbase.lite.internal.core.C4Document;
						public createDocument(docID: string, body: com.couchbase.lite.internal.fleece.FLSliceResult, flags: number): com.couchbase.lite.internal.core.C4Document;
					}
					export module C4Collection {
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
								nFree(param0: number): void;
								nGetDocumentCount(param0: number): number;
								nGetDocExpiration(param0: number, param1: string): number;
								nSetDocExpiration(param0: number, param1: string, param2: number): void;
								nPurgeDoc(param0: number, param1: string): void;
								nCreateValueIndex(param0: number, param1: string, param2: number, param3: string, param4: string): void;
								nCreateArrayIndex(param0: number, param1: string, param2: string, param3: string): void;
								nCreatePredictiveIndex(param0: number, param1: string, param2: string): void;
								nCreateFullTextIndex(param0: number, param1: string, param2: number, param3: string, param4: string, param5: boolean, param6: string): void;
								nCreateVectorIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: boolean): void;
								nGetIndexesInfo(param0: number): number;
								nGetIndex(param0: number, param1: string): number;
								nDeleteIndex(param0: number, param1: string): void;
							});
							public constructor();
							public nCreatePredictiveIndex(param0: number, param1: string, param2: string): void;
							public nCollectionIsValid(param0: number): boolean;
							public nCreateVectorIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: boolean): void;
							public nGetDefaultCollection(param0: number): number;
							public nFree(param0: number): void;
							public nCreateCollection(param0: number, param1: string, param2: string): number;
							public nPurgeDoc(param0: number, param1: string): void;
							public nCreateFullTextIndex(param0: number, param1: string, param2: number, param3: string, param4: string, param5: boolean, param6: string): void;
							public nSetDocExpiration(param0: number, param1: string, param2: number): void;
							public nGetDocExpiration(param0: number, param1: string): number;
							public nGetIndex(param0: number, param1: string): number;
							public nCreateValueIndex(param0: number, param1: string, param2: number, param3: string, param4: string): void;
							public nGetCollection(param0: number, param1: string, param2: string): number;
							public nGetDocumentCount(param0: number): number;
							public nGetIndexesInfo(param0: number): number;
							public nCreateArrayIndex(param0: number, param1: string, param2: string, param3: string): void;
							public nDeleteIndex(param0: number, param1: string): void;
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
					export class C4CollectionDocObserver extends com.couchbase.lite.internal.core.C4DocumentObserver {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionDocObserver>;
						public static newObserver(c4Coll: number, id: string, listener: java.lang.Runnable): com.couchbase.lite.internal.core.C4CollectionDocObserver;
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
					export class C4CollectionObserver extends com.couchbase.lite.internal.core.C4Peer implements com.couchbase.lite.internal.listener.ChangeNotifier.C4ChangeProducer<com.couchbase.lite.internal.core.C4DocumentChange>  {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionObserver>;
						public getChanges(maxChanges: number): java.util.List<com.couchbase.lite.internal.core.C4DocumentChange>;
						public close(): void;
						public getChanges(param0: number): java.util.List<any>;
					}
					export module C4CollectionObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4CollectionObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number, param1: number): number;
								nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
								nFree(param0: number): void;
							});
							public constructor();
							public nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
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
					export class C4CollectionSpec {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4CollectionSpec>;
						public constructor(scopeName: string, collectionName: string);
						public getCollectionName(): string;
						public getScopeName(): string;
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
						public static hasFlags(flags: number, targetFlags: number): boolean;
					}
					export module C4Constants {
						export class DatabaseFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.DatabaseFlags>;
							public static DISC_FULL_SYNC: number = 128;
						}
						export class DocumentFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.DocumentFlags>;
							public static DELETED: number = 1;
							public static CONFLICTED: number = 2;
							public static HAS_ATTACHMENTS: number = 4;
							public static EXISTS: number = 4096;
						}
						export class EncryptionAlgorithm {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EncryptionAlgorithm>;
							public static NONE: number = 0;
							public static AES256: number = 1;
						}
						export class EncryptionKeySize {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EncryptionKeySize>;
							public static AES256: number = 32;
						}
						export class EnumeratorFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.EnumeratorFlags>;
							public static DESCENDING: number = 1;
							public static UNSORTED: number = 2;
							public static INCLUDE_DELETED: number = 8;
							public static INCLUDE_NON_CONFLICTED: number = 16;
							public static INCLUDE_BODIES: number = 32;
							public static INCLUDE_REV_HISTORY: number = 64;
							public static DEFAULT: number = 48;
						}
						export class ErrorDomain {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.ErrorDomain>;
							public static LITE_CORE: number = 1;
							public static POSIX: number = 2;
							public static SQLITE: number = 3;
							public static FLEECE: number = 4;
							public static NETWORK: number = 5;
							public static WEB_SOCKET: number = 6;
							public static MBED_TLS: number = 7;
							public static UNUSED: number = 8;
							public static MAX_ERROR_DOMAINS: number = 7;
						}
						export class HttpError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.HttpError>;
							public static STATUS_MIN: number = 100;
							public static SWITCH_PROTOCOL: number = 101;
							public static MULTIPLE_CHOICE: number = 300;
							public static AUTH_REQUIRED: number = 401;
							public static FORBIDDEN: number = 403;
							public static NOT_FOUND: number = 404;
							public static CONFLICT: number = 409;
							public static PROXY_AUTH_REQUIRED: number = 407;
							public static ENTITY_TOO_LARGE: number = 413;
							public static IM_A_TEAPOT: number = 418;
							public static INTERNAL_SERVER_ERROR: number = 500;
							public static NOT_IMPLEMENTED: number = 501;
							public static SERVICE_UNAVAILABLE: number = 503;
							public static STATUS_MAX: number = 600;
						}
						export class IndexType {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.IndexType>;
							public static VALUE: number = 0;
							public static FULL_TEXT: number = 1;
							public static ARRAY: number = 2;
							public static PREDICTIVE: number = 3;
						}
						export class LiteCoreError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LiteCoreError>;
							public static SUCCESS: number = 0;
							public static ASSERTION_FAILED: number = 1;
							public static UNIMPLEMENTED: number = 2;
							public static UNSUPPORTED_ENCRYPTION: number = 3;
							public static BAD_REVISION_ID: number = 4;
							public static CORRUPT_REVISION_DATA: number = 5;
							public static NOT_OPEN: number = 6;
							public static NOT_FOUND: number = 7;
							public static CONFLICT: number = 8;
							public static INVALID_PARAMETER: number = 9;
							public static UNEXPECTED_ERROR: number = 10;
							public static CANT_OPEN_FILE: number = 11;
							public static IO_ERROR: number = 12;
							public static MEMORY_ERROR: number = 13;
							public static NOT_WRITABLE: number = 14;
							public static CORRUPT_DATA: number = 15;
							public static BUSY: number = 16;
							public static NOT_IN_TRANSACTION: number = 17;
							public static TRANSACTION_NOT_CLOSED: number = 18;
							public static UNSUPPORTED: number = 19;
							public static NOT_A_DATABASE_FILE: number = 20;
							public static WRONG_FORMAT: number = 21;
							public static CRYPTO: number = 22;
							public static INVALID_QUERY: number = 23;
							public static MISSING_INDEX: number = 24;
							public static INVALID_QUERY_PARAM: number = 25;
							public static REMOTE_ERROR: number = 26;
							public static DATABASE_TOO_OLD: number = 27;
							public static DATABASE_TOO_NEW: number = 28;
							public static BAD_DOC_ID: number = 29;
							public static CANT_UPGRADE_DATABASE: number = 30;
							public static DELTA_BASE_UNKNOWN: number = 31;
							public static CORRUPT_DELTA: number = 32;
							public static UNUSED: number = 33;
							public static MAX_ERROR_CODES: number = 32;
						}
						export class LogDomain {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LogDomain>;
							public static DEFAULT: string = "";
							public static ACTOR: string = "Actor";
							public static BLIP: string = "BLIP";
							public static BLIP_MESSAGES: string = "BLIPMessages";
							public static BLOB: string = "Blob";
							public static CHANGES: string = "Changes";
							public static DATABASE: string = "DB";
							public static DISCOVERY: string = "Discovery";
							public static ENUM: string = "Enum";
							public static LISTENER: string = "Listener";
							public static MDNS: string = "mDNS";
							public static P2P: string = "P2P";
							public static QUERY: string = "Query";
							public static SQL: string = "SQL";
							public static SYNC: string = "Sync";
							public static SYNC_BUSY: string = "SyncBusy";
							public static TLS: string = "TLS";
							public static WEB_SOCKET: string = "WS";
							public static ZIP: string = "Zip";
						}
						export class LogLevel {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LogLevel>;
							public static DEBUG: number = 0;
							public static VERBOSE: number = 1;
							public static INFO: number = 2;
							public static WARNING: number = 3;
							public static ERROR: number = 4;
							public static NONE: number = 5;
						}
						export class NetworkError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.NetworkError>;
							public static DNS_FAILURE: number = 1;
							public static UNKNOWN_HOST: number = 2;
							public static TIMEOUT: number = 3;
							public static INVALID_URL: number = 4;
							public static TOO_MANY_REDIRECTS: number = 5;
							public static TLS_HANDSHAKE_FAILED: number = 6;
							public static TLS_CERT_EXPIRED: number = 7;
							public static TLS_CERT_UNTRUSTED: number = 8;
							public static TLS_CLIENT_CERT_REQUIRED: number = 9;
							public static TLS_CLIENT_CERT_REJECTED: number = 10;
							public static TLS_CERT_UNKNOWN_ROOT: number = 11;
							public static INVALID_REDIRECT: number = 12;
							public static UNKNOWN: number = 13;
							public static TLS_CERT_REVOKED: number = 14;
							public static TLS_CERT_NAME_MISMATCH: number = 15;
							public static NETWORK_RESET: number = 16;
							public static CONNECTION_ABORTED: number = 17;
							public static CONNECTION_RESET: number = 18;
							public static CONNECTION_REFUSED: number = 19;
							public static NETWORK_DOWN: number = 20;
							public static NETWORK_UNREACHABLE: number = 21;
							public static NOT_CONNECTED: number = 22;
							public static HOST_DOWN: number = 23;
							public static HOST_UNREACHABLE: number = 24;
							public static ADDRESS_NOT_AVAILABLE: number = 25;
							public static BROKEN_PIPE: number = 26;
							public static UNKNOWN_INTERFACE: number = 27;
							public static UNUSED: number = 28;
						}
						export class RevisionFlags {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.RevisionFlags>;
							public static DELETED: number = 1;
							public static LEAF: number = 2;
							public static NEW: number = 4;
							public static HAS_ATTACHMENTS: number = 8;
							public static KEEP_BODY: number = 16;
							public static IS_CONFLICT: number = 32;
							public static CLOSED: number = 64;
							public static PURGED: number = 128;
						}
						export class WebSocketError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.WebSocketError>;
							public static NORMAL: number = 1000;
							public static GOING_AWAY: number = 1001;
							public static PROTOCOL_ERROR: number = 1002;
							public static DATA_ERROR: number = 1003;
							public static NO_CODE: number = 1005;
							public static ABNORMAL_CLOSE: number = 1006;
							public static BAD_MESSAGE_FORMAT: number = 1007;
							public static POLICY_ERROR: number = 1008;
							public static MESSAGE_TO_BIG: number = 1009;
							public static MISSING_EXTENSION: number = 1010;
							public static CANT_FULFILL: number = 1011;
							public static TLS_FAILURE: number = 1015;
							public static USER: number = 4000;
							public static USER_TRANSIENT: number = 4001;
							public static USER_PERMANENT: number = 4002;
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
					export abstract class C4Database extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database>;
						public static VERSION_VECTORS_ENABLED: boolean = 1;
						public static DB_EXTENSION: string = ".cblite2";
						public performMaintenance(type: com.couchbase.lite.MaintenanceType): boolean;
						public getSharedFleeceEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public getCollectionNames(scope: string): java.util.Set<string>;
						public createN1qlQuery(expression: string): com.couchbase.lite.internal.core.C4Query;
						public closeDb(): void;
						public docContainsBlobs(body: com.couchbase.lite.internal.fleece.FLSliceResult, keys: com.couchbase.lite.internal.fleece.FLSharedKeys): boolean;
						public getScopeNames(): java.util.Set<string>;
						public close(): void;
						public static getDatabaseFile(directory: java.io.File, name: string): java.io.File;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner);
						public getPublicUUID(): androidNative.Array<number>;
						public constructor(impl: com.couchbase.lite.internal.core.C4Database.NativeImpl, peer: number, lock: any, name: string, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner);
						public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
						public setCookie(uri: java.net.URI, setCookieHeader: string, acceptParentDomain: boolean): void;
						public createLocalReplicator(collections: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, targetDb: com.couchbase.lite.internal.core.C4Database, type: com.couchbase.lite.ReplicatorType, continuous: boolean, options: java.util.Map<string,any>, statusListener: com.couchbase.lite.internal.core.C4Replicator.StatusListener, docEndsListener: com.couchbase.lite.internal.core.C4Replicator.DocEndsListener, replicator: com.couchbase.lite.AbstractReplicator): com.couchbase.lite.internal.core.C4Replicator;
						public getDbName(): string;
						public createRemoteReplicator(collections: java.util.Map<com.couchbase.lite.Collection,com.couchbase.lite.CollectionConfiguration>, scheme: string, host: string, port: number, path: string, remoteDbName: string, framing: com.couchbase.lite.internal.sockets.MessageFraming, type: com.couchbase.lite.ReplicatorType, continuous: boolean, options: java.util.Map<string,any>, statusListener: com.couchbase.lite.internal.core.C4Replicator.StatusListener, docEndsListener: com.couchbase.lite.internal.core.C4Replicator.DocEndsListener, replicator: com.couchbase.lite.AbstractReplicator, socketFactory: com.couchbase.lite.internal.SocketFactory): com.couchbase.lite.internal.core.C4Replicator;
						public getDefaultCollection(): com.couchbase.lite.internal.core.C4Collection;
						public addCollection(scopeName: string, collectionName: string): com.couchbase.lite.internal.core.C4Collection;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, refCounted: boolean, quiet: boolean);
						public getDbDirectory(): string;
						public static getDatabase(parentDirPath: string, name: string, isFullSync: boolean, algorithm: number, encryptionKey: androidNative.Array<number>): com.couchbase.lite.internal.core.C4Database;
						public beginTransaction(): void;
						public createMessageEndpointReplicator(collections: java.util.Set<com.couchbase.lite.Collection>, c4Socket: com.couchbase.lite.internal.core.C4Socket, options: java.util.Map<string,any>, statusListener: com.couchbase.lite.internal.core.C4Replicator.StatusListener): com.couchbase.lite.internal.core.C4Replicator;
						public getCookies(uri: java.net.URI): string;
						public rekey(keyType: number, newKey: androidNative.Array<number>): void;
						public getLock(): any;
						public getDbFileName(): string;
						public deleteDb(): void;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, quiet: boolean);
						public getFLSharedKeys(): com.couchbase.lite.internal.fleece.FLSharedKeys;
						public endTransaction(commit: boolean): void;
						public getCollection(scopeName: string, collectionName: string): com.couchbase.lite.internal.core.C4Collection;
						public static getUnmanagedDatabase(peer: number): com.couchbase.lite.internal.core.C4Database;
						public toString(): string;
						public deleteCollection(scopeName: string, collectionName: string): void;
						public createJsonQuery(expression: string): com.couchbase.lite.internal.core.C4Query;
						public static copyDb(sourcePath: string, parentDir: string, name: string, algorithm: number, encryptionKey: androidNative.Array<number>): void;
						public getDbPath(): string;
						public static deleteNamedDb(parentDir: string, name: string): void;
						public hasScope(scope: string): boolean;
					}
					export module C4Database {
						export class ManagedC4Database extends com.couchbase.lite.internal.core.C4Database {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.ManagedC4Database>;
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
								nBeginTransaction(param0: number): void;
								nEndTransaction(param0: number, param1: boolean): void;
								nRekey(param0: number, param1: number, param2: androidNative.Array<number>): void;
								nMaintenance(param0: number, param1: number): boolean;
								nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
								nGetCookies(param0: number, param1: string): string;
								nGetSharedFleeceEncoder(param0: number): number;
								nGetFLSharedKeys(param0: number): number;
								nDocContainsBlobs(param0: number, param1: number, param2: number): boolean;
								nGetScopeNames(param0: number): java.util.Set<string>;
								nHasScope(param0: number, param1: string): boolean;
								nGetCollectionNames(param0: number, param1: string): java.util.Set<string>;
								nDeleteCollection(param0: number, param1: string, param2: string): void;
							});
							public constructor();
							public nEndTransaction(param0: number, param1: boolean): void;
							public nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
							public nGetPublicUUID(param0: number): androidNative.Array<number>;
							public nFree(param0: number): void;
							public nClose(param0: number): void;
							public nCopy(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
							public nDeleteCollection(param0: number, param1: string, param2: string): void;
							public nDelete(param0: number): void;
							public nDocContainsBlobs(param0: number, param1: number, param2: number): boolean;
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
							public nOpen(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): number;
						}
						export class UnmanagedC4Database extends com.couchbase.lite.internal.core.C4Database {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database.UnmanagedC4Database>;
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
					export class C4Document extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Document>;
						public getSequence(): number;
						public resolveConflict(winningRevID: string, losingRevID: string, mergeBody: androidNative.Array<number>, mergedFlags: number): void;
						public getSelectedSequence(): number;
						public close(): void;
						public bodyAsJSON(canonical: boolean): string;
						public isRevDeleted(): boolean;
						public getSelectedRevID(): string;
						public save(maxRevTreeDepth: number): void;
						public getSelectedFlags(): number;
						public hasDocAttachments(): boolean;
						public getRevisionHistory(coll: com.couchbase.lite.internal.core.C4Collection, maxRevs: number, backToRevs: java.util.List<string>): string;
						public getSelectedBody2(): com.couchbase.lite.internal.fleece.FLDict;
						public selectNextLeafRevision(includeDeleted: boolean, withBody: boolean): void;
						public toString(): string;
						public docExists(): boolean;
						public isDocConflicted(): boolean;
						public getTimestamp(): number;
						public getRevID(): string;
						public update(body: com.couchbase.lite.internal.fleece.FLSliceResult, flags: number): com.couchbase.lite.internal.core.C4Document;
						public isDocDeleted(): boolean;
						public hasRevAttachments(): boolean;
						public isRevConflicted(): boolean;
					}
					export module C4Document {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Document.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Document$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nGetFromCollection(param0: number, param1: string, param2: boolean, param3: boolean): number;
								nCreateFromSlice(param0: number, param1: string, param2: number, param3: number, param4: number): number;
								nGetFlags(param0: number): number;
								nGetRevID(param0: number): string;
								nGetSequence(param0: number): number;
								nGetSelectedFlags(param0: number): number;
								nGetSelectedRevID(param0: number): string;
								nGetRevisionHistory(param0: number, param1: number, param2: number, param3: androidNative.Array<string>): string;
								nGetTimestamp(param0: number): number;
								nGetSelectedSequence(param0: number): number;
								nGetSelectedBody2(param0: number): number;
								nSelectNextLeafRevision(param0: number, param1: boolean, param2: boolean): void;
								nResolveConflict(param0: number, param1: string, param2: string, param3: androidNative.Array<number>, param4: number): void;
								nUpdate(param0: number, param1: number, param2: number, param3: number): number;
								nSave(param0: number, param1: number): void;
								nBodyAsJSON(param0: number, param1: boolean): string;
								nFree(param0: number): void;
							});
							public constructor();
							public nGetRevisionHistory(param0: number, param1: number, param2: number, param3: androidNative.Array<string>): string;
							public nSelectNextLeafRevision(param0: number, param1: boolean, param2: boolean): void;
							public nFree(param0: number): void;
							public nBodyAsJSON(param0: number, param1: boolean): string;
							public nGetSequence(param0: number): number;
							public nGetTimestamp(param0: number): number;
							public nGetSelectedSequence(param0: number): number;
							public nUpdate(param0: number, param1: number, param2: number, param3: number): number;
							public nGetSelectedFlags(param0: number): number;
							public nGetFlags(param0: number): number;
							public nGetFromCollection(param0: number, param1: string, param2: boolean, param3: boolean): number;
							public nGetSelectedBody2(param0: number): number;
							public nGetSelectedRevID(param0: number): string;
							public nGetRevID(param0: number): string;
							public nResolveConflict(param0: number, param1: string, param2: string, param3: androidNative.Array<number>, param4: number): void;
							public nSave(param0: number, param1: number): void;
							public nCreateFromSlice(param0: number, param1: string, param2: number, param3: number, param4: number): number;
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
					export class C4DocumentChange {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentChange>;
						public getSequence(): number;
						public isExternal(): boolean;
						public getRevID(): string;
						public static createC4DocumentChange(docId: string, revId: string, seq: number, ext: boolean): com.couchbase.lite.internal.core.C4DocumentChange;
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
						public constructor(token: number, scope: string, collection: string, docId: string, revId: string, flags: number, sequence: number, errorDomain: number, errorCode: number, errorInternalInfo: number, errorIsTransient: boolean);
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
						public static NATIVE_IMPL: com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl;
						public static BOUND_OBSERVERS: com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding<com.couchbase.lite.internal.core.C4DocumentObserver>;
						public constructor(peer: java.lang.Long);
						public close(): void;
						public constructor(peer: number);
						public constructor(impl: com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl, token: number, peer: number, listener: java.lang.Runnable);
						public finalize(): void;
					}
					export module C4DocumentObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4DocumentObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number, param1: number, param2: string): number;
								nFree(param0: number): void;
							});
							public constructor();
							public nFree(param0: number): void;
							public nCreate(param0: number, param1: number, param2: string): number;
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
					export class C4Index extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Index>;
						public close(): void;
						public beginUpdate(limit: number): com.couchbase.lite.internal.core.C4IndexUpdater;
						public static create(peer: number): com.couchbase.lite.internal.core.C4Index;
						public finalize(): void;
					}
					export module C4Index {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Index.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Index$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nBeginUpdate(param0: number, param1: number): number;
								nReleaseIndex(param0: number): void;
							});
							public constructor();
							public nBeginUpdate(param0: number, param1: number): number;
							public nReleaseIndex(param0: number): void;
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
					export class C4IndexUpdater {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4IndexUpdater>;
						public static create(unused: number): com.couchbase.lite.internal.core.C4IndexUpdater;
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
						public static getPbkdf2Key(password: string): androidNative.Array<number>;
					}
					export module C4Key {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Key.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Key$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nPbkdf2(param0: string): androidNative.Array<number>;
							});
							public constructor();
							public nPbkdf2(param0: string): androidNative.Array<number>;
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
					export class C4Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log>;
						public setLogLevel(this_: com.couchbase.lite.LogDomain, domain: com.couchbase.lite.LogLevel): void;
						public static logCallback(c4Domain: string, c4Level: number, message: string): void;
						public logToCore(domain: com.couchbase.lite.LogDomain, level: com.couchbase.lite.LogLevel, message: string): void;
						public setFileLogLevel(newLevel: com.couchbase.lite.LogLevel): void;
						public initFileLogging(path: string, level: com.couchbase.lite.LogLevel, maxKept: number, maxSize: number, plainText: boolean, header: string): void;
						public setLogFilter(domain: com.couchbase.lite.LogLevel, this_: com.couchbase.lite.LogLevel, fileLevel: java.util.Set<com.couchbase.lite.LogDomain>): void;
						public setCallbackLevel(newLevel: com.couchbase.lite.LogLevel): void;
						public static create(): com.couchbase.lite.internal.core.C4Log;
						public setCallbackInstrumentation(instrumentation: com.couchbase.lite.internal.core.C4Log.Instrumentation): void;
					}
					export module C4Log {
						export class CallbackGuard extends java.lang.ThreadLocal<java.lang.Boolean> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log.CallbackGuard>;
							public initialValue(): java.lang.Boolean;
							public setInUse(val: boolean): void;
							public get(): java.lang.Boolean;
							public isInUse(): boolean;
							public set(value: java.lang.Boolean): void;
						}
						export class Instrumentation {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log.Instrumentation>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Log$Instrumentation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onCallback(param0: string, param1: number, param2: string): boolean;
								onLogToCore(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel, param2: string): boolean;
							});
							public constructor();
							public onCallback(param0: string, param1: number, param2: string): boolean;
							public onLogToCore(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel, param2: string): boolean;
						}
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Log.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Log$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nLog(param0: string, param1: number, param2: string): void;
								nSetLevel(param0: string, param1: number): void;
								nSetCallbackLevel(param0: number): void;
								nSetBinaryFileLevel(param0: number): void;
								nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							});
							public constructor();
							public nSetLevel(param0: string, param1: number): void;
							public nSetCallbackLevel(param0: number): void;
							public nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							public nSetBinaryFileLevel(param0: number): void;
							public nLog(param0: string, param1: number, param2: string): void;
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
						public withPeerOrNull(fn: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public voidWithPeerOrThrow(fn: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public withPeerOrThrow(fn: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): any;
						public nullableWithPeerOrThrow(fn: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public nonNullWithPeerOrThrow(fn: com.couchbase.lite.internal.utils.Fn.NonNullFunction<any,any>): any;
						public toString(): string;
						public constructor(peer: java.lang.Long);
						public getPeer(): number;
						public releasePeer(domain: com.couchbase.lite.LogDomain, fn: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public getPeerLock(): any;
						public withPeer(fn: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public withPeerOrDefault(this_: any, def: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public constructor(peer: number);
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
					export abstract class C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Peer>;
						public dumpStats(): void;
						public voidWithPeerOrThrow(this_: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
						public getPeerLock(): any;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, refCounted: boolean, quiet: boolean);
						public close(): void;
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner);
						public constructor(peer: number, cleaner: com.couchbase.lite.internal.core.C4Peer.PeerCleaner, quiet: boolean);
						public withPeerOrThrow(this_: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): any;
						public withPeerOrNull(this_: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public withPeerOrDefault(peer: any, this_: com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows<any,any,any>): any;
						public toString(): string;
						public voidWithPeerOrWarn(this_: com.couchbase.lite.internal.utils.Fn.ConsumerThrows<any,any>): void;
					}
					export module C4Peer {
						export class PeerCleaner {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Peer.PeerCleaner>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Peer$PeerCleaner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								dispose(param0: number): void;
							});
							public constructor();
							public dispose(param0: number): void;
						}
						export class PeerHolder extends com.couchbase.lite.internal.exec.Cleaner.Cleanable {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Peer.PeerHolder>;
							public id: number;
							public toString(): string;
							public clean(finalizing: boolean): void;
							public clean(param0: boolean): void;
						}
						export class UncountedPeerHolder extends com.couchbase.lite.internal.core.C4Peer.PeerHolder {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Peer.UncountedPeerHolder>;
							public hashCode(): number;
							public equals(o: any): boolean;
							public clean(param0: boolean): void;
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
					export class C4Query extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query>;
						public static create(impl: com.couchbase.lite.internal.core.C4Query.NativeImpl, c4db: com.couchbase.lite.internal.core.C4Database, language: com.couchbase.lite.internal.QueryLanguage, expression: string): com.couchbase.lite.internal.core.C4Query;
						public setParameters(params: com.couchbase.lite.internal.fleece.FLSliceResult): void;
						public run(params: com.couchbase.lite.internal.fleece.FLSliceResult): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public static create(c4db: com.couchbase.lite.internal.core.C4Database, language: com.couchbase.lite.internal.QueryLanguage, expression: string): com.couchbase.lite.internal.core.C4Query;
						public explain(): string;
						public getColumnCount(): number;
						public getColumnNameForIndex(idx: number): string;
					}
					export module C4Query {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Query$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreateQuery(param0: number, param1: number, param2: string): number;
								nSetParameters(param0: number, param1: number, param2: number): void;
								nExplain(param0: number): string;
								nRun(param0: number, param1: number, param2: number): number;
								nColumnCount(param0: number): number;
								nColumnName(param0: number, param1: number): string;
								nFree(param0: number): void;
							});
							public constructor();
							public nFree(param0: number): void;
							public nRun(param0: number, param1: number, param2: number): number;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export class C4QueryEnumerator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryEnumerator>;
						public getMissingColumns(): number;
						public getColumns(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public close(): void;
						public next(): boolean;
						public finalize(): void;
					}
					export module C4QueryEnumerator {
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
							});
							public constructor();
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nGetMissingColumns(param0: number): number;
							public nGetColumns(param0: number): number;
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
					export class C4QueryObserver extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryObserver>;
						public close(): void;
						public static create(query: com.couchbase.lite.internal.core.C4Query, callback: com.couchbase.lite.internal.core.C4QueryObserver.QueryChangeCallback): com.couchbase.lite.internal.core.C4QueryObserver;
						public toString(): string;
						public enable(): void;
						public finalize(): void;
					}
					export module C4QueryObserver {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryObserver.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4QueryObserver$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreate(param0: number, param1: number): number;
								nEnable(param0: number): void;
								nFree(param0: number): void;
							});
							public constructor();
							public nEnable(param0: number): void;
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export abstract class C4Replicator extends com.couchbase.lite.internal.core.C4Peer {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator>;
						public static LOG_DOMAIN: com.couchbase.lite.LogDomain;
						public static WEBSOCKET_SCHEME: string = "ws";
						public static WEBSOCKET_SECURE_CONNECTION_SCHEME: string = "wss";
						public static MESSAGE_SCHEME: string = "x-msg-endpt";
						public static C4_REPLICATOR_SCHEME_2: string = "blip";
						public static C4_REPLICATOR_TLS_SCHEME_2: string = "blips";
						public static PROGRESS_OVERALL: number = 0;
						public static PROGRESS_PER_DOC: number = 1;
						public static PROGRESS_PER_ATTACHMENT: number = 2;
						public static REPLICATOR_OPTION_DOC_IDS: string = "docIDs";
						public static REPLICATOR_OPTION_CHANNELS: string = "channels";
						public static REPLICATOR_OPTION_FILTER: string = "filter";
						public static REPLICATOR_OPTION_FILTER_PARAMS: string = "filterParams";
						public static REPLICATOR_OPTION_SKIP_DELETED: string = "skipDeleted";
						public static REPLICATOR_OPTION_NO_INCOMING_CONFLICTS: string = "noIncomingConflicts";
						public static REPLICATOR_OPTION_OUTGOING_CONFLICTS: string = "outgoingConflicts";
						public static REPLICATOR_CHECKPOINT_INTERVAL: string = "checkpointInterval";
						public static REPLICATOR_OPTION_REMOTE_DB_UNIQUE_ID: string = "remoteDBUniqueID";
						public static REPLICATOR_OPTION_DISABLE_DELTAS: string = "noDeltas";
						public static REPLICATOR_OPTION_DISABLE_PROPERTY_DECRYPTION: string = "noDecryption";
						public static REPLICATOR_OPTION_MAX_RETRIES: string = "maxRetries";
						public static REPLICATOR_OPTION_MAX_RETRY_INTERVAL: string = "maxRetryInterval";
						public static REPLICATOR_OPTION_ENABLE_AUTO_PURGE: string = "autoPurge";
						public static REPLICATOR_OPTION_ROOT_CERTS: string = "rootCerts";
						public static REPLICATOR_OPTION_PINNED_SERVER_CERT: string = "pinnedCert";
						public static REPLICATOR_OPTION_SELF_SIGNED_SERVER_CERT: string = "onlySelfSignedServer";
						public static REPLICATOR_OPTION_ACCEPT_ALL_CERTS: string = "acceptAllCerts";
						public static REPLICATOR_OPTION_EXTRA_HEADERS: string = "headers";
						public static REPLICATOR_OPTION_COOKIES: string = "cookies";
						public static REPLICATOR_OPTION_ACCEPT_PARENT_COOKIES: string = "acceptParentDomainCookies";
						public static REPLICATOR_OPTION_AUTHENTICATION: string = "auth";
						public static REPLICATOR_HEARTBEAT_INTERVAL: string = "heartbeat";
						public static SOCKET_OPTION_WS_PROTOCOLS: string = "WS-Protocols";
						public static SOCKET_OPTIONS_NETWORK_INTERFACE: string = "networkInterface";
						public static REPLICATOR_COMPRESSION_LEVEL: string = "BLIPCompressionLevel";
						public static REPLICATOR_AUTH_TYPE: string = "type";
						public static REPLICATOR_AUTH_USER_NAME: string = "username";
						public static REPLICATOR_AUTH_PASSWORD: string = "password";
						public static REPLICATOR_AUTH_CLIENT_CERT: string = "clientCert";
						public static REPLICATOR_AUTH_CLIENT_CERT_KEY: string = "clientCertKey";
						public static REPLICATOR_AUTH_TOKEN: string = "token";
						public static REPLICATOR_OPTION_PROXY_USER: string = "proxyUser";
						public static REPLICATOR_OPTION_PROXY_PASS: string = "proxyPassword";
						public static AUTH_TYPE_BASIC: string = "Basic";
						public static AUTH_TYPE_SESSION: string = "Session";
						public static AUTH_TYPE_OPEN_ID_CONNECT: string = "OpenID Connect";
						public static AUTH_TYPE_FACEBOOK: string = "Facebook";
						public static AUTH_TYPE_CLIENT_CERT: string = "Client Cert";
						public statusListener: com.couchbase.lite.internal.core.C4Replicator.StatusListener;
						public setProgressLevel(level: number): void;
						public close(): void;
						public getStatus(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public getPendingDocIDs(result: string, this_: string): java.util.Set<string>;
						public getReplId(): string;
						public isDocumentPending(docId: string, scope: string, collection: string): boolean;
						public start(restart: boolean): void;
						public stop(): void;
						public setHostReachable(reachable: boolean): void;
						public documentsEnded(param0: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, param1: boolean): void;
						public setOptions(options: androidNative.Array<number>): void;
					}
					export module C4Replicator {
						export class C4CommonReplicator extends com.couchbase.lite.internal.core.C4Replicator {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.C4CommonReplicator>;
							public toString(): string;
							public documentsEnded(docEnds: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, pushing: boolean): void;
						}
						export class C4MessageEndpointReplicator extends com.couchbase.lite.internal.core.C4Replicator {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator.C4MessageEndpointReplicator>;
							public toString(): string;
							public documentsEnded(docEnds: java.util.List<com.couchbase.lite.internal.core.C4DocumentEnded>, pushing: boolean): void;
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
								nCreate(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: string, param4: string, param5: number, param6: string, param7: string, param8: number, param9: boolean, param10: boolean, param11: boolean, param12: androidNative.Array<number>, param13: number, param14: number): number;
								nCreateLocal(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: boolean, param5: boolean, param6: boolean, param7: androidNative.Array<number>, param8: number): number;
								nCreateWithSocket(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): number;
								nStart(param0: number, param1: boolean): void;
								nSetOptions(param0: number, param1: androidNative.Array<number>): void;
								nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
								nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
								nIsDocumentPending(param0: number, param1: string, param2: string, param3: string): boolean;
								nSetProgressLevel(param0: number, param1: number): void;
								nSetHostReachable(param0: number, param1: boolean): void;
								nStop(param0: number): void;
								nFree(param0: number): void;
							});
							public constructor();
							public nSetProgressLevel(param0: number, param1: number): void;
							public nFree(param0: number): void;
							public nSetOptions(param0: number, param1: androidNative.Array<number>): void;
							public nStop(param0: number): void;
							public nCreateWithSocket(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): number;
							public nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
							public nSetHostReachable(param0: number, param1: boolean): void;
							public nCreateLocal(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: boolean, param5: boolean, param6: boolean, param7: androidNative.Array<number>, param8: number): number;
							public nStart(param0: number, param1: boolean): void;
							public nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nCreate(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: string, param4: string, param5: number, param6: string, param7: string, param8: number, param9: boolean, param10: boolean, param11: boolean, param12: androidNative.Array<number>, param13: number, param14: number): number;
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
						public getVal(): number;
						public static valueOf(name: string): com.couchbase.lite.internal.core.C4ReplicatorMode;
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
						public constructor(activityLevel: number, errorDomain: number, errorCode: number);
						public constructor(activityLevel: number, progressUnitsCompleted: number, progressUnitsTotal: number, progressDocumentCount: number, errorDomain: number, errorCode: number, errorInternalInfo: number);
						public getActivityLevel(): number;
						public constructor(c4Status: com.couchbase.lite.internal.core.C4ReplicatorStatus);
						public getErrorInternalInfo(): number;
						public getProgressUnitsCompleted(): number;
						public toString(): string;
					}
					export module C4ReplicatorStatus {
						export class ActivityLevel {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4ReplicatorStatus.ActivityLevel>;
							public static STOPPED: number = 0;
							public static OFFLINE: number = 1;
							public static CONNECTING: number = 2;
							public static IDLE: number = 3;
							public static BUSY: number = 4;
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
					export class C4Socket extends com.couchbase.lite.internal.core.C4Peer implements com.couchbase.lite.internal.sockets.SocketToCore {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket>;
						public close(): void;
						public closeCore(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public gotPeerCertificate(param0: androidNative.Array<number>, param1: string): boolean;
						public closeCore(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public writeToCore(data: androidNative.Array<number>): void;
						public writeToCore(param0: androidNative.Array<number>): void;
						public requestCoreClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public toString(): string;
						public gotPeerCertificate(certData: androidNative.Array<number>, hostname: string): boolean;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromCore): void;
						public ackWriteToCore(param0: number): void;
						public init(core: com.couchbase.lite.internal.sockets.SocketFromCore): void;
						public ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
						public static createPassiveSocket(id: number, framing: com.couchbase.lite.internal.sockets.MessageFraming): com.couchbase.lite.internal.core.C4Socket;
						public requestCoreClose(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public ackOpenToCore(httpStatus: number, fleeceResponseHeaders: androidNative.Array<number>): void;
						public getLock(): any;
						public ackWriteToCore(byteCount: number): void;
					}
					export module C4Socket {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.core.C4Socket$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
								nGotPeerCertificate(param0: number, param1: androidNative.Array<number>, param2: string): boolean;
								nOpened(param0: number): void;
								nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
								nCompletedWrite(param0: number, param1: number): void;
								nReceived(param0: number, param1: androidNative.Array<number>): void;
								nCloseRequested(param0: number, param1: number, param2: string): void;
								nClosed(param0: number, param1: number, param2: number, param3: string): void;
								nCreated(param0: number): void;
							});
							public constructor();
							public nCompletedWrite(param0: number, param1: number): void;
							public nReceived(param0: number, param1: androidNative.Array<number>): void;
							public nGotPeerCertificate(param0: number, param1: androidNative.Array<number>, param2: string): boolean;
							public nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nClosed(param0: number, param1: number, param2: number, param3: string): void;
							public nOpened(param0: number): void;
							public nCreated(param0: number): void;
							public nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
							public nCloseRequested(param0: number, param1: number, param2: string): void;
						}
						export class NativeRefPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.WeakPeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket.NativeRefPeerBinding<any>>;
							public constructor();
							public preGetBinding(key: number): void;
							public preBind(key: number, obj: any): void;
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
					export module impl {
						export class NativeC4 extends com.couchbase.lite.internal.core.C4.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4>;
							public constructor();
							public nGetVersion(): string;
							public static getVersion(): string;
							public static setenv(param0: string, param1: string, param2: number): void;
							public static getBuildInfo(): string;
							public nEnableExtension(name: string, path: string): void;
							public nSetenv(name: string, value: string, overwrite: number): void;
							public nGetMessage(domain: number, code: number, internalInfo: number): string;
							public nEnableExtension(param0: string, param1: string): void;
							public nSetTempDir(tempDir: string): void;
							public nGetBuildInfo(): string;
							public nGetMessage(param0: number, param1: number, param2: number): string;
							public nDebug(debugging: boolean): void;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module core {
					export module impl {
						export class NativeC4Blob implements com.couchbase.lite.internal.core.C4BlobKey.NativeImpl, com.couchbase.lite.internal.core.C4BlobStore.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Blob>;
							public nCreate(peer: number, data: androidNative.Array<number>): number;
							public nGetContents(peer: number, key: number): androidNative.Array<number>;
							public nFree(param0: number): void;
							public nDelete(param0: number, param1: number): void;
							public nOpenReadStream(peer: number, key: number): number;
							public nFree(peer: number): void;
							public nCloseWriteStream(param0: number): void;
							public nOpenWriteStream(peer: number): number;
							public nComputeBlobKey(peer: number): number;
							public nToString(param0: number): string;
							public nOpenReadStream(param0: number, param1: number): number;
							public nCreate(param0: number, param1: androidNative.Array<number>): number;
							public nWrite(peer: number, data: androidNative.Array<number>, len: number): void;
							public nComputeBlobKey(param0: number): number;
							public nCloseReadStream(param0: number): void;
							public constructor();
							public nFromString(str: string): number;
							public nGetFilePath(peer: number, key: number): string;
							public nGetFilePath(param0: number, param1: number): string;
							public nInstall(peer: number): void;
							public nSeek(param0: number, param1: number): void;
							public nCloseWriteStream(peer: number): void;
							public nFromString(param0: string): number;
							public nOpenWriteStream(param0: number): number;
							public nInstall(param0: number): void;
							public nGetSize(peer: number, key: number): number;
							public nRead(param0: number, param1: androidNative.Array<number>, param2: number, param3: number): number;
							public nToString(peer: number): string;
							public nSeek(peer: number, pos: number): void;
							public nWrite(param0: number, param1: androidNative.Array<number>, param2: number): void;
							public nGetBlobStore(param0: number): number;
							public nCloseReadStream(peer: number): void;
							public nRead(peer: number, data: androidNative.Array<number>, offset: number, len: number): number;
							public nGetSize(param0: number, param1: number): number;
							public nGetContents(param0: number, param1: number): androidNative.Array<number>;
							public nGetBlobStore(db: number): number;
							public nDelete(peer: number, key: number): void;
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
					export module impl {
						export class NativeC4Collection extends com.couchbase.lite.internal.core.C4Collection.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Collection>;
							public nCreateVectorIndex(peer: number, name: string, queryExpressions: string, dimensions: number, metric: number, centroids: number, encoding: number, subquantizers: number, bits: number, minTrainingSize: number, maxTrainingSize: number, numProbes: number, isLazy: boolean): void;
							public nCreateVectorIndex(param0: number, param1: string, param2: string, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: boolean): void;
							public nFree(param0: number): void;
							public nFree(peer: number): void;
							public nCreateCollection(param0: number, param1: string, param2: string): number;
							public nCreateFullTextIndex(param0: number, param1: string, param2: number, param3: string, param4: string, param5: boolean, param6: string): void;
							public nSetDocExpiration(param0: number, param1: string, param2: number): void;
							public nGetDocExpiration(param0: number, param1: string): number;
							public nGetIndex(param0: number, param1: string): number;
							public nGetIndex(peer: number, name: string): number;
							public nCreateValueIndex(param0: number, param1: string, param2: number, param3: string, param4: string): void;
							public nGetDocumentCount(param0: number): number;
							public nGetIndexesInfo(param0: number): number;
							public nCreateArrayIndex(param0: number, param1: string, param2: string, param3: string): void;
							public nGetDocExpiration(peer: number, docID: string): number;
							public nDeleteIndex(param0: number, param1: string): void;
							public constructor();
							public nGetCollection(c4Db: number, scope: string, collection: string): number;
							public nCreatePredictiveIndex(param0: number, param1: string, param2: string): void;
							public nSetDocExpiration(peer: number, docID: string, timestamp: number): void;
							public nCollectionIsValid(param0: number): boolean;
							public nCreateArrayIndex(peer: number, name: string, path: string, indexSpec: string): void;
							public nGetIndexesInfo(peer: number): number;
							public nGetDefaultCollection(param0: number): number;
							public nPurgeDoc(peer: number, docID: string): void;
							public nCreateFullTextIndex(peer: number, name: string, qLanguage: number, indexSpec: string, language: string, ignoreDiacritics: boolean, where: string): void;
							public nCollectionIsValid(peer: number): boolean;
							public nCreateCollection(c4Db: number, scope: string, collection: string): number;
							public nGetDefaultCollection(c4Db: number): number;
							public nPurgeDoc(param0: number, param1: string): void;
							public nGetDocumentCount(peer: number): number;
							public nCreatePredictiveIndex(peer: number, name: string, indexSpec: string): void;
							public nCreateValueIndex(peer: number, name: string, qLanguage: number, indexSpec: string, where: string): void;
							public nGetCollection(param0: number, param1: string, param2: string): number;
							public nDeleteIndex(peer: number, name: string): void;
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
					export module impl {
						export class NativeC4CollectionObserver extends com.couchbase.lite.internal.core.C4CollectionObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4CollectionObserver>;
							public constructor();
							public nCreate(token: number, coll: number): number;
							public nGetChanges(param0: number, param1: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
							public nGetChanges(peer: number, maxChanges: number): androidNative.Array<com.couchbase.lite.internal.core.C4DocumentChange>;
							public nFree(peer: number): void;
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
					export module impl {
						export class NativeC4Database extends com.couchbase.lite.internal.core.C4Database.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Database>;
							public nEndTransaction(param0: number, param1: boolean): void;
							public nSetCookie(param0: number, param1: string, param2: string, param3: boolean): void;
							public nFree(param0: number): void;
							public nClose(param0: number): void;
							public nCopy(param0: string, param1: string, param2: string, param3: number, param4: number, param5: androidNative.Array<number>): void;
							public nDeleteCollection(param0: number, param1: string, param2: string): void;
							public nBeginTransaction(param0: number): void;
							public nGetFLSharedKeys(param0: number): number;
							public nClose(db: number): void;
							public nBeginTransaction(db: number): void;
							public nEndTransaction(db: number, commit: boolean): void;
							public nGetCollectionNames(param0: number, param1: string): java.util.Set<string>;
							public nRekey(db: number, keyType: number, newKey: androidNative.Array<number>): void;
							public nGetScopeNames(peer: number): java.util.Set<string>;
							public nGetCollectionNames(peer: number, scope: string): java.util.Set<string>;
							public nDelete(db: number): void;
							public nGetPath(param0: number): string;
							public nMaintenance(param0: number, param1: number): boolean;
							public nGetCookies(param0: number, param1: string): string;
							public nOpen(param0: string, param1: string, param2: number, param3: number, param4: androidNative.Array<number>): number;
							public constructor();
							public nSetCookie(db: number, url: string, setCookieHeader: string, acceptParentDomain: boolean): void;
							public nGetCookies(db: number, url: string): string;
							public nDocContainsBlobs(dictPtr: number, dictSize: number, sharedKeys: number): boolean;
							public nGetPublicUUID(param0: number): androidNative.Array<number>;
							public nHasScope(peer: number, scope: string): boolean;
							public nCopy(sourcePath: string, parentDir: string, name: string, flags: number, algorithm: number, encryptionKey: androidNative.Array<number>): void;
							public nDeleteNamed(parentDir: string, name: string): void;
							public nDelete(param0: number): void;
							public nDocContainsBlobs(param0: number, param1: number, param2: number): boolean;
							public nGetScopeNames(param0: number): java.util.Set<string>;
							public nHasScope(param0: number, param1: string): boolean;
							public nDeleteNamed(param0: string, param1: string): void;
							public nOpen(parentDir: string, name: string, flags: number, algorithm: number, encryptionKey: androidNative.Array<number>): number;
							public nGetSharedFleeceEncoder(db: number): number;
							public nDeleteCollection(peer: number, scope: string, collection: string): void;
							public nGetPath(db: number): string;
							public nGetSharedFleeceEncoder(param0: number): number;
							public nFree(db: number): void;
							public nRekey(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nGetPublicUUID(db: number): androidNative.Array<number>;
							public nGetFLSharedKeys(db: number): number;
							public nMaintenance(db: number, type: number): boolean;
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
					export module impl {
						export class NativeC4Document extends com.couchbase.lite.internal.core.C4Document.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Document>;
							public nGetRevisionHistory(param0: number, param1: number, param2: number, param3: androidNative.Array<string>): string;
							public nFree(param0: number): void;
							public nGetSelectedBody2(doc: number): number;
							public nFree(doc: number): void;
							public nGetTimestamp(param0: number): number;
							public nUpdate(param0: number, param1: number, param2: number, param3: number): number;
							public nGetSelectedFlags(doc: number): number;
							public nGetTimestamp(doc: number): number;
							public nSelectNextLeafRevision(doc: number, includeDeleted: boolean, withBody: boolean): void;
							public nBodyAsJSON(doc: number, canonical: boolean): string;
							public nGetFromCollection(coll: number, docID: string, mustExist: boolean, getAllRevs: boolean): number;
							public nUpdate(doc: number, bodyPtr: number, bodySize: number, flags: number): number;
							public nGetFromCollection(param0: number, param1: string, param2: boolean, param3: boolean): number;
							public nGetSelectedRevID(param0: number): string;
							public nGetRevID(param0: number): string;
							public nGetRevID(doc: number): string;
							public nResolveConflict(param0: number, param1: string, param2: string, param3: androidNative.Array<number>, param4: number): void;
							public nResolveConflict(doc: number, winningRevID: string, losingRevID: string, mergeBody: androidNative.Array<number>, mergedFlags: number): void;
							public nSave(param0: number, param1: number): void;
							public nCreateFromSlice(param0: number, param1: string, param2: number, param3: number, param4: number): number;
							public constructor();
							public nGetSelectedRevID(doc: number): string;
							public nSelectNextLeafRevision(param0: number, param1: boolean, param2: boolean): void;
							public nCreateFromSlice(coll: number, docID: string, bodyPtr: number, bodySize: number, flags: number): number;
							public nBodyAsJSON(param0: number, param1: boolean): string;
							public nGetSequence(param0: number): number;
							public nGetFlags(doc: number): number;
							public nGetSelectedSequence(param0: number): number;
							public nGetRevisionHistory(coll: number, doc: number, maxRevs: number, backToRevs: androidNative.Array<string>): string;
							public nGetSelectedSequence(doc: number): number;
							public nGetSelectedFlags(param0: number): number;
							public nGetSequence(doc: number): number;
							public nGetFlags(param0: number): number;
							public nGetSelectedBody2(param0: number): number;
							public nSave(doc: number, maxRevTreeDepth: number): void;
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
					export module impl {
						export class NativeC4DocumentObserver extends com.couchbase.lite.internal.core.C4DocumentObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4DocumentObserver>;
							public constructor();
							public nCreate(peer: number, token: number, docId: string): number;
							public nFree(param0: number): void;
							public nCreate(param0: number, param1: number, param2: string): number;
							public nFree(peer: number): void;
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
					export module impl {
						export class NativeC4Index extends com.couchbase.lite.internal.core.C4Index.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Index>;
							public constructor();
							public nBeginUpdate(peer: number, limit: number): number;
							public nBeginUpdate(param0: number, param1: number): number;
							public nReleaseIndex(param0: number): void;
							public nReleaseIndex(peer: number): void;
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
					export module impl {
						export class NativeC4Key extends com.couchbase.lite.internal.core.C4Key.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Key>;
							public constructor();
							public nPbkdf2(password: string): androidNative.Array<number>;
							public nPbkdf2(param0: string): androidNative.Array<number>;
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
					export module impl {
						export class NativeC4Log extends com.couchbase.lite.internal.core.C4Log.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Log>;
							public constructor();
							public nSetCallbackLevel(level: number): void;
							public nSetLevel(domain: string, level: number): void;
							public nSetBinaryFileLevel(level: number): void;
							public nWriteToBinaryFile(path: string, level: number, maxRotateCount: number, maxSize: number, usePlaintext: boolean, header: string): void;
							public nSetLevel(param0: string, param1: number): void;
							public nSetCallbackLevel(param0: number): void;
							public nWriteToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
							public nSetBinaryFileLevel(param0: number): void;
							public nLog(domain: string, level: number, message: string): void;
							public nLog(param0: string, param1: number, param2: string): void;
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
					export module impl {
						export class NativeC4Query extends com.couchbase.lite.internal.core.C4Query.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Query>;
							public constructor();
							public nExplain(peer: number): string;
							public nFree(param0: number): void;
							public nRun(peer: number, paramPtr: number, paramSize: number): number;
							public nRun(param0: number, param1: number, param2: number): number;
							public nCreateQuery(param0: number, param1: number, param2: string): number;
							public nSetParameters(param0: number, param1: number, param2: number): void;
							public nFree(peer: number): void;
							public nExplain(param0: number): string;
							public nColumnName(param0: number, param1: number): string;
							public nColumnCount(param0: number): number;
							public nCreateQuery(db: number, language: number, params: string): number;
							public nSetParameters(peer: number, paramPtr: number, paramSize: number): void;
							public nColumnCount(peer: number): number;
							public nColumnName(peer: number, colIdx: number): string;
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
					export module impl {
						export class NativeC4QueryEnumerator extends com.couchbase.lite.internal.core.C4QueryEnumerator.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4QueryEnumerator>;
							public constructor();
							public nNext(peer: number): boolean;
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nGetMissingColumns(peer: number): number;
							public nGetColumns(peer: number): number;
							public nGetMissingColumns(param0: number): number;
							public nGetColumns(param0: number): number;
							public nFree(peer: number): void;
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
					export module impl {
						export class NativeC4QueryObserver extends com.couchbase.lite.internal.core.C4QueryObserver.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4QueryObserver>;
							public constructor();
							public nEnable(param0: number): void;
							public nCreate(param0: number, param1: number): number;
							public nFree(param0: number): void;
							public nEnable(peer: number): void;
							public nFree(peer: number): void;
							public nCreate(peer: number, token: number): number;
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
					export module impl {
						export class NativeC4Replicator extends com.couchbase.lite.internal.core.C4Replicator.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Replicator>;
							public nCreate(id: string, collections: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, db: number, scheme: string, host: string, port: number, path: string, remoteDbName: string, framing: number, push: boolean, pull: boolean, continuous: boolean, options: androidNative.Array<number>, replicatorToken: number, socketFactoryToken: number): number;
							public nStop(peer: number): void;
							public nFree(param0: number): void;
							public nFree(peer: number): void;
							public nSetHostReachable(param0: number, param1: boolean): void;
							public nSetHostReachable(peer: number, reachable: boolean): void;
							public nCreate(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: string, param4: string, param5: number, param6: string, param7: string, param8: number, param9: boolean, param10: boolean, param11: boolean, param12: androidNative.Array<number>, param13: number, param14: number): number;
							public nSetProgressLevel(peer: number, progressLevel: number): void;
							public nIsDocumentPending(peer: number, id: string, scope: string, collection: string): boolean;
							public nGetStatus(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
							public nGetStatus(peer: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
							public nIsDocumentPending(param0: number, param1: string, param2: string, param3: string): boolean;
							public constructor();
							public nStart(peer: number, restart: boolean): void;
							public nSetProgressLevel(param0: number, param1: number): void;
							public nSetOptions(param0: number, param1: androidNative.Array<number>): void;
							public nSetOptions(peer: number, options: androidNative.Array<number>): void;
							public nCreateWithSocket(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: androidNative.Array<number>, param5: number): number;
							public nCreateLocal(param0: string, param1: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, param2: number, param3: number, param4: boolean, param5: boolean, param6: boolean, param7: androidNative.Array<number>, param8: number): number;
							public nStart(param0: number, param1: boolean): void;
							public nGetPendingDocIds(param0: number, param1: string, param2: string): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nGetPendingDocIds(peer: number, scope: string, collection: string): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nCreateLocal(id: string, collections: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, db: number, targetDb: number, push: boolean, pull: boolean, continuous: boolean, options: androidNative.Array<number>, replicatorToken: number): number;
							public nStop(param0: number): void;
							public nCreateWithSocket(id: string, collections: androidNative.Array<com.couchbase.lite.internal.ReplicationCollection>, db: number, openSocket: number, options: androidNative.Array<number>, replicatorToken: number): number;
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
					export module impl {
						export class NativeC4Socket extends com.couchbase.lite.internal.core.C4Socket.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.impl.NativeC4Socket>;
							public constructor();
							public nFromNative(token: number, schema: string, host: string, port: number, path: string, framing: number): number;
							public nCloseRequested(peer: number, status: number, message: string): void;
							public nGotHTTPResponse(param0: number, param1: number, param2: androidNative.Array<number>): void;
							public nClosed(param0: number, param1: number, param2: number, param3: string): void;
							public nGotPeerCertificate(peer: number, cert: androidNative.Array<number>, hostname: string): boolean;
							public nCreated(ignore: number): void;
							public nOpened(param0: number): void;
							public nCreated(param0: number): void;
							public nFromNative(param0: number, param1: string, param2: string, param3: number, param4: string, param5: number): number;
							public nGotHTTPResponse(peer: number, httpStatus: number, responseHeadersFleece: androidNative.Array<number>): void;
							public nReceived(peer: number, data: androidNative.Array<number>): void;
							public nOpened(peer: number): void;
							public nCompletedWrite(param0: number, param1: number): void;
							public nReceived(param0: number, param1: androidNative.Array<number>): void;
							public nGotPeerCertificate(param0: number, param1: androidNative.Array<number>, param2: string): boolean;
							public nClosed(peer: number, errorDomain: number, errorCode: number, message: string): void;
							public nCloseRequested(param0: number, param1: number, param2: string): void;
							public nCompletedWrite(peer: number, byteCount: number): void;
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
					export module peers {
						export class LockManager {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.LockManager>;
							public static INSTANCE: com.couchbase.lite.internal.core.peers.LockManager;
							public constructor();
							public releaseLock(this_: number): void;
							public getLock(t: number): any;
						}
						export module LockManager {
							export class LockRef extends java.lang.ref.WeakReference<any> implements com.couchbase.lite.internal.exec.RefQueueCleanerThread.RefQueueCleaner  {
								public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.LockManager.LockRef>;
								public clean(): void;
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
				export module core {
					export module peers {
						export abstract class PeerBinding<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.PeerBinding<any>>;
							public get(param0: number): T;
							public unbind(key: number): void;
							public size(): number;
							public set(param0: number, param1: T): void;
							public bind(key: number, obj: T): void;
							public getBinding(key: number): T;
							public preBind(param0: number, param1: T): void;
							public remove(param0: number): void;
							public clear(): void;
							public keySet(): java.util.Set<java.lang.Long>;
							public preGetBinding(param0: number): void;
							public exists(param0: number): boolean;
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
					export module peers {
						export class TaggedWeakPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.WeakPeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding<any>>;
							public constructor();
							public reserveKey(key: number): void;
							public preGetBinding(key: number): void;
							public reserveKey(): number;
							public preBind(key: number, obj: any): void;
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
					export module peers {
						export abstract class WeakPeerBinding<T>  extends com.couchbase.lite.internal.core.peers.PeerBinding<any> {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.peers.WeakPeerBinding<any>>;
							public constructor();
							public size(): number;
							public get(key: number): any;
							public remove(key: number): void;
							public exists(key: number): boolean;
							public clear(): void;
							public keySet(): java.util.Set<java.lang.Long>;
							public set(key: number, obj: any): void;
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
					export abstract class AbstractExecutionService extends com.couchbase.lite.internal.exec.ExecutionService {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.AbstractExecutionService>;
						public dumpState(): void;
						public getConcurrentExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public static throttled(): boolean;
						public getSerialExecutor(): com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor;
						public constructor(baseExecutor: java.util.concurrent.ThreadPoolExecutor);
						public getDefaultExecutor(): java.util.concurrent.Executor;
						public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.exec.ExecutionService.Cancellable;
						public static dumpThreads(): void;
						public cancelDelayedTask(cancellableTask: com.couchbase.lite.internal.exec.ExecutionService.Cancellable): void;
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
						public static CPU_COUNT: number;
						public static POOL_SIZE: number;
						public execute(task: java.lang.Runnable): void;
						public dumpState(): void;
						public constructor(name: string);
						public getStats(): com.couchbase.lite.internal.exec.CBLExecutor.Stats;
						public constructor(name: string, min: number, max: number, workQueue: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
						public constructor(name: string, min: number, max: number, ttlSecs: number, queue: java.util.concurrent.BlockingQueue<java.lang.Runnable>);
						public toString(): string;
					}
					export module CBLExecutor {
						export class Stats {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.CBLExecutor.Stats>;
							public isShutdown: boolean;
							public isTerminating: boolean;
							public isTerminated: boolean;
							public totalTasks: number;
							public completedTasks: number;
							public poolSize: number;
							public corePoolSize: number;
							public largestPoolSize: number;
							public maxPoolSize: number;
							public qCurSize: number;
							public qMaxSize: number;
							public qMeanSize: number;
							public qSizeSD: number;
							public constructor(isShutdown: boolean, isTerminating: boolean, isTerminated: boolean, totalTasks: number, completedTasks: number, poolSize: number, corePoolSize: number, largestPoolSize: number, maxPoolSize: number, qCurSize: number, qMaxSize: number, qMeanSize: number, qSizeSD: number);
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
					export class Cleaner {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.Cleaner>;
						public constructor(name: string);
						public getStats(): com.couchbase.lite.internal.exec.Cleaner.Stats;
						public register(obj: any, cleaner: com.couchbase.lite.internal.exec.Cleaner.Cleanable): com.couchbase.lite.internal.exec.Cleaner.Cleanable;
					}
					export module Cleaner {
						export class Cleanable {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.Cleaner.Cleanable>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.exec.Cleaner$Cleanable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								clean(param0: boolean): void;
							});
							public constructor();
							public clean(param0: boolean): void;
						}
						export class Stats {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.Cleaner.Stats>;
							public timeIn: number;
							public minSize: number;
							public maxSize: number;
							public alive: java.util.List<java.lang.Long>;
							public constructor(timeIn: number, minSize: number, maxSize: number, alive: java.util.List<java.lang.Long>);
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
				export module exec {
					export class CleanerImpl {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.CleanerImpl>;
					}
					export module CleanerImpl {
						export class CleanableRef extends java.lang.ref.PhantomReference<any> implements com.couchbase.lite.internal.exec.Cleaner.Cleanable  {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.CleanerImpl.CleanableRef>;
							public clean(removed: boolean): void;
							public hashCode(): number;
							public equals(o: any): boolean;
							public toString(): string;
							public clean(param0: boolean): void;
						}
						export class CleanerThread {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.CleanerImpl.CleanerThread>;
							public getRuntimeNanos(): number;
							public getUncaughtExceptionHandler(): java.lang.Thread.UncaughtExceptionHandler;
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
				export module exec {
					export class ClientTask<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.ClientTask<any>>;
						public static MAX_POOL_SIZE: number;
						public constructor(task: java.util.concurrent.Callable<T>);
						public execute(e: number, e: java.util.concurrent.TimeUnit): void;
						public execute(): void;
						public getFailure(): java.lang.Exception;
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
						public execute(task: java.lang.Runnable): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public stop(this_: number, timeout: java.util.concurrent.TimeUnit): boolean;
						public dumpState(this_: com.couchbase.lite.internal.exec.InstrumentedTask): void;
						public getPending(): number;
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
								getPending(): number;
							});
							public constructor();
							public getPending(): number;
							public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						}
						export module CloseableExecutor {
							export class ExecutorClosedException {
								public static class: java.lang.Class<com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor.ExecutorClosedException>;
								public constructor(err: java.lang.Throwable);
								public constructor(msg: string);
								public constructor();
								public constructor(msg: string, err: java.lang.Throwable);
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
						public constructor(task: java.lang.Runnable, onComplete: java.lang.Runnable);
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
					export class RefQueueCleanerThread {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.RefQueueCleanerThread>;
						public constructor(name: string, refQueue: java.lang.ref.ReferenceQueue<any>);
						public quit(): void;
					}
					export module RefQueueCleanerThread {
						export class RefQueueCleaner {
							public static class: java.lang.Class<com.couchbase.lite.internal.exec.RefQueueCleanerThread.RefQueueCleaner>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.exec.RefQueueCleanerThread$RefQueueCleaner interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								clean(): void;
							});
							public constructor();
							public clean(): void;
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
					export class SerialExecutor extends com.couchbase.lite.internal.exec.ExecutionService.CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.exec.SerialExecutor>;
						public execute(task: java.lang.Runnable): void;
						public dumpState(t: com.couchbase.lite.internal.exec.InstrumentedTask): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						public stop(this_: number, timeout: java.util.concurrent.TimeUnit): boolean;
						public getPending(): number;
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
					export class FLArray {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArray>;
						public static unmanagedIterator(peer: number): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public count(): number;
						public get(index: number): com.couchbase.lite.internal.fleece.FLValue;
						public iterator(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public asList(val: java.lang.Class<any>): java.util.List<any>;
						public static create(peer: number): com.couchbase.lite.internal.fleece.FLArray;
					}
					export module FLArray {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArray.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLArray$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCount(param0: number): number;
								nGet(param0: number, param1: number): number;
								nInit(param0: number): number;
								nGetValue(param0: number): number;
								nGetValueAt(param0: number, param1: number): number;
								nNext(param0: number): boolean;
								nFree(param0: number): void;
							});
							public constructor();
							public nGet(param0: number, param1: number): number;
							public nGetValueAt(param0: number, param1: number): number;
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nCount(param0: number): number;
							public nGetValue(param0: number): number;
							public nInit(param0: number): number;
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
					export abstract class FLArrayIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator>;
						public impl: com.couchbase.lite.internal.fleece.FLArray.NativeImpl;
						public next(): void;
						public close(): void;
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public getValueAt(index: number): com.couchbase.lite.internal.fleece.FLValue;
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
					export class FLDict {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDict>;
						public get(key: string): com.couchbase.lite.internal.fleece.FLValue;
						public asMap(itr: java.lang.Class<any>, this_: java.lang.Class<any>): java.util.Map<any,any>;
						public count(): number;
						public toFLValue(): com.couchbase.lite.internal.fleece.FLValue;
						public iterator(): com.couchbase.lite.internal.fleece.FLDictIterator;
						public static create(peer: number): com.couchbase.lite.internal.fleece.FLDict;
					}
					export module FLDict {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDict.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLDict$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCount(param0: number): number;
								nGet(param0: number, param1: androidNative.Array<number>): number;
								nInit(param0: number): number;
								nGetCount(param0: number): number;
								nNext(param0: number): boolean;
								nGetKey(param0: number): string;
								nGetValue(param0: number): number;
								nFree(param0: number): void;
							});
							public constructor();
							public nGetKey(param0: number): string;
							public nFree(param0: number): void;
							public nNext(param0: number): boolean;
							public nCount(param0: number): number;
							public nGet(param0: number, param1: androidNative.Array<number>): number;
							public nGetValue(param0: number): number;
							public nInit(param0: number): number;
							public nGetCount(param0: number): number;
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
					export class FLDictIterator extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDictIterator>;
						public next(): void;
						public close(): void;
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public getCount(): number;
						public getKey(): string;
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
					export abstract class FLEncoder extends com.couchbase.lite.internal.core.C4NativePeer {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder>;
						public impl: com.couchbase.lite.internal.fleece.FLEncoder.NativeImpl;
						public arguments: java.util.Map<string,any>;
						public writeString(value: string): boolean;
						public static encodeMap(enc: java.util.Map<string,any>): androidNative.Array<number>;
						public write(item: java.util.List<any>): boolean;
						public writeData(value: androidNative.Array<number>): boolean;
						public close(): void;
						public finish(): androidNative.Array<number>;
						public setArg(key: string, arg: any): com.couchbase.lite.internal.fleece.FLEncoder;
						public writeValue(value: any): boolean;
						public write(hdl: number): boolean;
						public beginDict(reserve: number): boolean;
						public getArg(key: string): any;
						public endArray(): boolean;
						public writeKey(slice: string): boolean;
						public toString(): string;
						public write(entry: java.util.Map<string,any>): boolean;
						public static getManagedEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public endDict(): boolean;
						public writeString(value: androidNative.Array<string>): boolean;
						public beginArray(reserve: number): boolean;
						public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public writeNull(): boolean;
						public static getSharedEncoder(peer: number): com.couchbase.lite.internal.fleece.FLEncoder;
						public reset(): void;
						public static getJSONEncoder(): com.couchbase.lite.internal.fleece.FLEncoder.JSONEncoder;
					}
					export module FLEncoder {
						export class JSONEncoder extends com.couchbase.lite.internal.fleece.FLEncoder.ManagedFLEncoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.JSONEncoder>;
							public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
							public finishJSON(): string;
							public finish(): androidNative.Array<number>;
						}
						export class ManagedFLEncoder extends com.couchbase.lite.internal.fleece.FLEncoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.ManagedFLEncoder>;
							public close(): void;
							public finalize(): void;
							public closePeer(domain: com.couchbase.lite.LogDomain): void;
						}
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLEncoder$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nCreateFleeceEncoder(): number;
								nCreateJSONEncoder(): number;
								nWriteNull(param0: number): boolean;
								nWriteBool(param0: number, param1: boolean): boolean;
								nWriteInt(param0: number, param1: number): boolean;
								nWriteFloat(param0: number, param1: number): boolean;
								nWriteDouble(param0: number, param1: number): boolean;
								nWriteString(param0: number, param1: string): boolean;
								nWriteStringChars(param0: number, param1: androidNative.Array<string>): boolean;
								nWriteData(param0: number, param1: androidNative.Array<number>): boolean;
								nWriteValue(param0: number, param1: number): boolean;
								nBeginArray(param0: number, param1: number): boolean;
								nEndArray(param0: number): boolean;
								nBeginDict(param0: number, param1: number): boolean;
								nEndDict(param0: number): boolean;
								nWriteKey(param0: number, param1: string): boolean;
								nReset(param0: number): void;
								nFinish(param0: number): androidNative.Array<number>;
								nFinish2(param0: number): com.couchbase.lite.internal.fleece.FLSliceResult;
								nFinishJSON(param0: number): string;
								nFree(param0: number): void;
							});
							public constructor();
							public nWriteValue(param0: number, param1: number): boolean;
							public nBeginArray(param0: number, param1: number): boolean;
							public nEndArray(param0: number): boolean;
							public nFinish2(param0: number): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nFree(param0: number): void;
							public nWriteBool(param0: number, param1: boolean): boolean;
							public nWriteString(param0: number, param1: string): boolean;
							public nWriteStringChars(param0: number, param1: androidNative.Array<string>): boolean;
							public nFinishJSON(param0: number): string;
							public nFinish(param0: number): androidNative.Array<number>;
							public nWriteFloat(param0: number, param1: number): boolean;
							public nWriteInt(param0: number, param1: number): boolean;
							public nWriteDouble(param0: number, param1: number): boolean;
							public nCreateFleeceEncoder(): number;
							public nReset(param0: number): void;
							public nWriteNull(param0: number): boolean;
							public nBeginDict(param0: number, param1: number): boolean;
							public nWriteKey(param0: number, param1: string): boolean;
							public nWriteData(param0: number, param1: androidNative.Array<number>): boolean;
							public nEndDict(param0: number): boolean;
							public nCreateJSONEncoder(): number;
						}
						export class SharedFLEncoder extends com.couchbase.lite.internal.fleece.FLEncoder {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder.SharedFLEncoder>;
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
						public getPeer(): number;
						public constructor(peer: number);
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
					export class FLSliceResult {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult>;
						public static createTestSlice(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public getBase(): number;
						public getSize(): number;
						public close(): void;
						public getContent(): androidNative.Array<number>;
						public static create(base: number, size: number): com.couchbase.lite.internal.fleece.FLSliceResult;
						public unbind(): void;
						public toString(): string;
						public finalize(): void;
					}
					export module FLSliceResult {
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLSliceResult$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nGetBuf(param0: number, param1: number): androidNative.Array<number>;
								nRelease(param0: number, param1: number): void;
							});
							public constructor();
							public nRelease(param0: number, param1: number): void;
							public nGetBuf(param0: number, param1: number): androidNative.Array<number>;
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
						public static UNDEFINED: number = -1;
						public static NULL: number = 0;
						public static BOOLEAN: number = 1;
						public static NUMBER: number = 2;
						public static STRING: number = 3;
						public static DATA: number = 4;
						public static ARRAY: number = 5;
						public static DICT: number = 6;
						public toJava(): any;
						public asBool(): boolean;
						public asList(klass: java.lang.Class<any>): java.util.List<any>;
						public static create(peer: number): com.couchbase.lite.internal.fleece.FLValue;
						public isInteger(): boolean;
						public constructor(impl: com.couchbase.lite.internal.fleece.FLValue.NativeImpl, peer: number);
						public static fromData(data: androidNative.Array<number>): com.couchbase.lite.internal.fleece.FLValue;
						public static getFLValue(peer: number): com.couchbase.lite.internal.fleece.FLValue;
						public static getJSONForJSON5(impl: com.couchbase.lite.internal.fleece.FLValue.NativeImpl, json5: string): string;
						public asMap(keyClass: java.lang.Class<any>, valueClass: java.lang.Class<any>): java.util.Map<any,any>;
						public asInt(): number;
						public asByteArray(): androidNative.Array<number>;
						public static getJSONForJSON5(json5: string): string;
						public getType(): number;
						public isUnsigned(): boolean;
						public toStr(): string;
						public isNumber(): boolean;
						public static fromData(slice: com.couchbase.lite.internal.fleece.FLSliceResult): com.couchbase.lite.internal.fleece.FLValue;
						public asFLDict(): com.couchbase.lite.internal.fleece.FLDict;
						public asDouble(): number;
						public static createOrNull(fn: com.couchbase.lite.internal.utils.Fn.LongProviderThrows<any>): com.couchbase.lite.internal.fleece.FLValue;
						public asString(): string;
						public toJSON5(): string;
						public asUnsigned(): number;
						public asFloat(): number;
						public isDouble(): boolean;
						public toJSON(): string;
					}
					export module FLValue {
						export class Error {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLValue.Error>;
							public static NO_ERROR: number = 0;
							public static MEMORY_ERROR: number = 1;
							public static OUT_OF_RANGE: number = 2;
							public static INVALID_DATA: number = 3;
							public static ENCODE_ERROR: number = 4;
							public static JSON_ERROR: number = 5;
							public static UNKNOWN_VALUE: number = 6;
							public static INTERNAL_ERROR: number = 7;
							public static NOT_FOUND: number = 8;
						}
						export class NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLValue.NativeImpl>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FLValue$NativeImpl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								nFromTrustedData(param0: androidNative.Array<number>): number;
								nFromData(param0: number, param1: number): number;
								nGetType(param0: number): number;
								nIsInteger(param0: number): boolean;
								nIsUnsigned(param0: number): boolean;
								nIsDouble(param0: number): boolean;
								nToString(param0: number): string;
								nToJSON(param0: number): string;
								nToJSON5(param0: number): string;
								nAsByteArray(param0: number): androidNative.Array<number>;
								nAsBool(param0: number): boolean;
								nAsUnsigned(param0: number): number;
								nAsInt(param0: number): number;
								nAsFloat(param0: number): number;
								nAsDouble(param0: number): number;
								nAsString(param0: number): string;
								nAsArray(param0: number): number;
								nAsDict(param0: number): number;
								nJson5toJson(param0: string): string;
							});
							public constructor();
							public nToJSON5(param0: number): string;
							public nAsInt(param0: number): number;
							public nAsDict(param0: number): number;
							public nJson5toJson(param0: string): string;
							public nFromData(param0: number, param1: number): number;
							public nAsString(param0: number): string;
							public nAsFloat(param0: number): number;
							public nIsDouble(param0: number): boolean;
							public nToString(param0: number): string;
							public nAsByteArray(param0: number): androidNative.Array<number>;
							public nAsBool(param0: number): boolean;
							public nFromTrustedData(param0: androidNative.Array<number>): number;
							public nGetType(param0: number): number;
							public nIsUnsigned(param0: number): boolean;
							public nAsUnsigned(param0: number): number;
							public nAsArray(param0: number): number;
							public nToJSON(param0: number): string;
							public nAsDouble(param0: number): number;
							public nIsInteger(param0: number): boolean;
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
					export class FleeceEncodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FleeceEncodable>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.fleece.FleeceEncodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
					export class JSONEncodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.JSONEncodable>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.fleece.JSONEncodable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toJSON(): string;
						});
						public constructor();
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
					export class MArray extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MArray>;
						public constructor(context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public constructor();
						public count(): number;
						public append(value: any): boolean;
						public remove(start: number, num: number): boolean;
						public constructor(original: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public insert(index: number, value: any): boolean;
						public constructor(val: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection);
						public get(index: number): com.couchbase.lite.internal.fleece.MValue;
						public set(index: number, value: any): boolean;
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public constructor(array: com.couchbase.lite.internal.fleece.MArray, isMutable: boolean);
						public encodeTo(this_: com.couchbase.lite.internal.fleece.FLEncoder): void;
						public clear(): void;
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
					export abstract class MCollection extends com.couchbase.lite.internal.fleece.FleeceEncodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MCollection>;
						public constructor(context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public mutate(): void;
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public count(): number;
						public getLocalMutationCount(): number;
						public constructor(original: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public getStateString(): string;
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public isMutable(): boolean;
						public mutate(isLocal: boolean): void;
						public assertOpen(): void;
						public getContext(): com.couchbase.lite.internal.fleece.MContext;
						public hasMutableChildren(): boolean;
						public isMutated(): boolean;
						public getSlot(): com.couchbase.lite.internal.fleece.MValue;
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
						public isClosed(): boolean;
						public constructor();
						public getDatabase(): com.couchbase.lite.BaseDatabase;
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
					export class MDict extends com.couchbase.lite.internal.fleece.MCollection {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MDict>;
						public constructor(context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public constructor();
						public count(): number;
						public remove(key: string): void;
						public constructor(original: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public constructor(val: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection);
						public constructor(dict: com.couchbase.lite.internal.fleece.MDict, isMutable: boolean);
						public encodeTo(entry: com.couchbase.lite.internal.fleece.FLEncoder): void;
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public getKeys(): java.util.List<string>;
						public contains(key: string): boolean;
						public set(this_: string, key: com.couchbase.lite.internal.fleece.MValue): void;
						public get(key: string): com.couchbase.lite.internal.fleece.MValue;
						public clear(): void;
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
						public constructor(context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, context: com.couchbase.lite.internal.fleece.MContext, isMutable: boolean);
						public count(): number;
						public constructor(original: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public encodeTo(enc: com.couchbase.lite.internal.fleece.FLEncoder): void;
						public toJFleece(): any;
						public constructor(slot: com.couchbase.lite.internal.fleece.MValue, parent: com.couchbase.lite.internal.fleece.MCollection, isMutable: boolean);
						public isMutated(): boolean;
						public constructor(context: com.couchbase.lite.internal.fleece.MContext, flValue: com.couchbase.lite.internal.fleece.FLValue, isMutable: boolean);
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
					export class MValue extends com.couchbase.lite.BaseMValue implements com.couchbase.lite.internal.fleece.FleeceEncodable {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.MValue>;
						public getFLValue(): com.couchbase.lite.internal.fleece.FLValue;
						public mutate(): void;
						public constructor();
						public constructor(obj: any);
						public encodeTo(enc: com.couchbase.lite.internal.fleece.FLEncoder): void;
						public isEmpty(): boolean;
						public isMutated(): boolean;
						public toJFleece(parent: com.couchbase.lite.internal.fleece.MCollection): any;
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
					export module impl {
						export class NativeFLArray extends com.couchbase.lite.internal.fleece.FLArray.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLArray>;
							public constructor();
							public nGet(array: number, index: number): number;
							public nInit(array: number): number;
							public nGetValue(peer: number): number;
							public nFree(param0: number): void;
							public nCount(param0: number): number;
							public nFree(peer: number): void;
							public nGet(param0: number, param1: number): number;
							public nNext(peer: number): boolean;
							public nGetValueAt(param0: number, param1: number): number;
							public nGetValueAt(peer: number, offset: number): number;
							public nNext(param0: number): boolean;
							public nCount(array: number): number;
							public nGetValue(param0: number): number;
							public nInit(param0: number): number;
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
					export module impl {
						export class NativeFLDict extends com.couchbase.lite.internal.fleece.FLDict.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLDict>;
							public constructor();
							public nGetValue(itr: number): number;
							public nGet(dict: number, keyString: androidNative.Array<number>): number;
							public nGetKey(param0: number): string;
							public nFree(param0: number): void;
							public nCount(param0: number): number;
							public nNext(itr: number): boolean;
							public nGetCount(param0: number): number;
							public nGetKey(itr: number): string;
							public nGetCount(itr: number): number;
							public nNext(param0: number): boolean;
							public nCount(dict: number): number;
							public nInit(dict: number): number;
							public nGet(param0: number, param1: androidNative.Array<number>): number;
							public nGetValue(param0: number): number;
							public nInit(param0: number): number;
							public nFree(itr: number): void;
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
					export module impl {
						export class NativeFLEncoder extends com.couchbase.lite.internal.fleece.FLEncoder.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLEncoder>;
							public nWriteValue(param0: number, param1: number): boolean;
							public nWriteBool(peer: number, value: boolean): boolean;
							public nBeginArray(param0: number, param1: number): boolean;
							public nWriteFloat(peer: number, value: number): boolean;
							public nEndArray(param0: number): boolean;
							public nFinish2(param0: number): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nFree(param0: number): void;
							public nFinishJSON(peer: number): string;
							public nWriteString(param0: number, param1: string): boolean;
							public nWriteStringChars(param0: number, param1: androidNative.Array<string>): boolean;
							public nFree(peer: number): void;
							public nWriteInt(param0: number, param1: number): boolean;
							public nWriteDouble(param0: number, param1: number): boolean;
							public nCreateFleeceEncoder(): number;
							public nBeginDict(peer: number, reserve: number): boolean;
							public nEndDict(peer: number): boolean;
							public nReset(param0: number): void;
							public nEndArray(peer: number): boolean;
							public nWriteNull(param0: number): boolean;
							public nBeginDict(param0: number, param1: number): boolean;
							public nWriteKey(param0: number, param1: string): boolean;
							public nWriteStringChars(peer: number, value: androidNative.Array<string>): boolean;
							public nWriteData(param0: number, param1: androidNative.Array<number>): boolean;
							public nEndDict(param0: number): boolean;
							public nCreateJSONEncoder(): number;
							public nWriteString(peer: number, value: string): boolean;
							public constructor();
							public nWriteNull(peer: number): boolean;
							public nWriteBool(param0: number, param1: boolean): boolean;
							public nFinishJSON(param0: number): string;
							public nFinish(param0: number): androidNative.Array<number>;
							public nFinish2(peer: number): com.couchbase.lite.internal.fleece.FLSliceResult;
							public nWriteKey(peer: number, slice: string): boolean;
							public nWriteFloat(param0: number, param1: number): boolean;
							public nBeginArray(peer: number, reserve: number): boolean;
							public nWriteDouble(peer: number, value: number): boolean;
							public nWriteData(peer: number, value: androidNative.Array<number>): boolean;
							public nWriteInt(peer: number, value: number): boolean;
							public nReset(peer: number): void;
							public nFinish(peer: number): androidNative.Array<number>;
							public nWriteValue(peer: number, value: number): boolean;
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
					export module impl {
						export class NativeFLSliceResult extends com.couchbase.lite.internal.fleece.FLSliceResult.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLSliceResult>;
							public constructor();
							public nRelease(base: number, size: number): void;
							public nRelease(param0: number, param1: number): void;
							public nGetBuf(param0: number, param1: number): androidNative.Array<number>;
							public nGetBuf(base: number, size: number): androidNative.Array<number>;
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
					export module impl {
						export class NativeFLValue extends com.couchbase.lite.internal.fleece.FLValue.NativeImpl {
							public static class: java.lang.Class<com.couchbase.lite.internal.fleece.impl.NativeFLValue>;
							public nToJSON5(param0: number): string;
							public nAsInt(param0: number): number;
							public nAsDict(param0: number): number;
							public nGetType(value: number): number;
							public nAsBool(value: number): boolean;
							public nAsDict(value: number): number;
							public nJson5toJson(param0: string): string;
							public nFromData(param0: number, param1: number): number;
							public nAsString(value: number): string;
							public nAsFloat(param0: number): number;
							public nAsArray(value: number): number;
							public nFromData(ptr: number, size: number): number;
							public nIsDouble(param0: number): boolean;
							public nAsInt(value: number): number;
							public nToString(param0: number): string;
							public nAsBool(param0: number): boolean;
							public nIsUnsigned(value: number): boolean;
							public nAsFloat(value: number): number;
							public nAsUnsigned(value: number): number;
							public nGetType(param0: number): number;
							public nAsDouble(value: number): number;
							public nIsUnsigned(param0: number): boolean;
							public nToJSON(param0: number): string;
							public nToJSON5(peer: number): string;
							public nAsDouble(param0: number): number;
							public constructor();
							public nIsDouble(value: number): boolean;
							public nAsString(param0: number): string;
							public nToString(peer: number): string;
							public nJson5toJson(json: string): string;
							public nToJSON(peer: number): string;
							public nIsInteger(value: number): boolean;
							public nAsByteArray(param0: number): androidNative.Array<number>;
							public nFromTrustedData(param0: androidNative.Array<number>): number;
							public nAsByteArray(value: number): androidNative.Array<number>;
							public nAsUnsigned(param0: number): number;
							public nAsArray(param0: number): number;
							public nFromTrustedData(data: androidNative.Array<number>): number;
							public nIsInteger(param0: number): boolean;
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
				export module listener {
					export class ChangeListenerToken<T>  extends com.couchbase.lite.ListenerToken {
						public static class: java.lang.Class<com.couchbase.lite.internal.listener.ChangeListenerToken<any>>;
						public static DUMMY: com.couchbase.lite.internal.listener.ChangeListenerToken<java.lang.Void>;
						public constructor(listener: com.couchbase.lite.ChangeListener<any>, executor: java.util.concurrent.Executor, onRemove: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
						public constructor(executor: java.util.concurrent.Executor, onRemove: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>);
						public postChange(change: any): void;
						public setKey(key: string): void;
						public getKey(): string;
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
				export module listener {
					export abstract class ChangeNotifier<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.listener.ChangeNotifier<any>>;
						public postChange(token: T): void;
						public constructor();
						public addChangeListener(this_: java.util.concurrent.Executor, executor: com.couchbase.lite.ChangeListener<T>, listener: com.couchbase.lite.internal.utils.Fn.Consumer<com.couchbase.lite.ListenerToken>): com.couchbase.lite.internal.listener.ChangeListenerToken<T>;
						public removeChangeListener(token: com.couchbase.lite.ListenerToken): boolean;
						public getListenerCount(): number;
					}
					export module ChangeNotifier {
						export class C4ChangeProducer<T1>  extends java.lang.AutoCloseable {
							public static class: java.lang.Class<com.couchbase.lite.internal.listener.ChangeNotifier.C4ChangeProducer<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.listener.ChangeNotifier$C4ChangeProducer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getChanges(param0: number): java.util.List<any>;
								close(): void;
							});
							public constructor();
							public close(): void;
							public getChanges(param0: number): java.util.List<any>;
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
				export module listener {
					export class Listenable<T, L>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.internal.listener.Listenable<any,any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.listener.Listenable<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module logging {
					export abstract class AbstractLogSink {
						public static class: java.lang.Class<com.couchbase.lite.internal.logging.AbstractLogSink>;
						public writeLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
						public getDomains(): java.util.Set<com.couchbase.lite.LogDomain>;
						public static aggregateDomains(domain1: com.couchbase.lite.LogDomain, domains: androidNative.Array<com.couchbase.lite.LogDomain>): java.util.Set<com.couchbase.lite.LogDomain>;
						public static listDomains(domain: java.util.Set<com.couchbase.lite.LogDomain>): string;
						public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Set<com.couchbase.lite.LogDomain>);
						public similarDomains(other: com.couchbase.lite.internal.logging.AbstractLogSink): boolean;
						public similarLevels(other: com.couchbase.lite.internal.logging.AbstractLogSink): boolean;
						public static defaultDomains(domains: java.util.Collection<com.couchbase.lite.LogDomain>): java.util.Set<com.couchbase.lite.LogDomain>;
						public log(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain, message: string): void;
						public isLegacy(): boolean;
						public getLevel(): com.couchbase.lite.LogLevel;
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
				export module logging {
					export class Log {
						public static class: java.lang.Class<com.couchbase.lite.internal.logging.Log>;
						public static LOG_HEADER: string = "[JAVA] ";
						public static d(domain: com.couchbase.lite.LogDomain, msg: string): void;
						public static e(domain: com.couchbase.lite.LogDomain, msg: string, args: androidNative.Array<any>): void;
						public static formatStandardMessage(msg: string, args: androidNative.Array<any>): string;
						public static d(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable, args: androidNative.Array<any>): void;
						public static w(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable, args: androidNative.Array<any>): void;
						public static formatStackTrace(err: java.lang.Throwable): string;
						public static init(): void;
						public static w(domain: com.couchbase.lite.LogDomain, msg: string): void;
						public static setStandardErrorMessages(stdErrMsgs: java.util.Map<string,string>): void;
						public static i(domain: com.couchbase.lite.LogDomain, msg: string): void;
						public static e(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable): void;
						public static e(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable, args: androidNative.Array<any>): void;
						public static lookupStandardMessage(msg: string): string;
						public static i(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable): void;
						public static w(domain: com.couchbase.lite.LogDomain, msg: string, args: androidNative.Array<any>): void;
						public static e(domain: com.couchbase.lite.LogDomain, msg: string): void;
						public static info(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable): void;
						public static i(domain: com.couchbase.lite.LogDomain, msg: string, args: androidNative.Array<any>): void;
						public static d(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable): void;
						public static i(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable, args: androidNative.Array<any>): void;
						public static w(domain: com.couchbase.lite.LogDomain, msg: string, err: java.lang.Throwable): void;
						public static d(domain: com.couchbase.lite.LogDomain, msg: string, args: androidNative.Array<any>): void;
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
				export module logging {
					export class LogSinksImpl extends com.couchbase.lite.logging.LogSinks {
						public static class: java.lang.Class<com.couchbase.lite.internal.logging.LogSinksImpl>;
						public getConsole(): com.couchbase.lite.logging.ConsoleLogSink;
						public setFile(this_: com.couchbase.lite.logging.FileLogSink): void;
						public static logToCore(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain, message: string): void;
						public static initLogging(): void;
						public writeToLocalLogSinks(e: com.couchbase.lite.LogLevel, this_: com.couchbase.lite.LogDomain, level: string): void;
						public setConsole(param0: com.couchbase.lite.logging.ConsoleLogSink): void;
						public setConsole(newSink: com.couchbase.lite.logging.ConsoleLogSink): void;
						public setCustom(this_: com.couchbase.lite.logging.BaseLogSink): void;
						public static getLogSinks(): com.couchbase.lite.internal.logging.LogSinksImpl;
						public static logFromCore(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain, message: string): void;
						public static logFailure(console: string, loc: string, msg: java.lang.Exception): void;
						public getFile(): com.couchbase.lite.logging.FileLogSink;
						public getCustom(): com.couchbase.lite.logging.BaseLogSink;
						public setCustom(param0: com.couchbase.lite.logging.BaseLogSink): void;
						public shouldLog(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain): boolean;
						public static get(): com.couchbase.lite.logging.LogSinks;
						public writeToSinks(this_: com.couchbase.lite.LogLevel, level: com.couchbase.lite.LogDomain, domain: string): void;
						public getC4Log(): com.couchbase.lite.internal.core.C4Log;
						public static warnNoFileLogSink(): void;
						public setFile(param0: com.couchbase.lite.logging.FileLogSink): void;
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
						public asList(certs: androidNative.Array<java.security.cert.X509Certificate>): java.util.List<java.security.cert.X509Certificate>;
						public getAcceptedIssuers(): androidNative.Array<java.security.cert.X509Certificate>;
						public requestAuth(certs: java.util.List<java.security.cert.X509Certificate>): void;
						public checkClientTrusted(chain: androidNative.Array<java.security.cert.X509Certificate>, authType: string): void;
						public constructor(pinnedServerCert: java.security.cert.X509Certificate, acceptOnlySelfSignedServerCertificate: boolean, acceptAllCertificates: boolean, serverCertsListener: com.couchbase.lite.internal.replicator.AbstractCBLTrustManager.ServerCertsListener);
						public checkServerTrusted(chain: androidNative.Array<java.security.cert.X509Certificate>, authType: string): void;
						public cBLServerTrustCheck(certs: java.util.List<java.security.cert.X509Certificate>, authType: string): void;
						public acceptAllCerts(): boolean;
						public certsReceived(certs: java.util.List<java.security.cert.X509Certificate>): void;
					}
					export module AbstractCBLTrustManager {
						export class ServerCertsListener {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLTrustManager.ServerCertsListener>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.replicator.AbstractCBLTrustManager$ServerCertsListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								certsPresented(param0: java.util.List<java.security.cert.Certificate>): void;
								requestAuthentication(param0: java.util.List<java.security.cert.Certificate>): void;
							});
							public constructor();
							public requestAuthentication(param0: java.util.List<java.security.cert.Certificate>): void;
							public certsPresented(param0: java.util.List<java.security.cert.Certificate>): void;
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
					export abstract class AbstractCBLWebSocket implements com.couchbase.lite.internal.sockets.SocketFromCore, com.couchbase.lite.internal.sockets.SocketFromRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket>;
						public static DEFAULT_HEARTBEAT_SEC: number = 300;
						public static MAX_AUTH_RETRIES: number = 3;
						public static HEADER_COOKIES: string = "Cookies";
						public static HEADER_USER_AGENT: string = "User-Agent";
						public static HEADER_AUTH: string = "Authorization";
						public static HEADER_PROXY_AUTH: string = "Proxy-Authorization";
						public coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public close(): void;
						public remoteWrites(param0: androidNative.Array<number>): void;
						public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
						public getOptions(): java.util.Map<string,any>;
						public remoteFailed(param0: java.lang.Throwable): void;
						public coreClosed(): void;
						public handleCloseCause(param0: java.lang.Throwable): number;
						public coreAcksWrite(param0: number): void;
						public static addKeyManager(keyManager: javax.net.ssl.KeyManager): number;
						public setupRemoteSocketFactory(heartbeat: okhttp3.OkHttpClient.Builder): void;
						public remoteOpened(code: number, headers: java.util.Map<string,any>): void;
						public constructor(toRemote: com.couchbase.lite.internal.sockets.SocketToRemote, toCore: com.couchbase.lite.internal.sockets.SocketToCore, uri: java.net.URI, opts: androidNative.Array<number>, cookieStore: com.couchbase.lite.internal.replicator.CBLCookieStore, serverCertsListener: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public coreRequestsClose(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public getLock(): any;
						public remoteFailed(err: java.lang.Throwable): void;
						public coreWrites(data: androidNative.Array<number>): void;
						public remoteWrites(data: androidNative.Array<number>): void;
						public remoteClosed(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreRequestsOpen(): void;
						public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public gotPeerCertificate(certs: java.util.List<java.security.cert.Certificate>, hostname: string): void;
						public toString(): string;
						public handleClose(param0: java.lang.Throwable): com.couchbase.lite.internal.sockets.CloseStatus;
						public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreAcksWrite(n: number): void;
						public coreWrites(param0: androidNative.Array<number>): void;
						public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
						public remoteRequestsClose(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
					}
					export module AbstractCBLWebSocket {
						export class ConstrainedAddressSocketFactory {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.ConstrainedAddressSocketFactory>;
							public createSocket(socket: java.net.Socket, remoteHost: string, port: number, autoClose: boolean): java.net.Socket;
							public createSocket(remoteHost: java.net.InetAddress, remotePort: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
							public createSocket(remoteHost: string, remotePort: number, localAddress: java.net.InetAddress, localPort: number): java.net.Socket;
							public getDefaultCipherSuites(): androidNative.Array<string>;
							public createSocket(remoteHost: java.net.InetAddress, port: number): java.net.Socket;
							public createSocket(remoteHost: string, port: number): java.net.Socket;
							public getSupportedCipherSuites(): androidNative.Array<string>;
						}
						export class WebSocketCookieJar {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.WebSocketCookieJar>;
							public saveFromResponse(httpUrl: okhttp3.HttpUrl, cookies: java.util.List<okhttp3.Cookie>): void;
							public loadForRequest(setCookies: okhttp3.HttpUrl): java.util.List<okhttp3.Cookie>;
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
						public constructor(connectivityManager: com.couchbase.lite.internal.replicator.NetworkConnectivityManager, replFactory: com.couchbase.lite.internal.utils.Fn.Provider<com.couchbase.lite.internal.core.C4Replicator>);
						public handleOffline(prevLevel: com.couchbase.lite.ReplicatorActivityLevel, nowOnline: boolean): void;
						public onConnectivityChanged(param0: boolean): void;
						public onConnectivityChanged(connected: boolean): void;
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
					export abstract class BaseReplicator {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.BaseReplicator>;
						public dispatcher: java.util.concurrent.Executor;
						public constructor();
						public getC4Replicator(): com.couchbase.lite.internal.core.C4Replicator;
						public setC4Replicator(newC4Repl: com.couchbase.lite.internal.core.C4Replicator): void;
						public getId(): string;
						public getReplicatorLock(): any;
						public closeC4Replicator(): void;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module replicator {
					export class CBLTrustManager extends com.couchbase.lite.internal.replicator.AbstractCBLTrustManager {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLTrustManager>;
						public checkServerTrusted(chain: androidNative.Array<java.security.cert.X509Certificate>, authType: string, host: string): java.util.List<java.security.cert.X509Certificate>;
						public constructor(pinnedServerCert: java.security.cert.X509Certificate, acceptOnlySelfSignedServerCertificate: boolean, acceptAllCertificates: boolean, serverCertsListener: com.couchbase.lite.internal.replicator.AbstractCBLTrustManager.ServerCertsListener);
						public checkServerTrusted(chain: androidNative.Array<java.security.cert.X509Certificate>, authType: string): void;
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
						public handleCloseCause(cause: java.lang.Throwable): number;
						public handleClose(this_: java.lang.Throwable): com.couchbase.lite.internal.sockets.CloseStatus;
						public coreRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public remoteWrites(param0: androidNative.Array<number>): void;
						public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
						public coreRequestsOpen(): void;
						public remoteFailed(param0: java.lang.Throwable): void;
						public coreClosed(): void;
						public remoteClosed(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreAcksWrite(param0: number): void;
						public remoteRequestsClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						public coreWrites(param0: androidNative.Array<number>): void;
						public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
						public constructor(toRemote: com.couchbase.lite.internal.sockets.SocketToRemote, toCore: com.couchbase.lite.internal.sockets.SocketToCore, uri: java.net.URI, opts: androidNative.Array<number>, cookieStore: com.couchbase.lite.internal.replicator.CBLCookieStore, serverCertsListener: com.couchbase.lite.internal.utils.Fn.Consumer<java.util.List<java.security.cert.Certificate>>);
						public getLock(): any;
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
					export class ConflictResolutionException {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.ConflictResolutionException>;
						public static FAILED_SELECTING_CONFLICTING_REVISION: number = -101;
						public constructor(message: string);
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
				export module replicator {
					export class ReplicationStatusChange {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.ReplicationStatusChange>;
						public status: com.couchbase.lite.ReplicatorStatus;
						public constructor(status: com.couchbase.lite.ReplicatorStatus);
						public getStatus(): com.couchbase.lite.ReplicatorStatus;
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
				export module sockets {
					export class CBLSocketException {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.CBLSocketException>;
						public getDomain(): number;
						public getCode(): number;
						public constructor(domain: number, code: number, message: string, cause: java.lang.Throwable);
						public toString(): string;
						public constructor(domain: number, code: number, message: string);
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
				export module sockets {
					export class CloseStatus {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.CloseStatus>;
						public domain: number;
						public code: number;
						public message: string;
						public constructor(code: number, message: string);
						public hashCode(): number;
						public equals(o: any): boolean;
						public toString(): string;
						public constructor(domain: number, code: number, message: string);
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
				export module sockets {
					export class MessageFraming {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.MessageFraming>;
						public static CLIENT_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static NO_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static SERVER_FRAMING: com.couchbase.lite.internal.sockets.MessageFraming;
						public static C4_WEB_SOCKET_CLIENT_FRAMING: number = 0;
						public static C4_NO_FRAMING: number = 1;
						public static C4_WEB_SOCKET_SERVER_FRAMING: number = 2;
						public static valueOf(name: string): com.couchbase.lite.internal.sockets.MessageFraming;
						public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.MessageFraming>;
						public static getC4Framing(framing: com.couchbase.lite.internal.sockets.MessageFraming): number;
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
				export module sockets {
					export class OkHttpSocket implements com.couchbase.lite.internal.sockets.SocketToRemote {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.OkHttpSocket>;
						public constructor();
						public close(): void;
						public closeRemote(status: com.couchbase.lite.internal.sockets.CloseStatus): boolean;
						public onMessage(ws: okhttp3.WebSocket, bytes: okio.ByteString): void;
						public init(core: com.couchbase.lite.internal.sockets.SocketFromRemote): void;
						public openRemote(param0: java.net.URI, param1: java.util.Map<string,any>): boolean;
						public cancelRemote(): void;
						public toString(): string;
						public onClosed(ws: okhttp3.WebSocket, code: number, message: string): void;
						public closeRemote(param0: com.couchbase.lite.internal.sockets.CloseStatus): boolean;
						public openRemote(uri: java.net.URI, options: java.util.Map<string,any>): boolean;
						public writeToRemote(data: androidNative.Array<number>): boolean;
						public onClosing(ws: okhttp3.WebSocket, code: number, message: string): void;
						public onOpen(this_: okhttp3.WebSocket, ws: okhttp3.Response): void;
						public static parseCookies(cookie: okhttp3.HttpUrl, url: string): java.util.List<okhttp3.Cookie>;
						public onFailure(ws: okhttp3.WebSocket, err: java.lang.Throwable, resp: okhttp3.Response): void;
						public onMessage(ws: okhttp3.WebSocket, text: string): void;
						public init(param0: com.couchbase.lite.internal.sockets.SocketFromRemote): void;
						public writeToRemote(param0: androidNative.Array<number>): boolean;
					}
					export module OkHttpSocket {
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module sockets {
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module sockets {
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
					export module SocketFromRemote {
						export class Constants extends com.couchbase.lite.internal.sockets.SocketFromRemote {
							public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketFromRemote.Constants>;
							public static NULL: com.couchbase.lite.internal.sockets.SocketFromRemote.Constants;
							public static valueOf(name: string): com.couchbase.lite.internal.sockets.SocketFromRemote.Constants;
							public getLock(): any;
							public remoteClosed(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
							public setupRemoteSocketFactory(param0: okhttp3.OkHttpClient.Builder): void;
							public remoteOpened(param0: number, param1: java.util.Map<string,any>): void;
							public remoteOpened(code: number, headers: java.util.Map<string,any>): void;
							public remoteFailed(err: java.lang.Throwable): void;
							public remoteWrites(data: androidNative.Array<number>): void;
							public setupRemoteSocketFactory(builder: okhttp3.OkHttpClient.Builder): void;
							public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.SocketFromRemote.Constants>;
							public remoteWrites(param0: androidNative.Array<number>): void;
							public remoteRequestsClose(status: com.couchbase.lite.internal.sockets.CloseStatus): void;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module sockets {
					export class SocketState {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketState>;
						public static UNOPENED: com.couchbase.lite.internal.sockets.SocketState;
						public static OPENING: com.couchbase.lite.internal.sockets.SocketState;
						public static OPEN: com.couchbase.lite.internal.sockets.SocketState;
						public static CLOSING: com.couchbase.lite.internal.sockets.SocketState;
						public static CLOSED: com.couchbase.lite.internal.sockets.SocketState;
						public static valueOf(name: string): com.couchbase.lite.internal.sockets.SocketState;
						public static values(): androidNative.Array<com.couchbase.lite.internal.sockets.SocketState>;
						public static getSocketStateMachine(): com.couchbase.lite.internal.utils.StateMachine<com.couchbase.lite.internal.sockets.SocketState>;
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
				export module sockets {
					export class SocketToCore {
						public static class: java.lang.Class<com.couchbase.lite.internal.sockets.SocketToCore>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.sockets.SocketToCore interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getLock(): any;
							init(param0: com.couchbase.lite.internal.sockets.SocketFromCore): void;
							gotPeerCertificate(param0: androidNative.Array<number>, param1: string): boolean;
							ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
							ackWriteToCore(param0: number): void;
							writeToCore(param0: androidNative.Array<number>): void;
							requestCoreClose(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
							closeCore(param0: com.couchbase.lite.internal.sockets.CloseStatus): void;
						});
						public constructor();
						public ackOpenToCore(param0: number, param1: androidNative.Array<number>): void;
						public gotPeerCertificate(param0: androidNative.Array<number>, param1: string): boolean;
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module sockets {
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

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export module utils {
					export class CertUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.CertUtils>;
						public static fromBytes(cert: androidNative.Array<number>): java.util.List<java.security.cert.X509Certificate>;
						public static createCertificate(in_: androidNative.Array<number>): java.security.cert.X509Certificate;
						public static toBytes(e: java.util.List<java.security.cert.Certificate>): androidNative.Array<number>;
						public static validate(root: java.util.List<java.security.cert.X509Certificate>, cf: java.util.List<java.security.cert.X509Certificate>): boolean;
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
						public static castOrNull(clazz: java.lang.Class<any>, obj: any): any;
						public static hash(o: androidNative.Array<any>): number;
						public static objId(obj: any): string;
						public static isEqual(o1: any, o2: any): boolean;
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
						public static getCurrentDirectory(): java.io.File;
						public static deleteContents(fileOrDirectory: string): boolean;
						public static verifyDir(e: java.io.File): java.io.File;
						public static verifyDir(dirPath: string): java.io.File;
						public static copyFile(in_: java.io.InputStream, out: java.io.OutputStream): void;
						public static eraseFileOrDir(fileOrDirectory: string): boolean;
						public static eraseFileOrDir(fileOrDirectory: java.io.File): boolean;
						public static deleteContents(file: java.io.File): boolean;
						public static setPermissionRecursive(child: java.io.File, files: boolean, fileOrDirectory: boolean): boolean;
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
							forAll(e: java.util.Collection<any>, c: com.couchbase.lite.internal.utils.Fn.Consumer<any>): void;
							firstOrNull(e: java.util.Collection<any>, c: com.couchbase.lite.internal.utils.Fn.Predicate<any>): any;
							foldR(e: java.util.Collection<any>, c: any, init: com.couchbase.lite.internal.utils.Fn.BiFunction<any,any,any>): any;
							filterToList(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): java.util.List<any>;
							filterToSet(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.Predicate<any>): java.util.Set<any>;
							mapToList(e: java.util.Collection<any>, l: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): java.util.List<any>;
							mapToSet(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): java.util.Set<any>;
						});
						public constructor();
						public static foldR(e: java.util.Collection<any>, c: any, init: com.couchbase.lite.internal.utils.Fn.BiFunction<any,any,any>): any;
						public static mapToList(e: java.util.Collection<any>, l: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): java.util.List<any>;
						public static filterToList(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): java.util.List<any>;
						public static filterToSet(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.Predicate<any>): java.util.Set<any>;
						public static forAll(e: java.util.Collection<any>, c: com.couchbase.lite.internal.utils.Fn.Consumer<any>): void;
						public static mapToSet(e: java.util.Collection<any>, s: com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>): java.util.Set<any>;
						public static firstOrNull(e: java.util.Collection<any>, c: com.couchbase.lite.internal.utils.Fn.Predicate<any>): any;
					}
					export module Fn {
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
						export class LongProviderThrows<E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.LongProviderThrows<any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$LongProviderThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(): number;
							});
							public constructor();
							public get(): number;
						}
						export class NonNullFunction<T, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NonNullFunction<any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NonNullFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): R;
							});
							public constructor();
							public apply(param0: T): R;
						}
						export class NonNullFunctionThrows<T, R, E>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows<any,any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NonNullFunctionThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
						export class NullableFunction<T, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.Fn.NullableFunction<any,any>>;
							/**
							 * Constructs a new instance of the com.couchbase.lite.internal.utils.Fn$NullableFunction interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								apply(param0: T): R;
							});
							public constructor();
							public apply(param0: T): R;
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
						public static toDate(json: string): java.util.Date;
						public static toJSONString(date: java.util.Date): string;
						public static fromJSON(key: org.json.JSONObject): java.util.Map<string,any>;
						public static toJSON(value: java.util.List<any>): org.json.JSONArray;
						public static toJSON(val: any): any;
						public static toJSON(entry: java.util.Map<any,any>): org.json.JSONObject;
						public static fromJSON(i: org.json.JSONArray): java.util.List<any>;
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
						public static asSignedInt(x: number): number;
						public static asUnsignedInt(x: number): number;
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
						public static getEncoder(): com.couchbase.lite.internal.utils.PlatformUtils.Base64Encoder;
						public static getAsset(asset: string): java.io.InputStream;
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
						public getAsset(asset: string): java.io.InputStream;
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
						public static assertNotZero(n: number, name: string): number;
						public static assertNotNegative(n: number, name: string): number;
						public static assertNotEmpty(obj: java.util.Collection<any>, name: string): java.util.Collection<any>;
						public static assertNotEmpty(str: androidNative.Array<string>, name: string): androidNative.Array<string>;
						public static assertInt(n: number, name: string): number;
						public static assertZero(n: number, name: string): number;
						public static assertPositive(n: number, name: string): number;
						public static assertNotNull(obj: any, name: string): any;
						public static assertNotEmpty(str: string, name: string): string;
						public static assertNegative(n: number, name: string): number;
						public static assertThat(condition: boolean, msg: string): void;
						public static assertUInt32(n: number, name: string): number;
						public static assertThat(obj: any, msg: string, predicate: com.couchbase.lite.internal.utils.Fn.NullablePredicate<any>): any;
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
						public assertState(this_: androidNative.Array<T>): boolean;
						public setState(nextState: T): boolean;
						public getCurrentState(): T;
						public toString(): string;
					}
					export module StateMachine {
						export class Builder<S>  extends java.lang.Object {
							public static class: java.lang.Class<com.couchbase.lite.internal.utils.StateMachine.Builder<any>>;
							public addTransition(source: S, target1: S, targets: androidNative.Array<S>): com.couchbase.lite.internal.utils.StateMachine.Builder<S>;
							public build(): com.couchbase.lite.internal.utils.StateMachine<S>;
							public constructor(klass: java.lang.Class<S>, log: com.couchbase.lite.LogDomain, initState: S, failState: S);
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
						public static ALPHA: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
						public static NUMERIC: string = "0123456789";
						public static ALPHANUMERIC: string;
						public static getArrayString(strs: androidNative.Array<string>, idx: number): string;
						public static getUniqueName(prefix: string, len: number): string;
						public static isEmpty(str: string): boolean;
						public static join(token: string, delimiter: java.lang.Iterable<any>): string;
						public static randomString(idx: number): string;
						public static toString(entry: java.util.Map<any,any>): string;
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

declare module com {
	export module couchbase {
		export module lite {
			export module logging {
				export abstract class BaseLogSink extends com.couchbase.lite.internal.logging.AbstractLogSink {
					public static class: java.lang.Class<com.couchbase.lite.logging.BaseLogSink>;
					public constructor(level: com.couchbase.lite.LogLevel, domain1: com.couchbase.lite.LogDomain, domains: androidNative.Array<com.couchbase.lite.LogDomain>);
					public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Set<com.couchbase.lite.LogDomain>);
					public constructor(level: com.couchbase.lite.LogLevel);
					public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Collection<com.couchbase.lite.LogDomain>);
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module logging {
				export class ConsoleLogSink extends com.couchbase.lite.internal.logging.AbstractLogSink {
					public static class: java.lang.Class<com.couchbase.lite.logging.ConsoleLogSink>;
					public constructor(level: com.couchbase.lite.LogLevel, domain1: com.couchbase.lite.LogDomain, domains: androidNative.Array<com.couchbase.lite.LogDomain>);
					public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Set<com.couchbase.lite.LogDomain>);
					public toString(): string;
					public constructor(level: com.couchbase.lite.LogLevel);
					public writeLog(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain, message: string): void;
					public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Collection<com.couchbase.lite.LogDomain>);
					public hashCode(): number;
					public equals(o: any): boolean;
				}
				export module ConsoleLogSink {
					export class Delegate {
						public static class: java.lang.Class<com.couchbase.lite.logging.ConsoleLogSink.Delegate>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.logging.ConsoleLogSink$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							writeLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
						});
						public constructor();
						public writeLog(param0: com.couchbase.lite.LogLevel, param1: com.couchbase.lite.LogDomain, param2: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module logging {
				export class FileLogSink extends com.couchbase.lite.internal.logging.AbstractLogSink {
					public static class: java.lang.Class<com.couchbase.lite.logging.FileLogSink>;
					public similar(other: com.couchbase.lite.logging.FileLogSink): boolean;
					public constructor(level: com.couchbase.lite.LogLevel, domains: java.util.Set<com.couchbase.lite.LogDomain>);
					public toString(): string;
					public getDirectory(): string;
					public getMaxKeptFiles(): number;
					public writeLog(level: com.couchbase.lite.LogLevel, domain: com.couchbase.lite.LogDomain, message: string): void;
					public constructor(builder: com.couchbase.lite.logging.FileLogSink.Builder);
					public isPlainText(): boolean;
					public hashCode(): number;
					public equals(o: any): boolean;
					public getMaxFileSize(): number;
				}
				export module FileLogSink {
					export class Builder {
						public static class: java.lang.Class<com.couchbase.lite.logging.FileLogSink.Builder>;
						public build(): com.couchbase.lite.logging.FileLogSink;
						public constructor();
						public getMaxKeptFiles(): number;
						public getMaxFileSize(): number;
						public setLevel(level: com.couchbase.lite.LogLevel): com.couchbase.lite.logging.FileLogSink.Builder;
						public setMaxFileSize(maxFileSize: number): com.couchbase.lite.logging.FileLogSink.Builder;
						public isPlainText(): boolean;
						public toString(): string;
						public constructor(builder: com.couchbase.lite.logging.FileLogSink.Builder);
						public setDirectory(directory: string): com.couchbase.lite.logging.FileLogSink.Builder;
						public constructor(sink: com.couchbase.lite.logging.FileLogSink);
						public getDirectory(): string;
						public setPlainText(plainText: boolean): com.couchbase.lite.logging.FileLogSink.Builder;
						public setMaxKeptFiles(maxKeptFiles: number): com.couchbase.lite.logging.FileLogSink.Builder;
						public getLevel(): com.couchbase.lite.LogLevel;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module logging {
				export class LogSinks {
					public static class: java.lang.Class<com.couchbase.lite.logging.LogSinks>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.logging.LogSinks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						get(): com.couchbase.lite.logging.LogSinks;
						getFile(): com.couchbase.lite.logging.FileLogSink;
						setFile(param0: com.couchbase.lite.logging.FileLogSink): void;
						getConsole(): com.couchbase.lite.logging.ConsoleLogSink;
						setConsole(param0: com.couchbase.lite.logging.ConsoleLogSink): void;
						getCustom(): com.couchbase.lite.logging.BaseLogSink;
						setCustom(param0: com.couchbase.lite.logging.BaseLogSink): void;
					});
					public constructor();
					public setCustom(param0: com.couchbase.lite.logging.BaseLogSink): void;
					public getFile(): com.couchbase.lite.logging.FileLogSink;
					public setFile(param0: com.couchbase.lite.logging.FileLogSink): void;
					public getCustom(): com.couchbase.lite.logging.BaseLogSink;
					public getConsole(): com.couchbase.lite.logging.ConsoleLogSink;
					public setConsole(param0: com.couchbase.lite.logging.ConsoleLogSink): void;
					public static get(): com.couchbase.lite.logging.LogSinks;
				}
			}
		}
	}
}

//Generics information:
//com.couchbase.lite.AbstractDatabase.ActiveProcess:1
//com.couchbase.lite.AbstractJFleeceCollection:1
//com.couchbase.lite.ChangeListener:1
//com.couchbase.lite.UnitOfWork:1
//com.couchbase.lite.internal.core.C4Socket.NativeRefPeerBinding:1
//com.couchbase.lite.internal.core.peers.PeerBinding:1
//com.couchbase.lite.internal.core.peers.TaggedWeakPeerBinding:1
//com.couchbase.lite.internal.core.peers.WeakPeerBinding:1
//com.couchbase.lite.internal.exec.ClientTask:1
//com.couchbase.lite.internal.listener.ChangeListenerToken:1
//com.couchbase.lite.internal.listener.ChangeNotifier:1
//com.couchbase.lite.internal.listener.ChangeNotifier.C4ChangeProducer:1
//com.couchbase.lite.internal.listener.Listenable:2
//com.couchbase.lite.internal.utils.Fn.BiFunction:3
//com.couchbase.lite.internal.utils.Fn.Consumer:1
//com.couchbase.lite.internal.utils.Fn.ConsumerThrows:2
//com.couchbase.lite.internal.utils.Fn.Function:2
//com.couchbase.lite.internal.utils.Fn.FunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.LongProviderThrows:1
//com.couchbase.lite.internal.utils.Fn.NonNullFunction:2
//com.couchbase.lite.internal.utils.Fn.NonNullFunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.NullableConsumer:1
//com.couchbase.lite.internal.utils.Fn.NullableFunction:2
//com.couchbase.lite.internal.utils.Fn.NullableFunctionThrows:3
//com.couchbase.lite.internal.utils.Fn.NullablePredicate:1
//com.couchbase.lite.internal.utils.Fn.Predicate:1
//com.couchbase.lite.internal.utils.Fn.Provider:1
//com.couchbase.lite.internal.utils.Fn.ProviderThrows:2
//com.couchbase.lite.internal.utils.Fn.TaskThrows:1
//com.couchbase.lite.internal.utils.StateMachine:1
//com.couchbase.lite.internal.utils.StateMachine.Builder:1

