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

export function startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions): void;
export function stopAccelerometerUpdates(): void;
export function isListening(): boolean;