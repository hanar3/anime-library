import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from 'class-transformer';

import Review from "../../Reviews/entity/Review";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ type: "varchar", nullable: true })
  statusMessage: string;

  @Column()
  @Exclude()
  password: string;

  @CreateDateColumn()
  createdAt: number;

  @UpdateDateColumn()
  updatedAt: number;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
