import { time } from "@nativescript/core/profiling";
import { AccelerometerData } from "@triniwiz/nativescript-accelerometer";

const FORCE_THRESHOLD = 0.5;
const TIME_THRESHOLD = 100;
const SHAKE_TIMEOUT = 800;
const SHAKE_THROTTLE = 1000;
const SHAKE_COUNT = 3;

export class ShakeDetector {
    private lastTime = 0;
    private lastShake = 0;
    private lastForce = 0;
    private shakeCount = 0;
    private cb: () => void;

    constructor(callback: () => void) {
        this.cb = zonedCallback(callback) as () => void;
    }

    onSensorData(data: AccelerometerData) {
        const now = time();
        if ((now - this.lastForce) > SHAKE_TIMEOUT) {
            this.shakeCount = 0;
        }

        const timeDelta = now - this.lastTime;
        if (timeDelta > TIME_THRESHOLD) {
            const forceVector = Math.abs(Math.sqrt(Math.pow(data.x, 2) + Math.pow(data.y, 2) + Math.pow(data.z, 2)) - 1);

            if (forceVector > FORCE_THRESHOLD) {
                this.shakeCount++;
                if ((this.shakeCount >= SHAKE_COUNT) && (now - this.lastShake > SHAKE_THROTTLE)) {
                    this.lastShake = now;
                    this.shakeCount = 0;

                    this.cb();
                }
                this.lastForce = now;
            }

            this.lastTime = now;
        }
    }
}