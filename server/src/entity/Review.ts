import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

import Anime from "./Anime";
import { User } from "./User";

@Entity({ name: "reviews" })
export default class Review {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Anime, (anime) => anime.reviews, { onDelete: "CASCADE" })
  anime: string;

  @ManyToOne(() => User, (user) => user.reviews, { onDelete: "CASCADE" })
  user: number;

  @Column()
  rating: number;
}
