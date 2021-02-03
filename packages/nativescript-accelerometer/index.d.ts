
export {
    AccelerometerData,
    SensorDelay,
    AccelerometerOptions
} from './common';

export function startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions): void;
export function stopAccelerometerUpdates(): void;
export function isListening(): boolean;