import {ConnectionStatus} from './enums';

export interface ChannelEventMap {
  binding: any;
  callback: Function;
}

export abstract class NSCAuthorizerBase {
  readonly callback: (channelName: string, socketID: string) => void

  constructor(callback: (channelName: string, socketID: string) => void) {
    this.callback = callback;
  }

  abstract completed(value?: string, error?: string);
}


export interface Options {
  activityTimeout?: number;
  cluster?: string;
  forceTLS?: boolean;
  host?: string;
  pongTimeout?: number;
  port?: number;
  autoReconnect?: boolean;
  authEndpoint?: string;
  authorizer?: NSCAuthorizerBase;
  wsPort?: number;
  wssPort?: number;
  auth?: { headers?: Object, params?: Object }
}

export interface ConnectionStatusEvent {
  current: ConnectionStatus;
  previous: ConnectionStatus;
}
