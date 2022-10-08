/// <reference types="mongoose" />
export declare type ChatDocument = Chat & Document;
export declare class Chat {
    senderId: string;
    message: string;
}
export declare const ChatSchema: import("mongoose").Schema<import("mongoose").Document<Chat, any, any>, import("mongoose").Model<import("mongoose").Document<Chat, any, any>, any, any, any>, any>;
