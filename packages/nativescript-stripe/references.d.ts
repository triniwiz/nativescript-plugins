/// <reference path="../../references.d.ts" />
/// <reference path="./typings/android.d.ts" />
/// <reference path="./typings/objc!Stripe.d.ts" />

declare module com {
  export module github {
    export module triniwiz {
      export module stripe {
        export class TNSStripe {
          public static createSourceParams(source: any): any;
        }
      }
    }
  }
}
