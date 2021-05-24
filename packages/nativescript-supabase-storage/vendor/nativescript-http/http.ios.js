import { ImageSource, nsFile, Utils } from "@nativescript/core";
import { HTTPFormData, HTTPFormDataEntry, getFilenameFromUrl, completeSelfCheck, } from "./http.common";
import * as domainDebugger from "@nativescript/core/debugger";
export { HTTPFormData, HTTPFormDataEntry, ImageParseMethod } from "./http.common";
export var HttpResponseEncoding;
(function (HttpResponseEncoding) {
    HttpResponseEncoding[HttpResponseEncoding["UTF8"] = 0] = "UTF8";
    HttpResponseEncoding[HttpResponseEncoding["GBK"] = 1] = "GBK";
})(HttpResponseEncoding || (HttpResponseEncoding = {}));
const currentDevice = UIDevice.currentDevice;
const device = currentDevice.userInterfaceIdiom === 0 ? "Phone" : "Pad";
const osVersion = currentDevice.systemVersion;
let customUserAgent;
const GET = "GET";
export const USER_AGENT_HEADER = "User-Agent";
export const USER_AGENT = `Mozilla/5.0 (i${device}; CPU OS ${osVersion.replace(".", "_")} like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/${osVersion} Mobile/10A5355d Safari/8536.25`;
const sessionConfig = NSURLSessionConfiguration.defaultSessionConfiguration;
const queue = NSOperationQueue.mainQueue;
let certificatePinningInstance = null;
let certificatePinningConfig = null;
let certificatePinningDomainList = null;
function parseJSON(source) {
    const src = source.trim();
    if (src.lastIndexOf(")") === src.length - 1) {
        return JSON.parse(src.substring(src.indexOf("(") + 1, src.lastIndexOf(")")));
    }
    return JSON.parse(src);
}
var NSURLSessionTaskDelegateImpl = /** @class */ (function (_super) {
    __extends(NSURLSessionTaskDelegateImpl, _super);
    function NSURLSessionTaskDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NSURLSessionTaskDelegateImpl.prototype.URLSessionTaskDidReceiveChallengeCompletionHandler = function (session, task, challenge, completionHandler) {
        // Default behaviour when we don't want certificate pinning.
        if (certificatePinningInstance == null) {
            completionHandler(NSURLSessionAuthChallengeDisposition.PerformDefaultHandling, null);
            return;
        }
        var pinningValidator = certificatePinningInstance.pinningValidator;
        // Pass the authentication challenge to the validator; if the validation fails, the connection will be blocked
        if (!pinningValidator.handleChallengeCompletionHandler(challenge, completionHandler)) {
            // TrustKit did not handle this challenge: perhaps it was not for server trust
            // or the domain was not pinned. Fall back to the default behavior
            completionHandler(NSURLSessionAuthChallengeDisposition.PerformDefaultHandling, null);
        }
    };
    NSURLSessionTaskDelegateImpl.ObjCProtocols = [NSURLSessionTaskDelegate];
    return NSURLSessionTaskDelegateImpl;
}(NSObject));
const sessionTaskDelegateInstance = NSURLSessionTaskDelegateImpl.new();
var NoRedirectNSURLSessionTaskDelegateImpl = /** @class */ (function (_super) {
    __extends(NoRedirectNSURLSessionTaskDelegateImpl, _super);
    function NoRedirectNSURLSessionTaskDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NoRedirectNSURLSessionTaskDelegateImpl.prototype.URLSessionTaskDidReceiveChallengeCompletionHandler = function (session, task, challenge, completionHandler) {
        // Default behaviour when we don't want certificate pinning.
        if (certificatePinningInstance == null) {
            completionHandler(NSURLSessionAuthChallengeDisposition.PerformDefaultHandling, null);
            return;
        }
        var pinningValidator = certificatePinningInstance.pinningValidator;
        // Pass the authentication challenge to the validator; if the validation fails, the connection will be blocked
        if (!pinningValidator.handleChallengeCompletionHandler(challenge, completionHandler)) {
            // TrustKit did not handle this challenge: perhaps it was not for server trust
            // or the domain was not pinned. Fall back to the default behavior
            completionHandler(NSURLSessionAuthChallengeDisposition.PerformDefaultHandling, null);
        }
    };
    NoRedirectNSURLSessionTaskDelegateImpl.prototype.URLSessionTaskWillPerformHTTPRedirectionNewRequestCompletionHandler = function (session, task, response, request, completionHandler) {
        completionHandler(null);
    };
    NoRedirectNSURLSessionTaskDelegateImpl.ObjCProtocols = [NSURLSessionTaskDelegate];
    return NoRedirectNSURLSessionTaskDelegateImpl;
}(NSObject));
const noRedirectSessionTaskDelegateInstance = NoRedirectNSURLSessionTaskDelegateImpl.new();
let defaultSession;
function ensureDefaultSession() {
    if (!defaultSession) {
        defaultSession = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(sessionConfig, sessionTaskDelegateInstance, queue);
    }
}
let sessionNotFollowingRedirects;
function ensureSessionNotFollowingRedirects() {
    if (!sessionNotFollowingRedirects) {
        sessionNotFollowingRedirects = NSURLSession.sessionWithConfigurationDelegateDelegateQueue(sessionConfig, noRedirectSessionTaskDelegateInstance, queue);
    }
}
export function request(options) {
    if (options === undefined || options === null) {
        return Promise.reject("No options given");
    }
    if (options.url === "https://nativescript-http-integration-check.local") {
        return completeSelfCheck(options);
    }
    return new Promise((resolve, reject) => {
        if (!options.url) {
            reject(new Error("Request url was empty."));
            return;
        }
        try {
            const network = domainDebugger.getNetwork();
            const debugRequest = network && network.create();
            const urlRequest = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(options.url));
            urlRequest.HTTPMethod = Utils.isDefined(options.method) ? options.method : GET;
            let contentType;
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
            }
            if (!userAgent) {
                if (!options.headers) {
                    options.headers = {};
                }
                options.headers[USER_AGENT_HEADER] = customUserAgent ? customUserAgent : USER_AGENT;
            }
            if (options.headers) {
                for (let header in options.headers) {
                    urlRequest.setValueForHTTPHeaderField(options.headers[header] + "", header);
                }
            }
            if (Utils.isString(options.content) || options.content instanceof FormData) {
                urlRequest.HTTPBody = NSString.stringWithString(options.content.toString()).dataUsingEncoding(4);
            }
            else if (options.content instanceof ArrayBuffer) {
                const buffer = options.content;
                urlRequest.HTTPBody = NSData.dataWithData(buffer);
            }
            else {
                let matched = false;
                if (!matched && options.content instanceof Blob) {
                    if (!contentType && options.content.type) {
                        urlRequest.setValueForHTTPHeaderField(options.content.type, "Content-Type");
                    }
                    const buffer = new Uint8Array(Blob.InternalAccessor.getBuffer(options.content).buffer.slice(0));
                    urlRequest.HTTPBody = NSData.dataWithData(buffer);
                    matched = true;
                }
                if (!matched && options.content instanceof HTTPFormData) {
                    matched = true;
                    const multipartFormData = OMGMultipartFormData.new();
                    const contentValues = options.content;
                    contentValues.forEach(((value, key) => {
                        if (typeof value === "string") {
                            multipartFormData.addTextParameterName(value, key);
                        }
                        else if (value instanceof ArrayBuffer) {
                            const buffer = new Uint8Array(value);
                            multipartFormData.addFileParameterNameFilenameContentType(NSData.dataWithData(buffer), key, "", "application/octet-stream");
                        }
                        else if (value instanceof Blob) {
                            let formDataPartMediaType = "application/octet-stream";
                            if (value.type) {
                                formDataPartMediaType = value.type;
                            }
                            let filename = "";
                            if (value instanceof File) {
                                filename = value.name;
                            }
                            const buffer = new Uint8Array(Blob.InternalAccessor.getBuffer(value).buffer.slice(0));
                            multipartFormData.addFileParameterNameFilenameContentType(NSData.dataWithData(buffer), key, filename, formDataPartMediaType);
                        }
                        else if (value instanceof HTTPFormDataEntry) {
                            let formDataPartMediaType = "application/octet-stream";
                            if (value.type) {
                                formDataPartMediaType = value.type;
                            }
                            if (value.data instanceof ArrayBuffer) {
                                const buffer = new Uint8Array(value.data);
                                multipartFormData.addFileParameterNameFilenameContentType(NSData.dataWithData(buffer), key, "", formDataPartMediaType);
                            }
                            else if (value.data instanceof Blob) {
                                const buffer = new Uint8Array(Blob.InternalAccessor.getBuffer(value.data).buffer.slice(0));
                                multipartFormData.addFileParameterNameFilenameContentType(NSData.dataWithData(buffer), key, value.name || "", formDataPartMediaType);
                            }
                            else {
                                multipartFormData.addFileParameterNameFilenameContentType(value.data, key, value.name, formDataPartMediaType);
                            }
                        }
                        else {
                            multipartFormData.addFileParameterNameFilenameContentType(value, key, "", "application/octet-stream");
                        }
                    }));
                    let multipartRequest = OMGHTTPURLRQ.POSTError(options.url, multipartFormData);
                    const multiPartContentType = multipartRequest.allHTTPHeaderFields.objectForKey("Content-Type");
                    urlRequest.setValueForHTTPHeaderField(multiPartContentType, "Content-Type");
                    urlRequest.HTTPBody = NSData.dataWithData(multipartRequest.HTTPBody);
                }
                if (!matched && options.content) {
                    urlRequest.HTTPBody = NSData.dataWithData(options.content);
                }
            }
            if (Utils.isNumber(options.timeout)) {
                urlRequest.timeoutInterval = options.timeout / 1000;
            }
            let session;
            if (Utils.isBoolean(options.dontFollowRedirects) && options.dontFollowRedirects) {
                ensureSessionNotFollowingRedirects();
                session = sessionNotFollowingRedirects;
            }
            else {
                ensureDefaultSession();
                session = defaultSession;
            }
            const dataTask = session.dataTaskWithRequestCompletionHandler(urlRequest, function (data, response, error) {
                if (error) {
                    reject(new Error(error.localizedDescription));
                }
                else {
                    const headers = {};
                    if (response && response.allHeaderFields) {
                        const headerFields = response.allHeaderFields;
                        headerFields.enumerateKeysAndObjectsUsingBlock((key, value, stop) => {
                            addHeader(headers, key, value);
                        });
                    }
                    if (debugRequest) {
                        debugRequest.mimeType = response.MIMEType;
                        debugRequest.data = data;
                        const debugResponse = {
                            url: options.url,
                            status: response.statusCode,
                            statusText: NSHTTPURLResponse.localizedStringForStatusCode(response.statusCode),
                            headers: headers,
                            mimeType: response.MIMEType,
                            fromDiskCache: false
                        };
                        debugRequest.responseReceived(debugResponse);
                        debugRequest.loadingFinished();
                    }
                    resolve({
                        content: {
                            raw: data,
                            toArrayBuffer: () => interop.bufferFromData(data),
                            toString: (encoding) => {
                                const str = NSDataToString(data, encoding);
                                if (typeof str === "string") {
                                    return str;
                                }
                                else {
                                    throw new Error("Response content may not be converted to string");
                                }
                            },
                            toJSON: (encoding) => parseJSON(NSDataToString(data, encoding)),
                            toImage: () => {
                                return new Promise((resolve, reject) => {
                                    UIImage.tns_decodeImageWithDataCompletion(data, image => {
                                        if (image) {
                                            resolve(new ImageSource(image));
                                        }
                                        else {
                                            reject(new Error("Response content may not be converted to an Image"));
                                        }
                                    });
                                });
                            },
                            toFile: (destinationFilePath) => {
                                if (!destinationFilePath) {
                                    destinationFilePath = getFilenameFromUrl(options.url);
                                }
                                if (data instanceof NSData) {
                                    const file = nsFile.fromPath(destinationFilePath);
                                    data.writeToFileAtomically(destinationFilePath, true);
                                    return file;
                                }
                                else {
                                    reject(new Error(`Cannot save file with path: ${destinationFilePath}.`));
                                }
                                return null;
                            }
                        },
                        statusCode: response.statusCode,
                        headers: headers
                    });
                }
            });
            if (options.url && debugRequest) {
                const request = {
                    url: options.url,
                    method: "GET",
                    headers: options.headers
                };
                debugRequest.requestWillBeSent(request);
            }
            dataTask.resume();
        }
        catch (ex) {
            reject(ex);
        }
    });
}
function NSDataToString(data, encoding) {
    let code = NSUTF8StringEncoding;
    if (encoding === HttpResponseEncoding.GBK) {
        code = 1586;
    }
    let encodedString = NSString.alloc().initWithDataEncoding(data, code);
    if (!encodedString) {
        code = NSISOLatin1StringEncoding;
        encodedString = NSString.alloc().initWithDataEncoding(data, code);
    }
    return encodedString.toString();
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
}
export function setConcurrencyLimits(maxRequests, maxRequestsPerHost) {
    sessionConfig.HTTPMaximumConnectionsPerHost = maxRequestsPerHost;
}
export function clearCookies() {
    if (sessionConfig.HTTPCookieStorage && sessionConfig.HTTPCookieStorage.cookies) {
        const cookieCount = sessionConfig.HTTPCookieStorage.cookies.count;
        if (cookieCount <= 0) {
            return;
        }
        for (let i = 0; i < cookieCount; i++) {
            const cookie = sessionConfig.HTTPCookieStorage.cookies.objectAtIndex(0);
            if (cookie) {
                sessionConfig.HTTPCookieStorage.deleteCookie(cookie);
            }
        }
    }
}
export function setUserAgent(userAgent) {
    customUserAgent = userAgent;
}
export function certificatePinningAdd(pattern, hashes) {
    if (sessionConfig.URLCache) {
        sessionConfig.URLCache.removeAllCachedResponses();
    }
    if (certificatePinningConfig == null) {
        certificatePinningConfig = NSMutableDictionary.new().init();
        certificatePinningConfig.setValueForKey(false, kTSKSwizzleNetworkDelegates);
    }
    if (certificatePinningDomainList == null) {
        certificatePinningDomainList = NSMutableDictionary.new().init();
    }
    const domainSetting = NSMutableDictionary.new().init();
    domainSetting.setValueForKey(true, kTSKDisableDefaultReportUri);
    domainSetting.setValueForKey(hashes, kTSKPublicKeyHashes);
    let allowSubdomains = false;
    let domain = pattern;
    if (domain.indexOf("**.") === 0) {
        domain = domain.slice("**.".length);
        allowSubdomains = true;
    }
    if (domain.indexOf("*.") === 0) {
        domain = domain.slice("*.".length);
        allowSubdomains = true;
    }
    domainSetting.setValueForKey(allowSubdomains, kTSKIncludeSubdomains);
    certificatePinningDomainList.setValueForKey(domainSetting, domain);
    certificatePinningConfig.setValueForKey(certificatePinningDomainList, kTSKPinnedDomains);
    certificatePinningInstance = TrustKit.alloc().initWithConfiguration(certificatePinningConfig);
}
export function certificatePinningClear() {
    if (sessionConfig.URLCache) {
        sessionConfig.URLCache.removeAllCachedResponses();
    }
    certificatePinningConfig = null;
    certificatePinningInstance = null;
    certificatePinningDomainList = null;
}
export function getCurrentUserAgent() {
    return customUserAgent;
}
export function getCurrentCertificatePinningInstance() {
    return certificatePinningInstance;
}
export const Http = {
    getFile,
    getImage,
    getJSON,
    getString,
    request,
};
export { ImageCache } from './image-cache';
//# sourceMappingURL=http.ios.js.map
