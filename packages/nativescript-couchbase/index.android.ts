import { knownFolders, path, Utils } from '@nativescript/core';
import { ValueType, ObjectType, QueryWhereItem, QueryOrderItem, QueryComparisonOperator, ConcurrencyMode } from '.';

declare const kotlin;
let didInit = false;

export enum QueryMeta {
	ALL = 'COUCHBASE_ALL',
	ID = 'COUCHBASE_ID',
}

export enum QueryLogicalOperator {
	AND = 'and',
	OR = 'or',
}

export enum QueryArrayOperator {
	CONTAINS = 'contains',
}

const numberHasDecimals = function (item: number) {
	return !(item % 1 === 0);
};

const numberIs64Bit = function (item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
};

let dateFormat: java.text.SimpleDateFormat;

const fromISO8601UTC = function (date: string) {
	if (dateFormat === undefined) {
		dateFormat = new java.text.SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS");
		dateFormat.setTimeZone(java.util.TimeZone.getTimeZone('UTC'));
	}
	return dateFormat.parse(date);
};

function deserialize(value: any) {
	if (value === null || value === undefined) {
		return null;
	}

	let store;

	const type = typeof value;

	if (type !== 'object') {
		return value;
	}

	switch (value.getClass().getName()) {
		case 'java.lang.String': {
			return String(value);
		}
		case 'java.lang.Boolean': {
			return String(value) === 'true';
		}
		case 'java.lang.Float':
		case 'java.lang.Integer':
		case 'java.lang.Long':
		case 'java.lang.Double':
		case 'java.lang.Short': {
			return Number(value);
		}
		case 'org.json.JSONArray': {
			store = [];
			const length = value.length();
			for (let j = 0; j < length; j++) {
				store[j] = deserialize(value.get(j));
			}
			break;
		}
		case 'org.json.JSONObject': {
			store = {};
			const i = value.keys();
			let key;
			while (i.hasNext()) {
				key = i.next();
				store[key] = deserialize(value.get(key));
			}
			break;
		}
		case 'androidx.collection.SimpleArrayMap': {
			const count = value.size();
			for (let l = 0; l < count; l++) {
				const key = value.keyAt(l);
				store[key] = deserialize(value.get(key));
			}
			break;
		}
		case 'androidx.collection.ArrayMap':
		case 'android.os.Bundle':
		case 'java.util.HashMap':
		case 'java.util.Map': {
			store = {};
			const keys = value.keySet().toArray();
			for (let k = 0; k < keys.length; k++) {
				const key = keys[k];
				store[key] = deserialize(value.get(key));
			}
			break;
		}
		case 'com.couchbase.lite.Dictionary':
			return Dictionary.fromNative(value);
		case 'com.couchbase.lite.MutableDictionary':
			return MutableDictionary.fromNative(value);
		case 'com.couchbase.lite.Array':
			return Array.fromNative(value);
		case 'com.couchbase.lite.MutableArray':
			return MutableArray.fromNative(value);
		default:
			if (typeof value === 'object' && value instanceof java.util.List) {
				const array = [];
				const size = value.size();
				for (let i = 0, n = size; i < n; i++) {
					array[i] = deserialize(value.get(i));
				}
				store = array;
			} else {
				store = null;
			}
			break;
	}
	return store;
}

function serializeObject(item: ValueType, object: com.couchbase.lite.MutableDictionary, key: string) {
	if (item === null) {
		object.setValue(key, null);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				object.setDate(key, fromISO8601UTC(item.toISOString()));
				return;
			}

			if (global.Array.isArray(item)) {
				const array = new com.couchbase.lite.MutableArray();
				item.forEach((data) => {
					serializeArray(data, array);
				});
				object.setArray(key, array);
				return;
			}

			const nativeObject = new com.couchbase.lite.MutableDictionary();
			Object.keys(item).forEach((itemKey) => {
				const obj = item[itemKey];
				serializeObject(obj, nativeObject, itemKey);
			});
			object.setDictionary(key, nativeObject);
			break;
		}
		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					object.setDouble(key, item);
				} else {
					object.setLong(key, item);
				}
			} else {
				if (numberHasDecimals(item)) {
					object.setFloat(key, item);
				} else {
					object.setInt(key, item);
				}
			}
			break;
		case 'boolean':
			object.setBoolean(key, item);
			break;
		default:
			object.setValue(key, item);
	}
}

function serializeArray(item: ValueType, array: com.couchbase.lite.MutableArray) {
	if (item === null) {
		array.addValue(null);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				array.addDate(fromISO8601UTC(item.toISOString()));
				return;
			}

			if (global.Array.isArray(item)) {
				const nativeArray = new com.couchbase.lite.MutableArray();
				item.forEach((data) => {
					serializeArray(data, nativeArray);
				});
				array.addArray(nativeArray);
				return;
			}

			const object = new com.couchbase.lite.MutableDictionary();
			Object.keys(item).forEach((itemKey) => {
				const obj = item[itemKey];
				serializeObject(obj, object, itemKey);
			});
			array.addDictionary(object);
			break;
		}
		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					array.addDouble(item);
				} else {
					array.addLong(item);
				}
			} else {
				if (numberHasDecimals(item)) {
					array.addFloat(item);
				} else {
					array.addInt(item);
				}
			}
			break;
		case 'boolean':
			array.addBoolean(item);
			break;
		default:
			array.addValue(item);
	}
}

function serialize(item: ValueType, doc: com.couchbase.lite.MutableDocument, key: string) {
	if (item === null) {
		doc.setValue(key, null);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				doc.setDate(key, fromISO8601UTC(item.toISOString()));
				return;
			}

			if (global.Array.isArray(item)) {
				const array = new com.couchbase.lite.MutableArray();
				item.forEach((data) => {
					serializeArray(data, array);
				});
				doc.setArray(key, array);
				return;
			}

			const object = new com.couchbase.lite.MutableDictionary();
			Object.keys(item).forEach((itemKey) => {
				const obj = item[itemKey];
				serializeObject(obj, object, itemKey);
			});
			doc.setDictionary(key, object);
			break;
		}
		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					doc.setDouble(key, item);
				} else {
					doc.setLong(key, item);
				}
			} else {
				if (numberHasDecimals(item)) {
					doc.setFloat(key, item);
				} else {
					doc.setInt(key, item);
				}
			}
			break;
		case 'boolean':
			doc.setBoolean(key, item);
			break;
		default:
			doc.setValue(key, item);
	}
}

function valueToObject(value: ValueType) {
	switch (typeof value) {
		case 'string':
			return java.lang.String.valueOf(value);
		case 'number':
			if (numberIs64Bit(value)) {
				if (numberHasDecimals(value)) {
					return java.lang.Double.valueOf(value);
				} else {
					return java.lang.Long.valueOf(value);
				}
			} else {
				if (numberHasDecimals(value)) {
					return java.lang.Float.valueOf(value);
				} else {
					return java.lang.Integer.valueOf(value);
				}
			}
		case 'boolean':
			return new java.lang.Boolean(value);
		case 'bigint':
			return new java.math.BigInteger((value as bigint).toString());
		case 'object':
			if (value === null) {
				return null;
			}
			if (value instanceof Array || value instanceof Dictionary || value instanceof Blob) {
				return value.native;
			}
			return undefined;
		default:
			return undefined;
	}
}

function serializeExpression(item) {
	if (item === null) {
		return null;
	}

	switch (typeof item) {
		case 'string':
			return com.couchbase.lite.Expression.string(item);
		case 'object':
			if (item instanceof Date) {
				return com.couchbase.lite.Expression.date(fromISO8601UTC(item.toISOString()));
			}
			return com.couchbase.lite.Expression.value(item);

		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					return com.couchbase.lite.Expression.doubleValue(item);
				} else {
					return com.couchbase.lite.Expression.longValue(item);
				}
			} else {
				if (numberHasDecimals(item)) {
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

function setComparison(item) {
	let nativeQuery: com.couchbase.lite.Expression;
	switch (item.comparison as QueryComparisonOperator) {
		case 'equalTo':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).equalTo(serializeExpression(item.value));
			break;
		case 'add':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).add(serializeExpression(item.value));
			break;
		case 'between':
			if (global.Array.isArray(item.value) && item.value.length === 2) {
				nativeQuery = com.couchbase.lite.Expression.property(item.property).between(com.couchbase.lite.Expression.value(serializeExpression(item.value[0])), com.couchbase.lite.Expression.value(serializeExpression(item.value[1])));
			}
			break;
		case 'collate':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).collate(serializeExpression(item.value) as never);
			break;
		case 'contains':
			nativeQuery = com.couchbase.lite.ArrayFunction.contains(com.couchbase.lite.Expression.property(item.property), serializeExpression(item.value));
			break;
		case 'divide':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).divide(serializeExpression(item.value));
			break;
		case 'greaterThan':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).greaterThan(serializeExpression(item.value));
			break;
		case 'greaterThanOrEqualTo':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).greaterThanOrEqualTo(serializeExpression(item.value));
			break;
		case 'in':
			{
				const isArray = global.Array.isArray(item.value);
				const inArray = global.Array.create('com.couchbase.lite.Expression', isArray ? item.value.length : 1);
				if (isArray) {
					item.value.forEach((exp, i) => {
						inArray[i] = serializeExpression(exp);
					});
				} else {
					inArray[0] = serializeExpression(item.value);
				}
				nativeQuery = com.couchbase.lite.Expression.property(item.property).in(inArray);
			}
			break;
		case 'is':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).is(serializeExpression(item.value));
			break;
		case 'isNot':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).isNot(serializeExpression(item.value));
			break;
		case 'isNullOrMissing':
		case 'isNotValued':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).isNotValued();
			break;
		case 'lessThan':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).lessThan(serializeExpression(item.value));
			break;
		case 'lessThanOrEqualTo':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).lessThanOrEqualTo(serializeExpression(item.value));
			break;
		case 'like':
			nativeQuery = com.couchbase.lite.Function.lower(com.couchbase.lite.Expression.property(item.property)).like(serializeExpression(item.value));
			break;
		case 'modulo':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).modulo(serializeExpression(item.value));
			break;
		case 'multiply':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).multiply(serializeExpression(item.value));
			break;
		case 'notEqualTo':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).notEqualTo(serializeExpression(item.value));
			break;
		case 'notNullOrMissing':
		case 'isValued':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).isValued();
			break;
		case 'regex':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).regex(serializeExpression(item.value));
			break;
		case 'subtract':
			nativeQuery = com.couchbase.lite.Expression.property(item.property).subtract(serializeExpression(item.value));
			break;
	}
	return nativeQuery;
}

export class Dictionary {
	protected _native: com.couchbase.lite.Dictionary;

	static fromNative(value: com.couchbase.lite.Dictionary): Dictionary {
		if (value instanceof com.couchbase.lite.Dictionary) {
			const dictionary = new Dictionary();
			dictionary._native = value;
			return dictionary;
		}
		return null;
	}

	get native() {
		return this._native;
	}
	getKeys(): string[] {
		const keys = this.native.getKeys().toArray();
		const ret = [];
		for (let i = 0; i < keys.length; i++) {
			ret[i] = keys[i];
		}
		return ret;
	}

	getValue(key: string): any {
		return this.native.getValue(key);
	}

	public getNumber(key: string): number {
		return this.native.getNumber(key).doubleValue();
	}
	public toMutable(): MutableDictionary {
		return MutableDictionary.fromNative(this.native.toMutable());
	}
	public contains(key: string): boolean {
		return this.native.contains(key);
	}
	public getBoolean(key: string): boolean {
		return this.native.getBoolean(key);
	}
	public getDictionary(key: string): Dictionary {
		return Dictionary.fromNative(this.native.getDictionary(key) as com.couchbase.lite.Dictionary);
	}

	public getString(key: string): string {
		return this.native.getString(key);
	}
	public getFloat(key: string): number {
		return this.native.getFloat(key);
	}
	public getBlob(key: string): Blob {
		return Blob.fromNative(this.native.getBlob(key));
	}
	public isEmpty(): boolean {
		return this.native.isEmpty();
	}
	public getLong(key: string): number {
		return this.native.getLong(key);
	}
	public getDouble(key: string): number {
		return this.native.getDouble(key);
	}

	public getDate(key: string): Date {
		const date = this.native.getDate(key);
		return new Date(date.getTime());
	}
	public get count(): number {
		return this.native.count();
	}
	public toJSON(): string {
		return JSON.parse(this.native.toJSON());
	}

	public getInt(key: string): number {
		return this.native.getInt(key);
	}
	public getArray(key: string): Array {
		return Array.fromNative(this.native.getArray(key) as com.couchbase.lite.Array);
	}
}

export class MutableDictionary extends Dictionary {
	protected _native: com.couchbase.lite.MutableDictionary;

	constructor(value: ObjectType | com.couchbase.lite.MutableDictionary) {
		super();
		if (value instanceof com.couchbase.lite.MutableDictionary) {
			this._native = value;
		} else {
			this._native = new com.couchbase.lite.MutableDictionary();

			if (value !== null || (value !== undefined && typeof value === 'object')) {
				Object.keys(value).forEach((key) => {
					serializeObject(value[key], this._native, key);
				});
			}
		}
	}

	static fromNative(value: com.couchbase.lite.MutableDictionary): MutableDictionary {
		if (value instanceof com.couchbase.lite.MutableDictionary) {
			return new MutableDictionary(value);
		}
		return null;
	}

	get native() {
		return this._native;
	}
	public setDate(key: string, value: Date): this {
		this.native.setDate(key, fromISO8601UTC(value.toISOString()));
		return this;
	}
	public setBoolean(key: string, value: boolean): this {
		this.native.setBoolean(key, value);
		return this;
	}

	public setBlob(key: string, blob: Blob): this {
		this.native.setBlob(key, blob.native);
		return this;
	}

	public remove(key: string): this {
		this.native.remove(key);
		return this;
	}
	public setDictionary(key: string, value: Dictionary): this {
		this.native.setDictionary(key, value.native);
		return this;
	}

	public setInt(key: string, value: number): this {
		this.native.setInt(key, value);
		return this;
	}
	public setLong(key: string, value: number): this {
		this.native.setLong(key, value);
		return this;
	}

	public setData(value: Map<string, ValueType>): this {
		if (value instanceof Map) {
			const keys = value.keys();
		}
		return this;
	}

	public setArray(key: string, value: Array): this {
		this.native.setArray(key, value.native);
		return this;
	}
	public setFloat(key: string, value: number): this {
		this.native.setFloat(key, value);
		return this;
	}

	toJSON() {
		return JSON.parse(this.native.toJSON());
	}

	public setJSON(value: { [key: string]: ValueType }): this {
		return this;
	}

	public setValue(key: string, value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.setValue(key, native);
		}
		return this;
	}

	public setString(key: string, value: string): this {
		this.native.setString(key, value);
		return this;
	}

	public setDouble(key: string, value: number): this {
		this.native.setDouble(key, value);
		return this;
	}
}

export class Array {
	_native: com.couchbase.lite.Array;

	get native() {
		return this._native;
	}

	static fromNative(value: com.couchbase.lite.Array): Array | null {
		if (value instanceof com.couchbase.lite.Array) {
			const array = new (<any>Array)();
			array._native = value;
			return array;
		}
		return null;
	}
	public getDouble(index: number): number {
		return this.native.getDouble(index);
	}
	public getString(index: number): string {
		return this.native.getString(index);
	}
	public getDictionary(index: number): Dictionary {
		return Dictionary.fromNative(this.native.getDictionary(index) as com.couchbase.lite.Dictionary);
	}

	public toMutable(): MutableArray {
		return MutableArray.fromNative(this.native.toMutable());
	}

	public getLong(index: number): number {
		return this.native.getLong(index);
	}

	public getInt(index: number): number {
		return this.native.getInt(index);
	}

	public getDate(index: number): Date {
		const date = this.native.getDate(index);
		if (date) {
			return new Date(date.getTime());
		}
		return null;
	}
	public getBoolean(index: number): boolean {
		return this.native.getBoolean(index);
	}

	public getBlob(index: number): Blob {
		return Blob.fromNative(this.native.getBlob(index));
	}
	public getValue(index: number): any {
		return deserialize(this.native.getValue(index));
	}
	public get count(): number {
		return this.native.count();
	}
	toJSON() {
		return JSON.parse(this.native.toJSON());
	}
	public getArray(index: number): Array {
		return Array.fromNative(this.native.getArray(index) as com.couchbase.lite.Array);
	}
	public getFloat(index: number): number {
		return this.native.getFloat(index);
	}
}

export class MutableArray extends Array {
	_native: com.couchbase.lite.MutableArray;

	constructor(value: ObjectType[] | com.couchbase.lite.MutableArray) {
		super();
		if (value instanceof com.couchbase.lite.MutableArray) {
			this._native = value as any;
		} else {
			this._native = new com.couchbase.lite.MutableArray();

			if (global.Array.isArray(value)) {
				value.forEach((item) => {
					serializeArray(item, this._native);
				});
			}
		}
	}

	get native() {
		return this._native;
	}

	static fromNative(value: com.couchbase.lite.MutableArray): MutableArray {
		if (value instanceof com.couchbase.lite.MutableArray) {
			return new MutableArray(value);
		}
		return null;
	}

	public addDictionary(value: Dictionary): this {
		this.native.addDictionary(value.native);
		return this;
	}
	public insertDictionary(index: number, value: Dictionary): this {
		this.native.insertDictionary(index, value.native);
		return this;
	}

	public setDictionary(index: number, value: Dictionary): this {
		this.native.setDictionary(index, value.native);
		return this;
	}

	public addArray(value: Array): this {
		this.native.addArray(value.native);
		return this;
	}

	public insertArray(index: number, value: Array): this {
		this.native.insertArray(index, value.native);
		return this;
	}

	public setArray(index: number, value: Array): this {
		this.native.setArray(index, value.native);
		return this;
	}

	public addDate(value: Date): this {
		this.native.addDate(fromISO8601UTC(value.toISOString()));
		return this;
	}

	public insertDate(index: number, value: Date): this {
		this.native.insertDate(index, fromISO8601UTC(value.toISOString()));
		return this;
	}

	public setDate(index: number, value: Date): this {
		this.native.setDate(index, fromISO8601UTC(value.toISOString()));
		return this;
	}

	public addDouble(value: number): this {
		this.native.addDouble(value);
		return this;
	}

	public insertDouble(index: number, value: number): this {
		this.native.insertDouble(index, value);
		return this;
	}

	public setDouble(index: number, value: number): this {
		this.native.setDouble(index, value);
		return this;
	}

	public remove(index: number): this {
		this.native.remove(index);
		return this;
	}

	public addFloat(value: number): this {
		this.native.addFloat(value);
		return this;
	}

	public insertFloat(index: number, value: number): this {
		this.native.insertFloat(index, value);
		return this;
	}

	public setFloat(index: number, value: number): this {
		this.native.setFloat(index, value);
		return this;
	}

	public addInt(value: number): this {
		this.native.addInt(value);
		return this;
	}

	public insertInt(index: number, value: number): this {
		this.native.insertInt(index, value);
		return this;
	}

	public setInt(index: number, value: number): this {
		this.native.setInt(index, value);
		return this;
	}

	public addBoolean(value: boolean): this {
		this.native.addBoolean(value);
		return this;
	}

	public insertBoolean(index: number, value: boolean): this {
		this.native.insertBoolean(index, value);
		return this;
	}

	public setBoolean(index: number, value: boolean): this {
		this.native.setBoolean(index, value);
		return this;
	}

	public addLong(value: number): this {
		this.native.addLong(value);
		return this;
	}

	public insertLong(index: number, value: number): this {
		this.native.insertLong(index, value);
		return this;
	}

	public setLong(index: number, value: number): this {
		this.native.setLong(index, value);
		return this;
	}

	public toJSON() {
		return JSON.parse(this.native.toJSON());
	}

	public addString(value: string): this {
		this.native.addString(value);
		return this;
	}

	public insertString(index: number, value: string): this {
		this.native.insertString(index, value);
		return this;
	}

	public setString(index: number, value: string): this {
		this.native.setString(index, value);
		return this;
	}

	public insertValue(index: number, value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.insertValue(index, native);
		}
		return this;
	}

	public setValue(index: number, value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.setValue(index, native);
		}
		return this;
	}

	public addValue(value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.addValue(native);
		}
		return this;
	}

	public addBlob(value: Blob): this {
		this.native.addBlob(value.native);
		return this;
	}

	public setBlob(index: number, value: Blob): this {
		this.native.setBlob(index, value.native);
		return this;
	}

	public insertBlob(index: number, value: Blob): this {
		this.native.insertBlob(index, value.native);
		return this;
	}
}

export class Document {
	_native: com.couchbase.lite.Document;

	get native() {
		return this._native;
	}

	static fromNative(document: com.couchbase.lite.Document): Document | null {
		if (document instanceof com.couchbase.lite.Document) {
			const doc = new Document();
			doc._native = document;
			return doc;
		}
		return null;
	}

	getKeys(): string[] {
		const keys = this.native.getKeys().toArray();
		const ret = [];
		for (let i = 0; i < keys.length; i++) {
			ret[i] = keys[i];
		}
		return ret;
	}

	toMutable(): MutableDocument {
		return MutableDocument.fromNative(this.native.toMutable());
	}

	getString(key: string): string {
		return this.native.getString(key);
	}

	getFloat(key: string): number {
		return this.native.getFloat(key);
	}

	getDouble(key: string): number {
		return this.native.getDouble(key);
	}

	getBoolean(key: string): boolean {
		return this.native.getBoolean(key);
	}

	getLong(key: string): number {
		return this.native.getLong(key);
	}

	getValue(key: string): ValueType {
		return deserialize(this.native.getValue(key));
	}

	getBlob(key: string): Blob {
		return Blob.fromNative(this.native.getBlob(key));
	}

	private _json: { [key: string]: any };
	toJSON() {
		if (!this._json) {
			this._json = JSON.parse(this.native.toJSON());
		}
		return this._json;
	}
}

export class MutableDocument extends Document {
	_native: com.couchbase.lite.MutableDocument;

	constructor(id?: string | com.couchbase.lite.MutableDocument) {
		super();
		if (id instanceof com.couchbase.lite.MutableDocument) {
			this._native = id;
			return this;
		}
		if (typeof id === 'string') {
			this._native = new com.couchbase.lite.MutableDocument(id);
		} else {
			this._native = new com.couchbase.lite.MutableDocument();

			if (id != null || (id != undefined && typeof id === 'object')) {
				Object.keys(id).forEach((key) => {
					serialize(id[key], this._native, key);
				});
			}
		}
	}

	static fromNative(document: com.couchbase.lite.MutableDocument): MutableDocument | null {
		if (document instanceof com.couchbase.lite.MutableDocument) {
			return new MutableDocument(document);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	setString(key: string, value: string): this {
		this.native.setString(key, value);
		return this;
	}

	setFloat(key: string, value: number): this {
		this.native.setFloat(key, value);
		return this;
	}

	setDouble(key: string, value: number): this {
		this.native.setDouble(key, value);
		return this;
	}

	setDate(key: string, value: Date): this {
		this.native.setDate(key, fromISO8601UTC(value.toISOString()));
		return this;
	}

	setBoolean(key: string, value: boolean): this {
		this.native.setBoolean(key, value);
		return this;
	}

	setLong(key: string, value: number): this {
		this.native.setLong(key, value);
		return this;
	}

	setArray(key: string, value: Array): this {
		this.native.setArray(key, value.native);
		return this;
	}

	setDictionary(key: string, value: Dictionary): this {
		this.native.setDictionary(key, value.native);
		return this;
	}

	setBlob(key: string, value: Blob): this {
		this.native.setBlob(key, value.native);
		return this;
	}

	toJSON() {
		const keys = this.getKeys();
		const ret = {};
		keys.forEach((key) => {
			ret[key] = this.getValue(key);
		});

		return ret;
	}
}

export class Scope {
	private _native: com.couchbase.lite.Scope;

	static fromNative(value: com.couchbase.lite.Scope): Scope {
		if (value instanceof com.couchbase.lite.Scope) {
			const scope = new Scope();
			scope._native = value;
			return scope;
		}
		return null;
	}
	get native() {
		return this._native;
	}

	get name() {
		return this.native.getName();
	}

	get collections(): Collection[] {
		const collections = this.native.getCollections().toArray();
		const size = collections.length;
		const ret = new global.Array(size);
		for (let i = 0; i < size; i++) {
			ret[i] = Collection.fromNative(collections[i]);
		}
		return ret;
	}

	getCollection(name: string): Collection | null {
		const collection = this.native.getCollection(name);
		if (collection) {
			return Collection.fromNative(collection);
		}
		return null;
	}
}

export class Listener {
	private _native: com.couchbase.lite.ListenerToken;

	static fromNative(value: com.couchbase.lite.ListenerToken) {
		if (value instanceof com.couchbase.lite.ListenerToken) {
			const listener = new Listener();
			listener._native = value;
			return listener;
		}
		return null;
	}

	remove() {
		this._native.remove();
	}
}

export class Index {}

export class ValueIndexConfiguration extends Index {
	private _native: com.couchbase.lite.ValueIndexConfiguration;
	get native() {
		return this._native;
	}
	constructor(expressions: string[]) {
		super();
		const array = global.Array.create('java.lang.String', expressions.length);
		expressions.forEach((value, index) => {
			array[index] = value;
		});
		this._native = new com.couchbase.lite.ValueIndexConfiguration(array);
	}
}

export class FullTextIndexConfiguration extends Index {
	private _native: com.couchbase.lite.FullTextIndexConfiguration;

	constructor(expressions: string[]) {
		super();
		const array = global.Array.create('java.lang.String', expressions.length);
		expressions.forEach((value, index) => {
			array[index] = value;
		});
		this._native = new com.couchbase.lite.FullTextIndexConfiguration(array);
	}

	get native() {
		return this._native;
	}

	setLanguage(language: string): this {
		this.native.setLanguage(language);
		return this;
	}

	getLanguage(): string {
		return this.native.getLanguage();
	}

	isIgnoringAccents(): boolean {
		return this.native.isIgnoringAccents();
	}

	ignoreAccents(ignoreAccents: boolean): this {
		this.native.ignoreAccents(ignoreAccents);
		return this;
	}
}

export class Collection {
	private _native: com.couchbase.lite.Collection;

	private _executor = java.util.concurrent.Executors.newCachedThreadPool();

	static fromNative(value: com.couchbase.lite.Collection): Collection {
		if (value instanceof com.couchbase.lite.Collection) {
			const collection = new Collection();
			collection._native = value;
			return collection;
		}
		return null;
	}
	get native() {
		return this._native;
	}

	addChangeListener(callback: (collection: Collection, documentIDs: string[]) => void): Listener {
		const ref = new WeakRef(this);
		return Listener.fromNative(
			this.native.addChangeListener(
				this._executor,
				new com.couchbase.lite.CollectionChangeListener({
					changed(change: com.couchbase.lite.CollectionChange) {
						const owner = ref.get();
						if (owner) {
							callback(owner, deserialize(change.getDocumentIDs()));
						}
					},
				})
			)
		);
	}

	addDocumentChangeListener(id: string, callback: (id: string, collection: Collection) => void): Listener {
		const ref = new WeakRef(this);
		return Listener.fromNative(
			this.native.addDocumentChangeListener(
				id,
				this._executor,
				new com.couchbase.lite.DocumentChangeListener({
					changed(change: com.couchbase.lite.DocumentChange) {
						const owner = ref.get();
						// const id = change.getDocumentID(); // why when we already have any id
						if (owner) {
							callback(id, owner);
						}
					},
				})
			)
		);
	}

	createIndex(name: string, index: Index): void {
		if (index instanceof ValueIndexConfiguration || index instanceof FullTextIndexConfiguration) {
			this.native.createIndex(name, index.native);
		}
	}

	save(document: MutableDocument, concurrencyMode: ConcurrencyMode = 0) {
		this.native.save(document.native, concurrencyMode === 1 ? com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT : com.couchbase.lite.ConcurrencyControl.LAST_WRITE_WINS);
	}

	delete(document: Document, concurrencyMode: ConcurrencyMode = 0) {
		return this.native.delete(document.native, concurrencyMode === 1 ? com.couchbase.lite.ConcurrencyControl.FAIL_ON_CONFLICT : com.couchbase.lite.ConcurrencyControl.LAST_WRITE_WINS);
	}

	purge(documentOrId: string | Document) {
		if (typeof documentOrId === 'string') {
			this.native.purge(documentOrId);
		} else if (documentOrId instanceof Document) {
			this.native.purge(documentOrId.native);
		}
	}

	close() {
		this.native.close();
	}
	get name() {
		return this.native.getName();
	}
	get count() {
		return this.native.getCount();
	}
	getDocument(documentId: string): Document | null {
		return Document.fromNative(this.native.getDocument(documentId));
	}

	private _scope: Scope;
	get scope() {
		if (!this._scope) {
			this._scope = Scope.fromNative(this.native.getScope());
		}
		return this._scope;
	}

	public getDocumentExpiration(id: string): Date | null {
		const date = this.native.getDocumentExpiration(id);
		if (date) {
			return new Date(date.getTime());
		}
		return null;
	}

	get indexes() {
		const indexes = this.native.getIndexes();
		const items = indexes.toArray();
		const set = new Set<string>();
		for (let i = 0; i < items.length; i++) {
			set.add(items[i]);
		}
		return set;
	}
	public setDocumentExpiration(id: string, date: Date) {
		this.native.setDocumentExpiration(id, fromISO8601UTC(date.toISOString()));
	}

	public deleteIndex(name: string) {
		this.native.deleteIndex(name);
	}
}

export class Stream {
	private _native: NSInputStream;
	static fromNative(stream: NSInputStream): Stream {
		if (stream instanceof NSInputStream) {
			const ret = new Stream();
			ret._native = stream;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}
}

export class CouchBase {
	readonly _config: com.couchbase.lite.DatabaseConfiguration;
	readonly _couchbase: com.couchbase.lite.Database;
	private _defaultCollection?: Collection = null;
	private _defaultScope?: Scope = null;

	constructor(name: string) {
		if (!didInit) {
			didInit = true;
			com.couchbase.lite.CouchbaseLite.init(Utils.android.getApplicationContext());
		}
		this._config = new com.couchbase.lite.DatabaseConfiguration();
		this._couchbase = new com.couchbase.lite.Database(name, this._config);
	}

	get native() {
		return this._couchbase;
	}

	close() {
		this.native.close();
	}

	inBatch(batch: () => void) {
		const unitOfWork = new com.couchbase.lite.UnitOfWork({
			run: () => {
				batch();
			},
		});

		this.native.inBatch(unitOfWork);
	}

	createQuery(query: string) {
		return Query.fromNative(this.native.createQuery(query));
	}

	get defaultCollection() {
		if (this._defaultCollection === null || this._defaultCollection === undefined) {
			this._defaultCollection = Collection.fromNative(this._couchbase.getDefaultCollection());
		}
		return this._defaultCollection;
	}

	get defaultScope() {
		if (this._defaultScope === null || this._defaultScope === undefined) {
			this._defaultScope = Scope.fromNative(this._couchbase.getDefaultScope());
		}
		return this._defaultScope;
	}

	createCollection(name: string, scope?: string) {
		if (scope) {
			return Collection.fromNative(this._couchbase.createCollection(name, scope));
		} else {
			return Collection.fromNative(this._couchbase.createCollection(name));
		}
	}

	getCollection(name: string, scope?: string) {
		if (scope) {
			return Collection.fromNative(this._couchbase.getCollection(name, scope));
		} else {
			return Collection.fromNative(this._couchbase.getCollection(name));
		}
	}

	deleteCollection(name: string, scope?: string) {
		if (scope) {
			this._couchbase.deleteCollection(name, scope);
		} else {
			this._couchbase.deleteCollection(name);
		}
	}

	destroyDatabase() {
		try {
			this.native.delete();
		} catch (e) {
			console.error(e.message);
		}
	}
}

export class QueryBuilder {
	private select: string[] = [QueryMeta.ALL, QueryMeta.ID];
	private from: Collection;
	private where: QueryWhereItem[];
	private groupBy: string[];
	private order: QueryOrderItem[];
	private limit: number;
	private offset: number;

	setSelect(select: string[] = [QueryMeta.ALL, QueryMeta.ID]): this {
		this.select = select;
		return this;
	}

	setFrom(collection: Collection): this {
		this.from = collection;
		return this;
	}

	setWhere(where: QueryWhereItem[]): this {
		this.where = where;
		return this;
	}

	setGroupBy(groupBy: string[]): this {
		this.groupBy = groupBy;
		return this;
	}

	setOrder(order: QueryOrderItem[]): this {
		this.order = order;
		return this;
	}

	setLimit(limit: number): this {
		this.limit = limit;
		return this;
	}

	setOffset(offset: number): this {
		this.offset = offset;
		return this;
	}

	build(): Query {
		if (!this.from) {
			throw new Error('from: Collection not set');
		}
		let select: androidNative.Array<com.couchbase.lite.SelectResult>;
		if (!this.select || this.select.length === 0) {
			select = global.Array.create('com.couchbase.lite.SelectResult', 2);
			select[0] = com.couchbase.lite.SelectResult.all();
			select[1] = com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id);
		} else {
			select = global.Array.create('com.couchbase.lite.SelectResult', this.select.length);
			this.select.forEach((item, index) => {
				if (item === QueryMeta.ID) {
					select[index] = com.couchbase.lite.SelectResult.expression(com.couchbase.lite.Meta.id);
				} else if (item === QueryMeta.ALL) {
					select[index] = com.couchbase.lite.SelectResult.all();
				} else {
					select[index] = com.couchbase.lite.SelectResult.property(item);
				}
			});
		}
		let queryBuilder: com.couchbase.lite.Select | com.couchbase.lite.From | com.couchbase.lite.Where | com.couchbase.lite.GroupBy | com.couchbase.lite.OrderBy | com.couchbase.lite.Limit = com.couchbase.lite.QueryBuilder.select(select).from(com.couchbase.lite.DataSource.collection(this.from.native));

		let nativeQuery = null;
		if (global.Array.isArray(this.where)) {
			for (const item of this.where) {
				if (item.logical === QueryLogicalOperator.AND) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.and(setComparison(item));
				} else if (item.logical === QueryLogicalOperator.OR) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.or(setComparison(item));
				} else {
					nativeQuery = setComparison(item);
				}
			}
			if (nativeQuery) {
				queryBuilder = (<com.couchbase.lite.From>queryBuilder).where(nativeQuery);
			}
		}
		if (global.Array.isArray(this.groupBy)) {
			const groupBy: com.couchbase.lite.Expression[] = global.Array.create('com.couchbase.lite.Expression', this.groupBy.length);

			this.groupBy.forEach((prop, index) => {
				groupBy[index] = com.couchbase.lite.Expression.property(prop);
			});

			if (groupBy.length > 0) {
				queryBuilder = (<com.couchbase.lite.From>queryBuilder).groupBy(groupBy);
			}
		}
		if (global.Array.isArray(this.order)) {
			const orderBy: com.couchbase.lite.Ordering[] = global.Array.create('com.couchbase.lite.Ordering', this.order.length);

			this.order.forEach((item, index) => {
				if (item.direction === 'desc') {
					orderBy[index] = com.couchbase.lite.Ordering.property(item.property).descending();
				} else {
					orderBy[index] = com.couchbase.lite.Ordering.property(item.property).ascending();
				}
			});

			if (orderBy.length > 0) {
				queryBuilder = (<com.couchbase.lite.From>queryBuilder).orderBy(orderBy);
			}
		}

		if (typeof this.limit === 'number') {
			if (typeof this.offset === 'number') {
				queryBuilder = (<com.couchbase.lite.From>queryBuilder).limit(com.couchbase.lite.Expression.intValue(this.limit), com.couchbase.lite.Expression.intValue(this.offset));
			} else {
				queryBuilder = (<com.couchbase.lite.From>queryBuilder).limit(com.couchbase.lite.Expression.intValue(this.limit));
			}
		}

		return Query.fromNative(queryBuilder);
	}
}

export class Result {
	private _native: com.couchbase.lite.Result;

	static fromNative(result: com.couchbase.lite.Result) {
		if (result instanceof com.couchbase.lite.Result) {
			const ret = new Result();
			ret._native = result;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	getDouble(key: string): number;
	getDouble(index: number): number;
	getDouble(keyOrIndex: any): number {
		return this.native.getDouble(keyOrIndex);
	}

	getString(key: string): string;
	getString(index: number): string;
	getString(keyOrIndex: any): string {
		return this.native.getString(keyOrIndex);
	}

	getDictionary(key: string): Dictionary;
	getDictionary(index: number): Dictionary;
	getDictionary(keyOrIndex: any): Dictionary {
		return Dictionary.fromNative(this.native.getDictionary(keyOrIndex) as never);
	}

	getLong(key: string): number;
	getLong(index: number): number;
	getLong(keyOrIndex: any): number {
		return this.native.getLong(keyOrIndex);
	}

	getBoolean(key: string): boolean;
	getBoolean(index: number): boolean;
	getBoolean(keyOrIndex: any): boolean {
		return this.native.getBoolean(keyOrIndex);
	}

	getFloat(key: string): number;
	getFloat(index: number): number;
	getFloat(keyOrIndex: any): number {
		return this.native.getFloat(keyOrIndex);
	}

	getInt(key: string): number;
	getInt(index: number): number;
	getInt(keyOrIndex: any): number {
		return this.native.getInt(keyOrIndex);
	}

	getBlob(key: string): Blob;
	getBlob(index: number): Blob;
	getBlob(keyOrIndex: any): Blob {
		return Blob.fromNative(this.native.getBlob(keyOrIndex));
	}

	getDate(key: string): Date;
	getDate(index: number): Date;
	getDate(keyOrIndex: any): Date {
		const date = this.native.getDate(keyOrIndex);
		return new Date(date.getTime());
	}

	getArray(key: string): Array;
	getArray(index: number): Array;
	getArray(keyOrIndex: any): Array {
		return Array.fromNative(this.native.getArray(keyOrIndex) as never);
	}

	getKeys(): string[] {
		const keys = this.native.getKeys().toArray();
		const ret = [];
		for (let i = 0; i < keys.length; i++) {
			ret[i] = keys[i];
		}
		return ret;
	}

	getValue(key: string): Array;
	getValue(index: number): Array;
	getValue(keyOrIndex: any): Array {
		return deserialize(this.native.getValue(keyOrIndex));
	}

	get count(): number {
		return this.native.count();
	}
	public toJSON() {
		return JSON.parse(this.native.toJSON());
	}
}
export class ResultSet {
	private _executor = java.util.concurrent.Executors.newCachedThreadPool();

	private _native: com.couchbase.lite.ResultSet;

	static fromNative(set: com.couchbase.lite.ResultSet) {
		if (set instanceof com.couchbase.lite.ResultSet) {
			const ret = new ResultSet();
			ret._native = set;
			return ret;
		}
		return;
	}

	get native() {
		return this._native;
	}

	// result set should never changed
	private _allResults: Result[];
	allResults() {
		if (this._allResults !== undefined) {
			return this._allResults;
		}
		const results = this.native.allResults();
		const size = results.size();
		const ret = new global.Array(size);
		for (let i = 0; i < size; i++) {
			ret[i] = Result.fromNative(results.get(i));
		}

		this._allResults = ret;

		return ret;
	}

	[Symbol.iterator] = () => {
		return {
			native: this.native,
			next() {
				const next = this.native.next();
				const done = !next;
				return { value: Result.fromNative(next), done: done };
			},
		};
	};

	async *[Symbol.asyncIterator]() {
		const next = await asyncNext(this._executor, this.native);
		const done = !next;
		if (!done) {
			yield Result.fromNative(next);
		}
		return { done: done };
	}
}

function asyncNext(queue, result) {
	return new Promise<com.couchbase.lite.Result>((resolve, reject) => {
		(com as any).github.triniwiz.couchbase.Couchbase.asyncNext(
			queue,
			result,
			new kotlin.jvm.functions.Function1({
				invoke(result) {
					resolve(result);
				},
			})
		);
	});
}

export class Query {
	private _native: com.couchbase.lite.Query;

	private _executor = java.util.concurrent.Executors.newCachedThreadPool();

	static fromNative(query: com.couchbase.lite.Query | com.couchbase.lite.QueryBuilder): Query | null {
		if (query instanceof com.couchbase.lite.QueryBuilder || query instanceof com.couchbase.lite.Query) {
			const ret = new Query();
			ret._native = query as never;
			return ret;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	addChangeListener(callback: (query: Query, results: ResultSet, error: any) => void): Listener {
		const ref = new WeakRef(this);
		return Listener.fromNative(
			this.native.addChangeListener(
				this._executor,
				new com.couchbase.lite.QueryChangeListener({
					changed(change: com.couchbase.lite.QueryChange) {
						const owner = ref.get();
						if (owner) {
							callback(owner, ResultSet.fromNative(change.getResults()), change.getError());
						}
					},
				})
			)
		);
	}

	execute() {
		return ResultSet.fromNative(this.native.execute());
	}
}

export class Replicator {
	replicator: com.couchbase.lite.Replicator;

	constructor(remoteUrl: string, direction: 'push' | 'pull' | 'both') {
		const uri = new com.couchbase.lite.URLEndpoint(new java.net.URI(remoteUrl));
		const repConfig = new com.couchbase.lite.ReplicatorConfiguration(uri);
		if (direction === 'pull') {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PULL);
		} else if (direction === 'push') {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PUSH);
		} else {
			repConfig.setType(com.couchbase.lite.ReplicatorType.PUSH_AND_PULL);
		}

		this.replicator = new com.couchbase.lite.Replicator(repConfig);
	}

	start() {
		this.replicator.start();
	}

	stop() {
		this.replicator.stop();
	}

	isRunning() {
		return this.replicator.getStatus().getActivityLevel() === com.couchbase.lite.ReplicatorActivityLevel.BUSY;
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

	addCollection(collection: Collection) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		const config = new com.couchbase.lite.CollectionConfiguration();
		newConfig.addCollection(collection.native, config);
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}

	addCollections(collections: Collection[]) {
		if (global.Array.isArray(collections)) {
			const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
			const config = new com.couchbase.lite.CollectionConfiguration();
			newConfig.addCollections(java.util.Arrays.asList(collections), config);
			this.replicator = new com.couchbase.lite.Replicator(newConfig);
		}
	}

	setChannels(collection: Collection, channels: string[]) {
		const newConfig = new com.couchbase.lite.ReplicatorConfiguration(this.replicator.getConfig());
		const config = newConfig.collectionConfigurations.get(collection.native);
		if (config) {
			config.setChannels(java.util.Arrays.asList(channels));
			newConfig.collectionConfigurations.put(collection.native, config);
		}
		this.replicator = new com.couchbase.lite.Replicator(newConfig);
	}
}

export class Blob {
	private _native: com.couchbase.lite.Blob;

	static fromFile(mimeType: string, file: string) {
		if (typeof file === 'string') {
			const blob = new Blob();
			if (file.startsWith(`file`)) {
				blob._native = new com.couchbase.lite.Blob(mimeType, new java.net.URL(file));
				return blob;
			} else if (file.startsWith(`/`)) {
				blob._native = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${file}`));
				return blob;
			} else if (file.startsWith(`~`)) {
				const filePath = path.join(knownFolders.currentApp().path, file.replace('~', ''));
				blob._native = new com.couchbase.lite.Blob(mimeType, new java.net.URL(`file://${filePath}`));
				return blob;
			} else if (file.startsWith(`res`)) {
				const ctx = Utils.android.getApplicationContext() as android.content.Context;
				const is = ctx.getAssets().open(file.replace('res://', ''));
				blob._native = new com.couchbase.lite.Blob(mimeType, is);
				return blob;
			} else if (file.startsWith('content:')) {
				const ctx = Utils.android.getApplicationContext() as android.content.Context;
				const is = ctx.getContentResolver().openInputStream(android.net.Uri.parse(file));
				blob._native = new com.couchbase.lite.Blob(mimeType, is);
				return blob;
			}
		}
		return null;
	}

	static fromBytes(mimeType: string, content: any) {
		try {
			const blob = new Blob();
			blob._native = new com.couchbase.lite.Blob(mimeType, content);
			return blob;
		} catch (error) {
			return null;
		}
	}

	static fromNative(value: com.couchbase.lite.Blob): Blob | null {
		if (value instanceof com.couchbase.lite.Blob) {
			const blob = new Blob();
			blob._native = value;
			return blob;
		}
		return null;
	}

	get native() {
		return this._native;
	}

	get android() {
		return this._native;
	}

	get content(): any {
		if (!this.native) return null;
		return this.native.getContent();
	}

	get contentStream(): any {
		if (!this.native) return null;
		return this.native.getContentStream();
	}

	get contentType(): string {
		if (!this.native) return null;
		return this.native.getContentType();
	}

	get length(): number {
		if (!this.native) return 0;
		return this.native.length();
	}

	get digest(): string {
		if (!this.android) return null;
		return this.native.digest();
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
