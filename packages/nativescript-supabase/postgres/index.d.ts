import { DataType } from '..';

export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'is' | 'in' | 'cs' | 'cd' | 'sl' | 'sr' | 'nxl' | 'nxr' | 'adj' | 'ov' | 'fts' | 'plfts' | 'phfts' | 'wfts';

export class PostgresTransformBuilder implements PromiseLike<any> {
	csv(): PostgresTransformBuilder;

	limit(count: number): PostgresTransformBuilder;

	maybeSingle(): PostgresTransformBuilder;

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }): PostgresTransformBuilder;

	range(from: number, to: number, referencedTable?: string): PostgresTransformBuilder;

	select(columns: string): PostgresTransformBuilder;

	single(): PostgresTransformBuilder;
}

export class PostgresFilterBuilder implements PromiseLike<{ data: any; error: any }> {
	containedBy(column: string, value: DataType): PostgresFilterBuilder;

	contains(column: string, value: DataType): PostgresFilterBuilder;

	csv(): PostgresTransformBuilder;

	eq(column: string, value: DataType): PostgresFilterBuilder;

	gt(column: string, value: DataType): PostgresFilterBuilder;

	gte(column: string, value: DataType): PostgresFilterBuilder;

	ilike(column: string, pattern: string): PostgresFilterBuilder;

	in(column: string, pattern: DataType[]): PostgresFilterBuilder;

	is(column: string): PostgresFilterBuilder;

	isValue(column: string, value: boolean): PostgresFilterBuilder;

	like(column: string, pattern: string): PostgresFilterBuilder;

	limit(count: number): PostgresFilterBuilder;

	lt(column: string, value: DataType): PostgresFilterBuilder;

	lte(column: string, value: DataType): PostgresFilterBuilder;
	match(query: Record<string, DataType>): PostgresFilterBuilder;

	maybeSingle(): PostgresFilterBuilder;

	neq(column: string, value: DataType): PostgresFilterBuilder;

	not(column: string, operator: FilterOperator, value: DataType);

	or(
		filters: string
	): PostgresFilterBuilder;

	or(
		filters: string,
		options: {
			foreignTable?: string;
			referencedTable?: string;
		}
	): PostgresFilterBuilder;

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }): PostgresFilterBuilder;

	overlaps(column: string, value: DataType): PostgresFilterBuilder;

	range(from: number, to: number, referencedTable?: string): PostgresFilterBuilder;

	rangeAdjacent(column: string, range: DataType): PostgresFilterBuilder;

	rangeGt(column: string, range: DataType): PostgresFilterBuilder;

	rangeGte(column: string, range: DataType): PostgresFilterBuilder;

	rangeLt(column: string, range: DataType): PostgresFilterBuilder;

	rangeLte(column: string, range: DataType): PostgresFilterBuilder;

	select(columns: string): PostgresTransformBuilder;

	single(): PostgresTransformBuilder;

	textSearch(
		column: string,
		query: DataType,
		options?: {
			config?: string;
			type?: 'plain' | 'phrase' | 'phrase';
		}
	): PostgresFilterBuilder;

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

export class SupabasePostgresQueryBuilder {
	insert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
		}
	): PostgresFilterBuilder;

	update(
		values: Record<any, DataType>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
		}
	): PostgresFilterBuilder;

	upsert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
			ignoreDuplicates?: boolean;
			onConflict?: string;
		}
	): PostgresFilterBuilder;

	delete(options?: { count?: 'exact' | 'planned' | 'estimated' }): PostgresFilterBuilder;

	rpc(
		fn: string,
		args?: Record<string, any>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			get?: boolean;
			head?: boolean;
		}
	): PostgresFilterBuilder;

	select(
		columns: string = '*',
		{
			head = false,
			count,
		}: {
			head?: boolean;
			count?: 'exact' | 'planned' | 'estimated';
		} = {}
	): PostgresFilterBuilder;

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

export class SupabasePostgresClient {
	from(table: string): SupabasePostgresQueryBuilder;

	schema(schema: string): SupabasePostgresClient;
}
