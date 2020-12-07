# Star-Ratings

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-star-ratings">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-star-ratings.svg?style=for-the-badge"
            alt="NativeScript StarRatings on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-star-ratings">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-star-ratings.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript StarRatings on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>
 

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-star-ratings
```

## Configuration

### Core

::: tip IMPORTANT
Ensure you've included `xmlns:ui="@triniwiz/nativescript-star-ratings"` on the
Page element
:::

```xml
<ui:StarRating emptyBorderColor="white" emptyColor="white" filledBorderColor="black" filledColor="red" value="2" max="5"/>
```

### Angular

```ts
import { registerElement } from '@nativescript/angular/element-registry';
registerElement('StarRating', () => require('@triniwiz/nativescript-star-ratings').StarRating);
```

### Vue

```ts
import { registerElement } from "nativescript-vue'";
registerElement('StarRating', () => require('@triniwiz/nativescript-star-ratings').StarRating);
```



### React

```ts
import { registerElement } from "react-nativescript";
registerElement('StarRating', () => require('@triniwiz/nativescript-star-ratings').StarRating);
```



### Svelte

```ts
import { registerNativeViewElement } from 'svelte-native/dom';
registerNativeViewElement('StarRating', () => require('@triniwiz/nativescript-star-ratings').StarRating);
```

```html
<StarRating emptyBorderColor="white" emptyColor="white" filledBorderColor="black" filledColor="red" value="{{value}}" max="{{max}}" isindicator="false"></StarRating>
```


## API

|   Property  |   Default    |   Type  |   iOS  | Android |
| :-------------:|:-------------: |:-------------:| :-----:| :-----:|
| emptyBorderColor |blue    | string | :white_check_mark: | :x: |
| emptyColor |white    | string | :white_check_mark: | :white_check_mark: |
| filledBorderColor |blue    | string | :white_check_mark: | :x: |
| filledColor |white    | string | :white_check_mark: | :white_check_mark: |
| value |0    | number | :white_check_mark: | :white_check_mark: |
| max |5    | number | :white_check_mark: | :white_check_mark: |
| isindicator |false    | false | :x: | :white_check_mark: |