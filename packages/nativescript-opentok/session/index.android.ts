import { Observable, Application, fromObject } from '@nativescript/core';
import { TNSSessionSettings, TNSStreamVideoType } from '../common';
import { TNSPublisher } from '../publisher';
import { TNSSubscriber } from '../subscriber';

export * from '../common';

let TNSOTSessionListener;
function ensureClass() {
	if (TNSOTSessionListener) {
		return;
	}
	@NativeClass()
	@Interfaces([com.opentok.android.Session.SessionListener, com.opentok.android.Session.ConnectionListener, com.opentok.android.Session.ReconnectionListener, com.opentok.android.Session.ArchiveListener, com.opentok.android.Session.SignalListener, com.opentok.android.Session.StreamPropertiesListener, com.opentok.android.Session.MuteListener])
	class TNSOTSessionListenerImpl extends java.lang.Object implements com.opentok.android.Session.SessionListener, com.opentok.android.Session.ConnectionListener, com.opentok.android.Session.ReconnectionListener, com.opentok.android.Session.ArchiveListener, com.opentok.android.Session.SignalListener, com.opentok.android.Session.StreamPropertiesListener, com.opentok.android.Session.MuteListener {
		_owner: WeakRef<TNSSession>;
		constructor(owner: WeakRef<TNSSession>) {
			super();
			this._owner = owner;
			return global.__native(this);
		}
		public onStreamReceived(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void {
			this._owner?.get?.().notify({
				eventName: 'streamReceived',
				object: fromObject({}),
				session: this._owner?.get?.(),
				stream: TNSStream.fromNativeObject(param1),
			});
		}
		public onDisconnected(param0: com.opentok.android.Session): void {
			this._owner?.get?.().notify({
				eventName: 'disconnected',
				object: fromObject({}),
				session: this._owner?.get?.(),
			});
		}
		public onStreamDropped(param0: com.opentok.android.Session, param1: com.opentok.android.Stream): void {
			this._owner?.get?.().notify({
				eventName: 'streamDropped',
				object: fromObject({}),
				session: this._owner?.get?.(),
				stream: TNSStream.fromNativeObject(param1),
			});
		}
		public onError(param0: com.opentok.android.Session, param1: com.opentok.android.OpentokError): void {
			this._owner?.get?.().notify({
				eventName: 'error',
				object: fromObject({}),
				session: this._owner?.get?.(),
				error: {
					message: param1.errorMessage,
					native: param1,
				},
			});
		}
		public onConnected(param0: com.opentok.android.Session): void {
			this._owner?.get?.().notify({
				eventName: 'connected',
				object: fromObject({}),
				session: this._owner?.get?.(),
			});
		}
		public onConnectionDestroyed(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void {
			this._owner?.get?.().notify({
				eventName: 'connectionDestroyed',
				object: fromObject({}),
				session: this._owner?.get?.(),
				connection: TNSConnection.fromNativeObject(param1),
			});
		}
		public onConnectionCreated(param0: com.opentok.android.Session, param1: com.opentok.android.Connection): void {
			this._owner?.get?.().notify({
				eventName: 'connectionCreated',
				object: fromObject({}),
				session: this._owner?.get?.(),
				connection: TNSConnection.fromNativeObject(param1),
			});
		}
		public onReconnected(param0: com.opentok.android.Session): void {
			this._owner?.get?.().notify({
				eventName: 'reconnected',
				object: fromObject({}),
				session: this._owner?.get?.(),
			});
		}
		public onReconnecting(param0: com.opentok.android.Session): void {
			this._owner?.get?.().notify({
				eventName: 'reconnecting',
				object: fromObject({}),
				session: this._owner?.get?.(),
			});
		}
		public onArchiveStopped(param0: com.opentok.android.Session, param1: string): void {
			this._owner?.get?.().notify({
				eventName: 'archiveStopped',
				object: fromObject({}),
				session: this._owner?.get?.(),
				archiveId: param1,
			});
		}
		public onArchiveStarted(param0: com.opentok.android.Session, param1: string, param2: string): void {
			this._owner?.get?.().notify({
				eventName: 'archiveStarted',
				object: fromObject({}),
				session: this._owner?.get?.(),
				archiveId: param1,
				name: param2,
			});
		}
		public onSignalReceived(param0: com.opentok.android.Session, param1: string, param2: string, param3: com.opentok.android.Connection): void {
			this._owner?.get?.().notify({
				eventName: 'signalReceived',
				object: fromObject({}),
				session: this._owner?.get?.(),
				type: param1,
				string: param2,
				connection: TNSConnection.fromNativeObject(param3),
			});
		}
		public onStreamVideoTypeChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: com.opentok.android.Stream.StreamVideoType): void {}
		public onStreamVideoDimensionsChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: number, param3: number): void {}
		public onStreamHasVideoChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void {}
		public onStreamHasAudioChanged(param0: com.opentok.android.Session, param1: com.opentok.android.Stream, param2: boolean): void {}
		public onMuteForced(param0: com.opentok.android.Session, param1: com.opentok.android.MuteForcedInfo): void {
			this._owner?.get?.().notify({
				eventName: 'muteForced',
				object: fromObject({}),
				session: this._owner?.get?.(),
			});
		}
	}

	TNSOTSessionListener = TNSOTSessionListenerImpl;
}

export class TNSConnection {
	private _native: com.opentok.android.Connection;
	static fromNativeObject(connection) {
		if (!connection) {
			return null;
		}
		const nativeConnection = new TNSConnection();
		nativeConnection._native = connection;
		return nativeConnection;
	}

	get connectionId(): string {
		return this._native.getConnectionId();
	}

	get creationTime(): Date {
		return this._native.getCreationTime() as any;
	}

	get data(): string {
		return this._native.getData();
	}

	get android() {
		return this._native;
	}
}

export class TNSStream {
	private _native: com.opentok.android.Stream;
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

	get android() {
		return this._native;
	}

	get connection(): TNSConnection {
		if (!this._connection) {
			this._connection = TNSConnection.fromNativeObject(this._native.getConnection());
		}
		return this._connection;
	}

	get creationTime(): Date {
		return this._native.getCreationTime() as any;
	}

	get hasAudio(): boolean {
		return this._native.hasAudio();
	}

	get hasVideo(): boolean {
		return this._native.hasVideo();
	}

	get name(): string {
		return this._native.getName();
	}

	get session(): TNSSession {
		if (!this._session) {
			this._session = TNSSession.fromNativeObject(this._native.getSession());
		}
		return this._session;
	}

	get streamId(): string {
		return this._native.getStreamId();
	}

	get videoDimensions(): { width: number; height: number } {
		return {
			width: this._native.getVideoWidth(),
			height: this._native.getVideoHeight(),
		};
	}

	get videoType(): TNSStreamVideoType {
		switch (this._native.getStreamVideoType()) {
			case com.opentok.android.Stream.StreamVideoType.StreamVideoTypeScreen:
				return TNSStreamVideoType.Screen;
			case com.opentok.android.Stream.StreamVideoType.StreamVideoTypeCamera:
				return TNSStreamVideoType.Camera;
			case com.opentok.android.Stream.StreamVideoType.StreamVideoTypeCustom:
				return TNSStreamVideoType.Custom;
		}
	}
}

export class TNSSessionCapabilities {
	private _native: com.opentok.android.Session.Capabilities;
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
}

export class TNSSession extends Observable {
	private _native: com.opentok.android.Session;
	private _listener;

	static fromNativeObject(session) {
		if (!session) {
			return null;
		}
		const nativeSession = new TNSSession();
		nativeSession._native = session;
		return nativeSession;
	}

	static initSession(apiKey: string, sessionId: string, settings?: TNSSessionSettings) {
		const activity = Application.android.foregroundActivity || Application.android.startActivity;
		const builder = new com.opentok.android.Session.Builder(activity, apiKey, sessionId);
		if (settings) {
			if (typeof settings?.connectionEventsSuppressed === 'boolean') {
				builder.connectionEventsSuppressed(settings.connectionEventsSuppressed as any);
			}

			if (settings?.apiURL) {
				try {
					builder.setApiUrl(new java.net.URL(settings.apiURL));
				} catch (e) {}
			}

			if (settings?.proxyURL) {
				builder.setProxyUrl(settings.proxyURL);
			}
		}

		const nativeSession = new TNSSession();
		nativeSession._native = builder.build();
		ensureClass();
		nativeSession._listener = new TNSOTSessionListener(new WeakRef(nativeSession));
		nativeSession._native.setConnectionListener(nativeSession._listener);
		nativeSession._native.setSessionListener(nativeSession._listener);
		nativeSession._native.setReconnectionListener(nativeSession._listener);
		nativeSession._native.setArchiveListener(nativeSession._listener);
		nativeSession._native.setMuteListener(nativeSession._listener);
		nativeSession._native.setSignalListener(nativeSession._listener);
		return nativeSession;
	}

	get sessionId() {
		return this.android.getSessionId();
	}

	connect(token: string) {
		this.android.connect(token);
	}

	disconnect() {
		this.android.disconnect();
	}

	forceMuteAll(excludedStreams: TNSStream[]) {
		const list = java.util.Arrays.asList(excludedStreams.map((item) => item.android));
		const options = new com.opentok.android.ForceMuteOptions(list);
		this.android.forceMuteAll(options);
	}

	forceMuteStream(stream: TNSStream) {
		const options = new com.opentok.android.ForceMuteOptions(stream.android);
		this.android.forceMuteStream(options);
	}

	get capabilities() {
		return TNSSessionCapabilities.fromNativeObject(this.android.getCapabilities());
	}

	publish(publisher: TNSPublisher) {
		if (publisher?.android) {
			this.android.publish(publisher.android);
			this.android.unpublish;
		}
	}

	unpublish(publisher: TNSPublisher) {
		if (publisher?.android) {
			this.android.unpublish(publisher.android);
		}
	}

	subscribe(subscriber: TNSSubscriber) {
		if (subscriber?.android) {
			this.android.subscribe(subscriber.android);
		}
	}

	unsubscribe(subscriber: TNSSubscriber) {
		if (subscriber?.android) {
			this.android.unsubscribe(subscriber.android);
		}
	}

	get android() {
		return this._native;
	}
}
