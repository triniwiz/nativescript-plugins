import {FileBase} from "./common";
import {knownFolders} from "@nativescript/core";

export class File extends FileBase {
  readonly ios: PFFileObject;

  constructor(name: string, bytes: number[] | Uint8Array | Uint8ClampedArray)
  constructor(path: string, bytes: number[] | Uint8Array | Uint8ClampedArray, contentType: string)
  constructor(name: string, path: string, contentType: string)
  constructor(...args) {
    super();
    if (args.length === 1) {
      const value = args[0];
      if (value instanceof PFFileObject) {
        this.ios = value;
      } else {
        // throw ??
      }
    } else if (args.length === 2) {
      const name = args[0];
      const value = args[1];
      if (value instanceof Uint8Array || value instanceof Uint8ClampedArray) {
        this.ios = PFFileObject.fileObjectWithNameData(name, NSData.dataWithData(value as any))
      } else {
        this.ios = PFFileObject.fileObjectWithNameData(name, value as any)
      }
    } else if (args.length === 3) {
      const name = args[0];
      let value = args[1];
      const contentType = args[2]
      if (value instanceof Uint8Array || value instanceof Uint8ClampedArray) {
        this.ios = PFFileObject.fileObjectWithNameDataContentType(name, NSData.dataWithData(value as any), contentType);
      } else {
        if (typeof value === 'string') {
          if (value.startsWith('~/')) {
            value = value.replace('~', knownFolders.currentApp().path);
          }
        }
        this.ios = PFFileObject.fileObjectWithNameContentsAtPath(name, value);
      }
    }
  }

  save(progress?: (value: number) => void): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      if (typeof progress === 'function') {
        this.ios.saveInBackgroundWithBlockProgressBlock((done, error) => {
          if (error) {
            reject(error?.localizedDescription);
          } else {
            resolve(done);
          }
        }, (value) => {
          progress(value);
        })
      } else {
        this.ios.saveInBackgroundWithBlock((done, error) => {
          if (error) {
            reject(error?.localizedDescription);
          } else {
            resolve(done);
          }
        });
      }
    });
  }

  saveSync() {
    return this.ios.save();
  }
}
