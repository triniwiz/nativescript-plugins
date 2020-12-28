import { Utils } from '@nativescript/core';
import { getPlayerData, srcProperty, YoutubePlayerBase, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState } from './common';

export { YoutubePlayerErrors, YoutubePlayerState, YoutubePlayerInternalErrors };
let WebViewClient;

function initWebViewClient() {
    if (!WebViewClient) {
        @NativeClass
        class WebViewClientImpl extends android.webkit.WebViewClient {
            owner: WeakRef<YoutubePlayer>
            shouldOverrideUrlLoading(param0: android.webkit.WebView, param1: any): boolean {
                let url = null;
                if (param1 instanceof String) {
                    url = param1;
                }
                if (param1 instanceof (android as any).webkit.WebResourceRequest) {
                    url = param1.getUrl().toString();
                }
                if (!url || url.startsWith('http')) {
                    return false;
                }
                if (url && url.startsWith('ns-yt')) {
                    const uri = android.net.Uri.parse(url);
                    const owner = this.owner ? this.owner.get() : null;
                    if (owner) {
                        owner._handleUrl(uri);
                        return true;
                    }
                    return false;
                }
                return false;
            }
        }
        WebViewClient = WebViewClientImpl;
    }
}

export class YoutubePlayer extends YoutubePlayerBase {
    #webView: android.webkit.WebView;
    #client: any;
    #origin: string;
    #duration: number = 0;
    #state: YoutubePlayerState = -1;
    #onReadyListener: () => void | null;
    #onStateListener: (state: YoutubePlayerState) => void | null;
    #onCurrentTimeListener: (time: number) => void | null;
    #onErrorListener: (error: YoutubePlayerErrors) => void;
    #fullScreen: boolean = false;
    #isReady: boolean = false;
    _handleUrl(url: android.net.Uri) {
        const action = url.getHost();
        const query = url.getQuery();
        let data;
        if (query) {
            data = query.split('=')[1];
        }
        switch (action) {
            case 'onReady':
                if (this.#onReadyListener) {
                    this.#onReadyListener();
                }
                this.#isReady = true;
                break;
            case 'onStateChange':
                this.#state = parseInt(data, 10);
                if (this.#onStateListener) {
                    this.#onStateListener(this.#state);
                }
                break;
            case 'onApiReady':
                break;
            case 'onCurrentTime':
                if (this.#onCurrentTimeListener) {
                    this.#onCurrentTimeListener(parseInt(data, 10));
                }
                break;
            case 'onDuration':
                this.#duration = parseInt(data, 10);
                break;
            case 'onError':
                if (this.#onErrorListener) {
                    const error = parseInt(data, 10);
                    let e;
                    switch (error) {
                        case YoutubePlayerInternalErrors.CannotFindVideoErrorCode:
                            e = YoutubePlayerErrors.VideoNotFound;
                            break;
                        case YoutubePlayerInternalErrors.HTML5ErrorCode:
                            e = YoutubePlayerErrors.HTML5Error;
                            break;
                        case YoutubePlayerInternalErrors.SameAsNotEmbeddableErrorCode:
                        case YoutubePlayerInternalErrors.NotEmbeddableErrorCode:
                            e = YoutubePlayerErrors.NotEmbeddable;
                            break;
                        case YoutubePlayerInternalErrors.InvalidParamErrorCode:
                            e = YoutubePlayerErrors.InvalidParam;
                            break;
                    }
                    this.#onErrorListener(e);
                }
                break;
            case 'onPlaybackQualityChange':
                console.log('onPlaybackQualityChange', data);
                break;
            case 'onFullScreenChange':
                console.log('onFullScreenChange', data);
                break;
            case 'onPlaybackRateChange':
                console.log('onPlaybackRateChange', data);
                break;
        }
    }

    createNativeView() {
        initWebViewClient();
        const packageName: android.content.Context = Utils.android.getApplicationContext();
        this.#origin = `https://${packageName.getPackageName()}`;
        this.#webView = new android.webkit.WebView(this._context, null);
        const settings = this.#webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setMixedContentMode(android.webkit.WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
        settings.setMediaPlaybackRequiresUserGesture(false);
        this.#client = new WebViewClient();
        this.#client.owner = new WeakRef(this);
        this.#webView.setWebViewClient(this.#client);
        return this.#webView;
    }
    initNativeView() {
        const input = `{
            'playsinline': 1,
            'allow_embed': 1,
            'origin': "${this.#origin}",
            'enablejsapi': 1,
            'widget_referrer': "${this.#origin}",
            'autoplay': ${this.autoPlay ? 1 : 0},
            'controls': ${this.controls ? 1 : 0},
            'modestbranding' : ${this.showYoutubeLogo ? 1 : 0}
        }`;
        const playerData = getPlayerData(input, this.src);
        this.#webView.loadDataWithBaseURL(
            this.#origin,
            playerData,
            "text/html", "utf-8",
            null
        );
        super.initNativeView();
    }

    disposeNativeView() {
        this.destroy();
        super.disposeNativeView();
    }

    [srcProperty.setNative](value: string) {
        if (this.#isReady) {
            this.playById(value);
        }
    }


    onReady(listener: () => void) {
        this.#onReadyListener = listener;
    }

    onState(listener: (state: YoutubePlayerState) => void) {
        this.#onStateListener = listener;
    }

    onCurrentTime(listener: (time: number) => void) {
        this.#onCurrentTimeListener = listener;
    }

    onError(listener: (error) => void) {
        this.#onErrorListener = listener;
    }

    get duration(): number {
        return this.#duration;
    }

    play() {
        this.#webView.evaluateJavascript(
            'player.playVideo();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    playById(id: string) {
        this.#webView.evaluateJavascript(
            `player.loadVideoById('${id}');`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    playByUrl(url: string) {
        this.#webView.evaluateJavascript(
            `player.loadVideoByUrl('${url}');`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    cueVideoById(id: string) {
        this.#webView.evaluateJavascript(
            `player.cueVideoById('${id}');`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    cueVideoByUrl(url: string) {
        this.#webView.evaluateJavascript(
            `player.cueVideoByUrl('${url}');`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    pause() {
        this.#webView.evaluateJavascript(
            'player.pauseVideo();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    next() {
        this.#webView.evaluateJavascript(
            'player.nextVideo();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    mute() {
        this.#webView.evaluateJavascript(
            'player.mute();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    unmute() {
        this.#webView.evaluateJavascript(
            'player.unmute();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    previous() {
        this.#webView.evaluateJavascript(
            'player.previousVideo();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    startSeeking() {
        this.#webView.evaluateJavascript(
            `startSeeking();`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    seekTo(value: number) {
        this.#webView.evaluateJavascript(
            `seekTo(${value}, true)`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    setVolume(value: number) {
        this.#webView.evaluateJavascript(
            `player.setVolume(${value})`,
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    stop() {
        this.#webView.evaluateJavascript(
            'player.stopVideo();',
            new android.webkit.ValueCallback({
                onReceiveValue: function (value) { }
            })
        );
    }

    destroy() {
        if (this.#webView) {
            this.#webView.destroy();
            this.#isReady = false;
        }
    }

    toggleFullScreen() {
        const ref = new WeakRef(this);
        if (!this.#fullScreen) {
            this.#webView.evaluateJavascript(
                `requestFullScreen();`,
                new android.webkit.ValueCallback({
                    onReceiveValue: function (value) {
                        const owner = ref.get();
                        if (owner) {
                            owner.#fullScreen = true;
                        }
                    }
                })
            );
        } else {
            this.#webView.evaluateJavascript(
                `exitFullScreen();`,
                new android.webkit.ValueCallback({
                    onReceiveValue: function (value) {
                        const owner = ref.get();
                        if (owner) {
                            owner.#fullScreen = true;
                        }
                    }
                })
            );
        }
    }

    get state() {
        return this.#state;
    }

}