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
			let currentUser = this.supabase.auth.user();
			if (!currentUser) {
				const result = await this.supabase.auth.signIn({
					email: 'fortune.osei@yahoo.com',
					password: 'password',
				});
				currentUser = result.user;
			}

			const mySubscription = this.supabase
				.from('*')
				.on('*', (payload) => {
					console.log('Change received!', payload);
				})
				.subscribe();

			const { data, error } = await this.supabase.from('demo').select('first');
			if (data?.length === 0) {
				const { data, error } = await this.supabase.from('demo').insert([
					{
						first: 'Osei',
						last: 'Fortune',
						country: 'Trinidad & Tobago',
					},
				]);
			}
			const file = nsFile.fromPath(path.join(knownFolders.currentApp().path, '/assets/big_buck_bunny.mp4'));
			const bytes = await file.read();
			let buf;
			if (global.isIOS) {
				buf = interop.bufferFromData(bytes);
			} else if (global.isAndroid) {
				buf = new Uint8Array(bytes);
			}
			const blob = new Blob([buf]);
			const f = new File([blob], 'big_buck_bunny.mp4', { type: 'video/mp4' });
			const result = await this.supabase.storage.from('NativeScriptDemo').upload('big_buck_bunny.mp4', f);
			console.info('result ?', result.error, f);
		} catch (e) {
			console.error(e);
		}
	}
}
