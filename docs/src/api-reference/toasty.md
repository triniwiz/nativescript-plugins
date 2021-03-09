# Toasty

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-toasty">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-toasty.svg?style=for-the-badge"
            alt="NativeScript Toasty on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-toasty">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-toasty.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript Toasty on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>

|   Android Device   |  Android Emulator  |     iOS Device     |   iOS Simulator    |
| :----------------: | :----------------: | :----------------: | :----------------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

A toast :bread: provides simple feedback about an operation in a small popup

:::warning Android Note
In Android 11 (API 30) toast behaviour was changed e.g `.getView()` returns so things like `tapToDismiss`, `width`, `height`, `setTextColor` & `setBackgroundColor` does not work for now, we will be adding something in the future to help with this. However we did add [two callbacks](toasty.md#toastyandroidoptions) `onHidden` & `onShown` hopefully that can be helpful
:::

## Installing

```bash
    ns plugin add @triniwiz/nativescript-toasty
```

- [Toasty(...)](toasty.md#toasty-2)
- [show()](toasty.md#show)
- [cancel()](toasty.md#cancel)
- [setToastPosition(...)](toasty.md#showtoastposition)
- [setToastDuration(...)](toasty.md#settoastduration)
- [setTextColor(...)](toasty.md#settextcolor)
- [setBackgroundColor(...)](toasty.md#setbackgroundcolor)
- [Props](toasty.md#props)
- [Interfaces](toasty.md#interfaces)

## Usage

### TypeScript

```js
import { Toasty } from '@triniwiz/nativescript-toasty';
import { isIOS } from '@nativescript/core';
// Toasty accepts an object for customizing its behavior/appearance. The only REQUIRED value is `text` which is the message for the toast.
const toast = new Toasty({ text: 'Toast message' });
toast.show();

// you can also chain the methods together and there's no need to create a reference to the Toasty instance with this approach
new Toasty({ text: 'Some Message' }).setToastDuration(ToastDuration.LONG).setToastPosition(ToastPosition.BOTTOM).setTextColor(new Color('white')).setBackgroundColor('#ff9999').show();

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

### JavaScript

```js
var toasty = require('@triniwiz/nativescript-toasty').Toasty;
var toast = new toasty({ text: 'Toast message' });
toast.show();
```

## API

### Methods

#### Toasty(...)

```ts
new Toasty({ text: 'Some Message' });
```

Creates a toast instance that you can show later on.

**Return**: [Toasty](toasty.md#toasty-2)

---

#### show()

```ts
show(): void;
```

Show the Toasty

---

#### cancel()

```ts
cancel(): void;
```

Cancels the Toasty

---

#### setToastPosition(...)

```ts
setToastPosition(value: ToastPosition): Toasty;
```

Sets the Toast position.

**Returns**: [Toasty](toasty.md#toasty-2)

---

#### setToastDuration(...)

```ts
setToastDuration(value: ToastDuration): Toasty;
```

Sets the Toast duration.

**Returns**: [Toasty](toasty.md#toasty-2)

---

#### setTextColor(...)

```ts
setTextColor(value: Color | string): Toasty;
```

Set the text color of the toast.

**Returns**: [Toasty](toasty.md#toasty-2)

---

#### setBackgroundColor(...)

```ts
setBackgroundColor(value: Color | string): Toasty;
```

:::tip
On Android this currently removes the default Toast rounded borders.
:::
Set the background color of the toast.

**Returns**: [Toasty](toasty.md#toasty-2)

## Props

| Prop | Type |
| position | [ToastPosition](toasty.md#toastposition) |
| duration | [ToastDuration](toasty.md#toastduration) |
| textColor | `Color | string` |
| backgroundColor | `Color | string` |
| xAxisOffset? | `Length | number` |
| yAxisOffset? | `Length | number` |
| width | number |
| width | number |

## Interfaces

### ToastDuration

| Prop  | Type  |
| :---: | :---: |
| SHORT | SHORT |
| LONG  | LONG  |

### ToastPosition

|     Prop     |     Type     |
| :----------: | :----------: |
|    BOTTOM    |    BOTTOM    |
| BOTTOM_LEFT  | BOTTOM_LEFT  |
| BOTTOM_RIGHT | BOTTOM_RIGHT |
|    CENTER    |    CENTER    |
| CENTER_LEFT  | CENTER_LEFT  |
| CENTER_RIGHT | CENTER_RIGHT |
|     TOP      |     TOP      |
|   TOP_LEFT   |   TOP_LEFT   |
|  TOP_RIGHT   |  TOP_RIGHT   |

### ToastyOptions

|      Prop       |                          Type                          |               Description               |
| :-------------: | :----------------------------------------------------: | :-------------------------------------: |
|      text       |                         string                         |       Message text of the Toast.        |
|    duration     |        [ToastDuration](toasty.md#toastduration)        |       Duration to show the Toast.       |
|    position     |        [ToastPosition](toasty.md#toastposition)        |         Position of the Toast.          |
|    textColor    |                         `Color                         |                 string`                 | Text color of the Toast message. |
| backgroundColor |                         `Color                         |                 string`                 | Background Color of the Toast. |
|     android     | [ToastyAndroidOptions](toasty.md#toastyandroidoptions) | Android specific configuration options. |
|       ios       |     [ToastyIOSOptions](toasty.md#toastyiosoptions)     |   iOS Specific configuration options.   |

### ToastyAndroidOptions

|   Prop   |   Type   |                     Description                     |
| :------: | :------: | :-------------------------------------------------: |
| onShown  | Function | Called when the toast is shown avaiable on API 30+  |
| onHidden | Function | Called when the toast is hidden avaiable on API 30+ |

### ToastyIOSOptions

|         Prop         |  Type   |                     Description                     |
| :------------------: | :-----: | :-------------------------------------------------: |
|      anchorView      |   any   |     The native iOS view to anchor the Toast to.     |
| messageNumberOfLines | number  | The number of lines to allow for the toast message. |
|     cornerRadius     | number  |          The corner radius of the Toast..           |
|    displayShadow     | boolean |      True to display a shadow for the Toast..       |
|     shadowColor      | `Color  |                       string`                       | The color of the shadow. Only visible if `displayShadow` is true.. |
