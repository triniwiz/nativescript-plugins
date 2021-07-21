import {Controller, Post, Body, Res, Query, Request} from '@nestjs/common';
import {PusherService} from "./pusher.service";

@Controller('pusher')
export class PusherController {
  constructor(private readonly pusherService: PusherService) {
  }
  @Post('auth')
  handleAuth(@Body() body, @Res() res, @Query() query, @Request() req) {
    const socketId = body.socket_id;
    const channel = body.channel_name;
    const presenceData = {
      user_id: 'unique_user_id_868',
      user_info: {name: `${query.first} ${query.last}`, twitter_id: '@triniwiz', place: req.headers.place},
    };
    const auth = this.pusherService.pusher.authenticate(socketId, channel, presenceData);
    return res(auth);
  }
}
