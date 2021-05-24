import {IWebsocketConnection, WebsocketCallbacks} from "./websocket.common";
export {IWebsocketConnection, WebsocketCallbacks} from "./websocket.common";

/**
 * Create a new websocket connection.
 * @param options The request options with the URL to the websocket (with ws:// or wss:// protocol). Only the options url, headers and dontFollowRedirects are used.
 * @param callbacks A class that implements the different callbacks of WebsocketCallbacks.
 */
export declare function newWebsocketConnection(options: HttpRequestOptions, callbacks: WebsocketCallbacks): Promise<IWebsocketConnection>;
