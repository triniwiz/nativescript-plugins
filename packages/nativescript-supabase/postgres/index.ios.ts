import { dataDeserialize } from '@nativescript/core/utils';
import { DataType } from '..';
import { Utils } from '@nativescript/core';

interface Result {
	data: DataType;
	status: number;
	statusText: string;
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

	csv(): PostgresTransformBuilder {
		return PostgresTransformBuilder.fromNative(this.native.csv());
	}

	limit(count: number) {
		return PostgresTransformBuilder.fromNative(this.native.limit(count));
	}

	maybeSingle() {
		return PostgresTransformBuilder.fromNative(this.native.maybeSingle());
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		return PostgresTransformBuilder.fromNative(this.native.order(column, options?.ascending ?? true, options?.nullsFirst ?? false, options?.referencedTable ?? null));
	}

	range(from: number, to: number, referencedTable?: string) {
		return PostgresTransformBuilder.fromNative(this.native.range(from, to, referencedTable ?? null));
	}

	select(columns: string) {
		return PostgresTransformBuilder.fromNative(this.native.select(columns));
	}

	single(): PostgresTransformBuilder {
		return PostgresTransformBuilder.fromNative(this.native.single());
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			this.native.execute(null, (data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(dataDeserialize(data));
				}
			});
		}).then(onfulfilled, onrejected);
	}
}

export class PostgresFilterBuilder implements PromiseLike<any> {
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
		this.native_ = this.native.containedBy(column, value);
		return this;
	}

	contains(column: string, value: DataType): PostgresFilterBuilder {
		this.native_ = this.native.contains(column, value);
		return this;
	}

	csv(): PostgresTransformBuilder {
		return PostgresTransformBuilder.fromNative(this.native.csv());
	}

	eq(column: string, value: DataType) {
		this.native_ = this.native.eq(column, value);
		return this;
	}

	gt(column: string, value: DataType) {
		this.native_ = this.native.gt(column, value);
		return this;
	}

	gte(column: string, value: DataType) {
		this.native_ = this.native.gte(column, value);
		return this;
	}

	ilike(column: string, pattern: string) {
		this.native_ = this.native.ilike(column, pattern);
		return this;
	}

	in(column: string, pattern: DataType[]) {
		this.native_ = this.native.in(column, Utils.dataSerialize(pattern));
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

	limit(count: number) {
		return PostgresTransformBuilder.fromNative(this.native.limit(count));
	}

	lt(column: string, value: DataType) {
		this.native_ = this.native.lt(column, value);
		return this;
	}

	lte(column: string, value: DataType) {
		this.native_ = this.native.lte(column, value);
		return this;
	}

	match(query: Record<string, DataType>) {
		this.native_ = this.native.match(Utils.dataSerialize(query));
		return this;
	}

	maybeSingle() {
		return PostgresTransformBuilder.fromNative(this.native.maybeSingle());
	}

	neq(column: string, value: DataType) {
		this.native_ = this.native.neq(column, value);
		return this;
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		return PostgresTransformBuilder.fromNative(this.native.order(column, options?.ascending ?? true, options?.nullsFirst ?? false, options?.referencedTable ?? null));
	}

	overlaps(column: string, value: DataType) {
		this.native_ = this.native.overlaps(column, value);
		return this;
	}

	range(from: number, to: number, referencedTable?: string) {
		return PostgresTransformBuilder.fromNative(this.native.range(from, to, referencedTable ?? null));
	}

	rangeAdjacent(column: string, range: DataType) {
		this.native_ = this.native.rangeAdjacent(column, range);
		return this;
	}

	rangeGt(column: string, range: DataType) {
		this.native_ = this.native.rangeGt(column, range);
		return this;
	}

	rangeGte(column: string, range: DataType) {
		this.native_ = this.native.rangeGte(column, range);
		return this;
	}

	rangeLt(column: string, range: DataType) {
		this.native_ = this.native.rangeLt(column, range);
		return this;
	}

	rangeLte(column: string, range: DataType) {
		this.native_ = this.native.rangeLte(column, range);
		return this;
	}

	select(columns: string) {
		return PostgresTransformBuilder.fromNative(this.native.select(columns));
	}

	single(): PostgresTransformBuilder {
		return PostgresTransformBuilder.fromNative(this.native.single());
	}

	textSearch(
		column: string,
		query: DataType,
		options?: {
			config?: string;
			type?: 'plain' | 'phrase' | 'phrase';
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
			case 'phrase':
				nativeType = NSCSupabasePostgresTextSearchType.Phrase;
				break;
		}
		if (nativeType !== undefined) {
			this.native_ = this.native.textSearchType(column, query, options?.config ?? null, nativeType);
		} else {
			this.native_ = this.native.textSearch(column, query, options?.config ?? null);
		}
		return this;
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: Result) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			this.native.execute(null, (data, error) => {
				if (error) {
					reject(error);
				} else {
					resolve(dataDeserialize(data));
				}
			});
		}).then(onfulfilled, onrejected);
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
		return SupabasePostgresQueryBuilder.fromNative(this.native.from(table));
	}

	schema(schema: string): SupabasePostgresClient {
		return SupabasePostgresClient.fromNative(this.native.schema(schema));
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
		if (Array.isArray(values)) {
			PostgresFilterBuilder.fromNative(this.native.insertWithValuesError(Utils.dataSerialize(values), parseCount(options?.count) as never));
		}

		return PostgresFilterBuilder.fromNative(this.native.insertError(Utils.dataSerialize(values), parseCount(options?.count) as never));
	}

	update(
		values: Record<any, DataType>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.updateError(Utils.dataSerialize(values), parseCount(options?.count) as never));
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
		return PostgresFilterBuilder.fromNative(this.native.upsertError(Utils.dataSerialize(values), options?.onConflict ?? null, parseCount(options?.count) as never, options?.ignoreDuplicates ?? false));
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
