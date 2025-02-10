import {DemoSharedBase} from '../utils';
import {SocketIO} from '@triniwiz/nativescript-socketio';
import {Frame} from "@nativescript/core";

export class DemoSharedNativescriptSocketio extends DemoSharedBase {
  item: '';
  username: 'Osei';
  server = global.isAndroid ? 'http://10.0.2.2:3000?test=123&platform=android' : 'http://localhost:3000?test=123&platform=ios';
  socketIO: SocketIO;
  chatNS;

  constructor() {
    super();
    this.socketIO = new SocketIO(this.server, {
      cookie: `username=Osei;`,
      transports: ['websocket'],
      extraHeaders: {
        access_token: 'TestToken-X'
      }
    });

    this.socketIO.on('connect', () => {
      console.log('connected');
    });

    this.socketIO.on('disconnect', () => {
      console.log('disconnect');
    });

    this.socketIO.on('reconnect', () => {
      console.log('reconnect');
    });

    this.socketIO.on('ping', () => {
      console.log('socket:ping');
    });

    this.socketIO.on('pong', () => {
      console.log('socket:pong');
    });

    this.socketIO.on('reconnectAttempt', () => {
      console.log('reconnectAttempt');
    });
    

    this.socketIO.on('login', (data) => {
      console.log('Login');
      Frame.topmost().navigate({
        moduleName: '~/plugin-demos/nativescript-socketio-src/main',
        context: {username: this.username, socket: this.socketIO.instance}
      });
    });

    this.socketIO.connect();

    this.chatNS = this.socketIO.joinNamespace('/chat');
    if (this.chatNS && !this.chatNS.connected) {
      this.chatNS.connect();
    }

  }

  join(args) {
    this.socketIO.emit('add user', {username: this.username}, (ack) => {
      console.log('ack', ack);
    });
  }
}
