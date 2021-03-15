declare module com {
	export module skydoves {
		export module balloon {
			export class ActivityBalloonLazy<T> extends java.lang.Object {
				public static class: java.lang.Class<com.skydoves.balloon.ActivityBalloonLazy<any>>;
				public isInitialized(): boolean;
				public toString(): string;
				public constructor(param0: globalAndroid.content.Context, param1: androidx.lifecycle.LifecycleOwner, param2: kotlin.reflect.KClass<T>);
				public getValue(): com.skydoves.balloon.Balloon;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class ArrowOrientation {
				public static class: java.lang.Class<com.skydoves.balloon.ArrowOrientation>;
				public static BOTTOM: com.skydoves.balloon.ArrowOrientation;
				public static TOP: com.skydoves.balloon.ArrowOrientation;
				public static LEFT: com.skydoves.balloon.ArrowOrientation;
				public static RIGHT: com.skydoves.balloon.ArrowOrientation;
				public static values(): native.Array<com.skydoves.balloon.ArrowOrientation>;
				public static valueOf(param0: string): com.skydoves.balloon.ArrowOrientation;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class ArrowOrientationRules {
				public static class: java.lang.Class<com.skydoves.balloon.ArrowOrientationRules>;
				public static ALIGN_ANCHOR: com.skydoves.balloon.ArrowOrientationRules;
				public static ALIGN_FIXED: com.skydoves.balloon.ArrowOrientationRules;
				public static values(): native.Array<com.skydoves.balloon.ArrowOrientationRules>;
				public static valueOf(param0: string): com.skydoves.balloon.ArrowOrientationRules;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class ArrowPositionRules {
				public static class: java.lang.Class<com.skydoves.balloon.ArrowPositionRules>;
				public static ALIGN_BALLOON: com.skydoves.balloon.ArrowPositionRules;
				public static ALIGN_ANCHOR: com.skydoves.balloon.ArrowPositionRules;
				public static values(): native.Array<com.skydoves.balloon.ArrowPositionRules>;
				public static valueOf(param0: string): com.skydoves.balloon.ArrowPositionRules;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class Balloon {
				public static class: java.lang.Class<com.skydoves.balloon.Balloon>;
				public relayShow(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public relayShowAlignLeft(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public setOnBalloonClickListener(param0: com.skydoves.balloon.OnBalloonClickListener): void;
				public showAsDropDown(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public isShowing(): boolean;
				public relayShowAlignTop(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number): com.skydoves.balloon.Balloon;
				public getMeasuredWidth(): number;
				public showAlignBottom(param0: globalAndroid.view.View, param1: number): void;
				public showAlignRight(param0: globalAndroid.view.View, param1: number): void;
				public setOnBalloonOutsideTouchListener(param0: com.skydoves.balloon.OnBalloonOutsideTouchListener): void;
				public relayShowAlignBottom(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public show(param0: globalAndroid.view.View): void;
				public relayShow(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number): com.skydoves.balloon.Balloon;
				public showAlignRight(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public relayShowAlignBottom(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number): com.skydoves.balloon.Balloon;
				public showAlignRight(param0: globalAndroid.view.View): void;
				public showAlignBottom(param0: globalAndroid.view.View): void;
				public update(param0: globalAndroid.view.View, param1: number): void;
				public relayShowAlignRight(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number): com.skydoves.balloon.Balloon;
				public setOnBalloonInitializedListener(param0: com.skydoves.balloon.OnBalloonInitializedListener): void;
				public relayShowAlignLeft(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public showAlignLeft(param0: globalAndroid.view.View): void;
				public relayShowAlignRight(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public onPause(): void;
				public showAlignTop(param0: globalAndroid.view.View): void;
				public setOnBalloonOverlayClickListener(param0: com.skydoves.balloon.OnBalloonOverlayClickListener): void;
				public dismiss(): void;
				public relayShowAlignTop(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public setOnBalloonDismissListener(param0: com.skydoves.balloon.OnBalloonDismissListener): void;
				public showAlignTop(param0: globalAndroid.view.View, param1: number): void;
				public showAlignLeft(param0: globalAndroid.view.View, param1: number): void;
				public update(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public constructor(param0: globalAndroid.content.Context, param1: com.skydoves.balloon.Balloon.Builder);
				public showAsDropDown(param0: globalAndroid.view.View): void;
				public setOnBalloonTouchListener(param0: globalAndroid.view.View.OnTouchListener): void;
				public showAlignTop(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public showAlignBottom(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public relayShowAlignLeft(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number): com.skydoves.balloon.Balloon;
				public relayShowAsDropDown(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public dismissWithDelay(param0: number): void;
				public relayShowAlignTop(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public relayShow(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public getOnBalloonInitializedListener(): com.skydoves.balloon.OnBalloonInitializedListener;
				public relayShowAsDropDown(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public showAsDropDown(param0: globalAndroid.view.View, param1: number): void;
				public update(param0: globalAndroid.view.View): void;
				public relayShowAlignRight(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View, param2: number, param3: number): com.skydoves.balloon.Balloon;
				public getMeasuredHeight(): number;
				public onDestroy(): void;
				public relayShowAlignBottom(param0: com.skydoves.balloon.Balloon, param1: globalAndroid.view.View): com.skydoves.balloon.Balloon;
				public showAlignLeft(param0: globalAndroid.view.View, param1: number, param2: number): void;
				public getContentView(): globalAndroid.view.View;
				public show(param0: globalAndroid.view.View, param1: number, param2: number): void;
			}
			export module Balloon {
				export class Builder {
					public static class: java.lang.Class<com.skydoves.balloon.Balloon.Builder>;
					public width: number;
					public widthRatio: number;
					public height: number;
					public paddingLeft: number;
					public paddingTop: number;
					public paddingRight: number;
					public paddingBottom: number;
					public marginRight: number;
					public marginLeft: number;
					public marginTop: number;
					public marginBottom: number;
					public isVisibleArrow: boolean;
					public arrowColor: number;
					public arrowSize: number;
					public arrowPosition: number;
					public arrowPositionRules: com.skydoves.balloon.ArrowPositionRules;
					public arrowOrientationRules: com.skydoves.balloon.ArrowOrientationRules;
					public arrowOrientation: com.skydoves.balloon.ArrowOrientation;
					public arrowDrawable: globalAndroid.graphics.drawable.Drawable;
					public arrowLeftPadding: number;
					public arrowRightPadding: number;
					public arrowTopPadding: number;
					public arrowBottomPadding: number;
					public arrowAlignAnchorPadding: number;
					public arrowAlignAnchorPaddingRatio: number;
					public arrowElevation: number;
					public backgroundColor: number;
					public backgroundDrawable: globalAndroid.graphics.drawable.Drawable;
					public cornerRadius: number;
					public text: string;
					public textColor: number;
					public textIsHtml: boolean;
					public movementMethod: globalAndroid.text.method.MovementMethod;
					public textSize: number;
					public textTypeface: number;
					public textTypefaceObject: globalAndroid.graphics.Typeface;
					public textGravity: number;
					public textForm: com.skydoves.balloon.TextForm;
					public iconDrawable: globalAndroid.graphics.drawable.Drawable;
					public iconGravity: com.skydoves.balloon.IconGravity;
					public iconWidth: number;
					public iconHeight: number;
					public iconSpace: number;
					public iconColor: number;
					public iconForm: com.skydoves.balloon.IconForm;
					public alpha: number;
					public elevation: number;
					public layout: globalAndroid.view.View;
					public layoutRes: java.lang.Integer;
					public isVisibleOverlay: boolean;
					public overlayColor: number;
					public overlayPadding: number;
					public overlayPosition: globalAndroid.graphics.Point;
					public overlayShape: com.skydoves.balloon.overlay.BalloonOverlayShape;
					public onBalloonClickListener: com.skydoves.balloon.OnBalloonClickListener;
					public onBalloonDismissListener: com.skydoves.balloon.OnBalloonDismissListener;
					public onBalloonInitializedListener: com.skydoves.balloon.OnBalloonInitializedListener;
					public onBalloonOutsideTouchListener: com.skydoves.balloon.OnBalloonOutsideTouchListener;
					public onBalloonTouchListener: globalAndroid.view.View.OnTouchListener;
					public onBalloonOverlayClickListener: com.skydoves.balloon.OnBalloonOverlayClickListener;
					public dismissWhenTouchOutside: boolean;
					public dismissWhenShowAgain: boolean;
					public dismissWhenClicked: boolean;
					public dismissWhenOverlayClicked: boolean;
					public dismissWhenLifecycleOnPause: boolean;
					public autoDismissDuration: number;
					public lifecycleOwner: androidx.lifecycle.LifecycleOwner;
					public balloonAnimationStyle: number;
					public balloonOverlayAnimationStyle: number;
					public balloonAnimation: com.skydoves.balloon.BalloonAnimation;
					public balloonOverlayAnimation: com.skydoves.balloon.overlay.BalloonOverlayAnimation;
					public circularDuration: number;
					public balloonHighlightAnimation: com.skydoves.balloon.BalloonHighlightAnimation;
					public balloonHighlightAnimationStyle: number;
					public balloonHighlightAnimationStartDelay: number;
					public preferenceName: string;
					public showTimes: number;
					public supportRtlLayoutFactor: number;
					public isFocusable: boolean;
					public isStatusBarVisible: boolean;
					public setTextTypeface(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconWidthResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowTopPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowRightPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setHeight(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginBottom(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setText(param0: string): com.skydoves.balloon.Balloon.Builder;
					public setIsVisibleArrow(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setCircularDuration(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconHeight(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setWidthResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonOutsideTouchListener(param0: com.skydoves.balloon.OnBalloonOutsideTouchListener): com.skydoves.balloon.Balloon.Builder;
					public setPaddingBottomResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowSizeResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setHeightResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonClickListener(param0: com.skydoves.balloon.OnBalloonClickListener): com.skydoves.balloon.Balloon.Builder;
					public setTextGravity(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconColor(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowAlignAnchorPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setTextTypeface(param0: globalAndroid.graphics.Typeface): com.skydoves.balloon.Balloon.Builder;
					public setArrowLeftPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setWidth(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOverlayColorResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setLifecycleOwner(param0: androidx.lifecycle.LifecycleOwner): com.skydoves.balloon.Balloon.Builder;
					public setOverlayPosition(param0: globalAndroid.graphics.Point): com.skydoves.balloon.Balloon.Builder;
					public setArrowElevationResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setDismissWhenOverlayClicked(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setDismissWhenShowAgain(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setIsStatusBarVisible(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setBalloonOverlayAnimation(param0: com.skydoves.balloon.overlay.BalloonOverlayAnimation): com.skydoves.balloon.Balloon.Builder;
					public setDismissWhenTouchOutside(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setMovementMethod(param0: globalAndroid.text.method.MovementMethod): com.skydoves.balloon.Balloon.Builder;
					public setBalloonHighlightAnimationResource(param0: number, param1: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginTop(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonOverlayClickListener(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): com.skydoves.balloon.Balloon.Builder;
					public setMarginTopResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowColor(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowDrawableResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setCornerRadiusResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBalloonOverlayAnimationStyle(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingLeftResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingRight(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconSpace(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBalloonAnimation(param0: com.skydoves.balloon.BalloonAnimation): com.skydoves.balloon.Balloon.Builder;
					public setAlpha(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowSize(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginRight(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginLeft(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBalloonAnimationStyle(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setFocusable(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOverlayPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBackgroundDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.skydoves.balloon.Balloon.Builder;
					public setShowCounts(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowAlignAnchorPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOverlayColor(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowColorResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingTop(param0: number): com.skydoves.balloon.Balloon.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public setArrowLeftPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginRightResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOverlayPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowBottomPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowPosition(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setElevationResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingBottom(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowElevation(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconSize(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconSizeResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setLayout(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.skydoves.balloon.Balloon.Builder;
					public setPaddingRightResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBalloonHighlightAnimation(param0: com.skydoves.balloon.BalloonHighlightAnimation, param1: number): com.skydoves.balloon.Balloon.Builder;
					public setCornerRadius(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOverlayShape(param0: com.skydoves.balloon.overlay.BalloonOverlayShape): com.skydoves.balloon.Balloon.Builder;
					public setElevation(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setTextColor(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonOverlayClickListener(param0: com.skydoves.balloon.OnBalloonOverlayClickListener): com.skydoves.balloon.Balloon.Builder;
					public setDismissWhenLifecycleOnPause(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setArrowRightPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public runIfReachedShowCounts(param0: java.lang.Runnable): com.skydoves.balloon.Balloon.Builder;
					public setTextSize(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowBottomPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIsVisibleOverlay(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setPreferenceName(param0: string): com.skydoves.balloon.Balloon.Builder;
					public setMargin(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonTouchListener(param0: globalAndroid.view.View.OnTouchListener): com.skydoves.balloon.Balloon.Builder;
					public setIconSpaceResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingTopResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setDismissWhenClicked(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setTextResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setSizeResource(param0: number, param1: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginBottomResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowOrientation(param0: com.skydoves.balloon.ArrowOrientation): com.skydoves.balloon.Balloon.Builder;
					public setIconForm(param0: com.skydoves.balloon.IconForm): com.skydoves.balloon.Balloon.Builder;
					public setIconColorResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowAlignAnchorPaddingRatio(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonInitializedListener(param0: com.skydoves.balloon.OnBalloonInitializedListener): com.skydoves.balloon.Balloon.Builder;
					public setSize(param0: number, param1: number): com.skydoves.balloon.Balloon.Builder;
					public setArrowOrientationRules(param0: com.skydoves.balloon.ArrowOrientationRules): com.skydoves.balloon.Balloon.Builder;
					public build(): com.skydoves.balloon.Balloon;
					public setArrowPositionRules(param0: com.skydoves.balloon.ArrowPositionRules): com.skydoves.balloon.Balloon.Builder;
					public setTextColorResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setTextForm(param0: com.skydoves.balloon.TextForm): com.skydoves.balloon.Balloon.Builder;
					public setLayout(param0: globalAndroid.view.View): com.skydoves.balloon.Balloon.Builder;
					public setOnBalloonDismissListener(param0: com.skydoves.balloon.OnBalloonDismissListener): com.skydoves.balloon.Balloon.Builder;
					public setPaddingLeft(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setMarginLeftResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setPaddingResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconGravity(param0: com.skydoves.balloon.IconGravity): com.skydoves.balloon.Balloon.Builder;
					public setArrowTopPadding(param0: number): com.skydoves.balloon.Balloon.Builder;
					public isRtlSupport(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setIconDrawableResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public runIfReachedShowCounts(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): com.skydoves.balloon.Balloon.Builder;
					public setTextSizeResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setIconHeightResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBackgroundColor(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBackgroundColorResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setTextIsHtml(param0: boolean): com.skydoves.balloon.Balloon.Builder;
					public setIconWidth(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setBackgroundDrawableResource(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setWidthRatio(param0: number): com.skydoves.balloon.Balloon.Builder;
					public setAutoDismissDuration(param0: number): com.skydoves.balloon.Balloon.Builder;
				}
				export abstract class Factory {
					public static class: java.lang.Class<com.skydoves.balloon.Balloon.Factory>;
					public constructor();
					public create(param0: globalAndroid.content.Context, param1: androidx.lifecycle.LifecycleOwner): com.skydoves.balloon.Balloon;
				}
				export class WhenMappings {
					public static class: java.lang.Class<com.skydoves.balloon.Balloon.WhenMappings>;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonAnimation {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonAnimation>;
				public static NONE: com.skydoves.balloon.BalloonAnimation;
				public static ELASTIC: com.skydoves.balloon.BalloonAnimation;
				public static FADE: com.skydoves.balloon.BalloonAnimation;
				public static CIRCULAR: com.skydoves.balloon.BalloonAnimation;
				public static OVERSHOOT: com.skydoves.balloon.BalloonAnimation;
				public static values(): native.Array<com.skydoves.balloon.BalloonAnimation>;
				public static valueOf(param0: string): com.skydoves.balloon.BalloonAnimation;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonExtensionKt {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonExtensionKt>;
				public static showBalloon(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showAlignRight(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showAsDropDown(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showAlignLeft(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
				public static showAlignTop(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showAlignBottom(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
				public static showAlignRight(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
				public static showAlignLeft(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showBalloon(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
				public static showAlignTop(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
				public static showAlignBottom(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon): void;
				public static showAsDropDown(param0: globalAndroid.view.View, param1: com.skydoves.balloon.Balloon, param2: number, param3: number): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonHighlightAnimation {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonHighlightAnimation>;
				public static NONE: com.skydoves.balloon.BalloonHighlightAnimation;
				public static HEARTBEAT: com.skydoves.balloon.BalloonHighlightAnimation;
				public static values(): native.Array<com.skydoves.balloon.BalloonHighlightAnimation>;
				public static valueOf(param0: string): com.skydoves.balloon.BalloonHighlightAnimation;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonInlineDsl {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonInlineDsl>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.BalloonInlineDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonKt {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonKt>;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonLazyExtensionKt {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonLazyExtensionKt>;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonPersistence {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonPersistence>;
				public static Companion: com.skydoves.balloon.BalloonPersistence.Companion;
				public shouldShowUp(param0: string, param1: number): boolean;
				public putIncrementedCounts(param0: string): void;
				public static getPersistName(param0: string): string;
				public static getInstance(param0: globalAndroid.content.Context): com.skydoves.balloon.BalloonPersistence;
				public constructor();
			}
			export module BalloonPersistence {
				export class Companion {
					public static class: java.lang.Class<com.skydoves.balloon.BalloonPersistence.Companion>;
					public getInstance(param0: globalAndroid.content.Context): com.skydoves.balloon.BalloonPersistence;
					public getPersistName(param0: string): string;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class BalloonSizeSpec {
				public static class: java.lang.Class<com.skydoves.balloon.BalloonSizeSpec>;
				public static WRAP: number;
				public static INSTANCE: com.skydoves.balloon.BalloonSizeSpec;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class DefinitionKt {
				public static class: java.lang.Class<com.skydoves.balloon.DefinitionKt>;
				public static NO_INT_VALUE: number;
				public static NO_Float_VALUE: number;
				public static NO_LONG_VALUE: number;
				public static LTR: number;
				public static SIZE_ARROW_BOUNDARY: number;
				public static unaryMinus(param0: number, param1: boolean): number;
				public static takeIfNotNoIntValue(param0: number): java.lang.Integer;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class FragmentBalloonLazy<T> extends java.lang.Object {
				public static class: java.lang.Class<com.skydoves.balloon.FragmentBalloonLazy<any>>;
				public constructor(param0: androidx.fragment.app.Fragment, param1: kotlin.reflect.KClass<T>);
				public isInitialized(): boolean;
				public toString(): string;
				public getValue(): com.skydoves.balloon.Balloon;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class IconForm {
				public static class: java.lang.Class<com.skydoves.balloon.IconForm>;
				public getIconHeight(): number;
				public getIconColor(): number;
				public constructor(param0: com.skydoves.balloon.IconForm.Builder);
				public getIconSpace(): number;
				public getIconGravity(): com.skydoves.balloon.IconGravity;
				public getDrawable(): globalAndroid.graphics.drawable.Drawable;
				public getDrawableRes(): java.lang.Integer;
				public setDrawableRes(param0: java.lang.Integer): void;
				public getIconWidth(): number;
			}
			export module IconForm {
				export class Builder {
					public static class: java.lang.Class<com.skydoves.balloon.IconForm.Builder>;
					public drawable: globalAndroid.graphics.drawable.Drawable;
					public drawableRes: java.lang.Integer;
					public iconGravity: com.skydoves.balloon.IconGravity;
					public iconWidth: number;
					public iconHeight: number;
					public iconSpace: number;
					public iconColor: number;
					public setIconWidth(param0: number): com.skydoves.balloon.IconForm.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public setIconHeight(param0: number): com.skydoves.balloon.IconForm.Builder;
					public setDrawable(param0: globalAndroid.graphics.drawable.Drawable): com.skydoves.balloon.IconForm.Builder;
					public setIconSize(param0: number): com.skydoves.balloon.IconForm.Builder;
					public setDrawableGravity(param0: com.skydoves.balloon.IconGravity): com.skydoves.balloon.IconForm.Builder;
					public setIconColor(param0: number): com.skydoves.balloon.IconForm.Builder;
					public setIconSpace(param0: number): com.skydoves.balloon.IconForm.Builder;
					public setIconColorResource(param0: number): com.skydoves.balloon.IconForm.Builder;
					public getContext(): globalAndroid.content.Context;
					public setDrawableResource(param0: number): com.skydoves.balloon.IconForm.Builder;
					public build(): com.skydoves.balloon.IconForm;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class IconFormDsl {
				public static class: java.lang.Class<com.skydoves.balloon.IconFormDsl>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.IconFormDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class IconFormKt {
				public static class: java.lang.Class<com.skydoves.balloon.IconFormKt>;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class IconGravity {
				public static class: java.lang.Class<com.skydoves.balloon.IconGravity>;
				public static LEFT: com.skydoves.balloon.IconGravity;
				public static RIGHT: com.skydoves.balloon.IconGravity;
				public static TOP: com.skydoves.balloon.IconGravity;
				public static BOTTOM: com.skydoves.balloon.IconGravity;
				public static valueOf(param0: string): com.skydoves.balloon.IconGravity;
				public static values(): native.Array<com.skydoves.balloon.IconGravity>;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class OnBalloonClickListener {
				public static class: java.lang.Class<com.skydoves.balloon.OnBalloonClickListener>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.OnBalloonClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBalloonClick(param0: globalAndroid.view.View): void });
				public constructor();
				public onBalloonClick(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class OnBalloonDismissListener {
				public static class: java.lang.Class<com.skydoves.balloon.OnBalloonDismissListener>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.OnBalloonDismissListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBalloonDismiss(): void });
				public constructor();
				public onBalloonDismiss(): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class OnBalloonInitializedListener {
				public static class: java.lang.Class<com.skydoves.balloon.OnBalloonInitializedListener>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.OnBalloonInitializedListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBalloonInitialized(param0: globalAndroid.view.View): void });
				public constructor();
				public onBalloonInitialized(param0: globalAndroid.view.View): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class OnBalloonOutsideTouchListener {
				public static class: java.lang.Class<com.skydoves.balloon.OnBalloonOutsideTouchListener>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.OnBalloonOutsideTouchListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBalloonOutsideTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): void });
				public constructor();
				public onBalloonOutsideTouch(param0: globalAndroid.view.View, param1: globalAndroid.view.MotionEvent): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class OnBalloonOverlayClickListener {
				public static class: java.lang.Class<com.skydoves.balloon.OnBalloonOverlayClickListener>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.OnBalloonOverlayClickListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: { onBalloonOverlayClick(): void });
				public constructor();
				public onBalloonOverlayClick(): void;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class TextForm {
				public static class: java.lang.Class<com.skydoves.balloon.TextForm>;
				public getTextSize(): number;
				public getTextColor(): number;
				public getMovementMethod(): globalAndroid.text.method.MovementMethod;
				public getTextIsHtml(): boolean;
				public getTextStyle(): number;
				public constructor(param0: com.skydoves.balloon.TextForm.Builder);
				public getTextTypeface(): globalAndroid.graphics.Typeface;
				public getTextGravity(): number;
				public getText(): string;
			}
			export module TextForm {
				export class Builder {
					public static class: java.lang.Class<com.skydoves.balloon.TextForm.Builder>;
					public text: string;
					public textSize: number;
					public textColor: number;
					public textIsHtml: boolean;
					public movementMethod: globalAndroid.text.method.MovementMethod;
					public textTypeface: number;
					public textTypefaceObject: globalAndroid.graphics.Typeface;
					public textGravity: number;
					public setTextColorResource(param0: number): com.skydoves.balloon.TextForm.Builder;
					public setTextTypeface(param0: globalAndroid.graphics.Typeface): com.skydoves.balloon.TextForm.Builder;
					public setTextResource(param0: number): com.skydoves.balloon.TextForm.Builder;
					public setTextTypeface(param0: number): com.skydoves.balloon.TextForm.Builder;
					public setTextGravity(param0: number): com.skydoves.balloon.TextForm.Builder;
					public constructor(param0: globalAndroid.content.Context);
					public build(): com.skydoves.balloon.TextForm;
					public setTextColor(param0: number): com.skydoves.balloon.TextForm.Builder;
					public setText(param0: string): com.skydoves.balloon.TextForm.Builder;
					public getContext(): globalAndroid.content.Context;
					public setTextSize(param0: number): com.skydoves.balloon.TextForm.Builder;
					public setTextIsHtml(param0: boolean): com.skydoves.balloon.TextForm.Builder;
					public setMovementMethod(param0: globalAndroid.text.method.MovementMethod): com.skydoves.balloon.TextForm.Builder;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class TextFormDsl {
				public static class: java.lang.Class<com.skydoves.balloon.TextFormDsl>;
				/**
				 * Constructs a new instance of the com.skydoves.balloon.TextFormDsl interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {});
				public constructor();
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class TextFormKt {
				public static class: java.lang.Class<com.skydoves.balloon.TextFormKt>;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export class ViewBalloonLazy<T> extends java.lang.Object {
				public static class: java.lang.Class<com.skydoves.balloon.ViewBalloonLazy<any>>;
				public constructor(param0: globalAndroid.content.Context, param1: kotlin.reflect.KClass<T>);
				public isInitialized(): boolean;
				public toString(): string;
				public getValue(): com.skydoves.balloon.Balloon;
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module annotations {
				export class Dp {
					public static class: java.lang.Class<com.skydoves.balloon.annotations.Dp>;
					/**
					 * Constructs a new instance of the com.skydoves.balloon.annotations.Dp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module annotations {
				export class Sp {
					public static class: java.lang.Class<com.skydoves.balloon.annotations.Sp>;
					/**
					 * Constructs a new instance of the com.skydoves.balloon.annotations.Sp interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {});
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module databinding {
				export class LayoutBalloonLibrarySkydovesBinding {
					public static class: java.lang.Class<com.skydoves.balloon.databinding.LayoutBalloonLibrarySkydovesBinding>;
					public balloon: globalAndroid.widget.FrameLayout;
					public balloonArrow: androidx.appcompat.widget.AppCompatImageView;
					public balloonCard: com.skydoves.balloon.radius.RadiusLayout;
					public balloonContent: globalAndroid.widget.FrameLayout;
					public balloonText: com.skydoves.balloon.vectortext.VectorTextView;
					public balloonWrapper: globalAndroid.widget.FrameLayout;
					public static bind(param0: globalAndroid.view.View): com.skydoves.balloon.databinding.LayoutBalloonLibrarySkydovesBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.skydoves.balloon.databinding.LayoutBalloonLibrarySkydovesBinding;
					public getRoot(): globalAndroid.widget.FrameLayout;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.skydoves.balloon.databinding.LayoutBalloonLibrarySkydovesBinding;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module databinding {
				export class LayoutBalloonOverlayLibrarySkydovesBinding {
					public static class: java.lang.Class<com.skydoves.balloon.databinding.LayoutBalloonOverlayLibrarySkydovesBinding>;
					public balloonOverlayView: com.skydoves.balloon.overlay.BalloonAnchorOverlayView;
					public static inflate(param0: globalAndroid.view.LayoutInflater): com.skydoves.balloon.databinding.LayoutBalloonOverlayLibrarySkydovesBinding;
					public static inflate(param0: globalAndroid.view.LayoutInflater, param1: globalAndroid.view.ViewGroup, param2: boolean): com.skydoves.balloon.databinding.LayoutBalloonOverlayLibrarySkydovesBinding;
					public getRoot(): com.skydoves.balloon.overlay.BalloonAnchorOverlayView;
					public static bind(param0: globalAndroid.view.View): com.skydoves.balloon.databinding.LayoutBalloonOverlayLibrarySkydovesBinding;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module extensions {
				export class ContextExtensionKt {
					public static class: java.lang.Class<com.skydoves.balloon.extensions.ContextExtensionKt>;
					public static contextColor(param0: globalAndroid.content.Context, param1: number): number;
					public static dp2Px(param0: globalAndroid.content.Context, param1: number): number;
					public static isFinishing(param0: globalAndroid.content.Context): boolean;
					public static dimenPixel(param0: globalAndroid.content.Context, param1: number): number;
					public static dimen(param0: globalAndroid.content.Context, param1: number): number;
					public static px2Sp(param0: globalAndroid.content.Context, param1: number): number;
					public static contextDrawable(param0: globalAndroid.content.Context, param1: number): globalAndroid.graphics.drawable.Drawable;
					public static displaySize(param0: globalAndroid.content.Context): globalAndroid.graphics.Point;
					public static getActivity(param0: globalAndroid.content.Context): androidx.activity.ComponentActivity;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module extensions {
				export class DrawableExtensionKt {
					public static class: java.lang.Class<com.skydoves.balloon.extensions.DrawableExtensionKt>;
					public static tint(param0: globalAndroid.graphics.drawable.Drawable, param1: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
					public static resize(param0: globalAndroid.graphics.drawable.Drawable, param1: globalAndroid.content.Context, param2: java.lang.Integer, param3: java.lang.Integer): globalAndroid.graphics.drawable.Drawable;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module extensions {
				export class GlobalExtensionKt {
					public static class: java.lang.Class<com.skydoves.balloon.extensions.GlobalExtensionKt>;
					public static runOnAfterSDK21(param0: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module extensions {
				export class TextViewExtensionKt {
					public static class: java.lang.Class<com.skydoves.balloon.extensions.TextViewExtensionKt>;
					public static applyDrawable(param0: globalAndroid.widget.TextView, param1: com.skydoves.balloon.vectortext.VectorTextViewParams): void;
					public static applyTextForm(param0: globalAndroid.widget.TextView, param1: com.skydoves.balloon.TextForm): void;
					public static applyIconForm(param0: com.skydoves.balloon.vectortext.VectorTextView, param1: com.skydoves.balloon.IconForm): void;
				}
				export module TextViewExtensionKt {
					export class WhenMappings {
						public static class: java.lang.Class<com.skydoves.balloon.extensions.TextViewExtensionKt.WhenMappings>;
					}
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module extensions {
				export class ViewExtensionKt {
					public static class: java.lang.Class<com.skydoves.balloon.extensions.ViewExtensionKt>;
					public static getViewPointOnScreen(param0: globalAndroid.view.View): globalAndroid.graphics.Point;
					public static visible(param0: globalAndroid.view.View, param1: boolean): void;
					public static getStatusBarHeight(param0: globalAndroid.view.View, param1: boolean): number;
					public static circularUnRevealed(param0: globalAndroid.view.View, param1: number, param2: kotlin.jvm.functions.Function0<kotlin.Unit>): void;
					public static circularRevealed(param0: globalAndroid.view.View, param1: number): void;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonAnchorOverlayView {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonAnchorOverlayView>;
					public getBalloonOverlayShape(): com.skydoves.balloon.overlay.BalloonOverlayShape;
					public setOverlayPosition(param0: globalAndroid.graphics.Point): void;
					public getOverlayColor(): number;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getAnchorView(): globalAndroid.view.View;
					public setAnchorView(param0: globalAndroid.view.View): void;
					public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setOverlayPadding(param0: number): void;
					public setOverlayColor(param0: number): void;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public setBalloonOverlayShape(param0: com.skydoves.balloon.overlay.BalloonOverlayShape): void;
					public getOverlayPosition(): globalAndroid.graphics.Point;
					public getOverlayPadding(): number;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonOverlayAnimation {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayAnimation>;
					public static NONE: com.skydoves.balloon.overlay.BalloonOverlayAnimation;
					public static FADE: com.skydoves.balloon.overlay.BalloonOverlayAnimation;
					public static valueOf(param0: string): com.skydoves.balloon.overlay.BalloonOverlayAnimation;
					public static values(): native.Array<com.skydoves.balloon.overlay.BalloonOverlayAnimation>;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonOverlayCircle extends com.skydoves.balloon.overlay.BalloonOverlayShape {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayCircle>;
					public getRadiusRes(): java.lang.Integer;
					public getRadius(): java.lang.Float;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonOverlayOval extends com.skydoves.balloon.overlay.BalloonOverlayShape {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayOval>;
					public static INSTANCE: com.skydoves.balloon.overlay.BalloonOverlayOval;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonOverlayRect extends com.skydoves.balloon.overlay.BalloonOverlayShape {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayRect>;
					public static INSTANCE: com.skydoves.balloon.overlay.BalloonOverlayRect;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export class BalloonOverlayRoundRect extends com.skydoves.balloon.overlay.BalloonOverlayShape {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayRoundRect>;
					public getRadiusPair(): kotlin.Pair<java.lang.Float, java.lang.Float>;
					public getRadiusResPair(): kotlin.Pair<java.lang.Integer, java.lang.Integer>;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module overlay {
				export abstract class BalloonOverlayShape {
					public static class: java.lang.Class<com.skydoves.balloon.overlay.BalloonOverlayShape>;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module radius {
				export class RadiusLayout {
					public static class: java.lang.Class<com.skydoves.balloon.radius.RadiusLayout>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setRadius(param0: number): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getRadius(): number;
					public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
					public dispatchDraw(param0: globalAndroid.graphics.Canvas): void;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module vectortext {
				export class VectorTextView {
					public static class: java.lang.Class<com.skydoves.balloon.vectortext.VectorTextView>;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public constructor(param0: globalAndroid.content.Context);
					public setDrawableTextViewParams(param0: com.skydoves.balloon.vectortext.VectorTextViewParams): void;
					public getDrawableTextViewParams(): com.skydoves.balloon.vectortext.VectorTextViewParams;
				}
			}
		}
	}
}

declare module com {
	export module skydoves {
		export module balloon {
			export module vectortext {
				export class VectorTextViewParams {
					public static class: java.lang.Class<com.skydoves.balloon.vectortext.VectorTextViewParams>;
					public component5(): globalAndroid.graphics.drawable.Drawable;
					public setDrawableBottom(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getDrawableRight(): globalAndroid.graphics.drawable.Drawable;
					public getDrawableBottom(): globalAndroid.graphics.drawable.Drawable;
					public getDrawableTop(): globalAndroid.graphics.drawable.Drawable;
					public getCompoundDrawablePadding(): java.lang.Integer;
					public constructor();
					public getIconHeight(): java.lang.Integer;
					public setDrawableRight(param0: globalAndroid.graphics.drawable.Drawable): void;
					public setSquareSizeRes(param0: java.lang.Integer): void;
					public constructor(param0: java.lang.Integer, param1: java.lang.Integer, param2: java.lang.Integer, param3: java.lang.Integer, param4: globalAndroid.graphics.drawable.Drawable, param5: globalAndroid.graphics.drawable.Drawable, param6: globalAndroid.graphics.drawable.Drawable, param7: globalAndroid.graphics.drawable.Drawable, param8: java.lang.Integer, param9: java.lang.Integer, param10: java.lang.Integer, param11: java.lang.Integer, param12: java.lang.Integer, param13: java.lang.Integer, param14: java.lang.Integer, param15: java.lang.Integer);
					public getDrawableTopRes(): java.lang.Integer;
					public setDrawableTopRes(param0: java.lang.Integer): void;
					public setDrawableTop(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getWidthRes(): java.lang.Integer;
					public component11(): java.lang.Integer;
					public component10(): java.lang.Integer;
					public getSquareSizeRes(): java.lang.Integer;
					public setDrawableLeft(param0: globalAndroid.graphics.drawable.Drawable): void;
					public getDrawableRightRes(): java.lang.Integer;
					public setHeightRes(param0: java.lang.Integer): void;
					public getDrawableBottomRes(): java.lang.Integer;
					public component8(): globalAndroid.graphics.drawable.Drawable;
					public setCompoundDrawablePaddingRes(param0: java.lang.Integer): void;
					public component9(): java.lang.Integer;
					public component13(): java.lang.Integer;
					public getTintColor(): java.lang.Integer;
					public getDrawableLeft(): globalAndroid.graphics.drawable.Drawable;
					public component1(): java.lang.Integer;
					public getDrawableLeftRes(): java.lang.Integer;
					public setWidthRes(param0: java.lang.Integer): void;
					public component7(): globalAndroid.graphics.drawable.Drawable;
					public setDrawableBottomRes(param0: java.lang.Integer): void;
					public component12(): java.lang.Integer;
					public toString(): string;
					public setTintColor(param0: java.lang.Integer): void;
					public component6(): globalAndroid.graphics.drawable.Drawable;
					public component2(): java.lang.Integer;
					public hashCode(): number;
					public setDrawableRightRes(param0: java.lang.Integer): void;
					public copy(
						param0: java.lang.Integer,
						param1: java.lang.Integer,
						param2: java.lang.Integer,
						param3: java.lang.Integer,
						param4: globalAndroid.graphics.drawable.Drawable,
						param5: globalAndroid.graphics.drawable.Drawable,
						param6: globalAndroid.graphics.drawable.Drawable,
						param7: globalAndroid.graphics.drawable.Drawable,
						param8: java.lang.Integer,
						param9: java.lang.Integer,
						param10: java.lang.Integer,
						param11: java.lang.Integer,
						param12: java.lang.Integer,
						param13: java.lang.Integer,
						param14: java.lang.Integer,
						param15: java.lang.Integer
					): com.skydoves.balloon.vectortext.VectorTextViewParams;
					public component3(): java.lang.Integer;
					public component15(): java.lang.Integer;
					public getCompoundDrawablePaddingRes(): java.lang.Integer;
					public setDrawableLeftRes(param0: java.lang.Integer): void;
					public getHeightRes(): java.lang.Integer;
					public component16(): java.lang.Integer;
					public equals(param0: any): boolean;
					public getIconWidth(): java.lang.Integer;
					public component4(): java.lang.Integer;
					public component14(): java.lang.Integer;
				}
			}
		}
	}
}

//Generics information:
//com.skydoves.balloon.ActivityBalloonLazy:1
//com.skydoves.balloon.FragmentBalloonLazy:1
//com.skydoves.balloon.ViewBalloonLazy:1
