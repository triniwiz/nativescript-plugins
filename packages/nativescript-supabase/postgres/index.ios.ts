import { Utils } from '@nativescript/core';
import { DataType } from '..';
import { FilterOperator } from '.';
import { serialize, serializeArray, serializeObject } from '../utils';

interface Result {
	data: DataType;
	status: number;
	statusText: string;
}

export function parseOperator(operator: FilterOperator) {
	switch (operator) {
		case 'eq':
			return NSCSupabasePostgresFilterBuilderOperator.Eq;
		case 'neq':
			return NSCSupabasePostgresFilterBuilderOperator.Neq;
		case 'gt':
			return NSCSupabasePostgresFilterBuilderOperator.Gt;
		case 'gte':
			return NSCSupabasePostgresFilterBuilderOperator.Gte;
		case 'lt':
			return NSCSupabasePostgresFilterBuilderOperator.Lt;
		case 'lte':
			return NSCSupabasePostgresFilterBuilderOperator.Lte;
		case 'like':
			return NSCSupabasePostgresFilterBuilderOperator.Like;
		case 'ilike':
			return NSCSupabasePostgresFilterBuilderOperator.Ilike;
		case 'is':
			return NSCSupabasePostgresFilterBuilderOperator.Is;
		case 'in':
			return NSCSupabasePostgresFilterBuilderOperator.In;
		case 'cs':
			return NSCSupabasePostgresFilterBuilderOperator.Cs;
		case 'cd':
			return NSCSupabasePostgresFilterBuilderOperator.Cd;
		case 'sl':
			return NSCSupabasePostgresFilterBuilderOperator.Sl;
		case 'sr':
			return NSCSupabasePostgresFilterBuilderOperator.Sr;
		case 'nxl':
			return NSCSupabasePostgresFilterBuilderOperator.Nxl;
		case 'nxr':
			return NSCSupabasePostgresFilterBuilderOperator.Nxr;
		case 'adj':
			return NSCSupabasePostgresFilterBuilderOperator.Adj;
		case 'ov':
			return NSCSupabasePostgresFilterBuilderOperator.Ov;
		case 'fts':
			return NSCSupabasePostgresFilterBuilderOperator.Fts;
		case 'plfts':
			return NSCSupabasePostgresFilterBuilderOperator.Plfts;
		case 'phfts':
			return NSCSupabasePostgresFilterBuilderOperator.Phfts;
		case 'wfts':
			return NSCSupabasePostgresFilterBuilderOperator.Wfts;
	}
}

export class PostgresTransformBuilder implements PromiseLike<any> {
	native_: NSCSupabasePostgresTransformBuilder;

	static fromNative(value: NSCSupabasePostgresTransformBuilder) {
		const builder = new PostgresTransformBuilder();
		builder.native_ = value;
		return builder;
	}

	get native() {
		return this.native_;
	}

	csv() {
		this.native_ = this.native.csv();
		return this;
	}

	limit(count: number) {
		this.native_ = this.native.limit(count);
		return this;
	}

	maybeSingle() {
		this.native_ = this.native.maybeSingle();
		return this;
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		this.native_ = this.native.order(column, options?.ascending ?? true, options?.nullsFirst ?? false, options?.referencedTable ?? null);
		return this;
	}

	range(from: number, to: number, referencedTable?: string) {
		this.native_ = this.native.range(from, to, referencedTable ?? null);
		return this;
	}

	select(columns: string) {
		this.native_ = this.native.select(columns);
		return this;
	}

	single(): PostgresTransformBuilder {
		this.native_ = this.native.single();
		return this;
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			this.native.execute(null, (data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(Utils.dataDeserialize(data));
				}
			});
		}).then(onfulfilled, onrejected);
	}
}

export class PostgresFilterBuilder extends PostgresTransformBuilder {
	native_: NSCSupabasePostgresFilterBuilder;

	static fromNative(value: NSCSupabasePostgresFilterBuilder) {
		const builder = new PostgresFilterBuilder();
		builder.native_ = value;
		return builder;
	}

	get native() {
		return this.native_;
	}

	containedBy(column: string, value: DataType): PostgresFilterBuilder {
		this.native_ = this.native.containedBy(column, serialize(value));
		return this;
	}

	contains(column: string, value: DataType): PostgresFilterBuilder {
		this.native_ = this.native.contains(column, serialize(value));
		return this;
	}

	eq(column: string, value: DataType) {
		this.native_ = this.native.eq(column, serialize(value));
		return this;
	}

	gt(column: string, value: DataType) {
		this.native_ = this.native.gt(column, serialize(value));
		return this;
	}

	gte(column: string, value: DataType) {
		this.native_ = this.native.gte(column, serialize(value));
		return this;
	}

	ilike(column: string, pattern: string) {
		this.native_ = this.native.ilike(column, pattern);
		return this;
	}

	in(column: string, pattern: DataType[]) {
		this.native_ = this.native.in(column, serializeArray(pattern));
		return this;
	}

	is(column: string) {
		this.native_ = this.native.is(column);
		return this;
	}

	isValue(column: string, value: boolean) {
		this.native_ = this.native.isValue(column, value);
		return this;
	}

	like(column: string, pattern: string) {
		this.native_ = this.native.like(column, pattern);
		return this;
	}

	lt(column: string, value: DataType) {
		this.native_ = this.native.lt(column, serialize(value));
		return this;
	}

	lte(column: string, value: DataType) {
		this.native_ = this.native.lte(column, serialize(value));
		return this;
	}

	match(query: Record<string, DataType>) {
		this.native_ = this.native.match(serializeObject(query));
		return this;
	}

	neq(column: string, value: DataType) {
		this.native_ = this.native.neq(column, serialize(value));
		return this;
	}

	not(column: string, operator: FilterOperator, value: DataType) {
		const nativeOperator = parseOperator(operator);
		if (nativeOperator === undefined) {
			throw new Error(`Invalid operator: ${operator}`);
		}
		this.native_ = this.native.notWithColumn(column, nativeOperator, serialize(value));
		return this;
	}

	or(
		filters: string,
		options: {
			foreignTable?: string;
			referencedTable?: string;
		}
	) {
		this.native_ = this.native.orWithFilters(filters, options?.foreignTable ?? options?.referencedTable ?? null);
		return this;
	}

	overlaps(column: string, value: DataType) {
		this.native_ = this.native.overlaps(column, serialize(value));
		return this;
	}

	rangeAdjacent(column: string, range: DataType) {
		this.native_ = this.native.rangeAdjacent(column, serialize(range));
		return this;
	}

	rangeGt(column: string, range: DataType) {
		this.native_ = this.native.rangeGt(column, serialize(range));
		return this;
	}

	rangeGte(column: string, range: DataType) {
		this.native_ = this.native.rangeGte(column, serialize(range));
		return this;
	}

	rangeLt(column: string, range: DataType) {
		this.native_ = this.native.rangeLt(column, serialize(range));
		return this;
	}

	rangeLte(column: string, range: DataType) {
		this.native_ = this.native.rangeLte(column, serialize(range));
		return this;
	}

	textSearch(
		column: string,
		query: DataType,
		options?: {
			config?: string;
			type?: 'plain' | 'phrase' | 'websearch';
		}
	) {
		let nativeType: NSCSupabasePostgresTextSearchType;
		switch (options?.type) {
			case 'plain':
				nativeType = NSCSupabasePostgresTextSearchType.Plain;
				break;
			case 'phrase':
				nativeType = NSCSupabasePostgresTextSearchType.Phrase;
				break;
			case 'websearch':
				nativeType = NSCSupabasePostgresTextSearchType.Websearch;
				break;
		}
		if (nativeType !== undefined) {
			this.native_ = this.native.textSearchType(column, serialize(query), options?.config ?? null, nativeType);
		} else {
			this.native_ = this.native.textSearch(column, serialize(query), options?.config ?? null);
		}
		return this;
	}
}

function parseCount(count?: 'exact' | 'planned' | 'estimated') {
	switch (count) {
		case 'exact':
			return NSCSupabasePostgresCountOption.Exact;
		case 'planned':
			return NSCSupabasePostgresCountOption.Planned;
		case 'estimated':
			return NSCSupabasePostgresCountOption.Estimated;
		default:
			return NSCSupabasePostgresCountOption.None;
	}
}

export class SupabasePostgresClient {
	native_: NSCSupabasePostgres;

	get native() {
		return this.native_;
	}

	static fromNative(value: NSCSupabasePostgres) {
		const client = new SupabasePostgresClient();
		client.native_ = value;
		return client;
	}

	from(table: string): SupabasePostgresQueryBuilder {
		return SupabasePostgresQueryBuilder.fromNative(this.native.from(table) as never);
	}

	schema(schema: string): SupabasePostgresClient {
		return SupabasePostgresClient.fromNative(this.native.schema(schema) as never);
	}
}

export class SupabasePostgresQueryBuilder {
	native_: NSCSupabasePostgresQueryBuilder;

	get native() {
		return this.native_;
	}

	static fromNative(value: NSCSupabasePostgresQueryBuilder) {
		const client = new SupabasePostgresQueryBuilder();
		client.native_ = value;
		return client;
	}

	insert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.insertError(serialize(values), parseCount(options?.count) as never));
	}

	update(
		values: Record<any, DataType>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.updateError(serializeObject(values), parseCount(options?.count) as never));
	}

	upsert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
			ignoreDuplicates?: boolean;
			onConflict?: string;
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.upsertError(serialize(values), options?.onConflict ?? null, parseCount(options?.count) as never, options?.ignoreDuplicates ?? false));
	}

	delete(options?: { count?: 'exact' | 'planned' | 'estimated' }) {
		return PostgresFilterBuilder.fromNative(this.native.delete(parseCount(options?.count) as never));
	}

	select(
		columns: string = '*',
		{
			head = false,
			count,
		}: {
			head?: boolean;
			count?: 'exact' | 'planned' | 'estimated';
		} = {}
	) {
		return PostgresFilterBuilder.fromNative(this.native.selectHead(columns ?? '*', parseCount(count) as never, head ?? false));
	}
}
