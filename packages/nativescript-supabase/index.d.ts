import { Auth } from './auth';
import { SupabaseFunctionsClient } from './functions';
import { SupabaseStorageClient } from './storage';
import { SupabaseRealtimeClient } from './realtime';
import { SupabasePostgresClient, SupabasePostgresQueryBuilder, PostgresFilterBuilder } from './postgres';
export * from './auth';
export * from './functions';
export * from './storage';
export * from './realtime';
export type DataType = string | number | boolean | null | Record<string, DataType> | Array<DataType> | Date;
export class SupabaseClient {
	readonly auth: Auth;

	readonly functions: SupabaseFunctionsClient;

	readonly storage: SupabaseStorageClient;

	from(relation: string): SupabasePostgresQueryBuilder;

	schema(schema: string): SupabasePostgresClient;

	channel(name: string): SupabaseRealtimeClient;

	removeChannel(channel: SupabaseRealtimeClient): Promise<void>;

	removeAllChannels(): Promise<void>;

	rpc(
		fn: string,
		args?: Record<string, any>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			get?: boolean;
			head?: boolean;
		}
	): PostgresFilterBuilder;
}

export function createClient(supabaseURL: string, supabaseKey: string): SupabaseClient;
