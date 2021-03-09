import { DemoSharedBase } from '../utils';
import {} from '@triniwiz/nativescript-youtubeplayer';

export class DemoSharedNativescriptYoutubeplayer extends DemoSharedBase {
	videoId = 'L_jWHffIx5E';

	changeSource() {
		this.set('videoId', 'dQw4w9WgXcQ');
	}
	getDanceHall() {
		this.set('videoId', 'wH_0_pijbZY');
	}
	getHipHop() {
		this.set('videoId', 'lwk5OUII9Vc');
	}
	getSoca() {
		this.set('videoId', 'vEG4qNW33mA');
	}
}
