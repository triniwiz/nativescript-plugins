import {TNSPusherBase, TNSPusherChannelBase, TNSPusherConnectionBase, TNSAuthorizerBase} from './common';
import {ChannelEventMap, Options, ConnectionStatusEvent} from './interfaces';
import {ConnectionStatus} from './enums';

export {ChannelEventMap, Options, ConnectionStatusEvent, ConnectionStatus};


export declare class TNSPusher extends TNSPusherBase {
  /**
   * Native ios (instance)[https://github.com/pusher/pusher-websocket-swift]
   */
  ios: any;
  /**
   * Native android (instance)[https://github.com/pusher/pusher-websocket-java]
   */
  android: any;

  constructor(apiKey: string, options?: Options);

  connection: TNSPusherConnectionBase;

  connect(): void;

  disconnect(): void;

  subscribe(channelName: string): TNSPusherChannelBase;

  unsubscribe(channelName: string): void;

  unsubscribeAll(): void;

  bind(callback: Function): void;

  unbind(callback: Function): void;
}

export declare class TNSAuthorizer extends TNSAuthorizerBase {
  completed(value?: string)
  completed(value?: string, error?: string)
}
