export const stopButNotStarted = "[@triniwiz/nativescript-accelerometer] stopAccelerometerUpdates() called, but currently not listening. Ignoring...";
export const startButNotStopped = "[@triniwiz/nativescript-accelerometer] startAccelerometerUpdates() called, but there is active listener. Will stop the current listener and switch to the new one.";

export interface AccelerometerData {
    x: number;
    y: number;
    z: number;
}

export enum SensorDelay {
    Normal = "normal",
    Game = "game",
    UI = "ui",
    Fastest = "fastest"
}
export interface AccelerometerOptions {
    sensorDelay?: SensorDelay;
}