import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabasePostgrestComponent } from './nativescript-supabase-postgrest.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabasePostgrestComponent }])],
	declarations: [NativescriptSupabasePostgrestComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabasePostgrestModule {}
