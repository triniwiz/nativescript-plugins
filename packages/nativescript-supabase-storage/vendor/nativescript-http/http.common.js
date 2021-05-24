import { knownFolders, path } from "@nativescript/core";
export function getFilenameFromUrl(url) {
    const slashPos = url.lastIndexOf("/") + 1;
    const questionMarkPos = url.lastIndexOf("?");
    let actualFileName;
    if (questionMarkPos !== -1) {
        actualFileName = url.substring(slashPos, questionMarkPos);
    }
    else {
        actualFileName = url.substring(slashPos);
    }
    const result = path.join(knownFolders.documents().path, actualFileName);
    return result;
}
export class HTTPFormDataEntry {
    constructor(data, name, type) {
        this.data = data;
        this.name = name;
        this.type = type;
    }
}
export class HTTPFormData {
    constructor() {
        this.values = new Map();
    }
    append(name, value) {
        if (!this.values.has(name)) {
            this.values.set(name, new Array());
        }
        const values = this.values.get(name);
        values.push(value);
        this.values.set(name, values);
    }
    delete(name) {
        this.values.delete(name);
    }
    get(name) {
        if (this.has(name)) {
            return this.values.get(name)[0];
        }
        return null;
    }
    getAll(name) {
        const value = this.values.get(name);
        if (value) {
            return value;
        }
        return [];
    }
    has(name) {
        return this.values.has(name);
    }
    set(name, value) {
        const values = new Array();
        values.push(value);
        this.values.set(name, values);
    }
    forEach(callbackfn, thisArg) {
        this.values.forEach((mapVal, mapKey) => {
            mapVal.forEach((formVal) => {
                callbackfn(formVal, mapKey, this);
            });
        }, thisArg);
    }
}
export var ImageParseMethod;
(function (ImageParseMethod) {
    ImageParseMethod[ImageParseMethod["NEVER"] = 0] = "NEVER";
    ImageParseMethod[ImageParseMethod["CONTENTTYPE"] = 1] = "CONTENTTYPE";
    ImageParseMethod[ImageParseMethod["ALWAYS"] = 2] = "ALWAYS";
})(ImageParseMethod || (ImageParseMethod = {}));
export function completeSelfCheck(options) {
    const response = new Blob(["{ \"SelfCheck\": \"OK!\" }"], {
        type: "application/json",
    });
    return Promise.resolve({
        content: {
            raw: response,
            toArrayBuffer: () => Blob.InternalAccessor.getBuffer(response).buffer.slice(0),
            toString: (encoding) => {
                return "{ \"SelfCheck\": \"OK!\" }";
            },
            toJSON: (encoding) => {
                return {
                    "SelfCheck": "OK!",
                };
            },
            toImage: () => {
                throw new Error(`toImage Not implemented for self-check.`);
            },
            toFile: (destinationFilePath) => {
                throw new Error(`toFile Not implemented for self-check.`);
            }
        },
        statusCode: 200,
        headers: options.headers
    });
}
//# sourceMappingURL=http.common.js.map