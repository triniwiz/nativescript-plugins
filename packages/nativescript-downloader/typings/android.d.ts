declare module com {
	export module tonyodev {
		export module fetch2 {
			export abstract class AbstractFetchGroupListener extends com.tonyodev.fetch2.FetchGroupListener {
				public static class: java.lang.Class<com.tonyodev.fetch2.AbstractFetchGroupListener>;
				public onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
				public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
				public onAdded(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onResumed(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onCancelled(param0: com.tonyodev.fetch2.Download): void;
				public onPaused(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onError(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.Error, param3: java.lang.Throwable, param4: com.tonyodev.fetch2.FetchGroup): void;
				public constructor();
				public onQueued(param0: number, param1: com.tonyodev.fetch2.Download, param2: boolean, param3: com.tonyodev.fetch2.FetchGroup): void;
				public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
				public onProgress(param0: number, param1: com.tonyodev.fetch2.Download, param2: number, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onDeleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onDownloadBlockUpdated(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.DownloadBlock, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onCancelled(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onWaitingNetwork(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onPaused(param0: com.tonyodev.fetch2.Download): void;
				public onStarted(param0: number, param1: com.tonyodev.fetch2.Download, param2: java.util.List<any>, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
				public onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
				public onAdded(param0: com.tonyodev.fetch2.Download): void;
				public onCompleted(param0: com.tonyodev.fetch2.Download): void;
				public onDeleted(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
				public onCompleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onResumed(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: com.tonyodev.fetch2.Download): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export abstract class AbstractFetchGroupObserver extends com.tonyodev.fetch2.FetchGroupObserver {
				public static class: java.lang.Class<com.tonyodev.fetch2.AbstractFetchGroupObserver>;
				public onChanged(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Reason): void;
				public onChanged(param0: java.util.List<any>, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): void;
				public onChanged(param0: any, param1: com.tonyodev.fetch2core.Reason): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export abstract class AbstractFetchListener extends com.tonyodev.fetch2.FetchListener {
				public static class: java.lang.Class<com.tonyodev.fetch2.AbstractFetchListener>;
				public onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
				public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
				public onCancelled(param0: com.tonyodev.fetch2.Download): void;
				public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
				public onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
				public onAdded(param0: com.tonyodev.fetch2.Download): void;
				public onCompleted(param0: com.tonyodev.fetch2.Download): void;
				public onDeleted(param0: com.tonyodev.fetch2.Download): void;
				public constructor();
				public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
				public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
				public onResumed(param0: com.tonyodev.fetch2.Download): void;
				public onPaused(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: com.tonyodev.fetch2.Download): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class BuildConfig {
				public static class: java.lang.Class<com.tonyodev.fetch2.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class CompletedDownload {
				public static class: java.lang.Class<com.tonyodev.fetch2.CompletedDownload>;
				public static CREATOR: com.tonyodev.fetch2.CompletedDownload.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public setFile(param0: string): void;
				public setExtras(param0: com.tonyodev.fetch2core.Extras): void;
				public setFileByteSize(param0: number): void;
				public getTag(): string;
				public setHeaders(param0: java.util.Map<string,string>): void;
				public getUrl(): string;
				public getFile(): string;
				public setGroup(param0: number): void;
				public getFileByteSize(): number;
				public getGroup(): number;
				public toString(): string;
				public getExtras(): com.tonyodev.fetch2core.Extras;
				public getIdentifier(): number;
				public setIdentifier(param0: number): void;
				public constructor();
				public getHeaders(): java.util.Map<string,string>;
				public getCreated(): number;
				public setCreated(param0: number): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public setTag(param0: string): void;
				public setUrl(param0: string): void;
			}
			export module CompletedDownload {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2.CompletedDownload> {
					public static class: java.lang.Class<com.tonyodev.fetch2.CompletedDownload.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2.CompletedDownload;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2.CompletedDownload>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export abstract class DefaultFetchNotificationManager extends com.tonyodev.fetch2.FetchNotificationManager {
				public static class: java.lang.Class<com.tonyodev.fetch2.DefaultFetchNotificationManager>;
				public cancelNotification(param0: number): void;
				public getFetchInstanceForNamespace(param0: string): com.tonyodev.fetch2.Fetch;
				public getGroupActionPendingIntent(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
				public createNotificationChannels(param0: globalAndroid.content.Context, param1: globalAndroid.app.NotificationManager): void;
				public getNotificationManagerAction(): string;
				public getNotificationBuilder(param0: number, param1: number): androidx.core.app.NotificationCompat.Builder;
				public getChannelId(param0: number, param1: globalAndroid.content.Context): string;
				public cancelOngoingNotifications(): void;
				public notify(param0: number): void;
				public shouldUpdateNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
				public unregisterBroadcastReceiver(): void;
				public shouldCancelNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
				public postDownloadUpdate(param0: com.tonyodev.fetch2.Download): boolean;
				public getActionPendingIntent(param0: com.tonyodev.fetch2.DownloadNotification, param1: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
				public getSubtitleText(param0: globalAndroid.content.Context, param1: com.tonyodev.fetch2.DownloadNotification): string;
				public updateGroupSummaryNotification(param0: number, param1: androidx.core.app.NotificationCompat.Builder, param2: java.util.List<any>, param3: globalAndroid.content.Context): boolean;
				public constructor(param0: globalAndroid.content.Context);
				public getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver;
				public registerBroadcastReceiver(): void;
				public getDownloadNotificationTitle(param0: com.tonyodev.fetch2.Download): string;
				public getNotificationTimeOutMillis(): number;
				public updateNotification(param0: androidx.core.app.NotificationCompat.Builder, param1: com.tonyodev.fetch2.DownloadNotification, param2: globalAndroid.content.Context): void;
			}
			export module DefaultFetchNotificationManager {
				export class WhenMappings {
					public static class: java.lang.Class<com.tonyodev.fetch2.DefaultFetchNotificationManager.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Download {
				public static class: java.lang.Class<com.tonyodev.fetch2.Download>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.Download interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getId(): number;
					getNamespace(): string;
					getUrl(): string;
					getFile(): string;
					getGroup(): number;
					getPriority(): com.tonyodev.fetch2.Priority;
					getHeaders(): java.util.Map<string,string>;
					getDownloaded(): number;
					getTotal(): number;
					getStatus(): com.tonyodev.fetch2.Status;
					getError(): com.tonyodev.fetch2.Error;
					getNetworkType(): com.tonyodev.fetch2.NetworkType;
					getProgress(): number;
					getCreated(): number;
					getRequest(): com.tonyodev.fetch2.Request;
					copy(): com.tonyodev.fetch2.Download;
					getTag(): string;
					getEnqueueAction(): com.tonyodev.fetch2.EnqueueAction;
					getIdentifier(): number;
					getDownloadOnEnqueue(): boolean;
					getExtras(): com.tonyodev.fetch2core.Extras;
					getFileUri(): globalAndroid.net.Uri;
					getEtaInMilliSeconds(): number;
					getDownloadedBytesPerSecond(): number;
					getAutoRetryMaxAttempts(): number;
					getAutoRetryAttempts(): number;
				});
				public constructor();
				public getAutoRetryMaxAttempts(): number;
				public getNetworkType(): com.tonyodev.fetch2.NetworkType;
				public getStatus(): com.tonyodev.fetch2.Status;
				public getTotal(): number;
				public getFile(): string;
				public getGroup(): number;
				public getDownloadedBytesPerSecond(): number;
				public getEnqueueAction(): com.tonyodev.fetch2.EnqueueAction;
				public getDownloadOnEnqueue(): boolean;
				public getCreated(): number;
				public getPriority(): com.tonyodev.fetch2.Priority;
				public getEtaInMilliSeconds(): number;
				public getDownloaded(): number;
				public getId(): number;
				public copy(): com.tonyodev.fetch2.Download;
				public getTag(): string;
				public getUrl(): string;
				public getExtras(): com.tonyodev.fetch2core.Extras;
				public getIdentifier(): number;
				public getError(): com.tonyodev.fetch2.Error;
				public getHeaders(): java.util.Map<string,string>;
				public getProgress(): number;
				public getRequest(): com.tonyodev.fetch2.Request;
				public getNamespace(): string;
				public getFileUri(): globalAndroid.net.Uri;
				public getAutoRetryAttempts(): number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class DownloadNotification {
				public static class: java.lang.Class<com.tonyodev.fetch2.DownloadNotification>;
				public static CREATOR: com.tonyodev.fetch2.DownloadNotification.CREATOR;
				public setNamespace(param0: string): void;
				public setGroupId(param0: number): void;
				public getNotificationId(): number;
				public getStatus(): com.tonyodev.fetch2.Status;
				public isDeleted(): boolean;
				public setEtaInMilliSeconds(param0: number): void;
				public getTotal(): number;
				public setStatus(param0: com.tonyodev.fetch2.Status): void;
				public setDownloadedBytesPerSecond(param0: number): void;
				public getDownloadedBytesPerSecond(): number;
				public setTitle(param0: string): void;
				public getProgressIndeterminate(): boolean;
				public constructor();
				public isCompleted(): boolean;
				public hashCode(): number;
				public isDownloading(): boolean;
				public equals(param0: any): boolean;
				public getGroupId(): number;
				public getEtaInMilliSeconds(): number;
				public isRemovableNotification(): boolean;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getDownloaded(): number;
				public isRemoved(): boolean;
				public setNotificationId(param0: number): void;
				public setTotal(param0: number): void;
				public setDownloaded(param0: number): void;
				public isQueued(): boolean;
				public toString(): string;
				public isOnGoingNotification(): boolean;
				public getTitle(): string;
				public setProgress(param0: number): void;
				public isCancelledNotification(): boolean;
				public isFailed(): boolean;
				public getProgress(): number;
				public getNamespace(): string;
				public isActive(): boolean;
				public describeContents(): number;
				public isCancelled(): boolean;
				public isPaused(): boolean;
			}
			export module DownloadNotification {
				export class ActionType {
					public static class: java.lang.Class<com.tonyodev.fetch2.DownloadNotification.ActionType>;
					public static PAUSE: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static RESUME: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static CANCEL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static DELETE: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static RETRY: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static PAUSE_ALL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static RESUME_ALL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static CANCEL_ALL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static DELETE_ALL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static RETRY_ALL: com.tonyodev.fetch2.DownloadNotification.ActionType;
					public static values(): native.Array<com.tonyodev.fetch2.DownloadNotification.ActionType>;
					public static valueOf(param0: string): com.tonyodev.fetch2.DownloadNotification.ActionType;
				}
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2.DownloadNotification> {
					public static class: java.lang.Class<com.tonyodev.fetch2.DownloadNotification.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2.DownloadNotification;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2.DownloadNotification>;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.tonyodev.fetch2.DownloadNotification.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class EnqueueAction {
				public static class: java.lang.Class<com.tonyodev.fetch2.EnqueueAction>;
				public static REPLACE_EXISTING: com.tonyodev.fetch2.EnqueueAction;
				public static INCREMENT_FILE_NAME: com.tonyodev.fetch2.EnqueueAction;
				public static DO_NOT_ENQUEUE_IF_EXISTING: com.tonyodev.fetch2.EnqueueAction;
				public static UPDATE_ACCORDINGLY: com.tonyodev.fetch2.EnqueueAction;
				public static Companion: com.tonyodev.fetch2.EnqueueAction.Companion;
				public static values(): native.Array<com.tonyodev.fetch2.EnqueueAction>;
				public static valueOf(param0: number): com.tonyodev.fetch2.EnqueueAction;
				public getValue(): number;
				public static valueOf(param0: string): com.tonyodev.fetch2.EnqueueAction;
			}
			export module EnqueueAction {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2.EnqueueAction.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2.EnqueueAction;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Error {
				public static class: java.lang.Class<com.tonyodev.fetch2.Error>;
				public static UNKNOWN: com.tonyodev.fetch2.Error;
				public static NONE: com.tonyodev.fetch2.Error;
				public static FILE_NOT_CREATED: com.tonyodev.fetch2.Error;
				public static CONNECTION_TIMED_OUT: com.tonyodev.fetch2.Error;
				public static UNKNOWN_HOST: com.tonyodev.fetch2.Error;
				public static HTTP_NOT_FOUND: com.tonyodev.fetch2.Error;
				public static WRITE_PERMISSION_DENIED: com.tonyodev.fetch2.Error;
				public static NO_STORAGE_SPACE: com.tonyodev.fetch2.Error;
				public static NO_NETWORK_CONNECTION: com.tonyodev.fetch2.Error;
				public static EMPTY_RESPONSE_FROM_SERVER: com.tonyodev.fetch2.Error;
				public static REQUEST_ALREADY_EXIST: com.tonyodev.fetch2.Error;
				public static DOWNLOAD_NOT_FOUND: com.tonyodev.fetch2.Error;
				public static FETCH_DATABASE_ERROR: com.tonyodev.fetch2.Error;
				public static REQUEST_WITH_ID_ALREADY_EXIST: com.tonyodev.fetch2.Error;
				public static REQUEST_WITH_FILE_PATH_ALREADY_EXIST: com.tonyodev.fetch2.Error;
				public static REQUEST_NOT_SUCCESSFUL: com.tonyodev.fetch2.Error;
				public static UNKNOWN_IO_ERROR: com.tonyodev.fetch2.Error;
				public static FILE_NOT_FOUND: com.tonyodev.fetch2.Error;
				public static FETCH_FILE_SERVER_URL_INVALID: com.tonyodev.fetch2.Error;
				public static INVALID_CONTENT_HASH: com.tonyodev.fetch2.Error;
				public static FAILED_TO_UPDATE_REQUEST: com.tonyodev.fetch2.Error;
				public static FAILED_TO_ADD_COMPLETED_DOWNLOAD: com.tonyodev.fetch2.Error;
				public static FETCH_FILE_SERVER_INVALID_RESPONSE: com.tonyodev.fetch2.Error;
				public static REQUEST_DOES_NOT_EXIST: com.tonyodev.fetch2.Error;
				public static ENQUEUE_NOT_SUCCESSFUL: com.tonyodev.fetch2.Error;
				public static COMPLETED_NOT_ADDED_SUCCESSFULLY: com.tonyodev.fetch2.Error;
				public static ENQUEUED_REQUESTS_ARE_NOT_DISTINCT: com.tonyodev.fetch2.Error;
				public static FAILED_TO_RENAME_INCOMPLETE_DOWNLOAD_FILE: com.tonyodev.fetch2.Error;
				public static FAILED_TO_RENAME_FILE: com.tonyodev.fetch2.Error;
				public static FILE_ALLOCATION_FAILED: com.tonyodev.fetch2.Error;
				public static HTTP_CONNECTION_NOT_ALLOWED: com.tonyodev.fetch2.Error;
				public static Companion: com.tonyodev.fetch2.Error.Companion;
				public static values(): native.Array<com.tonyodev.fetch2.Error>;
				public getHttpResponse(): com.tonyodev.fetch2core.Downloader.Response;
				public getValue(): number;
				public setThrowable(param0: java.lang.Throwable): void;
				public setHttpResponse(param0: com.tonyodev.fetch2core.Downloader.Response): void;
				public static valueOf(param0: number): com.tonyodev.fetch2.Error;
				public getThrowable(): java.lang.Throwable;
				public static valueOf(param0: string): com.tonyodev.fetch2.Error;
			}
			export module Error {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2.Error.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2.Error;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Fetch {
				public static class: java.lang.Class<com.tonyodev.fetch2.Fetch>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.Fetch interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isClosed(): boolean;
					getNamespace(): string;
					getFetchConfiguration(): com.tonyodev.fetch2.FetchConfiguration;
					enqueue(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Request>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					enqueue(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
					pause(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					pause(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					pause(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					pause(param0: number): com.tonyodev.fetch2.Fetch;
					pauseGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					pauseGroup(param0: number): com.tonyodev.fetch2.Fetch;
					freeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					pauseAll(): com.tonyodev.fetch2.Fetch;
					freeze(): com.tonyodev.fetch2.Fetch;
					resume(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					resume(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					resume(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					resume(param0: number): com.tonyodev.fetch2.Fetch;
					resumeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					resumeAll(): com.tonyodev.fetch2.Fetch;
					resumeGroup(param0: number): com.tonyodev.fetch2.Fetch;
					unfreeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					unfreeze(): com.tonyodev.fetch2.Fetch;
					remove(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					remove(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					remove(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					remove(param0: number): com.tonyodev.fetch2.Fetch;
					removeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					removeGroup(param0: number): com.tonyodev.fetch2.Fetch;
					removeAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					removeAll(): com.tonyodev.fetch2.Fetch;
					removeAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					removeAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
					removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
					delete(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					delete(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					delete(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					delete(param0: number): com.tonyodev.fetch2.Fetch;
					deleteGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					deleteGroup(param0: number): com.tonyodev.fetch2.Fetch;
					deleteAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					deleteAll(): com.tonyodev.fetch2.Fetch;
					deleteAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
					deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
					cancel(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					cancel(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					cancel(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					cancel(param0: number): com.tonyodev.fetch2.Fetch;
					cancelGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					cancelGroup(param0: number): com.tonyodev.fetch2.Fetch;
					cancelAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					cancelAll(): com.tonyodev.fetch2.Fetch;
					retry(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					retry(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					retry(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					retry(param0: number): com.tonyodev.fetch2.Fetch;
					updateRequest(param0: number, param1: com.tonyodev.fetch2.Request, param2: boolean, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param4: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					resetAutoRetryAttempts(param0: number, param1: boolean, param2: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					renameCompletedDownloadFile(param0: number, param1: string, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					getDownloads(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloads(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownload(param0: number, param1: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>): com.tonyodev.fetch2.Fetch;
					getDownloadsInGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloadsWithStatus(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloadsByRequestIdentifier(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getDownloadsByTag(param0: string, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					getFetchGroup(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.FetchGroup>): com.tonyodev.fetch2.Fetch;
					getAllGroupIds(param0: com.tonyodev.fetch2core.Func<java.util.List<java.lang.Integer>>): com.tonyodev.fetch2.Fetch;
					addListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
					addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean): com.tonyodev.fetch2.Fetch;
					addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): com.tonyodev.fetch2.Fetch;
					removeListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
					addCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload, param1: boolean, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					addCompletedDownloads(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					getDownloadBlocks(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.DownloadBlock>>): com.tonyodev.fetch2.Fetch;
					getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.lang.Long>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					getContentLengthForRequests(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,java.lang.Long>>>, param3: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
					getServerResponse(param0: string, param1: java.util.Map<string,string>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2core.Downloader.Response>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.FileResource>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					enableLogging(param0: boolean): com.tonyodev.fetch2.Fetch;
					setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): com.tonyodev.fetch2.Fetch;
					setDownloadConcurrentLimit(param0: number): com.tonyodev.fetch2.Fetch;
					close(): void;
					getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
					awaitFinishOrTimeout(param0: number): void;
					awaitFinish(): void;
					attachFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					hasActiveDownloads(param0: boolean, param1: com.tonyodev.fetch2core.Func<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					addActiveDownloadsObserver(param0: boolean, param1: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					removeActiveDownloadsObserver(param0: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					<clinit>(): void;
				});
				public constructor();
				public static Impl: com.tonyodev.fetch2.Fetch.Impl;
				public setDownloadConcurrentLimit(param0: number): com.tonyodev.fetch2.Fetch;
				public getFetchConfiguration(): com.tonyodev.fetch2.FetchConfiguration;
				public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): com.tonyodev.fetch2.Fetch;
				public resumeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public removeGroup(param0: number): com.tonyodev.fetch2.Fetch;
				public pause(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public unfreeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public cancelAll(): com.tonyodev.fetch2.Fetch;
				public removeListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
				public removeActiveDownloadsObserver(param0: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
				public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
				public removeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public deleteGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public retry(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getServerResponse(param0: string, param1: java.util.Map<string,string>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2core.Downloader.Response>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public delete(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public cancelAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean): com.tonyodev.fetch2.Fetch;
				public delete(param0: number): com.tonyodev.fetch2.Fetch;
				public replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public removeAll(): com.tonyodev.fetch2.Fetch;
				public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public remove(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public pauseGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public enableLogging(param0: boolean): com.tonyodev.fetch2.Fetch;
				public getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
				public resume(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public getDownloads(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public pauseGroup(param0: number): com.tonyodev.fetch2.Fetch;
				public resumeGroup(param0: number): com.tonyodev.fetch2.Fetch;
				public cancel(param0: number): com.tonyodev.fetch2.Fetch;
				public attachFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): com.tonyodev.fetch2.Fetch;
				public remove(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public resumeAll(): com.tonyodev.fetch2.Fetch;
				public awaitFinish(): void;
				public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
				public removeAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getDownloadsInGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public cancelGroup(param0: number): com.tonyodev.fetch2.Fetch;
				public getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.FileResource>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public removeAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getFetchGroup(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.FetchGroup>): com.tonyodev.fetch2.Fetch;
				public retry(param0: number): com.tonyodev.fetch2.Fetch;
				public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getNamespace(): string;
				public resume(param0: number): com.tonyodev.fetch2.Fetch;
				public deleteAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public awaitFinishOrTimeout(param0: number): void;
				public getDownloadsWithStatus(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public retry(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public unfreeze(): com.tonyodev.fetch2.Fetch;
				public pause(param0: number): com.tonyodev.fetch2.Fetch;
				public resetAutoRetryAttempts(param0: number, param1: boolean, param2: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public delete(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getDownloads(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.lang.Long>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getDownloadsByTag(param0: string, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public getDownloadBlocks(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.DownloadBlock>>): com.tonyodev.fetch2.Fetch;
				public getAllGroupIds(param0: com.tonyodev.fetch2core.Func<java.util.List<java.lang.Integer>>): com.tonyodev.fetch2.Fetch;
				public freeze(): com.tonyodev.fetch2.Fetch;
				public close(): void;
				public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public deleteAll(): com.tonyodev.fetch2.Fetch;
				public isClosed(): boolean;
				public delete(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public removeAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
				public pause(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public pause(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public hasActiveDownloads(param0: boolean, param1: com.tonyodev.fetch2core.Func<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
				public addCompletedDownloads(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public getDownload(param0: number, param1: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>): com.tonyodev.fetch2.Fetch;
				public getContentLengthForRequests(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,java.lang.Long>>>, param3: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
				public resume(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public addCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload, param1: boolean, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public addListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
				public enqueue(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
				public cancel(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public remove(param0: number): com.tonyodev.fetch2.Fetch;
				public pauseAll(): com.tonyodev.fetch2.Fetch;
				public cancel(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public renameCompletedDownloadFile(param0: number, param1: string, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public cancel(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public updateRequest(param0: number, param1: com.tonyodev.fetch2.Request, param2: boolean, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param4: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public enqueue(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Request>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
				public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public cancelGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public remove(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public deleteGroup(param0: number): com.tonyodev.fetch2.Fetch;
				public addActiveDownloadsObserver(param0: boolean, param1: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
				public retry(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
				public getDownloadsByRequestIdentifier(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
				public freeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
				public resume(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
			}
			export module Fetch {
				export class DefaultImpls {
					public static class: java.lang.Class<com.tonyodev.fetch2.Fetch.DefaultImpls>;
				}
				export class Impl {
					public static class: java.lang.Class<com.tonyodev.fetch2.Fetch.Impl>;
					public setDefaultInstanceConfiguration(param0: com.tonyodev.fetch2.FetchConfiguration): void;
					public getInstance(param0: com.tonyodev.fetch2.FetchConfiguration): com.tonyodev.fetch2.Fetch;
					public getDefaultFetchConfiguration(): com.tonyodev.fetch2.FetchConfiguration;
					public getDefaultInstance(): com.tonyodev.fetch2.Fetch;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchConfiguration {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchConfiguration>;
				public getFetchDatabaseManager(): com.tonyodev.fetch2.database.FetchDatabaseManager<com.tonyodev.fetch2.database.DownloadInfo>;
				public getFileExistChecksEnabled(): boolean;
				public getFetchHandler(): com.tonyodev.fetch2.fetch.FetchHandler;
				public getActiveDownloadsCheckInterval(): number;
				public getNewFetchInstanceFromConfiguration(): com.tonyodev.fetch2.Fetch;
				public getFileServerDownloader(): com.tonyodev.fetch2core.FileServerDownloader;
				public getGlobalNetworkType(): com.tonyodev.fetch2.NetworkType;
				public getAutoStart(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getProgressReportingIntervalMillis(): number;
				public getHashCheckingEnabled(): boolean;
				public getInternetCheckUrl(): string;
				public getLogger(): com.tonyodev.fetch2core.Logger;
				public getRetryOnNetworkGain(): boolean;
				public getAppContext(): globalAndroid.content.Context;
				public getPreAllocateFileOnCreation(): boolean;
				public getStorageResolver(): com.tonyodev.fetch2core.StorageResolver;
				public toString(): string;
				public getLoggingEnabled(): boolean;
				public getFetchNotificationManager(): com.tonyodev.fetch2.FetchNotificationManager;
				public getCreateFileOnEnqueue(): boolean;
				public getNamespace(): string;
				public getBackgroundHandler(): globalAndroid.os.Handler;
				public getConcurrentLimit(): number;
				public getHttpDownloader(): com.tonyodev.fetch2core.Downloader<any,any>;
				public getMaxAutoRetryAttempts(): number;
				public getPrioritySort(): com.tonyodev.fetch2.PrioritySort;
			}
			export module FetchConfiguration {
				export class Builder {
					public static class: java.lang.Class<com.tonyodev.fetch2.FetchConfiguration.Builder>;
					public setNamespace(param0: string): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public enableLogging(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public enableAutoStart(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setBackgroundHandler(param0: globalAndroid.os.Handler): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setFileServerDownloader(param0: com.tonyodev.fetch2core.FileServerDownloader): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public createDownloadFileOnEnqueue(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setPrioritySort(param0: com.tonyodev.fetch2.PrioritySort): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setStorageResolver(param0: com.tonyodev.fetch2core.StorageResolver): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setDatabaseManager(param0: com.tonyodev.fetch2.database.FetchDatabaseManager<com.tonyodev.fetch2.database.DownloadInfo>): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public preAllocateFileOnCreation(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setAutoRetryMaxAttempts(param0: number): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setHasActiveDownloadsCheckInterval(param0: number): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setInternetAccessUrlCheck(param0: string): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setLogger(param0: com.tonyodev.fetch2core.Logger): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setNotificationManager(param0: com.tonyodev.fetch2.FetchNotificationManager): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public enableFileExistChecks(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public enableRetryOnNetworkGain(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setFetchHandler(param0: com.tonyodev.fetch2.fetch.FetchHandler): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public build(): com.tonyodev.fetch2.FetchConfiguration;
					public setProgressReportingInterval(param0: number): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setHttpDownloader(param0: com.tonyodev.fetch2core.Downloader<any,any>): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public enableHashCheck(param0: boolean): com.tonyodev.fetch2.FetchConfiguration.Builder;
					public setDownloadConcurrentLimit(param0: number): com.tonyodev.fetch2.FetchConfiguration.Builder;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchErrorUtils {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchErrorUtils>;
				public static getErrorFromThrowable(param0: java.lang.Throwable): com.tonyodev.fetch2.Error;
				public static getErrorFromMessage(param0: string): com.tonyodev.fetch2.Error;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchFileServerDownloader extends com.tonyodev.fetch2core.FileServerDownloader {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchFileServerDownloader>;
				public close(): void;
				public getConnections(): java.util.Map<com.tonyodev.fetch2core.Downloader.Response,com.tonyodev.fetch2core.server.FetchFileResourceTransporter>;
				public getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
				public verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
				public constructor(param0: com.tonyodev.fetch2core.Downloader.FileDownloaderType, param1: number);
				public getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
				public onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
				public constructor(param0: com.tonyodev.fetch2core.Downloader.FileDownloaderType);
				public constructor();
				public getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
				public getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public onPreClientExecute(param0: com.tonyodev.fetch2core.server.FetchFileResourceTransporter, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): com.tonyodev.fetch2core.FileServerDownloader.TransporterRequest;
				public onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
				public getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
				public getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public getFetchFileServerCatalog(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.List<com.tonyodev.fetch2core.FileResource>;
				public getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
				public disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchGroup {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchGroup>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.FetchGroup interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getId(): number;
					getNamespace(): string;
					getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getQueuedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getAddedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getPausedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getDownloadingDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getCompletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getCancelledDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getFailedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getDeletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getRemovedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					getGroupDownloadProgress(): number;
					getObservers(): java.util.Set<com.tonyodev.fetch2core.FetchObserver<java.util.List<com.tonyodev.fetch2.Download>>>;
					addFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
					removeFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
				});
				public constructor();
				public getObservers(): java.util.Set<com.tonyodev.fetch2core.FetchObserver<java.util.List<com.tonyodev.fetch2.Download>>>;
				public addFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
				public getId(): number;
				public getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getAddedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getRemovedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getDownloadingDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getNamespace(): string;
				public removeFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
				public getCompletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getDeletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getQueuedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getCancelledDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getFailedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getPausedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
				public getGroupDownloadProgress(): number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchGroupListener extends com.tonyodev.fetch2.FetchListener {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchGroupListener>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.FetchGroupListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAdded(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onQueued(param0: number, param1: com.tonyodev.fetch2.Download, param2: boolean, param3: com.tonyodev.fetch2.FetchGroup): void;
					onStarted(param0: number, param1: com.tonyodev.fetch2.Download, param2: java.util.List<any>, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
					onCompleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onResumed(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onPaused(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onCancelled(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onRemoved(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onDeleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onWaitingNetwork(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
					onError(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.Error, param3: java.lang.Throwable, param4: com.tonyodev.fetch2.FetchGroup): void;
					onDownloadBlockUpdated(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.DownloadBlock, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
					onProgress(param0: number, param1: com.tonyodev.fetch2.Download, param2: number, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
					onAdded(param0: com.tonyodev.fetch2.Download): void;
					onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
					onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
					onCompleted(param0: com.tonyodev.fetch2.Download): void;
					onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
					onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
					onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
					onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
					onPaused(param0: com.tonyodev.fetch2.Download): void;
					onResumed(param0: com.tonyodev.fetch2.Download): void;
					onCancelled(param0: com.tonyodev.fetch2.Download): void;
					onRemoved(param0: com.tonyodev.fetch2.Download): void;
					onDeleted(param0: com.tonyodev.fetch2.Download): void;
				});
				public constructor();
				public onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
				public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
				public onAdded(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onResumed(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onCancelled(param0: com.tonyodev.fetch2.Download): void;
				public onPaused(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onError(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.Error, param3: java.lang.Throwable, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onQueued(param0: number, param1: com.tonyodev.fetch2.Download, param2: boolean, param3: com.tonyodev.fetch2.FetchGroup): void;
				public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
				public onProgress(param0: number, param1: com.tonyodev.fetch2.Download, param2: number, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onDeleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onDownloadBlockUpdated(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.DownloadBlock, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onCancelled(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onWaitingNetwork(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onPaused(param0: com.tonyodev.fetch2.Download): void;
				public onStarted(param0: number, param1: com.tonyodev.fetch2.Download, param2: java.util.List<any>, param3: number, param4: com.tonyodev.fetch2.FetchGroup): void;
				public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
				public onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
				public onAdded(param0: com.tonyodev.fetch2.Download): void;
				public onCompleted(param0: com.tonyodev.fetch2.Download): void;
				public onDeleted(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
				public onCompleted(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2.FetchGroup): void;
				public onResumed(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: com.tonyodev.fetch2.Download): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchGroupObserver extends com.tonyodev.fetch2core.FetchObserver<java.util.List<any>> {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchGroupObserver>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.FetchGroupObserver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChanged(param0: java.util.List<any>, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): void;
					onChanged(param0: any, param1: com.tonyodev.fetch2core.Reason): void;
				});
				public constructor();
				public onChanged(param0: java.util.List<any>, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): void;
				public onChanged(param0: any, param1: com.tonyodev.fetch2core.Reason): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchIntent {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchIntent>;
				public static ACTION_QUEUE_BACKOFF_RESET: string;
				public static ACTION_TYPE_INVALID: number;
				public static ACTION_TYPE_PAUSE: number;
				public static ACTION_TYPE_RESUME: number;
				public static ACTION_TYPE_DELETE: number;
				public static ACTION_TYPE_CANCEL: number;
				public static ACTION_TYPE_RETRY: number;
				public static ACTION_TYPE_PAUSE_ALL: number;
				public static ACTION_TYPE_RESUME_ALL: number;
				public static ACTION_TYPE_CANCEL_ALL: number;
				public static ACTION_TYPE_DELETE_ALL: number;
				public static ACTION_TYPE_RETRY_ALL: number;
				public static DOWNLOAD_ID_INVALID: number;
				public static NOTIFICATION_GROUP_ID_INVALID: number;
				public static NOTIFICATION_ID_INVALID: number;
				public static EXTRA_NAMESPACE: string;
				public static EXTRA_DOWNLOAD_ID: string;
				public static EXTRA_DOWNLOAD_NOTIFICATIONS: string;
				public static EXTRA_NOTIFICATION_ID: string;
				public static EXTRA_NOTIFICATION_GROUP_ID: string;
				public static EXTRA_ACTION_TYPE: string;
				public static EXTRA_GROUP_ACTION: string;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchListener {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchListener>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.FetchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onAdded(param0: com.tonyodev.fetch2.Download): void;
					onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
					onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
					onCompleted(param0: com.tonyodev.fetch2.Download): void;
					onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
					onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
					onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
					onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
					onPaused(param0: com.tonyodev.fetch2.Download): void;
					onResumed(param0: com.tonyodev.fetch2.Download): void;
					onCancelled(param0: com.tonyodev.fetch2.Download): void;
					onRemoved(param0: com.tonyodev.fetch2.Download): void;
					onDeleted(param0: com.tonyodev.fetch2.Download): void;
				});
				public constructor();
				public onWaitingNetwork(param0: com.tonyodev.fetch2.Download): void;
				public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
				public onCancelled(param0: com.tonyodev.fetch2.Download): void;
				public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
				public onQueued(param0: com.tonyodev.fetch2.Download, param1: boolean): void;
				public onAdded(param0: com.tonyodev.fetch2.Download): void;
				public onCompleted(param0: com.tonyodev.fetch2.Download): void;
				public onDeleted(param0: com.tonyodev.fetch2.Download): void;
				public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
				public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
				public onResumed(param0: com.tonyodev.fetch2.Download): void;
				public onPaused(param0: com.tonyodev.fetch2.Download): void;
				public onRemoved(param0: com.tonyodev.fetch2.Download): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class FetchNotificationManager {
				public static class: java.lang.Class<com.tonyodev.fetch2.FetchNotificationManager>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2.FetchNotificationManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getNotificationManagerAction(): string;
					getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver;
					updateGroupSummaryNotification(param0: number, param1: androidx.core.app.NotificationCompat.Builder, param2: java.util.List<any>, param3: globalAndroid.content.Context): boolean;
					updateNotification(param0: androidx.core.app.NotificationCompat.Builder, param1: com.tonyodev.fetch2.DownloadNotification, param2: globalAndroid.content.Context): void;
					notify(param0: number): void;
					getGroupActionPendingIntent(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
					getActionPendingIntent(param0: com.tonyodev.fetch2.DownloadNotification, param1: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
					cancelOngoingNotifications(): void;
					cancelNotification(param0: number): void;
					createNotificationChannels(param0: globalAndroid.content.Context, param1: globalAndroid.app.NotificationManager): void;
					getChannelId(param0: number, param1: globalAndroid.content.Context): string;
					postDownloadUpdate(param0: com.tonyodev.fetch2.Download): boolean;
					getNotificationBuilder(param0: number, param1: number): androidx.core.app.NotificationCompat.Builder;
					shouldUpdateNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
					shouldCancelNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
					registerBroadcastReceiver(): void;
					unregisterBroadcastReceiver(): void;
					getFetchInstanceForNamespace(param0: string): com.tonyodev.fetch2.Fetch;
					getNotificationTimeOutMillis(): number;
					getDownloadNotificationTitle(param0: com.tonyodev.fetch2.Download): string;
					getSubtitleText(param0: globalAndroid.content.Context, param1: com.tonyodev.fetch2.DownloadNotification): string;
				});
				public constructor();
				public cancelNotification(param0: number): void;
				public getFetchInstanceForNamespace(param0: string): com.tonyodev.fetch2.Fetch;
				public getGroupActionPendingIntent(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
				public createNotificationChannels(param0: globalAndroid.content.Context, param1: globalAndroid.app.NotificationManager): void;
				public getNotificationManagerAction(): string;
				public getNotificationBuilder(param0: number, param1: number): androidx.core.app.NotificationCompat.Builder;
				public getChannelId(param0: number, param1: globalAndroid.content.Context): string;
				public cancelOngoingNotifications(): void;
				public notify(param0: number): void;
				public shouldUpdateNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
				public shouldCancelNotification(param0: com.tonyodev.fetch2.DownloadNotification): boolean;
				public unregisterBroadcastReceiver(): void;
				public postDownloadUpdate(param0: com.tonyodev.fetch2.Download): boolean;
				public getActionPendingIntent(param0: com.tonyodev.fetch2.DownloadNotification, param1: com.tonyodev.fetch2.DownloadNotification.ActionType): globalAndroid.app.PendingIntent;
				public getSubtitleText(param0: globalAndroid.content.Context, param1: com.tonyodev.fetch2.DownloadNotification): string;
				public updateGroupSummaryNotification(param0: number, param1: androidx.core.app.NotificationCompat.Builder, param2: java.util.List<any>, param3: globalAndroid.content.Context): boolean;
				public getBroadcastReceiver(): globalAndroid.content.BroadcastReceiver;
				public registerBroadcastReceiver(): void;
				public getDownloadNotificationTitle(param0: com.tonyodev.fetch2.Download): string;
				public getNotificationTimeOutMillis(): number;
				public updateNotification(param0: androidx.core.app.NotificationCompat.Builder, param1: com.tonyodev.fetch2.DownloadNotification, param2: globalAndroid.content.Context): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class HttpUrlConnectionDownloader extends com.tonyodev.fetch2core.Downloader<java.net.HttpURLConnection,java.lang.Void> {
				public static class: java.lang.Class<com.tonyodev.fetch2.HttpUrlConnectionDownloader>;
				public close(): void;
				public isResponseOk(param0: number): boolean;
				public onPreClientExecute(param0: java.net.HttpURLConnection, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): java.lang.Void;
				public getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public getCookieManager(): java.net.CookieManager;
				public execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
				public verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
				public getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
				public onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
				public constructor(param0: com.tonyodev.fetch2.HttpUrlConnectionDownloader.HttpUrlConnectionPreferences);
				public constructor(param0: com.tonyodev.fetch2core.Downloader.FileDownloaderType);
				public constructor();
				public getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
				public getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public constructor(param0: com.tonyodev.fetch2.HttpUrlConnectionDownloader.HttpUrlConnectionPreferences, param1: com.tonyodev.fetch2core.Downloader.FileDownloaderType);
				public onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
				public getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
				public getConnections(): java.util.Map<com.tonyodev.fetch2core.Downloader.Response,java.net.HttpURLConnection>;
				public getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
				public getConnectionPrefs(): com.tonyodev.fetch2.HttpUrlConnectionDownloader.HttpUrlConnectionPreferences;
				public disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
			}
			export module HttpUrlConnectionDownloader {
				export class HttpUrlConnectionPreferences {
					public static class: java.lang.Class<com.tonyodev.fetch2.HttpUrlConnectionDownloader.HttpUrlConnectionPreferences>;
					public setUsesCache(param0: boolean): void;
					public getUsesDefaultCache(): boolean;
					public constructor();
					public getReadTimeout(): number;
					public setFollowsRedirect(param0: boolean): void;
					public getFollowsRedirect(): boolean;
					public getConnectTimeout(): number;
					public setReadTimeout(param0: number): void;
					public setConnectTimeout(param0: number): void;
					public getUsesCache(): boolean;
					public setUsesDefaultCache(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class NetworkType {
				public static class: java.lang.Class<com.tonyodev.fetch2.NetworkType>;
				public static GLOBAL_OFF: com.tonyodev.fetch2.NetworkType;
				public static ALL: com.tonyodev.fetch2.NetworkType;
				public static WIFI_ONLY: com.tonyodev.fetch2.NetworkType;
				public static UNMETERED: com.tonyodev.fetch2.NetworkType;
				public static Companion: com.tonyodev.fetch2.NetworkType.Companion;
				public static valueOf(param0: string): com.tonyodev.fetch2.NetworkType;
				public static values(): native.Array<com.tonyodev.fetch2.NetworkType>;
				public static valueOf(param0: number): com.tonyodev.fetch2.NetworkType;
				public getValue(): number;
			}
			export module NetworkType {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2.NetworkType.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2.NetworkType;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Priority {
				public static class: java.lang.Class<com.tonyodev.fetch2.Priority>;
				public static HIGH: com.tonyodev.fetch2.Priority;
				public static NORMAL: com.tonyodev.fetch2.Priority;
				public static LOW: com.tonyodev.fetch2.Priority;
				public static Companion: com.tonyodev.fetch2.Priority.Companion;
				public static values(): native.Array<com.tonyodev.fetch2.Priority>;
				public static valueOf(param0: string): com.tonyodev.fetch2.Priority;
				public static valueOf(param0: number): com.tonyodev.fetch2.Priority;
				public getValue(): number;
			}
			export module Priority {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2.Priority.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2.Priority;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class PrioritySort {
				public static class: java.lang.Class<com.tonyodev.fetch2.PrioritySort>;
				public static ASC: com.tonyodev.fetch2.PrioritySort;
				public static DESC: com.tonyodev.fetch2.PrioritySort;
				public static valueOf(param0: string): com.tonyodev.fetch2.PrioritySort;
				public static values(): native.Array<com.tonyodev.fetch2.PrioritySort>;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Request extends com.tonyodev.fetch2.RequestInfo {
				public static class: java.lang.Class<com.tonyodev.fetch2.Request>;
				public static CREATOR: com.tonyodev.fetch2.Request.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getFileUri(): globalAndroid.net.Uri;
				public hashCode(): number;
				public getId(): number;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getUrl(): string;
				public getFile(): string;
				public toString(): string;
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: globalAndroid.net.Uri);
				public constructor();
			}
			export module Request {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2.Request> {
					public static class: java.lang.Class<com.tonyodev.fetch2.Request.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2.Request;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2.Request>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class RequestInfo {
				public static class: java.lang.Class<com.tonyodev.fetch2.RequestInfo>;
				public setNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
				public getAutoRetryMaxAttempts(): number;
				public addHeader(param0: string, param1: string): void;
				public setEnqueueAction(param0: com.tonyodev.fetch2.EnqueueAction): void;
				public setAutoRetryMaxAttempts(param0: number): void;
				public setGroupId(param0: number): void;
				public setExtras(param0: com.tonyodev.fetch2core.Extras): void;
				public getNetworkType(): com.tonyodev.fetch2.NetworkType;
				public getTag(): string;
				public setDownloadOnEnqueue(param0: boolean): void;
				public toString(): string;
				public getExtras(): com.tonyodev.fetch2core.Extras;
				public getIdentifier(): number;
				public setIdentifier(param0: number): void;
				public getEnqueueAction(): com.tonyodev.fetch2.EnqueueAction;
				public constructor();
				public setPriority(param0: com.tonyodev.fetch2.Priority): void;
				public getDownloadOnEnqueue(): boolean;
				public getHeaders(): java.util.Map<string,string>;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getGroupId(): number;
				public getPriority(): com.tonyodev.fetch2.Priority;
				public setTag(param0: string): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export class Status {
				public static class: java.lang.Class<com.tonyodev.fetch2.Status>;
				public static NONE: com.tonyodev.fetch2.Status;
				public static QUEUED: com.tonyodev.fetch2.Status;
				public static DOWNLOADING: com.tonyodev.fetch2.Status;
				public static PAUSED: com.tonyodev.fetch2.Status;
				public static COMPLETED: com.tonyodev.fetch2.Status;
				public static CANCELLED: com.tonyodev.fetch2.Status;
				public static FAILED: com.tonyodev.fetch2.Status;
				public static REMOVED: com.tonyodev.fetch2.Status;
				public static DELETED: com.tonyodev.fetch2.Status;
				public static ADDED: com.tonyodev.fetch2.Status;
				public static Companion: com.tonyodev.fetch2.Status.Companion;
				public static values(): native.Array<com.tonyodev.fetch2.Status>;
				public getValue(): number;
				public static valueOf(param0: string): com.tonyodev.fetch2.Status;
				public static valueOf(param0: number): com.tonyodev.fetch2.Status;
			}
			export module Status {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2.Status.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2.Status;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class Converter {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.Converter>;
					public fromStatusValue(param0: number): com.tonyodev.fetch2.Status;
					public fromExtrasToString(param0: com.tonyodev.fetch2core.Extras): string;
					public fromErrorValue(param0: number): com.tonyodev.fetch2.Error;
					public fromNetworkTypeValue(param0: number): com.tonyodev.fetch2.NetworkType;
					public toPriorityValue(param0: com.tonyodev.fetch2.Priority): number;
					public toHeaderStringsMap(param0: java.util.Map<string,string>): string;
					public fromPriorityValue(param0: number): com.tonyodev.fetch2.Priority;
					public toErrorValue(param0: com.tonyodev.fetch2.Error): number;
					public fromJsonString(param0: string): java.util.Map<string,string>;
					public toEnqueueActionValue(param0: com.tonyodev.fetch2.EnqueueAction): number;
					public toStatusValue(param0: com.tonyodev.fetch2.Status): number;
					public constructor();
					public fromEnqueueActionValue(param0: number): com.tonyodev.fetch2.EnqueueAction;
					public fromExtrasJsonToExtras(param0: string): com.tonyodev.fetch2core.Extras;
					public toNetworkTypeValue(param0: com.tonyodev.fetch2.NetworkType): number;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class DownloadDao {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadDao>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.database.DownloadDao interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						insert(param0: com.tonyodev.fetch2.database.DownloadInfo): number;
						insert(param0: java.util.List<any>): java.util.List<java.lang.Long>;
						delete(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
						delete(param0: java.util.List<any>): void;
						deleteAll(): void;
						update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
						update(param0: java.util.List<any>): void;
						get(): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						get(param0: number): com.tonyodev.fetch2.database.DownloadInfo;
						get(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getByFile(param0: string): com.tonyodev.fetch2.database.DownloadInfo;
						getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getByStatus(param0: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getByGroupWithStatus(param0: number, param1: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getPendingDownloadsSorted(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getPendingDownloadsSortedDesc(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
						getAllGroupIds(): java.util.List<java.lang.Integer>;
					});
					public constructor();
					public getByFile(param0: string): com.tonyodev.fetch2.database.DownloadInfo;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getByGroupWithStatus(param0: number, param1: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: java.util.List<any>): void;
					public getByStatus(param0: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public delete(param0: java.util.List<any>): void;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: com.tonyodev.fetch2.database.DownloadInfo): number;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public delete(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public deleteAll(): void;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: java.util.List<any>): java.util.List<java.lang.Long>;
					public get(param0: number): com.tonyodev.fetch2.database.DownloadInfo;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getPendingDownloadsSortedDesc(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class DownloadDao_Impl extends com.tonyodev.fetch2.database.DownloadDao {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadDao_Impl>;
					public getByFile(param0: string): com.tonyodev.fetch2.database.DownloadInfo;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getByGroupWithStatus(param0: number, param1: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: java.util.List<any>): void;
					public getByStatus(param0: java.util.List<com.tonyodev.fetch2.Status>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public delete(param0: java.util.List<any>): void;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: com.tonyodev.fetch2.database.DownloadInfo): number;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public delete(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public deleteAll(): void;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: java.util.List<any>): java.util.List<java.lang.Long>;
					public get(param0: number): com.tonyodev.fetch2.database.DownloadInfo;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getPendingDownloadsSortedDesc(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public constructor(param0: androidx.room.RoomDatabase);
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export abstract class DownloadDatabase {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadDatabase>;
					public static TABLE_NAME: string;
					public static COLUMN_ID: string;
					public static COLUMN_NAMESPACE: string;
					public static COLUMN_URL: string;
					public static COLUMN_FILE: string;
					public static COLUMN_GROUP: string;
					public static COLUMN_PRIORITY: string;
					public static COLUMN_HEADERS: string;
					public static COLUMN_DOWNLOADED: string;
					public static COLUMN_TOTAL: string;
					public static COLUMN_STATUS: string;
					public static COLUMN_ERROR: string;
					public static COLUMN_NETWORK_TYPE: string;
					public static COLUMN_CREATED: string;
					public static COLUMN_TAG: string;
					public static COLUMN_ENQUEUE_ACTION: string;
					public static COLUMN_IDENTIFIER: string;
					public static COLUMN_DOWNLOAD_ON_ENQUEUE: string;
					public static COLUMN_EXTRAS: string;
					public static COLUMN_AUTO_RETRY_MAX_ATTEMPTS: string;
					public static COLUMN_AUTO_RETRY_ATTEMPTS: string;
					public static OLD_DATABASE_VERSION: number;
					public static DATABASE_VERSION: number;
					public static Companion: com.tonyodev.fetch2.database.DownloadDatabase.Companion;
					public constructor();
					public static getMigrations(): native.Array<com.tonyodev.fetch2.database.migration.Migration>;
					public requestDao(): com.tonyodev.fetch2.database.DownloadDao;
					public wasRowInserted(param0: number): boolean;
				}
				export module DownloadDatabase {
					export class Companion {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadDatabase.Companion>;
						public getMigrations(): native.Array<com.tonyodev.fetch2.database.migration.Migration>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class DownloadDatabase_Impl extends com.tonyodev.fetch2.database.DownloadDatabase {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadDatabase_Impl>;
					public createOpenHelper(param0: androidx.room.DatabaseConfiguration): androidx.sqlite.db.SupportSQLiteOpenHelper;
					public createInvalidationTracker(): androidx.room.InvalidationTracker;
					public constructor();
					public clearAllTables(): void;
					public requestDao(): com.tonyodev.fetch2.database.DownloadDao;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class DownloadInfo extends com.tonyodev.fetch2.Download {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadInfo>;
					public static CREATOR: com.tonyodev.fetch2.database.DownloadInfo.CREATOR;
					public getHeaders(): java.util.Map<string,string>;
					public setId(param0: number): void;
					public setNamespace(param0: string): void;
					public setIdentifier(param0: number): void;
					public getFile(): string;
					public setExtras(param0: com.tonyodev.fetch2core.Extras): void;
					public constructor();
					public setUrl(param0: string): void;
					public getPriority(): com.tonyodev.fetch2.Priority;
					public setHeaders(param0: java.util.Map<string,string>): void;
					public setDownloaded(param0: number): void;
					public getGroup(): number;
					public getId(): number;
					public getCreated(): number;
					public getExtras(): com.tonyodev.fetch2core.Extras;
					public getRequest(): com.tonyodev.fetch2.Request;
					public setPriority(param0: com.tonyodev.fetch2.Priority): void;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getDownloaded(): number;
					public getIdentifier(): number;
					public getAutoRetryMaxAttempts(): number;
					public getNamespace(): string;
					public setError(param0: com.tonyodev.fetch2.Error): void;
					public setNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
					public setDownloadOnEnqueue(param0: boolean): void;
					public setEtaInMilliSeconds(param0: number): void;
					public setStatus(param0: com.tonyodev.fetch2.Status): void;
					public setFile(param0: string): void;
					public getAutoRetryAttempts(): number;
					public toString(): string;
					public getStatus(): com.tonyodev.fetch2.Status;
					public getUrl(): string;
					public setTotal(param0: number): void;
					public hashCode(): number;
					public setAutoRetryAttempts(param0: number): void;
					public setGroup(param0: number): void;
					public setAutoRetryMaxAttempts(param0: number): void;
					public setTag(param0: string): void;
					public copy(): com.tonyodev.fetch2.Download;
					public describeContents(): number;
					public setEnqueueAction(param0: com.tonyodev.fetch2.EnqueueAction): void;
					public getEnqueueAction(): com.tonyodev.fetch2.EnqueueAction;
					public getEtaInMilliSeconds(): number;
					public getDownloadOnEnqueue(): boolean;
					public getNetworkType(): com.tonyodev.fetch2.NetworkType;
					public getTag(): string;
					public getError(): com.tonyodev.fetch2.Error;
					public equals(param0: any): boolean;
					public getTotal(): number;
					public getProgress(): number;
					public setDownloadedBytesPerSecond(param0: number): void;
					public setCreated(param0: number): void;
					public getFileUri(): globalAndroid.net.Uri;
					public getDownloadedBytesPerSecond(): number;
				}
				export module DownloadInfo {
					export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2.database.DownloadInfo> {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.DownloadInfo.CREATOR>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2.database.DownloadInfo;
						public newArray(param0: number): native.Array<com.tonyodev.fetch2.database.DownloadInfo>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class FetchDatabaseManager<T>  extends java.io.Closeable {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.FetchDatabaseManager<any>>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.database.FetchDatabaseManager<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isClosed(): boolean;
						getLogger(): com.tonyodev.fetch2core.Logger;
						getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>;
						setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>): void;
						insert(param0: any): kotlin.Pair<any,java.lang.Boolean>;
						insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<any,java.lang.Boolean>>;
						delete(param0: any): void;
						delete(param0: java.util.List<any>): void;
						deleteAll(): void;
						update(param0: any): void;
						update(param0: java.util.List<any>): void;
						updateFileBytesInfoAndStatusOnly(param0: any): void;
						get(): java.util.List<any>;
						get(param0: number): any;
						get(param0: java.util.List<java.lang.Integer>): java.util.List<any>;
						getByFile(param0: string): any;
						getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<any>;
						getByStatus(param0: java.util.List<any>): java.util.List<any>;
						getByGroup(param0: number): java.util.List<any>;
						getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<any>;
						getDownloadsByRequestIdentifier(param0: number): java.util.List<any>;
						getDownloadsByTag(param0: string): java.util.List<any>;
						getAllGroupIds(): java.util.List<java.lang.Integer>;
						getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<any>;
						sanitizeOnFirstEntry(): void;
						updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): any;
						getPendingCount(param0: boolean): number;
						getNewDownloadInfoInstance(): any;
					});
					public constructor();
					public getByFile(param0: string): any;
					public insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<any,java.lang.Boolean>>;
					public delete(param0: any): void;
					public update(param0: java.util.List<any>): void;
					public getPendingCount(param0: boolean): number;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<any>;
					public getLogger(): com.tonyodev.fetch2core.Logger;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public get(param0: number): any;
					public getByGroup(param0: number): java.util.List<any>;
					public update(param0: any): void;
					public getByStatus(param0: java.util.List<any>): java.util.List<any>;
					public get(): java.util.List<any>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<any>;
					public updateFileBytesInfoAndStatusOnly(param0: any): void;
					public getDownloadsByTag(param0: string): java.util.List<any>;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<any>;
					public getNewDownloadInfoInstance(): any;
					public delete(param0: java.util.List<any>): void;
					public sanitizeOnFirstEntry(): void;
					public setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>): void;
					public updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): any;
					public getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>;
					public deleteAll(): void;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<any>;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<any>;
					public insert(param0: any): kotlin.Pair<any,java.lang.Boolean>;
					public isClosed(): boolean;
				}
				export module FetchDatabaseManager {
					export class Delegate<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>>;
						/**
						 * Constructs a new instance of the com.tonyodev.fetch2.database.FetchDatabaseManager$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							deleteTempFilesForDownload(param0: T): void;
						});
						public constructor();
						public deleteTempFilesForDownload(param0: T): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class FetchDatabaseManagerImpl extends com.tonyodev.fetch2.database.FetchDatabaseManager<com.tonyodev.fetch2.database.DownloadInfo> {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.FetchDatabaseManagerImpl>;
					public insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>>;
					public getByFile(param0: string): com.tonyodev.fetch2.database.DownloadInfo;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<any,java.lang.Boolean>>;
					public delete(param0: any): void;
					public getPendingCount(param0: boolean): number;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<any>;
					public getLogger(): com.tonyodev.fetch2core.Logger;
					public updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): com.tonyodev.fetch2.database.DownloadInfo;
					public close(): void;
					public get(param0: number): any;
					public getByGroup(param0: number): java.util.List<any>;
					public update(param0: any): void;
					public get(): java.util.List<any>;
					public constructor(param0: globalAndroid.content.Context, param1: string, param2: com.tonyodev.fetch2core.Logger, param3: native.Array<com.tonyodev.fetch2.database.migration.Migration>, param4: com.tonyodev.fetch2.fetch.LiveSettings, param5: boolean, param6: com.tonyodev.fetch2core.DefaultStorageResolver);
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<any>;
					public getDownloadsByTag(param0: string): java.util.List<any>;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<any>;
					public delete(param0: java.util.List<any>): void;
					public sanitizeOnFirstEntry(): void;
					public setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>): void;
					public updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): any;
					public delete(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<any>;
					public getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(param0: number): com.tonyodev.fetch2.database.DownloadInfo;
					public getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<com.tonyodev.fetch2.database.DownloadInfo>;
					public updateFileBytesInfoAndStatusOnly(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public isClosed(): boolean;
					public getByFile(param0: string): any;
					public insert(param0: com.tonyodev.fetch2.database.DownloadInfo): kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>;
					public update(param0: java.util.List<any>): void;
					public getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public getByStatus(param0: java.util.List<any>): java.util.List<any>;
					public getByStatus(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public updateFileBytesInfoAndStatusOnly(param0: any): void;
					public getNewDownloadInfoInstance(): any;
					public deleteAll(): void;
					public getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>;
					public setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<com.tonyodev.fetch2.database.DownloadInfo>): void;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<any>;
					public insert(param0: any): kotlin.Pair<any,java.lang.Boolean>;
				}
				export module FetchDatabaseManagerImpl {
					export class WhenMappings {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.FetchDatabaseManagerImpl.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export class FetchDatabaseManagerWrapper extends com.tonyodev.fetch2.database.FetchDatabaseManager<com.tonyodev.fetch2.database.DownloadInfo> {
					public static class: java.lang.Class<com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper>;
					public insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>>;
					public getByFile(param0: string): com.tonyodev.fetch2.database.DownloadInfo;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public insert(param0: java.util.List<any>): java.util.List<kotlin.Pair<any,java.lang.Boolean>>;
					public delete(param0: any): void;
					public getPendingCount(param0: boolean): number;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<any>;
					public getLogger(): com.tonyodev.fetch2core.Logger;
					public updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): com.tonyodev.fetch2.database.DownloadInfo;
					public close(): void;
					public get(param0: number): any;
					public getByGroup(param0: number): java.util.List<any>;
					public update(param0: any): void;
					public get(): java.util.List<any>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<any>;
					public getDownloadsByTag(param0: string): java.util.List<any>;
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public get(param0: java.util.List<java.lang.Integer>): java.util.List<any>;
					public delete(param0: java.util.List<any>): void;
					public sanitizeOnFirstEntry(): void;
					public setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>): void;
					public updateExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): any;
					public delete(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<any>;
					public getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(param0: number): com.tonyodev.fetch2.database.DownloadInfo;
					public getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<com.tonyodev.fetch2.database.DownloadInfo>;
					public updateFileBytesInfoAndStatusOnly(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public isClosed(): boolean;
					public getByFile(param0: string): any;
					public insert(param0: com.tonyodev.fetch2.database.DownloadInfo): kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>;
					public update(param0: java.util.List<any>): void;
					public getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public getByStatus(param0: java.util.List<any>): java.util.List<any>;
					public getByStatus(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public get(): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.database.DownloadInfo>;
					public updateFileBytesInfoAndStatusOnly(param0: any): void;
					public getNewDownloadInfoInstance(): any;
					public constructor(param0: com.tonyodev.fetch2.database.FetchDatabaseManager<com.tonyodev.fetch2.database.DownloadInfo>);
					public deleteAll(): void;
					public getDelegate(): com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<any>;
					public setDelegate(param0: com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate<com.tonyodev.fetch2.database.DownloadInfo>): void;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<any>;
					public insert(param0: any): kotlin.Pair<any,java.lang.Boolean>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export abstract class Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.Migration>;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationFiveToSix extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationFiveToSix>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationFourToFive extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationFourToFive>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationOneToTwo extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationOneToTwo>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationSixToSeven extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationSixToSeven>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationThreeToFour extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationThreeToFour>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module database {
				export module migration {
					export class MigrationTwoToThree extends com.tonyodev.fetch2.database.migration.Migration {
						public static class: java.lang.Class<com.tonyodev.fetch2.database.migration.MigrationTwoToThree>;
						public constructor();
						public migrate(param0: androidx.sqlite.db.SupportSQLiteDatabase): void;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class DownloadManager {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.DownloadManager>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.downloader.DownloadManager interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isClosed(): boolean;
						getConcurrentLimit(): number;
						setConcurrentLimit(param0: number): void;
						start(param0: com.tonyodev.fetch2.Download): boolean;
						cancel(param0: number): boolean;
						cancelAll(): void;
						contains(param0: number): boolean;
						canAccommodateNewDownload(): boolean;
						getActiveDownloadCount(): number;
						getActiveDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
						getActiveDownloadsIds(): java.util.List<java.lang.Integer>;
						getNewFileDownloaderForDownload(param0: com.tonyodev.fetch2.Download): com.tonyodev.fetch2.downloader.FileDownloader;
						getFileDownloaderDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
						getDownloadFileTempDir(param0: com.tonyodev.fetch2.Download): string;
					});
					public constructor();
					public getActiveDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getNewFileDownloaderForDownload(param0: com.tonyodev.fetch2.Download): com.tonyodev.fetch2.downloader.FileDownloader;
					public getDownloadFileTempDir(param0: com.tonyodev.fetch2.Download): string;
					public getActiveDownloadsIds(): java.util.List<java.lang.Integer>;
					public getActiveDownloadCount(): number;
					public start(param0: com.tonyodev.fetch2.Download): boolean;
					public getFileDownloaderDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
					public getConcurrentLimit(): number;
					public cancelAll(): void;
					public cancel(param0: number): boolean;
					public contains(param0: number): boolean;
					public setConcurrentLimit(param0: number): void;
					public canAccommodateNewDownload(): boolean;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class DownloadManagerCoordinator {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.DownloadManagerCoordinator>;
					public removeFileDownloader(param0: number): void;
					public getFileDownloaderList(): java.util.List<com.tonyodev.fetch2.downloader.FileDownloader>;
					public containsFileDownloader(param0: number): boolean;
					public getNamespace(): string;
					public constructor(param0: string);
					public interruptDownload(param0: number): void;
					public clearAll(): void;
					public addFileDownloader(param0: number, param1: com.tonyodev.fetch2.downloader.FileDownloader): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class DownloadManagerImpl extends com.tonyodev.fetch2.downloader.DownloadManager {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.DownloadManagerImpl>;
					public getActiveDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getNewFileDownloaderForDownload(param0: com.tonyodev.fetch2.Download): com.tonyodev.fetch2.downloader.FileDownloader;
					public getDownloadFileTempDir(param0: com.tonyodev.fetch2.Download): string;
					public getActiveDownloadsIds(): java.util.List<java.lang.Integer>;
					public getActiveDownloadCount(): number;
					public start(param0: com.tonyodev.fetch2.Download): boolean;
					public getFileDownloaderDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
					public getConcurrentLimit(): number;
					public cancelAll(): void;
					public cancel(param0: number): boolean;
					public contains(param0: number): boolean;
					public close(): void;
					public constructor(param0: com.tonyodev.fetch2core.Downloader<any,any>, param1: number, param2: number, param3: com.tonyodev.fetch2core.Logger, param4: com.tonyodev.fetch2.provider.NetworkInfoProvider, param5: boolean, param6: com.tonyodev.fetch2.helper.DownloadInfoUpdater, param7: com.tonyodev.fetch2.downloader.DownloadManagerCoordinator, param8: com.tonyodev.fetch2.fetch.ListenerCoordinator, param9: com.tonyodev.fetch2core.FileServerDownloader, param10: boolean, param11: com.tonyodev.fetch2core.StorageResolver, param12: globalAndroid.content.Context, param13: string, param14: com.tonyodev.fetch2.provider.GroupInfoProvider, param15: number, param16: boolean);
					public setConcurrentLimit(param0: number): void;
					public canAccommodateNewDownload(): boolean;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class FileDownloader {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.FileDownloader>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.downloader.FileDownloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getInterrupted(): boolean;
						setInterrupted(param0: boolean): void;
						getTerminated(): boolean;
						setTerminated(param0: boolean): void;
						getCompletedDownload(): boolean;
						getDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
						setDelegate(param0: com.tonyodev.fetch2.downloader.FileDownloader.Delegate): void;
						getDownload(): com.tonyodev.fetch2.Download;
					});
					public constructor();
					public getTerminated(): boolean;
					public getInterrupted(): boolean;
					public setDelegate(param0: com.tonyodev.fetch2.downloader.FileDownloader.Delegate): void;
					public setTerminated(param0: boolean): void;
					public setInterrupted(param0: boolean): void;
					public getDownload(): com.tonyodev.fetch2.Download;
					public getDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
					public getCompletedDownload(): boolean;
				}
				export module FileDownloader {
					export class Delegate {
						public static class: java.lang.Class<com.tonyodev.fetch2.downloader.FileDownloader.Delegate>;
						/**
						 * Constructs a new instance of the com.tonyodev.fetch2.downloader.FileDownloader$Delegate interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getInterrupted(): boolean;
							onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
							onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
							onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
							onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
							onComplete(param0: com.tonyodev.fetch2.Download): void;
							saveDownloadProgress(param0: com.tonyodev.fetch2.Download): void;
							getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
						});
						public constructor();
						public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
						public getInterrupted(): boolean;
						public onComplete(param0: com.tonyodev.fetch2.Download): void;
						public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
						public getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
						public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
						public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
						public saveDownloadProgress(param0: com.tonyodev.fetch2.Download): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class ParallelFileDownloaderImpl extends com.tonyodev.fetch2.downloader.FileDownloader {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.ParallelFileDownloaderImpl>;
					public getTerminated(): boolean;
					public getInterrupted(): boolean;
					public constructor(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.Downloader<any,any>, param2: number, param3: com.tonyodev.fetch2core.Logger, param4: com.tonyodev.fetch2.provider.NetworkInfoProvider, param5: boolean, param6: string, param7: boolean, param8: com.tonyodev.fetch2core.StorageResolver, param9: boolean);
					public run(): void;
					public setDelegate(param0: com.tonyodev.fetch2.downloader.FileDownloader.Delegate): void;
					public setTerminated(param0: boolean): void;
					public setInterrupted(param0: boolean): void;
					public getDownload(): com.tonyodev.fetch2.Download;
					public getDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
					public getCompletedDownload(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module downloader {
				export class SequentialFileDownloaderImpl extends com.tonyodev.fetch2.downloader.FileDownloader {
					public static class: java.lang.Class<com.tonyodev.fetch2.downloader.SequentialFileDownloaderImpl>;
					public getTerminated(): boolean;
					public getInterrupted(): boolean;
					public run(): void;
					public setDelegate(param0: com.tonyodev.fetch2.downloader.FileDownloader.Delegate): void;
					public setTerminated(param0: boolean): void;
					public constructor(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.Downloader<any,any>, param2: number, param3: com.tonyodev.fetch2core.Logger, param4: com.tonyodev.fetch2.provider.NetworkInfoProvider, param5: boolean, param6: boolean, param7: com.tonyodev.fetch2core.StorageResolver, param8: boolean);
					public setInterrupted(param0: boolean): void;
					public getDownload(): com.tonyodev.fetch2.Download;
					public getDelegate(): com.tonyodev.fetch2.downloader.FileDownloader.Delegate;
					public getCompletedDownload(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module exception {
				export class FetchException {
					public static class: java.lang.Class<com.tonyodev.fetch2.exception.FetchException>;
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class FetchHandler {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchHandler>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.fetch.FetchHandler interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						init(): void;
						enqueue(param0: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>;
						enqueue(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>>;
						enqueueBatch(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>>;
						enqueueCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload): com.tonyodev.fetch2.Download;
						enqueueCompletedDownloads(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
						pause(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						pausedGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						pauseAll(): java.util.List<com.tonyodev.fetch2.Download>;
						freeze(): void;
						unfreeze(): void;
						resume(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						resumeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						resumeAll(): java.util.List<com.tonyodev.fetch2.Download>;
						remove(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						removeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						removeAll(): java.util.List<com.tonyodev.fetch2.Download>;
						removeAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
						removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
						delete(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						deleteGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						deleteAll(): java.util.List<com.tonyodev.fetch2.Download>;
						deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
						deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
						cancel(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						cancelGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						cancelAll(): java.util.List<com.tonyodev.fetch2.Download>;
						retry(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						updateRequest(param0: number, param1: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,java.lang.Boolean>;
						getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
						getDownload(param0: number): com.tonyodev.fetch2.Download;
						getDownloads(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
						getDownloadsInGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
						getAllGroupIds(): java.util.List<java.lang.Integer>;
						getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.Download>;
						getDownloadsWithStatus(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
						getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
						getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
						setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
						enableLogging(param0: boolean): void;
						addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): void;
						removeListener(param0: com.tonyodev.fetch2.FetchListener): void;
						getDownloadBlocks(param0: number): java.util.List<com.tonyodev.fetch2core.DownloadBlock>;
						getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean): number;
						getServerResponse(param0: string, param1: java.util.Map<string,string>): com.tonyodev.fetch2core.Downloader.Response;
						getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request): java.util.List<com.tonyodev.fetch2core.FileResource>;
						setDownloadConcurrentLimit(param0: number): void;
						replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): com.tonyodev.fetch2.Download;
						hasActiveDownloads(param0: boolean): boolean;
						getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
						getPendingCount(): number;
						renameCompletedDownloadFile(param0: number, param1: string): com.tonyodev.fetch2.Download;
						getFetchGroup(param0: number): com.tonyodev.fetch2.FetchGroup;
						addFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
						removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
						resetAutoRetryAttempts(param0: number, param1: boolean): com.tonyodev.fetch2.Download;
					});
					public constructor();
					public getDownloadsWithStatus(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public resume(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public updateRequest(param0: number, param1: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,java.lang.Boolean>;
					public enableLogging(param0: boolean): void;
					public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): void;
					public retry(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public cancelGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public deleteAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.Download>;
					public cancel(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownload(param0: number): com.tonyodev.fetch2.Download;
					public getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public resetAutoRetryAttempts(param0: number, param1: boolean): com.tonyodev.fetch2.Download;
					public delete(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public freeze(): void;
					public deleteGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloads(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public resumeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public removeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public enqueueBatch(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>>;
					public getDownloadsInGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public addFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public enqueueCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload): com.tonyodev.fetch2.Download;
					public getDownloadBlocks(param0: number): java.util.List<com.tonyodev.fetch2core.DownloadBlock>;
					public getServerResponse(param0: string, param1: java.util.Map<string,string>): com.tonyodev.fetch2core.Downloader.Response;
					public hasActiveDownloads(param0: boolean): boolean;
					public enqueue(param0: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>;
					public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public renameCompletedDownloadFile(param0: number, param1: string): com.tonyodev.fetch2.Download;
					public remove(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
					public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public setDownloadConcurrentLimit(param0: number): void;
					public pausedGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public pause(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request): java.util.List<com.tonyodev.fetch2core.FileResource>;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public removeAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): com.tonyodev.fetch2.Download;
					public getPendingCount(): number;
					public getFetchGroup(param0: number): com.tonyodev.fetch2.FetchGroup;
					public unfreeze(): void;
					public enqueueCompletedDownloads(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public removeListener(param0: com.tonyodev.fetch2.FetchListener): void;
					public resumeAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public cancelAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean): number;
					public pauseAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public init(): void;
					public getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
					public enqueue(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>>;
				}
				export module FetchHandler {
					export class DefaultImpls {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchHandler.DefaultImpls>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class FetchHandlerImpl extends com.tonyodev.fetch2.fetch.FetchHandler {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchHandlerImpl>;
					public getDownloadsWithStatus(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public resume(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public updateRequest(param0: number, param1: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,java.lang.Boolean>;
					public enableLogging(param0: boolean): void;
					public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): void;
					public retry(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public cancelGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public deleteAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsByTag(param0: string): java.util.List<com.tonyodev.fetch2.Download>;
					public cancel(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownload(param0: number): com.tonyodev.fetch2.Download;
					public close(): void;
					public getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public resetAutoRetryAttempts(param0: number, param1: boolean): com.tonyodev.fetch2.Download;
					public delete(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public freeze(): void;
					public deleteGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloads(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public resumeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public removeGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public enqueueBatch(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.database.DownloadInfo,java.lang.Boolean>>;
					public getDownloadsInGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public addFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public enqueueCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload): com.tonyodev.fetch2.Download;
					public getDownloadBlocks(param0: number): java.util.List<com.tonyodev.fetch2core.DownloadBlock>;
					public getServerResponse(param0: string, param1: java.util.Map<string,string>): com.tonyodev.fetch2core.Downloader.Response;
					public hasActiveDownloads(param0: boolean): boolean;
					public enqueue(param0: com.tonyodev.fetch2.Request): kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>;
					public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public renameCompletedDownloadFile(param0: number, param1: string): com.tonyodev.fetch2.Download;
					public remove(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
					public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeAllWithStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public setDownloadConcurrentLimit(param0: number): void;
					public pausedGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public pause(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request): java.util.List<com.tonyodev.fetch2core.FileResource>;
					public getAllGroupIds(): java.util.List<java.lang.Integer>;
					public removeAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloadsByRequestIdentifier(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras): com.tonyodev.fetch2.Download;
					public getPendingCount(): number;
					public getFetchGroup(param0: number): com.tonyodev.fetch2.FetchGroup;
					public unfreeze(): void;
					public enqueueCompletedDownloads(param0: java.util.List<any>): java.util.List<com.tonyodev.fetch2.Download>;
					public removeListener(param0: com.tonyodev.fetch2.FetchListener): void;
					public resumeAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public cancelAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean): number;
					public pauseAll(): java.util.List<com.tonyodev.fetch2.Download>;
					public init(): void;
					public getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
					public constructor(param0: string, param1: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper, param2: com.tonyodev.fetch2.downloader.DownloadManager, param3: com.tonyodev.fetch2.helper.PriorityListProcessor<any>, param4: com.tonyodev.fetch2core.Logger, param5: boolean, param6: com.tonyodev.fetch2core.Downloader<any,any>, param7: com.tonyodev.fetch2core.FileServerDownloader, param8: com.tonyodev.fetch2.fetch.ListenerCoordinator, param9: globalAndroid.os.Handler, param10: com.tonyodev.fetch2core.StorageResolver, param11: com.tonyodev.fetch2.FetchNotificationManager, param12: com.tonyodev.fetch2.provider.GroupInfoProvider, param13: com.tonyodev.fetch2.PrioritySort, param14: boolean);
					public enqueue(param0: java.util.List<any>): java.util.List<kotlin.Pair<com.tonyodev.fetch2.Download,com.tonyodev.fetch2.Error>>;
				}
				export module FetchHandlerImpl {
					export class WhenMappings {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchHandlerImpl.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class FetchImpl extends com.tonyodev.fetch2.Fetch {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchImpl>;
					public static Companion: com.tonyodev.fetch2.fetch.FetchImpl.Companion;
					public removeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getFetchGroup(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.FetchGroup>): com.tonyodev.fetch2.Fetch;
					public getDownloadsByRequestIdentifier(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public getDownload(param0: number, param1: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>): com.tonyodev.fetch2.Fetch;
					public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getDownloadsInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public constructor(param0: string, param1: com.tonyodev.fetch2.FetchConfiguration, param2: com.tonyodev.fetch2core.HandlerWrapper, param3: globalAndroid.os.Handler, param4: com.tonyodev.fetch2.fetch.FetchHandler, param5: com.tonyodev.fetch2core.Logger, param6: com.tonyodev.fetch2.fetch.ListenerCoordinator, param7: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper);
					public cancel(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public removeGroup(param0: number): com.tonyodev.fetch2.Fetch;
					public removeActiveDownloadsObserver(param0: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					public pauseAll(): com.tonyodev.fetch2.Fetch;
					public cancelAll(): com.tonyodev.fetch2.Fetch;
					public close(): void;
					public deleteGroup(param0: number): com.tonyodev.fetch2.Fetch;
					public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean): com.tonyodev.fetch2.Fetch;
					public resumeGroup(param0: number): com.tonyodev.fetch2.Fetch;
					public updateRequest(param0: number, param1: com.tonyodev.fetch2.Request, param2: boolean, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param4: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getContentLengthForRequest(param0: com.tonyodev.fetch2.Request, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.lang.Long>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public remove(param0: number): com.tonyodev.fetch2.Fetch;
					public resume(param0: number): com.tonyodev.fetch2.Fetch;
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): com.tonyodev.fetch2.Fetch;
					public getContentLengthForRequests(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,java.lang.Long>>>, param3: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
					public deleteGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public removeAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public pause(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
					public retry(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getServerResponse(param0: string, param1: java.util.Map<string,string>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2core.Downloader.Response>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public addListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
					public freeze(): com.tonyodev.fetch2.Fetch;
					public resumeGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public enableLogging(param0: boolean): com.tonyodev.fetch2.Fetch;
					public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public delete(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public unfreeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public cancelGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public resume(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getDownloads(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public getDownloads(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public setDownloadConcurrentLimit(param0: number): com.tonyodev.fetch2.Fetch;
					public delete(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public pause(param0: number): com.tonyodev.fetch2.Fetch;
					public addCompletedDownloads(param0: java.util.List<any>, param1: boolean, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public resume(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public addCompletedDownload(param0: com.tonyodev.fetch2.CompletedDownload, param1: boolean, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public pause(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public removeAllInGroupWithStatus(param0: number, param1: java.util.List<any>): com.tonyodev.fetch2.Fetch;
					public addListener(param0: com.tonyodev.fetch2.FetchListener, param1: boolean, param2: boolean): com.tonyodev.fetch2.Fetch;
					public pause(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public pauseGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public deleteAllInGroupWithStatus(param0: number, param1: java.util.List<any>, param2: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getListenerSet(): java.util.Set<com.tonyodev.fetch2.FetchListener>;
					public getDownloadsWithStatus(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public hasActiveDownloads(param0: boolean, param1: com.tonyodev.fetch2core.Func<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					public pauseGroup(param0: number): com.tonyodev.fetch2.Fetch;
					public delete(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public cancel(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public deleteAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
					public getDownloadBlocks(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.DownloadBlock>>): com.tonyodev.fetch2.Fetch;
					public removeListener(param0: com.tonyodev.fetch2.FetchListener): com.tonyodev.fetch2.Fetch;
					public awaitFinish(): void;
					public deleteAll(): com.tonyodev.fetch2.Fetch;
					public delete(param0: number): com.tonyodev.fetch2.Fetch;
					public getAllGroupIds(param0: com.tonyodev.fetch2core.Func<java.util.List<java.lang.Integer>>): com.tonyodev.fetch2.Fetch;
					public getFetchConfiguration(): com.tonyodev.fetch2.FetchConfiguration;
					public getDownloadsInGroup(param0: number, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public resumeAll(): com.tonyodev.fetch2.Fetch;
					public getDownloadsByTag(param0: string, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public cancelGroup(param0: number): com.tonyodev.fetch2.Fetch;
					public enqueue(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Request>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public deleteAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public removeAllWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public awaitFinishOrTimeout(param0: number): void;
					public remove(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public isClosed(): boolean;
					public getNamespace(): string;
					public removeAllWithStatus(param0: com.tonyodev.fetch2.Status): com.tonyodev.fetch2.Fetch;
					public retry(param0: java.util.List<java.lang.Integer>, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public retry(param0: number): com.tonyodev.fetch2.Fetch;
					public cancel(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public static newInstance(param0: com.tonyodev.fetch2.fetch.FetchModulesBuilder.Modules): com.tonyodev.fetch2.fetch.FetchImpl;
					public freeze(param0: com.tonyodev.fetch2core.Func<java.lang.Boolean>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public cancelAll(param0: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getFetchFileServerCatalog(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2core.FileResource>>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public enqueue(param0: java.util.List<any>, param1: com.tonyodev.fetch2core.Func<java.util.List<kotlin.Pair<com.tonyodev.fetch2.Request,com.tonyodev.fetch2.Error>>>): com.tonyodev.fetch2.Fetch;
					public resume(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public addActiveDownloadsObserver(param0: boolean, param1: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>): com.tonyodev.fetch2.Fetch;
					public resetAutoRetryAttempts(param0: number, param1: boolean, param2: com.tonyodev.fetch2core.Func2<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public cancel(param0: number): com.tonyodev.fetch2.Fetch;
					public renameCompletedDownloadFile(param0: number, param1: string, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public getDownloadsWithStatus(param0: com.tonyodev.fetch2.Status, param1: com.tonyodev.fetch2core.Func<java.util.List<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public retry(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public replaceExtras(param0: number, param1: com.tonyodev.fetch2core.Extras, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param3: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public attachFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public unfreeze(): com.tonyodev.fetch2.Fetch;
					public removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): com.tonyodev.fetch2.Fetch;
					public remove(param0: number, param1: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Download>, param2: com.tonyodev.fetch2core.Func<com.tonyodev.fetch2.Error>): com.tonyodev.fetch2.Fetch;
					public remove(param0: java.util.List<java.lang.Integer>): com.tonyodev.fetch2.Fetch;
					public removeAll(): com.tonyodev.fetch2.Fetch;
				}
				export module FetchImpl {
					export class Companion {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchImpl.Companion>;
						public newInstance(param0: com.tonyodev.fetch2.fetch.FetchModulesBuilder.Modules): com.tonyodev.fetch2.fetch.FetchImpl;
					}
					export class WhenMappings {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchImpl.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class FetchModulesBuilder {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchModulesBuilder>;
					public static INSTANCE: com.tonyodev.fetch2.fetch.FetchModulesBuilder;
					public buildModulesFromPrefs(param0: com.tonyodev.fetch2.FetchConfiguration): com.tonyodev.fetch2.fetch.FetchModulesBuilder.Modules;
					public getMainUIHandler(): globalAndroid.os.Handler;
					public removeNamespaceInstanceReference(param0: string): void;
				}
				export module FetchModulesBuilder {
					export class Holder {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchModulesBuilder.Holder>;
						public getUiHandler(): globalAndroid.os.Handler;
						public getDownloadManagerCoordinator(): com.tonyodev.fetch2.downloader.DownloadManagerCoordinator;
						public component4(): com.tonyodev.fetch2.provider.GroupInfoProvider;
						public hashCode(): number;
						public equals(param0: any): boolean;
						public getDownloadProvider(): com.tonyodev.fetch2.provider.DownloadProvider;
						public toString(): string;
						public getFetchDatabaseManagerWrapper(): com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper;
						public component7(): com.tonyodev.fetch2.fetch.ListenerCoordinator;
						public component8(): com.tonyodev.fetch2.provider.NetworkInfoProvider;
						public getListenerCoordinator(): com.tonyodev.fetch2.fetch.ListenerCoordinator;
						public component1(): com.tonyodev.fetch2core.HandlerWrapper;
						public getHandlerWrapper(): com.tonyodev.fetch2core.HandlerWrapper;
						public getNetworkInfoProvider(): com.tonyodev.fetch2.provider.NetworkInfoProvider;
						public getGroupInfoProvider(): com.tonyodev.fetch2.provider.GroupInfoProvider;
						public component3(): com.tonyodev.fetch2.provider.DownloadProvider;
						public component2(): com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper;
						public component5(): globalAndroid.os.Handler;
						public constructor(param0: com.tonyodev.fetch2core.HandlerWrapper, param1: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper, param2: com.tonyodev.fetch2.provider.DownloadProvider, param3: com.tonyodev.fetch2.provider.GroupInfoProvider, param4: globalAndroid.os.Handler, param5: com.tonyodev.fetch2.downloader.DownloadManagerCoordinator, param6: com.tonyodev.fetch2.fetch.ListenerCoordinator, param7: com.tonyodev.fetch2.provider.NetworkInfoProvider);
						public copy(param0: com.tonyodev.fetch2core.HandlerWrapper, param1: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper, param2: com.tonyodev.fetch2.provider.DownloadProvider, param3: com.tonyodev.fetch2.provider.GroupInfoProvider, param4: globalAndroid.os.Handler, param5: com.tonyodev.fetch2.downloader.DownloadManagerCoordinator, param6: com.tonyodev.fetch2.fetch.ListenerCoordinator, param7: com.tonyodev.fetch2.provider.NetworkInfoProvider): com.tonyodev.fetch2.fetch.FetchModulesBuilder.Holder;
						public component6(): com.tonyodev.fetch2.downloader.DownloadManagerCoordinator;
					}
					export class Modules {
						public static class: java.lang.Class<com.tonyodev.fetch2.fetch.FetchModulesBuilder.Modules>;
						public getUiHandler(): globalAndroid.os.Handler;
						public getPriorityListProcessor(): com.tonyodev.fetch2.helper.PriorityListProcessor<com.tonyodev.fetch2.Download>;
						public getDownloadProvider(): com.tonyodev.fetch2.provider.DownloadProvider;
						public getFetchConfiguration(): com.tonyodev.fetch2.FetchConfiguration;
						public getFetchHandler(): com.tonyodev.fetch2.fetch.FetchHandler;
						public getDownloadInfoUpdater(): com.tonyodev.fetch2.helper.DownloadInfoUpdater;
						public getDownloadManager(): com.tonyodev.fetch2.downloader.DownloadManager;
						public getFetchDatabaseManagerWrapper(): com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper;
						public constructor(param0: com.tonyodev.fetch2.FetchConfiguration, param1: com.tonyodev.fetch2core.HandlerWrapper, param2: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper, param3: com.tonyodev.fetch2.provider.DownloadProvider, param4: com.tonyodev.fetch2.provider.GroupInfoProvider, param5: globalAndroid.os.Handler, param6: com.tonyodev.fetch2.downloader.DownloadManagerCoordinator, param7: com.tonyodev.fetch2.fetch.ListenerCoordinator);
						public getListenerCoordinator(): com.tonyodev.fetch2.fetch.ListenerCoordinator;
						public getHandlerWrapper(): com.tonyodev.fetch2core.HandlerWrapper;
						public getNetworkInfoProvider(): com.tonyodev.fetch2.provider.NetworkInfoProvider;
						public getGroupInfoProvider(): com.tonyodev.fetch2.provider.GroupInfoProvider;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class ListenerCoordinator {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.ListenerCoordinator>;
					public removeListener(param0: number, param1: com.tonyodev.fetch2.FetchListener): void;
					public removeNotificationManager(param0: com.tonyodev.fetch2.FetchNotificationManager): void;
					public getNamespace(): string;
					public getMainListener(): com.tonyodev.fetch2.FetchListener;
					public cancelOnGoingNotifications(param0: com.tonyodev.fetch2.FetchNotificationManager): void;
					public removeFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public addNotificationManager(param0: com.tonyodev.fetch2.FetchNotificationManager): void;
					public clearAll(): void;
					public addListener(param0: number, param1: com.tonyodev.fetch2.FetchListener): void;
					public addFetchObserversForDownload(param0: number, param1: native.Array<com.tonyodev.fetch2core.FetchObserver<com.tonyodev.fetch2.Download>>): void;
					public constructor(param0: string, param1: com.tonyodev.fetch2.provider.GroupInfoProvider, param2: com.tonyodev.fetch2.provider.DownloadProvider, param3: globalAndroid.os.Handler);
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module fetch {
				export class LiveSettings {
					public static class: java.lang.Class<com.tonyodev.fetch2.fetch.LiveSettings>;
					public getNamespace(): string;
					public setDidSanitizeDatabaseOnFirstEntry(param0: boolean): void;
					public constructor(param0: string);
					public execute(param0: kotlin.jvm.functions.Function1<any,kotlin.Unit>): void;
					public getDidSanitizeDatabaseOnFirstEntry(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module helper {
				export class DownloadInfoUpdater {
					public static class: java.lang.Class<com.tonyodev.fetch2.helper.DownloadInfoUpdater>;
					public update(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
					public constructor(param0: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper);
					public getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
					public updateFileBytesInfoAndStatusOnly(param0: com.tonyodev.fetch2.database.DownloadInfo): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module helper {
				export class FileDownloaderDelegate extends com.tonyodev.fetch2.downloader.FileDownloader.Delegate {
					public static class: java.lang.Class<com.tonyodev.fetch2.helper.FileDownloaderDelegate>;
					public onStarted(param0: com.tonyodev.fetch2.Download, param1: java.util.List<any>, param2: number): void;
					public getInterrupted(): boolean;
					public constructor(param0: com.tonyodev.fetch2.helper.DownloadInfoUpdater, param1: com.tonyodev.fetch2.FetchListener, param2: boolean, param3: number);
					public onError(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.Error, param2: java.lang.Throwable): void;
					public setInterrupted(param0: boolean): void;
					public saveDownloadProgress(param0: com.tonyodev.fetch2.Download): void;
					public onDownloadBlockUpdated(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2core.DownloadBlock, param2: number): void;
					public getNewDownloadInfoInstance(): com.tonyodev.fetch2.database.DownloadInfo;
					public onComplete(param0: com.tonyodev.fetch2.Download): void;
					public onProgress(param0: com.tonyodev.fetch2.Download, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module helper {
				export class PriorityListProcessor<T>  extends java.io.Closeable {
					public static class: java.lang.Class<com.tonyodev.fetch2.helper.PriorityListProcessor<any>>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2.helper.PriorityListProcessor<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDownloadConcurrentLimit(): number;
						setDownloadConcurrentLimit(param0: number): void;
						getGlobalNetworkType(): com.tonyodev.fetch2.NetworkType;
						setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
						isPaused(): boolean;
						isStopped(): boolean;
						start(): void;
						stop(): void;
						pause(): void;
						resume(): void;
						getPriorityList(): java.util.List<any>;
						resetBackOffTime(): void;
						sendBackOffResetSignal(): void;
					});
					public constructor();
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
					public isPaused(): boolean;
					public isStopped(): boolean;
					public setDownloadConcurrentLimit(param0: number): void;
					public resetBackOffTime(): void;
					public start(): void;
					public pause(): void;
					public sendBackOffResetSignal(): void;
					public resume(): void;
					public getPriorityList(): java.util.List<any>;
					public stop(): void;
					public getDownloadConcurrentLimit(): number;
					public getGlobalNetworkType(): com.tonyodev.fetch2.NetworkType;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module helper {
				export class PriorityListProcessorImpl extends com.tonyodev.fetch2.helper.PriorityListProcessor<com.tonyodev.fetch2.Download> {
					public static class: java.lang.Class<com.tonyodev.fetch2.helper.PriorityListProcessorImpl>;
					public static Companion: com.tonyodev.fetch2.helper.PriorityListProcessorImpl.Companion;
					public setGlobalNetworkType(param0: com.tonyodev.fetch2.NetworkType): void;
					public isPaused(): boolean;
					public isStopped(): boolean;
					public resetBackOffTime(): void;
					public setDownloadConcurrentLimit(param0: number): void;
					public start(): void;
					public getPriorityList(): java.util.List<com.tonyodev.fetch2.Download>;
					public constructor(param0: com.tonyodev.fetch2core.HandlerWrapper, param1: com.tonyodev.fetch2.provider.DownloadProvider, param2: com.tonyodev.fetch2.downloader.DownloadManager, param3: com.tonyodev.fetch2.provider.NetworkInfoProvider, param4: com.tonyodev.fetch2core.Logger, param5: com.tonyodev.fetch2.fetch.ListenerCoordinator, param6: number, param7: globalAndroid.content.Context, param8: string, param9: com.tonyodev.fetch2.PrioritySort);
					public pause(): void;
					public sendBackOffResetSignal(): void;
					public resume(): void;
					public close(): void;
					public getPriorityList(): java.util.List<any>;
					public stop(): void;
					public getDownloadConcurrentLimit(): number;
					public getGlobalNetworkType(): com.tonyodev.fetch2.NetworkType;
				}
				export module PriorityListProcessorImpl {
					export class Companion {
						public static class: java.lang.Class<com.tonyodev.fetch2.helper.PriorityListProcessorImpl.Companion>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module model {
				export class FetchGroupInfo extends com.tonyodev.fetch2.FetchGroup {
					public static class: java.lang.Class<com.tonyodev.fetch2.model.FetchGroupInfo>;
					public getDeletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getNamespace(): string;
					public setDownloadingDownloads(param0: java.util.List<any>): void;
					public getCancelledDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public setDownloads(param0: java.util.List<any>): void;
					public setRemovedDownloads(param0: java.util.List<any>): void;
					public update(param0: java.util.List<any>, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): void;
					public constructor(param0: number, param1: string);
					public getAddedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getCompletedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public setAddedDownloads(param0: java.util.List<any>): void;
					public getPausedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public setPausedDownloads(param0: java.util.List<any>): void;
					public removeFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
					public setCompletedDownloads(param0: java.util.List<any>): void;
					public setDeletedDownloads(param0: java.util.List<any>): void;
					public getQueuedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getId(): number;
					public getGroupDownloadProgress(): number;
					public getObservers(): java.util.Set<com.tonyodev.fetch2core.FetchObserver<java.util.List<com.tonyodev.fetch2.Download>>>;
					public getRemovedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public addFetchGroupObservers(param0: native.Array<com.tonyodev.fetch2.FetchGroupObserver>): void;
					public getFailedDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public setCancelledDownloads(param0: java.util.List<any>): void;
					public setQueuedDownloads(param0: java.util.List<any>): void;
					public getDownloadingDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public setFailedDownloads(param0: java.util.List<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module provider {
				export class DownloadProvider {
					public static class: java.lang.Class<com.tonyodev.fetch2.provider.DownloadProvider>;
					public getDownloads(param0: java.util.List<java.lang.Integer>): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownload(param0: number): com.tonyodev.fetch2.Download;
					public getByStatus(param0: com.tonyodev.fetch2.Status): java.util.List<com.tonyodev.fetch2.Download>;
					public getDownloads(): java.util.List<com.tonyodev.fetch2.Download>;
					public getByGroup(param0: number): java.util.List<com.tonyodev.fetch2.Download>;
					public constructor(param0: com.tonyodev.fetch2.database.FetchDatabaseManagerWrapper);
					public getPendingDownloadsSorted(param0: com.tonyodev.fetch2.PrioritySort): java.util.List<com.tonyodev.fetch2.Download>;
					public getByGroupReplace(param0: number, param1: com.tonyodev.fetch2.Download): java.util.List<com.tonyodev.fetch2.Download>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module provider {
				export class GroupInfoProvider {
					public static class: java.lang.Class<com.tonyodev.fetch2.provider.GroupInfoProvider>;
					public getGroupInfo(param0: number, param1: com.tonyodev.fetch2core.Reason): com.tonyodev.fetch2.model.FetchGroupInfo;
					public postGroupReplace(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): void;
					public clean(): void;
					public constructor(param0: string, param1: com.tonyodev.fetch2.provider.DownloadProvider);
					public clear(): void;
					public getGroupReplace(param0: number, param1: com.tonyodev.fetch2.Download, param2: com.tonyodev.fetch2core.Reason): com.tonyodev.fetch2.FetchGroup;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module provider {
				export class NetworkInfoProvider {
					public static class: java.lang.Class<com.tonyodev.fetch2.provider.NetworkInfoProvider>;
					public isNetworkAvailable(): boolean;
					public registerNetworkChangeListener(param0: com.tonyodev.fetch2.provider.NetworkInfoProvider.NetworkChangeListener): void;
					public isOnAllowedNetwork(param0: com.tonyodev.fetch2.NetworkType): boolean;
					public unregisterAllNetworkChangeListeners(): void;
					public unregisterNetworkChangeListener(param0: com.tonyodev.fetch2.provider.NetworkInfoProvider.NetworkChangeListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: string);
				}
				export module NetworkInfoProvider {
					export class NetworkChangeListener {
						public static class: java.lang.Class<com.tonyodev.fetch2.provider.NetworkInfoProvider.NetworkChangeListener>;
						/**
						 * Constructs a new instance of the com.tonyodev.fetch2.provider.NetworkInfoProvider$NetworkChangeListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onNetworkChanged(): void;
						});
						public constructor();
						public onNetworkChanged(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module util {
				export class ActiveDownloadInfo {
					public static class: java.lang.Class<com.tonyodev.fetch2.util.ActiveDownloadInfo>;
					public equals(param0: any): boolean;
					public toString(): string;
					public getFetchObserver(): com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>;
					public constructor(param0: com.tonyodev.fetch2core.FetchObserver<java.lang.Boolean>, param1: boolean);
					public getIncludeAddedDownloads(): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module util {
				export class FetchDefaults {
					public static class: java.lang.Class<com.tonyodev.fetch2.util.FetchDefaults>;
					public static DEFAULT_GROUP_ID: number;
					public static DEFAULT_UNIQUE_IDENTIFIER: number;
					public static DEFAULT_DOWNLOAD_SPEED_REPORTING_INTERVAL_IN_MILLISECONDS: number;
					public static DEFAULT_HAS_ACTIVE_DOWNLOADS_INTERVAL_IN_MILLISECONDS: number;
					public static DEFAULT_CREATE_FILE_ON_ENQUEUE: boolean;
					public static DEFAULT_CONCURRENT_LIMIT: number;
					public static EMPTY_JSON_OBJECT_STRING: string;
					public static DEFAULT_PRIORITY_QUEUE_INTERVAL_IN_MILLISECONDS: number;
					public static DEFAULT_AUTO_START: boolean;
					public static DEFAULT_RETRY_ON_NETWORK_GAIN: boolean;
					public static DEFAULT_FILE_SLICE_NO_LIMIT_SET: number;
					public static DEFAULT_INSTANCE_NAMESPACE: string;
					public static DEFAULT_HASH_CHECK_ENABLED: boolean;
					public static DEFAULT_FILE_EXIST_CHECKS: boolean;
					public static DEFAULT_AUTO_RETRY_ATTEMPTS: number;
					public static DEFAULT_GLOBAL_AUTO_RETRY_ATTEMPTS: number;
					public static DEFAULT_ENABLE_LISTENER_NOTIFY_ON_ATTACHED: boolean;
					public static DEFAULT_ENABLE_LISTENER_NOTIFY_ON_REQUEST_UPDATED: boolean;
					public static DEFAULT_ENABLE_LISTENER_AUTOSTART_ON_ATTACHED: boolean;
					public static DEFAULT_DOWNLOAD_ON_ENQUEUE: boolean;
					public static DEFAULT_PREALLOCATE_FILE_ON_CREATE: boolean;
					public static DEFAULT_NOTIFICATION_TIMEOUT_AFTER_RESET: number;
					public static DEFAULT_NOTIFICATION_TIMEOUT_AFTER: number;
					public static getDefaultNetworkType(): com.tonyodev.fetch2.NetworkType;
					public static getDefaultFileServerDownloader(): com.tonyodev.fetch2core.FileServerDownloader;
					public static getDefaultGlobalNetworkType(): com.tonyodev.fetch2.NetworkType;
					public static getDefaultPriority(): com.tonyodev.fetch2.Priority;
					public static getDefaultDownloader(): com.tonyodev.fetch2core.Downloader<any,any>;
					public static getDefaultLogger(): com.tonyodev.fetch2core.Logger;
					public static getDefaultPrioritySort(): com.tonyodev.fetch2.PrioritySort;
					public static getDefaultEnqueueAction(): com.tonyodev.fetch2.EnqueueAction;
					public static getDefaultNoError(): com.tonyodev.fetch2.Error;
					public static getDefaultStatus(): com.tonyodev.fetch2.Status;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module util {
				export class FetchTypeConverterExtensions {
					public static class: java.lang.Class<com.tonyodev.fetch2.util.FetchTypeConverterExtensions>;
					public static toDownloadInfo(param0: com.tonyodev.fetch2.Request, param1: com.tonyodev.fetch2.database.DownloadInfo): com.tonyodev.fetch2.database.DownloadInfo;
					public static toDownloadInfo(param0: com.tonyodev.fetch2.CompletedDownload, param1: com.tonyodev.fetch2.database.DownloadInfo): com.tonyodev.fetch2.database.DownloadInfo;
					public static toDownloadInfo(param0: com.tonyodev.fetch2.Download, param1: com.tonyodev.fetch2.database.DownloadInfo): com.tonyodev.fetch2.database.DownloadInfo;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module util {
				export class FetchUtils {
					public static class: java.lang.Class<com.tonyodev.fetch2.util.FetchUtils>;
					public static canResumeDownload(param0: com.tonyodev.fetch2.Download): boolean;
					public static saveCurrentSliceCount(param0: number, param1: number, param2: string): void;
					public static canCancelDownload(param0: com.tonyodev.fetch2.Download): boolean;
					public static getFileSliceInfo(param0: number, param1: number): com.tonyodev.fetch2core.FileSliceInfo;
					public static getRequestForDownload(param0: com.tonyodev.fetch2.Download, param1: number, param2: number, param3: string, param4: number): com.tonyodev.fetch2core.Downloader.ServerRequest;
					public static getSavedDownloadedInfo(param0: number, param1: number, param2: string): number;
					public static getPreviousSliceCount(param0: number, param1: string): number;
					public static getDownloadedInfoFilePath(param0: number, param1: number, param2: string): string;
					public static deleteAllInFolderForId(param0: number, param1: string): void;
					public static getServerRequestFromRequest(param0: com.tonyodev.fetch2.Request): com.tonyodev.fetch2core.Downloader.ServerRequest;
					public static getMetaFilePath(param0: number, param1: string): string;
					public static canPauseDownload(param0: com.tonyodev.fetch2.Download): boolean;
					public static getRequestForDownload(param0: com.tonyodev.fetch2.Download, param1: string): com.tonyodev.fetch2core.Downloader.ServerRequest;
					public static canRetryDownload(param0: com.tonyodev.fetch2.Download): boolean;
					public static getCatalogServerRequestFromRequest(param0: com.tonyodev.fetch2.Request): com.tonyodev.fetch2core.Downloader.ServerRequest;
					public static awaitFinishOrTimeout(param0: number, param1: com.tonyodev.fetch2.fetch.FetchHandler): void;
				}
				export module FetchUtils {
					export class WhenMappings {
						public static class: java.lang.Class<com.tonyodev.fetch2.util.FetchUtils.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2 {
			export module util {
				export class NotificationUtilsKt {
					public static class: java.lang.Class<com.tonyodev.fetch2.util.NotificationUtilsKt>;
					public static onDownloadNotificationActionTriggered(param0: globalAndroid.content.Context, param1: globalAndroid.content.Intent, param2: com.tonyodev.fetch2.FetchNotificationManager): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class AverageCalculator {
				public static class: java.lang.Class<com.tonyodev.fetch2core.AverageCalculator>;
				public getAverage(): number;
				public getDiscardLimit(): number;
				public getLastInputValue(): number;
				public constructor();
				public getFirstInputValue(): number;
				public getMovingAverageWithWeightOnRecentValues(param0: number): number;
				public getMovingAverageWithWeightOnOlderValues(): number;
				public getMovingAverageWithWeightOnRecentValues(): number;
				public add(param0: number): void;
				public clear(): void;
				public hasInputValue(param0: number): boolean;
				public getMovingAverageWithWeightOnOlderValues(param0: number): number;
				public constructor(param0: number);
				public count(): number;
				public getValues(): java.util.List<java.lang.Double>;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class BuildConfig {
				public static class: java.lang.Class<com.tonyodev.fetch2core.BuildConfig>;
				public static DEBUG: boolean;
				public static APPLICATION_ID: string;
				public static BUILD_TYPE: string;
				public static FLAVOR: string;
				public static VERSION_CODE: number;
				public static VERSION_NAME: string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class DefaultStorageResolver extends com.tonyodev.fetch2core.StorageResolver {
				public static class: java.lang.Class<com.tonyodev.fetch2core.DefaultStorageResolver>;
				public deleteFile(param0: string): boolean;
				public renameFile(param0: string, param1: string): boolean;
				public constructor(param0: globalAndroid.content.Context, param1: string);
				public createFile(param0: string, param1: boolean): string;
				public fileExists(param0: string): boolean;
				public getContext(): globalAndroid.content.Context;
				public getRequestOutputResourceWrapper(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): com.tonyodev.fetch2core.OutputResourceWrapper;
				public getDefaultTempDir(): string;
				public preAllocateFile(param0: string, param1: number): boolean;
				public getDirectoryForFileDownloaderTypeParallel(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): string;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class DownloadBlock {
				public static class: java.lang.Class<com.tonyodev.fetch2core.DownloadBlock>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.DownloadBlock interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getDownloadId(): number;
					getBlockPosition(): number;
					getStartByte(): number;
					getEndByte(): number;
					getDownloadedBytes(): number;
					getProgress(): number;
					copy(): com.tonyodev.fetch2core.DownloadBlock;
				});
				public constructor();
				public getBlockPosition(): number;
				public getEndByte(): number;
				public getProgress(): number;
				public getStartByte(): number;
				public copy(): com.tonyodev.fetch2core.DownloadBlock;
				public getDownloadId(): number;
				public getDownloadedBytes(): number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class DownloadBlockInfo extends com.tonyodev.fetch2core.DownloadBlock {
				public static class: java.lang.Class<com.tonyodev.fetch2core.DownloadBlockInfo>;
				public static CREATOR: com.tonyodev.fetch2core.DownloadBlockInfo.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getBlockPosition(): number;
				public setDownloadId(param0: number): void;
				public getEndByte(): number;
				public setStartByte(param0: number): void;
				public toString(): string;
				public constructor();
				public setBlockPosition(param0: number): void;
				public setEndByte(param0: number): void;
				public getProgress(): number;
				public hashCode(): number;
				public getStartByte(): number;
				public copy(): com.tonyodev.fetch2core.DownloadBlock;
				public equals(param0: any): boolean;
				public describeContents(): number;
				public getDownloadId(): number;
				public getDownloadedBytes(): number;
				public setDownloadedBytes(param0: number): void;
			}
			export module DownloadBlockInfo {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.DownloadBlockInfo> {
					public static class: java.lang.Class<com.tonyodev.fetch2core.DownloadBlockInfo.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.DownloadBlockInfo;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2core.DownloadBlockInfo>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Downloader<T, R>  extends java.io.Closeable {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Downloader<any,any>>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.Downloader<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
					execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
					disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
					getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
					getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
					verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
					getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
					onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
					getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
					getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
					getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
					getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				});
				public constructor();
				public getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
				public getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
				public getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
				public execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
				public getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
				public getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
				public onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
				public getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
				public disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
			}
			export module Downloader {
				export class FileDownloaderType {
					public static class: java.lang.Class<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
					public static SEQUENTIAL: com.tonyodev.fetch2core.Downloader.FileDownloaderType;
					public static PARALLEL: com.tonyodev.fetch2core.Downloader.FileDownloaderType;
					public static valueOf(param0: string): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
					public static values(): native.Array<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				}
				export class Response {
					public static class: java.lang.Class<com.tonyodev.fetch2core.Downloader.Response>;
					public constructor(param0: number, param1: boolean, param2: number, param3: java.io.InputStream, param4: com.tonyodev.fetch2core.Downloader.ServerRequest, param5: string, param6: java.util.Map<string,any>, param7: boolean, param8: string);
					public getErrorResponse(): string;
					public isSuccessful(): boolean;
					public getResponseHeaders(): java.util.Map<string,java.util.List<string>>;
					public getAcceptsRanges(): boolean;
					public getByteStream(): java.io.InputStream;
					public getHash(): string;
					public getRequest(): com.tonyodev.fetch2core.Downloader.ServerRequest;
					public getCode(): number;
					public getContentLength(): number;
				}
				export class ServerRequest {
					public static class: java.lang.Class<com.tonyodev.fetch2core.Downloader.ServerRequest>;
					public getHeaders(): java.util.Map<string,string>;
					public constructor(param0: number, param1: string, param2: java.util.Map<string,string>, param3: string, param4: globalAndroid.net.Uri, param5: string, param6: number, param7: string, param8: com.tonyodev.fetch2core.Extras, param9: boolean, param10: string, param11: number);
					public getId(): number;
					public getFile(): string;
					public getExtras(): com.tonyodev.fetch2core.Extras;
					public getSegment(): number;
					public getTag(): string;
					public getRedirected(): boolean;
					public getRequestMethod(): string;
					public getRedirectUrl(): string;
					public getUrl(): string;
					public getIdentifier(): number;
					public getFileUri(): globalAndroid.net.Uri;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Extras {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Extras>;
				public static CREATOR: com.tonyodev.fetch2core.Extras.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public getBoolean(param0: string, param1: boolean): boolean;
				public getInt(param0: string, param1: number): number;
				public toString(): string;
				public toMutableExtras(): com.tonyodev.fetch2core.MutableExtras;
				public getFloat(param0: string, param1: number): number;
				public getString(param0: string, param1: string): string;
				public static getEmptyExtras(): com.tonyodev.fetch2core.Extras;
				public constructor(param0: java.util.Map<string,string>);
				public getLong(param0: string, param1: number): number;
				public toJSONObject(): org.json.JSONObject;
				public getMap(): java.util.Map<string,string>;
				public getSize(): number;
				public hashCode(): number;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public getDouble(param0: string, param1: number): number;
				public isEmpty(): boolean;
				public toJSONString(): string;
				public getData(): java.util.Map<string,string>;
				public copy(): com.tonyodev.fetch2core.Extras;
				public isNotEmpty(): boolean;
			}
			export module Extras {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.Extras> {
					public static class: java.lang.Class<com.tonyodev.fetch2core.Extras.CREATOR>;
					public getEmptyExtras(): com.tonyodev.fetch2core.Extras;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.Extras;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2core.Extras>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchAndroidExtensions {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchAndroidExtensions>;
				public static isOnMeteredConnection(param0: globalAndroid.content.Context): boolean;
				public static isOnWiFi(param0: globalAndroid.content.Context): boolean;
				public static isNetworkAvailable(param0: globalAndroid.content.Context): boolean;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchCoreDefaults {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchCoreDefaults>;
				public static DEFAULT_TAG: string;
				public static DEFAULT_LOGGING_ENABLED: boolean;
				public static DEFAULT_PROGRESS_REPORTING_INTERVAL_IN_MILLISECONDS: number;
				public static DEFAULT_BUFFER_SIZE: number;
				public static DEFAULT_PERSISTENT_TIME_OUT_IN_MILLISECONDS: number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchCoreUtils {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchCoreUtils>;
				public static GET_REQUEST_METHOD: string;
				public static HEAD_REQUEST_METHOD: string;
				public static HEADER_ACCEPT_RANGE: string;
				public static HEADER_ACCEPT_RANGE_LEGACY: string;
				public static HEADER_ACCEPT_RANGE_COMPAT: string;
				public static HEADER_CONTENT_LENGTH: string;
				public static HEADER_CONTENT_LENGTH_LEGACY: string;
				public static HEADER_CONTENT_LENGTH_COMPAT: string;
				public static HEADER_TRANSFER_ENCODING: string;
				public static HEADER_TRANSFER_LEGACY: string;
				public static HEADER_TRANSFER_ENCODING_COMPAT: string;
				public static HEADER_CONTENT_RANGE: string;
				public static HEADER_CONTENT_RANGE_LEGACY: string;
				public static HEADER_CONTENT_RANGE_COMPAT: string;
				public static calculateEstimatedTimeRemainingInMilliseconds(param0: number, param1: number, param2: number): number;
				public static getHeaderValue(param0: java.util.Map<string,any>, param1: native.Array<string>): string;
				public static getFileTempDir(param0: globalAndroid.content.Context): string;
				public static isParallelDownloadingSupported(param0: number, param1: java.util.Map<string,any>): boolean;
				public static getRangeForFetchFileServerRequest(param0: string): kotlin.Pair<java.lang.Long,java.lang.Long>;
				public static getDefaultCookieManager(): java.net.CookieManager;
				public static acceptRanges(param0: number, param1: java.util.Map<string,any>): boolean;
				public static isFetchFileServerUrl(param0: string): boolean;
				public static getFetchFileServerPort(param0: string): number;
				public static getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader<any,any>): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public static getRefererFromUrl(param0: string): string;
				public static getFileResourceIdFromUrl(param0: string): string;
				public static getContentLengthFromHeader(param0: java.util.Map<string,any>, param1: number): number;
				public static hasAllowedTimeExpired(param0: number, param1: number, param2: number): boolean;
				public static hasIntervalTimeElapsed(param0: number, param1: number, param2: number): boolean;
				public static getIncrementedFileIfOriginalExists(param0: string): java.io.File;
				public static writeLongToFile(param0: string, param1: number): void;
				public static deleteFile(param0: java.io.File): boolean;
				public static copyStreamToString(param0: java.io.InputStream, param1: boolean): string;
				public static getFile(param0: string): java.io.File;
				public static copyDownloadResponseNoStream(param0: com.tonyodev.fetch2core.Downloader.Response): com.tonyodev.fetch2core.Downloader.Response;
				public static getSimpleInterruptMonitor(): com.tonyodev.fetch2core.InterruptMonitor;
				public static renameFile(param0: java.io.File, param1: java.io.File): boolean;
				public static calculateProgress(param0: number, param1: number): number;
				public static getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader<any,any>): number;
				public static getFetchFileServerHostAddress(param0: string): string;
				public static getFileMd5String(param0: string): string;
				public static getLongDataFromFile(param0: string): java.lang.Long;
				public static createFile(param0: java.io.File): void;
				public static isUriPath(param0: string): boolean;
				public static getFileUri(param0: string): globalAndroid.net.Uri;
				public static getMd5String(param0: native.Array<number>, param1: number, param2: number): string;
				public static getUniqueId(param0: string, param1: string): number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchErrorStrings {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchErrorStrings>;
				public static DOWNLOAD_NOT_FOUND: string;
				public static FAILED_TO_ENQUEUE_REQUEST: string;
				public static FAILED_TO_ENQUEUE_REQUEST_FILE_FOUND: string;
				public static EMPTY_RESPONSE_BODY: string;
				public static RESPONSE_NOT_SUCCESSFUL: string;
				public static UNKNOWN_ERROR: string;
				public static FNC: string;
				public static ENOENT: string;
				public static ETIMEDOUT: string;
				public static IO404: string;
				public static NO_ADDRESS_HOSTNAME: string;
				public static CONNECTION_TIMEOUT: string;
				public static HOST_RESOLVE_ISSUE: string;
				public static EACCES: string;
				public static ENOSPC: string;
				public static DATABASE_DISK_FULL: string;
				public static FETCH_DATABASE_ERROR: string;
				public static UNIQUE_ID_DATABASE: string;
				public static FAILED_TO_CONNECT: string;
				public static SOFTWARE_ABORT_CONNECTION: string;
				public static READ_TIME_OUT: string;
				public static GLOBAL_FETCH_CONFIGURATION_NOT_SET: string;
				public static INVALID_CONTENT_HASH: string;
				public static REQUEST_WITH_FILE_PATH_ALREADY_EXIST: string;
				public static DOWNLOAD_INCOMPLETE: string;
				public static FAILED_TO_UPDATE_REQUEST: string;
				public static FAILED_TO_ADD_COMPLETED_DOWNLOAD: string;
				public static FETCH_FILE_SERVER_INVALID_RESPONSE_TYPE: string;
				public static REQUEST_DOES_NOT_EXIST: string;
				public static NO_NETWORK_CONNECTION: string;
				public static FILE_NOT_FOUND: string;
				public static FETCH_FILE_SERVER_URL_INVALID: string;
				public static ENQUEUED_REQUESTS_ARE_NOT_DISTINCT: string;
				public static ENQUEUE_NOT_SUCCESSFUL: string;
				public static AWAIT_CALL_ON_UI_THREAD: string;
				public static BLOCKING_CALL_ON_UI_THREAD: string;
				public static FILE_CANNOT_BE_RENAMED: string;
				public static FAILED_RENAME_FILE_ASSOCIATED_WITH_INCOMPLETE_DOWNLOAD: string;
				public static FILE_ALLOCATION_ERROR: string;
				public static CLEAR_TEXT_NETWORK_VIOLATION: string;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchFileServerUriBuilder {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchFileServerUriBuilder>;
				public static FETCH_URI_SCHEME: string;
				public static Companion: com.tonyodev.fetch2core.FetchFileServerUriBuilder.Companion;
				public setHostAddress(param0: string): com.tonyodev.fetch2core.FetchFileServerUriBuilder;
				public setFileResourceIdentifier(param0: number): com.tonyodev.fetch2core.FetchFileServerUriBuilder;
				public build(): globalAndroid.net.Uri;
				public setFileResourceIdentifier(param0: string): com.tonyodev.fetch2core.FetchFileServerUriBuilder;
				public setHostInetAddress(param0: string, param1: number): com.tonyodev.fetch2core.FetchFileServerUriBuilder;
				public toString(): string;
				public setHostPort(param0: number): com.tonyodev.fetch2core.FetchFileServerUriBuilder;
				public constructor();
			}
			export module FetchFileServerUriBuilder {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2core.FetchFileServerUriBuilder.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchLogger extends com.tonyodev.fetch2core.Logger {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchLogger>;
				public e(param0: string): void;
				public d(param0: string, param1: java.lang.Throwable): void;
				public d(param0: string): void;
				public getEnabled(): boolean;
				public getTag(): string;
				public constructor(param0: boolean, param1: string);
				public setTag(param0: string): void;
				public setEnabled(param0: boolean): void;
				public e(param0: string, param1: java.lang.Throwable): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FetchObserver<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FetchObserver<any>>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.FetchObserver<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					onChanged(param0: T, param1: com.tonyodev.fetch2core.Reason): void;
				});
				public constructor();
				public onChanged(param0: T, param1: com.tonyodev.fetch2core.Reason): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FileResource {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FileResource>;
				public static CREATOR: com.tonyodev.fetch2core.FileResource.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public setName(param0: string): void;
				public setFile(param0: string): void;
				public setExtras(param0: com.tonyodev.fetch2core.Extras): void;
				public setMd5(param0: string): void;
				public getId(): number;
				public setLength(param0: number): void;
				public getName(): string;
				public getFile(): string;
				public toString(): string;
				public getExtras(): com.tonyodev.fetch2core.Extras;
				public getLength(): number;
				public constructor();
				public getMd5(): string;
				public hashCode(): number;
				public setId(param0: number): void;
				public equals(param0: any): boolean;
				public describeContents(): number;
			}
			export module FileResource {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.FileResource> {
					public static class: java.lang.Class<com.tonyodev.fetch2core.FileResource.CREATOR>;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2core.FileResource>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.FileResource;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FileServerDownloader extends com.tonyodev.fetch2core.Downloader<com.tonyodev.fetch2core.server.FetchFileResourceTransporter,com.tonyodev.fetch2core.FileServerDownloader.TransporterRequest> {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FileServerDownloader>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.FileServerDownloader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getFetchFileServerCatalog(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.List<com.tonyodev.fetch2core.FileResource>;
					onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
					execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
					disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
					getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
					getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
					verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
					getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
					onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
					getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
					getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
					getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
					getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				});
				public constructor();
				public getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
				public verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
				public onPreClientExecute(param0: any, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): any;
				public getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
				public getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
				public getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
				public getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
				public getFetchFileServerCatalog(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.List<com.tonyodev.fetch2core.FileResource>;
				public getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
				public disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
			}
			export module FileServerDownloader {
				export class TransporterRequest {
					public static class: java.lang.Class<com.tonyodev.fetch2core.FileServerDownloader.TransporterRequest>;
					public equals(param0: any): boolean;
					public setFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
					public toString(): string;
					public getInetSocketAddress(): java.net.InetSocketAddress;
					public constructor();
					public setInetSocketAddress(param0: java.net.InetSocketAddress): void;
					public getFileRequest(): com.tonyodev.fetch2core.server.FileRequest;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FileSlice {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FileSlice>;
				public getDownloaded(): number;
				public component4(): number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
				public component2(): number;
				public getId(): number;
				public setDownloaded(param0: number): void;
				public copy(param0: number, param1: number, param2: number, param3: number, param4: number): com.tonyodev.fetch2core.FileSlice;
				public component1(): number;
				public getPosition(): number;
				public toString(): string;
				public getStartBytes(): number;
				public constructor();
				public component3(): number;
				public component5(): number;
				public isDownloaded(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public getEndBytes(): number;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class FileSliceInfo {
				public static class: java.lang.Class<com.tonyodev.fetch2core.FileSliceInfo>;
				public constructor(param0: number, param1: number);
				public getSlicingCount(): number;
				public component2(): number;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public component1(): number;
				public getBytesPerFileSlice(): number;
				public toString(): string;
				public copy(param0: number, param1: number): com.tonyodev.fetch2core.FileSliceInfo;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Func<R>  extends java.lang.Object {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Func<any>>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.Func<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: R): void;
				});
				public constructor();
				public call(param0: R): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Func2<R>  extends java.lang.Object {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Func2<any>>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.Func2<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: R): void;
				});
				public constructor();
				public call(param0: R): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class HandlerWrapper {
				public static class: java.lang.Class<com.tonyodev.fetch2core.HandlerWrapper>;
				public close(): void;
				public post(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
				public decrementUsageCounter(): void;
				public getWorkTaskLooper(): globalAndroid.os.Looper;
				public usageCount(): number;
				public postDelayed(param0: java.lang.Runnable, param1: number): void;
				public getLooper(): globalAndroid.os.Looper;
				public removeCallbacks(param0: java.lang.Runnable): void;
				public incrementUsageCounter(): void;
				public hashCode(): number;
				public getNamespace(): string;
				public equals(param0: any): boolean;
				public constructor(param0: string, param1: globalAndroid.os.Handler);
				public executeWorkerTask(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export abstract class InputResourceWrapper {
				public static class: java.lang.Class<com.tonyodev.fetch2core.InputResourceWrapper>;
				public setReadOffset(param0: number): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class InterruptMonitor {
				public static class: java.lang.Class<com.tonyodev.fetch2core.InterruptMonitor>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.InterruptMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isInterrupted(): boolean;
				});
				public constructor();
				public isInterrupted(): boolean;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Logger {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Logger>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.Logger interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getEnabled(): boolean;
					setEnabled(param0: boolean): void;
					d(param0: string): void;
					d(param0: string, param1: java.lang.Throwable): void;
					e(param0: string): void;
					e(param0: string, param1: java.lang.Throwable): void;
				});
				public constructor();
				public e(param0: string): void;
				public d(param0: string, param1: java.lang.Throwable): void;
				public d(param0: string): void;
				public getEnabled(): boolean;
				public setEnabled(param0: boolean): void;
				public e(param0: string, param1: java.lang.Throwable): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class MutableExtras extends com.tonyodev.fetch2core.Extras {
				public static class: java.lang.Class<com.tonyodev.fetch2core.MutableExtras>;
				public static CREATOR: com.tonyodev.fetch2core.MutableExtras.CREATOR;
				public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
				public putInt(param0: string, param1: number): void;
				public putLong(param0: string, param1: number): void;
				public toString(): string;
				public constructor();
				public constructor(param0: java.util.Map<string,string>);
				public putString(param0: string, param1: string): void;
				public hashCode(): number;
				public putDouble(param0: string, param1: number): void;
				public clear(): void;
				public describeContents(): number;
				public equals(param0: any): boolean;
				public putFloat(param0: string, param1: number): void;
				public putBoolean(param0: string, param1: boolean): void;
				public getMutableData(): java.util.Map<string,string>;
				public toExtras(): com.tonyodev.fetch2core.Extras;
			}
			export module MutableExtras {
				export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.MutableExtras> {
					public static class: java.lang.Class<com.tonyodev.fetch2core.MutableExtras.CREATOR>;
					public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.MutableExtras;
					public newArray(param0: number): native.Array<com.tonyodev.fetch2core.MutableExtras>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export abstract class OutputResourceWrapper {
				public static class: java.lang.Class<com.tonyodev.fetch2core.OutputResourceWrapper>;
				public write(param0: native.Array<number>, param1: number, param2: number): void;
				public setWriteOffset(param0: number): void;
				public flush(): void;
				public constructor();
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class Reason {
				public static class: java.lang.Class<com.tonyodev.fetch2core.Reason>;
				public static NOT_SPECIFIED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_ADDED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_QUEUED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_STARTED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_WAITING_ON_NETWORK: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_PROGRESS_CHANGED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_COMPLETED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_ERROR: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_PAUSED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_RESUMED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_CANCELLED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_REMOVED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_DELETED: com.tonyodev.fetch2core.Reason;
				public static DOWNLOAD_BLOCK_UPDATED: com.tonyodev.fetch2core.Reason;
				public static OBSERVER_ATTACHED: com.tonyodev.fetch2core.Reason;
				public static REPORTING: com.tonyodev.fetch2core.Reason;
				public static Companion: com.tonyodev.fetch2core.Reason.Companion;
				public static values(): native.Array<com.tonyodev.fetch2core.Reason>;
				public static valueOf(param0: string): com.tonyodev.fetch2core.Reason;
				public getValue(): number;
				public static valueOf(param0: number): com.tonyodev.fetch2core.Reason;
			}
			export module Reason {
				export class Companion {
					public static class: java.lang.Class<com.tonyodev.fetch2core.Reason.Companion>;
					public valueOf(param0: number): com.tonyodev.fetch2core.Reason;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class StorageResolver {
				public static class: java.lang.Class<com.tonyodev.fetch2core.StorageResolver>;
				/**
				 * Constructs a new instance of the com.tonyodev.fetch2core.StorageResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					createFile(param0: string, param1: boolean): string;
					preAllocateFile(param0: string, param1: number): boolean;
					deleteFile(param0: string): boolean;
					getRequestOutputResourceWrapper(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): com.tonyodev.fetch2core.OutputResourceWrapper;
					getDirectoryForFileDownloaderTypeParallel(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): string;
					fileExists(param0: string): boolean;
					renameFile(param0: string, param1: string): boolean;
				});
				public constructor();
				public deleteFile(param0: string): boolean;
				public renameFile(param0: string, param1: string): boolean;
				public createFile(param0: string, param1: boolean): string;
				public fileExists(param0: string): boolean;
				public getRequestOutputResourceWrapper(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): com.tonyodev.fetch2core.OutputResourceWrapper;
				public preAllocateFile(param0: string, param1: number): boolean;
				public getDirectoryForFileDownloaderTypeParallel(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): string;
			}
			export module StorageResolver {
				export class DefaultImpls {
					public static class: java.lang.Class<com.tonyodev.fetch2core.StorageResolver.DefaultImpls>;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export class StorageResolverHelper {
				public static class: java.lang.Class<com.tonyodev.fetch2core.StorageResolverHelper>;
				public static getOutputResourceWrapper(param0: globalAndroid.os.ParcelFileDescriptor): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: java.io.FileOutputStream, param1: globalAndroid.os.ParcelFileDescriptor): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: string): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static allocateFile(param0: string, param1: number, param2: globalAndroid.content.Context): void;
				public static createFileAtPath(param0: string, param1: boolean, param2: globalAndroid.content.Context): string;
				public static createLocalFile(param0: string, param1: boolean): string;
				public static getOutputResourceWrapper(param0: string, param1: globalAndroid.content.ContentResolver): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: java.io.FileDescriptor, param1: globalAndroid.os.ParcelFileDescriptor): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: java.io.RandomAccessFile): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: java.io.FileDescriptor): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static getOutputResourceWrapper(param0: java.io.File): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static allocateParcelFileDescriptor(param0: globalAndroid.os.ParcelFileDescriptor, param1: number): void;
				public static getOutputResourceWrapper(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static renameFile(param0: string, param1: string, param2: globalAndroid.content.Context): boolean;
				public static deleteFile(param0: string, param1: globalAndroid.content.Context): boolean;
				public static getOutputResourceWrapper(param0: java.io.FileOutputStream): com.tonyodev.fetch2core.OutputResourceWrapper;
				public static allocateFile(param0: java.io.File, param1: number): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export module server {
				export class FetchFileResourceTransporter extends com.tonyodev.fetch2core.server.FileResourceTransporter {
					public static class: java.lang.Class<com.tonyodev.fetch2core.server.FetchFileResourceTransporter>;
					public connect(param0: java.net.SocketAddress): void;
					public readRawBytes(param0: native.Array<number>, param1: number, param2: number): number;
					public constructor(param0: java.net.Socket);
					public receiveFileRequest(): com.tonyodev.fetch2core.server.FileRequest;
					public receiveFileResponse(): com.tonyodev.fetch2core.server.FileResponse;
					public sendFileResponse(param0: com.tonyodev.fetch2core.server.FileResponse): void;
					public sendRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public constructor();
					public close(): void;
					public getOutputStream(): java.io.OutputStream;
					public getInputStream(): java.io.InputStream;
					public sendFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
					public isClosed(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export module server {
				export class FileRequest {
					public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileRequest>;
					public static TYPE_INVALID: number;
					public static TYPE_PING: number;
					public static TYPE_FILE: number;
					public static TYPE_CATALOG: number;
					public static CATALOG_ID: number;
					public static CATALOG_NAME: string;
					public static CATALOG_FILE: string;
					public static FIELD_TYPE: string;
					public static FIELD_FILE_RESOURCE_ID: string;
					public static FIELD_RANGE_START: string;
					public static FIELD_RANGE_END: string;
					public static FIELD_AUTHORIZATION: string;
					public static FIELD_CLIENT: string;
					public static FIELD_EXTRAS: string;
					public static FIELD_PAGE: string;
					public static FIELD_SIZE: string;
					public static FIELD_PERSIST_CONNECTION: string;
					public static CREATOR: com.tonyodev.fetch2core.server.FileRequest.CREATOR;
					public getType(): number;
					public constructor(param0: number, param1: string, param2: number, param3: number, param4: string, param5: string, param6: com.tonyodev.fetch2core.Extras, param7: number, param8: number, param9: boolean);
					public copy(param0: number, param1: string, param2: number, param3: number, param4: string, param5: string, param6: com.tonyodev.fetch2core.Extras, param7: number, param8: number, param9: boolean): com.tonyodev.fetch2core.server.FileRequest;
					public component2(): string;
					public component5(): string;
					public component3(): number;
					public component10(): boolean;
					public getPersistConnection(): boolean;
					public getRangeEnd(): number;
					public getSize(): number;
					public toString(): string;
					public constructor();
					public component4(): number;
					public component1(): number;
					public component7(): com.tonyodev.fetch2core.Extras;
					public component8(): number;
					public hashCode(): number;
					public getRangeStart(): number;
					public getPage(): number;
					public describeContents(): number;
					public getToJsonString(): string;
					public getExtras(): com.tonyodev.fetch2core.Extras;
					public component9(): number;
					public getAuthorization(): string;
					public equals(param0: any): boolean;
					public component6(): string;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public getFileResourceId(): string;
					public getClient(): string;
				}
				export module FileRequest {
					export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.server.FileRequest> {
						public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileRequest.CREATOR>;
						public newArray(param0: number): native.Array<com.tonyodev.fetch2core.server.FileRequest>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.server.FileRequest;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export module server {
				export class FileResourceTransporter extends com.tonyodev.fetch2core.server.FileResourceTransporterWriter {
					public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileResourceTransporter>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2core.server.FileResourceTransporter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						isClosed(): boolean;
						connect(param0: java.net.SocketAddress): void;
						receiveFileRequest(): com.tonyodev.fetch2core.server.FileRequest;
						receiveFileResponse(): com.tonyodev.fetch2core.server.FileResponse;
						readRawBytes(param0: native.Array<number>, param1: number, param2: number): number;
						getInputStream(): java.io.InputStream;
						getOutputStream(): java.io.OutputStream;
						close(): void;
						<clinit>(): void;
						sendFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
						sendFileResponse(param0: com.tonyodev.fetch2core.server.FileResponse): void;
						sendRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					});
					public constructor();
					public static Companion: com.tonyodev.fetch2core.server.FileResourceTransporter.Companion;
					public static BUFFER_SIZE: number;
					public connect(param0: java.net.SocketAddress): void;
					public receiveFileResponse(): com.tonyodev.fetch2core.server.FileResponse;
					public sendFileResponse(param0: com.tonyodev.fetch2core.server.FileResponse): void;
					public readRawBytes(param0: native.Array<number>, param1: number, param2: number): number;
					public sendRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public close(): void;
					public getOutputStream(): java.io.OutputStream;
					public getInputStream(): java.io.InputStream;
					public receiveFileRequest(): com.tonyodev.fetch2core.server.FileRequest;
					public sendFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
					public isClosed(): boolean;
				}
				export module FileResourceTransporter {
					export class Companion {
						public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileResourceTransporter.Companion>;
						public static BUFFER_SIZE: number;
					}
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export module server {
				export class FileResourceTransporterWriter {
					public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileResourceTransporterWriter>;
					/**
					 * Constructs a new instance of the com.tonyodev.fetch2core.server.FileResourceTransporterWriter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						sendFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
						sendFileResponse(param0: com.tonyodev.fetch2core.server.FileResponse): void;
						sendRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					});
					public constructor();
					public sendFileResponse(param0: com.tonyodev.fetch2core.server.FileResponse): void;
					public sendRawBytes(param0: native.Array<number>, param1: number, param2: number): void;
					public sendFileRequest(param0: com.tonyodev.fetch2core.server.FileRequest): void;
				}
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2core {
			export module server {
				export class FileResponse {
					public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileResponse>;
					public static CLOSE_CONNECTION: number;
					public static OPEN_CONNECTION: number;
					public static FIELD_STATUS: string;
					public static FIELD_TYPE: string;
					public static FIELD_CONNECTION: string;
					public static FIELD_DATE: string;
					public static FIELD_CONTENT_LENGTH: string;
					public static FIELD_MD5: string;
					public static FIELD_SESSION_ID: string;
					public static CREATOR: com.tonyodev.fetch2core.server.FileResponse.CREATOR;
					public getType(): number;
					public component5(): number;
					public getDate(): number;
					public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string);
					public component3(): number;
					public describeContents(): number;
					public component7(): string;
					public getToJsonString(): string;
					public getMd5(): string;
					public getContentLength(): number;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor();
					public component4(): number;
					public getSessionId(): string;
					public component1(): number;
					public component6(): string;
					public component2(): number;
					public writeToParcel(param0: globalAndroid.os.Parcel, param1: number): void;
					public hashCode(): number;
					public copy(param0: number, param1: number, param2: number, param3: number, param4: number, param5: string, param6: string): com.tonyodev.fetch2core.server.FileResponse;
					public getStatus(): number;
					public getConnection(): number;
				}
				export module FileResponse {
					export class CREATOR extends globalAndroid.os.Parcelable.Creator<com.tonyodev.fetch2core.server.FileResponse> {
						public static class: java.lang.Class<com.tonyodev.fetch2core.server.FileResponse.CREATOR>;
						public newArray(param0: number): native.Array<com.tonyodev.fetch2core.server.FileResponse>;
						public createFromParcel(param0: globalAndroid.os.Parcel): com.tonyodev.fetch2core.server.FileResponse;
					}
				}
			}
		}
	}
}

//Generics information:
//com.tonyodev.fetch2.database.FetchDatabaseManager:1
//com.tonyodev.fetch2.database.FetchDatabaseManager.Delegate:1
//com.tonyodev.fetch2.helper.PriorityListProcessor:1
//com.tonyodev.fetch2core.Downloader:2
//com.tonyodev.fetch2core.FetchObserver:1
//com.tonyodev.fetch2core.Func:1
//com.tonyodev.fetch2core.Func2:1

