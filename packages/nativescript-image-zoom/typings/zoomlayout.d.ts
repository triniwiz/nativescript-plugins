declare module com {
	export module otaliastudios {
		export module zoom {
			export class AbsolutePoint {
				public static class: java.lang.Class<com.otaliastudios.zoom.AbsolutePoint>;
				public constructor(x: number, y: number);
				public set(): void;
				public set(x: java.lang.Number): void;
				public minus(absolutePoint: com.otaliastudios.zoom.AbsolutePoint): com.otaliastudios.zoom.AbsolutePoint;
				public copy(x: number, y: number): com.otaliastudios.zoom.AbsolutePoint;
				public component2(): number;
				public getY(): number;
				public set(p: com.otaliastudios.zoom.AbsolutePoint): void;
				public constructor(point: com.otaliastudios.zoom.AbsolutePoint);
				public setX(value: number): void;
				public component1(): number;
				public toString(): string;
				public constructor();
				public equals(other: any): boolean;
				public toScaled$library_release(scale: number, outPoint: com.otaliastudios.zoom.ScaledPoint): com.otaliastudios.zoom.ScaledPoint;
				public set(x: java.lang.Number, y: java.lang.Number): void;
				public getX(): number;
				public hashCode(): number;
				public setY(value: number): void;
				public times(factor: java.lang.Number): com.otaliastudios.zoom.AbsolutePoint;
				public plus(absolutePoint: com.otaliastudios.zoom.AbsolutePoint): com.otaliastudios.zoom.AbsolutePoint;
				public unaryMinus(): com.otaliastudios.zoom.AbsolutePoint;
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class Alignment {
				public static class: java.lang.Class<com.otaliastudios.zoom.Alignment>;
				public static INSTANCE: com.otaliastudios.zoom.Alignment;
				public static TOP: number = 1;
				public static BOTTOM: number = 2;
				public static CENTER_VERTICAL: number = 3;
				public static NONE_VERTICAL: number = 4;
				public static LEFT: number = 16;
				public static RIGHT: number = 32;
				public static CENTER_HORIZONTAL: number = 48;
				public static NONE_HORIZONTAL: number = 64;
				public static CENTER: number = 51;
				public static NONE: number = 68;
				public toVerticalGravity$library_release(this_: number, alignment: number): number;
				public isNone$library_release(alignment: number): boolean;
				public toHorizontalGravity$library_release(this_: number, alignment: number): number;
				public getHorizontal$library_release(alignment: number): number;
				public getVertical$library_release(alignment: number): number;
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class BuildConfig {
				public static class: java.lang.Class<com.otaliastudios.zoom.BuildConfig>;
				public static DEBUG: boolean = 0;
				public static LIBRARY_PACKAGE_NAME: string = 'com.otaliastudios.zoom';
				public static BUILD_TYPE: string = 'release';
				public constructor();
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class OverPanRangeProvider {
				public static class: java.lang.Class<com.otaliastudios.zoom.OverPanRangeProvider>;
				/**
				 * Constructs a new instance of the com.otaliastudios.zoom.OverPanRangeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { getOverPan(param0: com.otaliastudios.zoom.ZoomEngine, param1: boolean): number; '<clinit>'(): void });
				public constructor();
				public static DEFAULT: com.otaliastudios.zoom.OverPanRangeProvider;
				public getOverPan(param0: com.otaliastudios.zoom.ZoomEngine, param1: boolean): number;
			}
			export module OverPanRangeProvider {
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.OverPanRangeProvider.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class OverZoomRangeProvider {
				public static class: java.lang.Class<com.otaliastudios.zoom.OverZoomRangeProvider>;
				/**
				 * Constructs a new instance of the com.otaliastudios.zoom.OverZoomRangeProvider interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { getOverZoom(param0: com.otaliastudios.zoom.ZoomEngine, param1: boolean): number; '<clinit>'(): void });
				public constructor();
				public static DEFAULT: com.otaliastudios.zoom.OverZoomRangeProvider;
				public getOverZoom(param0: com.otaliastudios.zoom.ZoomEngine, param1: boolean): number;
			}
			export module OverZoomRangeProvider {
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.OverZoomRangeProvider.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ScaledPoint {
				public static class: java.lang.Class<com.otaliastudios.zoom.ScaledPoint>;
				public constructor(x: number, y: number);
				public constructor(point: com.otaliastudios.zoom.ScaledPoint);
				public set(): void;
				public set(p: com.otaliastudios.zoom.ScaledPoint): void;
				public set(x: java.lang.Number): void;
				public component2(): number;
				public getY(): number;
				public minus(scaledPoint: com.otaliastudios.zoom.ScaledPoint): com.otaliastudios.zoom.ScaledPoint;
				public setX(value: number): void;
				public component1(): number;
				public unaryMinus(): com.otaliastudios.zoom.ScaledPoint;
				public toString(): string;
				public times(factor: java.lang.Number): com.otaliastudios.zoom.ScaledPoint;
				public constructor();
				public plus(scaledPoint: com.otaliastudios.zoom.ScaledPoint): com.otaliastudios.zoom.ScaledPoint;
				public equals(other: any): boolean;
				public toAbsolute$library_release(scale: number, outPoint: com.otaliastudios.zoom.AbsolutePoint): com.otaliastudios.zoom.AbsolutePoint;
				public copy(x: number, y: number): com.otaliastudios.zoom.ScaledPoint;
				public set(x: java.lang.Number, y: java.lang.Number): void;
				public getX(): number;
				public hashCode(): number;
				public setY(value: number): void;
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomApi {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi>;
				/**
				 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getZoom(): number;
					getRealZoom(): number;
					getPan(): com.otaliastudios.zoom.AbsolutePoint;
					getPanX(): number;
					getPanY(): number;
					getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
					getScaledPanX(): number;
					getScaledPanY(): number;
					setOverScrollHorizontal(param0: boolean): void;
					setOverScrollVertical(param0: boolean): void;
					setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
					setHorizontalPanEnabled(param0: boolean): void;
					setVerticalPanEnabled(param0: boolean): void;
					setZoomEnabled(param0: boolean): void;
					setOverPinchable(param0: boolean): void;
					setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
					setFlingEnabled(param0: boolean): void;
					setScrollEnabled(param0: boolean): void;
					setOneFingerScrollEnabled(param0: boolean): void;
					setTwoFingersScrollEnabled(param0: boolean): void;
					setThreeFingersScrollEnabled(param0: boolean): void;
					setAllowFlingInOverscroll(param0: boolean): void;
					setTransformation(param0: number): void;
					setTransformation(param0: number, param1: number): void;
					setAlignment(param0: number): void;
					moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
					moveToCenter(param0: java.lang.Float, param1: boolean): void;
					panTo(param0: number, param1: number, param2: boolean): void;
					panBy(param0: number, param1: number, param2: boolean): void;
					zoomTo(param0: number, param1: boolean): void;
					zoomBy(param0: number, param1: boolean): void;
					zoomIn(): void;
					zoomOut(): void;
					realZoomTo(param0: number, param1: boolean): void;
					getMaxZoom(): number;
					getMaxZoomType(): number;
					setMaxZoom(param0: number): void;
					setMaxZoom(param0: number, param1: number): void;
					getMinZoom(): number;
					getMinZoomType(): number;
					setMinZoom(param0: number): void;
					setMinZoom(param0: number, param1: number): void;
					setAnimationDuration(param0: number): void;
					cancelAnimations(): boolean;
					'<clinit>'(): void;
				});
				public constructor();
				public static TRANSFORMATION_GRAVITY_AUTO: number = 0;
				public static TYPE_ZOOM: number = 0;
				public static TRANSFORMATION_CENTER_CROP: number = 1;
				public static MAX_ZOOM_DEFAULT: number = 2.5;
				public static TYPE_REAL_ZOOM: number = 1;
				public static TRANSFORMATION_CENTER_INSIDE: number = 0;
				public static MIN_ZOOM_DEFAULT: number = 0.8;
				public static MIN_ZOOM_DEFAULT_TYPE: number = 0;
				public static TRANSFORMATION_NONE: number = 2;
				public static MAX_ZOOM_DEFAULT_TYPE: number = 0;
				public static ALIGNMENT_DEFAULT: number = 51;
				public zoomIn(): void;
				public getPanX(): number;
				public zoomOut(): void;
				public setMaxZoom(param0: number, param1: number): void;
				public getZoom(): number;
				public cancelAnimations(): boolean;
				public setHorizontalPanEnabled(param0: boolean): void;
				public setTransformation(param0: number): void;
				public setMinZoom(param0: number, param1: number): void;
				public setOverScrollHorizontal(param0: boolean): void;
				public panBy(param0: number, param1: number, param2: boolean): void;
				public getMaxZoomType(): number;
				public moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
				public moveToCenter(param0: java.lang.Float, param1: boolean): void;
				public setTransformation(param0: number, param1: number): void;
				public realZoomTo(param0: number, param1: boolean): void;
				public getPan(): com.otaliastudios.zoom.AbsolutePoint;
				public setOneFingerScrollEnabled(param0: boolean): void;
				public getScaledPanY(): number;
				public setThreeFingersScrollEnabled(param0: boolean): void;
				public zoomTo(param0: number, param1: boolean): void;
				public zoomBy(param0: number, param1: boolean): void;
				public setTwoFingersScrollEnabled(param0: boolean): void;
				public setMinZoom(param0: number): void;
				public setAllowFlingInOverscroll(param0: boolean): void;
				public setAlignment(param0: number): void;
				public getScaledPanX(): number;
				public getMinZoomType(): number;
				public setVerticalPanEnabled(param0: boolean): void;
				public setFlingEnabled(param0: boolean): void;
				public setScrollEnabled(param0: boolean): void;
				public setOverScrollVertical(param0: boolean): void;
				public setOverPinchable(param0: boolean): void;
				public getMaxZoom(): number;
				public setZoomEnabled(param0: boolean): void;
				public getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
				public setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public setMaxZoom(param0: number): void;
				public getPanY(): number;
				public panTo(param0: number, param1: number, param2: boolean): void;
				public setAnimationDuration(param0: number): void;
				public getRealZoom(): number;
				public getMinZoom(): number;
			}
			export module ZoomApi {
				export class AbsolutePan {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.AbsolutePan>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$AbsolutePan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Alignment {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.Alignment>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$Alignment interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.Companion>;
					public static TYPE_ZOOM: number = 0;
					public static TYPE_REAL_ZOOM: number = 1;
					public static TRANSFORMATION_CENTER_INSIDE: number = 0;
					public static TRANSFORMATION_CENTER_CROP: number = 1;
					public static TRANSFORMATION_NONE: number = 2;
					public static TRANSFORMATION_GRAVITY_AUTO: number = 0;
					public static MIN_ZOOM_DEFAULT: number = 0.8;
					public static MIN_ZOOM_DEFAULT_TYPE: number = 0;
					public static MAX_ZOOM_DEFAULT: number = 2.5;
					public static MAX_ZOOM_DEFAULT_TYPE: number = 0;
					public static ALIGNMENT_DEFAULT: number = 51;
				}
				export class DefaultImpls {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.DefaultImpls>;
					public static setMinZoom(this_: com.otaliastudios.zoom.ZoomApi, minZoom: number): void;
					public static setTransformation(this_: com.otaliastudios.zoom.ZoomApi, transformation: number): void;
					public static setMaxZoom(this_: com.otaliastudios.zoom.ZoomApi, maxZoom: number): void;
				}
				export class RealZoom {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.RealZoom>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$RealZoom interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class ScaledPan {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.ScaledPan>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$ScaledPan interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Transformation {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.Transformation>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$Transformation interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class Zoom {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.Zoom>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$Zoom interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
				export class ZoomType {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomApi.ZoomType>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomApi$ZoomType interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomEngine extends com.otaliastudios.zoom.ZoomApi {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomEngine>;
				public static DEFAULT_ANIMATION_DURATION: number = 280;
				public setTransformation(transformation: number): void;
				public getContainerWidth(): number;
				public setMaxZoom(param0: number, param1: number): void;
				public setOverPanRange(provider: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public getMaxZoomType(): number;
				public panBy(param0: number, param1: number, param2: boolean): void;
				public setOneFingerScrollEnabled(param0: boolean): void;
				public getScaledPanY(): number;
				public zoomTo(this_: number, zoom: boolean): void;
				public setThreeFingersScrollEnabled(param0: boolean): void;
				public zoomBy(param0: number, param1: boolean): void;
				public removeListener(listener: com.otaliastudios.zoom.ZoomEngine.Listener): void;
				public getMinZoomType(): number;
				public setFlingEnabled(param0: boolean): void;
				public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setScrollEnabled(param0: boolean): void;
				public setFlingEnabled(enabled: boolean): void;
				public setVerticalPanEnabled(enabled: boolean): void;
				public computeVerticalScrollRange(): number;
				public getContentHeight(): number;
				public setMinZoom(minZoom: number, type: number): void;
				public setOverPinchable(overPinchable: boolean): void;
				public getContentWidth(): number;
				public setTransformation(param0: number): void;
				public setOverScrollHorizontal(param0: boolean): void;
				public getZoomManager$library_release(): com.otaliastudios.zoom.internal.movement.ZoomManager;
				public computeHorizontalScrollOffset(): number;
				public realZoomTo(param0: number, param1: boolean): void;
				/** @deprecated */
				public constructor(context: globalAndroid.content.Context, container: globalAndroid.view.View, listener: com.otaliastudios.zoom.ZoomEngine.Listener);
				public setContentSize(width: number, height: number): void;
				public moveToCenter(targetRealZoom: java.lang.Float, zoomLayoutCenterX: boolean): void;
				public clear(): void;
				public setContentSize(width: number, height: number, applyTransformation: boolean): void;
				public zoomTo(param0: number, param1: boolean): void;
				public setMinZoom(param0: number): void;
				public setContainer(container: globalAndroid.view.View): void;
				public setOverScrollVertical(param0: boolean): void;
				public getMaxZoom(): number;
				public getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
				public setMaxZoom(maxZoom: number, type: number): void;
				/** @deprecated */
				public setContentSize(rect: globalAndroid.graphics.RectF): void;
				public setContainerSize(width: number, height: number): void;
				public moveTo(update: number, this_: number, zoom: number, x: boolean): void;
				public setScrollEnabled(enabled: boolean): void;
				public setHorizontalPanEnabled(enabled: boolean): void;
				public panTo(x: number, y: number, animate: boolean): void;
				public getMinZoom(): number;
				public zoomIn(): void;
				public getPanX(): number;
				public setZoomEnabled(enabled: boolean): void;
				public constructor(context: globalAndroid.content.Context);
				public computeVerticalScrollOffset(): number;
				public setMinZoom(param0: number, param1: number): void;
				public setTwoFingersScrollEnabled(enabled: boolean): void;
				public zoomBy(this_: number, zoomFactor: boolean): void;
				public setTransformation(param0: number, param1: number): void;
				public setAlignment(alignment: number): void;
				public computeHorizontalScrollRange(): number;
				public setAllowFlingInOverscroll(allow: boolean): void;
				public setTwoFingersScrollEnabled(param0: boolean): void;
				public setAlignment(param0: number): void;
				public setVerticalPanEnabled(param0: boolean): void;
				public setMaxZoom(maxZoom: number): void;
				public realZoomTo(this_: number, realZoom: boolean): void;
				public setOverPinchable(param0: boolean): void;
				public setZoomEnabled(param0: boolean): void;
				public setOverScrollVertical(overScroll: boolean): void;
				public setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public addListener(listener: com.otaliastudios.zoom.ZoomEngine.Listener): void;
				public panTo(param0: number, param1: number, param2: boolean): void;
				public setOverScrollHorizontal(overScroll: boolean): void;
				public setOneFingerScrollEnabled(enabled: boolean): void;
				public getRealZoom(): number;
				public zoomOut(): void;
				public setOverZoomRange(provider: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public getZoom(): number;
				public setTransformation(transformation: number, gravity: number): void;
				public cancelAnimations(): boolean;
				public setHorizontalPanEnabled(param0: boolean): void;
				public getContainerHeight(): number;
				public panBy(this_: number, dx: number, dy: boolean): void;
				public moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
				public setThreeFingersScrollEnabled(enabled: boolean): void;
				public moveToCenter(param0: java.lang.Float, param1: boolean): void;
				public getPan(): com.otaliastudios.zoom.AbsolutePoint;
				public setAllowFlingInOverscroll(param0: boolean): void;
				public getScaledPanX(): number;
				public setAnimationDuration(duration: number): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public setMaxZoom(param0: number): void;
				public getPanY(): number;
				public getMatrix(): globalAndroid.graphics.Matrix;
				public constructor(context: globalAndroid.content.Context, container: globalAndroid.view.View);
				public setAnimationDuration(param0: number): void;
				public setMinZoom(minZoom: number): void;
				public setContainerSize(width: number, height: number, applyTransformation: boolean): void;
			}
			export module ZoomEngine {
				export class Callbacks implements com.otaliastudios.zoom.internal.StateController.Callback, com.otaliastudios.zoom.internal.matrix.MatrixController.Callback {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomEngine.Callbacks>;
					public constructor(this$0: com.otaliastudios.zoom.ZoomEngine);
					public maybeStartPinchGesture(param0: globalAndroid.view.MotionEvent): boolean;
					public post(action: java.lang.Runnable): boolean;
					public maybeStartScrollFlingGesture(param0: globalAndroid.view.MotionEvent): boolean;
					public onGlobalLayout(): void;
					public maybeStartPinchGesture(event: globalAndroid.view.MotionEvent): boolean;
					public post(param0: java.lang.Runnable): boolean;
					public onStateIdle(): void;
					public onMatrixSizeChanged(this_: number, oldZoom: boolean): void;
					public maybeStartScrollFlingGesture(event: globalAndroid.view.MotionEvent): boolean;
					public endScrollGesture(): void;
					public postOnAnimation(param0: java.lang.Runnable): void;
					public postOnAnimation(action: java.lang.Runnable): void;
					public isStateAllowed(newState: number): boolean;
					public onMatrixSizeChanged(param0: number, param1: boolean): void;
					public isStateAllowed(param0: number): boolean;
					public onMatrixUpdate(): void;
					public cleanupState(oldState: number): void;
					public cleanupState(param0: number): void;
				}
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomEngine.Companion>;
				}
				export class Listener {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomEngine.Listener>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomEngine$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onUpdate(param0: com.otaliastudios.zoom.ZoomEngine, param1: globalAndroid.graphics.Matrix): void; onIdle(param0: com.otaliastudios.zoom.ZoomEngine): void });
					public constructor();
					public onIdle(param0: com.otaliastudios.zoom.ZoomEngine): void;
					public onUpdate(param0: com.otaliastudios.zoom.ZoomEngine, param1: globalAndroid.graphics.Matrix): void;
				}
				export abstract class SimpleListener extends com.otaliastudios.zoom.ZoomEngine.Listener {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomEngine.SimpleListener>;
					public onUpdate$library_release(param0: com.otaliastudios.zoom.ZoomEngine, param1: number, param2: number, param3: number): void;
					public constructor();
					public onIdle(param0: com.otaliastudios.zoom.ZoomEngine): void;
					public onUpdate(panY: com.otaliastudios.zoom.ZoomEngine, scaleX: globalAndroid.graphics.Matrix): void;
					public onUpdate(param0: com.otaliastudios.zoom.ZoomEngine, param1: globalAndroid.graphics.Matrix): void;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomImageView implements com.otaliastudios.zoom.ZoomApi {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomImageView>;
				public setTransformation(transformation: number): void;
				public zoomIn(): void;
				public getPanX(): number;
				public setZoomEnabled(enabled: boolean): void;
				public setMaxZoom(param0: number, param1: number): void;
				public panBy(dx: number, dy: number, animate: boolean): void;
				public computeVerticalScrollOffset(): number;
				public constructor(context: globalAndroid.content.Context);
				public setMinZoom(param0: number, param1: number): void;
				public realZoomTo(realZoom: number, animate: boolean): void;
				public setOverPanRange(provider: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public getMaxZoomType(): number;
				public moveTo(zoom: number, x: number, y: number, animate: boolean): void;
				public panBy(param0: number, param1: number, param2: boolean): void;
				public setTwoFingersScrollEnabled(enabled: boolean): void;
				public setTransformation(param0: number, param1: number): void;
				public setOneFingerScrollEnabled(param0: boolean): void;
				public setAlignment(alignment: number): void;
				public computeHorizontalScrollRange(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getScaledPanY(): number;
				public setAllowFlingInOverscroll(allow: boolean): void;
				public setThreeFingersScrollEnabled(param0: boolean): void;
				public zoomBy(param0: number, param1: boolean): void;
				public zoomBy(zoomFactor: number, animate: boolean): void;
				public setTwoFingersScrollEnabled(param0: boolean): void;
				public zoomTo(zoom: number, animate: boolean): void;
				public setAlignment(param0: number): void;
				public getMinZoomType(): number;
				public setVerticalPanEnabled(param0: boolean): void;
				public setFlingEnabled(param0: boolean): void;
				public setScrollEnabled(param0: boolean): void;
				public setMaxZoom(maxZoom: number): void;
				public setOverPinchable(param0: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setZoomEnabled(param0: boolean): void;
				public setFlingEnabled(enabled: boolean): void;
				public setOverScrollVertical(overScroll: boolean): void;
				public setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public panTo(param0: number, param1: number, param2: boolean): void;
				public setVerticalPanEnabled(enabled: boolean): void;
				public computeVerticalScrollRange(): number;
				public getEngine(): com.otaliastudios.zoom.ZoomEngine;
				public setOneFingerScrollEnabled(enabled: boolean): void;
				public setOverScrollHorizontal(overScroll: boolean): void;
				public getRealZoom(): number;
				public onDraw(canvas: globalAndroid.graphics.Canvas): void;
				public setMinZoom(minZoom: number, type: number): void;
				public setOverPinchable(overPinchable: boolean): void;
				public zoomOut(): void;
				public setOverZoomRange(provider: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public getZoom(): number;
				public cancelAnimations(): boolean;
				public setTransformation(transformation: number, gravity: number): void;
				public setHorizontalPanEnabled(param0: boolean): void;
				public setTransformation(param0: number): void;
				public setOverScrollHorizontal(param0: boolean): void;
				public computeHorizontalScrollOffset(): number;
				public moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
				public setThreeFingersScrollEnabled(enabled: boolean): void;
				public moveToCenter(param0: java.lang.Float, param1: boolean): void;
				public realZoomTo(param0: number, param1: boolean): void;
				public moveToCenter(zoom: java.lang.Float, animate: boolean): void;
				public getPan(): com.otaliastudios.zoom.AbsolutePoint;
				public zoomTo(param0: number, param1: boolean): void;
				public setMinZoom(param0: number): void;
				public setAllowFlingInOverscroll(param0: boolean): void;
				public getScaledPanX(): number;
				public setAnimationDuration(duration: number): void;
				public setOverScrollVertical(param0: boolean): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public getMaxZoom(): number;
				public getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
				public setMaxZoom(maxZoom: number, type: number): void;
				public setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public setMaxZoom(param0: number): void;
				public getPanY(): number;
				public setScrollEnabled(enabled: boolean): void;
				public setImageDrawable(drawable: globalAndroid.graphics.drawable.Drawable): void;
				public onSizeChanged(w: number, h: number, oldw: number, oldh: number): void;
				public setAnimationDuration(param0: number): void;
				public setHorizontalPanEnabled(enabled: boolean): void;
				public setMinZoom(minZoom: number): void;
				public panTo(x: number, y: number, animate: boolean): void;
				public getMinZoom(): number;
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomLayout implements com.otaliastudios.zoom.ZoomApi {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomLayout>;
				public setTransformation(transformation: number): void;
				public zoomIn(): void;
				public getPanX(): number;
				public setZoomEnabled(enabled: boolean): void;
				public setMaxZoom(param0: number, param1: number): void;
				public panBy(dx: number, dy: number, animate: boolean): void;
				public computeVerticalScrollOffset(): number;
				public constructor(context: globalAndroid.content.Context);
				public setMinZoom(param0: number, param1: number): void;
				public realZoomTo(realZoom: number, animate: boolean): void;
				public setOverPanRange(provider: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public getMaxZoomType(): number;
				public moveTo(zoom: number, x: number, y: number, animate: boolean): void;
				public panBy(param0: number, param1: number, param2: boolean): void;
				public setTwoFingersScrollEnabled(enabled: boolean): void;
				public setTransformation(param0: number, param1: number): void;
				public setOneFingerScrollEnabled(param0: boolean): void;
				public setAlignment(alignment: number): void;
				public drawChild(result: globalAndroid.graphics.Canvas, this_: globalAndroid.view.View, canvas: number): boolean;
				public computeHorizontalScrollRange(): number;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getScaledPanY(): number;
				public setHasClickableChildren(this_: boolean): void;
				public setAllowFlingInOverscroll(allow: boolean): void;
				public setThreeFingersScrollEnabled(param0: boolean): void;
				public zoomBy(param0: number, param1: boolean): void;
				public zoomBy(zoomFactor: number, animate: boolean): void;
				public setTwoFingersScrollEnabled(param0: boolean): void;
				public zoomTo(zoom: number, animate: boolean): void;
				public setAlignment(param0: number): void;
				public getMinZoomType(): number;
				public setVerticalPanEnabled(param0: boolean): void;
				public setFlingEnabled(param0: boolean): void;
				public onInterceptTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public setScrollEnabled(param0: boolean): void;
				public setMaxZoom(maxZoom: number): void;
				public setOverPinchable(param0: boolean): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet, defStyleAttr: number);
				public setZoomEnabled(param0: boolean): void;
				public setFlingEnabled(enabled: boolean): void;
				public setOverScrollVertical(overScroll: boolean): void;
				public onGlobalLayout(): void;
				public setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public panTo(param0: number, param1: number, param2: boolean): void;
				public onDetachedFromWindow(): void;
				public setVerticalPanEnabled(enabled: boolean): void;
				public computeVerticalScrollRange(): number;
				public getEngine(): com.otaliastudios.zoom.ZoomEngine;
				public setOneFingerScrollEnabled(enabled: boolean): void;
				public setOverScrollHorizontal(overScroll: boolean): void;
				public getRealZoom(): number;
				public setMinZoom(minZoom: number, type: number): void;
				public setOverPinchable(overPinchable: boolean): void;
				public zoomOut(): void;
				public setOverZoomRange(provider: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public getZoom(): number;
				public cancelAnimations(): boolean;
				public setTransformation(transformation: number, gravity: number): void;
				public setHorizontalPanEnabled(param0: boolean): void;
				public setTransformation(param0: number): void;
				public setOverScrollHorizontal(param0: boolean): void;
				public computeHorizontalScrollOffset(): number;
				public moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
				public setThreeFingersScrollEnabled(enabled: boolean): void;
				public onMeasure(heightMode: number, widthSize: number): void;
				public moveToCenter(param0: java.lang.Float, param1: boolean): void;
				public realZoomTo(param0: number, param1: boolean): void;
				public moveToCenter(zoom: java.lang.Float, animate: boolean): void;
				public getPan(): com.otaliastudios.zoom.AbsolutePoint;
				public zoomTo(param0: number, param1: boolean): void;
				public setMinZoom(param0: number): void;
				public setAllowFlingInOverscroll(param0: boolean): void;
				public getScaledPanX(): number;
				public setAnimationDuration(duration: number): void;
				public setOverScrollVertical(param0: boolean): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public getMaxZoom(): number;
				public getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
				public setMaxZoom(maxZoom: number, type: number): void;
				public addView(child: globalAndroid.view.View, index: number, params: globalAndroid.view.ViewGroup.LayoutParams): void;
				public setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public setMaxZoom(param0: number): void;
				public getPanY(): number;
				public setScrollEnabled(enabled: boolean): void;
				public setAnimationDuration(param0: number): void;
				public setHorizontalPanEnabled(enabled: boolean): void;
				public setMinZoom(minZoom: number): void;
				public panTo(x: number, y: number, animate: boolean): void;
				public onAttachedToWindow(): void;
				public getMinZoom(): number;
			}
			export module ZoomLayout {
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomLayout.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomLogger {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomLogger>;
				public static LEVEL_VERBOSE: number = 0;
				public static LEVEL_INFO: number = 1;
				public static LEVEL_WARNING: number = 2;
				public static LEVEL_ERROR: number = 3;
				public i$library_release(data: androidNative.Array<any>): void;
				public static setLogLevel(logLevel: number): void;
				public e$library_release(data: androidNative.Array<any>): void;
				public e$library_release(message: string): void;
				public w$library_release(data: androidNative.Array<any>): void;
				public v$library_release(message: string): void;
				public i$library_release(message: string): void;
				public w$library_release(message: string): void;
				public v$library_release(data: androidNative.Array<any>): void;
			}
			export module ZoomLogger {
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomLogger.Companion>;
					public getLastTag$library_release(): string;
					public setLastMessage$library_release(value: string): void;
					public getLastMessage$library_release(): string;
					public create$library_release(tag: string): com.otaliastudios.zoom.ZoomLogger;
					public setLastTag$library_release(value: string): void;
					public setLogLevel(logLevel: number): void;
				}
				export class LogLevel {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomLogger.LogLevel>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomLogger$LogLevel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export class ZoomSurfaceView implements com.otaliastudios.zoom.ZoomApi {
				public static class: java.lang.Class<com.otaliastudios.zoom.ZoomSurfaceView>;
				public setTransformation(transformation: number): void;
				public zoomIn(): void;
				public onMeasure(width: number, height: number): void;
				public getPanX(): number;
				public setZoomEnabled(enabled: boolean): void;
				public setMaxZoom(param0: number, param1: number): void;
				public panBy(dx: number, dy: number, animate: boolean): void;
				public constructor(context: globalAndroid.content.Context);
				public setMinZoom(param0: number, param1: number): void;
				public realZoomTo(realZoom: number, animate: boolean): void;
				public setOverPanRange(provider: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public getMaxZoomType(): number;
				public moveTo(zoom: number, x: number, y: number, animate: boolean): void;
				public panBy(param0: number, param1: number, param2: boolean): void;
				public setTwoFingersScrollEnabled(enabled: boolean): void;
				public setTransformation(param0: number, param1: number): void;
				public setOneFingerScrollEnabled(param0: boolean): void;
				public setAlignment(alignment: number): void;
				public constructor(context: globalAndroid.content.Context, attrs: globalAndroid.util.AttributeSet);
				public getScaledPanY(): number;
				public onSurfaceChanged(gl: javax.microedition.khronos.opengles.GL10, width: number, height: number): void;
				public setAllowFlingInOverscroll(allow: boolean): void;
				public setThreeFingersScrollEnabled(param0: boolean): void;
				public zoomBy(param0: number, param1: boolean): void;
				public onDraw(modelMatrix: androidNative.Array<number>, textureTransformMatrix: androidNative.Array<number>): void;
				public zoomBy(zoomFactor: number, animate: boolean): void;
				public setTwoFingersScrollEnabled(param0: boolean): void;
				public zoomTo(zoom: number, animate: boolean): void;
				public setAlignment(param0: number): void;
				public getMinZoomType(): number;
				public setVerticalPanEnabled(param0: boolean): void;
				public setFlingEnabled(param0: boolean): void;
				public setScrollEnabled(param0: boolean): void;
				public setMaxZoom(maxZoom: number): void;
				public getSurfaceTexture(): globalAndroid.graphics.SurfaceTexture;
				public setOverPinchable(param0: boolean): void;
				public setZoomEnabled(param0: boolean): void;
				public setFlingEnabled(enabled: boolean): void;
				public setOverScrollVertical(overScroll: boolean): void;
				public setOverPanRange(param0: com.otaliastudios.zoom.OverPanRangeProvider): void;
				public getSurface(): globalAndroid.view.Surface;
				public panTo(param0: number, param1: number, param2: boolean): void;
				public onDetachedFromWindow(): void;
				public setVerticalPanEnabled(enabled: boolean): void;
				public getEngine(): com.otaliastudios.zoom.ZoomEngine;
				public setOneFingerScrollEnabled(enabled: boolean): void;
				public setOverScrollHorizontal(overScroll: boolean): void;
				public getRealZoom(): number;
				public setMinZoom(minZoom: number, type: number): void;
				public setOverPinchable(overPinchable: boolean): void;
				public zoomOut(): void;
				public setOverZoomRange(provider: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public getZoom(): number;
				public cancelAnimations(): boolean;
				public setTransformation(transformation: number, gravity: number): void;
				public onDrawFrame($this$onDrawFrame_u24lambda_u2d6: javax.microedition.khronos.opengles.GL10): void;
				public setHorizontalPanEnabled(param0: boolean): void;
				public setTransformation(param0: number): void;
				public setOverScrollHorizontal(param0: boolean): void;
				public setBackgroundColor(color: number): void;
				public moveTo(param0: number, param1: number, param2: number, param3: boolean): void;
				public setThreeFingersScrollEnabled(enabled: boolean): void;
				public moveToCenter(param0: java.lang.Float, param1: boolean): void;
				public realZoomTo(param0: number, param1: boolean): void;
				public moveToCenter(zoom: java.lang.Float, animate: boolean): void;
				public getPan(): com.otaliastudios.zoom.AbsolutePoint;
				public onSurfaceCreated(it: javax.microedition.khronos.opengles.GL10, this_: javax.microedition.khronos.egl.EGLConfig): void;
				public setContentSize(width: number, height: number): void;
				public zoomTo(param0: number, param1: boolean): void;
				public setMinZoom(param0: number): void;
				public setAllowFlingInOverscroll(param0: boolean): void;
				public getScaledPanX(): number;
				public setAnimationDuration(duration: number): void;
				public setOverScrollVertical(param0: boolean): void;
				public onTouchEvent(ev: globalAndroid.view.MotionEvent): boolean;
				public getMaxZoom(): number;
				public getScaledPan(): com.otaliastudios.zoom.ScaledPoint;
				public setMaxZoom(maxZoom: number, type: number): void;
				public addCallback(callback: com.otaliastudios.zoom.ZoomSurfaceView.Callback): void;
				public removeCallback(callback: com.otaliastudios.zoom.ZoomSurfaceView.Callback): void;
				public setOverZoomRange(param0: com.otaliastudios.zoom.OverZoomRangeProvider): void;
				public setMaxZoom(param0: number): void;
				public getPanY(): number;
				public setScrollEnabled(enabled: boolean): void;
				public setAnimationDuration(param0: number): void;
				public setHorizontalPanEnabled(enabled: boolean): void;
				public setMinZoom(minZoom: number): void;
				public panTo(x: number, y: number, animate: boolean): void;
				public getMinZoom(): number;
			}
			export module ZoomSurfaceView {
				export class Callback {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomSurfaceView.Callback>;
					/**
					 * Constructs a new instance of the com.otaliastudios.zoom.ZoomSurfaceView$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: { onZoomSurfaceCreated(param0: com.otaliastudios.zoom.ZoomSurfaceView): void; onZoomSurfaceDestroyed(param0: com.otaliastudios.zoom.ZoomSurfaceView): void });
					public constructor();
					public onZoomSurfaceCreated(param0: com.otaliastudios.zoom.ZoomSurfaceView): void;
					public onZoomSurfaceDestroyed(param0: com.otaliastudios.zoom.ZoomSurfaceView): void;
				}
				export class Companion {
					public static class: java.lang.Class<com.otaliastudios.zoom.ZoomSurfaceView.Companion>;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export class StateController {
					public static class: java.lang.Class<com.otaliastudios.zoom.internal.StateController>;
					public static IDLE: number = 0;
					public static SCROLLING: number = 1;
					public static PINCHING: number = 2;
					public static ANIMATING: number = 3;
					public static FLINGING: number = 4;
					public isPinching$library_release(): boolean;
					public onInterceptTouchEvent$library_release(ev: globalAndroid.view.MotionEvent): boolean;
					public setAnimating$library_release(): boolean;
					public isAnimating$library_release(): boolean;
					public getState$library_release(): number;
					public constructor(callback: com.otaliastudios.zoom.internal.StateController.Callback);
					public isScrolling$library_release(): boolean;
					public setPinching$library_release(): boolean;
					public isFlinging$library_release(): boolean;
					public isIdle$library_release(): boolean;
					public setScrolling$library_release(): boolean;
					public setFlinging$library_release(): boolean;
					public makeIdle$library_release(): boolean;
					public onTouchEvent$library_release(ev: globalAndroid.view.MotionEvent): boolean;
				}
				export module StateController {
					export class Callback {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.StateController.Callback>;
						/**
						 * Constructs a new instance of the com.otaliastudios.zoom.internal.StateController$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: { isStateAllowed(param0: number): boolean; onStateIdle(): void; cleanupState(param0: number): void; maybeStartPinchGesture(param0: globalAndroid.view.MotionEvent): boolean; maybeStartScrollFlingGesture(param0: globalAndroid.view.MotionEvent): boolean; endScrollGesture(): void });
						public constructor();
						public maybeStartScrollFlingGesture(param0: globalAndroid.view.MotionEvent): boolean;
						public endScrollGesture(): void;
						public maybeStartPinchGesture(param0: globalAndroid.view.MotionEvent): boolean;
						public onStateIdle(): void;
						public cleanupState(param0: number): void;
						public isStateAllowed(param0: number): boolean;
					}
					export class Companion {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.StateController.Companion>;
					}
					export class State {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.StateController.State>;
						/**
						 * Constructs a new instance of the com.otaliastudios.zoom.internal.StateController$State interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {});
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export class UpdatesDispatcher {
					public static class: java.lang.Class<com.otaliastudios.zoom.internal.UpdatesDispatcher>;
					public removeListener$library_release(listener: com.otaliastudios.zoom.ZoomEngine.Listener): void;
					public addListener$library_release(listener: com.otaliastudios.zoom.ZoomEngine.Listener): void;
					public dispatchOnIdle$library_release(): void;
					public constructor(engine: com.otaliastudios.zoom.ZoomEngine);
					public dispatchOnMatrix$library_release(): void;
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module gestures {
					export class PinchDetector {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.gestures.PinchDetector>;
						public onScale(newZoom: globalAndroid.view.ScaleGestureDetector): boolean;
						public onScaleBegin(detector: globalAndroid.view.ScaleGestureDetector): boolean;
						public constructor(context: globalAndroid.content.Context, zoomManager: com.otaliastudios.zoom.internal.movement.ZoomManager, panManager: com.otaliastudios.zoom.internal.movement.PanManager, stateController: com.otaliastudios.zoom.internal.StateController, matrixController: com.otaliastudios.zoom.internal.matrix.MatrixController);
						public onScaleEnd(detector: globalAndroid.view.ScaleGestureDetector): void;
						public maybeStart$library_release(event: globalAndroid.view.MotionEvent): boolean;
					}
					export module PinchDetector {
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.gestures.PinchDetector.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module gestures {
					export class ScrollFlingDetector {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.gestures.ScrollFlingDetector>;
						public getFlingInOverPanEnabled$library_release(): boolean;
						public constructor($this$detector_u24lambda_u2d0: globalAndroid.content.Context, this_: com.otaliastudios.zoom.internal.movement.PanManager, context: com.otaliastudios.zoom.internal.StateController, panManager: com.otaliastudios.zoom.internal.matrix.MatrixController);
						public setFlingInOverPanEnabled$library_release(value: boolean): void;
						public getScrollEnabled$library_release(): boolean;
						public getTwoFingersScrollEnabled$library_release(): boolean;
						public onSingleTapUp(e: globalAndroid.view.MotionEvent): boolean;
						public cancelFling$library_release(): void;
						public setTwoFingersScrollEnabled$library_release(value: boolean): void;
						public getThreeFingersScrollEnabled$library_release(): boolean;
						public setThreeFingersScrollEnabled$library_release(value: boolean): void;
						public getOneFingerScrollEnabled$library_release(): boolean;
						public maybeStart$library_release(event: globalAndroid.view.MotionEvent): boolean;
						public onLongPress(e: globalAndroid.view.MotionEvent): void;
						public getFlingEnabled$library_release(): boolean;
						public setOneFingerScrollEnabled$library_release(value: boolean): void;
						public onScroll(frictionX: globalAndroid.view.MotionEvent, overScrollY: globalAndroid.view.MotionEvent, frictionY: number, isOneFinger: number): boolean;
						public onFling(velY: globalAndroid.view.MotionEvent, minX: globalAndroid.view.MotionEvent, startX: number, maxX: number): boolean;
						public onDown(e: globalAndroid.view.MotionEvent): boolean;
						public setScrollEnabled$library_release(value: boolean): void;
						public cancelScroll$library_release(): void;
						public setFlingEnabled$library_release(value: boolean): void;
						public onShowPress(e: globalAndroid.view.MotionEvent): void;
					}
					export module ScrollFlingDetector {
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.gestures.ScrollFlingDetector.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module matrix {
					export class MatrixController {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixController>;
						public setContainerSize$library_release(width: number, height: number, forceReset: boolean): void;
						public getMatrix$library_release(): globalAndroid.graphics.Matrix;
						public clear$library_release(): void;
						public applyUpdate$library_release(update: any): void;
						public getContentScaledWidth$library_release(): number;
						public getPanX$library_release(): number;
						public getScaledPan$library_release(): com.otaliastudios.zoom.ScaledPoint;
						public getZoom$library_release(): number;
						public cancelAnimations$library_release(): void;
						public getContentScaledHeight$library_release(): number;
						public getAnimationDuration$library_release(): number;
						public getPanY$library_release(): number;
						public post$library_release(action: java.lang.Runnable): boolean;
						public isInitialized$library_release(): boolean;
						public getContentWidth$library_release(): number;
						public getScaledPanX$library_release(): number;
						public animateUpdate$library_release(target: com.otaliastudios.zoom.internal.matrix.MatrixUpdate): void;
						public getContainerHeight$library_release(): number;
						public getPan$library_release(): com.otaliastudios.zoom.AbsolutePoint;
						public setContentSize$library_release(this_: number, width: number, height: boolean): void;
						public applyUpdate$library_release(delta: com.otaliastudios.zoom.internal.matrix.MatrixUpdate): void;
						public getContainerWidth$library_release(): number;
						public postOnAnimation$library_release(action: java.lang.Runnable): void;
						public animateUpdate$library_release(update: any): void;
						public constructor(zoomManager: com.otaliastudios.zoom.internal.movement.ZoomManager, panManager: com.otaliastudios.zoom.internal.movement.PanManager, stateController: com.otaliastudios.zoom.internal.StateController, callback: com.otaliastudios.zoom.internal.matrix.MatrixController.Callback);
						public getContentHeight$library_release(): number;
						public setAnimationDuration$library_release(value: number): void;
						public getScaledPanY$library_release(): number;
					}
					export module MatrixController {
						export class Callback {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixController.Callback>;
							/**
							 * Constructs a new instance of the com.otaliastudios.zoom.internal.matrix.MatrixController$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
							 */
							public constructor(implementation: { onMatrixUpdate(): void; onMatrixSizeChanged(param0: number, param1: boolean): void; post(param0: java.lang.Runnable): boolean; postOnAnimation(param0: java.lang.Runnable): void });
							public constructor();
							public post(param0: java.lang.Runnable): boolean;
							public onMatrixUpdate(): void;
							public onMatrixSizeChanged(param0: number, param1: boolean): void;
							public postOnAnimation(param0: java.lang.Runnable): void;
						}
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixController.Companion>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module matrix {
					export class MatrixUpdate {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixUpdate>;
						public isZoomRelative$library_release(): boolean;
						public getHasPan$library_release(): boolean;
						public getCanOverZoom$library_release(): boolean;
						public getCanOverPan$library_release(): boolean;
						public getPivotX$library_release(): java.lang.Float;
						public getPan$library_release(): com.otaliastudios.zoom.AbsolutePoint;
						public isPanRelative$library_release(): boolean;
						public getHasZoom$library_release(): boolean;
						public getZoom$library_release(): number;
						public getScaledPan$library_release(): com.otaliastudios.zoom.ScaledPoint;
						public getPivotY$library_release(): java.lang.Float;
						public getNotify$library_release(): boolean;
					}
					export module MatrixUpdate {
						export class Builder {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixUpdate.Builder>;
							public constructor();
							public pivot$library_release(pivotX: java.lang.Float, pivotY: java.lang.Float): void;
							public getOverZoom$library_release(): boolean;
							public getNotify$library_release(): boolean;
							public panTo$library_release(pan: com.otaliastudios.zoom.AbsolutePoint, overPan: boolean): void;
							public zoomTo$library_release(zoom: number, overZoom: boolean): void;
							public setNotify$library_release(value: boolean): void;
							public panBy$library_release(delta: com.otaliastudios.zoom.AbsolutePoint, overPan: boolean): void;
							public build$library_release(): com.otaliastudios.zoom.internal.matrix.MatrixUpdate;
							public setOverZoom$library_release(value: boolean): void;
							public getOverPan$library_release(): boolean;
							public setOverPan$library_release(value: boolean): void;
							public zoomBy$library_release(zoom: number, overZoom: boolean): void;
							public panBy$library_release(delta: com.otaliastudios.zoom.ScaledPoint, overPan: boolean): void;
							public panTo$library_release(pan: com.otaliastudios.zoom.ScaledPoint, overPan: boolean): void;
						}
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.matrix.MatrixUpdate.Companion>;
							public obtain$library_release(builder: any): com.otaliastudios.zoom.internal.matrix.MatrixUpdate;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module movement {
					export abstract class MovementManager {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.MovementManager>;
						public clear(): void;
						public getController(): com.otaliastudios.zoom.internal.matrix.MatrixController;
						public isEnabled(): boolean;
						public constructor(controllerProvider: any);
						public isOverEnabled(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module movement {
					export class PanManager extends com.otaliastudios.zoom.internal.movement.MovementManager {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.PanManager>;
						public getVerticalOverPanEnabled$library_release(): boolean;
						public getOverPanRangeProvider$library_release(): com.otaliastudios.zoom.OverPanRangeProvider;
						public setHorizontalPanEnabled$library_release(value: boolean): void;
						public getVerticalPanEnabled$library_release(): boolean;
						public getMaxVerticalOverPan$library_release(): number;
						public setAlignment$library_release(value: number): void;
						public computeStatus$library_release(extraSpace: boolean, finalValue: com.otaliastudios.zoom.internal.movement.PanManager.Status): void;
						public getHorizontalOverPanEnabled$library_release(): boolean;
						public getCorrection$library_release(): com.otaliastudios.zoom.ScaledPoint;
						public isEnabled(): boolean;
						public setHorizontalOverPanEnabled$library_release(value: boolean): void;
						public getAlignment$library_release(): number;
						public getMaxHorizontalOverPan$library_release(): number;
						public setVerticalPanEnabled$library_release(value: boolean): void;
						public setVerticalOverPanEnabled$library_release(value: boolean): void;
						public constructor(engine: com.otaliastudios.zoom.ZoomEngine, provider: any);
						public applyGravity$library_release(this_: number, gravity: number, extraSpace: boolean): number;
						public clear(): void;
						public checkBounds$library_release(extraSpace: boolean, value: boolean): number;
						public getHorizontalPanEnabled$library_release(): boolean;
						public constructor(controllerProvider: any);
						public isOverEnabled(): boolean;
						public setOverPanRangeProvider$library_release(value: com.otaliastudios.zoom.OverPanRangeProvider): void;
					}
					export module PanManager {
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.PanManager.Companion>;
						}
						export class Status {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.PanManager.Status>;
							public constructor();
							public setMinValue$library_release(value: number): void;
							public getMaxValue$library_release(): number;
							public setCurrentValue$library_release(value: number): void;
							public getMinValue$library_release(): number;
							public isInOverPan$library_release(): boolean;
							public setMaxValue$library_release(value: number): void;
							public setInOverPan$library_release(value: boolean): void;
							public getCurrentValue$library_release(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module otaliastudios {
		export module zoom {
			export module internal {
				export module movement {
					export class ZoomManager extends com.otaliastudios.zoom.internal.movement.MovementManager {
						public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.ZoomManager>;
						public getMaxZoom$library_release(): number;
						public getMaxZoom(): number;
						public setMaxZoom$library_release(maxZoom: number, type: number): void;
						public setEnabled(value: boolean): void;
						public zoomToRealZoom$library_release(zoom: number): number;
						public setTransformationZoom$library_release(value: number): void;
						public getMinZoom(): number;
						public setMinZoomMode(value: number): void;
						public getMinZoomMode(): number;
						public realZoomToZoom$library_release(realZoom: number): number;
						public getMinZoom$library_release(): number;
						public setMinZoom$library_release(minZoom: number, type: number): void;
						public isOverEnabled(): boolean;
						public getMaxOverZoomIn$library_release(): number;
						public setMaxZoom(value: number): void;
						public getMaxZoomMode(): number;
						public setMinZoom(value: number): void;
						public setMaxZoomMode(value: number): void;
						public isEnabled(): boolean;
						public setOverEnabled(value: boolean): void;
						public checkBounds$library_release(maxZoom: number, this_: boolean): number;
						public getMaxOverZoomOut$library_release(): number;
						public getOverZoomRangeProvider$library_release(): com.otaliastudios.zoom.OverZoomRangeProvider;
						public constructor(engine: com.otaliastudios.zoom.ZoomEngine, provider: any);
						public getTransformationZoom$library_release(): number;
						public clear(): void;
						public constructor(controllerProvider: any);
						public setOverZoomRangeProvider$library_release(value: com.otaliastudios.zoom.OverZoomRangeProvider): void;
					}
					export module ZoomManager {
						export class Companion {
							public static class: java.lang.Class<com.otaliastudios.zoom.internal.movement.ZoomManager.Companion>;
						}
					}
				}
			}
		}
	}
}

//Generics information:
