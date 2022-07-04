import {NgModule} from '@angular/core';
import {registerElement} from '@nativescript/angular';

import {ImageCacheItDirective} from './image-cache-it.directive';
export * from './image-cache-it.directive';

@NgModule({
  declarations: [ImageCacheItDirective],
  exports: [ImageCacheItDirective],
})
// @ts-ignore
export class ImageCacheItModule {
}

registerElement('ImageCacheIt', () => require('@triniwiz/nativescript-image-cache-it').ImageCacheIt);
