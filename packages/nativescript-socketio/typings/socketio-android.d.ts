declare module io {
	export module socket {
		export module backo {
			export class Backoff {
				public static class: java.lang.Class<io.socket.backo.Backoff>;
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

declare module io {
	export module socket {
		export module client {
			export class Ack {
				public static class: java.lang.Class<io.socket.client.Ack>;
				/**
				 * Constructs a new instance of the io.socket.client.Ack interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					call(param0: native.Array<any>): void;
				});
				public constructor();
				public call(param0: native.Array<any>): void;
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class IO {
				public static class: java.lang.Class<io.socket.client.IO>;
				public static protocol: number;
				public static setDefaultOkHttpWebSocketFactory(param0: okhttp3.WebSocket.Factory): void;
				public static socket(param0: string, param1: io.socket.client.IO.Options): io.socket.client.Socket;
				public static setDefaultOkHttpCallFactory(param0: okhttp3.Call.Factory): void;
				public static socket(param0: java.net.URI): io.socket.client.Socket;
				public static socket(param0: java.net.URI, param1: io.socket.client.IO.Options): io.socket.client.Socket;
				public static socket(param0: string): io.socket.client.Socket;
			}
			export module IO {
				export class Options extends io.socket.client.Manager.Options {
					public static class: java.lang.Class<io.socket.client.IO.Options>;
					public forceNew: boolean;
					public multiplex: boolean;
					public constructor();
					public static builder(): io.socket.client.SocketOptionBuilder;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Manager {
				public static class: java.lang.Class<io.socket.client.Manager>;
				public static EVENT_OPEN: string;
				public static EVENT_CLOSE: string;
				public static EVENT_PACKET: string;
				public static EVENT_ERROR: string;
				public static EVENT_RECONNECT: string;
				public static EVENT_RECONNECT_ERROR: string;
				public static EVENT_RECONNECT_FAILED: string;
				public static EVENT_RECONNECT_ATTEMPT: string;
				public static EVENT_TRANSPORT: string;
				public constructor(param0: io.socket.client.Manager.Options);
				public reconnection(): boolean;
				public randomizationFactor(): number;
				public timeout(param0: number): io.socket.client.Manager;
				public isReconnecting(): boolean;
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
				public socket(param0: string, param1: io.socket.client.Manager.Options): io.socket.client.Socket;
				public constructor(param0: java.net.URI, param1: io.socket.client.Manager.Options);
				public reconnectionDelay(param0: number): io.socket.client.Manager;
				public reconnectionDelayMax(): number;
				public open(): io.socket.client.Manager;
			}
			export module Manager {
				export class Engine {
					public static class: java.lang.Class<io.socket.client.Manager.Engine>;
				}
				export class OpenCallback {
					public static class: java.lang.Class<io.socket.client.Manager.OpenCallback>;
					/**
					 * Constructs a new instance of the io.socket.client.Manager$OpenCallback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						call(param0: java.lang.Exception): void;
					});
					public constructor();
					public call(param0: java.lang.Exception): void;
				}
				export class Options {
					public static class: java.lang.Class<io.socket.client.Manager.Options>;
					public reconnection: boolean;
					public reconnectionAttempts: number;
					public reconnectionDelay: number;
					public reconnectionDelayMax: number;
					public randomizationFactor: number;
					public encoder: io.socket.parser.Parser.Encoder;
					public decoder: io.socket.parser.Parser.Decoder;
					public auth: java.util.Map<string,string>;
					public timeout: number;
					public constructor();
				}
				export class ReadyState {
					public static class: java.lang.Class<io.socket.client.Manager.ReadyState>;
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

declare module io {
	export module socket {
		export module client {
			export class On {
				public static class: java.lang.Class<io.socket.client.On>;
				public static on(param0: io.socket.emitter.Emitter, param1: string, param2: io.socket.emitter.Emitter.Listener): io.socket.client.On.Handle;
			}
			export module On {
				export class Handle {
					public static class: java.lang.Class<io.socket.client.On.Handle>;
					/**
					 * Constructs a new instance of the io.socket.client.On$Handle interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						destroy(): void;
					});
					public constructor();
					public destroy(): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Socket {
				public static class: java.lang.Class<io.socket.client.Socket>;
				public static EVENT_CONNECT: string;
				public static EVENT_DISCONNECT: string;
				public static EVENT_CONNECT_ERROR: string;
				public static RESERVED_EVENTS: java.util.Map<string,java.lang.Integer>;
				public disconnect(): io.socket.client.Socket;
				public open(): io.socket.client.Socket;
				public emit(param0: string, param1: native.Array<any>, param2: io.socket.client.Ack): io.socket.emitter.Emitter;
				public id(): string;
				public send(param0: native.Array<any>): io.socket.client.Socket;
				public emit(param0: string, param1: native.Array<any>): io.socket.emitter.Emitter;
				public isActive(): boolean;
				public connected(): boolean;
				public constructor(param0: io.socket.client.Manager, param1: string, param2: io.socket.client.Manager.Options);
				public connect(): io.socket.client.Socket;
				public close(): io.socket.client.Socket;
				public io(): io.socket.client.Manager;
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class SocketIOException {
				public static class: java.lang.Class<io.socket.client.SocketIOException>;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class SocketOptionBuilder {
				public static class: java.lang.Class<io.socket.client.SocketOptionBuilder>;
				public setUpgrade(param0: boolean): io.socket.client.SocketOptionBuilder;
				public setQuery(param0: string): io.socket.client.SocketOptionBuilder;
				public setSecure(param0: boolean): io.socket.client.SocketOptionBuilder;
				public build(): io.socket.client.IO.Options;
				public setForceNew(param0: boolean): io.socket.client.SocketOptionBuilder;
				public setRandomizationFactor(param0: number): io.socket.client.SocketOptionBuilder;
				public setPolicyPort(param0: number): io.socket.client.SocketOptionBuilder;
				public constructor();
				public setPath(param0: string): io.socket.client.SocketOptionBuilder;
				public static builder(param0: io.socket.client.IO.Options): io.socket.client.SocketOptionBuilder;
				public setPort(param0: number): io.socket.client.SocketOptionBuilder;
				public setReconnectionDelay(param0: number): io.socket.client.SocketOptionBuilder;
				public constructor(param0: io.socket.client.IO.Options);
				public setReconnectionDelayMax(param0: number): io.socket.client.SocketOptionBuilder;
				public setHostname(param0: string): io.socket.client.SocketOptionBuilder;
				public setAuth(param0: java.util.Map<string,string>): io.socket.client.SocketOptionBuilder;
				public setTimeout(param0: number): io.socket.client.SocketOptionBuilder;
				public setTransports(param0: native.Array<string>): io.socket.client.SocketOptionBuilder;
				public setReconnection(param0: boolean): io.socket.client.SocketOptionBuilder;
				public setHost(param0: string): io.socket.client.SocketOptionBuilder;
				public setReconnectionAttempts(param0: number): io.socket.client.SocketOptionBuilder;
				public setMultiplex(param0: boolean): io.socket.client.SocketOptionBuilder;
				public static builder(): io.socket.client.SocketOptionBuilder;
				public setExtraHeaders(param0: java.util.Map<string,java.util.List<string>>): io.socket.client.SocketOptionBuilder;
				public setRememberUpgrade(param0: boolean): io.socket.client.SocketOptionBuilder;
			}
		}
	}
}

declare module io {
	export module socket {
		export module client {
			export class Url {
				public static class: java.lang.Class<io.socket.client.Url>;
				public static parse(param0: java.net.URI): io.socket.client.Url.ParsedURI;
			}
			export module Url {
				export class ParsedURI {
					public static class: java.lang.Class<io.socket.client.Url.ParsedURI>;
					public uri: java.net.URI;
					public id: string;
					public constructor(param0: java.net.URI, param1: string);
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module hasbinary {
			export class HasBinary {
				public static class: java.lang.Class<io.socket.hasbinary.HasBinary>;
				public static hasBinary(param0: any): boolean;
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Binary {
				public static class: java.lang.Class<io.socket.parser.Binary>;
				public static deconstructPacket(param0: io.socket.parser.Packet<any>): io.socket.parser.Binary.DeconstructedPacket;
				public static reconstructPacket(param0: io.socket.parser.Packet<any>, param1: native.Array<native.Array<number>>): io.socket.parser.Packet<any>;
				public constructor();
			}
			export module Binary {
				export class DeconstructedPacket {
					public static class: java.lang.Class<io.socket.parser.Binary.DeconstructedPacket>;
					public packet: io.socket.parser.Packet<any>;
					public buffers: native.Array<native.Array<number>>;
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class DecodingException {
				public static class: java.lang.Class<io.socket.parser.DecodingException>;
				public constructor(param0: string);
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class IOParser extends io.socket.parser.Parser {
				public static class: java.lang.Class<io.socket.parser.IOParser>;
			}
			export module IOParser {
				export class BinaryReconstructor {
					public static class: java.lang.Class<io.socket.parser.IOParser.BinaryReconstructor>;
					public reconPack: io.socket.parser.Packet<any>;
					public finishReconstruction(): void;
					public takeBinaryData(param0: native.Array<number>): io.socket.parser.Packet<any>;
				}
				export class Decoder extends io.socket.parser.Parser.Decoder {
					public static class: java.lang.Class<io.socket.parser.IOParser.Decoder>;
					public add(param0: string): void;
					public destroy(): void;
					public constructor();
					public add(param0: native.Array<number>): void;
					public onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
				}
				export class Encoder extends io.socket.parser.Parser.Encoder {
					public static class: java.lang.Class<io.socket.parser.IOParser.Encoder>;
					public constructor();
					public encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
				}
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Packet<T>  extends java.lang.Object {
				public static class: java.lang.Class<io.socket.parser.Packet<any>>;
				public type: number;
				public id: number;
				public nsp: string;
				public data: T;
				public attachments: number;
				public constructor(param0: number);
				public constructor(param0: number, param1: T);
				public constructor();
			}
		}
	}
}

declare module io {
	export module socket {
		export module parser {
			export class Parser {
				public static class: java.lang.Class<io.socket.parser.Parser>;
				/**
				 * Constructs a new instance of the io.socket.parser.Parser interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					<clinit>(): void;
				});
				public constructor();
				public static ACK: number;
				public static BINARY_ACK: number;
				public static DISCONNECT: number;
				public static CONNECT: number;
				public static BINARY_EVENT: number;
				public static EVENT: number;
				public static protocol: number;
				public static types: native.Array<string>;
				public static CONNECT_ERROR: number;
			}
			export module Parser {
				export class Decoder {
					public static class: java.lang.Class<io.socket.parser.Parser.Decoder>;
					/**
					 * Constructs a new instance of the io.socket.parser.Parser$Decoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						add(param0: string): void;
						add(param0: native.Array<number>): void;
						destroy(): void;
						onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
					});
					public constructor();
					public add(param0: string): void;
					public destroy(): void;
					public add(param0: native.Array<number>): void;
					public onDecoded(param0: io.socket.parser.Parser.Decoder.Callback): void;
				}
				export module Decoder {
					export class Callback {
						public static class: java.lang.Class<io.socket.parser.Parser.Decoder.Callback>;
						/**
						 * Constructs a new instance of the io.socket.parser.Parser$Decoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: io.socket.parser.Packet<any>): void;
						});
						public constructor();
						public call(param0: io.socket.parser.Packet<any>): void;
					}
				}
				export class Encoder {
					public static class: java.lang.Class<io.socket.parser.Parser.Encoder>;
					/**
					 * Constructs a new instance of the io.socket.parser.Parser$Encoder interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
					});
					public constructor();
					public encode(param0: io.socket.parser.Packet<any>, param1: io.socket.parser.Parser.Encoder.Callback): void;
				}
				export module Encoder {
					export class Callback {
						public static class: java.lang.Class<io.socket.parser.Parser.Encoder.Callback>;
						/**
						 * Constructs a new instance of the io.socket.parser.Parser$Encoder$Callback interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							call(param0: native.Array<any>): void;
						});
						public constructor();
						public call(param0: native.Array<any>): void;
					}
				}
			}
		}
	}
}

//Generics information:
//io.socket.parser.Packet:1

