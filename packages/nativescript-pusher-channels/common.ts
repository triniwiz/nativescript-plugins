import { ConnectionStatus } from './enums';

export * from './interfaces';
export * from './enums';

export enum InternalPusherEvents {
  Error = 'pusher:error',
  Ping = 'pusher:ping',
  Pong = 'pusher:pong'
}

export abstract class TNSPusherBase {
  /**
   * Native android pusher instance.
   */
  android: any;
  /**
   * Native ios pusher instance.
   */
  ios: any;

  abstract connect(): void;

  abstract disconnect(): void;

  abstract subscribe(
    channelName: string
  ): TNSPusherChannelBase;

  abstract unsubscribe(channelName: string): void;

  abstract bind(callback: Function): this;

  abstract unbind(callback: Function): void;

  abstract unsubscribeAll(): void;
}

export abstract class TNSPusherConnectionBase {
  abstract bind(event: string, callback: Function);

  get state() {
    return ConnectionStatus.INITIALIZED;
  }
}

export abstract class TNSPusherChannelBase {
  abstract bind(event: string, callback: Function);

  abstract unbind(event: string, callback?: Function);

  abstract trigger(event: string, data: Object);
}
