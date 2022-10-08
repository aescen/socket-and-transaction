export declare class CreateTransactionDto {
    id?: any;
    from: any;
    to: any;
    amount: number;
    status: string;
}
declare const UpdateTransactionDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateTransactionDto>>;
export declare class UpdateTransactionDto extends UpdateTransactionDto_base {
}
export {};
