import { BlobBase, Common, ConcurrencyMode, Query, QueryComparisonOperator, QueryLogicalOperator, QueryMeta, ReplicatorBase } from './common';
import { isNullOrUndefined } from '@nativescript/core/utils/types';
import { knownFolders, path, Utils } from '@nativescript/core';

export { Query, QueryMeta, QueryArrayOperator, QueryComparisonOperator, QueryLogicalOperator, QueryOrderItem, QueryWhereItem } from './common';

declare const com;
let didInit = false;

export class CouchBase extends Common {
	readonly ios: any;
	readonly _config: com.couchbase.lite.DatabaseConfiguration;
	readonly _couchbase: com.couchbase.lite.Database;

	constructor(name: string) {
		super();
		if (!didInit) {
			didInit = true;
			com.couchbase.lite.CouchbaseLite.init(Utils.ad.getApplicationContext());
		}
		this._config = new com.couchbase.lite.DatabaseConfiguration();
		this._couchbase = new com.couchbase.lite.Database(name, this._config);
	}

	get android(): any {
		return this._couchbase;
	}

	close() {
		this.android.close();
	}

	inBatch(batch: () => void) {
		const runnable = new java.lang.Runnable({
			run: () => {
				batch();
			},
		});

		this.android.inBatch(runnable);
	}

	createDocument(data: Object, documentId?: string, concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins): string | null {
		try {
			let resultId;
			if (concurrencyMode === ConcurrencyMode.FailOnConflict) {
				resultId = com.github.triniwiz.couchbase.Couchbase.saveFromJSON(this.android, JSON.stringify(data), documentId ? documentId : null, com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT);
			} else {
				resultId = com.github.triniwiz.couchbase.Couchbase.saveFromJSON(this.android, JSON.stringify(data), documentId ? documentId : null);
			}
			return resultId;
		} catch (e) {
			console.error(e.message);
			return null;
		}
	}

	setBlob(id: string, name: string, blob: any, mimeType: string = 'application/octet-stream', concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins) {
		try {
			const document = this.android.getDocument(id).toMutable();
			if (typeof blob === 'string') {
				if (blob.startsWith(`file`)) {
					const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(blob));
					document.setBlob(name, nativeBlob);
				} else if (blob.startsWith(`/`)) {
					const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${blob}`));
					document.setBlob(name, nativeBlob);
				} else if (blob.startsWith(`~`)) {
					const filePath = path.join(knownFolders.currentApp().path, blob.replace('~', ''));
					const nativeBlob = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${filePath}`));
					document.setBlob(name, nativeBlob);
				} else if (blob.startsWith(`res`)) {
					const ctx = Utils.ad.getApplicationContext() as android.content.Context;
					const is = ctx.getAssets().open(blob.replace('res://', ''));
					const nativeBlob = new com.couchbase.lite.Blob(mimeType, is);
					document.setBlob(name, nativeBlob);
				} else {
					// TODO what else to check?
				}

				if (concurrencyMode === ConcurrencyMode.FailOnConflict) {
					this.android.save(document, com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT);
				} else {
					this.android.save(document);
				}
			} else {
				// TODO what else to check ... maybe native objects ??
			}
		} catch (e) {
			console.error(e);
		}
	}

	getBlob(id: string, name: string) {
		let document = this.android.getDocument(id) as com.couchbase.lite.Document;
		if (!document) return null;
		const blob = document.getBlob(name);
		if (!blob) return null;
		return new Blob(blob);
	}

	getDocument(documentId: string): any | null {
		try {
			const doc = com.github.triniwiz.couchbase.Couchbase.getDocument(this.android, documentId);
			return JSON.parse(doc);
		} catch (e) {
			console.error(e.message);
			return null;
		}
	}

	getDocuments(documentIds: string[]): any | null {
		try {
			const docs = com.github.triniwiz.couchbase.Couchbase.getDocuments(this.android, documentIds);
			return JSON.parse(docs);
		} catch (e) {
			console.error(e.message);
			return null;
		}
	}

	updateDocument(documentId: string, data: any, concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins): boolean {
		if (concurrencyMode === ConcurrencyMode.FailOnConflict) {
			return com.github.triniwiz.couchbase.Couchbase.updateFromJSON(this.android, JSON.stringify(data), documentId, com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT);
		} else {
			return com.github.triniwiz.couchbase.Couchbase.updateFromJSON(this.android, JSON.stringify(data), documentId);
		}
	}

	numberHasDecimals(item: number) {
		return !(item % 1 === 0);
	}

	numberIs64Bit(item: number) {
		return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
	}

	deleteDocument(documentId: string, concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins) {
		try {
			const doc = this.android.getDocument(documentId);
			return this.android.delete(doc, concurrencyMode === ConcurrencyMode.FailOnConflict ? com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT : com.couchbase.lite.ConcurrencyControl.LAST_WRITE_WINS);
		} catch (e) {
			console.error(e.message);
			return false;
		}
	}

	destroyDatabase() {
		try {
			this.android.delete();
		} catch (e) {
			console.error(e.message);
		}
	}

	private serializeExpression(item) {
		if (item === null) {
			return null;
		}

		switch (typeof item) {
			case 'string':
				return com.couchbase.lite.Expression.string(item);
			case 'object':
				if (item instanceof Date) {
					return com.couchbase.lite.Expression.date(CouchBase.fromISO8601UTC(item.toISOString()));
				}
				return com.couchbase.lite.Expression.value(item);

			case 'number':
				if (this.numberIs64Bit(item)) {
					if (this.numberHasDecimals(item)) {
						return com.couchbase.lite.Expression.doubleValue(item);
					} else {
						return com.couchbase.lite.Expression.longValue(item);
					}
				} else {
					if (this.numberHasDecimals(item)) {
						return com.couchbase.lite.Expression.floatValue(item);
					} else {
						return com.couchbase.lite.Expression.intValue(item);
					}
				}
			case 'boolean':
				return com.couchbase.lite.Expression.booleanValue(item);
			default:
				return com.couchbase.lite.Expression.value(item);
		}
	}

	private static dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
	private static tz = java.util.TimeZone.getTimeZone('UTC');
	private static fromISO8601UTC(date: string) {
		this.dateFormat.setTimeZone(this.tz);
		return this.dateFormat.parse(date);
	}

	private setComparison(item) {
		let nativeQuery;
		switch (item.comparison as QueryComparisonOperator) {
			case 'equalTo':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).equalTo(this.serializeExpression(item.value));
				break;
			case 'add':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).add(this.serializeExpression(item.value));
				break;
			case 'between':
				if (Array.isArray(item.value) && item.value.length === 2) {
					nativeQuery = com.couchbase.lite.Expression.property(item.property).between(com.couchbase.lite.Expression.value(this.serializeExpression(item.value[0])), com.couchbase.lite.Expression.value(this.serializeExpression(item.value[1])));
				}
				break;
			case 'collate':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).collate(this.serializeExpression(item.value));
				break;
			case 'contains':
				nativeQuery = com.couchbase.lite.ArrayFunction.contains(com.couchbase.lite.Expression.property(item.property), this.serializeExpression(item.value));
				break;
			case 'divide':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).divide(this.serializeExpression(item.value));
				break;
			case 'greaterThan':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).greaterThan(this.serializeExpression(item.value));
				break;
			case 'greaterThanOrEqualTo':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).greaterThanOrEqualTo(this.serializeExpression(item.value));
				break;
			case 'in':
				const inArray = [];
				if (Array.isArray(item.value)) {
					for (let exp of item.value) {
						inArray.push(this.serializeExpression(exp));
					}
				} else {
					inArray.push(this.serializeExpression(item.value));
				}
				nativeQuery = com.couchbase.lite.Expression.property(item.property).in(inArray);
				break;
			case 'is':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).is(this.serializeExpression(item.value));
				break;
			case 'isNot':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).isNot(this.serializeExpression(item.value));
				break;
			case 'isNullOrMissing':
			case 'isNotValued':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).isNotValued();
				break;
			case 'lessThan':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).lessThan(this.serializeExpression(item.value));
				break;
			case 'lessThanOrEqualTo':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).lessThanOrEqualTo(this.serializeExpression(item.value));
				break;
			case 'like':
				nativeQuery = com.couchbase.lite.Function.lower(com.couchbase.lite.Expression.property(item.property)).like(this.serializeExpression(item.value));
				break;
			case 'modulo':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).modulo(this.serializeExpression(item.value));
				break;
			case 'multiply':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).multiply(this.serializeExpression(item.value));
				break;
			case 'notEqualTo':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).notEqualTo(this.serializeExpression(item.value));
				break;
			case 'notNullOrMissing':
			case 'isValued':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).isValued();
				break;
			case 'regex':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).regex(this.serializeExpression(item.value));
				break;
			case 'subtract':
				nativeQuery = com.couchbase.lite.Expression.property(item.property).subtract(this.serializeExpression(item.value));
				break;
		}
		return nativeQuery;
	}

	query(query: Query = { select: [QueryMeta.ALL, QueryMeta.ID] }) {
		let select = [];
		let isAll = false;
		if (!query.select || query.select.length === 0) {
			isAll = true;
			select.push(com.couchbase.lite.SelectResult.all());
			select.push(com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id));
		} else {
			query.select.forEach((item) => {
				if (item === QueryMeta.ID) {
					select.push(com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id));
				} else if (item === QueryMeta.ALL) {
					isAll = true;
					select.push(com.couchbase.lite.SelectResult.all());
				} else {
					select.push(com.couchbase.lite.SelectResult.property(item));
				}
			});
		}
		let queryBuilder: any = com.couchbase.lite.QueryBuilder.select(select);
		if (query.from) {
			const db = new CouchBase(query.from);
			queryBuilder = queryBuilder.from(com.couchbase.lite.DataSource.database(db.android));
		} else {
			queryBuilder = queryBuilder.from(com.couchbase.lite.DataSource.database(this.android));
		}

		let nativeQuery = null;
		if (query.where) {
			for (let item of query.where) {
				if (item.logical === QueryLogicalOperator.AND) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.and(this.setComparison(item));
				} else if (item.logical === QueryLogicalOperator.OR) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.or(this.setComparison(item));
				} else {
					nativeQuery = this.setComparison(item);
				}
			}
			if (nativeQuery) {
				queryBuilder = queryBuilder.where(nativeQuery);
			}
		}
		if (query.groupBy) {
			const groupBy = [];
			for (let prop of query.groupBy) {
				groupBy.push(com.couchbase.lite.Expression.property(prop));
			}
			if (groupBy.length > 0) {
				queryBuilder = queryBuilder.groupBy(groupBy);
			}
		}
		if (query.order) {
			const orderBy = [];
			for (let item of query.order) {
				if (item.direction === 'desc') {
					orderBy.push(com.couchbase.lite.Ordering.property(item.property).descending());
				} else {
					orderBy.push(com.couchbase.lite.Ordering.property(item.property).ascending());
				}
			}
			if (orderBy.length > 0) {
				queryBuilder = queryBuilder.orderBy(orderBy);
			}
		}

		if (query.limit && typeof query.limit === 'number') {
			if (query.offset && typeof query.offset === 'number') {
				queryBuilder = queryBuilder.limit(com.couchbase.lite.Expression.intValue(query.limit), com.couchbase.lite.Expression.intValue(query.offset));
			} else {
				queryBuilder = queryBuilder.limit(com.couchbase.lite.Expression.intValue(query.limit));
			}
		}
		const results = com.github.triniwiz.couchbase.Couchbase.queryResultsToJSON(queryBuilder, isAll);
		try {
			return JSON.parse(results);
		} catch (e) {
			return [];
		}
	}

	createReplication(remoteUrl: string, direction: 'push' | 'pull' | 'both') {
		const uri = new com.couchbase.lite.URLEndpoint(new java.net.URI(remoteUrl));
		const repConfig = new com.couchbase.lite.ReplicatorConfiguration(this.android, uri);
		if (direction === 'pull') {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PULL);
		} else if (direction === 'push') {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PUSH);
		} else {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PUSH_AND_PULL);
		}

		const replicator = new com.couchbase.lite.Replicator(repConfig);
		return new Replicator(replicator);
	}

	createPullReplication(remoteUrl: string) {
		return this.createReplication(remoteUrl, 'pull');
	}

	createPushReplication(remoteUrl: string) {
		return this.createReplication(remoteUrl, 'push');
	}

	private _listenerMap = {};
	private _docChangeListenerMap: {} = {};

	addDocumentChangeListener(documentId: string, callback: (id: string) => void) {
		if (typeof documentId === 'string') {
			const listener = new (com as any).couchbase.lite.DocumentChangeListener({
				changed(changes: any) {
					if (callback && typeof callback === 'function') {
						callback(changes.getDocumentID());
					}
				},
			});
			const token = this.android.addDocumentChangeListener(documentId, listener);
			if (!isNullOrUndefined(token)) {
				this._docChangeListenerMap[callback as any] = token;
			}
		}
	}

	removeDocumentChangeListener(callback: (id: string) => any) {
		const token = this._listenerMap[callback as any];
		if (!isNullOrUndefined(token)) {
			this.android.removeChangeListener(token);
			delete this._docChangeListenerMap[callback as any];
		}
	}

	addDatabaseChangeListener(callback: (ids: string[]) => void) {
		const listener = new com.couchbase.lite.DatabaseChangeListener({
			changed(changes: any) {
				if (callback && typeof callback === 'function') {
					let ids = [];
					const documentIds = changes.getDocumentIDs();
					const size = documentIds.size();
					for (let i = 0; i < size; i++) {
						const item = documentIds.get(i);
						ids.push(item);
					}
					callback(ids);
				}
			},
		});
		const token = this.android.addChangeListener(listener);
		if (!isNullOrUndefined(token)) {
			this._listenerMap[callback as any] = token;
		}
	}

	removeDatabaseChangeListener(callback: (ids: string[]) => void) {
		const token = this._listenerMap[callback as any];
		if (!isNullOrUndefined(token)) {
			this.android.removeChangeListener(token);
			delete this._listenerMap[callback as any];
		}
	}
}

export class Replicator extends ReplicatorBase {
	constructor(replicator: any) {
		super(replicator);
	}

	start() {
		this.replicator.start();
	}

	stop() {
		this.replicator.stop();
	}

	isRunning() {
		return this.replicator.getStatus().getActivityLevel() === com.couchbase.lite.AbstractReplicator.ActivityLevel.BUSY;
	}

	setContinuous(isContinuous: boolean) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		newConfig.setContinuous(isContinuous);
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}

	setSessionId(sessionId: string) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		newConfig.setAuthenticator(new com.couchbase.lite.SessionAuthenticator(sessionId));
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}

	setSessionIdAndCookieName(sessionId: string, cookieName: string) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		newConfig.setAuthenticator(new com.couchbase.lite.SessionAuthenticator(sessionId, cookieName));
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}

	setUserNameAndPassword(username: string, password: string) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		newConfig.setAuthenticator(new com.couchbase.lite.BasicAuthenticator(username, password));
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}

	setChannels(channels: string[]) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		newConfig.setChannels(java.util.Arrays.asList(channels));
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}
}

export class Blob extends BlobBase {
	readonly ios: any;
	readonly _blob: any;

	constructor(blob: any) {
		super();
		this._blob = blob;
	}

	get android() {
		return this._blob;
	}

	get content(): any {
		if (!this.android) return null;
		return this.android.getContent();
	}

	get contentStream(): any {
		if (!this.android) return null;
		this.android.length();
		return this.android.getContentStream();
	}

	get contentType(): string {
		if (!this.android) return null;
		return this.android.getContentType();
	}

	get length(): number {
		if (!this.android) return 0;
		return this.android.length();
	}

	get digest(): string {
		if (!this.android) return null;
		return this.android.digest();
	}

	get properties(): Map<string, any> {
		const map = new Map();
		if (!this.android) return map;
		const nativeMap = this.android.getProperties();
		const mapKeys = nativeMap.keySet();
		const mapKeysArray = mapKeys.toArray();
		const length = mapKeysArray.length;
		for (let i = 0; i < length; i++) {
			const key = mapKeysArray[i];
			const value = nativeMap.get(key);
			map.set(key, value);
		}
		return map;
	}
}
