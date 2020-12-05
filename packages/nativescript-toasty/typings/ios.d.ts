declare class ToastManager extends NSObject {
  static alloc(): ToastManager; // inherited from NSObject

  static new(): ToastManager; // inherited from NSObject

  duration: number;

  isQueueEnabled: boolean;

  isTapToDismissEnabled: boolean;

  position: ToastPosition;

  style: ToastStyle;

  static readonly shared: ToastManager;
}

declare const enum ToastPosition {
  Top = 0,

  Center = 1,

  Bottom = 2,

  TopLeft = 3,

  TopRight = 4,

  CenterLeft = 5,

  CenterRight = 6,

  BottomLeft = 7,

  BottomRight = 8
}

declare class ToastStyle extends NSObject {
  static alloc(): ToastStyle; // inherited from NSObject

  static new(): ToastStyle; // inherited from NSObject

  activityBackgroundColor: UIColor;

  activityIndicatorColor: UIColor;

  activitySize: CGSize;

  backgroundColor: UIColor;

  cornerRadius: number;

  displayShadow: boolean;

  fadeDuration: number;

  horizontalPadding: number;

  imageSize: CGSize;

  maxHeightPercentage: number;

  maxWidthPercentage: number;

  messageAlignment: NSTextAlignment;

  messageColor: UIColor;

  messageFont: UIFont;

  messageNumberOfLines: number;

  shadowColor: UIColor;

  shadowOffset: CGSize;

  shadowOpacity: number;

  shadowRadius: number;

  titleAlignment: NSTextAlignment;

  titleColor: UIColor;

  titleFont: UIFont;

  titleNumberOfLines: number;

  verticalPadding: number;
}

declare var Toast_SwiftVersionNumber: number;

declare var Toast_SwiftVersionString: interop.Reference<number>;
