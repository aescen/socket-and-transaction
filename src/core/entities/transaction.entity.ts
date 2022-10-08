import { User } from './';

export class Transaction {
  from: User;
  to: User;
  amount: number;
  status: string;
}
