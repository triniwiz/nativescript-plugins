import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptPubnubComponent } from './nativescript-pubnub.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptPubnubComponent }])],
	declarations: [NativescriptPubnubComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptPubnubModule {}
