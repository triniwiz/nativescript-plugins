import {WebSocketGateway} from "@nestjs/websockets";

@WebSocketGateway(null, { namespace: 'events' })
export class WebRTCGateway {}
