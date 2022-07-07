import { NgModule } from '@angular/core';
import { registerElement } from '@nativescript/angular';

import { ImageCacheItDirective } from './image-cache-it.directive';
export * from './image-cache-it.directive';
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';

@NgModule({
	declarations: [ImageCacheItDirective],
	exports: [ImageCacheItDirective],
})
export class ImageCacheItModule {}

registerElement('ImageCacheIt', () => ImageCacheIt);
