import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerElement } from '@nativescript/angular';
import { DIRECTIVES } from './nativescript-youtubeplayer.directives';
import { YoutubePlayer } from '@triniwiz/nativescript-youtubeplayer';
export * from './nativescript-youtubeplayer.directives';
registerElement('YoutubePlayer', () => YoutubePlayer);
@NgModule({
	declarations: [DIRECTIVES],
	exports: [DIRECTIVES],
	schemas: [NO_ERRORS_SCHEMA],
})
//@ts-ignore
export class YoutubePlayerModule {}
