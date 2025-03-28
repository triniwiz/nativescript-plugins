import { DataType } from '..';

export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'is' | 'in' | 'cs' | 'cd' | 'sl' | 'sr' | 'nxl' | 'nxr' | 'adj' | 'ov' | 'fts' | 'plfts' | 'phfts' | 'wfts';

export class PostgresTransformBuilder implements PromiseLike<any> {
	csv(): this;

	limit(count: number): this;

	maybeSingle(): this;

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }): this;

	range(from: number, to: number, referencedTable?: string): this;

	select(columns: string): this;

	single(): this;

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2>;
}

export class PostgresFilterBuilder extends PostgresTransformBuilder {
	containedBy(column: string, value: DataType): PostgresFilterBuilder;

	contains(column: string, value: DataType): PostgresFilterBuilder;

	eq(column: string, value: DataType): PostgresFilterBuilder;

	gt(column: string, value: DataType): PostgresFilterBuilder;

	gte(column: string, value: DataType): PostgresFilterBuilder;

	ilike(column: string, pattern: string): PostgresFilterBuilder;

	in(column: string, pattern: DataType[]): PostgresFilterBuilder;

	is(column: string): PostgresFilterBuilder;

	isValue(column: string, value: boolean): PostgresFilterBuilder;

	like(column: string, pattern: string): PostgresFilterBuilder;

	lt(column: string, value: DataType): PostgresFilterBuilder;

	lte(column: string, value: DataType): PostgresFilterBuilder;

	match(query: Record<string, DataType>): PostgresFilterBuilder;

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

	overlaps(column: string, value: DataType): PostgresFilterBuilder;

	rangeAdjacent(column: string, range: DataType): PostgresFilterBuilder;

	rangeGt(column: string, range: DataType): PostgresFilterBuilder;

	rangeGte(column: string, range: DataType): PostgresFilterBuilder;

	rangeLt(column: string, range: DataType): PostgresFilterBuilder;

	rangeLte(column: string, range: DataType): PostgresFilterBuilder;


	textSearch(
		column: string,
		query: DataType,
		options?: {
			config?: string;
			type?: 'plain' | 'phrase' | 'phrase';
		}
	): PostgresFilterBuilder;
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
