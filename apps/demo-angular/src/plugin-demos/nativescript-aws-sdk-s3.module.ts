import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAwsSdkS3Component } from './nativescript-aws-sdk-s3.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAwsSdkS3Component }])],
	declarations: [NativescriptAwsSdkS3Component],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAwsSdkS3Module {}
