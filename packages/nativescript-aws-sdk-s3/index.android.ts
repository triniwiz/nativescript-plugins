import {
  DownloadEventData,
  ProgressEventData,
  S3AuthOptions,
  S3AuthTypes,
  S3Base,
  S3DownloadOptions,
  S3EventError,
  S3UploadOptions,
  StatusCode,
  UploadEventData
} from './common';
import {knownFolders, Utils, File, path} from '@nativescript/core';

declare const com;

export class S3 extends S3Base {
  private static Options: S3AuthOptions;
  private static Client;
  private static TransferUtility;
  private static Operations: Map<number, any> = new Map();
  private static OperationsData: Map<number, any> = new Map();

  public static init(options: S3AuthOptions) {
    if (!S3.Options) {
      S3.Options = options;
      let credentials;

      switch (options.type) {
        case S3AuthTypes.static:
          credentials = new com.amazonaws.auth.BasicAWSCredentials(S3.Options.accessKey, S3.Options.secretKey);
          break;
        case S3AuthTypes.session:
          credentials = new com.amazonaws.auth.BasicSessionCredentials(S3.Options.accessKey, S3.Options.secretKey, S3.Options.sessionToken);
          break;
        case S3AuthTypes.cognito:
          break;
        default:
          throw new Error('Invalid S3AuthType');
      }
      S3.Client = new com.amazonaws.services.s3.AmazonS3Client(credentials);
      if (S3.Options.endPoint) {
        S3.Client.setEndpoint(S3.Options.endPoint);
      }
      S3.TransferUtility = new com.amazonaws.mobileconnectors.s3.transferutility.TransferUtility.builder()
        .s3Client(S3.Client)
        .context(Utils.ad.getApplicationContext())
        .build();
    }
  }

  public createDownload(options: S3DownloadOptions): number {
    const appRoot = knownFolders.currentApp().path;
    let file;
    if (options.file && options.file.startsWith('~/')) {
      file = File.fromPath(path.join(appRoot, options.file.replace('~/', '')));
    } else if (options.file && options.file.startsWith('/')) {
      file = File.fromPath(options.file);
    } else if (options.file && options.file.startsWith('file:')) {
      file = File.fromPath(NSURL.URLWithString(options.file).path);
    }

    const fileDownload = S3.TransferUtility.download(options.bucketName, options.key, new java.io.File(file.path));

    S3.OperationsData.set(fileDownload.getId(), {
      status: StatusCode.PENDING,
      path: file.path,
      completed: options.completed,
      progress: options.progress,
      bucketName: options.bucketName,
      key: options.key
    });

    fileDownload.setTransferListener(new com.amazonaws.mobileconnectors.s3.transferutility.TransferListener({
      onStateChanged: function (id, state) {
        switch (state) {
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.WAITING:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PAUSED:
            if (S3.OperationsData.has(id)) {
              const data = S3.OperationsData.get(id);
              if (data) {
                S3.OperationsData.set(id, Object.assign({}, data, {
                  status: StatusCode.PAUSED
                }));
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.IN_PROGRESS:
            if (S3.OperationsData.has(id)) {
              const data = S3.OperationsData.get(id);
              if (data) {
                if (data.status && data.status !== StatusCode.DOWNLOADING) {
                  S3.OperationsData.set(id, Object.assign({}, data, {
                    status: StatusCode.DOWNLOADING
                  }));
                }
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.FAILED:
            // GO TO Error
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.RESUMED_WAITING:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.COMPLETED:
            if (S3.OperationsData.has(id)) {
              const currentData = S3.OperationsData.get(id);
              if (currentData && currentData.completed) {
                currentData.completed(null, <DownloadEventData>{
                  status: StatusCode.COMPLETED, path: currentData.path
                });
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.WAITING_FOR_NETWORK:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PART_COMPLETED:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_CANCEL:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_PAUSE:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_NETWORK_DISCONNECT:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.UNKNOWN:
            break;
        }
      }, onProgressChanged: function (id, bytesCurrent, bytesTotal) {
        const p = Math.round(bytesCurrent / bytesTotal * 100);
        const current = p ? p : 0;
        if (S3.OperationsData.has(id)) {
          const data = S3.OperationsData.get(id);
          if (data) {
            if (data.status && data.status !== StatusCode.DOWNLOADING) {
              S3.OperationsData.set(id, Object.assign({}, data, {
                status: StatusCode.DOWNLOADING
              }));
            }
            if (data.progress) {
              data.progress(<ProgressEventData>{
                value: current, currentSize: bytesCurrent, totalSize: bytesCurrent, speed: 0
              });
            }
          }
        }
      }, onError: function (id, ex) {
        if (S3.OperationsData.has(id)) {
          const currentData = S3.OperationsData.get(id);
          if (currentData && currentData.completed) {
            currentData.completed(<S3EventError>{
              status: StatusCode.ERROR, message: ex.getMessage()
            }, null);
          }
        }
      }
    }));

    return fileDownload.getId();
  }

  public createUpload(options: S3UploadOptions): number {
    const appRoot = knownFolders.currentApp().path;
    let file;
    if (options.file && options.file.startsWith('~/')) {
      file = File.fromPath(path.join(appRoot, options.file.replace('~/', '')));
    } else if (options.file && options.file.startsWith('/')) {
      file = File.fromPath(options.file);
    } else if (options.file && options.file.startsWith('file:')) {
      file = File.fromPath(NSURL.URLWithString(options.file).path);
    }
    let acl;
    switch (options.acl) {
      case 'private':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.Private;
        break;
      case 'public-read':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.PublicRead;
        break;
      case 'public-read-write':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.PublicReadWrite;
        break;
      case 'aws-exec-read':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.AwsExecRead;
        break;
      case 'authenticated-read':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.AuthenticatedRead;
        break;
      case 'bucket-owner-read':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.BucketOwnerRead;
        break;
      case 'bucket-owner-full-control':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.BucketOwnerFullControl;
        break;
      case 'log-delivery-write':
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.LogDeliveryWrite;
        break;
      default:
        acl = com.amazonaws.services.s3.model.CannedAccessControlList.Private;
        break;
    }
    const fileUpload = S3.TransferUtility.upload(options.bucketName, options.key, new java.io.File(file.path), acl);

    S3.OperationsData.set(fileUpload.getId(), {
      status: StatusCode.PENDING,
      path: file.path,
      completed: options.completed,
      progress: options.progress,
      bucketName: options.bucketName,
      key: options.key,
      endPoint: ''
    });

    fileUpload.setTransferListener(new com.amazonaws.mobileconnectors.s3.transferutility.TransferListener({
      onStateChanged: function (id, state) {
        switch (state) {
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.WAITING:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PAUSED:
            if (S3.OperationsData.has(id)) {
              const data = S3.OperationsData.get(id);
              if (data) {
                S3.OperationsData.set(id, Object.assign({}, data, {
                  status: StatusCode.PAUSED
                }));
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.IN_PROGRESS:
            if (S3.OperationsData.has(id)) {
              const data = S3.OperationsData.get(id);
              if (data) {
                if (data.status && data.status !== StatusCode.DOWNLOADING) {
                  S3.OperationsData.set(id, Object.assign({}, data, {
                    status: StatusCode.DOWNLOADING
                  }));
                }
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.FAILED:
            // GO TO Error
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.RESUMED_WAITING:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.COMPLETED:
            if (S3.OperationsData.has(id)) {
              const currentData = S3.OperationsData.get(id);
              if (currentData && currentData.completed) {
                currentData.completed(null, <UploadEventData>{
                  status: StatusCode.COMPLETED,
                  path: S3.Client.getResourceUrl(currentData.bucketName, currentData.key)
                });
              }
            }
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.WAITING_FOR_NETWORK:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PART_COMPLETED:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_CANCEL:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_PAUSE:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.PENDING_NETWORK_DISCONNECT:
            break;
          case com.amazonaws.mobileconnectors.s3.transferutility.TransferState.UNKNOWN:
            break;
        }
      }, onProgressChanged: function (id, bytesCurrent, bytesTotal) {
        const current = Math.round(bytesCurrent / bytesTotal * 100);
        if (S3.OperationsData.has(id)) {
          const data = S3.OperationsData.get(id);
          if (data) {
            if (data.status && data.status !== StatusCode.DOWNLOADING) {
              S3.OperationsData.set(id, Object.assign({}, data, {
                status: StatusCode.DOWNLOADING
              }));
            }
            if (data.progress) {
              data.progress(<ProgressEventData>{
                value: current, currentSize: bytesCurrent, totalSize: bytesCurrent, speed: 0
              });
            }
          }
        }
      }, onError: function (id, ex) {
        if (S3.OperationsData.has(id)) {
          const currentData = S3.OperationsData.get(id);
          if (currentData && currentData.completed) {
            currentData.completed(<S3EventError>{
              status: StatusCode.ERROR, message: ex.getMessage()
            }, null);
          }
        }
      }
    }));

    return fileUpload.getId();
  }

  public resume(id: number): void {
    if (id) {
      S3.TransferUtility.resume(id);
    }
  }

  public pause(id: number): void {
    if (id) {
      S3.TransferUtility.pause(id);
    }
  }

  public cancel(id: number): void {
    if (id) {
      S3.TransferUtility.cancel(id);
    }
  }
}
