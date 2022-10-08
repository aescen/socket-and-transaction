import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export type UserDocument = User & Document;

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  name: string;

  @Column()
  balance: number;
}
