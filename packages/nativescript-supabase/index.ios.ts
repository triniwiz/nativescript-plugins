import { Auth } from './auth';
import { SupabaseFunctionsClient } from './functions';
import { SupabaseStorageClient } from './storage';
import { SupabaseRealtimeClient } from './realtime';
import { SupabasePostgresClient, SupabasePostgresQueryBuilder } from './postgres';
type RealtimeClient = SupabaseRealtimeClient & {
	native: NSCSupabaseChannel;
};

const auth_ = Symbol('[[auth]]');
const functions_ = Symbol('[[functions]]');
const storage_ = Symbol('[[storage]]');
export class SupabaseClient {
	native: NSCSupabaseClient;
	static fromNative(native: NSCSupabaseClient): SupabaseClient {
		if (!native) return null;
		const ret = new SupabaseClient();
		ret.native = native;
		return ret;
	}

	[auth_] = new (Auth as any)(this);
	public get auth() {
		return this[auth_];
	}

	[functions_] = new SupabaseFunctionsClient(this);
	get functions(): SupabaseFunctionsClient {
		return this[functions_];
	}

	[storage_] = new SupabaseStorageClient(this);
	get storage(): SupabaseStorageClient {
		return this[storage_];
	}

	schema(schema: string): SupabasePostgresClient {
		return (<any>SupabasePostgresClient).fromNative(this.native.schema(schema));
	}

	from(relation: string): SupabasePostgresQueryBuilder {
		return (<any>SupabasePostgresQueryBuilder).fromNative(this.native.from(relation));
	}

	channel(name: string) {
		return (<any>SupabaseRealtimeClient).fromNative(this.native.channel(name));
	}

	removeChannel(channel: SupabaseRealtimeClient) {
		return new Promise<void>((resolve, reject) => {
			this.native.removeChannel((<RealtimeClient>channel).native, () => {
				resolve();
			});
		});
	}

	removeAllChannels() {
		return new Promise<void>((resolve, reject) => {
			this.native.removeAllChannels(() => {
				resolve();
			});
		});
	}
}

export function createClient(supabaseURL: string, supabaseKey: string) {
	try {
		const client = NSCSupabaseClient.createClientError(supabaseURL, supabaseKey);
		return SupabaseClient.fromNative(client);
	} catch (e) {
		throw new Error(e.message);
	}
}
