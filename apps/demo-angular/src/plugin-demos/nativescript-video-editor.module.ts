import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptVideoEditorComponent } from './nativescript-video-editor.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptVideoEditorComponent }])],
	declarations: [NativescriptVideoEditorComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptVideoEditorModule {}
