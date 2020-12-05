import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { NativescriptTooltipComponent } from './nativescript-tooltip.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: NativescriptTooltipComponent }])],
	declarations: [NativescriptTooltipComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class NativescriptTooltipModule {}
