import {ObjectBase} from "./common";

export class Object extends ObjectBase {
  readonly ios: PFObject;

  constructor(name: string) {
    super();
    this.ios = PFObject.alloc().initWithClassName(name);
  }

  set(key: string, value: any) {
    this.ios.setObjectForKey(value?.ios ?? value, key);
  }

  get(key: string) {
    return this.ios.objectForKey(key);
  }

  save(): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.ios.saveInBackgroundWithBlock((saved, error) => {
        if (error) {
          reject(error?.localizedDescription)
        } else {
          resolve(saved);
        }
      })
    })
  }

  saveSync() {
    return this.ios.save();
  }
}
