# VideoRecorder

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-videorecorder">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-videorecorder.svg?style=for-the-badge"
            alt="NativeScript Video Recorder on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-videorecorder">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-videorecorder.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript Video Recorder on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>

|   Android Device   |  Android Emulator  |     iOS Device     | iOS Simulator |
| :----------------: | :----------------: | :----------------: | :-----------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: |      :x:      |

- [VideoRecorder(...)](video-recorder.md#videorecorder-2)
- [Properties](video-recorder.md#properties)
- [Intefaces](video-recorder.md#interfaces)
- [Types](video-recorder.md#types)

## Installing

```bash
    ns plugin add @triniwiz/nativescript-videorecorder
```

## QuickStart

#### JavaScript

```js
var vr = require('@triniwiz/nativescript-videorecorder');

var options = {
	saveToGallery: true,
	duration: 30,
	format: 'mp4',
	size: 10,
	hd: true,
	explanation: 'Why do i need this permission',
};

var videorecorder = new vr.VideoRecorder(options);

videorecorder
	.record()
	.then((data) => {
		console.log(data.file);
	})
	.catch((err) => {
		console.log(err);
	});
```

#### TypeScript

```ts
import { VideoRecorder, Options as VideoRecorderOptions } from '@triniwiz/nativescript-videorecorder';

const options: VideoRecorderOptions = {
    hd: true
    saveToGallery: true
}
const videorecorder = new VideoRecorder(options)

videorecorder.record().then((data) => {
    console.log(data.file)
}).catch((err) => {
    console.log(err)
})
```

## API

### VideoRecorder(...)

```ts
new VideoRecorder({...});
```

Creates new VideoRecorder

|  Param  |                 Type                 |
| :-----: | :----------------------------------: |
| options | [Options](video-recorder.md#options) |

**Returns**: [VideoRecorder](video-recorder.md#videorecorder-2)

---

### record()

```ts
 record(): void;
```

Opens the Video recorder

**Returns**: Promise<[RecordResult](video-recorder.md#recordresult)>

---

### isAvailable()

```ts
 isAvailable(): boolean;
```

Checks if the devices supports the Video recorder

**Returns**: boolean

---

### requestPermissions(...)

```ts
 requestPermissions(): Promise<void>;
```

Requests the camera permissions

**Returns**: `Promise<void>`

## Interfaces

### Options

|      Prop      |                            Type                            |                                                            Notes                                                            |
| :------------: | :--------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------: |
|     size?      |                           number                           |                                 Limit the size of the video, 0 for unlimited (default: `0`)                                 |
|      hd?       |                          boolean                           |                         If true, highest quality of device, if false MMS quality (default: `false`)                         |
| saveToGallery? |                          boolean                           | Enable to save the video in the device Gallery, otherwise it will be store within the sandbox of the app (default: `false`) |
|   duration?    |                           number                           |                               Limit the duration of the video, 0 for unlimited (default: `0`)                               |
|  explanation?  |                           string                           |                                  Why permissions should be accepted, optional on api > 23                                   |
|    format?     |    [VideoFormatType](video-recorder.md#videoformattype)    |          allows videos to be played on android devices (default: `'default'`) recommended for cross platform apps           |
|   position?    | [CameraPositionType](video-recorder.md#camerapositiontype) |                   Force which device camera should be used, `'none'` for no preferences (default: `none`)                   |

### RecordResult

| Prop |  Type  |
| :--: | :----: |
| file | string |

## Types

### VideoFormatType

`"default" | "mp4";`

### CameraPositionType

`"front" | back" | "none"`

## Properties

| Property |  Default  |  Type  |        iOS         |      Android       | Notes |
| :------: | :-------: | :----: | :----------------: | :----------------: | :---: |
| options  | undefined | string | :white_check_mark: | :white_check_mark: |       |
