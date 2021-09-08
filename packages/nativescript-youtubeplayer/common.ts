export enum YoutubePlayerState {
	Unstarted = -1,
	Ended = 0,
	Playing = 1,
	Paused = 2,
	Buffering = 3,
	Cued = 5,
}

export enum YoutubePlayerQuality {
	Small = 'small',
	Medium = 'medium',
	Large = 'large',
	HD720 = 'hd720',
	HD1080 = 'hd1080',
	HighRes = 'highres',
}

export enum YoutubePlayerErrors {
	InvalidParam = 'The request contains an invalid parameter value',
	HTML5Error = 'The requested content cannot be played in an HTML5 player',
	VideoNotFound = 'The video requested was not found',
	NotEmbeddable = 'The owner of the requested video does not allow it to be played in embedded players.',
}

export enum YoutubePlayerInternalErrors {
	InvalidParamErrorCode = 2,
	HTML5ErrorCode = 5,
	VideoNotFoundErrorCode = 100,
	NotEmbeddableErrorCode = 101,
	CannotFindVideoErrorCode = 105,
	SameAsNotEmbeddableErrorCode = 150,
}

import { booleanConverter, CSSType, Property, View } from '@nativescript/core';

export const videoIdProperty = new Property<YoutubePlayerBase, string>({
	name: 'videoId',
});

export const showRelatedVideosProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'showRelatedVideos',
	defaultValue: true,
	valueConverter: booleanConverter,
});
export const showYoutubeLogoProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'showYoutubeLogo',
	defaultValue: true,
	valueConverter: booleanConverter,
});
export const loopProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'loop',
	defaultValue: false,
	valueConverter: booleanConverter,
});
export const autoPlayProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'autoPlay',
	defaultValue: false,
	valueConverter: booleanConverter,
});

export const showFullScreenToggleProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'showFullScreenToggle',
	defaultValue: true,
	valueConverter: booleanConverter,
});

export const controlsProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'controls',
	defaultValue: true,
	valueConverter: booleanConverter,
});

export const playsInLineProperty = new Property<YoutubePlayerBase, boolean>({
	name: 'playsInLine',
	defaultValue: true,
	valueConverter: booleanConverter,
});

@CSSType('YoutubePlayer')
export abstract class YoutubePlayerBase extends View {
	public static onReadyEvent = 'ready';
	public static onErrorEvent = 'error';
	public static onCurrentTimeEvent = 'currentTime';
	public static onApiReadyEvent = 'apiReady';
	public static onStateChangeEvent = 'stateChange';
	public static onFullScreenEvent = 'fullScreen';
	public static onPlayBackQualityEvent = 'playBackQuality';
	public static onPlaybackRateChangeEvent = 'playbackRate';
	public videoId: string;
	public showRelatedVideos: boolean;
	public showYoutubeLogo: boolean;
	public loop: boolean;
	public autoPlay: boolean;
	public showFullScreenToggle: boolean;
	public controls: boolean;
	public playsInLine: boolean;
}

videoIdProperty.register(YoutubePlayerBase);
showRelatedVideosProperty.register(YoutubePlayerBase);
showYoutubeLogoProperty.register(YoutubePlayerBase);
loopProperty.register(YoutubePlayerBase);
autoPlayProperty.register(YoutubePlayerBase);
showFullScreenToggleProperty.register(YoutubePlayerBase);
controlsProperty.register(YoutubePlayerBase);
playsInLineProperty.register(YoutubePlayerBase);
export const getPlayerData = (playerVars, videoId) => {
	return `<!DOCTYPE html>
    <html>
    <head>
    <style>
    body { margin: 0; width:100%%; height:100%%;  background-color:#000000; }
    html { width:100%%; height:100%%; background-color:#000000; }

    .embed-container iframe,
    .embed-container object,
    .embed-container embed {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%% !important;
        height: 100%% !important;
    }
    </style>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
    <body>
    <div id="container" class="embed-container">
    <div id="player"></div>
</div>

    <script>
    var tag = document.createElement('script');

tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
var timer;
var duration = 0;
var currentTime = 0;
var isSeeking = false;
var iframe;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player',
        {
        videoId: ${JSON.stringify(videoId ? videoId : '')},
        playerVars: ${playerVars},
        events:
        {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange,
            'onError': onPlayerError,
            'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
            'onPlaybackRateChange': onPlayerPlaybackRateChange
        }
      });
player.setSize(window.innerWidth, window.innerHeight);
window.location.href = 'ns-yt://onApiReady';
    }

function playerDestroy() {
    clearTime();
    if (player) {
        player.destroy();
        player = null;
    }
}

function onPlayerPlaybackRateChange(event){
    if (player) {
        window.location.href = 'ns-yt://onPlaybackRateChange?data=' + event.data;
    }
}

function onPlayerPlaybackQualityChange(event) {
    if (player) {
        window.location.href = 'ns-yt://onPlaybackQualityChange?data=' + event.data;
    }
}
function onPlayerError(event) {
    if (player) {
        window.location.href = 'ns-yt://onError?data=' + event.data;
    }
}

function onPlayerReady(event) {
    if (player) {
        iframe = document.getElementById("container");
        window.location.href = 'ns-yt://onReady?data=' + event.data;
    }
}

function onFullScreenChange(event) {
    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        window.location.href = 'ns-yt://onFullScreenChange?data=' + true;
    } else {
        window.location.href = 'ns-yt://onFullScreenChange?data=' + false;
    }
}

function onPlayerStateChange(event) {
    window.setTimeout(() => {
        if (player) {
            window.location.href = 'ns-yt://onStateChange?data=' + event.data;
        }
    }, 0);
    if (player) {
        var state = player.getPlayerState();
        if (state === YT.PlayerState.PLAYING) {
            timer = window.setInterval(() => {
                if (player) {
                    currentTime = player.getCurrentTime();
                    window.location.href = 'ns-yt://onCurrentTime?data=' + currentTime;
                }
            }, 500);
            if (player) {
                duration = player.getDuration();
                window.location.href = 'ns-yt://onDuration?data=' + duration;
            }
        } else {
            clearTime();
        }
    } else {
        clearTime();
    }
}

function clearTime() {
    if (typeof timer === 'number') {
        window.setTimeout(function () {
            window.clearInterval(timer);
            timer = null;
        }, 0)
    }
}

function startSeeking() {
    clearTime();
}

function seekTo(value, seekAhead) {
    clearTime();
    currentTime = value;
    if (player) {
        player.seekTo(value, seekAhead)
    }
}

function requestFullScreen() {
    var requestFullScreen = document.requestFullScreen || document.mozRequestFullScreen || document.webkitRequestFullScreen;
    if (requestFullScreen) {
        requestFullScreen.bind(document)();
    }
}

function exitFullScreen() {
    var exitFullScreen = document.exitFullscreen|| document.webkitExitFullscreen;
    if (exitFullScreen) {
        exitFullScreen.bind(document)();
    }
}

window.onresize = function () {
    if (player) {
        player.setSize(window.innerWidth, window.innerHeight);
    }
}

document.addEventListener('fullscreenchange', onFullScreenChange);
document.addEventListener('mozfullscreenchange', onFullScreenChange);
document.addEventListener('msfullscreenchange', onFullScreenChange);
document.addEventListener('webkitfullscreenchange', onFullScreenChange);
    </script>
    </body>
    </html>`;
};
