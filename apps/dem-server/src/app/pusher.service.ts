import {Injectable} from "@nestjs/common";

const Pusher = require('pusher');

@Injectable()
export class PusherService {
  readonly pusher: any;

  constructor() {
    this.pusher = new Pusher({
      appId: 'APP_ID',
      key: 'APP_KEY',
      secret: 'APP_SECRET',
      cluster: 'APP_CLUSTER',
      useTLS: true,
    });
  }
}
