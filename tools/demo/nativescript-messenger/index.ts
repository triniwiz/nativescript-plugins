import { DemoSharedBase } from '../utils';
import { available, send } from '@triniwiz/nativescript-messenger';

export class DemoSharedNativescriptMessenger extends DemoSharedBase {
	testIt() {
		available()
			.then(() => {
				return send(['905-454-1234', '905-454-4321', '905-929-1122'], 'My message', 'Subject of Message', [
					{
						fileName: 'destiny_2.jpg',
						mimeType: 'image/jpg',
						path: '~/assets/destiny_2.jpg',
					},
					{
						fileName: 'Big_Buck_Bunny_first_23_seconds_1080p.ogv.180p.vp9.mp4',
						mimeType: 'video/mp4',
						path: '~/assets/Big_Buck_Bunny_first_23_seconds_1080p.ogv.180p.vp9.mp4',
					},
					{
						fileName: 'a42.jpeg',
						mimeType: 'image/jpeg',
						path: '~/assets/a42.jpeg',
					},
				]);
			})
			.then((res) => {
				console.log(res);
			})
			.catch((e) => {
				console.log('send failed:', e);
			});
	}
}
