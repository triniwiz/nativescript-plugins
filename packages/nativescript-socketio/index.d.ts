import { Common } from './common';
export declare class SocketIO extends Common {
    protected socket: any;
    constructor(...args: any[]);
    connect(): void;
    disconnect(): void;
    readonly connected: boolean;
    on(event: string, callback: (...payload: any[]) => void): () => void;
    once(event: string, callback: (...payload: any[]) => void): () => void;
    off(event: string): void;
    emit(event: string, ...payload: any[]): void;
    joinNamespace(nsp: string): SocketIO;
    leaveNamespace(): void;
}
export declare function serialize(data: any): any;
export declare function deserialize(data: any): any;
export declare function connect(uri: string, options?: any): SocketIO;