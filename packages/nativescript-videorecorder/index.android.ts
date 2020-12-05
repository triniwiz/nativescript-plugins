import {CameraPosition, Options, RecordResult, VideoRecorderBase} from './common';
import {
  AndroidApplication,
  Application,
  AndroidActivityRequestPermissionsEventData,
  Utils,
  AndroidActivityResultEventData
} from "@nativescript/core";
import {isNullOrUndefined} from "@nativescript/core/utils/types";

declare let global: any;

function useAndroidX() {
  return global.androidx && global.androidx.appcompat;
}

const ContentNamespace = useAndroidX() ? (androidx as any).core.content : (android as any).support.v4.content;

const RESULT_CANCELED = 0;
const RESULT_OK = -1;
const REQUEST_VIDEO_CAPTURE = 999;

export class VideoRecorder extends VideoRecorderBase {
  _permissionListener

  constructor() {
    super();
  }

  public requestPermissions(explanation?: string): Promise<void> {
    return VideoRecorder._requestPermissions(
      [
        android.Manifest.permission.CAMERA,
        android.Manifest.permission.RECORD_AUDIO
      ],
      isNullOrUndefined(explanation) ? '' : explanation
    );
  }

  static _requestPermissions(values: string[], explanation?: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      Application.android.on(AndroidApplication.activityRequestPermissionsEvent, (args: AndroidActivityRequestPermissionsEventData) => {
        for (let i = 0; i++;) {
          // if(){}
        }
      });
      androidx.core.app.ActivityCompat.requestPermissions(Application.android.foregroundActivity || Application.android.startActivity,
        values,
        REQUEST_VIDEO_CAPTURE)
    })
  }

  static _hasPermission(value: any): boolean {
    if (android.os.Build.VERSION.SDK_INT < 23) {
      return true
    } else return androidx.core.content.ContextCompat.checkSelfPermission(Application.android.foregroundActivity || Application.android.startActivity, value) === android.content.pm.PackageManager.PERMISSION_GRANTED
  }

  static _wasPermissionDenied(value: any): boolean {
    if (android.os.Build.VERSION.SDK_INT < 23) {
      return true
    } else return androidx.core.content.ContextCompat.checkSelfPermission(Application.android.foregroundActivity || Application.android.startActivity, value) === android.content.pm.PackageManager.PERMISSION_DENIED
  }

  public hasCameraPermission(): boolean {
    return VideoRecorder._hasPermission(android.Manifest.permission.CAMERA);
  }

  public hasAudioPermission(): boolean {
    return VideoRecorder._hasPermission(android.Manifest.permission.RECORD_AUDIO);
  }

  public hasStoragePermission(): boolean {
    return VideoRecorder._hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) &&
      VideoRecorder._hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE)
  }

  public requestStoragePermission(explanation?: string): Promise<any> {
    return VideoRecorder._requestPermissions([
        (android as any).Manifest.permission.READ_EXTERNAL_STORAGE,
        (android as any).Manifest.permission.WRITE_EXTERNAL_STORAGE
      ],
      isNullOrUndefined(explanation) ? '' : explanation)
  }

  public static isAvailable() {
    return Utils.android.getApplicationContext()
      .getPackageManager()
      .hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
  }

  protected _startRecording(
    options: Options = this.options
  ): Promise<RecordResult> {
    return new Promise((resolve, reject) => {
      let data = null;
      let file;
      const pkgName = Utils.ad.getApplication().getPackageName();

      const state = android.os.Environment.getExternalStorageState();
      if (state !== android.os.Environment.MEDIA_MOUNTED) {
        return reject({event: 'failed'});
      }

      const intent = new android.content.Intent(
        android.provider.MediaStore.ACTION_VIDEO_CAPTURE
      );

      intent.putExtra('android.intent.extra.videoQuality', options.hd ? 1 : 0);

      if (options.position !== CameraPosition.NONE) {
        intent.putExtra(
          'android.intent.extras.CAMERA_FACING',
          options.position === CameraPosition.BACK
            ? android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT
            : android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK
        );
      }

      if (options.size > 0) {
        intent.putExtra(
          android.provider.MediaStore.EXTRA_SIZE_LIMIT,
          options.size * 1024 * 1024
        );
      }

      const fileName = `VID_${Date.now()}.mp4`;
      let path;
      let tempPictureUri;
      const sdkVersionInt = android.os.Build.VERSION.SDK_INT

      if (options.saveToGallery) {
        path =
          android.os.Environment.getExternalStoragePublicDirectory(
            android.os.Environment.DIRECTORY_DCIM
          ).getAbsolutePath() + '/Camera';
      } else {
        path = Application.android.context
          .getExternalFilesDir(null)
          .getAbsolutePath();
      }

      file = new java.io.File(path + '/' + fileName);

      if (sdkVersionInt >= 21) {
        tempPictureUri = (<any>(
          ContentNamespace
        )).FileProvider.getUriForFile(
          Application.android.foregroundActivity || Application.android.startActivity,
          `${pkgName}.provider`,
          file
        );
      } else {
        tempPictureUri = android.net.Uri.fromFile(file);
      }

      intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);

      if (options.duration > 0) {
        intent.putExtra(
          android.provider.MediaStore.EXTRA_DURATION_LIMIT,
          options.duration
        );
      }

      if (
        intent.resolveActivity(Application.android.context.getPackageManager()) != null
      ) {
        const callBack = (args: AndroidActivityResultEventData) => {
          if (
            args.requestCode === REQUEST_VIDEO_CAPTURE &&
            args.resultCode === RESULT_OK
          ) {
            const mediaFile = args.intent ? args.intent.getData() : file;
            if (options.saveToGallery) {
              resolve({file: getRealPathFromURI(mediaFile)});
            } else {
              resolve({file: file.toString()});
            }
          } else if (args.resultCode === RESULT_CANCELED) {
            reject({event: 'cancelled'});
          } else {
            reject({event: 'failed'});
          }

          Application.android.off(AndroidApplication.activityResultEvent, callBack);
        };
        Application.android.on(AndroidApplication.activityResultEvent, callBack);

        Application.android.foregroundActivity.startActivityForResult(
          intent,
          REQUEST_VIDEO_CAPTURE
        );
      } else {
        reject({event: 'failed'});
      }
    });
  }


}

function getRealPathFromURI(contentUri: android.net.Uri): string {
  let path: string;
  const activity = Application.android.startActivity || Application.android.foregroundActivity;
  const proj: Array<string> = [android.provider.MediaStore.MediaColumns.DATA];
  const cursor: android.database.Cursor = activity
    .getApplicationContext()
    .getContentResolver()
    .query(contentUri, proj, null, null, null);

  if (cursor.moveToFirst()) {
    const columnIndex: number = cursor.getColumnIndexOrThrow(
      android.provider.MediaStore.MediaColumns.DATA
    );
    path = cursor.getString(columnIndex);
  }
  cursor.close();
  return path;
}
