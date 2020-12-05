import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptVideorecorderComponent } from './nativescript-videorecorder.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptVideorecorderComponent }])],
	declarations: [NativescriptVideorecorderComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptVideorecorderModule {}
