import { DemoSharedBase } from '../utils';
import { createClient, SupabaseClient } from '@triniwiz/nativescript-supabase';
import { File as nsFile, knownFolders, path } from '@nativescript/core';

export class DemoSharedNativescriptSupabase extends DemoSharedBase {
	supabase: SupabaseClient;

	constructor() {
		super();
		this.supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_KEY');
		this.loginUser().then();
	}

	async loginUser() {
		try {
			let currentUser = this.supabase.auth.currentUser;

			if (!currentUser) {
				const result = await this.supabase.auth.signUp({
					email: 'fortune.osei@yahoo.com',
					password: 'password',
				});
				currentUser = result.user;
			}

			console.log(currentUser);

			const mySubscription = this.supabase
				.channel('table_db_changes')
				.on('postgres_changes', { event: '*', schema: 'public', table: 'items' }, (payload) => {
					console.log('Realtime update received:', payload);
					switch (payload.eventType) {
						case 'INSERT':
							break;
						case 'UPDATE':
							break;
						case 'DELETE':
							break;
					}
				})
				.subscribe((status) => {
					console.log(`Subscription status: ${status}`);
				});

			const { data, error } = await this.supabase.from('items').select('*');

			if (error) {
				console.log('query: error', error);
			} else {
				console.log('query: data', data);
			}

			// if (data?.length === 0) {
			// 	const { data, error } = await this.supabase.from('demo').insert([
			// 		{
			// 			first: 'Osei',
			// 			last: 'Fortune',
			// 			country: 'Trinidad & Tobago',
			// 		},
			// 	]);

			// 	console.log(data, error);
			// } else {
			// 	console.log(data);
			// }

			// const file = nsFile.fromPath(path.join(knownFolders.currentApp().path, '/assets/big_buck_bunny.mp4'));
			// const bytes = await file.read();
			// let buf;
			// if (global.isIOS) {
			// 	buf = interop.bufferFromData(bytes);
			// } else if (global.isAndroid) {
			// 	buf = new Uint8Array(bytes);
			// }
			// const blob = new Blob([buf]);
			// const f = new File([blob], 'big_buck_bunny.mp4', { type: 'video/mp4' });
			// const result = await this.supabase.storage.from('ns-demo').upload('big_buck_bunny.mp4', f);
			// console.info('result ?', result.error, f);
		} catch (e) {
			console.error(e);
		}
	}
}
