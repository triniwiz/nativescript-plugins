# FFMPEG

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


## Installing 

```bash
    ns plugin add @triniwiz/nativescript-ffmpeg
```

## Usage

1. Execute commands.

    - Use execute() method with a single command line and an argument delimiter

    ```
    import { LogLevel, FFmpeg } from '@triniwiz/nativescript-ffmpeg';

    FFmpeg.execute('-i file1.mp4 -c:v mpeg4 file2.mp4', ' ').then(result => console.log("FFmpeg process exited with result " + result));
    ```

    - Use executeWithArguments() method with an array of arguments

    ```
    import { LogLevel, FFmpeg } from '@triniwiz/nativescript-ffmpeg';

    FFmpeg.executeWithArguments(["-i", "file1.mp4", "-c:v", "mpeg4", "file2.mp4"]).then(result => console.log("FFmpeg process exited with result " + result));
    ```