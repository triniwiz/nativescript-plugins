import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMessengerComponent } from './nativescript-messenger.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMessengerComponent }])],
  declarations: [NativescriptMessengerComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptMessengerModule {}
