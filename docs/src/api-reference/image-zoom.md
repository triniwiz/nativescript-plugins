# ImageZoom

[![npm](https://img.shields.io/npm/v/@triniwiz/nativescript-image-zoom.svg)](https://www.npmjs.com/package/@triniwiz/nativescript-image-zoom)
[![npm](https://img.shields.io/npm/dt/@triniwiz/nativescript-image-zoom.svg?label=npm%20downloads)](https://www.npmjs.com/package/@triniwiz/nativescript-image-zoom)

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-image-zoom
```

## Configuration

### Core

::: tip IMPORTANT
Ensure you've included `xmlns:ui="@triniwiz/nativescript-image-zoom"` on the
Page element
:::

```xml
<ui:ImageZoom src="~/images/148080.jpg" maxZoom="5" minZoom="2"/>
```

### Angular

```ts
import { registerElement } from '@nativescript/angular/element-registry';
registerElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
```

### Vue

```ts
import { registerElement } from "nativescript-vue'";
registerElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
```



### React

```ts
import { registerElement } from "react-nativescript";
registerElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
```



### Svelte

```ts
import { registerNativeViewElement } from 'svelte-native/dom';
registerNativeViewElement('ImageZoom', () => require('@triniwiz/nativescript-image-zoom').ImageZoom);
```

```html
<ImageZoom src="~/images/148080.jpg" maxZoom="5" minZoom="2"></ImageZoom>
```


## API

|   Property  |   Default    |   Type  |   iOS  | Android |
| :-------------:|:-------------: |:-------------:| :-----:| :-----:|
| maxZoom |5    | string | :white_check_mark: | :white_check_mark: |
| minZoom |1    | string | :white_check_mark: | :white_check_mark: |
| zoomScale |1    | string | :white_check_mark: | :x: |
| src |undefined    | string | :white_check_mark: | :white_check_mark: |