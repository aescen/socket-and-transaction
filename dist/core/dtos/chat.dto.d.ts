export declare class CreateChatDto {
    id?: any;
    senderId: string;
    message: string;
}
declare const UpdateChatDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateChatDto>>;
export declare class UpdateChatDto extends UpdateChatDto_base {
}
export {};
