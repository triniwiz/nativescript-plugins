export declare function expiresAt(expiresIn: number): number;
export declare function uuid(): string;
export declare const isBrowser: () => boolean;
export declare function getParameterByName(name: string, url?: string): string;
export declare class LocalStorage {
    item(index: string): any;
    get length(): number;
    constructor(localStorage: Storage);
    clear(): void;
    key(index: number): string | null;
    setItem(key: string, value: any): void;
    getItem(key: string): string | null;
    removeItem(key: string): void;
}
