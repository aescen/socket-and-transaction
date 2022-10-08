import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @OneToOne(() => User, {
    eager: true,
  })
  @JoinColumn()
  from: User;

  @OneToOne(() => User, {
    eager: true,
  })
  @JoinColumn()
  to: User;

  @Column()
  amount: number;

  @Column()
  status: string;
}
