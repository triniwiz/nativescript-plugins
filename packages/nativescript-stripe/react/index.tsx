import { registerElement } from "react-nativescript";
registerElement('creditCardView', () => require('../').CreditCardView);
import type { CreditCardView } from "../";
import { ViewAttributes, NativeScriptProps } from "react-nativescript";


export declare type CreditCardViewAttributes = ViewAttributes & {};


declare global {
    module JSX {
        interface IntrinsicElements {
            creditCardView: NativeScriptProps<CreditCardViewAttributes, CreditCardView>
        }
    }
}