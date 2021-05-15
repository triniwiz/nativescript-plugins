import {Application, Folder, knownFolders} from '@nativescript/core';
import {handleContinueUserActivity, handleOpenURL} from '@triniwiz/nativescript-stripe';
import {File} from '@triniwiz/nativescript-file-manager';
import * as dateFns from 'date-fns';
const resources = Application.getResources();
resources['timeFromNow'] = (date) => dateFns.formatRelative(date, new Date());
Application.setResources(resources);

if (global.isIOS) {
  @NativeClass()
  @ObjCClass(UIApplicationDelegate)
  class UIApplicationDelegateImpl extends UIResponder implements UIApplicationDelegate {
    applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean {
      console.log('applicationContinueUserActivityRestorationHandler');
      return handleContinueUserActivity(userActivity);
    }

    applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean {
      console.log('applicationOpenURLOptions');
      return handleOpenURL(url);
    }
  }

  Application.ios.delegate = UIApplicationDelegateImpl;
} else {
  /*Folder.fromPath(knownFolders.currentApp().path  + `/assets`).getEntities().then(items =>{
    console.log(items);
  });
  const legacyDownloads = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_DOWNLOADS);
  const legacyAudio = android.os.Environment.getExternalStoragePublicDirectory(android.os.Environment.DIRECTORY_MUSIC);
  console.log(File.fromPath(legacyDownloads.getAbsolutePath()), File.fromPath(legacyAudio.getAbsolutePath()))
  */
}
Application.run({moduleName: 'app-root'});
