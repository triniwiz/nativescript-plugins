import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptAppwriteComponent } from './nativescript-appwrite.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptAppwriteComponent }])],
  declarations: [NativescriptAppwriteComponent],
  schemas: [ NO_ERRORS_SCHEMA]
})
export class NativescriptAppwriteModule {}
