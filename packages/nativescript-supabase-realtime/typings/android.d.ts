declare module org {
	export module java_websocket {
		export abstract class AbstractWebSocket extends org.java_websocket.WebSocketAdapter {
			public static class: java.lang.Class<org.java_websocket.AbstractWebSocket>;
			public setConnectionLostTimeout(param0: number): void;
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
			public onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
			public startConnectionLostTimer(): void;
			public onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
			public onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
			public onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
			public onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public stopConnectionLostTimer(): void;
			public onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
			public onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
			public getConnectionLostTimeout(): number;
			public onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public onWriteDemand(param0: org.java_websocket.WebSocket): void;
			public isReuseAddr(): boolean;
			public constructor();
			public getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
			public onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
			public setReuseAddr(param0: boolean): void;
			public isTcpNoDelay(): boolean;
			public onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
			public onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
			public getConnections(): java.util.Collection<org.java_websocket.WebSocket>;
			public getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public setTcpNoDelay(param0: boolean): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export class AbstractWrappedByteChannel extends org.java_websocket.WrappedByteChannel {
			public static class: java.lang.Class<org.java_websocket.AbstractWrappedByteChannel>;
			public isOpen(): boolean;
			public write(param0: java.nio.ByteBuffer): number;
			public isNeedRead(): boolean;
			public isNeedWrite(): boolean;
			public readMore(param0: java.nio.ByteBuffer): number;
			public isBlocking(): boolean;
			/** @deprecated */
			public constructor(param0: org.java_websocket.WrappedByteChannel);
			/** @deprecated */
			public constructor(param0: java.nio.channels.ByteChannel);
			public close(): void;
			public read(param0: java.nio.ByteBuffer): number;
			public writeMore(): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export class SSLSocketChannel implements org.java_websocket.WrappedByteChannel, org.java_websocket.interfaces.ISSLChannel {
			public static class: java.lang.Class<org.java_websocket.SSLSocketChannel>;
			public write(param0: java.nio.ByteBuffer): number;
			public isNeedRead(): boolean;
			public isOpen(): boolean;
			public isNeedWrite(): boolean;
			public readMore(param0: java.nio.ByteBuffer): number;
			public isBlocking(): boolean;
			public close(): void;
			public read(param0: java.nio.ByteBuffer): number;
			public writeMore(): void;
			public getSSLEngine(): javax.net.ssl.SSLEngine;
			public constructor(param0: java.nio.channels.SocketChannel, param1: javax.net.ssl.SSLEngine, param2: java.util.concurrent.ExecutorService, param3: java.nio.channels.SelectionKey);
		}
	}
}

declare module org {
	export module java_websocket {
		export class SSLSocketChannel2 implements org.java_websocket.WrappedByteChannel, org.java_websocket.interfaces.ISSLChannel {
			public static class: java.lang.Class<org.java_websocket.SSLSocketChannel2>;
			public static emptybuffer: java.nio.ByteBuffer;
			public exec: java.util.concurrent.ExecutorService;
			public tasks: java.util.List<java.util.concurrent.Future<any>>;
			public inData: java.nio.ByteBuffer;
			public outCrypt: java.nio.ByteBuffer;
			public inCrypt: java.nio.ByteBuffer;
			public socketChannel: java.nio.channels.SocketChannel;
			public selectionKey: java.nio.channels.SelectionKey;
			public sslEngine: javax.net.ssl.SSLEngine;
			public readEngineResult: javax.net.ssl.SSLEngineResult;
			public writeEngineResult: javax.net.ssl.SSLEngineResult;
			public bufferallocations: number;
			public write(param0: java.nio.ByteBuffer): number;
			public readMore(param0: java.nio.ByteBuffer): number;
			public isBlocking(): boolean;
			public connect(param0: java.net.SocketAddress): boolean;
			public read(param0: java.nio.ByteBuffer): number;
			public getSSLEngine(): javax.net.ssl.SSLEngine;
			public isOpen(): boolean;
			public isNeedRead(): boolean;
			public isNeedWrite(): boolean;
			public configureBlocking(param0: boolean): java.nio.channels.SelectableChannel;
			public isConnected(): boolean;
			public consumeDelegatedTasks(): void;
			public createBuffers(param0: javax.net.ssl.SSLSession): void;
			public isInboundDone(): boolean;
			public close(): void;
			public finishConnect(): boolean;
			public writeMore(): void;
			public constructor(param0: java.nio.channels.SocketChannel, param1: javax.net.ssl.SSLEngine, param2: java.util.concurrent.ExecutorService, param3: java.nio.channels.SelectionKey);
			public socket(): java.net.Socket;
		}
	}
}

declare module org {
	export module java_websocket {
		export class SocketChannelIOHelper {
			public static class: java.lang.Class<org.java_websocket.SocketChannelIOHelper>;
			public static batch(param0: org.java_websocket.WebSocketImpl, param1: java.nio.channels.ByteChannel): boolean;
			public static readMore(param0: java.nio.ByteBuffer, param1: org.java_websocket.WebSocketImpl, param2: org.java_websocket.WrappedByteChannel): boolean;
			public static read(param0: java.nio.ByteBuffer, param1: org.java_websocket.WebSocketImpl, param2: java.nio.channels.ByteChannel): boolean;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WebSocket {
			public static class: java.lang.Class<org.java_websocket.WebSocket>;
			/**
			 * Constructs a new instance of the org.java_websocket.WebSocket interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				close(param0: number, param1: string): void;
				close(param0: number): void;
				close(): void;
				closeConnection(param0: number, param1: string): void;
				send(param0: string): void;
				send(param0: java.nio.ByteBuffer): void;
				send(param0: native.Array<number>): void;
				sendFrame(param0: org.java_websocket.framing.Framedata): void;
				sendFrame(param0: java.util.Collection<org.java_websocket.framing.Framedata>): void;
				sendPing(): void;
				sendFragmentedFrame(param0: org.java_websocket.enums.Opcode, param1: java.nio.ByteBuffer, param2: boolean): void;
				hasBufferedData(): boolean;
				getRemoteSocketAddress(): java.net.InetSocketAddress;
				getLocalSocketAddress(): java.net.InetSocketAddress;
				isOpen(): boolean;
				isClosing(): boolean;
				isFlushAndClose(): boolean;
				isClosed(): boolean;
				getDraft(): org.java_websocket.drafts.Draft;
				getReadyState(): org.java_websocket.enums.ReadyState;
				getResourceDescriptor(): string;
				setAttachment(param0: any): void;
				getAttachment(): any;
				hasSSLSupport(): boolean;
				getSSLSession(): javax.net.ssl.SSLSession;
				getProtocol(): org.java_websocket.protocols.IProtocol;
			});
			public constructor();
			public isClosed(): boolean;
			public isClosing(): boolean;
			public sendFrame(param0: java.util.Collection<org.java_websocket.framing.Framedata>): void;
			public setAttachment(param0: any): void;
			public getLocalSocketAddress(): java.net.InetSocketAddress;
			public isOpen(): boolean;
			public send(param0: string): void;
			public send(param0: native.Array<number>): void;
			public hasBufferedData(): boolean;
			public sendPing(): void;
			public close(): void;
			public hasSSLSupport(): boolean;
			public getProtocol(): org.java_websocket.protocols.IProtocol;
			public isFlushAndClose(): boolean;
			public getAttachment(): any;
			public close(param0: number): void;
			public getSSLSession(): javax.net.ssl.SSLSession;
			public getReadyState(): org.java_websocket.enums.ReadyState;
			public getResourceDescriptor(): string;
			public send(param0: java.nio.ByteBuffer): void;
			public sendFragmentedFrame(param0: org.java_websocket.enums.Opcode, param1: java.nio.ByteBuffer, param2: boolean): void;
			public sendFrame(param0: org.java_websocket.framing.Framedata): void;
			public getDraft(): org.java_websocket.drafts.Draft;
			public closeConnection(param0: number, param1: string): void;
			public getRemoteSocketAddress(): java.net.InetSocketAddress;
			public close(param0: number, param1: string): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export abstract class WebSocketAdapter extends org.java_websocket.WebSocketListener {
			public static class: java.lang.Class<org.java_websocket.WebSocketAdapter>;
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
			public onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
			public onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
			public onWriteDemand(param0: org.java_websocket.WebSocket): void;
			public onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
			public constructor();
			public getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
			public onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
			public onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
			public onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
			public onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
			public onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
			public onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WebSocketFactory {
			public static class: java.lang.Class<org.java_websocket.WebSocketFactory>;
			/**
			 * Constructs a new instance of the org.java_websocket.WebSocketFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
			});
			public constructor();
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WebSocketImpl extends org.java_websocket.WebSocket {
			public static class: java.lang.Class<org.java_websocket.WebSocketImpl>;
			public static DEFAULT_PORT: number;
			public static DEFAULT_WSS_PORT: number;
			public static RCVBUF: number;
			public outQueue: java.util.concurrent.BlockingQueue<java.nio.ByteBuffer>;
			public inQueue: java.util.concurrent.BlockingQueue<java.nio.ByteBuffer>;
			public isClosed(): boolean;
			public isClosing(): boolean;
			public setChannel(param0: java.nio.channels.ByteChannel): void;
			public sendFrame(param0: java.util.Collection<org.java_websocket.framing.Framedata>): void;
			public decode(param0: java.nio.ByteBuffer): void;
			public getWebSocketListener(): org.java_websocket.WebSocketListener;
			public getChannel(): java.nio.channels.ByteChannel;
			public setAttachment(param0: any): void;
			public getLocalSocketAddress(): java.net.InetSocketAddress;
			public getWorkerThread(): org.java_websocket.server.WebSocketServer.WebSocketWorker;
			public constructor(param0: org.java_websocket.WebSocketListener, param1: org.java_websocket.drafts.Draft);
			public isOpen(): boolean;
			public send(param0: string): void;
			public eot(): void;
			public send(param0: native.Array<number>): void;
			public hasBufferedData(): boolean;
			public closeConnection(param0: number, param1: string, param2: boolean): void;
			public closeConnection(param0: number, param1: boolean): void;
			public sendPing(): void;
			public flushAndClose(param0: number, param1: string, param2: boolean): void;
			public close(): void;
			public updateLastPong(): void;
			public hasSSLSupport(): boolean;
			public close(param0: org.java_websocket.exceptions.InvalidDataException): void;
			public getProtocol(): org.java_websocket.protocols.IProtocol;
			public closeConnection(): void;
			public isFlushAndClose(): boolean;
			public constructor(param0: org.java_websocket.WebSocketListener, param1: java.util.List<org.java_websocket.drafts.Draft>);
			public startHandshake(param0: org.java_websocket.handshake.ClientHandshakeBuilder): void;
			public getAttachment(): any;
			public close(param0: number): void;
			public getSSLSession(): javax.net.ssl.SSLSession;
			public getReadyState(): org.java_websocket.enums.ReadyState;
			public getResourceDescriptor(): string;
			public send(param0: java.nio.ByteBuffer): void;
			public sendFragmentedFrame(param0: org.java_websocket.enums.Opcode, param1: java.nio.ByteBuffer, param2: boolean): void;
			public close(param0: number, param1: string, param2: boolean): void;
			public getSelectionKey(): java.nio.channels.SelectionKey;
			public sendFrame(param0: org.java_websocket.framing.Framedata): void;
			public toString(): string;
			public getDraft(): org.java_websocket.drafts.Draft;
			public closeConnection(param0: number, param1: string): void;
			public getRemoteSocketAddress(): java.net.InetSocketAddress;
			public setWorkerThread(param0: org.java_websocket.server.WebSocketServer.WebSocketWorker): void;
			public setSelectionKey(param0: java.nio.channels.SelectionKey): void;
			public close(param0: number, param1: string): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WebSocketListener {
			public static class: java.lang.Class<org.java_websocket.WebSocketListener>;
			/**
			 * Constructs a new instance of the org.java_websocket.WebSocketListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
				onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
				onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
				onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
				onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
				onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
				onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
				onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
				onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
				onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				onWriteDemand(param0: org.java_websocket.WebSocket): void;
				getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
				getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			});
			public constructor();
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
			public onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
			public onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
			public onWriteDemand(param0: org.java_websocket.WebSocket): void;
			public onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
			public getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
			public onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
			public onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
			public onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
			public onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
			public onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
			public onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
			public getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
			public onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WebSocketServerFactory extends org.java_websocket.WebSocketFactory {
			public static class: java.lang.Class<org.java_websocket.WebSocketServerFactory>;
			/**
			 * Constructs a new instance of the org.java_websocket.WebSocketServerFactory interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
				wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
				close(): void;
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
				createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
			});
			public constructor();
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
			public close(): void;
			public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
			public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
		}
	}
}

declare module org {
	export module java_websocket {
		export class WrappedByteChannel {
			public static class: java.lang.Class<org.java_websocket.WrappedByteChannel>;
			/**
			 * Constructs a new instance of the org.java_websocket.WrappedByteChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
			 */
			public constructor(implementation: {
				isNeedWrite(): boolean;
				writeMore(): void;
				isNeedRead(): boolean;
				readMore(param0: java.nio.ByteBuffer): number;
				isBlocking(): boolean;
			});
			public constructor();
			public isNeedRead(): boolean;
			public isNeedWrite(): boolean;
			public readMore(param0: java.nio.ByteBuffer): number;
			public isBlocking(): boolean;
			public writeMore(): void;
		}
	}
}

declare module org {
	export module java_websocket {
		export module client {
			export class DnsResolver {
				public static class: java.lang.Class<org.java_websocket.client.DnsResolver>;
				/**
				 * Constructs a new instance of the org.java_websocket.client.DnsResolver interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					resolve(param0: java.net.URI): java.net.InetAddress;
				});
				public constructor();
				public resolve(param0: java.net.URI): java.net.InetAddress;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module client {
			export abstract class WebSocketClient extends org.java_websocket.AbstractWebSocket implements org.java_websocket.WebSocket {
				public static class: java.lang.Class<org.java_websocket.client.WebSocketClient>;
				public uri: java.net.URI;
				public getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
				public addHeader(param0: string, param1: string): void;
				public getAttachment(): any;
				public onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				public sendFragmentedFrame(param0: org.java_websocket.enums.Opcode, param1: java.nio.ByteBuffer, param2: boolean): void;
				public onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				public getReadyState(): org.java_websocket.enums.ReadyState;
				public setSocketFactory(param0: javax.net.SocketFactory): void;
				public closeBlocking(): void;
				public constructor();
				public getURI(): java.net.URI;
				public reconnectBlocking(): boolean;
				public constructor(param0: java.net.URI, param1: org.java_websocket.drafts.Draft, param2: java.util.Map<string,string>, param3: number);
				public connect(): void;
				public send(param0: native.Array<number>): void;
				public onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
				public getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
				public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
				public onError(param0: java.lang.Exception): void;
				public send(param0: java.nio.ByteBuffer): void;
				public setDnsResolver(param0: org.java_websocket.client.DnsResolver): void;
				public onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
				public close(): void;
				public getResourceDescriptor(): string;
				public isClosed(): boolean;
				public isClosing(): boolean;
				public constructor(param0: java.net.URI, param1: java.util.Map<string,string>);
				public removeHeader(param0: string): string;
				public reconnect(): void;
				public onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
				public onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
				public connectBlocking(): boolean;
				public hasSSLSupport(): boolean;
				public getConnection(): org.java_websocket.WebSocket;
				public sendFrame(param0: org.java_websocket.framing.Framedata): void;
				public onClose(param0: number, param1: string, param2: boolean): void;
				public sendPing(): void;
				public sendFrame(param0: java.util.Collection<org.java_websocket.framing.Framedata>): void;
				public onCloseInitiated(param0: number, param1: string): void;
				public onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
				public close(param0: number): void;
				public onWriteDemand(param0: org.java_websocket.WebSocket): void;
				public onMessage(param0: string): void;
				public close(param0: number, param1: string): void;
				public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
				public onMessage(param0: java.nio.ByteBuffer): void;
				public onClosing(param0: number, param1: string, param2: boolean): void;
				public onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				public constructor(param0: java.net.URI, param1: org.java_websocket.drafts.Draft, param2: java.util.Map<string,string>);
				public constructor(param0: java.net.URI);
				public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
				public getProtocol(): org.java_websocket.protocols.IProtocol;
				public constructor(param0: java.net.URI, param1: org.java_websocket.drafts.Draft);
				public isFlushAndClose(): boolean;
				public run(): void;
				public setProxy(param0: java.net.Proxy): void;
				public getConnections(): java.util.Collection<org.java_websocket.WebSocket>;
				public connectBlocking(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
				public hasBufferedData(): boolean;
				public getLocalSocketAddress(): java.net.InetSocketAddress;
				public getSSLSession(): javax.net.ssl.SSLSession;
				public send(param0: string): void;
				public onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				/** @deprecated */
				public setSocket(param0: java.net.Socket): void;
				public setAttachment(param0: any): void;
				public clearHeaders(): void;
				public getSocket(): java.net.Socket;
				public onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
				public onSetSSLParameters(param0: javax.net.ssl.SSLParameters): void;
				public isOpen(): boolean;
				public closeConnection(param0: number, param1: string): void;
				public getDraft(): org.java_websocket.drafts.Draft;
				public onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
				public getRemoteSocketAddress(): java.net.InetSocketAddress;
			}
			export module WebSocketClient {
				export class WebsocketWriteThread {
					public static class: java.lang.Class<org.java_websocket.client.WebSocketClient.WebsocketWriteThread>;
					public run(): void;
				}
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module drafts {
			export abstract class Draft {
				public static class: java.lang.Class<org.java_websocket.drafts.Draft>;
				public role: org.java_websocket.enums.Role;
				public continuousFrameType: org.java_websocket.enums.Opcode;
				public copyInstance(): org.java_websocket.drafts.Draft;
				/** @deprecated */
				public createHandshake(param0: org.java_websocket.handshake.Handshakedata, param1: org.java_websocket.enums.Role, param2: boolean): java.util.List<java.nio.ByteBuffer>;
				public postProcessHandshakeResponseAsServer(param0: org.java_websocket.handshake.ClientHandshake, param1: org.java_websocket.handshake.ServerHandshakeBuilder): org.java_websocket.handshake.HandshakeBuilder;
				public static readLine(param0: java.nio.ByteBuffer): java.nio.ByteBuffer;
				public getCloseHandshakeType(): org.java_websocket.enums.CloseHandshakeType;
				public constructor();
				public processFrame(param0: org.java_websocket.WebSocketImpl, param1: org.java_websocket.framing.Framedata): void;
				public reset(): void;
				public acceptHandshakeAsServer(param0: org.java_websocket.handshake.ClientHandshake): org.java_websocket.enums.HandshakeState;
				public createBinaryFrame(param0: org.java_websocket.framing.Framedata): java.nio.ByteBuffer;
				public checkAlloc(param0: number): number;
				public basicAccept(param0: org.java_websocket.handshake.Handshakedata): boolean;
				public setParseMode(param0: org.java_websocket.enums.Role): void;
				public translateFrame(param0: java.nio.ByteBuffer): java.util.List<org.java_websocket.framing.Framedata>;
				public createHandshake(param0: org.java_websocket.handshake.Handshakedata, param1: boolean): java.util.List<java.nio.ByteBuffer>;
				public static translateHandshakeHttp(param0: java.nio.ByteBuffer, param1: org.java_websocket.enums.Role): org.java_websocket.handshake.HandshakeBuilder;
				public postProcessHandshakeRequestAsClient(param0: org.java_websocket.handshake.ClientHandshakeBuilder): org.java_websocket.handshake.ClientHandshakeBuilder;
				public toString(): string;
				public createFrames(param0: java.nio.ByteBuffer, param1: boolean): java.util.List<org.java_websocket.framing.Framedata>;
				public continuousFrame(param0: org.java_websocket.enums.Opcode, param1: java.nio.ByteBuffer, param2: boolean): java.util.List<org.java_websocket.framing.Framedata>;
				public translateHandshake(param0: java.nio.ByteBuffer): org.java_websocket.handshake.Handshakedata;
				public createFrames(param0: string, param1: boolean): java.util.List<org.java_websocket.framing.Framedata>;
				/** @deprecated */
				public createHandshake(param0: org.java_websocket.handshake.Handshakedata, param1: org.java_websocket.enums.Role): java.util.List<java.nio.ByteBuffer>;
				public static readStringLine(param0: java.nio.ByteBuffer): string;
				public acceptHandshakeAsClient(param0: org.java_websocket.handshake.ClientHandshake, param1: org.java_websocket.handshake.ServerHandshake): org.java_websocket.enums.HandshakeState;
				public getRole(): org.java_websocket.enums.Role;
				public createHandshake(param0: org.java_websocket.handshake.Handshakedata): java.util.List<java.nio.ByteBuffer>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module drafts {
			export class Draft_6455 extends org.java_websocket.drafts.Draft {
				public static class: java.lang.Class<org.java_websocket.drafts.Draft_6455>;
				public copyInstance(): org.java_websocket.drafts.Draft;
				public constructor(param0: java.util.List<org.java_websocket.extensions.IExtension>, param1: java.util.List<org.java_websocket.protocols.IProtocol>, param2: number);
				public postProcessHandshakeResponseAsServer(param0: org.java_websocket.handshake.ClientHandshake, param1: org.java_websocket.handshake.ServerHandshakeBuilder): org.java_websocket.handshake.HandshakeBuilder;
				public getCloseHandshakeType(): org.java_websocket.enums.CloseHandshakeType;
				public constructor();
				public constructor(param0: java.util.List<org.java_websocket.extensions.IExtension>, param1: number);
				public getProtocol(): org.java_websocket.protocols.IProtocol;
				public reset(): void;
				public processFrame(param0: org.java_websocket.WebSocketImpl, param1: org.java_websocket.framing.Framedata): void;
				public constructor(param0: java.util.List<org.java_websocket.extensions.IExtension>);
				public acceptHandshakeAsServer(param0: org.java_websocket.handshake.ClientHandshake): org.java_websocket.enums.HandshakeState;
				public createBinaryFrame(param0: org.java_websocket.framing.Framedata): java.nio.ByteBuffer;
				public hashCode(): number;
				public translateFrame(param0: java.nio.ByteBuffer): java.util.List<org.java_websocket.framing.Framedata>;
				public equals(param0: any): boolean;
				public constructor(param0: org.java_websocket.extensions.IExtension);
				public getExtension(): org.java_websocket.extensions.IExtension;
				public postProcessHandshakeRequestAsClient(param0: org.java_websocket.handshake.ClientHandshakeBuilder): org.java_websocket.handshake.ClientHandshakeBuilder;
				public toString(): string;
				public getKnownProtocols(): java.util.List<org.java_websocket.protocols.IProtocol>;
				public getMaxFrameSize(): number;
				public createFrames(param0: java.nio.ByteBuffer, param1: boolean): java.util.List<org.java_websocket.framing.Framedata>;
				public createFrames(param0: string, param1: boolean): java.util.List<org.java_websocket.framing.Framedata>;
				public acceptHandshakeAsClient(param0: org.java_websocket.handshake.ClientHandshake, param1: org.java_websocket.handshake.ServerHandshake): org.java_websocket.enums.HandshakeState;
				public constructor(param0: java.util.List<org.java_websocket.extensions.IExtension>, param1: java.util.List<org.java_websocket.protocols.IProtocol>);
				public getKnownExtensions(): java.util.List<org.java_websocket.extensions.IExtension>;
			}
			export module Draft_6455 {
				export class TranslatedPayloadMetaData {
					public static class: java.lang.Class<org.java_websocket.drafts.Draft_6455.TranslatedPayloadMetaData>;
				}
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module enums {
			export class CloseHandshakeType {
				public static class: java.lang.Class<org.java_websocket.enums.CloseHandshakeType>;
				public static NONE: org.java_websocket.enums.CloseHandshakeType;
				public static ONEWAY: org.java_websocket.enums.CloseHandshakeType;
				public static TWOWAY: org.java_websocket.enums.CloseHandshakeType;
				public static values(): native.Array<org.java_websocket.enums.CloseHandshakeType>;
				public static valueOf(param0: string): org.java_websocket.enums.CloseHandshakeType;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module enums {
			export class HandshakeState {
				public static class: java.lang.Class<org.java_websocket.enums.HandshakeState>;
				public static MATCHED: org.java_websocket.enums.HandshakeState;
				public static NOT_MATCHED: org.java_websocket.enums.HandshakeState;
				public static values(): native.Array<org.java_websocket.enums.HandshakeState>;
				public static valueOf(param0: string): org.java_websocket.enums.HandshakeState;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module enums {
			export class Opcode {
				public static class: java.lang.Class<org.java_websocket.enums.Opcode>;
				public static CONTINUOUS: org.java_websocket.enums.Opcode;
				public static TEXT: org.java_websocket.enums.Opcode;
				public static BINARY: org.java_websocket.enums.Opcode;
				public static PING: org.java_websocket.enums.Opcode;
				public static PONG: org.java_websocket.enums.Opcode;
				public static CLOSING: org.java_websocket.enums.Opcode;
				public static valueOf(param0: string): org.java_websocket.enums.Opcode;
				public static values(): native.Array<org.java_websocket.enums.Opcode>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module enums {
			export class ReadyState {
				public static class: java.lang.Class<org.java_websocket.enums.ReadyState>;
				public static NOT_YET_CONNECTED: org.java_websocket.enums.ReadyState;
				public static OPEN: org.java_websocket.enums.ReadyState;
				public static CLOSING: org.java_websocket.enums.ReadyState;
				public static CLOSED: org.java_websocket.enums.ReadyState;
				public static values(): native.Array<org.java_websocket.enums.ReadyState>;
				public static valueOf(param0: string): org.java_websocket.enums.ReadyState;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module enums {
			export class Role {
				public static class: java.lang.Class<org.java_websocket.enums.Role>;
				public static CLIENT: org.java_websocket.enums.Role;
				public static SERVER: org.java_websocket.enums.Role;
				public static valueOf(param0: string): org.java_websocket.enums.Role;
				public static values(): native.Array<org.java_websocket.enums.Role>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class IncompleteException {
				public static class: java.lang.Class<org.java_websocket.exceptions.IncompleteException>;
				public getPreferredSize(): number;
				public constructor(param0: number);
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class IncompleteHandshakeException {
				public static class: java.lang.Class<org.java_websocket.exceptions.IncompleteHandshakeException>;
				public getPreferredSize(): number;
				public constructor(param0: number);
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class InvalidDataException {
				public static class: java.lang.Class<org.java_websocket.exceptions.InvalidDataException>;
				public getCloseCode(): number;
				public constructor(param0: number, param1: string);
				public constructor(param0: number);
				public constructor(param0: number, param1: java.lang.Throwable);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class InvalidEncodingException {
				public static class: java.lang.Class<org.java_websocket.exceptions.InvalidEncodingException>;
				public constructor(param0: java.io.UnsupportedEncodingException);
				public getEncodingException(): java.io.UnsupportedEncodingException;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class InvalidFrameException extends org.java_websocket.exceptions.InvalidDataException {
				public static class: java.lang.Class<org.java_websocket.exceptions.InvalidFrameException>;
				public constructor(param0: number, param1: string);
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor(param0: number, param1: java.lang.Throwable);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class InvalidHandshakeException extends org.java_websocket.exceptions.InvalidDataException {
				public static class: java.lang.Class<org.java_websocket.exceptions.InvalidHandshakeException>;
				public constructor(param0: number, param1: string);
				public constructor(param0: number);
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor(param0: number, param1: java.lang.Throwable);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class LimitExceededException extends org.java_websocket.exceptions.InvalidDataException {
				public static class: java.lang.Class<org.java_websocket.exceptions.LimitExceededException>;
				public constructor(param0: number, param1: string);
				public constructor(param0: string, param1: number);
				public constructor(param0: number);
				public constructor(param0: string);
				public constructor(param0: number, param1: java.lang.Throwable);
				public constructor(param0: number, param1: string, param2: java.lang.Throwable);
				public constructor();
				public getLimit(): number;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class NotSendableException {
				public static class: java.lang.Class<org.java_websocket.exceptions.NotSendableException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class WebsocketNotConnectedException {
				public static class: java.lang.Class<org.java_websocket.exceptions.WebsocketNotConnectedException>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module exceptions {
			export class WrappedIOException {
				public static class: java.lang.Class<org.java_websocket.exceptions.WrappedIOException>;
				public getConnection(): org.java_websocket.WebSocket;
				public constructor(param0: org.java_websocket.WebSocket, param1: java.io.IOException);
				public getIOException(): java.io.IOException;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module extensions {
			export abstract class CompressionExtension extends org.java_websocket.extensions.DefaultExtension {
				public static class: java.lang.Class<org.java_websocket.extensions.CompressionExtension>;
				public reset(): void;
				public isFrameValid(param0: org.java_websocket.framing.Framedata): void;
				public decodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public acceptProvidedExtensionAsClient(param0: string): boolean;
				public encodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public acceptProvidedExtensionAsServer(param0: string): boolean;
				public getProvidedExtensionAsServer(): string;
				public toString(): string;
				public getProvidedExtensionAsClient(): string;
				public constructor();
				public copyInstance(): org.java_websocket.extensions.IExtension;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module extensions {
			export class DefaultExtension extends org.java_websocket.extensions.IExtension {
				public static class: java.lang.Class<org.java_websocket.extensions.DefaultExtension>;
				public decodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public acceptProvidedExtensionAsClient(param0: string): boolean;
				public encodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public toString(): string;
				public constructor();
				public reset(): void;
				public isFrameValid(param0: org.java_websocket.framing.Framedata): void;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public acceptProvidedExtensionAsServer(param0: string): boolean;
				public getProvidedExtensionAsServer(): string;
				public getProvidedExtensionAsClient(): string;
				public copyInstance(): org.java_websocket.extensions.IExtension;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module extensions {
			export class ExtensionRequestData {
				public static class: java.lang.Class<org.java_websocket.extensions.ExtensionRequestData>;
				public static EMPTY_VALUE: string;
				public static parseExtensionRequest(param0: string): org.java_websocket.extensions.ExtensionRequestData;
				public getExtensionName(): string;
				public getExtensionParameters(): java.util.Map<string,string>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module extensions {
			export class IExtension {
				public static class: java.lang.Class<org.java_websocket.extensions.IExtension>;
				/**
				 * Constructs a new instance of the org.java_websocket.extensions.IExtension interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					decodeFrame(param0: org.java_websocket.framing.Framedata): void;
					encodeFrame(param0: org.java_websocket.framing.Framedata): void;
					acceptProvidedExtensionAsServer(param0: string): boolean;
					acceptProvidedExtensionAsClient(param0: string): boolean;
					isFrameValid(param0: org.java_websocket.framing.Framedata): void;
					getProvidedExtensionAsClient(): string;
					getProvidedExtensionAsServer(): string;
					copyInstance(): org.java_websocket.extensions.IExtension;
					reset(): void;
					toString(): string;
				});
				public constructor();
				public reset(): void;
				public isFrameValid(param0: org.java_websocket.framing.Framedata): void;
				public decodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public acceptProvidedExtensionAsClient(param0: string): boolean;
				public encodeFrame(param0: org.java_websocket.framing.Framedata): void;
				public acceptProvidedExtensionAsServer(param0: string): boolean;
				public getProvidedExtensionAsServer(): string;
				public toString(): string;
				public getProvidedExtensionAsClient(): string;
				public copyInstance(): org.java_websocket.extensions.IExtension;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module extensions {
			export module permessage_deflate {
				export class PerMessageDeflateExtension extends org.java_websocket.extensions.CompressionExtension {
					public static class: java.lang.Class<org.java_websocket.extensions.permessage_deflate.PerMessageDeflateExtension>;
					public getInflater(): java.util.zip.Inflater;
					public setInflater(param0: java.util.zip.Inflater): void;
					public reset(): void;
					public encodeFrame(param0: org.java_websocket.framing.Framedata): void;
					public isServerNoContextTakeover(): boolean;
					public setClientNoContextTakeover(param0: boolean): void;
					public copyInstance(): org.java_websocket.extensions.IExtension;
					public getProvidedExtensionAsClient(): string;
					public toString(): string;
					public constructor();
					public getProvidedExtensionAsServer(): string;
					public acceptProvidedExtensionAsClient(param0: string): boolean;
					public setDeflater(param0: java.util.zip.Deflater): void;
					public decodeFrame(param0: org.java_websocket.framing.Framedata): void;
					public acceptProvidedExtensionAsServer(param0: string): boolean;
					public isFrameValid(param0: org.java_websocket.framing.Framedata): void;
					public setServerNoContextTakeover(param0: boolean): void;
					public isClientNoContextTakeover(): boolean;
					public getDeflater(): java.util.zip.Deflater;
				}
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class BinaryFrame extends org.java_websocket.framing.DataFrame {
				public static class: java.lang.Class<org.java_websocket.framing.BinaryFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public constructor();
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class CloseFrame extends org.java_websocket.framing.ControlFrame {
				public static class: java.lang.Class<org.java_websocket.framing.CloseFrame>;
				public static NORMAL: number;
				public static GOING_AWAY: number;
				public static PROTOCOL_ERROR: number;
				public static REFUSE: number;
				public static NOCODE: number;
				public static ABNORMAL_CLOSE: number;
				public static NO_UTF8: number;
				public static POLICY_VALIDATION: number;
				public static TOOBIG: number;
				public static EXTENSION: number;
				public static UNEXPECTED_CONDITION: number;
				public static SERVICE_RESTART: number;
				public static TRY_AGAIN_LATER: number;
				public static BAD_GATEWAY: number;
				public static TLS_ERROR: number;
				public static NEVER_CONNECTED: number;
				public static BUGGYCLOSE: number;
				public static FLASHPOLICY: number;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getCloseCode(): number;
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isValid(): void;
				public toString(): string;
				public constructor();
				public setCode(param0: number): void;
				public setReason(param0: string): void;
				public hashCode(): number;
				public isRSV1(): boolean;
				public equals(param0: any): boolean;
				public setPayload(param0: java.nio.ByteBuffer): void;
				public getMessage(): string;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class ContinuousFrame extends org.java_websocket.framing.DataFrame {
				public static class: java.lang.Class<org.java_websocket.framing.ContinuousFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public constructor();
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export abstract class ControlFrame extends org.java_websocket.framing.FramedataImpl1 {
				public static class: java.lang.Class<org.java_websocket.framing.ControlFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isValid(): void;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export abstract class DataFrame extends org.java_websocket.framing.FramedataImpl1 {
				public static class: java.lang.Class<org.java_websocket.framing.DataFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isValid(): void;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class Framedata {
				public static class: java.lang.Class<org.java_websocket.framing.Framedata>;
				/**
				 * Constructs a new instance of the org.java_websocket.framing.Framedata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					isFin(): boolean;
					isRSV1(): boolean;
					isRSV2(): boolean;
					isRSV3(): boolean;
					getTransfereMasked(): boolean;
					getOpcode(): org.java_websocket.enums.Opcode;
					getPayloadData(): java.nio.ByteBuffer;
					append(param0: org.java_websocket.framing.Framedata): void;
				});
				public constructor();
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export abstract class FramedataImpl1 extends org.java_websocket.framing.Framedata {
				public static class: java.lang.Class<org.java_websocket.framing.FramedataImpl1>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public setRSV1(param0: boolean): void;
				public static get(param0: org.java_websocket.enums.Opcode): org.java_websocket.framing.FramedataImpl1;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isValid(): void;
				public setTransferemasked(param0: boolean): void;
				public toString(): string;
				public setRSV3(param0: boolean): void;
				public setRSV2(param0: boolean): void;
				public setFin(param0: boolean): void;
				public isRSV1(): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public setPayload(param0: java.nio.ByteBuffer): void;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class PingFrame extends org.java_websocket.framing.ControlFrame {
				public static class: java.lang.Class<org.java_websocket.framing.PingFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public constructor();
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class PongFrame extends org.java_websocket.framing.ControlFrame {
				public static class: java.lang.Class<org.java_websocket.framing.PongFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public constructor(param0: org.java_websocket.framing.PingFrame);
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public constructor();
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module framing {
			export class TextFrame extends org.java_websocket.framing.DataFrame {
				public static class: java.lang.Class<org.java_websocket.framing.TextFrame>;
				public append(param0: org.java_websocket.framing.Framedata): void;
				public getPayloadData(): java.nio.ByteBuffer;
				public constructor(param0: org.java_websocket.enums.Opcode);
				public getOpcode(): org.java_websocket.enums.Opcode;
				public isValid(): void;
				public isRSV1(): boolean;
				public isRSV2(): boolean;
				public isFin(): boolean;
				public isRSV3(): boolean;
				public constructor();
				public getTransfereMasked(): boolean;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class ClientHandshake extends org.java_websocket.handshake.Handshakedata {
				public static class: java.lang.Class<org.java_websocket.handshake.ClientHandshake>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.ClientHandshake interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getResourceDescriptor(): string;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public iterateHttpFields(): java.util.Iterator<string>;
				public hasFieldValue(param0: string): boolean;
				public getResourceDescriptor(): string;
				public getFieldValue(param0: string): string;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class ClientHandshakeBuilder implements org.java_websocket.handshake.HandshakeBuilder, org.java_websocket.handshake.ClientHandshake {
				public static class: java.lang.Class<org.java_websocket.handshake.ClientHandshakeBuilder>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.ClientHandshakeBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setResourceDescriptor(param0: string): void;
					setContent(param0: native.Array<number>): void;
					put(param0: string, param1: string): void;
					getResourceDescriptor(): string;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public iterateHttpFields(): java.util.Iterator<string>;
				public setResourceDescriptor(param0: string): void;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getResourceDescriptor(): string;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class HandshakeBuilder extends org.java_websocket.handshake.Handshakedata {
				public static class: java.lang.Class<org.java_websocket.handshake.HandshakeBuilder>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.HandshakeBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setContent(param0: native.Array<number>): void;
					put(param0: string, param1: string): void;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public iterateHttpFields(): java.util.Iterator<string>;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class HandshakeImpl1Client extends org.java_websocket.handshake.HandshakedataImpl1 implements org.java_websocket.handshake.ClientHandshakeBuilder {
				public static class: java.lang.Class<org.java_websocket.handshake.HandshakeImpl1Client>;
				public iterateHttpFields(): java.util.Iterator<string>;
				public setResourceDescriptor(param0: string): void;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getResourceDescriptor(): string;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public getContent(): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class HandshakeImpl1Server extends org.java_websocket.handshake.HandshakedataImpl1 implements org.java_websocket.handshake.ServerHandshakeBuilder {
				public static class: java.lang.Class<org.java_websocket.handshake.HandshakeImpl1Server>;
				public setHttpStatusMessage(param0: string): void;
				public getHttpStatusMessage(): string;
				public iterateHttpFields(): java.util.Iterator<string>;
				public getHttpStatus(): number;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public setHttpStatus(param0: number): void;
				public getContent(): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class Handshakedata {
				public static class: java.lang.Class<org.java_websocket.handshake.Handshakedata>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.Handshakedata interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public iterateHttpFields(): java.util.Iterator<string>;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class HandshakedataImpl1 extends org.java_websocket.handshake.HandshakeBuilder {
				public static class: java.lang.Class<org.java_websocket.handshake.HandshakedataImpl1>;
				public iterateHttpFields(): java.util.Iterator<string>;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public getContent(): native.Array<number>;
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class ServerHandshake extends org.java_websocket.handshake.Handshakedata {
				public static class: java.lang.Class<org.java_websocket.handshake.ServerHandshake>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.ServerHandshake interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getHttpStatus(): number;
					getHttpStatusMessage(): string;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public getHttpStatusMessage(): string;
				public iterateHttpFields(): java.util.Iterator<string>;
				public getHttpStatus(): number;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module handshake {
			export class ServerHandshakeBuilder implements org.java_websocket.handshake.HandshakeBuilder, org.java_websocket.handshake.ServerHandshake {
				public static class: java.lang.Class<org.java_websocket.handshake.ServerHandshakeBuilder>;
				/**
				 * Constructs a new instance of the org.java_websocket.handshake.ServerHandshakeBuilder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					setHttpStatus(param0: number): void;
					setHttpStatusMessage(param0: string): void;
					setContent(param0: native.Array<number>): void;
					put(param0: string, param1: string): void;
					getHttpStatus(): number;
					getHttpStatusMessage(): string;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
					iterateHttpFields(): java.util.Iterator<string>;
					getFieldValue(param0: string): string;
					hasFieldValue(param0: string): boolean;
					getContent(): native.Array<number>;
				});
				public constructor();
				public setHttpStatusMessage(param0: string): void;
				public getHttpStatusMessage(): string;
				public iterateHttpFields(): java.util.Iterator<string>;
				public getHttpStatus(): number;
				public setContent(param0: native.Array<number>): void;
				public hasFieldValue(param0: string): boolean;
				public getFieldValue(param0: string): string;
				public put(param0: string, param1: string): void;
				public setHttpStatus(param0: number): void;
				public getContent(): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module interfaces {
			export class ISSLChannel {
				public static class: java.lang.Class<org.java_websocket.interfaces.ISSLChannel>;
				/**
				 * Constructs a new instance of the org.java_websocket.interfaces.ISSLChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getSSLEngine(): javax.net.ssl.SSLEngine;
				});
				public constructor();
				public getSSLEngine(): javax.net.ssl.SSLEngine;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module protocols {
			export class IProtocol {
				public static class: java.lang.Class<org.java_websocket.protocols.IProtocol>;
				/**
				 * Constructs a new instance of the org.java_websocket.protocols.IProtocol interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					acceptProvidedProtocol(param0: string): boolean;
					getProvidedProtocol(): string;
					copyInstance(): org.java_websocket.protocols.IProtocol;
					toString(): string;
				});
				public constructor();
				public getProvidedProtocol(): string;
				public acceptProvidedProtocol(param0: string): boolean;
				public toString(): string;
				public copyInstance(): org.java_websocket.protocols.IProtocol;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module protocols {
			export class Protocol extends org.java_websocket.protocols.IProtocol {
				public static class: java.lang.Class<org.java_websocket.protocols.Protocol>;
				public getProvidedProtocol(): string;
				public acceptProvidedProtocol(param0: string): boolean;
				public hashCode(): number;
				public equals(param0: any): boolean;
				public toString(): string;
				public constructor(param0: string);
				public copyInstance(): org.java_websocket.protocols.IProtocol;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module server {
			export class CustomSSLWebSocketServerFactory extends org.java_websocket.server.DefaultSSLWebSocketServerFactory {
				public static class: java.lang.Class<org.java_websocket.server.CustomSSLWebSocketServerFactory>;
				public close(): void;
				public constructor(param0: javax.net.ssl.SSLContext);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
				public constructor(param0: javax.net.ssl.SSLContext, param1: native.Array<string>, param2: native.Array<string>);
				public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
				public constructor(param0: javax.net.ssl.SSLContext, param1: java.util.concurrent.ExecutorService, param2: native.Array<string>, param3: native.Array<string>);
				public constructor(param0: javax.net.ssl.SSLContext, param1: java.util.concurrent.ExecutorService);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module server {
			export class DefaultSSLWebSocketServerFactory extends org.java_websocket.WebSocketServerFactory {
				public static class: java.lang.Class<org.java_websocket.server.DefaultSSLWebSocketServerFactory>;
				public sslcontext: javax.net.ssl.SSLContext;
				public exec: java.util.concurrent.ExecutorService;
				public close(): void;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
				public constructor(param0: javax.net.ssl.SSLContext);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
				public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
				public constructor(param0: javax.net.ssl.SSLContext, param1: java.util.concurrent.ExecutorService);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module server {
			export class DefaultWebSocketServerFactory extends org.java_websocket.WebSocketServerFactory {
				public static class: java.lang.Class<org.java_websocket.server.DefaultWebSocketServerFactory>;
				public close(): void;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocket;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
				public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.SocketChannel;
				public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocket;
				public constructor();
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module server {
			export class SSLParametersWebSocketServerFactory extends org.java_websocket.server.DefaultSSLWebSocketServerFactory {
				public static class: java.lang.Class<org.java_websocket.server.SSLParametersWebSocketServerFactory>;
				public close(): void;
				public constructor(param0: javax.net.ssl.SSLContext);
				public constructor(param0: javax.net.ssl.SSLContext, param1: java.util.concurrent.ExecutorService, param2: javax.net.ssl.SSLParameters);
				public constructor(param0: javax.net.ssl.SSLContext, param1: javax.net.ssl.SSLParameters);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: java.util.List<org.java_websocket.drafts.Draft>): org.java_websocket.WebSocketImpl;
				public wrapChannel(param0: java.nio.channels.SocketChannel, param1: java.nio.channels.SelectionKey): java.nio.channels.ByteChannel;
				public constructor(param0: javax.net.ssl.SSLContext, param1: java.util.concurrent.ExecutorService);
				public createWebSocket(param0: org.java_websocket.WebSocketAdapter, param1: org.java_websocket.drafts.Draft): org.java_websocket.WebSocketImpl;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module server {
			export abstract class WebSocketServer extends org.java_websocket.AbstractWebSocket {
				public static class: java.lang.Class<org.java_websocket.server.WebSocketServer>;
				public decoders: java.util.List<org.java_websocket.server.WebSocketServer.WebSocketWorker>;
				public getWebSocketFactory(): org.java_websocket.WebSocketFactory;
				public getRemoteSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
				public onWebsocketClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				public getPort(): number;
				public removeConnection(param0: org.java_websocket.WebSocket): boolean;
				public onWebsocketPing(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				public onError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
				public constructor(param0: java.net.InetSocketAddress, param1: number, param2: java.util.List<org.java_websocket.drafts.Draft>, param3: java.util.Collection<org.java_websocket.WebSocket>);
				public constructor();
				public onClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				public addConnection(param0: org.java_websocket.WebSocket): boolean;
				public onMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
				public onWebsocketOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.Handshakedata): void;
				public getLocalSocketAddress(param0: org.java_websocket.WebSocket): java.net.InetSocketAddress;
				public constructor(param0: java.net.InetSocketAddress, param1: number, param2: java.util.List<org.java_websocket.drafts.Draft>);
				public allocateBuffers(param0: org.java_websocket.WebSocket): void;
				public getMaxPendingConnections(): number;
				public setWebSocketFactory(param0: org.java_websocket.WebSocketServerFactory): void;
				public getAddress(): java.net.InetSocketAddress;
				public onConnect(param0: java.nio.channels.SelectionKey): boolean;
				public onPreparePing(param0: org.java_websocket.WebSocket): org.java_websocket.framing.PingFrame;
				public onWebsocketError(param0: org.java_websocket.WebSocket, param1: java.lang.Exception): void;
				public onOpen(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
				public onWebsocketHandshakeSentAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake): void;
				public broadcast(param0: native.Array<number>): void;
				public onStart(): void;
				public constructor(param0: java.net.InetSocketAddress);
				public onWebsocketCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
				public onWriteDemand(param0: org.java_websocket.WebSocket): void;
				public setMaxPendingConnections(param0: number): void;
				public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: string): void;
				public broadcast(param0: java.nio.ByteBuffer): void;
				public onWebsocketPong(param0: org.java_websocket.WebSocket, param1: org.java_websocket.framing.Framedata): void;
				public broadcast(param0: java.nio.ByteBuffer, param1: java.util.Collection<org.java_websocket.WebSocket>): void;
				public broadcast(param0: string, param1: java.util.Collection<org.java_websocket.WebSocket>): void;
				public onWebsocketMessage(param0: org.java_websocket.WebSocket, param1: java.nio.ByteBuffer): void;
				public broadcast(param0: string): void;
				public onCloseInitiated(param0: org.java_websocket.WebSocket, param1: number, param2: string): void;
				public run(): void;
				public start(): void;
				public getConnections(): java.util.Collection<org.java_websocket.WebSocket>;
				public getDraft(): java.util.List<org.java_websocket.drafts.Draft>;
				public broadcast(param0: native.Array<number>, param1: java.util.Collection<org.java_websocket.WebSocket>): void;
				public stop(param0: number): void;
				public createBuffer(): java.nio.ByteBuffer;
				public queue(param0: org.java_websocket.WebSocketImpl): void;
				public constructor(param0: java.net.InetSocketAddress, param1: number);
				public constructor(param0: java.net.InetSocketAddress, param1: java.util.List<org.java_websocket.drafts.Draft>);
				public onMessage(param0: org.java_websocket.WebSocket, param1: string): void;
				public onClosing(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				public releaseBuffers(param0: org.java_websocket.WebSocket): void;
				public onWebsocketClose(param0: org.java_websocket.WebSocket, param1: number, param2: string, param3: boolean): void;
				public stop(): void;
				public onWebsocketHandshakeReceivedAsClient(param0: org.java_websocket.WebSocket, param1: org.java_websocket.handshake.ClientHandshake, param2: org.java_websocket.handshake.ServerHandshake): void;
				public onWebsocketHandshakeReceivedAsServer(param0: org.java_websocket.WebSocket, param1: org.java_websocket.drafts.Draft, param2: org.java_websocket.handshake.ClientHandshake): org.java_websocket.handshake.ServerHandshakeBuilder;
			}
			export module WebSocketServer {
				export class WebSocketWorker {
					public static class: java.lang.Class<org.java_websocket.server.WebSocketServer.WebSocketWorker>;
					public constructor(param0: org.java_websocket.server.WebSocketServer);
					public run(): void;
					public put(param0: org.java_websocket.WebSocketImpl): void;
				}
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module util {
			export class Base64 {
				public static class: java.lang.Class<org.java_websocket.util.Base64>;
				public static NO_OPTIONS: number;
				public static ENCODE: number;
				public static GZIP: number;
				public static DO_BREAK_LINES: number;
				public static URL_SAFE: number;
				public static ORDERED: number;
				public static encodeBytesToBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
				public static encodeBytes(param0: native.Array<number>): string;
				public static encodeBytes(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
			}
			export module Base64 {
				export class OutputStream {
					public static class: java.lang.Class<org.java_websocket.util.Base64.OutputStream>;
					public write(param0: native.Array<number>, param1: number, param2: number): void;
					public constructor(param0: java.io.OutputStream);
					public constructor(param0: java.io.OutputStream, param1: number);
					public close(): void;
					public write(param0: number): void;
					public flushBase64(): void;
				}
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module util {
			export class ByteBufferUtils {
				public static class: java.lang.Class<org.java_websocket.util.ByteBufferUtils>;
				public static transferByteBuffer(param0: java.nio.ByteBuffer, param1: java.nio.ByteBuffer): number;
				public static getEmptyByteBuffer(): java.nio.ByteBuffer;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module util {
			export class Charsetfunctions {
				public static class: java.lang.Class<org.java_websocket.util.Charsetfunctions>;
				public static asciiBytes(param0: string): native.Array<number>;
				public static stringAscii(param0: native.Array<number>): string;
				public static stringUtf8(param0: native.Array<number>): string;
				public static stringAscii(param0: native.Array<number>, param1: number, param2: number): string;
				public static stringUtf8(param0: java.nio.ByteBuffer): string;
				public static isValidUTF8(param0: java.nio.ByteBuffer, param1: number): boolean;
				public static isValidUTF8(param0: java.nio.ByteBuffer): boolean;
				public static utf8Bytes(param0: string): native.Array<number>;
			}
		}
	}
}

declare module org {
	export module java_websocket {
		export module util {
			export class NamedThreadFactory {
				public static class: java.lang.Class<org.java_websocket.util.NamedThreadFactory>;
				public newThread(param0: java.lang.Runnable): java.lang.Thread;
				public constructor(param0: string);
			}
		}
	}
}

//Generics information:

