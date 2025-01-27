import { dataDeserialize } from '../utils';
declare const kotlin: any;
export class SupabaseRealtimeClient {
	_native: io.github.triniwiz.supabase.SupabaseChannel;

	get status() {
		// switch (this.native.get) {
		// 	case NSCSupabaseRealtimeChannelStatus.Unsubscribed:
		// 		return 'UNSUBSCRIBED';
		// 	case NSCSupabaseRealtimeChannelStatus.Subscribing:
		// 		return 'SUBSCRIBING';
		// 	case NSCSupabaseRealtimeChannelStatus.Subscribed:
		// 		return 'SUBSCRIBED';
		// 	case NSCSupabaseRealtimeChannelStatus.Unsubscribing:
		// 		return 'UNSUBSCRIBING';
		// }
		return '';
	}
	static fromNative(value: io.github.triniwiz.supabase.SupabaseChannel): SupabaseRealtimeClient {
		if (!value) return null;
		const ret = new SupabaseRealtimeClient();
		ret._native = value;
		return ret;
	}
	get native() {
		return this._native;
	}

	on(type: 'broadcast' | 'presence' | 'postgres_changes', filter: { event: 'sync' | 'join' | 'leave' } | { event: string; schema: string; filter?: string; table?: string } | { event: string }, callback: (data) => void) {
		if (type) {
			if (type === 'broadcast') {
				this.native.onBroadcast(
					filter.event,
					new kotlin.jvm.functions.Function1({
						invoke(message) {
							callback(JSON.parse(message));
						},
					}),
				);
			} else if (type === 'presence') {
				this.native.onPresenceChange(
					filter.event,
					new kotlin.jvm.functions.Function1({
						invoke(event) {
							callback(JSON.parse(event));
						},
					}),
				);
			} else if (type === 'postgres_changes' && filter && 'event' in filter && 'schema' in filter) {
				this.native.onPostgresChange(
					filter.event,
					filter.schema,
					filter.filter ?? null,
					filter.table ?? null,
					new kotlin.jvm.functions.Function1({
						invoke(payload) {
							callback(JSON.parse(payload));
						},
					}),
				);
				console.log('onPostgresChange', filter);
			}
		}
		return this;
	}

	subscribe() {
		return new Promise<void>((resolve, reject) => {
			this.native.subscribe(
				new kotlin.jvm.functions.Function0({
					invoke() {
						resolve();
					},
				}),
			);
		});
	}

	unsubscribe() {
		return new Promise<void>((resolve, reject) => {
			this.native.unsubscribe(
				new kotlin.jvm.functions.Function0({
					invoke() {
						resolve();
					},
				}),
			);
		});
	}
}
