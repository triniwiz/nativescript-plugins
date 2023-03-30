import { RealtimeSubscription, RealtimeClient, Transformers } from '@triniwiz/nativescript-supabase-realtime';
import { SupabaseEventTypes, SupabaseRealtimePayload } from './types';

export class SupabaseRealtimeClient {
	subscription: RealtimeSubscription;

	constructor(socket: RealtimeClient, schema: string, tableName: string) {
		const topic = tableName === '*' ? `realtime:${schema}` : `realtime:${schema}:${tableName}`;
		this.subscription = socket.channel(topic);
	}

	private getPayloadRecords(payload: any) {
		const records = {
			new: {},
			old: {},
		};

		if (payload.type === 'INSERT' || payload.type === 'UPDATE') {
			records.new = Transformers.convertChangeData(payload.columns, payload.record);
		}

		if (payload.type === 'UPDATE' || payload.type === 'DELETE') {
			records.old = Transformers.convertChangeData(payload.columns, payload.old_record);
		}

		return records;
	}

	/**
	 * The event you want to listen to.
	 *
	 * @param event The event
	 * @param callback A callback function that is called whenever the event occurs.
	 */
	on(event: SupabaseEventTypes, callback: Function) {
		this.subscription.on(event, (payload: any) => {
			let enrichedPayload: SupabaseRealtimePayload<any> = {
				schema: payload.schema,
				table: payload.table,
				commit_timestamp: payload.commit_timestamp,
				eventType: payload.type,
				new: {},
				old: {},
			};

			enrichedPayload = { ...enrichedPayload, ...this.getPayloadRecords(payload) };

			callback(enrichedPayload);
		});
		return this;
	}

	/**
	 * Enables the subscription.
	 */
	subscribe(callback: Function = () => {}) {
		this.subscription.onError((e: Error) => callback('SUBSCRIPTION_ERROR', e));
		this.subscription.onClose(() => callback('CLOSED'));
		this.subscription
			.subscribe()
			.receive('ok', () => callback('SUBSCRIBED'))
			.receive('error', (e: Error) => callback('SUBSCRIPTION_ERROR', e))
			.receive('timeout', () => callback('RETRYING_AFTER_TIMEOUT'));
		return this.subscription;
	}
}
