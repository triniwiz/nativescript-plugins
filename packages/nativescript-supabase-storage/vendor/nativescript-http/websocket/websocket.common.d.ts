export interface WebsocketCallbacks {
    onClosed: (code: number, reason: string) => void;
    onFailure: (error: string) => void;
    onOpen: () => void;
    onClosing: (code: number, reason: string) => void;
    onMessage: (text: string) => void;
    onBinaryMessage: (data: ArrayBuffer) => void;
}
export interface IWebsocketConnection {
    queueSize(): number;
    send(text: string): void;
    sendBinary(bytes: ArrayBuffer): void;
    close(code: number, reason: string): void;
    cancel(): void;
}
