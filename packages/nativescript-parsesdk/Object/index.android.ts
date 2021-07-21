import {ObjectBase} from "./common";

export class Object extends ObjectBase {
  readonly android: com.parse.ParseObject;

  constructor(name: string) {
    super();
    this.android = new com.parse.ParseObject(name);
  }


  set(key: string, value: any) {
    this.android.put(key, value?.android ?? value);
  }

  get(key: string) {
    return this.android.get(key);
  }

  save(): Promise<boolean> {
    return new Promise<any>((resolve, reject) => {
      this.android.saveInBackground(new com.parse.SaveCallback({
        done(param0: any): void {
          if (param0) {
            if (typeof param0 === 'boolean') {
              resolve(param0);
            } else {
              reject(param0?.getMessage?.())
            }
          }
        }
      }))
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
