# Toasty

[![npm](https://img.shields.io/npm/v/@triniwiz/nativescript-toasty.svg)](https://www.npmjs.com/package/@triniwiz/nativescript-toasty)
[![npm](https://img.shields.io/npm/dt/@triniwiz/nativescript-toasty.svg?label=npm%20downloads)](https://www.npmjs.com/package/@triniwiz/nativescript-toasty)

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


A toast :bread: provides simple feedback about an operation in a small popup

## Installing 

```base
    ns plugin add @triniwiz/nativescript-toasty
```

- [Toasty(...)](toasty.md#toasty-2)


## Usage

### TypeScript

```js
import { Toasty } from '@triniwiz/nativescript-toasty';
import { isIOS } from '@nativescript/core';
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



## Interfaces

### ToastDuration

| Prop      | Type  |
| :---:     | :---: |
| SHORT    |   SHORT  |
| LONG    |   LONG  |


### ToastPosition

| Prop      | Type  |
| :---:     | :---: |
| BOTTOM    |   BOTTOM  |
| BOTTOM_LEFT    |   BOTTOM_LEFT  |
| BOTTOM_RIGHT    |   BOTTOM_RIGHT  |
| CENTER    |   CENTER  |
| CENTER_LEFT    |   CENTER_LEFT  |
| CENTER_RIGHT    |   CENTER_RIGHT  |
| TOP    |   TOP  |
| TOP_LEFT    |   TOP_LEFT  |
| TOP_RIGHT    |   TOP_RIGHT  |

### ToastyOptions

| Prop      | Type  | Description |
| :---:     | :---: | :---: |
| text    |   string  | Message text of the Toast. |
| duration    |   [ToastDuration](toasty.md#toastduration)  | Duration to show the Toast. |
| position    |   [ToastPosition](toasty.md#toastposition)  | Position of the Toast. |
| textColor    |   `Color | string`  | Text color of the Toast message. |
| backgroundColor    |   `Color | string`  | Background Color of the Toast. |
| android    |   any  | Android specific configuration options. |
| ios    |  [ToastyIOSOptions](toasty.md#toastyiosoptions)   |

### ToastyIOSOptions

| Prop      | Type  | Description |
| :---:     | :---: | :---: |
| anchorView    |   any  | The native iOS view to anchor the Toast to. |
| messageNumberOfLines    |   number |The number of lines to allow for the toast message. |
| cornerRadius    |   number  | The corner radius of the Toast.. |
| displayShadow    |   boolean  | True to display a shadow for the Toast.. |
| shadowColor    |   `Color | string`  | The color of the shadow. Only visible if `displayShadow` is true.. |

