import { Auth } from './auth';
import { SupabaseFunctionsClient } from './functions';
import { SupabaseStorageClient } from './storage';
import { SupabaseRealtimeClient } from './realtime';
import { SupabasePostgreClient } from './postgres';
export type DataType = string | number | boolean | null | Record<string, DataType> | Array<DataType> | Date;
export class SupabaseClient {
	readonly auth: Auth;

	readonly functions: SupabaseFunctionsClient;

	readonly storage: SupabaseStorageClient;

	from(relation: string): SupabasePostgreClient;

	schema(schema: string): SupabasePostgreClient;

	channel(name: string): SupabaseRealtimeClient;

	removeChannel(channel: SupabaseRealtimeClient): Promise<void>;

	removeAllChannels(): Promise<void>;
}

export function createClient(supabaseURL: string, supabaseKey: string): SupabaseClient;
