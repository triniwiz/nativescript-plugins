import { EventData, Page } from '@nativescript/core';
import { MainViewModel } from './main-view-model';
import { ca } from 'date-fns/locale';
declare const com, kotlin;
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new MainViewModel();
}

//@ts-ignore
const client = io.github.triniwiz.supabase.SupabaseClient.createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

client.getAuth().addOnAuthStateChange(
	new kotlin.jvm.functions.Function1({
		invoke(state) {
			console.log('onAuthStateChange', state);
		},
	})
);

try {
	client.getAuth().signIn(
		'fortune.osei@yahoo.com',
		'password',
		null,
		new kotlin.jvm.functions.Function2({
			invoke(user, error) {
				console.log(user, error);
			},
		})
	);
} catch (e) {
	console.error(e);
}
