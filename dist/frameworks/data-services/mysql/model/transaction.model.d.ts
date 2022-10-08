import { User } from './';
export declare class Transaction {
    id: number;
    from: User;
    to: User;
    amount: number;
    status: string;
}
