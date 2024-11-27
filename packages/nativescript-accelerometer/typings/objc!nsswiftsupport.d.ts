declare class NSCAccelerometer extends NSObject {
	static alloc(): NSCAccelerometer; // inherited from NSObject

	static new(): NSCAccelerometer; // inherited from NSObject

	data: NSData;

	readonly isAvailable: boolean;

	readonly isListening: boolean;

	sensorDelay: NSCAccelerometerSensorDelay;

	static readonly accManager: CMMotionManager;

	startAccelerometerUpdates(): void;

	stopAccelerometerUpdates(): void;
}

declare const enum NSCAccelerometerSensorDelay {
	Normal = 0,

	Game = 1,

	UI = 2,

	Fastest = 3,
}
