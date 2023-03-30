# NativeScript-Toasty

## Install

### NativeScript 7.0+

`tnpm install @triniwiz/nativescript-toasty`

### NativeScript < 7.0

`tnpm install nativescript-toasty@3.0.0-alpha.2`

## Usage

TypeScript

```js
import { Toasty } from '@triniwiz/nativescript-toasty';
import { isIOS } from '@nativescript/core/platform';
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const toast = new Toasty({ text: 'Toast message' });
toast.show();

// you can also chain the methods together and there's no need to create a reference to the Toasty instance with this approach
new Toasty({ text: 'Some Message' })
  .setToastDuration(ToastDuration.LONG)
  .setToastPosition(ToastPosition.BOTTOM)
  .setTextColor(new Color('white'))
  .setBackgroundColor('#ff9999')
  .show();

// or you can set the properties of the Toasty instance
const toasty = new Toasty({
  text: 'Somethign something...',
  position: ToastPosition.TOP,
  yAxisOffset: 100,
  xAxisOffset: 10,
  ios: {
    displayShadow: true,
    shadowColor: '#fff000',
    cornerRadius: 24,
  },
  anchorView: someButton.nativeView, // must be the native iOS/Android view instance (button, page, action bar, tabbar, etc.)
});

toasty.duration = ToastDuration.SHORT;
toasty.textColor = '#fff';
toasty.backgroundColor = new Color('purple');
toasty.show();
```

JavaScript

```js
var toasty = require('@triniwiz/nativescript-toasty').Toasty;
var toast = new toasty({ text: 'Toast message' });
toast.show();
```

### API

```typescript
export interface Toasty {

  constructor(opts: ToastyOptions);

  position: ToastPosition;

  duration: ToastDuration;

  textColor: Color | string;

  backgroundColor: Color | string;

  yAxisOffset?: Length | number;

  xAxisOffset?: Length | number;

  readonly width: number;

  readonly height: number;


  /**
   * Show the Toasty
   */
  show();

  /**
   * Cancels the Toasty
   */
  cancel();

/**
 * Sets the Toast position.
 */
  setToastPosition(value: ToastPosition): Toasty;

/**
 * Sets the Toast duration.
 */
  setToastDuration(value: ToastDuration): Toasty;

/**
  * Set the text color of the toast.
  * @param value [Color | string] - Color of the string message.
  */
  setTextColor(value: Color | string): Toasty;

/**
  * Set the background color of the toast.
  * @param value [Color |  string] - Color of the background.
  * On Android this currently removes the default Toast rounded borders.
  */
  setBackgroundColor(value: Color | string): Toasty;

}
```

```typescript
export enum ToastDuration {
  'SHORT',
  'LONG',
}

export enum ToastPosition {
  'BOTTOM',
  'BOTTOM_LEFT',
  'BOTTOM_RIGHT',
  'CENTER',
  'CENTER_LEFT',
  'CENTER_RIGHT',
  'TOP',
  'TOP_LEFT',
  'TOP_RIGHT',
}

export interface ToastyOptions {
  /**
   * Message text of the Toast.
   */
  text: string;

  /**
   * Duration to show the Toast.
   */
  duration?: ToastDuration;

  /**
   * Position of the Toast.
   */
  position?: ToastPosition;

  /**
   * Text color of the Toast message.
   */
  textColor?: Color | string;

  /**
   * Background Color of the Toast.
   */
  backgroundColor?: Color | string;

  /**
   * Android specific configuration options.
   */
  android?: any;

  /**
   * iOS Specific configuration options.
   */
  ios?: {
    /**
     * The native iOS view to anchor the Toast to.
     */
    anchorView?: any;

    /**
     * The number of lines to allow for the toast message.
     */
    messageNumberOfLines?: number;

    /**
     * The corner radius of the Toast.
     */
    cornerRadius?: number;

    /**
     * True to display a shadow for the Toast.
     */
    displayShadow?: boolean;

    /**
     * The color of the shadow. Only visible if `displayShadow` is true.
     */
    shadowColor?: Color | string;
  };
}
```
