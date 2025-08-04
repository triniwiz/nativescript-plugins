import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptKlaviyoPushSdkComponent } from './nativescript-klaviyo-push-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptKlaviyoPushSdkComponent }])],
  declarations: [NativescriptKlaviyoPushSdkComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptKlaviyoPushSdkModule {}
