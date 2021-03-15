# ToolTip

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-tooltip">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-tooltip.svg?style=for-the-badge"
            alt="NativeScript Video Recorder on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-tooltip">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-tooltip.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript Video Recorder on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>

|   Android Device   |  Android Emulator  |     iOS Device     | iOS Simulator |
| :----------------: | :----------------: | :----------------: | :-----------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |      :x:      |

- [ToolTip(...)](tooltip.md#tooltip-2)
- [Intefaces](tooltip.md#interfaces)
- [Types](tooltip.md#types)

## Installing

```bash
    ns plugin add @triniwiz/nativescript-tooltip
```

## QuickStart

#### JavaScript

```js
var tt = require('@triniwiz/nativescript-tooltip');

var options = {
	position: 'bottom',
	text: 'Hello 👋',
	backgroundColor: 'orange',
	textColor: 'blue',
};

var tooltip = new tt.ToolTip(viewToAnchor, options);

tooltip.show();
```

#### TypeScript

```ts
import { ToolTip, ToolTipConfig } from '@triniwiz/nativescript-tooltip';

const options: ToolTipConfig = {
	position: 'bottom',
	text: 'Hello 👋',
	backgroundColor: 'orange',
	textColor: 'blue',
};
const tooltip = new ToolTip(viewToAnchor, options);

tooltip.show();
```

## API

### ToolTip(...)

```ts
new ToolTip({...});
```

Creates new ToolTip

| Param  |                   Type                    |
| :----: | :---------------------------------------: |
|  view  |                   View                    | The view to anchor to |
| config | [ToolTipConfig](tooltip.md#tooltipconfig) |

**Returns**: [ToolTipConfig](tooltip.md#tooltip-2)

---

### show()

```ts
 show(): void;
```

Shows the ToolTip

---

### hide()

```ts
 shide(): void;
```

Hides the ToolTip

---

## Interfaces

### ToolTipConfig

|         Prop         |                     Type                      |               Notes                |
| :------------------: | :-------------------------------------------: | :--------------------------------: |
|      showArrow?      |                    boolean                    |         Show or Hide arrow         |
|      position?       | [ToolTipPosition](tooltip.md#tooltipposition) | Set position of the tooltip bubble |
|         text         |                    string                     |          Text to display           |
|      textSize?       |                    number                     |  Size of the text to be dislayed   |
|      duration?       |                    number                     |   Time to auto hide the tooltip    |
|        width?        |                Size of tooltip                |                                    |
|   backgroundColor?   |                    string                     |                                    |
|      textColor?      |                    string                     |                                    |
| dismissOnTapOutside? |                    boolean                    |                                    |
|    dismissOnTap?     |                    boolean                    |                                    |
|       padding?       |                    number                     |                                    |
|      arrowSize?      |                    number                     |                                    |
|       radius?        |                    number                     |                                    |
|       onShow?        |                   Function                    |  Called when the tooltip appears   |
|       onClick?       |                   Function                    | Called when the tooltip is tapped  |
|      onDimiss?       |                   Function                    | Called when the tooltip is hidden  |

## Types

### ToolTipPosition

`"left" | "up" | "right" | "down";`
