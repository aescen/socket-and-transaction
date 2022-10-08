import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateChatDto {
  id?: any;

  @IsString()
  @IsNotEmpty()
  senderId: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}

export class UpdateChatDto extends PartialType(CreateChatDto) {}
