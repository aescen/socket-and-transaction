import { Chat } from '../../core/entities';
import { CreateChatDto, UpdateChatDto } from '../../core/dtos';
export declare class ChatFactoryService {
    createNewChat(createChatDto: CreateChatDto): Chat;
    getChat(updateChatDto: UpdateChatDto): Chat;
}
