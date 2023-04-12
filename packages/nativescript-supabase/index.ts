import 'core-js/actual/url';
import 'core-js/actual/url-search-params';
import SupabaseClient from './SupabaseClient';
import type { GenericSchema, SupabaseClientOptions } from './lib/types';

export * from '@triniwiz/nativescript-supabase-gotrue';
export type { User as AuthUser, Session as AuthSession } from '@triniwiz/nativescript-supabase-gotrue';
export type { PostgrestResponse, PostgrestSingleResponse, PostgrestMaybeSingleResponse, PostgrestError } from '@triniwiz/nativescript-supabase-postgrest';
export * from '@triniwiz/nativescript-supabase-realtime';
export { default as SupabaseClient } from './SupabaseClient';
export type { SupabaseClientOptions } from './lib/types';

/**
 * Creates a new Supabase Client.
 */
export const createClient = <Database = any, SchemaName extends string & keyof Database = 'public' extends keyof Database ? 'public' : string & keyof Database, Schema extends GenericSchema = Database[SchemaName] extends GenericSchema ? Database[SchemaName] : any>(supabaseUrl: string, supabaseKey: string, options?: SupabaseClientOptions<SchemaName>): SupabaseClient<Database, SchemaName, Schema> => {
	return new SupabaseClient(supabaseUrl, supabaseKey, options);
};
