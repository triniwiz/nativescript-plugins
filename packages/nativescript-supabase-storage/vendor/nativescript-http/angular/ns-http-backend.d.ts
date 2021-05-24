import { HttpRequest, HttpEvent, HttpXhrBackend } from "@angular/common/http";
import { Observable } from "rxjs";
import { NSFileSystem } from "@nativescript/angular";
import { NSHTTPXhr } from "./xhr";
import * as i0 from "@angular/core";
export declare class NsHttpBackEnd extends HttpXhrBackend {
    private nsFileSystem;
    constructor(xhrFactory: NSHTTPXhr, nsFileSystem: NSFileSystem);
    handle(req: HttpRequest<any>): Observable<HttpEvent<any>>;
    private handleLocalFileRequest;
    static ɵfac: i0.ɵɵFactoryDef<NsHttpBackEnd, never>;
    static ɵprov: i0.ɵɵInjectableDef<NsHttpBackEnd>;
}
