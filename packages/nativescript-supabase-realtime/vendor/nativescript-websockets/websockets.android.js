/*****************************************************************************************
 * (c) 2015-2018, Master Technology
 * Licensed under the MIT license or contact me for a support, changes, enhancements,
 * and/or if you require a commercial licensing
 *
 * Any questions please feel free to email me or put a issue up on github
 *
 * Version 1.5.2                                              Nathan@master-technology.com
 ****************************************************************************************/
"use strict";

/* jshint node: true, browser: true, unused: false, undef: false, camelcase: false, bitwise: false */
/* global android, java, org, require, module */

// --------------------------------------------

var commonWebSockets = require("./websockets-common");

/**
 * Checks for running on a emulator
 * @returns {boolean}
 */
var checkForEmulator = function() {
    //noinspection JSUnresolvedVariable
    var res = android.os.Build.FINGERPRINT;
    return res.indexOf("generic") !== -1;
};


// IPV6 doesn't work properly on emulators; so we have to disable it
if (checkForEmulator()) {
    //noinspection JSUnresolvedVariable
    java.lang.System.setProperty("java.net.preferIPv6Addresses", "false");
    //noinspection JSUnresolvedVariable
    java.lang.System.setProperty("java.net.preferIPv4Stack", "true");
}

var toHashMap = function(obj) {
    var map = new java.util.HashMap();

    for (var property in obj) {
        if (!obj.hasOwnProperty) continue;
        if (obj[property] === null) continue;

        var val = obj[property];
        switch (typeof val) {
            case 'object':
                map.put(property, toHashMap(val, map));
                break;

            case 'boolean':
                map.put(property, java.lang.Boolean.valueOf(String(val)));
                break;

            case 'number':
                if (Number(val) === val && val % 1 === 0) {
                    map.put(property, java.lang.Long.valueOf(String(val)));
                } else {
                    map.put(property, java.lang.Double.valueOf(String(val)));
                }
                break;

            case 'string':
                map.put(property, String(val));
                break;
        }
    }

    return map;
};

//noinspection JSUnresolvedVariable
/**
 * This is our extended class that gets the messages back from the Native ANDROID class
 * We use a thin shell to just facilitate communication from ANDROID to our JS code
 * We also use this class to try and standardize the messages
 */
var _WebSocket = org.java_websocket.client.WebSocketClient.extend('technology.master.nativescript.WebSocket', {
    fragmentInfo: {type: 0, data: [], sizes: 0},
    wrapper: null,
    debug: false,
    onOpen: function () {
        if (this.debug) {
            console.log("WebSocket Event: OnOpen");
        }
        if (this.wrapper) {
            this.wrapper._notify("open", [this.wrapper]);
        }
    },
    onClose: function (code, reason) {
        if (this.debug) {
            console.log("WebSocket Event: OnClose", code, reason);
        }
        if (this.wrapper) {
            // org.java_websocket.WebSocketImpl.closeConnection() currently executes this callback prior to updating readystate to CLOSED
            // and as such there are cases when the readystate is still showing as OPEN when this called. In short, the websocket connection
            // still appears to be up when it is not which is makes things like coding auto reconnection logic problematic. This seems like
            // an issue/bug in org.java_websocket.WebSocketImpl.closeConnection(). Regardless, as a workaround we pass control back to
            // closeConnection() prior to passing the notification along so that the readystate gets updated to CLOSED.
            // TODO: remove this when the readystate issue gets resolved.
			      var self = this;
            setTimeout(function() {
                if (self.wrapper) {
                    self.wrapper._notify('close', [self.wrapper, code, reason])
                    self.wrapper = null;  // Clean up memory
                }
            }, 1);
        }
    },
    onMessage: function (message) {
        if (this.debug) {
            console.log("WebSocket Event: OnMessage", message);
        }
    	// Check for Native Java Objects
		if (typeof message === "object" && typeof message.getClass === 'function') {
    		this.onMessageBinary(message);
    		return;
		}

		// Should be a JavaScript String or ArrayBuffer
        if (this.wrapper) {
            this.wrapper._notify("message", [this.wrapper, message]);
        }
    },
    onMessageBinary: function(binaryMessage) {
        if (this.debug) {
            console.log("WebSocket Event: OnMessageBinary");
        }

        if (this.wrapper && binaryMessage) {

        	// Is a Native JAVA Buffer type
			if (typeof binaryMessage.rewind === 'function') {

				// Make sure binaryMessage is at beginning of buffer
				//noinspection JSUnresolvedFunction
				binaryMessage.rewind();

				// Convert Binary Message into ArrayBuffer/Uint8Array
				//noinspection JSUnresolvedFunction
				var count = binaryMessage.limit();
				var view = new Uint8Array(count);
				for (var i = 0; i < count; i++) {
					view[i] = binaryMessage.get(i);
				}
				binaryMessage = null;
				this.wrapper._notify("message", [this.wrapper, view.buffer]);
			} else {
				// If this is already an a ArrayBuffer

				//console.log("TO:", Object.prototype.toString.call(binaryMessage));

				this.wrapper._notify("message", [this.wrapper, binaryMessage]);
			}
		}
    },
    onPong: function(){
        if (this.debug) {
            console.log("WebSocket Event: onPong");
        }

    },
    onError: function (err) {
        if (this.debug) {
            console.log("WebSocket Event: onError", err);
        }
        if (this.wrapper) {
            this.wrapper._notify("error", [this.wrapper, err]);
        }
    },
    onFragment: function (fragment) {
        var optCode = fragment.optcode.toString();
        if (this.debug) {
            console.log("WebSocket Event: onFragment", optCode);
        }

        if (optCode !== "CONTINUOUS") {
            if (this.fragmentInfo.type !== 0) {
                console.log("Missing Fragment info, skipped fragment");
            }
            // Reset our buffer size when we have a new fragment chain
            this.fragmentInfo.sizes = 0;
            if (optCode === "TEXT") {
                this.fragmentInfo.type = 1;
            } else if (optCode === "BINARY") {
                this.fragmentInfo.type = 2;
            } else {
                console.log("Unknown Fragment code: ", optCode);
                this.fragmentInfo.type = 0;
            }
        }

        var data = fragment.getPayloadData();
        this.fragmentInfo.sizes += data.limit();
        this.fragmentInfo.data.push(data);
        if (fragment.fin === true) {
            var view = new Uint8Array(this.fragmentInfo.sizes);
            for (var i = 0, dst = 0; i < this.fragmentInfo.data.length; i++) {
                data = this.fragmentInfo.data[i];
                var count = data.limit();
                for (var src = 0; src < count; src++, dst++) {
                    view[dst] = data.get(src);
                }
            }
            data = null;
            this.fragmentInfo.data = [];

            if (this.wrapper) {
                // Do our final message callback
                if (this.fragmentInfo.type === 2) {
                    this.wrapper._notify("message", [this.wrapper, view.buffer]);
                } else {
                    this.wrapper._notify("message", [this.wrapper, UTF8ArrayToStr(view)]);
                }
                view = null;
            }

            // Reset back to unknown type
            this.fragmentInfo.type = 0;
        }


        if (this.wrapper) {
            this.wrapper._notify("fragment", [this.wrapper, fragment]);
        }
    },
    onWebsocketHandshakeReceivedAsClient: function (handshake) {
        if (this.debug) {
            console.log("WebSocket Event: Handshake Received", handshake);
        }
        if (this.wrapper) {
            this.wrapper._notify("handshake", [this.wrapper, handshake]);
        }
    },
    onSetSSLParameters: function (sslParameters) {
        // https://github.com/TooTallNate/Java-WebSocket/wiki/No-such-method-error-setEndpointIdentificationAlgorithm
        if (global.android.os.Build.VERSION.SDK_INT >= 24) {
            this.super.onSetSSLParameters(sslParameters);
        }
    }
});

/**
 * This is the Constructor for creating a WebSocket
 * @param url {String} - url to open, "ws://" or "wss://"
 * @param options {Object} - options
 * @constructor
 */
var NativeWebSockets = function(url, options) {
    options = options || {};
    this._callbacks = {open: [], close: [], message: [], error: [], fragment: [], handshake: [], ping: [], pong: []}; // Ping/Pong not supported yet
    this._hasOpened = false;
    this._queue = [];
    this._queueRunner = null;
    this._sslSocketFactory = options.sslSocketFactory || null;
    this._debug = (options.debug === true || options.debug > 0);

    // TODO: Replace Hack when we support protocols in Android; we want to "emulate" that the first protocol sent was accepted
    this._protocol = options.protocols && options.protocols[0] || "";

    this._browser = !!options.browser;
    this._timeout = options.timeout;
    this._url = url.replace(/\s/g,'+');

    //noinspection JSUnresolvedVariable
    this._proxy = options.proxy;

    this._timeout = options.timeout || 10000;

    this._headers = options.headers || [];
    if (this._debug === true) {
        org.java_websocket.WebSocketImpl.DEBUG = true;
    }

    this._reCreate();
};

/**
 * This function is used to open and re-open sockets so that you don't have to re-create a whole new websocket class
 * @private
 */
NativeWebSockets.prototype._reCreate = function() {
    var isWSS = (this._url.indexOf("wss:") === 0);

    //noinspection JSUnresolvedVariable,JSUnresolvedFunction
    var uri = new java.net.URI(this._url);

    if (!this._headers.hasOwnProperty("Origin")) {
        var originScheme =  isWSS ? "https" : "http";
        var originHost = uri.getPort() !== -1 ? uri.getHost() + ":" + uri.getPort() : uri.getHost();
        this._headers["Origin"] = originScheme + "://" + originHost;
    }

    // TODO: Add Per-message deflate?
	var knownExtensions = new java.util.ArrayList();

    // Must have a protocol, even if it is blank
	var knownProtocols = new java.util.ArrayList();
    if(this._protocol){
        knownProtocols.add(new org.java_websocket.protocols.Protocol(this._protocol));
    } else {
	    knownProtocols.add(new org.java_websocket.protocols.Protocol(""));
	}

	// Clear old memory if used...
	if (this._socket && this._socket.wrapper) {
	    this._socket.wrapper = null;
	    this._socket = null;
    }

    //noinspection JSUnresolvedVariable,JSUnresolvedFunction
    this._socket = new _WebSocket(uri, new org.java_websocket.drafts.Draft_6455(knownExtensions, knownProtocols), toHashMap(this._headers), this._timeout);

    //noinspection JSValidateTypes
    // Create linking and values for the socket controller.
    this._socket.wrapper = this;
    this._socket.debug = this._debug;

    // check for Proxy
    var proxy = null;
    if (this._proxy) {
        if (String.isString(this._proxy)) {
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            proxy = new java.net.Proxy(java.net.Proxy.Type.HTTP, new java.net.InetSocketAddress( this._proxy, 80 ) );
        } else {
            //noinspection JSUnresolvedVariable,JSUnresolvedFunction
            proxy = new java.net.Proxy(java.net.Proxy.Type.HTTP, new java.net.InetSocketAddress( this._proxy.address, this._proxy.port || 80 ) );
        }
    }
    if (proxy) {
        //noinspection JSUnresolvedFunction
        this._socket.setProxy(proxy);
    }

    // Check for SSL/TLS
    if (isWSS) {
		var socketFactory;
		if (this._sslSocketFactory) {
			socketFactory = this._sslSocketFactory;
		} else {
			//noinspection JSUnresolvedFunction,JSUnresolvedVariable
			var sslContext = javax.net.ssl.SSLContext.getInstance( "TLS" );
			sslContext.init( null, null, null );
			//noinspection JSUnresolvedFunction
			socketFactory = sslContext.getSocketFactory();
		}
        //noinspection JSUnresolvedFunction
        this._socket.setSocket( socketFactory.createSocket() );
    }
};

/**
 * This function is used to send the notifications back to the user code in the Advanced webSocket mode
 * @param event {String} - event name ("message", "open", "close", "error")
 * @param data {String|Array|ArrayBuffer}
 * @private
 */
NativeWebSockets.prototype._notify = function(event, data) {
   var eventCallbacks = this._callbacks[event];
   for (var i=0;i<eventCallbacks.length;i++) {
       if (eventCallbacks[i].t) {
           eventCallbacks[i].c.apply(eventCallbacks[i].t, data);
       } else {
           eventCallbacks[i].c.apply(this, data);
       }
   }
};

/**
 * This function is used to send the notifications back to the user code in the Browser webSocket mode
 * @param event {String} - Event name ("message", "open", "close", "error")
 * @param data {String|Array|ArrayBuffer} - The event Data
 * @private
 */
NativeWebSockets.prototype._notifyBrowser = function(event, data) {
    var eventResult;
    switch (event) {
        case 'open':
            eventResult = new commonWebSockets.Event({currentTarget: this, srcElement: this, target: this, type: event});
            if (typeof this.onopen === "function") {
                this.onopen.call(this, eventResult);
            }
            break;
        case 'close':
            eventResult = new commonWebSockets.Event({currentTarget: this, srcElement: this, target: this, type: event, code: data[1], reason: data[2], wasClean: data[3]});
            if (typeof this.onclose === "function") {
                this.onclose.call(this, eventResult);
            }
            break;
        case 'message':
            eventResult = new commonWebSockets.Event({currentTarget: this, srcElement: this, target: this, type: event, data: data[1], ports: null, source: null, lastEventId: ""});
            if (typeof this.onmessage === "function") {
                this.onmessage.call(this,eventResult);
            }
            break;
        case 'error':
            eventResult = new commonWebSockets.Event({currentTarget: this, srcElement: this, target: this, type: event, error: data[1], filename: "", lineno: 0});
            if (typeof this.onerror === "function") {
                this.onerror.call(this,eventResult);
            }
            break;
        default: return;
    }
    var eventCallbacks = this._callbacks[event];
    for (var i=0;i<eventCallbacks.length;i++) {
        eventCallbacks[i].c.call(this, eventResult);
    }
};

/**
 * Attach an event to this webSocket
 * @param event {String} - Event Type ("message", "open", "close", "error")
 * @param callback {Function} - the function to run on the event
 * @param thisArg {Object} - the "this" to use for calling your function, defaults to this current webSocket "this"
 */
NativeWebSockets.prototype.on = function(event, callback, thisArg) {
    this.addEventListener(event, callback, thisArg);
};

/**
 * Detaches an event from this websocket
 * If no callback is provided all events are cleared of that type.
 * @param event {String} - Event to detach from
 * @param callback {Function} - the function you registered
 */
NativeWebSockets.prototype.off = function(event, callback) {
    this.removeEventListener(event, callback);
};

/**
 * Attach an event to this webSocket
 * @param event {String} - Event Type ("message", "open", "close", "error")
 * @param callback {Function} - the function to run on the event
 * @param thisArg {Object} - the "this" to use for calling your function, defaults to this current webSocket "this"
 */
NativeWebSockets.prototype.addEventListener = function(event, callback, thisArg) {
    if (!Array.isArray(this._callbacks[event])) {
        throw new Error("addEventListener passed an invalid event type " + event);
    }
    this._callbacks[event].push({c: callback, t: thisArg});
};

/**
 * Detaches an event from this webSocket
 * If no callback is provided all events are cleared of that type.
 * @param event {String} - Event to detach from
 * @param callback {Function} - the function you registered
 */
NativeWebSockets.prototype.removeEventListener = function(event, callback) {
    if (!Array.isArray(this._callbacks[event])) {
        throw new Error("Invalid event type in removeEventListener " + event);
    }
    if (callback) {
        var eventCallbacks = this._callbacks[event];
        for (var i=eventCallbacks.length-1;i>=0;i--) {
            if (eventCallbacks[i].c === callback) {
                eventCallbacks.splice(i, 1);
            }
        }
    } else {
        this._callbacks[event] = [];
    }

};

/**
 This opens or re-opens a webSocket.
 */
NativeWebSockets.prototype.open = function() {
    if (this._hasOpened) {
        // Browser WebSockets aren't allowed to re-open
        if (this._browser) {
            return;
        }

        if (this.state() >= 3) {
            this._socket.wrapper = null;
            this._socket = null;
            this._reCreate();
        } else {
            return;
        }
    }
    this._hasOpened = true;
    //noinspection JSUnresolvedFunction
    this._socket.connect();
};

/**
 * This closes your webSocket
 * @param code {Number} - The value to send as the close reason
 * @param message {String} - The message as to why you are closing
 */
NativeWebSockets.prototype.close = function(code, message) {
    if (arguments.length) {
       this._socket.close(code, message || "");
    } else {
       this._socket.close();
    }
};

/**
 * This sends a Text or Binary Message (Allows Buffering of messages if this is an advanced WebSocket)
 * @param message {string|Array|ArrayBuffer} - Message to send
 * @returns {boolean} - returns false if it is unable to send the message at this time, it will queue them up and try later...
 */
NativeWebSockets.prototype.send = function(message) {
    var state = this.state();

    // If we have a queue, we need to start processing it...
    if (this._queue.length && state === this.OPEN) {
        var sendSuccess = true;
        while (this._queue.length && sendSuccess) {
            var oldMessage = this._queue.pop();
            sendSuccess = this._send(oldMessage);
        }
        if (sendSuccess) {
            if (this._queueRunner) {
                clearTimeout(this._queueRunner);
                this._queueRunner = null;
            }
        } else {
            if (message != null && !this._browser) {
                this._queue.push(message.slice(0));
                this._startQueueRunner();
            }
            return false;
        }
    }

    // You shouldn't be sending null/undefined messages; but if you do -- we won't error out.
    if (message === null || message === undefined) {
        this._startQueueRunner();
        return false;
    }

    // If the socket isn't open, or we have a queue length; we are
    if (state !== this.OPEN || this._queue.length) {
        if (this._browser) {
            return false;
        }
        this._queue.push(message.slice(0));
        this._startQueueRunner();
        return false;
    }

    return this._send(message);
};

/**
 * Internal function to start the Queue Runner timer
 * @private
 */
NativeWebSockets.prototype._startQueueRunner = function() {
    if (!this._queueRunner && this.state() !== this.OPEN && this._queue.length) {
        var self = this;
        this._queueRunner = setTimeout(function() {
            self._queueRunner = null;
            self.send(null);
        }, 250);
    }
};

/**
 * Internal function that actually sends the message
 * @param message {String|ArrayBuffer} - Message to send
 * @private
 */
NativeWebSockets.prototype._send = function(message) {
    try {
        if (message instanceof ArrayBuffer || message instanceof Uint8Array || Array.isArray(message)) {
            var view;
            if (message instanceof ArrayBuffer) {
                view = new Uint8Array(message);
            } else {
                view = message;
            }
            //noinspection JSUnresolvedFunction,JSUnresolvedVariable
            var buffer = java.lang.reflect.Array.newInstance(java.lang.Byte.class.getField("TYPE").get(null), view.length);
            for (var i = 0; i < view.length; i++) {
                //noinspection JSUnresolvedFunction,JSUnresolvedVariable
                java.lang.reflect.Array.setByte(buffer, i, byte(view[i]));
            }
            this._socket.send(buffer);
        } else {
            this._socket.send(message);
        }
    } catch (err) {
        // Websocket is probably diconnected; so put the back at the top of the message queue...
        if (this._browser) { return false; }

        this._queue.unshift(message);
        this._startQueueRunner();

        return false;
    }
    return true;
};

/**
 * Returns the state of the Connection
 * @returns {Number} - returns this.NOT_YET_CONNECTED, .OPEN, .CLOSING or .CLOSED
 */
NativeWebSockets.prototype.state = function() {
    //noinspection JSUnresolvedFunction
  switch (this._socket.getReadyState()) {
    case org.java_websocket.enums.ReadyState.NOT_YET_CONNECTED:
          return this.NOT_YET_CONNECTED;
      case org.java_websocket.enums.ReadyState.OPEN:
          return this.OPEN;
      case org.java_websocket.enums.ReadyState.CLOSING:
          return this.CLOSING;
      case org.java_websocket.enums.ReadyState.CLOSED:
          return this.CLOSED;
      default:
          throw new Error("getReadyState returned invalid value");
  }
};

/**
 * Is the connection open
 * @returns {boolean} - true if the connection is open
 */
NativeWebSockets.prototype.isOpen = function() {
    return this._socket.isOpen();
};

/**
 * Is the connection closed
 * @returns {boolean} - true if the connection is closed
 */
NativeWebSockets.prototype.isClosed = function() {
    return this._socket.isClosed();
};

/**
 * Is the connection is in the process of closing
 * @returns {boolean} - true if closing
 */
NativeWebSockets.prototype.isClosing = function() {
    return this._socket.isClosing();
};

/**
 * Returns the Remote address
 * @returns {String} - the address
 */
NativeWebSockets.prototype.getRemoteSocketAddress = function() {
    return this._socket.getRemoteSocketAddress();
};

/**
 * This returns the current protocol
 */
Object.defineProperty(NativeWebSockets.prototype, "protocol", {
    get: function () {
        return this._protocol;
    },
    enumerable: true,
    configurable: true
});

/**
 * This returns the current readyState
 */
Object.defineProperty(NativeWebSockets.prototype, "readyState", {
    get: function () {
        var s = this.state();
        // No such -1 in the web spec
        if (s === -1) { return 0; }
        return s;
    },
    enumerable: true
});

/**
 * This returns the URL you connected too
 */
Object.defineProperty(NativeWebSockets.prototype, "url", {
    get: function () {
        return this._url;
    },
    enumerable: true
});

/**
 * This returns the amount of data buffered
 */
Object.defineProperty(NativeWebSockets.prototype, "bufferedAmount", {
    get: function () {
        // Technically I should return the actual amount of data; but as an optimization we are just returning the number of entries
        // as this will allow the developer to know there is still data in the queue.
        return this._queue.length;
    },
    enumerable: true
});

/**
 * This returns any extensions running.
 */
Object.defineProperty(NativeWebSockets.prototype, "extensions", {
    get: function () {
        return "";
    },
    enumerable: true
});

/**
 * This returns true because it is on the ANDROID platform
 */
Object.defineProperty(NativeWebSockets.prototype, "android", {
    get: function () {
        return true;
    },
    enumerable: true
});

/**
 * This is a list standardized Close Codes
 * @type {Number}
 */
NativeWebSockets.CLOSE_CODE = {NORMAL: 1000, GOING_AWAY: 1001, PROTOCOL_ERROR: 1002, REFUSE: 1003, NOCODE: 1005, ABNORMAL_CLOSE:1006, NO_UTF8: 1007, POLICY_VALIDATION: 1008, TOOBIG: 1009, EXTENSION: 1010, UNEXPECTED_CONDITION: 1011, SERVICE_RESTART: 1012, TRY_AGAIN_LATER: 1013, BAD_GATEWAY: 1014, TLS_ERROR: 1015, NEVER_CONNECTED: -1, BUGGYCLOSE: -2, FLASHPOLICY: -3};

/**
 * This is the NOT_YET_CONNECTED value
 * @type {number}
 */
NativeWebSockets.prototype.NOT_YET_CONNECTED = 0;

/**
 * This is the OPEN value
 * @type {number}
 */
NativeWebSockets.prototype.OPEN = 1;

/**
 * This is the CLOSING value
 * @type {number}
 */
NativeWebSockets.prototype.CLOSING = 2;

/**
 * This is the CLOSED value
 * @type {number}
 */
NativeWebSockets.prototype.CLOSED = 3;

module.exports = NativeWebSockets;


function UTF8ArrayToStr(data) {
    var result='', count=data.length;
    var i=0, c1, c2, c3;

    while(i < count) {
        c1 = data[i++];
        switch(c1 >> 4)
        {
            case 12: // 10xx xxxx
            case 13: // 110x xxxx
                c2 = (data[i++] & 0x3F);
                result += String.fromCharCode(((c1 & 0x1F) << 6) | c2);
                break;
            case 14: // 1110 xxxx
                c2 = (data[i++] & 0x3F) << 6;
                c3 = (data[i++] & 0x3F);
                result += String.fromCharCode(((c1 & 0x0F) << 12) | c2 | c3);
                break;
            default: // 0xxxxxxx
                result += String.fromCharCode(c1);
            break;

        }
    }

    return result;
}
