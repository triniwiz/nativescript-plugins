import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAwesomeLoadersComponent } from './nativescript-awesome-loaders.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAwesomeLoadersComponent }])],
	declarations: [NativescriptAwesomeLoadersComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptAwesomeLoadersModule {}
