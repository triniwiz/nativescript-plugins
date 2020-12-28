import { DemoSharedBase } from '../utils';
import { } from '@triniwiz/nativescript-youtubeplayer';

export class DemoSharedNativescriptYoutubeplayer extends DemoSharedBase {
	src = 'L_jWHffIx5E';
	options = { rel: 1 };

	changeSource() {
		this.set('src', 'dQw4w9WgXcQ');
	}
	getDanceHall() {
		this.set('src', 'wH_0_pijbZY');
	}
	getHipHop() {
		this.set('src', 'lwk5OUII9Vc');
	}
	getSoca() {
		this.set('src', 'vEG4qNW33mA');
	}
}
