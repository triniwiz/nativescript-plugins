import { Frame, File, path as nsPath, knownFolders } from '@nativescript/core';
import { Attachment } from '.';

const _determineAvailability = function () {
	const isSimulator = NSProcessInfo.processInfo.environment.objectForKey('SIMULATOR_DEVICE_NAME') !== null;

	if (isSimulator) {
		console.log('SMS is not available on the Simulator');
	}

	return !isSimulator && MFMailComposeViewController.canSendMail();
};

export function available() {
	return new Promise(function (resolve, reject) {
		try {
			resolve(_determineAvailability());
		} catch (ex) {
			reject(ex);
		}
	});
}

@NativeClass()
@ObjCClass(MFMessageComposeViewControllerDelegate)
class MFMessageComposeViewControllerDelegateImpl extends NSObject implements MFMessageComposeViewControllerDelegate {
	_resolve;
	_reject;
	static initWithResolveReject(resolve, reject): MFMessageComposeViewControllerDelegateImpl {
		const delegate = MFMessageComposeViewControllerDelegateImpl.new() as MFMessageComposeViewControllerDelegateImpl;
		(delegate._resolve = resolve), (delegate._reject = reject);
		return delegate;
	}
	messageComposeViewControllerDidFinishWithResult(controller: MFMessageComposeViewController, result: MessageComposeResult): void {
		controller.dismissViewControllerAnimatedCompletion(true, null);
		switch (result) {
			case MessageComposeResult.Sent:
				this._resolve({
					response: 'sent',
					message: 'Message sent.',
				});
				break;
			case MessageComposeResult.Cancelled:
				this._resolve({
					response: 'cancelled',
					message: 'User cancelled the message.',
				});
				break;
			case MessageComposeResult.Failed:
				this._reject(new Error('Unable to send text message.'));
				break;
		}
		CFRelease(this);
	}
}

function getIdentifier(value) {
	switch (value) {
		case 'image/jpg':
		case 'image/jpeg':
			return kUTTypeJPEG;
		case 'image/gif':
			return kUTTypeGIF;
		case 'video/mp4':
			return kUTTypeMPEG4;
		default:
			return 'public.data';
	}
}

export function send(numbers?: Array<string>, message?: string, subject?: string, media?: Array<Attachment>) {
	return new Promise((resolve, reject) => {
		if (MFMessageComposeViewController.canSendText()) {
			const rootVC = findTopViewController(Frame.topmost().currentPage.ios) || _rootViewController();

			const delegate = MFMessageComposeViewControllerDelegateImpl.initWithResolveReject(resolve, reject);
			const ctrl = MFMessageComposeViewController.new();
			ctrl.delegate = delegate;

			if (Array.isArray(numbers)) {
				ctrl.recipients = numbers as any;
			}

			if (message) {
				ctrl.body = message;
			}

			if (media) {
				if (subject) {
					if (!MFMessageComposeViewController.canSendSubject()) {
						reject("You're not able to send MMS messages. Please check device settings.");
						return;
					}
					ctrl.subject = subject;
				}

				if (!MFMessageComposeViewController.canSendAttachments()) {
					reject("You're not able to send MMS messages. Please check device settings.");
					return;
				}

				media.forEach((attachment) => {
					const filePath = attachment.path;
					if (filePath) {
						const data = _getDataForAttachmentPath(filePath);
						if (data === null) {
							reject('File not found for path: ' + filePath);
							return;
						} else if (!attachment.fileName) {
							console.log('attachment.fileName is mandatory');
						} else if (!attachment.mimeType) {
							console.log('attachment.mimeType is mandatory');
						} else {
							ctrl.addAttachmentDataTypeIdentifierFilename(data, getIdentifier(attachment.mimeType), attachment.fileName);
						}
					} else {
						reject('File has no path! ');
						return;
					}
				});
			}

			CFRetain(delegate);
			rootVC.presentModalViewControllerAnimated(ctrl, true);
		} else {
			reject("You're not able to send SMS messages. Please check device settings.");
		}
	});
}

function _rootViewController(): UIViewController | undefined {
	const keyWindow = UIApplication.sharedApplication.keyWindow;
	return keyWindow != null ? keyWindow.rootViewController : undefined;
}

function findTopViewController(root: UIViewController): UIViewController | undefined {
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

function _getDataForAttachmentPath(path) {
	var data = null;
	if (path.startsWith('~/')) {
		path = nsPath.join(knownFolders.currentApp().path, path.replace('~', ''));
	}
	if (path.indexOf('file:///') === 0) {
		data = _dataForAbsolutePath(path);
	} else if (path.indexOf('file://') === 0) {
		data = _dataForAsset(path);
	} else if (path.indexOf('base64:') === 0) {
		data = _dataFromBase64(path);
	} else {
		const fileManager = NSFileManager.defaultManager;
		if (fileManager.fileExistsAtPath(path)) {
			data = fileManager.contentsAtPath(path);
		}
	}
	return data;
}

function _dataFromBase64(base64String) {
	base64String = base64String.substring(base64String.indexOf('://') + 3);
	return NSData.alloc().initWithBase64EncodedStringOptions(base64String, NSDataBase64DecodingOptions.IgnoreUnknownCharacters);
}

function _dataForAsset(path) {
	path = path.replace('file://', '/');

	if (!File.exists(path)) {
		console.log('File does not exist: ' + path);
		return null;
	}

	const localFile = File.fromPath(path);
	return localFile.readSync(function (e) {
		console.log('read file error:', e);
	});
}

function _dataForAbsolutePath(path) {
	var fileManager = NSFileManager.defaultManager;
	var absPath = path.replace('file://', '');

	if (!fileManager.fileExistsAtPath(absPath)) {
		return null;
	}

	return fileManager.contentsAtPath(absPath);
}
