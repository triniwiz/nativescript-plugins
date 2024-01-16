import { AndroidActivityResultEventData, AndroidApplication, Application, Device, Utils } from '@nativescript/core';
import * as permissions from 'nativescript-permissions';

import { CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType, VideoRecorderBase } from './common';

export { CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType };
const RESULT_CANCELED = 0;
const RESULT_OK = -1;
const REQUEST_VIDEO_CAPTURE = 999;

export class VideoRecorder extends VideoRecorderBase {
	public requestPermissions(explanation?: string): Promise<void> {
		return permissions.requestPermissions([android.Manifest.permission.CAMERA, android.Manifest.permission.RECORD_AUDIO], Utils.isNullOrUndefined(explanation) ? '' : explanation);
	}

	public hasCameraPermission(): boolean {
		return permissions.hasPermission(android.Manifest.permission.CAMERA);
	}

	public hasAudioPermission(): boolean {
		return permissions.hasPermission(android.Manifest.permission.RECORD_AUDIO);
	}

	public hasStoragePermission(): boolean {
		return permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE) && permissions.hasPermission(android.Manifest.permission.READ_EXTERNAL_STORAGE);
	}

	public requestStoragePermission(explanation?: string): Promise<any> {
		return permissions.requestPermissions([android.Manifest.permission.READ_EXTERNAL_STORAGE, android.Manifest.permission.WRITE_EXTERNAL_STORAGE], Utils.isNullOrUndefined(explanation) ? '' : explanation);
	}

	public static isAvailable() {
		return Application.android.context.getPackageManager().hasSystemFeature(android.content.pm.PackageManager.FEATURE_CAMERA);
	}

	protected _startRecording(options: Options = this.options): Promise<RecordResult> {
    // eslint-disable-next-line no-async-promise-executor
		return new Promise(async (resolve, reject) => {
			try {
				const pkgName = Utils.ad.getApplication().getPackageName();
				const state = android.os.Environment.getExternalStorageState();
				if (state !== android.os.Environment.MEDIA_MOUNTED) {
					return reject({ event: 'failed' });
				}
				const sdkVersionInt = parseInt(Device.sdkVersion, 10);

				const intent = new android.content.Intent(android.provider.MediaStore.ACTION_VIDEO_CAPTURE);

				intent.putExtra('android.intent.extra.videoQuality', options.hd ? 1 : 0);

				if (options.position !== CameraPosition.NONE) {
					if (sdkVersionInt >= 21) {
						intent.putExtra('android.intent.extras.CAMERA_FACING', options.position === CameraPosition.BACK ? android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK : android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT);
						intent.putExtra('android.intent.extra.USE_FRONT_CAMERA', options.position !== CameraPosition.BACK);
						intent.putExtra('android.intent.extras.LENS_FACING_FRONT', options.position === CameraPosition.BACK ? 0 : 1);
					} else {
						intent.putExtra('android.intent.extras.CAMERA_FACING', options.position === CameraPosition.BACK ? android.hardware.Camera.CameraInfo.CAMERA_FACING_BACK : android.hardware.Camera.CameraInfo.CAMERA_FACING_FRONT);
					}
				}

				if (options.size > 0) {
					intent.putExtra(android.provider.MediaStore.EXTRA_SIZE_LIMIT, options.size * 1024 * 1024);
				}

				let saveToGallery = options?.saveToGallery ?? false;

				const fileName = `NSVID_${Date.now()}.mp4`;
				let videoPath: string;
				let nativeFile: java.io.File;
				let tempPictureUri;

				if (saveToGallery) {
					await permissions.requestPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE);
				}
				if (!permissions.hasPermission(android.Manifest.permission.WRITE_EXTERNAL_STORAGE)) {
					saveToGallery = false;
				}
				const createTmpFile = () => {
					videoPath = Utils.android.getApplicationContext().getExternalFilesDir(null).getAbsolutePath() + '/' + fileName;
					nativeFile = new java.io.File(videoPath);
				};
				if (saveToGallery) {
					const externalDir = Utils.android.getApplicationContext().getExternalFilesDir(android.os.Environment.DIRECTORY_DCIM);
					if (externalDir == null) {
						createTmpFile();
					} else {
						if (!externalDir.exists()) {
							externalDir.mkdirs();
						}
						const cameraDir = new java.io.File(externalDir, 'Camera');

						if (!cameraDir.exists()) {
							cameraDir.mkdirs();
						}

						nativeFile = new java.io.File(cameraDir, fileName);
						videoPath = nativeFile.getAbsolutePath();
					}
				} else {
					createTmpFile();
				}

				if (sdkVersionInt >= 21) {
					tempPictureUri = androidx.core.content.FileProvider.getUriForFile(Application.android.foregroundActivity || Application.android.startActivity, `${pkgName}.provider`, nativeFile);
				} else {
					tempPictureUri = android.net.Uri.fromFile(nativeFile);
				}

				intent.putExtra(android.provider.MediaStore.EXTRA_OUTPUT, tempPictureUri);

				if (options.duration > 0) {
					intent.putExtra(android.provider.MediaStore.EXTRA_DURATION_LIMIT, options.duration);
				}

				const callBack = (args: AndroidActivityResultEventData) => {
					if (args.requestCode === REQUEST_VIDEO_CAPTURE && args.resultCode === RESULT_OK) {
						if (saveToGallery) {
							const currentTimeMillis = java.lang.Integer.valueOf(java.lang.System.currentTimeMillis());
							const values = new android.content.ContentValues();
							values.put(android.provider.MediaStore.MediaColumns.DISPLAY_NAME, fileName);
							values.put(android.provider.MediaStore.MediaColumns.DATE_ADDED, currentTimeMillis);
							values.put(android.provider.MediaStore.MediaColumns.DATE_MODIFIED, currentTimeMillis);
							values.put(android.provider.MediaStore.MediaColumns.MIME_TYPE, 'video/*');

							if (sdkVersionInt >= 29) {
								values.put(android.provider.MediaStore.MediaColumns.RELATIVE_PATH, android.os.Environment.DIRECTORY_DCIM);
								values.put(android.provider.MediaStore.MediaColumns.IS_PENDING, java.lang.Integer.valueOf(1));
								values.put(android.provider.MediaStore.MediaColumns.DATE_TAKEN, currentTimeMillis);
							}

							const uri = Utils.android.getApplicationContext().getContentResolver().insert(android.provider.MediaStore.Video.Media.EXTERNAL_CONTENT_URI, values);

							const fos = Utils.android.getApplicationContext().getContentResolver().openOutputStream(uri);

							const fis = new java.io.FileInputStream(nativeFile);
							try {
								(com as any).github.triniwiz.videorecorder.Utils.copy(fis, fos);
								if (sdkVersionInt >= 29) {
									values.clear();
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
									// @ts-ignore
									values.put(android.provider.MediaStore.Video.Media.IS_PENDING, java.lang.Integer.valueOf(0));
									Utils.android.getApplicationContext().getContentResolver().update(uri, values, null, null);
								}
								resolve({ file: videoPath });
							} catch (e) {
								reject(e);
							}
						} else {
							resolve({ file: videoPath });
						}
					} else if (args.resultCode === RESULT_CANCELED) {
						reject({ event: 'cancelled' });
					} else {
						reject({ event: 'failed' });
					}

					Application.android.off(AndroidApplication.activityResultEvent, callBack);
				};
				Application.android.on(AndroidApplication.activityResultEvent, callBack);

				Application.android.foregroundActivity.startActivityForResult(intent, REQUEST_VIDEO_CAPTURE);
			} catch (e) {
				reject({ event: 'failed', message: e });
			}
		});
	}
}
