declare module com {
	export module bumptech {
		export module glide {
			export class GeneratedAppGlideModuleImpl {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedAppGlideModuleImpl>;
				public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
				public applyOptions(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				public getExcludedModuleClasses(): java.util.Set<java.lang.Class<any>>;
				public isManifestParsingEnabled(): boolean;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GeneratedRequestManagerFactory {
				public static class: java.lang.Class<com.bumptech.glide.GeneratedRequestManagerFactory>;
				public build(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context): com.bumptech.glide.RequestManager;
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.BuildConfig>;
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

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class ColoredRoundedCornerBorders {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders>;
					public equals(param0: any): boolean;
					public toString(): string;
					public transform(param0: globalAndroid.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: globalAndroid.graphics.Bitmap, param3: number, param4: number): globalAndroid.graphics.Bitmap;
					public constructor(param0: number, param1: number, param2: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType, param3: number, param4: number, param5: number, param6: number);
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
					public constructor(param0: number, param1: number);
				}
				export module ColoredRoundedCornerBorders {
					export class CornerType {
						public static class: java.lang.Class<com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType>;
						public static ALL: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static TOP_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static TOP_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BOTTOM_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BOTTOM_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static TOP: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BOTTOM: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static OTHER_TOP_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static OTHER_TOP_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static OTHER_BOTTOM_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static OTHER_BOTTOM_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static DIAGONAL_FROM_TOP_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static DIAGONAL_FROM_TOP_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BORDER_ALL: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BORDER_TOP: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BORDER_RIGHT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BORDER_BOTTOM: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static BORDER_LEFT: com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
						public static values(): native.Array<com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType>;
						public static valueOf(param0: string): com.github.triniwiz.imagecacheit.ColoredRoundedCornerBorders.CornerType;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class GlideApp {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.GlideApp>;
					public static tearDown(): void;
					public static with(param0: globalAndroid.app.Activity): com.github.triniwiz.imagecacheit.GlideRequests;
					public static getPhotoCacheDir(param0: globalAndroid.content.Context): java.io.File;
					public static get(param0: globalAndroid.content.Context): com.bumptech.glide.Glide;
					public static with(param0: androidx.fragment.app.FragmentActivity): com.github.triniwiz.imagecacheit.GlideRequests;
					public static with(param0: androidx.fragment.app.Fragment): com.github.triniwiz.imagecacheit.GlideRequests;
					public static getPhotoCacheDir(param0: globalAndroid.content.Context, param1: string): java.io.File;
					public static with(param0: globalAndroid.content.Context): com.github.triniwiz.imagecacheit.GlideRequests;
					public static with(param0: globalAndroid.view.View): com.github.triniwiz.imagecacheit.GlideRequests;
					public static init(param0: globalAndroid.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
					/** @deprecated */
					public static init(param0: com.bumptech.glide.Glide): void;
					/** @deprecated */
					public static with(param0: globalAndroid.app.Fragment): com.github.triniwiz.imagecacheit.GlideRequests;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class GlideOptions {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.GlideOptions>;
					public clone(): com.github.triniwiz.imagecacheit.GlideOptions;
					public format(param0: com.bumptech.glide.load.DecodeFormat): com.github.triniwiz.imagecacheit.GlideOptions;
					public static noAnimation(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static priorityOf(param0: com.bumptech.glide.Priority): com.github.triniwiz.imagecacheit.GlideOptions;
					public circleCrop(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static placeholderOf(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideOptions;
					public static circleCropTransform(): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalCenterCrop(): com.github.triniwiz.imagecacheit.GlideOptions;
					public constructor();
					public centerInside(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static encodeFormatOf(param0: globalAndroid.graphics.Bitmap.CompressFormat): com.github.triniwiz.imagecacheit.GlideOptions;
					public decode(param0: java.lang.Class<any>): com.github.triniwiz.imagecacheit.GlideOptions;
					public override(param0: number, param1: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public timeout(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public onlyRetrieveFromCache(param0: boolean): com.github.triniwiz.imagecacheit.GlideOptions;
					public downsample(param0: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.github.triniwiz.imagecacheit.GlideOptions;
					public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideOptions;
					public dontAnimate(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static diskCacheStrategyOf(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalTransform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation): com.github.triniwiz.imagecacheit.GlideOptions;
					/** @deprecated */
					public transforms(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.github.triniwiz.imagecacheit.GlideOptions;
					public set(param0: com.bumptech.glide.load.Option, param1: any): com.github.triniwiz.imagecacheit.GlideOptions;
					public lock(): com.github.triniwiz.imagecacheit.GlideOptions;
					public apply(param0: com.bumptech.glide.request.BaseRequestOptions<any>): com.github.triniwiz.imagecacheit.GlideOptions;
					public transform(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.github.triniwiz.imagecacheit.GlideOptions;
					public placeholder(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public static signatureOf(param0: com.bumptech.glide.load.Key): com.github.triniwiz.imagecacheit.GlideOptions;
					public static centerCropTransform(): com.github.triniwiz.imagecacheit.GlideOptions;
					public disallowHardwareConfig(): com.github.triniwiz.imagecacheit.GlideOptions;
					public sizeMultiplier(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public encodeFormat(param0: globalAndroid.graphics.Bitmap.CompressFormat): com.github.triniwiz.imagecacheit.GlideOptions;
					public static fitCenterTransform(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static formatOf(param0: com.bumptech.glide.load.DecodeFormat): com.github.triniwiz.imagecacheit.GlideOptions;
					public static centerInsideTransform(): com.github.triniwiz.imagecacheit.GlideOptions;
					public useAnimationPool(param0: boolean): com.github.triniwiz.imagecacheit.GlideOptions;
					public static timeoutOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public override(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalFitCenter(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static bitmapTransform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.github.triniwiz.imagecacheit.GlideOptions;
					public dontTransform(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static sizeMultiplierOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public static skipMemoryCacheOf(param0: boolean): com.github.triniwiz.imagecacheit.GlideOptions;
					public static option(param0: com.bumptech.glide.load.Option, param1: any): com.github.triniwiz.imagecacheit.GlideOptions;
					public useUnlimitedSourceGeneratorsPool(param0: boolean): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalCircleCrop(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static placeholderOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public static frameOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public static errorOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalTransform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.github.triniwiz.imagecacheit.GlideOptions;
					public frame(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public static overrideOf(param0: number, param1: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public theme(param0: globalAndroid.content.res.Resources.Theme): com.github.triniwiz.imagecacheit.GlideOptions;
					public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.github.triniwiz.imagecacheit.GlideOptions;
					public centerCrop(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static errorOf(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideOptions;
					public static noTransformation(): com.github.triniwiz.imagecacheit.GlideOptions;
					public error(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideOptions;
					public error(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public signature(param0: com.bumptech.glide.load.Key): com.github.triniwiz.imagecacheit.GlideOptions;
					public autoClone(): com.github.triniwiz.imagecacheit.GlideOptions;
					public fitCenter(): com.github.triniwiz.imagecacheit.GlideOptions;
					public static overrideOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public skipMemoryCache(param0: boolean): com.github.triniwiz.imagecacheit.GlideOptions;
					public transform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation): com.github.triniwiz.imagecacheit.GlideOptions;
					public priority(param0: com.bumptech.glide.Priority): com.github.triniwiz.imagecacheit.GlideOptions;
					public static encodeQualityOf(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public encodeQuality(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public fallback(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideOptions;
					public fallback(param0: number): com.github.triniwiz.imagecacheit.GlideOptions;
					public transform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.github.triniwiz.imagecacheit.GlideOptions;
					public static decodeTypeOf(param0: java.lang.Class<any>): com.github.triniwiz.imagecacheit.GlideOptions;
					public static downsampleOf(param0: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.github.triniwiz.imagecacheit.GlideOptions;
					public optionalCenterInside(): com.github.triniwiz.imagecacheit.GlideOptions;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class GlideRequest<TranscodeType>  extends com.bumptech.glide.RequestBuilder<any> implements java.lang.Cloneable  {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.GlideRequest<any>>;
					public theme(param0: globalAndroid.content.res.Resources.Theme): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public override(param0: number, param1: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public circleCrop(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public fitCenter(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public thumbnail(param0: com.bumptech.glide.RequestBuilder<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public clone(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public thumbnail(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public sizeMultiplier(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public format(param0: com.bumptech.glide.load.DecodeFormat): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public transition(param0: com.bumptech.glide.TransitionOptions<any,any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public optionalFitCenter(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public placeholder(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public dontTransform(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: string): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public encodeQuality(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public centerCrop(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public optionalTransform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public error(param0: com.bumptech.glide.RequestBuilder<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public error(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public onlyRetrieveFromCache(param0: boolean): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public priority(param0: com.bumptech.glide.Priority): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public fallback(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public useAnimationPool(param0: boolean): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public override(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: native.Array<number>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public placeholder(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public dontAnimate(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					/** @deprecated */
					public transforms(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public downsample(param0: com.bumptech.glide.load.resource.bitmap.DownsampleStrategy): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public listener(param0: com.bumptech.glide.request.RequestListener<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: any): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public skipMemoryCache(param0: boolean): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public centerInside(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public optionalTransform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public set(param0: com.bumptech.glide.load.Option, param1: any): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public optionalCenterCrop(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: globalAndroid.net.Uri): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public signature(param0: com.bumptech.glide.load.Key): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: java.io.File): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public decode(param0: java.lang.Class<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public apply(param0: com.bumptech.glide.request.BaseRequestOptions<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public timeout(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public getDownloadOnlyRequest(): com.github.triniwiz.imagecacheit.GlideRequest<java.io.File>;
					public optionalCenterInside(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public encodeFormat(param0: globalAndroid.graphics.Bitmap.CompressFormat): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public optionalCircleCrop(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public transform(param0: java.lang.Class, param1: com.bumptech.glide.load.Transformation): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public transform(param0: native.Array<com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public useUnlimitedSourceGeneratorsPool(param0: boolean): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public thumbnail(param0: native.Array<com.bumptech.glide.RequestBuilder<any>>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: java.lang.Integer): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public fallback(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public error(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public frame(param0: number): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public addListener(param0: com.bumptech.glide.request.RequestListener<any>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public load(param0: globalAndroid.graphics.Bitmap): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					/** @deprecated */
					public load(param0: java.net.URL): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public transform(param0: com.bumptech.glide.load.Transformation<globalAndroid.graphics.Bitmap>): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public disallowHardwareConfig(): com.github.triniwiz.imagecacheit.GlideRequest<any>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class GlideRequests {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.GlideRequests>;
					public load(param0: globalAndroid.graphics.drawable.Drawable): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public load(param0: native.Array<number>): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public addDefaultRequestListener(param0: com.bumptech.glide.request.RequestListener<any>): com.github.triniwiz.imagecacheit.GlideRequests;
					public load(param0: java.io.File): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public downloadOnly(): com.github.triniwiz.imagecacheit.GlideRequest<java.io.File>;
					public applyDefaultRequestOptions(param0: com.bumptech.glide.request.RequestOptions): com.github.triniwiz.imagecacheit.GlideRequests;
					public setRequestOptions(param0: com.bumptech.glide.request.RequestOptions): void;
					public asGif(): com.github.triniwiz.imagecacheit.GlideRequest<com.bumptech.glide.load.resource.gif.GifDrawable>;
					public asDrawable(): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public load(param0: string): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public download(param0: any): com.github.triniwiz.imagecacheit.GlideRequest<java.io.File>;
					public constructor(param0: com.bumptech.glide.Glide, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode, param3: globalAndroid.content.Context);
					public load(param0: any): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public as(param0: java.lang.Class): com.github.triniwiz.imagecacheit.GlideRequest<any>;
					public setDefaultRequestOptions(param0: com.bumptech.glide.request.RequestOptions): com.github.triniwiz.imagecacheit.GlideRequests;
					public asFile(): com.github.triniwiz.imagecacheit.GlideRequest<java.io.File>;
					public load(param0: java.lang.Integer): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public load(param0: globalAndroid.net.Uri): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					/** @deprecated */
					public load(param0: java.net.URL): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
					public asBitmap(): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.Bitmap>;
					public load(param0: globalAndroid.graphics.Bitmap): com.github.triniwiz.imagecacheit.GlideRequest<globalAndroid.graphics.drawable.Drawable>;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class ImageCache {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.ImageCache>;
					public static init(param0: globalAndroid.content.Context): void;
					public static hasItem(param0: string, param1: com.github.triniwiz.imagecacheit.ImageCache.Callback): void;
					public static getItem(param0: string, param1: java.util.Map<string,string>, param2: com.github.triniwiz.imagecacheit.ImageCache.Callback): void;
					public constructor();
					public static clear(): void;
				}
				export module ImageCache {
					export class Callback {
						public static class: java.lang.Class<com.github.triniwiz.imagecacheit.ImageCache.Callback>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.imagecacheit.ImageCache$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onSuccess(param0: any): void;
							onError(param0: any): void;
						});
						public constructor();
						public onSuccess(param0: any): void;
						public onError(param0: any): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class ImageView {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.ImageView>;
					public TAG: string;
					public setImageDrawable(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getBorderBottomLeftRadius(): number;
					public hasUniformBorderWidth(): boolean;
					public setFallbackImage(param0: globalAndroid.graphics.Bitmap): void;
					public setPlaceHolder(param0: number): void;
					public setBorderRightColor(param0: number): void;
					public setBorderTopRightRadius(param0: number): void;
					public setPlaceHolder(param0: globalAndroid.graphics.Bitmap): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public setImageURI(param0: globalAndroid.net.Uri): void;
					public setErrorHolder(param0: globalAndroid.net.Uri): void;
					public setFallbackImage(param0: globalAndroid.net.Uri): void;
					public getBorderLeftWidth(): number;
					public getBorderTopWidth(): number;
					public setBorderWidth(param0: number): void;
					public setBorderLeftWidth(param0: number): void;
					public setErrorHolder(param0: number): void;
					public setBorderTopColor(param0: number): void;
					public setBorderTopLeftRadius(param0: number): void;
					public setFallbackImage(): void;
					public onDraw(param0: globalAndroid.graphics.Canvas): void;
					public getBorderTopLeftRadius(): number;
					public setBorderBottomLeftRadius(param0: number): void;
					public getBorderTopColor(): number;
					public setBorderBottomWidth(param0: number): void;
					public setImageBitmap(param0: globalAndroid.graphics.Bitmap): void;
					public setDrawableSrc(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setErrorHolder(param0: globalAndroid.graphics.Bitmap): void;
					public setFallbackImage(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getBorderBottomRightRadius(): number;
					public hasUniformBorderRadius(): boolean;
					public hasUniformBorderColor(): boolean;
					public getUniformBorderColor(): number;
					public getBorderRightColor(): number;
					public setBorderRightWidth(param0: number): void;
					public setPlaceHolder(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setErrorHolder(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getUniformBorderWidth(): number;
					public setBorderLeftColor(param0: number): void;
					public setBorderRadius(param0: number): void;
					public setListener(): void;
					public getBorderBottomWidth(): number;
					public setBorderColor(param0: number): void;
					public hasBorderColor(): boolean;
					public setPlaceHolder(param0: globalAndroid.net.Uri): void;
					public getBorderLeftColor(): number;
					public setBorderTopWidth(param0: number): void;
					public setBorderBottomColor(param0: number): void;
					public getUniformBorderRadius(): number;
					public getBorderBottomColor(): number;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public getBorderRightWidth(): number;
					public hasBorderRadius(): boolean;
					public getBorderTopRightRadius(): number;
					public hasBorderWidth(): boolean;
					public hasUniformBorder(): boolean;
					public setBitmapSrc(param0: globalAndroid.graphics.Bitmap): void;
					public setUriSrc(param0: globalAndroid.net.Uri): void;
					public setFallbackImage(param0: number): void;
					public setBorderBottomRightRadius(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module imagecacheit {
				export class MyAppGlideModule {
					public static class: java.lang.Class<com.github.triniwiz.imagecacheit.MyAppGlideModule>;
					public registerComponents(param0: globalAndroid.content.Context, param1: com.bumptech.glide.Glide, param2: com.bumptech.glide.Registry): void;
					public constructor();
				}
			}
		}
	}
}

//Generics information:
//com.github.triniwiz.imagecacheit.GlideRequest:1

