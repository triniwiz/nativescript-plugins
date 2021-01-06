import { DemoSharedBase } from '../utils';
import { AccelerometerData, isListening, startAccelerometerUpdates, stopAccelerometerUpdates } from '@triniwiz/nativescript-accelerometer';

export class DemoSharedNativescriptAccelerometer extends DemoSharedBase {

	_callback: (data: AccelerometerData) => void;
	start(callback: (data: AccelerometerData) => void) {
		this._callback = callback;
		startAccelerometerUpdates(callback, { sensorDelay: "ui" });
	}

	stop() {
		stopAccelerometerUpdates();
	}

	isAccelerometerListening() {
		return isListening();
	}

	destroy() {
		console.log("AccelerometerService.destroy()")
		if (this.isAccelerometerListening()) {
			this.stop();
		}
	}

	toggleUpdates() {
		if (this.isAccelerometerListening()) {
			this.stop();
		} else {
			this.start(this._callback);
		}
	}

}
