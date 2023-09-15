import { Application, knownFolders, path as nsPath, Utils, Device } from '@nativescript/core';
import { Attachment } from '.';

declare const com;

(function () {
	com.github.triniwiz.plugins.messenger.Utils.cleanAttachmentFolder(Utils.android.getApplicationContext());
})();

const _determineAvailability = function () {
	const uri = android.net.Uri.fromParts('sms', '', null);
	const intent = new android.content.Intent(android.content.Intent.ACTION_SENDTO, uri);
	const packageManager = Utils.android.getApplicationContext().getPackageManager();
	const nrOfMailApps = packageManager.queryIntentActivities(intent, 0).size();
	return nrOfMailApps > 0;
};

export function available(): Promise<boolean> {
	return new Promise(function (resolve, reject) {
		try {
			resolve(_determineAvailability());
		} catch (ex) {
			reject(ex);
		}
	});
}

export function send(numbers?: Array<string>, message?: string, subject?: string, media?: Array<Attachment>) {
	return new Promise((resolve, reject) => {
		let separator = ';';
		if (Device.manufacturer.toLowerCase() === 'samsung') {
			separator = ',';
		}
		let to;

		if (Array.isArray(numbers)) {
			const last = numbers.length - 1;
			to = numbers.reduce((a, b, i) => {
				const isLast = i === last;
				return a + b + (isLast ? '' : separator);
			}, '');
		}

		try {
			const ctx: android.content.Context = Utils.android.getApplicationContext();

			let intent: android.content.Intent;

			if (parseInt(Device.sdkVersion) >= 19) {
				const defaultSmsPackageName = android.provider.Telephony.Sms.getDefaultSmsPackage(Utils.android.getApplicationContext());

				intent = new android.content.Intent(android.content.Intent.ACTION_SENDTO);

				if (defaultSmsPackageName != null) {
					intent.setPackage(defaultSmsPackageName);
				}
			} else {
				intent = new android.content.Intent(android.content.Intent.ACTION_VIEW);
				intent.setType('vnd.android-dir/mms-sms');
			}

			if (to) {
				intent.setData(media ? android.net.Uri.parse(`mmsto:${to}`) : android.net.Uri.parse(`smsto:${to}`));
			} else {
				intent.setData(media ? android.net.Uri.parse('mmsto:') : android.net.Uri.parse('smsto:'));
			}

			if (message) {
				intent.putExtra('sms_body', message);
			}

			if (subject) {
				intent.putExtra('subject', subject);
			}

			intent.putExtra('exit_on_sent', true);

			if (media) {
				const length = media.length;
				const items = new java.util.ArrayList(length);

				media.forEach((attachment) => {
					let path = attachment.path;
					if (path.startsWith('~/')) {
						path = nsPath.join(knownFolders.currentApp().path, path.replace('~', ''));
					}
					const fileName = attachment.fileName;
					const uri = com.github.triniwiz.plugins.messenger.Utils.getContentUri(path, fileName, ctx);

					if (!uri) {
						reject(new Error('File not found for path: ' + path));
						return;
					}
					items.add(uri);
					com.github.triniwiz.plugins.messenger.Utils.grantUriPermission(uri, intent, ctx);
				});

				if (length === 1) {
					intent.putExtra(android.content.Intent.EXTRA_STREAM, items.get(0));
				} else if (length > 0) {
					intent.setAction(android.content.Intent.ACTION_SEND_MULTIPLE);
					intent.setType('*/*');
					intent.putParcelableArrayListExtra(android.content.Intent.EXTRA_STREAM, items);
					if (to) {
						intent.putExtra('address', to);
					}
				}
			}

			intent.addFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);

			const activity: androidx.appcompat.app.AppCompatActivity = Application.android.foregroundActivity || Application.android.startActivity;

			activity.startActivity(intent);

			resolve({
				response: 'sent',
				message: 'Message sent.',
			});
		} catch (error) {
			reject(error);
		}
	});
}
