declare class NSCKlaviyoPushNotificationHelper extends NSObject {

	static alloc(): NSCKlaviyoPushNotificationHelper; // inherited from NSObject

	static new(): NSCKlaviyoPushNotificationHelper; // inherited from NSObject

	static readonly sharedInstance: NSCKlaviyoPushNotificationHelper;

	applicationDidFinishLaunchingNotification(notification: NSNotification): void;

	observe(): void;
}

/**
 * @since 10.0
 */
declare class NSCKlaviyoPushUNUserNotificationCenterDelegate extends NSObject implements UNUserNotificationCenterDelegate {

	static alloc(): NSCKlaviyoPushUNUserNotificationCenterDelegate; // inherited from NSObject

	static new(): NSCKlaviyoPushUNUserNotificationCenterDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	/**
	 * @since 10.0
	 */
	userNotificationCenterDidReceiveNotificationResponseWithCompletionHandler(center: UNUserNotificationCenter, response: UNNotificationResponse, completionHandler: () => void): void;

	/**
	 * @since 12.0
	 */
	userNotificationCenterOpenSettingsForNotification(center: UNUserNotificationCenter, notification: UNNotification): void;

	/**
	 * @since 10.0
	 */
	userNotificationCenterWillPresentNotificationWithCompletionHandler(center: UNUserNotificationCenter, notification: UNNotification, completionHandler: (p1: UNNotificationPresentationOptions) => void): void;
}

declare class NSCNSCKlaviyoPushUIApplicationDelegate extends UIResponder implements UIApplicationDelegate {

	static alloc(): NSCNSCKlaviyoPushUIApplicationDelegate; // inherited from NSObject

	static new(): NSCNSCKlaviyoPushUIApplicationDelegate; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	/**
	 * @since 5.0
	 */
	window: UIWindow; // inherited from UIApplicationDelegate

	readonly  // inherited from NSObjectProtocol

	/**
	 * @since 13.0
	 */
	applicationConfigurationForConnectingSceneSessionOptions(application: UIApplication, connectingSceneSession: UISceneSession, options: UISceneConnectionOptions): UISceneConfiguration;

	/**
	 * @since 8.0
	 */
	applicationContinueUserActivityRestorationHandler(application: UIApplication, userActivity: NSUserActivity, restorationHandler: (p1: NSArray<UIUserActivityRestoring>) => void): boolean;

	applicationDidBecomeActive(application: UIApplication): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationDidChangeStatusBarFrame(application: UIApplication, oldStatusBarFrame: CGRect): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationDidChangeStatusBarOrientation(application: UIApplication, oldStatusBarOrientation: UIInterfaceOrientation): void;

	/**
	 * @since 6.0
	 */
	applicationDidDecodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	/**
	 * @since 13.0
	 */
	applicationDidDiscardSceneSessions(application: UIApplication, sceneSessions: NSSet<UISceneSession>): void;

	/**
	 * @since 4.0
	 */
	applicationDidEnterBackground(application: UIApplication): void;

	/**
	 * @since 8.0
	 */
	applicationDidFailToContinueUserActivityWithTypeError(application: UIApplication, userActivityType: string, error: NSError): void;

	/**
	 * @since 3.0
	 */
	applicationDidFailToRegisterForRemoteNotificationsWithError(application: UIApplication, error: NSError): void;

	applicationDidFinishLaunching(application: UIApplication): void;

	/**
	 * @since 3.0
	 */
	applicationDidFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	/**
	 * @since 4.0
	 * @deprecated 10.0
	 */
	applicationDidReceiveLocalNotification(application: UIApplication, notification: UILocalNotification): void;

	applicationDidReceiveMemoryWarning(application: UIApplication): void;

	/**
	 * @since 3.0
	 * @deprecated 10.0
	 */
	applicationDidReceiveRemoteNotification(application: UIApplication, userInfo: NSDictionary<any, any>): void;

	/**
	 * @since 7.0
	 */
	applicationDidReceiveRemoteNotificationFetchCompletionHandler(application: UIApplication, userInfo: NSDictionary<any, any>, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	/**
	 * @since 3.0
	 */
	applicationDidRegisterForRemoteNotificationsWithDeviceToken(application: UIApplication, deviceToken: NSData): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationDidRegisterUserNotificationSettings(application: UIApplication, notificationSettings: UIUserNotificationSettings): void;

	/**
	 * @since 8.0
	 */
	applicationDidUpdateUserActivity(application: UIApplication, userActivity: NSUserActivity): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForLocalNotificationCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, completionHandler: () => void): void;

	/**
	 * @since 9.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForLocalNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, notification: UILocalNotification, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 8.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForRemoteNotificationCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 9.0
	 * @deprecated 10.0
	 */
	applicationHandleActionWithIdentifierForRemoteNotificationWithResponseInfoCompletionHandler(application: UIApplication, identifier: string, userInfo: NSDictionary<any, any>, responseInfo: NSDictionary<any, any>, completionHandler: () => void): void;

	/**
	 * @since 7.0
	 */
	applicationHandleEventsForBackgroundURLSessionCompletionHandler(application: UIApplication, identifier: string, completionHandler: () => void): void;

	/**
	 * @since 11.0
	 * @deprecated 14.0
	 */
	applicationHandleIntentCompletionHandler(application: UIApplication, intent: INIntent, completionHandler: (p1: INIntentResponse) => void): void;

	/**
	 * @since 2.0
	 * @deprecated 9.0
	 */
	applicationHandleOpenURL(application: UIApplication, url: NSURL): boolean;

	/**
	 * @since 8.2
	 */
	applicationHandleWatchKitExtensionRequestReply(application: UIApplication, userInfo: NSDictionary<any, any>, reply: (p1: NSDictionary<any, any>) => void): void;

	/**
	 * @since 14.0
	 */
	applicationHandlerForIntent(application: UIApplication, intent: INIntent): any;

	/**
	 * @since 9.0
	 */
	applicationOpenURLOptions(app: UIApplication, url: NSURL, options: NSDictionary<string, any>): boolean;

	/**
	 * @since 4.2
	 * @deprecated 9.0
	 */
	applicationOpenURLSourceApplicationAnnotation(application: UIApplication, url: NSURL, sourceApplication: string, annotation: any): boolean;

	/**
	 * @since 9.0
	 */
	applicationPerformActionForShortcutItemCompletionHandler(application: UIApplication, shortcutItem: UIApplicationShortcutItem, completionHandler: (p1: boolean) => void): void;

	/**
	 * @since 7.0
	 * @deprecated 13.0
	 */
	applicationPerformFetchWithCompletionHandler(application: UIApplication, completionHandler: (p1: UIBackgroundFetchResult) => void): void;

	/**
	 * @since 4.0
	 */
	applicationProtectedDataDidBecomeAvailable(application: UIApplication): void;

	/**
	 * @since 4.0
	 */
	applicationProtectedDataWillBecomeUnavailable(application: UIApplication): void;

	/**
	 * @since 8.0
	 */
	applicationShouldAllowExtensionPointIdentifier(application: UIApplication, extensionPointIdentifier: string): boolean;

	/**
	 * @since 15.0
	 */
	applicationShouldAutomaticallyLocalizeKeyCommands(application: UIApplication): boolean;

	/**
	 * @since 9.0
	 */
	applicationShouldRequestHealthAuthorization(application: UIApplication): void;

	/**
	 * @since 6.0
	 * @deprecated 13.2
	 */
	applicationShouldRestoreApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 13.2
	 */
	applicationShouldRestoreSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 6.0
	 * @deprecated 13.2
	 */
	applicationShouldSaveApplicationState(application: UIApplication, coder: NSCoder): boolean;

	/**
	 * @since 13.2
	 */
	applicationShouldSaveSecureApplicationState(application: UIApplication, coder: NSCoder): boolean;

	applicationSignificantTimeChange(application: UIApplication): void;

	/**
	 * @since 6.0
	 */
	applicationSupportedInterfaceOrientationsForWindow(application: UIApplication, window: UIWindow): UIInterfaceOrientationMask;

	/**
	 * @since 10.0
	 */
	applicationUserDidAcceptCloudKitShareWithMetadata(application: UIApplication, cloudKitShareMetadata: CKShareMetadata): void;

	/**
	 * @since 6.0
	 */
	applicationViewControllerWithRestorationIdentifierPathCoder(application: UIApplication, identifierComponents: NSArray<string> | string[], coder: NSCoder): UIViewController;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationWillChangeStatusBarFrame(application: UIApplication, newStatusBarFrame: CGRect): void;

	/**
	 * @since 2.0
	 * @deprecated 13.0
	 */
	applicationWillChangeStatusBarOrientationDuration(application: UIApplication, newStatusBarOrientation: UIInterfaceOrientation, duration: number): void;

	/**
	 * @since 8.0
	 */
	applicationWillContinueUserActivityWithType(application: UIApplication, userActivityType: string): boolean;

	/**
	 * @since 6.0
	 */
	applicationWillEncodeRestorableStateWithCoder(application: UIApplication, coder: NSCoder): void;

	/**
	 * @since 4.0
	 */
	applicationWillEnterForeground(application: UIApplication): void;

	/**
	 * @since 6.0
	 */
	applicationWillFinishLaunchingWithOptions(application: UIApplication, launchOptions: NSDictionary<string, any>): boolean;

	applicationWillResignActive(application: UIApplication): void;

	applicationWillTerminate(application: UIApplication): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}