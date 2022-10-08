import { Schema as MongooseSchema } from 'mongoose';
import { User } from './';
export declare type TransactionDocument = Transaction & Document;
export declare class Transaction {
    from: User;
    to: User;
    amount: number;
    status: string;
}
export declare const TransactionSchema: MongooseSchema<import("mongoose").Document<Transaction, any, any>, import("mongoose").Model<import("mongoose").Document<Transaction, any, any>, any, any, any>, any>;
