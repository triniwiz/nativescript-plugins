export class SupabaseRealtimeClient {
	on(type: 'broadcast' | 'presence' | 'postgres_changes', filter: { event: 'sync' | 'join' | 'leave' } | { event: string; scheme: string; filter?: string; table?: string } | { event: string }, callback: (data) => void);

	subscribe(): Promise<void>;

	unsubscribe(): Promise<void>;
}
