import { Utils } from '@nativescript/core';
import { startButNotStopped, stopButNotStarted, AccelerometerOptions, AccelerometerData, SensorDelay } from './common';

export { SensorDelay };
declare const io;
let accelerometer;
let dataView: Float32Array;

function getNativeDelay(options?: AccelerometerOptions): number {
	if (!options || !options.sensorDelay) {
		return 0;
	}

	switch (options.sensorDelay) {
		case SensorDelay.Normal:
			return 0;
		case SensorDelay.UI:
			return 1;
		case SensorDelay.Game:
			return 2;
		case SensorDelay.Fastest:
			return 3;
	}
}

export function startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions) {
	if (!accelerometer) {
		accelerometer = new io.github.triniwiz.plugins.accelerometer.Accelerometer(Utils.android.getApplicationContext());
		dataView = new Float32Array((<any>ArrayBuffer).from(accelerometer.getData()));
	}
	accelerometer.setSensorDelay(getNativeDelay(options));

	const wrappedCallback = zonedCallback(callback);
	accelerometer.setCallback(
		new io.github.triniwiz.plugins.accelerometer.Accelerometer.Callback({
			onData() {
				wrappedCallback({
					x: dataView[0],
					y: dataView[1],
					z: dataView[2],
				});
			},
		}),
	);
	accelerometer.startAccelerometerUpdates();
}

export function stopAccelerometerUpdates() {
	accelerometer.stopAccelerometerUpdates();
	// if (sensorListener) {
	// 	sensorManager.unregisterListener(sensorListener);
	// 	sensorListener = undefined;
	// } else {
	// 	console.log(stopButNotStarted);
	// }
}

export function isListening(): boolean {
	return accelerometer.isListening;
}
