import { Directive } from '@angular/core';

@Directive({
	selector: 'YoutubePlayer',
})
// @ts-ignore
export class YoutubePlayerDirective {}

export const DIRECTIVES = [YoutubePlayerDirective];
