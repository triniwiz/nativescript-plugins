/// <reference path="android-declarations.d.ts"/>

declare module com {
	export module bumptech {
		export module glide {
			export abstract class GeneratedAppGlideModule extends com.bumptech.glide.module.AppGlideModule {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedAppGlideModule>;
				public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GenericTransitionOptions<TranscodeType>  extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.GenericTransitionOptions<any>,any> {
				public static class: java.lang.Class<com.bumptech.glide.GenericTransitionOptions<any>>;
				public static with(param0: number): com.bumptech.glide.GenericTransitionOptions<any>;
				public static withNoTransition(): com.bumptech.glide.GenericTransitionOptions<any>;
				public static with(param0: com.bumptech.glide.request.transition.TransitionFactory<any>): com.bumptech.glide.GenericTransitionOptions<any>;
				public static with(param0: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): com.bumptech.glide.GenericTransitionOptions<any>;
				public constructor();
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Glide {
				public static class: java.lang.Class<com.bumptech.glide.Glide>;
				/** @deprecated */
				public static init(param0: com.bumptech.glide.Glide): void;
				public static with(param0: globalAndroid.view.View): com.bumptech.glide.RequestManager;
				public static init(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				public static getPhotoCacheDir(param0: globalAndroid.content.Context): java.io.File;
				public static with(param0: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
				public static with(param0: globalAndroid.app.Activity): com.bumptech.glide.RequestManager;
				public getRegistry(): com.bumptech.glide.Registry;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public preFillBitmapPool(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
				public setMemoryCategory(param0: com.bumptech.glide.MemoryCategory): com.bumptech.glide.MemoryCategory;
				public onTrimMemory(param0: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public trimMemory(param0: number): void;
				public static get(param0: globalAndroid.content.Context): com.bumptech.glide.Glide;
				public getContext(): globalAndroid.content.Context;
				public onLowMemory(): void;
				public static getPhotoCacheDir(param0: globalAndroid.content.Context, param1: string): java.io.File;
				/** @deprecated */
				public static with(param0: globalAndroid.app.Fragment): com.bumptech.glide.RequestManager;
				public static with(param0: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
				public getRequestManagerRetriever(): com.bumptech.glide.manager.RequestManagerRetriever;
				public clearDiskCache(): void;
				public static with(param0: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
				public getBitmapPool(): com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
				public clearMemory(): void;
				public static tearDown(): void;
			}
			export module Glide {
				export class RequestOptionsFactory {
					public static class: java.lang.Class<com.bumptech.glide.Glide.RequestOptionsFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.Glide$RequestOptionsFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(): com.bumptech.glide.request.RequestOptions;
					});
					public constructor();
					public build(): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideBuilder {
				public static class: java.lang.Class<com.bumptech.glide.GlideBuilder>;
				public addGlobalRequestListener(param0: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(param0: com.bumptech.glide.Glide.RequestOptionsFactory): com.bumptech.glide.GlideBuilder;
				public setDiskCacheExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setDefaultTransitionOptions(param0: java.lang.Class, param1: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.GlideBuilder;
				public setConnectivityMonitorFactory(param0: com.bumptech.glide.manager.ConnectivityMonitorFactory): com.bumptech.glide.GlideBuilder;
				public setImageDecoderEnabledForBitmaps(param0: boolean): com.bumptech.glide.GlideBuilder;
				public setArrayPool(param0: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.GlideBuilder;
				public setIsActiveResourceRetentionAllowed(param0: boolean): com.bumptech.glide.GlideBuilder;
				public constructor();
				public setAnimationExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setLogLevel(param0: number): com.bumptech.glide.GlideBuilder;
				public setDiskCache(param0: com.bumptech.glide.load.engine.cache.DiskCache.Factory): com.bumptech.glide.GlideBuilder;
				/** @deprecated */
				public setResizeExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setBitmapPool(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(param0: com.bumptech.glide.load.engine.cache.MemorySizeCalculator): com.bumptech.glide.GlideBuilder;
				public setDefaultRequestOptions(param0: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.GlideBuilder;
				public setMemorySizeCalculator(param0: com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder): com.bumptech.glide.GlideBuilder;
				public setLogRequestOrigins(param0: boolean): com.bumptech.glide.GlideBuilder;
				public setSourceExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor): com.bumptech.glide.GlideBuilder;
				public setMemoryCache(param0: com.bumptech.glide.load.engine.cache.MemoryCache): com.bumptech.glide.GlideBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideContext {
				public static class: java.lang.Class<com.bumptech.glide.GlideContext>;
				public getEngine(): com.bumptech.glide.load.engine.Engine;
				public getLogLevel(): number;
				public getDefaultRequestListeners(): java.util.List<com.bumptech.glide.request.RequestListener<any>>;
				public constructor(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool, param2: com.bumptech.glide.Registry, param3: com.bumptech.glide.request.target.ImageViewTargetFactory, param4: com.bumptech.glide.Glide.RequestOptionsFactory, param5: java.util.Map<java.lang.Class<any>,com.bumptech.glide.TransitionOptions<any,any>>, param6: java.util.List<com.bumptech.glide.request.RequestListener<any>>, param7: com.bumptech.glide.load.engine.Engine, param8: boolean, param9: number);
				public getRegistry(): com.bumptech.glide.Registry;
				public getDefaultRequestOptions(): com.bumptech.glide.request.RequestOptions;
				public buildImageViewTarget(param0: globalAndroid.widget.ImageView, param1: java.lang.Class): com.bumptech.glide.request.target.ViewTarget<any,any>;
				public getArrayPool(): com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool;
				public isLoggingRequestOriginsEnabled(): boolean;
				public getDefaultTransitionOptions(param0: java.lang.Class): com.bumptech.glide.TransitionOptions<any,any>;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class ListPreloader<T>  extends globalAndroid.widget.AbsListView.OnScrollListener {
				public static class: java.lang.Class<com.bumptech.glide.ListPreloader<any>>;
				public constructor(param0: com.bumptech.glide.RequestManager, param1: com.bumptech.glide.ListPreloader.PreloadModelProvider<any>, param2: com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>, param3: number);
				public onScrollStateChanged(param0: globalAndroid.widget.AbsListView, param1: number): void;
				public onScroll(param0: globalAndroid.widget.AbsListView, param1: number, param2: number, param3: number): void;
			}
			export module ListPreloader {
				export class PreloadModelProvider<U>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadModelProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadModelProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPreloadItems(param0: number): java.util.List<U>;
						getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
					});
					public constructor();
					public getPreloadItems(param0: number): java.util.List<U>;
					public getPreloadRequestBuilder(param0: U): com.bumptech.glide.RequestBuilder<any>;
				}
				export class PreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadSizeProvider<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadSizeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getPreloadSize(param0: T, param1: number, param2: number): native.Array<number>;
					});
					public constructor();
					public getPreloadSize(param0: T, param1: number, param2: number): native.Array<number>;
				}
				export class PreloadTarget extends com.bumptech.glide.request.target.Target<any> {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTarget>;
					public onStart(): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onDestroy(): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
				export class PreloadTargetQueue {
					public static class: java.lang.Class<com.bumptech.glide.ListPreloader.PreloadTargetQueue>;
					public next(param0: number, param1: number): com.bumptech.glide.ListPreloader.PreloadTarget;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class MemoryCategory {
				public static class: java.lang.Class<com.bumptech.glide.MemoryCategory>;
				public static LOW: com.bumptech.glide.MemoryCategory;
				public static NORMAL: com.bumptech.glide.MemoryCategory;
				public static HIGH: com.bumptech.glide.MemoryCategory;
				public getMultiplier(): number;
				public static values(): native.Array<com.bumptech.glide.MemoryCategory>;
				public static valueOf(param0: string): com.bumptech.glide.MemoryCategory;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class ModelTypes<T>  extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.ModelTypes<any>>;
				/**
				 * Constructs a new instance of the com.bumptech.glide.ModelTypes<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					load(param0: globalAndroid.graphics.Bitmap): T;
					load(param0: globalAndroid.graphics.drawable.Drawable): T;
					load(param0: string): T;
					load(param0: globalAndroid.net.Uri): T;
					load(param0: java.io.File): T;
					load(param0: java.lang.Integer): T;
					load(param0: java.net.URL): T;
					load(param0: native.Array<number>): T;
					load(param0: any): T;
				});
				public constructor();
				public load(param0: globalAndroid.graphics.drawable.Drawable): T;
				public load(param0: string): T;
				public load(param0: java.io.File): T;
				public load(param0: java.lang.Integer): T;
				public load(param0: globalAndroid.net.Uri): T;
				/** @deprecated */
				public load(param0: java.net.URL): T;
				public load(param0: globalAndroid.graphics.Bitmap): T;
				public load(param0: native.Array<number>): T;
				public load(param0: any): T;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Priority {
				public static class: java.lang.Class<com.bumptech.glide.Priority>;
				public static IMMEDIATE: com.bumptech.glide.Priority;
				public static HIGH: com.bumptech.glide.Priority;
				public static NORMAL: com.bumptech.glide.Priority;
				public static LOW: com.bumptech.glide.Priority;
				public static valueOf(param0: string): com.bumptech.glide.Priority;
				public static values(): native.Array<com.bumptech.glide.Priority>;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Registry {
				public static class: java.lang.Class<com.bumptech.glide.Registry>;
				public static BUCKET_GIF: string;
				public static BUCKET_BITMAP: string;
				public static BUCKET_BITMAP_DRAWABLE: string;
				public getRegisteredResourceClasses(param0: java.lang.Class, param1: java.lang.Class, param2: java.lang.Class): java.util.List;
				/** @deprecated */
				public register(param0: java.lang.Class, param1: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public append(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public replace(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public isResourceEncoderAvailable(param0: com.bumptech.glide.load.engine.Resource<any>): boolean;
				public prepend(param0: java.lang.Class, param1: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public append(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public constructor();
				public append(param0: string, param1: java.lang.Class, param2: java.lang.Class, param3: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public prepend(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public prepend(param0: string, param1: java.lang.Class, param2: java.lang.Class, param3: com.bumptech.glide.load.ResourceDecoder<any,any>): com.bumptech.glide.Registry;
				public getImageHeaderParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				public prepend(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): com.bumptech.glide.Registry;
				public getSourceEncoder(param0: any): com.bumptech.glide.load.Encoder<any>;
				public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): com.bumptech.glide.Registry;
				/** @deprecated */
				public register(param0: java.lang.Class, param1: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
				public prepend(param0: java.lang.Class, param1: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public append(param0: java.lang.Class, param1: com.bumptech.glide.load.ResourceEncoder<any>): com.bumptech.glide.Registry;
				public getResultEncoder(param0: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.ResourceEncoder<any>;
				public getRewinder(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
				public register(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.Registry;
				public getLoadPath(param0: java.lang.Class, param1: java.lang.Class, param2: java.lang.Class): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
				public getModelLoaders(param0: any): java.util.List;
				public setResourceDecoderBucketPriorityList(param0: java.util.List<string>): com.bumptech.glide.Registry;
				public register(param0: com.bumptech.glide.load.data.DataRewinder.Factory<any>): com.bumptech.glide.Registry;
				public append(param0: java.lang.Class, param1: com.bumptech.glide.load.Encoder<any>): com.bumptech.glide.Registry;
			}
			export module Registry {
				export class MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.MissingComponentException>;
					public constructor(param0: string);
				}
				export class NoImageHeaderParserException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoImageHeaderParserException>;
					public constructor(param0: string);
					public constructor();
				}
				export class NoModelLoaderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoModelLoaderAvailableException>;
					public constructor(param0: any, param1: java.util.List);
					public constructor(param0: string);
					public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
					public constructor(param0: any);
				}
				export class NoResultEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoResultEncoderAvailableException>;
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: string);
				}
				export class NoSourceEncoderAvailableException extends com.bumptech.glide.Registry.MissingComponentException {
					public static class: java.lang.Class<com.bumptech.glide.Registry.NoSourceEncoderAvailableException>;
					public constructor(param0: java.lang.Class<any>);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RequestBuilder<TranscodeType>  extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.RequestBuilder<any>> {
				public static class: java.lang.Class<com.bumptech.glide.RequestBuilder<any>>;
				public static DOWNLOAD_ONLY_OPTIONS: com.bumptech.glide.request.RequestOptions;
				public load(param0: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<any>;
				public listener(param0: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: globalAndroid.graphics.Bitmap): any;
				public load(param0: string): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: any): any;
				public submit(param0: number, param1: number): com.bumptech.glide.request.FutureTarget<any>;
				/** @deprecated */
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget<any>;
				public thumbnail(param0: native.Array<com.bumptech.glide.RequestBuilder<any>>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: native.Array<number>): any;
				public constructor();
				public error(param0: globalAndroid.graphics.drawable.Drawable): any;
				public addListener(param0: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget<java.io.File>;
				public constructor(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.RequestManager, param2: java.lang.Class<any>, param3: globalAndroid.content.Context);
				public load(param0: globalAndroid.graphics.Bitmap): com.bumptech.glide.RequestBuilder<any>;
				public clone(): any;
				public thumbnail(param0: number): com.bumptech.glide.RequestBuilder<any>;
				public clone(): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: java.io.File): any;
				public into(param0: globalAndroid.widget.ImageView): com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,any>;
				public apply(param0: com.bumptech.glide.request.BaseRequestOptions<any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: globalAndroid.graphics.drawable.Drawable): any;
				public into(param0: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public load(param0: java.lang.Integer): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: native.Array<number>): com.bumptech.glide.RequestBuilder<any>;
				public thumbnail(param0: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				public preload(param0: number, param1: number): com.bumptech.glide.request.target.Target<any>;
				public load(param0: any): com.bumptech.glide.RequestBuilder<any>;
				/** @deprecated */
				public load(param0: java.net.URL): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: string): any;
				public error(param0: com.bumptech.glide.RequestBuilder<any>): com.bumptech.glide.RequestBuilder<any>;
				public constructor(param0: java.lang.Class<any>, param1: com.bumptech.glide.RequestBuilder<any>);
				public load(param0: globalAndroid.net.Uri): com.bumptech.glide.RequestBuilder<any>;
				public error(param0: number): any;
				public getDownloadOnlyRequest(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public preload(): com.bumptech.glide.request.target.Target<any>;
				public submit(): com.bumptech.glide.request.FutureTarget<any>;
				/** @deprecated */
				public downloadOnly(param0: com.bumptech.glide.request.target.Target<any>): com.bumptech.glide.request.target.Target<any>;
				public load(param0: java.lang.Integer): any;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public apply(param0: com.bumptech.glide.request.BaseRequestOptions<any>): any;
				public load(param0: java.io.File): com.bumptech.glide.RequestBuilder<any>;
				public transition(param0: com.bumptech.glide.TransitionOptions<any,any>): com.bumptech.glide.RequestBuilder<any>;
				public load(param0: globalAndroid.net.Uri): any;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RequestManager extends java.lang.Object {
				public static class: java.lang.Class<com.bumptech.glide.RequestManager>;
				public glide: com.bumptech.glide.Glide;
				public context: globalAndroid.content.Context;
				public load(param0: globalAndroid.graphics.Bitmap): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public setDefaultRequestOptions(param0: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				public constructor(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context);
				public load(param0: globalAndroid.graphics.Bitmap): any;
				public load(param0: any): any;
				public download(param0: any): com.bumptech.glide.RequestBuilder<java.io.File>;
				public load(param0: native.Array<number>): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public load(param0: any): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public addDefaultRequestListener(param0: com.bumptech.glide.request.RequestListener<any>): com.bumptech.glide.RequestManager;
				public asDrawable(): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public load(param0: string): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public load(param0: native.Array<number>): any;
				public clear(param0: com.bumptech.glide.request.target.Target<any>): void;
				public downloadOnly(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public clear(param0: globalAndroid.view.View): void;
				public onStop(): void;
				public load(param0: java.io.File): any;
				public onTrimMemory(param0: number): void;
				public onConfigurationChanged(param0: globalAndroid.content.res.Configuration): void;
				public load(param0: java.lang.Integer): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public pauseRequestsRecursive(): void;
				public load(param0: globalAndroid.graphics.drawable.Drawable): any;
				public resumeRequestsRecursive(): void;
				/** @deprecated */
				public load(param0: java.net.URL): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public onLowMemory(): void;
				public load(param0: java.io.File): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public toString(): string;
				public load(param0: string): any;
				public applyDefaultRequestOptions(param0: com.bumptech.glide.request.RequestOptions): com.bumptech.glide.RequestManager;
				public setPauseAllRequestsOnTrimMemoryModerate(param0: boolean): void;
				public load(param0: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public as(param0: java.lang.Class): com.bumptech.glide.RequestBuilder<any>;
				public pauseAllRequests(): void;
				public onStart(): void;
				public pauseAllRequestsRecursive(): void;
				public asFile(): com.bumptech.glide.RequestBuilder<java.io.File>;
				public asBitmap(): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.Bitmap>;
				public asGif(): com.bumptech.glide.RequestBuilder<com.bumptech.glide.load.resource.gif.GifDrawable>;
				public load(param0: globalAndroid.net.Uri): com.bumptech.glide.RequestBuilder<globalAndroid.graphics.drawable.Drawable>;
				public load(param0: java.lang.Integer): any;
				public resumeRequests(): void;
				/** @deprecated */
				public load(param0: java.net.URL): any;
				public onDestroy(): void;
				public setRequestOptions(param0: com.bumptech.glide.request.RequestOptions): void;
				public isPaused(): boolean;
				public pauseRequests(): void;
				public load(param0: globalAndroid.net.Uri): any;
			}
			export module RequestManager {
				export class ClearTarget extends com.bumptech.glide.request.target.CustomViewTarget<globalAndroid.view.View,any> {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.ClearTarget>;
					public onResourceCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
				export class RequestManagerConnectivityListener extends com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener {
					public static class: java.lang.Class<com.bumptech.glide.RequestManager.RequestManagerConnectivityListener>;
					public onConnectivityChanged(param0: boolean): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export abstract class TransitionOptions<CHILD, TranscodeType>  extends java.lang.Cloneable {
				public static class: java.lang.Class<com.bumptech.glide.TransitionOptions<any,any>>;
				public clone(): any;
				public dontTransition(): any;
				public transition(param0: number): any;
				public constructor();
				public transition(param0: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator): any;
				public transition(param0: com.bumptech.glide.request.transition.TransitionFactory<any>): any;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DataSource {
					public static class: java.lang.Class<com.bumptech.glide.load.DataSource>;
					public static LOCAL: com.bumptech.glide.load.DataSource;
					public static REMOTE: com.bumptech.glide.load.DataSource;
					public static DATA_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static RESOURCE_DISK_CACHE: com.bumptech.glide.load.DataSource;
					public static MEMORY_CACHE: com.bumptech.glide.load.DataSource;
					public static valueOf(param0: string): com.bumptech.glide.load.DataSource;
					public static values(): native.Array<com.bumptech.glide.load.DataSource>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DecodeFormat {
					public static class: java.lang.Class<com.bumptech.glide.load.DecodeFormat>;
					public static PREFER_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_RGB_565: com.bumptech.glide.load.DecodeFormat;
					public static DEFAULT: com.bumptech.glide.load.DecodeFormat;
					public static values(): native.Array<com.bumptech.glide.load.DecodeFormat>;
					public static valueOf(param0: string): com.bumptech.glide.load.DecodeFormat;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class EncodeStrategy {
					public static class: java.lang.Class<com.bumptech.glide.load.EncodeStrategy>;
					public static SOURCE: com.bumptech.glide.load.EncodeStrategy;
					public static TRANSFORMED: com.bumptech.glide.load.EncodeStrategy;
					public static NONE: com.bumptech.glide.load.EncodeStrategy;
					public static values(): native.Array<com.bumptech.glide.load.EncodeStrategy>;
					public static valueOf(param0: string): com.bumptech.glide.load.EncodeStrategy;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Encoder<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Encoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Encoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: T, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class HttpException {
					public static class: java.lang.Class<com.bumptech.glide.load.HttpException>;
					public static UNKNOWN: number;
					public getStatusCode(): number;
					public constructor(param0: string);
					public constructor(param0: string, param1: number);
					public constructor(param0: string, param1: number, param2: java.lang.Throwable);
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ImageHeaderParser {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
						getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					});
					public constructor();
					public static UNKNOWN_ORIENTATION: number;
					public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
				}
				export module ImageHeaderParser {
					export class ImageType {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParser.ImageType>;
						public static GIF: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static JPEG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static RAW: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static PNG: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP_A: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static WEBP: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static UNKNOWN: com.bumptech.glide.load.ImageHeaderParser.ImageType;
						public static values(): native.Array<com.bumptech.glide.load.ImageHeaderParser.ImageType>;
						public hasAlpha(): boolean;
						public static valueOf(param0: string): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ImageHeaderParserUtils {
					public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils>;
					public static getType(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, param2: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: java.io.InputStream, param2: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
					public static getType(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getType(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: java.io.InputStream, param2: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					public static getOrientation(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: com.bumptech.glide.load.data.ParcelFileDescriptorRewinder, param2: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
				}
				export module ImageHeaderParserUtils {
					export class OrientationReader {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.OrientationReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$OrientationReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getOrientation(param0: com.bumptech.glide.load.ImageHeaderParser): number;
						});
						public constructor();
						public getOrientation(param0: com.bumptech.glide.load.ImageHeaderParser): number;
					}
					export class TypeReader {
						public static class: java.lang.Class<com.bumptech.glide.load.ImageHeaderParserUtils.TypeReader>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.ImageHeaderParserUtils$TypeReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getType(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						});
						public constructor();
						public getType(param0: com.bumptech.glide.load.ImageHeaderParser): com.bumptech.glide.load.ImageHeaderParser.ImageType;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Key>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Key interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						<clinit>(): void;
					});
					public constructor();
					public static CHARSET: java.nio.charset.Charset;
					public static STRING_CHARSET_NAME: string;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class MultiTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
					public static class: java.lang.Class<com.bumptech.glide.load.MultiTransformation<any>>;
					public equals(param0: any): boolean;
					public constructor(param0: java.util.Collection<any>);
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public constructor(param0: native.Array<com.bumptech.glide.load.Transformation<any>>);
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Option<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.Option<any>>;
					public static disk(param0: string, param1: any, param2: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static memory(param0: string): com.bumptech.glide.load.Option<any>;
					public static memory(param0: string, param1: any): com.bumptech.glide.load.Option<any>;
					public static disk(param0: string, param1: com.bumptech.glide.load.Option.CacheKeyUpdater<any>): com.bumptech.glide.load.Option<any>;
					public hashCode(): number;
					public update(param0: T, param1: java.security.MessageDigest): void;
					public getDefaultValue(): T;
				}
				export module Option {
					export class CacheKeyUpdater<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.Option.CacheKeyUpdater<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.Option$CacheKeyUpdater interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							update(param0: native.Array<number>, param1: T, param2: java.security.MessageDigest): void;
						});
						public constructor();
						public update(param0: native.Array<number>, param1: T, param2: java.security.MessageDigest): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Options extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Options>;
					public equals(param0: any): boolean;
					public set(param0: com.bumptech.glide.load.Option<any>, param1: any): com.bumptech.glide.load.Options;
					public toString(): string;
					public get(param0: com.bumptech.glide.load.Option<any>): any;
					public putAll(param0: com.bumptech.glide.load.Options): void;
					public constructor();
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class PreferredColorSpace {
					public static class: java.lang.Class<com.bumptech.glide.load.PreferredColorSpace>;
					public static SRGB: com.bumptech.glide.load.PreferredColorSpace;
					public static DISPLAY_P3: com.bumptech.glide.load.PreferredColorSpace;
					public static valueOf(param0: string): com.bumptech.glide.load.PreferredColorSpace;
					public static values(): native.Array<com.bumptech.glide.load.PreferredColorSpace>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceDecoder<T, Z>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceDecoder<any,any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceDecoder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
						decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					});
					public constructor();
					public decode(param0: T, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<Z>;
					public handles(param0: T, param1: com.bumptech.glide.load.Options): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceEncoder<T>  extends com.bumptech.glide.load.Encoder<com.bumptech.glide.load.engine.Resource<any>> {
					public static class: java.lang.Class<com.bumptech.glide.load.ResourceEncoder<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceEncoder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
						encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					});
					public constructor();
					public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Transformation<T>  extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.load.Transformation<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Transformation<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: any): boolean;
						hashCode(): number;
						<clinit>(): void;
					});
					public constructor();
					public static CHARSET: java.nio.charset.Charset;
					public static STRING_CHARSET_NAME: string;
					public equals(param0: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class AssetFileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<globalAndroid.content.res.AssetFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetFileDescriptorLocalUriFetcher>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public close(param0: globalAndroid.content.res.AssetFileDescriptor): void;
						public getDataClass(): java.lang.Class<globalAndroid.content.res.AssetFileDescriptor>;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri);
						public cleanup(): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): globalAndroid.content.res.AssetFileDescriptor;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class AssetPathFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.AssetPathFetcher<any>>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(param0: globalAndroid.content.res.AssetManager, param1: string);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class BufferedOutputStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.BufferedOutputStream>;
						public close(): void;
						public write(param0: number): void;
						public write(param0: native.Array<number>, param1: number, param2: number): void;
						public flush(): void;
						public write(param0: native.Array<number>): void;
						public constructor(param0: java.io.OutputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataFetcher<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							cleanup(): void;
							cancel(): void;
							getDataClass(): java.lang.Class<T>;
							getDataSource(): com.bumptech.glide.load.DataSource;
						});
						public constructor();
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<T>;
					}
					export module DataFetcher {
						export class DataCallback<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataFetcher.DataCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher$DataCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onDataReady(param0: T): void;
								onLoadFailed(param0: java.lang.Exception): void;
							});
							public constructor();
							public onLoadFailed(param0: java.lang.Exception): void;
							public onDataReady(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataRewinder<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							rewindAndGet(): T;
							cleanup(): void;
						});
						public constructor();
						public rewindAndGet(): T;
						public cleanup(): void;
					}
					export module DataRewinder {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinder.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.DataRewinder$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
								getDataClass(): java.lang.Class<T>;
							});
							public constructor();
							public build(param0: T): com.bumptech.glide.load.data.DataRewinder<T>;
							public getDataClass(): java.lang.Class<T>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataRewinderRegistry {
						public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry>;
						public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
						public constructor();
						public register(param0: com.bumptech.glide.load.data.DataRewinder.Factory<any>): void;
					}
					export module DataRewinderRegistry {
						export class DefaultRewinder extends com.bumptech.glide.load.data.DataRewinder<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.DataRewinderRegistry.DefaultRewinder>;
							public cleanup(): void;
							public rewindAndGet(): any;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ExifOrientationStream {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ExifOrientationStream>;
						public read(): number;
						public skip(param0: number): number;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public constructor(param0: java.io.InputStream, param1: number);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<globalAndroid.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorAssetPathFetcher>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(param0: globalAndroid.content.res.AssetManager, param1: string);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): globalAndroid.os.ParcelFileDescriptor;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<globalAndroid.os.ParcelFileDescriptor>;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
						public close(param0: globalAndroid.os.ParcelFileDescriptor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<globalAndroid.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.FileDescriptorLocalUriFetcher>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): globalAndroid.os.ParcelFileDescriptor;
						public cancel(): void;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri);
						public cleanup(): void;
						public getDataClass(): java.lang.Class<globalAndroid.os.ParcelFileDescriptor>;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
						public close(param0: globalAndroid.os.ParcelFileDescriptor): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class HttpUrlFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher>;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(param0: com.bumptech.glide.load.model.GlideUrl, param1: number);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
					}
					export module HttpUrlFetcher {
						export class DefaultHttpUrlConnectionFactory extends com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.DefaultHttpUrlConnectionFactory>;
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
						export class HttpUrlConnectionFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.HttpUrlFetcher$HttpUrlConnectionFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: java.net.URL): java.net.HttpURLConnection;
							});
							public constructor();
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class InputStreamRewinder extends com.bumptech.glide.load.data.DataRewinder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder>;
						public constructor(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public rewindAndGet(): java.io.InputStream;
						public fixMarkLimits(): void;
						public cleanup(): void;
						public rewindAndGet(): any;
					}
					export module InputStreamRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.InputStreamRewinder.Factory>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public build(param0: java.io.InputStream): com.bumptech.glide.load.data.DataRewinder<java.io.InputStream>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public getDataClass(): java.lang.Class<any>;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class LocalUriFetcher<T>  extends com.bumptech.glide.load.data.DataFetcher<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.LocalUriFetcher<any>>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri);
						public cleanup(): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ParcelFileDescriptorRewinder extends com.bumptech.glide.load.data.DataRewinder<globalAndroid.os.ParcelFileDescriptor> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder>;
						public static isSupported(): boolean;
						public rewindAndGet(): globalAndroid.os.ParcelFileDescriptor;
						public cleanup(): void;
						public rewindAndGet(): any;
						public constructor(param0: globalAndroid.os.ParcelFileDescriptor);
					}
					export module ParcelFileDescriptorRewinder {
						export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.Factory>;
							public constructor();
							public getDataClass(): java.lang.Class<globalAndroid.os.ParcelFileDescriptor>;
							public build(param0: globalAndroid.os.ParcelFileDescriptor): com.bumptech.glide.load.data.DataRewinder<globalAndroid.os.ParcelFileDescriptor>;
							public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class InternalRewinder {
							public static class: java.lang.Class<com.bumptech.glide.load.data.ParcelFileDescriptorRewinder.InternalRewinder>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamAssetPathFetcher>;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): java.io.InputStream;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public constructor(param0: globalAndroid.content.res.AssetManager, param1: string);
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public cancel(): void;
						public cleanup(): void;
						public close(param0: java.io.InputStream): void;
						public loadResource(param0: globalAndroid.content.res.AssetManager, param1: string): any;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.data.StreamLocalUriFetcher>;
						public getDataClass(): java.lang.Class<java.io.InputStream>;
						public getDataSource(): com.bumptech.glide.load.DataSource;
						public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): any;
						public cancel(): void;
						public loadResource(param0: globalAndroid.net.Uri, param1: globalAndroid.content.ContentResolver): java.io.InputStream;
						public constructor(param0: globalAndroid.content.ContentResolver, param1: globalAndroid.net.Uri);
						public cleanup(): void;
						public close(param0: java.io.InputStream): void;
						public getDataClass(): java.lang.Class<any>;
						public close(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class FileService {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.FileService>;
							public get(param0: string): java.io.File;
							public length(param0: java.io.File): number;
							public exists(param0: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class MediaStoreUtil {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.MediaStoreUtil>;
							public static isMediaStoreVideoUri(param0: globalAndroid.net.Uri): boolean;
							public static isMediaStoreUri(param0: globalAndroid.net.Uri): boolean;
							public static isThumbnailSize(param0: number, param1: number): boolean;
							public static isMediaStoreImageUri(param0: globalAndroid.net.Uri): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public static buildImageFetcher(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public static buildVideoFetcher(param0: globalAndroid.content.Context, param1: globalAndroid.net.Uri): com.bumptech.glide.load.data.mediastore.ThumbFetcher;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
							public getDataClass(): java.lang.Class<java.io.InputStream>;
						}
						export module ThumbFetcher {
							export class ImageThumbnailQuery extends com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.ImageThumbnailQuery>;
								public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							}
							export class VideoThumbnailQuery extends com.bumptech.glide.load.data.mediastore.ThumbnailQuery {
								public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbFetcher.VideoThumbnailQuery>;
								public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbnailQuery {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailQuery>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.mediastore.ThumbnailQuery interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
							});
							public constructor();
							public query(param0: globalAndroid.net.Uri): globalAndroid.database.Cursor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export module mediastore {
						export class ThumbnailStreamOpener {
							public static class: java.lang.Class<com.bumptech.glide.load.data.mediastore.ThumbnailStreamOpener>;
							public open(param0: globalAndroid.net.Uri): java.io.InputStream;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ActiveResources {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources>;
					}
					export module ActiveResources {
						export class DequeuedResourceCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.DequeuedResourceCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.ActiveResources$DequeuedResourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceDequeued(): void;
							});
							public constructor();
							public onResourceDequeued(): void;
						}
						export class ResourceWeakReference extends java.lang.ref.WeakReference<com.bumptech.glide.load.engine.EngineResource<any>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ActiveResources.ResourceWeakReference>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class CallbackException {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.CallbackException>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheKey>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataCacheWriter<DataType>  extends com.bumptech.glide.load.engine.cache.DiskCache.Writer {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataCacheWriter<any>>;
						public write(param0: java.io.File): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DataFetcherGenerator {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							startNext(): boolean;
							cancel(): void;
						});
						public constructor();
						public startNext(): boolean;
						public cancel(): void;
					}
					export module DataFetcherGenerator {
						export class FetcherReadyCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DataFetcherGenerator$FetcherReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								reschedule(): void;
								onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
								onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							});
							public constructor();
							public reschedule(): void;
							public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
							public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeHelper<Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeHelper<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob<any>>;
						public run(): void;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public compareTo(param0: com.bumptech.glide.load.engine.DecodeJob<any>): number;
						public cancel(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
					export module DecodeJob {
						export class Callback<R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Callback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource): void;
								onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
								reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							});
							public constructor();
							public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource): void;
							public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
							public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						}
						export class DecodeCallback<Z>  extends com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DecodeCallback<any>>;
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
						}
						export class DeferredEncodeManager<Z>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager<any>>;
						}
						export class DiskCacheProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$DiskCacheProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
							});
							public constructor();
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class ReleaseManager {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.ReleaseManager>;
						}
						export class RunReason {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.RunReason>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static SWITCH_TO_SOURCE_SERVICE: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static DECODE_DATA: com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static valueOf(param0: string): com.bumptech.glide.load.engine.DecodeJob.RunReason;
							public static values(): native.Array<com.bumptech.glide.load.engine.DecodeJob.RunReason>;
						}
						export class Stage {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodeJob.Stage>;
							public static INITIALIZE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static RESOURCE_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static DATA_CACHE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static SOURCE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static ENCODE: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static FINISHED: com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static valueOf(param0: string): com.bumptech.glide.load.engine.DecodeJob.Stage;
							public static values(): native.Array<com.bumptech.glide.load.engine.DecodeJob.Stage>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodePath<DataType, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath<any,any,any>>;
						public constructor(param0: java.lang.Class<DataType>, param1: java.lang.Class<ResourceType>, param2: java.lang.Class<Transcode>, param3: java.util.List<any>, param4: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<ResourceType,Transcode>, param5: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public decode(param0: com.bumptech.glide.load.data.DataRewinder<DataType>, param1: number, param2: number, param3: com.bumptech.glide.load.Options, param4: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public toString(): string;
					}
					export module DecodePath {
						export class DecodeCallback<ResourceType>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.DecodePath.DecodeCallback<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodePath$DecodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
							});
							public constructor();
							public onResourceDecoded(param0: com.bumptech.glide.load.engine.Resource<ResourceType>): com.bumptech.glide.load.engine.Resource<ResourceType>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export abstract class DiskCacheStrategy {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.DiskCacheStrategy>;
						public static ALL: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static NONE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static DATA: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static RESOURCE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static AUTOMATIC: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public constructor();
						public decodeCachedData(): boolean;
						public decodeCachedResource(): boolean;
						public isDataCacheable(param0: com.bumptech.glide.load.DataSource): boolean;
						public isResourceCacheable(param0: boolean, param1: com.bumptech.glide.load.DataSource, param2: com.bumptech.glide.load.EncodeStrategy): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Engine implements com.bumptech.glide.load.engine.EngineJobListener, com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener, com.bumptech.glide.load.engine.EngineResource.ResourceListener {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine>;
						public clearDiskCache(): void;
						public shutdown(): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						public release(param0: com.bumptech.glide.load.engine.Resource<any>): void;
						public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.cache.DiskCache.Factory, param2: com.bumptech.glide.load.engine.executor.GlideExecutor, param3: com.bumptech.glide.load.engine.executor.GlideExecutor, param4: com.bumptech.glide.load.engine.executor.GlideExecutor, param5: com.bumptech.glide.load.engine.executor.GlideExecutor, param6: boolean);
						public load(param0: com.bumptech.glide.GlideContext, param1: any, param2: com.bumptech.glide.load.Key, param3: number, param4: number, param5: java.lang.Class, param6: java.lang.Class, param7: com.bumptech.glide.Priority, param8: com.bumptech.glide.load.engine.DiskCacheStrategy, param9: java.util.Map, param10: boolean, param11: boolean, param12: com.bumptech.glide.load.Options, param13: boolean, param14: boolean, param15: boolean, param16: boolean, param17: com.bumptech.glide.request.ResourceCallback, param18: java.util.concurrent.Executor): com.bumptech.glide.load.engine.Engine.LoadStatus;
						public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
					}
					export module Engine {
						export class DecodeJobFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.DecodeJobFactory>;
						}
						export class EngineJobFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.EngineJobFactory>;
						}
						export class LazyDiskCacheProvider extends com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LazyDiskCacheProvider>;
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class LoadStatus {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.Engine.LoadStatus>;
							public cancel(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJob<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob<any>>;
						public reschedule(param0: com.bumptech.glide.load.engine.DecodeJob<any>): void;
						public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<R>, param1: com.bumptech.glide.load.DataSource): void;
						public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public start(param0: com.bumptech.glide.load.engine.DecodeJob<R>): void;
					}
					export module EngineJob {
						export class CallLoadFailed {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallLoadFailed>;
							public run(): void;
						}
						export class CallResourceReady {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.CallResourceReady>;
							public run(): void;
						}
						export class EngineResourceFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.EngineResourceFactory>;
							public build(param0: com.bumptech.glide.load.engine.Resource<any>, param1: boolean, param2: com.bumptech.glide.load.Key, param3: com.bumptech.glide.load.engine.EngineResource.ResourceListener): com.bumptech.glide.load.engine.EngineResource<any>;
						}
						export class ResourceCallbackAndExecutor {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
							public hashCode(): number;
							public equals(param0: any): boolean;
						}
						export class ResourceCallbacksAndExecutors extends java.lang.Iterable<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJob.ResourceCallbacksAndExecutors>;
							public iterator(): java.util.Iterator<com.bumptech.glide.load.engine.EngineJob.ResourceCallbackAndExecutor>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJobListener {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineJobListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineJobListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
							onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
						});
						public constructor();
						public onEngineJobComplete(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key, param2: com.bumptech.glide.load.engine.EngineResource<any>): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob<any>, param1: com.bumptech.glide.load.Key): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKey>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKeyFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineKeyFactory>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineResource<Z>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource<any>>;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public recycle(): void;
						public get(): any;
						public toString(): string;
					}
					export module EngineResource {
						export class ResourceListener {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.EngineResource.ResourceListener>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineResource$ResourceListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
							});
							public constructor();
							public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource<any>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class GlideException {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException>;
						public printStackTrace(param0: java.io.PrintStream): void;
						public getMessage(): string;
						public constructor(param0: string, param1: java.util.List<java.lang.Throwable>);
						public logRootCauses(param0: string): void;
						public getRootCauses(): java.util.List<java.lang.Throwable>;
						public setOrigin(param0: java.lang.Exception): void;
						public getOrigin(): java.lang.Exception;
						public getCauses(): java.util.List<java.lang.Throwable>;
						public constructor(param0: string, param1: java.lang.Throwable);
						public fillInStackTrace(): java.lang.Throwable;
						public printStackTrace(): void;
						public printStackTrace(param0: java.io.PrintWriter): void;
						public constructor(param0: string);
					}
					export module GlideException {
						export class IndentedAppendable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.GlideException.IndentedAppendable>;
							public append(param0: string): java.lang.Appendable;
							public append(param0: string, param1: number, param2: number): java.lang.Appendable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Initializable {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Initializable>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Initializable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							initialize(): void;
						});
						public constructor();
						public initialize(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Jobs {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Jobs>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class LoadPath<Data, ResourceType, Transcode>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LoadPath<any,any,any>>;
						public constructor(param0: java.lang.Class<Data>, param1: java.lang.Class<ResourceType>, param2: java.lang.Class<Transcode>, param3: java.util.List<com.bumptech.glide.load.engine.DecodePath<Data,ResourceType,Transcode>>, param4: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public getDataClass(): java.lang.Class<Data>;
						public load(param0: com.bumptech.glide.load.data.DataRewinder<Data>, param1: com.bumptech.glide.load.Options, param2: number, param3: number, param4: com.bumptech.glide.load.engine.DecodePath.DecodeCallback<ResourceType>): com.bumptech.glide.load.engine.Resource<Transcode>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class LockedResource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.LockedResource<any>>;
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Resource<Z>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.Resource<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Resource<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getResourceClass(): java.lang.Class<Z>;
							get(): Z;
							getSize(): number;
							recycle(): void;
						});
						public constructor();
						public getSize(): number;
						public get(): Z;
						public recycle(): void;
						public getResourceClass(): java.lang.Class<Z>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceCacheGenerator extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheGenerator>;
						public startNext(): boolean;
						public onLoadFailed(param0: java.lang.Exception): void;
						public cancel(): void;
						public onDataReady(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceCacheKey extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceCacheKey>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceRecycler {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler>;
					}
					export module ResourceRecycler {
						export class ResourceRecyclerCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.ResourceRecycler.ResourceRecyclerCallback>;
							public handleMessage(param0: globalAndroid.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class SourceGenerator implements com.bumptech.glide.load.engine.DataFetcherGenerator, com.bumptech.glide.load.engine.DataFetcherGenerator.FetcherReadyCallback {
						public static class: java.lang.Class<com.bumptech.glide.load.engine.SourceGenerator>;
						public startNext(): boolean;
						public onDataFetcherReady(param0: com.bumptech.glide.load.Key, param1: any, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource, param4: com.bumptech.glide.load.Key): void;
						public cancel(): void;
						public reschedule(): void;
						public onDataFetcherFailed(param0: com.bumptech.glide.load.Key, param1: java.lang.Exception, param2: com.bumptech.glide.load.data.DataFetcher<any>, param3: com.bumptech.glide.load.DataSource): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ArrayAdapterInterface<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getTag(): string;
								getArrayLength(param0: T): number;
								newArray(param0: number): T;
								getElementSizeInBytes(): number;
							});
							public constructor();
							public newArray(param0: number): T;
							public getArrayLength(param0: T): number;
							public getElementSizeInBytes(): number;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ArrayPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								put(param0: any, param1: java.lang.Class): void;
								put(param0: any): void;
								get(param0: number, param1: java.lang.Class): any;
								getExact(param0: number, param1: java.lang.Class): any;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public static STANDARD_BUFFER_SIZE_BYTES: number;
							public getExact(param0: number, param1: java.lang.Class): any;
							public put(param0: any): void;
							public get(param0: number, param1: java.lang.Class): any;
							public clearMemory(): void;
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class): void;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class AttributeStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy>;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public toString(): string;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export module AttributeStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key>;
								public init(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): void;
								public toString(): string;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool);
								public equals(param0: any): boolean;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export abstract class BaseKeyPool<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<any>>;
							public offer(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								put(param0: globalAndroid.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public clearMemory(): void;
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPoolAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.BitmapPoolAdapter>;
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public clearMemory(): void;
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class ByteArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.ByteArrayAdapter>;
							public constructor();
							public getArrayLength(param0: native.Array<number>): number;
							public getArrayLength(param0: any): number;
							public newArray(param0: number): native.Array<number>;
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class GroupedLinkedMap<K, V>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap<any,any>>;
							public put(param0: K, param1: V): void;
							public toString(): string;
							public get(param0: K): V;
							public removeLast(): V;
						}
						export module GroupedLinkedMap {
							export class LinkedEntry<K, V>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry<any,any>>;
								public size(): number;
								public removeLast(): V;
								public add(param0: V): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class IntegerArrayAdapter extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface<native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.IntegerArrayAdapter>;
							public constructor();
							public getArrayLength(param0: native.Array<number>): number;
							public getArrayLength(param0: any): number;
							public newArray(param0: number): native.Array<number>;
							public getElementSizeInBytes(): number;
							public newArray(param0: number): any;
							public getTag(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruArrayPool extends com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool>;
							public constructor();
							public getExact(param0: number, param1: java.lang.Class): any;
							public put(param0: any): void;
							public get(param0: number, param1: java.lang.Class): any;
							public clearMemory(): void;
							public constructor(param0: number);
							/** @deprecated */
							public put(param0: any, param1: java.lang.Class): void;
							public trimMemory(param0: number): void;
						}
						export module LruArrayPool {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key>;
								public toString(): string;
								public equals(param0: any): boolean;
								public offer(): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.LruArrayPool.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruBitmapPool extends com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool>;
							public getCurrentSize(): number;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public missCount(): number;
							public getDirty(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public evictionCount(): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public constructor(param0: number, param1: java.util.Set<globalAndroid.graphics.Bitmap.Config>);
							public hitCount(): number;
							public clearMemory(): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module LruBitmapPool {
							export class BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool$BitmapTracker interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									add(param0: globalAndroid.graphics.Bitmap): void;
									remove(param0: globalAndroid.graphics.Bitmap): void;
								});
								public constructor();
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
							export class NullBitmapTracker extends com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.NullBitmapTracker>;
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
							export class ThrowingBitmapTracker extends com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.ThrowingBitmapTracker>;
								public remove(param0: globalAndroid.graphics.Bitmap): void;
								public add(param0: globalAndroid.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								put(param0: globalAndroid.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
								removeLast(): globalAndroid.graphics.Bitmap;
								logBitmap(param0: globalAndroid.graphics.Bitmap): string;
								logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
								getSize(param0: globalAndroid.graphics.Bitmap): number;
							});
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class Poolable {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.Poolable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								offer(): void;
							});
							public constructor();
							public offer(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class PrettyPrintTreeMap<K, V>  extends java.util.TreeMap<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap<any,any>>;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeConfigStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy>;
							public constructor();
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public toString(): string;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export module SizeConfigStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key>;
								public toString(): string;
								public equals(param0: any): boolean;
								public offer(): void;
								public hashCode(): number;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool);
								public init(param0: number, param1: globalAndroid.graphics.Bitmap.Config): void;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool>;
								public get(param0: number, param1: globalAndroid.graphics.Bitmap.Config): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeStrategy extends com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy>;
							public put(param0: globalAndroid.graphics.Bitmap): void;
							public logBitmap(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): string;
							public getSize(param0: globalAndroid.graphics.Bitmap): number;
							public get(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public toString(): string;
							public removeLast(): globalAndroid.graphics.Bitmap;
							public logBitmap(param0: globalAndroid.graphics.Bitmap): string;
						}
						export module SizeStrategy {
							export class Key extends com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key>;
								public toString(): string;
								public equals(param0: any): boolean;
								public offer(): void;
								public init(param0: number): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key> {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.KeyPool>;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public get(param0: number): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								get(param0: com.bumptech.glide.load.Key): java.io.File;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
								delete(param0: com.bumptech.glide.load.Key): void;
								clear(): void;
							});
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCache {
							export class Factory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Factory>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									build(): com.bumptech.glide.load.engine.cache.DiskCache;
								});
								public constructor();
								public static DEFAULT_DISK_CACHE_DIR: string;
								public static DEFAULT_DISK_CACHE_SIZE: number;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							}
							export class Writer {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCache.Writer>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Writer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									write(param0: java.io.File): boolean;
								});
								public constructor();
								public write(param0: java.io.File): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheAdapter extends com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter>;
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCacheAdapter {
							export class Factory extends com.bumptech.glide.load.engine.cache.DiskCache.Factory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheAdapter.Factory>;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheWriteLocker {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker>;
						}
						export module DiskCacheWriteLocker {
							export class WriteLock {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLock>;
							}
							export class WriteLockPool {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskCacheWriteLocker.WriteLockPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheFactory extends com.bumptech.glide.load.engine.cache.DiskCache.Factory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory>;
							public constructor(param0: string, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
						}
						export module DiskLruCacheFactory {
							export class CacheDirectoryGetter {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskLruCacheFactory$CacheDirectoryGetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getCacheDirectory(): java.io.File;
								});
								public constructor();
								public getCacheDirectory(): java.io.File;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheWrapper extends com.bumptech.glide.load.engine.cache.DiskCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.DiskLruCacheWrapper>;
							public static create(param0: java.io.File, param1: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							/** @deprecated */
							public constructor(param0: java.io.File, param1: number);
							/** @deprecated */
							public static get(param0: java.io.File, param1: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalCacheDiskCacheFactory>;
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalPreferredCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.ExternalPreferredCacheDiskCacheFactory>;
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class InternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.InternalCacheDiskCacheFactory>;
							public constructor(param0: string, param1: string, param2: number);
							public constructor(param0: globalAndroid.content.Context, param1: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: globalAndroid.content.Context, param1: string, param2: number);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class LruResourceCache extends com.bumptech.glide.util.LruCache<com.bumptech.glide.load.Key,com.bumptech.glide.load.engine.Resource<any>> implements com.bumptech.glide.load.engine.cache.MemoryCache  {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.LruResourceCache>;
							public getCurrentSize(): number;
							public remove(param0: any): any;
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public onItemEvicted(param0: any, param1: any): void;
							public onItemEvicted(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): void;
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getSize(param0: com.bumptech.glide.load.engine.Resource<any>): number;
							public getSize(param0: any): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public put(param0: any, param1: any): any;
							public clearMemory(): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public trimMemory(param0: number): void;
							public getMaxSize(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getCurrentSize(): number;
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
								setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module MemoryCache {
							export class ResourceRemovedListener {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache$ResourceRemovedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
								});
								public constructor();
								public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCacheAdapter extends com.bumptech.glide.load.engine.cache.MemoryCache {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemoryCacheAdapter>;
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource<any>;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource<any>): com.bumptech.glide.load.engine.Resource<any>;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemorySizeCalculator {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator>;
							public getMemoryCacheSize(): number;
							public getBitmapPoolSize(): number;
							public getArrayPoolSizeInBytes(): number;
						}
						export module MemorySizeCalculator {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder>;
								public setBitmapPoolScreens(param0: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setLowMemoryMaxSizeMultiplier(param0: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public build(): com.bumptech.glide.load.engine.cache.MemorySizeCalculator;
								public setArrayPoolSize(param0: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public constructor(param0: globalAndroid.content.Context);
								public setMemoryCacheScreens(param0: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
								public setMaxSizeMultiplier(param0: number): com.bumptech.glide.load.engine.cache.MemorySizeCalculator.Builder;
							}
							export class DisplayMetricsScreenDimensions extends com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.DisplayMetricsScreenDimensions>;
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
							export class ScreenDimensions {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemorySizeCalculator$ScreenDimensions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getWidthPixels(): number;
									getHeightPixels(): number;
								});
								public constructor();
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class SafeKeyGenerator {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator>;
							public constructor();
							public getSafeKey(param0: com.bumptech.glide.load.Key): string;
						}
						export module SafeKeyGenerator {
							export class PoolableDigestContainer extends com.bumptech.glide.util.pool.FactoryPools.Poolable {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.cache.SafeKeyGenerator.PoolableDigestContainer>;
								public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class GlideExecutor {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor>;
							public shutdownNow(): java.util.List<java.lang.Runnable>;
							public toString(): string;
							/** @deprecated */
							public static newDiskCacheExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newDiskCacheExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newAnimationBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public execute(param0: java.lang.Runnable): void;
							public invokeAll(param0: java.util.Collection): java.util.List;
							public static calculateBestThreadCount(): number;
							/** @deprecated */
							public static newDiskCacheExecutor(param0: number, param1: string, param2: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public submit(param0: java.lang.Runnable, param1: any): java.util.concurrent.Future;
							public invokeAny(param0: java.util.Collection): any;
							public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
							public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
							public static newAnimationExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							/** @deprecated */
							public static newSourceExecutor(param0: number, param1: string, param2: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							/** @deprecated */
							public static newAnimationExecutor(param0: number, param1: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public shutdown(): void;
							/** @deprecated */
							public static newSourceExecutor(param0: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
							public static newDiskCacheBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public static newSourceBuilder(): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							public isShutdown(): boolean;
							public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): any;
							public isTerminated(): boolean;
							public submit(param0: java.lang.Runnable): java.util.concurrent.Future<any>;
							public static newUnlimitedSourceExecutor(): com.bumptech.glide.load.engine.executor.GlideExecutor;
						}
						export module GlideExecutor {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.Builder>;
								public static NO_THREAD_TIMEOUT: number;
								public setName(param0: string): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setThreadTimeoutMillis(param0: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public build(): com.bumptech.glide.load.engine.executor.GlideExecutor;
								public setThreadCount(param0: number): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
								public setUncaughtThrowableStrategy(param0: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy): com.bumptech.glide.load.engine.executor.GlideExecutor.Builder;
							}
							export class DefaultThreadFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.DefaultThreadFactory>;
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
							export class UncaughtThrowableStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.executor.GlideExecutor$UncaughtThrowableStrategy interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									handle(param0: java.lang.Throwable): void;
									<clinit>(): void;
								});
								public constructor();
								public static IGNORE: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static DEFAULT: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static LOG: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public static THROW: com.bumptech.glide.load.engine.executor.GlideExecutor.UncaughtThrowableStrategy;
								public handle(param0: java.lang.Throwable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class RuntimeCompat {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.executor.RuntimeCompat>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFillRunner {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner>;
							public cancel(): void;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.engine.cache.MemoryCache, param2: com.bumptech.glide.load.engine.prefill.PreFillQueue);
							public run(): void;
						}
						export module BitmapPreFillRunner {
							export class Clock {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.Clock>;
							}
							export class UniqueKey extends com.bumptech.glide.load.Key {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFillRunner.UniqueKey>;
								public equals(param0: any): boolean;
								public updateDiskCacheKey(param0: java.security.MessageDigest): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFiller {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.BitmapPreFiller>;
							public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public preFill(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillQueue {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillQueue>;
							public remove(): com.bumptech.glide.load.engine.prefill.PreFillType;
							public getSize(): number;
							public isEmpty(): boolean;
							public constructor(param0: java.util.Map<com.bumptech.glide.load.engine.prefill.PreFillType,java.lang.Integer>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillType {
							public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType>;
							public hashCode(): number;
							public toString(): string;
							public equals(param0: any): boolean;
						}
						export module PreFillType {
							export class Builder {
								public static class: java.lang.Class<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>;
								public constructor(param0: number);
								public constructor(param0: number, param1: number);
								public setWeight(param0: number): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
								public setConfig(param0: globalAndroid.graphics.Bitmap.Config): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class AssetUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader<any>>;
						public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(param0: globalAndroid.content.res.AssetManager, param1: com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>);
						public handles(param0: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module AssetUriLoader {
						export class AssetFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.AssetUriLoader$AssetFetcherFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.FileDescriptorFactory>;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<globalAndroid.os.ParcelFileDescriptor>;
							public constructor(param0: globalAndroid.content.res.AssetManager);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.os.ParcelFileDescriptor>;
							public teardown(): void;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.AssetUriLoader.StreamFactory>;
							public constructor(param0: globalAndroid.content.res.AssetManager);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
							public teardown(): void;
							public buildFetcher(param0: globalAndroid.content.res.AssetManager, param1: string): com.bumptech.glide.load.data.DataFetcher<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteArrayLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<native.Array<number>,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader<any>>;
						public buildLoadData(param0: native.Array<number>, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(param0: com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>);
						public handles(param0: native.Array<number>): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ByteArrayLoader {
						export class ByteBufferFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<native.Array<number>,java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.ByteBufferFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<native.Array<number>,java.nio.ByteBuffer>;
							public teardown(): void;
						}
						export class Converter<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Converter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.ByteArrayLoader$Converter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								convert(param0: native.Array<number>): Data;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public getDataClass(): java.lang.Class<Data>;
							public convert(param0: native.Array<number>): Data;
						}
						export class Fetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.Fetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<native.Array<number>,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteArrayLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<native.Array<number>,java.io.InputStream>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteBufferEncoder extends com.bumptech.glide.load.Encoder<java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferEncoder>;
						public constructor();
						public encode(param0: java.nio.ByteBuffer, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ByteBufferFileLoader extends com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader>;
						public constructor();
						public buildLoadData(param0: java.io.File, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.nio.ByteBuffer>;
						public handles(param0: java.io.File): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ByteBufferFileLoader {
						export class ByteBufferFetcher extends com.bumptech.glide.load.data.DataFetcher<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.ByteBufferFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
							public getDataClass(): java.lang.Class<any>;
						}
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ByteBufferFileLoader.Factory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,java.nio.ByteBuffer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class DataUrlLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader<any,any>>;
						public handles(param0: any): boolean;
						public constructor(param0: com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>);
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module DataUrlLoader {
						export class DataDecoder<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataDecoder<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.DataUrlLoader$DataDecoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decode(param0: string): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public getDataClass(): java.lang.Class<Data>;
							public decode(param0: string): Data;
						}
						export class DataUriFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class StreamFactory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.DataUrlLoader.StreamFactory<any>>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class FileLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.io.File,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader<any>>;
						public constructor(param0: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
						public handles(param0: java.io.File): boolean;
						public handles(param0: any): boolean;
						public buildLoadData(param0: java.io.File, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module FileLoader {
						export class Factory<Data>  extends com.bumptech.glide.load.model.ModelLoaderFactory<java.io.File,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.Factory<any>>;
							public constructor(param0: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.FileLoader.Factory<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileDescriptorFactory>;
							public constructor();
							public constructor(param0: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
							public teardown(): void;
						}
						export class FileFetcher<Data>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
						export class FileOpener<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.FileOpener<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.FileLoader$FileOpener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								open(param0: java.io.File): Data;
								close(param0: Data): void;
								getDataClass(): java.lang.Class<Data>;
							});
							public constructor();
							public close(param0: Data): void;
							public open(param0: java.io.File): Data;
							public getDataClass(): java.lang.Class<Data>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.FileLoader.Factory<java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.FileLoader.StreamFactory>;
							public constructor();
							public constructor(param0: com.bumptech.glide.load.model.FileLoader.FileOpener<any>);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.io.File,any>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GlideUrl extends com.bumptech.glide.load.Key {
						public static class: java.lang.Class<com.bumptech.glide.load.model.GlideUrl>;
						public constructor(param0: java.net.URL);
						public getCacheKey(): string;
						public constructor(param0: java.net.URL, param1: com.bumptech.glide.load.model.Headers);
						public getHeaders(): java.util.Map<string,string>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public toStringUrl(): string;
						public constructor(param0: string, param1: com.bumptech.glide.load.model.Headers);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toURL(): java.net.URL;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Headers {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Headers>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Headers interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							getHeaders(): java.util.Map<string,string>;
							<clinit>(): void;
						});
						public constructor();
						public static DEFAULT: com.bumptech.glide.load.model.Headers;
						public static NONE: com.bumptech.glide.load.model.Headers;
						public getHeaders(): java.util.Map<string,string>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaderFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaderFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.LazyHeaderFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildHeader(): string;
						});
						public constructor();
						public buildHeader(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaders extends com.bumptech.glide.load.model.Headers {
						public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders>;
						public getHeaders(): java.util.Map<string,string>;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public toString(): string;
					}
					export module LazyHeaders {
						export class Builder {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.Builder>;
							public constructor();
							public setHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public setHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public build(): com.bumptech.glide.load.model.LazyHeaders;
							public addHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
						}
						export class StringHeaderFactory extends com.bumptech.glide.load.model.LazyHeaderFactory {
							public static class: java.lang.Class<com.bumptech.glide.load.model.LazyHeaders.StringHeaderFactory>;
							public hashCode(): number;
							public toString(): string;
							public buildHeader(): string;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MediaStoreFileLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.File> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader>;
						public constructor(param0: globalAndroid.content.Context);
						public handles(param0: any): boolean;
						public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.File>;
						public handles(param0: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module MediaStoreFileLoader {
						export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.Factory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.File>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public constructor(param0: globalAndroid.content.Context);
						}
						export class FilePathFetcher extends com.bumptech.glide.load.data.DataFetcher<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MediaStoreFileLoader.FilePathFetcher>;
							public cancel(): void;
							public cleanup(): void;
							public getDataClass(): java.lang.Class<java.io.File>;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Model {
						public static class: java.lang.Class<com.bumptech.glide.load.model.Model>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Model interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							isEquivalentTo(param0: any): boolean;
						});
						public constructor();
						public isEquivalentTo(param0: any): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelCache<A, B>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache<any,any>>;
						public constructor();
						public put(param0: A, param1: number, param2: number, param3: B): void;
						public constructor(param0: number);
						public clear(): void;
						public get(param0: A, param1: number, param2: number): B;
					}
					export module ModelCache {
						export class ModelKey<A>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelCache.ModelKey<any>>;
							public hashCode(): number;
							public release(): void;
							public equals(param0: any): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoader<Model, Data>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoader<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
							handles(param0: Model): boolean;
						});
						public constructor();
						public buildLoadData(param0: Model, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<Data>;
						public handles(param0: Model): boolean;
					}
					export module ModelLoader {
						export class LoadData<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoader.LoadData<any>>;
							public sourceKey: com.bumptech.glide.load.Key;
							public alternateKeys: java.util.List<com.bumptech.glide.load.Key>;
							public fetcher: com.bumptech.glide.load.data.DataFetcher<Data>;
							public constructor(param0: com.bumptech.glide.load.Key, param1: java.util.List<com.bumptech.glide.load.Key>, param2: com.bumptech.glide.load.data.DataFetcher<Data>);
							public constructor(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.data.DataFetcher<Data>);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderFactory<T, Y>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderFactory<any,any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoaderFactory<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
							teardown(): void;
						});
						public constructor();
						public teardown(): void;
						public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<T,Y>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderRegistry {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry>;
						public getModelLoaders(param0: any): java.util.List;
						public build(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.model.ModelLoader<any,any>;
						public remove(param0: java.lang.Class, param1: java.lang.Class): void;
						public prepend(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public getDataClasses(param0: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
						public constructor(param0: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
						public append(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
						public replace(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>): void;
					}
					export module ModelLoaderRegistry {
						export class ModelLoaderCache {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache>;
							public put(param0: java.lang.Class, param1: java.util.List): void;
							public clear(): void;
							public get(param0: java.lang.Class): java.util.List;
						}
						export module ModelLoaderCache {
							export class Entry<Model>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry<any>>;
								public constructor(param0: java.util.List<com.bumptech.glide.load.model.ModelLoader<Model,any>>);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MultiModelLoader<Model, Data>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader<any,any>>;
						public handles(param0: any): boolean;
						public toString(): string;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module MultiModelLoader {
						export class MultiFetcher<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public onLoadFailed(param0: java.lang.Exception): void;
							public getDataClass(): java.lang.Class<Data>;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public onDataReady(param0: Data): void;
							public getDataClass(): java.lang.Class<any>;
							public onDataReady(param0: any): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class MultiModelLoaderFactory {
						public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory>;
						public build(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.model.ModelLoader<any,any>;
						public constructor(param0: androidx.core.util.Pools.Pool<java.util.List<java.lang.Throwable>>);
					}
					export module MultiModelLoaderFactory {
						export class EmptyModelLoader extends com.bumptech.glide.load.model.ModelLoader<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.EmptyModelLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export class Entry<Model, Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry<any,any>>;
							public constructor(param0: java.lang.Class<Model>, param1: java.lang.Class<Data>, param2: com.bumptech.glide.load.model.ModelLoaderFactory<any,any>);
							public handles(param0: java.lang.Class<any>): boolean;
							public handles(param0: java.lang.Class<any>, param1: java.lang.Class<any>): boolean;
						}
						export class Factory {
							public static class: java.lang.Class<com.bumptech.glide.load.model.MultiModelLoaderFactory.Factory>;
							public build(param0: java.util.List, param1: androidx.core.util.Pools.Pool): com.bumptech.glide.load.model.MultiModelLoader<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ResourceLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader<any>>;
						public buildLoadData(param0: java.lang.Integer, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>);
						public handles(param0: java.lang.Integer): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module ResourceLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.AssetFileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(param0: globalAndroid.content.res.Resources);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.content.res.AssetFileDescriptor>;
							public teardown(): void;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.FileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(param0: globalAndroid.content.res.Resources);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.os.ParcelFileDescriptor>;
							public teardown(): void;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.StreamFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(param0: globalAndroid.content.res.Resources);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,java.io.InputStream>;
							public teardown(): void;
						}
						export class UriFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.lang.Integer,globalAndroid.net.Uri> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.ResourceLoader.UriFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public constructor(param0: globalAndroid.content.res.Resources);
							public teardown(): void;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.lang.Integer,globalAndroid.net.Uri>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StreamEncoder extends com.bumptech.glide.load.Encoder<java.io.InputStream> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StreamEncoder>;
						public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						public encode(param0: java.io.InputStream, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StringLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<string,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader<any>>;
						public handles(param0: string): boolean;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>);
						public handles(param0: any): boolean;
						public buildLoadData(param0: string, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module StringLoader {
						export class AssetFileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,globalAndroid.content.res.AssetFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.AssetFileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,globalAndroid.content.res.AssetFileDescriptor>;
						}
						export class FileDescriptorFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.FileDescriptorFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,globalAndroid.os.ParcelFileDescriptor>;
						}
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<string,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.StringLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<string,java.io.InputStream>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UnitModelLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader<any>>;
						public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader<any>;
						/** @deprecated */
						public constructor();
						public handles(param0: any): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UnitModelLoader {
						export class Factory<Model>  extends com.bumptech.glide.load.model.ModelLoaderFactory<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.Factory<any>>;
							/** @deprecated */
							public constructor();
							public static getInstance(): com.bumptech.glide.load.model.UnitModelLoader.Factory<any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public teardown(): void;
						}
						export class UnitFetcher<Model>  extends com.bumptech.glide.load.data.DataFetcher<any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher<any>>;
							public cancel(): void;
							public cleanup(): void;
							public getDataSource(): com.bumptech.glide.load.DataSource;
							public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							public getDataClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader<any>>;
						public constructor(param0: com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>);
						public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public handles(param0: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UriLoader {
						export class AssetFileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.AssetFileDescriptorFactory>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.content.res.AssetFileDescriptor>;
							public constructor(param0: globalAndroid.content.ContentResolver);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public teardown(): void;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<globalAndroid.content.res.AssetFileDescriptor>;
						}
						export class FileDescriptorFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.FileDescriptorFactory>;
							public constructor(param0: globalAndroid.content.ContentResolver);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<globalAndroid.os.ParcelFileDescriptor>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,globalAndroid.os.ParcelFileDescriptor>;
							public teardown(): void;
						}
						export class LocalUriFetcherFactory<Data>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.UriLoader$LocalUriFetcherFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
							});
							public constructor();
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<Data>;
						}
						export class StreamFactory extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UriLoader.StreamFactory>;
							public constructor(param0: globalAndroid.content.ContentResolver);
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<any>;
							public teardown(): void;
							public build(param0: globalAndroid.net.Uri): com.bumptech.glide.load.data.DataFetcher<java.io.InputStream>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UrlUriLoader<Data>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader<any>>;
						public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						public handles(param0: any): boolean;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,any>);
						public handles(param0: globalAndroid.net.Uri): boolean;
						public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
					}
					export module UrlUriLoader {
						export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.UrlUriLoader.StreamFactory>;
							public constructor();
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
							public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
							public teardown(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export abstract class BaseGlideUrlLoader<Model>  extends com.bumptech.glide.load.model.ModelLoader<any,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.BaseGlideUrlLoader<any>>;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public handles(param0: any): boolean;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>, param1: com.bumptech.glide.load.model.ModelCache<any,com.bumptech.glide.load.model.GlideUrl>);
							public getUrl(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): string;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public getHeaders(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.Headers;
							public getAlternateUrls(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): java.util.List<string>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpGlideUrlLoader extends com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader>;
							public static TIMEOUT: com.bumptech.glide.load.Option<java.lang.Integer>;
							public constructor();
							public handles(param0: any): boolean;
							public constructor(param0: com.bumptech.glide.load.model.ModelCache<com.bumptech.glide.load.model.GlideUrl,com.bumptech.glide.load.model.GlideUrl>);
							public buildLoadData(param0: com.bumptech.glide.load.model.GlideUrl, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(param0: com.bumptech.glide.load.model.GlideUrl): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module HttpGlideUrlLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpGlideUrlLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpUriLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader>;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public handles(param0: any): boolean;
							public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(param0: globalAndroid.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module HttpUriLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.HttpUriLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreImageThumbLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(param0: globalAndroid.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module MediaStoreImageThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreImageThumbLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreVideoThumbLoader extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader>;
							public handles(param0: any): boolean;
							public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public handles(param0: globalAndroid.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public constructor(param0: globalAndroid.content.Context);
						}
						export module MediaStoreVideoThumbLoader {
							export class Factory extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.MediaStoreVideoThumbLoader.Factory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,java.io.InputStream>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(param0: globalAndroid.content.Context);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class QMediaStoreUriLoader<DataT>  extends com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader<any>>;
							public handles(param0: any): boolean;
							public buildLoadData(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
							public handles(param0: globalAndroid.net.Uri): boolean;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module QMediaStoreUriLoader {
							export abstract class Factory<DataT>  extends com.bumptech.glide.load.model.ModelLoaderFactory<globalAndroid.net.Uri,any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<any>>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>;
							}
							export class FileDescriptorFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<globalAndroid.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.FileDescriptorFactory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(param0: globalAndroid.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>;
							}
							export class InputStreamFactory extends com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory<java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.InputStreamFactory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public constructor(param0: globalAndroid.content.Context);
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<globalAndroid.net.Uri,any>;
							}
							export class QMediaStoreUriFetcher<DataT>  extends com.bumptech.glide.load.data.DataFetcher<any> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher<any>>;
								public cancel(): void;
								public cleanup(): void;
								public getDataClass(): java.lang.Class<any>;
								public getDataSource(): com.bumptech.glide.load.DataSource;
								public loadData(param0: com.bumptech.glide.Priority, param1: com.bumptech.glide.load.data.DataFetcher.DataCallback<any>): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class UrlLoader extends com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream> {
							public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader>;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader<com.bumptech.glide.load.model.GlideUrl,java.io.InputStream>);
							public handles(param0: any): boolean;
							public handles(param0: java.net.URL): boolean;
							public buildLoadData(param0: java.net.URL, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<java.io.InputStream>;
							public buildLoadData(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.model.ModelLoader.LoadData<any>;
						}
						export module UrlLoader {
							export class StreamFactory extends com.bumptech.glide.load.model.ModelLoaderFactory<java.net.URL,java.io.InputStream> {
								public static class: java.lang.Class<com.bumptech.glide.load.model.stream.UrlLoader.StreamFactory>;
								public teardown(): void;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<any,any>;
								public build(param0: com.bumptech.glide.load.model.MultiModelLoaderFactory): com.bumptech.glide.load.model.ModelLoader<java.net.URL,java.io.InputStream>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export abstract class ImageDecoderResourceDecoder<T>  extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.ImageDecoder.Source,any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.ImageDecoderResourceDecoder<any>>;
						public decode(param0: globalAndroid.graphics.ImageDecoder.Source, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
						public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						public constructor();
						public decode(param0: globalAndroid.graphics.ImageDecoder.Source, param1: number, param2: number, param3: globalAndroid.graphics.ImageDecoder.OnHeaderDecodedListener): com.bumptech.glide.load.engine.Resource<any>;
						public handles(param0: globalAndroid.graphics.ImageDecoder.Source, param1: com.bumptech.glide.load.Options): boolean;
						public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class SimpleResource<T>  extends com.bumptech.glide.load.engine.Resource<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.SimpleResource<any>>;
						public data: any;
						public getResourceClass(): java.lang.Class<any>;
						public getSize(): number;
						public recycle(): void;
						public constructor(param0: any);
						public get(): any;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class UnitTransformation<T>  extends com.bumptech.glide.load.Transformation<any> {
						public static class: java.lang.Class<com.bumptech.glide.load.resource.UnitTransformation<any>>;
						public static get(): com.bumptech.glide.load.resource.UnitTransformation<any>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableDecoder<DataType>  extends com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder<any>>;
							public constructor(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap>);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableEncoder>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.Bitmap>);
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public encode(param0: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<globalAndroid.graphics.drawable.BitmapDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableResource>;
							public get(): any;
							public constructor(param0: globalAndroid.graphics.drawable.BitmapDrawable, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.BitmapDrawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapDrawableTransformation>;
							public constructor(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>);
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapEncoder extends com.bumptech.glide.load.ResourceEncoder<globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapEncoder>;
							public static COMPRESSION_QUALITY: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static COMPRESSION_FORMAT: com.bumptech.glide.load.Option<globalAndroid.graphics.Bitmap.CompressFormat>;
							/** @deprecated */
							public constructor();
							public encode(param0: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.resource.ImageDecoderResourceDecoder<globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: globalAndroid.graphics.ImageDecoder.Source, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: globalAndroid.graphics.ImageDecoder.Source, param1: number, param2: number, param3: globalAndroid.graphics.ImageDecoder.OnHeaderDecodedListener): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: globalAndroid.graphics.ImageDecoder.Source, param1: number, param2: number, param3: globalAndroid.graphics.ImageDecoder.OnHeaderDecodedListener): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: globalAndroid.graphics.ImageDecoder.Source, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapResource>;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public static obtain(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.resource.bitmap.BitmapResource;
							public constructor(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.Bitmap>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public get(): globalAndroid.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class BitmapTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions>;
							public constructor();
							public static withWrapped(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(param0: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public transitionUsing(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static with(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.Bitmap>): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public crossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(param0: number): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
							public static withCrossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.bitmap.BitmapTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ByteBufferBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public decode(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ByteBufferBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ByteBufferBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterCrop>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterInside extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CenterInside>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CircleCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.CircleCrop>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DefaultImageHeaderParser extends com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser>;
							public constructor();
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						}
						export module DefaultImageHeaderParser {
							export class ByteBufferReader extends com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.ByteBufferReader>;
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: native.Array<number>, param1: number): number;
							}
							export class RandomAccessReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.RandomAccessReader>;
							}
							export class Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser$Reader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									getUInt8(): number;
									getUInt16(): number;
									read(param0: native.Array<number>, param1: number): number;
									skip(param0: number): number;
								});
								public constructor();
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: native.Array<number>, param1: number): number;
							}
							export module Reader {
								export class EndOfFileException {
									public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader.EndOfFileException>;
								}
							}
							export class StreamReader extends com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.Reader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DefaultImageHeaderParser.StreamReader>;
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public read(param0: native.Array<number>, param1: number): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class DownsampleStrategy {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static AT_LEAST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static AT_MOST: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static FIT_CENTER: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_INSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static CENTER_OUTSIDE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static NONE: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static DEFAULT: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy;
							public static OPTION: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public constructor();
							public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
						}
						export module DownsampleStrategy {
							export class AtLeast extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtLeast>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class AtMost extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.AtMost>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class CenterInside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterInside>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class CenterOutside extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.CenterOutside>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class FitCenter extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.FitCenter>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class None extends com.bumptech.glide.load.resource.bitmap.DownsampleStrategy {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.None>;
								public getScaleFactor(param0: number, param1: number, param2: number, param3: number): number;
								public getSampleSizeRounding(param0: number, param1: number, param2: number, param3: number): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
							export class SampleSizeRounding {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding>;
								public static MEMORY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static QUALITY: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
								public static values(): native.Array<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding>;
								public static valueOf(param0: string): com.bumptech.glide.load.resource.bitmap.DownsampleStrategy.SampleSizeRounding;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class Downsampler {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static PREFERRED_COLOR_SPACE: com.bumptech.glide.load.Option<com.bumptech.glide.load.PreferredColorSpace>;
							public static DOWNSAMPLE_STRATEGY: com.bumptech.glide.load.Option<com.bumptech.glide.load.resource.bitmap.DownsampleStrategy>;
							public static FIX_BITMAP_SIZE_TO_REQUESTED_DIMENSIONS: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public static ALLOW_HARDWARE_CONFIG: com.bumptech.glide.load.Option<java.lang.Boolean>;
							public handles(param0: java.nio.ByteBuffer): boolean;
							public handles(param0: globalAndroid.os.ParcelFileDescriptor): boolean;
							public decode(param0: java.io.InputStream, param1: number, param2: number, param3: com.bumptech.glide.load.Options, param4: com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public constructor(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: globalAndroid.util.DisplayMetrics, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param3: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public decode(param0: globalAndroid.os.ParcelFileDescriptor, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: java.io.InputStream): boolean;
							public decode(param0: java.io.InputStream, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						}
						export module Downsampler {
							export class DecodeCallbacks {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.Downsampler$DecodeCallbacks interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onObtainBounds(): void;
									onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								});
								public constructor();
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								public onObtainBounds(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DrawableToBitmapConverter {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableToBitmapConverter>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class DrawableTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.DrawableTransformation>;
							public asBitmapDrawable(): com.bumptech.glide.load.Transformation<globalAndroid.graphics.drawable.BitmapDrawable>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public equals(param0: any): boolean;
							public constructor(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, param1: boolean);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ExifInterfaceImageHeaderParser extends com.bumptech.glide.load.ImageHeaderParser {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ExifInterfaceImageHeaderParser>;
							public constructor();
							public getOrientation(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.nio.ByteBuffer): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public getOrientation(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool): number;
							public getType(param0: java.io.InputStream): com.bumptech.glide.load.ImageHeaderParser.ImageType;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FitCenter extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.FitCenter>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GranularRoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.GranularRoundedCorners>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number, param1: number, param2: number, param3: number);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class HardwareConfigState {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.HardwareConfigState>;
							public isHardwareConfigAllowed(param0: number, param1: number, param2: boolean, param3: boolean): boolean;
							public static getInstance(): com.bumptech.glide.load.resource.bitmap.HardwareConfigState;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageReader {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.ImageReader interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
								getImageOrientation(): number;
								stopGrowingBuffers(): void;
							});
							public constructor();
							public getImageOrientation(): number;
							public stopGrowingBuffers(): void;
							public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
						}
						export module ImageReader {
							export class InputStreamImageReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.InputStreamImageReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
							export class ParcelFileDescriptorImageReader extends com.bumptech.glide.load.resource.bitmap.ImageReader {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ImageReader.ParcelFileDescriptorImageReader>;
								public getImageOrientation(): number;
								public stopGrowingBuffers(): void;
								public decodeBitmap(param0: globalAndroid.graphics.BitmapFactory.Options): globalAndroid.graphics.Bitmap;
								public getImageType(): com.bumptech.glide.load.ImageHeaderParser.ImageType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class InputStreamBitmapImageDecoderResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.InputStreamBitmapImageDecoderResourceDecoder>;
							public constructor();
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: java.io.InputStream, param1: com.bumptech.glide.load.Options): boolean;
							public decode(param0: java.io.InputStream, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class LazyBitmapDrawableResource extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource>;
							public get(): any;
							public static obtain(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public getSize(): number;
							public get(): globalAndroid.graphics.drawable.BitmapDrawable;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.BitmapDrawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							/** @deprecated */
							public static obtain(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
							/** @deprecated */
							public static obtain(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap): com.bumptech.glide.load.resource.bitmap.LazyBitmapDrawableResource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ParcelFileDescriptorBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.os.ParcelFileDescriptor,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ParcelFileDescriptorBitmapDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.Downsampler);
							public decode(param0: globalAndroid.os.ParcelFileDescriptor, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: globalAndroid.os.ParcelFileDescriptor, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RecyclableBufferedInputStream {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream>;
							public mark(param0: number): void;
							public constructor(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public markSupported(): boolean;
							public close(): void;
							public skip(param0: number): number;
							public available(): number;
							public fixMarkLimit(): void;
							public read(): number;
							public release(): void;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
							public reset(): void;
						}
						export module RecyclableBufferedInputStream {
							export class InvalidMarkException {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream.InvalidMarkException>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ResourceBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.net.Uri,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.ResourceBitmapDecoder>;
							public handles(param0: globalAndroid.net.Uri, param1: com.bumptech.glide.load.Options): boolean;
							public constructor(param0: com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class Rotate extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.Rotate>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RoundedCorners extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.RoundedCorners>;
							public constructor();
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public constructor(param0: number);
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder>;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.Downsampler, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: java.io.InputStream, param1: com.bumptech.glide.load.Options): boolean;
							public decode(param0: java.io.InputStream, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module StreamBitmapDecoder {
							export class UntrustedCallbacks extends com.bumptech.glide.load.resource.bitmap.Downsampler.DecodeCallbacks {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.StreamBitmapDecoder.UntrustedCallbacks>;
								public onDecodeComplete(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap): void;
								public onObtainBounds(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class TransformationUtils {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils>;
							public static PAINT_FLAGS: number;
							public static isExifOrientationRequired(param0: number): boolean;
							public static circleCrop(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							/** @deprecated */
							public static roundedCorners(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: number): globalAndroid.graphics.Bitmap;
							public static getBitmapDrawableLock(): java.util.concurrent.locks.Lock;
							public static rotateImageExif(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number): globalAndroid.graphics.Bitmap;
							public static roundedCorners(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number): globalAndroid.graphics.Bitmap;
							public static roundedCorners(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number, param4: number, param5: number): globalAndroid.graphics.Bitmap;
							public static centerCrop(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public static centerInside(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public static getExifOrientationDegrees(param0: number): number;
							public static rotateImage(param0: globalAndroid.graphics.Bitmap, param1: number): globalAndroid.graphics.Bitmap;
							public static fitCenter(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: globalAndroid.graphics.Bitmap, param2: number, param3: number): globalAndroid.graphics.Bitmap;
							public static setAlpha(param0: globalAndroid.graphics.Bitmap, param1: globalAndroid.graphics.Bitmap): void;
						}
						export module TransformationUtils {
							export class DrawRoundedCornerFn {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.DrawRoundedCornerFn>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.TransformationUtils$DrawRoundedCornerFn interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									drawRoundedCorners(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.RectF): void;
								});
								public constructor();
								public drawRoundedCorners(param0: globalAndroid.graphics.Canvas, param1: globalAndroid.graphics.Paint, param2: globalAndroid.graphics.RectF): void;
							}
							export class NoLock {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.TransformationUtils.NoLock>;
								public lockInterruptibly(): void;
								public newCondition(): java.util.concurrent.locks.Condition;
								public unlock(): void;
								public lock(): void;
								public tryLock(): boolean;
								public tryLock(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class UnitBitmapDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.Bitmap,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder>;
							public constructor();
							public handles(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: globalAndroid.graphics.Bitmap, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module UnitBitmapDecoder {
							export class NonOwnedBitmapResource extends com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.UnitBitmapDecoder.NonOwnedBitmapResource>;
								public getResourceClass(): java.lang.Class<globalAndroid.graphics.Bitmap>;
								public get(): globalAndroid.graphics.Bitmap;
								public getResourceClass(): java.lang.Class<any>;
								public get(): any;
								public recycle(): void;
								public getSize(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoBitmapDecoder extends com.bumptech.glide.load.resource.bitmap.VideoDecoder<globalAndroid.os.ParcelFileDescriptor> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public constructor(param0: globalAndroid.content.Context);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoDecoder<T>  extends com.bumptech.glide.load.ResourceDecoder<any,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder<any>>;
							public static DEFAULT_FRAME: number;
							public static TARGET_FRAME: com.bumptech.glide.load.Option<java.lang.Long>;
							public static FRAME_OPTION: com.bumptech.glide.load.Option<java.lang.Integer>;
							public static parcel(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<globalAndroid.os.ParcelFileDescriptor,globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public static byteBuffer(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public static asset(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.ResourceDecoder<globalAndroid.content.res.AssetFileDescriptor,globalAndroid.graphics.Bitmap>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module VideoDecoder {
							export class AssetFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<globalAndroid.content.res.AssetFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.AssetFileDescriptorInitializer>;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: globalAndroid.content.res.AssetFileDescriptor): void;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: any): void;
							}
							export class ByteBufferInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ByteBufferInitializer>;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: java.nio.ByteBuffer): void;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: any): void;
							}
							export class MediaMetadataRetrieverFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverFactory>;
								public build(): globalAndroid.media.MediaMetadataRetriever;
							}
							export class MediaMetadataRetrieverInitializer<T>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<any>>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.VideoDecoder$MediaMetadataRetrieverInitializer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: T): void;
								});
								public constructor();
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: T): void;
							}
							export class ParcelFileDescriptorInitializer extends com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer<globalAndroid.os.ParcelFileDescriptor> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bitmap.VideoDecoder.ParcelFileDescriptorInitializer>;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: globalAndroid.os.ParcelFileDescriptor): void;
								public initialize(param0: globalAndroid.media.MediaMetadataRetriever, param1: any): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class ByteBufferRewinder extends com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder>;
							public cleanup(): void;
							public constructor(param0: java.nio.ByteBuffer);
							public rewindAndGet(): java.nio.ByteBuffer;
							public rewindAndGet(): any;
						}
						export module ByteBufferRewinder {
							export class Factory extends com.bumptech.glide.load.data.DataRewinder.Factory<java.nio.ByteBuffer> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.ByteBufferRewinder.Factory>;
								public build(param0: java.nio.ByteBuffer): com.bumptech.glide.load.data.DataRewinder<java.nio.ByteBuffer>;
								public getDataClass(): java.lang.Class<java.nio.ByteBuffer>;
								public build(param0: any): com.bumptech.glide.load.data.DataRewinder<any>;
								public constructor();
								public getDataClass(): java.lang.Class<any>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class BytesResource extends com.bumptech.glide.load.engine.Resource<native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.bytes.BytesResource>;
							public get(): any;
							public constructor(param0: native.Array<number>);
							public getResourceClass(): java.lang.Class<native.Array<number>>;
							public getSize(): number;
							public get(): native.Array<number>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class DrawableDecoderCompat {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableDecoderCompat>;
							public static getDrawable(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.content.res.Resources.Theme): globalAndroid.graphics.drawable.Drawable;
							public static getDrawable(param0: globalAndroid.content.Context, param1: globalAndroid.content.Context, param2: number): globalAndroid.graphics.drawable.Drawable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class DrawableResource<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableResource<any>>;
							public drawable: T;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public constructor(param0: T);
							public get(): T;
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class DrawableTransitionOptions extends com.bumptech.glide.TransitionOptions<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions>;
							public constructor();
							public static withCrossFade(param0: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(param0: number): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static with(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public crossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
							public static withCrossFade(param0: com.bumptech.glide.request.transition.DrawableCrossFadeFactory): com.bumptech.glide.load.resource.drawable.DrawableTransitionOptions;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class NonOwnedDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.NonOwnedDrawableResource>;
							public get(): any;
							public getSize(): number;
							public initialize(): void;
							public getResourceClass(): java.lang.Class<globalAndroid.graphics.drawable.Drawable>;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class ResourceDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.net.Uri,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.ResourceDrawableDecoder>;
							public handles(param0: globalAndroid.net.Uri, param1: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: globalAndroid.net.Uri, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public constructor(param0: globalAndroid.content.Context);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export class UnitDrawableDecoder extends com.bumptech.glide.load.ResourceDecoder<globalAndroid.graphics.drawable.Drawable,globalAndroid.graphics.drawable.Drawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.drawable.UnitDrawableDecoder>;
							public constructor();
							public decode(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: globalAndroid.graphics.drawable.Drawable, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.File,java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileDecoder>;
							public constructor();
							public decode(param0: java.io.File, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<java.io.File>;
							public handles(param0: java.io.File, param1: com.bumptech.glide.load.Options): boolean;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileResource extends com.bumptech.glide.load.resource.SimpleResource<java.io.File> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.file.FileResource>;
							public get(): any;
							public constructor(param0: java.io.File);
							public getSize(): number;
							public getResourceClass(): java.lang.Class<any>;
							public recycle(): void;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class ByteBufferGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder>;
							public constructor(param0: globalAndroid.content.Context, param1: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param3: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: java.nio.ByteBuffer, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.resource.gif.GifDrawableResource;
							public handles(param0: java.nio.ByteBuffer, param1: com.bumptech.glide.load.Options): boolean;
							public constructor(param0: globalAndroid.content.Context);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
						export module ByteBufferGifDecoder {
							export class GifDecoderFactory {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifDecoderFactory>;
							}
							export class GifHeaderParserPool {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.ByteBufferGifDecoder.GifHeaderParserPool>;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifBitmapProvider {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifBitmapProvider>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public obtain(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): globalAndroid.graphics.Bitmap;
							public obtainByteArray(param0: number): native.Array<number>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public obtainIntArray(param0: number): native.Array<number>;
							public release(param0: native.Array<number>): void;
							public release(param0: globalAndroid.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawable implements com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public static LOOP_FOREVER: number;
							public static LOOP_INTRINSIC: number;
							public getBuffer(): java.nio.ByteBuffer;
							public registerAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): void;
							public clearAnimationCallbacks(): void;
							public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
							public onFrameReady(): void;
							public setVisible(param0: boolean, param1: boolean): boolean;
							/** @deprecated */
							public constructor(param0: globalAndroid.content.Context, param1: com.bumptech.glide.gifdecoder.GifDecoder, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param3: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, param4: number, param5: number, param6: globalAndroid.graphics.Bitmap);
							public isRunning(): boolean;
							public getSize(): number;
							public getFirstFrame(): globalAndroid.graphics.Bitmap;
							public stop(): void;
							public start(): void;
							public setLoopCount(param0: number): void;
							public getIntrinsicWidth(): number;
							public getFrameTransformation(): com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>;
							public setFrameTransformation(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, param1: globalAndroid.graphics.Bitmap): void;
							public startFromFirstFrame(): void;
							public unregisterAnimationCallback(param0: androidx.vectordrawable.graphics.drawable.Animatable2Compat.AnimationCallback): boolean;
							public constructor(param0: globalAndroid.content.Context, param1: com.bumptech.glide.gifdecoder.GifDecoder, param2: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>, param3: number, param4: number, param5: globalAndroid.graphics.Bitmap);
							public getFrameCount(): number;
							public onBoundsChange(param0: globalAndroid.graphics.Rect): void;
							public draw(param0: globalAndroid.graphics.Canvas): void;
							public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
							public getIntrinsicHeight(): number;
							public setAlpha(param0: number): void;
							public getFrameIndex(): number;
							public getOpacity(): number;
							public recycle(): void;
						}
						export module GifDrawable {
							export class GifState {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable.GifState>;
								public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
								public newDrawable(): globalAndroid.graphics.drawable.Drawable;
								public getChangingConfigurations(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableEncoder extends com.bumptech.glide.load.ResourceEncoder<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableEncoder>;
							public constructor();
							public getEncodeStrategy(param0: com.bumptech.glide.load.Options): com.bumptech.glide.load.EncodeStrategy;
							public encode(param0: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
							public encode(param0: any, param1: java.io.File, param2: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource<com.bumptech.glide.load.resource.gif.GifDrawable> implements com.bumptech.glide.load.engine.Initializable  {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableResource>;
							public get(): any;
							public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable);
							public getSize(): number;
							public getResourceClass(): java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public initialize(): void;
							public recycle(): void;
							public getResourceClass(): java.lang.Class<any>;
							public constructor(param0: any);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableTransformation extends com.bumptech.glide.load.Transformation<com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifDrawableTransformation>;
							public constructor(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>);
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
							public hashCode(): number;
							public equals(param0: any): boolean;
							public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameLoader {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader>;
						}
						export module GifFrameLoader {
							export class DelayTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.DelayTarget>;
								public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
								public getRequest(): com.bumptech.glide.request.Request;
								public setRequest(param0: com.bumptech.glide.request.Request): void;
								public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
								public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
								public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
								public onResourceReady(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.request.transition.Transition<any>): void;
							}
							export class FrameCallback {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$FrameCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
							export class FrameLoaderCallback {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameLoaderCallback>;
								public handleMessage(param0: globalAndroid.os.Message): boolean;
							}
							export class OnEveryFrameListener {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameLoader.OnEveryFrameListener>;
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$OnEveryFrameListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
								 */
								public constructor(implementation: {
									onFrameReady(): void;
								});
								public constructor();
								public onFrameReady(): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameResourceDecoder extends com.bumptech.glide.load.ResourceDecoder<com.bumptech.glide.gifdecoder.GifDecoder,globalAndroid.graphics.Bitmap> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifFrameResourceDecoder>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public handles(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: com.bumptech.glide.load.Options): boolean;
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifOptions {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.GifOptions>;
							public static DECODE_FORMAT: com.bumptech.glide.load.Option<com.bumptech.glide.load.DecodeFormat>;
							public static DISABLE_ANIMATION: com.bumptech.glide.load.Option<java.lang.Boolean>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class StreamGifDecoder extends com.bumptech.glide.load.ResourceDecoder<java.io.InputStream,com.bumptech.glide.load.resource.gif.GifDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.gif.StreamGifDecoder>;
							public decode(param0: any, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public decode(param0: java.io.InputStream, param1: number, param2: number, param3: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>;
							public handles(param0: java.io.InputStream, param1: com.bumptech.glide.load.Options): boolean;
							public constructor(param0: java.util.List<com.bumptech.glide.load.ImageHeaderParser>, param1: com.bumptech.glide.load.ResourceDecoder<java.nio.ByteBuffer,com.bumptech.glide.load.resource.gif.GifDrawable>, param2: com.bumptech.glide.load.engine.bitmap_recycle.ArrayPool);
							public handles(param0: any, param1: com.bumptech.glide.load.Options): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<native.Array<number>>;
							public constructor(param0: globalAndroid.graphics.Bitmap.CompressFormat, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapDrawableTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,globalAndroid.graphics.drawable.BitmapDrawable> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.BitmapDrawableTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.BitmapDrawable>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(param0: globalAndroid.content.res.Resources);
							/** @deprecated */
							public constructor(param0: globalAndroid.content.res.Resources, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(param0: globalAndroid.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class DrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.drawable.Drawable,native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.DrawableBytesTranscoder>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<globalAndroid.graphics.Bitmap,native.Array<number>>, param2: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,native.Array<number>>);
							public transcode(param0: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.drawable.Drawable>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<native.Array<number>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifDrawableBytesTranscoder extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<com.bumptech.glide.load.resource.gif.GifDrawable,native.Array<number>> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.GifDrawableBytesTranscoder>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public transcode(param0: com.bumptech.glide.load.engine.Resource<com.bumptech.glide.load.resource.gif.GifDrawable>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<native.Array<number>>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class ResourceTranscoder<Z, R>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
							});
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<Z>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<R>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class TranscoderRegistry {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry>;
							public constructor();
							public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>): void;
							public get(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
							public getTranscodeClasses(param0: java.lang.Class, param1: java.lang.Class): java.util.List;
						}
						export module TranscoderRegistry {
							export class Entry<Z, R>  extends java.lang.Object {
								public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry<any,any>>;
								public handles(param0: java.lang.Class<any>, param1: java.lang.Class<any>): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class UnitTranscoder<Z>  extends com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any> {
							public static class: java.lang.Class<com.bumptech.glide.load.resource.transcode.UnitTranscoder<any>>;
							public constructor();
							public transcode(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.Options): com.bumptech.glide.load.engine.Resource<any>;
							public static get(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder<any,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ActivityFragmentLifecycle extends com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.ActivityFragmentLifecycle>;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ApplicationLifecycle extends com.bumptech.glide.manager.Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.ApplicationLifecycle>;
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitor extends com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
				export module ConnectivityMonitor {
					export class ConnectivityListener {
						public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor$ConnectivityListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onConnectivityChanged(param0: boolean): void;
						});
						public constructor();
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitorFactory {
					public static class: java.lang.Class<com.bumptech.glide.manager.ConnectivityMonitorFactory>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitorFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
					});
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitor extends com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitorFactory extends com.bumptech.glide.manager.ConnectivityMonitorFactory {
					public static class: java.lang.Class<com.bumptech.glide.manager.DefaultConnectivityMonitorFactory>;
					public constructor();
					public build(param0: globalAndroid.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class EmptyRequestManagerTreeNode extends com.bumptech.glide.manager.RequestManagerTreeNode {
					public static class: java.lang.Class<com.bumptech.glide.manager.EmptyRequestManagerTreeNode>;
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class Lifecycle {
					public static class: java.lang.Class<com.bumptech.glide.manager.Lifecycle>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.Lifecycle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
						removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					});
					public constructor();
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					public removeListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.LifecycleListener>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.LifecycleListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class NullConnectivityMonitor extends com.bumptech.glide.manager.ConnectivityMonitor {
					public static class: java.lang.Class<com.bumptech.glide.manager.NullConnectivityMonitor>;
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerFragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerFragment>;
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public onStart(): void;
					public toString(): string;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onStop(): void;
					public onDestroy(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onAttach(param0: globalAndroid.app.Activity): void;
				}
				export module RequestManagerFragment {
					export class FragmentRequestManagerTreeNode extends com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerFragment.FragmentRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerRetriever {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever>;
					public constructor(param0: com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory);
					public get(param0: globalAndroid.view.View): com.bumptech.glide.RequestManager;
					/** @deprecated */
					public get(param0: globalAndroid.app.Fragment): com.bumptech.glide.RequestManager;
					public get(param0: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
					public get(param0: androidx.fragment.app.FragmentActivity): com.bumptech.glide.RequestManager;
					public get(param0: androidx.fragment.app.Fragment): com.bumptech.glide.RequestManager;
					public get(param0: globalAndroid.app.Activity): com.bumptech.glide.RequestManager;
					public handleMessage(param0: globalAndroid.os.Message): boolean;
				}
				export module RequestManagerRetriever {
					export class RequestManagerFactory {
						public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerRetriever.RequestManagerFactory>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerRetriever$RequestManagerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
						});
						public constructor();
						public build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerTreeNode {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestManagerTreeNode>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerTreeNode interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
					});
					public constructor();
					public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestTracker {
					public static class: java.lang.Class<com.bumptech.glide.manager.RequestTracker>;
					public toString(): string;
					public pauseRequests(): void;
					public constructor();
					public runRequest(param0: com.bumptech.glide.request.Request): void;
					public pauseAllRequests(): void;
					public clearRequests(): void;
					public restartRequests(): void;
					public clearAndRemove(param0: com.bumptech.glide.request.Request): boolean;
					public isPaused(): boolean;
					public resumeRequests(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class SupportRequestManagerFragment {
					public static class: java.lang.Class<com.bumptech.glide.manager.SupportRequestManagerFragment>;
					public constructor(param0: com.bumptech.glide.manager.ActivityFragmentLifecycle);
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public onStart(): void;
					public toString(): string;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public onAttach(param0: globalAndroid.content.Context): void;
					public constructor();
					public onDetach(): void;
					public onStop(): void;
					public onDestroy(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
				}
				export module SupportRequestManagerFragment {
					export class SupportFragmentRequestManagerTreeNode extends com.bumptech.glide.manager.RequestManagerTreeNode {
						public static class: java.lang.Class<com.bumptech.glide.manager.SupportRequestManagerFragment.SupportFragmentRequestManagerTreeNode>;
						public getDescendants(): java.util.Set<com.bumptech.glide.RequestManager>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class TargetTracker extends com.bumptech.glide.manager.LifecycleListener {
					public static class: java.lang.Class<com.bumptech.glide.manager.TargetTracker>;
					public onStart(): void;
					public constructor();
					public clear(): void;
					public getAll(): java.util.List<com.bumptech.glide.request.target.Target<any>>;
					public track(param0: com.bumptech.glide.request.target.Target<any>): void;
					public onStop(): void;
					public onDestroy(): void;
					public untrack(param0: com.bumptech.glide.request.target.Target<any>): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export abstract class AppGlideModule extends com.bumptech.glide.module.LibraryGlideModule implements com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.AppGlideModule>;
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					public isManifestParsingEnabled(): boolean;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.AppliesOptions>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.AppliesOptions interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class GlideModule implements com.bumptech.glide.module.RegistersComponents, com.bumptech.glide.module.AppliesOptions {
					public static class: java.lang.Class<com.bumptech.glide.module.GlideModule>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.GlideModule interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
						applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					});
					public constructor();
					public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export abstract class LibraryGlideModule extends com.bumptech.glide.module.RegistersComponents {
					public static class: java.lang.Class<com.bumptech.glide.module.LibraryGlideModule>;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class ManifestParser {
					public static class: java.lang.Class<com.bumptech.glide.module.ManifestParser>;
					public constructor(param0: globalAndroid.content.Context);
					public parse(): java.util.List<com.bumptech.glide.module.GlideModule>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class RegistersComponents {
					public static class: java.lang.Class<com.bumptech.glide.module.RegistersComponents>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.RegistersComponents interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					});
					public constructor();
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class EncoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry>;
					public append(param0: java.lang.Class, param1: com.bumptech.glide.load.Encoder<any>): void;
					public constructor();
					public prepend(param0: java.lang.Class, param1: com.bumptech.glide.load.Encoder<any>): void;
					public getEncoder(param0: java.lang.Class): com.bumptech.glide.load.Encoder<any>;
				}
				export module EncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.EncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ImageHeaderParserRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ImageHeaderParserRegistry>;
					public add(param0: com.bumptech.glide.load.ImageHeaderParser): void;
					public constructor();
					public getParsers(): java.util.List<com.bumptech.glide.load.ImageHeaderParser>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class LoadPathCache {
					public static class: java.lang.Class<com.bumptech.glide.provider.LoadPathCache>;
					public put(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: com.bumptech.glide.load.engine.LoadPath<any,any,any>): void;
					public constructor();
					public isEmptyLoadPath(param0: com.bumptech.glide.load.engine.LoadPath<any,any,any>): boolean;
					public get(param0: java.lang.Class, param1: java.lang.Class, param2: java.lang.Class): com.bumptech.glide.load.engine.LoadPath<any,any,any>;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ModelToResourceClassCache {
					public static class: java.lang.Class<com.bumptech.glide.provider.ModelToResourceClassCache>;
					public constructor();
					public clear(): void;
					public get(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>): java.util.List<java.lang.Class<any>>;
					public put(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>, param3: java.util.List<java.lang.Class<any>>): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ResourceDecoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry>;
					public getDecoders(param0: java.lang.Class, param1: java.lang.Class): java.util.List;
					public prepend(param0: string, param1: com.bumptech.glide.load.ResourceDecoder<any,any>, param2: java.lang.Class, param3: java.lang.Class): void;
					public getResourceClasses(param0: java.lang.Class, param1: java.lang.Class): java.util.List;
					public setBucketPriorityList(param0: java.util.List<string>): void;
					public constructor();
					public append(param0: string, param1: com.bumptech.glide.load.ResourceDecoder<any,any>, param2: java.lang.Class, param3: java.lang.Class): void;
				}
				export module ResourceDecoderRegistry {
					export class Entry<T, R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceDecoderRegistry.Entry<any,any>>;
						public constructor(param0: java.lang.Class<T>, param1: java.lang.Class<R>, param2: com.bumptech.glide.load.ResourceDecoder<T,R>);
						public handles(param0: java.lang.Class<any>, param1: java.lang.Class<any>): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ResourceEncoderRegistry {
					public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry>;
					public constructor();
					public prepend(param0: java.lang.Class, param1: com.bumptech.glide.load.ResourceEncoder<any>): void;
					public get(param0: java.lang.Class): com.bumptech.glide.load.ResourceEncoder<any>;
					public append(param0: java.lang.Class, param1: com.bumptech.glide.load.ResourceEncoder<any>): void;
				}
				export module ResourceEncoderRegistry {
					export class Entry<T>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.provider.ResourceEncoderRegistry.Entry<any>>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export abstract class BaseRequestOptions<T>  extends java.lang.Cloneable {
					public static class: java.lang.Class<com.bumptech.glide.request.BaseRequestOptions<any>>;
					public autoClone(): any;
					public isTransformationSet(): boolean;
					/** @deprecated */
					public transforms(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): any;
					public getSignature(): com.bumptech.glide.load.Key;
					public dontTransform(): any;
					public decode(param0: java.lang.Class<any>): any;
					public transform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): any;
					public clone(): any;
					public apply(param0: com.bumptech.glide.request.BaseRequestOptions<any>): any;
					public getPriority(): com.bumptech.glide.Priority;
					public constructor();
					public override(param0: number, param1: number): any;
					public downsample(param0: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): any;
					public skipMemoryCache(param0: boolean): any;
					public optionalCircleCrop(): any;
					public isPrioritySet(): boolean;
					public onlyRetrieveFromCache(param0: boolean): any;
					public timeout(param0: number): any;
					public encodeQuality(param0: number): any;
					public centerCrop(): any;
					public transform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public getOverrideHeight(): number;
					public useAnimationPool(param0: boolean): any;
					public isValidOverride(): boolean;
					public format(param0: com.bumptech.glide.load.DecodeFormat): any;
					public isLocked(): boolean;
					public getUseAnimationPool(): boolean;
					public error(param0: number): any;
					public isSkipMemoryCacheSet(): boolean;
					public getSizeMultiplier(): number;
					public fitCenter(): any;
					public getOnlyRetrieveFromCache(): boolean;
					public getOverrideWidth(): number;
					public getTransformations(): java.util.Map<java.lang.Class<any>,com.bumptech.glide.load.Transformation<any>>;
					public getPlaceholderDrawable(): globalAndroid.graphics.drawable.Drawable;
					public encodeFormat(param0: globalAndroid.graphics.Bitmap.CompressFormat): any;
					public isTransformationAllowed(): boolean;
					public getFallbackId(): number;
					public useUnlimitedSourceGeneratorsPool(param0: boolean): any;
					public fallback(param0: number): any;
					public getOptions(): com.bumptech.glide.load.Options;
					public dontAnimate(): any;
					public sizeMultiplier(param0: number): any;
					public theme(param0: globalAndroid.content.res.Resources.Theme): any;
					public getPlaceholderId(): number;
					public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): any;
					public isMemoryCacheable(): boolean;
					public getDiskCacheStrategy(): com.bumptech.glide.load.engine.DiskCacheStrategy;
					public getTheme(): globalAndroid.content.res.Resources.Theme;
					public placeholder(param0: globalAndroid.graphics.drawable.Drawable): any;
					public fallback(param0: globalAndroid.graphics.drawable.Drawable): any;
					public signature(param0: com.bumptech.glide.load.Key): any;
					public isAutoCloneEnabled(): boolean;
					public error(param0: globalAndroid.graphics.drawable.Drawable): any;
					public optionalCenterInside(): any;
					public priority(param0: com.bumptech.glide.Priority): any;
					public disallowHardwareConfig(): any;
					public optionalCenterCrop(): any;
					public hashCode(): number;
					public lock(): any;
					public isDiskCacheStrategySet(): boolean;
					public optionalTransform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): any;
					public optionalTransform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation<any>): com.bumptech.glide.request.BaseRequestOptions<any>;
					public centerInside(): any;
					public placeholder(param0: number): any;
					public override(param0: number): any;
					public set(param0: com.bumptech.glide.load.Option<any>, param1: any): com.bumptech.glide.request.BaseRequestOptions<any>;
					public transform(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): any;
					public getFallbackDrawable(): globalAndroid.graphics.drawable.Drawable;
					public getUseUnlimitedSourceGeneratorsPool(): boolean;
					public circleCrop(): any;
					public equals(param0: any): boolean;
					public getErrorPlaceholder(): globalAndroid.graphics.drawable.Drawable;
					public optionalFitCenter(): any;
					public isTransformationRequired(): boolean;
					public getErrorId(): number;
					public getResourceClass(): java.lang.Class<any>;
					public frame(param0: number): any;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ErrorRequestCoordinator implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ErrorRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public setRequests(param0: com.bumptech.glide.request.Request, param1: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public constructor(param0: any, param1: com.bumptech.glide.request.RequestCoordinator);
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class FutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.FutureTarget<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.FutureTarget<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						setRequest(param0: com.bumptech.glide.request.Request): void;
						getRequest(): com.bumptech.glide.request.Request;
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public constructor();
					public static SIZE_ORIGINAL: number;
					public onStart(): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public onDestroy(): void;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class Request {
					public static class: java.lang.Class<com.bumptech.glide.request.Request>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.Request interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						begin(): void;
						clear(): void;
						pause(): void;
						isRunning(): boolean;
						isComplete(): boolean;
						isCleared(): boolean;
						isAnyResourceSet(): boolean;
						isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					});
					public constructor();
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public isComplete(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestCoordinator {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestCoordinator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						canSetImage(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
						isAnyResourceSet(): boolean;
						onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
						onRequestFailed(param0: com.bumptech.glide.request.Request): void;
						getRoot(): com.bumptech.glide.request.RequestCoordinator;
					});
					public constructor();
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isAnyResourceSet(): boolean;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
				}
				export module RequestCoordinator {
					export class RequestState {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestCoordinator.RequestState>;
						public static RUNNING: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static PAUSED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static CLEARED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static SUCCESS: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static FAILED: com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static valueOf(param0: string): com.bumptech.glide.request.RequestCoordinator.RequestState;
						public static values(): native.Array<com.bumptech.glide.request.RequestCoordinator.RequestState>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestFutureTarget<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget<any>>;
					public get(): R;
					public isCancelled(): boolean;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
					public onResourceReady(param0: R, param1: com.bumptech.glide.request.transition.Transition<any>): void;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): R;
					public onStart(): void;
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public isDone(): boolean;
					public getRequest(): com.bumptech.glide.request.Request;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
					public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onStop(): void;
					public constructor(param0: number, param1: number);
				}
				export module RequestFutureTarget {
					export class Waiter {
						public static class: java.lang.Class<com.bumptech.glide.request.RequestFutureTarget.Waiter>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestListener<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestListener<any>>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestListener<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
						onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					});
					public constructor();
					public onResourceReady(param0: R, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: com.bumptech.glide.load.DataSource, param4: boolean): boolean;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException, param1: any, param2: com.bumptech.glide.request.target.Target<R>, param3: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestOptions extends com.bumptech.glide.request.BaseRequestOptions<com.bumptech.glide.request.RequestOptions> {
					public static class: java.lang.Class<com.bumptech.glide.request.RequestOptions>;
					public static sizeMultiplierOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static errorOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static encodeQualityOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static frameOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static signatureOf(param0: com.bumptech.glide.load.Key): com.bumptech.glide.request.RequestOptions;
					public static formatOf(param0: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.request.RequestOptions;
					public constructor();
					public static diskCacheStrategyOf(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.request.RequestOptions;
					public static noAnimation(): com.bumptech.glide.request.RequestOptions;
					public static downsampleOf(param0: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.bumptech.glide.request.RequestOptions;
					public static timeoutOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static encodeFormatOf(param0: globalAndroid.graphics.Bitmap.CompressFormat): com.bumptech.glide.request.RequestOptions;
					public static priorityOf(param0: com.bumptech.glide.Priority): com.bumptech.glide.request.RequestOptions;
					public static noTransformation(): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(param0: number): com.bumptech.glide.request.RequestOptions;
					public static centerInsideTransform(): com.bumptech.glide.request.RequestOptions;
					public static decodeTypeOf(param0: java.lang.Class<any>): com.bumptech.glide.request.RequestOptions;
					public static errorOf(param0: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
					public static skipMemoryCacheOf(param0: boolean): com.bumptech.glide.request.RequestOptions;
					public static bitmapTransform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.bumptech.glide.request.RequestOptions;
					public static centerCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static overrideOf(param0: number, param1: number): com.bumptech.glide.request.RequestOptions;
					public static option(param0: com.bumptech.glide.load.Option<any>, param1: any): com.bumptech.glide.request.RequestOptions;
					public static circleCropTransform(): com.bumptech.glide.request.RequestOptions;
					public static fitCenterTransform(): com.bumptech.glide.request.RequestOptions;
					public static placeholderOf(param0: globalAndroid.graphics.drawable.Drawable): com.bumptech.glide.request.RequestOptions;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ResourceCallback {
					public static class: java.lang.Class<com.bumptech.glide.request.ResourceCallback>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.ResourceCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource): void;
						onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
						getLock(): any;
					});
					public constructor();
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class SingleRequest<R>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest<any>>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public static obtain(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideContext, param2: any, param3: any, param4: java.lang.Class, param5: com.bumptech.glide.request.BaseRequestOptions<any>, param6: number, param7: number, param8: com.bumptech.glide.Priority, param9: com.bumptech.glide.request.target.Target<any>, param10: com.bumptech.glide.request.RequestListener<any>, param11: java.util.List, param12: com.bumptech.glide.request.RequestCoordinator, param13: com.bumptech.glide.load.engine.Engine, param14: com.bumptech.glide.request.transition.TransitionFactory<any>, param15: java.util.concurrent.Executor): com.bumptech.glide.request.SingleRequest<any>;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource<any>, param1: com.bumptech.glide.load.DataSource): void;
					public isComplete(): boolean;
					public onSizeReady(param0: number, param1: number): void;
					public getLock(): any;
					public onLoadFailed(param0: com.bumptech.glide.load.engine.GlideException): void;
					public isCleared(): boolean;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
				}
				export module SingleRequest {
					export class Status {
						public static class: java.lang.Class<com.bumptech.glide.request.SingleRequest.Status>;
						public static PENDING: com.bumptech.glide.request.SingleRequest.Status;
						public static RUNNING: com.bumptech.glide.request.SingleRequest.Status;
						public static WAITING_FOR_SIZE: com.bumptech.glide.request.SingleRequest.Status;
						public static COMPLETE: com.bumptech.glide.request.SingleRequest.Status;
						public static FAILED: com.bumptech.glide.request.SingleRequest.Status;
						public static CLEARED: com.bumptech.glide.request.SingleRequest.Status;
						public static values(): native.Array<com.bumptech.glide.request.SingleRequest.Status>;
						public static valueOf(param0: string): com.bumptech.glide.request.SingleRequest.Status;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ThumbnailRequestCoordinator implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public static class: java.lang.Class<com.bumptech.glide.request.ThumbnailRequestCoordinator>;
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public setRequests(param0: com.bumptech.glide.request.Request, param1: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public isComplete(): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public constructor(param0: any, param1: com.bumptech.glide.request.RequestCoordinator);
					public getRoot(): com.bumptech.glide.request.RequestCoordinator;
					public isCleared(): boolean;
					public pause(): void;
					public canNotifyCleared(param0: com.bumptech.glide.request.Request): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isEquivalentTo(param0: com.bumptech.glide.request.Request): boolean;
					public onRequestFailed(param0: com.bumptech.glide.request.Request): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class AppWidgetTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.AppWidgetTarget>;
						public constructor();
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: globalAndroid.widget.RemoteViews, param5: native.Array<number>);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.widget.RemoteViews, param3: native.Array<number>);
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.widget.RemoteViews, param3: globalAndroid.content.ComponentName);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: globalAndroid.widget.RemoteViews, param5: globalAndroid.content.ComponentName);
						public onResourceReady(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(param0: number, param1: number);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class BaseTarget<Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BaseTarget<any>>;
						public constructor();
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapImageViewTarget>;
						public getView(): any;
						public constructor();
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public setResource(param0: globalAndroid.graphics.Bitmap): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.BitmapThumbnailImageViewTarget>;
						public getView(): any;
						public constructor();
						public getDrawable(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.drawable.Drawable;
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class CustomTarget<T>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomTarget<any>>;
						public constructor();
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public constructor(param0: number, param1: number);
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class CustomViewTarget<T, Z>  extends com.bumptech.glide.request.target.Target<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						public clearOnDetach(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public waitForLayout(): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public constructor(param0: any);
						public onResourceCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						public onResourceLoading(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						/** @deprecated */
						public useTagId(param0: number): com.bumptech.glide.request.target.CustomViewTarget<any,any>;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
					export module CustomViewTarget {
						export class SizeDeterminer {
							public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer>;
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.CustomViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableImageViewTarget>;
						public getView(): any;
						public constructor();
						public constructor(param0: any);
						public setResource(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableThumbnailImageViewTarget extends com.bumptech.glide.request.target.ThumbnailImageViewTarget<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.DrawableThumbnailImageViewTarget>;
						public getView(): any;
						public constructor();
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public getDrawable(param0: globalAndroid.graphics.drawable.Drawable): globalAndroid.graphics.drawable.Drawable;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class FixedSizeDrawable {
						public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable>;
						public getChangingConfigurations(): number;
						public getConstantState(): globalAndroid.graphics.drawable.Drawable.ConstantState;
						public clearColorFilter(): void;
						public getMinimumWidth(): number;
						public setBounds(param0: globalAndroid.graphics.Rect): void;
						public setColorFilter(param0: number, param1: globalAndroid.graphics.PorterDuff.Mode): void;
						public constructor(param0: globalAndroid.graphics.drawable.Drawable, param1: number, param2: number);
						public getAlpha(): number;
						public mutate(): globalAndroid.graphics.drawable.Drawable;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public setColorFilter(param0: globalAndroid.graphics.ColorFilter): void;
						public getCallback(): globalAndroid.graphics.drawable.Drawable.Callback;
						public setFilterBitmap(param0: boolean): void;
						public unscheduleSelf(param0: java.lang.Runnable): void;
						public getMinimumHeight(): number;
						public invalidateSelf(): void;
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public getPadding(param0: globalAndroid.graphics.Rect): boolean;
						/** @deprecated */
						public setDither(param0: boolean): void;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public scheduleSelf(param0: java.lang.Runnable, param1: number): void;
						public setChangingConfigurations(param0: number): void;
						public draw(param0: globalAndroid.graphics.Canvas): void;
						public getCurrent(): globalAndroid.graphics.drawable.Drawable;
					}
					export module FixedSizeDrawable {
						export class State {
							public static class: java.lang.Class<com.bumptech.glide.request.target.FixedSizeDrawable.State>;
							public newDrawable(): globalAndroid.graphics.drawable.Drawable;
							public newDrawable(param0: globalAndroid.content.res.Resources): globalAndroid.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ImageViewTarget<Z>  extends com.bumptech.glide.request.target.ViewTarget<globalAndroid.widget.ImageView,any> implements com.bumptech.glide.request.transition.Transition.ViewAdapter  {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTarget<any>>;
						public getView(): any;
						public constructor();
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onStop(): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class ImageViewTargetFactory {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ImageViewTargetFactory>;
						public constructor();
						public buildTarget(param0: globalAndroid.widget.ImageView, param1: java.lang.Class): com.bumptech.glide.request.target.ViewTarget<any,any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class NotificationTarget extends com.bumptech.glide.request.target.CustomTarget<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.NotificationTarget>;
						public constructor();
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.widget.RemoteViews, param3: globalAndroid.app.Notification, param4: number, param5: string);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: number, param3: number, param4: globalAndroid.widget.RemoteViews, param5: globalAndroid.app.Notification, param6: number, param7: string);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(param0: globalAndroid.content.Context, param1: number, param2: globalAndroid.widget.RemoteViews, param3: globalAndroid.app.Notification, param4: number);
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceReady(param0: globalAndroid.graphics.Bitmap, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public constructor(param0: number, param1: number);
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class PreloadTarget<Z>  extends com.bumptech.glide.request.target.CustomTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.PreloadTarget<any>>;
						public static obtain(param0: com.bumptech.glide.RequestManager, param1: number, param2: number): com.bumptech.glide.request.target.PreloadTarget<any>;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class SimpleTarget<Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SimpleTarget<any>>;
						public constructor();
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: number, param1: number);
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SizeReadyCallback {
						public static class: java.lang.Class<com.bumptech.glide.request.target.SizeReadyCallback>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.SizeReadyCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSizeReady(param0: number, param1: number): void;
						});
						public constructor();
						public onSizeReady(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class Target<R>  extends com.bumptech.glide.manager.LifecycleListener {
						public static class: java.lang.Class<com.bumptech.glide.request.target.Target<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.Target<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
							onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
							onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
							onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
							getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							setRequest(param0: com.bumptech.glide.request.Request): void;
							getRequest(): com.bumptech.glide.request.Request;
							onStart(): void;
							onStop(): void;
							onDestroy(): void;
						});
						public constructor();
						public static SIZE_ORIGINAL: number;
						public onDestroy(): void;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ThumbnailImageViewTarget<T>  extends com.bumptech.glide.request.target.ImageViewTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ThumbnailImageViewTarget<any>>;
						public getView(): any;
						public constructor();
						public getDrawable(param0: any): globalAndroid.graphics.drawable.Drawable;
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setResource(param0: any): void;
						public getRequest(): com.bumptech.glide.request.Request;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
						public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						public constructor(param0: globalAndroid.widget.ImageView);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						/** @deprecated */
						public constructor(param0: globalAndroid.widget.ImageView, param1: boolean);
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getView(): globalAndroid.view.View;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ViewTarget<T, Z>  extends com.bumptech.glide.request.target.BaseTarget<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget<any,any>>;
						public view: any;
						public getView(): any;
						/** @deprecated */
						public static setTagId(param0: number): void;
						public constructor();
						public clearOnDetach(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						public waitForLayout(): com.bumptech.glide.request.target.ViewTarget<any,any>;
						public constructor(param0: any);
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public toString(): string;
						/** @deprecated */
						public constructor(param0: any, param1: boolean);
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
					export module ViewTarget {
						export class SizeDeterminer {
							public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer>;
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener {
								public static class: java.lang.Class<com.bumptech.glide.request.target.ViewTarget.SizeDeterminer.SizeDeterminerLayoutListener>;
								public onPreDraw(): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export abstract class BitmapContainerTransitionFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public getBitmap(param0: any): globalAndroid.graphics.Bitmap;
						public constructor(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>);
					}
					export module BitmapContainerTransitionFactory {
						export class BitmapGlideAnimation extends com.bumptech.glide.request.transition.Transition<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapContainerTransitionFactory.BitmapGlideAnimation>;
							public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class BitmapTransitionFactory extends com.bumptech.glide.request.transition.BitmapContainerTransitionFactory<globalAndroid.graphics.Bitmap> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.BitmapTransitionFactory>;
						public getBitmap(param0: any): globalAndroid.graphics.Bitmap;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public getBitmap(param0: globalAndroid.graphics.Bitmap): globalAndroid.graphics.Bitmap;
						public constructor(param0: com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable>);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class DrawableCrossFadeFactory extends com.bumptech.glide.request.transition.TransitionFactory<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(param0: number, param1: boolean);
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<globalAndroid.graphics.drawable.Drawable>;
					}
					export module DrawableCrossFadeFactory {
						export class Builder {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder>;
							public constructor();
							public setCrossFadeEnabled(param0: boolean): com.bumptech.glide.request.transition.DrawableCrossFadeFactory.Builder;
							public build(): com.bumptech.glide.request.transition.DrawableCrossFadeFactory;
							public constructor(param0: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class DrawableCrossFadeTransition extends com.bumptech.glide.request.transition.Transition<globalAndroid.graphics.drawable.Drawable> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.DrawableCrossFadeTransition>;
						public constructor(param0: number, param1: boolean);
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public transition(param0: globalAndroid.graphics.drawable.Drawable, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class NoTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition<any>>;
						public constructor();
						public static getFactory(): com.bumptech.glide.request.transition.TransitionFactory<any>;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						public static get(): com.bumptech.glide.request.transition.Transition<any>;
					}
					export module NoTransition {
						export class NoAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory<any>>;
							public constructor();
							public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class Transition<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
						});
						public constructor();
						public transition(param0: R, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module Transition {
						export class ViewAdapter {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.Transition.ViewAdapter>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.Transition$ViewAdapter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getView(): globalAndroid.view.View;
								getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
								setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
							});
							public constructor();
							public getCurrentDrawable(): globalAndroid.graphics.drawable.Drawable;
							public getView(): globalAndroid.view.View;
							public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class TransitionFactory<R>  extends java.lang.Object {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.TransitionFactory<any>>;
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.transition.TransitionFactory<any> interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
						});
						public constructor();
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<R>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory<any>>;
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
						public constructor(param0: number);
						public constructor(param0: globalAndroid.view.animation.Animation);
					}
					export module ViewAnimationFactory {
						export class ConcreteViewTransitionAnimationFactory extends com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ConcreteViewTransitionAnimationFactory>;
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
						export class ResourceViewTransitionAnimationFactory extends com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewAnimationFactory.ResourceViewTransitionAnimationFactory>;
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewPropertyAnimationFactory<R>  extends com.bumptech.glide.request.transition.TransitionFactory<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyAnimationFactory<any>>;
						public constructor(param0: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public build(param0: com.bumptech.glide.load.DataSource, param1: boolean): com.bumptech.glide.request.transition.Transition<any>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewPropertyTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition<any>>;
						public constructor(param0: com.bumptech.glide.request.transition.ViewPropertyTransition.Animator);
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module ViewPropertyTransition {
						export class Animator {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewPropertyTransition.Animator>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewPropertyTransition$Animator interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								animate(param0: globalAndroid.view.View): void;
							});
							public constructor();
							public animate(param0: globalAndroid.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module transition {
					export class ViewTransition<R>  extends com.bumptech.glide.request.transition.Transition<any> {
						public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition<any>>;
						public transition(param0: any, param1: com.bumptech.glide.request.transition.Transition.ViewAdapter): boolean;
					}
					export module ViewTransition {
						export class ViewTransitionAnimationFactory {
							public static class: java.lang.Class<com.bumptech.glide.request.transition.ViewTransition.ViewTransitionAnimationFactory>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.transition.ViewTransition$ViewTransitionAnimationFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
							});
							public constructor();
							public build(param0: globalAndroid.content.Context): globalAndroid.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class AndroidResourceSignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.AndroidResourceSignature>;
					public static obtain(param0: globalAndroid.content.Context): com.bumptech.glide.load.Key;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ApplicationVersionSignature {
					public static class: java.lang.Class<com.bumptech.glide.signature.ApplicationVersionSignature>;
					public static obtain(param0: globalAndroid.content.Context): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class EmptySignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.EmptySignature>;
					public equals(param0: any): boolean;
					public toString(): string;
					public static obtain(): com.bumptech.glide.signature.EmptySignature;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class MediaStoreSignature extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.MediaStoreSignature>;
					public equals(param0: any): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ObjectKey extends com.bumptech.glide.load.Key {
					public static class: java.lang.Class<com.bumptech.glide.signature.ObjectKey>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: any);
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ByteBufferUtil {
					public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil>;
					public static toFile(param0: java.nio.ByteBuffer, param1: java.io.File): void;
					public static toStream(param0: java.nio.ByteBuffer, param1: java.io.OutputStream): void;
					public static toBytes(param0: java.nio.ByteBuffer): native.Array<number>;
					public static toStream(param0: java.nio.ByteBuffer): java.io.InputStream;
					public static fromStream(param0: java.io.InputStream): java.nio.ByteBuffer;
					public static fromFile(param0: java.io.File): java.nio.ByteBuffer;
				}
				export module ByteBufferUtil {
					export class ByteBufferStream {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.ByteBufferStream>;
						public read(): number;
						public skip(param0: number): number;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
						public available(): number;
					}
					export class SafeArray {
						public static class: java.lang.Class<com.bumptech.glide.util.ByteBufferUtil.SafeArray>;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class CachedHashCodeArrayMap<K, V>  extends androidx.collection.ArrayMap<any,any> {
					public static class: java.lang.Class<com.bumptech.glide.util.CachedHashCodeArrayMap<any,any>>;
					public setValueAt(param0: number, param1: any): any;
					public constructor();
					public clear(): void;
					public removeAt(param0: number): any;
					public hashCode(): number;
					public put(param0: any, param1: any): any;
					public putAll(param0: androidx.collection.SimpleArrayMap<any,any>): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ContentLengthInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ContentLengthInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public static obtain(param0: java.io.InputStream, param1: number): java.io.InputStream;
					public static obtain(param0: java.io.InputStream, param1: string): java.io.InputStream;
					public read(param0: native.Array<number>): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ExceptionCatchingInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.ExceptionCatchingInputStream>;
					public available(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
					public getException(): java.io.IOException;
					public reset(): void;
					public static obtain(param0: java.io.InputStream): com.bumptech.glide.util.ExceptionCatchingInputStream;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public close(): void;
					public skip(param0: number): number;
					public release(): void;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Executors {
					public static class: java.lang.Class<com.bumptech.glide.util.Executors>;
					public static directExecutor(): java.util.concurrent.Executor;
					public static shutdownAndAwaitTermination(param0: java.util.concurrent.ExecutorService): void;
					public static mainThreadExecutor(): java.util.concurrent.Executor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class FixedPreloadSizeProvider<T>  extends com.bumptech.glide.ListPreloader.PreloadSizeProvider<any> {
					public static class: java.lang.Class<com.bumptech.glide.util.FixedPreloadSizeProvider<any>>;
					public getPreloadSize(param0: any, param1: number, param2: number): native.Array<number>;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LogTime {
					public static class: java.lang.Class<com.bumptech.glide.util.LogTime>;
					public static getLogTime(): number;
					public static getElapsedMillis(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LruCache<T, Y>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.LruCache<any,any>>;
					public getSize(param0: Y): number;
					public put(param0: T, param1: Y): Y;
					public getCount(): number;
					public clearMemory(): void;
					public onItemEvicted(param0: T, param1: Y): void;
					public contains(param0: T): boolean;
					public trimToSize(param0: number): void;
					public getCurrentSize(): number;
					public setSizeMultiplier(param0: number): void;
					public getMaxSize(): number;
					public constructor(param0: number);
					public get(param0: T): Y;
					public remove(param0: T): Y;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MarkEnforcingInputStream {
					public static class: java.lang.Class<com.bumptech.glide.util.MarkEnforcingInputStream>;
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public reset(): void;
					public constructor(param0: java.io.InputStream);
					public skip(param0: number): number;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MultiClassKey {
					public static class: java.lang.Class<com.bumptech.glide.util.MultiClassKey>;
					public equals(param0: any): boolean;
					public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>);
					public toString(): string;
					public constructor(param0: java.lang.Class<any>, param1: java.lang.Class<any>);
					public constructor();
					public set(param0: java.lang.Class<any>, param1: java.lang.Class<any>): void;
					public set(param0: java.lang.Class<any>, param1: java.lang.Class<any>, param2: java.lang.Class<any>): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Preconditions {
					public static class: java.lang.Class<com.bumptech.glide.util.Preconditions>;
					public static checkNotEmpty(param0: java.util.Collection): java.util.Collection;
					public static checkNotEmpty(param0: string): string;
					public static checkArgument(param0: boolean, param1: string): void;
					public static checkNotNull(param0: any): any;
					public static checkNotNull(param0: any, param1: string): any;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Synthetic {
					public static class: java.lang.Class<com.bumptech.glide.util.Synthetic>;
					/**
					 * Constructs a new instance of the com.bumptech.glide.util.Synthetic interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
					});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Util {
					public static class: java.lang.Class<com.bumptech.glide.util.Util>;
					public static hashCode(param0: boolean, param1: number): number;
					public static assertMainThread(): void;
					public static isOnBackgroundThread(): boolean;
					public static isOnMainThread(): boolean;
					public static hashCode(param0: any, param1: number): number;
					public static hashCode(param0: boolean): number;
					public static getSnapshot(param0: java.util.Collection): java.util.List;
					public static getBitmapByteSize(param0: globalAndroid.graphics.Bitmap): number;
					public static sha256BytesToHex(param0: native.Array<number>): string;
					public static assertBackgroundThread(): void;
					/** @deprecated */
					public static getSize(param0: globalAndroid.graphics.Bitmap): number;
					public static bothModelsNullEquivalentOrEquals(param0: any, param1: any): boolean;
					public static hashCode(param0: number, param1: number): number;
					public static hashCode(param0: number): number;
					public static getBitmapByteSize(param0: number, param1: number, param2: globalAndroid.graphics.Bitmap.Config): number;
					public static isValidDimensions(param0: number, param1: number): boolean;
					public static createQueue(param0: number): java.util.Queue;
					public static bothNullOrEqual(param0: any, param1: any): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ViewPreloadSizeProvider<T>  extends java.lang.Object {
					public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider<any>>;
					public setView(param0: globalAndroid.view.View): void;
					public constructor();
					public getPreloadSize(param0: T, param1: number, param2: number): native.Array<number>;
					public onSizeReady(param0: number, param1: number): void;
					public constructor(param0: globalAndroid.view.View);
				}
				export module ViewPreloadSizeProvider {
					export class SizeViewTarget extends com.bumptech.glide.request.target.CustomViewTarget<globalAndroid.view.View,any> {
						public static class: java.lang.Class<com.bumptech.glide.util.ViewPreloadSizeProvider.SizeViewTarget>;
						public onResourceReady(param0: any, param1: com.bumptech.glide.request.transition.Transition<any>): void;
						public onLoadFailed(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public removeCallback(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onResourceCleared(param0: globalAndroid.graphics.drawable.Drawable): void;
						public onLoadStarted(param0: globalAndroid.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export class FactoryPools {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools>;
						public static threadSafeList(): androidx.core.util.Pools.Pool;
						public static threadSafe(param0: number, param1: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
						public static simple(param0: number, param1: com.bumptech.glide.util.pool.FactoryPools.Factory<any>): androidx.core.util.Pools.Pool;
						public static threadSafeList(param0: number): androidx.core.util.Pools.Pool;
					}
					export module FactoryPools {
						export class Factory<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Factory<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Factory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								create(): T;
							});
							public constructor();
							public create(): T;
						}
						export class FactoryPool<T>  extends androidx.core.util.Pools.Pool<any> {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.FactoryPool<any>>;
							public acquire(): any;
							public release(param0: any): boolean;
						}
						export class Poolable {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Poolable>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Poolable interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
							});
							public constructor();
							public getVerifier(): com.bumptech.glide.util.pool.StateVerifier;
						}
						export class Resetter<T>  extends java.lang.Object {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.FactoryPools.Resetter<any>>;
							/**
							 * Constructs a new instance of the com.bumptech.glide.util.pool.FactoryPools$Resetter interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: {
								reset(param0: T): void;
							});
							public constructor();
							public reset(param0: T): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export class GlideTrace {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.GlideTrace>;
						public static beginSection(param0: string): void;
						public static endSection(): void;
						public static beginSectionFormat(param0: string, param1: any): void;
						public static beginSectionFormat(param0: string, param1: any, param2: any, param3: any): void;
						public static beginSectionFormat(param0: string, param1: any, param2: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export module pool {
					export abstract class StateVerifier {
						public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier>;
						public static newInstance(): com.bumptech.glide.util.pool.StateVerifier;
						public throwIfRecycled(): void;
					}
					export module StateVerifier {
						export class DebugStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DebugStateVerifier>;
							public throwIfRecycled(): void;
						}
						export class DefaultStateVerifier extends com.bumptech.glide.util.pool.StateVerifier {
							public static class: java.lang.Class<com.bumptech.glide.util.pool.StateVerifier.DefaultStateVerifier>;
							public setRecycled(param0: boolean): void;
							public throwIfRecycled(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class Compat {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.Compat>;
					public static postOnAnimation(param0: globalAndroid.view.View, param1: java.lang.Runnable): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class CustomGestureDetector {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.CustomGestureDetector>;
					public isScaling(): boolean;
					public onTouchEvent(param0: globalAndroid.view.MotionEvent): boolean;
					public isDragging(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnGestureListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnGestureListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnGestureListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrag(param0: number, param1: number): void;
						onFling(param0: number, param1: number, param2: number, param3: number): void;
						onScale(param0: number, param1: number, param2: number): void;
						onScale(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					});
					public constructor();
					public onScale(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public onDrag(param0: number, param1: number): void;
					public onFling(param0: number, param1: number, param2: number, param3: number): void;
					public onScale(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnMatrixChangedListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnMatrixChangedListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnMatrixChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onMatrixChanged(param0: globalAndroid.graphics.RectF): void;
					});
					public constructor();
					public onMatrixChanged(param0: globalAndroid.graphics.RectF): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnOutsidePhotoTapListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnOutsidePhotoTapListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnOutsidePhotoTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onOutsidePhotoTap(param0: globalAndroid.widget.ImageView): void;
					});
					public constructor();
					public onOutsidePhotoTap(param0: globalAndroid.widget.ImageView): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnPhotoTapListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnPhotoTapListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnPhotoTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onPhotoTap(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
					});
					public constructor();
					public onPhotoTap(param0: globalAndroid.widget.ImageView, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnScaleChangedListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnScaleChangedListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnScaleChangedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onScaleChange(param0: number, param1: number, param2: number): void;
					});
					public constructor();
					public onScaleChange(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnSingleFlingListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnSingleFlingListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnSingleFlingListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
					});
					public constructor();
					public onFling(param0: globalAndroid.view.MotionEvent, param1: globalAndroid.view.MotionEvent, param2: number, param3: number): boolean;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnViewDragListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnViewDragListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnViewDragListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDrag(param0: number, param1: number): void;
					});
					public constructor();
					public onDrag(param0: number, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class OnViewTapListener {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.OnViewTapListener>;
					/**
					 * Constructs a new instance of the com.github.chrisbanes.photoview.OnViewTapListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onViewTap(param0: globalAndroid.view.View, param1: number, param2: number): void;
					});
					public constructor();
					public onViewTap(param0: globalAndroid.view.View, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class PhotoView {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.PhotoView>;
					public getAttacher(): com.github.chrisbanes.photoview.PhotoViewAttacher;
					public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setAllowParentInterceptOnEdge(param0: boolean): void;
					public setZoomTransitionDuration(param0: number): void;
					public getDisplayRect(): globalAndroid.graphics.RectF;
					public setMaximumScale(param0: number): void;
					public setScale(param0: number, param1: number, param2: number, param3: boolean): void;
					public setOnScaleChangeListener(param0: com.github.chrisbanes.photoview.OnScaleChangedListener): void;
					public setOnViewDragListener(param0: com.github.chrisbanes.photoview.OnViewDragListener): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setOnPhotoTapListener(param0: com.github.chrisbanes.photoview.OnPhotoTapListener): void;
					public setImageURI(param0: globalAndroid.net.Uri): void;
					public isZoomable(): boolean;
					public getMinimumScale(): number;
					public setOnMatrixChangeListener(param0: com.github.chrisbanes.photoview.OnMatrixChangedListener): void;
					public setRotationTo(param0: number): void;
					public getImageMatrix(): globalAndroid.graphics.Matrix;
					public setScale(param0: number): void;
					public getDisplayMatrix(param0: globalAndroid.graphics.Matrix): void;
					public getSuppMatrix(param0: globalAndroid.graphics.Matrix): void;
					public setImageResource(param0: number): void;
					public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
					public setDisplayMatrix(param0: globalAndroid.graphics.Matrix): boolean;
					public setMinimumScale(param0: number): void;
					public setOnOutsidePhotoTapListener(param0: com.github.chrisbanes.photoview.OnOutsidePhotoTapListener): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setOnViewTapListener(param0: com.github.chrisbanes.photoview.OnViewTapListener): void;
					public setFrame(param0: number, param1: number, param2: number, param3: number): boolean;
					public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
					public setRotationBy(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public setOnSingleFlingListener(param0: com.github.chrisbanes.photoview.OnSingleFlingListener): void;
					public constructor(param0: globalAndroid.content.Context);
					public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public setScaleLevels(param0: number, param1: number, param2: number): void;
					public setZoomable(param0: boolean): void;
					public getMediumScale(): number;
					public getScale(): number;
					public getMaximumScale(): number;
					public setScale(param0: number, param1: boolean): void;
					public setSuppMatrix(param0: globalAndroid.graphics.Matrix): boolean;
					public setMediumScale(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class PhotoViewAttacher {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.PhotoViewAttacher>;
					public setAllowParentInterceptOnEdge(param0: boolean): void;
					public setZoomTransitionDuration(param0: number): void;
					public setOnScaleChangeListener(param0: com.github.chrisbanes.photoview.OnScaleChangedListener): void;
					public getDisplayRect(): globalAndroid.graphics.RectF;
					public setMaximumScale(param0: number): void;
					public setScale(param0: number, param1: number, param2: number, param3: boolean): void;
					public setOnViewDragListener(param0: com.github.chrisbanes.photoview.OnViewDragListener): void;
					public onTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): boolean;
					public setZoomInterpolator(param0: globalAndroid.view.animation.Interpolator): void;
					public setOnPhotoTapListener(param0: com.github.chrisbanes.photoview.OnPhotoTapListener): void;
					public getMinimumScale(): number;
					public setOnMatrixChangeListener(param0: com.github.chrisbanes.photoview.OnMatrixChangedListener): void;
					public isZoomable(): boolean;
					public setRotationTo(param0: number): void;
					public setScale(param0: number): void;
					public getImageMatrix(): globalAndroid.graphics.Matrix;
					public getDisplayMatrix(param0: globalAndroid.graphics.Matrix): void;
					public onLayoutChange(param0: globalAndroid.view.View, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number): void;
					public update(): void;
					public setBaseRotation(param0: number): void;
					public getSuppMatrix(param0: globalAndroid.graphics.Matrix): void;
					public setOnDoubleTapListener(param0: globalAndroid.view.GestureDetector.OnDoubleTapListener): void;
					public setDisplayMatrix(param0: globalAndroid.graphics.Matrix): boolean;
					public constructor(param0: globalAndroid.widget.ImageView);
					public setMinimumScale(param0: number): void;
					public setOnOutsidePhotoTapListener(param0: com.github.chrisbanes.photoview.OnOutsidePhotoTapListener): void;
					public setOnClickListener(param0: globalAndroid.view.View.OnClickListener): void;
					public setOnViewTapListener(param0: com.github.chrisbanes.photoview.OnViewTapListener): void;
					public getScaleType(): globalAndroid.widget.ImageView.ScaleType;
					/** @deprecated */
					public isZoomEnabled(): boolean;
					public setRotationBy(param0: number): void;
					public setOnSingleFlingListener(param0: com.github.chrisbanes.photoview.OnSingleFlingListener): void;
					public setScaleType(param0: globalAndroid.widget.ImageView.ScaleType): void;
					public setOnLongClickListener(param0: globalAndroid.view.View.OnLongClickListener): void;
					public setScaleLevels(param0: number, param1: number, param2: number): void;
					public setZoomable(param0: boolean): void;
					public getMediumScale(): number;
					public getScale(): number;
					public getMaximumScale(): number;
					public setScale(param0: number, param1: boolean): void;
					public setMediumScale(param0: number): void;
				}
				export module PhotoViewAttacher {
					export class AnimatedZoomRunnable {
						public static class: java.lang.Class<com.github.chrisbanes.photoview.PhotoViewAttacher.AnimatedZoomRunnable>;
						public run(): void;
						public constructor(param0: com.github.chrisbanes.photoview.PhotoViewAttacher, param1: number, param2: number, param3: number, param4: number);
					}
					export class FlingRunnable {
						public static class: java.lang.Class<com.github.chrisbanes.photoview.PhotoViewAttacher.FlingRunnable>;
						public cancelFling(): void;
						public run(): void;
						public fling(param0: number, param1: number, param2: number, param3: number): void;
						public constructor(param0: com.github.chrisbanes.photoview.PhotoViewAttacher, param1: globalAndroid.content.Context);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module chrisbanes {
			export module photoview {
				export class Util {
					public static class: java.lang.Class<com.github.chrisbanes.photoview.Util>;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export abstract class BitmapTransformation extends com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap> {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BitmapTransformation>;
					public equals(param0: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class BlurTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BlurTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public constructor(param0: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class BuildConfig {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
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
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class ColorFilterTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.ColorFilterTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public constructor(param0: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class CropCircleTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropCircleTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class CropCircleWithBorderTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropCircleWithBorderTransformation>;
					public equals(param0: any): boolean;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class CropSquareTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropSquareTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class CropTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public constructor(param0: number, param1: number, param2: jp.wasabeef.glide.transformations.CropTransformation.CropType);
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
				export module CropTransformation {
					export class CropType {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.CropTransformation.CropType>;
						public static TOP: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static CENTER: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static BOTTOM: jp.wasabeef.glide.transformations.CropTransformation.CropType;
						public static values(): native.Array<jp.wasabeef.glide.transformations.CropTransformation.CropType>;
						public static valueOf(param0: string): jp.wasabeef.glide.transformations.CropTransformation.CropType;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class GrayscaleTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.GrayscaleTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class MaskTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.MaskTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public constructor(param0: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class RoundedCornersTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.RoundedCornersTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public constructor(param0: number, param1: number, param2: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType);
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
				export module RoundedCornersTransformation {
					export class CornerType {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType>;
						public static ALL: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static TOP: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static BOTTOM: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_BOTTOM_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static OTHER_BOTTOM_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static DIAGONAL_FROM_TOP_LEFT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static DIAGONAL_FROM_TOP_RIGHT: jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
						public static values(): native.Array<jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType>;
						public static valueOf(param0: string): jp.wasabeef.glide.transformations.RoundedCornersTransformation.CornerType;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export class SupportRSBlurTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
					public static class: java.lang.Class<jp.wasabeef.glide.transformations.SupportRSBlurTransformation>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor();
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
					public hashCode(): number;
					public constructor(param0: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class BrightnessFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.BrightnessFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class ContrastFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.ContrastFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class GPUFilterTransformation extends jp.wasabeef.glide.transformations.BitmapTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public getFilter(): any;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class InvertFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.InvertFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class KuwaharaFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.KuwaharaFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class PixelationFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.PixelationFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class SepiaFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SepiaFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: number);
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class SketchFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SketchFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class SwirlFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.SwirlFilterTransformation>;
						public constructor(param0: number, param1: number, param2: globalAndroid.graphics.PointF);
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class ToonFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.ToonFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public constructor(param0: number, param1: number);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module gpu {
					export class VignetteFilterTransformation extends jp.wasabeef.glide.transformations.gpu.GPUFilterTransformation {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.gpu.VignetteFilterTransformation>;
						public constructor();
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<globalAndroid.graphics.Bitmap>;
						public constructor(param0: globalAndroid.graphics.PointF, param1: native.Array<number>, param2: number, param3: number);
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public equals(param0: any): boolean;
						public hashCode(): number;
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
						public constructor(param0: jp.co.cyberagent.android.gpuimage.filter.GPUImageFilter);
						public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.Resource<any>, param2: number, param3: number): com.bumptech.glide.load.engine.Resource<any>;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module internal {
					export class FastBlur {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.FastBlur>;
						public constructor();
						public static blur(param0: globalAndroid.graphics.Bitmap, param1: number, param2: boolean): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module internal {
					export class RSBlur {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.RSBlur>;
						public constructor();
						public static blur(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: number): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module internal {
					export class SupportRSBlur {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.SupportRSBlur>;
						public constructor();
						public static blur(param0: globalAndroid.content.Context, param1: globalAndroid.graphics.Bitmap, param2: number): globalAndroid.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module jp {
	export module wasabeef {
		export module glide {
			export module transformations {
				export module internal {
					export class Utils {
						public static class: java.lang.Class<jp.wasabeef.glide.transformations.internal.Utils>;
						public static getMaskDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
						public static toDp(param0: number): number;
					}
				}
			}
		}
	}
}

//Generics information:
//com.bumptech.glide.GenericTransitionOptions:1
//com.bumptech.glide.ListPreloader:1
//com.bumptech.glide.ListPreloader.PreloadModelProvider:1
//com.bumptech.glide.ListPreloader.PreloadSizeProvider:1
//com.bumptech.glide.ModelTypes:1
//com.bumptech.glide.RequestBuilder:1
//com.bumptech.glide.TransitionOptions:2
//com.bumptech.glide.load.Encoder:1
//com.bumptech.glide.load.MultiTransformation:1
//com.bumptech.glide.load.Option:1
//com.bumptech.glide.load.Option.CacheKeyUpdater:1
//com.bumptech.glide.load.ResourceDecoder:2
//com.bumptech.glide.load.ResourceEncoder:1
//com.bumptech.glide.load.Transformation:1
//com.bumptech.glide.load.data.AssetPathFetcher:1
//com.bumptech.glide.load.data.DataFetcher:1
//com.bumptech.glide.load.data.DataFetcher.DataCallback:1
//com.bumptech.glide.load.data.DataRewinder:1
//com.bumptech.glide.load.data.DataRewinder.Factory:1
//com.bumptech.glide.load.data.LocalUriFetcher:1
//com.bumptech.glide.load.engine.DataCacheWriter:1
//com.bumptech.glide.load.engine.DecodeHelper:1
//com.bumptech.glide.load.engine.DecodeJob:1
//com.bumptech.glide.load.engine.DecodeJob.Callback:1
//com.bumptech.glide.load.engine.DecodeJob.DecodeCallback:1
//com.bumptech.glide.load.engine.DecodeJob.DeferredEncodeManager:1
//com.bumptech.glide.load.engine.DecodePath:3
//com.bumptech.glide.load.engine.DecodePath.DecodeCallback:1
//com.bumptech.glide.load.engine.EngineJob:1
//com.bumptech.glide.load.engine.EngineResource:1
//com.bumptech.glide.load.engine.LoadPath:3
//com.bumptech.glide.load.engine.LockedResource:1
//com.bumptech.glide.load.engine.Resource:1
//com.bumptech.glide.load.engine.bitmap_recycle.ArrayAdapterInterface:1
//com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool:1
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap:2
//com.bumptech.glide.load.engine.bitmap_recycle.GroupedLinkedMap.LinkedEntry:2
//com.bumptech.glide.load.engine.bitmap_recycle.PrettyPrintTreeMap:2
//com.bumptech.glide.load.model.AssetUriLoader:1
//com.bumptech.glide.load.model.AssetUriLoader.AssetFetcherFactory:1
//com.bumptech.glide.load.model.ByteArrayLoader:1
//com.bumptech.glide.load.model.ByteArrayLoader.Converter:1
//com.bumptech.glide.load.model.ByteArrayLoader.Fetcher:1
//com.bumptech.glide.load.model.DataUrlLoader:2
//com.bumptech.glide.load.model.DataUrlLoader.DataDecoder:1
//com.bumptech.glide.load.model.DataUrlLoader.DataUriFetcher:1
//com.bumptech.glide.load.model.DataUrlLoader.StreamFactory:1
//com.bumptech.glide.load.model.FileLoader:1
//com.bumptech.glide.load.model.FileLoader.Factory:1
//com.bumptech.glide.load.model.FileLoader.FileFetcher:1
//com.bumptech.glide.load.model.FileLoader.FileOpener:1
//com.bumptech.glide.load.model.ModelCache:2
//com.bumptech.glide.load.model.ModelCache.ModelKey:1
//com.bumptech.glide.load.model.ModelLoader:2
//com.bumptech.glide.load.model.ModelLoader.LoadData:1
//com.bumptech.glide.load.model.ModelLoaderFactory:2
//com.bumptech.glide.load.model.ModelLoaderRegistry.ModelLoaderCache.Entry:1
//com.bumptech.glide.load.model.MultiModelLoader:2
//com.bumptech.glide.load.model.MultiModelLoader.MultiFetcher:1
//com.bumptech.glide.load.model.MultiModelLoaderFactory.Entry:2
//com.bumptech.glide.load.model.ResourceLoader:1
//com.bumptech.glide.load.model.StringLoader:1
//com.bumptech.glide.load.model.UnitModelLoader:1
//com.bumptech.glide.load.model.UnitModelLoader.Factory:1
//com.bumptech.glide.load.model.UnitModelLoader.UnitFetcher:1
//com.bumptech.glide.load.model.UriLoader:1
//com.bumptech.glide.load.model.UriLoader.LocalUriFetcherFactory:1
//com.bumptech.glide.load.model.UrlUriLoader:1
//com.bumptech.glide.load.model.stream.BaseGlideUrlLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.Factory:1
//com.bumptech.glide.load.model.stream.QMediaStoreUriLoader.QMediaStoreUriFetcher:1
//com.bumptech.glide.load.resource.ImageDecoderResourceDecoder:1
//com.bumptech.glide.load.resource.SimpleResource:1
//com.bumptech.glide.load.resource.UnitTransformation:1
//com.bumptech.glide.load.resource.bitmap.BitmapDrawableDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder:1
//com.bumptech.glide.load.resource.bitmap.VideoDecoder.MediaMetadataRetrieverInitializer:1
//com.bumptech.glide.load.resource.drawable.DrawableResource:1
//com.bumptech.glide.load.resource.transcode.ResourceTranscoder:2
//com.bumptech.glide.load.resource.transcode.TranscoderRegistry.Entry:2
//com.bumptech.glide.load.resource.transcode.UnitTranscoder:1
//com.bumptech.glide.provider.EncoderRegistry.Entry:1
//com.bumptech.glide.provider.ResourceDecoderRegistry.Entry:2
//com.bumptech.glide.provider.ResourceEncoderRegistry.Entry:1
//com.bumptech.glide.request.BaseRequestOptions:1
//com.bumptech.glide.request.FutureTarget:1
//com.bumptech.glide.request.RequestFutureTarget:1
//com.bumptech.glide.request.RequestListener:1
//com.bumptech.glide.request.SingleRequest:1
//com.bumptech.glide.request.target.BaseTarget:1
//com.bumptech.glide.request.target.CustomTarget:1
//com.bumptech.glide.request.target.CustomViewTarget:2
//com.bumptech.glide.request.target.ImageViewTarget:1
//com.bumptech.glide.request.target.PreloadTarget:1
//com.bumptech.glide.request.target.SimpleTarget:1
//com.bumptech.glide.request.target.Target:1
//com.bumptech.glide.request.target.ThumbnailImageViewTarget:1
//com.bumptech.glide.request.target.ViewTarget:2
//com.bumptech.glide.request.transition.BitmapContainerTransitionFactory:1
//com.bumptech.glide.request.transition.NoTransition:1
//com.bumptech.glide.request.transition.NoTransition.NoAnimationFactory:1
//com.bumptech.glide.request.transition.Transition:1
//com.bumptech.glide.request.transition.TransitionFactory:1
//com.bumptech.glide.request.transition.ViewAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyAnimationFactory:1
//com.bumptech.glide.request.transition.ViewPropertyTransition:1
//com.bumptech.glide.request.transition.ViewTransition:1
//com.bumptech.glide.util.CachedHashCodeArrayMap:2
//com.bumptech.glide.util.FixedPreloadSizeProvider:1
//com.bumptech.glide.util.LruCache:2
//com.bumptech.glide.util.ViewPreloadSizeProvider:1
//com.bumptech.glide.util.pool.FactoryPools.Factory:1
//com.bumptech.glide.util.pool.FactoryPools.FactoryPool:1
//com.bumptech.glide.util.pool.FactoryPools.Resetter:1

