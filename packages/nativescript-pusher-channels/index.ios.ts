import { InternalPusherEvents, NSCPusherBase, NSCPusherChannelBase, NSCPusherConnectionBase, NSCAuthorizerBase } from './common';
import { Options } from './interfaces';
import { ConnectionStatus } from './enums';

export * from './interfaces';
export * from './enums';

export class NSCPusher extends NSCPusherBase {
	ios: Pusher;
	readonly #delegate: PusherDelegateImpl;
	_globalEvents: Map<Function, string>;
	_channelEvents: Map<Function, { channelName: string; event: string; id: string }>;
	_connectionEvents: Map<Function, { event: string; id: string }>;
	_connection: NSCPusherConnection;
	_authBuilder: any;

	constructor(apiKey: string, options?: Options) {
		super();
		this._globalEvents = new Map<Function, string>();
		this._channelEvents = new Map<Function, { channelName: string; event: string; id: string }>();
		this._connectionEvents = new Map<Function, { event: string; id: string }>();
		this.#delegate = PusherDelegateImpl.initWithOwner(new WeakRef(this));
		if (options) {
			let authEndpoint = OCAuthMethod.alloc().initWithType(4);
			if (options.authEndpoint) {
				this._authBuilder = PusherAuthRequestBuilder.initWithURLParamsHeaders(options.authEndpoint, options.auth?.params, options?.auth?.headers);
				authEndpoint = OCAuthMethod.alloc().initWithAuthRequestBuilder(this._authBuilder);
			}
			if (options.authorizer instanceof NSCAuthorizer) {
				if (options.authorizer._isAttached) {
					throw new Error('Cannot use previously attached NSCAuthorizer.');
				}
				options.authorizer._ios = PusherAuthorizer.initWithOwner(new WeakRef(options.authorizer) as any);
				authEndpoint = OCAuthMethod.alloc().initWithAuthorizer(options.authorizer._ios);
				options.authorizer._isAttached = true;
			}
			let host = OCPusherHost.alloc().init();
			if (options.cluster) {
				host = OCPusherHost.alloc().initWithCluster(options.cluster);
			}

			if (options.host) {
				host = OCPusherHost.alloc().initWithHost(options.host);
			}

			const opts = PusherClientOptions.alloc().initWithOcAuthMethodAutoReconnectOcHostPortUseTLSActivityTimeout(authEndpoint, !!options.autoReconnect, host, options.port || null, !!options.forceTLS, options.activityTimeout || null);
			this.ios = Pusher.alloc().initWithAppKeyOptions(apiKey, opts);
		} else {
			this.ios = Pusher.alloc().initWithKey(apiKey);
		}

		this.ios.delegate = this.#delegate;
	}

	connect(): void {
		this.ios.connect();
	}

	disconnect(): void {
		this.ios.disconnect();
	}

	public get connection() {
		if (!this._connection) {
			this._connection = new NSCPusherConnection(this.ios, new WeakRef(this));
		}
		return this._connection;
	}

	bind(callback: Function) {
		const id = this.ios.bindWithEventCallback((ev) => {
			if (!ev) {
				return;
			}
			const channelName = ev.channelName;
			const eventName = ev.eventName;
			let data = ev.data;
			try {
				data = JSON.parse(data);
			} catch (e) {}
			const userId = ev.userId;
			callback({
				channelName,
				data,
				eventName,
				userId,
			});
		});
		this._globalEvents.set(callback, id);
		return this;
	}

	unbind(callback: Function) {
		const id = this._globalEvents.get(callback);
		if (id) {
			this.ios.unbindWithCallbackId(id);
			this._globalEvents.delete(callback);
		}
	}

	subscribe(event: string) {
		let channel = this.ios?.connection?.channels?.findWithName?.(event);
		if (!channel) {
			channel = this.ios.subscribeWithChannelNameOnMemberAddedOnMemberRemovedOnSubscriptionCountChanged(
				event,
				(p1) => {},
				(p1) => {},
				(p1) => {}
			);
		}
		return new NSCPusherChannel(this.ios, channel, new WeakRef<NSCPusher>(this));
	}

	unsubscribeAll(): void {
		this.ios.unsubscribeAll();
	}

	unsubscribe(channelName: string): void {
		this.ios.unsubscribe(channelName);
	}
}

export class NSCPusherChannel extends NSCPusherChannelBase {
	channel: PusherChannel;
	ios: Pusher;
	connection: any;
	ref: WeakRef<NSCPusher>;

	constructor(instance: any, channel: any, ref: WeakRef<NSCPusher>) {
		super();
		this.ios = instance;
		this.channel = channel;
		this.ref = ref;
	}

	get name() {
		return this.channel.name;
	}

	trigger(event: string, data: any) {
		if (this.name && (this.name.startsWith('private-') || this.name.startsWith('presence-'))) {
			if (!event.startsWith('client-')) {
				event = `client-${event}`;
			}
			this.channel.triggerWithEventNameData(event, data);
		}
	}

	bind(event: string, callback: Function) {
		const id = this.channel.bindWithEventNameEventCallback(event, (ev) => {
			if (!ev) {
				return;
			}
			const channelName = ev.channelName;
			const eventName = ev.eventName;
			let data = ev.data;
			try {
				data = JSON.parse(data);
			} catch (e) {}
			const userId = ev.userId;
			callback({
				channelName,
				data,
				eventName,
				userId,
			});
		});
		const owner = this.ref && this.ref.get();
		if (owner) {
			owner._channelEvents.set(callback, { id, event, channelName: this.channel.name });
		}
	}

	unbind(event: string, callback: Function) {
		const owner = this.ref && this.ref.get();
		if (owner) {
			const data = owner._channelEvents.get(callback);
			if (data) {
				this.ios.unbindWithCallbackId(data.id);
				owner._channelEvents.delete(callback);
			}
		}
	}
}

export class NSCPusherConnection extends NSCPusherConnectionBase {
	ios: Pusher;
	_state: any;
	ref: WeakRef<NSCPusher>;

	constructor(instance: any, ref: WeakRef<NSCPusher>) {
		super();
		this.ios = instance;
		this.ref = ref;
	}

	bind(event: string, callback: Function) {
		const owner = this.ref.get();
		if (event === 'state_change' || event === 'connected') {
			const id = NSUUID.UUID().UUIDString;
			owner._connectionEvents.set(callback, { event, id });
		} else {
			const id = this.ios.bindWithEventCallback((ev) => {
				if (ev) {
					const channelName = ev.channelName;
					const eventName = ev.eventName;
					let data = ev.data;
					try {
						data = JSON.parse(data);
					} catch (e) {}
					const userId = ev.userId;
					if (event === 'error' && eventName === InternalPusherEvents.Error) {
						callback({
							channelName,
							data,
						});
						owner._connectionEvents.set(callback, { event, id });
					}
					if (event === 'ping' && eventName === InternalPusherEvents.Ping) {
						callback('ping');
						owner._connectionEvents.set(callback, { event, id });
					}

					if (event === 'pong' && eventName === InternalPusherEvents.Pong) {
						callback('pong');
						owner._connectionEvents.set(callback, { event, id });
					}
				}
			});
		}
	}

	unbind(event: string, callback?: Function) {
		const owner = this.ref.get();
		if (owner) {
			const data = owner._connectionEvents.get(callback);
			if (data) {
				this.ios.unbindWithCallbackId(data.id);
				owner._connectionEvents.delete(callback);
			}
		}
	}

	get state() {
		return this._state;
	}
}

export class NSCAuthorizer extends NSCAuthorizerBase {
	_ios: PusherAuthorizer;
	_isAttached = false;
	_currentHandler;

	completed(value?: string, error: string = null) {
		if (typeof this._currentHandler !== 'function') {
			return;
		}
		if (value) {
			try {
				this._currentHandler(NSCPusherUtils.createPusherAuth(JSON.parse(value)));
			} catch (e) {
				this._currentHandler(null);
			}
		} else {
			this._currentHandler(null);
		}
		this._currentHandler = undefined;
	}
}

@NativeClass()
@ObjCClass(AuthRequestBuilderProtocol)
class PusherAuthRequestBuilder extends NSObject implements AuthRequestBuilderProtocol {
	_URL: string;
	_params: any;
	_headers: any;
	public static initWithURLParamsHeaders(value: string, params: any, headers: any) {
		const delegate = PusherAuthRequestBuilder.alloc().init() as PusherAuthRequestBuilder;
		delegate._URL = value;
		delegate._params = params;
		delegate._headers = headers;
		return delegate;
	}
	requestForSocketIDChannelName(socketID: string, channelName: string): NSURLRequest {
		let endpoint = this._URL;

		if (this._params) {
			Object.keys(this._params).forEach((key, index) => {
				const val = this._params[key];
				if (index === 0) {
					endpoint = `${endpoint}?${key}=${val}`;
				} else {
					endpoint = `${endpoint}&${key}=${val}`;
				}
			});
		}

		const request = NSMutableURLRequest.alloc().initWithURL(NSURL.alloc().initWithString(endpoint));
		const dataStr = NSString.stringWithString(`socket_id=${socketID}&channel_name=${channelName}`);
		const data = dataStr.dataUsingEncoding(NSUTF8StringEncoding);
		request.HTTPBody = data;
		request.HTTPMethod = 'POST';
		Object.keys(this._headers).forEach((key) => {
			const val = this._headers[key];
			request.addValueForHTTPHeaderField(val, key);
		});
		return request;
	}
}

@NativeClass()
@ObjCClass(Authorizer)
class PusherAuthorizer extends NSObject implements Authorizer {
	_owner: WeakRef<NSCAuthorizer>;

	public static initWithOwner(owner: WeakRef<NSCAuthorizer>) {
		const auth = PusherAuthorizer.alloc().init() as PusherAuthorizer;
		auth._owner = owner;
		return auth;
	}

	fetchAuthValueWithSocketIDChannelNameCompletionHandler(socketID: string, channelName: string, completionHandler: (p1: PusherAuth) => void) {
		const owner = this._owner.get();
		if (owner) {
			owner._currentHandler = completionHandler;
			owner.callback(channelName, socketID);
		} else {
			completionHandler(null);
		}
	}
}

@NativeClass()
@ObjCClass(PusherDelegate)
class PusherDelegateImpl extends NSObject implements PusherDelegate {
	_owner: WeakRef<NSCPusher>;

	public static initWithOwner(owner: WeakRef<NSCPusher>) {
		const delegate = PusherDelegateImpl.new() as PusherDelegateImpl;
		delegate._owner = owner;
		return delegate;
	}

	private static _getState(state: ConnectionState) {
		switch (state) {
			case ConnectionState.Connected:
				return ConnectionStatus.CONNECTED;
			case ConnectionState.Connecting:
				return ConnectionStatus.CONNECTING;
			case ConnectionState.Disconnecting:
				return ConnectionStatus.DISCONNECTING;
			case ConnectionState.Reconnecting:
				return ConnectionStatus.RECONNECTING;
			default:
				return ConnectionStatus.DISCONNECTED;
		}
	}

	changedConnectionStateFromTo(old: ConnectionState, new_: ConnectionState): void {
		const owner = this._owner.get();
		if (owner) {
			const current = PusherDelegateImpl._getState(new_);
			const previous = PusherDelegateImpl._getState(old);
			owner.connection._state = current;
			const didConnect = (old === ConnectionState.Connecting && new_ === ConnectionState.Connected) || (old === ConnectionState.Reconnecting && new_ === ConnectionState.Connected);
			owner._connectionEvents.forEach((data, callback) => {
				if (data.event === 'connected' && didConnect) {
					callback();
				}

				if (data.event === 'state_change') {
					callback({
						previous,
						current,
					});
				}
			});
		}
	}

	debugLogWithMessage(message: string): void {}

	failedToSubscribeToChannelWithNameResponseDataError(name: string, response: NSURLResponse, data: string, error: NSError): void {
		const owner = this._owner.get();
		if (owner) {
			owner._channelEvents.forEach((event, callback) => {
				if (event.channelName === name && event.event === 'pusher:subscription_error') {
					let parsed_data = data;
					try {
						parsed_data = JSON.parse(data);
					} catch (e) {}
					callback({
						channelName: name,
						data: parsed_data,
					});
				}
			});
		}
	}

	subscribedToChannelWithName(name: string): void {
		const owner = this._owner.get();
		if (owner) {
			owner._channelEvents.forEach((event, callback) => {
				if (event.channelName === name && event.event === 'pusher:subscription_succeeded') {
					callback();
				}
			});
		}
	}
}
