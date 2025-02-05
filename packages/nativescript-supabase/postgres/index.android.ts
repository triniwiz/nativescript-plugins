import { DataType } from '..';
import { FilterOperator } from '.';
import { serialize, serializeArray, serializeObject, dataDeserialize } from '../utils';
declare const kotlin: any;
interface Result {
	data: DataType;
	status: number;
	statusText: string;
}

export function parseOperator(operator: FilterOperator) {
	switch (operator) {
		case 'eq':
		case 'neq':
		case 'gt':
		case 'gte':
		case 'lt':
		case 'lte':
		case 'like':
		case 'ilike':
		case 'is':
		case 'in':
		case 'cs':
		case 'cd':
		case 'sl':
		case 'sr':
		case 'nxl':
		case 'nxr':
		case 'adj':
		case 'ov':
		case 'fts':
		case 'plfts':
		case 'phfts':
		case 'wfts':
			return operator;
		default:
			return undefined;
	}
}

function parseCount(count?: 'exact' | 'planned' | 'estimated') {
	switch (count) {
		case 'exact':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.exact;
		case 'planned':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.planned;
		case 'estimated':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.estimated;
		default:
			return null;
	}
}

export class PostgresTransformBuilder implements PromiseLike<any> {
	native_;
	static fromNative(value) {
		const builder = new PostgresTransformBuilder();
		builder.native_ = value;
		return builder;
	}

	get native() {
		return this.native_;
	}

	csv() {
		this.native.csv();
		return this;
	}

	limit(count: number) {
		this.native.limit(count);
		return this;
	}

	maybeSingle() {
		this.native.csv();
		return this;
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		this.native.order(column, serialize(options?.ascending ?? true, true), serialize(options?.nullsFirst ?? false, true), options?.referencedTable ?? null);
		return this;
	}

	range(from: number, to: number, referencedTable?: string) {
		this.native.range(from, to, referencedTable ?? null);
		return this;
	}

	select(columns?: string) {
		this.native.select(columns ?? null);
		return this;
	}

	single() {
		this.native.single();
		return this;
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			this.native.execute(
				new kotlin.jvm.functions.Function1({
					invoke(data) {
						resolve(dataDeserialize(data));
					},
				})
			);
		}).then(onfulfilled, onrejected);
	}
}

export class PostgresFilterBuilder extends PostgresTransformBuilder {
	native_;

	static fromNative(value) {
		const builder = new PostgresFilterBuilder();
		builder.native_ = value;
		return builder;
	}

	get native() {
		return this.native_;
	}

	containedBy(column: string, value: DataType): PostgresFilterBuilder {
		this.native.containedBy(column, serialize(value));
		return this;
	}

	contains(column: string, value: DataType): PostgresFilterBuilder {
		this.native.contains(column, serialize(value));
		return this;
	}

	eq(column: string, value: DataType) {
		this.native.eq(column, serialize(value));
		return this;
	}

	gt(column: string, value: DataType) {
		this.native.gt(column, serialize(value));
		return this;
	}

	gte(column: string, value: DataType) {
		this.native.gte(column, serialize(value));
		return this;
	}

	ilike(column: string, pattern: string) {
		this.native.ilike(column, pattern);
		return this;
	}

	in(column: string, value: DataType[]) {
		this.native.in(column, serialize(value));
		return this;
	}

	is(column: string, value: boolean | null = null) {
		if (typeof value === 'boolean') {
			this.native.eq(column, serialize(value));
		} else {
			this.native.eq(column, null);
		}
		return this;
	}

	like(column: string, pattern: string) {
		this.native.like(column, pattern);
		return this;
	}

	lt(column: string, value: DataType) {
		this.native.lt(column, serialize(value));
		return this;
	}

	lte(column: string, value: DataType) {
		this.native.lte(column, serialize(value));
		return this;
	}

	match(query: Record<string, DataType>) {
		this.native.match(serialize(query));
		return this;
	}

	neq(column: string, value: DataType) {
		this.native.neq(column, serialize(value));
		return this;
	}

	not(column: string, operator: FilterOperator, value: DataType) {
		const nativeOperator = parseOperator(operator);
		if (nativeOperator === undefined) {
			throw new Error(`Invalid operator: ${operator}`);
		}
		this.native.not(column, operator, serialize(value));
		return this;
	}

	or(
		filters: string,
		options: {
			foreignTable?: string;
			referencedTable?: string;
		}
	) {
		// todo implement
		return this;
	}

	overlaps(column: string, value: DataType) {
		this.native.overlaps(column, serialize(value));
		return this;
	}

	rangeAdjacent(column: string, range: DataType) {
		this.native.rangeAdjacent(column, serialize(range));
		return this;
	}

	rangeGt(column: string, range: DataType) {
		this.native.rangeGt(column, serialize(range));
		return this;
	}

	rangeGte(column: string, range: DataType) {
		this.native.rangeGte(column, serialize(range));
		return this;
	}

	rangeLt(column: string, range: DataType) {
		this.native.rangeLt(column, serialize(range));
		return this;
	}

	rangeLte(column: string, range: DataType) {
		this.native.rangeLte(column, serialize(range));
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
		this.native.textSearch(column, serialize(query), options?.config ?? null, options?.type ?? null);
		return this;
	}
}

export class SupabasePostgresClient {
	native_;

	get native() {
		return this.native_;
	}

	static fromNative(value) {
		const client = new SupabasePostgresClient();
		client.native_ = value;
		return client;
	}

	from(table: string): SupabasePostgresQueryBuilder {
		const ret = new SupabasePostgresQueryBuilder();
		ret.native_ = this.native.from(table);
		return ret;
	}

	schema(schema: string): SupabasePostgresClient {
		return SupabasePostgresClient.fromNative(this.native.schema(schema));
	}
}

export class SupabasePostgresQueryBuilder {
	native_;

	get native() {
		return this.native_;
	}

	static fromNative(value) {
		const builder = new SupabasePostgresQueryBuilder();
		builder.native_ = value;
		return builder;
	}

	insert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.insert(serialize(values, true)?.getValue?.() ?? null, serialize(options?.defaultToNull ?? null, true), parseCount(options?.count)));
	}

	update(
		values: Record<any, DataType>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
		}
	) {
		return PostgresFilterBuilder.fromNative(this.native.update(serializeObject(values, true)?.getValue?.() ?? null, parseCount(options?.count)));
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
		return PostgresFilterBuilder.fromNative(this.native.upsert(serializeObject(values)?.getValue?.() ?? null, options?.onConflict ?? null, parseCount(options?.count), serialize(options?.ignoreDuplicates ?? null, true)));
	}

	delete(options?: { count?: 'exact' | 'planned' | 'estimated' }) {
		return PostgresFilterBuilder.fromNative(this.native.delete(parseCount(options?.count)));
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
		return PostgresFilterBuilder.fromNative(this.native.select(columns, parseCount(count), serialize(head ?? false, true)));
	}
}
