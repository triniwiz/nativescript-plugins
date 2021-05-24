import { HttpRequestOptions } from "@nativescript/core";
import { IWebsocketConnection, WebsocketCallbacks } from "./websocket.common";
export { IWebsocketConnection, WebsocketCallbacks } from "./websocket.common";
export declare class WebsocketConnection implements IWebsocketConnection {
    private nativeConnection;
    constructor(nativeConnection: okhttp3.WebSocket);
    queueSize(): number;
    send(text: string): void;
    sendBinary(bytes: ArrayBuffer): void;
    close(code: number, reason: string): boolean;
    cancel(): void;
}
export declare function newWebsocketConnection(options: HttpRequestOptions, callbacks: WebsocketCallbacks): Promise<IWebsocketConnection>;
