import { Application } from '@nativescript/core';
import { handleContinueUserActivity, handleOpenURL } from '@triniwiz/nativescript-stripe';

if (global.isIOS) {
	@NativeClass()
	@ObjCClass(UIApplicationDelegate)
	class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
		applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean {
			return handleContinueUserActivity(userActivity);
		}
		applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
			return handleOpenURL(url);
		}
	}

	Application.ios.delegate = UIApplicationDelegateImpl;
}
Application.run({ moduleName: 'app-root' });
