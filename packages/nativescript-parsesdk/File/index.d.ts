import {FileBase} from "./common";

export declare class File extends FileBase {
  constructor(name: string, bytes: number[] | Uint8Array | Uint8ClampedArray)
  constructor(path: string, bytes: number[] | Uint8Array | Uint8ClampedArray, contentType: string)
  constructor(name: string, path: string, contentType: string)
  constructor(...args)
}
