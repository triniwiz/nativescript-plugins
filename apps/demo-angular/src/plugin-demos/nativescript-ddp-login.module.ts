import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptDdpLoginComponent } from './nativescript-ddp-login.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptDdpLoginComponent }])],
	declarations: [NativescriptDdpLoginComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptDdpLoginModule {}
