import { Injectable } from "@angular/core";
import * as types from "@nativescript/core/utils/types";
import { request } from "..";
import { Trace } from "@nativescript/core";
import * as i0 from "@angular/core";
var XMLHttpRequestResponseType;
(function (XMLHttpRequestResponseType) {
    XMLHttpRequestResponseType.empty = "";
    XMLHttpRequestResponseType.text = "text";
    XMLHttpRequestResponseType.json = "json";
    XMLHttpRequestResponseType.blob = "blob";
    XMLHttpRequestResponseType.arraybuffer = "arraybuffer";
})(XMLHttpRequestResponseType || (XMLHttpRequestResponseType = {}));
export class NSHTTPXMLHttpRequest {
    constructor() {
        this.UNSENT = 0;
        this.OPENED = 1;
        this.HEADERS_RECEIVED = 2;
        this.LOADING = 3;
        this.DONE = 4;
        this._responseType = "";
        this._listeners = new Map();
        this._readyState = this.UNSENT;
    }
    get upload() {
        return this;
    }
    get readyState() {
        return this._readyState;
    }
    get responseType() {
        return this._responseType;
    }
    set responseType(value) {
        if (value === XMLHttpRequestResponseType.empty
            || value in XMLHttpRequestResponseType) {
            this._responseType = value;
        }
        else {
            throw new Error(`Response type of '${value}' not supported.`);
        }
    }
    get responseText() {
        if (this._responseType !== XMLHttpRequestResponseType.empty
            && this._responseType !== XMLHttpRequestResponseType.text) {
            throw new Error("Failed to read the 'responseText' property from 'XMLHttpRequest': " +
                "The value is only accessible if the object's 'responseType' is '' or 'text' " +
                `(was '${this._responseType}').`);
        }
        if (types.isFunction(this._responseTextReader)) {
            return this._responseTextReader();
        }
        return "";
    }
    get response() {
        if (this._responseType === XMLHttpRequestResponseType.empty
            || this._responseType === XMLHttpRequestResponseType.text) {
            if (this._readyState !== this.LOADING && this._readyState !== this.DONE) {
                return "";
            }
            else {
                return this._response;
            }
        }
        else {
            if (this._readyState !== this.DONE) {
                return null;
            }
            else {
                return this._response;
            }
        }
    }
    get status() {
        return this._status;
    }
    get statusText() {
        if (this._readyState === this.UNSENT
            || this._readyState === this.OPENED
            || this._errorFlag) {
            return "";
        }
        return statuses[this._status];
    }
    _loadResponse(r) {
        this._status = r.statusCode;
        this._headers = r.headers;
        this._setReadyState(this.HEADERS_RECEIVED);
        this._setReadyState(this.LOADING);
        this._responseTextReader = () => r.content.toString();
        const contentType = this.getResponseHeader("Content-Type");
        const mimeType = (contentType && contentType.toLowerCase()) || "text/xml";
        const finalMimeType = this._overrideMimeType || mimeType;
        if (this._responseType === XMLHttpRequestResponseType.json) {
            this._response = r.content.toJSON();
        }
        else if (this._responseType === XMLHttpRequestResponseType.text
            || this._responseType === XMLHttpRequestResponseType.empty) {
            this._response = this.responseText;
        }
        else if (this._responseType === XMLHttpRequestResponseType.arraybuffer) {
            this._response = r.content.toArrayBuffer();
        }
        else if (this._responseType === XMLHttpRequestResponseType.blob) {
            this._response = new Blob([r.content.toArrayBuffer()], { type: finalMimeType });
        }
        this.emitEvent("progress");
        this._sendFlag = false;
        this._setReadyState(this.DONE);
    }
    emitEvent(eventName, ...args) {
        if (types.isFunction(this["on" + eventName])) {
            this["on" + eventName](...args);
        }
        let handlers = this._listeners.get(eventName) || [];
        handlers.forEach((handler) => {
            handler(...args);
        });
    }
    _setReadyState(value) {
        if (this._readyState !== value) {
            this._readyState = value;
            this.emitEvent("readystatechange");
        }
        if (this._readyState === this.DONE) {
            this.emitEvent("load");
            this.emitEvent("loadend");
        }
    }
    _setRequestError(eventName, error) {
        this._readyState = this.DONE;
        this._response = error;
        this.emitEvent("readystatechange");
        this.emitEvent(eventName, error);
        this.emitEvent("loadend");
    }
    addEventListener(eventName, handler) {
        if (['abort', 'error', 'load', 'loadend', 'loadstart', 'progress', 'readystatechange'].indexOf(eventName) === -1) {
            if (Trace.isEnabled()) {
                Trace.write('XHR Event not supported: ' + eventName, Trace.categories.Debug, Trace.messageType.warn);
            }
        }
        let handlers = this._listeners.get(eventName) || [];
        handlers.push(handler);
        this._listeners.set(eventName, handlers);
    }
    removeEventListener(eventName, toDetach) {
        let handlers = this._listeners.get(eventName) || [];
        handlers = handlers.filter((handler) => handler !== toDetach);
        this._listeners.set(eventName, handlers);
    }
    open(method, url, async, user, password) {
        if (types.isString(method) && types.isString(url)) {
            this._options = { url: url, method: method };
            this._options.headers = {};
            if (types.isString(user)) {
                this._options.headers["user"] = user;
            }
            if (types.isString(password)) {
                this._options.headers["password"] = password;
            }
            this._setReadyState(this.OPENED);
        }
    }
    abort() {
        this._response = null;
        this._responseTextReader = null;
        this._headers = null;
        this._status = null;
        if ((this._readyState === this.OPENED && this._sendFlag)
            || this._readyState === this.HEADERS_RECEIVED
            || this._readyState === this.LOADING) {
            this._errorFlag = true;
            this._sendFlag = false;
            this._setRequestError("abort");
        }
        if (this._readyState === this.DONE) {
            this._readyState = this.UNSENT;
        }
    }
    send(data) {
        this._errorFlag = false;
        this._response = null;
        this._responseTextReader = null;
        this._headers = null;
        this._status = null;
        if (this._readyState !== this.OPENED || this._sendFlag) {
            throw new Error("Failed to execute 'send' on 'XMLHttpRequest': " +
                "The object's state must be OPENED.");
        }
        if (types.isString(data) && this._options.method !== "GET") {
            this._options.content = data;
        }
        else if (data instanceof FormData) {
            this._options.content = data.toString();
        }
        else if (data instanceof Blob) {
            this.setRequestHeader("Content-Type", data.type);
            this._options.content = Blob.InternalAccessor.getBuffer(data);
        }
        else if (data instanceof ArrayBuffer) {
            this._options.content = data;
        }
        this._sendFlag = true;
        this.emitEvent("loadstart");
        request(this._options).then(r => {
            if (!this._errorFlag && this._sendFlag) {
                this._loadResponse(r);
            }
        }).catch(e => {
            this._errorFlag = true;
            this._sendFlag = false;
            this._setRequestError("error", e);
        });
    }
    setRequestHeader(header, value) {
        if (this._readyState !== this.OPENED || this._sendFlag) {
            throw new Error("Failed to execute 'setRequestHeader' on 'XMLHttpRequest': " +
                "The object's state must be OPENED.");
        }
        if (types.isString(header) && types.isString(value)) {
            this._options.headers[header] = value;
        }
    }
    getAllResponseHeaders() {
        if (this._readyState < 2 || this._errorFlag) {
            return "";
        }
        let result = "";
        for (let i in this._headers) {
            result += i + ": " + this._headers[i] + "\r\n";
        }
        return result.substr(0, result.length - 2);
    }
    getResponseHeader(header) {
        if (types.isString(header) && this._readyState > 1
            && this._headers
            && !this._errorFlag) {
            header = header.toLowerCase();
            for (let i in this._headers) {
                if (i.toLowerCase() === header) {
                    return this._headers[i];
                }
            }
        }
        return null;
    }
    overrideMimeType(mime) {
        if (this._readyState === this.LOADING || this._readyState === this.DONE) {
            throw new Error("Failed to execute 'overrideMimeType' on 'XMLHttpRequest': " +
                "MimeType cannot be overridden when the state is LOADING or DONE.");
        }
        this._overrideMimeType = mime;
    }
}
const statuses = {
    100: "Continue",
    101: "Switching Protocols",
    200: "OK",
    201: "Created",
    202: "Accepted",
    203: "Non - Authoritative Information",
    204: "No Content",
    205: "Reset Content",
    206: "Partial Content",
    300: "Multiple Choices",
    301: "Moved Permanently",
    302: "Found",
    303: "See Other",
    304: "Not Modified",
    305: "Use Proxy",
    307: "Temporary Redirect",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    405: "Method Not Allowed",
    406: "Not Acceptable",
    407: "Proxy Authentication Required",
    408: "Request Timeout",
    409: "Conflict",
    410: "Gone",
    411: "Length Required",
    412: "Precondition Failed",
    413: "Request Entity Too Large",
    414: "Request - URI Too Long",
    415: "Unsupported Media Type",
    416: "Requested Range Not Satisfiable",
    417: "Expectation Failed",
    500: "Internal Server Error",
    501: "Not Implemented",
    502: "Bad Gateway",
    503: "Service Unavailable",
    504: "Gateway Timeout",
    505: "HTTP Version Not Supported"
};
export class NSHTTPXhr {
    constructor() { }
    build() {
        return (new NSHTTPXMLHttpRequest());
    }
}
NSHTTPXhr.ɵfac = function NSHTTPXhr_Factory(t) { return new (t || NSHTTPXhr)(); };
NSHTTPXhr.ɵprov = i0.ɵɵdefineInjectable({ token: NSHTTPXhr, factory: NSHTTPXhr.ɵfac });
(function () { i0.ɵsetClassMetadata(NSHTTPXhr, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=xhr.js.map