import { Auth } from './auth';
import { SupabaseFunctionsClient } from './functions';
import { SupabaseStorageClient } from './storage';
import { SupabaseRealtimeClient } from './realtime';
import { PostgresFilterBuilder, SupabasePostgresClient, SupabasePostgresQueryBuilder } from './postgres';
type RealtimeClient = SupabaseRealtimeClient & {
	native: io.github.triniwiz.supabase.SupabaseChannel;
};


function parseCount(count?: 'exact' | 'planned' | 'estimated') {
	switch (count) {
		case 'exact':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.exact;
		case 'planned':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.planned;
		case 'estimated':
			return (<any>io).github.triniwiz.supabase.SupabaseClient.CountOption.estimated;
		default:
			return null;
	}
}

const auth_ = Symbol('[[auth]]');
const functions_ = Symbol('[[functions]]');
const storage_ = Symbol('[[storage]]');
export class SupabaseClient {
	native: io.github.triniwiz.supabase.SupabaseClient;
	static fromNative(native: io.github.triniwiz.supabase.SupabaseClient): SupabaseClient {
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
			this.native.removeChannel((<RealtimeClient>channel).native);
			resolve();
		});
	}

	removeAllChannels() {
		return new Promise<void>((resolve, reject) => {
			this.native.removeAllChannels();
			resolve();
		});
	}

	rpc(
		fn: string,
		args?: Record<string, any>,
		options?: {
			count?: 'exact' | 'planned' | 'estimated';
			get?: boolean;
			head?: boolean;
		}
	) {
		const ret = new PostgresFilterBuilder();
		if (args && options?.count) {
			const value = (<any>this).native.rpc(fn, JSON.stringify(args), parseCount(options.count) as never);
			(<any>ret).native_ = value;

			return ret;
		} else if (args) {
			const value = (<any>this).native.rpc(fn, JSON.stringify(args), null);

			(<any>ret).native_ = value;

			return ret;
		} else if (options?.count) {
			const value = (<any>this).native.rpc(fn, null, parseCount(options.count) as never);
			(<any>ret).native_ = value;

			return ret;
		} else {
			const value = (<any>this).native.rpc(fn, null, null);
			(<any>ret).native_ = value;

			return ret;
		}
	}
}

export function createClient(supabaseURL: string, supabaseKey: string) {
	try {
		const client = io.github.triniwiz.supabase.SupabaseClient.createClient(supabaseURL, supabaseKey);
		return SupabaseClient.fromNative(client);
	} catch (e) {
		throw new Error(e.message);
	}
}
