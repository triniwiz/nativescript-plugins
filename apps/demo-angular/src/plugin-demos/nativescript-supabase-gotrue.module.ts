import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabaseGotrueComponent } from './nativescript-supabase-gotrue.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabaseGotrueComponent }])],
	declarations: [NativescriptSupabaseGotrueComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabaseGotrueModule {}
