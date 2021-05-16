const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Pusher = require('pusher');
const pusher = new Pusher({
  appId: 'APP_ID',
  key: 'APP_KEY',
  secret: 'APP_SECRET',
  cluster: 'APP_CLUSTER',
  useTLS: true,
});
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.post('/pusher/auth', function (req, res) {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const presenceData = {
    user_id: 'unique_user_id_868',
    user_info: {name: `${req.query.first} ${req.query.last}`, twitter_id: '@triniwiz', place: req.headers.place},
  };
  const auth = pusher.authenticate(socketId, channel, presenceData);
  res.send(auth);
});
let port = Number(process.env.PORT || 5000);
app.listen(port);

port++;
const io = require("socket.io")(port, {
  path: "/",
  serveClient: true,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

const nspChat = io.of('/chat')
const nspDefault = io.of('/');

let messageList = []
let userList = []

io.on('connection', function (socket) {
  console.log('User Connected');
  socket.emit('connected', 'Welcome');
  let addedUser = false;

  console.log('connection query params', socket.handshake.query);
  console.log('connection headers', socket.request.headers);
  console.log('connection cookies', socket.request.headers.cookie);
  socket.on('add user', function (data, cb) {
    if (addedUser) return;
    addedUser = true;
    socket.username = data.username;
    console.log('Username: ', data.username);
    userList.push({username: data.username});
    socket.emit('login', {userList: userList});
    socket.broadcast.emit('user joined', {
      username: data.username
    });
    cb(true);
    console.log('add user ack');
  })

  socket.on('new message', function (data, cb) {
    cb(true)
    console.log(data)
    messageList.push(data)
    socket.broadcast.emit('new message', data)
  })

  socket.on('getUsers', function () {
    socket.emit('getUsers', userList)
  })
  socket.on('user count', function () {
    socket.emit('user count', userList.length)
  })
  socket.on('getMessages', function () {
    socket.emit('getMessages', messageList)
  })

  socket.on('disconnect', function () {
    console.log('User Disconnected')
    if (addedUser) {
      for (let i = 0; i < userList.length; i++) {
        if (socket.username === userList[i].username) {
          userList.splice(i, 1)
        }
      }
      socket.broadcast.emit('user left', {
        username: socket.username
      })
    }
  })
})

nspDefault.on('connect', (socket) => {
  console.log('Joined Namespace: /')

  socket.on('disconnect', () => {
    console.log('Left Namespace: /')
  })
})

nspChat.on('connect', (socket) => {
  console.log('Joined Namespace: /chat')

  socket.on('disconnect', () => {
    console.log('Left Namespace: /chat')
  })
})


/* WebRTC 1O1 */

port++;
const wio = require("socket.io")(port, {
  path: "/",
  serveClient: true,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

const wMessageList = []
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
  })

});


port++;
const wio1 = require("socket.io")(port, {
  path: "/",
  serveClient: true,
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

const wio1NspChat = wio1.of('/chat')
const wio1NspDefault = wio1.of('/')

let wio1MessageList = []
let wio1UserList = []

wio1.on('connection', function (socket) {
  console.log('User Connected');
  socket.emit('connected', 'Welcome');
  let addedUser = false;

  socket.on('add user', function (data) {
    if (addedUser) return;
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
  })

  socket.on('new message', function (data, cb) {
    cb(true);
    console.log(data);
    wio1MessageList.push(data);
    socket.broadcast.emit('new message', data);
  })

  socket.on('getUsers', function () {
    socket.emit('getUsers', wio1UserList);
  })
  socket.on('user count', function () {
    socket.emit('user count', wio1UserList.length)
  })
  socket.on('getMessages', function () {
    socket.emit('getMessages', wio1MessageList)
  })

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
  })
})

wio1NspDefault.on('connect', (socket) => {
  console.log('Joined Namespace: /')
  socket.on('disconnect', () => {
    console.log('Left Namespace: /')
  })
})

wio1NspChat.on('connect', (socket) => {
  console.log('Joined Namespace: /chat')

  socket.on('disconnect', () => {
    console.log('Left Namespace: /chat')
  })
})



