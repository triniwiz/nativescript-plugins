import { YoutubePlayerBase, srcProperty, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState, getPlayerData } from './common';

export { YoutubePlayerBase };
@NativeClass
@ObjCClass(WKNavigationDelegate)
class WKNavigationDelegateImpl extends NSObject implements WKNavigationDelegate {
    owner: WeakRef<YoutubePlayer>
    public static initWithOwner(owner: WeakRef<YoutubePlayer>) {
        const delegate = <WKNavigationDelegateImpl>WKNavigationDelegateImpl.new();
        delegate.owner = owner;
        return delegate;
    }
    webViewDecidePolicyForNavigationActionDecisionHandler(webView, navigationAction, decisionHandler) {
        if (navigationAction.request.URL && navigationAction.request.URL.scheme === 'ns-yt') {
            const owner = this.owner.get()
            decisionHandler(WKNavigationActionPolicy.Cancel);
            if (owner) {
                try {
                    owner._handleUrl(navigationAction.request.URL);
                } catch (err) {

                }
            }
            return;
        }
        decisionHandler(WKNavigationActionPolicy.Allow);
    }
}



export class YoutubePlayer extends YoutubePlayerBase {
    #webView: WKWebView;
    #config: WKWebViewConfiguration;
    #delegate: WKNavigationDelegateImpl;
    #duration: number = 0;
    #state: YoutubePlayerState = -1;
    #onReadyListener: () => void | null;
    #onStateListener: (state: YoutubePlayerState) => void | null;
    #onCurrentTimeListener: (time: number) => void | null;
    #onErrorListener: (error: YoutubePlayerErrors) => void;
    #origin: string;
    #fullScreen: boolean = false;
    createNativeView() {
        this.#origin = `http://${NSBundle.mainBundle.bundleIdentifier}`;
        const jScript =
            `var meta = document.createElement('meta');
                meta.setAttribute('name', 'viewport');
                meta.setAttribute('content', 'width=device-width, shrink-to-fit=YES');
                 meta.setAttribute('initial-scale', '1.0');
                 meta.setAttribute('maximum-scale', '1.0'); 
                 meta.setAttribute('minimum-scale', '1.0'); 
                 meta.setAttribute('user-scalable', 'no'); 
               document.getElementsByTagName('head')[0].appendChild(meta);`;
        const wkUScript = WKUserScript.alloc().initWithSourceInjectionTimeForMainFrameOnly(
            jScript,
            WKUserScriptInjectionTime.AtDocumentEnd,
            true
        );
        const wkUController = WKUserContentController.new();
        wkUController.addUserScript(wkUScript);
        this.#config = WKWebViewConfiguration.new();
        this.#config.userContentController = wkUController;
        this.#config.allowsInlineMediaPlayback = true;
        this.#config.mediaPlaybackRequiresUserAction = false;
        this.#config.requiresUserActionForMediaPlayback = false;
        this.#config.preferences.setValueForKey(true, 'allowFileAccessFromFileURLs');
        this.#webView = new WKWebView({
            frame: CGRectZero,
            configuration: this.#config
        });
        this.#delegate = WKNavigationDelegateImpl.initWithOwner(new WeakRef(this));
        this.#webView.autoresizingMask = (UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight);
        this.#webView.scrollView.scrollEnabled = false;
        this.#webView.scrollView.bounces = false
        return this.#webView;
    }

    initNativeView() {
        this.#webView.navigationDelegate = this.#delegate;
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
        this.#webView.loadHTMLStringBaseURL(
            getPlayerData(input, this.src),
            NSURL.URLWithString(this.#origin),
        );

        super.initNativeView();
    }

    [srcProperty.setNative](value: string) {
        this.playById(value);
    }


    disposeNativeView() {
        this.destroy();
        super.disposeNativeView();
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

    _handleUrl(url: NSURL) {
        const action = url.host;
        const query = url.query;
        let data;
        if (query) {
            data = query.split('=')[1];
        }
        console.log('action', action, 'data', data);
        switch (action) {
            case 'onReady':
                if (this.#onReadyListener) {
                    this.#onReadyListener();
                }
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

    get duration(): number {
        return this.#duration;
    }

    play() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.playVideo();', (value, error) => {
                if (error) {
                }
            });
        }
    }

    playById(id: string) {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`player.loadVideoById('${id}');`, (value, error) => {
                if (error) {
                }
            });
        }
    }

    playByUrl(url: string) {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`player.loadVideoByUrl('${url}');`, (value, error) => {
                if (error) {
                }
            });
        }
    }

    cueVideoById(id: string) {
        this.#webView.evaluateJavaScriptCompletionHandler(`player.cueVideoById('${id}');`, (value, error) => {
            if (error) {
            }
        });
    }

    cueVideoByUrl(url: string) {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`player.cueVideoByUrl('${url}');`, (value, error) => {
                if (error) {
                }
            });
        }
    }

    pause() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.pauseVideo();', (value, error) => { });
        }
    }

    next() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.nextVideo();', (p1, p2) => { });
        }
    }

    mute() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.mute();', (p1, p2) => { });
        }
    }

    unmute() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.unmute();', (p1, p2) => { });
        }
    }

    previous() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.previousVideo();', (p1, p2) => { });
        }
    }

    startSeeking() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`startSeeking();`, (p1, p2) => { });
        }
    }

    seekTo(value: number) {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`seekTo(${value}, true)`, (p1, p2) => { });
        }
    }

    setVolume(value: number) {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler(`player.setVolume(${value})`, (p1, p2) => { });
        }
    }

    stop() {
        if (this.#webView) {
            this.#webView.evaluateJavaScriptCompletionHandler('player.stopVideo();', (value, error) => {
                if (error) {
                }
            });
        }
    }

    destroy() {
        if (this.#webView) {
            this.onReady(null);
            this.onState(null);
            this.onCurrentTime(null);
            this.onError(null);
            if (this.#webView) {
                this.#webView.evaluateJavaScriptCompletionHandler('playerDestroy();', (value, error) => {
                });
            }
        }
    }

    toggleFullScreen() {
        if (!this.#fullScreen) {
            this.#webView.evaluateJavaScriptCompletionHandler('requestFullScreen();', (value, error) => {
                if (!error) {
                    this.#fullScreen = true;
                }
            });
        } else {
            this.#webView.evaluateJavaScriptCompletionHandler('exitFullScreen();', (value, error) => {
                if (!error) {
                    this.#fullScreen = false;
                }
            });
        }
    }

    get state() {
        return this.#state;
    }
}