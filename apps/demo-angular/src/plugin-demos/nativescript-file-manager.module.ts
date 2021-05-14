import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFileManagerComponent } from './nativescript-file-manager.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFileManagerComponent }])],
	declarations: [NativescriptFileManagerComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFileManagerModule {}
