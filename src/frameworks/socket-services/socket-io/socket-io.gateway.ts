import { IDataServices, ISocketGateways } from '../../../core/abstracts';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  OnGatewayInit,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Chat } from './../../data-services/mongo/model/chat.model';

const options = {
  cors: {
    origin: '*',
  },
};
@WebSocketGateway(options)
export class SocketIOGateway
  implements
    ISocketGateways,
    OnGatewayInit,
    OnGatewayConnection,
    OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private dataServices: IDataServices) {}
  @SubscribeMessage('message')
  handleMessage(@MessageBody() chat: Chat): void {
    this.server.emit('message', chat);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  afterInit(server: Server) {
    console.log('Server init.');
  }

  handleDisconnect(client: Socket) {
    console.log(`Disconnected: ${client.id}`);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleConnection(client: Socket, ...args: any[]) {
    console.log(`Connected ${client.id}`);
  }
}
