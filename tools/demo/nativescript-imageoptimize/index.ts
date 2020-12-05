import {DemoSharedBase} from '../utils';
import {ImageOptimize} from '@triniwiz/nativescript-imageoptimize';
import {knownFolders, path} from "@nativescript/core";

export class DemoSharedNativescriptImageoptimize extends DemoSharedBase {
  result: string;

  constructor() {
    super();

  }

  optimize() {
    ImageOptimize.optimize({
      src: '~/assets/destiny_2.jpg',
      dest: knownFolders.documents().path  + '/output',
      width: 800,
      quality: 50,
      overwrite: true
    }).then(res => {
      this.set('result', res.file);
      try {
        if (global.isIOS) {
          const original = NSFileManager.defaultManager.attributesOfItemAtPathError(path.join(knownFolders.currentApp().path, `destiny_2.jpg`))
          console.log(original.fileSize())
          const file = NSFileManager.defaultManager.attributesOfItemAtPathError(res.file)
          console.log(file.fileSize())
        } else {
          const file = new java.io.File(res.file)
          console.log(file.length());
        }
      } catch (ex) {
        console.dir(ex)
      }
    })
      .catch(error => {
        console.log(error);
      })
  }
}
