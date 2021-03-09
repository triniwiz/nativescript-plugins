# Youtube-Player

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-youtubeplayer">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-youtubeplayer.svg?style=for-the-badge"
            alt="NativeScript YoutubePlayer on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-youtubeplayer">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-youtubeplayer.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript ImageCacheIt on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>

|   Android Device   |  Android Emulator  |     iOS Device     |   iOS Simulator    |
| :----------------: | :----------------: | :----------------: | :----------------: |
| :white_check_mark: | :white_check_mark: | :white_check_mark: | :white_check_mark: |

- [Properties()](youtube-player.md#properties)
- [Static Properties()](youtube-player.md#static-properties)
- [Methods()](youtube-player.md#methods)
- [Enums()](youtube-player.md#enums)

## Installing

```bash
    ns plugin add @triniwiz/nativescript-youtubeplayer
```

## Configuration

### Core

::: tip IMPORTANT Ensure you've included `xmlns:ui="@triniwiz/nativescript-youtubeplayer"` on the Page element
:::

```xml

<ui:YoutubePlayer videoId="vEG4qNW33mA"/>
```

### Angular

```ts
import { YoutubePlayerModule } from "@triniwiz/youtubeplayer/angular";

@NgModule({
    imports: [
    YoutubePlayerModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
```

```html
<YoutubePlayer videoId="vEG4qNW33mA"><YoutubePlayer /></YoutubePlayer>
```

### Vue

```ts
import Vue from 'nativescript-vue';
import YoutubePlayer from '@triniwiz/youtubeplayer/vue';
Vue.use(YoutubePlayer);
```

```html
<YoutubePlayer videoId="vEG4qNW33mA" />
```

### React

```jsx
import '@triniwiz/youtubeplayer/react';
<youtubePlayer videoId="vEG4qNW33mA" />;
```

### Svelte

```jsx
import '@triniwiz/youtubeplayer/svelte';
<youtubePlayer videoId="vEG4qNW33mA" />;
```

## API

### Properties

|       Property       |  Default  |  Type   |        iOS         |      Android       |                                   Notes                                   |
| :------------------: | :-------: | :-----: | :----------------: | :----------------: | :-----------------------------------------------------------------------: |
|       videoId        | undefined | string  | :white_check_mark: | :white_check_mark: | The YouTube video ID that identifies the video that the player will load. |
|  showRelatedVideos   |   true    | boolean | :white_check_mark: | :white_check_mark: |        https://developers.google.com/youtube/player_parameters#rel        |
|   showYoutubeLogo    |   true    | boolean | :white_check_mark: | :white_check_mark: |  https://developers.google.com/youtube/player_parameters#modestbranding   |
|         loop         |   false   | boolean | :white_check_mark: | :white_check_mark: |       https://developers.google.com/youtube/player_parameters#loop        |
|       autoPlay       |   false   | boolean | :white_check_mark: | :white_check_mark: |                     Auto play video once it's ready.                      |
| showFullScreenToggle |   true    | boolean | :white_check_mark: | :white_check_mark: |        https://developers.google.com/youtube/player_parameters#fs         |
|       controls       |   true    | boolean | :white_check_mark: | :white_check_mark: |     https://developers.google.com/youtube/player_parameters#controls      |
|     playsInLine      |   true    | boolean | :white_check_mark: | :white_check_mark: |    https://developers.google.com/youtube/player_parameters#playsinline    |
|       duration       |     0     | number  | :white_check_mark: | :white_check_mark: |                          Current video duration.                          |

### Static Properties

|         Property          |       Value       |  Type  |        iOS         |      Android       | Notes |
| :-----------------------: | :---------------: | :----: | :----------------: | :----------------: | :---: |
|       onReadyEvent        |      "ready"      | string | :white_check_mark: | :white_check_mark: |       |
|       onErrorEvent        |      "error"      | string | :white_check_mark: | :white_check_mark: |       |
|    onCurrentTimeEvent     |   "currentTime"   | string | :white_check_mark: | :white_check_mark: |       |
|      onApiReadyEvent      |    "apiReady"     | sting  | :white_check_mark: | :white_check_mark: |       |
|    onStateChangeEvent     |   "stateChange"   | string | :white_check_mark: | :white_check_mark: |       |
|     onFullScreenEvent     |   "fullScreen"    | string | :white_check_mark: | :white_check_mark: |       |
|  onPlayBackQualityEvent   | "playBackQuality" | string | :white_check_mark: | :white_check_mark: |       |
| onPlaybackRateChangeEvent |  "playbackRate"   | sting  | :white_check_mark: | :white_check_mark: |       |

### Methods

| Method                                                                      | Type |
| :-------------------------------------------------------------------------- | :--: |
| on(event: 'ready', callback: (args: any) => void, thisArg?: any);           | void |
| on(event: 'error', callback: (args: any) => void, thisArg?: any);           | void |
| on(event: 'currentTime', callback: (args: any) => void, thisArg?: any);     | void |
| on(event: 'apiReady', callback: (args: any) => void, thisArg?: any);        | void |
| on(event: 'stateChange', callback: (args: any) => void, thisArg?: any);     | void |
| on(event: 'fullScreen', callback: (args: any) => void, thisArg?: any);      | void |
| on(event: 'playBackQuality', callback: (args: any) => void, thisArg?: any); | void |
| on(event: 'playbackRate', callback: (args: any) => void, thisArg?: any);    | void |
| play();                                                                     | void |
| playById(id: string);                                                       | void |
| playByUrl(url: string);                                                     | void |
| cueVideoById(id: string);                                                   | void |
| cueVideoByUrl(url: string);                                                 | void |
| pause();                                                                    | void |
| next();                                                                     | void |
| previous();                                                                 | void |
| mute();                                                                     | void |
| unmute();                                                                   | void |
| seekTo(value: number);                                                      | void |
| setVolume(value: number);                                                   | void |
| stop();                                                                     | void |

## Enums

### YoutubePlayerState

|  Members  | Value |
| :-------: | :---: |
| Unstarted |  -1   |
|   Ended   |   0   |
|  Playing  |   1   |
|  Paused   |   2   |
| Buffering |   3   |
|   Cued    |   5   |

### YoutubePlayerQuality

| Members |   Value   |
| :-----: | :-------: |
|  Small  |  "small"  |
| Medium  | "medium"  |
|  Large  |  "large"  |
|  HD720  |  "hd720"  |
| HD1080  | "hd1080"  |
| HighRes | "highres" |

### YoutubePlayerErrors

|    Members    |                                         Value                                          |
| :-----------: | :------------------------------------------------------------------------------------: |
| InvalidParam  |                   "The request contains an invalid parameter value"                    |
|  HTML5Error   |              "The requested content cannot be played in an HTML5 player"               |
| VideoNotFound |                          "The video requested was not found"                           |
| NotEmbeddable | "The owner of the requested video does not allow it to be played in embedded players." |

### YoutubePlayerInternalErrors

|           Members            | Value |
| :--------------------------: | :---: |
|    InvalidParamErrorCode     |   2   |
|        HTML5ErrorCode        |   5   |
|    VideoNotFoundErrorCode    |  100  |
|    NotEmbeddableErrorCode    |  101  |
|   CannotFindVideoErrorCode   |  105  |
| SameAsNotEmbeddableErrorCode |  150  |
