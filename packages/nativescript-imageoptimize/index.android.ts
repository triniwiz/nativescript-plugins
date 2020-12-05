import {getFile, Options} from "@triniwiz/nativescript-imageoptimize/common";
import {knownFolders, path, Utils, File, Folder} from "@nativescript/core";

declare const com;

export class ImageOptimize {

  public static optimize(options: Options): Promise<any> {
    return new Promise((resolve, reject) => {
      const opts = new java.util.HashMap();

      if (options.quality) {
        opts.put('quality', new java.lang.Integer(options.quality));
      }

      if (options.dest === undefined) {
        opts.put('dest', knownFolders.temp().path);
      } else {
        Folder.fromPath(getFile(options.src));
        opts.put('dest', options.dest);
      }

      if (options.format) {
        opts.put('format', options.format);
      }
      console.log(opts)
      if (options.overwrite) {
        const file = new java.io.File(getFile(options.src));
        const filePath = new java.io.File(path.join(options.dest ?? knownFolders.temp().path, file.getName()));
        const compressorTmp = new java.io.File(knownFolders.temp().path, 'compressor/' + file.getName());
        console.log('compressorTmp', compressorTmp);
        filePath.delete();
        compressorTmp.delete();
      }
      com.github.triniwiz.imageoptimize.ImageOptimizer.optimize(new java.io.File(getFile(options.src)),
        Utils.ad.getApplicationContext(),
        opts,
        new com.github.triniwiz.imageoptimize.ImageOptimizer.Callback({
          onSuccess(file) {
            const result = {};
            console.log('onSuccess');
            if (file instanceof java.io.File) {
              result['file'] = file.getAbsolutePath();
              resolve(result);
            } else {
              // TODO;
            }
          },
          onError(message) {
            reject({message})
          }
        }));
    });
  }
}
