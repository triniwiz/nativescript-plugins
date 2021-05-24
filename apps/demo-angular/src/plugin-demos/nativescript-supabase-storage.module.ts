import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptSupabaseStorageComponent } from './nativescript-supabase-storage.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptSupabaseStorageComponent }])],
	declarations: [NativescriptSupabaseStorageComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptSupabaseStorageModule {}
