import {
  DownloadEventData,
  ProgressEventData,
  S3AuthOptions,
  S3AuthTypes,
  S3Base,
  S3DownloadOptions,
  S3EventError,
  S3Regions,
  S3UploadOptions,
  StatusCode,
  UploadEventData
} from './common';
import {knownFolders, path, File} from "@nativescript/core";


const main_queue = dispatch_get_current_queue();

// const logger = utils.ios.getter(AWSDDLog,AWSDDLog.sharedInstance);
// logger.logLevel = AWSDDLogLevelVerbose;
declare const AWSEndpoint, AWSStaticCredentialsProvider,
  AWSBasicSessionCredentialsProvider, AWSServiceManager, AWSRegionType, AWSServiceConfiguration, AWSS3TransferUtility,
  AWSS3TransferUtilityUploadExpression;

export class S3 extends S3Base {
  private static Options: S3AuthOptions;
  private static Operations: Map<number, any> = new Map();
  private static OperationsData: Map<number, any> = new Map();

  public static init(options: S3AuthOptions) {
    if (!options) return;
    if (options && !options.type) {
      throw new Error('S3AuthType missing');
    }
    S3.Options = options;
    let credentialsProvider;
    let config;

    let credentialsRegion;
    let endPoint;
    if (!options.endPoint) {
      endPoint = AWSEndpoint.alloc().initWithURLString('https://s3.amazonaws.com');
    } else {
      endPoint = AWSEndpoint.alloc().initWithURLString(options.endPoint);
    }

    switch (options.type) {
      case S3AuthTypes.static:
        credentialsProvider = AWSStaticCredentialsProvider.alloc().initWithAccessKeySecretKey(options.accessKey, options.secretKey);
        break;
      case S3AuthTypes.session:
        credentialsProvider = AWSBasicSessionCredentialsProvider.alloc().initWithAccessKeySecretKeySessionToken(options.accessKey, options.secretKey, options.sessionToken);
        break;
      case S3AuthTypes.cognito:
        //  =  AWSCognitoCredentialsProvider.alloc().ini

        break;
      default:
        throw new Error('Invalid S3AuthType');
    }
    const manager = AWSServiceManager.defaultServiceManager();
    config = AWSServiceConfiguration.alloc().initWithRegionEndpointCredentialsProvider(S3.getRegion(options.region), endPoint, credentialsProvider);
    config.maxRetryCount = 5;
    config.timeoutIntervalForRequest = 30;
    manager.defaultServiceConfiguration = config;
  }

  private static getRegion(r) {
    let serviceRegion;
    switch (r) {
      case S3Regions.US_WEST_1:
        serviceRegion = AWSRegionType.USWest1;
        break;
      case S3Regions.US_WEST_2:
        serviceRegion = AWSRegionType.USWest2;
        break;
      case S3Regions.US_EAST_1:
        serviceRegion = AWSRegionType.USEast1;
        break;
      case S3Regions.US_EAST_2:
        serviceRegion = AWSRegionType.USEast2;
        break;
      case S3Regions.AP_SOUTH_1:
        serviceRegion = AWSRegionType.APSouth1;
        break;
      case S3Regions.AP_NORTHEAST_1:
        serviceRegion = AWSRegionType.APNortheast1;
        break;
      case S3Regions.AP_NORTHEAST_2:
        serviceRegion = AWSRegionType.APNortheast2;
        break;
      case S3Regions.AP_NORTHEAST_3:
        // TODO serviceRegion = AWSRegionType.APNorth;
        serviceRegion = AWSRegionType.Unknown;
        break;
      case S3Regions.AP_SOUTHEAST_1:
        serviceRegion = AWSRegionType.APSoutheast1;
        break;
      case S3Regions.AP_SOUTHEAST_2:
        serviceRegion = AWSRegionType.APSoutheast2;
        break;
      case S3Regions.CA_CENTRAL_1:
        serviceRegion = AWSRegionType.CACentral1;
        break;
      case S3Regions.CN_NORTH_1:
        serviceRegion = AWSRegionType.CNNorth1;
        break;
      case S3Regions.CN_NORTHWEST_1:
        serviceRegion = AWSRegionType.CNNorthWest1;
        break;
      case S3Regions.EU_CENTRAL_1:
        serviceRegion = AWSRegionType.EUCentral1;
        break;
      case S3Regions.EU_WEST_1:
        serviceRegion = AWSRegionType.EUWest1;
        break;
      case S3Regions.EU_WEST_2:
        serviceRegion = AWSRegionType.EUWest2;
        break;
      case S3Regions.EU_WEST_3:
        serviceRegion = AWSRegionType.EUWest3;
        break;
      case S3Regions.SA_EAST_1:
        serviceRegion = AWSRegionType.SAEast1;
        break;
      default:
        serviceRegion = AWSRegionType.USEast1;
        break;
    }
    return serviceRegion;
  }

  public createUpload(options: S3UploadOptions): number {
    const transferUtility = AWSS3TransferUtility.defaultS3TransferUtility();
    const appRoot = knownFolders.currentApp().path;
    let file;
    if (options.file && options.file.startsWith('~/')) {
      file = File.fromPath(path.join(appRoot, options.file.replace('~/', '')));
    } else if (options.file && options.file.startsWith('/')) {
      file = File.fromPath(options.file);
    } else if (options.file && options.file.startsWith('file:')) {
      file = File.fromPath(NSURL.URLWithString(options.file).path);
    }
    const nativeFile = NSURL.fileURLWithPath(file.path);
    const UTIRef = UTTypeCreatePreferredIdentifierForTag(kUTTagClassFilenameExtension, nativeFile.pathExtension, null);
    const UTI = UTIRef.takeUnretainedValue();
    let mimeType = options && options.mimeType ? options.mimeType : UTTypeCopyPreferredTagWithClass(<any>UTI, kUTTagClassMIMEType);
    if (typeof mimeType !== 'string') {
      mimeType = mimeType.takeUnretainedValue();
    }
    if (!mimeType) {
      mimeType = 'application/octet-stream';
    }
    const expression = AWSS3TransferUtilityUploadExpression.new();

    if (options.acl) {
      expression.setValueForRequestHeader(options.acl, 'x-amz-acl');
    }
    expression.progressBlock = (task, progress) => {
      const sessionTask = task.sessionTask;
      dispatch_async(main_queue, () => {
        if (sessionTask.state === NSURLSessionTaskState.Running) {
          const current = Math.floor(Math.round(progress.fractionCompleted * 100));
          if (S3.Operations.has(task.taskIdentifier)) {
            const data = S3.OperationsData.get(task.taskIdentifier);
            if (data) {
              if (data.status && data.status !== StatusCode.UPLOADING) {
                S3.OperationsData.set(task.taskIdentifier, Object.assign({}, data, {
                  status: StatusCode.UPLOADING
                }));
              }
              if (data.progress) {
                data.progress(<ProgressEventData>{
                  value: current,
                  currentSize: sessionTask.countOfBytesSent,
                  totalSize: progress.totalUnitCount,
                  speed: 0
                });
              }
            }
          }
        } else if (sessionTask.state === NSURLSessionTaskState.Suspended) {
          if (S3.Operations.has(task.taskIdentifier)) {
            const data = S3.OperationsData.get(task.taskIdentifier);
            if (data) {
              S3.OperationsData.set(id, Object.assign({}, data, {
                status: StatusCode.PAUSED
              }));
            }
          }
        } else if (sessionTask.state === NSURLSessionTaskState.Canceling) {
        }
      });
    };
    let id;
    const uploadTask = transferUtility.uploadFileBucketKeyContentTypeExpressionCompletionHandler(NSURL.fileURLWithPath(file.path), options.bucketName, options.key, mimeType, expression, (task, error) => {
      if (error) {
        dispatch_async(main_queue, () => {
          if (S3.OperationsData.has(task.taskIdentifier)) {
            const currentData = S3.OperationsData.get(task.taskIdentifier);
            if (currentData && currentData.completed) {
              currentData.completed(<S3EventError>{
                status: StatusCode.ERROR, message: error.localizedDescription
              }, null);
            }
          }
        });
        return null;
      }
      dispatch_async(main_queue, () => {
        if (S3.OperationsData.has(task.taskIdentifier)) {
          const currentData = S3.OperationsData.get(task.taskIdentifier);
          if (currentData && currentData.completed) {
            currentData.completed(null, <UploadEventData>{
              status: StatusCode.COMPLETED, path: `${currentData.endPoint}/${currentData.bucketName}/${
                currentData.key
              }`
            });
          }
        }
      });
      return null;
    });
    uploadTask.continueWithBlock(awsTask => {
      if (awsTask.error) {
        console.log(awsTask.error.localizedDescription);
        return null;
      }
      if (awsTask.result) {
        id = awsTask.result.taskIdentifier;
        S3.Operations.set(id, awsTask.result);
      }
      return null;
    });
    const manager = AWSServiceManager.defaultServiceManager();
    S3.OperationsData.set(id, {
      status: StatusCode.PENDING,
      path: file.path,
      completed: options.completed,
      progress: options.progress,
      bucketName: options.bucketName,
      key: options.key,
      endPoint: manager.defaultServiceConfiguration.endpoint.URL.absoluteString
    });
    return id;
  }

  public createDownload(options: S3DownloadOptions): number {
    const transferUtility = AWSS3TransferUtility.defaultS3TransferUtility()
    const appRoot = knownFolders.currentApp().path;

    let file;
    if (options.file && options.file.startsWith('~/')) {
      file = File.fromPath(path.join(appRoot, options.file.replace('~/', '')));
    } else if (options.file && options.file.startsWith('/')) {
      file = File.fromPath(options.file);
    } else if (options.file && options.file.startsWith('file:')) {
      file = File.fromPath(NSURL.URLWithString(options.file).path);
    }
    const nativeFile = NSURL.URLWithString(`file://${file.path}`);
    const expression = AWSS3TransferUtilityUploadExpression.new();
    expression.progressBlock = (task, progress) => {
      const sessionTask = task.sessionTask;
      dispatch_async(main_queue, () => {
        if (sessionTask.state === NSURLSessionTaskState.Running) {
          const current = Math.floor(Math.round(progress.fractionCompleted * 100));
          if (S3.Operations.has(task.taskIdentifier)) {
            const data = S3.OperationsData.get(task.taskIdentifier);
            if (data) {
              if (data.status && data.status !== StatusCode.DOWNLOADING) {
                S3.OperationsData.set(task.taskIdentifier, Object.assign({}, data, {
                  status: StatusCode.DOWNLOADING
                }));
              }
              if (data.progress) {
                data.progress(<ProgressEventData>{
                  value: current,
                  currentSize: sessionTask.countOfBytesReceived,
                  totalSize: progress.totalUnitCount,
                  speed: 0
                });
              }
            }
          }
        } else if (sessionTask.state === NSURLSessionTaskState.Suspended) {
          if (S3.Operations.has(task.taskIdentifier)) {
            const data = S3.OperationsData.get(task.taskIdentifier);
            if (data) {
              S3.OperationsData.set(id, Object.assign({}, data, {
                status: StatusCode.PAUSED
              }));
            }
          }
        } else if (sessionTask.state === NSURLSessionTaskState.Canceling) {
        }
      });
    };
    let id;
    const downloadTask = transferUtility.downloadToURLBucketKeyExpressionCompletionHandler(null, options.bucketName, options.key, expression, (task, _file, _fileData, error) => {
      if (error) {
        dispatch_async(main_queue, () => {
          if (S3.OperationsData.has(task.taskIdentifier)) {
            const currentData = S3.OperationsData.get(task.taskIdentifier);
            if (currentData && currentData.completed) {
              currentData.completed(<S3EventError>{
                status: StatusCode.ERROR, message: error.localizedDescription
              }, null);
            }
          }
        });
        return null;
      }
      const f = _fileData.writeToURLAtomically(nativeFile, true);
      dispatch_async(main_queue, () => {
        const current = Math.floor(Math.round(task.progress.fractionCompleted * 100));
        if (S3.OperationsData.has(task.taskIdentifier)) {
          const currentData = S3.OperationsData.get(task.taskIdentifier);
          if (currentData.progress) {
            currentData.progress(<ProgressEventData>{
              value: current,
              currentSize: task.sessionTask.countOfBytesReceived,
              totalSize: task.progress.totalUnitCount,
              speed: 0
            });
          }
          if (currentData && currentData.completed) {
            if (f) {
              currentData.completed(null, <DownloadEventData>{
                status: StatusCode.COMPLETED, path: nativeFile.path
              });
            }
          }
        }
      });

      return null;
    });
    downloadTask.continueWithBlock(awsTask => {
      if (awsTask.error) {
        const error = awsTask.error;
        dispatch_async(main_queue, () => {
          const _id = awsTask.result ? awsTask.result.taskIdentifier : id;
          if (S3.OperationsData.has(_id)) {
            const currentData = S3.OperationsData.get(_id);
            if (currentData && currentData.completed) {
              currentData.completed(<S3EventError>{
                status: StatusCode.ERROR, message: error.localizedDescription
              }, null);
            }
          }
        });
        return null;
      }

      if (awsTask.result) {
        id = awsTask.result.taskIdentifier;
        S3.Operations.set(id, awsTask.result);
      }
      return null;
    });
    S3.OperationsData.set(id, {
      status: StatusCode.PENDING,
      path: file.path,
      completed: options.completed,
      progress: options.progress,
      bucketName: options.bucketName,
      key: options.key
    });
    return id;
  }

  public resume(id: number) {
    if (id && S3.Operations.has(id)) {
      const task = S3.Operations.get(id);
      task.resume();
    }
  }

  public pause(id: number) {
    if (id && S3.Operations.has(id)) {
      const task = S3.Operations.get(id);
      task.suspend();
    }
  }

  public cancel(id: number) {
    if (id && S3.Operations.has(id)) {
      const task = S3.Operations.get(id);
      task.cancel();
    }
  }
}
