import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Exclude } from 'class-transformer';
import Review from "@modules/Reviews/infra/typeorm/entities/Review";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

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
