import { buildJavaOptions } from "../http.android";
export class WebsocketConnection {
    constructor(nativeConnection) {
        this.nativeConnection = nativeConnection;
    }
    queueSize() {
        return this.nativeConnection.queueSize();
    }
    send(text) {
        this.nativeConnection.send(text);
    }
    sendBinary(bytes) {
        const typedArray = new Uint8Array(bytes);
        const nativeBuffer = java.nio.ByteBuffer.wrap(Array.from(typedArray));
        const nativeByteString = okio.ByteString.of(nativeBuffer);
        this.nativeConnection.send(nativeByteString);
    }
    close(code, reason) {
        return this.nativeConnection.close(code, reason);
    }
    cancel() {
        this.nativeConnection.cancel();
    }
}
export function newWebsocketConnection(options, callbacks) {
    return new Promise((resolve, reject) => {
        try {
            const javaOptions = buildJavaOptions(options);
            var OurListener = /** @class */ (function (_super) {
    __extends(OurListener, _super);
    function OurListener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OurListener.prototype.onClosed = function (ws, code, reason) {
        callbacks.onClosed(code, reason);
    };
    OurListener.prototype.onMessage = function (ws, data) {
        if (typeof data === "string") {
            callbacks.onMessage(data);
        }
        else {
            var arrayBuffer = new Uint8Array(data.toByteArray()).buffer;
            callbacks.onBinaryMessage(arrayBuffer);
        }
    };
    OurListener.prototype.onFailure = function (ws, t, response) {
        callbacks.onFailure(t.getMessage());
    };
    OurListener.prototype.onOpen = function (ws, response) {
        callbacks.onOpen();
    };
    OurListener.prototype.onClosing = function (ws, code, reason) {
        callbacks.onClosing(code, reason);
    };
    return OurListener;
}(okhttp3.WebSocketListener));
            const listener = new OurListener();
            const websocket = com.klippa.NativeScriptHTTP.Async.Http.GetWebSocketConnection(javaOptions, listener);
            const websocketConnection = new WebsocketConnection(websocket);
            resolve(websocketConnection);
        }
        catch (e) {
            reject(e);
        }
    });
}
//# sourceMappingURL=index.android.js.map