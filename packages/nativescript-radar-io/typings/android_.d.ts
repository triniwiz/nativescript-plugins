declare module com {
	export module github {
		export module triniwiz {
			export module radario {
				export class BuildConfig {
					public static class: java.lang.Class<com.github.triniwiz.radario.BuildConfig>;
					public static DEBUG: boolean;
					public static LIBRARY_PACKAGE_NAME: string;
					public static BUILD_TYPE: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module radario {
				export class RadarIOPlugin {
					public static class: java.lang.Class<com.github.triniwiz.radario.RadarIOPlugin>;
					public constructor();
					public static setListener(param0: com.github.triniwiz.radario.RadarIOPlugin.Listener): void;
				}
				export module RadarIOPlugin {
					export class Listener {
						public static class: java.lang.Class<com.github.triniwiz.radario.RadarIOPlugin.Listener>;
						/**
						 * Constructs a new instance of the com.github.triniwiz.radario.RadarIOPlugin$Listener interface with the provided implementation. An empty constructor exists calling super() when extending the interface class.
						 */
						public constructor(implementation: {
							onEvents(param0: string): void;
							onLocation(param0: string): void;
							onError(param0: string): void;
							onClientLocation(param0: string): void;
							onLog(param0: string): void;
						});
						public constructor();
						public onLocation(param0: string): void;
						public onClientLocation(param0: string): void;
						public onEvents(param0: string): void;
						public onLog(param0: string): void;
						public onError(param0: string): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module triniwiz {
			export module radario {
				export class Receiver {
					public static class: java.lang.Class<com.github.triniwiz.radario.Receiver>;
					public onEventsReceived(param0: globalAndroid.content.Context, param1: native.Array<io.radar.sdk.model.RadarEvent>, param2: io.radar.sdk.model.RadarUser): void;
					public onError(param0: globalAndroid.content.Context, param1: io.radar.sdk.Radar.RadarStatus): void;
					public constructor();
					public onLocationUpdated(param0: globalAndroid.content.Context, param1: globalAndroid.location.Location, param2: io.radar.sdk.model.RadarUser): void;
					public onClientLocationUpdated(param0: globalAndroid.content.Context, param1: globalAndroid.location.Location, param2: boolean, param3: io.radar.sdk.Radar.RadarLocationSource): void;
					public onLog(param0: globalAndroid.content.Context, param1: string): void;
				}
			}
		}
	}
}

//Generics information:

