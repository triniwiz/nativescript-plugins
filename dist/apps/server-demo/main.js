(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/server-demo/src/main.ts":
/*!**************************************!*\
  !*** ./apps/server-demo/src/main.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const express = __webpack_require__(/*! express */ "express");
const bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
const cors = __webpack_require__(/*! cors */ "cors");
const Pusher = __webpack_require__(/*! pusher */ "pusher");
const pusher = new Pusher({
    appId: 'APP_ID',
    key: 'APP_KEY',
    secret: 'APP_SECRET',
    cluster: 'APP_CLUSTER',
    useTLS: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.post('/pusher/auth', function (req, res) {
    const socketId = req.body.socket_id;
    const channel = req.body.channel_name;
    const presenceData = {
        user_id: 'unique_user_id_868',
        user_info: { name: `${req.query.first} ${req.query.last}`, twitter_id: '@triniwiz', place: req.headers.place },
    };
    const auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});
const port = process.env.PORT || 5000;
app.listen(port);
const io = __webpack_require__(/*! socket.io */ "socket.io")(3000, {
    path: "/",
    serveClient: true,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});
const nspChat = io.of('/chat');
const nspDefault = io.of('/');
let messageList = [];
let userList = [];
io.on('connection', function (socket) {
    console.log('User Connected');
    socket.emit('connected', 'Welcome');
    let addedUser = false;
    console.log('connection query params', socket.handshake.query);
    console.log('connection headers', socket.request.headers);
    console.log('connection cookies', socket.request.headers.cookie);
    socket.on('add user', function (data, cb) {
        if (addedUser)
            return;
        addedUser = true;
        socket.username = data.username;
        console.log('Username: ', data.username);
        userList.push({ username: data.username });
        socket.emit('login', { userList: userList });
        socket.broadcast.emit('user joined', {
            username: data.username
        });
        cb(true);
        console.log('add user ack');
    });
    socket.on('new message', function (data, cb) {
        cb(true);
        console.log(data);
        messageList.push(data);
        socket.broadcast.emit('new message', data);
    });
    socket.on('getUsers', function () {
        socket.emit('getUsers', userList);
    });
    socket.on('user count', function () {
        socket.emit('user count', userList.length);
    });
    socket.on('getMessages', function () {
        socket.emit('getMessages', messageList);
    });
    socket.on('disconnect', function () {
        console.log('User Disconnected');
        if (addedUser) {
            for (let i = 0; i < userList.length; i++) {
                if (socket.username === userList[i].username) {
                    userList.splice(i, 1);
                }
            }
            socket.broadcast.emit('user left', {
                username: socket.username
            });
        }
    });
});
nspDefault.on('connect', (socket) => {
    console.log('Joined Namespace: /');
    socket.on('disconnect', () => {
        console.log('Left Namespace: /');
    });
});
nspChat.on('connect', (socket) => {
    console.log('Joined Namespace: /chat');
    socket.on('disconnect', () => {
        console.log('Left Namespace: /chat');
    });
});
/* WebRTC 1O1 */
const wio = __webpack_require__(/*! socket.io */ "socket.io")(3001, {
    path: "/",
    serveClient: true,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});
const wMessageList = [];
let userMap = new Map();
const lobby = 'lobby';
function getOtherUser(id) {
    const keys = Array.from(userMap.keys());
    const filtered = keys.filter((value) => {
        if (value.indexOf(id) === -1) {
            return value;
        }
    });
    return userMap.get(filtered[0]);
}
wio.on('connection', function (socket) {
    socket.on('disconnect', function () {
        userMap.delete(socket.id);
    });
    userMap.set(socket.id, "");
    console.log('User Connected: -> ' + socket.id);
    socket.emit('connected', 'Welcome');
    socket.on('init', function (data) {
        socket.join(data.id);
        userMap.set(socket.id, data.id);
    });
    socket.on('call', function (data) {
        console.log('call from', data.from);
        const otherId = getOtherUser(socket.id);
        io.in(otherId).emit('call:incoming', {
            from: data.from,
            to: otherId,
            sdp: data.sdp
        });
    });
    socket.on('iceCandidate', function (data) {
        console.log('call:iceCandidate', data.from);
        const otherId = getOtherUser(socket.id);
        io.in(otherId).emit('call:iceCandidate', Object.assign({}, data, {
            to: otherId
        }));
    });
    socket.on('answer', function (data) {
        console.log('call:answer', data.from);
        const otherId = getOtherUser(socket.id);
        io.in(otherId).emit('call:answer', {
            from: data.from,
            sdp: data.sdp,
            to: otherId
        });
    });
    socket.on('answered', function (data) {
        console.log('call:answered', data.from);
        const otherId = getOtherUser(socket.id);
        io.in(otherId).emit('call:answered', {
            from: data.from,
            sdp: data.sdp,
            to: otherId
        });
    });
});
const wio1 = __webpack_require__(/*! socket.io */ "socket.io")(3002, {
    path: "/",
    serveClient: true,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});
const wio1NspChat = wio1.of('/chat');
const wio1NspDefault = wio1.of('/');
let wio1MessageList = [];
let wio1UserList = [];
wio1.on('connection', function (socket) {
    console.log('User Connected');
    socket.emit('connected', 'Welcome');
    let addedUser = false;
    socket.on('add user', function (data) {
        if (addedUser)
            return;
        addedUser = true;
        socket.username = data.username;
        console.log('Username: ', data.username);
        wio1UserList.push({
            username: data.username
        });
        socket.emit('login', {
            userList: wio1UserList
        });
        socket.broadcast.emit('user joined', {
            username: data.username
        });
        socket.join(data.username);
    });
    socket.on('call', function (data) {
        console.log('call from', data.from);
        console.log('call to', data.to);
        io.sockets.in(data.to).emit('call:incoming', data);
    });
    socket.on('iceCandidate', function (data) {
        io.sockets.in(data.to).emit('call:iceCandidate', data);
    });
    socket.on('answer', function (data) {
        console.log('answer from', data.from);
        console.log('answer to', data.to);
        io.sockets.in(data.to).emit('call:answer', data);
    });
    socket.on('answered', function (data) {
        console.log('answer from', data.from);
        console.log('answer to', data.to);
        io.sockets.in(data.to).emit('call:answered', data);
    });
    socket.on('new message', function (data, cb) {
        cb(true);
        console.log(data);
        wio1MessageList.push(data);
        socket.broadcast.emit('new message', data);
    });
    socket.on('getUsers', function () {
        socket.emit('getUsers', wio1UserList);
    });
    socket.on('user count', function () {
        socket.emit('user count', wio1UserList.length);
    });
    socket.on('getMessages', function () {
        socket.emit('getMessages', wio1MessageList);
    });
    socket.on('disconnect', function () {
        console.log('User Disconnected');
        if (addedUser) {
            for (let i = 0; i < wio1UserList.length; i++) {
                if (socket.username === wio1UserList[i].username) {
                    wio1UserList.splice(i, 1);
                }
            }
            socket.broadcast.emit('user left', {
                username: socket.username
            });
            socket.emit('getUsers', wio1UserList);
        }
    });
});
wio1NspDefault.on('connect', (socket) => {
    console.log('Joined Namespace: /');
    socket.on('disconnect', () => {
        console.log('Left Namespace: /');
    });
});
wio1NspChat.on('connect', (socket) => {
    console.log('Joined Namespace: /chat');
    socket.on('disconnect', () => {
        console.log('Left Namespace: /chat');
    });
});


/***/ }),

/***/ 0:
/*!********************************************!*\
  !*** multi ./apps/server-demo/src/main.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/triniwiz/Desktop/stuff/plugins/apps/server-demo/src/main.ts */"./apps/server-demo/src/main.ts");


/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "pusher":
/*!*************************!*\
  !*** external "pusher" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("pusher");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map