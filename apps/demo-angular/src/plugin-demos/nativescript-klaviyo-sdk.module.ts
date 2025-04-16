import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptKlaviyoSdkComponent } from './nativescript-klaviyo-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptKlaviyoSdkComponent }])],
  declarations: [NativescriptKlaviyoSdkComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptKlaviyoSdkModule {}
