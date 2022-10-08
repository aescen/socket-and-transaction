import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { User } from './';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: true,
    ref: 'User',
  })
  from: User;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    required: true,
    ref: 'User',
  })
  to: User;

  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  status: string;
}
export const TransactionSchema = SchemaFactory.createForClass(Transaction);
