import { Board } from 'src/boards/board.entity';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  // eager: true로 설정하면 user를 찾을 때 같이 board를 가져옴
  @OneToMany((type) => Board, (board) => board.user, { eager: true })
  boards: Board[];
}
