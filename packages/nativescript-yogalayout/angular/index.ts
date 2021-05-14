import {NgModule} from '@angular/core';
import {registerElement} from '@nativescript/angular';

import {YogaLayoutItDirective} from './yogalayout.directive';


@NgModule({
  declarations: [YogaLayoutItDirective],
  exports: [YogaLayoutItDirective],
})
// @ts-ignore
export class YogaLayoutModule {
}

registerElement('View', () => require('@triniwiz/nativescript-yogalayout').View);
