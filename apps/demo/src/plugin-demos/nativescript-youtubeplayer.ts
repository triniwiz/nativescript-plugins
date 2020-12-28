import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptYoutubeplayer } from '@demo/shared';
import { YoutubePlayer } from '@triniwiz/nativescript-youtubeplayer';

let player: YoutubePlayer;
export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();

	player = page.getViewById('player');
	player.onReady = ()=>{
		console.log('onReady');
	}
	player.onError = (error) => {
		console.log('error: ',error);
	}
	player.on('playing', args => {
		console.log('playing');
	});
	player.on('paused', args => {
		console.log('paused');
	});
	player.on('fullScreen', args => {
		console.log(`isFullScreen: ${args.object.get('value')}`);
	});
	player.on('ended', args => {
		console.log('ended');
	});
}

export function toggleFullScreen() {
	player.toggleFullScreen();
}


export class DemoModel extends DemoSharedNativescriptYoutubeplayer { }
