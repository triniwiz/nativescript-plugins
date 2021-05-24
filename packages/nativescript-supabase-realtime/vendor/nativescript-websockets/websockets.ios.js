/*****************************************************************************************
 * (c) 2015-2017, Master Technology
 * Licensed under the MIT license or contact me for a support, changes, enhancements,
 * and/or if you require a commercial licensing
 *
 * Any questions please feel free to email me or put a issue up on github
 *
 * Version 1.5.2                                             Nathan@master-technology.com
 ****************************************************************************************/
"use strict";

/* global require, NSMutableURLRequest, NSURL, PSWebSocket, module */


var commonWebSockets = require("./websockets-common");

//noinspection JSUnusedGlobalSymbols,JSCheckFunctionSignatures,JSUnresolvedVariable,JSUnusedLocalSymbols

/**
 * This is our extended class that gets the messages back from the Native IOS class
 * We use a thin shell to just facilitate communication from IOS to our JS code
 * We also use this class to try and standardize the messages
 */
var _WebSocket = NSObject.extend({
    wrapper: null,

    webSocketDidOpen: function(webSocket) {
        if (!this.wrapper) {
            return;
        }
        this.wrapper._notify("open", [this.wrapper]);
    },
    webSocketDidReceiveMessage: function(webSocket, message) {
        if (!this.wrapper) {
            return;
        }
        if (Object.prototype.toString.apply(message) === "[object NSConcreteMutableData]" || message instanceof NSMutableData) {
            let buf = new ArrayBuffer(message.length);
            message.getBytes(buf);
            message = buf;
        }

        this.wrapper._notify("message", [this.wrapper, message]);
    },
    webSocketDidFailWithError: function(webSocket, err) {
        if (!this.wrapper) {
           return;
        }
        this.wrapper._notify("close", [this.wrapper, 1006, "", false]);
        if (!err || err.code !== 3 && err.code !== 54) {
            this.wrapper._notify("error", [this.wrapper, err]);
        }
    },
    webSocketDidCloseWithCodeReasonWasClean:function(webSocket, code, reason, wasClean)  {
        if (!this.wrapper) {
            return;
        }
        this.wrapper._notify("close", [this.wrapper, code, reason, wasClean]);
    }
},{ protocols: [PSWebSocketDelegate] });

/**
 * This is the Constructor for creating a WebSocket
 * @param url {String} - url to open, "ws://" or "wss://"
 * @param options {Object} - options
 * @constructor
 */
var NativeWebSockets = function(url, options) {
    options = options || {};
    this._hasOpened = false;
    this._callbacks = {open: [], close: [], message: [], error: [], ping: [], pong: [], fragment: [], handshake: []}; // Ping, Pong, fragment, handshake not supported yet on iOS
    this._queue = [];
    this._queueRunner = null;

    if (options.protocols && !Array.isArray(options.protocols)) {
        this._protocols = [options.protocols];
    } else {
        this._protocols = options.protocols || [];
    }
    this._browser = !!options.browser;
    this._timeout = !isNaN(options.timeout) ? options.timeout : -1;
    this._url = url;

    //noinspection JSUnresolvedVariable
    this._proxy = options.proxy;

    //noinspection JSUnresolvedVariable
    this._allowCell = (options.allowCellular !== false);

    this._headers = options.headers || [];
    // Fix an issue: https://github.com/zwopple/PocketSocket/issues/73
    this._headers['Connection'] = "Upgrade";

    this._reCreate()
};

/**
 * This function is used to open and re-open sockets so that you don't have to re-create a whole new websocket class
 * @private
 */
NativeWebSockets.prototype._reCreate = function() {

    //noinspection JSUnresolvedFunction
    var urlRequest = NSMutableURLRequest.requestWithURL(NSURL.URLWithString(this._url));
    urlRequest.allowsCellularAccess = this._allowCell;
    if (this._protocols.length) {
        //noinspection JSUnresolvedFunction
        urlRequest.addValueForHTTPHeaderField(this._protocols.join(" "), "Sec-WebSocket-Protocol");
    }
    for (var name in this._headers) {
        if (!this._headers.hasOwnProperty(name)) continue;
        var value = this._headers[name];
        //noinspection JSUnresolvedFunction
        urlRequest.addValueForHTTPHeaderField(value, name);
    }
    if (this._timeout !== -1) {
        urlRequest.timeoutInterval = this._timeout;
    }

    //noinspection JSUnresolvedFunction
    this._socketWrapper = _WebSocket.alloc().init();
    this._socketWrapper.wrapper = this;

    //noinspection JSUnresolvedFunction
    this._socket = PSWebSocket.clientSocketWithRequest(urlRequest);
    if (this._protocols.length) {
		this._socket.protocol = this._protocols.join(" ");
    }


    this._socket.delegate = this._socketWrapper;
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
                this.onmessage.call(this, eventResult);
            }
            break;
        case 'error':
            eventResult = new commonWebSockets.Event({currentTarget: this, srcElement: this, target: this, type: event, error: data[1], filename: "", lineno: 0});
            if (typeof this.onerror === "function") {
                this.onerror.call(this, eventResult);
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
 * Attach an event to this websocket
 * @param event {string} - Event Type ("message", "open", "close", "error")
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
 * @param event {string} - Event to detach from
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
        if (this.state() >= this.CLOSING) {
            this._socket.delegate = null;
            this._socketWrapper.wrapper = null;
            this._socketWrapper = null;
            this._socket = null;
            this._reCreate();
        } else {
            return;
        }
    }
    this._hasOpened = true;
    this._socket.open();
};

/**
 * This closes your webSocket
 * @param code {Number} - The value to send as the close reason
 * @param message {String} - The message as to why you are closing
 */
NativeWebSockets.prototype.close = function(code, message) {
    if (arguments.length) {
        //noinspection JSUnresolvedFunction
        this._socket.closeWithCodeReason(code, message || "");
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
        for (var i = 0; i < this._queue.length; i++) {
            this._send(this._queue[i]);
        }
        this._queue = [];
        if (this._queueRunner) {
            clearTimeout(this._queueRunner);
            this._queueRunner = null;
        }
    }

    // You shouldn't be sending null/undefined messages; but if you do -- we won't error out.
    if (message === null || message === undefined) {
        this._startQueueRunner();
        return false;
    }

    // If the socket isn't open, or we have a queue length; we are just going to queue this message also
    if (state !== this.OPEN || this._queue.length) {
        if (this._browser) {
            return false;
        }
        this._queue.push(message.slice(0));
        this._startQueueRunner();
        return false;
    }

    this._send(message);
    return true;
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
    this._socket.send(message);
};

/**
 * Returns the state of the Connection
 * @returns {Number} - returns this.NOT_YET_CONNECTED, .CONNECTING, .OPEN, .CLOSING or .CLOSED
 */
NativeWebSockets.prototype.state = function() {
    if (!this._hasOpened) {
        return this.NOT_YET_CONNECTED;
    }
    return (this._socket.readyState);
};

/**
 * Is the connection open
 * @returns {boolean} - true if the connection is open
 */
NativeWebSockets.prototype.isOpen = function() {
    return this._socket.readyState === this.OPEN;
};

/**
 * Is the connection closed
 * @returns {boolean} - true if the connection is closed
 */
NativeWebSockets.prototype.isClosed = function() {
    return this._socket.readyState === this.CLOSED;
};

/**
 * Is the connection is in the process of closing
 * @returns {boolean} - true if closing
 */
NativeWebSockets.prototype.isClosing = function() {
    return this._socket.readyState === this.CLOSING;
};

/**
 * Is the connection currently connecting
 * @returns {boolean} - true if connecting
 */
NativeWebSockets.prototype.isConnecting = function() {
    return this._socket.readyState === this.CONNECTING;
};

/**
 * Returns the Remote address
 * @returns {String} - the address
 */
NativeWebSockets.prototype.getRemoteSocketAddress = function() {
    //noinspection JSUnresolvedVariable
    return this._socket.remoteHost;
};

/**
 * This returns the current protocol
 */
Object.defineProperty(NativeWebSockets.prototype, "protocol", {
    get: function () {
        if (!this._socket) {
            return "";
        }
        return this._socket.protocol;
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
 * This returns true because it is on the IOS platform
 */
Object.defineProperty(NativeWebSockets.prototype, "ios", {
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
NativeWebSockets.prototype.NOT_YET_CONNECTED = -1;

/**
 * This is the CONNECTING value
 * @type {number}
 */
NativeWebSockets.prototype.CONNECTING =  0;
NativeWebSockets.CONNECTION = 0;

/**
 * This is the OPEN value
 * @type {number}
 */
NativeWebSockets.prototype.OPEN = 1;
NativeWebSockets.OPEN = 1;

/**
 * This is the CLOSING value
 * @type {number}
 */
NativeWebSockets.prototype.CLOSING = 2;
NativeWebSockets.CLOSING = 2;
/**
 * This is the CLOSED value
 * @type {number}
 */
NativeWebSockets.prototype.CLOSED = 3;
NativeWebSockets.CLOSED = 3;

module.exports = NativeWebSockets;
