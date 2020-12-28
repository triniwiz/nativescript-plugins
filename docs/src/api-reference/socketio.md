# SocketIO

<p>
<a href="https://www.npmjs.com/package/@triniwiz/nativescript-socketio">
<img src="https://img.shields.io/npm/v/@triniwiz/nativescript-socketio.svg?style=for-the-badge"
            alt="NativeScript SocketIO on NPM"/></a>

<a href="https://www.npmjs.com/package/@triniwiz/nativescript-socketio">
<img src="https://img.shields.io/npm/dt/@triniwiz/nativescript-socketio.svg?style=for-the-badge&label=npm%20downloads&" alt="NativeScript SocketIO on NPM"></a>

<a href="https://twitter.com/intent/follow?screen_name=triniwiz">
<img src="https://img.shields.io/twitter/follow/triniwiz?style=style=for-the-badge&logo=twitter" alt="follow on Twitter"></a>
</p>

|   Android Device  |   Android Emulator    |   iOS Device  |   iOS Simulator   |
| :-------------:     |:-------------:        |:-------------:| :-----:            |
| :white_check_mark:|:white_check_mark:     |:white_check_mark:|    :white_check_mark:| 


- [SocketIO(...)](socketio.md#socketio-2)
- [connect(...)](socketio.md#connect)
- [disconnect(...)](socketio.md#disconnect)
- [on(...)](socketio.md#on)
- [once(...)](socketio.md#once)
- [off(...)](socketio.md#off)
- [emit(...)](socketio.md#emit)
- [joinNamespace(...)](socketio.md#joinnamespace)
- [leaveNamespace(...)](socketio.md#leavenamespace)





::: warning Note
This currently does not yet support Socket:IO v3.x
:::

Please see [this](https://github.com/socketio/socket.io-client-java/issues/641#issuecomment-741436309) for Android

Please see [this](https://github.com/socketio/socket.io-client-swift/issues/1308) for iOS

## Installing 

```bash
    ns plugin add @triniwiz/nativescript-socketio
```

## Usage

```ts
import { SocketIO } from '@triniwiz/nativescript-socketio';
const socketIO = new SocketIO(url, opts);

// connect
socketIO.connect();

// emit data
socketIO.emit(event,data);

// listen for events

socketIO.on(event,callback);
```

## API

### SocketIO(...)
```ts
 new SocketIO("server-url");
```

Creates a new SocketIO instance

| Param   | Type    | Required |
| :---:   | :---:   | :---: |
| url    | string  | :negative_squared_cross_mark: |
| options    | Object  | :white_check_mark: |

**Returns**: [SocketIO](socketio.md#socketio-2) 

---


### connect()
```ts
 connect(): void;
```

Connects the instance to the url supplied in the contructor

---

### disconnect()
```ts
 disconnect(): void;
```

Disconnects the instance from the url supplied in the contructor


### on(...)
```ts
 on(event: string, callback: (...data)=>void): void;
```

Listen to  an event


### once(...)
```ts
 once(event: string, callback: (...data)=>void): void;
```

Listen to a one time event

### off(...)
```ts
 off(event: string): void;
```

Removes event listener

### emit(...)
```ts
 emit(event: string, ...payload: any[]): void;
```

Emits data


### joinNamespace(...)
```ts
 joinNamespace(namespace: string): void;
```

Joins a namespace


### leaveNamespace(...)
```ts
 leaveNamespace(): void;
```

Leaves the current namespace