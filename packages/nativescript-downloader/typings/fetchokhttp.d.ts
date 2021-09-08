declare module com {
	export module tonyodev {
		export module fetch2okhttp {
			export class BuildConfig {
				public static class: java.lang.Class<com.tonyodev.fetch2okhttp.BuildConfig>;
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
		export module fetch2okhttp {
			export class OkHttpDownloader extends com.tonyodev.fetch2core.Downloader<okhttp3.OkHttpClient,okhttp3.Request> {
				public static class: java.lang.Class<com.tonyodev.fetch2okhttp.OkHttpDownloader>;
				public constructor(param0: okhttp3.OkHttpClient);
				public close(): void;
				public getRequestSupportedFileDownloaderTypes(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): java.util.Set<com.tonyodev.fetch2core.Downloader.FileDownloaderType>;
				public getClient(): okhttp3.OkHttpClient;
				public onPreClientExecute(param0: okhttp3.OkHttpClient, param1: com.tonyodev.fetch2core.Downloader.ServerRequest): okhttp3.Request;
				public execute(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.InterruptMonitor): com.tonyodev.fetch2core.Downloader.Response;
				public constructor(param0: okhttp3.OkHttpClient, param1: com.tonyodev.fetch2core.Downloader.FileDownloaderType);
				public verifyContentHash(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: string): boolean;
				public getHeadRequestMethodSupported(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): boolean;
				public constructor(param0: com.tonyodev.fetch2core.Downloader.FileDownloaderType);
				public constructor();
				public getRequestFileDownloaderType(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: java.util.Set<any>): com.tonyodev.fetch2core.Downloader.FileDownloaderType;
				public getRequestBufferSize(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public onServerResponse(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: com.tonyodev.fetch2core.Downloader.Response): void;
				public setClient(param0: okhttp3.OkHttpClient): void;
				public getContentHash(param0: java.util.Map<string,java.util.List<string>>): string;
				public getRequestContentLength(param0: com.tonyodev.fetch2core.Downloader.ServerRequest): number;
				public getFileSlicingCount(param0: com.tonyodev.fetch2core.Downloader.ServerRequest, param1: number): java.lang.Integer;
				public getConnections(): java.util.Map<com.tonyodev.fetch2core.Downloader.Response,okhttp3.Response>;
				public disconnect(param0: com.tonyodev.fetch2core.Downloader.Response): void;
			}
		}
	}
}

declare module com {
	export module tonyodev {
		export module fetch2okhttp {
			export class OkHttpUtils {
				public static class: java.lang.Class<com.tonyodev.fetch2okhttp.OkHttpUtils>;
				public static getDefaultCookieJar(): okhttp3.CookieJar;
			}
		}
	}
}

//Generics information:

