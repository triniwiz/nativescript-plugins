import { getCurrentUserAgent, USER_AGENT, USER_AGENT_HEADER } from "../http.ios";
import * as types from "@nativescript/core/utils/types";
const connections = new Array();
const delegates = new Array();
export class WebsocketConnection {
    constructor(nativeConnection) {
        this.nativeConnection = nativeConnection;
    }
    queueSize() {
        return 0;
    }
    send(text) {
        this.nativeConnection.send(text);
    }
    sendBinary(bytes) {
        const buffer = bytes;
        this.nativeConnection.send(NSData.dataWithData(buffer));
    }
    close(code, reason) {
        return this.nativeConnection.closeWithCodeReason(code, reason);
    }
    cancel() {
        this.nativeConnection.close();
    }
}
var SRWebSocketDelegateImpl = /** @class */ (function (_super) {
    __extends(SRWebSocketDelegateImpl, _super);
    function SRWebSocketDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SRWebSocketDelegateImpl.prototype.webSocketDidCloseWithCodeReasonWasClean = function (webSocket, code, reason, wasClean) {
        this.callbacks.onClosed(code, reason);
    };
    SRWebSocketDelegateImpl.prototype.webSocketDidFailWithError = function (webSocket, error) {
        this.callbacks.onFailure(error.localizedDescription);
    };
    SRWebSocketDelegateImpl.prototype.webSocketDidOpen = function (webSocket) {
        this.callbacks.onOpen();
    };
    SRWebSocketDelegateImpl.prototype.webSocketDidReceiveMessage = function (webSocket, message) {
        if (message && message.bytes) {
            this.callbacks.onBinaryMessage(interop.bufferFromData(message));
        }
        else {
            this.callbacks.onMessage(message);
        }
    };
    SRWebSocketDelegateImpl.ObjCProtocols = [SRWebSocketDelegate];
    return SRWebSocketDelegateImpl;
}(NSObject));
export function newWebsocketConnection(options, callbacks) {
    return new Promise((resolve, reject) => {
        const urlRequest = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(options.url));
        let userAgent;
        if (options.headers) {
            for (let key in options.headers) {
                if (key.toLowerCase() === "user-agent") {
                    userAgent = options.headers[key];
                }
            }
        }
        if (!userAgent) {
            if (!options.headers) {
                options.headers = {};
            }
            options.headers[USER_AGENT_HEADER] = getCurrentUserAgent() ? getCurrentUserAgent() : USER_AGENT;
        }
        if (options.headers) {
            for (let header in options.headers) {
                urlRequest.setValueForHTTPHeaderField(options.headers[header] + "", header);
            }
        }
        if (types.isNumber(options.timeout)) {
            urlRequest.timeoutInterval = options.timeout / 1000;
        }
        const delegate = SRWebSocketDelegateImpl.new();
        delegate.callbacks = callbacks;
        const socket = SRWebSocket.alloc().initWithURLRequest(urlRequest);
        socket.delegate = delegate;
        socket.open();
        connections.push(socket);
        delegates.push(delegate);
        const websocketConnection = new WebsocketConnection(socket);
        resolve(websocketConnection);
    });
}
//# sourceMappingURL=index.ios.js.map