
declare class Radar extends NSObject {

	static acceptEventIdVerifiedPlaceId(eventId: string, verifiedPlaceId: string): void;

	static alloc(): Radar; // inherited from NSObject

	static autocompleteQueryNearLimitCompletionHandler(query: string, near: CLLocation, limit: number, completionHandler: (p1: RadarStatus, p2: NSArray<RadarAddress>) => void): void;

	static dictionaryForLocation(location: CLLocation): NSDictionary<any, any>;

	static geocodeAddressCompletionHandler(query: string, completionHandler: (p1: RadarStatus, p2: NSArray<RadarAddress>) => void): void;

	static getContextForLocationCompletionHandler(location: CLLocation, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: RadarContext) => void): void;

	static getContextWithCompletionHandler(completionHandler: (p1: RadarStatus, p2: CLLocation, p3: RadarContext) => void): void;

	static getDescription(): string;

	static getDistanceFromOriginDestinationModesUnitsCompletionHandler(origin: CLLocation, destination: CLLocation, modes: RadarRouteMode, units: RadarRouteUnits, completionHandler: (p1: RadarStatus, p2: RadarRoutes) => void): void;

	static getDistanceToDestinationModesUnitsCompletionHandler(destination: CLLocation, modes: RadarRouteMode, units: RadarRouteUnits, completionHandler: (p1: RadarStatus, p2: RadarRoutes) => void): void;

	static getLocationWithCompletionHandler(completionHandler: (p1: RadarStatus, p2: CLLocation, p3: boolean) => void): void;

	static getLocationWithDesiredAccuracyCompletionHandler(desiredAccuracy: RadarTrackingOptionsDesiredAccuracy, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: boolean) => void): void;

	static getMetadata(): NSDictionary<any, any>;

	static getTrackingOptions(): RadarTrackingOptions;

	static getTripOptions(): RadarTripOptions;

	static getUserId(): string;

	static initializeWithPublishableKey(publishableKey: string): void;

	static ipGeocodeWithCompletionHandler(completionHandler: (p1: RadarStatus, p2: RadarAddress, p3: boolean) => void): void;

	static isTracking(): boolean;

	static mockTrackingWithOriginDestinationModeStepsIntervalCompletionHandler(origin: CLLocation, destination: CLLocation, mode: RadarRouteMode, steps: number, interval: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarEvent>, p4: RadarUser) => void): void;

	static new(): Radar; // inherited from NSObject

	static rejectEventId(eventId: string): void;

	static reverseGeocodeLocationCompletionHandler(location: CLLocation, completionHandler: (p1: RadarStatus, p2: NSArray<RadarAddress>) => void): void;

	static reverseGeocodeWithCompletionHandler(completionHandler: (p1: RadarStatus, p2: NSArray<RadarAddress>) => void): void;

	static searchGeofencesNearRadiusTagsMetadataLimitCompletionHandler(near: CLLocation, radius: number, tags: NSArray<any> | any[], metadata: NSDictionary<any, any>, limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarGeofence>) => void): void;

	static searchGeofencesWithRadiusTagsMetadataLimitCompletionHandler(radius: number, tags: NSArray<any> | any[], metadata: NSDictionary<any, any>, limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarGeofence>) => void): void;

	static searchPlacesNearRadiusChainsCategoriesGroupsLimitCompletionHandler(near: CLLocation, radius: number, chains: NSArray<any> | any[], categories: NSArray<any> | any[], groups: NSArray<any> | any[], limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarPlace>) => void): void;

	static searchPlacesWithRadiusChainsCategoriesGroupsLimitCompletionHandler(radius: number, chains: NSArray<any> | any[], categories: NSArray<any> | any[], groups: NSArray<any> | any[], limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarPlace>) => void): void;

	static searchPointsNearRadiusTagsLimitCompletionHandler(near: CLLocation, radius: number, tags: NSArray<string> | string[], limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarPoint>) => void): void;

	static searchPointsWithRadiusTagsLimitCompletionHandler(radius: number, tags: NSArray<string> | string[], limit: number, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarPoint>) => void): void;

	static setAdIdEnabled(enabled: boolean): void;

	static setDelegate(delegate: RadarDelegate): void;

	static setDescription(description: string): void;

	static setLogLevel(level: RadarLogLevel): void;

	static setMetadata(metadata: NSDictionary<any, any>): void;

	static setUserId(userId: string): void;

	static startTrackingWithOptions(options: RadarTrackingOptions): void;

	static startTripWithOptions(options: RadarTripOptions): void;

	static stopTracking(): void;

	static stopTrip(): void;

	static stringForMode(mode: RadarRouteMode): string;

	static stringForSource(source: RadarLocationSource): string;

	static stringForStatus(status: RadarStatus): string;

	static trackOnceWithCompletionHandler(completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarEvent>, p4: RadarUser) => void): void;

	static trackOnceWithLocationCompletionHandler(location: CLLocation, completionHandler: (p1: RadarStatus, p2: CLLocation, p3: NSArray<RadarEvent>, p4: RadarUser) => void): void;
}

declare class RadarAddress extends NSObject {

	static alloc(): RadarAddress; // inherited from NSObject

	static arrayForAddresses(addresses: NSArray<RadarAddress> | RadarAddress[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarAddress; // inherited from NSObject

	readonly addressLabel: string;

	readonly borough: string;

	readonly city: string;

	confidence: RadarAddressConfidence;

	readonly coordinate: CLLocationCoordinate2D;

	readonly country: string;

	readonly countryCode: string;

	readonly countryFlag: string;

	readonly county: string;

	readonly dma: string;

	readonly dmaCode: string;

	readonly formattedAddress: string;

	readonly neighborhood: string;

	readonly number: string;

	readonly placeLabel: string;

	readonly postalCode: string;

	readonly state: string;

	readonly stateCode: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarAddressConfidence {

	None = 0,

	Exact = 1,

	Interpolated = 2,

	Fallback = 3
}

declare class RadarChain extends NSObject {

	static alloc(): RadarChain; // inherited from NSObject

	static arrayForChains(chains: NSArray<RadarChain> | RadarChain[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarChain; // inherited from NSObject

	readonly externalId: string;

	readonly metadata: NSDictionary<any, any>;

	readonly name: string;

	readonly slug: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarCircleGeometry extends RadarGeofenceGeometry {

	static alloc(): RadarCircleGeometry; // inherited from NSObject

	static new(): RadarCircleGeometry; // inherited from NSObject

	readonly center: RadarCoordinate;

	readonly radius: number;
}

declare class RadarContext extends NSObject {

	static alloc(): RadarContext; // inherited from NSObject

	static new(): RadarContext; // inherited from NSObject

	readonly country: RadarRegion;

	readonly dma: RadarRegion;

	readonly geofences: NSArray<RadarGeofence>;

	readonly place: RadarPlace;

	readonly postalCode: RadarRegion;

	readonly state: RadarRegion;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarCoordinate extends NSObject {

	static alloc(): RadarCoordinate; // inherited from NSObject

	static new(): RadarCoordinate; // inherited from NSObject

	readonly coordinate: CLLocationCoordinate2D;

	dictionaryValue(): NSDictionary<any, any>;
}

interface RadarDelegate extends NSObjectProtocol {

	didFailWithStatus(status: RadarStatus): void;

	didLogMessage(message: string): void;

	didReceiveEventsUser(events: NSArray<RadarEvent> | RadarEvent[], user: RadarUser): void;

	didUpdateClientLocationStoppedSource(location: CLLocation, stopped: boolean, source: RadarLocationSource): void;

	didUpdateLocationUser(location: CLLocation, user: RadarUser): void;
}
declare var RadarDelegate: {

	prototype: RadarDelegate;
};

declare class RadarEvent extends NSObject {

	static alloc(): RadarEvent; // inherited from NSObject

	static arrayForEvents(events: NSArray<RadarEvent> | RadarEvent[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarEvent; // inherited from NSObject

	static stringForType(type: RadarEventType): string;

	readonly _id: string;

	readonly actualCreatedAt: Date;

	readonly alternatePlaces: NSArray<RadarPlace>;

	readonly confidence: RadarEventConfidence;

	readonly createdAt: Date;

	readonly duration: number;

	readonly geofence: RadarGeofence;

	readonly live: boolean;

	readonly location: CLLocation;

	readonly place: RadarPlace;

	readonly region: RadarRegion;

	readonly type: RadarEventType;

	readonly verification: RadarEventVerification;

	readonly verifiedPlace: RadarPlace;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarEventConfidence {

	None = 0,

	Low = 1,

	Medium = 2,

	High = 3
}

declare const enum RadarEventType {

	Unknown = 0,

	UserEnteredGeofence = 1,

	UserExitedGeofence = 2,

	UserEnteredHome = 3,

	UserExitedHome = 4,

	UserEnteredOffice = 5,

	UserExitedOffice = 6,

	UserStartedTraveling = 7,

	UserStoppedTraveling = 8,

	UserEnteredPlace = 9,

	UserExitedPlace = 10,

	UserNearbyPlaceChain = 11,

	UserEnteredRegionCountry = 12,

	UserExitedRegionCountry = 13,

	UserEnteredRegionState = 14,

	UserExitedRegionState = 15,

	UserEnteredRegionDMA = 16,

	UserExitedRegionDMA = 17,

	UserStartedCommuting = 18,

	UserStoppedCommuting = 19,

	UserStartedTrip = 20,

	UserUpdatedTrip = 21,

	UserApproachingTripDestination = 22,

	UserArrivedAtTripDestination = 23,

	UserStoppedTrip = 24
}

declare const enum RadarEventVerification {

	Accept = 1,

	Unverify = 0,

	Reject = -1
}

declare class RadarGeofence extends NSObject {

	static alloc(): RadarGeofence; // inherited from NSObject

	static arrayForGeofences(geofences: NSArray<RadarGeofence> | RadarGeofence[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarGeofence; // inherited from NSObject

	readonly _description: string;

	readonly _id: string;

	readonly externalId: string;

	readonly geometry: RadarGeofenceGeometry;

	readonly metadata: NSDictionary<any, any>;

	readonly tag: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarGeofenceGeometry extends NSObject {

	static alloc(): RadarGeofenceGeometry; // inherited from NSObject

	static new(): RadarGeofenceGeometry; // inherited from NSObject
}

declare const enum RadarLocationSource {

	ForegroundLocation = 0,

	BackgroundLocation = 1,

	ManualLocation = 2,

	VisitArrival = 3,

	VisitDeparture = 4,

	GeofenceEnter = 5,

	GeofenceExit = 6,

	MockLocation = 7,

	Unknown = 8
}

declare const enum RadarLogLevel {

	None = 0,

	Error = 1,

	Warning = 2,

	Info = 3,

	Debug = 4
}

declare class RadarPlace extends NSObject {

	static alloc(): RadarPlace; // inherited from NSObject

	static arrayForPlaces(places: NSArray<RadarPlace> | RadarPlace[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarPlace; // inherited from NSObject

	readonly _id: string;

	readonly categories: NSArray<string>;

	readonly chain: RadarChain;

	readonly group: string;

	readonly location: RadarCoordinate;

	readonly metadata: NSDictionary<any, any>;

	readonly name: string;

	dictionaryValue(): NSDictionary<any, any>;

	hasCategory(category: string): boolean;

	isChain(slug: string): boolean;
}

declare class RadarPoint extends NSObject {

	static alloc(): RadarPoint; // inherited from NSObject

	static arrayForPoints(points: NSArray<RadarPoint> | RadarPoint[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarPoint; // inherited from NSObject

	readonly _description: string;

	readonly _id: string;

	readonly externalId: string;

	readonly location: RadarCoordinate;

	readonly metadata: NSDictionary<any, any>;

	readonly tag: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarPolygonGeometry extends RadarGeofenceGeometry {

	static alloc(): RadarPolygonGeometry; // inherited from NSObject

	static new(): RadarPolygonGeometry; // inherited from NSObject

	readonly coordinates: NSArray<RadarCoordinate>;
}

declare class RadarRegion extends NSObject {

	static alloc(): RadarRegion; // inherited from NSObject

	static new(): RadarRegion; // inherited from NSObject

	readonly _id: string;

	readonly code: string;

	readonly flag: string;

	readonly name: string;

	readonly type: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarRoute extends NSObject {

	static alloc(): RadarRoute; // inherited from NSObject

	static new(): RadarRoute; // inherited from NSObject

	readonly distance: RadarRouteDistance;

	readonly duration: RadarRouteDuration;

	readonly geometry: RadarRouteGeometry;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarRouteDistance extends NSObject {

	static alloc(): RadarRouteDistance; // inherited from NSObject

	static new(): RadarRouteDistance; // inherited from NSObject

	readonly text: string;

	readonly value: number;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarRouteDuration extends NSObject {

	static alloc(): RadarRouteDuration; // inherited from NSObject

	static new(): RadarRouteDuration; // inherited from NSObject

	readonly text: string;

	readonly value: number;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarRouteGeometry extends NSObject {

	static alloc(): RadarRouteGeometry; // inherited from NSObject

	static new(): RadarRouteGeometry; // inherited from NSObject

	readonly coordinates: NSArray<RadarCoordinate>;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarRouteMode {

	Foot = 1,

	Bike = 2,

	Car = 4
}

declare const enum RadarRouteUnits {

	Imperial = 0,

	Metric = 1
}

declare class RadarRoutes extends NSObject {

	static alloc(): RadarRoutes; // inherited from NSObject

	static new(): RadarRoutes; // inherited from NSObject

	readonly bike: RadarRoute;

	readonly car: RadarRoute;

	readonly foot: RadarRoute;

	readonly geodesic: RadarRouteDistance;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarSegment extends NSObject {

	static alloc(): RadarSegment; // inherited from NSObject

	static arrayForSegments(segments: NSArray<RadarSegment> | RadarSegment[]): NSArray<NSDictionary<any, any>>;

	static new(): RadarSegment; // inherited from NSObject

	readonly _description: string;

	readonly externalId: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarStatus {

	Success = 0,

	ErrorPublishableKey = 1,

	ErrorPermissions = 2,

	ErrorLocation = 3,

	ErrorNetwork = 4,

	ErrorBadRequest = 5,

	ErrorUnauthorized = 6,

	ErrorPaymentRequired = 7,

	ErrorForbidden = 8,

	ErrorNotFound = 9,

	ErrorRateLimit = 10,

	ErrorServer = 11,

	ErrorUnknown = 12
}

declare class RadarTrackingOptions extends NSObject {

	static alloc(): RadarTrackingOptions; // inherited from NSObject

	static desiredAccuracyForString(str: string): RadarTrackingOptionsDesiredAccuracy;

	static new(): RadarTrackingOptions; // inherited from NSObject

	static replayForString(str: string): RadarTrackingOptionsReplay;

	static stringForDesiredAccuracy(desiredAccuracy: RadarTrackingOptionsDesiredAccuracy): string;

	static stringForReplay(replay: RadarTrackingOptionsReplay): string;

	static stringForSync(sync: RadarTrackingOptionsSync): string;

	static syncForString(str: string): RadarTrackingOptionsSync;

	static trackingOptionsFromDictionary(dictionary: NSDictionary<any, any>): RadarTrackingOptions;

	desiredAccuracy: RadarTrackingOptionsDesiredAccuracy;

	desiredMovingUpdateInterval: number;

	desiredStoppedUpdateInterval: number;

	desiredSyncInterval: number;

	movingGeofenceRadius: number;

	replay: RadarTrackingOptionsReplay;

	showBlueBar: boolean;

	startTrackingAfter: Date;

	stopDistance: number;

	stopDuration: number;

	stopTrackingAfter: Date;

	stoppedGeofenceRadius: number;

	sync: RadarTrackingOptionsSync;

	useMovingGeofence: boolean;

	useSignificantLocationChanges: boolean;

	useStoppedGeofence: boolean;

	useVisits: boolean;

	static readonly continuous: RadarTrackingOptions;

	static readonly efficient: RadarTrackingOptions;

	static readonly responsive: RadarTrackingOptions;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarTrackingOptionsDesiredAccuracy {

	High = 0,

	Medium = 1,

	Low = 2
}

declare const enum RadarTrackingOptionsReplay {

	Stops = 0,

	None = 1
}

declare const enum RadarTrackingOptionsSync {

	All = 0,

	StopsAndExits = 1,

	None = 2
}

declare class RadarTrip extends NSObject {

	static alloc(): RadarTrip; // inherited from NSObject

	static new(): RadarTrip; // inherited from NSObject

	readonly arrived: boolean;

	readonly destinationGeofenceExternalId: string;

	readonly destinationGeofenceTag: string;

	readonly destinationLocation: RadarCoordinate;

	readonly etaDistance: number;

	readonly etaDuration: number;

	readonly externalId: string;

	readonly metadata: NSDictionary<any, any>;

	readonly mode: RadarRouteMode;
}

declare class RadarTripOptions extends NSObject {

	static alloc(): RadarTripOptions; // inherited from NSObject

	static new(): RadarTripOptions; // inherited from NSObject

	static tripOptionsFromDictionary(dict: NSDictionary<any, any>): RadarTripOptions;

	destinationGeofenceExternalId: string;

	destinationGeofenceTag: string;

	externalId: string;

	metadata: NSDictionary<any, any>;

	mode: RadarRouteMode;

	constructor(o: { externalId: string; });

	dictionaryValue(): NSDictionary<any, any>;

	initWithExternalId(externalId: string): this;
}

declare class RadarUser extends NSObject {

	static alloc(): RadarUser; // inherited from NSObject

	static new(): RadarUser; // inherited from NSObject

	readonly _description: string;

	readonly _id: string;

	readonly country: RadarRegion;

	readonly deviceId: string;

	readonly dma: RadarRegion;

	readonly foreground: boolean;

	readonly geofences: NSArray<RadarGeofence>;

	readonly insights: RadarUserInsights;

	readonly location: CLLocation;

	readonly metadata: NSDictionary<any, any>;

	readonly nearbyPlaceChains: NSArray<RadarChain>;

	readonly place: RadarPlace;

	readonly postalCode: RadarRegion;

	readonly proxy: boolean;

	readonly segments: NSArray<RadarSegment>;

	readonly source: RadarLocationSource;

	readonly state: RadarRegion;

	readonly stopped: boolean;

	readonly topChains: NSArray<RadarChain>;

	readonly trip: RadarTrip;

	readonly userId: string;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarUserInsights extends NSObject {

	static alloc(): RadarUserInsights; // inherited from NSObject

	static new(): RadarUserInsights; // inherited from NSObject

	readonly homeLocation: RadarUserInsightsLocation;

	readonly officeLocation: RadarUserInsightsLocation;

	readonly state: RadarUserInsightsState;

	dictionaryValue(): NSDictionary<any, any>;
}

declare class RadarUserInsightsLocation extends NSObject {

	static alloc(): RadarUserInsightsLocation; // inherited from NSObject

	static new(): RadarUserInsightsLocation; // inherited from NSObject

	static stringForType(type: RadarUserInsightsLocationType): string;

	readonly confidence: RadarUserInsightsLocationConfidence;

	readonly country: RadarRegion;

	readonly dma: RadarRegion;

	readonly location: RadarCoordinate;

	readonly postalCode: RadarRegion;

	readonly state: RadarRegion;

	readonly type: RadarUserInsightsLocationType;

	readonly updatedAt: Date;

	dictionaryValue(): NSDictionary<any, any>;
}

declare const enum RadarUserInsightsLocationConfidence {

	None = 0,

	Low = 1,

	Medium = 2,

	High = 3
}

declare const enum RadarUserInsightsLocationType {

	Unknown = 0,

	Home = 1,

	Office = 2
}

declare class RadarUserInsightsState extends NSObject {

	static alloc(): RadarUserInsightsState; // inherited from NSObject

	static new(): RadarUserInsightsState; // inherited from NSObject

	readonly commuting: boolean;

	readonly home: boolean;

	readonly office: boolean;

	readonly traveling: boolean;

	dictionaryValue(): NSDictionary<any, any>;
}
