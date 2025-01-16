export type FilterOperator = 'eq' | 'neq' | 'gt' | 'gte' | 'lt' | 'lte' | 'like' | 'ilike' | 'is' | 'in' | 'cs' | 'cd' | 'sl' | 'sr' | 'nxl' | 'nxr' | 'adj' | 'ov' | 'fts' | 'plfts' | 'phfts' | 'wfts';

export class PostgresTransformBuilder implements PromiseLike<any> {}

export class PostgresFilterBuilder implements PromiseLike<any> {
	single(): PostgresTransformBuilder;

	eq(column: string, value: DataType): PostgresTransformBuilder;

	gte(column: string, value: DataType): PostgresTransformBuilder;

	lte(column: string, value: DataType): PostgresTransformBuilder;
}

export class SupabasePostgreClient {
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
}
