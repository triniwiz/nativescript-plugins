import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabaseComponent } from './nativescript-supabase.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabaseComponent }])],
	declarations: [NativescriptSupabaseComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabaseModule {}
