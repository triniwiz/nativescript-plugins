# Accelerometer

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :x:| 


An acceleration sensor measures the acceleration applied to the device, including the force of gravity

- [startAccelerometerUpdates](accelerometer.md#startaccelerometerupdates)
- [stopAccelerometerUpdates](accelerometer.md#stopaccelerometerupdates)
- [isListening](accelerometer.md#islistening)
- [Intefaces](accelerometer.md#interfaces)
- [Enums](accelerometer.md#enums)

## Installing 

```base
    ns plugin add @triniwiz/nativescript-accelerometer
```


## API
#### startAccelerometerUpdates(...)
```ts
startAccelerometerUpdates(callback: (data: AccelerometerData) => void, options?: AccelerometerOptions): void;
```
Starts listening for accelerometer updates.

| Param   | Type     |
| :---:     | :---:     |
| data    | [AccelerometerData](accelerometer.md#accelerometerdata)  |

---

#### stopAccelerometerUpdates()
```ts
stopAccelerometerUpdates(): void;
```
Stops listening for accelerometer updates.

---

#### isListening()
```ts
isListening(): boolean;
```
Gets info about the current state of listening for accelerometer updates.
**Returns**: `boolean`

---

## Interfaces

### AccelerometerData
| Prop  | Type      |
| :---: | :---:     |
| x     |   number  |
| y     |   number  |
| z     |   number  |

### AccelerometerOptions
| Prop  | Type      |
| :---: | :---:     |
| sensorDelay|   number  |

## Enums

### SensorDelay
| Members   | Value     | Description |
| :---:     | :---:     | :---       |
| Normal    | "normal"  | rate (default) suitable for screen orientation changes |
| Game      | "game"    | rate suitable for games |
| UI        | "ui"      | rate suitable for the user interface | 
| Fastest   | "fastest" | get sensor data as fast as possible |