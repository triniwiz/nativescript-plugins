
declare module io {
	export module socket {
		export module emitter {
			export class Emitter {
				public static class: java.lang.Class<io.socket.emitter.Emitter>;
				public emit(param0: string, param1: native.Array<any>): io.socket.emitter.Emitter;
				public hasListeners(param0: string): boolean;
				public off(param0: string): io.socket.emitter.Emitter;
				public on(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public listeners(param0: string): java.util.List<io.socket.emitter.Emitter.Listener>;
				public once(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public off(param0: string, param1: io.socket.emitter.Emitter.Listener): io.socket.emitter.Emitter;
				public constructor();
				public off(): io.socket.emitter.Emitter;
			}
			export module Emitter {
				export class Listener {
					public static class: java.lang.Class<io.socket.emitter.Emitter.Listener>;
					/**
					 * Constructs a new instance of the io.socket.emitter.Emitter$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						call(param0: native.Array<any>): void;
					});
					public constructor();
					public call(param0: native.Array<any>): void;
				}
				export class OnceListener extends io.socket.emitter.Emitter.Listener {
					public static class: java.lang.Class<io.socket.emitter.Emitter.OnceListener>;
					public event: string;
					public fn: io.socket.emitter.Emitter.Listener;
					public constructor(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener);
					public call(param0: native.Array<any>): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export class EngineIOException {
					public static class: java.lang.Class<io.socket.engineio.client.EngineIOException>;
					public transport: string;
					public code: any;
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
					public static class: java.lang.Class<io.socket.engineio.client.HandshakeData>;
					public sid: string;
					public upgrades: native.Array<string>;
					public pingInterval: number;
					public pingTimeout: number;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export class Socket extends io.socket.emitter.Emitter {
					public static class: java.lang.Class<io.socket.engineio.client.Socket>;
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
					public constructor(param0: java.net.URI, param1: io.socket.engineio.client.Socket.Options);
					public static setDefaultOkHttpCallFactory(param0: okhttp3.Call.Factory): void;
					public write(param0: native.Array<number>): void;
					public send(param0: string): void;
					public constructor(param0: string);
					public static setDefaultOkHttpWebSocketFactory(param0: okhttp3.WebSocket.Factory): void;
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
					public send(param0: native.Array<number>, param1: java.lang.Runnable): void;
					public id(): string;
				}
				export module Socket {
					export class Options extends io.socket.engineio.client.Transport.Options {
						public static class: java.lang.Class<io.socket.engineio.client.Socket.Options>;
						public transports: native.Array<string>;
						public upgrade: boolean;
						public rememberUpgrade: boolean;
						public host: string;
						public query: string;
						public transportOptions: java.util.Map<string,io.socket.engineio.client.Transport.Options>;
						public constructor();
					}
					export class ReadyState {
						public static class: java.lang.Class<io.socket.engineio.client.Socket.ReadyState>;
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

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export abstract class Transport extends io.socket.emitter.Emitter {
					public static class: java.lang.Class<io.socket.engineio.client.Transport>;
					public static EVENT_OPEN: string;
					public static EVENT_CLOSE: string;
					public static EVENT_PACKET: string;
					public static EVENT_DRAIN: string;
					public static EVENT_ERROR: string;
					public static EVENT_REQUEST_HEADERS: string;
					public static EVENT_RESPONSE_HEADERS: string;
					public writable: boolean;
					public name: string;
					public query: java.util.Map<string,string>;
					public secure: boolean;
					public timestampRequests: boolean;
					public port: number;
					public path: string;
					public hostname: string;
					public timestampParam: string;
					public socket: io.socket.engineio.client.Socket;
					public readyState: io.socket.engineio.client.Transport.ReadyState;
					public webSocketFactory: okhttp3.WebSocket.Factory;
					public callFactory: okhttp3.Call.Factory;
					public extraHeaders: java.util.Map<string,java.util.List<string>>;
					public onPacket(param0: io.socket.engineio.parser.Packet<any>): void;
					public onClose(): void;
					public open(): io.socket.engineio.client.Transport;
					public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
					public constructor(param0: io.socket.engineio.client.Transport.Options);
					public onData(param0: native.Array<number>): void;
					public doClose(): void;
					public onData(param0: string): void;
					public send(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
					public constructor();
					public doOpen(): void;
					public onError(param0: string, param1: java.lang.Exception): io.socket.engineio.client.Transport;
					public close(): io.socket.engineio.client.Transport;
					public onOpen(): void;
				}
				export module Transport {
					export class Options {
						public static class: java.lang.Class<io.socket.engineio.client.Transport.Options>;
						public hostname: string;
						public path: string;
						public timestampParam: string;
						public secure: boolean;
						public timestampRequests: boolean;
						public port: number;
						public policyPort: number;
						public query: java.util.Map<string,string>;
						public socket: io.socket.engineio.client.Socket;
						public webSocketFactory: okhttp3.WebSocket.Factory;
						public callFactory: okhttp3.Call.Factory;
						public extraHeaders: java.util.Map<string,java.util.List<string>>;
						public constructor();
					}
					export class ReadyState {
						public static class: java.lang.Class<io.socket.engineio.client.Transport.ReadyState>;
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

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export abstract class Polling extends io.socket.engineio.client.Transport {
						public static class: java.lang.Class<io.socket.engineio.client.transports.Polling>;
						public static NAME: string;
						public static EVENT_POLL: string;
						public static EVENT_POLL_COMPLETE: string;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public doClose(): void;
						public constructor();
						public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
						public doOpen(): void;
						public onData(param0: string): void;
						public uri(): string;
						public pause(param0: java.lang.Runnable): void;
						public onData(param0: native.Array<number>): void;
						public doWrite(param0: string, param1: java.lang.Runnable): void;
						public doPoll(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export class PollingXHR extends io.socket.engineio.client.transports.Polling {
						public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR>;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public constructor();
						public request(param0: io.socket.engineio.client.transports.PollingXHR.Request.Options): io.socket.engineio.client.transports.PollingXHR.Request;
						public request(): io.socket.engineio.client.transports.PollingXHR.Request;
						public doWrite(param0: string, param1: java.lang.Runnable): void;
						public doPoll(): void;
					}
					export module PollingXHR {
						export class Request extends io.socket.emitter.Emitter {
							public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR.Request>;
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
								public static class: java.lang.Class<io.socket.engineio.client.transports.PollingXHR.Request.Options>;
								public uri: string;
								public method: string;
								public data: string;
								public callFactory: okhttp3.Call.Factory;
								public extraHeaders: java.util.Map<string,java.util.List<string>>;
								public constructor();
							}
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module client {
				export module transports {
					export class WebSocket extends io.socket.engineio.client.Transport {
						public static class: java.lang.Class<io.socket.engineio.client.transports.WebSocket>;
						public static NAME: string;
						public constructor(param0: io.socket.engineio.client.Transport.Options);
						public doClose(): void;
						public constructor();
						public write(param0: native.Array<io.socket.engineio.parser.Packet<any>>): void;
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
				export class Base64 {
					public static class: java.lang.Class<io.socket.engineio.parser.Base64>;
					public static DEFAULT: number;
					public static NO_PADDING: number;
					public static NO_WRAP: number;
					public static CRLF: number;
					public static URL_SAFE: number;
					public static NO_CLOSE: number;
					public static encodeToString(param0: native.Array<number>, param1: number): string;
					public static decode(param0: native.Array<number>, param1: number): native.Array<number>;
					public static decode(param0: string, param1: number): native.Array<number>;
					public static encode(param0: native.Array<number>, param1: number): native.Array<number>;
					public static encode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
					public static encodeToString(param0: native.Array<number>, param1: number, param2: number, param3: number): string;
					public static decode(param0: native.Array<number>, param1: number, param2: number, param3: number): native.Array<number>;
				}
				export module Base64 {
					export abstract class Coder {
						public static class: java.lang.Class<io.socket.engineio.parser.Base64.Coder>;
						public output: native.Array<number>;
						public op: number;
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
					}
					export class Decoder extends io.socket.engineio.parser.Base64.Coder {
						public static class: java.lang.Class<io.socket.engineio.parser.Base64.Decoder>;
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: native.Array<number>);
					}
					export class Encoder extends io.socket.engineio.parser.Base64.Coder {
						public static class: java.lang.Class<io.socket.engineio.parser.Base64.Encoder>;
						public static LINE_GROUPS: number;
						public do_padding: boolean;
						public do_newline: boolean;
						public do_cr: boolean;
						public process(param0: native.Array<number>, param1: number, param2: number, param3: boolean): boolean;
						public maxOutputSize(param0: number): number;
						public constructor(param0: number, param1: native.Array<number>);
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
				export class Packet<T>  extends java.lang.Object {
					public static class: java.lang.Class<io.socket.engineio.parser.Packet<any>>;
					public static OPEN: string;
					public static CLOSE: string;
					public static PING: string;
					public static PONG: string;
					public static UPGRADE: string;
					public static MESSAGE: string;
					public static NOOP: string;
					public static ERROR: string;
					public type: string;
					public data: T;
					public constructor(param0: string, param1: T);
					public constructor(param0: string);
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module engineio {
			export module parser {
				export class Parser {
					public static class: java.lang.Class<io.socket.engineio.parser.Parser>;
					public static PROTOCOL: number;
					public static decodePacket(param0: string): io.socket.engineio.parser.Packet<string>;
					public static encodePayload(param0: native.Array<io.socket.engineio.parser.Packet<any>>, param1: io.socket.engineio.parser.Parser.EncodeCallback<string>): void;
					public static decodePayload(param0: string, param1: io.socket.engineio.parser.Parser.DecodePayloadCallback<string>): void;
					public static encodePacket(param0: io.socket.engineio.parser.Packet<any>, param1: io.socket.engineio.parser.Parser.EncodeCallback<any>): void;
					public static decodePacket(param0: native.Array<number>): io.socket.engineio.parser.Packet<native.Array<number>>;
					public static decodeBase64Packet(param0: string): io.socket.engineio.parser.Packet<any>;
				}
				export module Parser {
					export class DecodePayloadCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.socket.engineio.parser.Parser.DecodePayloadCallback<any>>;
						/**
						 * Constructs a new instance of the io.socket.engineio.parser.Parser$DecodePayloadCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: io.socket.engineio.parser.Packet<T>, param1: number, param2: number): boolean;
						});
						public constructor();
						public call(param0: io.socket.engineio.parser.Packet<T>, param1: number, param2: number): boolean;
					}
					export class EncodeCallback<T>  extends java.lang.Object {
						public static class: java.lang.Class<io.socket.engineio.parser.Parser.EncodeCallback<any>>;
						/**
						 * Constructs a new instance of the io.socket.engineio.parser.Parser$EncodeCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: T): void;
						});
						public constructor();
						public call(param0: T): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module global {
			export class Global {
				public static class: java.lang.Class<io.socket.global.Global>;
				public static encodeURIComponent(param0: string): string;
				public static decodeURIComponent(param0: string): string;
			}
		}
	}
}

declare module io {
	export module socket {
		export module parseqs {
			export class ParseQS {
				public static class: java.lang.Class<io.socket.parseqs.ParseQS>;
				public static encode(param0: java.util.Map<string,string>): string;
				public static decode(param0: string): java.util.Map<string,string>;
			}
		}
	}
}

declare module io {
	export module socket {
		export module thread {
			export class EventThread {
				public static class: java.lang.Class<io.socket.thread.EventThread>;
				public static exec(param0: java.lang.Runnable): void;
				public static isCurrent(): boolean;
				public static nextTick(param0: java.lang.Runnable): void;
			}
		}
	}
}

declare module io {
	export module socket {
		export module yeast {
			export class Yeast {
				public static class: java.lang.Class<io.socket.yeast.Yeast>;
				public static decode(param0: string): number;
				public static yeast(): string;
				public static encode(param0: number): string;
			}
		}
	}
}

//Generics information:
//io.socket.engineio.parser.Packet:1
//io.socket.engineio.parser.Parser.DecodePayloadCallback:1
//io.socket.engineio.parser.Parser.EncodeCallback:1

