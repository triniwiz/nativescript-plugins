# Nativescript Nativescript Imageoptimize

```javascript
ns plugin add @triniwiz/nativescript-imageoptimize
```

## Usage


## Usage 

### TypeScript
```ts
    import { ImageOptimize } from '@triniwiz/nativescript-imageoptimize';
    import {knownFolders} from '@nativescript/core';
    const imageoptimize = ImageOptimize.optimize({
      src: '~/destiny_2.jpg',
      height: 400, //optional
      width:400, //optional
      quality: 50, // optional 100 - 1
      format:'jpg', // jpeg || jpg || png || webp *android
      dest: knownFolders.documents().getFolder('images').path
    }).then(
    (res)=>{
    console.log(res.file)
    },(err)=>{
    console.log(err.message)
    }
    )
```

### JavaScript
```js
    const ImageOptimize = require('@triniwiz/nativescript-imageoptimize').ImageOptimize;
    const core = require('@nativescript/core');
    ImageOptimize.optimize({
      src: '~/destiny_2.jpg',
      height: 400, //optional
      width:400,
      quality: 50, // 100 - 1
      format:'jpg', // jpeg || jpg || png || webp *android
      dest: core.knownFolders.documents().getFolder('images').path,
    }).optimize().then(
    (res)=>{
    console.log(res.file)
    },(err)=>{
    console.log(err.message)
    }
    )
```

## API

    
| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| width | source width | number | <ul><li>- [ ] </li></ul> |
| height | source width | number  | <ul><li>- [ ] </li></ul> |
| quality | 92 | number | <ul><li>- [ ] </li></ul> | |
| format | jpg | string | <ul><li>- [ ] </li></ul> |
| dest | null | string | <ul><li>- [ ] </li></ul> |
| src | null | string | <ul><li>- [x] </li></ul> |

## License

Apache License Version 2.0
