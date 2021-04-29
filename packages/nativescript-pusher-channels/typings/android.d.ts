declare module com {
	export module pusher {
		export module client {
			export class AuthorizationFailureException {
				public static class: java.lang.Class<com.pusher.client.AuthorizationFailureException>;
				public constructor(param0: string, param1: java.lang.Exception);
				public constructor(param0: java.lang.Exception);
				public constructor(param0: string);
				public constructor();
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export class Authorizer {
				public static class: java.lang.Class<com.pusher.client.Authorizer>;
				/**
				 * Constructs a new instance of the com.pusher.client.Authorizer interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					authorize(param0: string, param1: string): string;
				});
				public constructor();
				public authorize(param0: string, param1: string): string;
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export class Client {
				public static class: java.lang.Class<com.pusher.client.Client>;
				/**
				 * Constructs a new instance of the com.pusher.client.Client interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
				 */
				public constructor(implementation: {
					getConnection(): com.pusher.client.connection.Connection;
					connect(): void;
					connect(param0: com.pusher.client.connection.ConnectionEventListener, param1: native.Array<com.pusher.client.connection.ConnectionState>): void;
					disconnect(): void;
					subscribe(param0: string): com.pusher.client.channel.Channel;
					subscribe(param0: string, param1: com.pusher.client.channel.ChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.Channel;
					subscribePrivate(param0: string): com.pusher.client.channel.PrivateChannel;
					subscribePrivate(param0: string, param1: com.pusher.client.channel.PrivateChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PrivateChannel;
					subscribePresence(param0: string): com.pusher.client.channel.PresenceChannel;
					subscribePresence(param0: string, param1: com.pusher.client.channel.PresenceChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PresenceChannel;
					unsubscribe(param0: string): void;
					getChannel(param0: string): com.pusher.client.channel.Channel;
					getPrivateChannel(param0: string): com.pusher.client.channel.PrivateChannel;
					getPresenceChannel(param0: string): com.pusher.client.channel.PresenceChannel;
				});
				public constructor();
				public subscribePresence(param0: string): com.pusher.client.channel.PresenceChannel;
				public subscribePresence(param0: string, param1: com.pusher.client.channel.PresenceChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PresenceChannel;
				public connect(param0: com.pusher.client.connection.ConnectionEventListener, param1: native.Array<com.pusher.client.connection.ConnectionState>): void;
				public subscribe(param0: string): com.pusher.client.channel.Channel;
				public unsubscribe(param0: string): void;
				public getChannel(param0: string): com.pusher.client.channel.Channel;
				public subscribe(param0: string, param1: com.pusher.client.channel.ChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.Channel;
				public connect(): void;
				public subscribePrivate(param0: string, param1: com.pusher.client.channel.PrivateChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PrivateChannel;
				public disconnect(): void;
				public subscribePrivate(param0: string): com.pusher.client.channel.PrivateChannel;
				public getPresenceChannel(param0: string): com.pusher.client.channel.PresenceChannel;
				public getPrivateChannel(param0: string): com.pusher.client.channel.PrivateChannel;
				public getConnection(): com.pusher.client.connection.Connection;
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export class Pusher extends com.pusher.client.Client {
				public static class: java.lang.Class<com.pusher.client.Pusher>;
				public subscribePresence(param0: string): com.pusher.client.channel.PresenceChannel;
				public subscribePresence(param0: string, param1: com.pusher.client.channel.PresenceChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PresenceChannel;
				public getPrivateEncryptedChannel(param0: string): com.pusher.client.channel.PrivateEncryptedChannel;
				public connect(param0: com.pusher.client.connection.ConnectionEventListener, param1: native.Array<com.pusher.client.connection.ConnectionState>): void;
				public subscribe(param0: string): com.pusher.client.channel.Channel;
				public constructor(param0: string);
				public unsubscribe(param0: string): void;
				public subscribePrivateEncrypted(param0: string, param1: com.pusher.client.channel.PrivateEncryptedChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PrivateEncryptedChannel;
				public getChannel(param0: string): com.pusher.client.channel.Channel;
				public subscribe(param0: string, param1: com.pusher.client.channel.ChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.Channel;
				public connect(): void;
				public subscribePrivate(param0: string, param1: com.pusher.client.channel.PrivateChannelEventListener, param2: native.Array<string>): com.pusher.client.channel.PrivateChannel;
				public disconnect(): void;
				public subscribePrivate(param0: string): com.pusher.client.channel.PrivateChannel;
				public getPresenceChannel(param0: string): com.pusher.client.channel.PresenceChannel;
				public getPrivateChannel(param0: string): com.pusher.client.channel.PrivateChannel;
				public constructor(param0: string, param1: com.pusher.client.PusherOptions);
				public getConnection(): com.pusher.client.connection.Connection;
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export class PusherOptions {
				public static class: java.lang.Class<com.pusher.client.PusherOptions>;
				public static LIB_VERSION: string;
				/** @deprecated */
				public setEncrypted(param0: boolean): com.pusher.client.PusherOptions;
				public setPongTimeout(param0: number): com.pusher.client.PusherOptions;
				public setProxy(param0: java.net.Proxy): com.pusher.client.PusherOptions;
				public setHost(param0: string): com.pusher.client.PusherOptions;
				public setWsPort(param0: number): com.pusher.client.PusherOptions;
				public setAuthorizer(param0: com.pusher.client.Authorizer): com.pusher.client.PusherOptions;
				public setCluster(param0: string): com.pusher.client.PusherOptions;
				/** @deprecated */
				public isEncrypted(): boolean;
				public setMaxReconnectionAttempts(param0: number): com.pusher.client.PusherOptions;
				public constructor();
				public getAuthorizer(): com.pusher.client.Authorizer;
				public getActivityTimeout(): number;
				public setWssPort(param0: number): com.pusher.client.PusherOptions;
				public buildUrl(param0: string): string;
				public getProxy(): java.net.Proxy;
				public setActivityTimeout(param0: number): com.pusher.client.PusherOptions;
				public getMaxReconnectGapInSeconds(): number;
				public setMaxReconnectGapInSeconds(param0: number): com.pusher.client.PusherOptions;
				public isUseTLS(): boolean;
				public getPongTimeout(): number;
				public setUseTLS(param0: boolean): com.pusher.client.PusherOptions;
				public getMaxReconnectionAttempts(): number;
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class Channel {
					public static class: java.lang.Class<com.pusher.client.channel.Channel>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.Channel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						isSubscribed(): boolean;
					});
					public constructor();
					public isSubscribed(): boolean;
					public getName(): string;
					public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
					public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class ChannelEventListener extends com.pusher.client.channel.SubscriptionEventListener {
					public static class: java.lang.Class<com.pusher.client.channel.ChannelEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.ChannelEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onSubscriptionSucceeded(param0: string): void;
						onEvent(param0: com.pusher.client.channel.PusherEvent): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onEvent(param0: com.pusher.client.channel.PusherEvent): void;
					public onSubscriptionSucceeded(param0: string): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class ChannelState {
					public static class: java.lang.Class<com.pusher.client.channel.ChannelState>;
					public static INITIAL: com.pusher.client.channel.ChannelState;
					public static SUBSCRIBE_SENT: com.pusher.client.channel.ChannelState;
					public static SUBSCRIBED: com.pusher.client.channel.ChannelState;
					public static UNSUBSCRIBED: com.pusher.client.channel.ChannelState;
					public static FAILED: com.pusher.client.channel.ChannelState;
					public static values(): native.Array<com.pusher.client.channel.ChannelState>;
					public static valueOf(param0: string): com.pusher.client.channel.ChannelState;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PresenceChannel extends com.pusher.client.channel.PrivateChannel {
					public static class: java.lang.Class<com.pusher.client.channel.PresenceChannel>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PresenceChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getUsers(): java.util.Set<com.pusher.client.channel.User>;
						getMe(): com.pusher.client.channel.User;
						trigger(param0: string, param1: string): void;
						getName(): string;
						bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						isSubscribed(): boolean;
					});
					public constructor();
					public isSubscribed(): boolean;
					public getUsers(): java.util.Set<com.pusher.client.channel.User>;
					public getName(): string;
					public getMe(): com.pusher.client.channel.User;
					public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
					public trigger(param0: string, param1: string): void;
					public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PresenceChannelEventListener extends com.pusher.client.channel.PrivateChannelEventListener {
					public static class: java.lang.Class<com.pusher.client.channel.PresenceChannelEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PresenceChannelEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onUsersInformationReceived(param0: string, param1: java.util.Set<com.pusher.client.channel.User>): void;
						userSubscribed(param0: string, param1: com.pusher.client.channel.User): void;
						userUnsubscribed(param0: string, param1: com.pusher.client.channel.User): void;
						onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
						onSubscriptionSucceeded(param0: string): void;
						onEvent(param0: com.pusher.client.channel.PusherEvent): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onUsersInformationReceived(param0: string, param1: java.util.Set<com.pusher.client.channel.User>): void;
					public onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
					public onEvent(param0: com.pusher.client.channel.PusherEvent): void;
					public userUnsubscribed(param0: string, param1: com.pusher.client.channel.User): void;
					public onSubscriptionSucceeded(param0: string): void;
					public userSubscribed(param0: string, param1: com.pusher.client.channel.User): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PrivateChannel extends com.pusher.client.channel.Channel {
					public static class: java.lang.Class<com.pusher.client.channel.PrivateChannel>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PrivateChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						trigger(param0: string, param1: string): void;
						getName(): string;
						bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						isSubscribed(): boolean;
					});
					public constructor();
					public isSubscribed(): boolean;
					public getName(): string;
					public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
					public trigger(param0: string, param1: string): void;
					public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PrivateChannelEventListener extends com.pusher.client.channel.ChannelEventListener {
					public static class: java.lang.Class<com.pusher.client.channel.PrivateChannelEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PrivateChannelEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
						onSubscriptionSucceeded(param0: string): void;
						onEvent(param0: com.pusher.client.channel.PusherEvent): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
					public onEvent(param0: com.pusher.client.channel.PusherEvent): void;
					public onSubscriptionSucceeded(param0: string): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PrivateEncryptedChannel extends com.pusher.client.channel.Channel {
					public static class: java.lang.Class<com.pusher.client.channel.PrivateEncryptedChannel>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PrivateEncryptedChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						getName(): string;
						bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						isSubscribed(): boolean;
					});
					public constructor();
					public isSubscribed(): boolean;
					public getName(): string;
					public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
					public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PrivateEncryptedChannelEventListener extends com.pusher.client.channel.PrivateChannelEventListener {
					public static class: java.lang.Class<com.pusher.client.channel.PrivateEncryptedChannelEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.PrivateEncryptedChannelEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onDecryptionFailure(param0: string, param1: string): void;
						onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
						onSubscriptionSucceeded(param0: string): void;
						onEvent(param0: com.pusher.client.channel.PusherEvent): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onAuthenticationFailure(param0: string, param1: java.lang.Exception): void;
					public onEvent(param0: com.pusher.client.channel.PusherEvent): void;
					public onSubscriptionSucceeded(param0: string): void;
					public onDecryptionFailure(param0: string, param1: string): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PusherEvent {
					public static class: java.lang.Class<com.pusher.client.channel.PusherEvent>;
					public getData(): string;
					public toString(): string;
					public getChannelName(): string;
					public getProperty(param0: string): any;
					public getEventName(): string;
					public getUserId(): string;
					public constructor(param0: java.util.Map<string,any>);
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class PusherEventDeserializer extends com.google.gson.JsonDeserializer<com.pusher.client.channel.PusherEvent> {
					public static class: java.lang.Class<com.pusher.client.channel.PusherEventDeserializer>;
					public constructor();
					public deserialize(param0: com.google.gson.JsonElement, param1: java.lang.reflect.Type, param2: com.google.gson.JsonDeserializationContext): com.pusher.client.channel.PusherEvent;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class SubscriptionEventListener {
					public static class: java.lang.Class<com.pusher.client.channel.SubscriptionEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.channel.SubscriptionEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onEvent(param0: com.pusher.client.channel.PusherEvent): void;
						onError(param0: string, param1: java.lang.Exception): void;
					});
					public constructor();
					public onEvent(param0: com.pusher.client.channel.PusherEvent): void;
					public onError(param0: string, param1: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export class User {
					public static class: java.lang.Class<com.pusher.client.channel.User>;
					public constructor(param0: string, param1: string);
					public equals(param0: any): boolean;
					public toString(): string;
					public getId(): string;
					public getInfo(): string;
					public getInfo(param0: java.lang.Class): any;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class ChannelImpl extends com.pusher.client.channel.impl.InternalChannel {
						public static class: java.lang.Class<com.pusher.client.channel.impl.ChannelImpl>;
						public GSON: com.google.gson.Gson;
						public static SUBSCRIPTION_SUCCESS_EVENT: string;
						public name: string;
						public state: com.pusher.client.channel.ChannelState;
						public toSubscribeMessage(): string;
						public prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
						public getEventListener(): com.pusher.client.channel.ChannelEventListener;
						public onMessage(param0: string, param1: string): void;
						public compareTo(param0: com.pusher.client.channel.impl.InternalChannel): number;
						public setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
						public toUnsubscribeMessage(): string;
						public getName(): string;
						public getInterestedListeners(param0: string): java.util.Set<com.pusher.client.channel.SubscriptionEventListener>;
						public toString(): string;
						public getDisallowedNameExpressions(): native.Array<string>;
						public isSubscribed(): boolean;
						public constructor(param0: string, param1: com.pusher.client.util.Factory);
						public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public updateState(param0: com.pusher.client.channel.ChannelState): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class ChannelManager extends com.pusher.client.connection.ConnectionEventListener {
						public static class: java.lang.Class<com.pusher.client.channel.impl.ChannelManager>;
						public getPrivateChannel(param0: string): com.pusher.client.channel.PrivateChannel;
						public getPresenceChannel(param0: string): com.pusher.client.channel.PresenceChannel;
						public getPrivateEncryptedChannel(param0: string): com.pusher.client.channel.PrivateEncryptedChannel;
						public subscribeTo(param0: com.pusher.client.channel.impl.InternalChannel, param1: com.pusher.client.channel.ChannelEventListener, param2: native.Array<string>): void;
						public onMessage(param0: string, param1: string): void;
						public getChannel(param0: string): com.pusher.client.channel.Channel;
						public onConnectionStateChange(param0: com.pusher.client.connection.ConnectionStateChange): void;
						public unsubscribeFrom(param0: string): void;
						public setConnection(param0: com.pusher.client.connection.impl.InternalConnection): void;
						public onError(param0: string, param1: string, param2: java.lang.Exception): void;
						public constructor(param0: com.pusher.client.util.Factory);
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class InternalChannel extends java.lang.Object {
						public static class: java.lang.Class<com.pusher.client.channel.impl.InternalChannel>;
						/**
						 * Constructs a new instance of the com.pusher.client.channel.impl.InternalChannel interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							toSubscribeMessage(): string;
							toUnsubscribeMessage(): string;
							prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
							onMessage(param0: string, param1: string): void;
							updateState(param0: com.pusher.client.channel.ChannelState): void;
							setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
							getEventListener(): com.pusher.client.channel.ChannelEventListener;
							getName(): string;
							bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
							unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
							isSubscribed(): boolean;
						});
						public constructor();
						public toSubscribeMessage(): string;
						public prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
						public getEventListener(): com.pusher.client.channel.ChannelEventListener;
						public onMessage(param0: string, param1: string): void;
						public setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
						public isSubscribed(): boolean;
						public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public toUnsubscribeMessage(): string;
						public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public updateState(param0: com.pusher.client.channel.ChannelState): void;
						public getName(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class PresenceChannelImpl extends com.pusher.client.channel.impl.PrivateChannelImpl implements com.pusher.client.channel.PresenceChannel {
						public static class: java.lang.Class<com.pusher.client.channel.impl.PresenceChannelImpl>;
						public toSubscribeMessage(): string;
						public trigger(param0: string, param1: string): void;
						public prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
						public getEventListener(): com.pusher.client.channel.ChannelEventListener;
						public onMessage(param0: string, param1: string): void;
						public setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
						public toUnsubscribeMessage(): string;
						public constructor(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer, param3: com.pusher.client.util.Factory);
						public getName(): string;
						public toString(): string;
						public getDisallowedNameExpressions(): native.Array<string>;
						public isSubscribed(): boolean;
						public getUsers(): java.util.Set<com.pusher.client.channel.User>;
						public constructor(param0: string, param1: com.pusher.client.util.Factory);
						public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public updateState(param0: com.pusher.client.channel.ChannelState): void;
						public getMe(): com.pusher.client.channel.User;
					}
					export module PresenceChannelImpl {
						export class MemberData {
							public static class: java.lang.Class<com.pusher.client.channel.impl.PresenceChannelImpl.MemberData>;
							public userId: string;
							public userInfo: any;
						}
						export class Presence {
							public static class: java.lang.Class<com.pusher.client.channel.impl.PresenceChannelImpl.Presence>;
							public presence: com.pusher.client.channel.impl.PresenceChannelImpl.PresenceData;
						}
						export class PresenceData {
							public static class: java.lang.Class<com.pusher.client.channel.impl.PresenceChannelImpl.PresenceData>;
							public count: java.lang.Integer;
							public ids: java.util.List<string>;
							public hash: java.util.Map<string,any>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class PrivateChannelImpl extends com.pusher.client.channel.impl.ChannelImpl implements com.pusher.client.channel.PrivateChannel {
						public static class: java.lang.Class<com.pusher.client.channel.impl.PrivateChannelImpl>;
						public channelData: string;
						public toSubscribeMessage(): string;
						public trigger(param0: string, param1: string): void;
						public prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
						public getEventListener(): com.pusher.client.channel.ChannelEventListener;
						public onMessage(param0: string, param1: string): void;
						public setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
						public toUnsubscribeMessage(): string;
						public constructor(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer, param3: com.pusher.client.util.Factory);
						public getName(): string;
						public toString(): string;
						public getDisallowedNameExpressions(): native.Array<string>;
						public isSubscribed(): boolean;
						public constructor(param0: string, param1: com.pusher.client.util.Factory);
						public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public updateState(param0: com.pusher.client.channel.ChannelState): void;
						public getAuthResponse(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module channel {
				export module impl {
					export class PrivateEncryptedChannelImpl extends com.pusher.client.channel.impl.ChannelImpl implements com.pusher.client.channel.PrivateEncryptedChannel {
						public static class: java.lang.Class<com.pusher.client.channel.impl.PrivateEncryptedChannelImpl>;
						public toSubscribeMessage(): string;
						public prepareEvent(param0: string, param1: string): com.pusher.client.channel.PusherEvent;
						public getEventListener(): com.pusher.client.channel.ChannelEventListener;
						public onMessage(param0: string, param1: string): void;
						public setEventListener(param0: com.pusher.client.channel.ChannelEventListener): void;
						public toUnsubscribeMessage(): string;
						public getName(): string;
						public toString(): string;
						public getDisallowedNameExpressions(): native.Array<string>;
						public isSubscribed(): boolean;
						public constructor(param0: string, param1: com.pusher.client.util.Factory);
						public bind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public unbind(param0: string, param1: com.pusher.client.channel.SubscriptionEventListener): void;
						public updateState(param0: com.pusher.client.channel.ChannelState): void;
						public constructor(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer, param3: com.pusher.client.util.Factory, param4: com.pusher.client.crypto.nacl.SecretBoxOpenerFactory);
					}
					export module PrivateEncryptedChannelImpl {
						export class EncryptedReceivedData {
							public static class: java.lang.Class<com.pusher.client.channel.impl.PrivateEncryptedChannelImpl.EncryptedReceivedData>;
							public getNonce(): native.Array<number>;
							public getCiphertext(): native.Array<number>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export class Connection {
					public static class: java.lang.Class<com.pusher.client.connection.Connection>;
					/**
					 * Constructs a new instance of the com.pusher.client.connection.Connection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						connect(): void;
						bind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): void;
						unbind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): boolean;
						getState(): com.pusher.client.connection.ConnectionState;
						getSocketId(): string;
					});
					public constructor();
					public unbind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): boolean;
					public getSocketId(): string;
					public getState(): com.pusher.client.connection.ConnectionState;
					public connect(): void;
					public bind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export class ConnectionEventListener {
					public static class: java.lang.Class<com.pusher.client.connection.ConnectionEventListener>;
					/**
					 * Constructs a new instance of the com.pusher.client.connection.ConnectionEventListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
					 */
					public constructor(implementation: {
						onConnectionStateChange(param0: com.pusher.client.connection.ConnectionStateChange): void;
						onError(param0: string, param1: string, param2: java.lang.Exception): void;
					});
					public constructor();
					public onConnectionStateChange(param0: com.pusher.client.connection.ConnectionStateChange): void;
					public onError(param0: string, param1: string, param2: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export class ConnectionState {
					public static class: java.lang.Class<com.pusher.client.connection.ConnectionState>;
					public static CONNECTING: com.pusher.client.connection.ConnectionState;
					public static CONNECTED: com.pusher.client.connection.ConnectionState;
					public static DISCONNECTING: com.pusher.client.connection.ConnectionState;
					public static DISCONNECTED: com.pusher.client.connection.ConnectionState;
					public static RECONNECTING: com.pusher.client.connection.ConnectionState;
					public static ALL: com.pusher.client.connection.ConnectionState;
					public static valueOf(param0: string): com.pusher.client.connection.ConnectionState;
					public static values(): native.Array<com.pusher.client.connection.ConnectionState>;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export class ConnectionStateChange {
					public static class: java.lang.Class<com.pusher.client.connection.ConnectionStateChange>;
					public equals(param0: any): boolean;
					public constructor(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionState);
					public getPreviousState(): com.pusher.client.connection.ConnectionState;
					public hashCode(): number;
					public getCurrentState(): com.pusher.client.connection.ConnectionState;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export module impl {
					export class InternalConnection extends com.pusher.client.connection.Connection {
						public static class: java.lang.Class<com.pusher.client.connection.impl.InternalConnection>;
						/**
						 * Constructs a new instance of the com.pusher.client.connection.impl.InternalConnection interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							sendMessage(param0: string): void;
							disconnect(): void;
							connect(): void;
							bind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): void;
							unbind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): boolean;
							getState(): com.pusher.client.connection.ConnectionState;
							getSocketId(): string;
						});
						public constructor();
						public sendMessage(param0: string): void;
						public disconnect(): void;
						public bind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): void;
						public getSocketId(): string;
						public unbind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): boolean;
						public getState(): com.pusher.client.connection.ConnectionState;
						public connect(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export module websocket {
					export class WebSocketClientWrapper {
						public static class: java.lang.Class<com.pusher.client.connection.websocket.WebSocketClientWrapper>;
						public onClose(param0: number, param1: string, param2: boolean): void;
						public removeWebSocketListener(): void;
						public onMessage(param0: string): void;
						public constructor(param0: java.net.URI, param1: java.net.Proxy, param2: com.pusher.client.connection.websocket.WebSocketListener);
						public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
						public onSetSSLParameters(param0: javax.net.ssl.SSLParameters): void;
						public onError(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export module websocket {
					export class WebSocketConnection implements com.pusher.client.connection.impl.InternalConnection, com.pusher.client.connection.websocket.WebSocketListener {
						public static class: java.lang.Class<com.pusher.client.connection.websocket.WebSocketConnection>;
						public disconnect(): void;
						public bind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): void;
						public sendMessage(param0: string): void;
						public getSocketId(): string;
						public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: java.net.Proxy, param6: com.pusher.client.util.Factory);
						public onClose(param0: number, param1: string, param2: boolean): void;
						public onMessage(param0: string): void;
						public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
						public unbind(param0: com.pusher.client.connection.ConnectionState, param1: com.pusher.client.connection.ConnectionEventListener): boolean;
						public getState(): com.pusher.client.connection.ConnectionState;
						public onError(param0: java.lang.Exception): void;
						public connect(): void;
					}
					export module WebSocketConnection {
						export class ActivityTimer {
							public static class: java.lang.Class<com.pusher.client.connection.websocket.WebSocketConnection.ActivityTimer>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module connection {
				export module websocket {
					export class WebSocketListener {
						public static class: java.lang.Class<com.pusher.client.connection.websocket.WebSocketListener>;
						/**
						 * Constructs a new instance of the com.pusher.client.connection.websocket.WebSocketListener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
							onMessage(param0: string): void;
							onClose(param0: number, param1: string, param2: boolean): void;
							onError(param0: java.lang.Exception): void;
						});
						public constructor();
						public onClose(param0: number, param1: string, param2: boolean): void;
						public onMessage(param0: string): void;
						public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
						public onError(param0: java.lang.Exception): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module crypto {
				export module nacl {
					export class AuthenticityException {
						public static class: java.lang.Class<com.pusher.client.crypto.nacl.AuthenticityException>;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module crypto {
				export module nacl {
					export class SecretBoxOpener {
						public static class: java.lang.Class<com.pusher.client.crypto.nacl.SecretBoxOpener>;
						public constructor(param0: native.Array<number>);
						public clearKey(): void;
						public open(param0: native.Array<number>, param1: native.Array<number>): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module crypto {
				export module nacl {
					export class SecretBoxOpenerFactory {
						public static class: java.lang.Class<com.pusher.client.crypto.nacl.SecretBoxOpenerFactory>;
						public create(param0: native.Array<number>): com.pusher.client.crypto.nacl.SecretBoxOpener;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module crypto {
				export module nacl {
					export class TweetNaclFast {
						public static class: java.lang.Class<com.pusher.client.crypto.nacl.TweetNaclFast>;
						public static crypto_core_salsa20(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>): number;
						public static crypto_secretbox_open(param0: native.Array<number>, param1: native.Array<number>, param2: number, param3: native.Array<number>, param4: native.Array<number>): number;
						public constructor();
						public static crypto_stream_salsa20(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): number;
						public static crypto_stream(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>, param4: native.Array<number>): number;
						public static crypto_core_hsalsa20(param0: native.Array<number>, param1: native.Array<number>, param2: native.Array<number>, param3: native.Array<number>): number;
						public static crypto_stream_xor(param0: native.Array<number>, param1: number, param2: native.Array<number>, param3: number, param4: number, param5: native.Array<number>, param6: native.Array<number>): number;
					}
					export module TweetNaclFast {
						export class SecretBox {
							public static class: java.lang.Class<com.pusher.client.crypto.nacl.TweetNaclFast.SecretBox>;
							public static nonceLength: number;
							public static zerobytesLength: number;
							public static boxzerobytesLength: number;
							public constructor(param0: native.Array<number>);
							public open(param0: native.Array<number>, param1: native.Array<number>): native.Array<number>;
							public constructor(param0: native.Array<number>, param1: number);
							public open(param0: native.Array<number>, param1: number, param2: number, param3: native.Array<number>): native.Array<number>;
						}
						export class poly1305 {
							public static class: java.lang.Class<com.pusher.client.crypto.nacl.TweetNaclFast.poly1305>;
							public constructor(param0: native.Array<number>);
							public update(param0: native.Array<number>, param1: number, param2: number): com.pusher.client.crypto.nacl.TweetNaclFast.poly1305;
							public blocks(param0: native.Array<number>, param1: number, param2: number): com.pusher.client.crypto.nacl.TweetNaclFast.poly1305;
							public finish(param0: native.Array<number>, param1: number): com.pusher.client.crypto.nacl.TweetNaclFast.poly1305;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module example {
				export class ExampleApp {
					public static class: java.lang.Class<com.pusher.client.example.ExampleApp>;
					public static main(param0: native.Array<string>): void;
					public constructor(param0: native.Array<string>);
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module example {
				export class PresenceChannelExampleApp {
					public static class: java.lang.Class<com.pusher.client.example.PresenceChannelExampleApp>;
					public static main(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module example {
				export class PrivateChannelExampleApp {
					public static class: java.lang.Class<com.pusher.client.example.PrivateChannelExampleApp>;
					public static main(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module example {
				export class PrivateEncryptedChannelExampleApp {
					public static class: java.lang.Class<com.pusher.client.example.PrivateEncryptedChannelExampleApp>;
					public static main(param0: native.Array<string>): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module example {
				export class SimpleWebSocket {
					public static class: java.lang.Class<com.pusher.client.example.SimpleWebSocket>;
					public onOpen(param0: org.java_websocket.handshake.ServerHandshake): void;
					public constructor();
					public onMessage(param0: string): void;
					public static main(param0: native.Array<string>): void;
					public onClose(param0: number, param1: string, param2: boolean): void;
					public onError(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export abstract class ConnectionFactory {
					public static class: java.lang.Class<com.pusher.client.util.ConnectionFactory>;
					public getChannelName(): string;
					public getSocketId(): string;
					public constructor();
					public getBody(): string;
					public getCharset(): string;
					public getContentType(): string;
					public setSocketId(param0: string): void;
					public setChannelName(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export class Factory {
					public static class: java.lang.Class<com.pusher.client.util.Factory>;
					public newPublicChannel(param0: string): com.pusher.client.channel.impl.ChannelImpl;
					public newPresenceChannel(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer): com.pusher.client.channel.impl.PresenceChannelImpl;
					public getConnection(param0: string, param1: com.pusher.client.PusherOptions): com.pusher.client.connection.impl.InternalConnection;
					public constructor();
					public queueOnEventThread(param0: java.lang.Runnable): void;
					public getChannelManager(): com.pusher.client.channel.impl.ChannelManager;
					public newPrivateChannel(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer): com.pusher.client.channel.impl.PrivateChannelImpl;
					public getTimers(): java.util.concurrent.ScheduledExecutorService;
					public shutdownThreads(): void;
					public newPrivateEncryptedChannel(param0: com.pusher.client.connection.impl.InternalConnection, param1: string, param2: com.pusher.client.Authorizer): com.pusher.client.channel.impl.PrivateEncryptedChannelImpl;
					public newWebSocketClientWrapper(param0: java.net.URI, param1: java.net.Proxy, param2: com.pusher.client.connection.websocket.WebSocketListener): com.pusher.client.connection.websocket.WebSocketClientWrapper;
				}
				export module Factory {
					export class DaemonThreadFactory {
						public static class: java.lang.Class<com.pusher.client.util.Factory.DaemonThreadFactory>;
						public newThread(param0: java.lang.Runnable): java.lang.Thread;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export class HttpAuthorizer extends com.pusher.client.Authorizer {
					public static class: java.lang.Class<com.pusher.client.util.HttpAuthorizer>;
					public isSSL(): java.lang.Boolean;
					public constructor(param0: string);
					public authorize(param0: string, param1: string): string;
					public constructor(param0: string, param1: com.pusher.client.util.ConnectionFactory);
					public setHeaders(param0: java.util.Map<string,string>): void;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export class UrlEncodedConnectionFactory extends com.pusher.client.util.ConnectionFactory {
					public static class: java.lang.Class<com.pusher.client.util.UrlEncodedConnectionFactory>;
					public constructor();
					public constructor(param0: java.util.Map<string,string>);
					public getCharset(): string;
					public getContentType(): string;
					public getBody(): string;
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export module internal {
					export class Base64 {
						public static class: java.lang.Class<com.pusher.client.util.internal.Base64>;
						public constructor();
						public static decode(param0: string): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module pusher {
		export module client {
			export module util {
				export module internal {
					export class Preconditions {
						public static class: java.lang.Class<com.pusher.client.util.internal.Preconditions>;
						public constructor();
						public static checkArgument(param0: boolean, param1: any): void;
						public static checkNotNull(param0: any, param1: any): any;
						public static checkState(param0: boolean, param1: any): void;
					}
				}
			}
		}
	}
}

//Generics information:

