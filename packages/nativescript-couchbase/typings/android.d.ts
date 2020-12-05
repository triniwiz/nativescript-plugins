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
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabase {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabase>;
				public static log: com.couchbase.lite.Log;
				public c4db: com.couchbase.lite.internal.core.C4Database;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConflictHandler): boolean;
				public mustBeOpen(): void;
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public addDocumentChangeListener(param0: string, param1: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public finalize(): void;
				public save(param0: com.couchbase.lite.MutableDocument, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public static exists(param0: string, param1: java.io.File): boolean;
				public compact(): void;
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration, param3: number, param4: native.Array<number>): void;
				public constructor(param0: com.couchbase.lite.internal.core.C4Database);
				public createIndex(param0: string, param1: com.couchbase.lite.Index): void;
				/** @deprecated */
				public static setLogLevel(param0: com.couchbase.lite.LogDomain, param1: com.couchbase.lite.LogLevel): void;
				public inBatch(param0: java.lang.Runnable): void;
				public delete(): void;
				public save(param0: com.couchbase.lite.MutableDocument): void;
				public delete(param0: com.couchbase.lite.Document): void;
				public purge(param0: string): void;
				public close(): void;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getName(): string;
				public getCount(): number;
				public getDocument(param0: string): com.couchbase.lite.Document;
				public getPath(): string;
				public addChangeListener(param0: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
				public toString(): string;
				public addDocumentChangeListener(param0: string, param1: java.util.concurrent.Executor, param2: com.couchbase.lite.DocumentChangeListener): com.couchbase.lite.ListenerToken;
				public getConfig(): com.couchbase.lite.DatabaseConfiguration;
				public purge(param0: com.couchbase.lite.Document): void;
				public getDocumentExpiration(param0: string): java.util.Date;
				public getIndexes(): java.util.List<string>;
				public setDocumentExpiration(param0: string, param1: java.util.Date): void;
				public delete(param0: com.couchbase.lite.Document, param1: com.couchbase.lite.ConcurrencyControl): boolean;
				public static delete(param0: string, param1: java.io.File): void;
				public deleteIndex(param0: string): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DatabaseChangeListener): com.couchbase.lite.ListenerToken;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractDatabaseConfiguration {
				public static class: java.lang.Class<com.couchbase.lite.AbstractDatabaseConfiguration>;
				public setDirectory(param0: string): com.couchbase.lite.AbstractDatabaseConfiguration;
				public setReadonly(param0: boolean): void;
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration);
				public isReadonly(): boolean;
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
			export abstract class AbstractIndex extends com.couchbase.lite.Index {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndex>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractIndexBuilder {
				public static class: java.lang.Class<com.couchbase.lite.AbstractIndexBuilder>;
				public static fullTextIndex(param0: native.Array<com.couchbase.lite.FullTextIndexItem>): com.couchbase.lite.FullTextIndex;
				public static valueIndex(param0: native.Array<com.couchbase.lite.ValueIndexItem>): com.couchbase.lite.ValueIndex;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractNetworkReachabilityManager {
				public static class: java.lang.Class<com.couchbase.lite.AbstractNetworkReachabilityManager>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export abstract class AbstractQuery extends com.couchbase.lite.Query {
				public static class: java.lang.Class<com.couchbase.lite.AbstractQuery>;
				public execute(): com.couchbase.lite.ResultSet;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public getParameters(): com.couchbase.lite.Parameters;
				public finalize(): void;
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
			export abstract class AbstractReplicator extends com.couchbase.lite.NetworkReachabilityListener {
				public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator>;
				public getConfig(): com.couchbase.lite.ReplicatorConfiguration;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public schema(): string;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public finalize(): void;
				public toString(): string;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public addDocumentReplicationListener(param0: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
				public stop(): void;
				public start(): void;
				public addChangeListener(param0: com.couchbase.lite.ReplicatorChangeListener): com.couchbase.lite.ListenerToken;
				public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
				public framing(): number;
				public resetCheckpoint(): void;
				public addDocumentReplicationListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.DocumentReplicationListener): com.couchbase.lite.ListenerToken;
			}
			export module AbstractReplicator {
				export class ActivityLevel {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
					public static STOPPED: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static OFFLINE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static CONNECTING: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static IDLE: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static BUSY: com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public static values(): native.Array<com.couchbase.lite.AbstractReplicator.ActivityLevel>;
					public static valueOf(param0: string): com.couchbase.lite.AbstractReplicator.ActivityLevel;
				}
				export class Progress {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Progress>;
					public getTotal(): number;
					public toString(): string;
					public getCompleted(): number;
				}
				export class ReplicatorListener extends com.couchbase.lite.internal.core.C4ReplicatorListener {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorListener>;
					public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
					public documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: native.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
				}
				export class ReplicatorProgressLevel {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel>;
					public static OVERALL: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
					public static PER_DOCUMENT: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
					public static PER_ATTACHMENT: com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
					public static valueOf(param0: string): com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel;
					public static values(): native.Array<com.couchbase.lite.AbstractReplicator.ReplicatorProgressLevel>;
				}
				export class Status {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicator.Status>;
					public getActivityLevel(): com.couchbase.lite.AbstractReplicator.ActivityLevel;
					public toString(): string;
					public getProgress(): com.couchbase.lite.AbstractReplicator.Progress;
					public getError(): com.couchbase.lite.CouchbaseLiteException;
					public constructor(param0: com.couchbase.lite.internal.core.C4ReplicatorStatus);
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
				public readonly: boolean;
				public target: com.couchbase.lite.Endpoint;
				public setContinuous(param0: boolean): com.couchbase.lite.ReplicatorConfiguration;
				public setPinnedServerCertificate(param0: native.Array<number>): com.couchbase.lite.ReplicatorConfiguration;
				public setPushFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				public getConflictResolver(): com.couchbase.lite.ConflictResolver;
				public setHeaders(param0: java.util.Map<string,string>): com.couchbase.lite.ReplicatorConfiguration;
				public getPushFilter(): com.couchbase.lite.ReplicationFilter;
				public getPullFilter(): com.couchbase.lite.ReplicationFilter;
				public getPinnedServerCertificate(): native.Array<number>;
				public setAuthenticator(param0: com.couchbase.lite.Authenticator): com.couchbase.lite.ReplicatorConfiguration;
				public setReplicatorType(param0: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType): com.couchbase.lite.ReplicatorConfiguration;
				public getDatabase(): com.couchbase.lite.Database;
				public isContinuous(): boolean;
				public getChannels(): java.util.List<string>;
				public getHeaders(): java.util.Map<string,string>;
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
				public setPullFilter(param0: com.couchbase.lite.ReplicationFilter): com.couchbase.lite.ReplicatorConfiguration;
				public getDocumentIDs(): java.util.List<string>;
				public setConflictResolver(param0: com.couchbase.lite.ConflictResolver): com.couchbase.lite.ReplicatorConfiguration;
				public getAuthenticator(): com.couchbase.lite.Authenticator;
				public setChannels(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public getReplicatorType(): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
				public setDocumentIDs(param0: java.util.List<string>): com.couchbase.lite.ReplicatorConfiguration;
				public getTarget(): com.couchbase.lite.Endpoint;
			}
			export module AbstractReplicatorConfiguration {
				export class ReplicatorType {
					public static class: java.lang.Class<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
					public static PUSH_AND_PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PUSH: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static PULL: com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static valueOf(param0: string): com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType;
					public static values(): native.Array<com.couchbase.lite.AbstractReplicatorConfiguration.ReplicatorType>;
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
				public getDate(param0: number): java.util.Date;
				public toMutable(): com.couchbase.lite.MutableArray;
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
					public static values(): native.Array<com.couchbase.lite.ArrayExpression.QuantifiesType>;
					public static valueOf(param0: string): com.couchbase.lite.ArrayExpression.QuantifiesType;
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
					getValue(param0: number): any;
					getString(param0: number): string;
					getNumber(param0: number): java.lang.Number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getDate(param0: number): java.util.Date;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					toList(): java.util.List<any>;
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
			export class BasicAuthenticator extends com.couchbase.lite.Authenticator {
				public static class: java.lang.Class<com.couchbase.lite.BasicAuthenticator>;
				public getUsername(): string;
				public getPassword(): string;
				public constructor(param0: string, param1: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Blob extends com.couchbase.lite.internal.fleece.FLEncodable {
				public static class: java.lang.Class<com.couchbase.lite.Blob>;
				public getContentType(): string;
				public digest(): string;
				public constructor(param0: string, param1: java.net.URL);
				public length(): number;
				public finalize(): void;
				public getContent(): native.Array<number>;
				public toString(): string;
				public getContentStream(): java.io.InputStream;
				public getProperties(): java.util.Map<string,any>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: native.Array<number>);
				public constructor(param0: string, param1: java.io.InputStream);
				public encodeTo(param0: com.couchbase.lite.internal.fleece.FLEncoder): void;
			}
			export module Blob {
				export class BlobInputStream {
					public static class: java.lang.Class<com.couchbase.lite.Blob.BlobInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public close(): void;
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
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public static BUILD_COMMIT: string;
				public static BUILD_TIME: string;
				public static ENTERPRISE: boolean;
				public constructor();
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
					public static BAD_REVISIONID: number;
					public static CORRUPT_REVISION_DATA: number;
					public static NOT_OPEN: number;
					public static NOT_FOUND: number;
					public static CONFLICT: number;
					public static INVALID_PARAMETER: number;
					public static UNEXPECTED_ERROR: number;
					public static CANT_OPEN_FILE: number;
					public static IO_ERROR: number;
					public static MEMORY_ERROR: number;
					public static NOT_WRITEABLE: number;
					public static CORRUPT_DATA: number;
					public static BUSY: number;
					public static NOT_IN_TRANSACTION: number;
					public static TRANSACTION_NOT_CLOSED: number;
					public static UNSUPPORTED: number;
					public static NOT_A_DATABSE_FILE: number;
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
					public static NETWORK_BASE: number;
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
					public static WEB_SOCKET_BASE: number;
					public static WEB_SOCKET_GOING_AWAY: number;
					public static WEB_SOCKET_PROTOCOL_ERROR: number;
					public static WEB_SOCKET_DATA_ERROR: number;
					public static WEB_SOCKET_ABNORMAL_CLOSE: number;
					public static WEB_SOCKET_BAD_MESSAGE_FORMAT: number;
					public static WEB_SOCKET_POLICY_ERROR: number;
					public static WEB_SOCKET_MESSAGE_TOO_BIG: number;
					public static WEB_SOCKET_MISSING_EXTENSION: number;
					public static WEB_SOCKET_CANT_FULFILL: number;
					public static WEB_SOCKET_CLOSE_USER_TRANSIENT: number;
					public static WEB_SOCKET_CLOSE_USER_PERMANENT: number;
				}
				export class Domain {
					public static class: java.lang.Class<com.couchbase.lite.CBLError.Domain>;
					public static CBLITE: string;
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
				public static ascii(): com.couchbase.lite.Collation.ASCII;
				public static unicode(): com.couchbase.lite.Collation.Unicode;
				public toString(): string;
			}
			export module Collation {
				export class ASCII extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.ASCII>;
					public ignoreCase(param0: boolean): com.couchbase.lite.Collation.ASCII;
				}
				export class Unicode extends com.couchbase.lite.Collation {
					public static class: java.lang.Class<com.couchbase.lite.Collation.Unicode>;
					public locale(param0: string): com.couchbase.lite.Collation.Unicode;
					public ignoreCase(param0: boolean): com.couchbase.lite.Collation.Unicode;
					public ignoreAccents(param0: boolean): com.couchbase.lite.Collation.Unicode;
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
				public static values(): native.Array<com.couchbase.lite.ConcurrencyControl>;
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
				public static getExecutionService(): com.couchbase.lite.internal.ExecutionService;
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
				public constructor(param0: string, param1: number, param2: java.util.Map<string,any>);
				public constructor(param0: string, param1: string, param2: number);
				public getInfo(): java.util.Map<string,any>;
				public constructor(param0: string, param1: java.lang.Throwable, param2: string, param3: number);
				/** @deprecated */
				public constructor(param0: string, param1: number, param2: java.lang.Throwable);
				public getCode(): number;
				public getDomain(): string;
				public constructor(param0: com.couchbase.lite.internal.CBLInternalException);
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				/** @deprecated */
				public constructor(param0: string, param1: number);
				public constructor(param0: string);
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DataSource {
				public static class: java.lang.Class<com.couchbase.lite.DataSource>;
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
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration, param3: number, param4: native.Array<number>): void;
				public constructor(param0: com.couchbase.lite.internal.core.C4Database);
				public constructor(param0: string, param1: com.couchbase.lite.DatabaseConfiguration);
				public static copy(param0: java.io.File, param1: string, param2: com.couchbase.lite.DatabaseConfiguration): void;
				public constructor(param0: string);
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
				public setDirectory(param0: string): com.couchbase.lite.AbstractDatabaseConfiguration;
				public setDirectory(param0: string): com.couchbase.lite.DatabaseConfiguration;
				public getDatabaseConfiguration(): com.couchbase.lite.DatabaseConfiguration;
				public constructor(param0: com.couchbase.lite.AbstractDatabaseConfiguration);
				public constructor(param0: com.couchbase.lite.DatabaseConfiguration);
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
					getKeys(): java.util.List<string>;
					getValue(param0: string): any;
					getString(param0: string): string;
					getNumber(param0: string): java.lang.Number;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getDate(param0: string): java.util.Date;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					toMap(): java.util.Map<string,any>;
					contains(param0: string): boolean;
				});
				public constructor();
				public getLong(param0: string): number;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public contains(param0: string): boolean;
				public getDate(param0: string): java.util.Date;
				public getBoolean(param0: string): boolean;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
				public count(): number;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public toMap(): java.util.Map<string,any>;
				public getInt(param0: string): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocContext extends com.couchbase.lite.internal.fleece.MContext {
				public static class: java.lang.Class<com.couchbase.lite.DocContext>;
				public finalize(): void;
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
				public finalize(): void;
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
				public toString(): string;
				public getDouble(param0: string): number;
				public getArray(param0: string): com.couchbase.lite.ArrayInterface;
				public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document);
				public getDate(param0: string): java.util.Date;
				public iterator(): java.util.Iterator<string>;
				public count(): number;
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
			export class DocumentExpirationStrategy {
				public static class: java.lang.Class<com.couchbase.lite.DocumentExpirationStrategy>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class DocumentFlag {
				public static class: java.lang.Class<com.couchbase.lite.DocumentFlag>;
				public static DocumentFlagsDeleted: com.couchbase.lite.DocumentFlag;
				public static DocumentFlagsAccessRemoved: com.couchbase.lite.DocumentFlag;
				public static values(): native.Array<com.couchbase.lite.DocumentFlag>;
				public rawValue(): number;
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
				public in(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.Expression;
				public add(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public constructor();
				public static booleanValue(param0: boolean): com.couchbase.lite.Expression;
				public static property(param0: string): com.couchbase.lite.PropertyExpression;
				public static number(param0: java.lang.Number): com.couchbase.lite.Expression;
				public static map(param0: java.util.Map<string,any>): com.couchbase.lite.Expression;
				public static doubleValue(param0: number): com.couchbase.lite.Expression;
				public isNullOrMissing(): com.couchbase.lite.Expression;
				public static all(): com.couchbase.lite.PropertyExpression;
				public greaterThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static date(param0: java.util.Date): com.couchbase.lite.Expression;
				public divide(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public notEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public greaterThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public like(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public subtract(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static not(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static floatValue(param0: number): com.couchbase.lite.Expression;
				public and(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public or(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public lessThanOrEqualTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public toString(): string;
				public static list(param0: java.util.List<any>): com.couchbase.lite.Expression;
				public lessThan(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static value(param0: any): com.couchbase.lite.Expression;
				public static longValue(param0: number): com.couchbase.lite.Expression;
				public notNullOrMissing(): com.couchbase.lite.Expression;
				public regex(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public equalTo(param0: com.couchbase.lite.Expression): com.couchbase.lite.Expression;
				public static intValue(param0: number): com.couchbase.lite.Expression;
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
						public static values(): native.Array<com.couchbase.lite.Expression.BinaryExpression.OpType>;
						public static valueOf(param0: string): com.couchbase.lite.Expression.BinaryExpression.OpType;
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
						public static values(): native.Array<com.couchbase.lite.Expression.CompoundExpression.OpType>;
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
						public static valueOf(param0: string): com.couchbase.lite.Expression.UnaryExpression.OpType;
						public static values(): native.Array<com.couchbase.lite.Expression.UnaryExpression.OpType>;
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
			export class From extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.JoinRouter, com.couchbase.lite.WhereRouter, com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.From>;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
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
				public match(param0: string): com.couchbase.lite.Expression;
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
				public static rank(param0: string): com.couchbase.lite.Expression;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class FullTextIndex extends com.couchbase.lite.AbstractIndex {
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
			export class GroupBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.HavingRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.GroupBy>;
				public having(param0: com.couchbase.lite.Expression): com.couchbase.lite.Having;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
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
					groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
				});
				public constructor();
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Having extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Having>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
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
			export class Index {
				public static class: java.lang.Class<com.couchbase.lite.Index>;
				/**
				 * Constructs a new instance of the com.couchbase.lite.Index interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
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
			export class IndexType {
				public static class: java.lang.Class<com.couchbase.lite.IndexType>;
				public static Value: com.couchbase.lite.IndexType;
				public static FullText: com.couchbase.lite.IndexType;
				public static Predictive: com.couchbase.lite.IndexType;
				public static values(): native.Array<com.couchbase.lite.IndexType>;
				public static valueOf(param0: string): com.couchbase.lite.IndexType;
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
					public static values(): native.Array<com.couchbase.lite.Join.Type>;
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
					join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
				});
				public constructor();
				public join(param0: native.Array<com.couchbase.lite.Join>): com.couchbase.lite.Joins;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Joins extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.WhereRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Joins>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public where(param0: com.couchbase.lite.Expression): com.couchbase.lite.Where;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public explain(): string;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class Limit extends com.couchbase.lite.AbstractQuery {
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
				public finalize(): void;
				public toString(): string;
				public changed(param0: any): void;
			}
			export module LiveQuery {
				export class State {
					public static class: java.lang.Class<com.couchbase.lite.LiveQuery.State>;
					public static STOPPED: com.couchbase.lite.LiveQuery.State;
					public static STARTED: com.couchbase.lite.LiveQuery.State;
					public static SCHEDULED: com.couchbase.lite.LiveQuery.State;
					public static values(): native.Array<com.couchbase.lite.LiveQuery.State>;
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
				public static ALL: com.couchbase.lite.LogDomain;
				public static DATABASE: com.couchbase.lite.LogDomain;
				public static QUERY: com.couchbase.lite.LogDomain;
				public static REPLICATOR: com.couchbase.lite.LogDomain;
				public static NETWORK: com.couchbase.lite.LogDomain;
				public static ALL_DOMAINS: java.util.EnumSet<com.couchbase.lite.LogDomain>;
				public static values(): native.Array<com.couchbase.lite.LogDomain>;
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
				public constructor(param0: com.couchbase.lite.LogFileConfiguration);
				public constructor(param0: string);
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
				public static values(): native.Array<com.couchbase.lite.LogLevel>;
				public static valueOf(param0: string): com.couchbase.lite.LogLevel;
				public getValue(): number;
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
			export class Meta {
				public static class: java.lang.Class<com.couchbase.lite.Meta>;
				public static id: com.couchbase.lite.MetaExpression;
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
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArray;
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
				public setValue(param0: number, param1: any): com.couchbase.lite.MutableArray;
				public getString(param0: number): string;
				public getNumber(param0: number): java.lang.Number;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArray;
				public insertInt(param0: number, param1: number): com.couchbase.lite.MutableArray;
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
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArray;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
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
					setData(param0: java.util.List<any>): com.couchbase.lite.MutableArrayInterface;
					setValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					setNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					setInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					setBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					setBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					setDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					addValue(param0: any): com.couchbase.lite.MutableArrayInterface;
					addString(param0: string): com.couchbase.lite.MutableArrayInterface;
					addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
					addLong(param0: number): com.couchbase.lite.MutableArrayInterface;
					addFloat(param0: number): com.couchbase.lite.MutableArrayInterface;
					addDouble(param0: number): com.couchbase.lite.MutableArrayInterface;
					addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
					addBlob(param0: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					addDate(param0: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					addArray(param0: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					insertValue(param0: number, param1: any): com.couchbase.lite.MutableArrayInterface;
					insertString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
					insertNumber(param0: number, param1: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
					insertInt(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertFloat(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
					insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
					insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
					insertDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
					insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
					insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
					remove(param0: number): com.couchbase.lite.MutableArrayInterface;
					getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					count(): number;
					getValue(param0: number): any;
					getString(param0: number): string;
					getNumber(param0: number): java.lang.Number;
					getInt(param0: number): number;
					getLong(param0: number): number;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getBoolean(param0: number): boolean;
					getBlob(param0: number): com.couchbase.lite.Blob;
					getDate(param0: number): java.util.Date;
					getArray(param0: number): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: number): com.couchbase.lite.DictionaryInterface;
					toList(): java.util.List<any>;
				});
				public constructor();
				public insertBoolean(param0: number, param1: boolean): com.couchbase.lite.MutableArrayInterface;
				public getDouble(param0: number): number;
				public addDictionary(param0: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: number): com.couchbase.lite.MutableDictionaryInterface;
				public insertArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public setDouble(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public insertDictionary(param0: number, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableArrayInterface;
				public setArray(param0: number, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableArrayInterface;
				public getInt(param0: number): number;
				public setLong(param0: number, param1: number): com.couchbase.lite.MutableArrayInterface;
				public setString(param0: number, param1: string): com.couchbase.lite.MutableArrayInterface;
				public setDate(param0: number, param1: java.util.Date): com.couchbase.lite.MutableArrayInterface;
				public addInt(param0: number): com.couchbase.lite.MutableArrayInterface;
				public insertBlob(param0: number, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableArrayInterface;
				public getArray(param0: number): com.couchbase.lite.MutableArrayInterface;
				public addNumber(param0: java.lang.Number): com.couchbase.lite.MutableArrayInterface;
				public addBoolean(param0: boolean): com.couchbase.lite.MutableArrayInterface;
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
				public isChanged(): boolean;
				public getArray(param0: string): com.couchbase.lite.Array;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionary;
				public getKeys(): java.util.List<string>;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionary;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
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
					setData(param0: java.util.Map<string,any>): com.couchbase.lite.MutableDictionaryInterface;
					setValue(param0: string, param1: any): com.couchbase.lite.MutableDictionaryInterface;
					setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
					setNumber(param0: string, param1: java.lang.Number): com.couchbase.lite.MutableDictionaryInterface;
					setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setLong(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setFloat(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
					setBoolean(param0: string, param1: boolean): com.couchbase.lite.MutableDictionaryInterface;
					setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
					setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
					setArray(param0: string, param1: com.couchbase.lite.Array): com.couchbase.lite.MutableDictionaryInterface;
					setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
					remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					count(): number;
					getKeys(): java.util.List<string>;
					getValue(param0: string): any;
					getString(param0: string): string;
					getNumber(param0: string): java.lang.Number;
					getInt(param0: string): number;
					getLong(param0: string): number;
					getFloat(param0: string): number;
					getDouble(param0: string): number;
					getBoolean(param0: string): boolean;
					getBlob(param0: string): com.couchbase.lite.Blob;
					getDate(param0: string): java.util.Date;
					getArray(param0: string): com.couchbase.lite.ArrayInterface;
					getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
					toMap(): java.util.Map<string,any>;
					contains(param0: string): boolean;
				});
				public constructor();
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDictionaryInterface;
				public getKeys(): java.util.List<string>;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public remove(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public getNumber(param0: string): java.lang.Number;
				public contains(param0: string): boolean;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDictionaryInterface;
				public getBoolean(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getFloat(param0: string): number;
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
				public constructor(param0: com.couchbase.lite.Database, param1: string, param2: com.couchbase.lite.internal.core.C4Document);
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionary;
				public getArray(param0: string): com.couchbase.lite.Array;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDocument;
				public getDictionary(param0: string): com.couchbase.lite.MutableDictionaryInterface;
				public setDate(param0: string, param1: java.util.Date): com.couchbase.lite.MutableDocument;
				public getKeys(): java.util.List<string>;
				public constructor(param0: string);
				public toMutable(): com.couchbase.lite.MutableDocument;
				public remove(param0: string): com.couchbase.lite.MutableDocument;
				public setDictionary(param0: string, param1: com.couchbase.lite.Dictionary): com.couchbase.lite.MutableDocument;
				public getValue(param0: string): any;
				public setBlob(param0: string, param1: com.couchbase.lite.Blob): com.couchbase.lite.MutableDictionaryInterface;
				public getArray(param0: string): com.couchbase.lite.MutableArrayInterface;
				public getDictionary(param0: string): com.couchbase.lite.DictionaryInterface;
				public setString(param0: string, param1: string): com.couchbase.lite.MutableDictionaryInterface;
				public contains(param0: string): boolean;
				public setDouble(param0: string, param1: number): com.couchbase.lite.MutableDictionaryInterface;
				public getString(param0: string): string;
				public getBlob(param0: string): com.couchbase.lite.Blob;
				public constructor(param0: string, param1: java.util.Map<string,any>);
				public setInt(param0: string, param1: number): com.couchbase.lite.MutableDocument;
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
			export abstract class NetworkReachabilityListener {
				public static class: java.lang.Class<com.couchbase.lite.NetworkReachabilityListener>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class NetworkReachabilityManager extends com.couchbase.lite.AbstractNetworkReachabilityManager {
				public static class: java.lang.Class<com.couchbase.lite.NetworkReachabilityManager>;
			}
			export module NetworkReachabilityManager {
				export class NetworkReceiver {
					public static class: java.lang.Class<com.couchbase.lite.NetworkReachabilityManager.NetworkReceiver>;
					public onReceive(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class OrderBy extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.LimitRouter {
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
					orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				});
				public constructor();
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
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
				public static selectDistinct(param0: native.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
				public static select(param0: native.Array<com.couchbase.lite.SelectResult>): com.couchbase.lite.Select;
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
				public flags(): java.util.EnumSet<com.couchbase.lite.DocumentFlag>;
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
				public schema(): string;
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
				public framing(): number;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ReplicatorChange {
				public static class: java.lang.Class<com.couchbase.lite.ReplicatorChange>;
				public getStatus(): com.couchbase.lite.AbstractReplicator.Status;
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
				public constructor(param0: com.couchbase.lite.Database, param1: com.couchbase.lite.Endpoint);
				public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
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
			export class ResultContext extends com.couchbase.lite.DocContext {
				public static class: java.lang.Class<com.couchbase.lite.ResultContext>;
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export class ResultSet extends java.lang.Iterable<com.couchbase.lite.Result> {
				public static class: java.lang.Class<com.couchbase.lite.ResultSet>;
				public allResults(): java.util.List<com.couchbase.lite.Result>;
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
			export class Select extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.FromRouter {
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
				public static expression(param0: com.couchbase.lite.Expression): com.couchbase.lite.SelectResult.As;
			}
			export module SelectResult {
				export class As extends com.couchbase.lite.SelectResult {
					public static class: java.lang.Class<com.couchbase.lite.SelectResult.As>;
					public as(param0: string): com.couchbase.lite.SelectResult;
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
			export class ValueIndex extends com.couchbase.lite.AbstractIndex {
				public static class: java.lang.Class<com.couchbase.lite.ValueIndex>;
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
			export class Where extends com.couchbase.lite.AbstractQuery implements com.couchbase.lite.GroupByRouter, com.couchbase.lite.OrderByRouter, com.couchbase.lite.LimitRouter {
				public static class: java.lang.Class<com.couchbase.lite.Where>;
				public execute(): com.couchbase.lite.ResultSet;
				public limit(param0: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public addChangeListener(param0: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public removeChangeListener(param0: com.couchbase.lite.ListenerToken): void;
				public limit(param0: com.couchbase.lite.Expression, param1: com.couchbase.lite.Expression): com.couchbase.lite.Limit;
				public getParameters(): com.couchbase.lite.Parameters;
				public setParameters(param0: com.couchbase.lite.Parameters): void;
				public orderBy(param0: native.Array<com.couchbase.lite.Ordering>): com.couchbase.lite.OrderBy;
				public addChangeListener(param0: java.util.concurrent.Executor, param1: com.couchbase.lite.QueryChangeListener): com.couchbase.lite.ListenerToken;
				public groupBy(param0: native.Array<com.couchbase.lite.Expression>): com.couchbase.lite.GroupBy;
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
				export abstract class AbstractExecutionService extends com.couchbase.lite.internal.ExecutionService {
					public static class: java.lang.Class<com.couchbase.lite.internal.AbstractExecutionService>;
					public static MIN_CAPACITY: number;
					public cancelDelayedTask(param0: com.couchbase.lite.internal.ExecutionService.Cancellable): void;
					public constructor(param0: java.util.concurrent.ThreadPoolExecutor);
					public getMainExecutor(): java.util.concurrent.Executor;
					public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.ExecutionService.Cancellable;
					public getConcurrentExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
					public getSerialExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
				}
				export module AbstractExecutionService {
					export class ConcurrentExecutor extends com.couchbase.lite.internal.ExecutionService.CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.AbstractExecutionService.ConcurrentExecutor>;
						public execute(param0: java.lang.Runnable): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					}
					export class InstrumentedTask {
						public static class: java.lang.Class<com.couchbase.lite.internal.AbstractExecutionService.InstrumentedTask>;
						public run(): void;
						public setCompletion(param0: java.lang.Runnable): void;
						public toString(): string;
					}
					export class SerialExecutor extends com.couchbase.lite.internal.ExecutionService.CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.AbstractExecutionService.SerialExecutor>;
						public execute(param0: java.lang.Runnable): void;
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
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
				export class AndroidExecutionService extends com.couchbase.lite.internal.AbstractExecutionService {
					public static class: java.lang.Class<com.couchbase.lite.internal.AndroidExecutionService>;
					public cancelDelayedTask(param0: com.couchbase.lite.internal.ExecutionService.Cancellable): void;
					public constructor();
					public constructor(param0: java.util.concurrent.ThreadPoolExecutor);
					public getMainExecutor(): java.util.concurrent.Executor;
					public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.ExecutionService.Cancellable;
					public getConcurrentExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
					public getSerialExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
				}
				export module AndroidExecutionService {
					export class CancellableTask extends com.couchbase.lite.internal.ExecutionService.Cancellable {
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
				export class CBLStatus {
					public static class: java.lang.Class<com.couchbase.lite.internal.CBLStatus>;
					public static convertError(param0: com.couchbase.lite.internal.core.C4Error): com.couchbase.lite.CouchbaseLiteException;
					public static convertException(param0: com.couchbase.lite.LiteCoreException): com.couchbase.lite.CouchbaseLiteException;
					public static convertException(param0: number, param1: number, param2: string, param3: java.lang.Exception): com.couchbase.lite.CouchbaseLiteException;
					public static convertException(param0: com.couchbase.lite.LiteCoreException, param1: string): com.couchbase.lite.CouchbaseLiteException;
					public static convertException(param0: number, param1: number, param2: number): com.couchbase.lite.CouchbaseLiteException;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module internal {
				export class ExecutionService {
					public static class: java.lang.Class<com.couchbase.lite.internal.ExecutionService>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.internal.ExecutionService interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getMainExecutor(): java.util.concurrent.Executor;
						getSerialExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
						getConcurrentExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
						postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.ExecutionService.Cancellable;
						cancelDelayedTask(param0: com.couchbase.lite.internal.ExecutionService.Cancellable): void;
					});
					public constructor();
					public cancelDelayedTask(param0: com.couchbase.lite.internal.ExecutionService.Cancellable): void;
					public getMainExecutor(): java.util.concurrent.Executor;
					public postDelayedOnExecutor(param0: number, param1: java.util.concurrent.Executor, param2: java.lang.Runnable): com.couchbase.lite.internal.ExecutionService.Cancellable;
					public getConcurrentExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
					public getSerialExecutor(): com.couchbase.lite.internal.ExecutionService.CloseableExecutor;
				}
				export module ExecutionService {
					export class Cancellable {
						public static class: java.lang.Class<com.couchbase.lite.internal.ExecutionService.Cancellable>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.ExecutionService$Cancellable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							cancel(): void;
						});
						public constructor();
						public cancel(): void;
					}
					export class CloseableExecutor {
						public static class: java.lang.Class<com.couchbase.lite.internal.ExecutionService.CloseableExecutor>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.ExecutionService$CloseableExecutor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
						});
						public constructor();
						public stop(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
					}
					export module CloseableExecutor {
						export class ExecutorClosedException {
							public static class: java.lang.Class<com.couchbase.lite.internal.ExecutionService.CloseableExecutor.ExecutorClosedException>;
							public constructor();
							public constructor(param0: string);
							public constructor(param0: java.lang.Throwable);
							public constructor(param0: string, param1: java.lang.Throwable);
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
				export class SocketFactory {
					public static class: java.lang.Class<com.couchbase.lite.internal.SocketFactory>;
					public constructor(param0: com.couchbase.lite.ReplicatorConfiguration);
					public createSocket(param0: number, param1: string, param2: string, param3: number, param4: string, param5: native.Array<number>): com.couchbase.lite.internal.core.C4Socket;
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
						public constructor();
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
						public constructor();
						public static setTempDir(param0: string): void;
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
					export class C4BlobKey {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobKey>;
						public free(): void;
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
					export class C4BlobReadStream {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobReadStream>;
						public close(): void;
						public read(param0: number): native.Array<number>;
						public getLength(): number;
						public seek(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
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
					export class C4BlobStore {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobStore>;
						public openReadStream(param0: com.couchbase.lite.internal.core.C4BlobKey): com.couchbase.lite.internal.core.C4BlobReadStream;
						public openWriteStream(): com.couchbase.lite.internal.core.C4BlobWriteStream;
						public create(param0: native.Array<number>): com.couchbase.lite.internal.core.C4BlobKey;
						public static open(param0: string, param1: number): com.couchbase.lite.internal.core.C4BlobStore;
						public delete(): void;
						public getSize(param0: com.couchbase.lite.internal.core.C4BlobKey): number;
						public free(): void;
						public getContents(param0: com.couchbase.lite.internal.core.C4BlobKey): com.couchbase.lite.internal.fleece.FLSliceResult;
						public delete(param0: com.couchbase.lite.internal.core.C4BlobKey): void;
						public getFilePath(param0: com.couchbase.lite.internal.core.C4BlobKey): string;
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
					export class C4BlobWriteStream {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4BlobWriteStream>;
						public close(): void;
						public write(param0: native.Array<number>): void;
						public install(): void;
						public write(param0: native.Array<number>, param1: number): void;
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
						export class DocumentVersioning {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.DocumentVersioning>;
							public static REVISION_TREES: number;
							public static VERSION_VECTORS: number;
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
							public static INCLUDE_DELETED: number;
							public static INCLUDE_NON_CONFLICTED: number;
							public static INCLUDE_BODIES: number;
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
							public static MAX_ERROR_DOMAINS: number;
						}
						export class IndexType {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.IndexType>;
							public static VALUE: number;
							public static FULL_TEXT: number;
							public static GEO: number;
						}
						export class LiteCoreError {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LiteCoreError>;
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
							public static MAX_ERROR_CODES: number;
						}
						export class LogDomain {
							public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Constants.LogDomain>;
							public static DATABASE: string;
							public static QUERY: string;
							public static SYNC: string;
							public static WEB_SOCKET: string;
							public static BLIP: string;
							public static SYNC_BUSY: string;
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
					export class C4Database {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Database>;
						public getSharedFleeceEncoder(): com.couchbase.lite.internal.fleece.FLEncoder;
						public createReplicator(param0: string, param1: string, param2: number, param3: string, param4: string, param5: com.couchbase.lite.internal.core.C4Database, param6: number, param7: number, param8: native.Array<number>, param9: com.couchbase.lite.internal.core.C4ReplicatorListener, param10: com.couchbase.lite.internal.core.C4ReplicationFilter, param11: com.couchbase.lite.internal.core.C4ReplicationFilter, param12: com.couchbase.lite.AbstractReplicator, param13: com.couchbase.lite.internal.SocketFactory, param14: number): com.couchbase.lite.internal.core.C4Replicator;
						public delete(): void;
						public get(param0: string, param1: boolean): com.couchbase.lite.internal.core.C4Document;
						public put(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: string, param2: number, param3: boolean, param4: boolean, param5: native.Array<string>, param6: boolean, param7: number, param8: number): com.couchbase.lite.internal.core.C4Document;
						public retain(): com.couchbase.lite.internal.core.C4Database;
						public close(): void;
						public getDocumentCount(): number;
						public getPublicUUID(): native.Array<number>;
						public purgeExpiredDocs(): number;
						public getPath(): string;
						public setMaxRevTreeDepth(param0: number): void;
						public purgeDoc(param0: string): void;
						public getBlobStore(): com.couchbase.lite.internal.core.C4BlobStore;
						public endTransaction(param0: boolean): void;
						public put(param0: native.Array<number>, param1: string, param2: number, param3: boolean, param4: boolean, param5: native.Array<string>, param6: boolean, param7: number, param8: number): com.couchbase.lite.internal.core.C4Document;
						public finalize(): void;
						public rawGet(param0: string, param1: string): com.couchbase.lite.internal.core.C4RawDocument;
						public beginTransaction(): void;
						public free(): void;
						public static rawFreeDocument(param0: number): void;
						public createDatabaseObserver(param0: com.couchbase.lite.internal.core.C4DatabaseObserverListener, param1: any): com.couchbase.lite.internal.core.C4DatabaseObserver;
						public createQuery(param0: string): com.couchbase.lite.internal.core.C4Query;
						public getMaxRevTreeDepth(): number;
						public create(param0: string, param1: com.couchbase.lite.internal.fleece.FLSliceResult, param2: number): com.couchbase.lite.internal.core.C4Document;
						public enumerateChanges(param0: number, param1: number): com.couchbase.lite.internal.core.C4DocEnumerator;
						public deleteIndex(param0: string): void;
						public getBySequence(param0: number): com.couchbase.lite.internal.core.C4Document;
						public encodeJSON(param0: native.Array<number>): com.couchbase.lite.internal.fleece.FLSliceResult;
						public enumerateAllDocs(param0: number): com.couchbase.lite.internal.core.C4DocEnumerator;
						public nextDocExpiration(): number;
						public rekey(param0: number, param1: native.Array<number>): void;
						public getFLSharedKeys(): com.couchbase.lite.internal.fleece.FLSharedKeys;
						public getIndexes(): com.couchbase.lite.internal.fleece.FLValue;
						public createIndex(param0: string, param1: string, param2: number, param3: string, param4: boolean): boolean;
						public getExpiration(param0: string): number;
						public rawPut(param0: string, param1: string, param2: string, param3: native.Array<number>): void;
						public createReplicator(param0: com.couchbase.lite.internal.core.C4Socket, param1: number, param2: number, param3: native.Array<number>, param4: com.couchbase.lite.internal.core.C4ReplicatorListener, param5: any): com.couchbase.lite.internal.core.C4Replicator;
						public static copyDb(param0: string, param1: string, param2: number, param3: string, param4: number, param5: number, param6: native.Array<number>): void;
						public getPrivateUUID(): native.Array<number>;
						public setExpiration(param0: string, param1: number): void;
						public static deleteDbAtPath(param0: string): void;
						public constructor(param0: number);
						public compact(): void;
						public create(param0: string, param1: native.Array<number>, param2: number): com.couchbase.lite.internal.core.C4Document;
						public constructor(param0: string, param1: number, param2: string, param3: number, param4: number, param5: native.Array<number>);
						public getLastSequence(): number;
						public createDocumentObserver(param0: string, param1: com.couchbase.lite.internal.core.C4DocumentObserverListener, param2: any): com.couchbase.lite.internal.core.C4DocumentObserver;
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
						public getBodySize(): number;
						public constructor();
						public isExternal(): boolean;
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
					export class C4DatabaseObserver {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DatabaseObserver>;
						public getChanges(param0: number): native.Array<com.couchbase.lite.internal.core.C4DatabaseChange>;
						public free(): void;
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
					export class C4DocEnumerator {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocEnumerator>;
						public close(): void;
						public free(): void;
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
					export class C4Document extends com.couchbase.lite.internal.core.RefCounted {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Document>;
						public selectNextRevision(): boolean;
						public isSelectedRevFlags(param0: number): boolean;
						public getSelectedRevID(): string;
						public getSelectedBody(): native.Array<number>;
						public selectFirstPossibleAncestorOf(param0: string): boolean;
						public getSelectedFlags(): number;
						public conflicted(): boolean;
						public getSelectedBody2(): com.couchbase.lite.internal.fleece.FLDict;
						public deleted(): boolean;
						public getDocID(): string;
						public hasRevisionBody(): boolean;
						public finalize(): void;
						public exists(): boolean;
						public selectNextPossibleAncestorOf(param0: string): boolean;
						public selectCurrentRevision(): boolean;
						public getFlags(): number;
						public save(param0: number): void;
						public getRevID(): string;
						public resolveConflict(param0: string, param1: string, param2: native.Array<number>, param3: number): void;
						public bodyAsJSON(param0: boolean): string;
						public loadRevisionBody(): void;
						public getSequence(): number;
						public selectNextLeafRevision(param0: boolean, param1: boolean): void;
						public getSelectedSequence(): number;
						public static dictContainsBlobs(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: com.couchbase.lite.internal.fleece.FLSharedKeys): boolean;
						public accessRemoved(): boolean;
						public update(param0: com.couchbase.lite.internal.fleece.FLSliceResult, param1: number): com.couchbase.lite.internal.core.C4Document;
						public update(param0: native.Array<number>, param1: number): com.couchbase.lite.internal.core.C4Document;
						public purgeRevision(param0: string): number;
						public selectCommonAncestorRevision(param0: string, param1: string): boolean;
						public selectParentRevision(): boolean;
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
						public constructor();
						public getErrorDomain(): number;
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
					export class C4DocumentObserver {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4DocumentObserver>;
						public free(): void;
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
					export class C4FullTextMatch {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4FullTextMatch>;
						public term(): number;
						public start(): number;
						public length(): number;
						public property(): number;
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
						public static getPbkdf2Key(param0: string): native.Array<number>;
						public constructor();
						public static getCoreKey(param0: string): native.Array<number>;
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
						public static setLevel(param0: string, param1: number): void;
						public static getBinaryFileLevel(): number;
						public static log(param0: string, param1: number, param2: string): void;
						public static setCallbackLevel(param0: com.couchbase.lite.LogLevel): void;
						public static writeToBinaryFile(param0: string, param1: number, param2: number, param3: number, param4: boolean, param5: string): void;
						public static setBinaryFileLevel(param0: number): void;
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
						public constructor();
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
					export class C4Query {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Query>;
						public getFullTextMatched(param0: com.couchbase.lite.internal.core.C4FullTextMatch): native.Array<number>;
						public run(param0: com.couchbase.lite.internal.core.C4QueryOptions, param1: com.couchbase.lite.internal.fleece.AllocSlice): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public free(): void;
						public columnCount(): number;
						public explain(): string;
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
					export class C4QueryEnumerator {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4QueryEnumerator>;
						public getMissingColumns(): number;
						public getFullTextMatchs(param0: number): com.couchbase.lite.internal.core.C4FullTextMatch;
						public getFullTextMatchCount(): number;
						public seek(param0: number): boolean;
						public close(): void;
						public getColumns(): com.couchbase.lite.internal.fleece.FLArrayIterator;
						public refresh(): com.couchbase.lite.internal.core.C4QueryEnumerator;
						public free(): void;
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
					export class C4RawDocument {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4RawDocument>;
						public body(): native.Array<number>;
						public free(): void;
						public meta(): string;
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
							validationFunction(param0: string, param1: string, param2: number, param3: number, param4: boolean, param5: any): boolean;
						});
						public constructor();
						public validationFunction(param0: string, param1: string, param2: number, param3: number, param4: boolean, param5: any): boolean;
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
					export class C4Replicator {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Replicator>;
						public static C4_REPLICATOR_SCHEME_2: string;
						public static C4_REPLICATOR_TLS_SCHEME_2: string;
						public isDocumentPending(param0: string): java.lang.Boolean;
						public static mayBeTransient(param0: com.couchbase.lite.internal.core.C4Error): boolean;
						public start(): void;
						public getPendingDocIDs(): java.util.Set<string>;
						public getStatus(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public free(): void;
						public getResponseHeaders(): native.Array<number>;
						public stop(): void;
						public static mayBeNetworkDependent(param0: com.couchbase.lite.internal.core.C4Error): boolean;
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
							documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: native.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
						});
						public constructor();
						public statusChanged(param0: com.couchbase.lite.internal.core.C4Replicator, param1: com.couchbase.lite.internal.core.C4ReplicatorStatus, param2: any): void;
						public documentEnded(param0: com.couchbase.lite.internal.core.C4Replicator, param1: boolean, param2: native.Array<com.couchbase.lite.internal.core.C4DocumentEnded>, param3: any): void;
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
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4ReplicatorMode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static C4_DISABLED: number;
						public static C4_PASSIVE: number;
						public static C4_ONE_SHOT: number;
						public static C4_CONTINUOUS: number;
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
						public getProgressDocumentCount(): number;
						public constructor();
						public getErrorCode(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						public copy(): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public getC4Error(): com.couchbase.lite.internal.core.C4Error;
						public getProgressUnitsCompleted(): number;
						public toString(): string;
						public getProgressUnitsTotal(): number;
						public getErrorDomain(): number;
						public copyAtlevel(param0: number): com.couchbase.lite.internal.core.C4ReplicatorStatus;
						public constructor(param0: number);
						public getActivityLevel(): number;
						public getErrorInternalInfo(): number;
						public constructor(param0: number, param1: number, param2: number);
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
					export abstract class C4Socket {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4Socket>;
						public static WEBSOCKET_SCHEME: string;
						public static WEBSOCKET_SECURE_CONNECTION_SCHEME: string;
						public static REPLICATOR_OPTION_EXTRA_HEADERS: string;
						public static REPLICATOR_OPTION_COOKIES: string;
						public static REPLICATOR_OPTION_AUTHENTICATION: string;
						public static REPLICATOR_OPTION_PINNED_SERVER_CERT: string;
						public static REPLICATOR_OPTION_DOC_IDS: string;
						public static REPLICATOR_OPTION_CHANNELS: string;
						public static REPLICATOR_OPTION_FILTER: string;
						public static REPLICATOR_OPTION_FILTER_PARAMS: string;
						public static REPLICATOR_OPTION_SKIP_DELETED: string;
						public static REPLICATOR_OPTION_NO_INCOMING_CONFLICTS: string;
						public static REPLICATOR_OPTION_OUTGOING_CONFLICTS: string;
						public static REPLICATOR_CHECKPOINT_INTERVAL: string;
						public static REPLICATOR_OPTION_REMOTE_DB_UNIQUE_ID: string;
						public static REPLICATOR_HEARTBEAT_INTERVAL: string;
						public static REPLICATOR_RESET_CHECKPOINT: string;
						public static REPLICATOR_OPTION_PROGRESS_LEVEL: string;
						public static REPLICATOR_OPTION_DISABLE_DELTAS: string;
						public static REPLICATOR_AUTH_TYPE: string;
						public static REPLICATOR_AUTH_USER_NAME: string;
						public static REPLICATOR_AUTH_PASSWORD: string;
						public static REPLICATOR_AUTH_CLIENT_CERT: string;
						public static AUTH_TYPE_BASIC: string;
						public static AUTH_TYPE_SESSION: string;
						public static AUTH_TYPE_OPEN_ID_CONNECT: string;
						public static AUTH_TYPE_FACEBOOK: string;
						public static AUTH_TYPE_CLIENT_CERT: string;
						public static SOCKET_OPTION_WS_PROTOCOLS: string;
						public static SOCKET_OPTION_HEARTBEAT: string;
						public static REPLICATOR_OPTION_NO_CONFLICTS: string;
						public static WEB_SOCKET_CLIENT_FRAMING: number;
						public static NO_FRAMING: number;
						public static WEB_SOCKET_SERVER_FRAMING: number;
						public close(): void;
						public received(param0: native.Array<number>): void;
						public opened(): void;
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public gotHTTPResponse(param0: number, param1: native.Array<number>): void;
						public closeRequested(param0: number, param1: string): void;
						public requestClose(param0: number, param1: string): void;
						public completedWrite(param0: number): void;
						public closed(param0: number, param1: number, param2: string): void;
						public constructor(param0: number);
						public openSocket(): void;
						public completedReceive(param0: number): void;
						public released(): boolean;
						public send(param0: native.Array<number>): void;
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
					export class C4WebSocketCloseCode {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.C4WebSocketCloseCode>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.core.C4WebSocketCloseCode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
						});
						public constructor();
						public static kWebSocketCloseBadMessageFormat: number;
						public static kWebSocketCloseUserPermanent: number;
						public static kWebSocketCloseNoCode: number;
						public static kWebSocketCloseAbnormal: number;
						public static kWebSocketCloseMissingExtension: number;
						public static kWebSocketCloseTLSFailure: number;
						public static kWebSocketCloseGoingAway: number;
						public static kWebSocketCloseNormal: number;
						public static kWebSocketClosePolicyError: number;
						public static kWebSocketCloseFirstAvailable: number;
						public static kWebSocketCloseCantFulfill: number;
						public static kWebSocketCloseProtocolError: number;
						public static kWebSocketCloseUserTransient: number;
						public static kWebSocketCloseDataError: number;
						public static kWebSocketCloseMessageTooBig: number;
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
						public constructor();
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
					export abstract class RefCounted {
						public static class: java.lang.Class<com.couchbase.lite.internal.core.RefCounted>;
						public retain(): void;
						public release(): void;
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
				export module fleece {
					export class AllocSlice {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.AllocSlice>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.internal.fleece.AllocSlice interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHandle(): number;
							getBuf(): native.Array<number>;
							getSize(): number;
							free(): void;
						});
						public constructor();
						public getSize(): number;
						public free(): void;
						public getBuf(): native.Array<number>;
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
						public asTypedArray(): java.util.List;
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
					export class FLArrayIterator {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLArrayIterator>;
						public constructor();
						public begin(param0: com.couchbase.lite.internal.fleece.FLArray): void;
						public constructor(param0: number);
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public free(): void;
						public next(): boolean;
						public getValueAt(param0: number): com.couchbase.lite.internal.fleece.FLValue;
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
					export class FLDictIterator {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLDictIterator>;
						public constructor();
						public begin(param0: com.couchbase.lite.internal.fleece.FLDict): void;
						public getValue(): com.couchbase.lite.internal.fleece.FLValue;
						public free(): void;
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
					export class FLEncoder {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLEncoder>;
						public constructor();
						public writeKey(param0: string): boolean;
						public managed(): com.couchbase.lite.internal.fleece.FLEncoder;
						public beginArray(param0: number): boolean;
						public finish(): native.Array<number>;
						public getExtraInfo(): any;
						public writeString(param0: string): boolean;
						public writeData(param0: native.Array<number>): boolean;
						public endArray(): boolean;
						public write(param0: java.util.List): boolean;
						public finalize(): void;
						public endDict(): boolean;
						public setExtraInfo(param0: any): void;
						public constructor(param0: number);
						public free(): void;
						public beginDict(param0: number): boolean;
						public finish2(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public writeValue(param0: any): boolean;
						public writeNull(): boolean;
						public write(param0: java.util.Map<string,any>): boolean;
						public reset(): void;
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
					export class FLSliceResult extends com.couchbase.lite.internal.fleece.AllocSlice {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLSliceResult>;
						public constructor();
						public constructor(param0: native.Array<number>);
						public getSize(): number;
						public managed(): com.couchbase.lite.internal.fleece.FLSliceResult;
						public constructor(param0: number);
						public free(): void;
						public getBuf(): native.Array<number>;
						public getHandle(): number;
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
					export class FLValue {
						public static class: java.lang.Class<com.couchbase.lite.internal.fleece.FLValue>;
						public asBool(): boolean;
						public static fromData(param0: com.couchbase.lite.internal.fleece.AllocSlice): com.couchbase.lite.internal.fleece.FLValue;
						public isInteger(): boolean;
						public static fromData(param0: native.Array<number>): com.couchbase.lite.internal.fleece.FLValue;
						public asObject(): any;
						public asInt(): number;
						public static json5ToJson(param0: string): string;
						public asDict(): java.util.Map<string,any>;
						public static toObject(param0: com.couchbase.lite.internal.fleece.FLValue): any;
						public getType(): number;
						public isUnsigned(): boolean;
						public toStr(): string;
						public isNumber(): boolean;
						public asFLDict(): com.couchbase.lite.internal.fleece.FLDict;
						public constructor(param0: number);
						public asDouble(): number;
						public asTypedArray(): java.util.List;
						public asString(): string;
						public asFLArray(): com.couchbase.lite.internal.fleece.FLArray;
						public asArray(): java.util.List<any>;
						public asData(): native.Array<number>;
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
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
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
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
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
						public constructor(param0: com.couchbase.lite.internal.fleece.AllocSlice);
						public getData(): com.couchbase.lite.internal.fleece.AllocSlice;
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
						public initAsCopyOf(param0: com.couchbase.lite.internal.fleece.MCollection, param1: boolean): void;
						public clear(): boolean;
						public constructor();
						public count(): number;
						public remove(param0: string): boolean;
						public getKeys(): java.util.List<string>;
						public initAsCopyOf(param0: com.couchbase.lite.internal.fleece.MDict, param1: boolean): void;
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection, param2: boolean): void;
						public set(param0: string, param1: com.couchbase.lite.internal.fleece.MValue): boolean;
						public contains(param0: string): boolean;
						public iterator(): java.util.Iterator<string>;
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
						public initInSlot(param0: com.couchbase.lite.internal.fleece.MValue, param1: com.couchbase.lite.internal.fleece.MCollection): void;
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
						public encode(): com.couchbase.lite.internal.fleece.AllocSlice;
						public constructor();
						public constructor(param0: com.couchbase.lite.internal.fleece.AllocSlice, param1: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: com.couchbase.lite.internal.fleece.FLValue, param2: boolean);
						public constructor(param0: com.couchbase.lite.internal.fleece.AllocSlice);
						public asNative(): any;
						public isMutated(): boolean;
						public constructor(param0: com.couchbase.lite.internal.fleece.MContext, param1: boolean);
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
					export class AbstractCBLWebSocket extends com.couchbase.lite.internal.core.C4Socket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket>;
						public requestClose(param0: number, param1: string): void;
						public handleClose(param0: java.lang.Throwable): boolean;
						public close(): void;
						public constructor(param0: number);
						public constructor(param0: number, param1: string, param2: string, param3: number, param4: string, param5: java.util.Map<string,any>);
						public static createCBLWebSocket(param0: number, param1: string, param2: string, param3: number, param4: string, param5: native.Array<number>): com.couchbase.lite.internal.replicator.CBLWebSocket;
						public openSocket(): void;
						public completedReceive(param0: number): void;
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
						public send(param0: native.Array<number>): void;
					}
					export module AbstractCBLWebSocket {
						export class CBLWebSocketListener {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.CBLWebSocketListener>;
							public onMessage(param0: okhttp3.WebSocket, param1: okio.ByteString): void;
							public onOpen(param0: okhttp3.WebSocket, param1: okhttp3.Response): void;
							public onMessage(param0: okhttp3.WebSocket, param1: string): void;
							public onFailure(param0: okhttp3.WebSocket, param1: java.lang.Throwable, param2: okhttp3.Response): void;
							public onClosing(param0: okhttp3.WebSocket, param1: number, param2: string): void;
							public onClosed(param0: okhttp3.WebSocket, param1: number, param2: string): void;
						}
						export class TLSSocketFactory {
							public static class: java.lang.Class<com.couchbase.lite.internal.replicator.AbstractCBLWebSocket.TLSSocketFactory>;
							public createSocket(param0: java.net.InetAddress, param1: number): java.net.Socket;
							public createSocket(param0: java.net.InetAddress, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public createSocket(param0: java.net.Socket, param1: string, param2: number, param3: boolean): java.net.Socket;
							public getSupportedCipherSuites(): native.Array<string>;
							public createSocket(param0: string, param1: number, param2: java.net.InetAddress, param3: number): java.net.Socket;
							public getDefaultCipherSuites(): native.Array<string>;
							public createSocket(param0: string, param1: number): java.net.Socket;
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
					export class CBLWebSocket extends com.couchbase.lite.internal.replicator.AbstractCBLWebSocket {
						public static class: java.lang.Class<com.couchbase.lite.internal.replicator.CBLWebSocket>;
						public handleClose(param0: java.lang.Throwable): boolean;
						public constructor(param0: number);
						public constructor(param0: number, param1: string, param2: string, param3: number, param4: string, param5: java.util.Map<string,any>);
						public constructor(param0: string, param1: string, param2: number, param3: string, param4: number);
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
						public static LOGGING_DOMAINS_FROM_C4: java.util.Map<string,com.couchbase.lite.LogDomain>;
						public static LOGGING_DOMAINS_TO_C4: java.util.Map<com.couchbase.lite.LogDomain,string>;
						public static LOG_LEVEL_FROM_C4: java.util.Map<java.lang.Integer,com.couchbase.lite.LogLevel>;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: native.Array<any>): void;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static formatStandardMessage(param0: string, param1: native.Array<any>): string;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static getC4DomainForLoggingDomain(param0: com.couchbase.lite.LogDomain): string;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: native.Array<any>): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static setC4LogLevel(param0: java.util.EnumSet<com.couchbase.lite.LogDomain>, param1: com.couchbase.lite.LogLevel): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static getLogLevelForC4Level(param0: number): com.couchbase.lite.LogLevel;
						public static getLoggingDomainForC4Domain(param0: string): com.couchbase.lite.LogDomain;
						public static info(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static initLogging(param0: java.util.Map<string,string>): void;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static w(param0: com.couchbase.lite.LogDomain, param1: string, param2: native.Array<any>): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string): void;
						public static v(param0: com.couchbase.lite.LogDomain, param1: string, param2: native.Array<any>): void;
						public static warn(): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: native.Array<any>): void;
						public static lookupStandardMessage(param0: string): string;
						public static i(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
						public static e(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable): void;
						public static d(param0: com.couchbase.lite.LogDomain, param1: string, param2: java.lang.Throwable, param3: native.Array<any>): void;
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
					export class Run {
						public static class: java.lang.Class<com.couchbase.lite.internal.support.Run>;
						public constructor();
						public static once(param0: string, param1: java.lang.Runnable): void;
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
						public static cast(param0: any, param1: java.lang.Class): any;
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
					export class DateUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.DateUtils>;
						public static fromJson(param0: string): java.util.Date;
						public static toJson(param0: java.util.Date): string;
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
					export class JsonUtils {
						public static class: java.lang.Class<com.couchbase.lite.internal.utils.JsonUtils>;
						public static fromJson(param0: org.json.JSONArray): java.util.List<any>;
						public static toJson(param0: java.util.List<any>): org.json.JSONArray;
						public static toJson(param0: java.util.Map<string,any>): org.json.JSONObject;
						public static fromJson(param0: org.json.JSONObject): java.util.Map<string,any>;
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
						public static checkArgNotZero(param0: number, param1: string): void;
						public static checkArgNotNull(param0: any, param1: string): void;
						public static testArg(param0: any, param1: string, param2: com.couchbase.lite.utils.Fn.Predicate<any>): void;
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
						public static isEmpty(param0: string): boolean;
						public static join(param0: string, param1: java.lang.Iterable): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module utils {
				export class FileUtils {
					public static class: java.lang.Class<com.couchbase.lite.utils.FileUtils>;
					public static cleanDirectory(param0: java.io.File): boolean;
					public static deleteRecursive(param0: string): boolean;
					public constructor();
					public static removeItemIfExists(param0: string): boolean;
					public static deleteRecursive(param0: java.io.File): boolean;
					public static setPermissionRecursive(param0: java.io.File, param1: boolean, param2: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module couchbase {
		export module lite {
			export module utils {
				export class Fn {
					public static class: java.lang.Class<com.couchbase.lite.utils.Fn>;
					/**
					 * Constructs a new instance of the com.couchbase.lite.utils.Fn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
				export module Fn {
					export class Consumer<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.utils.Fn.Consumer<any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.utils.Fn$Consumer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							accept(param0: T): void;
						});
						public constructor();
						public accept(param0: T): void;
					}
					export class Function<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.utils.Fn.Function<any,any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.utils.Fn$Function interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: T): R;
						});
						public constructor();
						public apply(param0: T): R;
					}
					export class FunctionThrows<T, R, E>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.utils.Fn.FunctionThrows<any,any,any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.utils.Fn$FunctionThrows interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							apply(param0: T): R;
						});
						public constructor();
						public apply(param0: T): R;
					}
					export class Predicate<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.utils.Fn.Predicate<any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.utils.Fn$Predicate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							test(param0: T): boolean;
						});
						public constructor();
						public test(param0: T): boolean;
					}
					export class Provider<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.couchbase.lite.utils.Fn.Provider<any>>;
						/**
						 * Constructs a new instance of the com.couchbase.lite.utils.Fn$Provider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							get(): T;
						});
						public constructor();
						public get(): T;
					}
				}
			}
		}
	}
}

declare module okhttp3 {
	export module internal {
		export module tls {
			export class CustomHostnameVerifier {
				public static class: java.lang.Class<okhttp3.internal.tls.CustomHostnameVerifier>;
				public static INSTANCE: okhttp3.internal.tls.CustomHostnameVerifier;
				public verify(param0: string, param1: javax.net.ssl.SSLSession): boolean;
				public verifyHostname(param0: string, param1: string): boolean;
				public static allSubjectAltNames(param0: java.security.cert.X509Certificate): java.util.List<string>;
				public static getInstance(): okhttp3.internal.tls.CustomHostnameVerifier;
				public verify(param0: string, param1: java.security.cert.X509Certificate): boolean;
			}
		}
	}
}

//Generics information:
//com.couchbase.lite.ChangeListener:1
//com.couchbase.lite.ChangeListenerToken:1
//com.couchbase.lite.ChangeNotifier:1
//com.couchbase.lite.utils.Fn.Consumer:1
//com.couchbase.lite.utils.Fn.Function:2
//com.couchbase.lite.utils.Fn.FunctionThrows:3
//com.couchbase.lite.utils.Fn.Predicate:1
//com.couchbase.lite.utils.Fn.Provider:1

