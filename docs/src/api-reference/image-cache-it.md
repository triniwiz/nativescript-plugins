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

- [Performance](image-cache-it.md#performance)
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

## Performance

A remote image is decoded at its full size unless you say otherwise, so a
2000x2000 photo shown in a 200x200 cell holds a hundred times more memory than
it needs. `decodeWidth` and `decodeHeight` tell the decoder to downsample as it
reads:

```xml
<ui:ImageCacheIt src="{{ url }}" width="200" height="200" decodeWidth="200" decodeHeight="200"/>
```

Set them to the size the image is actually displayed at. They apply to the
initial load as well as to later `src` changes, and changing either re-requests
the image at the new size. Android only - the iOS backend decodes to the view's
size on its own.

In a list, also give `placeHolder` a small local image so scrolling has
something to show while a cell's image is still in flight, and leave `priority`
at `Normal` unless a particular image should jump the queue.

`ImageCacheIt.enableAutoMM()` hooks the cache into the device's low-memory
events, so add it to your app's entry point.

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
| headers | undefined   | Map<string,string> | :white_check_mark: | :white_check_mark: |  |
| decodeWidth | 0   | number | :x: | :white_check_mark: | Decode the image at this width. See [Performance](image-cache-it.md#performance) |
| decodeHeight | 0   | number | :x: | :white_check_mark: | Decode the image at this height. See [Performance](image-cache-it.md#performance) |

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
| deleteItem(src: string)   | `Promise<any>` | :white_check_mark:  | :x: | deletes local item cached for the url supplied. Rejects on Android, whose cache offers no per-item removal - use `clear()` |
| hasItem(src: string)   | `Promise<boolean>` | :white_check_mark:  | :white_check_mark: | resolves true when an item is cached for the url supplied. |
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
