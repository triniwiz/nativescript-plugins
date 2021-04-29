# Pusher-Channels


## Installation

`ns plugin add @triniwiz/nativescript-pusher-channels'`

### Usage
```typescript
import { TNSPusher } from '@triniwiz/nativescript-pusher-channels';
```

## Initialization

```js
const socket = new TNSPusher(APP_KEY, {
  cluster: APP_CLUSTER,
});
```

You can get your `APP_KEY` and `APP_CLUSTER` from the [Pusher Channels dashboard](https://dashboard.pusher.com/).


## Configuration

There are a number of configuration parameters which can be set for the client, which can be passed as an object to the Pusher constructor, i.e.:

```js
const socket = new TNSPusher(APP_KEY, {
  cluster: APP_CLUSTER,
  authEndpoint: 'http://example.com/pusher/auth',
});
```

For most users, there is little need to change these. See [client API guide](http://pusher.com/docs/client_api_guide/client_connect) for more details.

#### `authEndpoint` (String)

Endpoint on your server that will return the authentication signature needed for private and presence channels. Defaults to `'/pusher/auth'`.

For more information see [authenticating users](https://pusher.com/docs/authenticating_users).


#### `cluster` (String)

Specifies the cluster that pusher-js should connect to. [If you'd like to see a full list of our clusters, click here](https://pusher.com/docs/clusters). If you do not specify a cluster, `mt1` will be used by default.

```js
const socket = new TNSPusher(APP_KEY, {
  cluster: APP_CLUSTER,
});
```

#### `activityTimeout` (Integer)

If there is no activity for this length of time (in milliseconds), the client will ping the server to check if the connection is still working. The default value is set by the server. Setting this value to be too low will result in unnecessary traffic.

#### `pongTimeout` (Integer)

Time before the connection is terminated after a ping is sent to the server. Default is 30000 (30s). Low values will cause false disconnections, if latency is high.

## Connection

A connection to Pusher Channels is established by providing your `APP_KEY` and `APP_CLUSTER` to the constructor function:

```js
const socket = new TNSPusher(APP_KEY, {
  cluster: APP_CLUSTER,
});
```

This returns a socket object which can then be used to subscribe to channels.

One reason this connection might fail is your account being over its' limits. You can detect this in the client by binding to the `error` event on the `pusher.connection` object. For example:

```js
var pusher = new TNSPusher('app_key');
pusher.connection.bind( 'error', function( err ) {
  if( err.error.data.code === 4004 ) {
    log('Over limit!');
  }
});
```

You may disconnect again by invoking the `disconnect` method:

```js
socket.disconnect();
```

### Connection States
The connection can be in any one of these states.

**State**|**Note**
--- | ---
initialized|Initial state. No event is emitted in this state.
connecting|All dependencies have been loaded and Channels is trying to connect. The connection will also enter this state when it is trying to reconnect after a connection failure.
connected|The connection to Channels is open and authenticated with your app.
unavailable|The connection is temporarily unavailable. In most cases this means that there is no internet connection. It could also mean that Channels is down
failed|Channels is not supported by the browser. This implies that WebSockets are not natively available and an HTTP-based transport could not be found.
disconnected|The Channels connection was previously connected and has now intentionally been closed.

### Socket IDs

Making a connection provides the client with a new `socket_id` that is assigned by the server. This can be used to distinguish the client's own events. A change of state might otherwise be duplicated in the client. More information on this pattern is available [here](http://pusherapp.com/docs/duplicates).

It is also stored within the socket, and used as a token for generating signatures for private channels.

## Subscribing to channels

### Public channels

The default method for subscribing to a channel involves invoking the `subscribe` method of your socket object:

```js
const channel = socket.subscribe('my-channel');
```

This returns a Channel object which events can be bound to.

### Private channels

Private channels are created in exactly the same way as normal channels, except that they reside in the 'private-' namespace. This means prefixing the channel name:

```js
const channel = socket.subscribe('private-my-channel');
```

## Unsubscribing from channels

To unsubscribe from a channel, invoke the `unsubscribe` method of your socket object:

```js
socket.unsubscribe('my-channel');
```

Unsubscribing from private channels is done in exactly the same way, just with the additional `private-` prefix:

```js
socket.unsubscribe('private-my-channel');
```

## Binding to events

Event binding takes a very similar form to the way events are handled in jQuery. You can use the following methods either on a channel object, to bind to events on a particular channel; or on the pusher object, to bind to events on all subscribed channels simultaneously.

### `bind` and `unbind`
Binding to "new-message" on channel: The following logs message data to the console when "new-message" is received
```js
channel.bind('new-message', function (data) {
  console.log(data.message);
});
```


For client-events on presence channels, bound callbacks will be called with an additional argument. This argument is an object containing the `user_id` of the user who triggered the event

```js
presenceChannel.bind('client-message', function (data, metadata) {
  console.log('received data from', metadata.user_id, ':', data);
});
```

Unsubscribe behaviour varies depending on which parameters you provide it with. For example:

```js
// Remove just `handler` for the `new-comment` event
channel.unbind('new-comment', handler);

// Remove all handlers for the `new-comment` event
channel.unbind('new-comment');

// Remove `handler` for all events
channel.unbind(null, handler);

// Remove all handlers on `channel`
channel.unbind();
```

### `unbind_all`

The `unbind_all` method is equivalent to calling `unbind()` and `unbind_global()` together; it removes all bindings, global and event specific.

## Default events

There are a number of events which are used internally, but can also be of use elsewhere, for instance `subscribe`. There is also a `state_change` event - which fires whenever there is a state change. You can use it like this:

```js
pusher.connection.bind('state_change', function(states) {
  // states = {previous: 'oldState', current: 'newState'}
  console.log("Channels current state is " + states.current);
});
```

## Connection Events

To listen for when you connect to Pusher Channels:

```js
socket.connection.bind('connected', callback);
```

And to bind to disconnections:

```js
socket.connection.bind('disconnected', callback);
```