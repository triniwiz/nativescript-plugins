# ImageCacheIt

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-image-cache-it">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-image-cache-it.svg?style=for-the-badge"
            alt="NativeScript ImageCacheIt on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-image-cache-it">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-image-cache-it.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript ImageCacheIt on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>
 

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 

- [Properties()](image-cache-it.md#properties)
- [Static Properties()](image-cache-it.md#static-properties)
- [Methods()](image-cache-it.md#methods)
- [Static Methods()](image-cache-it.md#static-methods)
- [Enums()](image-cache-it.md#enums)


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-image-cache-it
```

## Configuration

### Core

::: tip IMPORTANT
Ensure you've included `xmlns:ui="@triniwiz/nativescript-image-cache-it"` on the
Page element
:::

```xml
<ui:ImageCacheIt src="https://source.unsplash.com/random" width="300" height="300"/>
```

### Angular

```ts
import { ImageCacheItModule } from '@triniwiz/nativescript-image-cache-it/angular';

@NgModule({
    imports: [
    ImageCacheItModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

### Vue

```ts
import { registerElement } from "nativescript-vue'";
registerElement('ImageCacheIt', () => require('@triniwiz/nativescript-image-cache-it').ImageCacheIt);
```


## Usage

```ts
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
// add to the app.ts/ main.ts/ app.js to enable image-cache to hook into the device's lowmemory events
ImageCacheIt.enableAutoMM();
```

## API

### Properties

|   Property  |   Default    |   Type  |   iOS  | Android | Notes |
| :-------------:|:-------------: |:-------------:| :-----:| :-----:| :-----:|
| src | undefined    | string | :white_check_mark: | :white_check_mark: | |
| imageSource | undefined    | ImageSource | :white_check_mark: | :white_check_mark: | |
| placeHolder | undefined    | any | :white_check_mark: | :white_check_mark: | `local url | platform asset` |
| errorHolder | undefined    | any | :white_check_mark: | :white_check_mark: | `local url | platform asset` |
| stretch | "aspectFit"    | Stretch | :white_check_mark: | :white_check_mark: |  |
| filter | undefined    | string | :white_check_mark: | :white_check_mark: | [Web Filters :tada:](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) |
| transition |  None  | [Transition](image-cache-it.md#transition) | :white_check_mark: | :white_check_mark: | |
| fallback | undefined    | any | :white_check_mark: | :white_check_mark: | `local url | platform asset` |
| priority | Normal    | [Priority](image-cache-it.md#priority) | :white_check_mark: | :white_check_mark: |  |
| tintColor | undefined   | `Color | string` | :white_check_mark: | :white_check_mark: |  |
| overLayColor | undefined   | `Color | string` | :white_check_mark: | :white_check_mark: |  |
| loadMode | async   | `sync | async` | :white_check_mark: | :white_check_mark: |  |
| isLoading | false   | boolean | :white_check_mark: | :white_check_mark: |  |
| progress | 0   | number | :white_check_mark: | :white_check_mark: |  |
| isLoading | false   | boolean | :white_check_mark: | :white_check_mark: |  |
| headers | undefined   | Map<string,string> | :white_check_mark: | :white_check_mark: |  |

### Static Properties

|   Property  |   Value    |   Type  |   iOS  | Android | Notes |
| :-------------:|:-------------: |:-------------:| :-----:| :-----:| :-----:|
| onLoadStartEvent | "loadStart"    | string | :white_check_mark: | :white_check_mark: | |
| onProgressEvent | "progress"    | string | :white_check_mark: | :white_check_mark: | |
| onErrorEvent | "error"    | string | :white_check_mark: | :white_check_mark: |  |
| onLoadEndEvent | "loadEnd"    | sting | :white_check_mark: | :white_check_mark: |  |


### Methods

| Method    | Type  |
| :---     |:---: |
| on(event: 'loadStart', callback: (args: any) => void, thisArg?: any);   | void|
| on(event: 'progress', callback: (args: any) => void, thisArg?: any);   |void  |
| on(event: 'error', callback: (args: any) => void, thisArg?: any);   | void|
| on(event: 'loadEnd', callback: (args: any) => void, thisArg?: any);  |void  |


### Static Methods

| Method    | Type  |    iOS  | Android |  Notes |
| :---      |:---:  | :---:  | :---:  | :---: |
| getItem(src: string, headers?: Map<string, string>)   | `Promise<string>` | :white_check_mark:  | :white_check_mark: | cache remote url then returns local path if url has not been cached before |
| deleteItem(src: string)   | `Promise<any>` | :white_check_mark:  | :x: | deletes local item cached for the url supplied |
| hasItem(src: string)   | `Promise<any>` | :white_check_mark:  | :white_check_mark: | resolves if an item is currently cached for remote url supplied. |
| clear()   | `Promise<any>` | :white_check_mark:  | :white_check_mark: |  |
| enableAutoMM   | void| :white_check_mark:  | :white_check_mark: |  |
| disableAutoMM   | void| :white_check_mark:  | :white_check_mark: |  |

## Enums

### Transition

| Members | Value           |
| :---:   | :---:           |
| Fade     | "fade" |
| None      | "none"  |

### Priority

| Members | Value           |
| :---:   | :---:           |
| Low     | 0 |
| Normal      | 1  |
| High      | 2  |
