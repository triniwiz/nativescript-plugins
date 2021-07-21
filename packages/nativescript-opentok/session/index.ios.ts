import { fromObject, Observable } from '@nativescript/core';
import { TNSSessionSettings, TNSStreamVideoType } from '../common';
import { TNSPublisher } from '../publisher';
import { TNSSubscriber } from '../subscriber';

export * from '../common';

@NativeClass()
@ObjCClass(OTSessionDelegate)
class OTSessionDelegateImpl extends NSObject implements OTSessionDelegate {
	_owner: WeakRef<TNSSession>;

	static initWithOwner(owner: WeakRef<TNSSession>): OTSessionDelegateImpl {
		const delegate = <OTSessionDelegateImpl>OTSessionDelegateImpl.new();
		delegate._owner = owner;
		return delegate;
	}

	sessionArchiveStartedWithIdName(session: OTSession, archiveId: string, name: string): void {
		this._owner?.get?.().notify({
			eventName: 'archiveStarted',
			object: fromObject({}),
			session: this._owner.get?.(),
			archiveId,
			name,
		});
	}
	sessionArchiveStoppedWithId(session: OTSession, archiveId: string): void {
		this._owner?.get?.().notify({
			eventName: 'archiveStopped',
			object: fromObject({}),
			session: this._owner.get?.(),
			archiveId,
		});
	}
	sessionConnectionCreated(session: OTSession, connection: OTConnection): void {
		this._owner?.get?.().notify({
			eventName: 'connectionCreated',
			object: fromObject({}),
			session: this._owner.get?.(),
			connection: TNSConnection.fromNativeObject(connection),
		});
	}
	sessionConnectionDestroyed(session: OTSession, connection: OTConnection): void {
		this._owner?.get?.().notify({
			eventName: 'connectionDestroyed',
			object: fromObject({}),
			session: this._owner.get?.(),
			connection: TNSConnection.fromNativeObject(connection),
		});
	}
	sessionDidBeginReconnecting(session: OTSession): void {
		this._owner?.get?.().notify({
			eventName: 'reconnecting',
			object: fromObject({}),
			session: this._owner.get?.(),
		});
	}
	sessionDidConnect(session: OTSession): void {
		this._owner?.get?.().notify({
			eventName: 'connected',
			object: fromObject({}),
			session: this._owner.get?.(),
		});
	}
	sessionDidDisconnect(session: OTSession): void {
		this._owner?.get?.().notify({
			eventName: 'disconnected',
			object: fromObject({}),
			session: this._owner.get?.(),
		});
	}
	sessionDidFailWithError(session: OTSession, error: OTError): void {
		this._owner?.get?.().notify({
			eventName: 'error',
			object: fromObject({}),
			session: this._owner.get?.(),
			error: {
				message: error.localizedDescription,
				native: error,
			},
		});
	}
	sessionDidReconnect(session: OTSession): void {
		this._owner?.get?.().notify({
			eventName: 'reconnected',
			object: fromObject({}),
			session: this._owner.get?.(),
		});
	}
	sessionMuteForced(session: OTSession, muteForcedInfo: OTMuteForcedInfo): void {
		this._owner?.get?.().notify({
			eventName: 'muteForced',
			object: fromObject({}),
			session: this._owner?.get?.(),
		});
	}
	sessionReceivedSignalTypeFromConnectionWithString(session: OTSession, type: string, connection: OTConnection, string: string): void {
		this._owner?.get?.().notify({
			eventName: 'receivedSignal',
			object: fromObject({}),
			session: this._owner.get?.(),
			type,
			connection: TNSConnection.fromNativeObject(connection),
			string,
		});
	}
	sessionStreamCreated(session: OTSession, stream: OTStream): void {
		this._owner?.get?.().notify({
			eventName: 'streamReceived',
			object: fromObject({}),
			stream: TNSStream.fromNativeObject(stream),
			session: this._owner.get?.(),
		});
	}
	sessionStreamDestroyed(session: OTSession, stream: OTStream): void {
		this._owner?.get?.().notify({
			eventName: 'streamDropped',
			object: fromObject({}),
			stream: TNSStream.fromNativeObject(stream),
			session: this._owner.get?.(),
		});
	}
}

export class TNSConnection {
	private _native: OTConnection;
	static fromNativeObject(connection) {
		if (!connection) {
			return null;
		}
		const nativeConnection = new TNSConnection();
		nativeConnection._native = connection;
		return nativeConnection;
	}

	get connectionId(): string {
		return this._native.connectionId;
	}

	get creationTime(): Date {
		return this._native.creationTime;
	}

	get data(): string {
		return this._native.data;
	}

	get ios() {
		return this._native;
	}
}

export class TNSStream {
	private _native: OTStream;
	static fromNativeObject(stream) {
		if (!stream) {
			return null;
		}
		const nativeStream = new TNSStream();
		nativeStream._native = stream;
		return nativeStream;
	}

	private _connection: TNSConnection;
	private _session: TNSSession;

	get ios() {
		return this._native;
	}

	get connection(): TNSConnection {
		if (!this._connection) {
			this._connection = TNSConnection.fromNativeObject(this._native.connection);
		}
		return this._connection;
	}

	get creationTime(): Date {
		return this._native.creationTime;
	}

	get hasAudio(): boolean {
		return this._native.hasAudio;
	}

	get hasVideo(): boolean {
		return this._native.hasVideo;
	}

	get name(): string {
		return this._native.name;
	}

	get session(): TNSSession {
		if (!this._session) {
			this._session = TNSSession.fromNativeObject(this._native.session);
		}
		return this._session;
	}

	get streamId(): string {
		return this._native.streamId;
	}

	get videoDimensions(): { width: number; height: number } {
		const videoDimensions = this._native.videoDimensions;
		return {
			width: videoDimensions.width,
			height: videoDimensions.height,
		};
	}

	get videoType(): TNSStreamVideoType {
		switch (this._native.videoType) {
			case OTStreamVideoType.Screen:
				return TNSStreamVideoType.Screen;
			case OTStreamVideoType.Camera:
				return TNSStreamVideoType.Camera;
			case OTStreamVideoType.Custom:
				return TNSStreamVideoType.Custom;
		}
	}
}

export class TNSSessionCapabilities {
	private _native: OTSessionCapabilities;
	static fromNativeObject(capabilities) {
		if (!capabilities) {
			return null;
		}
		const nativeCapabilities = new TNSSessionCapabilities();
		nativeCapabilities._native = capabilities;
		return nativeCapabilities;
	}

	get canForceMute(): boolean {
		return this._native.canForceMute;
	}

	get canPublish(): boolean {
		return this._native.canPublish;
	}

	get canSubscribe(): boolean {
		return this._native.canSubscribe;
	}

	get ios() {
		return this._native;
	}
}

export class TNSSession extends Observable {
	private _native: OTSession;
	private _delegate: OTSessionDelegateImpl;

	static fromNativeObject(session) {
		if (!session) {
			return null;
		}
		const nativeSession = new TNSSession();
		nativeSession._native = session;
		return nativeSession;
	}

	static initSession(apiKey: string, sessionId: string, settings?: TNSSessionSettings) {
		const session = new TNSSession();
		const delegate = OTSessionDelegateImpl.initWithOwner(new WeakRef(session));
		session._delegate = delegate;
		if (settings) {
			const nativeSettings = OTSessionSettings.new();
			if (settings?.apiURL) {
				nativeSettings.apiURL = NSURL.URLWithString(settings.apiURL);
			}

			if (settings?.connectionEventsSuppressed) {
				nativeSettings.connectionEventsSuppressed = settings.connectionEventsSuppressed;
			}

			session._native = OTSession.alloc().initWithApiKeySessionIdDelegateSettings(apiKey, sessionId, delegate, nativeSettings);
		} else {
			session._native = OTSession.alloc().initWithApiKeySessionIdDelegate(apiKey, sessionId, delegate);
		}
		return session;
	}

	get sessionId() {
		return this.ios.sessionId;
	}

	connect(token: string) {
		const error = new interop.Reference<OTError>();
		this.ios.connectWithTokenError(token, error);
		if (error.value) {
			this.notify({
				eventName: 'error',
				object: fromObject({}),
				message: error.value.localizedDescription,
				native: error,
			});
		}
	}

	disconnect() {
		const error = new interop.Reference<OTError>();
		this.ios.disconnect(error);
		if (error.value) {
			this.notify({
				eventName: 'error',
				object: fromObject({}),
				message: error.value.localizedDescription,
				native: error,
			});
		}
	}

	forceMuteAll(excludedStreams: TNSStream[]) {
		const error = new interop.Reference<OTError>();
		this.ios.forceMuteAllOptionsError(
			excludedStreams.map((item) => item.ios),
			OTForceMuteOptions.new(),
			error
		);
		if (error.value) {
			this.notify({
				eventName: 'error',
				object: fromObject({}),
				message: error.value.localizedDescription,
				native: error,
			});
		}
	}

	forceMuteStream(stream: TNSStream) {
		const error = new interop.Reference<OTError>();
		this.ios.forceMuteStreamOptionsError(stream.ios, OTForceMuteOptions.new(), error);
		if (error.value) {
			this.notify({
				eventName: 'error',
				object: fromObject({}),
				message: error.value.localizedDescription,
				native: error,
			});
		}
	}

	get capabilities() {
		return TNSSessionCapabilities.fromNativeObject(this.ios.capabilities);
	}

	publish(publisher: TNSPublisher) {
		if (publisher?.ios) {
			this.ios.publish(publisher.ios);
		}
	}

	unpublish(publisher: TNSPublisher) {
		if (publisher?.ios) {
			this.ios.unpublish(publisher.ios);
		}
	}

	subscribe(subscriber: TNSSubscriber) {
		if (subscriber?.ios) {
			this.ios.subscribe(subscriber.ios);
		}
	}

	unsubscribe(subscriber: TNSSubscriber) {
		if (subscriber?.ios) {
			this.ios.unsubscribe(subscriber.ios);
		}
	}

	get ios() {
		return this._native;
	}
}
