import { NgModule } from "@angular/core";
import { HttpClientModule, HttpBackend } from '@angular/common/http';
import { NSFileSystem } from "@nativescript/angular";
import { NsHttpBackEnd } from "./ns-http-backend";
import { NSHTTPXhr } from "./xhr";
import * as i0 from "@angular/core";
export class NativeScriptHttpClientModule {
}
NativeScriptHttpClientModule.ɵmod = i0.ɵɵdefineNgModule({ type: NativeScriptHttpClientModule });
NativeScriptHttpClientModule.ɵinj = i0.ɵɵdefineInjector({ factory: function NativeScriptHttpClientModule_Factory(t) { return new (t || NativeScriptHttpClientModule)(); }, providers: [
        NSFileSystem,
        NsHttpBackEnd,
        NSHTTPXhr,
        { provide: HttpBackend, useExisting: NsHttpBackEnd },
    ], imports: [[
            HttpClientModule,
        ], HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NativeScriptHttpClientModule, { imports: [HttpClientModule], exports: [HttpClientModule] }); })();
(function () { i0.ɵsetClassMetadata(NativeScriptHttpClientModule, [{
        type: NgModule,
        args: [{
                providers: [
                    NSFileSystem,
                    NsHttpBackEnd,
                    NSHTTPXhr,
                    { provide: HttpBackend, useExisting: NsHttpBackEnd },
                ],
                imports: [
                    HttpClientModule,
                ],
                exports: [
                    HttpClientModule,
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=http-client.module.js.map