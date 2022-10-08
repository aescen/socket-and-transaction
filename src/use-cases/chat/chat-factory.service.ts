import { Injectable } from '@nestjs/common';
import { Chat } from '../../core/entities';
import { CreateChatDto, UpdateChatDto } from '../../core/dtos';

@Injectable()
export class ChatFactoryService {
  createNewChat(createChatDto: CreateChatDto) {
    const newChat = new Chat();
    newChat.message = createChatDto.message;

    return newChat;
  }

  getChat(updateChatDto: UpdateChatDto) {
    const newChat = new Chat();
    newChat.message = updateChatDto.message;

    return newChat;
  }
}
