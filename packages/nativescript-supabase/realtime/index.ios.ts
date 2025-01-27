import { dataDeserialize } from '@nativescript/core';

export class SupabaseRealtimeClient {
	_native: NSCSupabaseChannel;

	get status() {
		switch (this.native.status) {
			case NSCSupabaseRealtimeChannelStatus.Unsubscribed:
				return 'UNSUBSCRIBED';
			case NSCSupabaseRealtimeChannelStatus.Subscribing:
				return 'SUBSCRIBING';
			case NSCSupabaseRealtimeChannelStatus.Subscribed:
				return 'SUBSCRIBED';
			case NSCSupabaseRealtimeChannelStatus.Unsubscribing:
				return 'UNSUBSCRIBING';
		}
	}
	static fromNative(value: NSCSupabaseChannel): SupabaseRealtimeClient {
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
				this.native.onBroadcast(filter.event, (message) => {
					callback(dataDeserialize(message));
				});
			} else if (type === 'presence') {
				this.native.onPresenceChange(filter.event, (event) => {
					callback(dataDeserialize(event));
				});
			} else if (type === 'postgres_changes' && filter && 'event' in filter && 'schema' in filter) {
				this.native.onPostgresChange(filter.event, filter.schema, filter.filter ?? null, filter.table ?? null, (payload) => {
					callback(dataDeserialize(payload));
				});
			}
		}
		return this;
	}

	subscribe() {
		return new Promise<void>((resolve, reject) => {
			this.native.subscribe(() => {
				resolve();
			});
		});
	}

	unsubscribe() {
		return new Promise<void>((resolve, reject) => {
			this.native.unsubscribe(() => {
				resolve();
			});
		});
	}
}
