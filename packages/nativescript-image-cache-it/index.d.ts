import {ImageCacheItBase} from './common';

export declare class ImageCacheIt extends ImageCacheItBase {
  public static getItem(src: string): Promise<string>;

  public static deleteItem(src: string): Promise<string>;

  public static hasItem(src: string): Promise<any>;

  public static clear(): Promise<any>;

  public static enableAutoMM(): void;

  public static disableAutoMM(): void;

  on(eventNames: string, callback: (data: any) => void, thisArg?: any);

  on(event: 'loadStart', callback: (args: any) => void, thisArg?: any);

  on(event: 'progress', callback: (args: any) => void, thisArg?: any);

  on(event: 'error', callback: (args: any) => void, thisArg?: any);

  on(event: 'loadEnd', callback: (args: any) => void, thisArg?: any);

}
