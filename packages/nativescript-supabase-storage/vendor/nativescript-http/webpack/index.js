'use strict';

// Based on the NormalModuleReplacementPlugin plugin.
class NativeScriptHTTPPlugin {
    constructor() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        this.replaceHTTP = true;
        this.replaceImageCache = true;

        if (typeof(options.replaceHTTP) !== "undefined") {
            this.replaceHTTP = options.replaceHTTP;
        }

        if (typeof(options.replaceImageCache) !== "undefined") {
            this.replaceImageCache = options.replaceImageCache;
        }
    }

    apply(compiler) {
        const resourceRegExp = /http-request|image-cache/;
        compiler.hooks.normalModuleFactory.tap(
            "NativeScriptHTTPPlugin",
            nmf => {
                nmf.hooks.beforeResolve.tap("NativeScriptHTTPPlugin", result => {
                    if (!result) return;

                    // Replace http-request imports by our own.
                    if (resourceRegExp.test(result.request)) {
                        // Replace the relative http-request import from core http.
                        if (this.replaceHTTP && result.request === "./http-request") {
                            if (result.context.endsWith("@nativescript/core/http")) {
                                result.request = "../../../@klippa/nativescript-http";
                            }
                            if (result.context.endsWith("tns-core-modules/http")) {
                                result.request = "../../@klippa/nativescript-http";
                            }
                        }

                        // Replace the relative http-request import from core image-cache (for iOS).
                        if (this.replaceHTTP && result.request === "../../http/http-request") {
                            if (result.context.endsWith("@nativescript/core/ui/image-cache")) {
                                result.request = "../../../../@klippa/nativescript-http";
                            }
                            if (result.context.endsWith("tns-core-modules/ui/image-cache")) {
                                result.request = "../../../@klippa/nativescript-http";
                            }
                        }

                        // Replace the relative image-cache import from core ui.
                        if (this.replaceImageCache && result.request === "./image-cache") {
                            if (result.context.endsWith("@nativescript/core/ui")) {
                                result.request = "../../../@klippa/nativescript-http/image-cache";
                            }
                            if (result.context.endsWith("tns-core-modules/ui")) {
                                result.request = "../../@klippa/nativescript-http/image-cache";
                            }
                        }

                        // When other code directly imports http-request.
                        if (this.replaceHTTP && (result.request === "@nativescript/core/http/http-request" || result.request === "tns-core-modules/http/http-request")) {
                            result.request = "@klippa/nativescript-http";
                        }

                        // When other code directly imports image-cache.
                        if (this.replaceImageCache && (result.request === "@nativescript/core/ui/image-cache" || result.request === "tns-core-modules/image-cache")) {
                            // Make sure we don't ruin our own import.
                            // We import image-cache for iOS because that implementation is fine.
                            if (!result.context.endsWith("src/image-cache") && !(result.context.endsWith("@klippa/nativescript-http/image-cache"))) {
                                result.request = "@klippa/nativescript-http/image-cache";
                            }
                        }
                    }
                    return result;
                });
            }
        );
    }
}

module.exports = NativeScriptHTTPPlugin;
