import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAwsSdkComponent } from './nativescript-aws-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAwsSdkComponent }])],
	declarations: [NativescriptAwsSdkComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAwsSdkModule {}
