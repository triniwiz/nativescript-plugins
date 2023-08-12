import { GoTrueClient } from '@triniwiz/nativescript-supabase-gotrue';
import { SupabaseAuthClientOptions } from './types';

export class SupabaseAuthClient extends GoTrueClient {
	constructor(options: SupabaseAuthClientOptions) {
		super(options);
	}
}
