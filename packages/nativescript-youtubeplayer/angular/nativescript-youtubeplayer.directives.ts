import { Directive } from '@angular/core';

@Directive({
	selector: 'YoutubePlayer',
})
export class YoutubePlayerDirective {}

export const DIRECTIVES = [YoutubePlayerDirective];
