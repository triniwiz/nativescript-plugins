import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptFancyListViewComponent } from './nativescript-fancy-list-view.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptFancyListViewComponent }])],
	declarations: [NativescriptFancyListViewComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptFancyListViewModule {}
