import { getClass } from '@nativescript/core/utils/types';
import { Utils, knownFolders, path } from '@nativescript/core';
import { ValueType, ObjectType, QueryWhereItem, QueryOrderItem, QueryComparisonOperator, ConcurrencyMode } from '.';

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

function deserialize(value: any) {
	if (value === null || value === undefined) {
		return null;
	}

	switch (getClass(value)) {
		case 'NSNull':
			return null;
		case 'NSMutableDictionary':
		case 'NSDictionary': {
			const obj = {};
			const length = value.count;
			const keysArray = value.allKeys;
			for (let i = 0; i < length; i++) {
				const nativeKey = keysArray.objectAtIndex(i);
				obj[nativeKey] = deserialize(value.objectForKey(nativeKey));
			}
			return obj;
		}
		case 'NSMutableArray':
		case 'NSArray': {
			const array = [];
			const len = value.count;
			for (let i = 0; i < len; i++) {
				array[i] = deserialize(value.objectAtIndex(i));
			}
			return array;
		}
		case 'CBLDictionary':
			return Dictionary.fromNative(value);
		case 'CBLMutableDictionary':
			return MutableDictionary.fromNative(value);
		case 'CBLArray':
			return Array.fromNative(value);
		case 'CBLMutableArray':
			return MutableArray.fromNative(value);

		default:
			return value;
	}
}

function serializeObject(item: ValueType, object: CBLMutableDictionary, key: string) {
	if (item === null) {
		object.setValueForKey(null, key);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				object.setDateForKey(item, key);
				return;
			}

			if (global.Array.isArray(item)) {
				const array = CBLMutableArray.new();
				item.forEach((data) => {
					serializeArray(data, array);
				});
				object.setArrayForKey(array, key);
				return;
			}

			const nativeObject = CBLMutableDictionary.new();
			Object.keys(item).forEach((itemKey) => {
				const obj = item[itemKey];
				serializeObject(obj, nativeObject, itemKey);
			});
			object.setDictionaryForKey(nativeObject, key);
			break;
		}
		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					object.setDoubleForKey(item, key);
				} else {
					object.setLongLongForKey(item, key);
				}
			} else {
				if (numberHasDecimals(item)) {
					object.setFloatForKey(item, key);
				} else {
					object.setIntegerForKey(item, key);
				}
			}
			break;
		case 'boolean':
			object.setBooleanForKey(item, key);
			break;
		default:
			object.setValueForKey(item, key);
	}
}

function serializeArray(item: ValueType, array: CBLMutableArray) {
	if (item === null) {
		array.addValue(null);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				array.addDate(item);
				return;
			}

			if (global.Array.isArray(item)) {
				const nativeArray = CBLMutableArray.new();
				item.forEach((data) => {
					serializeArray(data, nativeArray);
				});
				array.addArray(nativeArray);
				return;
			}

			const object = CBLMutableDictionary.new();
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
					array.addLongLong(item);
				}
			} else {
				if (numberHasDecimals(item)) {
					array.addFloat(item);
				} else {
					array.addInteger(item);
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

function serialize(item: ValueType, doc: CBLMutableDocument, key: string) {
	if (item === null) {
		doc.setValueForKey(null, key);
		return;
	}

	switch (typeof item) {
		case 'object': {
			if (item instanceof Date) {
				doc.setDateForKey(item, key);
				return;
			}

			if (global.Array.isArray(item)) {
				const array = CBLMutableArray.new();
				item.forEach((data) => {
					serializeArray(data, array);
				});
				doc.setArrayForKey(array, key);
				return;
			}

			const object = CBLMutableDictionary.new();
			Object.keys(item).forEach((itemKey) => {
				const obj = item[itemKey];
				serializeObject(obj, object, itemKey);
			});
			doc.setDictionaryForKey(object, key);
			break;
		}
		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					doc.setDoubleForKey(item, key);
				} else {
					doc.setLongLongForKey(item, key);
				}
			} else {
				if (numberHasDecimals(item)) {
					doc.setFloatForKey(item, key);
				} else {
					doc.setIntegerForKey(item, key);
				}
			}
			break;
		case 'boolean':
			doc.setBooleanForKey(item, key);
			break;
		default:
			doc.setValueForKey(item, key);
	}
}

function numberHasDecimals(item: number) {
	return !(item % 1 === 0);
}

function numberIs64Bit(item: number) {
	return item < -Math.pow(2, 31) + 1 || item > Math.pow(2, 31) - 1;
}

function getExtension(mimeType: string) {
	if (!mimeType) return 'bin';
	for (const key of Object.keys(mimeTypes)) {
		const mime = mimeType[key];
		if (typeof mimeType === 'string' && mimeType.indexOf(mime) > -1) {
			return key;
		}
	}
	return 'bin';
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
			return CBLQueryExpression.string(item);
		case 'object':
			if (item instanceof Date) {
				return CBLQueryExpression.date(fromISO8601UTC(item.toISOString()));
			}
			return CBLQueryExpression.value(item);

		case 'number':
			if (numberIs64Bit(item)) {
				if (numberHasDecimals(item)) {
					return CBLQueryExpression.double(item);
				} else {
					return CBLQueryExpression.longLong(item);
				}
			} else {
				if (numberHasDecimals(item)) {
					return CBLQueryExpression.float(item);
				} else {
					return CBLQueryExpression.integer(item);
				}
			}
		case 'boolean':
			return CBLQueryExpression.boolean(item);
		default:
			return CBLQueryExpression.value(item);
	}
}

function setComparison(item) {
	let nativeQuery;
	switch (item.comparison as QueryComparisonOperator) {
		case 'equalTo':
			nativeQuery = CBLQueryExpression.property(item.property).equalTo(serializeExpression(item.value));
			break;
		case 'add':
			nativeQuery = CBLQueryExpression.property(item.property).add(serializeExpression(item.value));
			break;
		case 'between':
			if (global.Array.isArray(item.value) && item.value.length === 2) {
				nativeQuery = CBLQueryExpression.property(item.property).between(serializeExpression(item.value[0])).andExpression(serializeExpression(item.value[1]));
			}
			break;
		case 'contains':
			nativeQuery = CBLQueryArrayFunction.containsValue(CBLQueryExpression.property(item.property), serializeExpression(item.value));
			break;
		case 'collate':
			nativeQuery = CBLQueryExpression.property(item.property).collate(serializeExpression(item.value));
			break;
		case 'divide':
			nativeQuery = CBLQueryExpression.property(item.property).divide(serializeExpression(item.value));
			break;
		case 'greaterThan':
			nativeQuery = CBLQueryExpression.property(item.property).greaterThan(serializeExpression(item.value));
			break;
		case 'greaterThanOrEqualTo':
			nativeQuery = CBLQueryExpression.property(item.property).greaterThanOrEqualTo(serializeExpression(item.value));
			break;
		case 'in':
			{
				const inArray = NSMutableArray.new<CBLQueryExpression>();
				if (global.Array.isArray(item.value)) {
					for (const exp of item.value) {
						inArray.addObject(serializeExpression(exp));
					}
				} else {
					inArray.addObject(serializeExpression(item.value));
				}
				nativeQuery = CBLQueryExpression.property(item.property).in(inArray);
			}
			break;
		case 'is':
			nativeQuery = CBLQueryExpression.property(item.property).is(serializeExpression(item.value));
			break;
		case 'isNot':
			nativeQuery = CBLQueryExpression.property(item.property).isNot(serializeExpression(item.value));
			break;
		case 'isNullOrMissing':
		case 'isNotValued':
			nativeQuery = CBLQueryExpression.property(item.property).isNotValued();
			break;
		case 'lessThan':
			nativeQuery = CBLQueryExpression.property(item.property).lessThan(serializeExpression(item.value));
			break;
		case 'lessThanOrEqualTo':
			nativeQuery = CBLQueryExpression.property(item.property).lessThanOrEqualTo(serializeExpression(item.value));
			break;
		case 'like':
			nativeQuery = CBLQueryFunction.lower(CBLQueryExpression.property(item.property)).like(serializeExpression(item.value));
			break;
		case 'modulo':
			nativeQuery = CBLQueryExpression.property(item.property).modulo(serializeExpression(item.value));
			break;
		case 'multiply':
			nativeQuery = CBLQueryExpression.property(item.property).multiply(serializeExpression(item.value));
			break;
		case 'notEqualTo':
			nativeQuery = CBLQueryExpression.property(item.property).notEqualTo(serializeExpression(item.value));
			break;
		case 'notNullOrMissing':
		case 'isValued':
			nativeQuery = CBLQueryExpression.property(item.property).isValued();
			break;
		case 'regex':
			nativeQuery = CBLQueryExpression.property(item.property).regex(serializeExpression(item.value));
			break;
		case 'subtract':
			nativeQuery = CBLQueryExpression.property(item.property).subtract(serializeExpression(item.value));
			break;
	}
	return nativeQuery;
}

export class Dictionary {
	protected _native: CBLDictionary;

	static fromNative(value: CBLDictionary): Dictionary {
		if (value instanceof CBLDictionary) {
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
		const keys = this.native.keys;
		const ret = [];
		for (let i = 0; i < keys.count; i++) {
			ret[i] = keys[i];
		}
		return ret;
	}

	getValue(key: string): any {
		return deserialize(this.native.valueForKey(key));
	}

	public getNumber(key: string): number {
		return this.native.numberForKey(key);
	}
	public toMutable(): MutableDictionary {
		return MutableDictionary.fromNative(this.native.toMutable());
	}
	public contains(key: string): boolean {
		return this.native.containsValueForKey(key);
	}
	public getBoolean(key: string): boolean {
		return this.native.booleanForKey(key);
	}
	public getDictionary(key: string): Dictionary {
		return Dictionary.fromNative(this.native.dictionaryForKey(key));
	}

	public getString(key: string): string {
		return this.native.stringForKey(key);
	}
	public getFloat(key: string): number {
		return this.native.floatForKey(key);
	}
	public getBlob(key: string): Blob {
		return Blob.fromNative(this.native.blobForKey(key));
	}
	public isEmpty(): boolean {
		return this.native.count === 0;
	}
	public getLong(key: string): number {
		return this.native.longLongForKey(key);
	}
	public getDouble(key: string): number {
		return this.native.doubleForKey(key);
	}

	public getDate(key: string): Date {
		return this.native.dateForKey(key);
	}
	public get count(): number {
		return this.native.count;
	}
	public toJSON(): string {
		return JSON.parse(this.native.toJSON());
	}

	public getInt(key: string): number {
		return this.native.integerForKey(key);
	}
	public getArray(key: string): Array {
		return Array.fromNative(this.native.arrayForKey(key));
	}
}

export class MutableDictionary extends Dictionary {
	protected _native: CBLMutableDictionary;

	constructor(value: ObjectType | CBLMutableDictionary) {
		super();
		if (value instanceof CBLMutableDictionary) {
			this._native = value as any;
		} else {
			this._native = CBLMutableDictionary.new();

			if (value !== null || (value !== undefined && typeof value === 'object')) {
				Object.keys(value).forEach((key) => {
					serializeObject(value[key], this._native, key);
				});
			}
		}
	}

	static fromNative(value: CBLMutableDictionary): MutableDictionary {
		if (value instanceof CBLMutableDictionary) {
			return new MutableDictionary(value);
		}
		return null;
	}

	get native() {
		return this._native;
	}
	public setDate(key: string, value: Date): this {
		this.native.setDateForKey(value, key);
		return this;
	}
	public setBoolean(key: string, value: boolean): this {
		this.native.setBooleanForKey(value, key);
		return this;
	}

	public setBlob(key: string, blob: Blob): this {
		this.native.setBlobForKey(blob.native, key);
		return this;
	}

	public remove(key: string): this {
		this.native.removeValueForKey(key);
		return this;
	}
	public setDictionary(key: string, value: Dictionary): this {
		this.native.setDictionaryForKey(value.native, key);
		return this;
	}

	public setInt(key: string, value: number): this {
		this.native.setIntegerForKey(value, key);
		return this;
	}
	public setLong(key: string, value: number): this {
		this.native.setLongLongForKey(value, key);
		return this;
	}

	public setData(value: Map<string, ValueType>): this {
		if (value instanceof Map) {
			const keys = value.keys();
		}
		return this;
	}

	public setArray(key: string, value: Array): this {
		this.native.setArrayForKey(value.native, key);
		return this;
	}
	public setFloat(key: string, value: number): this {
		this.native.setFloatForKey(value, key);
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
			this.native.setValueForKey(native, key);
		}
		return this;
	}

	public setString(key: string, value: string): this {
		this.native.setStringForKey(value, key);
		return this;
	}

	public setDouble(key: string, value: number): this {
		this.native.setDoubleForKey(value, key);
		return this;
	}
}

export class Array {
	_native: CBLArray;

	get native() {
		return this._native;
	}

	static fromNative(value: CBLArray): Array | null {
		if (value instanceof CBLArray) {
			const array = new (<any>Array)();
			array._native = value;
			return array;
		}
		return null;
	}
	public getDouble(index: number): number {
		return this.native.doubleAtIndex(index);
	}
	public getString(index: number): string {
		return this.native.stringAtIndex(index);
	}
	public getDictionary(index: number): Dictionary {
		return Dictionary.fromNative(this.native.dictionaryAtIndex(index) as CBLDictionary);
	}
	//public getNumber(index: number): java.lang.Number;
	public toMutable(): MutableArray {
		return MutableArray.fromNative(this.native.toMutable());
	}

	public getLong(index: number): number {
		return this.native.longLongAtIndex(index);
	}

	public getInt(index: number): number {
		return this.native.integerAtIndex(index);
	}

	public getDate(index: number): Date {
		return this.native.dateAtIndex(index);
	}
	public getBoolean(index: number): boolean {
		return this.native.booleanAtIndex(index);
	}

	public getBlob(index: number): Blob {
		return Blob.fromNative(this.native.blobAtIndex(index));
	}
	public getValue(index: number): any {
		return deserialize(this.native.valueAtIndex(index));
	}
	public get count(): number {
		return this.native.count;
	}
	toJSON() {
		return JSON.parse(this.native.toJSON());
	}
	public getArray(index: number): Array {
		return Array.fromNative(this.native.arrayAtIndex(index) as CBLArray);
	}
	public getFloat(index: number): number {
		return this.native.floatAtIndex(index);
	}
}

export class MutableArray extends Array {
	_native: CBLMutableArray;

	constructor(value: ObjectType[] | CBLMutableArray) {
		super();
		if (value instanceof CBLMutableArray) {
			this._native = value;
		} else {
			this._native = CBLMutableArray.new();

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

	static fromNative(value: CBLMutableArray): MutableArray {
		if (value instanceof CBLMutableArray) {
			return new MutableArray(value);
		}
		return null;
	}

	public addDictionary(value: Dictionary): this {
		this.native.addDictionary(value.native);
		return this;
	}
	public insertDictionary(index: number, value: Dictionary): this {
		this.native.insertDictionaryAtIndex(value.native, index);
		return this;
	}

	public setDictionary(index: number, value: Dictionary): this {
		this.native.setDictionaryAtIndex(value.native, index);
		return this;
	}

	public addArray(value: Array): this {
		this.native.addArray(value.native);
		return this;
	}

	public insertArray(index: number, value: Array): this {
		this.native.insertArrayAtIndex(value.native, index);
		return this;
	}

	public setArray(index: number, value: Array): this {
		this.native.setArrayAtIndex(value.native, index);
		return this;
	}

	public addDate(value: Date): this {
		this.native.addDate(value);
		return this;
	}

	public insertDate(index: number, value: Date): this {
		this.native.insertDateAtIndex(value, index);
		return this;
	}

	public setDate(index: number, value: Date): this {
		this.native.setDateAtIndex(value, index);
		return this;
	}

	public addDouble(value: number): this {
		this.native.addDouble(value);
		return this;
	}

	public insertDouble(index: number, value: number): this {
		this.native.insertDoubleAtIndex(value, index);
		return this;
	}

	public setDouble(index: number, value: number): this {
		this.native.setDoubleAtIndex(value, index);
		return this;
	}

	public remove(index: number): this {
		this.native.removeValueAtIndex(index);
		return this;
	}

	public addFloat(value: number): this {
		this.native.addFloat(value);
		return this;
	}

	public insertFloat(index: number, value: number): this {
		this.native.insertFloatAtIndex(value, index);
		return this;
	}

	public setFloat(index: number, value: number): this {
		this.native.setFloatAtIndex(value, index);
		return this;
	}

	public addInt(value: number): this {
		this.native.addInteger(value);
		return this;
	}

	public insertInt(index: number, value: number): this {
		this.native.insertIntegerAtIndex(value, index);
		return this;
	}

	public setInt(index: number, value: number): this {
		this.native.setIntegerAtIndex(value, index);
		return this;
	}

	public addBoolean(value: boolean): this {
		this.native.addBoolean(value);
		return this;
	}

	public insertBoolean(index: number, value: boolean): this {
		this.native.insertBooleanAtIndex(value, index);
		return this;
	}

	public setBoolean(index: number, value: boolean): this {
		this.native.setBooleanAtIndex(value, index);
		return this;
	}

	public addLong(value: number): this {
		this.native.addLongLong(value);
		return this;
	}

	public insertLong(index: number, value: number): this {
		this.native.insertLongLongAtIndex(value, index);
		return this;
	}

	public setLong(index: number, value: number): this {
		this.native.setLongLongAtIndex(value, index);
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
		this.native.insertStringAtIndex(value, index);
		return this;
	}

	public setString(index: number, value: string): this {
		this.native.setStringAtIndex(value, index);
		return this;
	}

	public insertValue(index: number, value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.insertValueAtIndex(native, index);
		}
		return this;
	}

	public setValue(index: number, value: ValueType): this {
		const native = valueToObject(value);
		if (native !== undefined) {
			this.native.setValueAtIndex(native, index);
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
		this.native.setBlobAtIndex(value.native, index);
		return this;
	}

	public insertBlob(index: number, value: Blob): this {
		this.native.insertBlobAtIndex(value.native, index);
		return this;
	}
}

export class Document {
	_native: CBLDocument;

	get native() {
		return this._native;
	}

	static fromNative(document: CBLDocument): Document | null {
		if (document instanceof CBLDocument) {
			const doc = new Document();
			doc._native = document;
			return doc;
		}
		return null;
	}

	getKeys(): string[] {
		const keys = this.native.keys;
		const count = keys.count;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret[i] = keys.objectAtIndex(i);
		}
		return ret;
	}

	toMutable(): MutableDocument {
		return MutableDocument.fromNative(this.native.toMutable());
	}

	getString(key: string): string {
		return this.native.stringForKey(key);
	}

	getFloat(key: string): number {
		return this.native.floatForKey(key);
	}

	getBoolean(key: string): boolean {
		return this.native.booleanForKey(key);
	}

	getLong(key: string): number {
		return this.native.longLongForKey(key);
	}

	getArray(key: string): Array {
		return Array.fromNative(this.native.arrayForKey(key));
	}

	getDictionary(key: string): Dictionary {
		return Dictionary.fromNative(this.native.dictionaryForKey(key));
	}

	getValue(key: string): ValueType {
		return deserialize(this.native.valueForKey(key));
	}

	getBlob(key: string): Blob {
		return Blob.fromNative(this.native.blobForKey(key));
	}

	_json: { [key: string]: any };
	toJSON() {
		if (!this._json) {
			this._json = JSON.parse(this.native.toJSON());
		}
		return this._json;
	}
}

export class MutableDocument extends Document {
	_native: CBLMutableDocument;

	constructor(id?: string | ValueType | CBLMutableDocument) {
		super();
		if (<any>id instanceof CBLMutableDocument) {
			this._native = id as any;
			return this;
		}
		if (typeof id === 'string') {
			this._native = CBLMutableDocument.alloc().initWithID(id);
		} else {
			this._native = CBLMutableDocument.new();
			if (id != null || (id != undefined && typeof id === 'object')) {
				Object.keys(id).forEach((key) => {
					serialize(id[key], this._native, key);
				});
			}
		}
	}

	static fromNative(document: CBLMutableDocument): MutableDocument | null {
		if (document instanceof CBLMutableDocument) {
			return new MutableDocument(document);
		}
		return null;
	}

	get native() {
		return this._native;
	}

	setString(key: string, value: string): this {
		this.native.setStringForKey(value, key);
		return this;
	}

	setFloat(key: string, value: number): this {
		this.native.setFloatForKey(value, key);
		return this;
	}

	setDouble(key: string, value: number): this {
		this.native.setDoubleForKey(value, key);
		return this;
	}

	setDate(key: string, value: Date): this {
		this.native.setDateForKey(value, key);
		return this;
	}

	setBoolean(key: string, value: boolean): this {
		this.native.setBooleanForKey(value, key);
		return this;
	}

	setLong(key: string, value: number): this {
		this.native.setLongLongForKey(value, key);
		return this;
	}

	setArray(key: string, value: Array): this {
		this.native.setArrayForKey(value.native, key);
		return this;
	}

	setDictionary(key: string, value: Dictionary): this {
		this.native.setDictionaryForKey(value.native, key);
		return this;
	}

	setBlob(key: string, value: Blob): this {
		this.native.setBlobForKey(value.native, key);
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
	private _native: CBLScope;

	static fromNative(value: CBLScope): Scope {
		if (value instanceof CBLScope) {
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
		return this.native.name;
	}

	get collections(): Collection[] {
		const collections = this.native.collections();
		const size = collections.count;
		const ret = new global.Array(size);
		for (let i = 0; i < size; i++) {
			ret[i] = Collection.fromNative(collections.objectAtIndex(i));
		}
		return ret;
	}

	getCollection(name: string): Collection | null {
		const collection = this.native.collectionWithNameError(name);
		if (collection) {
			return Collection.fromNative(collection);
		}
		return null;
	}
}

export class Listener {
	private _native: CBLListenerToken;

	static fromNative(value: CBLListenerToken) {
		if (value?.conformsToProtocol(CBLListenerToken)) {
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
	private _native: CBLValueIndexConfiguration;
	get native() {
		return this._native;
	}
	constructor(expressions: string[]) {
		super();
		const array = NSMutableArray.new<string>();
		expressions.forEach((value, index) => {
			array.insertObjectAtIndex(value, index);
		});
		this._native = CBLValueIndexConfiguration.alloc().initWithExpression(array);
	}
}

export class FullTextIndexConfiguration extends Index {
	private _native: CBLFullTextIndexConfiguration;
	private _expressions: NSMutableArray<string>;
	constructor(expressions: string[]) {
		super();
		const array = NSMutableArray.new<string>();
		expressions.forEach((value, index) => {
			array.insertObjectAtIndex(value, index);
		});
		this._expressions = array;
		this._native = CBLFullTextIndexConfiguration.alloc().initWithExpressionIgnoreAccentsLanguage(array, false, null);
	}

	get native() {
		return this._native;
	}

	setLanguage(language: string): this {
		this._native = CBLFullTextIndexConfiguration.alloc().initWithExpressionIgnoreAccentsLanguage(this._expressions, this.isIgnoringAccents(), language);
		return this;
	}

	getLanguage(): string {
		return this.native.language;
	}

	isIgnoringAccents(): boolean {
		return this.native.ignoreAccents;
	}

	ignoreAccents(ignoreAccents: boolean): this {
		this._native = CBLFullTextIndexConfiguration.alloc().initWithExpressionIgnoreAccentsLanguage(this._expressions, ignoreAccents, this.getLanguage());
		return this;
	}
}

declare const NSCCouchbase;
export class Collection {
	private _native: CBLCollection;
	private _queue = NSCCouchbase.createQueue(`ns_cb_queue_${Date.now()}`, true);

	static fromNative(value: CBLCollection): Collection {
		if (value instanceof CBLCollection) {
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
		return Listener.fromNative(
			this.native.addChangeListenerWithQueueListener(this._queue, (change) => {
				callback(this, Utils.ios.collections.nsArrayToJSArray(change.documentIDs));
			}),
		);
	}

	addDocumentChangeListener(id: string, callback: (id: string, collection: Collection) => void): Listener {
		const ref = new WeakRef(this);

		return Listener.fromNative(
			this.native.addDocumentChangeListenerWithIDQueueListener(id, this._queue, (change) => {
				const owner = ref.get();
				// const id = change.getDocumentID(); // why when we already have any id
				if (owner) {
					callback(id, owner);
				}
			}),
		);
	}

	createIndex(name: string, index: Index): void {
		if (index instanceof ValueIndexConfiguration || index instanceof FullTextIndexConfiguration) {
			this.native.createIndexNameError(index.native, name);
		}
	}

	save(document: MutableDocument, concurrencyMode: ConcurrencyMode = 0) {
		this.native.saveDocumentConcurrencyControlError(document.native, concurrencyMode === 1 ? CBLConcurrencyControl.kCBLConcurrencyControlFailOnConflict : CBLConcurrencyControl.kCBLConcurrencyControlLastWriteWins);
	}

	delete(document: Document, concurrencyMode: ConcurrencyMode = 0) {
		return this.native.deleteDocumentConcurrencyControlError(document.native, concurrencyMode === 1 ? CBLConcurrencyControl.kCBLConcurrencyControlFailOnConflict : CBLConcurrencyControl.kCBLConcurrencyControlLastWriteWins);
	}

	purge(documentOrId: string | Document) {
		if (typeof documentOrId === 'string') {
			this.native.purgeDocumentWithIDError(documentOrId);
		} else if (documentOrId instanceof Document) {
			this.native.purgeDocumentError(documentOrId.native);
		}
	}

	close() {
		// noop
	}

	get name() {
		return this.native.name;
	}
	get count() {
		return this.native.count;
	}
	getDocument(documentId: string): Document | null {
		return Document.fromNative(this.native.documentWithIDError(documentId));
	}

	private _scope: Scope;
	get scope() {
		if (!this._scope) {
			this._scope = Scope.fromNative(this.native.scope);
		}
		return this._scope;
	}

	public getDocumentExpiration(id: string): Date | null {
		return this.native.getDocumentExpirationWithIDError(id);
	}

	get indexes() {
		const indexes = this.native.indexes();
		const count = indexes.count;
		const set = new Set<string>();
		for (let i = 0; i < count; i++) {
			set.add(indexes.objectAtIndex(i));
		}
		return set;
	}
	public setDocumentExpiration(id: string, date: Date) {
		this.native.setDocumentExpirationWithIDExpirationError(id, date);
	}

	public deleteIndex(name: string) {
		this.native.deleteIndexWithNameError(name);
	}
}

let dateFormatter: NSDateFormatter;
const fromISO8601UTC = function (date: string) {
	if (dateFormatter === undefined) {
		dateFormatter = NSDateFormatter.new();
	}
	dateFormatter.dateFormat = "yyyy-MM-dd'T'HH:mm:ss.SSSZ";
	dateFormatter.locale = NSLocale.localeWithLocaleIdentifier('en_US_POSIX');
	dateFormatter.timeZone = NSTimeZone.timeZoneForSecondsFromGMT(0);
	return dateFormatter.dateFromString(date);
};

export class CouchBase {
	private _couchbase: CBLDatabase;
	private _defaultCollection?: Collection = null;
	private _defaultScope?: Scope = null;

	get native() {
		return this._couchbase;
	}

	constructor(databaseName: string) {
		this._couchbase = CBLDatabase.alloc().initWithNameError(databaseName);
	}

	close() {
		this.native.close();
	}

	inBatch(batch: () => void) {
		const errorRef = new interop.Reference() as interop.Reference<NSError>;
		this.native.inBatchUsingBlock(errorRef, batch);
	}

	createQuery(query: string) {
		return Query.fromNative(this.native.createQueryError(query));
	}

	get defaultCollection() {
		if (this._defaultCollection === null || this._defaultCollection === undefined) {
			this._defaultCollection = Collection.fromNative(this._couchbase.defaultCollection());
		}
		return this._defaultCollection;
	}

	get defaultScope() {
		if (this._defaultScope === null || this._defaultScope === undefined) {
			this._defaultScope = Scope.fromNative(this._couchbase.defaultScope());
		}
		return this._defaultScope;
	}

	createCollection(name: string, scope: string) {
		return Collection.fromNative(this.native.createCollectionWithNameScopeError(name, scope));
	}

	getCollection(name: string, scope: string) {
		return Collection.fromNative(this.native.collectionWithNameScopeError(name, scope ?? kCBLDefaultScopeName));
	}

	deleteCollection(name: string, scope?: string) {
		if (scope) {
			this.native.deleteCollectionWithNameScopeError(name, scope);
		} else {
			this.native.deleteCollectionWithNameScopeError(name, kCBLDefaultScopeName);
		}
	}

	destroyDatabase() {
		return this.native.delete();
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
	private having: any = null; // todo;
	private join: any = null; // todo;

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

		const select = NSMutableArray.new<CBLQuerySelectResult>();

		if (!this.select || this.select.length === 0) {
			select.addObject(CBLQuerySelectResult.all());
			select.addObject(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
		} else {
			this.select.forEach((item) => {
				if (item === QueryMeta.ID) {
					select.addObject(CBLQuerySelectResult.expression(CBLQueryMeta.id()));
				} else if (item === QueryMeta.ALL) {
					select.addObject(CBLQuerySelectResult.all());
				} else {
					select.addObject(CBLQueryExpression.property(item));
				}
			});
		}

		const from = CBLQueryDataSource.collection(this.from.native);

		let nativeQuery = null;
		if (this.where) {
			for (const item of this.where) {
				if (item.logical === QueryLogicalOperator.AND) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.andExpression(setComparison(item));
				} else if (item.logical === QueryLogicalOperator.OR) {
					if (!nativeQuery) break;
					nativeQuery = nativeQuery.orExpression(setComparison(item));
				} else {
					nativeQuery = setComparison(item);
				}
			}
		}

		const groupBy = NSMutableArray.new<CBLQueryExpression>();

		if (this.groupBy) {
			for (const prop of this.groupBy) {
				groupBy.addObject(CBLQueryExpression.property(prop));
			}
		}

		const orderBy = NSMutableArray.new<CBLQueryOrdering>();
		if (this.order) {
			for (const item of this.order) {
				switch (item.direction) {
					case 'desc':
						orderBy.addObject(CBLQueryOrdering.property(item.property).descending());
						break;
					default:
						orderBy.addObject(CBLQueryOrdering.property(item.property).ascending());
						break;
				}
			}
		}

		let limit: CBLQueryLimit;
		if (typeof this.limit === 'number') {
			if (typeof this.offset === 'number') {
				limit = CBLQueryLimit.limitOffset(CBLQueryExpression.integer(this.limit), CBLQueryExpression.integer(this.offset));
			} else {
				limit = CBLQueryLimit.limit(CBLQueryExpression.integer(this.limit));
			}
		}

		const queryBuilder = CBLQueryBuilder.selectFromJoinWhereGroupByHavingOrderByLimit(select, from, this.join, nativeQuery, groupBy, this.having, orderBy, limit);

		return Query.fromNative(queryBuilder);
	}
}

export class Result {
	private _native: CBLQueryResult;

	static fromNative(result: CBLQueryResult) {
		if (result instanceof CBLQueryResult) {
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
		if (typeof keyOrIndex === 'number') {
			return this.native.doubleAtIndex(keyOrIndex);
		}
		return this.native.doubleForKey(keyOrIndex);
	}

	getString(key: string): string;
	getString(index: number): string;
	getString(keyOrIndex: any): string {
		if (typeof keyOrIndex === 'number') {
			return this.native.stringAtIndex(keyOrIndex);
		}
		return this.native.stringForKey(keyOrIndex);
	}

	getDictionary(key: string): Dictionary;
	getDictionary(index: number): Dictionary;
	getDictionary(keyOrIndex: any): Dictionary {
		if (typeof keyOrIndex === 'number') {
			return Dictionary.fromNative(this.native.dictionaryAtIndex(keyOrIndex));
		}
		return Dictionary.fromNative(this.native.dictionaryForKey(keyOrIndex));
	}

	getLong(key: string): number;
	getLong(index: number): number;
	getLong(keyOrIndex: any): number {
		if (typeof keyOrIndex === 'number') {
			return this.native.longLongAtIndex(keyOrIndex);
		}
		return this.native.longLongForKey(keyOrIndex);
	}

	getBoolean(key: string): boolean;
	getBoolean(index: number): boolean;
	getBoolean(keyOrIndex: any): boolean {
		if (typeof keyOrIndex === 'number') {
			return this.native.booleanAtIndex(keyOrIndex);
		}
		return this.native.booleanForKey(keyOrIndex);
	}

	getFloat(key: string): number;
	getFloat(index: number): number;
	getFloat(keyOrIndex: any): number {
		if (typeof keyOrIndex === 'number') {
			return this.native.floatAtIndex(keyOrIndex);
		}
		return this.native.floatForKey(keyOrIndex);
	}

	getInt(key: string): number;
	getInt(index: number): number;
	getInt(keyOrIndex: any): number {
		if (typeof keyOrIndex === 'number') {
			return this.native.integerAtIndex(keyOrIndex);
		}
		return this.native.integerForKey(keyOrIndex);
	}

	getBlob(key: string): Blob;
	getBlob(index: number): Blob;
	getBlob(keyOrIndex: any): Blob {
		if (typeof keyOrIndex === 'number') {
			return Blob.fromNative(this.native.blobAtIndex(keyOrIndex));
		}
		return Blob.fromNative(this.native.blobForKey(keyOrIndex));
	}

	getDate(key: string): Date;
	getDate(index: number): Date;
	getDate(keyOrIndex: any): Date {
		if (typeof keyOrIndex === 'number') {
			return this.native.dateAtIndex(keyOrIndex);
		}
		return this.native.dateForKey(keyOrIndex);
	}

	getArray(key: string): Array;
	getArray(index: number): Array;
	getArray(keyOrIndex: any): Array {
		if (typeof keyOrIndex === 'number') {
			return Array.fromNative(this.native.arrayAtIndex(keyOrIndex));
		}
		return Array.fromNative(this.native.arrayForKey(keyOrIndex));
	}

	getKeys(): string[] {
		const keys = this.native.keys;
		const count = keys.count;
		const ret = [];
		for (let i = 0; i < count; i++) {
			ret[i] = keys[i];
		}
		return ret;
	}

	getValue(key: string): Array;
	getValue(index: number): Array;
	getValue(keyOrIndex: any): Array {
		if (typeof keyOrIndex === 'number') {
			return deserialize(this.native.valueAtIndex(keyOrIndex));
		}
		return deserialize(this.native.valueForKey(keyOrIndex));
	}

	get count(): number {
		return this.native.count;
	}
	toJSON() {
		return JSON.parse(this.native.toJSON());
	}
}
export class ResultSet {
	private _native: CBLQueryResultSet;
	private _queue = dispatch_queue_create(`ns_cb_result_queue_${Date.now()}`, null);

	static fromNative(set: CBLQueryResultSet) {
		if (set instanceof CBLQueryResultSet) {
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
		const size = results.count;
		const ret = new global.Array(size);
		for (let i = 0; i < size; i++) {
			ret[i] = Result.fromNative(results.objectAtIndex(i));
		}

		this._allResults = ret;

		return ret;
	}

	[Symbol.iterator] = () => {
		return {
			native: this.native,
			next() {
				const next = this.native.nextObject();
				const done = !next;
				return { value: Result.fromNative(next), done: done };
			},
		};
	};

	async *[Symbol.asyncIterator]() {
		const next = await asyncNext(this._queue, this.native);
		const done = !next;
		if (!done) {
			yield Result.fromNative(next);
		}
		return { done: done };
	}
}

function asyncNext(queue, result) {
	return new Promise<CBLQueryResult>((resolve, reject) => {
		NSCCouchbase.asyncNext(queue, result, (next) => {
			resolve(next);
		});
	});
}

export class Query {
	private _native: CBLQuery;
	private _queue = NSCCouchbase.createQueue(`ns_cb_queue_${Date.now()}`, true);

	static fromNative(query: CBLQuery): Query | null {
		if (query instanceof CBLQuery) {
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
		return Listener.fromNative(
			this.native.addChangeListenerWithQueueListener(this._queue, (change) => {
				callback(this, ResultSet.fromNative(change.results), change.error);
			}),
		);
	}

	execute() {
		return ResultSet.fromNative(this.native.execute());
	}
}

export class Replicator {
	private _native: CBLReplicator;
	constructor(remoteUrl: string, direction: 'push' | 'pull' | 'both') {
		const repConfig = CBLReplicatorConfiguration.alloc().initWithTarget(CBLURLEndpoint.alloc().initWithURL(NSURL.URLWithString(remoteUrl)));
		if (direction === 'pull') {
			repConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePull;
		} else if (direction === 'push') {
			repConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePush;
		} else {
			repConfig.replicatorType = CBLReplicatorType.kCBLReplicatorTypePushAndPull;
		}

		this._native = CBLReplicator.alloc().initWithConfig(repConfig);
	}

	get native() {
		return this._native;
	}

	start() {
		this.native.start();
	}

	stop() {
		this.native.stop();
	}

	isRunning() {
		if (this.native && this.native.status && this.native.status.activity) {
			return this.native.status.activity === CBLReplicatorActivityLevel.kCBLReplicatorBusy;
		}
		return false;
	}

	setContinuous(isContinuous: boolean) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		newConfig.continuous = isContinuous;
		this._native = CBLReplicator.alloc().initWithConfig(newConfig);
	}

	setUserNameAndPassword(username: string, password: string) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		newConfig.authenticator = CBLBasicAuthenticator.alloc().initWithUsernamePassword(username, password);
		this._native = CBLReplicator.alloc().initWithConfig(newConfig);
	}

	addCollection(collection: Collection) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		newConfig.addCollectionConfig(collection.native, newConfig);
		this._native = CBLReplicator.alloc().initWithConfig(newConfig);
	}

	addCollections(collections: Collection[]) {
		if (global.Array.isArray(collections)) {
			const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
			newConfig.addCollectionsConfig(
				collections.map((collection) => collection.native),
				newConfig,
			);
			this._native = CBLReplicator.alloc().initWithConfig(newConfig);
		}
	}

	setChannels(collection: Collection, channels: string[]) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		const oldConfig = newConfig.collectionConfig(collection.native);
		if (oldConfig != null) {
			oldConfig.channels = NSArray.arrayWithArray(channels);
		} else {
			const config = CBLCollectionConfiguration.new();
			config.channels = NSArray.arrayWithArray(channels);
			newConfig.addCollectionConfig(collection.native, config);
			this._native = CBLReplicator.alloc().initWithConfig(newConfig);
		}
	}

	setSessionIdAndCookieName(sessionId: string, cookieName: string) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionIDCookieName(sessionId, cookieName);
		this._native = CBLReplicator.alloc().initWithConfig(newConfig);
	}

	setSessionId(sessionId: string) {
		const newConfig = CBLReplicatorConfiguration.alloc().initWithConfig(this.native.config);
		newConfig.authenticator = CBLSessionAuthenticator.alloc().initWithSessionID(sessionId);
		this._native = CBLReplicator.alloc().initWithConfig(newConfig);
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

export class Blob {
	private _native: CBLBlob;

	static fromNative(blob: CBLBlob): Blob | null {
		if (blob instanceof CBLBlob) {
			const ret = new Blob();
			ret._native = blob;
			return ret;
		}
		return null;
	}

	static fromFile(mimeType: string, file: string) {
		if (typeof file === 'string') {
			const blob = new Blob();
			if (file.startsWith('file')) {
				blob._native = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(file));
				return blob;
			} else if (file.startsWith('/')) {
				blob._native = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.fileURLWithPath(file));
				return blob;
			} else if (file.startsWith(`~`)) {
				const filePath = path.join(knownFolders.currentApp().path, file.replace('~', ''));
				blob._native = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(filePath));
				return blob;
			} else if (file.startsWith(`res`)) {
				const bundle = NSBundle.mainBundle;
				const path = bundle.pathForResourceOfType(file.replace('res://', ''), getExtension(mimeType));
				blob._native = CBLBlob.alloc().initWithContentTypeFileURLError(mimeType, NSURL.URLWithString(path));
				return blob;
			}
		}
		return null;
	}

	static fromBytes(mimeType: string, content: any) {
		try {
			const blob = new Blob();
			blob._native = CBLBlob.alloc().initWithContentTypeData(mimeType, content);
			return blob;
		} catch (error) {
			return null;
		}
	}

	get native() {
		return this._native;
	}

	get content(): any {
		if (!this.native) return null;
		return this.native.content;
	}

	private _stream: Stream;
	get contentStream(): Stream | null {
		if (!this.native) return null;
		if (this._stream === undefined) {
			this._stream = Stream.fromNative(this.native.contentStream);
		}
		return this._stream;
	}

	get contentType(): string {
		if (!this.native) return null;
		return this.native.contentType;
	}

	get length(): number {
		if (!this.native) return 0;
		return this.native.length;
	}

	get digest(): string {
		if (!this.native) return null;
		return this.native.digest;
	}

	get properties(): Map<string, any> {
		const map = new Map();
		if (!this.native) return map;
		const nativeMap = this.native.properties;
		const mapKeysArray = nativeMap.allKeys;
		const length = mapKeysArray.count;
		for (let i = 0; i < length; i++) {
			const key = mapKeysArray[i];
			const value = nativeMap.valueForKey(key);
			map.set(key, value);
		}
		return map;
	}

	toJSON() {
		return JSON.parse(this.native.toJSON());
	}
}

const DEFAULT_MIME_TYPE = 'application/octet-stream';

const mimeTypes = {
	md: 'text/markdown',
	html: 'text/html',
	htm: 'text/html',
	shtml: 'text/html',
	css: 'text/css',
	xml: 'text/xml',
	gif: 'image/gif',
	jpeg: 'image/jpeg',
	jpg: 'image/jpeg',
	js: 'application/javascript',
	atom: 'application/atom+xml',
	rss: 'application/rss+xml',
	mml: 'text/mathml',
	txt: 'text/plain',
	jad: 'text/vnd.sun.j2me.app-descriptor',
	wml: 'text/vnd.wap.wml',
	htc: 'text/x-component',
	png: 'image/png',
	tif: 'image/tiff',
	tiff: 'image/tiff',
	wbmp: 'image/vnd.wap.wbmp',
	ico: 'image/x-icon',
	jng: 'image/x-jng',
	bmp: 'image/x-ms-bmp',
	svg: 'image/svg+xml',
	svgz: 'image/svg+xml',
	webp: 'image/webp',
	woff: 'application/font-woff',
	jar: 'application/java-archive',
	war: 'application/java-archive',
	ear: 'application/java-archive',
	json: 'application/json',
	hqx: 'application/mac-binhex40',
	doc: 'application/msword',
	pdf: 'application/pdf',
	ps: 'application/postscript',
	eps: 'application/postscript',
	ai: 'application/postscript',
	rtf: 'application/rtf',
	m3u8: 'application/vnd.apple.mpegurl',
	xls: 'application/vnd.ms-excel',
	eot: 'application/vnd.ms-fontobject',
	ppt: 'application/vnd.ms-powerpoint',
	wmlc: 'application/vnd.wap.wmlc',
	kml: 'application/vnd.google-earth.kml+xml',
	kmz: 'application/vnd.google-earth.kmz',
	'7z': 'application/x-7z-compressed',
	cco: 'application/x-cocoa',
	jardiff: 'application/x-java-archive-diff',
	jnlp: 'application/x-java-jnlp-file',
	run: 'application/x-makeself',
	pl: 'application/x-perl',
	pm: 'application/x-perl',
	prc: 'application/x-pilot',
	pdb: 'application/x-pilot',
	rar: 'application/x-rar-compressed',
	rpm: 'application/x-redhat-package-manager',
	sea: 'application/x-sea',
	swf: 'application/x-shockwave-flash',
	sit: 'application/x-stuffit',
	tcl: 'application/x-tcl',
	tk: 'application/x-tcl',
	der: 'application/x-x509-ca-cert',
	pem: 'application/x-x509-ca-cert',
	crt: 'application/x-x509-ca-cert',
	xpi: 'application/x-xpinstall',
	xhtml: 'application/xhtml+xml',
	xspf: 'application/xspf+xml',
	zip: 'application/zip',
	bin: 'application/octet-stream',
	exe: 'application/octet-stream',
	dll: 'application/octet-stream',
	deb: 'application/octet-stream',
	dmg: 'application/octet-stream',
	iso: 'application/octet-stream',
	img: 'application/octet-stream',
	msi: 'application/octet-stream',
	msp: 'application/octet-stream',
	msm: 'application/octet-stream',
	docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
	xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
	pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
	mid: 'audio/midi',
	midi: 'audio/midi',
	kar: 'audio/midi',
	mp3: 'audio/mpeg',
	ogg: 'audio/ogg',
	m4a: 'audio/x-m4a',
	ra: 'audio/x-realaudio',
	'3gpp': 'video/3gpp',
	'3gp': 'video/3gpp',
	ts: 'video/mp2t',
	mp4: 'video/mp4',
	mpeg: 'video/mpeg',
	mpg: 'video/mpeg',
	mov: 'video/quicktime',
	webm: 'video/webm',
	flv: 'video/x-flv',
	m4v: 'video/x-m4v',
	mng: 'video/x-mng',
	asx: 'video/x-ms-asf',
	asf: 'video/x-ms-asf',
	wmv: 'video/x-ms-wmv',
	avi: 'video/x-msvideo',
};
