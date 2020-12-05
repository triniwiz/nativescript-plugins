import { AccelerometerOptions, AccelerometerData } from ".";
import { startButNotStopped, stopButNotStarted } from "./common";

let accManager;
let isListeningForUpdates = false;
const main_queue = dispatch_get_current_queue();

function getNativeDelay(options?: AccelerometerOptions): number {
    if (!options || !options.sensorDelay) {
        return 0.2;
    }

    switch (options.sensorDelay) {
        case "normal":
            return 0.2;
        case "ui":
            return 0.06;
        case "game":
            return 0.02
        case "fastest":
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
                    z: data.acceleration.z
                })
            })
        });

        isListeningForUpdates = true;
    } else {
        throw new Error("Accelerometer not available.")
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