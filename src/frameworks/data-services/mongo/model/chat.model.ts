import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ChatDocument = Chat & Document;

@Schema()
export class Chat {
  @Prop({ required: true })
  senderId: string;

  @Prop({ required: true })
  message: string;
}

export const ChatSchema = SchemaFactory.createForClass(Chat);
