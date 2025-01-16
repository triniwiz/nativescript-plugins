import { dataDeserialize } from '@nativescript/core/utils';
import { DataType } from '..';

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

	constructor() {}

	static fromNative(value: NSCSupabasePostgresFilterBuilder) {
		const builder = new PostgresFilterBuilder();
		builder.native_ = value;
		return builder;
	}

	get native() {
		return this.native_;
	}

	eq(column: string, value: DataType) {
		this.native_ = this.native.eq(column, value);
		return this;
	}

	gte(column: string, value: DataType) {
		this.native_ = this.native.gte(column, value);
		return this;
	}

	lte(column: string, value: DataType) {
		this.native_ = this.native.lte(column, value);
		return this;
	}

	single(): PostgresTransformBuilder {
		return PostgresTransformBuilder.fromNative(this.native.single());
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

export class SupabasePostgreClient {
	native_: NSCSupabasePostgres;

	get native() {
		return this.native_;
	}

	static fromNative(value: NSCSupabasePostgres) {
		const client = new SupabasePostgreClient();
		client.native_ = value;
		return client;
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
