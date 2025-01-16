import { Application, Folder, knownFolders } from '@nativescript/core';
import * as dateFns from 'date-fns';
import { createClient, SupabaseClient } from '@triniwiz/nativescript-supabase';
const resources = Application.getResources();
resources['timeFromNow'] = (date) => dateFns.formatRelative(date, new Date());
Application.setResources(resources);
declare const io;

// NOTE: Uncomment to test the following plugins:
// import { File } from '@triniwiz/nativescript-file-manager';
// import { handleContinueUserActivity, handleOpenURL, init } from '@triniwiz/nativescript-stripe';
// import { publishableKey } from './plugin-demos/nativescript-stripe-src/std-view/stripe.service';
// init(publishableKey);
// if (global.isIOS) {
//   @NativeClass()
//   @ObjCClass(UIApplicationDelegate)
//   class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
//     applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean {
//       console.log('applicationContinueUserActivityRestorationHandler');
//       return handleContinueUserActivity(userActivity);
//     }

//     applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
//       console.log('applicationOpenURLOptions');
//       return handleOpenURL(url);
//     }
//   }

//   Application.ios.delegate = UIApplicationDelegateImpl;
// } else {
//   /*Folder.fromPath(knownFolders.currentApp().path  + `/assets`).getEntities().then(items =>{
//     console.log(items);
//   });
//   const legacyDownloads = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS);
//   const legacyAudio = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_MUSIC);
//   console.log(File.fromPath(legacyDownloads.getAbsolutePath()), File.fromPath(legacyAudio.getAbsolutePath()))
//   */
// }

// try {
// 	const client: SupabaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

// 	(async function () {
// 		try {
// 			const result = await client.from('countries').insert({ id: 1, name: 'Albania' });
// 			console.log(result);
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	})();

// 	client.auth.onAuthStateChange((state, session) => {
// 		console.log('onAuthStateChange', state, !!session);
// 	});

// 	const thing = client.channel('thing');

// 	thing.on('broadcast', { event: 'chat' }, (data) => {
// 		console.log('broadcast', data);
// 	});

// 	thing.on('presence', { event: 'sync' }, (data) => {
// 		console.log('presence:sync', data);
// 	});

// 	thing.on('presence', { event: 'join' }, (data) => {
// 		console.log('presence:join', data);
// 	});

// 	thing.on('presence', { event: 'leave' }, (data) => {
// 		console.log('presence:leave', data);
// 	});

// 	(async function () {
// 		const session = await client.auth.signIn('fortune.osei@yahoo.com', 'password');
// 		// const updated = await client.auth.update({
// 		// 	data: {
// 		// 		firstName: 'Osei',
// 		// 		lastName: 'Fortune',
// 		// 	},
// 		// });

// 		try {
// 			await client.functions.invoke('hello-world', {
// 				body: { foo: 'bar', name: 'Osei Fortune' },
// 				method: 'POST',
// 			});
// 			console.log('?');
// 		} catch (error) {
// 			console.log(error);
// 			// try {
// 			// 	let data = await error.context.json();
// 			// } catch (error) {
// 			// 	console.log(error);
// 			// }
// 		}

// 		thing.on('postgres_changes', { event: '*', scheme: 'public' }, (data) => {
// 			console.log('postgres_changes', data);
// 		});

// 		try {
// 			await thing.subscribe();
// 		} catch (error) {
// 			console.log('subscribe error', error);
// 		}

// 		//	client.auth.signOut();
// 	})();

// 	// client.auth.addOnAuthStateChange((state, session) => {
// 	// 	console.log(state, session);
// 	// });
// 	// client.auth.signUpDataRedirectTo(
// 	// 	'fortune.osei@yahoo.com',
// 	// 	'password',
// 	// 	null,
// 	// 	{
// 	// 		first: 'Osei',
// 	// 		last: 'Fortune',
// 	// 	} as never,
// 	// 	'iogithubtriniwizpluginsdemo://',
// 	// 	(user, session, error) => {
// 	// 		console.log(user, session, error);
// 	// 	}
// 	// );
// 	// client.auth.signIn('fortune.osei@yahoo.com', 'password', null, (session, error) => {
// 	// 	console.log(dataSerialize(session.user.appMetadata), error);
// 	// });
// 	// console.log(client.auth.currentSession);
// } catch (e) {
// 	console.error(e);
// }
Application.run({ moduleName: 'app-root' });
