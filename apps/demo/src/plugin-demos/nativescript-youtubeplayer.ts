import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptYoutubeplayer } from '@demo/shared';
import { YoutubePlayer, YoutubePlayerState } from '@triniwiz/nativescript-youtubeplayer';

let player: YoutubePlayer;

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();

	// @ts-ignore
	player = page.getViewById('player');
	player.on('ready', () => {
		console.log('onReady');
	});

	player.on('error', (event) => {
		console.log('error: ', event.error);
	});

	player.on('stateChange', (event) => {
		switch (event.state) {
			case YoutubePlayerState.Unstarted:
				break;
			case YoutubePlayerState.Buffering:
				break;
			case YoutubePlayerState.Cued:
				break;
			case YoutubePlayerState.Ended:
				console.log('ended');
				break;
			case YoutubePlayerState.Playing:
				console.log('playing');
				break;
			case YoutubePlayerState.Paused:
				console.log('paused');
				break;
		}
	});

	player.on('fullScreen', (event) => {
		console.log(`isFullScreen: ${event.fullscreen}`);
	});
}

export function toggleFullScreen() {
	player.toggleFullScreen();
}

export class DemoModel extends DemoSharedNativescriptYoutubeplayer {}
