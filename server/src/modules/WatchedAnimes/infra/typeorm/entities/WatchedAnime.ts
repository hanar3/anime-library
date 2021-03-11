import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import Anime from "@modules/Animes/infra/typeorm/entities/Anime";
import { User } from "@modules/Users/infra/typeorm/entities/User";

@Entity({ name: "watchedAnimes" })
export default class WatchedAnime {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @ManyToOne(() => Anime, (anime) => anime.id, { onDelete: "CASCADE" })
  anime: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: "NO ACTION" })
  user: number;

  @Column()
  rating: number;

  @Column()
  watchedEpisodes: number;

  @Column()
  status: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
