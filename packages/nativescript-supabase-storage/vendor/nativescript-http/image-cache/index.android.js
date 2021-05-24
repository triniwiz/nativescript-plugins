import { request } from "..";
import * as common from "@nativescript/core/ui/image-cache";
export class Cache extends common.Cache {
    _downloadCore(imageRequest) {
        request({
            url: imageRequest.url,
            method: "GET",
            forceImageParsing: true
        }).then((imageRes) => {
            imageRes.content.toImage().then((image) => {
                this._onDownloadCompleted(imageRequest.key, image.android);
            }).catch((err) => {
                this._onDownloadError(imageRequest.key, new Error(err));
            });
        }).catch((err) => {
            this._onDownloadError(imageRequest.key, new Error(err));
        });
    }
}
export class ImageCache extends Cache {
}
//# sourceMappingURL=index.android.js.map