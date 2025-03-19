import { Directive } from '@angular/core';

@Directive({
	selector: 'YoutubePlayer',
	standalone: false,
})
export class YoutubePlayerDirective {}

export const DIRECTIVES = [YoutubePlayerDirective];
