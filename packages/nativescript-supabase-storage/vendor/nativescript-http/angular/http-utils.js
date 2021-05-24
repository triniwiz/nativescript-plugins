import { Observable } from "rxjs";
import { path } from "@nativescript/core";
export function isLocalRequest(url) {
    return url.indexOf("~") === 0 || url.indexOf("/") === 0;
}
export function getAbsolutePath(url, nsFileSystem) {
    url = url.replace("~", "").replace("/", "");
    url = path.join(nsFileSystem.currentApp().path, url);
    return url;
}
export function processLocalFileRequest(url, nsFileSystem, successResponse, errorResponse) {
    url = getAbsolutePath(url, nsFileSystem);
    return new Observable((observer) => {
        if (nsFileSystem.fileExists(url)) {
            const localFile = nsFileSystem.fileFromPath(url);
            localFile.readText()
                .then((data) => {
                try {
                    const json = JSON.parse(data);
                    observer.next(successResponse(url, json, 200));
                    observer.complete();
                }
                catch (error) {
                    const errorResult = { error, text: data };
                    observer.error(errorResponse(url, errorResult, 200));
                }
            }, (err) => {
                observer.error(errorResponse(url, err, 400));
            });
        }
        else {
            observer.error(errorResponse(url, "Not Found", 404));
        }
    });
}
//# sourceMappingURL=http-utils.js.map