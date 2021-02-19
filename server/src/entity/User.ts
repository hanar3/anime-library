import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Review from "./Review";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: number;

  @UpdateDateColumn()
  updatedAt: number;

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
