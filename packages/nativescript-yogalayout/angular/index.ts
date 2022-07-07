import {NgModule} from '@angular/core';
import {registerElement} from '@nativescript/angular';

import {YogaLayoutItDirective} from './yogalayout.directive';
export * from './yogalayout.directive';

import { View } from '@triniwiz/nativescript-yogalayout';

@NgModule({
  declarations: [YogaLayoutItDirective],
  exports: [YogaLayoutItDirective],
})
export class YogaLayoutModule {
}

registerElement('View', () => View);
