import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabaseFunctionsComponent } from './nativescript-supabase-functions.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabaseFunctionsComponent }])],
	declarations: [NativescriptSupabaseFunctionsComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabaseFunctionsModule {}
