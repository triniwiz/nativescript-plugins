import {FileBase} from "./common";
import {knownFolders} from "@nativescript/core";


export class File extends FileBase {
  readonly android: com.parse.ParseFile;

  constructor(name: string, bytes: number[] | Uint8Array | Uint8ClampedArray)
  constructor(path: string, bytes: number[] | Uint8Array | Uint8ClampedArray, contentType: string)
  constructor(name: string, path: string, contentType: string)
  constructor(...args) {
    super();
    if (args.length === 1) {
      const value = args[0];
      if (value instanceof android.os.Parcel) {
        this.android = new com.parse.ParseFile(value)
      } else if (value instanceof com.parse.ParseFile) {
        this.android = value;
      } else {
        // throw ??
      }
    } else if (args.length === 2) {
      const name = args[0];
      const value = args[1];
      if (value instanceof Uint8Array || value instanceof Uint8ClampedArray) {
        this.android = new com.parse.ParseFile(name, Array.from(value))
      } else {
        this.android = new com.parse.ParseFile(name, value)
      }
    } else if (args.length === 3) {
      const name = args[0];
      let value = args[1];
      const contentType = args[2]
      if (value instanceof Uint8Array || value instanceof Uint8ClampedArray) {
        this.android = new com.parse.ParseFile(name, Array.from(value), contentType);
      } else {
        if (typeof value === 'string') {
          if (value.startsWith('~/')) {
            value = value.replace('~', knownFolders.currentApp().path);
          }
        }
        this.android = new com.parse.ParseFile(new java.io.File(value), contentType)
      }
    }
  }

  save(progress?: (value: number) => void): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      if (typeof progress === 'function') {
        this.android.saveInBackground(new com.parse.SaveCallback({
          done(param0: any): void {
            if (param0) {
              reject(param0?.getMessage?.());
            } else {
              resolve();
            }
          }
        }), new com.parse.ProgressCallback({
          done(param0): void {
            progress(param0?.intValue?.() ?? param0 as any);
          }
        }))
      } else {
        this.android.saveInBackground(new com.parse.SaveCallback({
          done(param0: any): void {
            console.log('saveInBackground', param0);
            if (param0) {
              reject(param0?.getMessage?.());
            } else {
              resolve();
            }
          }
        }));
      }
      console.log('saving');
    })
  }

  saveSync() {
    const task = this.android.saveInBackground();
    task.waitForCompletion();
    if (task.isFaulted()) {
      return false;
    } else if (task.isCancelled()) {
      return false;
    } else return task.isCompleted();
  }
}
