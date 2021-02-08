import { Application, Utils } from '@nativescript/core';
import { getPlayerData, videoIdProperty, YoutubePlayerBase, YoutubePlayerErrors, YoutubePlayerInternalErrors, YoutubePlayerState } from './common';

export { YoutubePlayerErrors, YoutubePlayerState, YoutubePlayerInternalErrors };
let WebViewClient;

function initWebViewClient() {
	if (!WebViewClient) {
		@NativeClass
		class WebViewClientImpl extends android.webkit.WebViewClient {
			owner: WeakRef<YoutubePlayer>;

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

let WebChromeClient;

function initWebChromeClient() {
	const FULLSCREEN_PARAMS = android.view.View.SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION | android.view.View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | android.view.View.SYSTEM_UI_FLAG_LAYOUT_STABLE | android.view.View.SYSTEM_UI_FLAG_HIDE_NAVIGATION | android.view.View.SYSTEM_UI_FLAG_FULLSCREEN | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE | android.view.View.SYSTEM_UI_FLAG_IMMERSIVE_STICKY;
	if (!WebChromeClient) {
		@NativeClass
		class ChromeClient extends android.webkit.WebChromeClient {
			#videoView: any;
			#callback: any;
			#allowsFullscreenVideo: boolean = false;
			#webView: android.webkit.WebView;
			#initialRequestedOrientation: any;
			constructor(webView, allowsFullscreenVideo, initialRequestedOrientation) {
				super();
				this.#webView = webView;
				this.#allowsFullscreenVideo = allowsFullscreenVideo;
				this.#initialRequestedOrientation = initialRequestedOrientation;
				return global.__native(this);
			}

			getDefaultVideoPoster(): android.graphics.Bitmap {
				return android.graphics.Bitmap.createBitmap(50, 50, android.graphics.Bitmap.Config.ARGB_8888);
			}

			onShowCustomView(view: android.view.View, param1);
			onShowCustomView(view: android.view.View, param1, param2);
			onShowCustomView(...args) {
				if (!this.#allowsFullscreenVideo) {
					return;
				}
				const view = args[0];

				let callback;
				if (args.length === 3) {
					callback = args[2];
				} else {
					callback = args[1];
				}

				if (this.#videoView) {
					callback.onCustomViewHidden();
					return;
				}

				const activity = Application.android.foregroundActivity || Application.android.startActivity;

				this.#videoView = view;
				this.#callback = callback;

				activity.setRequestedOrientation(android.content.pm.ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);

				if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
					this.#videoView.setSystemUiVisibility(FULLSCREEN_PARAMS);
					activity.getWindow().setFlags(android.view.WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS, android.view.WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
				}

				this.#videoView.setBackgroundColor(android.graphics.Color.BLACK);
				const rootView = activity.findViewById(android.R.id.content);
				rootView.addView(this.#videoView, new android.widget.FrameLayout.LayoutParams(android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.ViewGroup.LayoutParams.MATCH_PARENT, android.view.Gravity.CENTER));
				this.#webView.setVisibility(android.view.View.GONE);
			}

			onHideCustomView() {
				if (!this.#allowsFullscreenVideo) {
					return;
				}
				if (!this.#videoView) {
					return;
				}

				const activity = Application.android.foregroundActivity || Application.android.startActivity;
				const rootView = activity.findViewById(android.R.id.content);
				this.#videoView.setVisibility(android.view.View.GONE);
				rootView.removeView(this.#videoView);
				this.#callback.onCustomViewHidden();

				this.#videoView = null;
				this.#videoView = null;

				this.#webView.setVisibility(android.view.View.VISIBLE);

				if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
					activity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
				}
				activity.setRequestedOrientation(this.#initialRequestedOrientation);
			}
		}

		WebChromeClient = ChromeClient;
	}
}

export class YoutubePlayer extends YoutubePlayerBase {
	#webView: android.webkit.WebView;
	#chromeClient: any;
	#client: any;
	#origin: string;
	#duration: number = 0;
	#state: YoutubePlayerState = YoutubePlayerState.Unstarted;
	#isReady: boolean = false;
	#isFullScreen: boolean = false;

	createNativeView() {
		initWebViewClient();
		initWebChromeClient();
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

	private _setupChromeClient() {
		this.#chromeClient?.onHideCustomView();
		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		const initialOrientation = activity.getRequestedOrientation();
		const chromeClient = new WebChromeClient(this.#webView, this.showFullScreenToggle, initialOrientation);
		this.#chromeClient = chromeClient;
		this.#webView.setWebChromeClient(chromeClient);
	}

	initNativeView() {
		this._setupChromeClient();
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
		const playerData = getPlayerData(input, this.videoId);
		this.#webView.loadDataWithBaseURL(this.#origin, playerData, 'text/html', 'utf-8', null);
		super.initNativeView();
	}

	disposeNativeView() {
		this.destroy();
		super.disposeNativeView();
	}

	_handleUrl(url: android.net.Uri) {
		const action = url.getHost();
		const query = url.getQuery();
		let data;
		if (query) {
			data = query.split('=')[1];
		}
		switch (action) {
			case 'onReady':
				this.#isReady = true;
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
			case 'onFullScreenChange':
				this.notify({
					eventName: YoutubePlayer.onFullScreenEvent,
					object: this,
					fullscreen: Boolean(data),
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

	[videoIdProperty.setNative](value: string) {
		if (this.#isReady) {
			this.playById(value);
		}
	}

	get duration(): number {
		return this.#duration;
	}

	play() {
		this.#webView.evaluateJavascript(
			'player.playVideo();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	playById(id: string) {
		this.#webView.evaluateJavascript(
			`player.loadVideoById('${id}');`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	playByUrl(url: string) {
		this.#webView.evaluateJavascript(
			`player.loadVideoByUrl('${url}');`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	cueVideoById(id: string) {
		this.#webView.evaluateJavascript(
			`player.cueVideoById('${id}');`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	cueVideoByUrl(url: string) {
		this.#webView.evaluateJavascript(
			`player.cueVideoByUrl('${url}');`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	pause() {
		this.#webView.evaluateJavascript(
			'player.pauseVideo();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	next() {
		this.#webView.evaluateJavascript(
			'player.nextVideo();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	mute() {
		this.#webView.evaluateJavascript(
			'player.mute();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	unmute() {
		this.#webView.evaluateJavascript(
			'player.unmute();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	previous() {
		this.#webView.evaluateJavascript(
			'player.previousVideo();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	startSeeking() {
		this.#webView.evaluateJavascript(
			`startSeeking();`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	seekTo(value: number) {
		this.#webView.evaluateJavascript(
			`seekTo(${value}, true)`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	setVolume(value: number) {
		this.#webView.evaluateJavascript(
			`player.setVolume(${value})`,
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
			})
		);
	}

	stop() {
		this.#webView.evaluateJavascript(
			'player.stopVideo();',
			new android.webkit.ValueCallback({
				onReceiveValue: function (value) {},
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
		if (!this.#isFullScreen) {
			this.#webView.evaluateJavascript(
				`requestFullScreen();`,
				new android.webkit.ValueCallback({
					onReceiveValue: function (value) {
						const owner = ref.get();
						if (owner) {
							//   owner.#isFullScreen = true;
						}
					},
				})
			);
		} else {
			this.#webView.evaluateJavascript(
				`exitFullscreen();`,
				new android.webkit.ValueCallback({
					onReceiveValue: function (value) {
						const owner = ref.get();
						if (owner) {
						}
					},
				})
			);
		}
	}

	get state() {
		return this.#state;
	}
}
