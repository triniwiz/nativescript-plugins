import { YoutubePlayerBase, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState, getPlayerData, videoIdProperty } from './common';

export { YoutubePlayerBase };

import { Utils } from '@nativescript/core';
@NativeClass
@ObjCClass(WKNavigationDelegate)
class WKNavigationDelegateImpl extends NSObject implements WKNavigationDelegate {
	owner: WeakRef<YoutubePlayer>;

	public static initWithOwner(owner: WeakRef<YoutubePlayer>) {
		const delegate = <WKNavigationDelegateImpl>WKNavigationDelegateImpl.new();
		delegate.owner = owner;
		return delegate;
	}

	webViewDecidePolicyForNavigationActionDecisionHandler(webView, navigationAction, decisionHandler) {
		if (navigationAction.request.URL && navigationAction.request.URL.scheme === 'ns-yt') {
			const owner = this.owner.get();
			decisionHandler(WKNavigationActionPolicy.Cancel);
			if (owner) {
				try {
					owner._handleUrl(navigationAction.request.URL);
				} catch (err) {}
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
	#origin: string;
	#enterFullScreenObserver;
	#exitFullScreenObserver;
	#isFullScreen: boolean = false;
	#state: YoutubePlayerState = YoutubePlayerState.Unstarted;

	createNativeView() {
		this.#origin = 'https://www.youtube.com';
		const jScript = `var meta = document.createElement('meta');
                meta.setAttribute('name', 'viewport');
                meta.setAttribute('content', 'width=device-width, shrink-to-fit=YES');
                 meta.setAttribute('initial-scale', '1.0');
                 meta.setAttribute('maximum-scale', '1.0');
                 meta.setAttribute('minimum-scale', '1.0');
                 meta.setAttribute('user-scalable', 'no');
               document.getElementsByTagName('head')[0].appendChild(meta);`;
		const wkUScript = WKUserScript.alloc().initWithSourceInjectionTimeForMainFrameOnly(jScript, WKUserScriptInjectionTime.AtDocumentEnd, true);
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
			configuration: this.#config,
		});
		this.#delegate = WKNavigationDelegateImpl.initWithOwner(new WeakRef(this));
		this.#webView.autoresizingMask = UIViewAutoresizing.FlexibleWidth | UIViewAutoresizing.FlexibleHeight;
		this.#webView.scrollView.scrollEnabled = false;
		this.#webView.scrollView.bounces = false;
		return this.#webView;
	}

	get isFullScreen(): boolean {
		return this.#isFullScreen;
	}

	initNativeView() {
		this.#enterFullScreenObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(UIWindowDidBecomeVisibleNotification, null, null, (notfi) => {
			this.#isFullScreen = true;
			this.notify({
				eventName: YoutubePlayer.onFullScreenEvent,
				object: this,
				fullscreen: true,
			});
		});
		this.#exitFullScreenObserver = NSNotificationCenter.defaultCenter.addObserverForNameObjectQueueUsingBlock(UIWindowDidBecomeHiddenNotification, null, null, (notfi) => {
			this.#isFullScreen = false;
			this.notify({
				eventName: YoutubePlayer.onFullScreenEvent,
				object: this,
				fullscreen: false,
			});
		});
		this.#webView.navigationDelegate = this.#delegate;
		const input = `{
            'loop': ${this.loop ? 1 : 0},
            'fs': ${this.showFullScreenToggle ? 1 : 0},
            'playsinline': ${this.playsInLine ? 1 : 0},
            'allow_embed': 1,
            'origin': "${this.#origin}",
            'enablejsapi': 1,
            'widget_referrer': "${this.#origin}",
            'autoplay': ${this.autoPlay ? 1 : 0},
            'controls': ${this.controls ? 1 : 0},
            'modestbranding' : ${this.showYoutubeLogo ? 1 : 0}
        }`;

		this.#webView.loadHTMLStringBaseURL(getPlayerData(input, this.videoId), NSURL.URLWithString(this.#origin));

		super.initNativeView();
	}

	[videoIdProperty.setNative](value: string) {
		this.playById(value);
	}

	disposeNativeView() {
		this.destroy();
		NSNotificationCenter.defaultCenter.removeObserver(this.#enterFullScreenObserver);
		NSNotificationCenter.defaultCenter.removeObserver(this.#exitFullScreenObserver);
		this.#enterFullScreenObserver = null;
		this.#exitFullScreenObserver = null;
		super.disposeNativeView();
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const nativeView = this.nativeViewProtected;
		if (nativeView) {
			const width = Utils.layout.getMeasureSpecSize(widthMeasureSpec);
			const height = Utils.layout.getMeasureSpecSize(heightMeasureSpec);
			this.setMeasuredDimension(width, height);
		}
	}

	_handleUrl(url: NSURL) {
		const action = url.host;
		const query = url.query;
		let data;
		if (query) {
			data = query.split('=')[1];
		}
		switch (action) {
			case 'onReady':
				this.notify({
					eventName: YoutubePlayer.onReadyEvent,
					object: this,
				});
				break;
			case 'onStateChange':
				this.#state = parseInt(data, 10);
				this.notify({
					eventName: YoutubePlayer.onStateChangeEvent,
					object: this,
					state: this.#state,
				});
				break;
			case 'onApiReady':
				this.notify({
					eventName: YoutubePlayer.onApiReadyEvent,
					object: this,
				});
				break;
			case 'onCurrentTime':
				this.notify({
					eventName: YoutubePlayer.onCurrentTimeEvent,
					object: this,
					currentTime: parseInt(data, 10),
				});
				break;
			case 'onDuration':
				this.#duration = parseInt(data, 10);
				break;
			case 'onError':
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
				this.notify({
					eventName: YoutubePlayer.onErrorEvent,
					object: this,
					error,
				});
				break;
			case 'onPlaybackQualityChange':
				this.notify({
					eventName: YoutubePlayer.onPlayBackQualityEvent,
					object: this,
					quality: data,
				});
				break;
			case 'onPlaybackRateChange':
				this.notify({
					eventName: YoutubePlayer.onPlaybackRateChangeEvent,
					object: this,
					rate: parseFloat(data),
				});
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
			this.#webView.evaluateJavaScriptCompletionHandler('player.pauseVideo();', (value, error) => {});
		}
	}

	next() {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler('player.nextVideo();', (p1, p2) => {});
		}
	}

	mute() {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler('player.mute();', (p1, p2) => {});
		}
	}

	unmute() {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler('player.unmute();', (p1, p2) => {});
		}
	}

	previous() {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler('player.previousVideo();', (p1, p2) => {});
		}
	}

	startSeeking() {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler(`startSeeking();`, (p1, p2) => {});
		}
	}

	seekTo(value: number) {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler(`seekTo(${value}, true)`, (p1, p2) => {});
		}
	}

	setVolume(value: number) {
		if (this.#webView) {
			this.#webView.evaluateJavaScriptCompletionHandler(`player.setVolume(${value})`, (p1, p2) => {});
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
			if (this.#webView) {
				this.#webView.evaluateJavaScriptCompletionHandler('playerDestroy();', (value, error) => {});
			}
		}
	}

	toggleFullScreen() {
		// Safari workaround
		const cmd = "document.getElementById('player').getElementsByClassName('video-stream')[0]";
		if (!this.#isFullScreen) {
			this.#webView.evaluateJavaScriptCompletionHandler(`${cmd}.webkitEnterFullScreen();`, (value, error) => {
				if (!error) {
				}
			});
		} else {
			this.#webView.evaluateJavaScriptCompletionHandler(`${cmd}.webkitExitFullScreen();`, (value, error) => {
				if (!error) {
				}
			});
		}
	}

	get state() {
		return this.#state;
	}
}
