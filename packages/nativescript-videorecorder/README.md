# Nativescript Nativescript VideoRecorder

```javascript
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
    explanation: 'Why do i need this permission'
}

var videorecorder = new vr.VideoRecorder(options);

videorecorder.record().then((data)=>{
  console.log(data.file)
}).catch((err)=>{
  console.log(err)
})
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

## VideoRecorder

### Options

Option object can be given to the constructor of `VideoRecorder` or as `VideoRecorder::record` parameter (as an override).

* **hd?: boolean** - If true, highest quality of device, if false MMS quality (default: `false`)
* **saveToGallery?: boolean** - Enable to save the video in the device Gallery, otherwise it will be store within the sandbox of the app (default: `false`)
* **duration?: number** - Limit the duration of the video, 0 for unlimited (default: `0`)
* **position?: 'front' | 'back' | 'none'** - Force which device camera should be used, `'none'` for no preferences (default: `none`)

Additional parameters for Android:

* **size?: number** - Limit the size of the video, 0 for unlimited (default: `0`)
* **explanation?: string** - Why permissions should be accepted, optional on api > 23

Additional parameters for iOS:

* **format?: 'default' | 'mp4'** - allows videos to be played on android devices (default: `'default'`) recommended for cross platform apps

### VideoRecorder attributes:

* **options: Options** Option object (see above section), can be set from the constructor

### VideoRecorder methods:

* **record(options?: Options): Promise<{ file?: string } >** Return a Promise with an object containing the filepath as `file` key. It may not be there if the video has been saved to the gallery. An optional `options` parameter can be given to override instance `options`, this is deprecated.
* **requestPermissions(): Promise<void>** Return a Promise, resolved if permissions are OK (ask for permissions if not), rejected if user didn't have accepted the permissions. This method is implicitely called by `record()`
* **isAvailable(): boolean** Check if device has a camera and is compatible with what has been set in options

Promises above can be rejected with:

* `{ event: 'denied'}` - Permissions have not been accepted
* `{ event: 'cancelled'}` - Video capture have been canceled
* `{ event: 'failed'}` - Generic error


## AdvancedVideoView

AdvancedVideoView does not open the device camera application, but rather allows you to embed the camera view in your app. You can then add buttons over it to start/stop recording. It allows for a deeper level of UI customization.

**Requires API 21+ on Android 🤖**

```html
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:recorder="@triniwiz/nativescript-videorecorder/advanced">
<recorder:AdvancedVideoView quality="highest" cameraPosition="front" id="camera"/>
```

```ts
const advancedView = page.getViewById("camera");
advancedView.startRecording();
```

### Api

| Method                  | Default  | Type    | Description                                           |
| ----------------------- | -------- | ------- | ----------------------------------------------------- |
| start()                 |          | void    | Starts the camera preview                             |
| stop()                  |          | void    | Stop the camera preview                               |
| startRecording()        |          | void    | Start recording camera preview.                       |
| stopRecording()         |          | void    | Stop recording camera preview.                        |
| toggleCamera()          |          | void    | Toggles between front or the back camera.             |
| toggleTorch()           |          | void    | Toggles the torch (iOS only for now)                  |
| duration                |          | int     | Get the current recording video duration.             |
| cameraPosition          | BACK     | void    | Gets or Sets camera position                          |
| outputOrientation       | PORTRAIT | void    | Gets or Sets output video orientation                 |
| isTorchAvailable        |          | boolean | ReadOnly: is the torch supported for this camera      |
| torch                   | false    | boolean | Enable/Disable torch (iOS only for now)               |
| quality                 | MAX_480P | void    | Gets or sets Video Quality                            |

#### outputOrientation

Be careful to not change orientation while recording, it's not supported.

Possible values : `portrait`, `portraitUpsideDown`, `landscapeLeft`, `landscapeRight`, you can also use the `Orientation` enum.

This property let you manage the orientation of the output file correctly, it means you can trust your gravity sensors to detect orientation and set it on the camera.
With this, you can properly change orientation even when device orientation is locked.


## License

Apache License Version 2.0
