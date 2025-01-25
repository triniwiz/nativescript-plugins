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

type operationsActionType = 'insert' | 'update' | 'upsert' | 'delete' | 'select';
type InsertAction = {
	action: Omit<operationsActionType, 'update' | 'upsert' | 'delete' | 'select'>;
	values: Record<any, DataType> | DataType[];
	options?: {
		count?: 'exact' | 'planned' | 'estimated';
		defaultToNull?: boolean;
	};
};

type UpsertAction = {
	action: Omit<operationsActionType, 'update' | 'insert' | 'delete' | 'select'>;
	values: Record<any, DataType> | DataType[];
	options?: {
		count?: 'exact' | 'planned' | 'estimated';
		defaultToNull?: boolean;
		ignoreDuplicates?: boolean;
		onConflict?: string;
	};
};

type DeleteAction = {
	action: Omit<operationsActionType, 'update' | 'upsert' | 'insert' | 'select'>;
	options?: { count?: 'exact' | 'planned' | 'estimated' };
};

type SelectAction = {
	action: Omit<operationsActionType, 'update' | 'upsert' | 'insert' | 'delete'>;
	columns?: string;
	options: {
		head?: boolean;
		count?: 'exact' | 'planned' | 'estimated';
	};
};

type OperationsAction = InsertAction | UpsertAction | DeleteAction | SelectAction;
const operations_ = Symbol('[[operations]]');
const operationsAction_ = Symbol('[[operationsAction]]');
type transform = 'csv' | 'limit' | 'maybeSingle' | 'order' | 'range' | 'select' | 'single';
type filter = 'containedBy' | 'contains' | 'eq' | 'gt' | 'gte' | 'ilike' | 'in' | 'is' | 'isValue' | 'like' | 'lt' | 'lte' | 'match' | 'maybeSingle' | 'neq' | 'not' | 'order' | 'overlaps' | 'range' | 'rangeAdjacent' | 'rangeGt' | 'rangeGte' | 'rangeLt' | 'rangeLte' | 'select' | 'single' | 'textSearch';
export class PostgresTransformBuilder implements PromiseLike<any> {
	[operationsAction_]?: OperationsAction;
	native_;
	constructor(type?: OperationsAction) {
		this[operationsAction_] = type;
	}
	[operations_]: { type: transform | filter; value?: DataType }[] = [];

	csv(): PostgresTransformBuilder {
		this[operations_].push({ type: 'csv' });
		return this;
	}

	limit(count: number) {
		this[operations_].push({ type: 'limit', value: count });
		return this;
	}

	maybeSingle() {
		this[operations_].push({ type: 'maybeSingle' });
		return this;
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		this[operations_].push({ type: 'order', value: { column, ascending: options?.ascending ?? true, nullsFirst: options?.nullsFirst ?? false, referencedTable: options?.referencedTable ?? null } });
		return this;
	}

	range(from: number, to: number, referencedTable?: string) {
		this[operations_].push({ type: 'range', value: { from, to, referencedTable: referencedTable ?? null } });
		return this;
	}

	select(columns: string) {
		this[operations_].push({ type: 'select', value: columns });
		return this;
	}

	single(): PostgresTransformBuilder {
		this[operations_].push({ type: 'single' });
		return this;
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: any) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			// this.native.execute(null, (data, error) => {
			// 	if (error) {
			// 		reject(error);
			// 	} else {
			// 		resolve(dataDeserialize(data));
			// 	}
			// });
		}).then(onfulfilled, onrejected);
	}
}

export class PostgresFilterBuilder implements PromiseLike<any> {
	[operationsAction_]?: OperationsAction;
	[operations_]: { type: transform | filter; value?: DataType }[] = [];
	native_;
	constructor(type?: OperationsAction) {
		this[operationsAction_] = type;
	}

	containedBy(column: string, value: DataType): PostgresFilterBuilder {
		this[operations_].push({ type: 'containedBy', value: { column, value } });
		return this;
	}

	contains(column: string, value: DataType): PostgresFilterBuilder {
		this[operations_].push({ type: 'contains', value: { column, value } });
		return this;
	}

	csv(): PostgresTransformBuilder {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'csv' }];
		return builder;
	}

	eq(column: string, value: DataType) {
		this[operations_].push({ type: 'eq', value: { column, value } });
		return this;
	}

	gt(column: string, value: DataType) {
		this[operations_].push({ type: 'gt', value: { column, value } });
		return this;
	}

	gte(column: string, value: DataType) {
		this[operations_].push({ type: 'gte', value: { column, value } });
		return this;
	}

	ilike(column: string, pattern: string) {
		this[operations_].push({ type: 'ilike', value: { column, pattern } });
		return this;
	}

	in(column: string, pattern: DataType[]) {
		this[operations_].push({ type: 'in', value: { column, pattern } });
		return this;
	}

	is(column: string) {
		this[operations_].push({ type: 'is', value: { column } });
		return this;
	}

	isValue(column: string, value: boolean) {
		this[operations_].push({ type: 'isValue', value: { column, value } });
		return this;
	}

	like(column: string, pattern: string) {
		this[operations_].push({ type: 'like', value: { column, pattern } });
		return this;
	}

	limit(count: number) {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'limit', value: count }];
		return builder;
	}

	lt(column: string, value: DataType) {
		this[operations_].push({ type: 'lt', value: { column, value } });
		return this;
	}

	lte(column: string, value: DataType) {
		this[operations_].push({ type: 'lte', value: { column, value } });
		return this;
	}

	match(query: Record<string, DataType>) {
		this[operations_].push({ type: 'match', value: query });
		return this;
	}

	maybeSingle() {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'maybeSingle' }];
		return builder;
	}

	neq(column: string, value: DataType) {
		this[operations_].push({ type: 'neq', value: { column, value } });
		return this;
	}

	not(column: string, operator: FilterOperator, value: DataType) {
		const nativeOperator = parseOperator(operator);
		if (nativeOperator === undefined) {
			throw new Error(`Invalid operator: ${operator}`);
		}
		this[operations_].push({ type: 'not', value: { column, operator: nativeOperator, value } });
		return this;
	}

	order(column: string, options?: { ascending?: boolean; nullsFirst?: boolean; referencedTable?: string }) {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [
			...this[operations_],
			{
				type: 'order',
				value: {
					column,
					options: {
						ascending: options?.ascending ?? true,
						nullsFirst: options?.nullsFirst ?? false,
						referencedTable: options?.referencedTable ?? null,
					},
				},
			},
		];
		return builder;
	}

	overlaps(column: string, value: DataType) {
		this[operations_].push({ type: 'overlaps', value: { column, value } });
		return this;
	}

	range(from: number, to: number, referencedTable?: string) {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'range', value: { from, to, referencedTable: referencedTable ?? null } }];
		return builder;
	}

	rangeAdjacent(column: string, range: DataType) {
		this[operations_].push({ type: 'rangeAdjacent', value: { column, range } });
		return this;
	}

	rangeGt(column: string, range: DataType) {
		this[operations_].push({ type: 'rangeGt', value: { column, range } });
		return this;
	}

	rangeGte(column: string, range: DataType) {
		this[operations_].push({ type: 'rangeGte', value: { column, range } });
		return this;
	}

	rangeLt(column: string, range: DataType) {
		this[operations_].push({ type: 'rangeLt', value: { column, range } });
		return this;
	}

	rangeLte(column: string, range: DataType) {
		this[operations_].push({ type: 'rangeLte', value: { column, range } });
		return this;
	}

	select(columns: string) {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'select', value: columns }];
		return builder;
	}

	single(): PostgresTransformBuilder {
		const builder = new PostgresTransformBuilder(this[operationsAction_]);
		builder[operations_] = [...this[operations_], { type: 'single' }];
		return builder;
	}

	textSearch(
		column: string,
		query: DataType,
		options?: {
			config?: string;
			type?: 'plain' | 'phrase' | 'phrase';
		}
	) {
		let nativeType = false;
		switch (options?.type) {
			case 'plain':
			case 'phrase':
			case 'phrase':
				nativeType = true;
				break;
		}
		if (nativeType) {
			this[operations_].push({
				type: 'textSearch',
				value: {
					column,
					query,
					options: {
						config: options?.config ?? null,
						type: options?.type,
					},
				},
			});
		} else {
			this[operations_].push({
				type: 'textSearch',
				value: {
					column,
					query,
					options: {
						config: options?.config ?? null,
					},
				},
			});
		}
		return this;
	}

	then<TResult1 = Result, TResult2 = never>(onfulfilled?: (value: Result) => TResult1 | PromiseLike<TResult1>, onrejected?: (reason: any) => TResult2 | PromiseLike<TResult2>): PromiseLike<TResult1 | TResult2> {
		return new Promise((resolve, reject) => {
			this.native_.execute(
				new kotlin.jvm.functions.Function1({
					invoke(data) {
						resolve(dataDeserialize(data));
					},
				})
			);
		}).then(onfulfilled, onrejected);
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
		const ret = new SupabasePostgresQueryBuilder();
		ret.native_ = this.native.from(table);
		return ret;
	}

	schema(schema: string): SupabasePostgresClient {
		return SupabasePostgresClient.fromNative(this.native.schema(schema));
	}
}

export class SupabasePostgresQueryBuilder {
	native_: NSCSupabasePostgresQueryBuilder;
	insert(
		values: Record<any, DataType> | DataType[],
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			defaultToNull?: boolean;
		}
	) {
		return new PostgresFilterBuilder({
			action: 'insert',
			values,
			options,
		});
	}

	update(
		values: Record<any, DataType>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
		}
	) {
		return new PostgresFilterBuilder({
			action: 'update',
			values,
			options,
		});
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
		return new PostgresFilterBuilder({
			action: 'upsert',
			values,
			options,
		});
	}

	delete(options?: { count?: 'exact' | 'planned' | 'estimated' }) {
		return new PostgresFilterBuilder({
			action: 'delete',
			options,
		});
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
		return new PostgresFilterBuilder({
			action: 'select',
			columns: columns ?? '*',
			options: {
				head,
				count,
			},
		});
	}
}
