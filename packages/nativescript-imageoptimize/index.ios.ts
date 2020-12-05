import {Options, getFile} from './common';
import {knownFolders, path, File} from '@nativescript/core';

declare const id: any;

export class ImageOptimize {

  public static optimize(options: Options): Promise<any> {
    return new Promise((resolve, reject) => {
      const background_queue = dispatch_queue_create('TNSImageOptimizeQueue', null);
      dispatch_async(background_queue, () => {
        let size;
        const filePath = getFile(options.src);
        const url = filePath.startsWith('file://') ? NSURL.URLWithString(filePath) : NSURL.fileURLWithPath(filePath);
        let optimizer = UIImage.alloc().initWithData(NSData.alloc().initWithContentsOfURL(url));
        let ratio;
        try {
          if (options.height && options.width === undefined) {
            ratio = options.height / optimizer.size.height;
            size = CGRectMake(0, 0, round(optimizer.size.width * ratio), options.height);
          }

          if (options.width && options.height === undefined) {
            ratio = options.width / optimizer.size.width;
            size = CGRectMake(0, 0, options.width, round(optimizer.size.height * ratio));
          }

          if (options.width && options.height) {
            size = CGRectMake(0, 0, options.width, options.height);
          }

          if (options.width || options.height) {
            UIGraphicsBeginImageContextWithOptions(size.size, false, 0.0);
            optimizer.drawInRect(size);
            optimizer = UIGraphicsGetImageFromCurrentImageContext();
            UIGraphicsEndImageContext();
          }

          let fileName = NSUUID.UUID().UUIDString;
          let data;
          let file;
          switch (options.format) {
            case 'png':
              data = UIImagePNGRepresentation(optimizer);
              fileName = fileName + '.png';
              break;
            default:
              data = UIImageJPEGRepresentation(optimizer, options.quality / 100);
              fileName = fileName + '.jpg';
              break;
          }

          if (data) {
            if (options.overwrite) {
              const nativeFile = NSURL.fileURLWithPath(getFile(options.src).indexOf('file://') ? getFile(options.src).replace('file://', '') : getFile(options.src))
              const file = File.fromPath(path.join(options.dest ?? knownFolders.temp().path, nativeFile.lastPathComponent));
              file.removeSync();
            }

            if (options.dest) {
              file = path.join(options.dest, fileName);
              data.writeToFileAtomically(file, true);
            } else {
              file = path.join(knownFolders.temp().path, fileName);
              data.writeToFileAtomically(file, true);
            }
          } else {
            reject({message: 'Failed to save file.'});
          }
          resolve({file: file});
        } catch (ex) {
          reject({message: ex.localizedDescription});
        }
      })
    });
  }
}
