import { Utils } from "@nativescript/core";
import { startButNotStopped, stopButNotStarted, AccelerometerOptions, AccelerometerData, SensorDelay } from "./common";

export { SensorDelay }

const baseAcceleration = -9.81;
let sensorListener: android.hardware.SensorEventListener;
let sensorManager: android.hardware.SensorManager;
let accelerometerSensor: android.hardware.Sensor;

function getNativeDelay(options?: AccelerometerOptions): number {
    if (!options || !options.sensorDelay) {
        return android.hardware.SensorManager.SENSOR_DELAY_NORMAL;
    }

    switch (options.sensorDelay) {
        case "normal":
            return android.hardware.SensorManager.SENSOR_DELAY_NORMAL;

        case "game":
            return android.hardware.SensorManager.SENSOR_DELAY_GAME;

        case "ui":
            return android.hardware.SensorManager.SENSOR_DELAY_UI;

        case "fastest":
            return android.hardware.SensorManager.SENSOR_DELAY_FASTEST;
    }
}

export function startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions) {
    if (isListening()) {
        console.log(startButNotStopped);
        stopAccelerometerUpdates();
    }

    const wrappedCallback = zonedCallback(callback);
    const context: android.content.Context = Utils.ad.getApplicationContext();
    if (!context) {
        throw Error("Could not get Android application context.")
    }

    if (!sensorManager) {
        sensorManager = context.getSystemService(android.content.Context.SENSOR_SERVICE);

        if (!sensorManager) {
            throw Error("Could not initialize SensorManager.")
        }
    }

    if (!accelerometerSensor) {
        accelerometerSensor = sensorManager.getDefaultSensor(android.hardware.Sensor.TYPE_ACCELEROMETER);
        if (!accelerometerSensor) {
            throw Error("Could get accelerometer sensor.")
        }
    }


    sensorListener = new android.hardware.SensorEventListener({
        onAccuracyChanged: (sensor, accuracy) => {
        },
        onSensorChanged: (event) => {
            wrappedCallback({
                x: event.values[0] / baseAcceleration,
                y: event.values[1] / baseAcceleration,
                z: event.values[2] / baseAcceleration
            })
        }
    });

    const nativeDelay = getNativeDelay(options);
    sensorManager.registerListener(
        sensorListener,
        accelerometerSensor,
        nativeDelay
    );
}

export function stopAccelerometerUpdates() {
    if (sensorListener) {
        sensorManager.unregisterListener(sensorListener);
        sensorListener = undefined;
    } else {
        console.log(stopButNotStarted);
    }
}

export function isListening(): boolean {
    return !!sensorListener;
}