import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  senderId: string;

  @Column()
  message: string;
}
