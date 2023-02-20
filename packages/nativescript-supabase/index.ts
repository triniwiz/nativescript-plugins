import SupabaseClient from './SupabaseClient';
import { SupabaseClientOptions, SupabaseRealtimePayload } from './lib/types';
import { User as AuthUser, Session as AuthSession } from '@triniwiz/nativescript-supabase-gotrue';

export * from '@triniwiz/nativescript-supabase-gotrue';
export * from '@triniwiz/nativescript-supabase-realtime';

/**
 * Creates a new Supabase Client.
 */
const createClient = (supabaseUrl: string, supabaseKey: string, options?: SupabaseClientOptions) => {
	return new SupabaseClient(supabaseUrl, supabaseKey, options);
};

export { createClient, SupabaseClient, SupabaseClientOptions, SupabaseRealtimePayload, AuthUser, AuthSession };
