import { Common, ConcurrencyMode, Query, ReplicatorBase } from './common';

export { ConcurrencyMode, Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem } from './common';

export declare class CouchBase extends Common {
	readonly config: any;
	readonly android: any;
	readonly ios: any;
	constructor(name: string);

	close();

	createDocument(data: Object, documentId?: string, concurrencyMode?: ConcurrencyMode): any;

	setBlob(id: string, name: string, blob: any, mimeType?: string, concurrencyMode?: ConcurrencyMode): void;

	getBlob(id: string, name: string): Blob;

	getDocument(documentId: string): any;

	updateDocument(documentId: string, data: any, concurrencyMode?: ConcurrencyMode): boolean;

	deleteDocument(documentId: string, concurrencyMode?: ConcurrencyMode): boolean;

	destroyDatabase(): void;

	query(query?: Query): any[];

	createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both'): Replicator;

	createPullReplication(remoteUrl: string, username?: string, password?: string): Replicator;

	createPushReplication(remoteUrl: string, username?: string, password?: string): Replicator;

	addDatabaseChangeListener(callback: (ids?: string[]) => void): void;

	removeDatabaseChangeListener(callback: (ids?: string[]) => void): void;

	addDocumentChangeListener(documentId: string, callback: (id: string) => void): void;

	removeDocumentChangeListener(callback: (id: string) => void): void;

	inBatch(batch: () => void): void;
}

export declare class Replicator extends ReplicatorBase {
	constructor(replicator: any);

	start(): void;

	stop(): void;

	isRunning(): boolean;

	setContinuous(isContinuous: boolean): void;

	setUserNameAndPassword(username: string, password: string): any;

	setChannels(channels: string[]): any;

	setSessionIdAndCookieName(sessionId: string, cookieName: string): any;

	setSessionId(sessionId: string): any;
}
