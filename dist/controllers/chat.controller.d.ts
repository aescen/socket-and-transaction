import { CreateChatDto } from '../core/dtos';
import { ChatUseCases } from '../use-cases/chat/chat.use-case';
export declare class ChatController {
    private chatUseCases;
    constructor(chatUseCases: ChatUseCases);
    getAll(): Promise<import("../core").Chat[]>;
    getById(id: any): Promise<import("../core").Chat>;
    createChat(chatDto: CreateChatDto): Promise<import("../core").Chat>;
}
