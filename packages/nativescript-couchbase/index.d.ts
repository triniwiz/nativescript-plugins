export enum ConcurrencyMode {
	LastWriteWins = 0,
	FailOnConflict = 1,
}

export enum QueryMeta {
	ALL = 'COUCHBASE_ALL',
	ID = 'COUCHBASE_ID',
}

export type QueryComparisonOperator = 'modulo' | 'is' | 'between' | 'isNot' | 'collate' | 'in' | 'add' | 'isNullOrMissing' | 'isNotValued' | 'greaterThan' | 'divide' | 'notEqualTo' | 'greaterThanOrEqualTo' | 'like' | 'subtract' | 'lessThanOrEqualTo' | 'lessThan' | 'notNullOrMissing' | 'isValued' | 'regex' | 'equalTo' | 'multiply' | 'contains';

export enum QueryLogicalOperator {
	AND = 'and',
	OR = 'or',
}

export enum QueryArrayOperator {
	CONTAINS = 'contains',
}

export interface QueryWhereItem {
	logical?: QueryLogicalOperator;
	property: string;
	comparison: QueryComparisonOperator;
	value: any;
}

export interface QueryOrderItem {
	property: string;
	direction: 'asc' | 'desc';
}

export type ValueType = string | number | boolean | null | Blob | Dictionary | Array | { [key: string]: ValueType } | ValueType[];

export type ObjectType = { [key: string]: ValueType };

export class Dictionary {
	readonly native;
	getKeys(): string[];
	getValue(key: string): ValueType;
	getNumber(key: string): number;
	toMutable(): MutableDictionary;
	contains(key: string): boolean;
	getBoolean(key: string): boolean;
	getDictionary(key: string): Dictionary;
	getString(key: string): string;
	getFloat(key: string): number;
	getBlob(key: string): Blob;
	isEmpty(): boolean;
	getLong(key: string): number;
	getDouble(key: string): number;
	getDate(key: string): Date;
	readonly count: number;
	toJSON(): string;
	getInt(key: string): number;
	getArray(key: string): Array;
}

export class MutableDictionary extends Dictionary {
	constructor(value?: ObjectType);

	readonly native;

	public setDate(key: string, value: Date): this;

	public setBoolean(key: string, value: boolean): this;

	public setBlob(key: string, blob: Blob): this;

	public remove(key: string): this;

	public setDictionary(key: string, value: Dictionary): this;

	public setInt(key: string, value: number): this;

	public setLong(key: string, value: number): this;

	public setData(value: Map<string, ValueType>): this;

	public setArray(key: string, value: Array): this;

	public setFloat(key: string, value: number): this;

	toJSON();

	public setJSON(value: { [key: string]: ValueType }): this;

	public setValue(key: string, value: ValueType): this;

	public setString(key: string, value: string): this;

	public setDouble(key: string, value: number): this;
}

export class Array {
	readonly native;

	public getDouble(index: number): number;
	public getString(index: number): string;
	public getDictionary(index: number): Dictionary;
	public toMutable(): MutableArray;

	public getLong(index: number): number;

	public getInt(index: number): number;

	public getDate(index: number): Date;
	public getBoolean(index: number): boolean;

	public getBlob(index: number): Blob;
	public getValue(index: number): ValueType;
	readonly count;
	toJSON();
	public getArray(index: number): Array;
	public getFloat(index: number): number;
}

export class MutableArray extends Array {
	readonly native;

	constructor(value: ObjectType[] | CBLMutableArray);

	public addDictionary(value: Dictionary): this;

	public insertDictionary(index: number, value: Dictionary): this;

	public setDictionary(index: number, value: Dictionary): this;

	public addArray(value: Array): this;

	public insertArray(index: number, value: Array): this;

	public setArray(index: number, value: Array): this;

	public addDate(value: Date): this;

	public insertDate(index: number, value: Date): this;

	public setDate(index: number, value: Date): this;

	public addDouble(value: number): this;

	public insertDouble(index: number, value: number): this;

	public setDouble(index: number, value: number): this;

	public remove(index: number): this;

	public addFloat(value: number): this;

	public insertFloat(index: number, value: number): this;

	public setFloat(index: number, value: number): this;

	public addInt(value: number): this;

	public insertInt(index: number, value: number): this;

	public setInt(index: number, value: number): this;

	public addBoolean(value: boolean): this;

	public insertBoolean(index: number, value: boolean): this;

	public setBoolean(index: number, value: boolean): this;

	public addLong(value: number): this;

	public insertLong(index: number, value: number): this;

	public setLong(index: number, value: number): this;

	public toJSON();

	public addString(value: string): this;

	public insertString(index: number, value: string): this;

	public setString(index: number, value: string): this;

	public insertValue(index: number, value: ValueType): this;

	public setValue(index: number, value: ValueType): this;

	public addValue(value: ValueType): this;

	public setData(value: ValueType[]);

	public addBlob(value: Blob): this;

	public setBlob(index: number, value: Blob): this;

	public insertBlob(index: number, value: Blob): this;
}

export class Document {
	readonly native;

	getString(key: string): string;

	getFloat(key: string): number;

	getBoolean(key: string): boolean;

	getDouble(key: string): number;

	getLong(key: string): number;

	getBlob(key: string): Blob;

	getValue(key: string): ValueType;

	toJSON();

	toMutable(): MutableDocument;
}

export class MutableDocument extends Omit<Document, 'toMutable'> {
	constructor(id?: string | ValueType);

	readonly native;

	setString(key: string, value: string): this;

	setFloat(key: string, value: number): this;

	setBoolean(key: string, value: boolean): this;

	setLong(key: string, value: number): this;

	setDouble(key: string, value: number): this;

	setBlob(key: string, value: Blob): this;

	setValue(key: string, value: ValueType): this;

	setDate(key: string, value: Date): this;

	setArray(key: string, value: Array): this;

	toJSON();
}

export class Scope {
	readonly native;

	readonly name: string;

	readonly collections: Array<Collection>;

	getCollection(name: string): Collection | null;
}

export class Listener {
	remove();
}

export class Index {}

export class ValueIndexConfiguration extends Index {
	readonly native;
	constructor(expressions: string[]);
}

export class FullTextIndexConfiguration extends Index {
	constructor(expressions: string[]);

	readonly native;

	setLanguage(language: string): this;

	getLanguage(): string;

	isIgnoringAccents(): boolean;

	ignoreAccents(ignoreAccents: boolean): this;
}

export class Collection {
	readonly native;
	readonly name: string;
	readonly count: number;
	readonly scope: Scope;

	addChangeListener(callback: (collection: Collection, documentIDs: string[]) => void): Listener;

	addDocumentChangeListener(id: string, callback: (id: string, collection: Collection) => void): Listener;

	createIndex(name: string, index: Index): void;

	save(document: MutableDocument, concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins);

	delete(document: Document, concurrencyMode: ConcurrencyMode = ConcurrencyMode.LastWriteWins);

	purge(documentOrId: string | Document);

	close();

	getDocument(documentId: string): Document | null;

	getDocumentExpiration(id: string): Date | null;

	get indexes(): Set<string>;

	setDocumentExpiration(id: string, date: Date);

	deleteIndex(name: string);
}

export declare class CouchBase extends Common {
	readonly config: any;
	readonly android: any;
	readonly ios: any;

	readonly defaultCollection: Collection;
	readonly defaultScope: Scope;

	constructor(name: string);

	createCollection(name: string, scope?: string): Collection;

	getCollection(name: string, scope?: string): Collection | null;

	close();

	destroyDatabase(): void;

	query(query?: Query): any[];

	inBatch(batch: () => void): void;
}

export declare class Replicator extends ReplicatorBase {
	constructor(remoteUrl: string, direction: 'push' | 'pull' | 'both');

	start(): void;

	stop(): void;

	isRunning(): boolean;

	setContinuous(isContinuous: boolean): void;

	setUserNameAndPassword(username: string, password: string): any;

	setChannels(collection: Collection, channels: string[]): any;

	addCollection(collection: Collection);

	addCollections(collections: Collection[]);

	setSessionIdAndCookieName(sessionId: string, cookieName: string): any;

	setSessionId(sessionId: string): any;
}

export class Stream {
	readonly native;
}

export class Blob {
	static fromFile(mimeType: string, file: string): Blob;

	static fromBytes(mimeType: string, content: any): Blob;

	readonly native;

	readonly content: any;

	readonly contentStream: Stream | null;

	readonly contentType: string;

	readonly length: number;

	readonly digest: string;

	readonly properties: Map<string, any>;
}

export class QueryBuilder {
	setSelect(select: string[] = [QueryMeta.ALL, QueryMeta.ID]): this;

	setFrom(collection: Collection): this;

	setWhere(where: QueryWhereItem[]): this;

	setGroupBy(groupBy: string[]): this;

	setOrder(order: QueryOrderItem[]): this;

	setLimit(limit: number): this;

	setOffset(offset: number): this;

	build(): Query;
}

export class Result {
	readonly native;

	getDouble(key: string): number;
	getDouble(index: number): number;

	getString(key: string): string;
	getString(index: number): string;

	getDictionary(key: string): Dictionary;
	getDictionary(index: number): Dictionary;

	getLong(key: string): number;
	getLong(index: number): number;

	getBoolean(key: string): boolean;
	getBoolean(index: number): boolean;

	getFloat(key: string): number;
	getFloat(index: number): number;

	getInt(key: string): number;
	getInt(index: number): number;

	getBlob(key: string): Blob;
	getBlob(index: number): Blob;

	getDate(key: string): Date;
	getDate(index: number): Date;

	getArray(key: string): Array;
	getArray(index: number): Array;

	getKeys(): string[];

	getValue(key: string): Array;
	getValue(index: number): Array;

	readonly count: number;
	public toJSON();
}

export class ResultSet {
	readonly native;
	[Symbol.iterator]();
	allResults(): any[];
}

export class Query {
	readonly native;

	addChangeListener(callback: (query: Query, results: ResultSet, error: any) => void): Listener;

	execute(): ResultSet;
}
