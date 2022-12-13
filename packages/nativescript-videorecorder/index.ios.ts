import { CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType, VideoRecorderBase } from './common';

export { CameraPosition, CameraPositionType, Options, RecordResult, VideoFormat, VideoFormatType };
import { Frame } from '@nativescript/core/ui/frame';
import { isNumber } from '@nativescript/core/utils/types';
import { File, knownFolders, path as nsPath } from '@nativescript/core';

let listener;

export class VideoRecorder extends VideoRecorderBase {
	public requestPermissions(explanation?: string): Promise<void> {
		return new Promise(async (resolve, reject) => {
			const cameraPermissionStatus = AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo);
			const audioPermissionStatus = AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeAudio);
			let authStatus = cameraPermissionStatus === AVAuthorizationStatus.Authorized && audioPermissionStatus === AVAuthorizationStatus.Authorized;
			if (cameraPermissionStatus === AVAuthorizationStatus.NotDetermined) {
				try {
					await this.requestCameraPermission();
					authStatus = true;
				} catch (e) {
					authStatus = false;
				}
			}

			if (audioPermissionStatus === AVAuthorizationStatus.NotDetermined) {
				try {
					await this.requestAudioPermission();
					authStatus = true;
				} catch (e) {
					authStatus = false;
				}
			}
			if (authStatus) {
				resolve();
			} else {
				reject();
			}
		});
	}

	private requestCameraPermission(): Promise<void> {
		return new Promise((resolve, reject) => {
			AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeVideo, (cameraPermissionStatus) => {
				if (cameraPermissionStatus) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	private requestAudioPermission(): Promise<void> {
		return new Promise((resolve, reject) => {
			AVCaptureDevice.requestAccessForMediaTypeCompletionHandler(AVMediaTypeAudio, (audioPermissionStatus) => {
				if (audioPermissionStatus) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	public hasCameraPermission(): boolean {
		return AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeVideo) === AVAuthorizationStatus.Authorized;
	}

	public hasAudioPermission(): boolean {
		return AVCaptureDevice.authorizationStatusForMediaType(AVMediaTypeAudio) === AVAuthorizationStatus.Authorized;
	}

	public hasStoragePermission(): boolean {
		return PHPhotoLibrary.authorizationStatus() === PHAuthorizationStatus.Authorized;
	}

	public requestStoragePermission(explanation?: string): Promise<void> {
		return new Promise<void>((resolve, reject) => {
			PHPhotoLibrary.requestAuthorization((auth) => {
				if (auth === PHAuthorizationStatus.Authorized) {
					resolve();
				} else {
					reject();
				}
			});
		});
	}

	public static isAvailable() {
		return UIImagePickerController.isSourceTypeAvailable(UIImagePickerControllerSourceType.Camera);
	}

	protected _startRecording(options: Options = this.options): Promise<RecordResult> {
		return new Promise((resolve, reject) => {
			listener = null;
			let picker = UIImagePickerController.new();
			picker.mediaTypes = <any>[kUTTypeMovie];
			picker.sourceType = UIImagePickerControllerSourceType.Camera;
			picker.cameraCaptureMode = UIImagePickerControllerCameraCaptureMode.Video;

			if (options.position !== CameraPosition.NONE) {
				picker.cameraDevice = options.position === CameraPosition.FRONT ? UIImagePickerControllerCameraDevice.Front : UIImagePickerControllerCameraDevice.Rear;
			}

			picker.allowsEditing = false;
			picker.videoQuality = options.hd ? UIImagePickerControllerQualityType.TypeHigh : UIImagePickerControllerQualityType.TypeLow;

			if (isNumber(options.duration) && options.duration > 0) {
				picker.videoMaximumDuration = Number(options.duration);
			}

			if (options) {
				listener = UIImagePickerControllerDelegateImpl.initWithOwnerCallbackOptions(new WeakRef(this), resolve, reject, options);
			} else {
				listener = UIImagePickerControllerDelegateImpl.initWithCallback(resolve, reject);
			}

			picker.delegate = listener;
			picker.modalPresentationStyle = UIModalPresentationStyle.CurrentContext;

			let viewController;
			let topMostFrame = Frame.topmost();
			if (topMostFrame) {
				const topPage = topMostFrame.currentPage || topMostFrame.page;
				viewController = topPage.ios;
			} else {
				viewController = this.topViewController;
			}
			if (viewController) {
				viewController.presentViewControllerAnimatedCompletion(picker, true, null);
			} else {
				reject('Failed');
			}
		});
	}

	private static get rootViewController(): UIViewController | undefined {
		const keyWindow = UIApplication.sharedApplication.keyWindow;
		return keyWindow != null ? keyWindow.rootViewController : undefined;
	}

	private get topViewController(): UIViewController | undefined {
		const root = VideoRecorder.rootViewController;
		if (root == null) {
			return undefined;
		}
		return this.findTopViewController(root);
	}

	private findTopViewController(root: UIViewController): UIViewController | undefined {
		const presented = root.presentedViewController;
		if (presented != null) {
			return this.findTopViewController(presented);
		}
		if (root instanceof UISplitViewController) {
			const last = root.viewControllers.lastObject;
			if (last == null) {
				return root;
			}
			return this.findTopViewController(last);
		} else if (root instanceof UINavigationController) {
			const top = root.topViewController;
			if (top == null) {
				return root;
			}
			return this.findTopViewController(top);
		} else if (root instanceof UITabBarController) {
			const selected = root.selectedViewController;
			if (selected == null) {
				return root;
			}
			return this.findTopViewController(selected);
		} else {
			return root;
		}
	}
}

@NativeClass
@ObjCClass(UIImagePickerControllerDelegate)
class UIImagePickerControllerDelegateImpl extends NSObject implements UIImagePickerControllerDelegate {
	private _saveToGallery: boolean;
	private _resolve: (result?: RecordResult) => void;
	private _reject: (error?: any) => void;
	private _format: VideoFormatType = VideoFormat.DEFAULT;
	private _hd: boolean;

	public static initWithCallback(resolve: (result?) => void, reject: () => void): UIImagePickerControllerDelegateImpl {
		const delegate = new UIImagePickerControllerDelegateImpl();
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	public static initWithOwnerCallbackOptions(owner: any /*WeakRef<VideoRecorder>*/, resolve: (result?: RecordResult) => void, reject: (result?: RecordResult) => void, options?: Options): UIImagePickerControllerDelegateImpl {
		const delegate = new UIImagePickerControllerDelegateImpl();
		if (options) {
			delegate._saveToGallery = options.saveToGallery;
			delegate._format = options.format;
			delegate._hd = options.hd;
		}
		delegate._resolve = resolve;
		delegate._reject = reject;
		return delegate;
	}

	imagePickerControllerDidCancel(picker: any /*UIImagePickerController*/) {
		picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
		listener = null;
	}

	imagePickerControllerDidFinishPickingMediaWithInfo(picker: any /*UIImagePickerController*/, info: any /*NSDictionary<string, any>*/) {
		if (info) {
			let currentDate: Date = new Date();
			if (this._saveToGallery) {
				let source = info.objectForKey(UIImagePickerControllerMediaURL);
				if (this._format === VideoFormat.MP4) {
					let asset = AVAsset.assetWithURL(source);
					let preset = this._hd ? AVAssetExportPresetHighestQuality : AVAssetExportPresetLowQuality;
					let session = AVAssetExportSession.exportSessionWithAssetPresetName(asset, preset);
					session.outputFileType = AVFileTypeMPEG4;
					let fileName = `VID_${+new Date()}.mp4`;
					let path = nsPath.join(knownFolders.documents().path, fileName);
					let nativePath = NSURL.fileURLWithPath(path);
					session.outputURL = nativePath;
					session.exportAsynchronouslyWithCompletionHandler(() => {
						const assetLibrary = ALAssetsLibrary.new();
						assetLibrary.writeVideoAtPathToSavedPhotosAlbumCompletionBlock(nativePath, (file, error) => {
							if (!error) {
								this._resolve({ file: file.path });
							} else {
								File.fromPath(path).removeSync();
								this._reject(error.localizedDescription);
							}
						});
					});
				} else {
					const assetLibrary = ALAssetsLibrary.new();
					assetLibrary.writeVideoAtPathToSavedPhotosAlbumCompletionBlock(source, (file, error) => {
						if (!error) {
							this._resolve({ file: file.path });
						} else {
							this._reject(error.localizedDescription);
						}
					});
				}
			} else {
				const source = info.objectForKey(UIImagePickerControllerMediaURL);
				if (this._format === VideoFormat.MP4) {
					const asset = AVAsset.assetWithURL(source);
					const preset = this._hd ? AVAssetExportPresetHighestQuality : AVAssetExportPresetLowQuality;
					const session = AVAssetExportSession.exportSessionWithAssetPresetName(asset, preset);
					session.outputFileType = AVFileTypeMPEG4;
					const fileName = `VID_${+new Date()}.mp4`;
					const path = nsPath.join(knownFolders.documents().path, fileName);
					session.outputURL = NSURL.fileURLWithPath(path);
					session.exportAsynchronouslyWithCompletionHandler(() => {
						if (session.error) {
							this._reject(session.error.localizedDescription);
						} else {
							File.fromPath(source.path).removeSync();
							this._resolve({ file: path });
						}
					});
				} else {
					this._resolve({ file: source.path });
				}
			}
			picker.presentingViewController.dismissViewControllerAnimatedCompletion(true, null);
			listener = null;
		}
	}
}
