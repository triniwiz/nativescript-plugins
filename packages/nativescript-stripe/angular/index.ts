import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "@nativescript/angular";
import { DIRECTIVES } from "./nativescript-stripe.directives";
export * from './nativescript-stripe.directives';

registerElement("CreditCardView", () => require("@triniwiz/nativescript-stripe").CreditCardView);

@NgModule({
  declarations: [DIRECTIVES],
  exports: [DIRECTIVES],
  schemas: [NO_ERRORS_SCHEMA]
})
// @ts-ignore
export class CreditCardViewModule { }