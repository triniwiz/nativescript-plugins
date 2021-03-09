import { startButNotStopped, stopButNotStarted, AccelerometerOptions, AccelerometerData, SensorDelay } from './common';

export { SensorDelay };

let accManager;
let isListeningForUpdates = false;
const main_queue = dispatch_get_current_queue();

function getNativeDelay(options?: AccelerometerOptions): number {
	if (!options || !options.sensorDelay) {
		return 0.2;
	}

	switch (options.sensorDelay) {
		case SensorDelay.Normal:
			return 0.2;
		case SensorDelay.UI:
			return 0.06;
		case SensorDelay.Game:
			return 0.02;
		case SensorDelay.Fastest:
			return 0.001;
	}
}

export function startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions) {
	if (isListeningForUpdates) {
		console.log(startButNotStopped);
		stopAccelerometerUpdates();
	}

	const wrappedCallback = zonedCallback(callback);

	if (!accManager) {
		accManager = CMMotionManager.alloc().init();
	}

	accManager.accelerometerUpdateInterval = getNativeDelay(options);

	if (accManager.accelerometerAvailable) {
		var queue = NSOperationQueue.alloc().init();
		accManager.startAccelerometerUpdatesToQueueWithHandler(queue, (data, error) => {
			dispatch_async(main_queue, () => {
				wrappedCallback({
					x: data.acceleration.x,
					y: data.acceleration.y,
					z: data.acceleration.z,
				});
			});
		});

		isListeningForUpdates = true;
	} else {
		throw new Error('Accelerometer not available.');
	}
}

export function stopAccelerometerUpdates() {
	if (isListeningForUpdates) {
		accManager.stopAccelerometerUpdates();
		isListeningForUpdates = false;
	} else {
		console.log(stopButNotStarted);
	}
}

export function isListening(): boolean {
	return isListeningForUpdates;
}
