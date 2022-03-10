export abstract class S3Base {
  public abstract createUpload(options: S3UploadOptions): number;

  public abstract createDownload(options: S3DownloadOptions): number;

  public abstract pause(id: number): void;

  public abstract resume(id: number): void;

  public abstract cancel(id: number): void;
}

export function generateId(): string {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


export interface S3AuthOptions {
  endPoint?: string;
  accessKey: string;
  secretKey: string;
  sessionToken?: string;
  type: S3AuthTypes | 'static' | 'cognito' | 'session';
  region?: S3Regions;
}

export interface S3UploadOptions {
  file: string;
  bucketName: string;
  key: string;
  mimeType?: string;
  acl?: string;
  completed: Function;
  progress: Function;
}

export interface S3DownloadOptions {
  file: string;
  bucketName: string;
  key: string;
  completed: Function;
  progress: Function;
}


export interface S3EventError {
  status: string;
  message: string;
}

export interface DownloadEventData {
  status: string;
  path: string;
  message?: string;
}

export interface UploadEventData {
  status: string;
  path: string;
  message?: string;
}

export interface ProgressEventData {
  value: number;
  currentSize: number;
  totalSize: number;
  speed: number;
}

export enum StatusCode {
  PENDING = 'pending',
  PAUSED = 'paused',
  DOWNLOADING = 'downloading',
  UPLOADING = 'uploading',
  COMPLETED = 'completed',
  ERROR = 'error'
}


export enum S3AuthTypes {
  static = 'static',
  cognito = 'cognito',
  session = 'session'
}

export enum S3Regions {
  US_EAST_1 = 'us-east-1',
  US_EAST_2 = 'us-east-2',
  US_WEST_1 = 'us-west-1',
  US_WEST_2 = 'us-west-2',
  AP_SOUTH_1 = 'ap-south-1',
  AP_NORTHEAST_1 = 'ap-northeast-1',
  AP_NORTHEAST_2 = 'ap-northeast-2',
  AP_NORTHEAST_3 = 'ap-northeast-3',
  AP_SOUTHEAST_1 = 'ap-southeast-1',
  AP_SOUTHEAST_2 = 'ap-southeast-2',
  CA_CENTRAL_1 = 'ca-central-1',
  CN_NORTH_1 = 'cn-north-1',
  CN_NORTHWEST_1 = 'cn-northwest-1',
  EU_CENTRAL_1 = 'eu-central-1',
  EU_WEST_1 = 'eu-west-1',
  EU_WEST_2 = 'eu-west-2',
  EU_WEST_3 = 'eu-west-3',
  SA_EAST_1 = 'sa-east-1'
}
