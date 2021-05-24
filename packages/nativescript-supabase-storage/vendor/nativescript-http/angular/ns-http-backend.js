import { Injectable } from "@angular/core";
import { HttpResponse, HttpErrorResponse, HttpXhrBackend } from "@angular/common/http";
import { NSFileSystem } from "@nativescript/angular";
import { isLocalRequest, processLocalFileRequest } from "./http-utils";
import { NSHTTPXhr } from "./xhr";
import * as i0 from "@angular/core";
import * as i1 from "./xhr";
import * as i2 from "@nativescript/angular";
export class NsHttpBackEnd extends HttpXhrBackend {
    constructor(xhrFactory, nsFileSystem) {
        super(xhrFactory);
        this.nsFileSystem = nsFileSystem;
    }
    handle(req) {
        let result;
        if (isLocalRequest(req.url)) {
            result = this.handleLocalFileRequest(req.url);
        }
        else {
            result = super.handle(req);
        }
        return result;
    }
    handleLocalFileRequest(url) {
        return processLocalFileRequest(url, this.nsFileSystem, createSuccessResponse, createErrorResponse);
    }
}
NsHttpBackEnd.ɵfac = function NsHttpBackEnd_Factory(t) { return new (t || NsHttpBackEnd)(i0.ɵɵinject(i1.NSHTTPXhr), i0.ɵɵinject(i2.NSFileSystem)); };
NsHttpBackEnd.ɵprov = i0.ɵɵdefineInjectable({ token: NsHttpBackEnd, factory: NsHttpBackEnd.ɵfac });
(function () { i0.ɵsetClassMetadata(NsHttpBackEnd, [{
        type: Injectable
    }], function () { return [{ type: i1.NSHTTPXhr }, { type: i2.NSFileSystem }]; }, null); })();
function createSuccessResponse(url, body, status) {
    return new HttpResponse({
        url,
        body,
        status,
        statusText: "OK"
    });
}
function createErrorResponse(url, body, status) {
    return new HttpErrorResponse({
        url,
        error: body,
        status,
        statusText: "ERROR"
    });
}
//# sourceMappingURL=ns-http-backend.js.map