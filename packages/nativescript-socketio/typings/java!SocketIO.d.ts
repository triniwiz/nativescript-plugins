declare module io {
    export module socket {
        export module backo {
            export class Backoff {
                public duration(): number;

                public reset(): void;

                public setFactor(param0: number): io.socket.backo.Backoff;

                public setJitter(param0: number): io.socket.backo.Backoff;

                public getAttempts(): number;

                public setMax(param0: number): io.socket.backo.Backoff;

                public constructor();

                public setMin(param0: number): io.socket.backo.Backoff;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class Ack {
                /**
                 * Constructs a new instance of the io.socket.client.Ack interface with the provided implementation.
                 */
                public constructor(implementation: {
                    call(param0: native.Array<java.lang.Object>): void;
                });

                public call(param0: native.Array<java.lang.Object>): void;
            }
        }
    }
}

/// <reference path="./io.socket.client.Socket.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLContext.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class IO {
                public static protocol: number;

                public static socket(param0: string, param1: io.socket.client.IO.Options): io.socket.client.Socket;

                public static setDefaultSSLContext(param0: javax.net.ssl.SSLContext): void;

                public static socket(param0: java.net.URI): io.socket.client.Socket;
                public static socket(param0: java.net.URI, param1: io.socket.client.IO.Options): io.socket.client.Socket;

                public static setDefaultHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;

                public static socket(param0: string): io.socket.client.Socket;
            }

            export module IO {
                export class Options extends io.socket.client.Manager.Options {
                    public forceNew: boolean;
                    public multiplex: boolean;

                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./io.socket.client.Socket.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class Manager extends io.socket.emitter.Emitter {
                public static EVENT_OPEN: string;
                public static EVENT_CLOSE: string;
                public static EVENT_PACKET: string;
                public static EVENT_ERROR: string;
                public static EVENT_CONNECT_ERROR: string;
                public static EVENT_CONNECT_TIMEOUT: string;
                public static EVENT_RECONNECT: string;
                public static EVENT_RECONNECT_ERROR: string;
                public static EVENT_RECONNECT_FAILED: string;
                public static EVENT_RECONNECT_ATTEMPT: string;
                public static EVENT_RECONNECTING: string;
                public static EVENT_PING: string;
                public static EVENT_PONG: string;
                public static EVENT_TRANSPORT: string;

                public constructor(param0: io.socket.client.Manager.Options);

                public reconnection(): boolean;

                public randomizationFactor(): number;

                public timeout(param0: number): io.socket.client.Manager;
                public timeout(): number;

                public open(param0: io.socket.client.Manager.OpenCallback): io.socket.client.Manager;

                public reconnectionDelayMax(param0: number): io.socket.client.Manager;

                public constructor(param0: java.net.URI);
                public constructor();

                public reconnectionDelay(): number;

                public reconnection(param0: boolean): io.socket.client.Manager;

                public socket(param0: string): io.socket.client.Socket;

                public reconnectionAttempts(): number;

                public randomizationFactor(param0: number): io.socket.client.Manager;

                public reconnectionAttempts(param0: number): io.socket.client.Manager;

                public constructor(param0: java.net.URI, param1: io.socket.client.Manager.Options);

                public reconnectionDelay(param0: number): io.socket.client.Manager;

                public reconnectionDelayMax(): number;

                public open(): io.socket.client.Manager;
            }

            export module Manager {
                export class Engine extends io.socket.engineio.client.Socket {
                }

                export class OpenCallback {
                    /**
                     * Constructs a new instance of the io.socket.client.Manager$OpenCallback interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        call(param0: java.lang.Exception): void;
                    });

                    public call(param0: java.lang.Exception): void;
                }

                export class Options extends io.socket.engineio.client.Socket.Options {
                    public reconnection: boolean;
                    public reconnectionAttempts: number;
                    public reconnectionDelay: number;
                    public reconnectionDelayMax: number;
                    public randomizationFactor: number;
                    public timeout: number;

                    public constructor();
                }

                export class ReadyState {
                    public static CLOSED: io.socket.client.Manager.ReadyState;
                    public static OPENING: io.socket.client.Manager.ReadyState;
                    public static OPEN: io.socket.client.Manager.ReadyState;

                    public static values(): native.Array<io.socket.client.Manager.ReadyState>;

                    public static valueOf(param0: string): io.socket.client.Manager.ReadyState;
                }
            }
        }
    }
}

/// <reference path="./io.socket.emitter.Emitter.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class On {
                public static on(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener): io.socket.client.On.Handle;
            }

            export module On {
                export class Handle {
                    /**
                     * Constructs a new instance of the io.socket.client.On$Handle interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        destroy(): void;
                    });

                    public destroy(): void;
                }
            }
        }
    }
}

/// <reference path="./io.socket.client.Ack.d.ts" />
/// <reference path="./io.socket.client.Manager.d.ts" />
/// <reference path="./io.socket.emitter.Emitter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class Socket extends io.socket.emitter.Emitter {
                public static EVENT_CONNECT: string;
                public static EVENT_CONNECTING: string;
                public static EVENT_DISCONNECT: string;
                public static EVENT_ERROR: string;
                public static EVENT_MESSAGE: string;
                public static EVENT_CONNECT_ERROR: string;
                public static EVENT_CONNECT_TIMEOUT: string;
                public static EVENT_RECONNECT: string;
                public static EVENT_RECONNECT_ERROR: string;
                public static EVENT_RECONNECT_FAILED: string;
                public static EVENT_RECONNECT_ATTEMPT: string;
                public static EVENT_RECONNECTING: string;
                public static EVENT_PING: string;
                public static EVENT_PONG: string;
                public static events: java.util.Map<any, any>;

                public disconnect(): io.socket.client.Socket;

                public open(): io.socket.client.Socket;

                public id(): string;

                public send(param0: native.Array<java.lang.Object>): io.socket.client.Socket;

                public connected(): boolean;

                public connect(): io.socket.client.Socket;

                public emit(param0: string, param1: native.Array<java.lang.Object>): io.socket.emitter.Emitter;

                public close(): io.socket.client.Socket;

                public emit(param0: string, param1: native.Array<java.lang.Object>, param2: io.socket.client.Ack): io.socket.emitter.Emitter;

                public io(): io.socket.client.Manager;

                public constructor(param0: io.socket.client.Manager, param1: string);
                public constructor();
            }
        }
    }
}
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class SocketIOException {
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./java.net.URL.d.ts" />
declare module io {
    export module socket {
        export module client {
            export class Url {
                public static parse(param0: string): java.net.URL;
                public static parse(param0: java.net.URI): java.net.URL;

                public static extractId(param0: java.net.URL): string;
                public static extractId(param0: string): string;
            }
        }
    }
}

/// <reference path="./io.socket.emitter.Emitter.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.List.d.ts" />
declare module io {
    export module socket {
        export module emitter {
            export class Emitter {
                public hasListeners(param0: string): boolean;

                public off(param0: string): io.socket.emitter.Emitter;

                public on(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;

                public once(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;

                public off(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;

                public emit(param0: string, param1: native.Array<java.lang.Object>): io.socket.emitter.Emitter;

                public constructor();

                public off(): io.socket.emitter.Emitter;

                public listeners(param0: string): java.util.List<any>;
            }

            export module Emitter {
                export class Listener {
                    /**
                     * Constructs a new instance of the io.socket.emitter.Emitter$Listener interface with the provided implementation.
                     */
                    public constructor(implementation: {
                        call(param0: native.Array<java.lang.Object>): void;
                    });

                    public call(param0: native.Array<java.lang.Object>): void;
                }

                export class OnceListener {
                    public event: string;
                    public fn: io.socket.emitter.Emitter.Listener;

                    public constructor(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener);

                    public call(param0: native.Array<java.lang.Object>): void;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export class EngineIOException {
                    public transport: string;
                    public code: java.lang.Object;

                    public constructor(param0: string, param1: java.lang.Throwable);
                    public constructor(param0: string);
                    public constructor(param0: java.lang.Throwable);
                    public constructor();
                }
            }
        }
    }
}

declare module io {
    export module socket {
        export module engineio {
            export module client {
                export class HandshakeData {
                    public sid: string;
                    public upgrades: native.Array<string>;
                    public pingInterval: number;
                    public pingTimeout: number;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.net.URI.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLContext.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export class Socket extends io.socket.emitter.Emitter {
                    public static EVENT_OPEN: string;
                    public static EVENT_CLOSE: string;
                    public static EVENT_MESSAGE: string;
                    public static EVENT_ERROR: string;
                    public static EVENT_UPGRADE_ERROR: string;
                    public static EVENT_FLUSH: string;
                    public static EVENT_DRAIN: string;
                    public static EVENT_HANDSHAKE: string;
                    public static EVENT_UPGRADING: string;
                    public static EVENT_UPGRADE: string;
                    public static EVENT_PACKET: string;
                    public static EVENT_PACKET_CREATE: string;
                    public static EVENT_HEARTBEAT: string;
                    public static EVENT_DATA: string;
                    public static EVENT_PING: string;
                    public static EVENT_PONG: string;
                    public static EVENT_TRANSPORT: string;
                    public static PROTOCOL: number;
                    public proxy: java.net.Proxy;
                    public proxyLogin: string;
                    public proxyPassword: string;

                    public constructor(param0: java.net.URI, param1: io.socket.engineio.client.Socket.Options);

                    public static setDefaultHostnameVerifier(param0: javax.net.ssl.HostnameVerifier): void;

                    public write(param0: native.Array<number>): void;

                    public send(param0: string): void;

                    public constructor(param0: string);

                    public write(param0: string, param1: java.lang.Runnable): void;

                    public send(param0: string, param1: java.lang.Runnable): void;

                    public constructor(param0: io.socket.engineio.client.Socket.Options);

                    public write(param0: native.Array<number>, param1: java.lang.Runnable): void;

                    public open(): io.socket.engineio.client.Socket;

                    public send(param0: native.Array<number>): void;

                    public constructor(param0: java.net.URI);
                    public constructor(param0: string, param1: io.socket.engineio.client.Socket.Options);

                    public write(param0: string): void;

                    public constructor();

                    public close(): io.socket.engineio.client.Socket;

                    public static setDefaultSSLContext(param0: javax.net.ssl.SSLContext): void;

                    public send(param0: native.Array<number>, param1: java.lang.Runnable): void;

                    public id(): string;
                }

                export module Socket {
                    export class Options extends io.socket.engineio.client.Transport.Options {
                        public transports: native.Array<string>;
                        public upgrade: boolean;
                        public rememberUpgrade: boolean;
                        public host: string;
                        public query: any;

                        public constructor();
                    }

                    export class ReadyState {
                        public static OPENING: io.socket.engineio.client.Socket.ReadyState;
                        public static OPEN: io.socket.engineio.client.Socket.ReadyState;
                        public static CLOSING: io.socket.engineio.client.Socket.ReadyState;
                        public static CLOSED: io.socket.engineio.client.Socket.ReadyState;

                        public static valueOf(param0: string): io.socket.engineio.client.Socket.ReadyState;

                        public static values(): native.Array<io.socket.engineio.client.Socket.ReadyState>;

                        public toString(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./io.socket.engineio.client.Socket.d.ts" />
/// <reference path="./io.socket.engineio.parser.Packet.d.ts" />
/// <reference path="./java.lang.Exception.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLContext.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export abstract class Transport extends io.socket.emitter.Emitter {
                    public static EVENT_OPEN: string;
                    public static EVENT_CLOSE: string;
                    public static EVENT_PACKET: string;
                    public static EVENT_DRAIN: string;
                    public static EVENT_ERROR: string;
                    public static EVENT_REQUEST_HEADERS: string;
                    public static EVENT_RESPONSE_HEADERS: string;
                    public writable: boolean;
                    public name: string;
                    public query: java.util.Map<any, any>;
                    public secure: boolean;
                    public timestampRequests: boolean;
                    public port: number;
                    public path: string;
                    public hostname: string;
                    public timestampParam: string;
                    public sslContext: javax.net.ssl.SSLContext;
                    public socket: io.socket.engineio.client.Socket;
                    public hostnameVerifier: javax.net.ssl.HostnameVerifier;
                    public proxy: java.net.Proxy;
                    public proxyLogin: string;
                    public proxyPassword: string;
                    public readyState: io.socket.engineio.client.Transport.ReadyState;

                    public onPacket(param0: io.socket.engineio.parser.Packet): void;

                    public onClose(): void;

                    public open(): io.socket.engineio.client.Transport;

                    public write(param0: native.Array<io.socket.engineio.parser.Packet>): void;

                    public constructor(param0: io.socket.engineio.client.Transport.Options);

                    public onData(param0: native.Array<number>): void;

                    public doClose(): void;

                    public onData(param0: string): void;

                    public send(param0: native.Array<io.socket.engineio.parser.Packet>): void;

                    public constructor();

                    public doOpen(): void;

                    public onError(param0: string, param1: java.lang.Exception): io.socket.engineio.client.Transport;

                    public close(): io.socket.engineio.client.Transport;

                    public onOpen(): void;
                }

                export module Transport {
                    export class Options {
                        public hostname: string;
                        public path: string;
                        public timestampParam: string;
                        public secure: boolean;
                        public timestampRequests: boolean;
                        public port: number;
                        public policyPort: number;
                        public query: java.util.Map<any, any>;
                        public sslContext: javax.net.ssl.SSLContext;
                        public hostnameVerifier: javax.net.ssl.HostnameVerifier;
                        public socket: io.socket.engineio.client.Socket;
                        public proxy: java.net.Proxy;
                        public proxyLogin: string;
                        public proxyPassword: string;

                        public constructor();
                    }

                    export class ReadyState {
                        public static OPENING: io.socket.engineio.client.Transport.ReadyState;
                        public static OPEN: io.socket.engineio.client.Transport.ReadyState;
                        public static CLOSED: io.socket.engineio.client.Transport.ReadyState;
                        public static PAUSED: io.socket.engineio.client.Transport.ReadyState;

                        public static valueOf(param0: string): io.socket.engineio.client.Transport.ReadyState;

                        public static values(): native.Array<io.socket.engineio.client.Transport.ReadyState>;

                        public toString(): string;
                    }
                }
            }
        }
    }
}

/// <reference path="./io.socket.engineio.parser.Packet.d.ts" />
/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export module transports {
                    export abstract class Polling extends io.socket.engineio.client.Transport {
                        public static NAME: string;
                        public static EVENT_POLL: string;
                        public static EVENT_POLL_COMPLETE: string;

                        public constructor(param0: io.socket.engineio.client.Transport.Options);

                        public doClose(): void;

                        public constructor();

                        public write(param0: native.Array<io.socket.engineio.parser.Packet>): void;

                        public doOpen(): void;

                        public onData(param0: string): void;

                        public uri(): string;

                        public pause(param0: java.lang.Runnable): void;

                        public onData(param0: native.Array<number>): void;

                        public doWrite(param0: native.Array<number>, param1: java.lang.Runnable): void;

                        public doPoll(): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Runnable.d.ts" />
/// <reference path="./java.net.Proxy.d.ts" />
/// <reference path="./javax.net.ssl.HostnameVerifier.d.ts" />
/// <reference path="./javax.net.ssl.SSLContext.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export module transports {
                    export class PollingXHR extends io.socket.engineio.client.transports.Polling {
                        public constructor(param0: io.socket.engineio.client.Transport.Options);
                        public constructor();

                        public request(param0: io.socket.engineio.client.transports.PollingXHR.Request.Options): io.socket.engineio.client.transports.PollingXHR.Request;
                        public request(): io.socket.engineio.client.transports.PollingXHR.Request;

                        public doWrite(param0: native.Array<number>, param1: java.lang.Runnable): void;

                        public doPoll(): void;
                    }

                    export module PollingXHR {
                        export class Request extends io.socket.emitter.Emitter {
                            public static EVENT_SUCCESS: string;
                            public static EVENT_DATA: string;
                            public static EVENT_ERROR: string;
                            public static EVENT_REQUEST_HEADERS: string;
                            public static EVENT_RESPONSE_HEADERS: string;

                            public constructor();
                            public constructor(param0: io.socket.engineio.client.transports.PollingXHR.Request.Options);

                            public create(): void;
                        }

                        export module Request {
                            export class Options {
                                public uri: string;
                                public method: string;
                                public data: native.Array<number>;
                                public sslContext: javax.net.ssl.SSLContext;
                                public hostnameVerifier: javax.net.ssl.HostnameVerifier;
                                public proxy: java.net.Proxy;

                                public constructor();
                            }
                        }
                    }
                }
            }
        }
    }
}

/// <reference path="./io.socket.engineio.parser.Packet.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module client {
                export module transports {
                    export class WebSocket extends io.socket.engineio.client.Transport {
                        public static NAME: string;

                        public constructor(param0: io.socket.engineio.client.Transport.Options);

                        public doClose(): void;

                        public constructor();

                        public write(param0: native.Array<io.socket.engineio.parser.Packet>): void;

                        public doOpen(): void;

                        public uri(): string;
                    }
                }
            }
        }
    }
}

declare module io {
    export module socket {
        export module engineio {
            export module parser {
                export class Buffer {
                    public static concat(param0: native.Array<native.Array<number>>): native.Array<number>;
                    public static concat(param0: native.Array<native.Array<number>>, param1: number): native.Array<number>;
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module parser {
                export class Packet {
                    public static OPEN: string;
                    public static CLOSE: string;
                    public static PING: string;
                    public static PONG: string;
                    public static UPGRADE: string;
                    public static MESSAGE: string;
                    public static NOOP: string;
                    public static ERROR: string;
                    public type: string;
                    public data: java.lang.Object;

                    public constructor(param0: string);
                    public constructor(param0: string, param1: java.lang.Object);
                }
            }
        }
    }
}

/// <reference path="./io.socket.engineio.parser.Packet.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module engineio {
            export module parser {
                export class Parser {
                    public static PROTOCOL: number;

                    public static decodePayload(param0: string, param1: io.socket.engineio.parser.Parser.DecodePayloadCallback): void;

                    public static encodePayload(param0: native.Array<io.socket.engineio.parser.Packet>, param1: io.socket.engineio.parser.Parser.EncodeCallback): void;

                    public static decodePacket(param0: native.Array<number>): io.socket.engineio.parser.Packet;
                    public static decodePacket(param0: string): io.socket.engineio.parser.Packet;

                    public static encodePacket(param0: io.socket.engineio.parser.Packet, param1: boolean, param2: io.socket.engineio.parser.Parser.EncodeCallback): void;
                    public static encodePacket(param0: io.socket.engineio.parser.Packet, param1: io.socket.engineio.parser.Parser.EncodeCallback): void;

                    public static decodePacket(param0: string, param1: boolean): io.socket.engineio.parser.Packet;

                    public static decodePayload(param0: native.Array<number>, param1: io.socket.engineio.parser.Parser.DecodePayloadCallback): void;
                }

                export module Parser {
                    export class DecodePayloadCallback {
                        /**
                         * Constructs a new instance of the io.socket.engineio.parser.Parser$DecodePayloadCallback interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            call(param0: io.socket.engineio.parser.Packet, param1: number, param2: number): boolean;
                        });

                        public call(param0: io.socket.engineio.parser.Packet, param1: number, param2: number): boolean;
                    }

                    export class EncodeCallback {
                        /**
                         * Constructs a new instance of the io.socket.engineio.parser.Parser$EncodeCallback interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            call(param0: java.lang.Object): void;
                        });

                        public call(param0: java.lang.Object): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module global {
            export class Global {
                public static encodeURIComponent(param0: string): string;

                public static decodeURIComponent(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
    export module socket {
        export module hasbinary {
            export class HasBinary {
                public static hasBinary(param0: java.lang.Object): boolean;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.util.Map.d.ts" />
declare module io {
    export module socket {
        export module parseqs {
            export class ParseQS {
                public static encode(param0: java.util.Map<any, any>): string;

                public static decode(param0: string): java.util.Map<any, any>;
            }
        }
    }
}

/// <reference path="./io.socket.parser.Packet.d.ts" />
declare module io {
    export module socket {
        export module parser {
            export class Binary {
                public static deconstructPacket(param0: io.socket.parser.Packet): io.socket.parser.Binary.DeconstructedPacket;

                public static reconstructPacket(param0: io.socket.parser.Packet, param1: native.Array<native.Array<number>>): io.socket.parser.Packet;

                public constructor();
            }

            export module Binary {
                export class DeconstructedPacket {
                    public packet: io.socket.parser.Packet;
                    public buffers: native.Array<native.Array<number>>;

                    public constructor();
                }
            }
        }
    }
}

/// <reference path="./java.lang.Object.d.ts" />
declare module io {
    export module socket {
        export module parser {
            export class Packet {
                public type: number;
                public id: number;
                public nsp: string;
                public data: java.lang.Object;
                public attachments: number;

                public constructor(param0: number, param1: java.lang.Object);
                public constructor(param0: number);
                public constructor();
            }
        }
    }
}

/// <reference path="./io.socket.parser.Packet.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module parser {
            export class Parser {
                public static CONNECT: number;
                public static DISCONNECT: number;
                public static EVENT: number;
                public static ACK: number;
                public static ERROR: number;
                public static BINARY_EVENT: number;
                public static BINARY_ACK: number;
                public static protocol: number;
                public static types: native.Array<string>;
            }

            export module Parser {
                export class BinaryReconstructor {
                    public reconPack: io.socket.parser.Packet;

                    public finishReconstruction(): void;

                    public takeBinaryData(param0: native.Array<number>): io.socket.parser.Packet;
                }

                export class Decoder extends io.socket.emitter.Emitter {
                    public static EVENT_DECODED: string;

                    public add(param0: string): void;

                    public destroy(): void;

                    public constructor();

                    public add(param0: native.Array<number>): void;
                }

                export class Encoder {
                    public constructor();

                    public encode(param0: io.socket.parser.Packet, param1: io.socket.parser.Parser.Encoder.Callback): void;
                }

                export module Encoder {
                    export class Callback {
                        /**
                         * Constructs a new instance of the io.socket.parser.Parser$Encoder$Callback interface with the provided implementation.
                         */
                        public constructor(implementation: {
                            call(param0: native.Array<java.lang.Object>): void;
                        });

                        public call(param0: native.Array<java.lang.Object>): void;
                    }
                }
            }
        }
    }
}

/// <reference path="./java.lang.Runnable.d.ts" />
declare module io {
    export module socket {
        export module thread {
            export class EventThread {
                public static exec(param0: java.lang.Runnable): void;

                public static isCurrent(): boolean;

                public static nextTick(param0: java.lang.Runnable): void;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module utf8 {
            export class UTF8 {
                public static encode(param0: string): string;

                public static decode(param0: string): string;
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
/// <reference path="./java.lang.Throwable.d.ts" />
declare module io {
    export module socket {
        export module utf8 {
            export class UTF8Exception {
                public constructor(param0: string, param1: java.lang.Throwable);
                public constructor(param0: java.lang.Throwable);
                public constructor(param0: string);
                public constructor();
            }
        }
    }
}

/// <reference path="./java.lang.String.d.ts" />
declare module io {
    export module socket {
        export module yeast {
            export class Yeast {
                public static decode(param0: string): number;

                public static yeast(): string;

                public static encode(param0: number): string;
            }
        }
    }
}
