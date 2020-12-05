import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptMongoStitchSdkComponent } from './nativescript-mongo-stitch-sdk.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptMongoStitchSdkComponent }])],
	declarations: [NativescriptMongoStitchSdkComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptMongoStitchSdkModule {}
