# ImageCacheIt

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-image-cache-it
```


## Usage

```ts
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
// add to the app.ts/ main.ts/ app.js to enable image-cache to hook into the device's lowmemory events
ImageCacheIt.enableAutoMM();
```

Set image url to load.

```js
load = image;
```

Set placeholder while images are downloading.

```js
placeHolder = '~/assets/images/ph.png';
```

Set placeholder for images are that failed to download.

```js
errorHolder = '~/assets/images/broken.png';
```

Set decoded image size.

```js
decodedWidth = '300';
decodedHeight = '300';
```

Stretch

```js
stretch = "aspectFit" // (optional) aspectFit || aspectFill || fill || none
```

Prefetch
```typescript
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
ImageCacheIt.fetchItem('https://source.unsplash.com/random').then(imageUrl =>{}).catch();
```

Delete item from cache

```typescript
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
ImageCacheIt.deleteItem('https://source.unsplash.com/random').then().catch();
```

Get item from cache
```typescript
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
ImageCacheIt.getItem('https://source.unsplash.com/random').then(imageUrl =>{}).catch();
```
e.g

```ts
import { ImageCacheIt } from '@triniwiz/nativescript-image-cache-it';
let cache = new ImageCacheIt();
cache.src = image;
cache.placeHolder = '~/assets/images/broken.png';
cache.errorHolder = '~/assets/images/ph.png';
cache.decodedWidth = '300';
cache.decodedHeight = '300';
cache.filter = 'blur(10px);';
cache.stretch = 'aspectFit';
return cache;
```

Xml markup settings

```xml
decodedWidth="300"; <!-- (optional) -->
decodedHeight="300"; <!-- (optional) -->
placeHolder="~/assets/images/ph.png" <!-- (optional) -->
errorHolder="~/assets/images/broken.png"  <!-- (optional) -->
stretch = "aspectFit" <!-- (optional) -->
src= "http://screenrant.com/wp-content/uploads/The-Flash-vs-the-Reverse-Flash.jpg" <!-- (required) -->

```

**IMPORTANT**: ensure you include `xmlns:i="@triniwiz/nativescript-image-cache-it"` on the Page element

e.g

```xml
<i:ImageCacheIt stretch="aspectFit"  resize="300,300" placeHolder="~/assets/images/ph.png" errorHolder="~/assets/images/broken.png" src="http://screenrant.com/wp-content/uploads/The-Flash-vs-the-Reverse-Flash.jpg"/>
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