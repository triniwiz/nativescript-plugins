import { YoutubePlayerBase, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState } from './common';
import { EventData } from '@nativescript/core';

export { YoutubePlayerErrors, YoutubePlayerState, YoutubePlayerInternalErrors };

export interface YoutubePlayerErrorEvent extends EventData {
	error: YoutubePlayerErrors;
}

export interface YoutubePlayerStateChangeEvent extends EventData {
	state: YoutubePlayerState;
}

export interface YoutubePlayerCurrentTimeEvent extends EventData {
	currentTime: number;
}

export interface YoutubePlayerFullScreenEvent extends EventData {
	fullscreen: boolean;
}

export interface YoutubePlayerPlaybackQualityEvent extends EventData {
	quality: string;
}

export interface YoutubePlayerPlaybackRateChangeEvent extends EventData {
	rate: number;
}

export declare class YoutubePlayer extends YoutubePlayerBase {
	get duration(): number;

	play(): void;

	playById(id: string): void;

	playByUrl(url: string): void;

	cueVideoById(id: string): void;

	cueVideoByUrl(url: string): void;

	pause(): void;

	next(): void;

	mute(): void;

	unmute(): void;

	previous(): void;

	seekTo(value: number): void;

	setVolume(value: number): void;

	stop(): void;

	destroy(): void;

	toggleFullScreen(): void;

	get state(): YoutubePlayerState;

	on(eventNames: 'ready', callback: (args: EventData) => void, thisArg?: any);

	on(eventNames: 'apiReady', callback: (args: EventData) => void, thisArg?: any);

	on(eventNames: 'stateChange', callback: (args: YoutubePlayerStateChangeEvent) => void, thisArg?: any);

	on(eventNames: 'currentTime', callback: (args: YoutubePlayerCurrentTimeEvent) => void, thisArg?: any);

	on(eventNames: 'error', callback: (args: YoutubePlayerErrorEvent) => void, thisArg?: any);

	on(eventNames: 'fullScreen', callback: (args: YoutubePlayerFullScreenEvent) => void, thisArg?: any);

	on(eventNames: 'playBackQuality', callback: (args: YoutubePlayerPlaybackQualityEvent) => void, thisArg?: any);

	on(eventNames: 'playbackRate', callback: (args: YoutubePlayerPlaybackRateChangeEvent) => void, thisArg?: any);
}
