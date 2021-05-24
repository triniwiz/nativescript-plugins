import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabaseRealtimeComponent } from './nativescript-supabase-realtime.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabaseRealtimeComponent }])],
	declarations: [NativescriptSupabaseRealtimeComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabaseRealtimeModule {}
