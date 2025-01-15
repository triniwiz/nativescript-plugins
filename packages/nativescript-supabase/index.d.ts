import { Auth } from './auth';
import { SupabaseFunctionsClient } from './functions';
import { SupabaseStorageClient } from './storage';
import { SupabaseRealtimeClient } from './realtime';
export class SupabaseClient {
	readonly auth: Auth;

	readonly functions: SupabaseFunctionsClient;

	readonly storage: SupabaseStorageClient;

	channel(name: string): SupabaseRealtimeClient;

	removeChannel(channel: SupabaseRealtimeClient): Promise<void>;

	removeAllChannels(): Promise<void>;
}

export function createClient(supabaseURL: string, supabaseKey: string): SupabaseClient;
