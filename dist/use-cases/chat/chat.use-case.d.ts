import { Chat } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { CreateChatDto } from '../../core/dtos';
import { ChatFactoryService } from './chat-factory.service';
export declare class ChatUseCases {
    private dataServices;
    private chatFactoryService;
    constructor(dataServices: IDataServices, chatFactoryService: ChatFactoryService);
    getAllChats(): Promise<Chat[]>;
    getChatById(id: any): Promise<Chat>;
    createChat(createChatDto: CreateChatDto): Promise<Chat>;
}
