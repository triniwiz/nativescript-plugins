/*****************************************************************************************
 * (c) 2015-2017, Master Technology
 * Licensed under the MIT license or contact me for a support, changes, enhancements,
 * and/or if you require a commercial licensing
 *
 * Any questions please feel free to email me or put a issue up on github
 *
 * Version 1.4.0                                             Nathan@master-technology.com
 ****************************************************************************************/
"use strict";

/* global require, module, global */

/**
 * This creates an "Browser" based Event for the Browser based WebSockets
 * @param values {Object} - Object list of additional key items
 * @constructor
 */
var BrowserWebSocketsEvent = function(values) {
    Object.defineProperty(this, "bubbles", {
        get: function () { return false; },
        enumerable: true
    });
    Object.defineProperty(this, "cancelBubble", {
        get: function () { return false; },
        enumerable: true
    });
    Object.defineProperty(this, "cancelable", {
        get: function () { return false; },
        enumerable: true
    });
    Object.defineProperty(this, "defaultPrevented", {
        get: function () { return false; },
        enumerable: true
    });
    Object.defineProperty(this, "eventPhase", {
        get: function () { return 0; },
        enumerable: true
    });
    Object.defineProperty(this, "path", {
        get: function () { return []; },
        enumerable: true
    });
    Object.defineProperty(this, "returnValue", {
        get: function () { return true; },
        enumerable: true
    });
    this.timeStamp = Date.now();
    Object.defineProperty(this, "timeStamp", { enumerable: true });

    for (var key in values) {
        if (values.hasOwnProperty(key)) {
            this[key] = values[key];
            Object.defineProperty(this, key, { enumerable: true });
        }
    }
};

//noinspection JSUnusedGlobalSymbols
/**
 * This is the dummy preventDefault Function
 * @returns {boolean}
 */
BrowserWebSocketsEvent.prototype.preventDefault = function() { return false; };

//noinspection JSUnusedGlobalSymbols
/**
 * This is the dummy stopImmediatePropagation event
 * @returns {boolean}
 */
BrowserWebSocketsEvent.prototype.stopImmediatePropagation = function() { return false;};

//noinspection JSUnusedGlobalSymbols
/**
 * This is the dummy stopPropagation event
 * @returns {boolean}
 */
BrowserWebSocketsEvent.prototype.stopPropagation = function() { return false; };

// Export the Event so that we can use it in the webSocket code
module.exports = {Event: BrowserWebSocketsEvent};

/**
 * This is the Browser Based WebSocket creation factory
 * @param url {string} - URL to connect to
 * @param protocols {Array|String} - Protocols supported
 * @returns {*} - WebSocket
 * @constructor
 */
var BrowserWebSockets = function(url, protocols) {
    var ws;
    var WS = require("./websockets");
    if (protocols === null || protocols === undefined) {
        ws =  new WS(url, {browser: true});
    } else {
        if (!Array.isArray(protocols)) {
            protocols = [protocols];
        }
        ws = new WS(url, {browser: true, protocols: protocols});
    }

    // Create the Browser based additional properties
    ws.binaryType = "arraybuffer";
    ws.onclose = null;
    ws.onerror = null;
    ws.onmessage = null;
    ws.onopen = null;

    // Switch notifiers
    ws._notify = ws._notifyBrowser;

    // To make the WS look like a normal Browser webSocket, we hide all the internal private variables
    // for some reason we have to hide the _notify on the prototype because of the above re-assignment of _notify = _notifyBrowser..
    //noinspection JSUnresolvedVariable
    Object.defineProperty(WS.prototype, "_notify", {enumerable: false});

    Object.defineProperty(ws, "_notify", {enumerable: false});
    Object.defineProperty(ws, "_callbacks", {enumerable: false});
    Object.defineProperty(ws, "_protocol", {enumerable: false});
    Object.defineProperty(ws, "_browser", {enumerable: false});
    Object.defineProperty(ws, "_socket", {enumerable: false});
    Object.defineProperty(ws, "_url", {enumerable: false});
    Object.defineProperty(ws, "_hasOpened", {enumerable: false});
    Object.defineProperty(ws, "_timeout", {enumerable: false});
    Object.defineProperty(ws, "_proxy", {enumerable: false});

    // We have to open this WS automatically, BUT we want this to fire after the rest of the users code does so that the user can attach his events
    setTimeout(function() {ws.open();}, 250);

    // Return the webSocket
    return ws;
};

/**
 * CONNECTING value
 * @type {number}
 */
BrowserWebSockets.CONNECTING = 0;

/**
 * OPEN value
 * @type {number}
 */
BrowserWebSockets.OPEN = 1;

/**
 * CLOSING value
 * @type {number}
 */
BrowserWebSockets.CLOSING = 2;

/**
 * CLOSED value
 * @type {number}
 */
BrowserWebSockets.CLOSED = 3;

// We attach to the GLOBAL object, so this is not available everywhere.
global.WebSocket = BrowserWebSockets;