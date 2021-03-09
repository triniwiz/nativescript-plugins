import { registerElement } from 'react-nativescript';
registerElement('youtubePlayer', () => require('../').YoutubePlayer);
import type { YoutubePlayer } from '../';
import { ViewAttributes, NativeScriptProps } from 'react-nativescript';

export declare type YoutubePlayerAttributes = ViewAttributes & {};

declare global {
	module JSX {
		interface IntrinsicElements {
			youtubePlayer: NativeScriptProps<YoutubePlayerAttributes, YoutubePlayer>;
		}
	}
}
