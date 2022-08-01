import {NSCPusherBase, NSCPusherChannelBase, NSCPusherConnectionBase, TNSAuthorizerBase} from './common';
import {ChannelEventMap, Options, ConnectionStatusEvent} from './interfaces';
import {ConnectionStatus} from './enums';

export {ChannelEventMap, Options, ConnectionStatusEvent, ConnectionStatus};


export declare class NSCPusher extends NSCPusherBase {
  /**
   * Native ios (instance)[https://github.com/pusher/pusher-websocket-swift]
   */
  ios: any;
  /**
   * Native android (instance)[https://github.com/pusher/pusher-websocket-java]
   */
  android: any;

  constructor(apiKey: string, options?: Options);

  connection: NSCPusherConnectionBase;

  connect(): void;

  disconnect(): void;

  subscribe(channelName: string): NSCPusherChannelBase;

  unsubscribe(channelName: string): void;

  unsubscribeAll(): void;

  bind(callback: Function): void;

  unbind(callback: Function): void;
}

export declare class TNSAuthorizer extends TNSAuthorizerBase {
  completed(value?: string)
  completed(value?: string, error?: string)
}
