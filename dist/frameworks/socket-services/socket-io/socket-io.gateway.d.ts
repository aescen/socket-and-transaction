import { IDataServices, ISocketGateways } from '../../../core/abstracts';
import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Chat } from './../../data-services/mongo/model/chat.model';
export declare class SocketIOGateway implements ISocketGateways, OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    private dataServices;
    server: Server;
    constructor(dataServices: IDataServices);
    handleMessage(chat: Chat): void;
    afterInit(server: Server): void;
    handleDisconnect(client: Socket): void;
    handleConnection(client: Socket, ...args: any[]): void;
}
