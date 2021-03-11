import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import { User } from "@modules/Users/infra/typeorm/entities/User";

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
