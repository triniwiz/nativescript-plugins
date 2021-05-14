import type { CreditCardView } from "../";
import { ViewAttributes, NativeScriptProps } from "react-nativescript";
export declare type CreditCardViewAttributes = ViewAttributes & {};
declare global {
    module JSX {
        interface IntrinsicElements {
            creditCardView: NativeScriptProps<CreditCardViewAttributes, CreditCardView>;
        }
    }
}
