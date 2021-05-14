declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class BuildConfig {
					public static class: java.lang.Class<com.facebook.yoga.android.BuildConfig>;
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
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class VirtualYogaLayout {
					public static class: java.lang.Class<com.facebook.yoga.android.VirtualYogaLayout>;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public addView(param0: globalAndroid.view.View, param1: com.facebook.yoga.YogaNode): void;
					public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public getYogaNode(): com.facebook.yoga.YogaNode;
					public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
					public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
					public transferChildren(param0: globalAndroid.view.ViewGroup): void;
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class YogaLayout {
					public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout>;
					public invalidate(param0: globalAndroid.view.View): void;
					public onMeasure(param0: number, param1: number): void;
					public addView(param0: globalAndroid.view.View, param1: com.facebook.yoga.YogaNode): void;
					public removeViewsInLayout(param0: number, param1: number): void;
					public static applyLayoutParams(param0: com.facebook.yoga.android.YogaLayout.LayoutParams, param1: com.facebook.yoga.YogaNode, param2: globalAndroid.view.View): void;
					public removeAllViewsInLayout(): void;
					public generateLayoutParams(param0: globalAndroid.util.AttributeSet): globalAndroid.view.ViewGroup.LayoutParams;
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet, param2: number);
					public removeView(param0: globalAndroid.view.View): void;
					public generateLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): globalAndroid.view.ViewGroup.LayoutParams;
					public constructor(param0: globalAndroid.content.Context);
					public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
					public removeViewAt(param0: number): void;
					public removeViewInLayout(param0: globalAndroid.view.View): void;
					public removeAllViews(): void;
					public generateDefaultLayoutParams(): globalAndroid.view.ViewGroup.LayoutParams;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getYogaNodeForView(param0: globalAndroid.view.View): com.facebook.yoga.YogaNode;
					public addView(param0: globalAndroid.view.View, param1: number, param2: globalAndroid.view.ViewGroup.LayoutParams): void;
					public getYogaNode(): com.facebook.yoga.YogaNode;
					public checkLayoutParams(param0: globalAndroid.view.ViewGroup.LayoutParams): boolean;
					public removeViews(param0: number, param1: number): void;
				}
				export module YogaLayout {
					export class LayoutParams {
						public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout.LayoutParams>;
						public constructor(param0: globalAndroid.view.ViewGroup.LayoutParams);
						public constructor(param0: globalAndroid.content.Context, param1: globalAndroid.util.AttributeSet);
						public constructor(param0: number, param1: number);
					}
					export class ViewMeasureFunction {
						public static class: java.lang.Class<com.facebook.yoga.android.YogaLayout.ViewMeasureFunction>;
						public constructor();
						public measure(param0: com.facebook.yoga.YogaNode, param1: number, param2: com.facebook.yoga.YogaMeasureMode, param3: number, param4: com.facebook.yoga.YogaMeasureMode): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module facebook {
		export module yoga {
			export module android {
				export class YogaViewLayoutFactory {
					public static class: java.lang.Class<com.facebook.yoga.android.YogaViewLayoutFactory>;
					public onCreateView(param0: string, param1: globalAndroid.content.Context, param2: globalAndroid.util.AttributeSet): globalAndroid.view.View;
					public static getInstance(): com.facebook.yoga.android.YogaViewLayoutFactory;
				}
			}
		}
	}
}

//Generics information:

