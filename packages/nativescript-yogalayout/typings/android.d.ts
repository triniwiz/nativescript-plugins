declare module io {
  export module github {
    export module triniwiz {
      export module yogalayout {
        export class Utils {
          public static class: java.lang.Class<io.github.triniwiz.yogalayout.Utils>;

          public static createLayout(context: android.content.Context, init: boolean): com.facebook.yoga.android.YogaLayout;

          public static batch(data: string, layout: com.facebook.yoga.android.YogaLayout): void;

          public static batchChild(data: string, layout: com.facebook.yoga.android.YogaLayout, view: android.view.View): void;

          public static getLayoutDirection(layout: com.facebook.yoga.YogaNode): string;

          public static getStyleDirection(layout: com.facebook.yoga.YogaNode): string;

          public constructor();
        }
      }
    }
  }
}
