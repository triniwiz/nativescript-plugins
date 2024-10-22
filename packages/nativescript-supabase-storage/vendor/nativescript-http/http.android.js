import { ImageSource, File, Screen, } from '@nativescript/core';
import { completeSelfCheck, getFilenameFromUrl, HTTPFormData, HTTPFormDataEntry, ImageParseMethod, } from "./http.common";
import { NetworkAgent } from "@nativescript/core/debugger";
export { HTTPFormData, HTTPFormDataEntry, ImageParseMethod } from "./http.common";
export var HttpResponseEncoding;
(function (HttpResponseEncoding) {
    HttpResponseEncoding[HttpResponseEncoding["UTF8"] = 0] = "UTF8";
    HttpResponseEncoding[HttpResponseEncoding["GBK"] = 1] = "GBK";
})(HttpResponseEncoding || (HttpResponseEncoding = {}));
function parseJSON(source) {
    const src = source.trim();
    if (src.lastIndexOf(")") === src.length - 1) {
        return JSON.parse(src.substring(src.indexOf("(") + 1, src.lastIndexOf(")")));
    }
    return JSON.parse(src);
}
let requestIdCounter = 0;
const pendingRequests = {};
let customUserAgent;
let completeCallback;
function ensureCompleteCallback() {
    if (completeCallback) {
        return;
    }
    completeCallback = new com.klippa.NativeScriptHTTP.Async.CompleteCallback({
        onComplete: function (result, context) {
            onRequestComplete(context, result);
        },
        onError: function (error, context) {
            onRequestError(error, context);
        },
    });
}
function onRequestComplete(requestId, result) {
    const callbacks = pendingRequests[requestId];
    delete pendingRequests[requestId];
    if (result.error) {
        callbacks.rejectCallback(new Error(result.error.toString()));
        return;
    }
    const headers = {};
    if (result.headers) {
        const jHeaders = result.headers;
        const length = jHeaders.size();
        let pair;
        for (let i = 0; i < length; i++) {
            pair = jHeaders.get(i);
            addHeader(headers, pair.key, pair.value);
        }
    }
    if (global.__inspector && global.__inspector.isConnected) {
        NetworkAgent.responseReceived(requestId, result, headers);
    }
    callbacks.resolveCallback({
        content: {
            raw: result.raw,
            toArrayBuffer: () => Uint8Array.from(result.raw.toByteArray()).buffer,
            toString: (encoding) => {
                let str;
                if (encoding) {
                    str = decodeResponse(result.raw, encoding);
                }
                else {
                    str = result.responseAsString;
                }
                if (typeof str === "string") {
                    return str;
                }
                else {
                    throw new Error("Response content may not be converted to string");
                }
            },
            toJSON: (encoding) => {
                let str;
                if (encoding) {
                    str = decodeResponse(result.raw, encoding);
                }
                else {
                    str = result.responseAsString;
                }
                return parseJSON(str);
            },
            toImage: () => {
                return new Promise((resolveImage, rejectImage) => {
                    if (result.responseAsImage != null) {
                        resolveImage(new ImageSource(result.responseAsImage));
                    }
                    else {
                        rejectImage(new Error("Response content may not be converted to an Image"));
                    }
                });
            },
            toFile: (destinationFilePath) => {
                if (!destinationFilePath) {
                    destinationFilePath = getFilenameFromUrl(callbacks.url);
                }
                let stream;
                try {
                    const file = File.fromPath(destinationFilePath);
                    const javaFile = new java.io.File(destinationFilePath);
                    stream = new java.io.FileOutputStream(javaFile);
                    stream.write(result.raw.toByteArray());
                    return file;
                }
                catch (exception) {
                    throw new Error(`Cannot save file with path: ${destinationFilePath}.`);
                }
                finally {
                    if (stream) {
                        stream.close();
                    }
                }
            }
        },
        statusCode: result.statusCode,
        headers: headers
    });
}
function onRequestError(error, requestId) {
    const callbacks = pendingRequests[requestId];
    delete pendingRequests[requestId];
    if (callbacks) {
        callbacks.rejectCallback(new Error(error));
    }
}
export function buildJavaOptions(options) {
    if (typeof options.url !== "string") {
        throw new Error("Http request must provide a valid url.");
    }
    const javaOptions = new com.klippa.NativeScriptHTTP.Async.Http.RequestOptions();
    javaOptions.url = options.url;
    let contentType;
    let mediaType = null;
    let userAgent;
    if (options.headers) {
        for (let key in options.headers) {
            if (key.toLowerCase() === "content-type") {
                contentType = options.headers[key];
            }
            if (key.toLowerCase() === "user-agent") {
                userAgent = options.headers[key];
            }
        }
        if (contentType) {
            mediaType = okhttp3.MediaType.parse(contentType);
        }
    }
    if (!userAgent && customUserAgent) {
        if (!options.headers) {
            options.headers = {};
        }
        options.headers["User-Agent"] = customUserAgent;
    }
    if (typeof options.method === "string") {
        javaOptions.method = options.method;
    }
    const upperCaseMethod = options.method && typeof options.method === "string" ? options.method.toUpperCase() : "GET";
    if (upperCaseMethod === "POST" || upperCaseMethod === "PATCH" || upperCaseMethod === "PUT" || upperCaseMethod === "PROPPATCH" || upperCaseMethod === "REPORT") {
        if (typeof options.content === "string" || options.content instanceof FormData) {
            if (!mediaType) {
                mediaType = okhttp3.MediaType.parse("application/x-www-form-urlencoded");
            }
            javaOptions.content = okhttp3.RequestBody.create(mediaType, options.content.toString());
        }
        else if (options.content instanceof ArrayBuffer) {
            if (!mediaType) {
                mediaType = okhttp3.MediaType.parse("application/x-www-form-urlencoded");
            }
            const typedArray = new Uint8Array(options.content);
            const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
            javaOptions.content = okhttp3.RequestBody.create(mediaType, nativeBuffer.array());
        }
        else {
            let matched = false;
            if (!matched && options.content instanceof Blob) {
                if (!mediaType && options.content.type) {
                    mediaType = okhttp3.MediaType.parse(options.content.type);
                }
                const typedArray = new Uint8Array(Blob.InternalAccessor.getBuffer(options.content).buffer.slice(0));
                const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
                javaOptions.content = okhttp3.RequestBody.create(mediaType, nativeBuffer.array());
                matched = true;
            }
            if (!matched && options.content instanceof HTTPFormData) {
                matched = true;
                if (!mediaType) {
                    mediaType = okhttp3.MediaType.parse("multipart/form-data");
                }
                const builder = new okhttp3.MultipartBody.Builder();
                builder.setType(mediaType);
                const contentValues = options.content;
                contentValues.forEach(((value, key) => {
                    if (typeof value === "string") {
                        builder.addFormDataPart(key, value);
                    }
                    else if (value instanceof ArrayBuffer) {
                        const typedArray = new Uint8Array(value);
                        const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
                        builder.addFormDataPart(key, null, okhttp3.RequestBody.create(nativeBuffer.array(), null));
                    }
                    else if (value instanceof Blob) {
                        let formDataPartMediaType = null;
                        if (value.type) {
                            formDataPartMediaType = okhttp3.MediaType.parse(value.type);
                        }
                        let filename = null;
                        if (value instanceof File) {
                            filename = value.name;
                        }
                        const typedArray = new Uint8Array(Blob.InternalAccessor.getBuffer(value).buffer.slice(0));
                        const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
                        builder.addFormDataPart(key, filename, okhttp3.RequestBody.create(formDataPartMediaType, nativeBuffer.array()));
                    }
                    else if (value instanceof HTTPFormDataEntry) {
                        let formDataPartMediaType = null;
                        if (value.type) {
                            formDataPartMediaType = okhttp3.MediaType.parse(value.type);
                        }
                        if (value.data instanceof ArrayBuffer) {
                            const typedArray = new Uint8Array(value.data);
                            const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
                            builder.addFormDataPart(key, value.name, okhttp3.RequestBody.create(formDataPartMediaType, nativeBuffer.array()));
                        }
                        else if (value.data instanceof Blob) {
                            const typedArray = new Uint8Array(Blob.InternalAccessor.getBuffer(value.data).buffer.slice(0));
                            const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
                            builder.addFormDataPart(key, value.name, okhttp3.RequestBody.create(formDataPartMediaType, nativeBuffer.array()));
                        }
                        else {
                            builder.addFormDataPart(key, value.name, okhttp3.RequestBody.create(formDataPartMediaType, value.data));
                        }
                    }
                    else {
                        builder.addFormDataPart(key, null, okhttp3.RequestBody.create(null, value));
                    }
                }));
                javaOptions.content = builder.build();
            }
            if (!matched && options.content) {
                javaOptions.content = okhttp3.RequestBody.create(mediaType, options.content);
            }
            else if (!matched) {
                javaOptions.content = okhttp3.RequestBody.create(mediaType, "");
            }
        }
    }
    if (typeof options.timeout === "number") {
        javaOptions.timeout = options.timeout;
    }
    if (typeof options.dontFollowRedirects === "boolean") {
        javaOptions.dontFollowRedirects = options.dontFollowRedirects;
    }
    if (options.headers) {
        const arrayList = new java.util.ArrayList();
        const pair = com.klippa.NativeScriptHTTP.Async.Http.KeyValuePair;
        for (let key in options.headers) {
            arrayList.add(new pair(key, options.headers[key] + ""));
        }
        javaOptions.headers = arrayList;
    }
    const ourScreen = Screen.mainScreen;
    javaOptions.screenWidth = ourScreen.widthPixels;
    javaOptions.screenHeight = ourScreen.heightPixels;
    if (typeof (options.forceImageParsing) !== "undefined") {
        javaOptions.forceImageParsing = options.forceImageParsing;
    }
    return javaOptions;
}
export function request(options) {
    if (options === undefined || options === null) {
        return Promise.reject("No options given");
    }
    if (options.url === "https://nativescript-http-integration-check.local") {
        return completeSelfCheck(options);
    }
    return new Promise((resolve, reject) => {
        try {
            const javaOptions = buildJavaOptions(options);
            if (global.__inspector && global.__inspector.isConnected) {
                NetworkAgent.requestWillBeSent(requestIdCounter, options);
            }
            const callbacks = {
                url: options.url,
                resolveCallback: resolve,
                rejectCallback: reject
            };
            pendingRequests[requestIdCounter] = callbacks;
            ensureCompleteCallback();
            com.klippa.NativeScriptHTTP.Async.Http.MakeRequest(javaOptions, completeCallback, new java.lang.Integer(requestIdCounter));
            requestIdCounter++;
        }
        catch (ex) {
            reject(ex);
        }
    });
}
function decodeResponse(raw, encoding) {
    let charsetName = "UTF-8";
    if (encoding === HttpResponseEncoding.GBK) {
        charsetName = "GBK";
    }
    return raw.toString(charsetName);
}
export function getString(arg) {
    return new Promise((resolve, reject) => {
        request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(r => {
            try {
                const str = r.content.toString();
                resolve(str);
            }
            catch (e) {
                reject(e);
            }
        }, e => reject(e));
    });
}
export function getJSON(arg) {
    return new Promise((resolve, reject) => {
        request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(r => {
            try {
                const json = r.content.toJSON();
                resolve(json);
            }
            catch (e) {
                reject(e);
            }
        }, e => reject(e));
    });
}
export function getImage(arg) {
    return new Promise((resolve, reject) => {
        request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(r => {
            try {
                resolve(r.content.toImage());
            }
            catch (err) {
                reject(err);
            }
        }, err => {
            reject(err);
        });
    });
}
export function getFile(arg, destinationFilePath) {
    return new Promise((resolve, reject) => {
        request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(r => {
            try {
                const file = r.content.toFile(destinationFilePath);
                resolve(file);
            }
            catch (e) {
                reject(e);
            }
        }, e => reject(e));
    });
}
export function getBinary(arg) {
    return new Promise((resolve, reject) => {
        request(typeof arg === "string" ? { url: arg, method: "GET" } : arg)
            .then(r => {
            try {
                const arrayBuffer = r.content.toArrayBuffer();
                resolve(arrayBuffer);
            }
            catch (e) {
                reject(e);
            }
        }, e => reject(e));
    });
}
export function addHeader(headers, key, value) {
    if (!headers[key]) {
        headers[key] = value;
    }
    else if (Array.isArray(headers[key])) {
        headers[key].push(value);
    }
    else {
        const values = [headers[key]];
        values.push(value);
        headers[key] = values;
    }
}
export function setImageParseMethod(imageParseMethod) {
    if (imageParseMethod === ImageParseMethod.ALWAYS) {
        com.klippa.NativeScriptHTTP.Async.Http.SetImageParseMethod(com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod.ALWAYS);
    }
    else if (imageParseMethod === ImageParseMethod.CONTENTTYPE) {
        com.klippa.NativeScriptHTTP.Async.Http.SetImageParseMethod(com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod.CONTENTTYPE);
    }
    else if (imageParseMethod === ImageParseMethod.NEVER) {
        com.klippa.NativeScriptHTTP.Async.Http.SetImageParseMethod(com.klippa.NativeScriptHTTP.Async.Http.ImageParseMethod.NEVER);
    }
}
export function setConcurrencyLimits(maxRequests, maxRequestsPerHost) {
    com.klippa.NativeScriptHTTP.Async.Http.SetConcurrencyLimits(maxRequests, maxRequestsPerHost);
}
export function clearCookies() {
    com.klippa.NativeScriptHTTP.Async.Http.ClearCookies();
}
export function setUserAgent(userAgent) {
    customUserAgent = userAgent;
}
export function certificatePinningAdd(pattern, hashes) {
    const newHashes = hashes.map(value => "sha256/" + value);
    com.klippa.NativeScriptHTTP.Async.Http.PinCertificate(pattern, newHashes);
}
export function certificatePinningClear() {
    com.klippa.NativeScriptHTTP.Async.Http.RemoveCertificatePins();
}
export const Http = {
    getFile,
    getImage,
    getJSON,
    getString,
    request,
};
export { ImageCache } from './image-cache';
//# sourceMappingURL=http.android.js.map
