import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSseComponent } from './nativescript-sse.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSseComponent }])],
	declarations: [NativescriptSseComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSseModule {}
